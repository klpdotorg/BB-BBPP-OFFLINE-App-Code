Game.sg17_1_4level1=function(){};
Game.sg17_1_4level1.prototype={
   init:function(game)
    {
        _this = this;
        
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        
       telInitializer.gameIdInit("SG17_1_4",gradeSelected);
    },

    preload:function(game){
        if(!window.grade4SG3){

            window.grade4SG3 = true;

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

            this.load.atlas('sg17_1_4backbtn',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/sg17.1.4/backbtn.json');
        this.load.atlas('sg17_1_4CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/sg17.1.4/speaker.json');
        this.load.atlas('sg17_1_4starAnim',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/sg17.1.4/starAnim.json');
        this.load.atlas('sg17_1_4replay',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/sg17.1.4/reply.json');
        this.load.atlas('sg17_1_4btn',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn.png',window.baseUrl+'json/gradeJson/sg17.1.4/btn.json');
        
        this.load.image('sg17_1_4background1',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/bg1.png');
        this.load.image('sg17_1_4tittleBar',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/tittleBar.png');
        this.load.image('sg17_1_4navBar',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/navBar.png');
        this.load.image('sg17_1_4timebg',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/timebg.png');
       // this.load.image('sg17_1_4topicOutline',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('sg17_1_4background',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Bg.png');
              
        this.load.atlas('sg17_1_4tick',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/b3.png',window.baseUrl+'json/gradeJson/sg17.1.4/b3.json');
        this.load.image('sg17_1_4whitebox',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/whitebox.png');
        //this.load.atlas('sg17_1_4box',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/box.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/box.json');
        this.load.atlas('sg17_1_4btn1',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn1.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn1.json');
        this.load.atlas('sg17_1_4btn2',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn2.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn2.json');
        this.load.atlas('sg17_1_4btn3',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn3.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn3.json');
        this.load.atlas('sg17_1_4btn4',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn4.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/btn4.json');
        
        this.load.atlas('sg17_1_4yellowTriangle',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape1.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape1.json');
        this.load.atlas('sg17_1_4redTriangle',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape2.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape2.json');
        this.load.atlas('sg17_1_4pinkTriangle',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape3.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape3.json');
        this.load.atlas('sg17_1_4greensquare',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape4.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape4.json'); 
        this.load.atlas('sg17_1_4purpleTriangle',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape5.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape5.json');
        this.load.atlas('sg17_1_4yellow',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape6.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape6.json'); 
        this.load.atlas('sg17_1_4blueTriangle',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape7.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/commonAssets/Shape7.json');
        
        //this.load.atlas('sg17_1_4s1',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s1.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s1.json');
        this.load.atlas('sg17_1_4s2',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s2.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s2.json');
        this.load.atlas('sg17_1_4s3',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s3.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s3.json');
        this.load.atlas('sg17_1_4s4',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s4.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s4.json');
        //this.load.atlas('sg17_1_4s5',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s5.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s5.json');
        this.load.atlas('sg17_1_4s6',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s6.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s6.json');
        //this.load.atlas('sg17_1_4s7',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s7.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s7.json');
        this.load.atlas('sg17_1_4s8',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s8.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s8.json');
       // this.load.atlas('sg17_1_4s9',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s9.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s9.json');
       // this.load.atlas('sg17_1_4s10',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s10.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s10.json');
       // this.load.atlas('sg17_1_4s11',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s11.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s11.json');
        this.load.atlas('sg17_1_4s12',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s12.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s12.json');
        //this.load.atlas('sg17_1_4s13',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s13.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s13.json');
       // this.load.atlas('sg17_1_4s14',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s14.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s14.json');
        //this.load.atlas('sg17_1_4s15',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s15.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s15.json');
        //this.load.atlas('sg17_1_4s16',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s16.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s16.json');
       // this.load.atlas('sg17_1_4s17',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s17.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s17.json');
        //this.load.atlas('sg17_1_4s18',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s18.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s18.json');
        //this.load.atlas('sg17_1_4s19',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s19.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s19.json');
        //this.load.atlas('sg17_1_4s20',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s20.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s20.json');
        this.load.atlas('sg17_1_4s21',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s21.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s21.json');
        this.load.atlas('sg17_1_4s22',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s22.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s22.json');
        //this.load.atlas('sg17_1_4s23',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s23.png',window.baseUrl+'assets/gradeAssets/sg17.1.4/gradeAssets/s23.json');

    }

    },
    
	create:function(game){
       _this.amplify = null;
       _this.done1 = 0;
       _this.done2 = 0;
       _this.done3 = 0;
       _this.done4 = 0;
       _this.a = null;
       _this.b = null;
       _this.c = null;
       _this.d = null;
       _this.qid=0;
       _this.noofAttempts=0;
       _this.sceneCount=0;
       _this.seconds = 0;
       _this.minutes = 0;
       _this.counterForTimer = 0;
       _this.wrong = true;
       _this.no1=0;
       _this.count=0;
       _this.count1=0;
        _this.qArrays = new Array();
        _this.button3Clicked = 0;
        _this.button4Clicked = 0;
        _this.button5Clicked = 0;
        _this.button6Clicked = 0;
        _this.button7Clicked = 0;
        _this.button8Clicked = 0;
        _this.button9Clicked = 0;
        _this.button10Clicked = 0;
        _this.tempTarget = '';

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;
        //_this.rightImage = '';
                
        //_this.AddToBlue == false;
        _this.soundPlayed = false; 
        //_this.canAdd = false;
       
       this.qArrays = [1,2,3,4,5,7,8];
       _this.qArrays = _this.shuffle(_this.qArrays);
        
   	   _this.shake = new Phaser.Plugin.Shake(game);
	    game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'sg17_1_4background');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="sg17_1_4navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
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

    getQuestion:function(target)
    {  
        _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];
        //_this.rightOrderArray = [];
        //_this.glowOrderArray = [];
        //_this.UserInputArray = [];
        //_this.wrongArray = [];
        _this.objRightArray = [];
  
  switch(_this.qArrays[_this.no1]) 
    // switch(1)    
          {
            case 1: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 1;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s12',530,150,'sg17_1_4s12']; 
                    
                     //_this.objRightArray.name =  "rightAns";            
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                    
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                  
                    break;
            case 2: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 2;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s2',451,220,'sg17_1_4s2']; 
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                   _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                  
                    break;
            case 3:
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 3;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s3',510,190,'sg17_1_4s3']; 
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                  
                    break;
            case 4: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 4;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s4',475,220,'sg17_1_4s4']; 
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                     
                    
                     break;
            case 5: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 5;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s22',470,210,'sg17_1_4s22']; 
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                   
                  
                     break;
            case 6: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 6;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s6',450,200,'sg17_1_4s6'];
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                   
                  
                    break;
            case 7: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 7;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s21',483,215,'sg17_1_4s21']; 
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                  
                  
                    break;
            case 8: 
                    if(_this.soundPlayed == false)
                        {_this.getVoice();
                         _this.soundPlayed=true;
                        }
                    _this.qid = 8;
                    _this.obj1Array = ['sg17_1_4yellowTriangle',230,370,'sg17_1_4yellowTriangle'];
                    _this.obj2Array = ['sg17_1_4redTriangle',290,240,'sg17_1_4redTriangle'];
                    _this.obj3Array = ['sg17_1_4pinkTriangle',270,310,'sg17_1_4pinkTriangle'];
                    _this.obj4Array = ['sg17_1_4greensquare',192,245,'sg17_1_4greensquare'];
                    _this.obj5Array = ['sg17_1_4purpleTriangle',192,330,'sg17_1_4purpleTriangle'];
                    _this.obj6Array = ['sg17_1_4yellow',320,370,'sg17_1_4yellow'];
                    _this.obj7Array = ['sg17_1_4blueTriangle',330,320,'sg17_1_4blueTriangle'];   
                    _this.objRightArray = ['sg17_1_4s8',520,220,'sg17_1_4s8'];
                  
                      _this.btn1 = _this.add.sprite(85,170,'sg17_1_4btn1');
                      _this.btn1.anchor.setTo(0.5);
                      _this.btn1.scale.setTo(1,1); 
                      _this.btn1.name="btn1";
                      _this.btn1.inputEnabled = true;
                      _this.btn1.input.useHandCursor = true;
                      _this.btn1.events.onInputDown.add(_this.clicked,_this);

                      _this.btn2 = _this.add.sprite(85,255,'sg17_1_4btn2');
                      _this.btn2.anchor.setTo(0.5);
                      _this.btn2.scale.setTo(1,1); 
                      _this.btn2.name="btn2";
                      _this.btn2.inputEnabled = true;
                      _this.btn2.input.useHandCursor = true;
                      _this.btn2.events.onInputDown.add(_this.clicked,_this);

                      _this.btn3 = _this.add.sprite(85,340,'sg17_1_4btn3');
                      _this.btn3.anchor.setTo(0.5);
                      _this.btn3.scale.setTo(1,1); 
                      _this.btn3.name="btn3";
                      _this.btn3.inputEnabled = true;
                      _this.btn3.input.useHandCursor = true;
                      _this.btn3.events.onInputDown.add(_this.clicked,_this);

                      _this.btn4 = _this.add.sprite(85,425,'sg17_1_4btn4');
                      _this.btn4.anchor.setTo(0.5);
                      _this.btn4.scale.setTo(1,1); 
                      _this.btn4.name="btn4";
                      _this.btn4.inputEnabled = true;
                      _this.btn4.input.useHandCursor = true;
                      _this.btn4.events.onInputDown.add(_this.clicked,_this);

                       _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray,_this.btn1,_this.btn2,_this.btn3,_this.btn4);
                  
                    _this.rightmark =_this.add.sprite(885,295,'sg17_1_4tick');
                    _this.rightmark.anchor.setTo(0.5);
                    //_this.rightmark.scale.setTo(1.2,1.2);
                    _this.rightmark.inputEnabled = true;
                    _this.rightmark.input.useHandCursor = true;
                  
                  
                    break;
          }
    },
    
    
gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array,obj5Array,obj6Array,obj7Array,objRightArray){

        //_this.getVoice();

       /*_this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       */         
      
      _this.objGroup1 = _this.add.group();
      _this.objGroup = _this.add.group();
      _this.objGroup2 = _this.add.group();

      _this.White_box_left = _this.add.sprite(230,297, 'sg17_1_4whitebox');
      _this.White_box_left.alpha =0.7;
      _this.White_box_left.anchor.setTo(0.5);
      _this.White_box_left.scale.setTo(1.3,1.3);
      _this.White_box_right = _this.add.sprite(620,297, 'sg17_1_4whitebox');
      _this.White_box_right.alpha =0.7;
      _this.White_box_right.anchor.setTo(0.5);
      _this.White_box_right.scale.setTo(1.3,1.3);
      _this.objRight = _this.add.sprite(objRightArray[1],objRightArray[2],objRightArray[0]);
              
      _this.gameBoxGroup = _this.add.group();
       
      _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
      _this.b1.anchor.setTo(0.5);
      _this.b1.name = _this.obj1Array[0];
      _this.b1.inputEnabled = true;
      _this.b1.input.useHandCursor = true;
    
      _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2]+15,obj2Array[0]);
      _this.b2.anchor.setTo(0.5);
      _this.b2.name = _this.obj2Array[0];
      _this.b2.inputEnabled = true;
      _this.b2.input.useHandCursor = true;
     
      _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
      _this.b3.anchor.setTo(0.5);
      _this.b3.name = _this.obj3Array[0];
      _this.b3.inputEnabled = true;
      _this.b3.input.useHandCursor = true;
    
      _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
      _this.b4.anchor.setTo(0.5);
      _this.b4.name = _this.obj4Array[0];
      _this.b4.inputEnabled = true;
      _this.b4.input.useHandCursor = true;
    
      _this.b5 = _this.add.sprite(obj5Array[1],obj5Array[2],obj5Array[0]);
      _this.b5.anchor.setTo(0.5);
      _this.b5.name = _this.obj5Array[0];
      _this.b5.inputEnabled = true;
      _this.b5.input.useHandCursor = true;
    
      _this.b6 = _this.add.sprite(obj6Array[1],obj6Array[2],obj6Array[0]);
      _this.b6.anchor.setTo(0.5);
      _this.b6.name = _this.obj6Array[0];
      _this.b6.inputEnabled = true;
      _this.b6.input.useHandCursor = true;
      
      
      _this.b7 = _this.add.sprite(obj7Array[1],obj7Array[2],obj7Array[0]);
      _this.b7.anchor.setTo(0.5);
      _this.b7.name = _this.obj7Array[0];
      _this.b7.inputEnabled = true;
      _this.b7.input.useHandCursor = true;

      
      _this.objGroup1.add(_this.White_box_left);
      _this.objGroup1.add(_this.White_box_right);
      _this.objGroup1.add(_this.objRight);
    
      _this.objGroup.add(_this.b1);
      _this.objGroup.add(_this.b2);
      _this.objGroup.add(_this.b3);
      _this.objGroup.add(_this.b4);
      _this.objGroup.add(_this.b5);
      _this.objGroup.add(_this.b6);
      _this.objGroup.add(_this.b7);
      
          
      _this.objGroup2.add(_this.btn1);
      _this.objGroup2.add(_this.btn2);
      _this.objGroup2.add(_this.btn3);
      _this.objGroup2.add(_this.btn4);
    
    
  _this.graphicsGroup = _this.add.group();
  _this.graphics1 = _this.add.graphics(100, 100);
  _this.graphics2 = _this.add.graphics(100, 100);
  _this.graphics3 = _this.add.graphics(100, 100);
  _this.graphics4 = _this.add.graphics(100, 100);
  _this.graphics5 = _this.add.graphics(100, 100);
  _this.graphics6 = _this.add.graphics(100, 100);
  _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
    if(_this.qArrays[_this.no1] == 1){
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(490, 220, 10, 10); //yellow
              _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(490, 180, 10, 10);//purpleTriangle
              _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(535, 159, 10, 10);//blueTriangle
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(510, 257, 30, 10);//redTriangle
              _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(510, 110, 30, 15);//yellowTriangle
              _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(490, 310, 10, 10);//pinkTriangle
              _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(527, 300, 10, 10);//greensquare
     
                _this.graphics3.canAdd = true;       
                _this.graphics6.canAdd = true; 
                //_this.graphics4.canAdd = true;       
                //_this.graphics5.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 2){
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(420, 180, 20, 30);
              _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(460, 165, 10, 15);
              _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(490, 150, 20, 20);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(525, 155, 15, 15);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(568, 159, 15, 15);
              _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(600, 185, 20, 30);
               _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(510, 196, 20, 20);
        
                _this.graphics2.canAdd = true;       
                _this.graphics5.canAdd = true; 
                _this.graphics1.canAdd = true;       
                _this.graphics6.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 3){
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(435, 185, 15, 15);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(480, 140, 15, 15);
              _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(490, 170, 15, 15);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(490, 205, 15, 15);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(490, 240, 15, 15);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(540, 120, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(540, 250, 10, 10);
        
              _this.graphics3.canAdd = true;       
                _this.graphics5.canAdd = true; 
                _this.graphics6.canAdd = true;       
                _this.graphics7.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 4){
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(435, 200, 20, 20);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(480, 170, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(480, 225, 5, 5);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(515, 150, 15, 25);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(550, 185, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(536, 225, 5, 5);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(590, 200, 15, 15);
        
            _this.graphics3.canAdd = true;       
            _this.graphics6.canAdd = true; 
            _this.graphics1.canAdd = true;       
            _this.graphics7.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 5){
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(523, 180, 20, 10);//yellowTriangle
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(610, 180, 10, 20);//redTriangle
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(640, 230, 10, 15);//purpleTriangle
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(580, 200, 10, 10);//blueTriangle
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(466, 190, 10, 10);//yellow
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(390, 190, 10, 10);//greensquare
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(435, 195, 10, 10);//pinkTriangle
        
                _this.graphics4.canAdd = true;       
                _this.graphics7.canAdd = true; 
                _this.graphics1.canAdd = true;       
                _this.graphics2.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 6){
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(420, 200, 15, 20);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(460, 175, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(491, 160, 5, 5);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(523, 156, 5, 5);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(560, 155, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(565, 200, 5, 5);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(600, 200, 15, 20);
        
                _this.graphics4.canAdd = true;       
                _this.graphics6.canAdd = true; 
                _this.graphics1.canAdd = true;       
                _this.graphics7.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 7){
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(480, 180, 10, 10);//greensquare
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(520, 230, 10, 10);//blueTriangle
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(590, 230, 15, 10);//redTriangle
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(440, 230, 15, 10);//yellowTriangle
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(535, 200, 10, 10);//yellow
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(530, 155, 10, 10);//purpleTriangle
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(505, 144, 10, 10);//pinkTriangle
        
        _this.graphics2.canAdd = true;       
        _this.graphics7.canAdd = true; 
        _this.graphics3.canAdd = true;       
        _this.graphics4.canAdd = true; 
    }
    else if(_this.qArrays[_this.no1] == 8){
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(445, 175, 20, 40);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(475, 163, 20, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(505, 160, 30, 30);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(548, 156, 10, 20);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(490, 210, 10, 15);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(535, 215, 25, 15);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(575, 175, 20, 40);
        
              _this.graphics2.canAdd = true;       
                _this.graphics4.canAdd = true; 
                _this.graphics1.canAdd = true;       
                _this.graphics7.canAdd = true; 
    }
     
              _this.graphicsGroup.add(_this.graphics1);
              _this.graphicsGroup.add(_this.graphics2);
              _this.graphicsGroup.add(_this.graphics3);
              _this.graphicsGroup.add(_this.graphics4);
              _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
              _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;
                
                //_this.graphics2.alpha = 0;
                _this.graphics1.name = "graphics1";
                _this.graphics2.name = "graphics2";
                _this.graphics3.name = "graphics3";
                _this.graphics4.name = "graphics4";
                _this.graphics5.name = "graphics5";
                _this.graphics6.name = "graphics6";
                _this.graphics7.name = "graphics7";
    
      
    _this.objGroup1.x = -500;
    _this.Maintween = _this.add.tween(_this.objGroup1);
    _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0)
    
    _this.graphicsGroup.x = -500;
    _this.Maintween = _this.add.tween(_this.graphicsGroup);
    _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0)
    
      _this.objGroup2.x = -500;
    _this.Maintween = _this.add.tween(_this.objGroup2);
    _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
    
    _this.objGroup.x = -500;
    _this.Maintween = _this.add.tween(_this.objGroup);
    _this.Maintween.to({ x: 0 }, 0,'Linear', true, 0);
      _this.Maintween.onComplete.add(function()
      {
      _this.gameBoxGroup.add(_this.b1);
      _this.gameBoxGroup.add(_this.b2);
      _this.gameBoxGroup.add(_this.b3);
      _this.gameBoxGroup.add(_this.b4);
      _this.gameBoxGroup.add(_this.b5);
      _this.gameBoxGroup.add(_this.b6);
      _this.gameBoxGroup.add(_this.b7);
           if(_this.qid==1){


            _this.b1.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes1,_this);
          }
           else if(_this.qid==2){
            _this.b1.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes2,_this);
            
          }
           else if(_this.qid==3){ 
            _this.b1.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes3,_this);
          }
           else if(_this.qid==4){ 
            _this.b1.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes4,_this);
          }
           else if(_this.qid==5){

             _this.b1.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes5,_this);
           }
           else if(_this.qid==6){
              _this.b1.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes6,_this);
         

           }
           else if(_this.qid==7){
            _this.b1.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes7,_this);
         
           }

            else if(_this.qid==8){
            _this.b1.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes8,_this);
         
           }
          
              },this);
         },
    
    
    /*unselect:function(target){
       _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
        target.events.onInputDown.removeAll();
        target.frame=0;
        target.events.onInputDown.add(_this.clicked,_this);
    },*/
    
    clicked:function(target){
         console.log(target.name,_this.tempTarget.name);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
         target.frame=1;
        // target.events.onInputDown.add(_this.unselect,_this);
        
          if(_this.tempTarget.name == "sg17_1_4yellow"){
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
              _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
            if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                } 
                else if(target.name == "btn2"){
                     _this.btn1.frame = 0;
                    _this.btn4.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
                    target.frame = 0;
                    },_this);
                   _this.tempTarget.scale.x *= -1;
                }
                else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button3Clicked);
                    _this.button3Clicked++;
                    if(_this.button3Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button3Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button3Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button3Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button3Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button3Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button3Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button3Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button3Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button4Clicked)
                     _this.button3Clicked--;
                     _this.button4Clicked++;
                    if(_this.button4Clicked > 8)
                        _this.button4Clicked = 0;
                    if(_this.button3Clicked <0)
                        _this.button3Clicked =0;
                    if(_this.button3Clicked == 1 || _this.button4Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button3Clicked == 2 || _this.button4Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button3Clicked == 2 || _this.button4Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button3Clicked == 3 || _this.button4Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button3Clicked == 4 || _this.button4Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button3Clicked == 5 || _this.button4Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button3Clicked == 6 || _this.button4Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button3Clicked == 7 || _this.button4Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button3Clicked = 0;
                         _this.button4Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        else if(_this.tempTarget.name == "sg17_1_4purpleTriangle"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button5Clicked);
                    _this.button5Clicked++;
                    if(_this.button5Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button5Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button5Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button6Clicked)
                     _this.button5Clicked--;
                     _this.button6Clicked++;
                    if(_this.button6Clicked > 8)
                        _this.button6Clicked = 0;
                    if(_this.button5Clicked <0)
                        _this.button5Clicked =0;
                    if(_this.button5Clicked == 1 || _this.button6Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button5Clicked == 2 || _this.button6Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 2 || _this.button6Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 3 || _this.button6Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 4 || _this.button6Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 5 || _this.button6Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 6 || _this.button6Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 7 || _this.button6Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button5Clicked = 0;
                         _this.button6Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
        else if(_this.tempTarget.name == "sg17_1_4blueTriangle"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button7Clicked);
                    _this.button7Clicked++;
                    if(_this.button7Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button7Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button7Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button7Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button7Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button7Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button7Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button7Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button7Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button8Clicked)
                     _this.button7Clicked--;
                     _this.button8Clicked++;
                    if(_this.button8Clicked > 8)
                        _this.button8Clicked = 0;
                    if(_this.button7Clicked <0)
                        _this.button7Clicked =0;
                    if(_this.button7Clicked == 1 || _this.button8Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button7Clicked == 2 || _this.button8Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button7Clicked == 2 || _this.button8Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button7Clicked == 3 || _this.button8Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button7Clicked == 4 || _this.button8Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button7Clicked == 5 || _this.button8Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button7Clicked == 6 || _this.button8Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button7Clicked == 7 || _this.button8Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button7Clicked = 0;
                         _this.button8Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
        else if(_this.tempTarget.name == "sg17_1_4redTriangle"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button9Clicked);
                    _this.button9Clicked++;
                    if(_this.button9Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button9Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button9Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button9Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button9Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button9Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button9Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button9Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button9Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button10Clicked)
                     _this.button9Clicked--;
                     _this.button10Clicked++;
                    if(_this.button10Clicked > 8)
                        _this.button10Clicked = 0;
                    if(_this.button9Clicked <0)
                        _this.button9Clicked =0;
                    if(_this.button9Clicked == 1 || _this.button10Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button9Clicked == 2 || _this.button10Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button9Clicked == 2 || _this.button10Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button9Clicked == 3 || _this.button10Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button9Clicked == 4 || _this.button10Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button9Clicked == 5 || _this.button10Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button9Clicked == 6 || _this.button10Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button9Clicked == 7 || _this.button10Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button9Clicked = 0;
                         _this.button10Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
        else if(_this.tempTarget.name == "sg17_1_4yellowTriangle"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button5Clicked);
                    _this.button5Clicked++;
                    if(_this.button5Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button5Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button5Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button6Clicked)
                     _this.button5Clicked--;
                     _this.button6Clicked++;
                    if(_this.button6Clicked > 8)
                        _this.button6Clicked = 0;
                    if(_this.button5Clicked <0)
                        _this.button5Clicked =0;
                    if(_this.button5Clicked == 1 || _this.button6Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button5Clicked == 2 || _this.button6Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 2 || _this.button6Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 3 || _this.button6Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 4 || _this.button6Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 5 || _this.button6Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 6 || _this.button6Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 7 || _this.button6Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button5Clicked = 0;
                         _this.button6Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
        else if(_this.tempTarget.name == "sg17_1_4pinkTriangle"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button5Clicked);
                    _this.button5Clicked++;
                    if(_this.button5Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else if(_this.button5Clicked == 2)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 3)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 4)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 5)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 6)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 7)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 8)
                        _this.tempTarget.angle = 360;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button5Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button6Clicked)
                     _this.button5Clicked--;
                     _this.button6Clicked++;
                    if(_this.button6Clicked > 8)
                        _this.button6Clicked = 0;
                    if(_this.button5Clicked <0)
                        _this.button5Clicked =0;
                    if(_this.button5Clicked == 1 || _this.button6Clicked == 8)
                        _this.tempTarget.angle = 45;
                    if(_this.button5Clicked == 2 || _this.button6Clicked == 7)
                        _this.tempTarget.angle = 90;
                    else if(_this.button5Clicked == 3 || _this.button6Clicked == 6)
                        _this.tempTarget.angle = 135;
                    else if(_this.button5Clicked == 4 || _this.button6Clicked == 5)
                        _this.tempTarget.angle = 180;
                    else if(_this.button5Clicked == 5 || _this.button6Clicked == 4)
                        _this.tempTarget.angle = 225; 
                    else if(_this.button5Clicked == 6 || _this.button6Clicked == 3)
                        _this.tempTarget.angle = 270;
                    else if(_this.button5Clicked == 7 || _this.button6Clicked == 2)
                        _this.tempTarget.angle = 315;
                    else if(_this.button5Clicked == 8 || _this.button6Clicked == 1)
                        _this.tempTarget.angle = 360;
                    else{
                         _this.button5Clicked = 0;
                         _this.button6Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
        else if(_this.tempTarget.name == "sg17_1_4greensquare"){
             if(target.name == "btn1"){
                _this.tempTarget.scale.y *= -1;
                    _this.btn4.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                 _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                } 
                else if(target.name == "btn2"){
                   _this.tempTarget.scale.x *= -1;
                    _this.btn4.frame = 0;
                    _this.btn1.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                }
                 else if(target.name == "btn3"){
                     _this.btn1.frame = 0;
                     _this.btn4.frame = 0;
                     _this.btn2.frame = 0;
                     target.frame = 1;
                     _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("@@@ "+_this.button5Clicked);
                    _this.button5Clicked++;
                    if(_this.button5Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else{
                        _this.tempTarget.angle = 0;
                        _this.button5Clicked = 0;
                     }
                }
                else if(target.name == "btn4"){
                    _this.btn1.frame = 0;
                    _this.btn2.frame = 0;
                    _this.btn3.frame = 0;
                    target.frame = 1;
                    _this.time.events.add(300, function(){
              target.frame = 0;
              },_this);
                    console.log("### "+_this.button6Clicked)
                     _this.button6Clicked++;
                    if(_this.button6Clicked == 1)
                        _this.tempTarget.angle = 45;
                    else{
                         _this.button5Clicked = 0;
                         _this.button6Clicked = 0;
                         _this.tempTarget.angle = 0;
                      }
                }
            }
        
      // target.events.onInputDown.removeAll();
       // _this.rightmark.events.onInputDown.add(function(target){
           // target.events.onInputDown.removeAll();
           // _this.rightmark.frame=1;
         
          
       // },_this);
           
    },
      
 
  addDragBoxes1:function(target){

      console.log(target.name);
     _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
     
            target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics3)||_this.checkOverlap(_this.b3,_this.graphics3))
                        {
                            _this.graphics3.canAdd = false;
                        }else
                        {
                                _this.graphics3.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics6)||_this.checkOverlap(_this.b3,_this.graphics6))
                        {
                            _this.graphics6.canAdd = false;
                        }else
                        {
                            _this.graphics6.canAdd = true;
                        }
                
                if(_this.checkOverlap(_this.b2,_this.graphics4)||_this.checkOverlap(_this.b1,_this.graphics4))
                        {
                            _this.graphics4.canAdd = false;
                        }else
                        {
                                _this.graphics4.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics5)||_this.checkOverlap(_this.b1,_this.graphics5))
                        {
                            _this.graphics5.canAdd = false;
                        }else
                        {
                            _this.graphics5.canAdd = true;
                        }

            },_this);
              
              
            
             target.events.onDragStop.add(function(target)
              {
               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                           target.x = 605;
                           target.y = 318;
                           
                          break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           console.log("!!!!");
                         target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         target.x= 611;
                           target.y =271;
                            console.log("@@@");
                         
                          break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics3.canAdd)
                      {
                          _this.graphics3.canAdd = false;
                          _this.AddToBlue = true;
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                         target.x= 634;
                        target.y =276.5;
                        
                         break;
                      }
                        else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics6.canAdd)
                      {
                          _this.graphics6.canAdd = false;
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 584;
                           target.y =409;
                       
                         break;
                      }
                         else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                          target.x= 596;
                           target.y =416.7;
                          break;
                       } 
                    else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics3.canAdd)
                       {
                           _this.graphics3.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                           target.x= 642;
                           target.y =265.5;
                          break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics5.canAdd)
                       {
                           _this.graphics5.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                          target.x= 627.6;
                           target.y =229.6;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics4.canAdd)
                       {
                           _this.graphics4.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                          target.x= 627.5;
                           target.y =362;
                         break;
                       }
                      else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics4.canAdd)
                      {
                         _this.graphics4.canAdd = false;
                          target.frame = 0;
                       _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                         target.x= 635;
                           target.y =362;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics5.canAdd)
                      {
                          _this.graphics5.canAdd = false;
                          target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         target.x= 634.5;
                         target.y =229.7;
                         break;
                       }
                      
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4greensquare"))
                       {
                           target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                          target.x= 633;
                           target.y =408;
                         break;
                       }
                         
                        
                       else
                       {
                         console.log("IN ELSE");
                        
                           break;
                       }
                       
                    }
                 _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                     _this.rightmark.frame=1;
                     _this.time.events.add(500, function(){
              _this.rightmark.frame = 0;
              },_this);
                        _this.checkAns();
                    
                           },_this);
                 
                  },_this);
     
                            
},
    
  addDragBoxes2:function(target){

             console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
                      
            target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics2)||_this.checkOverlap(_this.b3,_this.graphics2))
                        {
                            _this.graphics2.canAdd = false;
                        }else
                        {
                                _this.graphics2.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics5)||_this.checkOverlap(_this.b3,_this.graphics5))
                        {
                            _this.graphics5.canAdd = false;
                        }else
                        {
                            _this.graphics5.canAdd = true;
                        }
                
                if(_this.checkOverlap(_this.b2,_this.graphics1)||_this.checkOverlap(_this.b1,_this.graphics1))
                        {
                            _this.graphics1.canAdd = false;
                        }else
                        {
                                _this.graphics1.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics6)||_this.checkOverlap(_this.b1,_this.graphics6))
                        {
                            _this.graphics6.canAdd = false;
                        }else
                        {
                            _this.graphics6.canAdd = true;
                        }

            },_this);
    
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       //_this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 535;
                           target.y =299;
                         break;
                        }
                        else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 708;
                           target.y =303;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 554.5;
                           target.y =268.8;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics5.canAdd)
                       {
                           _this.graphics5.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 685;
                           target.y =260;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4purpleTriangle"))
                      {
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         target.x= 595;
                           target.y =257;
                        break;
                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4yellow"))
                      {
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         target.x= 644;
                           target.y =256;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics5.canAdd)
                       {
                           _this.graphics5.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 672.5;
                           target.y =262;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 567;
                           target.y =266.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 708;
                           target.y =295.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 528;
                           target.y =299;
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4greensquare"))
                       {
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 621.5;
                           target.y =302.5;
                         break;
                       }
                       else
                       {
                         console.log("IN ELSE");
                        
                           break;
                       }

                    }
                   
                    _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                        _this.time.events.add(500, function(){
              _this.rightmark.frame = 0;
              },_this);
                    _this.checkAns();

                },_this);
               },_this);
              
    },
    
  addDragBoxes3:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
        
            target.events.onDragStart.add(function(target){ 
            if(_this.checkOverlap(_this.b7,_this.graphics3)||_this.checkOverlap(_this.b3,_this.graphics3))
                        {
                            _this.graphics3.canAdd = false;
                        }else
                        {
                                _this.graphics3.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics5)||_this.checkOverlap(_this.b3,_this.graphics5))
                        {
                            _this.graphics5.canAdd = false;
                        }else
                        {
                            _this.graphics5.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics6)||_this.checkOverlap(_this.b1,_this.graphics6))
                        {
                            _this.graphics6.canAdd = false;
                        }else
                        {
                                _this.graphics6.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics7)||_this.checkOverlap(_this.b1,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
              },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 545;
                           target.y =294.5;
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 589;
                           target.y =245;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics3.canAdd)
                      {
                          _this.graphics3.canAdd = false;
                          _this.AddToBlue = true;
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                          target.x= 587;
                           target.y =274;
                        break;
                      }
                        else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics5.canAdd)
                       {
                           _this.graphics5.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 593;
                           target.y =360.5;
                         break;
                       }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4greensquare"))
                      {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 591;
                           target.y =317;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics5.canAdd)
                       {
                           _this.graphics5.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 601;
                           target.y =350;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics3.canAdd)
                      {
                          _this.graphics3.canAdd = false;
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                          target.x= 597;
                           target.y =282;
                        break;
                      }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 630;
                           target.y =226;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 633.5;
                           target.y =362;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 634;
                           target.y =354.6;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 637.8;
                           target.y =226;
                         break;
                       }
                       else
                       {
                          console.log("IN ELSE");
                        
                           break; 
                       }

                    }
                   _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                    _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);
    },
    
  addDragBoxes4:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
       
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              
            target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics6)||_this.checkOverlap(_this.b3,_this.graphics6))
                        {
                            _this.graphics6.canAdd = false;
                        }else
                        {
                                _this.graphics6.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics3)||_this.checkOverlap(_this.b3,_this.graphics3))
                        {
                            _this.graphics3.canAdd = false;
                        }else
                        {
                            _this.graphics3.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics1)||_this.checkOverlap(_this.b1,_this.graphics1))
                        {
                            _this.graphics1.canAdd = false;
                        }else
                        {
                                _this.graphics1.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics7)||_this.checkOverlap(_this.b1,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
            },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 558;
                           target.y =316.5;
                         break;
                        }
                        else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 687;
                           target.y =320.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 598;
                           target.y =297;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics3.canAdd)
                      {
                          _this.graphics3.canAdd = false;
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 586.9;
                          target.y =324;
                        break;
                      }
                        else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                          target.x= 632;
                           target.y =324;
                         break;
                       }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4greensquare"))
                      {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 620.6;
                           target.y =267;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 641.5;
                           target.y =294;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 640;
                           target.y =314;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics3.canAdd)
                      {
                           _this.graphics3.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 595;
                           target.y =314;
                        break;
                      }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 687;
                           target.y =313.4;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 551;
                           target.y =316;
                         break;
                        }
                       else
                       {
                          console.log("IN ELSE");
                        
                           break; 
                       }

                    }
                    _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                        _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);
    },
  addDragBoxes5:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
      
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              
              target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics4)||_this.checkOverlap(_this.b3,_this.graphics4))
                        {
                            _this.graphics4.canAdd = false;
                        }else
                        {
                                _this.graphics4.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics7)||_this.checkOverlap(_this.b3,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
                  if(_this.checkOverlap(_this.b2,_this.graphics1)||_this.checkOverlap(_this.b1,_this.graphics1))
                        {
                            _this.graphics1.canAdd = false;
                        }else
                        {
                                _this.graphics1.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics2)||_this.checkOverlap(_this.b1,_this.graphics2))
                        {
                            _this.graphics2.canAdd = false;
                        }else
                        {
                            _this.graphics2.canAdd = true;
                        }
              },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 637;
                           target.y =300;
                         break;
                        }
                        else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           target.frame = 0;
                           this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 725.5;
                           target.y =290;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           target.frame = 0;
                           this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 731;
                           target.y =285;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 637.4;
                           target.y =304.6;
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4purpleTriangle"))
                      {
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 743;
                          target.y =338;
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics4.canAdd)
                      {
                           _this.graphics4.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 672;
                           target.y =297;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 546.5;
                           target.y =290.5;
                         break;
                       } 
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 569;
                           target.y =293.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4greensquare"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 508.5;
                           target.y =296;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 539;
                           target.y =301;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics4.canAdd)
                      {
                          _this.graphics4.canAdd = false;
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 683;
                          target.y =304;
                        break;
                       }
                       else
                       {
                          console.log("IN ELSE");
                        
                           break; 
                       }

                    }
                   _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                       _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);
    },
  addDragBoxes6:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              
              target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics4)||_this.checkOverlap(_this.b3,_this.graphics4))
                        {
                            _this.graphics4.canAdd = false;
                        }else
                        {
                            _this.graphics4.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics6)||_this.checkOverlap(_this.b3,_this.graphics6))
                        {
                            _this.graphics6.canAdd = false;
                        }else
                        {
                            _this.graphics6.canAdd = true;
                        }
                  if(_this.checkOverlap(_this.b2,_this.graphics1)||_this.checkOverlap(_this.b1,_this.graphics1))
                        {
                               _this.graphics1.canAdd = false;
                        }else
                        {
                                _this.graphics1.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics7)||_this.checkOverlap(_this.b1,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
              },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 527;
                           target.y =312;
                         break;
                        }
                        else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 706.8;
                           target.y =308.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 577;
                           target.y =293;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4yellow"))
                      {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 599;
                           target.y =268;
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics4.canAdd)
                      {
                          _this.graphics4.canAdd = false;
                          //_this.AddToBlue = true;
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 621.5;
                          target.y =271;
                        break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 666;
                           target.y =315;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4greensquare"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 665.6;
                           target.y =271.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics6.canAdd)
                       {
                           _this.graphics6.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 673.6;
                           target.y =305;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics4.canAdd)
                      {
                          _this.graphics4.canAdd = false;
                          target.frame = 0;
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                         target.x= 630;
                         target.y =261;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 706.8;
                           target.y =316;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 534;
                           target.y =312;
                         break;
                        }
                       else
                       {
                           console.log("IN ELSE");
                        
                           break;
                       }

                    }
                   _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                       _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);
    },
    
  addDragBoxes7:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              
              target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics2)||_this.checkOverlap(_this.b3,_this.graphics2))
                        {
                            _this.graphics2.canAdd = false;
                        }else
                        {
                                _this.graphics2.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics7)||_this.checkOverlap(_this.b3,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
                  if(_this.checkOverlap(_this.b2,_this.graphics3)||_this.checkOverlap(_this.b1,_this.graphics3))
                        {
                               _this.graphics3.canAdd = false;
                        }else
                        {
                                _this.graphics3.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics4)||_this.checkOverlap(_this.b1,_this.graphics4))
                        {
                            _this.graphics4.canAdd = false;
                        }else
                        {
                            _this.graphics4.canAdd = true;
                        }
              },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4greensquare"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 590;
                           target.y =295;
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 617;
                           target.y =323;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 620.5;
                           target.y =256.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics3.canAdd)
                      {
                            _this.graphics3.canAdd = false;
                            target.frame = 0;
                            _this.clickSound = _this.add.audio('snapSound');
                            _this.clickSound.play();
                            target.x= 684.7;
                            target.y =318.7;
                            break;

                      }
                        else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics4.canAdd)
                      {
                             _this.graphics4.canAdd = false;
                             target.frame = 0;
                             _this.clickSound = _this.add.audio('snapSound');
                             _this.clickSound.play();
                             target.x= 563.4;
                             target.y =319;
                        break;
                       }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics4.canAdd)
                      {
                             _this.graphics4.canAdd = false;
                             target.frame = 0;
                             _this.clickSound = _this.add.audio('snapSound');
                             _this.clickSound.play();
                             target.x= 562;
                             target.y =325;
                        break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics3.canAdd)
                      {
                            _this.graphics3.canAdd = false;
                            target.frame = 0;
                            _this.clickSound = _this.add.audio('snapSound');
                            _this.clickSound.play();
                            target.x= 686;
                            target.y =324.6;
                            break;

                      }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 638;
                           target.y =304;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 633;
                           target.y =275.6;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 608;
                           target.y =258;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 624;
                           target.y =336;
                         break;
                       }
                       else
                       {
                         console.log("IN ELSE");
                        
                           break; 
                       }

                    }
                   _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                       _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);
    },

  addDragBoxes8:function(target){

              console.log(target.name);
             _this.tempTarget = target;
               _this.b1.frame = 0;  
               _this.b2.frame = 0;  
               _this.b3.frame = 0;  
               _this.b4.frame = 0;  
               _this.b5.frame = 0;  
               _this.b6.frame = 0;  
               _this.b7.frame = 0;  
              target.frame = 1;
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              
              target.events.onDragStart.add(function(target){
                 if(_this.checkOverlap(_this.b7,_this.graphics2)||_this.checkOverlap(_this.b3,_this.graphics2))
                        {
                            _this.graphics2.canAdd = false;
                        }else
                        {
                                _this.graphics2.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b7,_this.graphics4)||_this.checkOverlap(_this.b3,_this.graphics4))
                        {
                            _this.graphics4.canAdd = false;
                        }else
                        {
                            _this.graphics4.canAdd = true;
                        }
                  if(_this.checkOverlap(_this.b2,_this.graphics1)||_this.checkOverlap(_this.b1,_this.graphics1))
                        {
                               _this.graphics1.canAdd = false;
                        }else
                        {
                                _this.graphics1.canAdd = true;
                        }
                if(_this.checkOverlap(_this.b2,_this.graphics7)||_this.checkOverlap(_this.b1,_this.graphics7))
                        {
                            _this.graphics7.canAdd = false;
                        }else
                        {
                            _this.graphics7.canAdd = true;
                        }
              },_this);
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       //_this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 568;
                           target.y =294;
                         break;
                        }
                        else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4redTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 670;
                           target.y =298.5;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 578;
                           target.y =276.8;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4blueTriangle")&&_this.graphics4.canAdd)
                      {
                              _this.graphics4.canAdd = false;
                              target.frame = 0;
                              _this.clickSound = _this.add.audio('snapSound');
                              _this.clickSound.play();
                              target.x= 665;
                              target.y =271;
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "sg17_1_4greensquare"))
                      {
                              target.frame = 0;
                              _this.clickSound = _this.add.audio('snapSound');
                              _this.clickSound.play();
                              target.x= 621.5;
                              target.y =277;
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "sg17_1_4pinkTriangle")&&_this.graphics4.canAdd)
                      {
                          _this.graphics4.canAdd = false;
                          target.frame = 0;
                          _this.clickSound = _this.add.audio('snapSound');
                          _this.clickSound.play();
                          target.x= 655.5;
                          target.y =263.1;
                        break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "sg17_1_4pinkTriangle") &&_this.graphics2.canAdd)
                       {
                           _this.graphics2.canAdd = false;
                           _this.AddToBlue = true;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 585.3;
                           target.y =266;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "sg17_1_4yellow"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 594;
                           target.y =318;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "sg17_1_4purpleTriangle"))
                       {
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 645;
                           target.y =316;
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics7.canAdd)
                       {
                           _this.graphics7.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 675;
                           target.y =293.8;
                         break;
                       }
                        else if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "sg17_1_4yellowTriangle")&&_this.graphics1.canAdd)
                       {
                           _this.graphics1.canAdd = false;
                           target.frame = 0;
                           _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                           target.x= 563;
                           target.y =298;
                         break;
                        }
                       else
                       {
                         console.log("IN ELSE");
                        
                           break; 
                       }

                    }
                    _this.rightmark.events.onInputDown.add(function(target){
                    target.events.onInputDown.removeAll();
                    _this.rightmark.frame=1;
                        _this.time.events.add(500, function(){
                    _this.rightmark.frame = 0;
                    },_this);
                    _this.checkAns();

                },_this);
               },_this);  
    },

  
    checkAns:function(target){
        _this.rightShape = 0;
        if(_this.qArrays[_this.no1] == 1){
        for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics7" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -45))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 0 || this.gameBoxGroup.getAt(j).angle == -315 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                }
        }
        else if(_this.qArrays[_this.no1] == 2){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics7" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -45))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true10"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true11"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 3){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                           // alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics4" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -45))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true10"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true11"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 4){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics4" && this.gameBoxGroup.getAt(j).angle == 45)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == -135))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true10"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true11"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 5){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics6" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                 } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true99"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true999"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 6){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics5" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"  +_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == -135))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4" + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5" + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || this.gameBoxGroup.getAt(j).angle == 45 ||  _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true10"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true11"  + _this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 7){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == -45))
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 45 || this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 225 || this.gameBoxGroup.getAt(j).angle == -135 || this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -225 || this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 0 || this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 0 || this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics3" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true99"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 180 || this.gameBoxGroup.getAt(j).angle == -180 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true999"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        else if(_this.qArrays[_this.no1] == 8){
           for(var i=0;i<_this.graphicsGroup.length;i++)
        {
            for(var j=0;j<_this.gameBoxGroup.length;j++)
                {
                    
                    if(_this.checkOverlap(_this.gameBoxGroup.getAt(j),_this.graphicsGroup.getAt(i)))
                        {
                            //alert("hit");
                            console.log(this.gameBoxGroup.getAt(j).angle);
                            if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4greensquare" && this.graphicsGroup.getAt(i).name == "graphics3" && this.gameBoxGroup.getAt(j).angle == 0)
                                {
                                    console.log("true1"+_this.rightShape++);
                                    _this.rightShape++;
                                    
                                } 
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4purpleTriangle" && this.graphicsGroup.getAt(i).name == "graphics6" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.x == -1))
                                {
                                    console.log("true2"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellow" && this.graphicsGroup.getAt(i).name == "graphics5" && (this.gameBoxGroup.getAt(j).angle == 135 || this.gameBoxGroup.getAt(j).angle == -45))
                                {
                                    console.log("true3"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 315 || this.gameBoxGroup.getAt(j).angle == -45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true4"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4pinkTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 45 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true5"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics2" && (this.gameBoxGroup.getAt(j).angle == 0 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true6"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4blueTriangle" && this.graphicsGroup.getAt(i).name == "graphics4" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.x == -1 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true7"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4yellowTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true8"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                           else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics1" && (this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                            else if(_this.gameBoxGroup.getAt(j).name == "sg17_1_4redTriangle" && this.graphicsGroup.getAt(i).name == "graphics7" && (this.gameBoxGroup.getAt(j).angle == 90 || this.gameBoxGroup.getAt(j).angle == -270 || this.gameBoxGroup.getAt(j).angle == 270 || this.gameBoxGroup.getAt(j).angle == -90 || _this.gameBoxGroup.getAt(j).scale.y == -1))
                                {
                                    console.log("true9"+_this.rightShape++);
                                    _this.rightShape++;
                                }
                          }
                    
                    
                    }
           
                } 
        }
        if(_this.rightShape == 14){
          _this.noofAttempts++;
                        _this.rightAnswer();
                    } else{
                        _this.noofAttempts++;
                        _this.shake.shake(10,_this.gameBoxGroup);
                        _this.wmusic = _this.add.audio('waudio');
                        _this.wmusic.play();
                    }
    },
    
    
    rightAnswer:function(target){


console.log("*******************************************************************");          
                        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                        _this.starAnim.smoothed = false;
                        _this.anim4 =  _this.starAnim.animations.add('star');
                        _this.celebr = _this.add.audio('celebr');
                        _this.celebr.play();
                        _this.anim4.play();
                        _this.count1++;
                
                        _this.anim1=_this.objRight.animations.add('move');
                        _this.anim1.play(3,true);
        
                        
  _this.time.events.add(2000, function(){_this.removeEverthing();},_this);      

  if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.sceneCount++;
        _this.questionid=1;
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);      

     },
    
  /*  wrongAns:function(target)
	{
       
        
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
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        // this.timer= this.time.create(false);
         _this.wrongAnswer = true;

        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();
        //_this.shake.shake(10,_this.gameBoxGroup);
        
        _this.time.events.add(1000, function(){
        _this.objGroup.destroy();
        _this.objGroup2.destroy();
        _this.objGroup1.destroy();
        _this.objRight.destroy();
        _this.gameBoxGroup.destroy();
        
       _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
        	
        //target.events.onInputDown.removeAll();
	},*/

checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
    removeEverthing:function() 
    {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.count =0;
         _this.no1++;
        if( _this.no1<6)
        {
            // _this.no1++;
            //_this.done1=0;
              _this.wrong = true;
             _this.timer1.stop();
               
             
             _this.rightmark.destroy();
              
            
             _this.starsGroup.getChildAt(_this.count1).frame = 2; 

              var MaintweenDestroy = _this.add.tween(_this.objGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                _this.objGroup.destroy();
            },_this);
            
            var MaintweenDestroy = _this.add.tween(_this.objGroup2);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                _this.objGroup2.destroy();
            },_this);
            
            var MaintweenDestroy = _this.add.tween(_this.gameBoxGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
            },_this);
            
            var Maintween1Destroy = _this.add.tween(_this.objGroup1);
            Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                _this.objGroup1.destroy();
                _this.getQuestion();
            },_this); 
           
        }
        else
        {
            // _this.timer1.stop();
            //_this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('sg17_1_4Score');
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
      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                  
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/English/sg17.1.4E.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Hindi/sg17.1.4H.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Kannada/sg17.1.4K.mp3");
                        }
                        else if(window.languageSelected == "Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Gujarati/sg17.1.4G.mp3");
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
						else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Marathi/sg17.1.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Telugu/sg17.1.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Tamil/sg17.1.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Urdu/sg17.1.4.mp3");
                    }
                        else
                        {
                          _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg17.1.4/Odiya/sg17.1.4.mp3");
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
    
        stopVoice:function(){
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
        }

    
};