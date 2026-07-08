Game.sg4_1_1level1=function(){};

Game.sg4_1_1level1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("SG4_1_1",gradeSelected);

    },

    preload:function(game){
        if(!window.grade1SG6){

            window.grade1SG6 = true;

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

        this.load.image('4_1_1bg',window.baseUrl+'assets/gradeAssets/sg4.1.1/Bg.png');
        this.load.atlas('4_1_1cone',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone icons.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone icons.json');
        this.load.atlas('4_1_1cube',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube icons.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube icons.json');
        this.load.atlas('4_1_1cuboid',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid icons.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid icons.json');
        this.load.atlas('4_1_1cylinder',window.baseUrl+'assets/gradeAssets/sg4.1.1/Cylinder icons.png',window.baseUrl+'json/gradeJson/sg4.1.1/Cylinder icons.json');
        this.load.atlas('4_1_1sphere',window.baseUrl+'assets/gradeAssets/sg4.1.1/Sphere icons.png',window.baseUrl+'json/gradeJson/sg4.1.1/Sphere icons.json');
    
        this.load.atlas('4_1_1tick',window.baseUrl+'assets/gradeAssets/sg4.1.1/tickMark.png',window.baseUrl+'json/gradeJson/sg4.1.1/tickMark.json');
        this.load.atlas('4_1_1cone1',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone1.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone1.json');
        this.load.atlas('4_1_1cone2',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone2.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone2.json');
        this.load.atlas('4_1_1cone3',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone3.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone3.json');
        this.load.atlas('4_1_1cone4',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone4.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone4.json'); 
        this.load.atlas('4_1_1cube1',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube1.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube1.json');
        this.load.atlas('4_1_1cube2',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube2.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube2.json');
        this.load.atlas('4_1_1cube3',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube3.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube3.json');
        this.load.atlas('4_1_1cube4',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube4.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube4.json');
        this.load.atlas('4_1_1cube5',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube5.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube5.json');
        this.load.atlas('4_1_1cuboid1',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid1.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid1.json');
        this.load.atlas('4_1_1cuboid2',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid2.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid2.json');
        this.load.atlas('4_1_1cuboid3',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid3.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid3.json');
        this.load.atlas('4_1_1cuboid4',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid4.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid4.json');
        this.load.atlas('4_1_1cuboid5',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid5.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid5.json');
        this.load.atlas('4_1_1cuboid6',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid6.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid6.json');
        this.load.atlas('4_1_1cylinder1',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder1.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder1.json');
        this.load.atlas('4_1_1cylinder2',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder2.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder2.json');
        this.load.atlas('4_1_1cylinder3',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder3.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder3.json');
        this.load.atlas('4_1_1cylinder4',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder4.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder4.json');
        this.load.atlas('4_1_1cylinder5',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder5.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder5.json');
        this.load.atlas('4_1_1cylinder6',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder6.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder6.json');
        this.load.atlas('4_1_1cylinder7',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder7.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder7.json');
        this.load.atlas('4_1_1cylinder8',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder8.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder8.json');
        this.load.atlas('4_1_1cylinder9',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder9.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder9.json');
        this.load.atlas('4_1_1sphere1',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere1.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere1.json');
        this.load.atlas('4_1_1sphere2',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere2.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere2.json');
        this.load.atlas('4_1_1sphere3',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere3.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere3.json');
        this.load.atlas('4_1_1sphere4',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere4.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere4.json');
        this.load.atlas('4_1_1sphere5',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere5.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere5.json');
        this.load.atlas('4_1_1sphere6',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere6.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere6.json');
        this.load.atlas('4_1_1sphere7',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere7.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere7.json');
        
        //animations
        this.load.atlas('4_1_1cone21',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone21.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone21.json');
        this.load.atlas('4_1_1cone22',window.baseUrl+'assets/gradeAssets/sg4.1.1/cone22.png',window.baseUrl+'json/gradeJson/sg4.1.1/cone22.json');
        this.load.atlas('4_1_1cube31',window.baseUrl+'assets/gradeAssets/sg4.1.1/cube31.png',window.baseUrl+'json/gradeJson/sg4.1.1/cube31.json');
        this.load.atlas('4_1_1cuboid41',window.baseUrl+'assets/gradeAssets/sg4.1.1/cuboid41.png',window.baseUrl+'json/gradeJson/sg4.1.1/cuboid41.json');
        this.load.atlas('4_1_1cylinder21',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder21.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder21.json');
        this.load.atlas('4_1_1cylinder41',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder41.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder41.json');
        this.load.atlas('4_1_1cylinder71',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder71.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder71.json');
         this.load.atlas('4_1_1cylinder72',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder72.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder72.json');
        this.load.atlas('4_1_1cylinder91',window.baseUrl+'assets/gradeAssets/sg4.1.1/cylinder91.png',window.baseUrl+'json/gradeJson/sg4.1.1/cylinder91.json');
        this.load.atlas('4_1_1sphere11',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere11.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere11.json');
        this.load.atlas('4_1_1sphere31',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere31.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere31.json');
        this.load.atlas('4_1_1sphere41',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere41.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere41.json');
        this.load.atlas('4_1_1sphere51',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere51.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere51.json');
        this.load.atlas('4_1_1sphere61',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere61.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere61.json');
        this.load.atlas('4_1_1sphere21',window.baseUrl+'assets/gradeAssets/sg4.1.1/sphere21.png',window.baseUrl+'json/gradeJson/sg4.1.1/sphere21.json');
        


    }

    },
    
	create:function(game)
    {
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;

        _this.sceneCount = 0;
        
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
      
        _this.no11 = 0;
        
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, '4_1_1bg');
        
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
        
        _this.timeDisplay = _this.add.text(331,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        _this.getVoice();
        
    },
    
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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
    	console.log("getQuestion :"+_this.no11);
        console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid = 1;
        
        //_this.no11 = 0;
        
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
            case 9: _this.gotoNinethQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
            case 11: _this.gotoEleventhQuestion();
    				break;
            case 12: _this.gotoTwelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				 break;
            case 14: _this.gotoFourteenthQuestion();
                      break;
            case 15: _this.gotoFifteenthQuestion();
                      break;
            case 16: _this.gotoSixteenthQuestion();
                      break;
            case 17: _this.gotoSeventeenthQuestion();
                      break;
            case 18: _this.gotoEighteenthQuestion();
                      break;
            case 19: _this.gotoNineteenthQuestion();
                      break;
            case 20: _this.gotoTwentythQuestion();
                      break;
            case 21: _this.gotoTwentyonethQuestion();
                      break;
            case 22: _this.gotoTwentytwothQuestion();
                      break;
            case 23: _this.gotoTwentythirdQuestion();
                      break;
            case 24: _this.gotoTwentyfourthQuestion();
                      break;
            case 25: _this.gotoTwentyfifthQuestion();
                      break;
            case 26: _this.gotoTwentysixthQuestion();
                      break;
            case 27: _this.gotoTwentyseventhQuestion();
                      break;
            case 28: _this.gotoTwentyeighthQuestion();
                      break;
            case 29: _this.gotoTwentyninethQuestion();
                      break;
            case 30: _this.gotoThirtythQuestion();
                      break;
            case 31: _this.gotoThirtyonethQuestion();
                      break;
    	}
        
    },
    
    stopVoice:function()
    {
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
        
        if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
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
             
    
    gotoFirstQuestion:function()
    {  
       // _this.getVoice();
        console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        _this.qn = 1;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX+10,_this.world.centerY-90,'4_1_1sphere3');
        _this.sphere.anchor.setTo(0.5);
        _this.sphere.scale.setTo(0.9,0.9);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 233 }, 0, 'Linear', true, 0);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,1);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,1);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,1);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
       // _this.opt5.scale.setTo(1,1);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
       /* _this.tick = _this.add.sprite(_this.world.centerX+400,_this.world.centerY+210,'4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.1,0.9);*/
       
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
       
    },
    
   /* clicked1: function(target){
        console.log('call')
        var shape;
        if(target.name == '4_1_1cuboid')
            {
                _this.click = _this.add.audio('ClickSound');
                _this.click.play();
                _this.opt1.frame=1;
                _this.opt2.frame=0;
                _this.opt3.frame=0;
                _this.opt4.frame=0;
                _this.opt5.frame=0;
                _this.shape = 1;
                
            }
        else if(target.name == '4_1_1cylinder')
            {
                 _this.click = _this.add.audio('ClickSound');
                _this.click.play();
                _this.opt1.frame=0;
                _this.opt2.frame=1;
                _this.opt3.frame=0;
                _this.opt4.frame=0;
                _this.opt5.frame=0; 
                _this.shape = 2;
            }
        else if(target.name == '4_1_1cube')
            {
                _this.click = _this.add.audio('ClickSound');
                _this.click.play();
                _this.opt1.frame=0;
                _this.opt2.frame=0;
                _this.opt3.frame=1;
                _this.opt4.frame=0;
                _this.opt5.frame=0; 
                _this.shape = 3;
            }
        else if(target.name == '4_1_1cone')
            {
                _this.click = _this.add.audio('ClickSound');
                _this.click.play();
                _this.opt1.frame=0;
                _this.opt2.frame=0;
                _this.opt3.frame=0;
                _this.opt4.frame=1;
                _this.opt5.frame=0;
                _this.shape = 4;
            }
        else if(target.name == '4_1_1sphere')
            {
                _this.click = _this.add.audio('ClickSound');
                _this.click.play();
                _this.opt1.frame=0;
                _this.opt2.frame=0;
                _this.opt3.frame=0;
                _this.opt4.frame=0;
                _this.opt5.frame=1;
             
            }
       // _this.tick.inputEnabled = true;
       // _this.tick.input.useHandCursor = true;
        //_this.tick.events.onInputDown.add(_this.clicked,_this);
        
    },
    
    /* clicked: function(target){
         console.log('Here')
       // _this.noofAttempts++;
         
          if(_this.questionNo == 2)
             {
             if(_this.shape == 4)
                 {
                      //_this.tick.frame= 1;
                      _this.correctAns();
                      _this.opt4.frame=2;
                 }
                  else{
                         _this.wrongAns();
                     }
             }
          else if(_this.questionNo == 3)
             {
             if(_this.shape == 3)
                 {
                     //_this.tick.frame= 1;
                     _this.correctAns();
                     _this.opt3.frame=2;
                     
                 }
                  else{
                         _this.wrongAns();
                     }
             }
          else if(_this.questionNo == 4)
             {
             if(_this.shape == 1)
                 {
                      // _this.tick.frame= 1;
                        _this.correctAns();
                        _this.opt1.frame=2;
                     
                 }
                  else{
                         _this.wrongAns();
                     }
             }
          else if(_this.questionNo == 5)
             {
             if(_this.shape == 2)
                 {
                        // _this.tick.frame= 1;
                         _this.correctAns();
                         _this.opt2.frame=2;
                     
                 }
                  else{
                         _this.wrongAns();
                     }
             }
            
    },*/
    
      gotoSecondQuestion:function()
    {  
       // _this.getVoice();
        console.log("gotoSecondQuestion");
        _this.questionNo = 2;
        _this.qn = 4;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-135,'4_1_1sphere2');
        _this.sphere.anchor.setTo(0.5);
       // _this.sphere.scale.setTo(1.2,1.2);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 275 }, 0, 'Linear', true, 0);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
       // _this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder'; 
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
       //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube'; 
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere'; 
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.sphere1 = _this.add.sprite(480,200,'4_1_1sphere21');
        _this.sphere1.anchor.setTo(0.5);
        //_this.sphere1.scale.setTo(1.1,1.1);
        _this.sphere1.visible = false;
        
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
        _this.optionGrp.add(_this.sphere1);
       
    },
    
     gotoThirdQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        _this.qn = 3;
        _this.optionGrp = _this.add.group();
       // _this.objGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1sphere1');
        _this.sphere.anchor.setTo(0.5);
        _this.sphere.scale.setTo(0.8,0.8);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 250 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
         },this);
    
        _this.sphere1 = _this.add.sprite(480,210,'4_1_1sphere11');
        _this.sphere1.anchor.setTo(0.5);
        _this.sphere1.scale.setTo(0.8,0.8);
        _this.sphere1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
        _this.optionGrp.add(_this.sphere1);
       
    },
     
      gotoFourthQuestion:function()
      {  
        //_this.getVoice();
        console.log("gotoFourthQuestion");
        _this.questionNo = 4;
        _this.qn = 11;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-135,'4_1_1sphere4');
        _this.sphere.anchor.setTo(0.5);
        _this.sphere.scale.setTo(0.8,0.8);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
         },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
         },this);
          
        _this.sphere1 = _this.add.sprite(485,240,'4_1_1sphere41');
        _this.sphere1.anchor.setTo(0.5);
        _this.sphere1.scale.setTo(1.8,1.8);
        _this.sphere1.visible = false;
            
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
        _this.optionGrp.add(_this.sphere1);
       
    },
    
     gotoFifthQuestion:function()
    {  
       // _this.getVoice();
        console.log("gotoFifthQuestion");
        _this.questionNo = 5;
        _this.qn = 14;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'4_1_1sphere5');
        _this.sphere.anchor.setTo(0.5);
       // _this.sphere.scale.setTo(1.5,1.5);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 275 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
         },this);
        
        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.sphere1 = _this.add.sprite(480,230,'4_1_1sphere51');
        _this.sphere1.anchor.setTo(0.5);
        //_this.sphere1.scale.setTo(0.9,0.9);
        _this.sphere1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
        _this.optionGrp.add(_this.sphere1);
       
    },
    
       gotoSixthQuestion:function()
    {  
       // _this.getVoice();
        console.log("gotoSixthQuestion");
        _this.questionNo = 6;
        _this.qn = 15;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-145,'4_1_1sphere6');
        _this.sphere.anchor.setTo(0.5);
        //_this.sphere.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 250 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.sphere1 = _this.add.sprite(480,240,'4_1_1sphere61');
        _this.sphere1.anchor.setTo(0.5);
        _this.sphere1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
        _this.optionGrp.add(_this.sphere1);
       
    },
    
     gotoSeventhQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoSeventhQuestion");
        _this.questionNo = 7;
        _this.qn = 2;
        _this.optionGrp = _this.add.group();
        
        _this.sphere = _this.add.sprite(_this.world.centerX,_this.world.centerY-135,'4_1_1sphere7');
        _this.sphere.anchor.setTo(0.5);
       // _this.sphere.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.sphere);
        _this.tween.to({ y: 270 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.sphere);
       
    },
    
     gotoEighthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoEighthQuestion");
        _this.questionNo = 8;
        _this.qn = 5;
        _this.optionGrp = _this.add.group();
        
        _this.cone = _this.add.sprite(_this.world.centerX,_this.world.centerY-110,'4_1_1cone1');
        _this.cone.anchor.setTo(0.5);
        //_this.cone.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cone);
        _this.tween.to({ y: 230 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cone);
       
    },
    
      gotoNinethQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoNinethQuestion");
        _this.questionNo = 9;
        _this.qn = 16;
        _this.optionGrp = _this.add.group();
        
        _this.cone = _this.add.sprite(_this.world.centerX,_this.world.centerY-120,'4_1_1cone2');
        _this.cone.anchor.setTo(0.5);
       // _this.cone.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cone);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.cone1 = _this.add.sprite(479,245,'4_1_1cone22');
        _this.cone1.anchor.setTo(0.5);
        _this.cone1.scale.setTo(1,1);
        _this.cone1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cone);
        _this.optionGrp.add(_this.cone1);
        
       
    },
   
     gotoTenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTenthQuestion");
        _this.questionNo = 10;
        _this.qn = 5;
        _this.optionGrp = _this.add.group();
        
        _this.cone = _this.add.sprite(_this.world.centerX,_this.world.centerY-125,'4_1_1cone3');
        _this.cone.anchor.setTo(0.5);
        //_this.cone.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cone);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cone);
       
    },
    
     gotoEleventhQuestion:function()
    {  
       // _this.getVoice();
        console.log("gotoEleventhQuestion");
        _this.questionNo = 11;
        _this.qn = 5;
        _this.optionGrp = _this.add.group();
        
        _this.cone = _this.add.sprite(_this.world.centerX,_this.world.centerY-125,'4_1_1cone4');
        _this.cone.anchor.setTo(0.5);
        //_this.cone.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cone);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cone);
       
    },
    
      gotoTwelvethQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwelvethQuestion");
        _this.questionNo = 12;
        _this.qn = 6;
        _this.optionGrp = _this.add.group();
        
        _this.cube = _this.add.sprite(_this.world.centerX,_this.world.centerY-130,'4_1_1cube1');
        _this.cube.anchor.setTo(0.5);
        //_this.cube.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cube);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cube);
       
    },
    
     gotoThirteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoThirteenthQuestion");
        _this.questionNo = 13;
        _this.qn = 6;
        _this.optionGrp = _this.add.group();
        
        _this.cube = _this.add.sprite(_this.world.centerX,_this.world.centerY-130,'4_1_1cube2');
        _this.cube.anchor.setTo(0.5);
        _this.cube.scale.setTo(1.2,1.2);
        _this.tween = _this.add.tween(_this.cube);
        _this.tween.to({ y: 250 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cube);
       
    },
    
     gotoFourteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoFourteenthQuestion");
        _this.questionNo = 14;
        _this.qn = 12;
        _this.optionGrp = _this.add.group();
        
        _this.cube = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cube3');
        _this.cube.anchor.setTo(0.5);
       // _this.cube.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cube);
        _this.tween.to({ y: 250 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cube);
       
    },
    
     gotoFifteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoFifteenthQuestion");
        _this.questionNo = 15;
        _this.qn = 6;
        _this.optionGrp = _this.add.group();
        
        _this.cube = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cube4');
        _this.cube.anchor.setTo(0.5);
        _this.cube.scale.setTo(1.2,1.2);
        _this.tween = _this.add.tween(_this.cube);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cube);
       
    },
    
     gotoSixteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoSixteenthQuestion");
        _this.questionNo = 16;
        _this.qn = 6;
        _this.optionGrp = _this.add.group();
        
        _this.cube = _this.add.sprite(_this.world.centerX,_this.world.centerY-150,'4_1_1cube5');
        _this.cube.anchor.setTo(0.5);
       // _this.cube.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cube);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cube);
       
    },
    
     gotoSeventeenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoSeventeenthQuestion");
        _this.questionNo = 17;
        _this.qn = 7;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-150,'4_1_1cuboid1');
        _this.cuboid.anchor.setTo(0.5);
        //_this.cuboid.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 270 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
       
    },
    
     gotoEighteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoEighteenthQuestion");
        _this.questionNo = 18;
        _this.qn = 7;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-180,'4_1_1cuboid2');
        _this.cuboid.anchor.setTo(0.5);
       // _this.cuboid.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 300 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
       
    },
    
      gotoNineteenthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoNineteenthQuestion");
        _this.questionNo = 19;
        _this.qn = 7;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-110,'4_1_1cuboid3');
        _this.cuboid.anchor.setTo(0.5);
        //_this.cuboid.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 230 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
       
    },
    
     gotoTwentythQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentythQuestion");
        _this.questionNo = 20;
        _this.qn = 17;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-150,'4_1_1cuboid4');
        _this.cuboid.anchor.setTo(0.5);
        //_this.cuboid.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 250 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.cuboid1 = _this.add.sprite(510,265,'4_1_1cuboid41');
        _this.cuboid1.anchor.setTo(0.5);
        _this.cuboid1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
        _this.optionGrp.add(_this.cuboid1);
       
    },
    
      gotoTwentyonethQuestion:function()
    {  
        ////_this.getVoice();
        console.log("gotoTwentyonethQuestion");
        _this.questionNo = 21;
        _this.qn = 7;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-160,'4_1_1cuboid5');
        _this.cuboid.anchor.setTo(0.5);
        _this.cuboid.scale.setTo(1.5,1.5);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 270 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
       
    },
    
     gotoTwentytwothQuestion:function()
    {  
        //_this.getVoice();
        console.log(" gotoTwentytwothQuestion");
        _this.questionNo = 22;
        _this.qn = 7;
        _this.optionGrp = _this.add.group();
        
        _this.cuboid = _this.add.sprite(_this.world.centerX,_this.world.centerY-160,'4_1_1cuboid6');
        _this.cuboid.anchor.setTo(0.5);
        _this.cuboid.scale.setTo(1.5,1.5);
        _this.tween = _this.add.tween(_this.cuboid);
        _this.tween.to({ y: 275 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cuboid);
       
    },
    
     gotoTwentythirdQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentythirdQuestion");
        _this.questionNo = 23;
        _this.qn = 8;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cylinder1');
        _this.cylinder.anchor.setTo(0.5);
        //_this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoTwentyfourthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentyfourthQuestion");
        _this.questionNo = 24;
        _this.qn = 13;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cylinder2');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
      gotoTwentyfifthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentyfifthQuestion");
        _this.questionNo = 25;
        _this.qn = 8;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-150,'4_1_1cylinder3');
        _this.cylinder.anchor.setTo(0.5);
        //_this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 270 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoTwentysixthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentysixthQuestion");
        _this.questionNo = 26;
        _this.qn = 9;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-110,'4_1_1cylinder4');
        _this.cylinder.anchor.setTo(0.5);
        //_this.cylinder.scale.setTo(1.5,1);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 225 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoTwentyseventhQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentyseventhQuestion");
        _this.questionNo = 27;
        _this.qn = 8;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-120,'4_1_1cylinder5');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.2,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoTwentyeighthQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentyeighthQuestion");
        _this.questionNo = 28;
        _this.qn = 8;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cylinder6');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 270 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoTwentyninethQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoTwentyninethQuestion");
        _this.questionNo = 29;
        _this.qn = 10;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-140,'4_1_1cylinder7');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoThirtythQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoThirtythQuestion");
        _this.questionNo = 30;
        _this.qn = 8;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-120,'4_1_1cylinder8');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.2,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 240 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
       
    },
    
     gotoThirtyonethQuestion:function()
    {  
        //_this.getVoice();
        console.log("gotoThirtyonethQuestion");
        _this.questionNo = 31;
        _this.qn = 18;
        _this.optionGrp = _this.add.group();
        
        _this.cylinder = _this.add.sprite(_this.world.centerX,_this.world.centerY-145,'4_1_1cylinder9');
        _this.cylinder.anchor.setTo(0.5);
       // _this.cylinder.scale.setTo(1.5,1.2);
        _this.tween = _this.add.tween(_this.cylinder);
        _this.tween.to({ y: 260 }, 0, 'Linear', true, 0);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+160,'4_1_1cuboid');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,0.6);
        _this.opt1.name = '4_1_1cuboid';
        _this.tween.onComplete.add(function(){
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+160,'4_1_1cylinder');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.6);
        _this.opt2.name = '4_1_1cylinder';
        _this.tween.onComplete.add(function(){
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        },this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-10,_this.world.centerY+160,'4_1_1cube');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,0.6);
        _this.opt3.name = '4_1_1cube';
        _this.tween.onComplete.add(function(){
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        },this);

        _this.opt4 = _this.add.sprite(_this.world.centerX+150,_this.world.centerY+160,'4_1_1cone');
        _this.opt4.anchor.setTo(0.5);
        //_this.opt4.scale.setTo(1,0.6);
        _this.opt4.name = '4_1_1cone';
        _this.tween.onComplete.add(function(){
        _this.opt4.inputEnabled = true;
        _this.opt4.input.useHandCursor = true;
        _this.opt4.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.opt5 = _this.add.sprite(_this.world.centerX+310,_this.world.centerY+160,'4_1_1sphere');
        _this.opt5.anchor.setTo(0.5);
        //_this.opt5.scale.setTo(1,0.6);
        _this.opt5.name = '4_1_1sphere';
        _this.tween.onComplete.add(function(){
        _this.opt5.inputEnabled = true;
        _this.opt5.input.useHandCursor = true;
        _this.opt5.events.onInputDown.add(_this.wrongAns,_this);
        },this);
        
        _this.cylinder1 = _this.add.sprite(480,145, '4_1_1cylinder91');
        _this.cylinder1.anchor.setTo(0.5);
        _this.cylinder1.scale.setTo(0.85,0.85);
        _this.cylinder1.visible = false;
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt4);
        _this.optionGrp.add(_this.opt5);
        _this.optionGrp.add(_this.cylinder);
        _this.optionGrp.add(_this.cylinder1);
       
    },
    
    
 	changeQuestion:function()
	{
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        _this.optionGrp.setAll("inputEnabled",false);
        //target.events.onInputDown.removeAll();
        console.log("correct Answer");
        console.log("_this.questionNo :"+_this.questionNo);

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
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
           target.frame=1;
           _this.click1 = _this.add.audio('ClickSound');
           _this.click1.play();
        
         _this.time.events.add(300,function(){
                 target.frame = 2;
             if(_this.qn == 1) 
                 {    
                    _this.sphere.loadTexture('4_1_1sphere31',0);
                    _this.sphere.animations.add('4_1_1sphere31');
                    _this.sphere.animations.play('4_1_1sphere31',5,true);  
                    
                 }
             else if(_this.qn == 2)
                 {
                   _this.sphereanim=_this.sphere.animations.add('glow');
                    _this.sphereanim.play(true);
                 }
             else if(_this.qn == 3)
                 {
                     //_this.sphere.frame = 1;
                     /*var sphere_tween = _this.add.tween(_this.sphere);
                      sphere_tween.to({ y: 200 }, 200,'Linear', true);
                        sphere_tween.onComplete.add(function(){
                            sphere_tween.to({ y: 250 }, 200,'Linear', true);
                        },this);*/
                   // }
                      _this.sphere.destroy();
                     _this.sphere1.visible=true;
                     _this.sphere1.animations.add('4_1_1sphere11',0); //[0,1,2,3,4,5,0]);
                     _this.sphere1.animations.play('4_1_1sphere11',6,false);
                    
                 }
             else if(_this.qn == 4)
                 {
                     /* _this.sphere.frame = 1;
                     var sphere_tween = _this.add.tween(_this.sphere);
                      sphere_tween.to({ y: 200 }, 400,'Linear', true);
                        sphere_tween.onComplete.add(function(){
                            sphere_tween.to({ y: 245 }, 400,'Linear', true);
                        },this);*/
                     _this.sphere.destroy();
                     _this.sphere1.visible=true;
                     _this.sphere1.animations.add('4_1_1sphere21',0);
                     _this.sphere1.animations.play('4_1_1sphere21',9,false);
                 }
            else if(_this.qn == 5)
                 {
                    _this.coneanim=_this.cone.animations.add('glow');
                    _this.coneanim.play(true);
                 }
            else if(_this.qn == 6)
                 {
                   _this.cubeanim=_this.cube.animations.add('glow');
                    _this.cubeanim.play(true);
                 }
            else if(_this.qn == 7)
                 {
                    _this.cuboidanim=_this.cuboid.animations.add('glow');
                    _this.cuboidanim.play(true);
                 }
              else if(_this.qn == 8)
                 {
                   _this.cylinderanim=_this.cylinder.animations.add('glow');
                    _this.cylinderanim.play(true);
                 }
              else if(_this.qn == 9)
                 {
                     _this.cylinder.loadTexture('4_1_1cylinder41');
                     _this.cylinder.animations.add('4_1_1cylinder41',0);
                     _this.cylinder.animations.play('4_1_1cylinder41',15,true);
                     
                 }
             else if(_this.qn == 10)
                 {
                     _this.cylinder.loadTexture('4_1_1cylinder72');
                     _this.cylinder.animations.add('4_1_1cylinder72',[0,1,2,3,4,5,6,6,7,7,7,7]);
                     _this.cylinder.animations.play('4_1_1cylinder72',3.7,true);
                 }
             else if(_this.qn == 11)
                 {
                     _this.sphere.destroy();
                     _this.sphere1.visible=true;
                     _this.sphere1.animations.add('4_1_1sphere41',0);
                     _this.sphere1.animations.play('4_1_1sphere41',5,false);
                     /*_this.sphere.loadTexture('4_1_1sphere41');
                     _this.sphere.animations.add('4_1_1sphere41',0);
                     _this.sphere.animations.play('4_1_1sphere41',10,true);*/
                 }
               else if(_this.qn == 12)
                 {
                     _this.cube.loadTexture('4_1_1cube31');
                     _this.cube.animations.add('4_1_1cube31',0);
                     _this.cube.animations.play('4_1_1cube31',2.45,true);
                 }
              else if(_this.qn == 13)
                 {
                     _this.cylinder.loadTexture('4_1_1cylinder21');
                     _this.cylinder.animations.add('4_1_1cylinder21',[0,1,2,3,4,5,6,7,8,9,9,9,9]);
                     _this.cylinder.animations.play('4_1_1cylinder21',4.2,true);
                 }
             else if(_this.qn == 14)
                 {
                    /* _this.sphere.frame = 1;
                     var sphere_tween = _this.add.tween(_this.sphere);
                      sphere_tween.to({ y: 200 }, 200,'Linear', true);
                        sphere_tween.onComplete.add(function(){
                            sphere_tween.to({ y: 275 }, 200,'Linear', true);
                        },this);*/
                    
                      _this.sphere.destroy();
                     _this.sphere1.visible=true;
                     _this.sphere1.animations.add('4_1_1sphere51',0); //[0,1,2,3,4,5,0]);
                     _this.sphere1.animations.play('4_1_1sphere51',6,false);
                    
                 
                    
                 }
              else if(_this.qn == 15) 
                 {
                     _this.sphere.destroy();
                     _this.sphere1.visible=true;     
                     _this.sphere1.animations.add('4_1_1sphere61');
                     _this.sphere1.animations.play('4_1_1sphere61',5,true);  
                    
                 }
             else if(_this.qn == 16)
                 {
                      _this.cone.destroy();
                      _this.cone1.visible=true; 
                      _this.cone1.animations.add('4_1_1cone22',[0,1,2,2,3,3,3,3,3,3]);
                      _this.cone1.animations.play('4_1_1cone22',3.2,true);
                 }
             else if(_this.qn == 17)
                 {
                      _this.cuboid.destroy();
                      _this.cuboid1.visible=true; 
                      _this.cuboid1.animations.add('4_1_1cuboid41',[0,1,2,3,4,5,6,7,7,7,7,7]);
                      _this.cuboid1.animations.play('4_1_1cuboid41',3.5,true);
                 }
             else if(_this.qn == 18)
                 {
                      _this.cylinder.destroy();
                      _this.cylinder1.visible=true; 
                      _this.cylinder1.animations.add('4_1_1cylinder91',0);
                      _this.cylinder1.animations.play('4_1_1cylinder91',7,true);
                 }
             
         
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
             
        _this.opt1.inputEnabled = false;
        _this.opt2.inputEnabled = false;  
        _this.opt3.inputEnabled = false;
        _this.opt4.inputEnabled = false;
        _this.opt5.inputEnabled = false;
                
         },this);
        
        _this.time.events.add(3000, _this.removeEverthing, _this);
        

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
    
	},

    wrongAns:function(target)
	{
        console.log("wrong function");
        _this.wrong = false;
      
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level4.1_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
          /*if(_this.opt1.name == '4_1_1cuboid')
            {
                 _this.opt1.frame=0;
                _this.shake.shake(10, _this.opt1);
            }
          else if(_this.opt2.name == '4_1_1cylinder')
            {
                _this.shake.shake(10, _this.opt2);
                _this.opt2.frame=0;
            }
        else if(_this.opt3.name == '4_1_1cube')
            {
                _this.shake.shake(10, _this.opt3);
                _this.opt3.frame=0;
            }
        else if(_this.opt4.name == '4_1_1cone')
            {
                _this.shake.shake(10, _this.opt4);
                _this.opt4.frame=0;
            }
        else if(_this.opt5.name == '4_1_1sphere')
            {
                _this.shake.shake(10, _this.opt5);
                _this.opt5.frame=0;
            }*/
             target.frame=1;
        
            _this.click2 = _this.add.audio('ClickSound');
            _this.click2.play();
        
           _this.time.events.add(300,function(){
               target.frame=0;
             _this.shake.shake(10, target);
            
              _this.wmusic = _this.add.audio('waudio');
		      _this.wmusic.play(); 
               
            },_this);
        
        
		  //_this.timer1.stop();
        
        
	},
    
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        console.log("Question Number :"+_this.no11);
        _this.no11++;
        _this.count1++;
        _this.wrong = true;
      
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.count =0;
                _this.optionGrp.destroy();
                _this.getQuestion();
            },_this);  
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('sg4_1_1Score');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        console.log("fffffff"+_this.qArrays[_this.no11]);
        
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
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/English/4.1.1E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Hindi/4.1.1H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Kannada/4.1.1K.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Gujarati/4.1.1G.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Marathi/sg4.1.1.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Telugu/sg4.1.1.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Tamil/sg4.1.1.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Urdu/sg4.1.1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.1.1/Odiya/sg4.1.1.mp3");
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
	

};