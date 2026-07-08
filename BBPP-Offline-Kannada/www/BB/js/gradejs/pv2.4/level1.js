Game.pv2_4level1=function(){};

Game.pv2_4level1.prototype ={
    
    init:function(game)
    {
       _this= this;
        telInitializer.gameIdInit("pv2_4",gradeSelected);
    },

    preload:function()
    {

        if(!window.grade4PV2_4){

            window.grade4PV2_4 = true;

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
            this.load.atlas('nspvg2_4backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/pv2.4/backbtn.json');
            this.load.atlas('nspvg2_4CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/pv2.4/speaker.json');
            this.load.atlas('nspvg2_4starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/pv2.4/starAnim.json');
            this.load.image('nspvg2_4tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
            this.load.image('nspvg2_4navBar',window.baseUrl+'assets/commonAssets/navBar.png');
            this.load.image('nspvg2_4timebg',window.baseUrl+'assets/commonAssets/timebg.png');
           // this.load.image('nspvg2_4topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

            //game assets.
            this.load.image('nspvg2_4background', window.baseUrl+'assets/gradeAssets/pv2.4/BG.png');
            
            this.load.atlas('nspvg2_4_erase',window.baseUrl+'assets/gradeAssets/pv2.4/erase.png' ,window.baseUrl+'json/gradeJson/pv2.4/erase.json');
            this.load.atlas('nspvg2_4_rightmark',window.baseUrl+'assets/gradeAssets/pv2.4/rightmark.png' ,window.baseUrl+'json/gradeJson/pv2.4/rightmark.json');
            this.load.image('nspvg2_4_numBG',window.baseUrl+'assets/gradeAssets/pv2.4/b2.png');
            this.load.atlas('nspvg2_4_numberpad', window.baseUrl+'assets/gradeAssets/pv2.4/calNum.png',window.baseUrl+'json/gradeJson/pv2.4/calNum.json');
                            
            this.load.atlas('nspvg2_4lockerdoor',window.baseUrl+'assets/gradeAssets/pv1.4/d2.png' ,window.baseUrl+'json/gradeJson/pv1.4/d2.json');
            this.load.image('nspvg2_4locker', window.baseUrl+'assets/gradeAssets/pv2.4/locker.png');
            this.load.image('nspvg2_4wheelhands', window.baseUrl+'assets/gradeAssets/pv2.4/wheelhands.png');
            
            this.load.atlas('nspvg2_4white', window.baseUrl+'assets/gradeAssets/pv2.4/box1.png',window.baseUrl+'json/gradeJson/pv2.4/box1.json');
            this.load.atlas('nspvg2_4red', window.baseUrl+'assets/gradeAssets/pv2.4/box2.png',window.baseUrl+'json/gradeJson/pv2.4/box2.json');
            this.load.atlas('nspvg2_4green',window.baseUrl+'assets/gradeAssets/pv2.4/box3.png',window.baseUrl+'json/gradeJson/pv2.4/box3.json');
            this.load.atlas('nspvg2_4blue', window.baseUrl+'assets/gradeAssets/pv2.4/box4.png',window.baseUrl+'json/gradeJson/pv2.4/box4.json');
            this.load.atlas('nspvg2_4yellow', window.baseUrl+'assets/gradeAssets/pv2.4/box5.png',window.baseUrl+'json/gradeJson/pv2.4/box5.json');
                    
             this.load.atlas('nspvg2_4whitebox1', window.baseUrl+'assets/gradeAssets/pv2.4/whitebox1.png',window.baseUrl+'json/gradeJson/pv2.4/whitebox1.json');
            //this.load.atlas('nspvg2_4whitebox2', window.baseUrl+'assets/gradeAssets/pv2.4/whitebox2.png',window.baseUrl+'json/gradeJson/pv2.4/whitebox2.json');
            
            this.load.atlas('nspvg2_4wrongwheel', window.baseUrl+'assets/gradeAssets/pv2.4/wrongwheel.png',window.baseUrl+'json/gradeJson/pv2.4/wrongwheel.json');
            
            }
    },
    
	create:function(game)
    {
		_this.amplify = null;
		
        _this.qArray;
        _this.qArray1;
        
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        
        _this.selectedAns = "";
//        _this.selectedAns1 = "";
//        _this.selectedAns2 = "";
        
        //_this.grpnum=new Array();
        _this.whiteBoxPressed=false;
//         
        _this.wrongAnswer = false;
        
        _this.addingNumPad=false;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        //_this.count2=0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.wmusic;
        _this.wrong = true;
        
        _this.clickSound;
        _this.change = 0;
        
        _this.starsGroup;
   
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no2=0;
        //_this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        _this.check=0;
        
        _this.soundPlayed = false;
        _this.addingNumPad = false;
        
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6,7,8,9];
        _this.qArray = _this.shuffle(_this.qArray);
        
		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'nspvg2_4background');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'nspvg2_4navBar');
        _this.TopBar.name="nspvg2_4navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'nspvg2_4backbtn',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(595,7,'nspvg2_4CommonSpeakerBtn',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'nspvg2_4timebg');
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
         //_this.stopvoice();
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
    
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
        
        _this.grpnum=new Array();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
    	console.log("get"+_this.no11);
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
         
        
    	switch(_this.qArray[_this.no11])
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
            
    	}

        //_this.getVoice();
        
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
   
  /****************************firstquestion************************/
    gotoFirstQuestion:function(){
         _this.questionNo =1;
         _this.no11++;
         console.log("one");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        //_this.wheel.anchor.setTo(0.4915, 0.486);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=true;
        _this.greenStrip1.inputEnabled=true;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=false;
        _this.greenStrip4.inputEnabled=false;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=true;
        _this.yellowStrip2.inputEnabled=true;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=true;
        _this.redStrip3.inputEnabled=true;
        _this.redStrip3.input.useHandCursor = true;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=true;
        _this.blueStrip4.inputEnabled=true;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=4526;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    
   gotoSecondQuestion:function(){
         _this.questionNo =2;
         _this.no11++;
         console.log("second");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
       
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=true;
        _this.greenStrip4.inputEnabled=true;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=true;
        _this.yellowStrip1.inputEnabled=true;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=false;
        _this.yellowStrip2.inputEnabled=false;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=true;
        _this.redStrip2.inputEnabled=true;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=false;
        _this.redStrip3.inputEnabled=false;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=true;
        _this.blueStrip3.inputEnabled=true;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=9297;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
       
       _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    
    gotoThirdQuestion:function(){
         _this.questionNo =3;
         _this.no11++;
         console.log("Three");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=true;
        _this.greenStrip2.inputEnabled=true;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=false;
        _this.greenStrip4.inputEnabled=false;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=false;
        _this.yellowStrip2.inputEnabled=false;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=true;
        _this.yellowStrip3.inputEnabled=true;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=false;
        _this.redStrip3.inputEnabled=false;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=true;
        _this.redStrip4.inputEnabled=true;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=true;
        _this.blueStrip1.inputEnabled=true;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=2614;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    gotoFourthQuestion:function(){
         _this.questionNo =4;
         _this.no11++;
         console.log("Four");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=true;
        _this.greenStrip1.inputEnabled=true;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=false;
        _this.greenStrip4.inputEnabled=false;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=false;
        _this.yellowStrip2.inputEnabled=false;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=true;
        _this.yellowStrip4.inputEnabled=true;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=true;
        _this.redStrip3.inputEnabled=true;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=true;
        _this.blueStrip2.inputEnabled=true;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=1845;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    gotoFifthQuestion:function(){
         _this.questionNo =5;
         _this.no11++;
         console.log("Five");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=true;
        _this.greenStrip4.inputEnabled=true;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=true;
        _this.yellowStrip1.inputEnabled=true;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=false;
        _this.yellowStrip2.inputEnabled=false;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=true;
        _this.redStrip3.inputEnabled=true;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=true;
        _this.blueStrip2.inputEnabled=true;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=8731;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    gotoSixthQuestion:function(){
         _this.questionNo =6;
         _this.no11++;
         console.log("six");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=true;
        _this.greenStrip4.inputEnabled=true;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=false;
        _this.yellowStrip2.inputEnabled=false;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=true;
        _this.yellowStrip3.inputEnabled=true;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=true;
        _this.redStrip2.inputEnabled=true;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=false;
        _this.redStrip3.inputEnabled=false;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=true;
        _this.blueStrip1.inputEnabled=true;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=5669;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    gotoSeventhQuestion:function(){
         _this.questionNo =7;
         _this.no11++;
         console.log("seven");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=true;
        _this.greenStrip3.inputEnabled=true;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=false;
        _this.greenStrip4.inputEnabled=false;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=true;
        _this.yellowStrip2.inputEnabled=true;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=true;
        _this.redStrip1.inputEnabled=true;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=false;
        _this.redStrip3.inputEnabled=false;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=true;
        _this.blueStrip4.inputEnabled=true;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=3122;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    gotoEighthQuestion:function(){
         _this.questionNo =8;
         _this.no11++;
         console.log("eight");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=true;
        _this.greenStrip1.inputEnabled=true;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=false;
        _this.greenStrip4.inputEnabled=false;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=true;
        _this.yellowStrip2.inputEnabled=true;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=false;
        _this.redStrip3.inputEnabled=false;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=true;
        _this.redStrip4.inputEnabled=true;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=false;
        _this.blueStrip1.inputEnabled=false;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=true;
        _this.blueStrip3.inputEnabled=true;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=7456;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    
    gotoNinthQuestion:function(){
         _this.questionNo =9;
         _this.no11++;
         console.log("nine");
           
        _this.locker = _this.add.sprite(480,298,'nspvg2_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(0.9,1);
        
        _this.lockerDoor = _this.add.sprite(455,290,'nspvg2_4lockerdoor');
        _this.lockerDoor.anchor.setTo(0.5);
        _this.lockerDoor.scale.setTo(0.9,1);
        
        _this.whiteBox = _this.add.sprite(643,168,'nspvg2_4whitebox1');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1,1);
        _this.whiteBox.alpha=0;
        
        _this.wheel = _this.add.sprite(640,300,'nspvg2_4wrongwheel');
        _this.wheel.anchor.setTo(0.5);
        _this.wheel.scale.setTo(1,1.1);
        
        _this.wheelhand = _this.add.sprite(638.5,297,'nspvg2_4wheelhands');
        _this.wheelhand.anchor.setTo(0.5);
        _this.wheelhand.scale.setTo(1,1.1);
        
        _this.lockerGroup = _this.add.group();
        _this.lockerGroup.add(_this.locker); 
        _this.lockerGroup.add(_this.lockerDoor);
        _this.lockerGroup.add(_this.whiteBox); 
        _this.lockerGroup.add(_this.wheel);
        _this.lockerGroup.add(_this.wheelhand);
        
        _this.lockerGroup.x = -600;
            _this.tween = _this.add.tween(_this.lockerGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.greenStrip1 = _this.add.sprite(400,180,'nspvg2_4green');
        _this.greenStrip1.anchor.setTo(0.5);
        _this.greenStrip1.scale.setTo(1,1);
        _this.greenStrip1.visible=false;
        _this.greenStrip1.inputEnabled=false;
        _this.greenStrip1.name = "green1";
        _this.greenStrip1.events.onInputDown.add(_this.green1,_this);
                
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip1.addChild(_this.text);
        
        _this.greenStrip2 = _this.add.sprite(400,238,'nspvg2_4green');
        _this.greenStrip2.anchor.setTo(0.5);
        _this.greenStrip2.scale.setTo(1,1);
        _this.greenStrip2.visible=false;
        _this.greenStrip2.inputEnabled=false;
         _this.greenStrip2.name = "green2";
        _this.greenStrip2.events.onInputDown.add(_this.green2,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip2.addChild(_this.text);
        
        _this.greenStrip3 = _this.add.sprite(400,296,'nspvg2_4green');
        _this.greenStrip3.anchor.setTo(0.5);
        _this.greenStrip3.scale.setTo(1,1);
        _this.greenStrip3.visible=false;
        _this.greenStrip3.inputEnabled=false;
        _this.greenStrip3.name = "green3";
        _this.greenStrip3.events.onInputDown.add(_this.green3,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip3.addChild(_this.text);
        
        _this.greenStrip4 = _this.add.sprite(400,354,'nspvg2_4green');
        _this.greenStrip4.anchor.setTo(0.5);
        _this.greenStrip4.scale.setTo(1,1);
        _this.greenStrip4.visible=true;
        _this.greenStrip4.inputEnabled=true;
         _this.greenStrip4.name = "green4";
        _this.greenStrip4.events.onInputDown.add(_this.green4,_this);
        
        _this.text = this.add.text(-48, 1, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-2, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        
        _this.text = this.add.text(43, 1, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.greenStrip4.addChild(_this.text);
        /*****************************************************/
        _this.yellowStrip1 = _this.add.sprite(447,180,'nspvg2_4yellow');
        _this.yellowStrip1.anchor.setTo(0.5);
        _this.yellowStrip1.scale.setTo(1,1);
        _this.yellowStrip1.visible=false;
        _this.yellowStrip1.inputEnabled=false;
        _this.yellowStrip1.name = "yellow1";
        _this.yellowStrip1.events.onInputDown.add(_this.yellow1,_this);
        
        _this.text = this.add.text(-2, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip1.addChild(_this.text);
        
        _this.yellowStrip2 = _this.add.sprite(447,238,'nspvg2_4yellow');
        _this.yellowStrip2.anchor.setTo(0.5);
        _this.yellowStrip2.scale.setTo(1,1);
        _this.yellowStrip2.visible=true;
        _this.yellowStrip2.inputEnabled=true;
        _this.yellowStrip2.name = "yellow2";
        _this.yellowStrip2.events.onInputDown.add(_this.yellow2,_this);
        
        _this.text = this.add.text(-2, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip2.addChild(_this.text);
        
        _this.yellowStrip3 = _this.add.sprite(447,296,'nspvg2_4yellow');
        _this.yellowStrip3.anchor.setTo(0.5);
        _this.yellowStrip3.scale.setTo(1,1);
        _this.yellowStrip3.visible=false;
        _this.yellowStrip3.inputEnabled=false;
        _this.yellowStrip3.name = "yellow3";
        _this.yellowStrip3.events.onInputDown.add(_this.yellow3,_this);
        
        _this.text = this.add.text(-2, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip3.addChild(_this.text);
        
        _this.yellowStrip4 = _this.add.sprite(447,354,'nspvg2_4yellow');
        _this.yellowStrip4.anchor.setTo(0.5);
        _this.yellowStrip4.scale.setTo(1,1);
        _this.yellowStrip4.visible=false;
        _this.yellowStrip4.inputEnabled=false;
        _this.yellowStrip4.name = "yellow4";
        _this.yellowStrip4.events.onInputDown.add(_this.yellow4,_this);
        
        _this.text = this.add.text(-2, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.yellowStrip4.addChild(_this.text);
        /************************************************************/
        
        _this.redStrip1 = _this.add.sprite(377,180,'nspvg2_4red');
        _this.redStrip1.anchor.setTo(0.5);
        _this.redStrip1.scale.setTo(1,1);
        _this.redStrip1.visible=false;
        _this.redStrip1.inputEnabled=false;
        _this.redStrip1.name = "red1";
        _this.redStrip1.events.onInputDown.add(_this.red1,_this);
        
        _this.text = this.add.text(-72, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip1.addChild(_this.text);
        
        _this.redStrip2 = _this.add.sprite(377,238,'nspvg2_4red');
        _this.redStrip2.anchor.setTo(0.5);
        _this.redStrip2.scale.setTo(1,1);
        _this.redStrip2.visible=false;
        _this.redStrip2.inputEnabled=false;
        _this.redStrip2.name = "red2";
        _this.redStrip2.events.onInputDown.add(_this.red2,_this);
        
        _this.text = this.add.text(-72, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip2.addChild(_this.text);
        
        _this.redStrip3 = _this.add.sprite(377,296,'nspvg2_4red');
        _this.redStrip3.anchor.setTo(0.5);
        _this.redStrip3.scale.setTo(1,1);
        _this.redStrip3.visible=true;
        _this.redStrip3.inputEnabled=true;
        _this.redStrip3.name = "red3";
        _this.redStrip3.events.onInputDown.add(_this.red3,_this);
        
        _this.text = this.add.text(-72, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip3.addChild(_this.text);
        
        _this.redStrip4 = _this.add.sprite(377,354,'nspvg2_4red');
        _this.redStrip4.anchor.setTo(0.5);
        _this.redStrip4.scale.setTo(1,1);
        _this.redStrip4.visible=false;
        _this.redStrip4.inputEnabled=false;
        _this.redStrip4.name = "red4";
        _this.redStrip4.events.onInputDown.add(_this.red4,_this);
        
        _this.text = this.add.text(-72, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(-25, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        _this.text = this.add.text(67, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.redStrip4.addChild(_this.text);
        
        /****************************************************************/
        
        _this.blueStrip1 = _this.add.sprite(422,180,'nspvg2_4blue');
        _this.blueStrip1.anchor.setTo(0.5);
        _this.blueStrip1.scale.setTo(1,1);
        _this.blueStrip1.visible=true;
        _this.blueStrip1.inputEnabled=true;
        _this.blueStrip1.name = "blue1";
        _this.blueStrip1.events.onInputDown.add(_this.blue1,_this);
        
        _this.text = this.add.text(-25, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip1.addChild(_this.text);
        
        _this.blueStrip2 = _this.add.sprite(422,238,'nspvg2_4blue');
        _this.blueStrip2.anchor.setTo(0.5);
        _this.blueStrip2.scale.setTo(1,1);
        _this.blueStrip2.visible=false;
        _this.blueStrip2.inputEnabled=false;
        _this.blueStrip2.name = "blue2";
        _this.blueStrip2.events.onInputDown.add(_this.blue2,_this);
        
        _this.text = this.add.text(-25, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip2.addChild(_this.text);
        
        _this.blueStrip3 = _this.add.sprite(422,296,'nspvg2_4blue');
        _this.blueStrip3.anchor.setTo(0.5);
        _this.blueStrip3.scale.setTo(1,1);
        _this.blueStrip3.visible=false;
        _this.blueStrip3.inputEnabled=false;
        _this.blueStrip3.name = "blue3";
        _this.blueStrip3.events.onInputDown.add(_this.blue3,_this);
        
        _this.text = this.add.text(-25, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip3.addChild(_this.text);
        
        _this.blueStrip4 = _this.add.sprite(422,354,'nspvg2_4blue');
        _this.blueStrip4.anchor.setTo(0.5);
        _this.blueStrip4.scale.setTo(1,1);
        _this.blueStrip4.visible=false;
        _this.blueStrip4.inputEnabled=false;
        _this.blueStrip4.name = "blue4";
        _this.blueStrip4.events.onInputDown.add(_this.blue4,_this);
        
        _this.text = this.add.text(-25, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.text = this.add.text(21, 0, "0");
        _this.text.font = "myfont";
        _this.text.fill = "#000000";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.blueStrip4.addChild(_this.text);
        
        _this.rightAns=6583;
        
        _this.boxGroup = _this.add.group();
              
        _this.boxGroup.add(_this.greenStrip1);
        _this.boxGroup.add(_this.greenStrip2);
        _this.boxGroup.add(_this.greenStrip3);
        _this.boxGroup.add(_this.greenStrip4);
        _this.boxGroup.add(_this.yellowStrip1);
        _this.boxGroup.add(_this.yellowStrip2);
        _this.boxGroup.add(_this.yellowStrip3);
        _this.boxGroup.add(_this.yellowStrip4);
        _this.boxGroup.add(_this.redStrip1);
        _this.boxGroup.add(_this.redStrip2);
        _this.boxGroup.add(_this.redStrip3);
        _this.boxGroup.add(_this.redStrip4);
        _this.boxGroup.add(_this.blueStrip1);
        _this.boxGroup.add(_this.blueStrip2);
        _this.boxGroup.add(_this.blueStrip3);
        _this.boxGroup.add(_this.blueStrip4);
        
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(240, 75, 120, 5);

        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(240, 131, 120, 5);

        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(240, 188, 120, 5);

        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(240, 248, 120, 5);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
  /********************************************************/
  
     
 checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
 
/************************************/
 green1:function(target){
     target.input.enableDrag();
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
       if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
            _this.greenStrip1.visible=false;
            _this.yellowStrip2.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.greenStrip2.visible=true;
            _this.greenStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
            _this.greenStrip1.visible=false;
            _this.redStrip2.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.greenStrip2.visible=true;
            _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
            _this.greenStrip1.visible=false;
            _this.blueStrip2.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.greenStrip2.visible=true;
            _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
            _this.greenStrip1.visible=false;
            _this.yellowStrip3.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.greenStrip3.visible=true;
            _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
            _this.greenStrip1.visible=false;
            _this.redStrip3.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.greenStrip3.visible=true;
            _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
            _this.greenStrip1.visible=false;
            _this.blueStrip3.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.greenStrip3.visible=true;
            _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
            _this.greenStrip1.visible=false;
            _this.yellowStrip4.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.greenStrip4.visible=true;
            _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
            _this.greenStrip1.visible=false;
            _this.redStrip4.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.greenStrip4.visible=true;
            _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
            _this.greenStrip1.visible=false;
            _this.blueStrip4.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.greenStrip4.visible=true;
            _this.greenStrip4.inputEnabled=true;
       }
            target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
     
       },
 yellow1:function(target){
        target.input.enableDrag();
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
       if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
            _this.greenStrip2.visible=false;
            _this.yellowStrip1.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.yellowStrip2.visible=true;
            _this.yellowStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
            _this.yellowStrip1.visible=false;
            _this.redStrip2.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.yellowStrip2.visible=true;
            _this.yellowStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
            _this.yellowStrip1.visible=false;
            _this.blueStrip2.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.yellowStrip2.visible=true;
            _this.yellowStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
            _this.yellowStrip1.visible=false;
            _this.greenStrip3.visible=false;
            _this.yellowStrip3.visible=true;
            _this.yellowStrip3.inputEnabled=true;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
            _this.yellowStrip1.visible=false;
            _this.redStrip3.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.yellowStrip3.visible=true;
            _this.yellowStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
            _this.yellowStrip1.visible=false;
            _this.blueStrip3.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.yellowStrip3.visible=true;
            _this.yellowStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
            _this.yellowStrip1.visible=false;
            _this.greenStrip4.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.yellowStrip4.visible=true;
            _this.yellowStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
            _this.yellowStrip1.visible=false;
            _this.redStrip4.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.yellowStrip4.visible=true;
            _this.yellowStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
            _this.yellowStrip1.visible=false;
            _this.blueStrip4.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.yellowStrip4.visible=true;
            _this.yellowStrip4.inputEnabled=true;
        }
            target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    red1:function(target){
            target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
            _this.greenStrip2.visible=false;
            _this.redStrip1.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.redStrip2.visible=true;
            _this.redStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
            _this.redStrip1.visible=false;
            _this.yellowStrip2.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.redStrip2.visible=true;
            _this.redStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
            _this.redStrip1.visible=false;
            _this.blueStrip2.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.redStrip2.visible=true;
            _this.redStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
            _this.redStrip1.visible=false;
            _this.greenStrip3.visible=false;
            _this.redStrip3.visible=true;
            _this.redStrip3.inputEnabled=true;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
            _this.yellowStrip3.visible=false;
            _this.redStrip1.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.redStrip3.visible=true;
            _this.redStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
            _this.redStrip1.visible=false;
            _this.blueStrip3.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.redStrip3.visible=true;
            _this.redStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
            _this.redStrip1.visible=false;
            _this.greenStrip4.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.redStrip4.visible=true;
            _this.redStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
            _this.redStrip1.visible=false;
            _this.yellowStrip4.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.redStrip4.visible=true;
            _this.redStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
            _this.redStrip1.visible=false;
            _this.blueStrip4.visible=false;
            _this.blueStrip1.visible=true;
            _this.blueStrip1.inputEnabled=true;
            _this.redStrip4.visible=true;
            _this.redStrip4.inputEnabled=true;
        }
            target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    blue1:function(target){
            target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
            _this.greenStrip2.visible=false;
            _this.blueStrip1.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.blueStrip2.visible=true;
            _this.blueStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
            _this.blueStrip1.visible=false;
            _this.yellowStrip2.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.blueStrip2.visible=true;
            _this.blueStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
            _this.blueStrip1.visible=false;
            _this.redStrip2.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.blueStrip2.visible=true;
            _this.blueStrip2.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
            _this.blueStrip1.visible=false;
            _this.greenStrip3.visible=false;
            _this.blueStrip3.visible=true;
            _this.blueStrip3.inputEnabled=true;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
            _this.yellowStrip3.visible=false;
            _this.blueStrip1.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.blueStrip3.visible=true;
            _this.blueStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
            _this.blueStrip1.visible=false;
            _this.redStrip3.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.blueStrip3.visible=true;
            _this.blueStrip3.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
            _this.blueStrip1.visible=false;
            _this.greenStrip4.visible=false;
            _this.greenStrip1.visible=true;
            _this.greenStrip1.inputEnabled=true;
            _this.blueStrip4.visible=true;
            _this.blueStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
            _this.blueStrip1.visible=false;
            _this.yellowStrip4.visible=false;
            _this.yellowStrip1.visible=true;
            _this.yellowStrip1.inputEnabled=true;
            _this.blueStrip4.visible=true;
            _this.blueStrip4.inputEnabled=true;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
            _this.blueStrip1.visible=false;
            _this.redStrip4.visible=false;
            _this.redStrip1.visible=true;
            _this.redStrip1.inputEnabled=true;
            _this.blueStrip4.visible=true;
            _this.blueStrip4.inputEnabled=true;
        }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
   },
 green2:function(target){
     target.input.enableDrag();
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
     if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.yellowStrip1.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.greenStrip2.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.greenStrip2.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.greenStrip2.visible=false;
           _this.yellowStrip3.visible=false;
		   _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.greenStrip2.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.greenStrip2.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.greenStrip2.visible=false;
           _this.yellowStrip4.visible=false;
		   _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.greenStrip2.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.greenStrip2.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
     target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
    yellow2:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.yellowStrip2.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.yellowStrip2.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.yellowStrip2.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           _this.yellowStrip2.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.yellowStrip2.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.yellowStrip2.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.yellowStrip2.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.yellowStrip2.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.yellowStrip2.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    red2:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.redStrip2.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.redStrip2.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.redStrip2.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           _this.redStrip2.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.redStrip2.visible=false;
           _this.yellowStrip3.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.redStrip2.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.redStrip2.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.redStrip2.visible=false;
           _this.yellowStrip4.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.redStrip2.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    blue2:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.blueStrip2.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.blueStrip2.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.blueStrip2.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           _this.blueStrip2.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.blueStrip2.visible=false;
           _this.yellowStrip3.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.blueStrip2.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.blueStrip2.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.blueStrip2.visible=false;
           _this.yellowStrip4.visible=false;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.blueStrip2.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
 green3:function(target){
     target.input.enableDrag();
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
           _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
       if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.greenStrip3.visible=false;
		   _this.yellowStrip1.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.greenStrip3.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.greenStrip3.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.greenStrip3.visible=false;
           _this.yellowStrip2.visible=false;
		   _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.greenStrip3.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.greenStrip3.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.greenStrip3.visible=false;
           _this.yellowStrip4.visible=false;
		   _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.greenStrip3.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.greenStrip3.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
       }
     target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
    yellow3:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.yellowStrip3.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.yellowStrip3.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.yellowStrip3.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.yellowStrip3.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.yellowStrip3.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.yellowStrip3.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.yellowStrip3.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.yellowStrip3.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.yellowStrip3.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    red3:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.redStrip3.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.redStrip3.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.redStrip3.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.redStrip3.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.redStrip3.visible=false;
           _this.yellowStrip2.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.redStrip3.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.redStrip3.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.redStrip3.visible=false;
           _this.yellowStrip4.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.blueStrip4.visible){
           _this.redStrip3.visible=false;
           _this.blueStrip4.visible=false;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    blue3:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
           _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.blueStrip3.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.blueStrip3.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.blueStrip3.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.blueStrip3.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.blueStrip3.visible=false;
           _this.yellowStrip2.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.blueStrip3.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.greenStrip4.visible){
           _this.blueStrip3.visible=false;
           _this.greenStrip4.visible=false;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.yellowStrip4.visible){
           _this.blueStrip3.visible=false;
           _this.yellowStrip4.visible=false;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics4, target)&&_this.redStrip4.visible){
           _this.blueStrip3.visible=false;
           _this.redStrip4.visible=false;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
       }
	   target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
 green4:function(target){
     target.input.enableDrag();
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
       if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.greenStrip4.visible=false;
		   _this.yellowStrip1.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.greenStrip4.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.greenStrip4.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.greenStrip1.visible=true;
           _this.greenStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.greenStrip4.visible=false;
           _this.yellowStrip2.visible=false;
		   _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.greenStrip4.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.greenStrip4.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.greenStrip2.visible=true;
           _this.greenStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.greenStrip4.visible=false;
           _this.yellowStrip3.visible=false;
		   _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.greenStrip4.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
       else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.greenStrip4.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.greenStrip3.visible=true;
           _this.greenStrip3.inputEnabled=true;
       }
     target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
    yellow4:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.yellowStrip4.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.yellowStrip4.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.yellowStrip4.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.yellowStrip1.visible=true;
           _this.yellowStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.yellowStrip4.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.yellowStrip4.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.yellowStrip4.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.yellowStrip2.visible=true;
           _this.yellowStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           _this.yellowStrip4.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.yellowStrip4.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.yellowStrip4.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.yellowStrip3.visible=true;
           _this.yellowStrip3.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    red4:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!! "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
	   if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.redStrip4.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.redStrip4.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.blueStrip1.visible){
           _this.redStrip4.visible=false;
           _this.blueStrip1.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.redStrip1.visible=true;
           _this.redStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.redStrip4.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.redStrip4.visible=false;
           _this.yellowStrip2.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.blueStrip2.visible){
           _this.redStrip4.visible=false;
           _this.blueStrip2.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.redStrip2.visible=true;
           _this.redStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           _this.redStrip4.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.redStrip4.visible=false;
           _this.yellowStrip3.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.blueStrip3.visible){
           _this.redStrip4.visible=false;
           _this.blueStrip3.visible=false;
           _this.blueStrip4.visible=true;
           _this.blueStrip4.inputEnabled=true;
           _this.redStrip3.visible=true;
           _this.redStrip3.inputEnabled=true;
       }
        target.events.onDragStop.removeAll();
            _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
    },
    blue4:function(target){
        target.input.enableDrag();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!!!!!b4 "+target.key);
          _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
     
        target.events.onDragStop.add(function(target){
            _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
         if(_this.checkOverlap(_this.graphics1, target)&&_this.greenStrip1.visible){
           _this.blueStrip4.visible=false;
           _this.greenStrip1.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.yellowStrip1.visible){
           _this.blueStrip4.visible=false;
           _this.yellowStrip1.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics1, target)&&_this.redStrip1.visible){
           _this.blueStrip4.visible=false;
           _this.redStrip1.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.blueStrip1.visible=true;
           _this.blueStrip1.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.greenStrip2.visible){
           _this.blueStrip4.visible=false;
           _this.greenStrip2.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.yellowStrip2.visible){
           _this.blueStrip4.visible=false;
           _this.yellowStrip2.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics2, target)&&_this.redStrip2.visible){
           _this.blueStrip4.visible=false;
           _this.redStrip2.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.blueStrip2.visible=true;
           _this.blueStrip2.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.greenStrip3.visible){
           console.log("It Is Comming Here");
           _this.blueStrip4.visible=false;
           _this.greenStrip3.visible=false;
           _this.greenStrip4.visible=true;
           _this.greenStrip4.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.yellowStrip3.visible){
           _this.blueStrip4.visible=false;
           _this.yellowStrip3.visible=false;
           _this.yellowStrip4.visible=true;
           _this.yellowStrip4.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   else if(_this.checkOverlap(_this.graphics3, target)&&_this.redStrip3.visible){
           _this.blueStrip4.visible=false;
           _this.redStrip3.visible=false;
           _this.redStrip4.visible=true;
           _this.redStrip4.inputEnabled=true;
           _this.blueStrip3.visible=true;
           _this.blueStrip3.inputEnabled=true;
       }
	   target.events.onDragStop.removeAll();
           _this.checkAns1();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
        },_this);
 },
    
    checkAns1:function(){
        
        if((_this.redStrip1.visible==true)&&(_this.greenStrip2.visible==true)&&(_this.blueStrip3.visible==true)&&(_this.yellowStrip4.visible==true))
        {
            _this.whiteBox.alpha=1;
            _this.addNumberPad();
            _this.redStrip1.inputEnabled=false;
            _this.greenStrip2.inputEnabled=false;
            _this.blueStrip3.inputEnabled=false;
            _this.yellowStrip4.inputEnabled=false;
        }
      
    },

  addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,507,'nspvg2_4_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numBackground.scale.setTo(1,0.9);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);
     
        var x = 120;
             
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'nspvg2_4_numberpad'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.5,0.5);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=60;
        }
       for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
            
            _this.numTxt = this.add.text(-1,0,'');
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font='myfont';
            _this.numTxt.fontWeight = 'normal';
            _this.numTxt.fontSize = 40;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#65B4C3';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.whiteBox.addChild(_this.numTxt);
            
        _this.eraser = _this.numGroup.create(x+20,510,'nspvg2_4_erase');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(x+80,510,'nspvg2_4_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.20,1.20);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
          
        _this.eraser.events.onInputDown.add(function(){
		_this.eraserclicked=1;
        _this.eraser.frame=1;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numTxt.setText("");
        _this.selectedAns="";
            
           this.time.events.add(500,function(){
              _this.eraser.frame=0;                
           },this);
        // _this.toCheckNumberPad = false;
          },this);
    
        _this.numGroup.y  = 100;
      
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
       
         //_this.checkAns2();

         _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function(target){
        _this.rightbtn.frame=1;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
            
        //_this.noofAttempts++;
          if(_this.glow)
          _this.glow.destroy();
             
        this.time.events.add(500,function(){
            _this.rightbtn.frame=0;                
        },this);
          
        // //console.log("selected Answer "+ _this.selectedAns);
        if( _this.selectedAns == _this.rightAns)  
            {
                    ////console.log("correct");
                _this.eraserclicked=0;
                _this.boxGroup.setAll("frame",1);
                _this.whiteBox.frame = 1;
                _this.correctAns();
                
                _this.numGroup.y  = 0;
                _this.Maintween = _this.add.tween(_this.numGroup);
                _this.Maintween.to({ y:100}, 0, 'Linear', true, 0);
                
                target.events.onInputDown.removeAll();
            }
        else {
            _this.noofAttempts++;
            _this.shake.shake(10,_this.whiteBox);
            _this.shake.shake(10,_this.boxGroup);
            
            _this.numTxt.setText("");
            _this.selectedAns="";
            _this.wheel.frame=1;
            
            _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
            this.time.events.add(1500,function(){
              _this.wheel.frame=0;                
           },this);
            }
         },_this);
    },
    
 numClicked:function(target){
        _this.num = target.name;
        console.log(_this.num);

        
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
            
            if(_this.selectedAns.length<4)
            {
                _this.selectedAns+= target.name;
                console.log("third one");
                _this.numTxt.setText(_this.selectedAns);
            }
                
        
    },
   
  removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.celebration = false;
        console.log("no"+_this.no11);
        _this.count2 =0;
        //_this.no11++;
        
        if(_this.no11<6)
        {
            _this.numGroup.destroy();
            _this.lockerGroup.destroy();
            _this.boxGroup.destroy();
            _this.numTxt.setText("");
            _this.selectedAns="";
            _this.getQuestion();
            //_this.starsGroup.getChildAt(_this.count1).frame = 2;
             
        }
        else
        {
            //_this.stopVoice();
            _this.counterForTimer = null;
            _this.timer1=null;
            _this.state.start('pv2_4Score');
        }
    },
    
	correctAns:function(target)
	{
        console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        //_this.stopvoice();
        _this.noofAttempts++;
        
        _this.add.tween(_this.wheelhand).to( { angle: 60 }, 1000, Phaser.Easing.Linear.None, true);
      _this.time.events.add(300, function(){ 
          _this.lockSound1 = _this.add.audio('lockSound1');
          _this.lockSound1.play();
      });
        _this.time.events.add(1500, function(){
         _this.add.tween(_this.wheel).to( { angle: -10 }, 300, Phaser.Easing.Linear.None, true);
          _this.lockSound2 = _this.add.audio('lockSound2');
          _this.lockSound2.play();
        });
        
        
      _this.time.events.add(2000, function(){
      _this.wheelhand.destroy();
      _this.wheel.destroy();
      _this.whiteBox.destroy();
      _this.boxGroup.destroy();
       
      //_this.lockerDoor.frame = 1;

      _this.animdoor = _this.lockerDoor.animations.add('door');
         _this.animdoor.play();
      
      _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            console.log(_this.starAnim);

            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play();
            _this.count1++;
            
            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();
     });
        
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
       
            _this.wrongAnswer = false;
             
            _this.speakerbtn.inputEnabled=false;
               
             console.log("correct11");
           
            _this.celebration = true;
        
            _this.click3 = _this.add.audio('ClickSound');
            _this.click3.play();
        
            _this.time.events.add(4000, _this.removeEverthing, _this);

            _this.questionid = 1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
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
	
   getVoice:function()
    {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArray[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:
            case 7: 
            case 8: 
            case 9: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/English/NSPVG2.4E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Hindi/NSPVG2.4H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Kannada/NSPVG2.4K.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Marathi/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Telugu/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Tamil/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Urdu/NSPVG2.4.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Gujarati/NSPVG2.4G.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Odiya/NSPVG2.4.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

        shutdown:function(){
            this.stopvoice();
        }

};