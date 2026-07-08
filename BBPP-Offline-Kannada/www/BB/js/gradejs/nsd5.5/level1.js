Game.nsd5_5level1=function(){};

Game.nsd5_5level1.prototype ={
    
    init:function(game)
    {
       _this= this;
         telInitializer.gameIdInit("NSD5_5",gradeSelected);
    },

    preload:function(game){
  if(!window.grade5NSF9){

            window.grade5NSF9 = true;

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

            this.load.image('nsd5_5background', window.baseUrl+'assets/gradeAssets/nsd5.5/Bg.png');
        
        this.load.atlas('nsd5_5_erase',window.baseUrl+'assets/gradeAssets/nsd5.5/erase.png' ,window.baseUrl+'json/gradeJson/nsd5.5/erase.json');
        this.load.atlas('nsd5_5_rightmark',window.baseUrl+'assets/gradeAssets/nsd5.5/rightmark.png' ,window.baseUrl+'json/gradeJson/nsd5.5/rightmark.json');
        this.load.image('nsd5_5_numBG',window.baseUrl+'assets/gradeAssets/nsd5.5/b2.png');
        this.load.atlas('nsd5_5numberpad', window.baseUrl+'assets/gradeAssets/nsd5.5/calNum.png',window.baseUrl+'json/gradeJson/nsd5.5/calNum.json');
        
        this.load.atlas('nsd5_5tick', window.baseUrl+'assets/gradeAssets/nsd5.5/clickbtn.png',window.baseUrl+'json/gradeJson/nsd5.5/clickbtn.json');
        
        this.load.image('nsd5_5scorebox', window.baseUrl+'assets/gradeAssets/nsd5.5/Scorebox1.png');
        this.load.image('nsd5_5singleBar', window.baseUrl+'assets/gradeAssets/nsd5.5/singlebox.png');
        this.load.atlas('nsd5_5singleBar1',window.baseUrl+'assets/gradeAssets/nsd5.5/singlebox1.png',window.baseUrl+'json/gradeJson/nsd5.5/singlebox1.json');
        this.load.image('nsd5_5tensBar', window.baseUrl+'assets/gradeAssets/nsd5.5/TensBox.png');
        this.load.image('nsd5_5whiteBox', window.baseUrl+'assets/gradeAssets/nsd5.5/whitebox.png');
        this.load.atlas('nsd5_5grid',window.baseUrl+'assets/gradeAssets/nsd5.5/box10X10.png',window.baseUrl+'json/gradeJson/nsd5.5/box10X10.json');
        
        this.load.atlas('nsd5_5fractionscorebox', window.baseUrl+'assets/gradeAssets/nsd5.5/b1.png',window.baseUrl+'assets/gradeAssets/nsd5.5/b1.json');
        this.load.atlas('nsd5_5fractionscorebox2', window.baseUrl+'assets/gradeAssets/nsd5.5/fractionscorebox2.png',window.baseUrl+'assets/gradeAssets/nsd5.5/fractionscorebox2.json');
        this.load.image('nsd5_5divisionline', window.baseUrl+'assets/gradeAssets/nsd5.5/divisionline.png');
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
        
        //_this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        
        //_this.grpnum=new Array();
        
        _this.numBox1Pressed =  false;     
        _this.numBox2Pressed =  false; 
        _this.wrongAnswer = false;
        
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
        
        _this.soundPlayed = true;
        _this.addingNumPad = false;
        
        _this.qArray = new Array();
        _this.qArray = [6,2,3,4,5,6];
        //_this.qArray = _this.shuffle(_this.qArray);
        
        _this.qArray1 = new Array();
        _this.qArray1 = [7,8,9,10,11,12];
        _this.qArray1 = _this.shuffle(_this.qArray1);
        

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'nsd5_5background');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="nsd5_5navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;

        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(600,5,'grade11_speaker',function(){},this,1,0,2);
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
         _this.stopvoice();
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
         
        _this.temp2 = 0;
        if(_this.no11<3)
        {
           _this.temp2 =  _this.qArray[_this.no11];    
        }
        else
        {
            _this.temp2 =  _this.qArray1[_this.no11];
        }
        

        if(_this.no11==3)
            _this.getVoice();
        
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

    
    stack:function()
    {  
         console.log("stackhere");           
                   
        _this.grid = _this.add.sprite(451,271,'nsd5_5grid');//450,300
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.whiteBox = _this.add.sprite(160,260,'nsd5_5whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(0.5,1.3);
                        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.whiteBox);
        
        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        /********************************************************/
        _this.a=0;
        _this.b=0;
        
        _this.sBar1=this.add.sprite(273,95,'nsd5_5singleBar1');_this.sBar1.frame=1;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(273,134,'nsd5_5singleBar1');_this.sBar2.frame=1;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(273,172,'nsd5_5singleBar1');_this.sBar3.frame=1;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(273,211,'nsd5_5singleBar1');_this.sBar4.frame=1;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(273,250,'nsd5_5singleBar1');_this.sBar5.frame=1;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(273,289,'nsd5_5singleBar1');_this.sBar6.frame=1;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(273,328,'nsd5_5singleBar1');_this.sBar7.frame=1;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(273,366,'nsd5_5singleBar1');_this.sBar8.frame=1;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(273,406,'nsd5_5singleBar1');_this.sBar9.frame=1;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(273,445,'nsd5_5singleBar1');_this.sBar10.frame=1;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(313,94.7,'nsd5_5singleBar1');_this.sBar11.frame=1;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(313,134.5,'nsd5_5singleBar1');_this.sBar12.frame=1;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(313,173,'nsd5_5singleBar1');_this.sBar13.frame=1;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(313,212,'nsd5_5singleBar1');_this.sBar14.frame=1;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(313,251,'nsd5_5singleBar1');_this.sBar15.frame=1;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(313,290,'nsd5_5singleBar1');_this.sBar16.frame=1;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(313,329,'nsd5_5singleBar1');_this.sBar17.frame=1;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(313,366,'nsd5_5singleBar1');_this.sBar18.frame=1;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(313,406,'nsd5_5singleBar1');_this.sBar19.frame=1;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(313,445,'nsd5_5singleBar1');_this.sBar20.frame=1;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(353,94.7,'nsd5_5singleBar1');_this.sBar21.frame=1;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(353,134.5,'nsd5_5singleBar1');_this.sBar22.frame=1;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(353,173,'nsd5_5singleBar1');_this.sBar23.frame=1;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(353,212,'nsd5_5singleBar1');_this.sBar24.frame=1;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(353,251,'nsd5_5singleBar1');_this.sBar25.frame=1;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        _this.sBar26=this.add.sprite(353,290,'nsd5_5singleBar1');_this.sBar26.frame=1;
        _this.sBar26.anchor.setTo(0.5);
        _this.sBar26.inputEnabled=false;
        _this.sBar26.scale.setTo(1,1);
        _this.sBar26X=_this.sBar26.x;
        _this.sBar26Y=_this.sBar26.y;
        
        _this.sBar27=this.add.sprite(353,329,'nsd5_5singleBar1');_this.sBar27.frame=1;
        _this.sBar27.anchor.setTo(0.5);
        _this.sBar27.inputEnabled=false;
        _this.sBar27.scale.setTo(1,1);
        _this.sBar27X=_this.sBar27.x;
        _this.sBar27Y=_this.sBar27.y;
        
        _this.sBar28=this.add.sprite(353,366,'nsd5_5singleBar1');_this.sBar28.frame=1;
        _this.sBar28.anchor.setTo(0.5);
        _this.sBar28.inputEnabled=false;
        _this.sBar28.scale.setTo(1,1);
        _this.sBar28X=_this.sBar28.x;
        _this.sBar28Y=_this.sBar28.y;
        
        _this.sBar29=this.add.sprite(353,406,'nsd5_5singleBar1');_this.sBar29.frame=1;
        _this.sBar29.anchor.setTo(0.5);
        _this.sBar29.inputEnabled=false;
        _this.sBar29.scale.setTo(1,1);
        _this.sBar29X=_this.sBar29.x;
        _this.sBar29Y=_this.sBar29.y;
                
        _this.sBar30=this.add.sprite(353,445,'nsd5_5singleBar1');_this.sBar30.frame=1;
        _this.sBar30.anchor.setTo(0.5);
        _this.sBar30.inputEnabled=false;
        _this.sBar30.scale.setTo(1,1);
        _this.sBar30X=_this.sBar30.x;
        _this.sBar30Y=_this.sBar30.y;
        
        _this.sBar31=this.add.sprite(393,94.7,'nsd5_5singleBar1');_this.sBar31.frame=1;
        _this.sBar31.anchor.setTo(0.5);
        _this.sBar31.inputEnabled=false;
        _this.sBar31.scale.setTo(1,1);
        _this.sBar31X=_this.sBar31.x;
        _this.sBar31Y=_this.sBar31.y;
        
        _this.sBar32=this.add.sprite(393,134.5,'nsd5_5singleBar1');_this.sBar32.frame=1;
        _this.sBar32.anchor.setTo(0.5);
        _this.sBar32.inputEnabled=false;
        _this.sBar32.scale.setTo(1,1);
        _this.sBar32X=_this.sBar32.x;
        _this.sBar32Y=_this.sBar32.y;
        
        _this.sBar33=this.add.sprite(393,173,'nsd5_5singleBar1');_this.sBar33.frame=1;
        _this.sBar33.anchor.setTo(0.5);
        _this.sBar33.inputEnabled=false;
        _this.sBar33.scale.setTo(1,1);
        _this.sBar33X=_this.sBar33.x;
        _this.sBar33Y=_this.sBar33.y;
                
        _this.sBar34=this.add.sprite(393,212,'nsd5_5singleBar1');_this.sBar34.frame=1;
        _this.sBar34.anchor.setTo(0.5);
        _this.sBar34.inputEnabled=false;
        _this.sBar34.scale.setTo(1,1);
        _this.sBar34X=_this.sBar34.x;
        _this.sBar34Y=_this.sBar34.y;
        
        _this.sBar35=this.add.sprite(393,251,'nsd5_5singleBar1');_this.sBar35.frame=1;
        _this.sBar35.anchor.setTo(0.5);
        _this.sBar35.inputEnabled=false;
        _this.sBar35.scale.setTo(1,1);
        _this.sBar35X=_this.sBar35.x;
        _this.sBar35Y=_this.sBar35.y;
        
        _this.sBar36=this.add.sprite(393,290,'nsd5_5singleBar1');_this.sBar36.frame=1;
        _this.sBar36.anchor.setTo(0.5);
        _this.sBar36.inputEnabled=false;
        _this.sBar36.scale.setTo(1,1);
        _this.sBar36X=_this.sBar36.x;
        _this.sBar36Y=_this.sBar36.y;
        
        _this.sBar37=this.add.sprite(393,328.5,'nsd5_5singleBar1');_this.sBar37.frame=1;
        _this.sBar37.anchor.setTo(0.5);
        _this.sBar37.inputEnabled=false;
        _this.sBar37.scale.setTo(1,1);
        _this.sBar37X=_this.sBar37.x;
        _this.sBar37Y=_this.sBar37.y;
        
        _this.sBar38=this.add.sprite(393,366,'nsd5_5singleBar1');_this.sBar38.frame=1;
        _this.sBar38.anchor.setTo(0.5);
        _this.sBar38.inputEnabled=false;
        _this.sBar38.scale.setTo(1,1);
        _this.sBar38X=_this.sBar38.x;
        _this.sBar38Y=_this.sBar38.y;
        
        _this.sBar39=this.add.sprite(393,406,'nsd5_5singleBar1');_this.sBar39.frame=1;
        _this.sBar39.anchor.setTo(0.5);
        _this.sBar39.inputEnabled=false;
        _this.sBar39.scale.setTo(1,1);
        _this.sBar39X=_this.sBar39.x;
        _this.sBar39Y=_this.sBar39.y;
                
        _this.sBar40=this.add.sprite(393,445,'nsd5_5singleBar1');_this.sBar40.frame=1;
        _this.sBar40.anchor.setTo(0.5);
        _this.sBar40.inputEnabled=false;
        _this.sBar40.scale.setTo(1,1);
        _this.sBar40X=_this.sBar40.x;
        _this.sBar40Y=_this.sBar40.y;
        
        _this.sBar41=this.add.sprite(432,94.7,'nsd5_5singleBar1');_this.sBar41.frame=1;
        _this.sBar41.anchor.setTo(0.5);
        _this.sBar41.inputEnabled=false;
        _this.sBar41.scale.setTo(1,1);
        _this.sBar41X=_this.sBar41.x;
        _this.sBar41Y=_this.sBar41.y;
        
        _this.sBar42=this.add.sprite(432,134.5,'nsd5_5singleBar1');_this.sBar42.frame=1;
        _this.sBar42.anchor.setTo(0.5);
        _this.sBar42.inputEnabled=false;
        _this.sBar42.scale.setTo(1,1);
        _this.sBar42X=_this.sBar42.x;
        _this.sBar42Y=_this.sBar42.y;
        
        _this.sBar43=this.add.sprite(432,173,'nsd5_5singleBar1');_this.sBar43.frame=1;
        _this.sBar43.anchor.setTo(0.5);
        _this.sBar43.inputEnabled=false;
        _this.sBar43.scale.setTo(1,1);
        _this.sBar43X=_this.sBar43.x;
        _this.sBar43Y=_this.sBar43.y;
                
        _this.sBar44=this.add.sprite(432,212,'nsd5_5singleBar1');_this.sBar44.frame=1;
        _this.sBar44.anchor.setTo(0.5);
        _this.sBar44.inputEnabled=false;
        _this.sBar44.scale.setTo(1,1);
        _this.sBar44X=_this.sBar44.x;
        _this.sBar44Y=_this.sBar44.y;
        
        _this.sBar45=this.add.sprite(432,251,'nsd5_5singleBar1');_this.sBar45.frame=1;
        _this.sBar45.anchor.setTo(0.5);
        _this.sBar45.inputEnabled=false;
        _this.sBar45.scale.setTo(1,1);
        _this.sBar45X=_this.sBar45.x;
        _this.sBar45Y=_this.sBar45.y;
        
        _this.sBar46=this.add.sprite(432,290,'nsd5_5singleBar1');_this.sBar46.frame=1;
        _this.sBar46.anchor.setTo(0.5);
        _this.sBar46.inputEnabled=false;
        _this.sBar46.scale.setTo(1,1);
        _this.sBar46X=_this.sBar46.x;
        _this.sBar46Y=_this.sBar46.y;
        
        _this.sBar47=this.add.sprite(432,329,'nsd5_5singleBar1');_this.sBar47.frame=1;
        _this.sBar47.anchor.setTo(0.5);
        _this.sBar47.inputEnabled=false;
        _this.sBar47.scale.setTo(1,1);
        _this.sBar47X=_this.sBar47.x;
        _this.sBar47Y=_this.sBar47.y;
        
        _this.sBar48=this.add.sprite(432,366,'nsd5_5singleBar1');_this.sBar48.frame=1;
        _this.sBar48.anchor.setTo(0.5);
        _this.sBar48.inputEnabled=false;
        _this.sBar48.scale.setTo(1,1);
        _this.sBar48X=_this.sBar48.x;
        _this.sBar48Y=_this.sBar48.y;
        
        _this.sBar49=this.add.sprite(432,406,'nsd5_5singleBar1');_this.sBar49.frame=1;
        _this.sBar49.anchor.setTo(0.5);
        _this.sBar49.inputEnabled=false;
        _this.sBar49.scale.setTo(1,1);
        _this.sBar49X=_this.sBar49.x;
        _this.sBar49Y=_this.sBar49.y;
                
        _this.sBar50=this.add.sprite(432,445,'nsd5_5singleBar1');_this.sBar50.frame=1;
        _this.sBar50.anchor.setTo(0.5);
        _this.sBar50.inputEnabled=false;
        _this.sBar50.scale.setTo(1,1);
        _this.sBar50X=_this.sBar50.x;
        _this.sBar50Y=_this.sBar50.y;
        
        _this.sBar51=this.add.sprite(472,94.7,'nsd5_5singleBar1');_this.sBar51.frame=1;
        _this.sBar51.anchor.setTo(0.5);
        _this.sBar51.inputEnabled=false;
        _this.sBar51.scale.setTo(1,1);
        _this.sBar51X=_this.sBar51.x;
        _this.sBar51Y=_this.sBar51.y;
        
        _this.sBar52=this.add.sprite(472,134.5,'nsd5_5singleBar1');_this.sBar52.frame=1;
        _this.sBar52.anchor.setTo(0.5);
        _this.sBar52.inputEnabled=false;
        _this.sBar52.scale.setTo(1,1);
        _this.sBar52X=_this.sBar52.x;
        _this.sBar52Y=_this.sBar52.y;
        
        _this.sBar53=this.add.sprite(472,173,'nsd5_5singleBar1');_this.sBar53.frame=1;
        _this.sBar53.anchor.setTo(0.5);
        _this.sBar53.inputEnabled=false;
        _this.sBar53.scale.setTo(1,1);
        _this.sBar53X=_this.sBar53.x;
        _this.sBar53Y=_this.sBar53.y;
                
        _this.sBar54=this.add.sprite(472,212,'nsd5_5singleBar1');_this.sBar54.frame=1;
        _this.sBar54.anchor.setTo(0.5);
        _this.sBar54.inputEnabled=false;
        _this.sBar54.scale.setTo(1,1);
        _this.sBar54X=_this.sBar54.x;
        _this.sBar54Y=_this.sBar54.y;
        
        _this.sBar55=this.add.sprite(472,251,'nsd5_5singleBar1');_this.sBar55.frame=1;
        _this.sBar55.anchor.setTo(0.5);
        _this.sBar55.inputEnabled=false;
        _this.sBar55.scale.setTo(1,1);
        _this.sBar55X=_this.sBar55.x;
        _this.sBar55Y=_this.sBar55.y;
        
        _this.sBar56=this.add.sprite(472,290,'nsd5_5singleBar1');_this.sBar56.frame=1;
        _this.sBar56.anchor.setTo(0.5);
        _this.sBar56.inputEnabled=false;
        _this.sBar56.scale.setTo(1,1);
        _this.sBar56X=_this.sBar56.x;
        _this.sBar56Y=_this.sBar56.y;
        
        _this.sBar57=this.add.sprite(472,329,'nsd5_5singleBar1');_this.sBar57.frame=1;
        _this.sBar57.anchor.setTo(0.5);
        _this.sBar57.inputEnabled=false;
        _this.sBar57.scale.setTo(1,1);
        _this.sBar57X=_this.sBar57.x;
        _this.sBar57Y=_this.sBar57.y;
        
        _this.sBar58=this.add.sprite(472,366,'nsd5_5singleBar1');_this.sBar58.frame=1;
        _this.sBar58.anchor.setTo(0.5);
        _this.sBar58.inputEnabled=false;
        _this.sBar58.scale.setTo(1,1);
        _this.sBar58X=_this.sBar58.x;
        _this.sBar58Y=_this.sBar58.y;
        
        _this.sBar59=this.add.sprite(472,406,'nsd5_5singleBar1');_this.sBar59.frame=1;
        _this.sBar59.anchor.setTo(0.5);
        _this.sBar59.inputEnabled=false;
        _this.sBar59.scale.setTo(1,1);
        _this.sBar59X=_this.sBar59.x;
        _this.sBar59Y=_this.sBar59.y;
                
        _this.sBar60=this.add.sprite(472,445,'nsd5_5singleBar1');_this.sBar60.frame=1;
        _this.sBar60.anchor.setTo(0.5);
        _this.sBar60.inputEnabled=false;
        _this.sBar60.scale.setTo(1,1);
        _this.sBar60X=_this.sBar60.x;
        _this.sBar60Y=_this.sBar60.y;
        
        _this.sBar61=this.add.sprite(509,94.7,'nsd5_5singleBar1');_this.sBar61.frame=1;
        _this.sBar61.anchor.setTo(0.5);
        _this.sBar61.inputEnabled=false;
        _this.sBar61.scale.setTo(1,1);
        _this.sBar61X=_this.sBar61.x;
        _this.sBar61Y=_this.sBar61.y;
        
        _this.sBar62=this.add.sprite(509,134.5,'nsd5_5singleBar1');_this.sBar62.frame=1;
        _this.sBar62.anchor.setTo(0.5);
        _this.sBar62.inputEnabled=false;
        _this.sBar62.scale.setTo(1,1);
        _this.sBar62X=_this.sBar62.x;
        _this.sBar62Y=_this.sBar62.y;
        
        _this.sBar63=this.add.sprite(509,173,'nsd5_5singleBar1');_this.sBar63.frame=1;
        _this.sBar63.anchor.setTo(0.5);
        _this.sBar63.inputEnabled=false;
        _this.sBar63.scale.setTo(1,1);
        _this.sBar63X=_this.sBar63.x;
        _this.sBar63Y=_this.sBar63.y;
                
        _this.sBar64=this.add.sprite(509,212,'nsd5_5singleBar1');_this.sBar64.frame=1;
        _this.sBar64.anchor.setTo(0.5);
        _this.sBar64.inputEnabled=false;
        _this.sBar64.scale.setTo(1,1);
        _this.sBar64X=_this.sBar64.x;
        _this.sBar64Y=_this.sBar64.y;
        
        _this.sBar65=this.add.sprite(509,251,'nsd5_5singleBar1');_this.sBar65.frame=1;
        _this.sBar65.anchor.setTo(0.5);
        _this.sBar65.inputEnabled=false;
        _this.sBar65.scale.setTo(1,1);
        _this.sBar65X=_this.sBar65.x;
        _this.sBar65Y=_this.sBar65.y;
        
        _this.sBar66=this.add.sprite(509,290,'nsd5_5singleBar1');_this.sBar66.frame=1;
        _this.sBar66.anchor.setTo(0.5);
        _this.sBar66.inputEnabled=false;
        _this.sBar66.scale.setTo(1,1);
        _this.sBar66X=_this.sBar66.x;
        _this.sBar66Y=_this.sBar66.y;
        
        _this.sBar67=this.add.sprite(509,329,'nsd5_5singleBar1');_this.sBar67.frame=1;
        _this.sBar67.anchor.setTo(0.5);
        _this.sBar67.inputEnabled=false;
        _this.sBar67.scale.setTo(1,1);
        _this.sBar67X=_this.sBar67.x;
        _this.sBar67Y=_this.sBar67.y;
        
        _this.sBar68=this.add.sprite(509,366,'nsd5_5singleBar1');_this.sBar68.frame=1;
        _this.sBar68.anchor.setTo(0.5);
        _this.sBar68.inputEnabled=false;
        _this.sBar68.scale.setTo(1,1);
        _this.sBar68X=_this.sBar68.x;
        _this.sBar68Y=_this.sBar68.y;
        
        _this.sBar69=this.add.sprite(509,406,'nsd5_5singleBar1');_this.sBar69.frame=1;
        _this.sBar69.anchor.setTo(0.5);
        _this.sBar69.inputEnabled=false;
        _this.sBar69.scale.setTo(1,1);
        _this.sBar69X=_this.sBar69.x;
        _this.sBar69Y=_this.sBar69.y;
                
        _this.sBar70=this.add.sprite(509,445,'nsd5_5singleBar1');_this.sBar70.frame=1;
        _this.sBar70.anchor.setTo(0.5);
        _this.sBar70.inputEnabled=false;
        _this.sBar70.scale.setTo(1,1);
        _this.sBar70X=_this.sBar70.x;
        _this.sBar70Y=_this.sBar70.y;
        
        _this.sBar71=this.add.sprite(547,94.7,'nsd5_5singleBar1');_this.sBar71.frame=1;
        _this.sBar71.anchor.setTo(0.5);
        _this.sBar71.inputEnabled=false;
        _this.sBar71.scale.setTo(1,1);
        _this.sBar71X=_this.sBar71.x;
        _this.sBar71Y=_this.sBar71.y;
        
        _this.sBar72=this.add.sprite(547,134.5,'nsd5_5singleBar1');_this.sBar72.frame=1;
        _this.sBar72.anchor.setTo(0.5);
        _this.sBar72.inputEnabled=false;
        _this.sBar72.scale.setTo(1,1);
        _this.sBar72X=_this.sBar72.x;
        _this.sBar72Y=_this.sBar72.y;
        
        _this.sBar73=this.add.sprite(547,173,'nsd5_5singleBar1');_this.sBar73.frame=1;
        _this.sBar73.anchor.setTo(0.5);
        _this.sBar73.inputEnabled=false;
        _this.sBar73.scale.setTo(1,1);
        _this.sBar73X=_this.sBar73.x;
        _this.sBar73Y=_this.sBar73.y;
                
        _this.sBar74=this.add.sprite(547,212,'nsd5_5singleBar1');_this.sBar74.frame=1;
        _this.sBar74.anchor.setTo(0.5);
        _this.sBar74.inputEnabled=false;
        _this.sBar74.scale.setTo(1,1);
        _this.sBar74X=_this.sBar74.x;
        _this.sBar74Y=_this.sBar74.y;
        
        _this.sBar75=this.add.sprite(547,251,'nsd5_5singleBar1');_this.sBar75.frame=1;
        _this.sBar75.anchor.setTo(0.5);
        _this.sBar75.inputEnabled=false;
        _this.sBar75.scale.setTo(1,1);
        _this.sBar75X=_this.sBar75.x;
        _this.sBar75Y=_this.sBar75.y;
        
        _this.sBar76=this.add.sprite(547,290,'nsd5_5singleBar1');_this.sBar76.frame=1;
        _this.sBar76.anchor.setTo(0.5);
        _this.sBar76.inputEnabled=false;
        _this.sBar76.scale.setTo(1,1);
        _this.sBar76X=_this.sBar76.x;
        _this.sBar76Y=_this.sBar76.y;
        
        _this.sBar77=this.add.sprite(547,329,'nsd5_5singleBar1');_this.sBar77.frame=1;
        _this.sBar77.anchor.setTo(0.5);
        _this.sBar77.inputEnabled=false;
        _this.sBar77.scale.setTo(1,1);
        _this.sBar77X=_this.sBar77.x;
        _this.sBar77Y=_this.sBar77.y;
        
        _this.sBar78=this.add.sprite(547,366,'nsd5_5singleBar1');_this.sBar78.frame=1;
        _this.sBar78.anchor.setTo(0.5);
        _this.sBar78.inputEnabled=false;
        _this.sBar78.scale.setTo(1,1);
        _this.sBar78X=_this.sBar78.x;
        _this.sBar78Y=_this.sBar78.y;
        
        _this.sBar79=this.add.sprite(547,406,'nsd5_5singleBar1');_this.sBar79.frame=1;
        _this.sBar79.anchor.setTo(0.5);
        _this.sBar79.inputEnabled=false;
        _this.sBar79.scale.setTo(1,1);
        _this.sBar79X=_this.sBar79.x;
        _this.sBar79Y=_this.sBar79.y;
                
        _this.sBar80=this.add.sprite(547,445,'nsd5_5singleBar1');_this.sBar80.frame=1;
        _this.sBar80.anchor.setTo(0.5);
        _this.sBar80.inputEnabled=false;
        _this.sBar80.scale.setTo(1,1);
        _this.sBar80X=_this.sBar80.x;
        _this.sBar80Y=_this.sBar80.y;
        
        _this.sBar81=this.add.sprite(587,94.7,'nsd5_5singleBar1');_this.sBar81.frame=1;
        _this.sBar81.anchor.setTo(0.5);
        _this.sBar81.inputEnabled=false;
        _this.sBar81.scale.setTo(1,1);
        _this.sBar81X=_this.sBar81.x;
        _this.sBar81Y=_this.sBar81.y;
        
        _this.sBar82=this.add.sprite(587,134.5,'nsd5_5singleBar1');_this.sBar82.frame=1;
        _this.sBar82.anchor.setTo(0.5);
        _this.sBar82.inputEnabled=false;
        _this.sBar82.scale.setTo(1,1);
        _this.sBar82X=_this.sBar82.x;
        _this.sBar82Y=_this.sBar82.y;
        
        _this.sBar83=this.add.sprite(587,173,'nsd5_5singleBar1');_this.sBar83.frame=1;
        _this.sBar83.anchor.setTo(0.5);
        _this.sBar83.inputEnabled=false;
        _this.sBar83.scale.setTo(1,1);
        _this.sBar83X=_this.sBar83.x;
        _this.sBar83Y=_this.sBar83.y;
                
        _this.sBar84=this.add.sprite(587,212,'nsd5_5singleBar1');_this.sBar84.frame=1;
        _this.sBar84.anchor.setTo(0.5);
        _this.sBar84.inputEnabled=false;
        _this.sBar84.scale.setTo(1,1);
        _this.sBar84X=_this.sBar84.x;
        _this.sBar84Y=_this.sBar84.y;
        
        _this.sBar85=this.add.sprite(587,251,'nsd5_5singleBar1');_this.sBar85.frame=1;
        _this.sBar85.anchor.setTo(0.5);
        _this.sBar85.inputEnabled=false;
        _this.sBar85.scale.setTo(1,1);
        _this.sBar85X=_this.sBar85.x;
        _this.sBar85Y=_this.sBar85.y;
        
        _this.sBar86=this.add.sprite(587,290,'nsd5_5singleBar1');_this.sBar86.frame=1;
        _this.sBar86.anchor.setTo(0.5);
        _this.sBar86.inputEnabled=false;
        _this.sBar86.scale.setTo(1,1);
        _this.sBar86X=_this.sBar86.x;
        _this.sBar86Y=_this.sBar86.y;
        
        _this.sBar87=this.add.sprite(587,329,'nsd5_5singleBar1');_this.sBar87.frame=1;
        _this.sBar87.anchor.setTo(0.5);
        _this.sBar87.inputEnabled=false;
        _this.sBar87.scale.setTo(1,1);
        _this.sBar87X=_this.sBar87.x;
        _this.sBar87Y=_this.sBar87.y;
        
        _this.sBar88=this.add.sprite(587,366,'nsd5_5singleBar1');_this.sBar88.frame=1;
        _this.sBar88.anchor.setTo(0.5);
        _this.sBar88.inputEnabled=false;
        _this.sBar88.scale.setTo(1,1);
        _this.sBar88X=_this.sBar88.x;
        _this.sBar88Y=_this.sBar88.y;
        
        _this.sBar89=this.add.sprite(587,406,'nsd5_5singleBar1');_this.sBar89.frame=1;
        _this.sBar89.anchor.setTo(0.5);
        _this.sBar89.inputEnabled=false;
        _this.sBar89.scale.setTo(1,1);
        _this.sBar89X=_this.sBar89.x;
        _this.sBar89Y=_this.sBar89.y;
                
        _this.sBar90=this.add.sprite(587,445,'nsd5_5singleBar1');_this.sBar90.frame=1;
        _this.sBar90.anchor.setTo(0.5);
        _this.sBar90.inputEnabled=false;
        _this.sBar90.scale.setTo(1,1);
        _this.sBar90X=_this.sBar90.x;
        _this.sBar90Y=_this.sBar90.y;
        
        _this.sBar91=this.add.sprite(626,94.7,'nsd5_5singleBar1');_this.sBar91.frame=1;
        _this.sBar91.anchor.setTo(0.5);
        _this.sBar91.inputEnabled=false;
        _this.sBar91.scale.setTo(1,1);
        _this.sBar91X=_this.sBar91.x;
        _this.sBar91Y=_this.sBar91.y;
        
        _this.sBar92=this.add.sprite(626,134.5,'nsd5_5singleBar1');_this.sBar92.frame=1;
        _this.sBar92.anchor.setTo(0.5);
        _this.sBar92.inputEnabled=false;
        _this.sBar92.scale.setTo(1,1);
        _this.sBar92X=_this.sBar92.x;
        _this.sBar92Y=_this.sBar92.y;
        
        _this.sBar93=this.add.sprite(626,173,'nsd5_5singleBar1');_this.sBar93.frame=1;
        _this.sBar93.anchor.setTo(0.5);
        _this.sBar93.inputEnabled=false;
        _this.sBar93.scale.setTo(1,1);
        _this.sBar93X=_this.sBar93.x;
        _this.sBar93Y=_this.sBar93.y;
                
        _this.sBar94=this.add.sprite(626,212,'nsd5_5singleBar1');_this.sBar94.frame=1;
        _this.sBar94.anchor.setTo(0.5);
        _this.sBar94.inputEnabled=false;
        _this.sBar94.scale.setTo(1,1);
        _this.sBar94X=_this.sBar94.x;
        _this.sBar94Y=_this.sBar94.y;
        
        _this.sBar95=this.add.sprite(626,251,'nsd5_5singleBar1');_this.sBar95.frame=1;
        _this.sBar95.anchor.setTo(0.5);
        _this.sBar95.inputEnabled=false;
        _this.sBar95.scale.setTo(1,1);
        _this.sBar95X=_this.sBar95.x;
        _this.sBar95Y=_this.sBar95.y;
        
        _this.sBar96=this.add.sprite(626,290,'nsd5_5singleBar1');_this.sBar96.frame=1;
        _this.sBar96.anchor.setTo(0.5);
        _this.sBar96.inputEnabled=false;
        _this.sBar96.scale.setTo(1,1);
        _this.sBar96X=_this.sBar96.x;
        _this.sBar96Y=_this.sBar96.y;
        
        _this.sBar97=this.add.sprite(626,329,'nsd5_5singleBar1');_this.sBar97.frame=1;
        _this.sBar97.anchor.setTo(0.5);
        _this.sBar97.inputEnabled=false;
        _this.sBar97.scale.setTo(1,1);
        _this.sBar97X=_this.sBar97.x;
        _this.sBar97Y=_this.sBar97.y;
        
        _this.sBar98=this.add.sprite(626,366,'nsd5_5singleBar1');_this.sBar98.frame=1;
        _this.sBar98.anchor.setTo(0.5);
        _this.sBar98.inputEnabled=false;
        _this.sBar98.scale.setTo(1,1);
        _this.sBar98X=_this.sBar98.x;
        _this.sBar98Y=_this.sBar98.y;
        
        _this.sBar99=this.add.sprite(626,406,'nsd5_5singleBar1');_this.sBar99.frame=1;
        _this.sBar99.anchor.setTo(0.5);
        _this.sBar99.inputEnabled=false;
        _this.sBar99.scale.setTo(1,1);
        _this.sBar99X=_this.sBar99.x;
        _this.sBar99Y=_this.sBar99.y;
                
        _this.sBar100=this.add.sprite(626,445,'nsd5_5singleBar1');_this.sBar100.frame=1;
        _this.sBar100.anchor.setTo(0.5);
        _this.sBar100.inputEnabled=false;
        _this.sBar100.scale.setTo(1,1);
        _this.sBar100X=_this.sBar100.x;
        _this.sBar100Y=_this.sBar100.y;
        /***************************************************/
        
        for(var i=1;i<=100;i++)
            {
                _this["sBar"+i].events.onInputDown.add(_this.boxClicked,this);
                _this["sBar"+i].name = "sBar"+i;
            }
        
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        smallGroup.add(_this.sBar26);
        smallGroup.add(_this.sBar27);
        smallGroup.add(_this.sBar28); 
        smallGroup.add(_this.sBar29);
        smallGroup.add(_this.sBar30);
        smallGroup.add(_this.sBar31); 
        smallGroup.add(_this.sBar32);
        smallGroup.add(_this.sBar33); 
        smallGroup.add(_this.sBar34); 
        smallGroup.add(_this.sBar35);
        smallGroup.add(_this.sBar36); 
        smallGroup.add(_this.sBar37);
        smallGroup.add(_this.sBar38); 
        smallGroup.add(_this.sBar39);
        smallGroup.add(_this.sBar40);
        smallGroup.add(_this.sBar41); 
        smallGroup.add(_this.sBar42);
        smallGroup.add(_this.sBar43); 
        smallGroup.add(_this.sBar44); 
        smallGroup.add(_this.sBar45);
        smallGroup.add(_this.sBar46); 
        smallGroup.add(_this.sBar47);
        smallGroup.add(_this.sBar48); 
        smallGroup.add(_this.sBar49);
        smallGroup.add(_this.sBar50);
        smallGroup.add(_this.sBar51); 
        smallGroup.add(_this.sBar52);
        smallGroup.add(_this.sBar53); 
        smallGroup.add(_this.sBar54); 
        smallGroup.add(_this.sBar55);
        smallGroup.add(_this.sBar56); 
        smallGroup.add(_this.sBar57);
        smallGroup.add(_this.sBar58); 
        smallGroup.add(_this.sBar59);
        smallGroup.add(_this.sBar60);
        smallGroup.add(_this.sBar61); 
        smallGroup.add(_this.sBar62);
        smallGroup.add(_this.sBar63); 
        smallGroup.add(_this.sBar64); 
        smallGroup.add(_this.sBar65);
        smallGroup.add(_this.sBar66); 
        smallGroup.add(_this.sBar67);
        smallGroup.add(_this.sBar68); 
        smallGroup.add(_this.sBar69);
        smallGroup.add(_this.sBar70);
        smallGroup.add(_this.sBar71); 
        smallGroup.add(_this.sBar72);
        smallGroup.add(_this.sBar73); 
        smallGroup.add(_this.sBar74); 
        smallGroup.add(_this.sBar75);
        smallGroup.add(_this.sBar76); 
        smallGroup.add(_this.sBar77);
        smallGroup.add(_this.sBar78); 
        smallGroup.add(_this.sBar79);
        smallGroup.add(_this.sBar80);
        smallGroup.add(_this.sBar81); 
        smallGroup.add(_this.sBar82);
        smallGroup.add(_this.sBar83); 
        smallGroup.add(_this.sBar84); 
        smallGroup.add(_this.sBar85);
        smallGroup.add(_this.sBar86); 
        smallGroup.add(_this.sBar87);
        smallGroup.add(_this.sBar88); 
        smallGroup.add(_this.sBar89);
        smallGroup.add(_this.sBar90);
        smallGroup.add(_this.sBar91); 
        smallGroup.add(_this.sBar92);
        smallGroup.add(_this.sBar93); 
        smallGroup.add(_this.sBar94); 
        smallGroup.add(_this.sBar95);
        smallGroup.add(_this.sBar96); 
        smallGroup.add(_this.sBar97);
        smallGroup.add(_this.sBar98); 
        smallGroup.add(_this.sBar99);
        smallGroup.add(_this.sBar100);
                
            smallGroup.x = -600;
            _this.tween = _this.add.tween(smallGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tensBar = _this.add.sprite(160,206,'nsd5_5tensBar');
        _this.tensBar.anchor.setTo(0.5);
        _this.tensBar.scale.setTo(0.6,0.6);
        _this.tensBarX=_this.tensBar.x;
        _this.tensBarY=_this.tensBar.y;
        _this.tensBar.inputEnabled=true;
                
        _this.singleBar = _this.add.sprite(160,388,'nsd5_5singleBar1');
        _this.singleBar.anchor.setTo(0.5);
        _this.singleBar.scale.setTo(0.6,0.6);
        _this.singleBarX=_this.singleBar.x;
        _this.singleBarY=_this.singleBar.y;
        _this.singleBar.inputEnabled=true;
                        
        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.tensBar);
        flagGroup2.add(_this.singleBar);
       
                
        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        /***************************************************/
        _this.lBar1=this.add.sprite(273,269.8,'nsd5_5tensBar');_this.lBar1.visible=false;
        _this.lBar1.anchor.setTo(0.5);
        _this.lBar1.inputEnabled=false;
        _this.lBar1.scale.setTo(1,1);
        _this.lBar1X=_this.lBar1.x;
        _this.lBar1Y=_this.lBar1.y;
        
        _this.lBar2=this.add.sprite(313,269.8,'nsd5_5tensBar');_this.lBar2.visible=false;
        _this.lBar2.anchor.setTo(0.5);
        _this.lBar2.inputEnabled=false;
        _this.lBar2.scale.setTo(1,1);
        _this.lBar2X=_this.lBar2.x;
        _this.lBar2Y=_this.lBar2.y;
        
        _this.lBar3=this.add.sprite(353,269.8,'nsd5_5tensBar');_this.lBar3.visible=false;
        _this.lBar3.anchor.setTo(0.5);
        _this.lBar3.inputEnabled=false;
        _this.lBar3.scale.setTo(1,1);
        _this.lBar3X=_this.lBar3.x;
        _this.lBar3Y=_this.lBar3.y;
        
        _this.lBar4=this.add.sprite(393,269.8,'nsd5_5tensBar');_this.lBar4.visible=false;
        _this.lBar4.anchor.setTo(0.5);
        _this.lBar4.inputEnabled=false;
        _this.lBar4.scale.setTo(1,1);
        _this.lBar4X=_this.lBar4.x;
        _this.lBar4Y=_this.lBar4.y;
        
        _this.lBar5=this.add.sprite(432.5,269.8,'nsd5_5tensBar');_this.lBar5.visible=false;
        _this.lBar5.anchor.setTo(0.5);
        _this.lBar5.inputEnabled=false;
        _this.lBar5.scale.setTo(1,1);
        _this.lBar5X=_this.lBar5.x;
        _this.lBar5Y=_this.lBar5.y;
        
        _this.lBar6=this.add.sprite(472.5,269.8,'nsd5_5tensBar');_this.lBar6.visible=false;
        _this.lBar6.anchor.setTo(0.5);
        _this.lBar6.inputEnabled=false;
        _this.lBar6.scale.setTo(1,1);
        _this.lBar6X=_this.lBar6.x;
        _this.lBar6Y=_this.lBar6.y;
        
        _this.lBar7=this.add.sprite(510,269.8,'nsd5_5tensBar');_this.lBar7.visible=false;
        _this.lBar7.anchor.setTo(0.5);
        _this.lBar7.inputEnabled=false;
        _this.lBar7.scale.setTo(1,1);
        _this.lBar7X=_this.lBar7.x;
        _this.lBar7Y=_this.lBar7.y;
        
        _this.lBar8=this.add.sprite(547,269.8,'nsd5_5tensBar');_this.lBar8.visible=false;//554,269.8
        _this.lBar8.anchor.setTo(0.5);
        _this.lBar8.inputEnabled=false;
        _this.lBar8.scale.setTo(1,1);
        _this.lBar8X=_this.lBar8.x;
        _this.lBar8Y=_this.lBar8.y;
        
        _this.lBar9=this.add.sprite(587,269.8,'nsd5_5tensBar');_this.lBar9.visible=false;
        _this.lBar9.anchor.setTo(0.5);
        _this.lBar9.inputEnabled=false;
        _this.lBar9.scale.setTo(1,1);
        _this.lBar9X=_this.lBar9.x;
        _this.lBar9Y=_this.lBar9.y;
        
        _this.lBar10=this.add.sprite(626,269.8,'nsd5_5tensBar');_this.lBar10.visible=false;
        _this.lBar10.anchor.setTo(0.5);
        _this.lBar10.inputEnabled=false;
        _this.lBar10.scale.setTo(1,1);
        _this.lBar10X=_this.lBar10.x;
        _this.lBar10Y=_this.lBar10.y;
        
        largeGroup = _this.add.group();
        largeGroup.add(_this.lBar1); 
        largeGroup.add(_this.lBar2);
        largeGroup.add(_this.lBar3); 
        largeGroup.add(_this.lBar4);
        largeGroup.add(_this.lBar5); 
        largeGroup.add(_this.lBar6);
        largeGroup.add(_this.lBar7); 
        largeGroup.add(_this.lBar8);
        largeGroup.add(_this.lBar9);
        largeGroup.add(_this.lBar10);
        
            largeGroup.x = -600;
            _this.tween = _this.add.tween(largeGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
                
        _this.tensBar.events.onInputDown.add(_this.clickedSprite,this);
        _this.singleBar.events.onInputDown.add(_this.clickedSprite,this);
        _this.lBar1.events.onInputDown.add(_this.clicked1,this);
        _this.lBar2.events.onInputDown.add(_this.clicked2,this);
        _this.lBar3.events.onInputDown.add(_this.clicked3,this);
        _this.lBar4.events.onInputDown.add(_this.clicked4,this);
        _this.lBar5.events.onInputDown.add(_this.clicked5,this);
        _this.lBar6.events.onInputDown.add(_this.clicked6,this);
        _this.lBar7.events.onInputDown.add(_this.clicked7,this);
        _this.lBar8.events.onInputDown.add(_this.clicked8,this);
        _this.lBar9.events.onInputDown.add(_this.clicked9,this);
        _this.lBar10.events.onInputDown.add(_this.clicked10,this);
        
       
   /***********************************************************/     
        boxgroup=_this.add.group();
        
        _this.box1 = _this.add.sprite(740,335,'nsd5_5fractionscorebox');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.6,1.5);
                
        _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
        _this.box1.events.onInputDown.add(function(target)
        {
            _this.clickSound.play();
            _this.numBox1Pressed =  false;     
            _this.numBox2Pressed =  false;     
        
             _this.box1.frame=2;
             _this.box2.frame=1;
        
                _this.box1.name = "box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(695,374,'nsd5_5divisionline');
         _this.line.scale.setTo(1.2,1); 
        
         _this.box2 = _this.add.sprite(740,420,'nsd5_5fractionscorebox');
         _this.box2.anchor.setTo(0.5);
         _this.box2.scale.setTo(1.6,1.5);
        
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
         _this.box2.events.onInputDown.add(function(target)
         {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
         _this.numBox2Pressed =  false;     
         
         _this.box1.frame=1;
         _this.box2.frame=2;
         
                _this.box2.name = "box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          
      boxgroup.add(_this.box1);
      boxgroup.add(_this.box2);
      boxgroup.add(_this.line);
        
        boxgroup.x = -600;
        _this.tween = _this.add.tween(boxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.box1.frame=2;
        _this.box2.frame=1;
        _this.box1.name = "box1A";
        _this.selectedBox = _this.box1.name;
       
    },
       
 addNumberPad:function(){
        
             
          _this.box1.frame=1;
          _this.box2.frame=1;
          
          _this.box1.inputEnabled = true;
          _this.box2.inputEnabled = true;

          _this.box1.frame=2;
        _this.box2.frame=1;
        _this.box1.name = "box1A";
        _this.selectedBox = _this.box1.name;

          
          
        _this.numBackground = this.add.sprite(480,507,'nsd5_5_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numBackground.scale.setTo(1,0.9);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);
     
        var x = 120;
             
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'nsd5_5numberpad'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.5,0.5);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=60;
        }
       for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
            
            _this.numTxt1 = this.add.text(0,1, _this.selectedAns1="");
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'myfont';
            _this.numTxt1.fontWeight = 'Normal';
            _this.numTxt1.fontSize = 25;
            _this.numTxt1.fill = '#65B4C3';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.box1.addChild(_this.numTxt1);

            _this.numTxt2 = this.add.text(0,-1, _this.selectedAns2="");
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'myfont';
            _this.numTxt2.fontWeight = 'Normal';
            _this.numTxt2.fontSize = 25;
            _this.numTxt2.fill = '#65B4C3';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.box2.addChild(_this.numTxt2);
                 
       
        _this.eraser = _this.numGroup.create(x+20,510,'nsd5_5_erase');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(x+80,510,'nsd5_5_rightmark');
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
        if(_this.selectedBox=="box1A"||_this.numBox1Pressed==true)
            {
                _this.selectedAns1="";
                _this.numTxt1.setText("");
            }
            if(_this.selectedBox=="box2A"||_this.numBox2Pressed==true)
            {
                _this.selectedAns2="";
                _this.numTxt2.setText("");
            }
            
          },this);
         _this.eraser.events.onInputUp.add(function(target){
           target.frame=0;
       }, this)
    
        _this.numGroup.y  = 100;
      
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
       
         _this.checkAns();
    },
    
 numClicked:function(target){
        _this.num = target.name;
        console.log(_this.num);
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
         console.log("ghgdhghdj");
                if(_this.selectedBox == "box1A")
                {
                    _this.box1.frame=2;
                    if(_this.selectedAns1.length<2)
                    {
                        _this.selectedAns1+= target.name;
                        console.log("1a");
                        _this.numTxt1.setText(_this.selectedAns1);
                       
                    }
                }
                else if(_this.selectedBox == "box2A")
                  {
                      if(_this.selectedAns2.length<3)
                        {
                            _this.selectedAns2+= target.name;
                            console.log("2a");
                            _this.numTxt2.setText(_this.selectedAns2);

                        }
                  }
                else if(_this.numBox1Pressed==true)
                {
                if(_this.selectedAns1.length<2)
                {
                    _this.selectedAns1+= target.name;
                    console.log("1b");
                   _this.numTxt1.setText(_this.selectedAns1);
                    if(_this.selectedAns1.length==2)
                       {
                            _this.numBox1Pressed = false;
                            _this.numBox2Pressed = true;
                            _this.box2.frame = 2;
                            _this.box1.frame = 1;   
                       }
                    
                }
            }
            else if(_this.numBox2Pressed==true)
            {
                if(_this.selectedAns2.length<3)
                {
                    _this.selectedAns2+= target.name;
                    console.log("2b");
                    _this.numTxt2.setText(_this.selectedAns2);
                     if(_this.selectedAns2.length==3)
                       {
                            _this.numBox2Pressed = true;
                            _this.numBox1Pressed = false;
                            _this.box1.frame = 1;
                            _this.box2.frame = 1;
                       }
                    
                }
            }
          
    },
    
 checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
    
 
    /*********************grid to whitebox drag function***************/
      boxClicked:function(target)
    {
        _this.clickSound.play();
        var xpos = target.x;
        var ypos = target.y;
        console.log(target.name);
        target.input.enableDrag();
        //_this.world.bringToTop(smallGroup);
        //smallGroup.bringToTop(target);
        target.events.onDragStop.add(function(target){
        if(_this.checkOverlap(target,_this.whiteBox))
            {
               _this.snapSound.play();
               target.frame=1; 
               target.inputEnabled=false;
            }
        else
            {
             target.frame=0;   
            }
        _this.snapSound.play();
        target.x=xpos;
        target.y=ypos;
    },this);
    },
    
    clickedSprite:function(target)
    {
        _this.clickSound.play();
        _this.tensBar.input.enableDrag();
        _this.singleBar.input.enableDrag();
        //_this.world.bringToTop(target);
        _this.tensBar.events.onDragStop.add(_this.drag1,this);
        _this.singleBar.events.onDragStop.add(_this.drag3,this);
    },
    
/*************************Grid to whitebox*****************************/    
    clicked10:function(target)
    {
        _this.clickSound.play();
     _this.sBar91.frame=1;   
     _this.sBar92.frame=1;   
     _this.sBar93.frame=1;   
     _this.sBar94.frame=1;   
     _this.sBar95.frame=1;   
     _this.sBar96.frame=1;   
     _this.sBar97.frame=1;   
     _this.sBar98.frame=1;   
     _this.sBar99.frame=1;   
     _this.sBar100.frame=1;
        _this.lBar10.input.enableDrag(); 
        _this.world.bringToTop(largeGroup);
        largeGroup.bringToTop(target);
      _this.lBar10.events.onDragStop.add(function(target){
          if(_this.checkOverlap(target,_this.whiteBox))
          {
              _this.snapSound.play();
              target.visible=false;
              target.inputEnabled=false;
                 _this.sBar91.frame=1;   
                 _this.sBar92.frame=1;   
                 _this.sBar93.frame=1;   
                 _this.sBar94.frame=1;   
                 _this.sBar95.frame=1;   
                 _this.sBar96.frame=1;   
                 _this.sBar97.frame=1;   
                 _this.sBar98.frame=1;   
                 _this.sBar99.frame=1;   
                 _this.sBar100.frame=1;
                 _this.a10=0;
            }
          else{ 
                 
                 _this.sBar91.frame=0;   
                 _this.sBar92.frame=0;   
                 _this.sBar93.frame=0;   
                 _this.sBar94.frame=0;   
                 _this.sBar95.frame=0;   
                 _this.sBar96.frame=0;   
                 _this.sBar97.frame=0;   
                 _this.sBar98.frame=0;   
                 _this.sBar99.frame=0;   
                 _this.sBar100.frame=0;
              }
                 _this.snapSound.play();
                 target.x=_this.lBar10X;
                 target.y=_this.lBar10Y;    
       },this);
},
    clicked9:function(target)
    {  
         _this.clickSound.play();
         _this.sBar81.frame=1;   
         _this.sBar82.frame=1;   
         _this.sBar83.frame=1;   
         _this.sBar84.frame=1;   
         _this.sBar85.frame=1;   
         _this.sBar86.frame=1;   
         _this.sBar87.frame=1;   
         _this.sBar88.frame=1;   
         _this.sBar89.frame=1;   
         _this.sBar90.frame=1;
     _this.lBar9.input.enableDrag(); 
     _this.world.bringToTop(largeGroup);
     largeGroup.bringToTop(target);
     _this.lBar9.events.onDragStop.add(function(target){
              if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar81.frame=1;   
                         _this.sBar82.frame=1;   
                         _this.sBar83.frame=1;   
                         _this.sBar84.frame=1;   
                         _this.sBar85.frame=1;   
                         _this.sBar86.frame=1;   
                         _this.sBar87.frame=1;   
                         _this.sBar88.frame=1;   
                         _this.sBar89.frame=1;   
                         _this.sBar90.frame=1;
                         _this.a9=0;
               }
                    else{
                        
                     _this.sBar81.frame=0;   
                     _this.sBar82.frame=0;   
                     _this.sBar83.frame=0;   
                     _this.sBar84.frame=0;   
                     _this.sBar85.frame=0;   
                     _this.sBar86.frame=0;   
                     _this.sBar87.frame=0;   
                     _this.sBar88.frame=0;   
                     _this.sBar89.frame=0;   
                     _this.sBar90.frame=0;
                    }
                    _this.snapSound.play();
                    target.x=_this.lBar9X;
                    target.y=_this.lBar9Y;   
       },this);
    },
    clicked8:function(target)
    {
         _this.clickSound.play();
         _this.sBar71.frame=1;   
         _this.sBar72.frame=1;   
         _this.sBar73.frame=1;   
         _this.sBar74.frame=1;   
         _this.sBar75.frame=1;   
         _this.sBar76.frame=1;   
         _this.sBar77.frame=1;   
         _this.sBar78.frame=1;   
         _this.sBar79.frame=1;   
         _this.sBar80.frame=1;
                _this.lBar8.input.enableDrag();
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar8.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar71.frame=1;   
                         _this.sBar72.frame=1;   
                         _this.sBar73.frame=1;   
                         _this.sBar74.frame=1;   
                         _this.sBar75.frame=1;   
                         _this.sBar76.frame=1;   
                         _this.sBar77.frame=1;   
                         _this.sBar78.frame=1;   
                         _this.sBar79.frame=1;   
                         _this.sBar80.frame=1;
                         _this.a8=0;
               }
                    else
                    {   
                        
                        _this.sBar71.frame=0;   
                         _this.sBar72.frame=0;   
                         _this.sBar73.frame=0;   
                         _this.sBar74.frame=0;   
                         _this.sBar75.frame=0;   
                         _this.sBar76.frame=0;   
                         _this.sBar77.frame=0;   
                         _this.sBar78.frame=0;   
                         _this.sBar79.frame=0;   
                         _this.sBar80.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar8X;
                     target.y=_this.lBar8Y;    
       },this);
    },
    clicked7:function(target)
    { 
        _this.clickSound.play();
         _this.sBar61.frame=1;   
         _this.sBar62.frame=1;   
         _this.sBar63.frame=1;   
         _this.sBar64.frame=1;   
         _this.sBar65.frame=1;   
         _this.sBar66.frame=1;   
         _this.sBar67.frame=1;   
         _this.sBar68.frame=1;   
         _this.sBar69.frame=1;   
         _this.sBar70.frame=1;
                _this.lBar7.input.enableDrag();
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar7.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar61.frame=1;   
                         _this.sBar62.frame=1;   
                         _this.sBar63.frame=1;   
                         _this.sBar64.frame=1;   
                         _this.sBar65.frame=1;   
                         _this.sBar66.frame=1;   
                         _this.sBar67.frame=1;   
                         _this.sBar68.frame=1;   
                         _this.sBar69.frame=1;   
                         _this.sBar70.frame=1;
                         _this.a7=0;
               }
                    else{
                        
                     _this.sBar61.frame=0;   
                     _this.sBar62.frame=0;   
                     _this.sBar63.frame=0;   
                     _this.sBar64.frame=0;   
                     _this.sBar65.frame=0;   
                     _this.sBar66.frame=0;   
                     _this.sBar67.frame=0;   
                     _this.sBar68.frame=0;   
                     _this.sBar69.frame=0;   
                     _this.sBar70.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar7X;
                     target.y=_this.lBar7Y;    
       },this);
    },
    clicked6:function(target)
    { 
        _this.clickSound.play();
         _this.sBar51.frame=1;   
         _this.sBar52.frame=1;   
         _this.sBar53.frame=1;   
         _this.sBar54.frame=1;   
         _this.sBar55.frame=1;   
         _this.sBar56.frame=1;   
         _this.sBar57.frame=1;   
         _this.sBar58.frame=1;   
         _this.sBar59.frame=1;   
         _this.sBar60.frame=1;
                _this.lBar6.input.enableDrag(); 
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar6.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar51.frame=1;   
                         _this.sBar52.frame=1;   
                         _this.sBar53.frame=1;   
                         _this.sBar54.frame=1;   
                         _this.sBar55.frame=1;   
                         _this.sBar56.frame=1;   
                         _this.sBar57.frame=1;   
                         _this.sBar58.frame=1;   
                         _this.sBar59.frame=1;   
                         _this.sBar60.frame=1;
                         _this.a6=0;
               }
            else{
                    
                     _this.sBar51.frame=0;   
                     _this.sBar52.frame=0;   
                     _this.sBar53.frame=0;   
                     _this.sBar54.frame=0;   
                     _this.sBar55.frame=0;   
                     _this.sBar56.frame=0;   
                     _this.sBar57.frame=0;   
                     _this.sBar58.frame=0;   
                     _this.sBar59.frame=0;   
                     _this.sBar60.frame=0;
                }
                     _this.snapSound.play();
                     target.x=_this.lBar6X;
                     target.y=_this.lBar6Y;     
       },this);
    },
    clicked5:function(target)
    { 
        _this.clickSound.play();
         _this.sBar41.frame=1;   
         _this.sBar42.frame=1;   
         _this.sBar43.frame=1;   
         _this.sBar44.frame=1;   
         _this.sBar45.frame=1;   
         _this.sBar46.frame=1;   
         _this.sBar47.frame=1;   
         _this.sBar48.frame=1;   
         _this.sBar49.frame=1;   
         _this.sBar50.frame=1;
                _this.lBar5.input.enableDrag(); 
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar5.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar42.frame=1;   
                         _this.sBar43.frame=1;   
                         _this.sBar44.frame=1;   
                         _this.sBar45.frame=1;   
                         _this.sBar46.frame=1;   
                         _this.sBar47.frame=1;   
                         _this.sBar48.frame=1;   
                         _this.sBar49.frame=1;   
                         _this.sBar50.frame=1;
                         _this.a5=0;
               }
                else{
                    
                     _this.sBar42.frame=0;   
                     _this.sBar43.frame=0;   
                     _this.sBar44.frame=0;   
                     _this.sBar45.frame=0;   
                     _this.sBar46.frame=0;   
                     _this.sBar47.frame=0;   
                     _this.sBar48.frame=0;   
                     _this.sBar49.frame=0;   
                     _this.sBar50.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar5X;
                     target.y=_this.lBar5Y;
       },this);
    },
    clicked4:function(target)
    { 
        _this.clickSound.play();
         _this.sBar31.frame=1;   
         _this.sBar32.frame=1;   
         _this.sBar33.frame=1;   
         _this.sBar34.frame=1;   
         _this.sBar35.frame=1;   
         _this.sBar36.frame=1;   
         _this.sBar37.frame=1;   
         _this.sBar38.frame=1;   
         _this.sBar39.frame=1;   
         _this.sBar40.frame=1;
                _this.lBar4.input.enableDrag(); 
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar4.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar31.frame=1;   
                         _this.sBar32.frame=1;   
                         _this.sBar33.frame=1;   
                         _this.sBar34.frame=1;   
                         _this.sBar35.frame=1;   
                         _this.sBar36.frame=1;   
                         _this.sBar37.frame=1;   
                         _this.sBar38.frame=1;   
                         _this.sBar39.frame=1;   
                         _this.sBar40.frame=1;
                         _this.a4=0;
               }
                else {
                         
                         _this.sBar31.frame=0;   
                         _this.sBar32.frame=0;   
                         _this.sBar33.frame=0;   
                         _this.sBar34.frame=0;   
                         _this.sBar35.frame=0;   
                         _this.sBar36.frame=0;   
                         _this.sBar37.frame=0;   
                         _this.sBar38.frame=0;   
                         _this.sBar39.frame=0;   
                         _this.sBar40.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar4X;
                     target.y=_this.lBar4Y;
       },this);
    },
    clicked3:function(target)
    { 
        _this.clickSound.play();
         _this.sBar21.frame=1;   
         _this.sBar22.frame=1;   
         _this.sBar23.frame=1;   
         _this.sBar24.frame=1;   
         _this.sBar25.frame=1;   
         _this.sBar26.frame=1;   
         _this.sBar27.frame=1;   
         _this.sBar28.frame=1;   
         _this.sBar29.frame=1;   
         _this.sBar30.frame=1;
                _this.lBar3.input.enableDrag();
                _this.world.bringToTop(largeGroup);
                largeGroup.bringToTop(target);
                _this.lBar3.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
               {
                        _this.snapSound.play();
                        target.visible=false;
                        target.inputEnabled=false;
                         _this.sBar21.frame=1;   
                         _this.sBar22.frame=1;   
                         _this.sBar23.frame=1;   
                         _this.sBar24.frame=1;   
                         _this.sBar25.frame=1;   
                         _this.sBar26.frame=1;   
                         _this.sBar27.frame=1;   
                         _this.sBar28.frame=1;   
                         _this.sBar29.frame=1;   
                         _this.sBar30.frame=1;
                         _this.a3=0;
               }
                    else {
                            
                             _this.sBar21.frame=0;   
                             _this.sBar22.frame=0;   
                             _this.sBar23.frame=0;   
                             _this.sBar24.frame=0;   
                             _this.sBar25.frame=0;   
                             _this.sBar26.frame=0;   
                             _this.sBar27.frame=0;   
                             _this.sBar28.frame=0;   
                             _this.sBar29.frame=0;   
                             _this.sBar30.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar3X;
                     target.y=_this.lBar3Y;    
       },this);
    },
    clicked2:function(target)
    {
        _this.clickSound.play();
         _this.sBar11.frame=1;   
         _this.sBar12.frame=1;   
         _this.sBar13.frame=1;   
         _this.sBar14.frame=1;   
         _this.sBar15.frame=1;   
         _this.sBar16.frame=1;   
         _this.sBar17.frame=1;   
         _this.sBar18.frame=1;   
         _this.sBar19.frame=1;   
         _this.sBar20.frame=1;
        _this.lBar2.input.enableDrag();
        _this.world.bringToTop(largeGroup);
        largeGroup.bringToTop(target);
        _this.lBar2.events.onDragStop.add(function(target){
                if(_this.checkOverlap(target,_this.whiteBox))
                {
                    _this.snapSound.play();
                    target.visible=false;
                    target.inputEnabled=false;
                     _this.sBar11.frame=1;   
                     _this.sBar12.frame=1;   
                     _this.sBar13.frame=1;   
                     _this.sBar14.frame=1;   
                     _this.sBar15.frame=1;   
                     _this.sBar16.frame=1;   
                     _this.sBar17.frame=1;   
                     _this.sBar18.frame=1;   
                     _this.sBar19.frame=1;   
                     _this.sBar20.frame=1;
                     _this.a2=0;
               }
                else{
                        
                         _this.sBar11.frame=0;   
                         _this.sBar12.frame=0;   
                         _this.sBar13.frame=0;   
                         _this.sBar14.frame=0;   
                         _this.sBar15.frame=0;   
                         _this.sBar16.frame=0;   
                         _this.sBar17.frame=0;   
                         _this.sBar18.frame=0;   
                         _this.sBar19.frame=0;   
                         _this.sBar20.frame=0;
                    }
                     _this.snapSound.play();
                     target.x=_this.lBar2X;
                     target.y=_this.lBar2Y;
       },this);
    },
    clicked1:function(target)
    {
        _this.clickSound.play();
         _this.lBar1.input.enableDrag();
         _this.sBar1.frame=1;   
         _this.sBar2.frame=1;   
         _this.sBar3.frame=1;   
         _this.sBar4.frame=1;   
         _this.sBar5.frame=1;   
         _this.sBar6.frame=1;   
         _this.sBar7.frame=1;   
         _this.sBar8.frame=1;   
         _this.sBar9.frame=1;   
         _this.sBar10.frame=1;
        _this.world.bringToTop(largeGroup);
        largeGroup.bringToTop(target);
        _this.lBar1.events.onDragStop.add(function(target){
           if(_this.checkOverlap(target,_this.whiteBox))
            {
                _this.snapSound.play();
               target.visible=false;
               target.inputEnabled=false;
             _this.sBar1.frame=1;   
             _this.sBar2.frame=1;   
             _this.sBar3.frame=1;   
             _this.sBar4.frame=1;   
             _this.sBar5.frame=1;   
             _this.sBar6.frame=1;   
             _this.sBar7.frame=1;   
             _this.sBar8.frame=1;   
             _this.sBar9.frame=1;   
             _this.sBar10.frame=1;
             _this.a1=0;
        }
           else{          
                    
                     _this.sBar1.frame=0;   
                     _this.sBar2.frame=0;   
                     _this.sBar3.frame=0;   
                     _this.sBar4.frame=0;   
                     _this.sBar5.frame=0;   
                     _this.sBar6.frame=0;   
                     _this.sBar7.frame=0;   
                     _this.sBar8.frame=0;   
                     _this.sBar9.frame=0;   
                     _this.sBar10.frame=0;
               }
                     _this.snapSound.play();
                     target.x=_this.lBar1X;
                     target.y=_this.lBar1Y;
       },this);  
    },
    /***********************whitebox to grid*******************/
    drag1:function(target){ 
       // this.world.bringToTop(largeGroup);
           if(_this.checkOverlap(target,_this.grid))
               {
                   _this.snapSound.play();
                   _this.a=1;
                   if(_this.b<1)
                   {
                        if(_this.lBar1.visible==false&&_this.sBar1.frame==1)
                         {
                         _this.sBar1.frame=0;   
                         _this.sBar2.frame=0;   
                         _this.sBar3.frame=0;   
                         _this.sBar4.frame=0;   
                         _this.sBar5.frame=0;   
                         _this.sBar6.frame=0;   
                         _this.sBar7.frame=0;   
                         _this.sBar8.frame=0;   
                         _this.sBar9.frame=0;   
                         _this.sBar10.frame=0;
                             _this.lBar1.visible=true;
                             _this.lBar1.inputEnabled=true;
                         }  
                   else if(_this.lBar2.visible==false&&_this.sBar11.frame==1)
                       {
                         _this.sBar11.frame=0;   
                         _this.sBar12.frame=0;   
                         _this.sBar13.frame=0;   
                         _this.sBar14.frame=0;   
                         _this.sBar15.frame=0;   
                         _this.sBar16.frame=0;   
                         _this.sBar17.frame=0;   
                         _this.sBar18.frame=0;   
                         _this.sBar19.frame=0;   
                         _this.sBar20.frame=0;
                            _this.lBar2.visible=true;
                            _this.lBar2.inputEnabled=true;
                       }
                   else if(_this.lBar3.visible==false&&_this.sBar21.frame==1)
                       {
                             _this.sBar21.frame=0;   
                             _this.sBar22.frame=0;   
                             _this.sBar23.frame=0;   
                             _this.sBar24.frame=0;   
                             _this.sBar25.frame=0;   
                             _this.sBar26.frame=0;   
                             _this.sBar27.frame=0;   
                             _this.sBar28.frame=0;   
                             _this.sBar29.frame=0;   
                             _this.sBar30.frame=0;
                           _this.lBar3.visible=true;
                           _this.lBar3.inputEnabled=true;
                       }
                   else if(_this.lBar4.visible==false&&_this.sBar31.frame==1)
                       {
                         _this.sBar31.frame=0;   
                         _this.sBar32.frame=0;   
                         _this.sBar33.frame=0;   
                         _this.sBar34.frame=0;   
                         _this.sBar35.frame=0;   
                         _this.sBar36.frame=0;   
                         _this.sBar37.frame=0;   
                         _this.sBar38.frame=0;   
                         _this.sBar39.frame=0;   
                         _this.sBar40.frame=0;
                           _this.lBar4.visible=true;
                           _this.lBar4.inputEnabled=true;
                       }
                   else if(_this.lBar5.visible==false&&_this.sBar41.frame==1)
                       {
                             _this.sBar41.frame=0;
                             _this.sBar42.frame=0;   
                             _this.sBar43.frame=0;   
                             _this.sBar44.frame=0;   
                             _this.sBar45.frame=0;   
                             _this.sBar46.frame=0;   
                             _this.sBar47.frame=0;   
                             _this.sBar48.frame=0;   
                             _this.sBar49.frame=0;   
                             _this.sBar50.frame=0;
                           _this.lBar5.visible=true;
                           _this.lBar5.inputEnabled=true;
                       }
                   else if(_this.lBar6.visible==false&&_this.sBar51.frame==1)
                       {
                             _this.sBar51.frame=0;   
                             _this.sBar52.frame=0;   
                             _this.sBar53.frame=0;   
                             _this.sBar54.frame=0;   
                             _this.sBar55.frame=0;   
                             _this.sBar56.frame=0;   
                             _this.sBar57.frame=0;   
                             _this.sBar58.frame=0;   
                             _this.sBar59.frame=0;   
                             _this.sBar60.frame=0;
                           _this.lBar6.visible=true;
                           _this.lBar6.inputEnabled=true;
                       }
                   else if(_this.lBar7.visible==false&&_this.sBar61.frame==1)
                       {
                             _this.sBar61.frame=0;
                             _this.sBar62.frame=0;   
                             _this.sBar63.frame=0;   
                             _this.sBar64.frame=0;   
                             _this.sBar65.frame=0;   
                             _this.sBar66.frame=0;   
                             _this.sBar67.frame=0;   
                             _this.sBar68.frame=0;   
                             _this.sBar69.frame=0;   
                             _this.sBar70.frame=0;
                           _this.lBar7.visible=true;
                           _this.lBar7.inputEnabled=true;
                       }
                   else if(_this.lBar8.visible==false&&_this.sBar71.frame==1)
                       {
                         _this.sBar71.frame=0;   
                         _this.sBar72.frame=0;   
                         _this.sBar73.frame=0;   
                         _this.sBar74.frame=0;   
                         _this.sBar75.frame=0;   
                         _this.sBar76.frame=0;   
                         _this.sBar77.frame=0;   
                         _this.sBar78.frame=0;   
                         _this.sBar79.frame=0;   
                         _this.sBar80.frame=0;
                           _this.lBar8.visible=true;
                           _this.lBar8.inputEnabled=true;
                       }
                   else if(_this.lBar9.visible==false&&_this.sBar81.frame==1)
                       {
                             _this.sBar81.frame=0;   
                             _this.sBar82.frame=0;   
                             _this.sBar83.frame=0;   
                             _this.sBar84.frame=0;   
                             _this.sBar85.frame=0;   
                             _this.sBar86.frame=0;   
                             _this.sBar87.frame=0;   
                             _this.sBar88.frame=0;   
                             _this.sBar89.frame=0;   
                             _this.sBar90.frame=0;
                           _this.lBar9.visible=true;
                           _this.lBar9.inputEnabled=true;
                       }
                   else if(_this.lBar10.visible==false&&_this.sBar91.frame==1)
                       {
                         _this.sBar91.frame=0;   
                         _this.sBar92.frame=0;   
                         _this.sBar93.frame=0;   
                         _this.sBar94.frame=0;   
                         _this.sBar95.frame=0;   
                         _this.sBar96.frame=0;   
                         _this.sBar97.frame=0;   
                         _this.sBar98.frame=0;   
                         _this.sBar99.frame=0;   
                         _this.sBar100.frame=0;
                           _this.lBar10.visible=true;
                           _this.lBar10.inputEnabled=true;
                       }
                           _this.tensBar.x=_this.tensBarX;
                           _this.tensBar.y=_this.tensBarY;
                       }
                          _this.tensBar.x=_this.tensBarX;
                          _this.tensBar.y=_this.tensBarY;
                   
                        if(_this.addingNumPad == false)
                        {
                            _this.addNumberPad();
                            _this.addingNumPad=true;
                        }
                          
               }
                         
                          _this.tensBar.x=_this.tensBarX;
                          _this.tensBar.y=_this.tensBarY;
        
                   console.log("b: "+_this.b);
                   console.log("a: "+_this.a);
       },
        
    drag3:function(target){
           
           if(_this.checkOverlap(target,_this.grid))
               {
                   _this.snapSound.play();
                   console.log("b: "+_this.b);
                   console.log("a: "+_this.a);
                   //_this.world.bringToTop(smallGroup);
                   //smallGroup.bringToTop(target);
                  if(_this.b==0)
                      {
                   if(_this.sBar1.frame==1)
                       {
                           _this.sBar1.frame=0;
                           _this.sBar1.inputEnabled=true;
                       }
                    else if(_this.sBar2.frame==1)
                       {
                           _this.sBar2.frame=0;
                           _this.sBar2.inputEnabled=true;
                       }
                   else if(_this.sBar3.frame==1)
                       {
                           _this.sBar3.frame=0;
                           _this.sBar3.inputEnabled=true;
                       }
                   else if(_this.sBar4.frame==1)
                       {
                           _this.sBar4.frame=0;
                           _this.sBar4.inputEnabled=true;
                       }
                   else if(_this.sBar5.frame==1)
                       {
                           _this.sBar5.frame=0;
                           _this.sBar5.inputEnabled=true;
                       }
                   else if(_this.sBar6.frame==1)
                       {
                           _this.sBar6.frame=0;
                           _this.sBar6.inputEnabled=true;
                       }
                   else if(_this.sBar7.frame==1)
                       {
                           _this.sBar7.frame=0;
                           _this.sBar7.inputEnabled=true;
                       }
                   else if(_this.sBar8.frame==1)
                       {
                           _this.sBar8.frame=0;
                           _this.sBar8.inputEnabled=true;
                       }
                   else if(_this.sBar9.frame==1)
                       {
                           _this.sBar9.frame=0;
                           _this.sBar9.inputEnabled=true;
                       }
                   else if(_this.sBar10.frame==1)
                       {
                           _this.sBar10.frame=0;
                           _this.sBar10.inputEnabled=true;
                       }
                   else if(_this.sBar11.frame==1)
                       {
                           _this.sBar11.frame=0;
                           _this.sBar11.inputEnabled=true;
                       }
                   else if(_this.sBar12.frame==1)
                       {
                           _this.sBar12.frame=0;
                           _this.sBar12.inputEnabled=true;
                       }
                   else if(_this.sBar13.frame==1)
                       {
                           _this.sBar13.frame=0;
                           _this.sBar13.inputEnabled=true;
                       }
                   else if(_this.sBar14.frame==1)
                       {
                           _this.sBar14.frame=0;
                           _this.sBar14.inputEnabled=true;
                       }
                   else if(_this.sBar15.frame==1)
                       {
                           _this.sBar15.frame=0;
                           _this.sBar15.inputEnabled=true;
                       }
                   else if(_this.sBar16.frame==1)
                       {
                           _this.sBar16.frame=0;
                           _this.sBar16.inputEnabled=true;
                       }
                   else if(_this.sBar17.frame==1)
                       {
                           _this.sBar17.frame=0;
                           _this.sBar17.inputEnabled=true;
                       }
                   else if(_this.sBar18.frame==1)
                       {
                           _this.sBar18.frame=0;
                           _this.sBar18.inputEnabled=true;
                       }
                   else if(_this.sBar19.frame==1)
                       {
                           _this.sBar19.frame=0;
                           _this.sBar19.inputEnabled=true;
                       }
                   else if(_this.sBar20.frame==1)
                       {
                           _this.sBar20.frame=0;
                           _this.sBar20.inputEnabled=true;
                       }
                   else if(_this.sBar21.frame==1)
                       {
                           _this.sBar21.frame=0;
                           _this.sBar21.inputEnabled=true;
                       }
                   else if(_this.sBar22.frame==1)
                       {
                           _this.sBar22.frame=0;
                           _this.sBar22.inputEnabled=true;
                       }
                   else if(_this.sBar23.frame==1)
                       {
                           _this.sBar23.frame=0;
                           _this.sBar23.inputEnabled=true;
                       }
                   else if(_this.sBar24.frame==1)
                       {
                           _this.sBar24.frame=0;
                           _this.sBar24.inputEnabled=true;
                       }
                   else if(_this.sBar25.frame==1)
                       {
                           _this.sBar25.frame=0;
                           _this.sBar25.inputEnabled=true;
                       }
                   else if(_this.sBar26.frame==1)
                       {
                           _this.sBar26.frame=0;
                           _this.sBar26.inputEnabled=true;
                       }
                   else if(_this.sBar27.frame==1)
                       {
                           _this.sBar27.frame=0;
                           _this.sBar27.inputEnabled=true;
                       }
                   else if(_this.sBar28.frame==1)
                       {
                           _this.sBar28.frame=0;
                           _this.sBar28.inputEnabled=true;
                       }
                   else if(_this.sBar29.frame==1)
                       {
                           _this.sBar29.frame=0;
                           _this.sBar29.inputEnabled=true;
                       }
                   else if(_this.sBar30.frame==1)
                       {
                           _this.sBar30.frame=0;
                           _this.sBar30.inputEnabled=true;
                       }
                   else if(_this.sBar31.frame==1)
                       {
                           _this.sBar31.frame=0;
                           _this.sBar31.inputEnabled=true;
                       }
                   else if(_this.sBar32.frame==1)
                       {
                           _this.sBar32.frame=0;
                           _this.sBar32.inputEnabled=true;
                       }
                   else if(_this.sBar33.frame==1)
                       {
                           _this.sBar33.frame=0;
                           _this.sBar33.inputEnabled=true;
                       }
                   else if(_this.sBar34.frame==1)
                       {
                           _this.sBar34.frame=0;
                           _this.sBar34.inputEnabled=true;
                       }
                   else if(_this.sBar35.frame==1)
                       {
                           _this.sBar35.frame=0;
                           _this.sBar35.inputEnabled=true;
                       }
                   else if(_this.sBar36.frame==1)
                       {
                           _this.sBar36.frame=0;
                           _this.sBar36.inputEnabled=true;
                       }
                   else if(_this.sBar37.frame==1)
                       {
                           _this.sBar37.frame=0;
                           _this.sBar37.inputEnabled=true;
                       }
                   else if(_this.sBar38.frame==1)
                       {
                           _this.sBar38.frame=0;
                           _this.sBar38.inputEnabled=true;
                       }
                   else if(_this.sBar39.frame==1)
                       {
                           _this.sBar39.frame=0;
                           _this.sBar39.inputEnabled=true;
                       }
                   else if(_this.sBar40.frame==1)
                       {
                           _this.sBar40.frame=0;
                           _this.sBar40.inputEnabled=true;
                       }
                   else if(_this.sBar41.frame==1)
                       {
                           _this.sBar41.frame=0;
                           _this.sBar41.inputEnabled=true;
                       }
                   else if(_this.sBar42.frame==1)
                       {
                           _this.sBar42.frame=0;
                           _this.sBar42.inputEnabled=true;
                       }
                   else if(_this.sBar43.frame==1)
                       {
                           _this.sBar43.frame=0;
                           _this.sBar43.inputEnabled=true;
                       }
                   else if(_this.sBar44.frame==1)
                       {
                           _this.sBar44.frame=0;
                           _this.sBar44.inputEnabled=true;
                       }
                   else if(_this.sBar45.frame==1)
                       {
                           _this.sBar45.frame=0;
                           _this.sBar45.inputEnabled=true;
                       }
                   else if(_this.sBar46.frame==1)
                       {
                           _this.sBar46.frame=0;
                           _this.sBar46.inputEnabled=true;
                       }
                   else if(_this.sBar47.frame==1)
                       {
                           _this.sBar47.frame=0;
                           _this.sBar47.inputEnabled=true;
                       }
                   else if(_this.sBar48.frame==1)
                       {
                           _this.sBar48.frame=0;
                           _this.sBar48.inputEnabled=true;
                       }
                   else if(_this.sBar49.frame==1)
                       {
                           _this.sBar49.frame=0;
                           _this.sBar49.inputEnabled=true;
                       }
                   else if(_this.sBar50.frame==1)
                       {
                           _this.sBar50.frame=0;
                           _this.sBar50.inputEnabled=true;
                       }
                   else if(_this.sBar51.frame==1)
                       {
                           _this.sBar51.frame=0;
                           _this.sBar51.inputEnabled=true;
                       }
                   else if(_this.sBar52.frame==1)
                       {
                           _this.sBar52.frame=0;
                           _this.sBar52.inputEnabled=true;
                       }
                   else if(_this.sBar53.frame==1)
                       {
                           _this.sBar53.frame=0;
                           _this.sBar53.inputEnabled=true;
                       }
                   else if(_this.sBar54.frame==1)
                       {
                           _this.sBar54.frame=0;
                           _this.sBar54.inputEnabled=true;
                       }
                   else if(_this.sBar55.frame==1)
                       {
                           _this.sBar55.frame=0;
                           _this.sBar55.inputEnabled=true;
                       }
                   else if(_this.sBar56.frame==1)
                       {
                           _this.sBar56.frame=0;
                           _this.sBar56.inputEnabled=true;
                       }
                   else if(_this.sBar57.frame==1)
                       {
                           _this.sBar57.frame=0;
                           _this.sBar57.inputEnabled=true;
                       }
                   else if(_this.sBar58.frame==1)
                       {
                           _this.sBar58.frame=0;
                           _this.sBar58.inputEnabled=true;
                       }
                   else if(_this.sBar59.frame==1)
                       {
                           _this.sBar59.frame=0;
                           _this.sBar59.inputEnabled=true;
                       }
                   else if(_this.sBar60.frame==1)
                       {
                           _this.sBar60.frame=0;
                           _this.sBar60.inputEnabled=true;
                       }
                   else if(_this.sBar61.frame==1)
                       {
                           _this.sBar61.frame=0;
                           _this.sBar61.inputEnabled=true;
                       }
                   else if(_this.sBar62.frame==1)
                       {
                           _this.sBar62.frame=0;
                           _this.sBar62.inputEnabled=true;
                       }
                   else if(_this.sBar63.frame==1)
                       {
                           _this.sBar63.frame=0;
                           _this.sBar63.inputEnabled=true;
                       }
                   else if(_this.sBar64.frame==1)
                       {
                           _this.sBar64.frame=0;
                           _this.sBar64.inputEnabled=true;
                       }
                   else if(_this.sBar65.frame==1)
                       {
                           _this.sBar65.frame=0;
                           _this.sBar65.inputEnabled=true;
                       }
                   else if(_this.sBar66.frame==1)
                       {
                           _this.sBar66.frame=0;
                           _this.sBar66.inputEnabled=true;
                       }
                   else if(_this.sBar67.frame==1)
                       {
                           _this.sBar67.frame=0;
                           _this.sBar67.inputEnabled=true;
                       }
                   else if(_this.sBar68.frame==1)
                       {
                           _this.sBar68.frame=0;
                           _this.sBar68.inputEnabled=true;
                       }
                   else if(_this.sBar69.frame==1)
                       {
                           _this.sBar69.frame=0;
                           _this.sBar69.inputEnabled=true;
                       }
                   else if(_this.sBar70.frame==1)
                       {
                           _this.sBar70.frame=0;
                           _this.sBar70.inputEnabled=true;
                       }
                   else if(_this.sBar71.frame==1)
                       {
                           _this.sBar71.frame=0;
                           _this.sBar71.inputEnabled=true;
                       }
                   else if(_this.sBar72.frame==1)
                       {
                           _this.sBar72.frame=0;
                           _this.sBar72.inputEnabled=true;
                       }
                   else if(_this.sBar73.frame==1)
                       {
                           _this.sBar73.frame=0;
                           _this.sBar73.inputEnabled=true;
                       }
                   else if(_this.sBar74.frame==1)
                       {
                           _this.sBar74.frame=0;
                           _this.sBar74.inputEnabled=true;
                       }
                   else if(_this.sBar75.frame==1)
                       {
                           _this.sBar75.frame=0;
                           _this.sBar75.inputEnabled=true;
                       }
                   else if(_this.sBar76.frame==1)
                       {
                           _this.sBar76.frame=0;
                           _this.sBar76.inputEnabled=true;
                       }
                   else if(_this.sBar77.frame==1)
                       {
                           _this.sBar77.frame=0;
                           _this.sBar77.inputEnabled=true;
                       }
                   else if(_this.sBar78.frame==1)
                       {
                           _this.sBar78.frame=0;
                           _this.sBar78.inputEnabled=true;
                       }
                   else if(_this.sBar79.frame==1)
                       {
                           _this.sBar79.frame=0;
                           _this.sBar79.inputEnabled=true;
                       }
                   else if(_this.sBar80.frame==1)
                       {
                           _this.sBar80.frame=0;
                           _this.sBar80.inputEnabled=true;
                       }
                   else if(_this.sBar81.frame==1)
                       {
                           _this.sBar81.frame=0;
                           _this.sBar81.inputEnabled=true;
                       }
                   else if(_this.sBar82.frame==1)
                       {
                           _this.sBar82.frame=0;
                           _this.sBar82.inputEnabled=true;
                       }
                   else if(_this.sBar83.frame==1)
                       {
                           _this.sBar83.frame=0;
                           _this.sBar83.inputEnabled=true;
                       }
                   else if(_this.sBar84.frame==1)
                       {
                           _this.sBar84.frame=0;
                           _this.sBar84.inputEnabled=true;
                       }
                   else if(_this.sBar85.frame==1)
                       {
                           _this.sBar85.frame=0;
                           _this.sBar85.inputEnabled=true;
                       }
                   else if(_this.sBar86.frame==1)
                       {
                           _this.sBar86.frame=0;
                           _this.sBar86.inputEnabled=true;
                       }
                   else if(_this.sBar87.frame==1)
                       {
                           _this.sBar87.frame=0;
                           _this.sBar87.inputEnabled=true;
                       }
                   else if(_this.sBar88.frame==1)
                       {
                           _this.sBar88.frame=0;
                           _this.sBar88.inputEnabled=true;
                       }
                   else if(_this.sBar89.frame==1)
                       {
                           _this.sBar89.frame=0;
                           _this.sBar89.inputEnabled=true;
                       }
                   else if(_this.sBar90.frame==1)
                       {
                           _this.sBar90.frame=0;
                           _this.sBar90.inputEnabled=true;
                       }
                   else if(_this.sBar91.frame==1)
                       {
                           _this.sBar91.frame=0;
                           _this.sBar91.inputEnabled=true;
                       }
                   else if(_this.sBar92.frame==1)
                       {
                           _this.sBar92.frame=0;
                           _this.sBar92.inputEnabled=true;
                       }
                   else if(_this.sBar93.frame==1)
                       {
                           _this.sBar93.frame=0;
                           _this.sBar93.inputEnabled=true;
                       }
                   else if(_this.sBar94.frame==1)
                       {
                           _this.sBar94.frame=0;
                           _this.sBar94.inputEnabled=true;
                       }
                   else if(_this.sBar95.frame==1)
                       {
                           _this.sBar95.frame=0;
                           _this.sBar95.inputEnabled=true;
                       }
                   else if(_this.sBar96.frame==1)
                       {
                           _this.sBar96.frame=0;
                           _this.sBar96.inputEnabled=true;
                       }
                   else if(_this.sBar97.frame==1)
                       {
                           _this.sBar97.frame=0;
                           _this.sBar97.inputEnabled=true;
                       }
                   else if(_this.sBar98.frame==1)
                       {
                           _this.sBar98.frame=0;
                           _this.sBar98.inputEnabled=true;
                       }
                   else if(_this.sBar99.frame==1)
                       {
                           _this.sBar99.frame=0;
                           _this.sBar99.inputEnabled=true;
                       }
                   else if(_this.sBar100.frame==1)
                       {
                           _this.sBar100.frame=0;
                           _this.sBar100.inputEnabled=true;
                       }
                      }
            else if(_this.b==0&&_this.a==0)
                {
                   if(_this.sBar1.frame==1)
                       {
                           _this.sBar1.frame=0;
                           _this.sBar1.inputEnabled=true;
                       }
                    else if(_this.sBar2.frame==1)
                       {
                           _this.sBar2.frame=0;
                           _this.sBar2.inputEnabled=true;
                       }
                   else if(_this.sBar3.frame==1)
                       {
                           _this.sBar3.frame=0;
                           _this.sBar3.inputEnabled=true;
                       }
                   else if(_this.sBar4.frame==1)
                       {
                           _this.sBar4.frame=0;
                           _this.sBar4.inputEnabled=true;
                       }
                   else if(_this.sBar5.frame==1)
                       {
                           _this.sBar5.frame=0;
                           _this.sBar5.inputEnabled=true;
                       }
                   else if(_this.sBar6.frame==1)
                       {
                           _this.sBar6.frame=0;
                           _this.sBar6.inputEnabled=true;
                       }
                   else if(_this.sBar7.frame==1)
                       {
                           _this.sBar7.frame=0;
                           _this.sBar7.inputEnabled=true;
                       }
                   else if(_this.sBar8.frame==1)
                       {
                           _this.sBar8.frame=0;
                           _this.sBar8.inputEnabled=true;
                       }
                   else if(_this.sBar9.frame==1)
                       {
                           _this.sBar9.frame=0;
                           _this.b81.inputEnabled=true;
                       }
                   else if(_this.sBar10.frame==1)
                       {
                           _this.sBar10.frame=0;
                           _this.sBar10.inputEnabled=true;
                       }
                   else if(_this.sBar11.frame==1)
                       {
                           _this.sBar11.frame=0;
                           _this.sBar11.inputEnabled=true;
                       }
                   else if(_this.sBar12.frame==1)
                       {
                           _this.sBar12.frame=0;
                           _this.sBar12.inputEnabled=true;
                       }
                   else if(_this.sBar13.frame==1)
                       {
                           _this.sBar13.frame=0;
                           _this.sBar13.inputEnabled=true;
                       }
                   else if(_this.sBar14.frame==1)
                       {
                           _this.sBar14.frame=0;
                           _this.sBar14.inputEnabled=true;
                       }
                   else if(_this.sBar15.frame==1)
                       {
                           _this.sBar15.frame=0;
                           _this.sBar15.inputEnabled=true;
                       }
                   else if(_this.sBar16.frame==1)
                       {
                           _this.sBar16.frame=0;
                           _this.sBar16.inputEnabled=true;
                       }
                   else if(_this.sBar17.frame==1)
                       {
                           _this.sBar17.frame=0;
                           _this.sBar17.inputEnabled=true;
                       }
                   else if(_this.sBar18.frame==1)
                       {
                           _this.sBar18.frame=0;
                           _this.sBar18.inputEnabled=true;
                       }
                   else if(_this.sBar19.frame==1)
                       {
                           _this.sBar19.frame=0;
                           _this.sBar19.inputEnabled=true;
                       }
                   else if(_this.sBar20.frame==1)
                       {
                           _this.sBar20.frame=0;
                           _this.sBar20.inputEnabled=true;
                       }
                   else if(_this.sBar21.frame==1)
                       {
                           _this.sBar21.frame=0;
                           _this.sBar21.inputEnabled=true;
                       }
                   else if(_this.sBar22.frame==1)
                       {
                           _this.sBar22.frame=0;
                           _this.sBar22.inputEnabled=true;
                       }
                   else if(_this.sBar23.frame==1)
                       {
                           _this.sBar23.frame=0;
                           _this.sBar23.inputEnabled=true;
                       }
                   else if(_this.sBar24.frame==1)
                       {
                           _this.sBar24.frame=0;
                           _this.sBar24.inputEnabled=true;
                       }
                   else if(_this.sBar25.frame==1)
                       {
                           _this.sBar25.frame=0;
                           _this.sBar25.inputEnabled=true;
                       }
                   else if(_this.sBar26.frame==1)
                       {
                           _this.sBar26.frame=0;
                           _this.sBar26.inputEnabled=true;
                       }
                   else if(_this.sBar27.frame==1)
                       {
                           _this.sBar27.frame=0;
                           _this.sBar27.inputEnabled=true;
                       }
                   else if(_this.sBar28.frame==1)
                       {
                           _this.sBar28.frame=0;
                           _this.sBar28.inputEnabled=true;
                       }
                   else if(_this.sBar29.frame==1)
                       {
                           _this.sBar29.frame=0;
                           _this.sBar29.inputEnabled=true;
                       }
                   else if(_this.sBar30.frame==1)
                       {
                           _this.sBar30.frame=0;
                           _this.sBar30.inputEnabled=true;
                       }
                   else if(_this.sBar31.frame==1)
                       {
                           _this.sBar31.frame=0;
                           _this.sBar31.inputEnabled=true;
                       }
                   else if(_this.sBar32.frame==1)
                       {
                           _this.sBar32.frame=0;
                           _this.sBar32.inputEnabled=true;
                       }
                   else if(_this.sBar33.frame==1)
                       {
                           _this.sBar33.frame=0;
                           _this.sBar33.inputEnabled=true;
                       }
                   else if(_this.sBar34.frame==1)
                       {
                           _this.sBar34.frame=0;
                           _this.sBar34.inputEnabled=true;
                       }
                   else if(_this.sBar35.frame==1)
                       {
                           _this.sBar35.frame=0;
                           _this.sBar35.inputEnabled=true;
                       }
                   else if(_this.sBar36.frame==1)
                       {
                           _this.sBar36.frame=0;
                           _this.sBar36.inputEnabled=true;
                       }
                   else if(_this.sBar37.frame==1)
                       {
                           _this.sBar37.frame=0;
                           _this.sBar37.inputEnabled=true;
                       }
                   else if(_this.sBar38.frame==1)
                       {
                           _this.sBar38.frame=0;
                           _this.sBar38.inputEnabled=true;
                       }
                   else if(_this.sBar39.frame==1)
                       {
                           _this.sBar39.frame=0;
                           _this.sBar39.inputEnabled=true;
                       }
                   else if(_this.sBar40.frame==1)
                       {
                           _this.sBar40.frame=0;
                           _this.sBar40.inputEnabled=true;
                       }
                   else if(_this.sBar41.frame==1)
                       {
                           _this.sBar41.frame=0;
                           _this.sBar41.inputEnabled=true;
                       }
                   else if(_this.sBar42.frame==1)
                       {
                           _this.sBar42.frame=0;
                           _this.sBar42.inputEnabled=true;
                       }
                   else if(_this.sBar43.frame==1)
                       {
                           _this.sBar43.frame=0;
                           _this.sBar43.inputEnabled=true;
                       }
                   else if(_this.sBar44.frame==1)
                       {
                           _this.sBar44.frame=0;
                           _this.sBar44.inputEnabled=true;
                       }
                   else if(_this.sBar45.frame==1)
                       {
                           _this.sBar45.frame=0;
                           _this.sBar45.inputEnabled=true;
                       }
                   else if(_this.sBar46.frame==1)
                       {
                           _this.sBar46.frame=0;
                           _this.sBar46.inputEnabled=true;
                       }
                   else if(_this.sBar47.frame==1)
                       {
                           _this.sBar47.frame=0;
                           _this.sBar47.inputEnabled=true;
                       }
                   else if(_this.sBar48.frame==1)
                       {
                           _this.sBar48.frame=0;
                           _this.sBar48.inputEnabled=true;
                       }
                   else if(_this.sBar49.frame==1)
                       {
                           _this.sBar49.frame=0;
                           _this.sBar49.inputEnabled=true;
                       }
                   else if(_this.sBar50.frame==1)
                       {
                           _this.sBar50.frame=0;
                           _this.sBar50.inputEnabled=true;
                       }
                   else if(_this.sBar51.frame==1)
                       {
                           _this.sBar51.frame=0;
                           _this.sBar51.inputEnabled=true;
                       }
                   else if(_this.sBar52.frame==1)
                       {
                           _this.sBar52.frame=0;
                           _this.sBar52.inputEnabled=true;
                       }
                   else if(_this.sBar53.frame==1)
                       {
                           _this.sBar53.frame=0;
                           _this.sBar53.inputEnabled=true;
                       }
                   else if(_this.sBar54.frame==1)
                       {
                           _this.sBar54.frame=0;
                           _this.sBar54.inputEnabled=true;
                       }
                   else if(_this.sBar55.frame==1)
                       {
                           _this.sBar55.frame=0;
                           _this.sBar55.inputEnabled=true;
                       }
                   else if(_this.sBar56.frame==1)
                       {
                           _this.sBar56.frame=0;
                           _this.sBar56.inputEnabled=true;
                       }
                   else if(_this.sBar57.frame==1)
                       {
                           _this.sBar57.frame=0;
                           _this.sBar57.inputEnabled=true;
                       }
                   else if(_this.sBar58.frame==1)
                       {
                           _this.sBar58.frame=0;
                           _this.sBar58.inputEnabled=true;
                       }
                   else if(_this.sBar59.frame==1)
                       {
                           _this.sBar59.frame=0;
                           _this.sBar59.inputEnabled=true;
                       }
                   else if(_this.sBar60.frame==1)
                       {
                           _this.sBar60.frame=0;
                           _this.sBar60.inputEnabled=true;
                       }
                   else if(_this.sBar61.frame==1)
                       {
                           _this.sBar61.frame=0;
                           _this.sBar61.inputEnabled=true;
                       }
                   else if(_this.sBar62.frame==1)
                       {
                           _this.sBar62.frame=0;
                           _this.sBar62.inputEnabled=true;
                       }
                   else if(_this.sBar63.frame==1)
                       {
                           _this.sBar63.frame=0;
                           _this.sBar63.inputEnabled=true;
                       }
                   else if(_this.sBar64.frame==1)
                       {
                           _this.sBar64.frame=0;
                           _this.sBar64.inputEnabled=true;
                       }
                   else if(_this.sBar65.frame==1)
                       {
                           _this.sBar65.frame=0;
                           _this.sBar65.inputEnabled=true;
                       }
                   else if(_this.sBar66.frame==1)
                       {
                           _this.sBar66.frame=0;
                           _this.sBar66.inputEnabled=true;
                       }
                   else if(_this.sBar67.frame==1)
                       {
                           _this.sBar67.frame=0;
                           _this.sBar67.inputEnabled=true;
                       }
                   else if(_this.sBar68.frame==1)
                       {
                           _this.sBar68.frame=0;
                           _this.sBar68.inputEnabled=true;
                       }
                   else if(_this.sBar69.frame==1)
                       {
                           _this.sBar69.frame=0;
                           _this.sBar69.inputEnabled=true;
                       }
                   else if(_this.sBar70.frame==1)
                       {
                           _this.sBar70.frame=0;
                           _this.sBar70.inputEnabled=true;
                       }
                   else if(_this.sBar71.frame==1)
                       {
                           _this.sBar71.frame=0;
                           _this.sBar71.inputEnabled=true;
                       }
                   else if(_this.sBar72.frame==1)
                       {
                           _this.sBar72.frame=0;
                           _this.sBar72.inputEnabled=true;
                       }
                   else if(_this.sBar73.frame==1)
                       {
                           _this.sBar73.frame=0;
                           _this.sBar73.inputEnabled=true;
                       }
                   else if(_this.sBar74.frame==1)
                       {
                           _this.sBar74.frame=0;
                           _this.sBar74.inputEnabled=true;
                       }
                   else if(_this.sBar75.frame==1)
                       {
                           _this.sBar75.frame=0;
                           _this.sBar75.inputEnabled=true;
                       }
                   else if(_this.sBar76.frame==1)
                       {
                           _this.sBar76.frame=0;
                           _this.sBar76.inputEnabled=true;
                       }
                   else if(_this.sBar77.frame==1)
                       {
                           _this.sBar77.frame=0;
                           _this.sBar77.inputEnabled=true;
                       }
                   else if(_this.sBar78.frame==1)
                       {
                           _this.sBar78.frame=0;
                           _this.sBar78.inputEnabled=true;
                       }
                   else if(_this.sBar79.frame==1)
                       {
                           _this.sBar79.frame=0;
                           _this.sBar79.inputEnabled=true;
                       }
                   else if(_this.sBar80.frame==1)
                       {
                           _this.sBar80.frame=0;
                           _this.sBar80.inputEnabled=true;
                       }
                   else if(_this.sBar81.frame==1)
                       {
                           _this.sBar81.frame=0;
                           _this.sBar81.inputEnabled=true;
                       }
                   else if(_this.sBar82.frame==1)
                       {
                           _this.sBar82.frame=0;
                           _this.sBar82.inputEnabled=true;
                       }
                   else if(_this.sBar83.frame==1)
                       {
                           _this.sBar83.frame=0;
                           _this.sBar83.inputEnabled=true;
                       }
                   else if(_this.sBar84.frame==1)
                       {
                           _this.sBar84.frame=0;
                           _this.sBar84.inputEnabled=true;
                       }
                   else if(_this.sBar85.frame==1)
                       {
                           _this.sBar85.frame=0;
                           _this.sBar85.inputEnabled=true;
                       }
                   else if(_this.sBar86.frame==1)
                       {
                           _this.sBar86.frame=0;
                           _this.sBar86.inputEnabled=true;
                       }
                   else if(_this.sBar87.frame==1)
                       {
                           _this.sBar87.frame=0;
                           _this.sBar87.inputEnabled=true;
                       }
                   else if(_this.sBar88.frame==1)
                       {
                           _this.sBar88.frame=0;
                           _this.sBar88.inputEnabled=true;
                       }
                   else if(_this.sBar89.frame==1)
                       {
                           _this.sBar89.frame=0;
                           _this.sBar89.inputEnabled=true;
                       }
                   else if(_this.sBar90.frame==1)
                       {
                           _this.sBar90.frame=0;
                           _this.sBar90.inputEnabled=true;
                       }
                   else if(_this.sBar91.frame==1)
                       {
                           _this.sBar91.frame=0;
                           _this.sBar91.inputEnabled=true;
                       }
                   else if(_this.sBar92.frame==1)
                       {
                           _this.sBar92.frame=0;
                           _this.sBar92.inputEnabled=true;
                       }
                   else if(_this.sBar93.frame==1)
                       {
                           _this.sBar93.frame=0;
                           _this.sBar93.inputEnabled=true;
                       }
                   else if(_this.sBar94.frame==1)
                       {
                           _this.sBar94.frame=0;
                           _this.sBar94.inputEnabled=true;
                       }
                   else if(_this.sBar95.frame==1)
                       {
                           _this.sBar95.frame=0;
                           _this.sBar95.inputEnabled=true;
                       }
                   else if(_this.sBar96.frame==1)
                       {
                           _this.sBar96.frame=0;
                           _this.sBar96.inputEnabled=true;
                       }
                   else if(_this.sBar97.frame==1)
                       {
                           _this.sBar97.frame=0;
                           _this.sBar97.inputEnabled=true;
                       }
                   else if(_this.sBar98.frame==1)
                       {
                           _this.sBar98.frame=0;
                           _this.sBar98.inputEnabled=true;
                       }
                   else if(_this.sBar99.frame==1)
                       {
                           _this.sBar99.frame=0;
                           _this.sBar99.inputEnabled=true;
                       }
                   else if(_this.sBar100.frame==1)
                       {
                           _this.sBar100.frame=0;
                           _this.sBar100.inputEnabled=true;
                       }
                      }
                   else if(_this.a==0)
                       {
                         if(_this.sBar1.frame==1) 
                             {
                              _this.sBar1.frame=0; 
                              _this.sBar1.inputEnabled=true;
                             }
                            else if(_this.sBar11.frame==1)
                            {
                                _this.sBar11.frame=0;
                                _this.sBar11.inputEnabled=true;
                            }
                           else if(_this.sBar21.frame==1)
                            {
                                _this.sBar21.frame=0;
                                _this.sBar21.inputEnabled=true;
                            }
                           else if(_this.sBar31.frame==1)
                            {
                                _this.sBar31.frame=0; 
                                _this.sBar31.inputEnabled=true;
                            }
                           else if(_this.sBar41.frame==1)
                            {
                                _this.sBar41.frame=0;
                                _this.sBar41.inputEnabled=true;
                            }
                           else if(_this.sBar51.frame==1)
                            {
                                _this.sBar51.frame=0;
                                _this.sBar51.inputEnabled=true;
                            }
                           else if(_this.sBar61.frame==1)
                            {
                                _this.sBar61.frame=0;
                                _this.sBar61.inputEnabled=true;
                            }
                           else if(_this.sBar71.frame==1)
                            {
                                _this.sBar71.frame=0;
                                _this.sBar71.inputEnabled=true;
                            }
                           else if(_this.sBar81.frame==1)
                            {
                                _this.sBar81.frame=0;
                                _this.sBar81.inputEnabled=true;
                            }
                           else if(_this.sBar91.frame==1)
                            {
                                _this.sBar91.frame=0;
                                _this.sBar91.inputEnabled=true;
                            }
                           else if(_this.sBar2.frame==1)
                            {
                                _this.sBar2.frame=0;
                                _this.sBar2.inputEnabled=true;
                            }
                           else if(_this.sBar12.frame==1)
                            {
                                _this.sBar12.frame=0;
                                _this.sBar12.inputEnabled=true;
                            }
                           else if(_this.sBar22.frame==1) 
                             {
                              _this.sBar22.frame=0;
                                 _this.sBar22.inputEnabled=true;
                             }
                            else if(_this.sBar32.frame==1)
                            {
                                _this.sBar32.frame=0;
                                _this.sBar32.inputEnabled=true;
                            }
                           else if(_this.sBar42.frame==1)
                            {
                                _this.sBar42.frame=0;
                                _this.sBar42.inputEnabled=true;
                            }
                           else if(_this.sBar52.frame==1)
                            {
                                _this.sBar52.frame=0;
                                _this.sBar52.inputEnabled=true;
                            }
                           else if(_this.sBar62.frame==1)
                            {
                                _this.sBar62.frame=0;
                                _this.sBar62.inputEnabled=true;
                            }
                           else if(_this.sBar72.frame==1)
                            {
                                _this.sBar72.frame=0;
                                _this.sBar72.inputEnabled=true;
                            }
                           else if(_this.sBar82.frame==1)
                            {
                                _this.sBar82.frame=0;
                                _this.sBar82.inputEnabled=true;
                            }
                           else if(_this.sBar92.frame==1)
                            {
                                _this.sBar92.frame=0;
                                _this.sBar92.inputEnabled=true;
                            }
                           else if(_this.sBar3.frame==1) 
                             {
                                 _this.sBar3.frame=0; 
                                 _this.sBar3.inputEnabled=true;
                             }
                            else if(_this.sBar13.frame==1)
                            {
                                _this.sBar13.frame=0;
                                _this.sBar13.inputEnabled=true;
                            }
                           else if(_this.sBar23.frame==1)
                            {
                                _this.sBar23.frame=0; 
                                _this.sBar23.inputEnabled=true;
                            }
                           else if(_this.sBar33.frame==1)
                            {
                                _this.sBar33.frame=0; 
                                _this.sBar33.inputEnabled=true;
                            }
                           else if(_this.sBar43.frame==1)
                            {
                                _this.sBar43.frame=0;
                                _this.sBar43.inputEnabled=true;
                            }
                           else if(_this.sBar53.frame==1)
                            {
                                _this.sBar53.frame=0;
                                _this.sBar53.inputEnabled=true;
                            }
                           else if(_this.sBar63.frame==1)
                            {
                                _this.sBar63.frame=0;
                                _this.sBar63.inputEnabled=true;
                            }
                           else if(_this.sBar73.frame==1)
                            {
                                _this.sBar73.frame=0;
                                _this.sBar73.inputEnabled=true;
                            }
                           else if(_this.sBar83.frame==1)
                            {
                                _this.sBar83.frame=0;
                                _this.sBar83.inputEnabled=true;
                            }
                           else if(_this.sBar93.frame==1)
                            {
                                _this.sBar93.frame=0;
                                _this.sBar93.inputEnabled=true;
                            }
                           else if(_this.sBar4.frame==1) 
                             {
                                 _this.sBar4.frame=0;
                                 _this.sBar4.inputEnabled=true;
                             }
                            else if(_this.sBar14.frame==1)
                            {
                                _this.sBar14.frame=0;
                                _this.sBar14.inputEnabled=true;
                            }
                           else if(_this.sBar24.frame==1)
                            {
                                _this.sBar24.frame=0;
                                _this.sBar24.inputEnabled=true;
                            }
                           else if(_this.sBar34.frame==1)
                            {
                                _this.sBar34.frame=0;
                                _this.sBar34.inputEnabled=true;
                            }
                           else if(_this.sBar44.frame==1)
                            {
                                _this.sBar44.frame=0;
                                _this.sBar44.inputEnabled=true;
                            }
                           else if(_this.sBar54.frame==1)
                            {
                                _this.sBar54.frame=0;
                                _this.sBar54.inputEnabled=true;
                            }
                           else if(_this.sBar64.frame==1)
                            {
                                _this.sBar64.frame=0;
                                _this.sBar64.inputEnabled=true;
                            }
                           else if(_this.sBar74.frame==1)
                            {
                                _this.sBar74.frame=0;
                                _this.sBar74.inputEnabled=true;
                            }
                           else if(_this.sBar84.frame==1)
                            {
                                _this.sBar84.frame=0;
                                _this.sBar84.inputEnabled=true;
                            }
                           else if(_this.sBar94.frame==1)
                            {
                                _this.sBar94.frame=0;
                                _this.sBar94.inputEnabled=true;
                            }
                           else if(_this.sBar5.frame==1) 
                             {
                                 _this.sBar5.frame=0;
                                 _this.sBar5.inputEnabled=true;
                             }
                            else if(_this.sBar15.frame==1)
                            {
                                _this.sBar15.frame=0;
                                _this.sBar15.inputEnabled=true;
                            }
                           else if(_this.sBar25.frame==1)
                            {
                                _this.sBar25.frame=0; 
                                _this.sBar25.inputEnabled=true;
                            }
                           else if(_this.sBar35.frame==1)
                            {
                                _this.sBar35.frame=0; 
                                _this.sBar35.inputEnabled=true;
                            }
                           else if(_this.sBar45.frame==1)
                            {
                                _this.sBar45.frame=0; 
                                _this.sBar45.inputEnabled=true;
                            }
                           else if(_this.sBar55.frame==1)
                            {
                                _this.sBar55.frame=0; 
                                _this.sBar55.inputEnabled=true;
                            }
                           else if(_this.sBar65.frame==1)
                            {
                                _this.sBar65.frame=0;
                                _this.sBar65.inputEnabled=true;
                            }
                           else if(_this.sBar75.frame==1)
                            {
                                _this.sBar75.frame=0;
                                _this.sBar75.inputEnabled=true;
                            }
                           else if(_this.sBar85.frame==1)
                            {
                                _this.sBar85.frame=0; 
                                _this.sBar85.inputEnabled=true;
                            }
                           else if(_this.sBar95.frame==1)
                            {
                                _this.sBar95.frame=0;
                                _this.sBar95.inputEnabled=true;
                            }
                           else if(_this.sBar6.frame==1) 
                             {
                                 _this.sBar6.frame=0;
                                 _this.sBar6.inputEnabled=true;
                             }
                            else if(_this.sBar16.frame==1)
                            {
                                _this.sBar16.frame=0;
                                _this.sBar16.inputEnabled=true;
                            }
                           else if(_this.sBar26.frame==1)
                            {
                                _this.sBar26.frame=0;
                                _this.sBar26.inputEnabled=true;
                            }
                           else if(_this.sBar36.frame==1)
                            {
                                _this.sBar36.frame=0;
                                _this.sBar36.inputEnabled=true;
                            }
                           else if(_this.sBar46.frame==1)
                            {
                                _this.sBar46.frame=0;
                                _this.sBar46.inputEnabled=true;
                            }
                           else if(_this.sBar56.frame==1)
                            {
                                _this.sBar56.frame=0;
                                _this.sBar56.inputEnabled=true;
                            }
                           else if(_this.sBar66.frame==1)
                            {
                                _this.sBar66.frame=0;
                                _this.sBar66.inputEnabled=true;
                            }
                           else if(_this.sBar76.frame==1)
                            {
                                _this.sBar76.frame=0;
                                _this.sBar76.inputEnabled=true;
                            }
                           else if(_this.sBar86.frame==1)
                            {
                                _this.sBar86.frame=0;
                                _this.sBar86.inputEnabled=true;
                            }
                           else if(_this.sBar96.frame==1)
                            {
                                _this.sBar96.frame=0;
                                _this.sBar96.inputEnabled=true;
                            }
                           else if(_this.sBar7.frame==1) 
                             {
                                 _this.sBar7.frame=0;
                                 _this.sBar7.inputEnabled=true;
                             }
                            else if(_this.sBar17.frame==1)
                            {
                                _this.sBar17.frame=0;
                                _this.sBar17.inputEnabled=true;
                            }
                           else if(_this.sBar27.frame==1)
                            {
                                _this.sBar27.frame=0;
                                _this.sBar27.inputEnabled=true;
                            }
                           else if(_this.sBar37.frame==1)
                            {
                                _this.sBar37.frame=0;
                                _this.sBar37.inputEnabled=true;
                            }
                           else if(_this.sBar47.frame==1)
                            {
                                _this.sBar47.frame=0;
                                _this.sBar47.inputEnabled=true;
                            }
                           else if(_this.sBar57.frame==1)
                            {
                                _this.sBar57.frame=0;
                                _this.sBar57.inputEnabled=true;
                            }
                           else if(_this.sBar67.frame==1)
                            {
                                _this.sBar67.frame=0;
                                _this.sBar67.inputEnabled=true;
                            }
                           else if(_this.sBar77.frame==1)
                            {
                                _this.sBar77.frame=0;
                                _this.sBar77.inputEnabled=true;
                            }
                           else if(_this.sBar87.frame==1)
                            {
                                _this.sBar87.frame=0;
                                _this.sBar87.inputEnabled=true;
                            }
                           else if(_this.sBar97.frame==1)
                            {
                                _this.sBar97.frame=0;
                                _this.sBar97.inputEnabled=true;
                            }
                           else if(_this.sBar8.frame==1) 
                             {
                                 _this.sBar8.frame=0;
                                 _this.sBar8.inputEnabled=true;
                             }
                            else if(_this.sBar18.frame==1)
                            {
                                _this.sBar18.frame=0;
                                _this.sBar18.inputEnabled=true;
                            }
                           else if(_this.sBar28.frame==1)
                            {
                                _this.sBar28.frame=0;
                                _this.sBar28.inputEnabled=true;
                            }
                           else if(_this.sBar38.frame==1)
                            {
                                _this.sBar38.frame=0;
                                _this.sBar38.inputEnabled=true;
                            }
                           else if(_this.sBar48.frame==1)
                            {
                                _this.sBar48.frame=0;
                                _this.sBar48.inputEnabled=true;
                            }
                           else if(_this.sBar58.frame==1)
                            {
                                _this.sBar58.frame=0;
                                _this.sBar58.inputEnabled=true;
                            }
                           else if(_this.sBar68.frame==1)
                            {
                                _this.sBar68.frame=0;
                                _this.sBar68.inputEnabled=true;
                            }
                           else if(_this.sBar78.frame==1)
                            {
                                _this.sBar78.frame=0;
                                _this.sBar78.inputEnabled=true;
                            }
                           else if(_this.sBar88.frame==1)
                            {
                                _this.sBar88.frame=0;
                                _this.sBar88.inputEnabled=true;
                            }
                           else if(_this.sBar98.frame==1)
                            {
                                _this.sBar98.frame=0;
                                _this.sBar98.inputEnabled=true;
                            }
                           else if(_this.sBar9.frame==1) 
                             {
                                 _this.sBar9.frame=0;
                                 _this.sBar9.inputEnabled=true;
                             }
                            else if(_this.sBar19.frame==1)
                            {
                                _this.sBar19.frame=0;
                                _this.sBar19.inputEnabled=true;
                            }
                           else if(_this.sBar29.frame==1)
                            {
                                _this.sBar29.frame=0;
                                _this.sBar29.inputEnabled=true;
                            }
                           else if(_this.sBar39.frame==1)
                            {
                                _this.sBar39.frame=0;
                                _this.sBar39.inputEnabled=true;
                            }
                           else if(_this.sBar49.frame==1)
                            {
                                _this.sBar49.frame=0;
                                _this.sBar49.inputEnabled=true;
                            }
                           else if(_this.sBar59.frame==1)
                            {
                                _this.sBar59.frame=0;
                                _this.sBar59.inputEnabled=true;
                            }
                           else if(_this.sBar69.frame==1)
                            {
                                _this.sBar69.frame=0;
                                _this.sBar69.inputEnabled=true;
                            }
                           else if(_this.sBar79.frame==1)
                            {
                                _this.sBar79.frame=0;
                                _this.sBar79.inputEnabled=true;
                            }
                           else if(_this.sBar89.frame==1)
                            {
                                _this.sBar89.frame=0;
                                _this.sBar89.inputEnabled=true;
                            }
                           else if(_this.sBar99.frame==1)
                            {
                                _this.sBar99.frame=0;
                                _this.sBar99.inputEnabled=true;
                            }
                           else if(_this.sBar10.frame==1) 
                             {
                                 _this.sBar10.frame=0;
                                 _this.sBar10.inputEnabled=true;
                             }
                            else if(_this.sBar20.frame==1)
                            {
                                _this.sBar20.frame=0;
                                _this.sBar20.inputEnabled=true;
                            }
                           else if(_this.sBar30.frame==1)
                            {
                                _this.sBar30.frame=0;
                                _this.sBar30.inputEnabled=true;
                            }
                           else if(_this.sBar40.frame==1)
                            {
                                _this.sBar40.frame=0;
                                _this.sBar40.inputEnabled=true;
                            }
                           else if(_this.sBar50.frame==1)
                            {
                                _this.sBar50.frame=0;
                                _this.sBar50.inputEnabled=true;
                            }
                           else if(_this.sBar60.frame==1)
                            {
                                _this.sBar60.frame=0;
                                _this.sBar60.inputEnabled=true;
                            }
                           else if(_this.sBar70.frame==1)
                            {
                                _this.sBar70.frame=0;
                                _this.sBar70.inputEnabled=true;
                            }
                           else if(_this.sBar80.frame==1)
                            {
                                _this.sBar80.frame=0;
                                _this.sBar80.inputEnabled=true;
                            }
                           else if(_this.sBar90.frame==1)
                            {
                                _this.sBar90.frame=0;
                                _this.sBar90.inputEnabled=true;
                            }
                           else if(_this.sBar100.frame==1)
                            {
                                _this.sBar100.frame=0;
                                _this.sBar100.inputEnabled=true;
                            }
                         }
                          _this.singleBar.x=_this.singleBarX;
                          _this.singleBar.y=_this.singleBarY;
                   
                        if(_this.addingNumPad == false)
                        {
                            _this.addNumberPad();
                            _this.addingNumPad=true;
                        }
               }
                          
                          _this.singleBar.x=_this.singleBarX;
                          _this.singleBar.y=_this.singleBarY;
        
       },
    
    checkAns:function(target)
    {
        console.log("checkkkkkkkkkkkkkkkkkkkkk");
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function(target){
        _this.rightbtn.frame=1;
            
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        _this.rightbtn.events.onInputUp.add(function(target){
        _this.rightbtn.frame=0;                
        },this);
         
        if(_this.questionNo==1){
                var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==25)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
                
            }
        if(_this.questionNo==2){
            var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==50)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
        }
        if(_this.questionNo==3){
            var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==63)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
        }
        if(_this.questionNo==4){
            var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==37)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
        }
        if(_this.questionNo==5){
            var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==82)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
        }
        if(_this.questionNo==6){
            var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["sBar"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==40)
                      {
                          if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                          {
                              _this.grid.frame=1;
                              _this.box1.frame = 2;
                              _this.box2.frame = 2;
                              _this.correctAns(); 
                          }
                          else
                          {
                              _this.shake.shake(10,boxgroup);
                
                              _this.wmusic = _this.add.audio('waudio');
                              _this.wmusic.play();
                              
                             _this.numTxt1.setText("");
                             _this.selectedAns1="";
                             _this.numTxt2.setText("");
                             _this.selectedAns2=""; 

                             _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                          }
                      }
                    else {
                             _this.shake.shake(10,smallGroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                        
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";
                            
                            smallGroup.setAll("frame",1);
                            largeGroup.setAll("visible",false);
                            _this.grid.frame=0;

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                    }
            }
        if(_this.questionNo==7){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes();
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
        if(_this.questionNo==8){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes(); 
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
        if(_this.questionNo==9){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes(); 
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
        if(_this.questionNo==10){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes(); 
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
        if(_this.questionNo==11){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes(); 
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
        if(_this.questionNo==12){
            if((_this.selectedAns1 == _this.rightAns1) && (_this.selectedAns2 == _this.rightAns2))
                      {
                          _this.box1.frame = 2;
                          _this.box2.frame = 2;
                          _this.eraser.inputEnabled=false;
                          _this.rightbtn.inputEnabled=false;
                          _this.fractionboxes(); 
                      }
                
                    else
                        {
                            _this.shake.shake(10,boxgroup);
                
                            _this.wmusic = _this.add.audio('waudio');
                            _this.wmusic.play();
                            
                            _this.numTxt1.setText("");
                            _this.selectedAns1="";
                            _this.numTxt2.setText("");
                            _this.selectedAns2="";

                            _this.box1.frame=2;
                             _this.box2.frame=1;
                             _this.selectedBox = _this.box1.name ;
                                                               
                        } 
                    }
            
        },this);
    },
    
    /****************************firstquestionwheel************************/
    gotoFirstQuestion:function(){
         _this.questionNo =1;
         _this.no11++;
        
        _this.addingNumPad=false;
        
        if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
        
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.25");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
        
        scoreGroup = _this.add.group();
        scoreGroup.add(_this.scoreBox);
        
                
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        
         _this.rightAns1=25;
         _this.rightAns2=100;
         console.log("one");
         //_this.group1=this.add.group();
         _this.stack();
       
        //this.enablebuttons();
        
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.questionNo =2;
        _this.no11++;
       
        _this.addingNumPad=false;
       
       if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
       
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.50");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
       
       scoreGroup = _this.add.group();
       scoreGroup.add(_this.scoreBox);
        
                
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       
         console.log("two");
         _this.rightAns1=50;
         _this.rightAns2=100;
       
         _this.stack();
       
         
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
          _this.questionNo =3;
         _this.no11++;
          
        _this.addingNumPad=false;
          
          if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
          
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.63");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
       
       scoreGroup = _this.add.group();
       scoreGroup.add(_this.scoreBox);
        
                
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
          
         console.log("three");
         _this.rightAns1=63;
         _this.rightAns2=100;
         
        _this.stack();
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         _this.questionNo =4;
         _this.no11++;
         console.log("four");
           
        _this.addingNumPad=false;
           
        if(_this.soundPlayed == false)
            {_this.getVoice();
             _this.soundPlayed=true;
            }
           
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.37");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
       
       scoreGroup = _this.add.group();
       scoreGroup.add(_this.scoreBox);
        
                
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         _this.rightAns1=37;
         _this.rightAns2=100;
           
         _this.stack();
        
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
        _this.questionNo =5;
         _this.no11++;
         console.log("five");
         
         _this.addingNumPad=false;
         
         if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
           
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.82");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
       
       scoreGroup = _this.add.group();
       scoreGroup.add(_this.scoreBox);
        
                
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         _this.rightAns1=82;
         _this.rightAns2=100;
         
         _this.stack();
        
    },
 /******************sixthquestionwheel***************************************/
     gotoSixthQuestion:function(){
        _this.questionNo =6;
         _this.no11++;
         console.log("six");
         
         _this.addingNumPad=false;
         
         if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
           
        _this.scoreBox = _this.add.sprite(740,150,'nsd5_5scorebox');
        _this.scoreBox.anchor.setTo(0.5);
        _this.scoreBox.scale.setTo(0.7,0.8);
        
        _this.text = this.add.text(-2, 0, "0.40");
        _this.text.font = "myfont";
        _this.text.fill = "#808080";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 40;
        _this.scoreBox.addChild(_this.text);
       
       scoreGroup = _this.add.group();
       scoreGroup.add(_this.scoreBox);
                        
            scoreGroup.x = -600;
            _this.tween = _this.add.tween(scoreGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         _this.rightAns1=40;
         _this.rightAns2=100;
         
         _this.stack();
        
    },
    /****************************************************************************/
    boxes:function(){
      boxgroup=_this.add.group();

    _this.box1 = _this.add.sprite(600,230,'nsd5_5fractionscorebox');
    _this.box1.anchor.setTo(0.5);
    _this.box1.scale.setTo(1.6,1.5);

    _this.box1.frame=0; 
    _this.box1.inputEnabled=false;
    _this.box1.events.onInputDown.add(function(target)
    {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
        _this.numBox2Pressed =  false;     

         _this.box1.frame=2;
         _this.box2.frame=1;

            _this.box1.name = "box1A";
            _this.selectedBox = _this.box1.name ;

          },this);
     _this.line=this.add.sprite(555,265,'nsd5_5divisionline');
     _this.line.scale.setTo(1.2,1); 

     _this.box2 = _this.add.sprite(600,310,'nsd5_5fractionscorebox');
     _this.box2.anchor.setTo(0.5);
     _this.box2.scale.setTo(1.6,1.5);

     _this.box2.frame=0;
     _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
     {
     _this.clickSound.play();
     _this.numBox1Pressed =  false;     
     _this.numBox2Pressed =  false;     

     _this.box1.frame=1;
     _this.box2.frame=2;

            _this.box2.name = "box2A";
            _this.selectedBox = _this.box2.name ;

          },this);

      boxgroup.add(_this.box1);
      boxgroup.add(_this.box2);
      boxgroup.add(_this.line);

        boxgroup.x = -600;
        _this.tween = _this.add.tween(boxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        
    },
    
    fractionboxes:function(){
    //_this.box1.frame=1;
    //_this.box2.frame=1;
        
    if(_this.questionNo==7)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="rightAns";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="frac2";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="frac3";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "10");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
                 
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
        
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
   
    }
    if(_this.questionNo==8)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="frac1";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "4");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="rightAns";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "1");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "4");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="frac3";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "1");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "6");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
            
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
    
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
    
    }
    if(_this.questionNo==9)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="frac1";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "1");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="frac2";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="rightAns";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "4");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
            
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
        
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
    
    }
    if(_this.questionNo==10)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="frac1";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "4");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "15");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="frac2";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "15");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="rightAns";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "25");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
        
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
        
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
    }
    if(_this.questionNo==11)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="frac1";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "1");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="rightAns";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "4");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="frac3";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
        
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
        
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
    }
    if(_this.questionNo==12)
    {
    _this.fractionBox1 = _this.add.sprite(740,140,'nsd5_5fractionscorebox2');
    _this.fractionBox1.anchor.setTo(0.5);
    _this.fractionBox1.scale.setTo(0.7,0.8);
    _this.fractionBox1.inputEnabled = true;
    _this.fractionBox1.input.useHandCursor = true;
    _this.fractionBox1.name="rightAns";
    _this.fractionBox1.events.onInputDown.add(function(target){
        _this.fractionBox2.frame=0;
        _this.fractionBox3.frame=0;
        _this.clicked(target);
    },this);
    _this.fractionBox1.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox1.addChild(_this.text);    
        
    _this.fractionBox2 = _this.add.sprite(740,265,'nsd5_5fractionscorebox2');
    _this.fractionBox2.anchor.setTo(0.5);
    _this.fractionBox2.scale.setTo(0.7,0.8);
    _this.fractionBox2.inputEnabled = true;
    _this.fractionBox2.input.useHandCursor = true;
    _this.fractionBox2.name="frac2";
    _this.fractionBox2.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox3.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox2.alpha=5;
        
    _this.text = this.add.text(0, -28, "2");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);

    _this.text = this.add.text(0, 24, "3");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox2.addChild(_this.text);
        
    _this.fractionBox3 = _this.add.sprite(740,390,'nsd5_5fractionscorebox2');
    _this.fractionBox3.anchor.setTo(0.5);
    _this.fractionBox3.scale.setTo(0.7,0.8);
    _this.fractionBox3.inputEnabled = true;
    _this.fractionBox3.input.useHandCursor = true;
    _this.fractionBox3.name="frac3";
    _this.fractionBox3.events.onInputDown.add(function(target){
          _this.fractionBox1.frame=0;
          _this.fractionBox2.frame=0;
          _this.clicked(target);
    },this);
    _this.fractionBox3.alpha=5;
        
    _this.text = this.add.text(0, -28, "1");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);

    _this.text = this.add.text(0, 24, "5");
    _this.text.font = "myfont";
    _this.text.fill = "#65B4C3";
    _this.text.fontWeight = 'normal';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 35;
    _this.fractionBox3.addChild(_this.text);
        
    _this.tickMark = _this.numGroup.create(860,265,'nsd5_5_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1,1);
    _this.tickMark.inputEnabled = true;
    _this.tickMark.input.useHandCursor = true;
        
        fractionBoxgroup=_this.add.group();
          fractionBoxgroup.add(_this.fractionBox1);
          fractionBoxgroup.add(_this.fractionBox2);
          fractionBoxgroup.add(_this.fractionBox3);
          fractionBoxgroup.add(_this.tickMark);
        
        fractionBoxgroup.x = 400;
        _this.tween = _this.add.tween(fractionBoxgroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
    }
        
    },
        
    clicked:function(target)
    {
        console.log(target.name);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
         target.frame=1;
                 
    _this.tickMark.events.onInputDown.add(function(target){
    _this.tickMark.frame=1;
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
       
    //target.events.onInputDown.removeAll();
    
    _this.tickMark.events.onInputUp.add(function(target){
    _this.tickMark.frame=0;                
    },this);
      
            if((_this.questionNo==7)||(_this.questionNo==12))
            {
                if(_this.fractionBox1.frame==1)
                {
                    _this.correctAns();
                    _this.anim1 = _this.fractionBox1.animations.add('box');
                    _this.anim1.play(3,true);
                }
                else if(_this.fractionBox2.frame==1)
                {
                    _this.shake.shake(10, _this.fractionBox2);
                    _this.fractionBox2.frame=0;
                    _this.wrongAns();
                }
                else if(_this.fractionBox3.frame==1)
                {
                    _this.shake.shake(10, _this.fractionBox3);
                    _this.fractionBox3.frame=0;
                    _this.wrongAns();
                }
            }
           else if((_this.questionNo==8)||(_this.questionNo==11))
           {
               if(_this.fractionBox1.frame==1)
                {
                    _this.shake.shake(10, _this.fractionBox1);
                    _this.fractionBox1.frame=0;
                    _this.wrongAns();
                }
                else if(_this.fractionBox2.frame==1)
                { 
                    _this.correctAns();
                    _this.anim1 = _this.fractionBox2.animations.add('box');
                    _this.anim1.play(3,true);
                }
                else if(_this.fractionBox3.frame==1)
                {
                    _this.shake.shake(10, _this.fractionBox3);
                    _this.fractionBox3.frame=0;
                    _this.wrongAns();
                }
           }
           else if((_this.questionNo==9)||(_this.questionNo==10))
           {
               if(_this.fractionBox1.frame==1)
                {
                    _this.shake.shake(10, _this.fractionBox1);
                    _this.fractionBox1.frame=0;
                    _this.wrongAns();
                }
                else if(_this.fractionBox2.frame==1)
                { 
                    _this.shake.shake(10, _this.fractionBox2);
                    _this.fractionBox2.frame=0;
                    _this.wrongAns();
                }
                else if(_this.fractionBox3.frame==1)
                {
                    _this.correctAns();
                    _this.anim1 = _this.fractionBox3.animations.add('box');
                    _this.anim1.play(3,true);
                }
           }    
       
    },this);
    
    },
    /******************seventhquestionwheel***************************************/
    gotoSeventhQuestion:function(){
       _this.questionNo =7;
       _this.no11++;
       console.log("seven");
        
        if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
        
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(161,171,'nsd5_5singleBar1');_this.sBar13.frame=0;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(161,210,'nsd5_5singleBar1');_this.sBar14.frame=0;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(161,249,'nsd5_5singleBar1');_this.sBar15.frame=0;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(161,288,'nsd5_5singleBar1');_this.sBar16.frame=0;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(161,327,'nsd5_5singleBar1');_this.sBar17.frame=0;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(161,366,'nsd5_5singleBar1');_this.sBar18.frame=0;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(161,405,'nsd5_5singleBar1');_this.sBar19.frame=0;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(161,444,'nsd5_5singleBar1');_this.sBar20.frame=0;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(201,93,'nsd5_5singleBar1');_this.sBar21.frame=0;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(201,132,'nsd5_5singleBar1');_this.sBar22.frame=0;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(201,171,'nsd5_5singleBar1');_this.sBar23.frame=0;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(201,210,'nsd5_5singleBar1');_this.sBar24.frame=0;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(201,249,'nsd5_5singleBar1');_this.sBar25.frame=0;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        _this.sBar26=this.add.sprite(201,288,'nsd5_5singleBar1');_this.sBar26.frame=0;
        _this.sBar26.anchor.setTo(0.5);
        _this.sBar26.inputEnabled=false;
        _this.sBar26.scale.setTo(1,1);
        _this.sBar26X=_this.sBar26.x;
        _this.sBar26Y=_this.sBar26.y;
        
        _this.sBar27=this.add.sprite(201,327,'nsd5_5singleBar1');_this.sBar27.frame=0;
        _this.sBar27.anchor.setTo(0.5);
        _this.sBar27.inputEnabled=false;
        _this.sBar27.scale.setTo(1,1);
        _this.sBar27X=_this.sBar27.x;
        _this.sBar27Y=_this.sBar27.y;
        
        _this.sBar28=this.add.sprite(201,366,'nsd5_5singleBar1');_this.sBar28.frame=0;
        _this.sBar28.anchor.setTo(0.5);
        _this.sBar28.inputEnabled=false;
        _this.sBar28.scale.setTo(1,1);
        _this.sBar28X=_this.sBar28.x;
        _this.sBar28Y=_this.sBar28.y;
        
        _this.sBar29=this.add.sprite(201,405,'nsd5_5singleBar1');_this.sBar29.frame=0;
        _this.sBar29.anchor.setTo(0.5);
        _this.sBar29.inputEnabled=false;
        _this.sBar29.scale.setTo(1,1);
        _this.sBar29X=_this.sBar29.x;
        _this.sBar29Y=_this.sBar29.y;
                
        _this.sBar30=this.add.sprite(201,444,'nsd5_5singleBar1');_this.sBar30.frame=0;
        _this.sBar30.anchor.setTo(0.5);
        _this.sBar30.inputEnabled=false;
        _this.sBar30.scale.setTo(1,1);
        _this.sBar30X=_this.sBar30.x;
        _this.sBar30Y=_this.sBar30.y;
        
        _this.sBar31=this.add.sprite(240,93,'nsd5_5singleBar1');_this.sBar31.frame=0;
        _this.sBar31.anchor.setTo(0.5);
        _this.sBar31.inputEnabled=false;
        _this.sBar31.scale.setTo(1,1);
        _this.sBar31X=_this.sBar31.x;
        _this.sBar31Y=_this.sBar31.y;
        
        _this.sBar32=this.add.sprite(240,132,'nsd5_5singleBar1');_this.sBar32.frame=0;
        _this.sBar32.anchor.setTo(0.5);
        _this.sBar32.inputEnabled=false;
        _this.sBar32.scale.setTo(1,1);
        _this.sBar32X=_this.sBar32.x;
        _this.sBar32Y=_this.sBar32.y;
        
        _this.sBar33=this.add.sprite(240,171,'nsd5_5singleBar1');_this.sBar33.frame=0;
        _this.sBar33.anchor.setTo(0.5);
        _this.sBar33.inputEnabled=false;
        _this.sBar33.scale.setTo(1,1);
        _this.sBar33X=_this.sBar33.x;
        _this.sBar33Y=_this.sBar33.y;
                
        _this.sBar34=this.add.sprite(240,210,'nsd5_5singleBar1');_this.sBar34.frame=0;
        _this.sBar34.anchor.setTo(0.5);
        _this.sBar34.inputEnabled=false;
        _this.sBar34.scale.setTo(1,1);
        _this.sBar34X=_this.sBar34.x;
        _this.sBar34Y=_this.sBar34.y;
        
        _this.sBar35=this.add.sprite(240,249,'nsd5_5singleBar1');_this.sBar35.frame=0;
        _this.sBar35.anchor.setTo(0.5);
        _this.sBar35.inputEnabled=false;
        _this.sBar35.scale.setTo(1,1);
        _this.sBar35X=_this.sBar35.x;
        _this.sBar35Y=_this.sBar35.y;
        
        _this.sBar36=this.add.sprite(240,288,'nsd5_5singleBar1');_this.sBar36.frame=0;
        _this.sBar36.anchor.setTo(0.5);
        _this.sBar36.inputEnabled=false;
        _this.sBar36.scale.setTo(1,1);
        _this.sBar36X=_this.sBar36.x;
        _this.sBar36Y=_this.sBar36.y;
        
        _this.sBar37=this.add.sprite(240,327,'nsd5_5singleBar1');_this.sBar37.frame=0;
        _this.sBar37.anchor.setTo(0.5);
        _this.sBar37.inputEnabled=false;
        _this.sBar37.scale.setTo(1,1);
        _this.sBar37X=_this.sBar37.x;
        _this.sBar37Y=_this.sBar37.y;
        
        _this.sBar38=this.add.sprite(240,366,'nsd5_5singleBar1');_this.sBar38.frame=0;
        _this.sBar38.anchor.setTo(0.5);
        _this.sBar38.inputEnabled=false;
        _this.sBar38.scale.setTo(1,1);
        _this.sBar38X=_this.sBar38.x;
        _this.sBar38Y=_this.sBar38.y;
        
        _this.sBar39=this.add.sprite(240,405,'nsd5_5singleBar1');_this.sBar39.frame=0;
        _this.sBar39.anchor.setTo(0.5);
        _this.sBar39.inputEnabled=false;
        _this.sBar39.scale.setTo(1,1);
        _this.sBar39X=_this.sBar39.x;
        _this.sBar39Y=_this.sBar39.y;
                
        _this.sBar40=this.add.sprite(240,444,'nsd5_5singleBar1');_this.sBar40.frame=0;
        _this.sBar40.anchor.setTo(0.5);
        _this.sBar40.inputEnabled=false;
        _this.sBar40.scale.setTo(1,1);
        _this.sBar40X=_this.sBar40.x;
        _this.sBar40Y=_this.sBar40.y;
        
        _this.sBar41=this.add.sprite(279,93,'nsd5_5singleBar1');_this.sBar41.frame=0;
        _this.sBar41.anchor.setTo(0.5);
        _this.sBar41.inputEnabled=false;
        _this.sBar41.scale.setTo(1,1);
        _this.sBar41X=_this.sBar41.x;
        _this.sBar41Y=_this.sBar41.y;
        
        _this.sBar42=this.add.sprite(279,132,'nsd5_5singleBar1');_this.sBar42.frame=0;
        _this.sBar42.anchor.setTo(0.5);
        _this.sBar42.inputEnabled=false;
        _this.sBar42.scale.setTo(1,1);
        _this.sBar42X=_this.sBar42.x;
        _this.sBar42Y=_this.sBar42.y;
        
        _this.sBar43=this.add.sprite(279,171,'nsd5_5singleBar1');_this.sBar43.frame=0;
        _this.sBar43.anchor.setTo(0.5);
        _this.sBar43.inputEnabled=false;
        _this.sBar43.scale.setTo(1,1);
        _this.sBar43X=_this.sBar43.x;
        _this.sBar43Y=_this.sBar43.y;
                
        _this.sBar44=this.add.sprite(279,210,'nsd5_5singleBar1');_this.sBar44.frame=0;
        _this.sBar44.anchor.setTo(0.5);
        _this.sBar44.inputEnabled=false;
        _this.sBar44.scale.setTo(1,1);
        _this.sBar44X=_this.sBar44.x;
        _this.sBar44Y=_this.sBar44.y;
        
        _this.sBar45=this.add.sprite(279,249,'nsd5_5singleBar1');_this.sBar45.frame=0;
        _this.sBar45.anchor.setTo(0.5);
        _this.sBar45.inputEnabled=false;
        _this.sBar45.scale.setTo(1,1);
        _this.sBar45X=_this.sBar45.x;
        _this.sBar45Y=_this.sBar45.y;
        
        _this.sBar46=this.add.sprite(279,288,'nsd5_5singleBar1');_this.sBar46.frame=0;
        _this.sBar46.anchor.setTo(0.5);
        _this.sBar46.inputEnabled=false;
        _this.sBar46.scale.setTo(1,1);
        _this.sBar46X=_this.sBar46.x;
        _this.sBar46Y=_this.sBar46.y;
        
        _this.sBar47=this.add.sprite(279,327,'nsd5_5singleBar1');_this.sBar47.frame=0;
        _this.sBar47.anchor.setTo(0.5);
        _this.sBar47.inputEnabled=false;
        _this.sBar47.scale.setTo(1,1);
        _this.sBar47X=_this.sBar47.x;
        _this.sBar47Y=_this.sBar47.y;
        
        _this.sBar48=this.add.sprite(279,366,'nsd5_5singleBar1');_this.sBar48.frame=0;
        _this.sBar48.anchor.setTo(0.5);
        _this.sBar48.inputEnabled=false;
        _this.sBar48.scale.setTo(1,1);
        _this.sBar48X=_this.sBar48.x;
        _this.sBar48Y=_this.sBar48.y;
        
        _this.sBar49=this.add.sprite(279,405,'nsd5_5singleBar1');_this.sBar49.frame=0;
        _this.sBar49.anchor.setTo(0.5);
        _this.sBar49.inputEnabled=false;
        _this.sBar49.scale.setTo(1,1);
        _this.sBar49X=_this.sBar49.x;
        _this.sBar49Y=_this.sBar49.y;
                
        _this.sBar50=this.add.sprite(279,444,'nsd5_5singleBar1');_this.sBar50.frame=0;
        _this.sBar50.anchor.setTo(0.5);
        _this.sBar50.inputEnabled=false;
        _this.sBar50.scale.setTo(1,1);
        _this.sBar50X=_this.sBar50.x;
        _this.sBar50Y=_this.sBar50.y;
        
        _this.sBar51=this.add.sprite(318,93,'nsd5_5singleBar1');_this.sBar51.frame=0;
        _this.sBar51.anchor.setTo(0.5);
        _this.sBar51.inputEnabled=false;
        _this.sBar51.scale.setTo(1,1);
        _this.sBar51X=_this.sBar51.x;
        _this.sBar51Y=_this.sBar51.y;
        
        _this.sBar52=this.add.sprite(318,132,'nsd5_5singleBar1');_this.sBar52.frame=0;
        _this.sBar52.anchor.setTo(0.5);
        _this.sBar52.inputEnabled=false;
        _this.sBar52.scale.setTo(1,1);
        _this.sBar52X=_this.sBar52.x;
        _this.sBar52Y=_this.sBar52.y;
        
        _this.sBar53=this.add.sprite(318,171,'nsd5_5singleBar1');_this.sBar53.frame=0;
        _this.sBar53.anchor.setTo(0.5);
        _this.sBar53.inputEnabled=false;
        _this.sBar53.scale.setTo(1,1);
        _this.sBar53X=_this.sBar53.x;
        _this.sBar53Y=_this.sBar53.y;
                
        _this.sBar54=this.add.sprite(318,210,'nsd5_5singleBar1');_this.sBar54.frame=0;
        _this.sBar54.anchor.setTo(0.5);
        _this.sBar54.inputEnabled=false;
        _this.sBar54.scale.setTo(1,1);
        _this.sBar54X=_this.sBar54.x;
        _this.sBar54Y=_this.sBar54.y;
        
        _this.sBar55=this.add.sprite(318,249,'nsd5_5singleBar1');_this.sBar55.frame=0;
        _this.sBar55.anchor.setTo(0.5);
        _this.sBar55.inputEnabled=false;
        _this.sBar55.scale.setTo(1,1);
        _this.sBar55X=_this.sBar55.x;
        _this.sBar55Y=_this.sBar55.y;
        
        _this.sBar56=this.add.sprite(318,288,'nsd5_5singleBar1');_this.sBar56.frame=0;
        _this.sBar56.anchor.setTo(0.5);
        _this.sBar56.inputEnabled=false;
        _this.sBar56.scale.setTo(1,1);
        _this.sBar56X=_this.sBar56.x;
        _this.sBar56Y=_this.sBar56.y;
        
        _this.sBar57=this.add.sprite(318,327,'nsd5_5singleBar1');_this.sBar57.frame=0;
        _this.sBar57.anchor.setTo(0.5);
        _this.sBar57.inputEnabled=false;
        _this.sBar57.scale.setTo(1,1);
        _this.sBar57X=_this.sBar57.x;
        _this.sBar57Y=_this.sBar57.y;
        
        _this.sBar58=this.add.sprite(318,366,'nsd5_5singleBar1');_this.sBar58.frame=0;
        _this.sBar58.anchor.setTo(0.5);
        _this.sBar58.inputEnabled=false;
        _this.sBar58.scale.setTo(1,1);
        _this.sBar58X=_this.sBar58.x;
        _this.sBar58Y=_this.sBar58.y;
        
        _this.sBar59=this.add.sprite(318,405,'nsd5_5singleBar1');_this.sBar59.frame=0;
        _this.sBar59.anchor.setTo(0.5);
        _this.sBar59.inputEnabled=false;
        _this.sBar59.scale.setTo(1,1);
        _this.sBar59X=_this.sBar59.x;
        _this.sBar59Y=_this.sBar59.y;
                
        _this.sBar60=this.add.sprite(318,444,'nsd5_5singleBar1');_this.sBar60.frame=0;
        _this.sBar60.anchor.setTo(0.5);
        _this.sBar60.inputEnabled=false;
        _this.sBar60.scale.setTo(1,1);
        _this.sBar60X=_this.sBar60.x;
        _this.sBar60Y=_this.sBar60.y;
                
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        smallGroup.add(_this.sBar26);
        smallGroup.add(_this.sBar27);
        smallGroup.add(_this.sBar28); 
        smallGroup.add(_this.sBar29);
        smallGroup.add(_this.sBar30);
        smallGroup.add(_this.sBar31); 
        smallGroup.add(_this.sBar32);
        smallGroup.add(_this.sBar33); 
        smallGroup.add(_this.sBar34); 
        smallGroup.add(_this.sBar35);
        smallGroup.add(_this.sBar36); 
        smallGroup.add(_this.sBar37);
        smallGroup.add(_this.sBar38); 
        smallGroup.add(_this.sBar39);
        smallGroup.add(_this.sBar40);
        smallGroup.add(_this.sBar41); 
        smallGroup.add(_this.sBar42);
        smallGroup.add(_this.sBar43); 
        smallGroup.add(_this.sBar44); 
        smallGroup.add(_this.sBar45);
        smallGroup.add(_this.sBar46); 
        smallGroup.add(_this.sBar47);
        smallGroup.add(_this.sBar48); 
        smallGroup.add(_this.sBar49);
        smallGroup.add(_this.sBar50);
        smallGroup.add(_this.sBar51); 
        smallGroup.add(_this.sBar52);
        smallGroup.add(_this.sBar53); 
        smallGroup.add(_this.sBar54); 
        smallGroup.add(_this.sBar55);
        smallGroup.add(_this.sBar56); 
        smallGroup.add(_this.sBar57);
        smallGroup.add(_this.sBar58); 
        smallGroup.add(_this.sBar59);
        smallGroup.add(_this.sBar60);
        
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
    
        _this.rightAns1=60;
        _this.rightAns2=100;

         this.addNumberPad();
        
    },
     /******************eightthquestionwheel***************************************/
    gotoEighthQuestion:function(){
         _this.questionNo =8;
         _this.no11++;
         console.log("eight");
        
        if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
        
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(161,171,'nsd5_5singleBar1');_this.sBar13.frame=0;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(161,210,'nsd5_5singleBar1');_this.sBar14.frame=0;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(161,249,'nsd5_5singleBar1');_this.sBar15.frame=0;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(161,288,'nsd5_5singleBar1');_this.sBar16.frame=0;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(161,327,'nsd5_5singleBar1');_this.sBar17.frame=0;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(161,366,'nsd5_5singleBar1');_this.sBar18.frame=0;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(161,405,'nsd5_5singleBar1');_this.sBar19.frame=0;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(161,444,'nsd5_5singleBar1');_this.sBar20.frame=0;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(201,93,'nsd5_5singleBar1');_this.sBar21.frame=0;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(201,132,'nsd5_5singleBar1');_this.sBar22.frame=0;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(201,171,'nsd5_5singleBar1');_this.sBar23.frame=0;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(201,210,'nsd5_5singleBar1');_this.sBar24.frame=0;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(201,249,'nsd5_5singleBar1');_this.sBar25.frame=0;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
        
        _this.rightAns1=25;
        _this.rightAns2=100;

         this.addNumberPad();
    },
    /******************ninequestionwheel***************************************/
     gotoNinthQuestion:function(){
        _this.questionNo = 9;
        _this.no11++;
        console.log("nine");
         
         if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
       
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(161,171,'nsd5_5singleBar1');_this.sBar13.frame=0;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(161,210,'nsd5_5singleBar1');_this.sBar14.frame=0;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(161,249,'nsd5_5singleBar1');_this.sBar15.frame=0;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(161,288,'nsd5_5singleBar1');_this.sBar16.frame=0;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(161,327,'nsd5_5singleBar1');_this.sBar17.frame=0;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(161,366,'nsd5_5singleBar1');_this.sBar18.frame=0;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(161,405,'nsd5_5singleBar1');_this.sBar19.frame=0;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(161,444,'nsd5_5singleBar1');_this.sBar20.frame=0;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(201,93,'nsd5_5singleBar1');_this.sBar21.frame=0;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(201,132,'nsd5_5singleBar1');_this.sBar22.frame=0;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(201,171,'nsd5_5singleBar1');_this.sBar23.frame=0;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(201,210,'nsd5_5singleBar1');_this.sBar24.frame=0;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(201,249,'nsd5_5singleBar1');_this.sBar25.frame=0;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        _this.sBar26=this.add.sprite(201,288,'nsd5_5singleBar1');_this.sBar26.frame=0;
        _this.sBar26.anchor.setTo(0.5);
        _this.sBar26.inputEnabled=false;
        _this.sBar26.scale.setTo(1,1);
        _this.sBar26X=_this.sBar26.x;
        _this.sBar26Y=_this.sBar26.y;
        
        _this.sBar27=this.add.sprite(201,327,'nsd5_5singleBar1');_this.sBar27.frame=0;
        _this.sBar27.anchor.setTo(0.5);
        _this.sBar27.inputEnabled=false;
        _this.sBar27.scale.setTo(1,1);
        _this.sBar27X=_this.sBar27.x;
        _this.sBar27Y=_this.sBar27.y;
        
        _this.sBar28=this.add.sprite(201,366,'nsd5_5singleBar1');_this.sBar28.frame=0;
        _this.sBar28.anchor.setTo(0.5);
        _this.sBar28.inputEnabled=false;
        _this.sBar28.scale.setTo(1,1);
        _this.sBar28X=_this.sBar28.x;
        _this.sBar28Y=_this.sBar28.y;
        
        _this.sBar29=this.add.sprite(201,405,'nsd5_5singleBar1');_this.sBar29.frame=0;
        _this.sBar29.anchor.setTo(0.5);
        _this.sBar29.inputEnabled=false;
        _this.sBar29.scale.setTo(1,1);
        _this.sBar29X=_this.sBar29.x;
        _this.sBar29Y=_this.sBar29.y;
                
        _this.sBar30=this.add.sprite(201,444,'nsd5_5singleBar1');_this.sBar30.frame=0;
        _this.sBar30.anchor.setTo(0.5);
        _this.sBar30.inputEnabled=false;
        _this.sBar30.scale.setTo(1,1);
        _this.sBar30X=_this.sBar30.x;
        _this.sBar30Y=_this.sBar30.y;
        
        _this.sBar31=this.add.sprite(240,93,'nsd5_5singleBar1');_this.sBar31.frame=0;
        _this.sBar31.anchor.setTo(0.5);
        _this.sBar31.inputEnabled=false;
        _this.sBar31.scale.setTo(1,1);
        _this.sBar31X=_this.sBar31.x;
        _this.sBar31Y=_this.sBar31.y;
        
        _this.sBar32=this.add.sprite(240,132,'nsd5_5singleBar1');_this.sBar32.frame=0;
        _this.sBar32.anchor.setTo(0.5);
        _this.sBar32.inputEnabled=false;
        _this.sBar32.scale.setTo(1,1);
        _this.sBar32X=_this.sBar32.x;
        _this.sBar32Y=_this.sBar32.y;
        
        _this.sBar33=this.add.sprite(240,171,'nsd5_5singleBar1');_this.sBar33.frame=0;
        _this.sBar33.anchor.setTo(0.5);
        _this.sBar33.inputEnabled=false;
        _this.sBar33.scale.setTo(1,1);
        _this.sBar33X=_this.sBar33.x;
        _this.sBar33Y=_this.sBar33.y;
                
        _this.sBar34=this.add.sprite(240,210,'nsd5_5singleBar1');_this.sBar34.frame=0;
        _this.sBar34.anchor.setTo(0.5);
        _this.sBar34.inputEnabled=false;
        _this.sBar34.scale.setTo(1,1);
        _this.sBar34X=_this.sBar34.x;
        _this.sBar34Y=_this.sBar34.y;
        
        _this.sBar35=this.add.sprite(240,249,'nsd5_5singleBar1');_this.sBar35.frame=0;
        _this.sBar35.anchor.setTo(0.5);
        _this.sBar35.inputEnabled=false;
        _this.sBar35.scale.setTo(1,1);
        _this.sBar35X=_this.sBar35.x;
        _this.sBar35Y=_this.sBar35.y;
        
        _this.sBar36=this.add.sprite(240,288,'nsd5_5singleBar1');_this.sBar36.frame=0;
        _this.sBar36.anchor.setTo(0.5);
        _this.sBar36.inputEnabled=false;
        _this.sBar36.scale.setTo(1,1);
        _this.sBar36X=_this.sBar36.x;
        _this.sBar36Y=_this.sBar36.y;
        
        _this.sBar37=this.add.sprite(240,327,'nsd5_5singleBar1');_this.sBar37.frame=0;
        _this.sBar37.anchor.setTo(0.5);
        _this.sBar37.inputEnabled=false;
        _this.sBar37.scale.setTo(1,1);
        _this.sBar37X=_this.sBar37.x;
        _this.sBar37Y=_this.sBar37.y;
        
        _this.sBar38=this.add.sprite(240,366,'nsd5_5singleBar1');_this.sBar38.frame=0;
        _this.sBar38.anchor.setTo(0.5);
        _this.sBar38.inputEnabled=false;
        _this.sBar38.scale.setTo(1,1);
        _this.sBar38X=_this.sBar38.x;
        _this.sBar38Y=_this.sBar38.y;
        
        _this.sBar39=this.add.sprite(240,405,'nsd5_5singleBar1');_this.sBar39.frame=0;
        _this.sBar39.anchor.setTo(0.5);
        _this.sBar39.inputEnabled=false;
        _this.sBar39.scale.setTo(1,1);
        _this.sBar39X=_this.sBar39.x;
        _this.sBar39Y=_this.sBar39.y;
                
        _this.sBar40=this.add.sprite(240,444,'nsd5_5singleBar1');_this.sBar40.frame=0;
        _this.sBar40.anchor.setTo(0.5);
        _this.sBar40.inputEnabled=false;
        _this.sBar40.scale.setTo(1,1);
        _this.sBar40X=_this.sBar40.x;
        _this.sBar40Y=_this.sBar40.y;
        
        _this.sBar41=this.add.sprite(279,93,'nsd5_5singleBar1');_this.sBar41.frame=0;
        _this.sBar41.anchor.setTo(0.5);
        _this.sBar41.inputEnabled=false;
        _this.sBar41.scale.setTo(1,1);
        _this.sBar41X=_this.sBar41.x;
        _this.sBar41Y=_this.sBar41.y;
        
        _this.sBar42=this.add.sprite(279,132,'nsd5_5singleBar1');_this.sBar42.frame=0;
        _this.sBar42.anchor.setTo(0.5);
        _this.sBar42.inputEnabled=false;
        _this.sBar42.scale.setTo(1,1);
        _this.sBar42X=_this.sBar42.x;
        _this.sBar42Y=_this.sBar42.y;
        
        _this.sBar43=this.add.sprite(279,171,'nsd5_5singleBar1');_this.sBar43.frame=0;
        _this.sBar43.anchor.setTo(0.5);
        _this.sBar43.inputEnabled=false;
        _this.sBar43.scale.setTo(1,1);
        _this.sBar43X=_this.sBar43.x;
        _this.sBar43Y=_this.sBar43.y;
                
        _this.sBar44=this.add.sprite(279,210,'nsd5_5singleBar1');_this.sBar44.frame=0;
        _this.sBar44.anchor.setTo(0.5);
        _this.sBar44.inputEnabled=false;
        _this.sBar44.scale.setTo(1,1);
        _this.sBar44X=_this.sBar44.x;
        _this.sBar44Y=_this.sBar44.y;
        
        _this.sBar45=this.add.sprite(279,249,'nsd5_5singleBar1');_this.sBar45.frame=0;
        _this.sBar45.anchor.setTo(0.5);
        _this.sBar45.inputEnabled=false;
        _this.sBar45.scale.setTo(1,1);
        _this.sBar45X=_this.sBar45.x;
        _this.sBar45Y=_this.sBar45.y;
        
        _this.sBar46=this.add.sprite(279,288,'nsd5_5singleBar1');_this.sBar46.frame=0;
        _this.sBar46.anchor.setTo(0.5);
        _this.sBar46.inputEnabled=false;
        _this.sBar46.scale.setTo(1,1);
        _this.sBar46X=_this.sBar46.x;
        _this.sBar46Y=_this.sBar46.y;
        
        _this.sBar47=this.add.sprite(279,327,'nsd5_5singleBar1');_this.sBar47.frame=0;
        _this.sBar47.anchor.setTo(0.5);
        _this.sBar47.inputEnabled=false;
        _this.sBar47.scale.setTo(1,1);
        _this.sBar47X=_this.sBar47.x;
        _this.sBar47Y=_this.sBar47.y;
        
        _this.sBar48=this.add.sprite(279,366,'nsd5_5singleBar1');_this.sBar48.frame=0;
        _this.sBar48.anchor.setTo(0.5);
        _this.sBar48.inputEnabled=false;
        _this.sBar48.scale.setTo(1,1);
        _this.sBar48X=_this.sBar48.x;
        _this.sBar48Y=_this.sBar48.y;
        
        _this.sBar49=this.add.sprite(279,405,'nsd5_5singleBar1');_this.sBar49.frame=0;
        _this.sBar49.anchor.setTo(0.5);
        _this.sBar49.inputEnabled=false;
        _this.sBar49.scale.setTo(1,1);
        _this.sBar49X=_this.sBar49.x;
        _this.sBar49Y=_this.sBar49.y;
                
        _this.sBar50=this.add.sprite(279,444,'nsd5_5singleBar1');_this.sBar50.frame=0;
        _this.sBar50.anchor.setTo(0.5);
        _this.sBar50.inputEnabled=false;
        _this.sBar50.scale.setTo(1,1);
        _this.sBar50X=_this.sBar50.x;
        _this.sBar50Y=_this.sBar50.y;
        
        _this.sBar51=this.add.sprite(318,93,'nsd5_5singleBar1');_this.sBar51.frame=0;
        _this.sBar51.anchor.setTo(0.5);
        _this.sBar51.inputEnabled=false;
        _this.sBar51.scale.setTo(1,1);
        _this.sBar51X=_this.sBar51.x;
        _this.sBar51Y=_this.sBar51.y;
        
        _this.sBar52=this.add.sprite(318,132,'nsd5_5singleBar1');_this.sBar52.frame=0;
        _this.sBar52.anchor.setTo(0.5);
        _this.sBar52.inputEnabled=false;
        _this.sBar52.scale.setTo(1,1);
        _this.sBar52X=_this.sBar52.x;
        _this.sBar52Y=_this.sBar52.y;
        
        _this.sBar53=this.add.sprite(318,171,'nsd5_5singleBar1');_this.sBar53.frame=0;
        _this.sBar53.anchor.setTo(0.5);
        _this.sBar53.inputEnabled=false;
        _this.sBar53.scale.setTo(1,1);
        _this.sBar53X=_this.sBar53.x;
        _this.sBar53Y=_this.sBar53.y;
                
        _this.sBar54=this.add.sprite(318,210,'nsd5_5singleBar1');_this.sBar54.frame=0;
        _this.sBar54.anchor.setTo(0.5);
        _this.sBar54.inputEnabled=false;
        _this.sBar54.scale.setTo(1,1);
        _this.sBar54X=_this.sBar54.x;
        _this.sBar54Y=_this.sBar54.y;
        
        _this.sBar55=this.add.sprite(318,249,'nsd5_5singleBar1');_this.sBar55.frame=0;
        _this.sBar55.anchor.setTo(0.5);
        _this.sBar55.inputEnabled=false;
        _this.sBar55.scale.setTo(1,1);
        _this.sBar55X=_this.sBar55.x;
        _this.sBar55Y=_this.sBar55.y;
        
        _this.sBar56=this.add.sprite(318,288,'nsd5_5singleBar1');_this.sBar56.frame=0;
        _this.sBar56.anchor.setTo(0.5);
        _this.sBar56.inputEnabled=false;
        _this.sBar56.scale.setTo(1,1);
        _this.sBar56X=_this.sBar56.x;
        _this.sBar56Y=_this.sBar56.y;
        
        _this.sBar57=this.add.sprite(318,327,'nsd5_5singleBar1');_this.sBar57.frame=0;
        _this.sBar57.anchor.setTo(0.5);
        _this.sBar57.inputEnabled=false;
        _this.sBar57.scale.setTo(1,1);
        _this.sBar57X=_this.sBar57.x;
        _this.sBar57Y=_this.sBar57.y;
        
        _this.sBar58=this.add.sprite(318,366,'nsd5_5singleBar1');_this.sBar58.frame=0;
        _this.sBar58.anchor.setTo(0.5);
        _this.sBar58.inputEnabled=false;
        _this.sBar58.scale.setTo(1,1);
        _this.sBar58X=_this.sBar58.x;
        _this.sBar58Y=_this.sBar58.y;
        
        _this.sBar59=this.add.sprite(318,405,'nsd5_5singleBar1');_this.sBar59.frame=0;
        _this.sBar59.anchor.setTo(0.5);
        _this.sBar59.inputEnabled=false;
        _this.sBar59.scale.setTo(1,1);
        _this.sBar59X=_this.sBar59.x;
        _this.sBar59Y=_this.sBar59.y;
                
        _this.sBar60=this.add.sprite(318,444,'nsd5_5singleBar1');_this.sBar60.frame=0;
        _this.sBar60.anchor.setTo(0.5);
        _this.sBar60.inputEnabled=false;
        _this.sBar60.scale.setTo(1,1);
        _this.sBar60X=_this.sBar60.x;
        _this.sBar60Y=_this.sBar60.y;
        
        _this.sBar61=this.add.sprite(357,93,'nsd5_5singleBar1');_this.sBar61.frame=0;
        _this.sBar61.anchor.setTo(0.5);
        _this.sBar61.inputEnabled=false;
        _this.sBar61.scale.setTo(1,1);
        _this.sBar61X=_this.sBar61.x;
        _this.sBar61Y=_this.sBar61.y;
        
        _this.sBar62=this.add.sprite(357,132,'nsd5_5singleBar1');_this.sBar62.frame=0;
        _this.sBar62.anchor.setTo(0.5);
        _this.sBar62.inputEnabled=false;
        _this.sBar62.scale.setTo(1,1);
        _this.sBar62X=_this.sBar62.x;
        _this.sBar62Y=_this.sBar62.y;
        
        _this.sBar63=this.add.sprite(357,171,'nsd5_5singleBar1');_this.sBar63.frame=0;
        _this.sBar63.anchor.setTo(0.5);
        _this.sBar63.inputEnabled=false;
        _this.sBar63.scale.setTo(1,1);
        _this.sBar63X=_this.sBar63.x;
        _this.sBar63Y=_this.sBar63.y;
                
        _this.sBar64=this.add.sprite(357,210,'nsd5_5singleBar1');_this.sBar64.frame=0;
        _this.sBar64.anchor.setTo(0.5);
        _this.sBar64.inputEnabled=false;
        _this.sBar64.scale.setTo(1,1);
        _this.sBar64X=_this.sBar64.x;
        _this.sBar64Y=_this.sBar64.y;
        
        _this.sBar65=this.add.sprite(357,249,'nsd5_5singleBar1');_this.sBar65.frame=0;
        _this.sBar65.anchor.setTo(0.5);
        _this.sBar65.inputEnabled=false;
        _this.sBar65.scale.setTo(1,1);
        _this.sBar65X=_this.sBar65.x;
        _this.sBar65Y=_this.sBar65.y;
        
        _this.sBar66=this.add.sprite(357,288,'nsd5_5singleBar1');_this.sBar66.frame=0;
        _this.sBar66.anchor.setTo(0.5);
        _this.sBar66.inputEnabled=false;
        _this.sBar66.scale.setTo(1,1);
        _this.sBar66X=_this.sBar66.x;
        _this.sBar66Y=_this.sBar66.y;
        
        _this.sBar67=this.add.sprite(357,327,'nsd5_5singleBar1');_this.sBar67.frame=0;
        _this.sBar67.anchor.setTo(0.5);
        _this.sBar67.inputEnabled=false;
        _this.sBar67.scale.setTo(1,1);
        _this.sBar67X=_this.sBar67.x;
        _this.sBar67Y=_this.sBar67.y;
         
        _this.sBar68=this.add.sprite(357,366,'nsd5_5singleBar1');_this.sBar68.frame=0;
        _this.sBar68.anchor.setTo(0.5);
        _this.sBar68.inputEnabled=false;
        _this.sBar68.scale.setTo(1,1);
        _this.sBar68X=_this.sBar68.x;
        _this.sBar68Y=_this.sBar68.y;
        
        _this.sBar69=this.add.sprite(357,405,'nsd5_5singleBar1');_this.sBar69.frame=0;
        _this.sBar69.anchor.setTo(0.5);
        _this.sBar69.inputEnabled=false;
        _this.sBar69.scale.setTo(1,1);
        _this.sBar69X=_this.sBar69.x;
        _this.sBar69Y=_this.sBar69.y;
                
        _this.sBar70=this.add.sprite(357,444,'nsd5_5singleBar1');_this.sBar70.frame=0;
        _this.sBar70.anchor.setTo(0.5);
        _this.sBar70.inputEnabled=false;
        _this.sBar70.scale.setTo(1,1);
        _this.sBar70X=_this.sBar70.x;
        _this.sBar70Y=_this.sBar70.y;
        
        _this.sBar71=this.add.sprite(396,93,'nsd5_5singleBar1');_this.sBar71.frame=0;
        _this.sBar71.anchor.setTo(0.5);
        _this.sBar71.inputEnabled=false;
        _this.sBar71.scale.setTo(1,1);
        _this.sBar71X=_this.sBar71.x;
        _this.sBar71Y=_this.sBar71.y;
        
        _this.sBar72=this.add.sprite(396,132,'nsd5_5singleBar1');_this.sBar72.frame=0;
        _this.sBar72.anchor.setTo(0.5);
        _this.sBar72.inputEnabled=false;
        _this.sBar72.scale.setTo(1,1);
        _this.sBar72X=_this.sBar72.x;
        _this.sBar72Y=_this.sBar72.y;
        
        _this.sBar73=this.add.sprite(396,171,'nsd5_5singleBar1');_this.sBar73.frame=0;
        _this.sBar73.anchor.setTo(0.5);
        _this.sBar73.inputEnabled=false;
        _this.sBar73.scale.setTo(1,1);
        _this.sBar73X=_this.sBar73.x;
        _this.sBar73Y=_this.sBar73.y;
                
        _this.sBar74=this.add.sprite(396,210,'nsd5_5singleBar1');_this.sBar74.frame=0;
        _this.sBar74.anchor.setTo(0.5);
        _this.sBar74.inputEnabled=false;
        _this.sBar74.scale.setTo(1,1);
        _this.sBar74X=_this.sBar74.x;
        _this.sBar74Y=_this.sBar74.y;
        
        _this.sBar75=this.add.sprite(396,249,'nsd5_5singleBar1');_this.sBar75.frame=0;
        _this.sBar75.anchor.setTo(0.5);
        _this.sBar75.inputEnabled=false;
        _this.sBar75.scale.setTo(1,1);
        _this.sBar75X=_this.sBar75.x;
        _this.sBar75Y=_this.sBar75.y;
        
        _this.sBar76=this.add.sprite(396,288,'nsd5_5singleBar1');_this.sBar76.frame=0;
        _this.sBar76.anchor.setTo(0.5);
        _this.sBar76.inputEnabled=false;
        _this.sBar76.scale.setTo(1,1);
        _this.sBar76X=_this.sBar76.x;
        _this.sBar76Y=_this.sBar76.y;
        
        _this.sBar77=this.add.sprite(396,327,'nsd5_5singleBar1');_this.sBar77.frame=0;
        _this.sBar77.anchor.setTo(0.5);
        _this.sBar77.inputEnabled=false;
        _this.sBar77.scale.setTo(1,1);
        _this.sBar77X=_this.sBar77.x;
        _this.sBar77Y=_this.sBar77.y;
        
        _this.sBar78=this.add.sprite(396,366,'nsd5_5singleBar1');_this.sBar78.frame=0;
        _this.sBar78.anchor.setTo(0.5);
        _this.sBar78.inputEnabled=false;
        _this.sBar78.scale.setTo(1,1);
        _this.sBar78X=_this.sBar78.x;
        _this.sBar78Y=_this.sBar78.y;
        
        _this.sBar79=this.add.sprite(396,405,'nsd5_5singleBar1');_this.sBar79.frame=0;
        _this.sBar79.anchor.setTo(0.5);
        _this.sBar79.inputEnabled=false;
        _this.sBar79.scale.setTo(1,1);
        _this.sBar79X=_this.sBar79.x;
        _this.sBar79Y=_this.sBar79.y;
                
        _this.sBar80=this.add.sprite(396,444,'nsd5_5singleBar1');_this.sBar80.frame=0;
        _this.sBar80.anchor.setTo(0.5);
        _this.sBar80.inputEnabled=false;
        _this.sBar80.scale.setTo(1,1);
        _this.sBar80X=_this.sBar80.x;
        _this.sBar80Y=_this.sBar80.y;
        
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        smallGroup.add(_this.sBar26);
        smallGroup.add(_this.sBar27);
        smallGroup.add(_this.sBar28); 
        smallGroup.add(_this.sBar29);
        smallGroup.add(_this.sBar30);
        smallGroup.add(_this.sBar31); 
        smallGroup.add(_this.sBar32);
        smallGroup.add(_this.sBar33); 
        smallGroup.add(_this.sBar34); 
        smallGroup.add(_this.sBar35);
        smallGroup.add(_this.sBar36); 
        smallGroup.add(_this.sBar37);
        smallGroup.add(_this.sBar38); 
        smallGroup.add(_this.sBar39);
        smallGroup.add(_this.sBar40);
        smallGroup.add(_this.sBar41); 
        smallGroup.add(_this.sBar42);
        smallGroup.add(_this.sBar43); 
        smallGroup.add(_this.sBar44); 
        smallGroup.add(_this.sBar45);
        smallGroup.add(_this.sBar46); 
        smallGroup.add(_this.sBar47);
        smallGroup.add(_this.sBar48); 
        smallGroup.add(_this.sBar49);
        smallGroup.add(_this.sBar50);
        smallGroup.add(_this.sBar51); 
        smallGroup.add(_this.sBar52);
        smallGroup.add(_this.sBar53); 
        smallGroup.add(_this.sBar54); 
        smallGroup.add(_this.sBar55);
        smallGroup.add(_this.sBar56); 
        smallGroup.add(_this.sBar57);
        smallGroup.add(_this.sBar58); 
        smallGroup.add(_this.sBar59);
        smallGroup.add(_this.sBar60);
        smallGroup.add(_this.sBar61); 
        smallGroup.add(_this.sBar62);
        smallGroup.add(_this.sBar63); 
        smallGroup.add(_this.sBar64); 
        smallGroup.add(_this.sBar65);
        smallGroup.add(_this.sBar66); 
        smallGroup.add(_this.sBar67);
        smallGroup.add(_this.sBar68); 
        smallGroup.add(_this.sBar69);
        smallGroup.add(_this.sBar70);
        smallGroup.add(_this.sBar71); 
        smallGroup.add(_this.sBar72);
        smallGroup.add(_this.sBar73); 
        smallGroup.add(_this.sBar74); 
        smallGroup.add(_this.sBar75);
        smallGroup.add(_this.sBar76); 
        smallGroup.add(_this.sBar77);
        smallGroup.add(_this.sBar78); 
        smallGroup.add(_this.sBar79);
        smallGroup.add(_this.sBar80);
        
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
        
        _this.rightAns1=80;
        _this.rightAns2=100;

         this.addNumberPad(); 
    },
    /******************tenquestionwheel***************************************/
    gotoTenthQuestion:function(){
       _this.questionNo =10;
       _this.no11++;
        console.log("ten");
        
        if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
        
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
                
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
                
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
        
        _this.rightAns1=12;
        _this.rightAns2=100;

         this.addNumberPad();
    },
    /************************Eleventh*****************************/
    gotoEleventhQuestion:function(){
        _this.questionNo = 11;
        _this.no11++;
        console.log("Eleven");
        
        if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
       
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(161,171,'nsd5_5singleBar1');_this.sBar13.frame=0;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(161,210,'nsd5_5singleBar1');_this.sBar14.frame=0;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(161,249,'nsd5_5singleBar1');_this.sBar15.frame=0;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(161,288,'nsd5_5singleBar1');_this.sBar16.frame=0;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(161,327,'nsd5_5singleBar1');_this.sBar17.frame=0;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(161,366,'nsd5_5singleBar1');_this.sBar18.frame=0;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(161,405,'nsd5_5singleBar1');_this.sBar19.frame=0;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(161,444,'nsd5_5singleBar1');_this.sBar20.frame=0;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(201,93,'nsd5_5singleBar1');_this.sBar21.frame=0;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(201,132,'nsd5_5singleBar1');_this.sBar22.frame=0;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(201,171,'nsd5_5singleBar1');_this.sBar23.frame=0;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(201,210,'nsd5_5singleBar1');_this.sBar24.frame=0;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(201,249,'nsd5_5singleBar1');_this.sBar25.frame=0;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        _this.sBar26=this.add.sprite(201,288,'nsd5_5singleBar1');_this.sBar26.frame=0;
        _this.sBar26.anchor.setTo(0.5);
        _this.sBar26.inputEnabled=false;
        _this.sBar26.scale.setTo(1,1);
        _this.sBar26X=_this.sBar26.x;
        _this.sBar26Y=_this.sBar26.y;
        
        _this.sBar27=this.add.sprite(201,327,'nsd5_5singleBar1');_this.sBar27.frame=0;
        _this.sBar27.anchor.setTo(0.5);
        _this.sBar27.inputEnabled=false;
        _this.sBar27.scale.setTo(1,1);
        _this.sBar27X=_this.sBar27.x;
        _this.sBar27Y=_this.sBar27.y;
        
        _this.sBar28=this.add.sprite(201,366,'nsd5_5singleBar1');_this.sBar28.frame=0;
        _this.sBar28.anchor.setTo(0.5);
        _this.sBar28.inputEnabled=false;
        _this.sBar28.scale.setTo(1,1);
        _this.sBar28X=_this.sBar28.x;
        _this.sBar28Y=_this.sBar28.y;
        
        _this.sBar29=this.add.sprite(201,405,'nsd5_5singleBar1');_this.sBar29.frame=0;
        _this.sBar29.anchor.setTo(0.5);
        _this.sBar29.inputEnabled=false;
        _this.sBar29.scale.setTo(1,1);
        _this.sBar29X=_this.sBar29.x;
        _this.sBar29Y=_this.sBar29.y;
                
        _this.sBar30=this.add.sprite(201,444,'nsd5_5singleBar1');_this.sBar30.frame=0;
        _this.sBar30.anchor.setTo(0.5);
        _this.sBar30.inputEnabled=false;
        _this.sBar30.scale.setTo(1,1);
        _this.sBar30X=_this.sBar30.x;
        _this.sBar30Y=_this.sBar30.y;
        
        _this.sBar31=this.add.sprite(240,93,'nsd5_5singleBar1');_this.sBar31.frame=0;
        _this.sBar31.anchor.setTo(0.5);
        _this.sBar31.inputEnabled=false;
        _this.sBar31.scale.setTo(1,1);
        _this.sBar31X=_this.sBar31.x;
        _this.sBar31Y=_this.sBar31.y;
        
        _this.sBar32=this.add.sprite(240,132,'nsd5_5singleBar1');_this.sBar32.frame=0;
        _this.sBar32.anchor.setTo(0.5);
        _this.sBar32.inputEnabled=false;
        _this.sBar32.scale.setTo(1,1);
        _this.sBar32X=_this.sBar32.x;
        _this.sBar32Y=_this.sBar32.y;
        
        _this.sBar33=this.add.sprite(240,171,'nsd5_5singleBar1');_this.sBar33.frame=0;
        _this.sBar33.anchor.setTo(0.5);
        _this.sBar33.inputEnabled=false;
        _this.sBar33.scale.setTo(1,1);
        _this.sBar33X=_this.sBar33.x;
        _this.sBar33Y=_this.sBar33.y;
                
        _this.sBar34=this.add.sprite(240,210,'nsd5_5singleBar1');_this.sBar34.frame=0;
        _this.sBar34.anchor.setTo(0.5);
        _this.sBar34.inputEnabled=false;
        _this.sBar34.scale.setTo(1,1);
        _this.sBar34X=_this.sBar34.x;
        _this.sBar34Y=_this.sBar34.y;
        
        _this.sBar35=this.add.sprite(240,249,'nsd5_5singleBar1');_this.sBar35.frame=0;
        _this.sBar35.anchor.setTo(0.5);
        _this.sBar35.inputEnabled=false;
        _this.sBar35.scale.setTo(1,1);
        _this.sBar35X=_this.sBar35.x;
        _this.sBar35Y=_this.sBar35.y;
        
        _this.sBar36=this.add.sprite(240,288,'nsd5_5singleBar1');_this.sBar36.frame=0;
        _this.sBar36.anchor.setTo(0.5);
        _this.sBar36.inputEnabled=false;
        _this.sBar36.scale.setTo(1,1);
        _this.sBar36X=_this.sBar36.x;
        _this.sBar36Y=_this.sBar36.y;
        
        _this.sBar37=this.add.sprite(240,327,'nsd5_5singleBar1');_this.sBar37.frame=0;
        _this.sBar37.anchor.setTo(0.5);
        _this.sBar37.inputEnabled=false;
        _this.sBar37.scale.setTo(1,1);
        _this.sBar37X=_this.sBar37.x;
        _this.sBar37Y=_this.sBar37.y;
        
        _this.sBar38=this.add.sprite(240,366,'nsd5_5singleBar1');_this.sBar38.frame=0;
        _this.sBar38.anchor.setTo(0.5);
        _this.sBar38.inputEnabled=false;
        _this.sBar38.scale.setTo(1,1);
        _this.sBar38X=_this.sBar38.x;
        _this.sBar38Y=_this.sBar38.y;
        
        _this.sBar39=this.add.sprite(240,405,'nsd5_5singleBar1');_this.sBar39.frame=0;
        _this.sBar39.anchor.setTo(0.5);
        _this.sBar39.inputEnabled=false;
        _this.sBar39.scale.setTo(1,1);
        _this.sBar39X=_this.sBar39.x;
        _this.sBar39Y=_this.sBar39.y;
                
        _this.sBar40=this.add.sprite(240,444,'nsd5_5singleBar1');_this.sBar40.frame=0;
        _this.sBar40.anchor.setTo(0.5);
        _this.sBar40.inputEnabled=false;
        _this.sBar40.scale.setTo(1,1);
        _this.sBar40X=_this.sBar40.x;
        _this.sBar40Y=_this.sBar40.y;
        
        _this.sBar41=this.add.sprite(279,93,'nsd5_5singleBar1');_this.sBar41.frame=0;
        _this.sBar41.anchor.setTo(0.5);
        _this.sBar41.inputEnabled=false;
        _this.sBar41.scale.setTo(1,1);
        _this.sBar41X=_this.sBar41.x;
        _this.sBar41Y=_this.sBar41.y;
        
        _this.sBar42=this.add.sprite(279,132,'nsd5_5singleBar1');_this.sBar42.frame=0;
        _this.sBar42.anchor.setTo(0.5);
        _this.sBar42.inputEnabled=false;
        _this.sBar42.scale.setTo(1,1);
        _this.sBar42X=_this.sBar42.x;
        _this.sBar42Y=_this.sBar42.y;
        
        _this.sBar43=this.add.sprite(279,171,'nsd5_5singleBar1');_this.sBar43.frame=0;
        _this.sBar43.anchor.setTo(0.5);
        _this.sBar43.inputEnabled=false;
        _this.sBar43.scale.setTo(1,1);
        _this.sBar43X=_this.sBar43.x;
        _this.sBar43Y=_this.sBar43.y;
                
        _this.sBar44=this.add.sprite(279,210,'nsd5_5singleBar1');_this.sBar44.frame=0;
        _this.sBar44.anchor.setTo(0.5);
        _this.sBar44.inputEnabled=false;
        _this.sBar44.scale.setTo(1,1);
        _this.sBar44X=_this.sBar44.x;
        _this.sBar44Y=_this.sBar44.y;
        
        _this.sBar45=this.add.sprite(279,249,'nsd5_5singleBar1');_this.sBar45.frame=0;
        _this.sBar45.anchor.setTo(0.5);
        _this.sBar45.inputEnabled=false;
        _this.sBar45.scale.setTo(1,1);
        _this.sBar45X=_this.sBar45.x;
        _this.sBar45Y=_this.sBar45.y;
        
        _this.sBar46=this.add.sprite(279,288,'nsd5_5singleBar1');_this.sBar46.frame=0;
        _this.sBar46.anchor.setTo(0.5);
        _this.sBar46.inputEnabled=false;
        _this.sBar46.scale.setTo(1,1);
        _this.sBar46X=_this.sBar46.x;
        _this.sBar46Y=_this.sBar46.y;
        
        _this.sBar47=this.add.sprite(279,327,'nsd5_5singleBar1');_this.sBar47.frame=0;
        _this.sBar47.anchor.setTo(0.5);
        _this.sBar47.inputEnabled=false;
        _this.sBar47.scale.setTo(1,1);
        _this.sBar47X=_this.sBar47.x;
        _this.sBar47Y=_this.sBar47.y;
        
        _this.sBar48=this.add.sprite(279,366,'nsd5_5singleBar1');_this.sBar48.frame=0;
        _this.sBar48.anchor.setTo(0.5);
        _this.sBar48.inputEnabled=false;
        _this.sBar48.scale.setTo(1,1);
        _this.sBar48X=_this.sBar48.x;
        _this.sBar48Y=_this.sBar48.y;
        
        _this.sBar49=this.add.sprite(279,405,'nsd5_5singleBar1');_this.sBar49.frame=0;
        _this.sBar49.anchor.setTo(0.5);
        _this.sBar49.inputEnabled=false;
        _this.sBar49.scale.setTo(1,1);
        _this.sBar49X=_this.sBar49.x;
        _this.sBar49Y=_this.sBar49.y;
                
        _this.sBar50=this.add.sprite(279,444,'nsd5_5singleBar1');_this.sBar50.frame=0;
        _this.sBar50.anchor.setTo(0.5);
        _this.sBar50.inputEnabled=false;
        _this.sBar50.scale.setTo(1,1);
        _this.sBar50X=_this.sBar50.x;
        _this.sBar50Y=_this.sBar50.y;
        
        _this.sBar51=this.add.sprite(318,93,'nsd5_5singleBar1');_this.sBar51.frame=0;
        _this.sBar51.anchor.setTo(0.5);
        _this.sBar51.inputEnabled=false;
        _this.sBar51.scale.setTo(1,1);
        _this.sBar51X=_this.sBar51.x;
        _this.sBar51Y=_this.sBar51.y;
        
        _this.sBar52=this.add.sprite(318,132,'nsd5_5singleBar1');_this.sBar52.frame=0;
        _this.sBar52.anchor.setTo(0.5);
        _this.sBar52.inputEnabled=false;
        _this.sBar52.scale.setTo(1,1);
        _this.sBar52X=_this.sBar52.x;
        _this.sBar52Y=_this.sBar52.y;
        
        _this.sBar53=this.add.sprite(318,171,'nsd5_5singleBar1');_this.sBar53.frame=0;
        _this.sBar53.anchor.setTo(0.5);
        _this.sBar53.inputEnabled=false;
        _this.sBar53.scale.setTo(1,1);
        _this.sBar53X=_this.sBar53.x;
        _this.sBar53Y=_this.sBar53.y;
                
        _this.sBar54=this.add.sprite(318,210,'nsd5_5singleBar1');_this.sBar54.frame=0;
        _this.sBar54.anchor.setTo(0.5);
        _this.sBar54.inputEnabled=false;
        _this.sBar54.scale.setTo(1,1);
        _this.sBar54X=_this.sBar54.x;
        _this.sBar54Y=_this.sBar54.y;
        
        _this.sBar55=this.add.sprite(318,249,'nsd5_5singleBar1');_this.sBar55.frame=0;
        _this.sBar55.anchor.setTo(0.5);
        _this.sBar55.inputEnabled=false;
        _this.sBar55.scale.setTo(1,1);
        _this.sBar55X=_this.sBar55.x;
        _this.sBar55Y=_this.sBar55.y;
        
        _this.sBar56=this.add.sprite(318,288,'nsd5_5singleBar1');_this.sBar56.frame=0;
        _this.sBar56.anchor.setTo(0.5);
        _this.sBar56.inputEnabled=false;
        _this.sBar56.scale.setTo(1,1);
        _this.sBar56X=_this.sBar56.x;
        _this.sBar56Y=_this.sBar56.y;
        
        _this.sBar57=this.add.sprite(318,327,'nsd5_5singleBar1');_this.sBar57.frame=0;
        _this.sBar57.anchor.setTo(0.5);
        _this.sBar57.inputEnabled=false;
        _this.sBar57.scale.setTo(1,1);
        _this.sBar57X=_this.sBar57.x;
        _this.sBar57Y=_this.sBar57.y;
        
        _this.sBar58=this.add.sprite(318,366,'nsd5_5singleBar1');_this.sBar58.frame=0;
        _this.sBar58.anchor.setTo(0.5);
        _this.sBar58.inputEnabled=false;
        _this.sBar58.scale.setTo(1,1);
        _this.sBar58X=_this.sBar58.x;
        _this.sBar58Y=_this.sBar58.y;
        
        _this.sBar59=this.add.sprite(318,405,'nsd5_5singleBar1');_this.sBar59.frame=0;
        _this.sBar59.anchor.setTo(0.5);
        _this.sBar59.inputEnabled=false;
        _this.sBar59.scale.setTo(1,1);
        _this.sBar59X=_this.sBar59.x;
        _this.sBar59Y=_this.sBar59.y;
                
        _this.sBar60=this.add.sprite(318,444,'nsd5_5singleBar1');_this.sBar60.frame=0;
        _this.sBar60.anchor.setTo(0.5);
        _this.sBar60.inputEnabled=false;
        _this.sBar60.scale.setTo(1,1);
        _this.sBar60X=_this.sBar60.x;
        _this.sBar60Y=_this.sBar60.y;
        
        _this.sBar61=this.add.sprite(357,93,'nsd5_5singleBar1');_this.sBar61.frame=0;
        _this.sBar61.anchor.setTo(0.5);
        _this.sBar61.inputEnabled=false;
        _this.sBar61.scale.setTo(1,1);
        _this.sBar61X=_this.sBar61.x;
        _this.sBar61Y=_this.sBar61.y;
        
        _this.sBar62=this.add.sprite(357,132,'nsd5_5singleBar1');_this.sBar62.frame=0;
        _this.sBar62.anchor.setTo(0.5);
        _this.sBar62.inputEnabled=false;
        _this.sBar62.scale.setTo(1,1);
        _this.sBar62X=_this.sBar62.x;
        _this.sBar62Y=_this.sBar62.y;
        
        _this.sBar63=this.add.sprite(357,171,'nsd5_5singleBar1');_this.sBar63.frame=0;
        _this.sBar63.anchor.setTo(0.5);
        _this.sBar63.inputEnabled=false;
        _this.sBar63.scale.setTo(1,1);
        _this.sBar63X=_this.sBar63.x;
        _this.sBar63Y=_this.sBar63.y;
                
        _this.sBar64=this.add.sprite(357,210,'nsd5_5singleBar1');_this.sBar64.frame=0;
        _this.sBar64.anchor.setTo(0.5);
        _this.sBar64.inputEnabled=false;
        _this.sBar64.scale.setTo(1,1);
        _this.sBar64X=_this.sBar64.x;
        _this.sBar64Y=_this.sBar64.y;
        
        _this.sBar65=this.add.sprite(357,249,'nsd5_5singleBar1');_this.sBar65.frame=0;
        _this.sBar65.anchor.setTo(0.5);
        _this.sBar65.inputEnabled=false;
        _this.sBar65.scale.setTo(1,1);
        _this.sBar65X=_this.sBar65.x;
        _this.sBar65Y=_this.sBar65.y;
        
        _this.sBar66=this.add.sprite(357,288,'nsd5_5singleBar1');_this.sBar66.frame=0;
        _this.sBar66.anchor.setTo(0.5);
        _this.sBar66.inputEnabled=false;
        _this.sBar66.scale.setTo(1,1);
        _this.sBar66X=_this.sBar66.x;
        _this.sBar66Y=_this.sBar66.y;
        
        _this.sBar67=this.add.sprite(357,327,'nsd5_5singleBar1');_this.sBar67.frame=0;
        _this.sBar67.anchor.setTo(0.5);
        _this.sBar67.inputEnabled=false;
        _this.sBar67.scale.setTo(1,1);
        _this.sBar67X=_this.sBar67.x;
        _this.sBar67Y=_this.sBar67.y;
         
        _this.sBar68=this.add.sprite(357,366,'nsd5_5singleBar1');_this.sBar68.frame=0;
        _this.sBar68.anchor.setTo(0.5);
        _this.sBar68.inputEnabled=false;
        _this.sBar68.scale.setTo(1,1);
        _this.sBar68X=_this.sBar68.x;
        _this.sBar68Y=_this.sBar68.y;
        
        _this.sBar69=this.add.sprite(357,405,'nsd5_5singleBar1');_this.sBar69.frame=0;
        _this.sBar69.anchor.setTo(0.5);
        _this.sBar69.inputEnabled=false;
        _this.sBar69.scale.setTo(1,1);
        _this.sBar69X=_this.sBar69.x;
        _this.sBar69Y=_this.sBar69.y;
                
        _this.sBar70=this.add.sprite(357,444,'nsd5_5singleBar1');_this.sBar70.frame=0;
        _this.sBar70.anchor.setTo(0.5);
        _this.sBar70.inputEnabled=false;
        _this.sBar70.scale.setTo(1,1);
        _this.sBar70X=_this.sBar70.x;
        _this.sBar70Y=_this.sBar70.y;
        
        _this.sBar71=this.add.sprite(396,93,'nsd5_5singleBar1');_this.sBar71.frame=0;
        _this.sBar71.anchor.setTo(0.5);
        _this.sBar71.inputEnabled=false;
        _this.sBar71.scale.setTo(1,1);
        _this.sBar71X=_this.sBar71.x;
        _this.sBar71Y=_this.sBar71.y;
        
        _this.sBar72=this.add.sprite(396,132,'nsd5_5singleBar1');_this.sBar72.frame=0;
        _this.sBar72.anchor.setTo(0.5);
        _this.sBar72.inputEnabled=false;
        _this.sBar72.scale.setTo(1,1);
        _this.sBar72X=_this.sBar72.x;
        _this.sBar72Y=_this.sBar72.y;
        
        _this.sBar73=this.add.sprite(396,171,'nsd5_5singleBar1');_this.sBar73.frame=0;
        _this.sBar73.anchor.setTo(0.5);
        _this.sBar73.inputEnabled=false;
        _this.sBar73.scale.setTo(1,1);
        _this.sBar73X=_this.sBar73.x;
        _this.sBar73Y=_this.sBar73.y;
                
        _this.sBar74=this.add.sprite(396,210,'nsd5_5singleBar1');_this.sBar74.frame=0;
        _this.sBar74.anchor.setTo(0.5);
        _this.sBar74.inputEnabled=false;
        _this.sBar74.scale.setTo(1,1);
        _this.sBar74X=_this.sBar74.x;
        _this.sBar74Y=_this.sBar74.y;
        
        _this.sBar75=this.add.sprite(396,249,'nsd5_5singleBar1');_this.sBar75.frame=0;
        _this.sBar75.anchor.setTo(0.5);
        _this.sBar75.inputEnabled=false;
        _this.sBar75.scale.setTo(1,1);
        _this.sBar75X=_this.sBar75.x;
        _this.sBar75Y=_this.sBar75.y;
                
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        smallGroup.add(_this.sBar26);
        smallGroup.add(_this.sBar27);
        smallGroup.add(_this.sBar28); 
        smallGroup.add(_this.sBar29);
        smallGroup.add(_this.sBar30);
        smallGroup.add(_this.sBar31); 
        smallGroup.add(_this.sBar32);
        smallGroup.add(_this.sBar33); 
        smallGroup.add(_this.sBar34); 
        smallGroup.add(_this.sBar35);
        smallGroup.add(_this.sBar36); 
        smallGroup.add(_this.sBar37);
        smallGroup.add(_this.sBar38); 
        smallGroup.add(_this.sBar39);
        smallGroup.add(_this.sBar40);
        smallGroup.add(_this.sBar41); 
        smallGroup.add(_this.sBar42);
        smallGroup.add(_this.sBar43); 
        smallGroup.add(_this.sBar44); 
        smallGroup.add(_this.sBar45);
        smallGroup.add(_this.sBar46); 
        smallGroup.add(_this.sBar47);
        smallGroup.add(_this.sBar48); 
        smallGroup.add(_this.sBar49);
        smallGroup.add(_this.sBar50);
        smallGroup.add(_this.sBar51); 
        smallGroup.add(_this.sBar52);
        smallGroup.add(_this.sBar53); 
        smallGroup.add(_this.sBar54); 
        smallGroup.add(_this.sBar55);
        smallGroup.add(_this.sBar56); 
        smallGroup.add(_this.sBar57);
        smallGroup.add(_this.sBar58); 
        smallGroup.add(_this.sBar59);
        smallGroup.add(_this.sBar60);
        smallGroup.add(_this.sBar61); 
        smallGroup.add(_this.sBar62);
        smallGroup.add(_this.sBar63); 
        smallGroup.add(_this.sBar64); 
        smallGroup.add(_this.sBar65);
        smallGroup.add(_this.sBar66); 
        smallGroup.add(_this.sBar67);
        smallGroup.add(_this.sBar68); 
        smallGroup.add(_this.sBar69);
        smallGroup.add(_this.sBar70);
        smallGroup.add(_this.sBar71); 
        smallGroup.add(_this.sBar72);
        smallGroup.add(_this.sBar73); 
        smallGroup.add(_this.sBar74); 
        smallGroup.add(_this.sBar75);
                
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
        
        _this.rightAns1=75;
        _this.rightAns2=100;

         this.addNumberPad(); 
    },
   /*******************************Twelveth********************/ 
    gotoTwelvethQuestion:function(){
        _this.questionNo = 12;
        _this.no11++;
        console.log("Twelve");
        
        if(_this.soundPlayed == false)
                {_this.getVoice();
                 _this.soundPlayed=true;
                }
       
        _this.grid = _this.add.sprite(300,270,'nsd5_5grid');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1);
        
        _this.sBar1=this.add.sprite(122,93,'nsd5_5singleBar1');_this.sBar1.frame=0;
        _this.sBar1.anchor.setTo(0.5);
        _this.sBar1.inputEnabled=false;
        _this.sBar1.scale.setTo(1,1);
        _this.sBar1X=_this.sBar1.x;
        _this.sBar1Y=_this.sBar1.y;
        
        _this.sBar2=this.add.sprite(122,132,'nsd5_5singleBar1');_this.sBar2.frame=0;
        _this.sBar2.anchor.setTo(0.5);
        _this.sBar2.inputEnabled=false;
        _this.sBar2.scale.setTo(1,1);
        _this.sBar2X=_this.sBar2.x;
        _this.sBar2Y=_this.sBar2.y;
        
        _this.sBar3=this.add.sprite(122,171,'nsd5_5singleBar1');_this.sBar3.frame=0;
        _this.sBar3.anchor.setTo(0.5);
        _this.sBar3.inputEnabled=false;
        _this.sBar3.scale.setTo(1,1);
        _this.sBar3X=_this.sBar3.x;
        _this.sBar3Y=_this.sBar3.y;
                
        _this.sBar4=this.add.sprite(122,210,'nsd5_5singleBar1');_this.sBar4.frame=0;
        _this.sBar4.anchor.setTo(0.5);
        _this.sBar4.inputEnabled=false;
        _this.sBar4.scale.setTo(1,1);
        _this.sBar4X=_this.sBar4.x;
        _this.sBar4Y=_this.sBar4.y;
        
        _this.sBar5=this.add.sprite(122,249,'nsd5_5singleBar1');_this.sBar5.frame=0;
        _this.sBar5.anchor.setTo(0.5);
        _this.sBar5.inputEnabled=false;
        _this.sBar5.scale.setTo(1,1);
        _this.sBar5X=_this.sBar5.x;
        _this.sBar5Y=_this.sBar5.y;
        
        _this.sBar6=this.add.sprite(122,288,'nsd5_5singleBar1');_this.sBar6.frame=0;
        _this.sBar6.anchor.setTo(0.5);
        _this.sBar6.inputEnabled=false;
        _this.sBar6.scale.setTo(1,1);
        _this.sBar6X=_this.sBar6.x;
        _this.sBar6Y=_this.sBar6.y;
        
        _this.sBar7=this.add.sprite(122,327,'nsd5_5singleBar1');_this.sBar7.frame=0;
        _this.sBar7.anchor.setTo(0.5);
        _this.sBar7.inputEnabled=false;
        _this.sBar7.scale.setTo(1,1);
        _this.sBar7X=_this.sBar7.x;
        _this.sBar7Y=_this.sBar7.y;
        
        _this.sBar8=this.add.sprite(122,366,'nsd5_5singleBar1');_this.sBar8.frame=0;
        _this.sBar8.anchor.setTo(0.5);
        _this.sBar8.inputEnabled=false;
        _this.sBar8.scale.setTo(1,1);
        _this.sBar8X=_this.sBar8.x;
        _this.sBar8Y=_this.sBar8.y;
        
        _this.sBar9=this.add.sprite(122,405,'nsd5_5singleBar1');_this.sBar9.frame=0;
        _this.sBar9.anchor.setTo(0.5);
        _this.sBar9.inputEnabled=false;
        _this.sBar9.scale.setTo(1,1);
        _this.sBar9X=_this.sBar9.x;
        _this.sBar9Y=_this.sBar9.y;
                
        _this.sBar10=this.add.sprite(122,444,'nsd5_5singleBar1');_this.sBar10.frame=0;
        _this.sBar10.anchor.setTo(0.5);
        _this.sBar10.inputEnabled=false;
        _this.sBar10.scale.setTo(1,1);
        _this.sBar10X=_this.sBar10.x;
        _this.sBar10Y=_this.sBar10.y;
        
        _this.sBar11=this.add.sprite(161,93,'nsd5_5singleBar1');_this.sBar11.frame=0;
        _this.sBar11.anchor.setTo(0.5);
        _this.sBar11.inputEnabled=false;
        _this.sBar11.scale.setTo(1,1);
        _this.sBar11X=_this.sBar11.x;
        _this.sBar11Y=_this.sBar11.y;
        
        _this.sBar12=this.add.sprite(161,132,'nsd5_5singleBar1');_this.sBar12.frame=0;
        _this.sBar12.anchor.setTo(0.5);
        _this.sBar12.inputEnabled=false;
        _this.sBar12.scale.setTo(1,1);
        _this.sBar12X=_this.sBar12.x;
        _this.sBar12Y=_this.sBar12.y;
        
        _this.sBar13=this.add.sprite(161,171,'nsd5_5singleBar1');_this.sBar13.frame=0;
        _this.sBar13.anchor.setTo(0.5);
        _this.sBar13.inputEnabled=false;
        _this.sBar13.scale.setTo(1,1);
        _this.sBar13X=_this.sBar13.x;
        _this.sBar13Y=_this.sBar13.y;
                
        _this.sBar14=this.add.sprite(161,210,'nsd5_5singleBar1');_this.sBar14.frame=0;
        _this.sBar14.anchor.setTo(0.5);
        _this.sBar14.inputEnabled=false;
        _this.sBar14.scale.setTo(1,1);
        _this.sBar14X=_this.sBar14.x;
        _this.sBar14Y=_this.sBar14.y;
        
        _this.sBar15=this.add.sprite(161,249,'nsd5_5singleBar1');_this.sBar15.frame=0;
        _this.sBar15.anchor.setTo(0.5);
        _this.sBar15.inputEnabled=false;
        _this.sBar15.scale.setTo(1,1);
        _this.sBar15X=_this.sBar15.x;
        _this.sBar15Y=_this.sBar15.y;
        
        _this.sBar16=this.add.sprite(161,288,'nsd5_5singleBar1');_this.sBar16.frame=0;
        _this.sBar16.anchor.setTo(0.5);
        _this.sBar16.inputEnabled=false;
        _this.sBar16.scale.setTo(1,1);
        _this.sBar16X=_this.sBar16.x;
        _this.sBar16Y=_this.sBar16.y;
        
        _this.sBar17=this.add.sprite(161,327,'nsd5_5singleBar1');_this.sBar17.frame=0;
        _this.sBar17.anchor.setTo(0.5);
        _this.sBar17.inputEnabled=false;
        _this.sBar17.scale.setTo(1,1);
        _this.sBar17X=_this.sBar17.x;
        _this.sBar17Y=_this.sBar17.y;
        
        _this.sBar18=this.add.sprite(161,366,'nsd5_5singleBar1');_this.sBar18.frame=0;
        _this.sBar18.anchor.setTo(0.5);
        _this.sBar18.inputEnabled=false;
        _this.sBar18.scale.setTo(1,1);
        _this.sBar18X=_this.sBar18.x;
        _this.sBar18Y=_this.sBar18.y;
        
        _this.sBar19=this.add.sprite(161,405,'nsd5_5singleBar1');_this.sBar19.frame=0;
        _this.sBar19.anchor.setTo(0.5);
        _this.sBar19.inputEnabled=false;
        _this.sBar19.scale.setTo(1,1);
        _this.sBar19X=_this.sBar19.x;
        _this.sBar19Y=_this.sBar19.y;
                
        _this.sBar20=this.add.sprite(161,444,'nsd5_5singleBar1');_this.sBar20.frame=0;
        _this.sBar20.anchor.setTo(0.5);
        _this.sBar20.inputEnabled=false;
        _this.sBar20.scale.setTo(1,1);
        _this.sBar20X=_this.sBar20.x;
        _this.sBar20Y=_this.sBar20.y;
        
        _this.sBar21=this.add.sprite(201,93,'nsd5_5singleBar1');_this.sBar21.frame=0;
        _this.sBar21.anchor.setTo(0.5);
        _this.sBar21.inputEnabled=false;
        _this.sBar21.scale.setTo(1,1);
        _this.sBar21X=_this.sBar21.x;
        _this.sBar21Y=_this.sBar21.y;
        
        _this.sBar22=this.add.sprite(201,132,'nsd5_5singleBar1');_this.sBar22.frame=0;
        _this.sBar22.anchor.setTo(0.5);
        _this.sBar22.inputEnabled=false;
        _this.sBar22.scale.setTo(1,1);
        _this.sBar22X=_this.sBar22.x;
        _this.sBar22Y=_this.sBar22.y;
        
        _this.sBar23=this.add.sprite(201,171,'nsd5_5singleBar1');_this.sBar23.frame=0;
        _this.sBar23.anchor.setTo(0.5);
        _this.sBar23.inputEnabled=false;
        _this.sBar23.scale.setTo(1,1);
        _this.sBar23X=_this.sBar23.x;
        _this.sBar23Y=_this.sBar23.y;
                
        _this.sBar24=this.add.sprite(201,210,'nsd5_5singleBar1');_this.sBar24.frame=0;
        _this.sBar24.anchor.setTo(0.5);
        _this.sBar24.inputEnabled=false;
        _this.sBar24.scale.setTo(1,1);
        _this.sBar24X=_this.sBar24.x;
        _this.sBar24Y=_this.sBar24.y;
        
        _this.sBar25=this.add.sprite(201,249,'nsd5_5singleBar1');_this.sBar25.frame=0;
        _this.sBar25.anchor.setTo(0.5);
        _this.sBar25.inputEnabled=false;
        _this.sBar25.scale.setTo(1,1);
        _this.sBar25X=_this.sBar25.x;
        _this.sBar25Y=_this.sBar25.y;
        
        _this.sBar26=this.add.sprite(201,288,'nsd5_5singleBar1');_this.sBar26.frame=0;
        _this.sBar26.anchor.setTo(0.5);
        _this.sBar26.inputEnabled=false;
        _this.sBar26.scale.setTo(1,1);
        _this.sBar26X=_this.sBar26.x;
        _this.sBar26Y=_this.sBar26.y;
        
        _this.sBar27=this.add.sprite(201,327,'nsd5_5singleBar1');_this.sBar27.frame=0;
        _this.sBar27.anchor.setTo(0.5);
        _this.sBar27.inputEnabled=false;
        _this.sBar27.scale.setTo(1,1);
        _this.sBar27X=_this.sBar27.x;
        _this.sBar27Y=_this.sBar27.y;
        
        _this.sBar28=this.add.sprite(201,366,'nsd5_5singleBar1');_this.sBar28.frame=0;
        _this.sBar28.anchor.setTo(0.5);
        _this.sBar28.inputEnabled=false;
        _this.sBar28.scale.setTo(1,1);
        _this.sBar28X=_this.sBar28.x;
        _this.sBar28Y=_this.sBar28.y;
        
        _this.sBar29=this.add.sprite(201,405,'nsd5_5singleBar1');_this.sBar29.frame=0;
        _this.sBar29.anchor.setTo(0.5);
        _this.sBar29.inputEnabled=false;
        _this.sBar29.scale.setTo(1,1);
        _this.sBar29X=_this.sBar29.x;
        _this.sBar29Y=_this.sBar29.y;
                
        _this.sBar30=this.add.sprite(201,444,'nsd5_5singleBar1');_this.sBar30.frame=0;
        _this.sBar30.anchor.setTo(0.5);
        _this.sBar30.inputEnabled=false;
        _this.sBar30.scale.setTo(1,1);
        _this.sBar30X=_this.sBar30.x;
        _this.sBar30Y=_this.sBar30.y;
        
        _this.sBar31=this.add.sprite(240,93,'nsd5_5singleBar1');_this.sBar31.frame=0;
        _this.sBar31.anchor.setTo(0.5);
        _this.sBar31.inputEnabled=false;
        _this.sBar31.scale.setTo(1,1);
        _this.sBar31X=_this.sBar31.x;
        _this.sBar31Y=_this.sBar31.y;
        
        _this.sBar32=this.add.sprite(240,132,'nsd5_5singleBar1');_this.sBar32.frame=0;
        _this.sBar32.anchor.setTo(0.5);
        _this.sBar32.inputEnabled=false;
        _this.sBar32.scale.setTo(1,1);
        _this.sBar32X=_this.sBar32.x;
        _this.sBar32Y=_this.sBar32.y;
        
        _this.sBar33=this.add.sprite(240,171,'nsd5_5singleBar1');_this.sBar33.frame=0;
        _this.sBar33.anchor.setTo(0.5);
        _this.sBar33.inputEnabled=false;
        _this.sBar33.scale.setTo(1,1);
        _this.sBar33X=_this.sBar33.x;
        _this.sBar33Y=_this.sBar33.y;
                
        _this.sBar34=this.add.sprite(240,210,'nsd5_5singleBar1');_this.sBar34.frame=0;
        _this.sBar34.anchor.setTo(0.5);
        _this.sBar34.inputEnabled=false;
        _this.sBar34.scale.setTo(1,1);
        _this.sBar34X=_this.sBar34.x;
        _this.sBar34Y=_this.sBar34.y;
        
        _this.sBar35=this.add.sprite(240,249,'nsd5_5singleBar1');_this.sBar35.frame=0;
        _this.sBar35.anchor.setTo(0.5);
        _this.sBar35.inputEnabled=false;
        _this.sBar35.scale.setTo(1,1);
        _this.sBar35X=_this.sBar35.x;
        _this.sBar35Y=_this.sBar35.y;
        
        _this.sBar36=this.add.sprite(240,288,'nsd5_5singleBar1');_this.sBar36.frame=0;
        _this.sBar36.anchor.setTo(0.5);
        _this.sBar36.inputEnabled=false;
        _this.sBar36.scale.setTo(1,1);
        _this.sBar36X=_this.sBar36.x;
        _this.sBar36Y=_this.sBar36.y;
        
        _this.sBar37=this.add.sprite(240,327,'nsd5_5singleBar1');_this.sBar37.frame=0;
        _this.sBar37.anchor.setTo(0.5);
        _this.sBar37.inputEnabled=false;
        _this.sBar37.scale.setTo(1,1);
        _this.sBar37X=_this.sBar37.x;
        _this.sBar37Y=_this.sBar37.y;
        
        _this.sBar38=this.add.sprite(240,366,'nsd5_5singleBar1');_this.sBar38.frame=0;
        _this.sBar38.anchor.setTo(0.5);
        _this.sBar38.inputEnabled=false;
        _this.sBar38.scale.setTo(1,1);
        _this.sBar38X=_this.sBar38.x;
        _this.sBar38Y=_this.sBar38.y;
        
        _this.sBar39=this.add.sprite(240,405,'nsd5_5singleBar1');_this.sBar39.frame=0;
        _this.sBar39.anchor.setTo(0.5);
        _this.sBar39.inputEnabled=false;
        _this.sBar39.scale.setTo(1,1);
        _this.sBar39X=_this.sBar39.x;
        _this.sBar39Y=_this.sBar39.y;
                
        _this.sBar40=this.add.sprite(240,444,'nsd5_5singleBar1');_this.sBar40.frame=0;
        _this.sBar40.anchor.setTo(0.5);
        _this.sBar40.inputEnabled=false;
        _this.sBar40.scale.setTo(1,1);
        _this.sBar40X=_this.sBar40.x;
        _this.sBar40Y=_this.sBar40.y;
                        
        smallGroup = _this.add.group();
        smallGroup.add(_this.grid);
        smallGroup.add(_this.sBar1); 
        smallGroup.add(_this.sBar2);
        smallGroup.add(_this.sBar3); 
        smallGroup.add(_this.sBar4); 
        smallGroup.add(_this.sBar5);
        smallGroup.add(_this.sBar6); 
        smallGroup.add(_this.sBar7);
        smallGroup.add(_this.sBar8); 
        smallGroup.add(_this.sBar9);
        smallGroup.add(_this.sBar10); 
        smallGroup.add(_this.sBar11);
        smallGroup.add(_this.sBar12); 
        smallGroup.add(_this.sBar13);
        smallGroup.add(_this.sBar14); 
        smallGroup.add(_this.sBar15);
        smallGroup.add(_this.sBar16); 
        smallGroup.add(_this.sBar17);
        smallGroup.add(_this.sBar18); 
        smallGroup.add(_this.sBar19);
        smallGroup.add(_this.sBar20); 
        smallGroup.add(_this.sBar21);
        smallGroup.add(_this.sBar22); 
        smallGroup.add(_this.sBar23);
        smallGroup.add(_this.sBar24); 
        smallGroup.add(_this.sBar25);
        smallGroup.add(_this.sBar26);
        smallGroup.add(_this.sBar27);
        smallGroup.add(_this.sBar28); 
        smallGroup.add(_this.sBar29);
        smallGroup.add(_this.sBar30);
        smallGroup.add(_this.sBar31); 
        smallGroup.add(_this.sBar32);
        smallGroup.add(_this.sBar33); 
        smallGroup.add(_this.sBar34); 
        smallGroup.add(_this.sBar35);
        smallGroup.add(_this.sBar36); 
        smallGroup.add(_this.sBar37);
        smallGroup.add(_this.sBar38); 
        smallGroup.add(_this.sBar39);
        smallGroup.add(_this.sBar40);
                        
        smallGroup.x = -600;
        _this.tween = _this.add.tween(smallGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.boxes();
        
        _this.rightAns1=40;
        _this.rightAns2=100;

         this.addNumberPad(); 
    },
  /********************************************************/
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.celebration = false;
        console.log("no"+_this.no11);
        //_this.count2 =0;
        //_this.no11++;
        _this.count1++;
        
        if(_this.questionNo<=6)
            {
                console.log("part1");
                _this.numGroup.destroy();
                flagGroup1.destroy();
                flagGroup2.destroy();
                largeGroup.destroy();
                smallGroup.destroy();
                boxgroup.destroy();
                scoreGroup.destroy();
                
                _this.numTxt1.setText("");
                _this.selectedAns1="";
                _this.numTxt2.setText("");
                _this.selectedAns2="";  
            }
        else if(_this.questionNo>6)
            {
                console.log("part2");
                _this.numGroup.destroy();
                smallGroup.destroy();
                boxgroup.destroy();
                fractionBoxgroup.destroy();
                                
                _this.numTxt1.setText("");
                _this.selectedAns1="";
                _this.numTxt2.setText("");
                _this.selectedAns2="";
            }
        
                if(_this.no11<6)
                    {
                        this.getQuestion();
                    }
                    else
                    {
                        //_this.timer.stop();
                         console.log("gameEnd");
                        //this.stopAllVoice();
                        this.state.start('nsd5_5Score');
                    }
    },
    
	correctAns:function(target)
	{
        if(_this.rightbtn){
            _this.rightbtn.events.onInputDown.removeAll();
            _this.rightbtn.inputEnabled = false;
        }

        if(_this.tickMark){
            _this.tickMark.events.onInputDown.removeAll();
            _this.tickMark.inputEnabled = false;
        }
        
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        _this.stopvoice();
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level1_"+target, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

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
        
            //target.events.onInputDown.removeAll();
        
            _this.wrongAnswer = false;
             
            //_this.wrong = true;
            _this.speakerbtn.inputEnabled=false;
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            console.log(_this.starAnim);

            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play();   
             console.log("correct11");
           // _this.speaker.inputEnabled=false;
            //_this.count1++;

            _this.celebration = true;
        
            _this.click3 = _this.add.audio('ClickSound');
            _this.click3.play();
        
            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();
        
            _this.time.events.add(2000, _this.removeEverthing, _this);

            _this.questionid=1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
     },
    
    wrongAns:function(target)
	{
       //_this.timer.stop();
        //_this.stopvoice();
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
       _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level1_", 
                    access_token: window.acctkn 
               } 
             
         _this.wrongAnswer = true;

        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        /*_this.time.events.add(1000, function(){
        fractionBoxgroup.destroy();
        _this.wrongGrp.destroy();
        _this.tickMark.frame = 0;
        _this.tickMark.destroy();
        _this.getQuestion();
            
        },_this);*/
                	
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
	
    getVoice:function()
    {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.temp2)
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/English/nsd5.5aE.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Hindi/nsd5.5aH.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Kannada/nsd5.5aK.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Gujarati/nsd5.5aG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Marathi/nsd5.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Telugu/nsd5.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Tamil/nsd5.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Urdu/nsd5.5a.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Odiya/nsd5.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                break;
            case 7: 
            case 8: 
            case 9: 
            case 10:
            case 11:
            case 12: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/English/nsd5.5bE.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Hindi/nsd5.5bH.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Kannada/nsd5.5bK.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Gujarati/nsd5.5bG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Marathi/nsd5.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Telugu/nsd5.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Tamil/nsd5.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Urdu/nsd5.5b.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Odiya/nsd5.5b.mp3");
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

};