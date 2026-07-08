Game.grade2_1Blevel1=function(){};


Game.grade2_1Blevel1.prototype={
	
	init:function(game)
	{
		_this = this;
		
		/*_this.gameid = "2.1B";
		
		_this.currentTime = window.timeSaveFunc();
		_this.saveGameplay = 
		{ 
			id_game:_this.gameid, 
			access_token:window.acctkn, 
			start_time:_this.currentTime
		} 
		_this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/
        telInitializer.gameIdInit("length2_1B",gradeSelected);
			
		
	},

    preload:function(game){
        if(!window.grade1ML2){

            window.grade1ML2 = true;

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

        _this.load.image('Level21B_bg1',window.baseUrl+'assets/gradeAssets/2.1B/bg1.png');
      //  _this.load.image('Level21B_bg2',window.baseUrl+'assets/gradeAssets/2.1B/bg2.png');
        _this.load.image('Level21B_bg3',window.baseUrl+'assets/gradeAssets/2.1B/bg3.png');                          
        _this.load.image('Level21B_sh',window.baseUrl+'assets/gradeAssets/2.1B/sh.png');
         _this.load.image('Level21B_sh1',window.baseUrl+'assets/gradeAssets/2.1B/level2/sh1.png');
        _this.load.image('Level21B_cloud21',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud21.png');
        _this.load.image('Level21B_cloud22',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud22.png');
        _this.load.image('Level21B_cloud23',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud23.png');
        _this.load.image('Level21B_cloud24',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud24.png');
        _this.load.image('Level21B_cloud25',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud25.png');
        _this.load.image('Level21B_cloud26',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud26.png');
         _this.load.image('Level21B_cloud27',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud27.png');
         _this.load.image('Level21B_cloud28',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud28.png');
         _this.load.image('Level21B_cloud29',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud29.png');
       // _this.load.image('Level21B_tittleBaar',window.baseUrl+'assets/gradeAssets/2.1B/tittleBaar.png');
       // _this.load.atlas('Level21B_replay',window.baseUrl+'assets/gradeAssets/2.1B/reply.png' ,window.baseUrl+'json/gradeJson/2.1B/reply.json');
        
        //_this.load.atlas('Level21B_backbtn',window.baseUrl+'assets/gradeAssets/2.1B/backbtn.png' ,window.baseUrl+'json/gradeJson/2.1B/backbtn.json');
       // _this.load.atlas('Level21B_speaker',window.baseUrl+'assets/gradeAssets/2.1B/speaker.png' ,window.baseUrl+'json/gradeJson/2.1B/speaker.json');
       // _this.load.atlas('Level21B_starAnim',window.baseUrl+'assets/gradeAssets/2.1B/starAnim.png',window.baseUrl+'json/gradeJson/2.1B/starAnim.json');
        //_this.load.image('Level21B_cloud',window.baseUrl+'assets/gradeAssets/2.1B/cloud.png');
         _this.load.image('Level21B_cloud2',window.baseUrl+'assets/gradeAssets/2.1B/c2.png');
        // _this.load.image('Level21B_cloud3',window.baseUrl+'assets/gradeAssets/2.1B/cloud3.png');
         //_this.load.image('Level21B_cloud4',window.baseUrl+'assets/gradeAssets/2.1B/cloud4.png');
         //    _this.load.image('Level21B_cloud5',window.baseUrl+'assets/gradeAssets/2.1B/cloud5.png');
        
       
       // _this.load.image('Level21B_cloud7',window.baseUrl+'assets/gradeAssets/2.1B/cloud7.png');
        //_this.load.image('Level21B_cloud8',window.baseUrl+'assets/gradeAssets/2.1B/cloud8.png');
        
        
        //level2 assets/gradeAssets/2.1B
        _this.load.atlas('Level21B_building1',window.baseUrl+'assets/gradeAssets/2.1B/level2/building1.png',window.baseUrl+'json/gradeJson/2.1B/building1.json');
        _this.load.atlas('Level21B_building2',window.baseUrl+'assets/gradeAssets/2.1B/level2/building2.png',window.baseUrl+'json/gradeJson/2.1B/building2.json');
        
        _this.load.atlas('Level21B_ladder1',window.baseUrl+'assets/gradeAssets/2.1B/level2/ladder1.png',window.baseUrl+'json/gradeJson/2.1B/ladder1.json');
        _this.load.atlas('Level21B_ladder2',window.baseUrl+'assets/gradeAssets/2.1B/level2/ladder2.png',window.baseUrl+'json/gradeJson/2.1B/ladder2.json');
        
        _this.load.atlas('Level21B_giraffe21',window.baseUrl+'assets/gradeAssets/2.1B/level2/giraffe21.png',window.baseUrl+'json/gradeJson/2.1B/giraffe21.json');
        _this.load.atlas('Level21B_cat21',window.baseUrl+'assets/gradeAssets/2.1B/level2/cat21.png',window.baseUrl+'json/gradeJson/2.1B/cat21.json');
        
        _this.load.atlas('Level21B_bottle21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bottle21.png',window.baseUrl+'json/gradeJson/2.1B/bottle21.json');
        _this.load.atlas('Level21B_bottle22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bottle22.png',window.baseUrl+'json/gradeJson/2.1B/bottle22.json');
        
        _this.load.atlas('Level21B_gate21',window.baseUrl+'assets/gradeAssets/2.1B/level2/gate21.png',window.baseUrl+'json/gradeJson/2.1B/gate21.json');
        _this.load.atlas('Level21B_gate22',window.baseUrl+'assets/gradeAssets/2.1B/level2/gate22.png',window.baseUrl+'json/gradeJson/2.1B/gate22.json');
        
        _this.load.atlas('Level21B_road1',window.baseUrl+'assets/gradeAssets/2.1B/level2/road1.png',window.baseUrl+'json/gradeJson/2.1B/road1.json');
        _this.load.atlas('Level21B_road2',window.baseUrl+'assets/gradeAssets/2.1B/level2/road2.png',window.baseUrl+'json/gradeJson/2.1B/road2.json');
        _this.load.image('Level21B_tree21',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree21.png');
        
        _this.load.atlas('Level21B_chair21',window.baseUrl+'assets/gradeAssets/2.1B/level2/chair21.png',window.baseUrl+'json/gradeJson/2.1B/chair21.json');
        _this.load.atlas('Level21B_chair22',window.baseUrl+'assets/gradeAssets/2.1B/level2/chair22.png',window.baseUrl+'json/gradeJson/2.1B/chair22.json');
        
        _this.load.atlas('Level21B_river21',window.baseUrl+'assets/gradeAssets/2.1B/level2/river21.png',window.baseUrl+'json/gradeJson/2.1B/river21.json');
        _this.load.atlas('Level21B_river22',window.baseUrl+'assets/gradeAssets/2.1B/level2/river22.png',window.baseUrl+'json/gradeJson/2.1B/river22.json');
        _this.load.image('Level21B_tree22',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree22.png');
        
        _this.load.atlas('Level21B_dog21',window.baseUrl+'assets/gradeAssets/2.1B/level2/dog21.png',window.baseUrl+'json/gradeJson/2.1B/dog21.json');
        _this.load.atlas('Level21B_cat22',window.baseUrl+'assets/gradeAssets/2.1B/level2/cat22.png',window.baseUrl+'json/gradeJson/2.1B/cat22.json');
        
        _this.load.atlas('Level21B_shirt21',window.baseUrl+'assets/gradeAssets/2.1B/level2/shirt21.png',window.baseUrl+'json/gradeJson/2.1B/shirt21.json');
        _this.load.atlas('Level21B_shirt22',window.baseUrl+'assets/gradeAssets/2.1B/level2/shirt22.png',window.baseUrl+'json/gradeJson/2.1B/shirt22.json');
        
        _this.load.atlas('Level21B_snake21',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake21.png',window.baseUrl+'json/gradeJson/2.1B/snake21.json');
        _this.load.atlas('Level21B_snake22',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake22.png',window.baseUrl+'json/gradeJson/2.1B/snake22.json');
        
        _this.load.atlas('Level21B_bird21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bird21.png',window.baseUrl+'json/gradeJson/2.1B/bird21.json');
        _this.load.atlas('Level21B_bird22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bird22.png',window.baseUrl+'json/gradeJson/2.1B/bird22.json');
        
        _this.load.atlas('Level21B_fish21',window.baseUrl+'assets/gradeAssets/2.1B/level2/fish21.png',window.baseUrl+'json/gradeJson/2.1B/fish21.json');
        _this.load.atlas('Level21B_fish22',window.baseUrl+'assets/gradeAssets/2.1B/level2/fish22.png',window.baseUrl+'json/gradeJson/2.1B/fish22.json');
        
        _this.load.atlas('Level21B_snake23',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake23.png',window.baseUrl+'json/gradeJson/2.1B/snake23.json');
        _this.load.atlas('Level21B_snake24',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake24.png',window.baseUrl+'json/gradeJson/2.1B/snake24.json');
        
        _this.load.atlas('Level21B_book21',window.baseUrl+'assets/gradeAssets/2.1B/level2/book21.png',window.baseUrl+'json/gradeJson/2.1B/book21.json');
        _this.load.atlas('Level21B_book22',window.baseUrl+'assets/gradeAssets/2.1B/level2/book22.png',window.baseUrl+'json/gradeJson/2.1B/book22.json');
        
        _this.load.atlas('Level21B_tyre21',window.baseUrl+'assets/gradeAssets/2.1B/level2/tyre21.png',window.baseUrl+'json/gradeJson/2.1B/tyre21.json');
        _this.load.atlas('Level21B_tyre22',window.baseUrl+'assets/gradeAssets/2.1B/level2/tyre22.png',window.baseUrl+'json/gradeJson/2.1B/tyre22.json');
        _this.load.image('Level21B_scooter21',window.baseUrl+'assets/gradeAssets/2.1B/level2/scooter21.png');
        
        _this.load.atlas('Level21B_bread21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bread21.png',window.baseUrl+'json/gradeJson/2.1B/bread21.json');
        _this.load.atlas('Level21B_bread22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bread22.png',window.baseUrl+'json/gradeJson/2.1B/bread22.json');
        
        _this.load.atlas('Level21B_rope21',window.baseUrl+'assets/gradeAssets/2.1B/level2/rope21.png',window.baseUrl+'json/gradeJson/2.1B/rope21.json');
        _this.load.atlas('Level21B_rope22',window.baseUrl+'assets/gradeAssets/2.1B/level2/rope22.png',window.baseUrl+'json/gradeJson/2.1B/rope22.json');
        
        _this.load.atlas('Level21B_tree23',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree23.png',window.baseUrl+'json/gradeJson/2.1B/tree23.json');
        _this.load.atlas('Level21B_tree24',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree24.png',window.baseUrl+'json/gradeJson/2.1B/tree24.json');
        
        //_this.load.atlas('Level21B_btn',window.baseUrl+'assets/gradeAssets/2.1B/btn.png',window.baseUrl+'json/gradeJson/2.1B/btn.json');
       

    }

    },
	
	
	create:function(game){

        _this.amplify = null;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
		
		_this.questionid = null;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.firstTime = true;
		_this.sceneCount = 0;
		
        _this.no11=0;
        _this.no2=0;
        _this.count11=0;
        _this.count00=0;
         
        _this.qArray = new Array();
       // _this.qArray = [1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];
       /*if(window.languageSelected == "Gujarati")
        {
            _this.qArray = [3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
        }else{*/
            _this.qArray = [3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];       
       // }// _this.qArray = [1,2,3,4,5,6,9,10,11,12];
		_this.qArray = _this.shuffle(_this.qArray);
		

		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
          

        _this.background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level21B_bg1');
       
	   
		_this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(600,6,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,6,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


           /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
            _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Fractions');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            */
        
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

          _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
      _this.timer1.start();

           _this.speakerbtn.inputEnabled=true;   

    switch(_this.qArray[_this.no11])
    //   switch(_this.no11)
    	{
    		case 1: 
                    _this.questionid = 1;
                    _this.gotoFirstQuestion();
    				break;
    		case 2: 
                    _this.questionid = 2;
                    _this.gotoSecondQuestion();
    				break;
    		case 3: 
                    _this.questionid = 3;
                    _this.gotoThirdQuestion();
    				break;
    		case 4: 
                    _this.questionid = 5;
                    _this.gotoFourthQuestion();
    				break;
    		case 5: 
                    _this.questionid = 2;
                    _this.gotoFifthQuestion();
    				break;
    		case 6: 
                    _this.questionid = 6;
                    _this.gotoSixthQuestion();
    				break;
    		case 7: 
                    _this.questionid = 3;
                    _this.gotoSeventhQuestion();
    				break;
            case 8: 
                    _this.questionid = 4;
                    _this.gotoEighthQuestion();
    				break;
            case 9: 
                    _this.questionid = 8;
                    _this.gotoNinethQuestion();
    				break;
            case 10:
                    _this.questionid = 7;
                    _this.gotoTenthQuestion();
    				break;
            case 11: 
                    _this.questionid = 9;
                    _this.gotoEleventhQuestion();
    				break;
            case 12: 
                    _this.questionid = 10;
                    _this.gotoTwevelvethQuestion();
    				break;
            case 13: 
                    _this.questionid = 11;
                    _this.gotoThirteenthQuestion();
    				break;
            case 14: 
                    _this.questionid = 12;
                    _this.gotoFourteenthQuestion();
    				break;            
            case 15: 
                    _this.questionid = 14;
                    _this.gotoFifteenthQuestion();
    				break;
            case 16: 
                    _this.questionid = 13;
                    _this.gotoSixteenthQuestion();
    				break;
            case 17: 
                    _this.questionid = 15;
                    _this.gotoSeventeenthQuestion();
    				break;
            case 18: 
                    _this.questionid = 16;
                    _this.gotoEighteenthQuestion();
    				break;
            case 19: 
                    _this.questionid = 18;
                    _this.gotoNineteenthQuestion();
    				break;
            case 20: 
                    _this.questionid = 17;
                    _this.gotoTwentythQuestion();
    				break;
            case 21: 
                    _this.questionid = 20;
                    _this.gotoTwentyonethQuestion();
    				break;
            case 22: 
                    _this.questionid = 19;
                    _this.gotoTwentytwothQuestion();
    				break;
            case 23: 
                    _this.questionid = 22;
                    _this.gotoTwentythreethQuestion();
    				break;
            case 24: 
                    _this.questionid = 21;
                    _this.gotoTwentyfourthQuestion();
    				break;
            case 25: 
                    _this.questionid = 24;
                    _this.gotoTwentyfifthQuestion();
    				break;
            case 26: 
                    _this.questionid = 23;
                    _this.gotoTwentysixthQuestion();
    				break;
            case 27: 
                    _this.questionid = 25;
                    _this.gotoTwentyseventhQuestion();
    				break;
            case 28:
                    _this.questionid = 26;
                    _this.gotoTwentyeighthQuestion();
    				break;
            case 29: 
                    _this.questionid = 28;
                    _this.gotoTwentyninethQuestion();
    				break;
            case 30: 
                    _this.questionid = 27;
                    _this.gotoThirtythQuestion();
    				break;
            case 31: 
                    _this.questionid = 29;
                    _this.gotoThirtyonethQuestion();
    				break;
            case 32: 
                    _this.questionid = 30;
                    _this.gotoThirtytwothQuestion();
    				break;
            case 33: 
                    _this.questionid = 32;
                    _this.gotoThirtythreethQuestion();
    				break;
            case 34: 
                    _this.questionid = 31;
                    _this.gotoThirtyfourthQuestion();
    				break;
            case 35: 
                    _this.questionid = 33;
                    _this.gotoThirtyfifthQuestion();
    				break;
            case 36: 
                    _this.questionid = 34;
                    _this.gotoThirtysixthQuestion();
    				break;
            case 37: 
                    _this.questionid = 35;
                    _this.gotoThirtyseventhQuestion();
    				break;
            case 38: 
                    _this.questionid = 36;
                    _this.gotoThirtyeighthQuestion();
    				break;

                
        }
    },
	
	
     addQuestion:function(no2)
    {

           //console.log("here");
           _this.time.events.add(2000, function(){
  
                _this.tween = _this.add.tween(_this.flagGroup1);
           _this.tween.to({ x: -1000 }, 0,'Linear', true, 0);
           _this.tween.onComplete.add(_this.changeQuestion1, _this);


            }, _this);
            


    },
    
        
     gotoFirstQuestion:function(){
       _this.getVoice();
         
        _this.cloud21 = _this.add.sprite(390,100,'Level21B_cloud21');
        _this.cloud21.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(330,287,'Level21B_building1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largebuilding';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(680,370,'Level21B_building2');
        _this.opt1.name = "Level21B_smallbuilding";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);


    	_this.flagGroup1 = _this.add.group();
         _this.flagGroup1.add(_this.cloud21);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
            
     gotoSecondQuestion:function(){
		     
		_this.getVoice();
         
         _this.cloud21 = _this.add.sprite(390,100,'Level21B_cloud21');
        _this.cloud21.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(330,287,'Level21B_building1');
        _this.mainFlag.name = "Level21B_largebuilding";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(680,370,'Level21B_building2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_smallbuilding';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);


    	_this.flagGroup1 = _this.add.group();
 _this.flagGroup1.add(_this.cloud21);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
         gotoThirdQuestion:function(){
        
		_this.getVoice();
             
        _this.cloud22 = _this.add.sprite(170,90,'Level21B_cloud22');
        _this.cloud22.scale.setTo(1,1); 
             
        _this.opt2= _this.add.sprite(340,486,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.2,1.5);
             
    	_this.mainFlag = _this.add.sprite(350,320,'Level21B_ladder1');
    	_this.mainFlag.anchor.setTo(0.5);
             _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_bigladder';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

                _this.opt3= _this.add.sprite(690,486,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.5);
       
    	_this.opt1 = _this.add.sprite(700,400,'Level21B_ladder2');
        _this.opt1.name = "Level21B_smallladder";
    	_this.opt1.anchor.setTo(0.5);
              _this.opt1.scale.setTo(1,1.3);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud22);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
             _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoFourthQuestion:function(){
        
		_this.getVoice();
         
        _this.cloud22 = _this.add.sprite(170,90,'Level21B_cloud22');
        _this.cloud22.scale.setTo(1,1); 
             
        _this.opt2= _this.add.sprite(340,486,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.2,1.5);
             
    	_this.mainFlag = _this.add.sprite(350,320,'Level21B_ladder1');
        _this.mainFlag.name = "Level21B_bigladder";
    	_this.mainFlag.anchor.setTo(0.5);
             _this.mainFlag.scale.setTo(1,1.1);
    _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	  _this.opt3= _this.add.sprite(690,486,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.5);
       
    	_this.opt1 = _this.add.sprite(700,400,'Level21B_ladder2');
    	_this.opt1.anchor.setTo(0.5);
              _this.opt1.scale.setTo(1,1.3);
        _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_smallladder';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud22);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
             _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        },
    
       gotoFifthQuestion:function(){
        
		_this.getVoice();
         
        _this.cloud24 = _this.add.sprite(190,90,'Level21B_cloud24');
        _this.cloud24.scale.setTo(1,1); 
           
                _this.opt2= _this.add.sprite(340,484,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,1.5);
           
    	_this.mainFlag = _this.add.sprite(350,280,'Level21B_giraffe21');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_giraffe';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
                _this.opt3= _this.add.sprite(680,467,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.1,1.3);
       
    	_this.opt1 = _this.add.sprite(700,410,'Level21B_cat21');
        _this.opt1.name = "Level21B_cat";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud24);
           _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoSixthQuestion:function(){
        
		_this.getVoice();
         
        _this.cloud24 = _this.add.sprite(190,90,'Level21B_cloud24');
        _this.cloud24.scale.setTo(1,1); 
           
                _this.opt2= _this.add.sprite(340,484,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,1.5);
           
    	_this.mainFlag = _this.add.sprite(350,280,'Level21B_giraffe21');
        _this.mainFlag.name = "Level21B_giraffe";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        
     _this.opt3= _this.add.sprite(680,467,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.1,1.3);
       
    	_this.opt1 = _this.add.sprite(700,410,'Level21B_cat21');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.opt1.name = 'Level21B_cat';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);

_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud24);
           _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
      
	  gotoSeventhQuestion:function(){
        
		_this.getVoice();
          
                 _this.opt2= _this.add.sprite(347,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.6,1.2);
         
        
    	_this.mainFlag = _this.add.sprite(350,295,'Level21B_bottle21');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largebottle';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
         _this.opt3= _this.add.sprite(650,460,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.4,1);
       
    	_this.opt1 = _this.add.sprite(650,385,'Level21B_bottle22');
        _this.opt1.name = "Level21B_smallbottle";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoEighthQuestion:function(){
       
		_this.getVoice();
         
            _this.opt2= _this.add.sprite(347,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.6,1.2);
         
        
    	_this.mainFlag = _this.add.sprite(350,295,'Level21B_bottle21');
        _this.mainFlag.name = "Level21B_largebottle";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	 _this.opt3= _this.add.sprite(650,460,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.4,1);
       
    	_this.opt1 = _this.add.sprite(650,385,'Level21B_bottle22');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.name = 'Level21B_smallbottle';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);


    	
    	_this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    
       gotoNinethQuestion:function(){
         
		_this.getVoice();
         
        _this.cloud25 = _this.add.sprite(70,70,'Level21B_cloud25');
        _this.cloud25.scale.setTo(1,1); 
           
             	 _this.opt2= _this.add.sprite(310,480,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.6,1.3);
           
    	_this.mainFlag = _this.add.sprite(310,300,'Level21B_gate21');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.9,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largegate';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
         	 _this.opt3= _this.add.sprite(700,480,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.4,1.3);
           
       
    	_this.opt1 = _this.add.sprite(710,320,'Level21B_gate22');
        _this.opt1.name = "Level21B_smallgate";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud25);
           _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
       gotoTenthQuestion:function(){
        
		_this.getVoice();
         
         _this.cloud25 = _this.add.sprite(70,70,'Level21B_cloud25');
        _this.cloud25.scale.setTo(1,1); 
           
             	 _this.opt2= _this.add.sprite(310,480,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.6,1.3);
           
    	_this.mainFlag = _this.add.sprite(310,300,'Level21B_gate21');
        _this.mainFlag.name = "Level21B_largegate";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.9,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	 _this.opt3= _this.add.sprite(700,480,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.4,1.3);
           
       
    	_this.opt1 = _this.add.sprite(710,320,'Level21B_gate22');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
           _this.opt1.name = 'Level21B_smallgate';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud25);
           _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    
       gotoEleventhQuestion:function(){
        
		_this.getVoice();
         
        _this.cloud26 = _this.add.sprite(150,80,'Level21B_cloud26');
        _this.cloud26.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(250,465,'Level21B_road1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_broadroad';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(750,465,'Level21B_road2');
        _this.opt1.name = "Level21B_narrowroad";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           
               	 _this.opt3= _this.add.sprite(200,360,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.1,0.5);
           
                     	 _this.opt4= _this.add.sprite(140,369,'Level21B_sh1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.1,0.5);
           
        _this.opt5= _this.add.sprite(290,359,'Level21B_sh1');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.1,0.5);
           
           
        _this.opt6= _this.add.sprite(530,378,'Level21B_sh1');
    	_this.opt6.anchor.setTo(0.5);
        _this.opt6.scale.setTo(0.1,0.5);
           
            _this.opt7= _this.add.sprite(840,378,'Level21B_sh1');
    	_this.opt7.anchor.setTo(0.5);
        _this.opt7.scale.setTo(0.1,0.5);
           
                _this.opt8= _this.add.sprite(800,372,'Level21B_sh1');
    	_this.opt8.anchor.setTo(0.5);
        _this.opt8.scale.setTo(0.1,0.5);
           
               _this.opt9= _this.add.sprite(920,358,'Level21B_sh1');
    	_this.opt9.anchor.setTo(0.5);
        _this.opt9.scale.setTo(0.1,0.5);
           
        _this.opt2 = _this.add.sprite(530,350,'Level21B_tree21');
    	_this.opt2.anchor.setTo(0.5);


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud26);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
           _this.flagGroup1.add(_this.opt3);
              _this.flagGroup1.add(_this.opt4);
                _this.flagGroup1.add(_this.opt5);
           _this.flagGroup1.add(_this.opt6);
           _this.flagGroup1.add(_this.opt7);
           _this.flagGroup1.add(_this.opt8);
            _this.flagGroup1.add(_this.opt9);
    	_this.flagGroup1.add(_this.opt2);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoTwevelvethQuestion:function(){
       
		_this.getVoice();
         
      _this.cloud26 = _this.add.sprite(150,80,'Level21B_cloud26');
        _this.cloud26.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(250,465,'Level21B_road1');
        _this.mainFlag.name = "Level21B_broadroad";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       _this.opt1 = _this.add.sprite(750,465,'Level21B_road2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.opt1.name = 'Level21B_narrowroad';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           
        _this.opt3= _this.add.sprite(200,360,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.1,0.5);
           
                     	 _this.opt4= _this.add.sprite(140,369,'Level21B_sh1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.1,0.5);
           
        _this.opt5= _this.add.sprite(290,359,'Level21B_sh1');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.1,0.5);
           
           
        _this.opt6= _this.add.sprite(530,378,'Level21B_sh1');
    	_this.opt6.anchor.setTo(0.5);
        _this.opt6.scale.setTo(0.1,0.5);
           
            _this.opt7= _this.add.sprite(840,378,'Level21B_sh1');
    	_this.opt7.anchor.setTo(0.5);
        _this.opt7.scale.setTo(0.1,0.5);
           
                _this.opt8= _this.add.sprite(800,372,'Level21B_sh1');
    	_this.opt8.anchor.setTo(0.5);
        _this.opt8.scale.setTo(0.1,0.5);
           
               _this.opt9= _this.add.sprite(920,358,'Level21B_sh1');
    	_this.opt9.anchor.setTo(0.5);
        _this.opt9.scale.setTo(0.1,0.5);
           
        _this.opt2 = _this.add.sprite(530,350,'Level21B_tree21');
    	_this.opt2.anchor.setTo(0.5);


    	_this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.cloud26);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
           _this.flagGroup1.add(_this.opt3);
              _this.flagGroup1.add(_this.opt4);
                _this.flagGroup1.add(_this.opt5);
           _this.flagGroup1.add(_this.opt6);
           _this.flagGroup1.add(_this.opt7);
           _this.flagGroup1.add(_this.opt8);
            _this.flagGroup1.add(_this.opt9);
    	_this.flagGroup1.add(_this.opt2);
    	
    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoThirteenthQuestion:function(){
        _this.getVoice();
          
          
         
        _this.opt2= _this.add.sprite(310,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,4);

    	_this.mainFlag = _this.add.sprite(310,310,'Level21B_chair21');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_bigchair';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
        _this.opt3= _this.add.sprite(710,460,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,4);

       
    	_this.opt1 = _this.add.sprite(710,310,'Level21B_chair22');
        _this.opt1.name = "Level21B_smallchair";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoFourteenthQuestion:function(){
       _this.getVoice();
          
         
         _this.opt2= _this.add.sprite(310,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,4);

    	_this.mainFlag = _this.add.sprite(310,310,'Level21B_chair21');
        _this.mainFlag.name = "Level21B_bigchair";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       _this.opt3= _this.add.sprite(710,460,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,4);

       
    	_this.opt1 = _this.add.sprite(710,310,'Level21B_chair22');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.mainFlag.name = 'Level21B_smallchair';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
   
        
      gotoFifteenthQuestion:function(){
        _this.getVoice();
          
         
         
        _this.cloud = _this.add.sprite(80,70,'Level21B_cloud2');
        _this.cloud.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(230,465,'Level21B_river21');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_broadriver';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(710,465,'Level21B_river22');
        _this.opt1.name = "Level21B_narrowriver";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           

    	_this.opt2 = _this.add.sprite(500,345,'Level21B_tree22');
    	_this.opt2.anchor.setTo(0.5);

    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoSixteenthQuestion:function(){
  _this.getVoice();
          
          
         
        _this.cloud = _this.add.sprite(80,70,'Level21B_cloud2');
        _this.cloud.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(230,465,'Level21B_river21');
        _this.mainFlag.name = "Level21B_broadriver";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(710,465,'Level21B_river22');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_narrowriver';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           

    	_this.opt2 = _this.add.sprite(500,345,'Level21B_tree22');
    	_this.opt2.anchor.setTo(0.5);

    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoSeventeenthQuestion:function(){
  _this.getVoice();
         
             _this.opt2= _this.add.sprite(270,465,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.2,1.3);
          
    	_this.mainFlag = _this.add.sprite(260,340,'Level21B_dog21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_dog';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

          _this.opt3= _this.add.sprite(730,465,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.2,1.3);
          
    	_this.opt1 = _this.add.sprite(680,370,'Level21B_cat22');
        _this.opt1.name = "Level21B_cat";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoEighteenthQuestion:function(){
        _this.getVoice();
         
       
             _this.opt2= _this.add.sprite(270,465,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.2,1.3);
          
    	_this.mainFlag = _this.add.sprite(260,340,'Level21B_dog21');
        _this.mainFlag.name = "Level21B_dog";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	
          _this.opt3= _this.add.sprite(730,465,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.2,1.3);
          
    	_this.opt1 = _this.add.sprite(680,370,'Level21B_cat22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_cat';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           


_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoNineteenthQuestion:function(){
  _this.getVoice();
        
    	_this.mainFlag = _this.add.sprite(290,340,'Level21B_shirt21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_halfSleevShirt';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(690,340,'Level21B_shirt22');
        _this.opt1.name = "Level21B_fullSleevShirt";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    
     
        gotoTwentythQuestion:function(){
  _this.getVoice();
         
        _this.mainFlag = _this.add.sprite(290,340,'Level21B_shirt21');
        _this.mainFlag.name = "Level21B_halfSleevShirt";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(690,340,'Level21B_shirt22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_fullSleevShirt';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	
    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoTwentyonethQuestion:function(){
 _this.getVoice();
         
        _this.cloud27 = _this.add.sprite(160,80,'Level21B_cloud27');
        _this.cloud27.scale.setTo(1,1); 
            
                    _this.opt2= _this.add.sprite(240,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.1,1.3);
            
    	_this.mainFlag = _this.add.sprite(250,440,'Level21B_snake21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_longsnake';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
         _this.opt3= _this.add.sprite(630,470,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(2,1.3);
       
    	_this.opt1 = _this.add.sprite(650,420,'Level21B_snake22');
        _this.opt1.name = "Level21B_shortsnake";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud27);
            _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoTwentytwothQuestion:function(){
  _this.getVoice();
         
         
         _this.cloud27 = _this.add.sprite(160,80,'Level21B_cloud27');
        _this.cloud27.scale.setTo(1,1); 
            
                    _this.opt2= _this.add.sprite(240,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.1,1.3);
            
    	_this.mainFlag = _this.add.sprite(250,440,'Level21B_snake21');
        _this.mainFlag.name = "Level21B_longsnake";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        
_this.opt3= _this.add.sprite(630,470,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(2,1.3);
       
    	_this.opt1 = _this.add.sprite(650,420,'Level21B_snake22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_shortsnake';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           


_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud27);
            _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoTwentythreethQuestion:function(){
         _this.getVoice();
         
         
        _this.cloud24 = _this.add.sprite(100,90,'Level21B_cloud24');
        _this.cloud24.scale.setTo(1,1); 
            
                
_this.opt2= _this.add.sprite(310,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.4,1);
            
    	_this.mainFlag = _this.add.sprite(300,407,'Level21B_bird21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largebird';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
_this.opt3= _this.add.sprite(610,484,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.3);
       
            
    	_this.opt1 = _this.add.sprite(600,282,'Level21B_bird22');
        _this.opt1.name = "Level21B_smallbird";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud24);
            _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
            gotoTwentyfourthQuestion:function(){
  _this.getVoice();
              _this.cloud24 = _this.add.sprite(100,90,'Level21B_cloud24');
        _this.cloud24.scale.setTo(1,1); 
            
                
_this.opt2= _this.add.sprite(310,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.4,1);
            
    	_this.mainFlag = _this.add.sprite(300,407,'Level21B_bird21');
        _this.mainFlag.name = "Level21B_largebird";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt3= _this.add.sprite(610,484,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.3);
       
            
    	_this.opt1 = _this.add.sprite(600,282,'Level21B_bird22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_smallbird';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	
    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.cloud24);
            _this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     
        gotoTwentyfifthQuestion:function(){
  _this.getVoice();
         
         
              	_this.opt2= _this.add.sprite(290,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.9);
      
    	_this.mainFlag = _this.add.sprite(300,423,'Level21B_fish21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largefish';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
        	_this.opt3= _this.add.sprite(710,480,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.7,2.8);
       
    	_this.opt1 = _this.add.sprite(700,420,'Level21B_fish22');
        _this.opt1.name = "Level21B_smallfish";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoTwentysixthQuestion:function(){
  _this.getVoice();
         
         	_this.opt2= _this.add.sprite(290,460,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.9);
      
    	_this.mainFlag = _this.add.sprite(300,423,'Level21B_fish21');
        _this.mainFlag.name = "Level21B_largefish";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt3= _this.add.sprite(710,480,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.7,2.8);
       
    	_this.opt1 = _this.add.sprite(700,420,'Level21B_fish22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.opt1.name = 'Level21B_smallfish';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	
    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoTwentyseventhQuestion:function(){
  _this.getVoice();
         
        _this.opt2= _this.add.sprite(290,425,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.9);
      
     
    	_this.mainFlag = _this.add.sprite(300,383,'Level21B_snake23');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largesnake';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
        _this.opt3= _this.add.sprite(690,405,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.3,1.9);
       
    	_this.opt1 = _this.add.sprite(700,372,'Level21B_snake24');
        _this.opt1.name = "Level21B_smallsnake";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
       gotoTwentyeighthQuestion:function(){
        _this.getVoice();
         
       _this.opt2= _this.add.sprite(290,425,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.9);
      
     
    	_this.mainFlag = _this.add.sprite(300,383,'Level21B_snake23');
        _this.mainFlag.name = "Level21B_largesnake";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt3= _this.add.sprite(690,405,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.3,1.9);
       
    	_this.opt1 = _this.add.sprite(700,372,'Level21B_snake24');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
           _this.opt1.name = 'Level21B_smallsnake';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	
    	_this.flagGroup1 = _this.add.group();
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoTwentyninethQuestion:function(){
  _this.getVoice();
         
             _this.opt2= _this.add.sprite(290,405,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,3.5);
      
 
    	_this.mainFlag = _this.add.sprite(300,383,'Level21B_book21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_bigbook';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
       _this.opt3= _this.add.sprite(690,405,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.5,3.5);
       
    	_this.opt1 = _this.add.sprite(700,382,'Level21B_book22');
        _this.opt1.name = "Level21B_smallbook";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
       _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           



    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoThirtythQuestion:function(){
  _this.getVoice();
          
             _this.opt2= _this.add.sprite(290,405,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,3.5);
      
 
    	_this.mainFlag = _this.add.sprite(300,383,'Level21B_book21');
        _this.mainFlag.name = "Level21B_bigbook";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

          _this.opt3= _this.add.sprite(690,405,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.5,3.5);
       
    	_this.opt1 = _this.add.sprite(700,382,'Level21B_book22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.mainFlag.name = 'Level21B_smallbook';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           



    	
    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
            	_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
    
    
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoThirtyonethQuestion:function(){
 _this.getVoice();
         
             _this.opt3= _this.add.sprite(160,409,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,1.4);
       
        
    	_this.mainFlag = _this.add.sprite(160,330,'Level21B_tyre21');
        _this.mainFlag.name = "Level21B_broadtyre";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        
              _this.opt5= _this.add.sprite(810,450,'Level21B_sh1');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.8,2);
       
    	_this.opt1 = _this.add.sprite(830,382,'Level21B_tyre22');
        _this.opt1.name = "Level21B_narrowtyre";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           
               _this.opt4= _this.add.sprite(480,439,'Level21B_sh1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(2,3);
       

   	_this.opt2 = _this.add.sprite(490,340,'Level21B_scooter21');
    	_this.opt2.anchor.setTo(0.5);

    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt5);
    	_this.flagGroup1.add(_this.opt1);
            _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt2);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
        gotoThirtytwothQuestion:function(){
  _this.getVoice();
         
           _this.opt3= _this.add.sprite(160,409,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,1.4);
       
        
    	_this.mainFlag = _this.add.sprite(160,330,'Level21B_tyre21');
        _this.mainFlag.name = "Level21B_broadtyre";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
            _this.opt5= _this.add.sprite(810,450,'Level21B_sh1');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.8,2);
       
    	_this.opt1 = _this.add.sprite(830,382,'Level21B_tyre22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
            _this.opt1.name = 'Level21B_narrowtyre';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           
    _this.opt4= _this.add.sprite(480,439,'Level21B_sh1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(2,3);
       

   	_this.opt2 = _this.add.sprite(490,340,'Level21B_scooter21');
    	_this.opt2.anchor.setTo(0.5);

    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.mainFlag);
            _this.flagGroup1.add(_this.opt5);
    	_this.flagGroup1.add(_this.opt1);
            _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt2);

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoThirtythreethQuestion:function(){
         _this.getVoice();
          
            _this.opt2= _this.add.sprite(260,396,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.6,4);
       
    	_this.mainFlag = _this.add.sprite(270,373,'Level21B_bread21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_smallbread';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

      _this.opt3= _this.add.sprite(730,415,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.6,5.5);
       
       
    	_this.opt1 = _this.add.sprite(730,382,'Level21B_bread22');
        _this.opt1.name = "Level21B_bigbread";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           


    	_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
 
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
      gotoThirtyfourthQuestion:function(){
 _this.getVoice();

         _this.opt2= _this.add.sprite(260,396,'Level21B_sh1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.6,4);
       
    	_this.mainFlag = _this.add.sprite(270,373,'Level21B_bread21');
        _this.mainFlag.name = "Level21B_smallbread";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

      _this.opt3= _this.add.sprite(730,415,'Level21B_sh1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.6,5.5);
       
    	_this.opt1 = _this.add.sprite(730,382,'Level21B_bread22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
          _this.opt1.name = 'Level21B_bigbread';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           

_this.flagGroup1 = _this.add.group();
_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.mainFlag);
          _this.flagGroup1.add(_this.opt3);
    	_this.flagGroup1.add(_this.opt1);
 
    	
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoThirtyfifthQuestion:function(){
  _this.getVoice();
         
      
    	_this.mainFlag = _this.add.sprite(260,373,'Level21B_rope21');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largerope';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(710,382,'Level21B_rope22');
        _this.opt1.name = "Level21B_smallrope";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
 
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoThirtysixthQuestion:function(){
  _this.getVoice();
         
         
     
    	_this.mainFlag = _this.add.sprite(260,373,'Level21B_rope21');
        _this.mainFlag.name = "Level21B_largerope";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(710,382,'Level21B_rope22');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.name = 'Level21B_smallrope';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
 
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoThirtyseventhQuestion:function(){
  _this.getVoice();
         
         
        _this.cloud29 = _this.add.sprite(120,90,'Level21B_cloud29');
        _this.cloud29.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(270,280,'Level21B_tree23');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21B_largetree';
        _this.mainFlag.events.onInputDown.add(_this.correctAns1,_this);
        

       
    	_this.opt1 = _this.add.sprite(720,282,'Level21B_tree24');
        _this.opt1.name = "Level21B_smalltree";
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
           


    	_this.flagGroup1 = _this.add.group();
   	_this.flagGroup1.add(_this.cloud29);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
 
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoThirtyeighthQuestion:function(){
        _this.getVoice();
         
         
      _this.cloud29 = _this.add.sprite(120,90,'Level21B_cloud29');
        _this.cloud29.scale.setTo(1,1); 
    	_this.mainFlag = _this.add.sprite(270,280,'Level21B_tree23');
        _this.mainFlag.name = "Level21B_largetree";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns1,_this);
        

       
    	
    	_this.opt1 = _this.add.sprite(720,282,'Level21B_tree24');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21B_smalltree';
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
           

    _this.flagGroup1 = _this.add.group();
   	_this.flagGroup1.add(_this.cloud29);
    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	

    	_this.flagGroup1.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup1);
    	_this.tween.to({ x: 0 }, 0,'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this);    
        
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
    
    updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
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
 
    //timer.setText(minutes + ':'+ seconds );
    },
    
    correctAns1:function(target)
	{
		
         _this.noofAttempts++;
          
          _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);       
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
                    id_question: _this.questionid,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }
                    
            //   absdsjsapi.saveAssessment(_this.saveAsment);   

            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
		//console.log("correct");
        _this.speakerbtn.inputEnabled=false;
        
        _this.mainFlag.inputEnabled = false;
        _this.opt1.inputEnabled = false;
        	
        _this.animlev2 =target.animations.add('flag1');
        _this.animlev2.play(10,true);
         // target.frame=1;
		_this.celebration = true;
		
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();

        _this.time.events.add(500, _this.removeCelebration1, _this);


		//console.log(target);
        //target.tint = 0xA9A9A9;
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count11);
		//console.log(_this.starAnim);
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns1:function(target)
	{
		_this.noofAttempts++;
        //console.log("wrong");

       // _this.noofAttempts++;
       _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);



         /*  _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,  
                    pass: "no",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }
                    
               absdsjsapi.saveAssessment(_this.saveAsment); */
        	
			
        //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        //console.log(target);
        //target.tint = 0xA9A9A9;
        
		_this.shake.shake(10, target);
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
       // wmusic1 = _this.add.audio('OhSound');
		//wmusic1.play();
        	//_this.disableListeners();
        //target.events.onInputDown.removeAll();
	},
    
    removeCelebration1:function()
	{
		//console.log("removeCeleb");
		_this.celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		//console.log("no"+_this.no11);
		//_this.input.enabled = true;
			
		  _this.count11++;
		//if(rightCount<=0)
		//{		
            //console.log("vamitha");
            _this.no11++;
			if(_this.no11<6)
			{
                //console.log("addq");
                 _this.addQuestion(_this.count11);
			}
			else
			{
                _this.time.events.add(2000, function(){
				//console.log("gameEnd");
                     _this.stopVoice();
				_this.state.start('grade2_1BScore',true,false);
                },_this);
			}

	},
    
    
	changeQuestion1:function()
	{
		_this.flagGroup1.destroy();
         
		if(_this.no11<6)
		{
            _this.count00++;
			_this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//_this.input.enabled = false;
				// text = _this.add.text(_this.world.centerX, 450,'Level21B_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level21B_rgba(0, 0, 0, 0.5)', 0);
            

    
       
               _this.state.start('level2');
              //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},
    
  /*  speakeron:function(){
        //console.log("ssss=="+_this.qArray[_this.no11-1]);
    switch(_this.qArray[_this.no11-1])
    {
        case 1:if(window.languageSelected=="English") 
                E1aa.play();
                else if(window.languageSelected=="Hindi")
                H1aa.play();
                else
                K1aa.play();
		        break;
        case 2: if(window.languageSelected=="English") 
                E1bb.play();
                else if(window.languageSelected=="Hindi")
                H1bb.play();
                else
                K1bb.play();
                break;
        case 3:
        case 7:if(window.languageSelected=="English") 
                E2aa.play();
                else if(window.languageSelected=="Hindi")
                H2aa.play();
                else
                K2aa.play();
                break;
        case 4:
        case 8:if(window.languageSelected=="English") 
                E2bb.play();
                else if(window.languageSelected=="Hindi")
                H2bb.play();
                else
                K2bb.play();
                break;
        case 5:if(window.languageSelected=="English") 
                E3aa.play();
                else if(window.languageSelected=="Hindi")
                H3aa.play();
                else
                K3aa.play();
                break;
        case 6:if(window.languageSelected=="English") 
                E3bb.play();
                else if(window.languageSelected=="Hindi")
                H3bb.play();
                else
                K3bb.play();
                break;
        case 9:if(window.languageSelected=="English") 
                E5bb.play();
                else if(window.languageSelected=="Hindi")
                H5bb.play();
                else
                K5bb.play();
                break;
        case 10:if(window.languageSelected=="English") 
                E5aa.play();
                else if(window.languageSelected=="Hindi")
                H5aa.play();
                else
                K5aa.play();
                break;
        case 11:if(window.languageSelected=="English") 
                E6aa.play();
                else if(window.languageSelected=="Hindi")
                H6aa.play();
                else
                K6aa.play();
                break;
        case 12:if(window.languageSelected=="English") 
                E6bb.play();
                else if(window.languageSelected=="Hindi")
                H6bb.play();
                else
                K6bb.play();
                break;
        case 13:if(window.languageSelected=="English") 
                E7aa.play();
                else if(window.languageSelected=="Hindi")
                H7aa.play();
                else
                K7aa.play();
                break;
        case 14:if(window.languageSelected=="English") 
                E7bb.play();
                else if(window.languageSelected=="Hindi")
                H7bb.play();
                else
                K7bb.play();
                break;
        case 15:if(window.languageSelected=="English") 
                E8bb.play();
                else if(window.languageSelected=="Hindi")
                H8bb.play();
                else
                K8bb.play();
                break;
        case 16:if(window.languageSelected=="English") 
                E8aa.play();
                else if(window.languageSelected=="Hindi")
                H8aa.play();
                else
                K8aa.play();
                break;
        case 17:if(window.languageSelected=="English") 
                E9aa.play();
                else if(window.languageSelected=="Hindi")
                H9aa.play();
                else
                K9aa.play();
                break;
        case 18:if(window.languageSelected=="English") 
                E9bb.play();
                else if(window.languageSelected=="Hindi")
                H9bb.play();
                else
                K9bb.play();
                break;
        case 19:if(window.languageSelected=="English") 
                E10bb.play();
                else if(window.languageSelected=="Hindi")
                H10bb.play();
                else
                K10bb.play();
                break;
        case 20:if(window.languageSelected=="English") 
                E10aa.play();
                else if(window.languageSelected=="Hindi")
                H10aa.play();
                else
                K10aa.play();
                break;
        case 21:if(window.languageSelected=="English") 
                E11bb.play();
                else if(window.languageSelected=="Hindi")
                H11bb.play();
                else
                K11bb.play();
                break;
        case 22:if(window.languageSelected=="English") 
                E11aa.play();
                else if(window.languageSelected=="Hindi")
                H11aa.play();
                else
                K11aa.play();
                break;
        case 23:if(window.languageSelected=="English") 
                E12bb.play();
                else if(window.languageSelected=="Hindi")
                H12bb.play();
                else
                K12bb.play();
                break;
        case 24:if(window.languageSelected=="English") 
                E12aa.play();
                else if(window.languageSelected=="Hindi")
                H12aa.play();
                else
                K12aa.play();
                break;
        case 25:if(window.languageSelected=="English") 
                E13bb.play();
                else if(window.languageSelected=="Hindi")
                H13bb.play();
                else
                K13bb.play();
                break;
        case 26:if(window.languageSelected=="English") 
                E13aa.play();
                else if(window.languageSelected=="Hindi")
                H13aa.play();
                else
                K13aa.play();
                break;
        case 27:if(window.languageSelected=="English") 
                E14aa.play();
                else if(window.languageSelected=="Hindi")
                H14aa.play();
                else
                K14aa.play();
                break;
        case 28:if(window.languageSelected=="English") 
                E14bb.play();
                else if(window.languageSelected=="Hindi")
                H14bb.play();
                else
                K14bb.play();
                break;
        case 29:if(window.languageSelected=="English") 
                E15bb.play();
                else if(window.languageSelected=="Hindi")
                H15bb.play();
                else
                K15bb.play();
                break;
        case 30:if(window.languageSelected=="English") 
                E15aa.play();
                else if(window.languageSelected=="Hindi")
                H15aa.play();
                else
                K15aa.play();
                break;
        case 31:if(window.languageSelected=="English") 
                E16aa.play();
                else if(window.languageSelected=="Hindi")
                H16aa.play();
                else
                K16aa.play();
                break;
        case 32:if(window.languageSelected=="English") 
                E16bb.play();
                else if(window.languageSelected=="Hindi")
                H16bb.play();
                else
                K16bb.play();
                break;
        case 33:if(window.languageSelected=="English") 
                E17bb.play();
                else if(window.languageSelected=="Hindi")
                H17bb.play();
                else
                K17bb.play();
                break;
        case 34:if(window.languageSelected=="English") 
                E17aa.play();
                else if(window.languageSelected=="Hindi")
                H17aa.play();
                else
                K17aa.play();
                break;
        case 35:if(window.languageSelected=="English") 
                E18aa.play();
                else if(window.languageSelected=="Hindi")
                H18aa.play();
                else
                K18aa.play();
                break;
        case 36:if(window.languageSelected=="English") 
                E18bb.play();
                else if(window.languageSelected=="Hindi")
                H18bb.play();
                else
                K18bb.play();
                break;
        case 37:if(window.languageSelected=="English") 
                E19aa.play();
                else if(window.languageSelected=="Hindi")
                H19aa.play();
                else
                K19aa.play();
                break;
        case 38:if(window.languageSelected=="English") 
                E19bb.play();
                else if(window.languageSelected=="Hindi")
                H19bb.play();
                else
                K19bb.play();
                break;
    }

},
  */  
    getVoice:function()
     {    
          _this.stopVoice();  
          
          _this.playQuestionSound = document.createElement('audio');
          _this.src = document.createElement('source');
                    
          switch(_this.qArray[_this.no11])
            {
                case 1 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E1aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H1aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada") 
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K1aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E1aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E1a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E1a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E1a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E1a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B1.mp3");
                              }
                              break;
                case 2:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E1bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H1bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K1bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E1bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E1bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E1bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E1bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E1bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B2.mp3");
                              }
                              break;
                case 3:
                case 7:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E2aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H2aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K2aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E2aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E2aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E2aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E2aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E2aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B3.mp3");
                              }
                              break;
                case 4 : 
                case 8 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E2bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H2bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K2bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E2bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E2bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E2bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E2bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E2bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B4.mp3");
                              }
                              break;
                case 5 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E3aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H3aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K3aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E3aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E3aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E3aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E3aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E3aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B5.mp3");
                              }
                              break;
                    
                case 6 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E3bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H3bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K3bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E3bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E3bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E3bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E3bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E3bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B6.mp3");
                              }
                              break;
                    
                case 9 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E5bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H5bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K5bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E5bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E5bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E5bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E5bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E5bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B8.mp3");
                              }
                              break;
                    
                case 10 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E5aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H5aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K5aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E5aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E5aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E5aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E5aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E5aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B7.mp3");
                              }
                              break;
                    
                case 11:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E6aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H6aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K6aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E6aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E6aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E6aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E6aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E6aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B9.mp3");
                              }
                              break;

                case 12:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E6bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H6bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K6bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E6bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E6bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E6bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E6bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E6bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B10.mp3");
                              }
                              break;
                    
                case 13:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E7aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H7aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K7aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E7aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E7aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E7aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E7aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E7aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B11.mp3");
                              }
                              break;
                    
                case 14:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E7bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H7bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K7bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E7bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E7bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E7bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E7bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E7bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B12.mp3");
                              }
                              break;
                    
                case 15:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E8bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H8bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K8bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E8bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E8bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E8bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E8bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E8bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B14.mp3");
                              }
                              break;
                    
                case 16:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E8aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H8aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K8aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E8aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E8aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E8aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E8aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E8aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B13.mp3");
                              }
                              break;
                    
                case 17:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E9aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H9aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K9aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E9aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E9aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E9aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E9aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E9aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B15.mp3");
                              }
                              break;
                    
                case 18:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E9bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H9bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K9bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E9bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E9bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E9bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E9bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E9bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B16.mp3");
                              }
                              break;
                    
                case 19:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E10bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H10bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K10bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E10bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E10bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E10bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E10bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E10bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B18.mp3");
                              }
                              break;
                    
                case 20:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E10aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H10aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K10aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E10aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E10aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E10aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E10aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E10aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B17.mp3");
                              }
                              break;
                    
                case 21:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E11bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H11bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K11bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E11bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E11bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E11bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E11bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E11bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B20.mp3");
                              }
                              break; 
                    
                case 22:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E11aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H11aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K11aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E11aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E11aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E11aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E11aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E11aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B19.mp3");
                              }
                              break; 
                    
                case 23:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E12bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H12bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K12bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E12bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E12bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E12bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E12bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E12bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B22.mp3");
                              }
                              break;
                    
                case 24:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E12aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H12aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K12aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E12aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E12aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E12aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E12aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E12aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B21.mp3");
                              }
                              break; 
                    
                case 25:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E13bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H13bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K13bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E13bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E13bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E13bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E13bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E13bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B24.mp3");
                              }
                              break;
                    
                case 26:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E13aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H13aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K13aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E13aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E13aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E13aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E13aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E13aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B23.mp3");
                              }
                              break; 
                    
                case 27:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E14aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H14aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K14aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E14aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E14aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E14aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E14aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E14aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B25.mp3");
                              }
                              break;
                    
                case 28:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E14bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H14bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K14bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E14bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E14bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E14bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E14bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E14bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B26.mp3");
                              }
                              break; 
                    
                case 29:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E15bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H15bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K15bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E15bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E15bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E15bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E15bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E15bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B28.mp3");
                              }
                              break; 
                    
                case 30:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E15aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H15aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K15aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E15aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E15aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E15aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E15aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E15aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B27.mp3");
                              }
                              break;
                    
                case 31:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E16aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H16aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K16aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E16aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E16aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E16aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E16aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E16aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B29.mp3");
                              }
                              break;
                    
                case 32:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E16bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H16bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K16bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E16bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E16bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E16bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E16bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E16bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B30.mp3");
                              }
                              break;
                    
                case 33:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E17bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H17bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K17bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E17bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E17bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E17bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E17bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E17bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B32.mp3");
                              }
                              break;
                    
                case 34:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E17aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H17aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K17aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E17aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E17aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E17aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E17aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E17aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B31.mp3");
                              }
                              break;
                    
                case 35:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E18aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H18aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K18aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E18aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E18aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E18aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E18aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E18aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B33.mp3");
                              }
                              break;
                    
                case 36:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E18bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H18bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K18bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E18bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E18bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E18bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E18bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E18bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B34.mp3");
                              }
                              break; 
                    
                case 37:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E19aa.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H19aa.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K19aa.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E19aa.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E19aa.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E19aa.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E19aa.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E19aa.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B35.mp3");
                              }
                              break;
                    
                case 38:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/E19bb.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/H19bb.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/K19bb.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1B/E19bb.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Marathi/2.1A_E19bb.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Telugu/2.1A_E19bb.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Tamil/2.1A_E19bb.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/Urdu/2.1A_E19bb.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1B/2.1B36.mp3");
                              }
                              break;
                    
            }
          
          
          //_this.playQuestionSound.play();
          //_this.playQuestionSound.onStop.add(function(){_this.playQuestionSound=null;},this);
          
          console.log(_this.playQuestionSound);
          
          _this.playQuestionSound.appendChild(_this.src);
          _this.playQuestionSound.play();
          
           if(window.languageSelected == "Odiya")
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
     
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
	
	shutdown:function()
	{
		/*_this.stopVoice();
		_this.background = null;
		_this.tween = null;
		_this.time.events.removeAll();
		_this.playQuestionSound = null;
		_this.celebrationSound = null;
		_this.clickSound = null;
				
		
		_this.noofAttempts = null;
		_this.AnsTimerCount = null;
		_this.firstTime = null;
		
		_this.shake = null;
		
		_this.objectGroup = null;
        _this.rightCount = null;
        _this.no11 = null;
        _this.rno11 = null;
        _this.vno11 = null;
        _this.no22 = null;
        _this.count=null;
        _this.count1=null;
        _this.celebration= null;
		
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArray = null;
        _this.qArrays1 = null;
        _this.qArrays2 = null;
        

      
         bg2=null;
         starsGroup1=null;
         _this.cloud=null;
         _this.no11=null;
         _this.mainFlag=null;
         _this.opt1=null;_this.opt2=null;_this.opt3=null;_this.opt4=null;_this.opt5=null;_this.opt6=null;_this.opt7=null;_this.opt8=null;_this.opt9=null;
         no22=null;
         _this.count11=null;
         count00=null;
         _this.qArray=null;
         _this.animlev2=null;
         flagmain11Anim=null;
         _this.cloud21=null;_this.cloud22=null;cloud23=null;_this.cloud24=null;_this.cloud25=null;_this.cloud26=null;_this.cloud27=null;cloud28=null;_this.cloud29=null;
         _this.speakerbtn=null;

         _this.noofAttempts=null;
         timer=null;
         AnsTimerCount=null;

 
		
		_this = null;*/


        /*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

        _this = null;*/

        _this.stopVoice();
	},
	
	

};