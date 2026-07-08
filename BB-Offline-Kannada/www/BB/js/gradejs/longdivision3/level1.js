Game.longdivision3=function(){};

Game.longdivision3.prototype={
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
        telInitializer.gameIdInit("DH2",gradeSelected);

    },

    preload:function(game){
        if(!window.longdivision3){

            window.longdivision3 = true;

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
            this.load.image('Dhg1_5_bgA',window.baseUrl+'assets/DH2/commonAssets/BG2.png');
        this.load.image('Dhg1_5_bg3',window.baseUrl+'assets/DH2/commonAssets/bg3.png');
        this.load.image('Dhg1_5_tittleBaar',window.baseUrl+'assets/DH2/commonAssets/tittleBaar.png');
        this.load.image('Dhg1_5_Topbar',window.baseUrl+'assets/DH2/commonAssets/navBar.png');
        this.load.image('Dhg1_5_timer',window.baseUrl+'assets/DH2/commonAssets/timer.png');
        this.load.image('Dhg1_5_footer',window.baseUrl+'assets/DH2/commonAssets/footer.png');
        this.load.image('Dhg1_5_skipDemoVideos',window.baseUrl+'assets/DH2/commonAssets/skipArrow.png');
        
        this.load.atlas('Dhg1_5_BackDhg1_5_btn',window.baseUrl+'assets/DH2/commonAssets/backbtn.png' ,window.baseUrl+'json/DH2/backbtn.json');
        this.load.atlas('Dhg1_5_btn',window.baseUrl+'assets/DH2/commonAssets/btn.png' ,window.baseUrl+'json/DH2/btn.json');
        this.load.atlas('rightDhg1_5_btn',window.baseUrl+'assets/DH2/commonAssets/1.png' ,window.baseUrl+'json/DH2/1.json');
        this.load.atlas('wrongDhg1_5_btn',window.baseUrl+'assets/DH2/commonAssets/2.png' ,window.baseUrl+'json/DH2/2.json');
        this.load.atlas('Dhg1_5_speaker',window.baseUrl+'assets/DH2/commonAssets/speaker.png' ,window.baseUrl+'json/DH2/speaker.json');
        this.load.atlas('Dhg1_5_starAnim',window.baseUrl+'assets/DH2/commonAssets/starAnim.png' ,window.baseUrl+'json/DH2/starAnim.json');
        this.load.atlas('Dhg1_5_replay',window.baseUrl+'assets/DH2/commonAssets/reply.png' ,window.baseUrl+'json/DH2/reply.json');
        
        //game assets
        
        this.load.image('Dhg1_5_Box1',window.baseUrl+'assets/DH2/gameAssets/new box 1.png');
        this.load.image('Dhg1_5_Box3',window.baseUrl+'assets/DH2/gameAssets/new box 2.png');
        this.load.image('Dhg1_5_Box2',window.baseUrl+'assets/DH2/gameAssets/box 9.png');
        this.load.image('Dhg1_5_Box4',window.baseUrl+'assets/DH2/gameAssets/box 10.png');
        this.load.atlas('Dhg1_5_circle',window.baseUrl+'assets/DH2/gameAssets/A1.png',window.baseUrl+'json/DH2/gameAssets/A1.json');
        this.load.atlas('Dhg1_5_square',window.baseUrl+'assets/DH2/gameAssets/A2.png',window.baseUrl+'json/DH2/gameAssets/A2.json');
        this.load.atlas('Dhg1_5_triangle',window.baseUrl+'assets/DH2/gameAssets/A3.png',window.baseUrl+'json/DH2/gameAssets/A3.json');
        this.load.atlas('Dhg1_5_oval',window.baseUrl+'assets/DH2/gameAssets/A4.png',window.baseUrl+'json/DH2/gameAssets/A4.json');
        this.load.atlas('Dhg1_5_papaya',window.baseUrl+'assets/DH2/gameAssets/A5.png',window.baseUrl+'json/DH2/gameAssets/A5.json');
        this.load.atlas('Dhg1_5_cherry',window.baseUrl+'assets/DH2/gameAssets/A6.png',window.baseUrl+'json/DH2/gameAssets/A6.json');
        this.load.atlas('Dhg1_5_carrot',window.baseUrl+'assets/DH2/gameAssets/A7.png',window.baseUrl+'json/DH2/gameAssets/A7.json');
        this.load.atlas('Dhg1_5_watermelon',window.baseUrl+'assets/DH2/gameAssets/A8.png',window.baseUrl+'json/DH2/gameAssets/A8.json');
        this.load.atlas('Dhg1_5_orange',window.baseUrl+'assets/DH2/gameAssets/A9.png',window.baseUrl+'json/DH2/gameAssets/A9.json');
        this.load.atlas('Dhg1_5_basketball',window.baseUrl+'assets/DH2/gameAssets/A10.png',window.baseUrl+'json/DH2/gameAssets/A10.json');
        this.load.atlas('Dhg1_5_boot',window.baseUrl+'assets/DH2/gameAssets/A11.png',window.baseUrl+'json/DH2/gameAssets/A11.json');
        this.load.atlas('Dhg1_5_flower',window.baseUrl+'assets/DH2/gameAssets/A12.png',window.baseUrl+'json/DH2/gameAssets/A12.json');
        this.load.atlas('Dhg1_5_ballon',window.baseUrl+'assets/DH2/gameAssets/A13.png',window.baseUrl+'json/DH2/gameAssets/A13.json');
        this.load.atlas('Dhg1_5_ball',window.baseUrl+'assets/DH2/gameAssets/A14.png',window.baseUrl+'json/DH2/gameAssets/A14.json');
        
        this.load.atlas('Roman_num',window.baseUrl+'assets/DH2/gameAssets/Nu 12345.png',window.baseUrl+'json/DH2/gameAssets/Nu 12345.json');
        this.load.atlas('Dhg1_5_textbox',window.baseUrl+'assets/DH2/gameAssets/textbox.png',window.baseUrl+'json/DH2/gameAssets/textbox.json');
        this.load.atlas('Dhg1_5_numpad',window.baseUrl+'assets/DH2/gameAssets/calNum.png',window.baseUrl+'json/DH2/gameAssets/calNum.json');
        this.load.atlas('Dhg1_5_plus',window.baseUrl+'assets/DH2/gameAssets/P.png',window.baseUrl+'json/DH2/gameAssets/P.json');
        this.load.atlas('Dhg1_5_minus',window.baseUrl+'assets/DH2/gameAssets/M.png',window.baseUrl+'json/DH2/gameAssets/M.json');
        
        this.load.atlas('Dhg1_5_green_bar',window.baseUrl+'assets/DH2/gameAssets/z1.png',window.baseUrl+'json/DH2/gameAssets/z1.json');
        this.load.atlas('Dhg1_5_red_bar',window.baseUrl+'assets/DH2/gameAssets/z2.png',window.baseUrl+'json/DH2/gameAssets/z2.json');
        this.load.atlas('Dhg1_5_yellow_bar',window.baseUrl+'assets/DH2/gameAssets/z3.png',window.baseUrl+'json/DH2/gameAssets/z3.json');
        this.load.atlas('Dhg1_5_blue_bar',window.baseUrl+'assets/DH2/gameAssets/z4.png',window.baseUrl+'json/DH2/gameAssets/z4.json');
        
        this.load.atlas('Dhg1_5_silver_bar',window.baseUrl+'assets/DH2/gameAssets/s1.png',window.baseUrl+'json/DH2/gameAssets/s1.json');

    }

    },
    
	create:function(game){

    _this.numberIncGreen = 0
_this.numberIncRed = 0
_this.numberIncYellow = 0
_this.numberIncBlue = 0

    _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;


        _this.bg1=null;
_this.starsGroup=0;
_this.no1=0;
        _this.Ono=0;
_this.mainFlag=0;
_this.opt1=null;
_this.opt2=null;
_this.opt3=null;
_this.opt4=null;
        _this.rednum_count=0;
        _this.greennum_count=0;
        _this.bluenum_count=0;
        _this.yellownum_count=0;
_this.no2=0;
_this.count1=0;
_this.count=0;
_this.Sprite=0;
_this.maingroup;
_this.i=0;_this.j=0;_this.k=0;
_this.speaker=0;
_this.tick=0;
_this.numGroup=0;
_this.enterTxt=0;
_this.txtbox=0;

_this.voice1=0;
_this.voice2=0;
_this.voice3=0;
_this.voice4=0;

_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7];
       
       
       // counterText=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'Dhg1_5_bgA');
        _this.TopBar=this.add.sprite(0,0,'Dhg1_5_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(10,7,'Dhg1_5_BackDhg1_5_btn');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
 

        },_this);
      
   _this.timebg=this.add.sprite(305,6,'Dhg1_5_timer');
    _this.timebg.scale.setTo(1.2,1);
        
    _this.timeDisplay = this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fill = '#ADFF2F';
        
        _this.speaker = this.add.sprite(600,6,'Dhg1_5_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
        {
           _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            _this.getVoice();
        },_this);
         _this.generateStarsForTheScene(6);
        
        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  //this.updateTimer();
        }, this);
        _this.timer1.start();
         
       
             this.getQuestion();
        
             
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {

      _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         //_this.sceneCount++;
    
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();


        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.voice1=1;
        _this.voice2=0;
        _this.voice3=0;
        _this.voice4=0;
                
                if(_this.no1<3)
                    {
                     this.gotoFirstQuestion();   
                    }
                else
                    {
                      this.gotoSecondQuestion();  
                    }
        
        //this.gotoFirstQuestion();
        
    },
    addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
           
        if(_this.no1<6)
        {
            _this.count++;
            this.getQuestion();
        }
        else
        {
            console.log("gameEnd");
        }
            }, this);

    },
    
    Roman_num: function()
    {
         _this.green_num1=_this.add.sprite(565,190,'Roman_num'); 
         _this.green_num2=_this.add.sprite(565,230,'Roman_num'); 
         _this.green_num3=_this.add.sprite(565,270,'Roman_num'); 
         _this.green_num4=_this.add.sprite(565,310,'Roman_num'); 
         _this.green_num5=_this.add.sprite(565,350,'Roman_num');
         _this.green_textbox=_this.add.sprite(572,415,'Dhg1_5_textbox');
         _this.green_textbox.name="opt1box";
        _this.green_textbox.inputEnabled=false;
        _this.green_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.green_textbox.name ;
        },this);
         
         _this.red_num1=_this.add.sprite(660,190,'Roman_num'); 
         _this.red_num2=_this.add.sprite(660,230,'Roman_num'); 
         _this.red_num3=_this.add.sprite(660,270,'Roman_num'); 
         _this.red_num4=_this.add.sprite(660,310,'Roman_num'); 
         _this.red_num5=_this.add.sprite(660,350,'Roman_num');
         _this.red_textbox=_this.add.sprite(667,415,'Dhg1_5_textbox');
         _this.red_textbox.name="opt2box";
        _this.red_textbox.inputEnabled=false;
        _this.red_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.red_textbox.name ;
        },this);
         
         _this.yellow_num1=_this.add.sprite(752,190,'Roman_num'); 
         _this.yellow_num2=_this.add.sprite(752,230,'Roman_num'); 
         _this.yellow_num3=_this.add.sprite(752,270,'Roman_num');
         _this.yellow_num4=_this.add.sprite(752,310,'Roman_num'); 
         _this.yellow_num5=_this.add.sprite(752,350,'Roman_num');
         _this.yellow_textbox=_this.add.sprite(759,415,'Dhg1_5_textbox');
        _this.yellow_textbox.name="opt3box";
        _this.yellow_textbox.inputEnabled=false;
        _this.yellow_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.red_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.yellow_textbox.name ;
        },this);
         
         _this.blue_num1=_this.add.sprite(842,190,'Roman_num'); 
         _this.blue_num2=_this.add.sprite(842,230,'Roman_num');
         _this.blue_num3=_this.add.sprite(842,270,'Roman_num'); 
         _this.blue_num4=_this.add.sprite(842,310,'Roman_num'); 
         _this.blue_num5=_this.add.sprite(842,350,'Roman_num');
         _this.blue_textbox=_this.add.sprite(849,415,'Dhg1_5_textbox');
         _this.blue_textbox.name="opt4box";
         _this.blue_textbox.inputEnabled=false;
        _this.blue_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.red_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.blue_textbox.name ;
        },this);
        
        
        
        _this.objectArray = ['Dhg1_5_ballon','Dhg1_5_flower','Dhg1_5_boot','Dhg1_5_basketball','Dhg1_5_orange','Dhg1_5_watermelon','Dhg1_5_carrot','Dhg1_5_cherry','Dhg1_5_papaya','Dhg1_5_triangle'];
        
        _this.frameArray = [0,1,2,3];
        
        _this.counterArray = [75,50,60,70,80,85];
        _this.counterArray = _this.shuffle(_this.counterArray);
        
        _this.randObject = _this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]; 
        //_this.randomNumber = Math.floor(Math.random() * 4);
        //_this.randFrame = _this.checkBar(Math.floor(Math.random() * 4));
        _this.frameArray = _this.shuffle(_this.frameArray);
        _this.randFrame = _this.checkBar(_this.frameArray[0]);
        
        if(_this.randFrame == -1)
            {
                _this.objtimer.stop();
            }
        
        _this.object = _this.add.sprite(250,250,_this.randObject);
        _this.object.frame = _this.randFrame;
        _this.setBar(_this.object.frame);
        
        _this.counter = 0;
        
        _this.objtimer = this.time.create(false);
        _this.objtimer.loop(500, function(){
            
            _this.counter++;
            
                if(_this.object)
                    {
                        _this.object.destroy();
                        _this.object = null;
                    }
            _this.randObject = _this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]; 
            //_this.randomNumber = Math.floor(Math.random() * 4);
            //_this.randFrame = _this.checkBar(Math.floor(Math.random() * 4));
            _this.frameArray = _this.shuffle(_this.frameArray)
            _this.randFrame = _this.checkBar(_this.frameArray[0]);
            if(_this.randFrame == -1 || _this.frameArray.length == 0 || _this.counter == _this.counterArray[0])
            {
                _this.objtimer.stop();
                if(_this.object)
                    {
                        _this.object.destroy();
                        _this.object = null;
                    }
                _this.addNumberPad();
                _this.selectedBox = _this.green_textbox.name ;
                _this.green_textbox.frame=1;
            }
            else{
                _this.object = _this.add.sprite(250,250,_this.randObject);
                _this.object.frame = _this.randFrame;
                _this.setBar(_this.object.frame);
            }
            
            
        }, this);
        _this.objtimer.start();
        
        
    },
    
    Roman_num2: function()
    {
         _this.circle_num1=_this.add.sprite(580,170,'Roman_num'); 
         _this.circle_num1.scale.setTo(0.6); 
         _this.circle_num2=_this.add.sprite(580,200,'Roman_num'); 
         _this.circle_num2.scale.setTo(0.6);
         _this.circle_num3=_this.add.sprite(580,230,'Roman_num'); 
         _this.circle_num3.scale.setTo(0.6); 
         _this.circle_num4=_this.add.sprite(580,260,'Roman_num'); 
         _this.circle_num4.scale.setTo(0.6);
         _this.circle_num5=_this.add.sprite(580,290,'Roman_num');
         _this.circle_num5.scale.setTo(0.6);
         _this.circle_num6=_this.add.sprite(580,320,'Roman_num');
         _this.circle_num6.scale.setTo(0.6);
         _this.circle_num7=_this.add.sprite(580,350,'Roman_num');
         _this.circle_num7.scale.setTo(0.6);
         _this.circle_num8=_this.add.sprite(580,380,'Roman_num');
         _this.circle_num8.scale.setTo(0.6);
         _this.green_textbox=_this.add.sprite(572,415,'Dhg1_5_textbox');
         _this.green_textbox.name="opt1box";
        _this.green_textbox.inputEnabled=false;
        _this.green_textbox.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.green_textbox.name ;
        },this);
         
         _this.triangle_num1=_this.add.sprite(670,170,'Roman_num');
         _this.triangle_num1.scale.setTo(0.6);
         _this.triangle_num2=_this.add.sprite(670,200,'Roman_num');
         _this.triangle_num2.scale.setTo(0.6);
         _this.triangle_num3=_this.add.sprite(670,230,'Roman_num');
         _this.triangle_num3.scale.setTo(0.6);
         _this.triangle_num4=_this.add.sprite(670,260,'Roman_num');
         _this.triangle_num4.scale.setTo(0.6);
         _this.triangle_num5=_this.add.sprite(670,290,'Roman_num');
         _this.triangle_num5.scale.setTo(0.6);
         _this.triangle_num6=_this.add.sprite(670,320,'Roman_num');
         _this.triangle_num6.scale.setTo(0.6);
         _this.triangle_num7=_this.add.sprite(670,350,'Roman_num');
         _this.triangle_num7.scale.setTo(0.6);
         _this.triangle_num8=_this.add.sprite(670,380,'Roman_num');
         _this.triangle_num8.scale.setTo(0.6);
         _this.red_textbox=_this.add.sprite(667,415,'Dhg1_5_textbox');
         _this.red_textbox.name="opt2box";
        _this.red_textbox.inputEnabled=false;
        _this.red_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.red_textbox.name ;
        },this);
         
         _this.oval_num1=_this.add.sprite(762,170,'Roman_num');
         _this.oval_num1.scale.setTo(0.6);
         _this.oval_num2=_this.add.sprite(762,200,'Roman_num');
         _this.oval_num2.scale.setTo(0.6);
         _this.oval_num3=_this.add.sprite(762,230,'Roman_num');
         _this.oval_num3.scale.setTo(0.6);
         _this.oval_num4=_this.add.sprite(762,260,'Roman_num');
         _this.oval_num4.scale.setTo(0.6);
         _this.oval_num5=_this.add.sprite(762,290,'Roman_num');
         _this.oval_num5.scale.setTo(0.6);
         _this.oval_num6=_this.add.sprite(762,320,'Roman_num');
         _this.oval_num6.scale.setTo(0.6);
         _this.oval_num7=_this.add.sprite(762,350,'Roman_num'); 
         _this.oval_num7.scale.setTo(0.6);
         _this.oval_num8=_this.add.sprite(762,380,'Roman_num');
         _this.oval_num8.scale.setTo(0.6);
         _this.yellow_textbox=_this.add.sprite(759,415,'Dhg1_5_textbox');
        _this.yellow_textbox.name="opt3box";
        _this.yellow_textbox.inputEnabled=false;
        _this.yellow_textbox.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.red_textbox.frame=0;
            _this.blue_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.yellow_textbox.name ;
        },this);
         
         _this.square_num1=_this.add.sprite(852,170,'Roman_num'); 
         _this.square_num1.scale.setTo(0.6);
         _this.square_num2=_this.add.sprite(852,200,'Roman_num');
         _this.square_num2.scale.setTo(0.6);
         _this.square_num3=_this.add.sprite(852,230,'Roman_num');
         _this.square_num3.scale.setTo(0.6);
         _this.square_num4=_this.add.sprite(852,260,'Roman_num');
         _this.square_num4.scale.setTo(0.6);
         _this.square_num5=_this.add.sprite(852,290,'Roman_num'); 
         _this.square_num5.scale.setTo(0.6);
         _this.square_num6=_this.add.sprite(852,320,'Roman_num');
         _this.square_num6.scale.setTo(0.6);
         _this.square_num7=_this.add.sprite(852,350,'Roman_num');
         _this.square_num7.scale.setTo(0.6);
         _this.square_num8=_this.add.sprite(852,380,'Roman_num');
         _this.square_num8.scale.setTo(0.6);
         _this.blue_textbox=_this.add.sprite(849,415,'Dhg1_5_textbox');
        _this.blue_textbox.name="opt4box";
         _this.blue_textbox.inputEnabled=false;
        _this.blue_textbox.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_textbox.frame=0;
            _this.yellow_textbox.frame=0;
            _this.red_textbox.frame=0;
            //_this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
          _this.numBox3Pressed =  false;
          _this.numBox4Pressed =  false;
             _this.selectedBox = _this.blue_textbox.name ;
        },this);
        
        _this.objectArray = ['Dhg1_5_triangle','Dhg1_5_circle','Dhg1_5_square','Dhg1_5_oval'];
        /*_this.objectArray2 = ['Dhg1_5_triangle','Dhg1_5_circle','Dhg1_5_square','Dhg1_5_oval'];
        _this.objectArray3 = ['Dhg1_5_triangle','Dhg1_5_circle','Dhg1_5_square','Dhg1_5_oval'];
        _this.objectArray4 = ['Dhg1_5_triangle','Dhg1_5_circle','Dhg1_5_square','Dhg1_5_oval'];
        _this.objectArray5 = ['Dhg1_5_triangle','Dhg1_5_circle','Dhg1_5_square','Dhg1_5_oval'];*/
        
         _this.frameArray = [0,1,2,3];
        /*_this.frameArray2 = [0,1,2,3];
        _this.frameArray3 = [0,1,2,3];
        _this.frameArray4 = [0,1,2,3];
        _this.frameArray5 = [0,1,2,3];*/
        
       _this.counterArray = [25,27,30,20,23,28];
        _this.counterArray = _this.shuffle(_this.counterArray);
        
            _this.randObject = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject2 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject3 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject4 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject5 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.frameArray = _this.shuffle(_this.frameArray);
            _this.randFrame = _this.frameArray[0];
            _this.randFrame2 = _this.frameArray[1];
            _this.randFrame3 = _this.frameArray[2];
            _this.randFrame4 = _this.frameArray[3];
            _this.randFrame5 = _this.frameArray[0];
        
        if(_this.randObject == -1 ||_this.randObject2 == -1 ||_this.randObject3 == -1||_this.randObject4 == -1||_this.randObject5 == -1)
            {
                _this.objtimer.stop();
            }
        
                _this.object1 = _this.add.sprite(250,250,_this.randObject);
                _this.object1.frame = _this.randFrame;
                _this.object2 = _this.add.sprite(250,150,_this.randObject2);
                _this.object2.frame = _this.randFrame2;
                _this.object3 = _this.add.sprite(150,250,_this.randObject3);
                _this.object3.frame = _this.randFrame3;
                _this.object4 = _this.add.sprite(150,150,_this.randObject4);
                _this.object4.frame = _this.randFrame4;
                _this.object5 = _this.add.sprite(250,350,_this.randObject5);
                _this.object5.frame = _this.randFrame5;
                _this.setBar2(_this.randObject);
                _this.setBar2(_this.randObject2);
                _this.setBar2(_this.randObject3);
                _this.setBar2(_this.randObject4);
                _this.setBar2(_this.randObject5);
        
        _this.counter = 0;
        
        _this.objtimer = this.time.create(false);
        _this.objtimer.loop(1000, function(){
            
            _this.counter++;
            
            
                if(_this.object1)
                    {
                        _this.object1.destroy();
                        _this.object1 = null;
                    }
            if(_this.object2)
                    {
                        _this.object2.destroy();
                        _this.object2 = null;
                    }
            if(_this.object3)
                    {
                        _this.object3.destroy();
                        _this.object3 = null;
                    }
            if(_this.object4)
                    {
                        _this.object4.destroy();
                        _this.object4 = null;
                    }
            if(_this.object5)
                    {
                        _this.object5.destroy();
                        _this.object5 = null;
                    }
            
            _this.randObject = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject2 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject3 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject4 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.randObject5 = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]); 
            _this.frameArray = _this.shuffle(_this.frameArray);
            _this.randFrame = _this.frameArray[0];
            _this.randFrame2 = _this.frameArray[1];
            _this.randFrame3 = _this.frameArray[2];
            _this.randFrame4 = _this.frameArray[3];
            _this.randFrame5 = _this.frameArray[0];
            if(_this.randObject == -1 ||_this.randObject2 == -1 ||_this.randObject3 == -1||_this.randObject4 == -1||_this.randObject5 == -1 || _this.objectArray.length == 0 || _this.counter == _this.counterArray[0])
            {
                _this.objtimer.stop();
                if(_this.object1)
                    {
                        _this.object1.destroy();
                        _this.object1 = null;
                    }
                if(_this.object2)
                    {
                        _this.object2.destroy();
                        _this.object2 = null;
                    }
                if(_this.object3)
                    {
                        _this.object3.destroy();
                        _this.object3 = null;
                    }
                if(_this.object4)
                    {
                        _this.object4.destroy();
                        _this.object4 = null;
                    }
                if(_this.object5)
                    {
                        _this.object5.destroy();
                        _this.object5 = null;
                    }
                _this.addNumberPad();
                _this.selectedBox = _this.green_textbox.name ;
                _this.green_textbox.frame=1;
            }
            else{
                _this.object1 = _this.add.sprite(250,250,_this.randObject);
                _this.object1.frame = _this.randFrame;
                _this.object2 = _this.add.sprite(250,150,_this.randObject2);
                _this.object2.frame = _this.randFrame2;
                _this.object3 = _this.add.sprite(150,250,_this.randObject3);
                _this.object3.frame = _this.randFrame3;
                _this.object4 = _this.add.sprite(150,150,_this.randObject4);
                _this.object4.frame = _this.randFrame4;
                _this.object5 = _this.add.sprite(250,350,_this.randObject5);
                _this.object5.frame = _this.randFrame5;
                _this.setBar2(_this.randObject);
                _this.setBar2(_this.randObject2);
                _this.setBar2(_this.randObject3);
                _this.setBar2(_this.randObject4);
                _this.setBar2(_this.randObject5);
            }
            
            
        }, this);
        _this.objtimer.start();
    },
    
    checkBar:function(frame)
    {
        _this.temp = -1;
        
        if(_this.red_num5.frame!=5 || _this.blue_num5.frame != 5 || _this.green_num5.frame !=5 || _this.yellow_num5.frame != 5)
        {
            if(frame == 0)
                {
                    if(_this.red_num5.frame >= 5)
                    {
                       //frame = Math.floor(Math.random() * 4);
                        //frame = _this.checkBar(_this.randFrame);
                        _this.frameArray.splice(0, 1);
                        _this.frameArray = _this.shuffle(_this.frameArray)
                        frame = _this.checkBar(_this.frameArray[0]);
                    }
                    else{
                        return frame;
                    }
                }
            else if(frame == 1)
                {
                    if(_this.yellow_num5.frame >= 5)
                        {
                            //frame = Math.floor(Math.random() * 4);
                            //frame = _this.checkBar(_this.randFrame);
                            _this.frameArray.splice(0, 1);
                            _this.frameArray = _this.shuffle(_this.frameArray)
                            frame = _this.checkBar(_this.frameArray[0]);
                        }
                    else{
                        return frame;
                    }
                }
            else if(frame == 2)
                {
                    if(_this.blue_num5.frame >= 5)
                        {
                            //frame = Math.floor(Math.random() * 4);
                            //frame = _this.checkBar(_this.randFrame);
                            
                            _this.frameArray.splice(0, 1);
                            _this.frameArray = _this.shuffle(_this.frameArray)
                            frame = _this.checkBar(_this.frameArray[0]);
                        }
                    else{
                        return frame;
                    }
                }
            else
            {
                if(_this.green_num5.frame >= 5)
                        {
                            //frame = Math.floor(Math.random() * 4);
                            //frame = _this.checkBar(_this.randFrame);
                            
                            _this.frameArray.splice(0, 1);
                            _this.frameArray = _this.shuffle(_this.frameArray)
                            frame = _this.checkBar(_this.frameArray[0]);
                        }
                else{
                        return frame;
                    }
            }
        }
        else{
            return _this.temp;
        }
    },
    
    checkBar2:function(object)
    {
        _this.temp = -1;
        
        if((_this.triangle_num8.frame!=5 || _this.square_num8.frame != 5 || _this.circle_num8.frame !=5 || _this.oval_num8.frame != 5 )&& _this.objectArray.length > 0)
        {
            if(_this.triangle_num8.frame >= 5 && object == "Dhg1_5_triangle")
            {
                for( var i = 0; i < _this.objectArray.length; i++){ 
                   if ( _this.objectArray[i] === "Dhg1_5_triangle") {
                     _this.objectArray.splice(i, 1); 
                     i--;
                   }
                }
                //_this.objectArray.splice(0, 1);
                object = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]);
                        
            }
            else if(_this.oval_num8.frame >= 5 && object == "Dhg1_5_oval")
            {
                for( var i = 0; i < _this.objectArray.length; i++){ 
                   if ( _this.objectArray[i] === "Dhg1_5_oval") {
                     _this.objectArray.splice(i, 1); 
                     i--;
                   }
                }
                //_this.objectArray.splice(3, 1);
                object = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]);
                        
            }
            else if(_this.square_num8.frame >= 5 && object == "Dhg1_5_square")
            {
                for( var i = 0; i < _this.objectArray.length; i++){ 
                   if ( _this.objectArray[i] === "Dhg1_5_square") {
                     _this.objectArray.splice(i, 1); 
                     i--;
                   }
                }
                //_this.objectArray.splice(2, 1);
                object = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]);
                        
            }
            else if(_this.circle_num8.frame >= 5 && object == "Dhg1_5_circle")
            {
                for( var i = 0; i < _this.objectArray.length; i++){ 
                   if ( _this.objectArray[i] === "Dhg1_5_circle") {
                     _this.objectArray.splice(i, 1); 
                     i--;
                   }
                }
                //_this.objectArray.splice(1, 1);
                object = _this.checkBar2(_this.objectArray[Math.floor(Math.random() * _this.objectArray.length)]);
                        
            }
            else{
                return object;
            }
        }
        else{
            return _this.temp;
        }
    },
    
    setBar:function(frame)
    {
        console.log("rednum "+_this.greennum_count+":"+_this.rednum_count+":"+_this.yellownum_count+":"+_this.bluenum_count);
        if(frame == 0)
            {
                if(_this.red_num1.frame != 5)
                    {
                        _this.red_num1.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.red_num2.frame != 5)
                    {
                        _this.red_num2.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.red_num3.frame != 5)
                    {
                        _this.red_num3.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.red_num4.frame != 5)
                    {
                        _this.red_num4.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.red_num5.frame != 5)
                    {
                        _this.red_num5.frame += 1;
                        _this.rednum_count++;
                    }
            }
        else if(frame == 1)
            {
                if(_this.yellow_num1.frame != 5)
                    {
                        _this.yellow_num1.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.yellow_num2.frame != 5)
                    {
                        _this.yellow_num2.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.yellow_num3.frame != 5)
                    {
                        _this.yellow_num3.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.yellow_num4.frame != 5)
                    {
                        _this.yellow_num4.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.yellow_num5.frame != 5)
                    {
                        _this.yellow_num5.frame += 1;
                        _this.yellownum_count++;
                    }
            }
        else if(frame == 2)
            {
                if(_this.blue_num1.frame != 5)
                    {
                        _this.blue_num1.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.blue_num2.frame != 5)
                    {
                        _this.blue_num2.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.blue_num3.frame != 5)
                    {
                        _this.blue_num3.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.blue_num4.frame != 5)
                    {
                        _this.blue_num4.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.blue_num5.frame != 5)
                    {
                        _this.blue_num5.frame += 1;
                        _this.bluenum_count++;
                    }
            }
        else
        {
            if(_this.green_num1.frame != 5)
                    {
                        _this.green_num1.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.green_num2.frame != 5)
                    {
                        _this.green_num2.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.green_num3.frame != 5)
                    {
                        _this.green_num3.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.green_num4.frame != 5)
                    {
                        _this.green_num4.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.green_num5.frame != 5)
                    {
                        _this.green_num5.frame += 1;
                        _this.greennum_count++;
                    }
        }
    },
    
    setBar2:function(frame)
    {
        console.log("rednum "+_this.greennum_count+":"+_this.rednum_count+":"+_this.yellownum_count+":"+_this.bluenum_count);
        if(frame == 'Dhg1_5_triangle')
            {
                if(_this.triangle_num1.frame != 5)
                    {
                        _this.triangle_num1.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num2.frame != 5)
                    {
                        _this.triangle_num2.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num3.frame != 5)
                    {
                        _this.triangle_num3.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num4.frame != 5)
                    {
                        _this.triangle_num4.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num5.frame != 5)
                    {
                        _this.triangle_num5.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num6.frame != 5)
                    {
                        _this.triangle_num6.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num7.frame != 5)
                    {
                        _this.triangle_num7.frame += 1;
                        _this.rednum_count++;
                    }
                else if(_this.triangle_num8.frame != 5)
                    {
                        _this.triangle_num8.frame += 1;
                        _this.rednum_count++;
                    }
            }
        else if(frame == 'Dhg1_5_oval')
            {
                if(_this.oval_num1.frame != 5)
                    {
                        _this.oval_num1.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num2.frame != 5)
                    {
                        _this.oval_num2.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num3.frame != 5)
                    {
                        _this.oval_num3.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num4.frame != 5)
                    {
                        _this.oval_num4.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num5.frame != 5)
                    {
                        _this.oval_num5.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num6.frame != 5)
                    {
                        _this.oval_num6.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num7.frame != 5)
                    {
                        _this.oval_num7.frame += 1;
                        _this.yellownum_count++;
                    }
                else if(_this.oval_num8.frame != 5)
                    {
                        _this.oval_num8.frame += 1;
                        _this.yellownum_count++;
                    }
            }
        else if(frame == 'Dhg1_5_square')
            {
                if(_this.square_num1.frame != 5)
                    {
                        _this.square_num1.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num2.frame != 5)
                    {
                        _this.square_num2.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num3.frame != 5)
                    {
                        _this.square_num3.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num4.frame != 5)
                    {
                        _this.square_num4.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num5.frame != 5)
                    {
                        _this.square_num5.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num6.frame != 5)
                    {
                        _this.square_num6.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num7.frame != 5)
                    {
                        _this.square_num7.frame += 1;
                        _this.bluenum_count++;
                    }
                else if(_this.square_num8.frame != 5)
                    {
                        _this.square_num8.frame += 1;
                        _this.bluenum_count++;
                    }
            }
        else
        {
            if(_this.circle_num1.frame != 5)
                    {
                        _this.circle_num1.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.circle_num2.frame != 5)
                    {
                        _this.circle_num2.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.circle_num3.frame != 5)
                    {
                        _this.circle_num3.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.circle_num4.frame != 5)
                    {
                        _this.circle_num4.frame += 1;
                        _this.greennum_count++;
                    }
                else if(_this.circle_num5.frame != 5)
                    {
                        _this.circle_num5.frame += 1;
                        _this.greennum_count++;
                    }
            else if(_this.circle_num6.frame != 5)
                    {
                        _this.circle_num6.frame += 1;
                        _this.greennum_count++;
                    }
            else if(_this.circle_num7.frame != 5)
                    {
                        _this.circle_num7.frame += 1;
                        _this.greennum_count++;
                    }
            else if(_this.circle_num8.frame != 5)
                    {
                        _this.circle_num8.frame += 1;
                        _this.greennum_count++;
                    }
        }
    },
    
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
          _this.Question =1;
         //_this.no1++;
         console.log("one");
         _this.box_group=_this.add.group();
         _this.box1=_this.add.sprite(550,100,'Dhg1_5_Box1');
         _this.box1.scale.setTo(0.9);
         _this.Roman_num();
         _this.box_group.add(_this.box1);
         _this.box_group.add(_this.green_num1);
         _this.box_group.add(_this.green_num2);
         _this.box_group.add(_this.green_num3);
         _this.box_group.add(_this.green_num4);
         _this.box_group.add(_this.green_num5);
         _this.box_group.add(_this.red_num1);
         _this.box_group.add(_this.red_num2);
         _this.box_group.add(_this.red_num3);
         _this.box_group.add(_this.red_num4);
         _this.box_group.add(_this.red_num5);
         _this.box_group.add(_this.yellow_num1);
         _this.box_group.add(_this.yellow_num2);
         _this.box_group.add(_this.yellow_num3);
         _this.box_group.add(_this.yellow_num4);
         _this.box_group.add(_this.yellow_num5);
         _this.box_group.add(_this.blue_num1);
         _this.box_group.add(_this.blue_num2);
         _this.box_group.add(_this.blue_num3);
         _this.box_group.add(_this.blue_num4);
         _this.box_group.add(_this.blue_num5);
         _this.box_group.add(_this.green_textbox);
         _this.box_group.add(_this.red_textbox);
         _this.box_group.add(_this.yellow_textbox);
         _this.box_group.add(_this.blue_textbox);
         _this.box_group.x=-50;
        //_this.bar_chart();
    },
   /*******************************secondquestionwheel*******************/
    gotoSecondQuestion:function(){
          _this.Question =2;
         //_this.no1++;
         console.log("one");
         _this.box_group=_this.add.group();
         _this.box1=_this.add.sprite(550,100,'Dhg1_5_Box3');
         _this.box1.scale.setTo(0.9);
         _this.Roman_num2();
         _this.box_group.add(_this.box1);
        
         _this.box_group.add(_this.circle_num1);
         _this.box_group.add(_this.circle_num2);
         _this.box_group.add(_this.circle_num3);
         _this.box_group.add(_this.circle_num4);
         _this.box_group.add(_this.circle_num5);
         _this.box_group.add(_this.circle_num6);
         _this.box_group.add(_this.circle_num7);
         _this.box_group.add(_this.circle_num8);
         _this.box_group.add(_this.triangle_num1);
         _this.box_group.add(_this.triangle_num2);
         _this.box_group.add(_this.triangle_num3);
         _this.box_group.add(_this.triangle_num4);
         _this.box_group.add(_this.triangle_num5);
         _this.box_group.add(_this.triangle_num6);
         _this.box_group.add(_this.triangle_num7);
         _this.box_group.add(_this.triangle_num8);
         _this.box_group.add(_this.oval_num1);
         _this.box_group.add(_this.oval_num2);
         _this.box_group.add(_this.oval_num3);
         _this.box_group.add(_this.oval_num4);
         _this.box_group.add(_this.oval_num5);
         _this.box_group.add(_this.oval_num6);
         _this.box_group.add(_this.oval_num7);
         _this.box_group.add(_this.oval_num8);
         _this.box_group.add(_this.square_num1);
         _this.box_group.add(_this.square_num2);
         _this.box_group.add(_this.square_num3);
         _this.box_group.add(_this.square_num4);
         _this.box_group.add(_this.square_num5);
         _this.box_group.add(_this.square_num6);
         _this.box_group.add(_this.square_num7);
         _this.box_group.add(_this.square_num8);
         _this.box_group.add(_this.green_textbox);
         _this.box_group.add(_this.red_textbox);
         _this.box_group.add(_this.yellow_textbox);
         _this.box_group.add(_this.blue_textbox);
         _this.box_group.x=-50;
       // _this.bar_chart2();
        
    },
    
    shuffle: function(array) {
      _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== _this.currentIndex) {
            
        // Pick a remaining element...
        _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
        _this.currentIndex -= 1;

        // And swap it with the current element.
        _this.temporaryValue = array[_this.currentIndex];
        array[_this.currentIndex] = array[_this.randomIndex];
        array[_this.randomIndex] = _this.temporaryValue;
  }

  return array;
},
    
    addNumberPad:function(){
        //_this.numBox1Pressed=true;
        _this.grpnum=new Array();
       _this.blue_textbox.inputEnabled=true;
       _this.yellow_textbox.inputEnabled=true;
       _this.red_textbox.inputEnabled=true;
       _this.green_textbox.inputEnabled=true;
       _this.blue_textbox.frame=0;
       _this.yellow_textbox.frame=0;
       _this.red_textbox.frame=0;
       _this.green_textbox.frame=0;
      
        _this.numGroup = this.add.group();
         _this.footer = this.add.sprite(0,475,'Dhg1_5_footer');
        _this.numGroup.add(_this.footer);
        _this.numGroup.visible=true;
        var x = 80;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'Dhg1_5_numpad'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
             
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }
      
        _this.counterText1 = this.add.text(25,25, _this.selectedAns1="");
        _this.counterText1.anchor.setTo(0.5);
        _this.counterText1.align = 'center';
        _this.counterText1.font = 'myfont';
        _this.counterText1.fontWeight = 'Normal';
        _this.counterText1.fontSize = 30;
        _this.counterText1.fill = '#65B4C3';
        _this.counterText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.green_textbox.addChild(_this.counterText1);
        
        _this.counterText2 = this.add.text(25,25, _this.selectedAns2="");
        _this.counterText2.anchor.setTo(0.5);
        _this.counterText2.align = 'center';
        _this.counterText2.font = 'myfont';
        _this.counterText2.fontWeight = 'Normal';
        _this.counterText2.fontSize = 30;
        _this.counterText2.fill = '#65B4C3';
        _this.counterText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.red_textbox.addChild(_this.counterText2);
    
        _this.counterText3 = this.add.text(25,25, _this.selectedAns3="");
        _this.counterText3.anchor.setTo(0.5);
        _this.counterText3.align = 'center';
        _this.counterText3.font = 'myfont';
        _this.counterText3.fontWeight = 'Normal';
        _this.counterText3.fontSize = 30;
        _this.counterText3.fill = '#65B4C3';
        _this.counterText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.yellow_textbox.addChild(_this.counterText3);
        
        _this.counterText4 = this.add.text(25,25, _this.selectedAns4="");
        _this.counterText4.anchor.setTo(0.5);
        _this.counterText4.align = 'center';
        _this.counterText4.font = 'myfont';
        _this.counterText4.fontWeight = 'Normal';
        _this.counterText4.fontSize = 30;
        _this.counterText4.fill = '#65B4C3';
        _this.counterText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.blue_textbox.addChild(_this.counterText4);
        _this.wrongbtn = _this.numGroup.create(x+30,510,'wrongDhg1_5_btn');
        _this.wrongbtn.anchor.setTo(0.5);
       _this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.name = "wrongbtn";

        _this.rightbtn =_this.numGroup.create(x+100,510,'rightDhg1_5_btn');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.5,0.5);
        _this.rightbtn.name = "rightbtn";
       // _this.numGroup.add(_this.box);
        _this.numGroup.y  = 100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
       this.enablebuttons2(_this.greennum_count,_this.rednum_count,_this.yellownum_count,_this.bluenum_count);
    },
    numClicked:function(target){
        _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
        if(_this.selectedBox=="opt1box")
        {
            console.log("option1"+_this.selectedAns1);
            if(_this.selectedAns1.length<2)
            {
                console.log("in thirddd");
                _this.selectedAns1+= target.name;
                console.log("third one");
                _this.counterText1.setText(_this.selectedAns1);
                if(_this.selectedAns1.length==2)
                    {
                       _this.selectedBox = _this.red_textbox.name ;
                        _this.red_textbox.frame=1; 
                        _this.green_textbox.frame=0; 
                        _this.yellow_textbox.frame=0; 
                        _this.blue_textbox.frame=0; 
                    }
                //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);   
            }
        } 
        else if(_this.selectedBox=="opt2box")
            {
                if(_this.selectedAns2.length<2)
                    {
                        _this.selectedAns2+= target.name;
                _this.counterText2.setText(_this.selectedAns2);
                        if(_this.selectedAns2.length==2)
                    {
                       _this.selectedBox = _this.yellow_textbox.name ;
                        _this.red_textbox.frame=0; 
                        _this.green_textbox.frame=0; 
                        _this.yellow_textbox.frame=1; 
                        _this.blue_textbox.frame=0; 
                    }
                    }
            }
        else if(_this.selectedBox=="opt3box")
            {
                if(_this.selectedAns3.length<2)
                    {
                        _this.selectedAns3+= target.name;
                _this.counterText3.setText(_this.selectedAns3);
                        if(_this.selectedAns3.length==2)
                    {
                       _this.selectedBox = _this.blue_textbox.name ;
                        _this.red_textbox.frame=0; 
                        _this.green_textbox.frame=0; 
                        _this.yellow_textbox.frame=0; 
                        _this.blue_textbox.frame=1; 
                    }
                    }
            }
        else if(_this.selectedBox=="opt4box")
            {
                if(_this.selectedAns4.length<2)
                    {
                        _this.selectedAns4+= target.name;
                _this.counterText4.setText(_this.selectedAns4);
                    }
            }
        
    },
    
    enablebuttons2:function(rightAns1,rightAns2,rightAns3,rightAns4){
        
        console.log("opt1 value==="+rightAns1);
        console.log("opt2 value==="+rightAns2);
        console.log("opt3 value==="+rightAns3);
        console.log("opt4 value==="+rightAns4);
            
        for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
        //wrong/eraser button clicked action******************
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(function(){
            console.log("erase"+_this.boxclick);
           _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.selectedBox=="opt1box"||_this.numBox1Pressed==true)
            {
                _this.selectedAns1="";
                _this.counterText1.setText("");
            }
            if(_this.selectedBox=="opt2box"||_this.numBox2Pressed==true)
            {
                _this.selectedAns2="";
                _this.counterText2.setText("");
            }
            if(_this.selectedBox=="opt3box"||_this.numBox3Pressed==true)
            {
                _this.selectedAns3="";
                _this.counterText3.setText("");
            }
            if(_this.selectedBox=="opt4box"||_this.numBox4Pressed==true)
            {
                _this.selectedAns4="";
                _this.counterText4.setText("");
            }
            
        },this);
        _this.wrongbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this)
        
        //right button clicked action******************
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
         
            if((_this.selectedAns1==rightAns1||_this.selectedAns1=="0"+rightAns1)&&(_this.selectedAns2==rightAns2||_this.selectedAns2=="0"+rightAns2)&&(_this.selectedAns3==rightAns3||_this.selectedAns3=="0"+rightAns3)&&(_this.selectedAns4==rightAns4||_this.selectedAns4=="0"+rightAns4))
            {
               _this.blue_textbox.frame=1;
               _this.yellow_textbox.frame=1;
               _this.red_textbox.frame=1;
               _this.green_textbox.frame=1;
                
                _this.Maintween = _this.add.tween(_this.numGroup);
                _this.Maintween.to({ y:100}, 0, 'Linear', true, 0);
               
                _this.tween=_this.add.tween(_this.box_group);
                _this.tween.to({ x:-450},2000, 'Linear', true, 0);
                _this.tween.onComplete.add(function(){
                    _this.voice1=0;
                    _this.voice2=1;
                    _this.voice3=0;
                    _this.voice4=0;
                    
                    if(_this.Question==1)
                        {
                          _this.bar_chart();  
                        }
                    else
                        {
                          _this.bar_chart2();   
                        }
                     
                },this);
                
            }
            else 
            {
                 
                _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                  
                _this.flag;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                _this.selectedBox=null;
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.box_group);
                _this.blue_textbox.frame=0;
               _this.yellow_textbox.frame=0;
               _this.red_textbox.frame=0;
                _this.selectedBox = _this.green_textbox.name ;
                _this.green_textbox.frame=1;
                //_this.shake2.shake(10,_this.opt1);
            }
             //  _this.numGroup.add(_this.box);
        },this);
       _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
       
    },
    
     addIncTextToGreenBox:function()
    {
       
        _this.numberIncGreen++;
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+ _this.numberIncGreen,_this.displayNumb1);
        if(_this.displayNumb1 == null)
            {
                 //alert();
                _this.displayNumb1 = this.add.text(585,400,_this.numberIncGreen);
                _this.displayNumb1.anchor.setTo(0.5);
                _this.displayNumb1.align = 'center';
                _this.displayNumb1.font = 'myfont';
                _this.displayNumb1.fontSize = 20;
                _this.displayNumb1.fontWeight = 'Normal';
                _this.displayNumb1.fill = '#ffffff'; 
                _this.box2_group.add(_this.displayNumb1);
            }
        if(_this.no1<3)
            {
                _this.displayNumb1.y = _this.displayNumb1.y-7.5;
            }
        else{
                _this.displayNumb1.y = _this.displayNumb1.y-7;
            }
        _this.displayNumb1.setText(_this.numberIncGreen);
    },
    addDecTextToGreenBox:function()
    {
        _this.numberIncGreen--;
        if(_this.numberIncGreen <=0)
            {
                _this.numberIncGreen = 0;
                if(_this.displayNumb1)
                  _this.displayNumb1.y = 400;
            }
        if(_this.displayNumb1 == null)
            {
                _this.displayNumb1 = this.add.text(585,400,_this.numberIncGreen);
                _this.displayNumb1.anchor.setTo(0.5);
                _this.displayNumb1.align = 'center';
                _this.displayNumb1.font = 'myfont';
                _this.displayNumb1.fontSize = 20;
                _this.displayNumb1.fontWeight = 'Normal';
                _this.displayNumb1.fill = '#ffffff'; 
                _this.box2_group.add(_this.displayNumb1);
            }
        if(_this.no1<3)
            {
                if(_this.numberIncGreen != 0)
                    _this.displayNumb1.y = _this.displayNumb1.y+7.3;
            }
        else
            {
                _this.displayNumb1.y = _this.displayNumb1.y+7;
            }
        _this.displayNumb1.setText(_this.numberIncGreen);
        if(_this.numberIncGreen == 0)
            _this.displayNumb1.setText('');
        
         if(_this.numberIncGreen <=0)
            {
                _this.numberIncGreen = 0;
                if(_this.displayNumb1)
                  _this.displayNumb1.y = 400;
            }
    }, 
    addIncTextToRedBox:function()
    {
        _this.numberIncRed++;
        
        if(_this.displayNumb2 == null)
            {
                _this.displayNumb2 = this.add.text(640,400,_this.numberIncRed);
                _this.displayNumb2.anchor.setTo(0.5);
                _this.displayNumb2.align = 'center';
                _this.displayNumb2.font = 'myfont';
                _this.displayNumb2.fontSize = 20;
                _this.displayNumb2.fontWeight = 'Normal';
                _this.displayNumb2.fill = '#ffffff';
                _this.box2_group.add(_this.displayNumb2);
            }
        if(_this.no1<3)
            {
                _this.displayNumb2.y = _this.displayNumb2.y-7.5;
            }
        else{
                _this.displayNumb2.y = _this.displayNumb2.y-7;
            }
        _this.displayNumb2.setText(_this.numberIncRed);
    },
    addDecTextToRedBox:function()
    {
        _this.numberIncRed--;
        if(_this.numberIncRed <=0)
            {
                _this.numberIncRed = 0;
            }
        if(_this.displayNumb2 == null)
            {
                _this.displayNumb2 = this.add.text(640,400,_this.numberIncRed);
                _this.displayNumb2.anchor.setTo(0.5);
                _this.displayNumb2.align = 'center';
                _this.displayNumb2.font = 'myfont';
                _this.displayNumb2.fontSize = 20;
                _this.displayNumb2.fontWeight = 'Normal';
                _this.displayNumb2.fill = '#ffffff';
                _this.box2_group.add(_this.displayNumb2);
            }
        if(_this.no1<3)
            {
                if(_this.numberIncRed != 0)
                    _this.displayNumb2.y = _this.displayNumb2.y+7.3;
            }
        else{
                _this.displayNumb2.y = _this.displayNumb2.y+7;
            }
        _this.displayNumb2.setText(_this.numberIncRed);
        if(_this.numberIncRed == 0)
            _this.displayNumb2.setText('');
        if(_this.numberIncRed <=0)
            {
                if(_this.displayNumb2)
                 _this.displayNumb2.y = 400;
            }
    },
    addIncTextToYellowBox:function()
    {
        _this.numberIncYellow++;
        
        if(_this.displayNumb3 == null)
            {
                _this.displayNumb3 = this.add.text(695,400,_this.numberIncYellow);
                _this.displayNumb3.anchor.setTo(0.5);
                _this.displayNumb3.align = 'center';
                _this.displayNumb3.font = 'myfont';
                _this.displayNumb3.fontSize = 20;
                _this.displayNumb3.fontWeight = 'Normal';
                _this.displayNumb3.fill = '#ffffff'; 
                _this.box2_group.add(_this.displayNumb3);
            }
        if(_this.no1<3)
            {
                _this.displayNumb3.y = _this.displayNumb3.y-7.5;
            }
        else
            {
                _this.displayNumb3.y = _this.displayNumb3.y-7;
            }
        _this.displayNumb3.setText(_this.numberIncYellow);
    },
    addDecTextToYellowBox:function()
    {
        _this.numberIncYellow--;
        if(_this.numberIncYellow <=0)
            {
                _this.numberIncYellow = 0;
            }
        if(_this.displayNumb3 == null)
            {
                _this.displayNumb3 = this.add.text(695,400,_this.numberIncYellow);
                _this.displayNumb3.anchor.setTo(0.5);
                _this.displayNumb3.align = 'center';
                _this.displayNumb3.font = 'myfont';
                _this.displayNumb3.fontSize = 20;
                _this.displayNumb3.fontWeight = 'Normal';
                _this.displayNumb3.fill = '#ffffff';
                _this.box2_group.add(_this.displayNumb3);
            }
        if(_this.no1<3)
            {
                if(_this.numberIncYellow != 0)
                    _this.displayNumb3.y = _this.displayNumb3.y+7.3;
            }
        else
            {
                _this.displayNumb3.y = _this.displayNumb3.y+7;
            }
        _this.displayNumb3.setText(_this.numberIncYellow);
        if(_this.numberIncYellow == 0)
            _this.displayNumb3.setText('');
         if(_this.numberIncYellow <=0)
            {
                if(_this.displayNumb3)
                    _this.displayNumb3.y = 400;
            }
    },
    addIncTextToBlueBox:function()
    {
        _this.numberIncBlue++;
        
        if(_this.displayNumb4 == null)
            {
                _this.displayNumb4 = this.add.text(750,400,_this.numberIncBlue);
                _this.displayNumb4.anchor.setTo(0.5);
                _this.displayNumb4.align = 'center';
                _this.displayNumb4.font = 'myfont';
                _this.displayNumb4.fontSize = 20;
                _this.displayNumb4.fontWeight = 'Normal';
                _this.displayNumb4.fill = '#ffffff';
                _this.box2_group.add(_this.displayNumb4);
            }
         if(_this.no1<3)
            {
                _this.displayNumb4.y = _this.displayNumb4.y-7.5;
            }
        else
            {
                _this.displayNumb4.y = _this.displayNumb4.y-7;
            }
        _this.displayNumb4.setText(_this.numberIncBlue);
    },
    addDecTextToBlueBox:function()
    {
        _this.numberIncBlue--;
        if(_this.numberIncBlue <=0)
            {
                _this.numberIncBlue = 0;
            }
        if(_this.displayNumb4 == null)
            {
                _this.displayNumb4 = this.add.text(750,400,_this.numberIncBlue);
                _this.displayNumb4.anchor.setTo(0.5);
                _this.displayNumb4.align = 'center';
                _this.displayNumb4.font = 'myfont';
                _this.displayNumb4.fontSize = 20;
                _this.displayNumb4.fontWeight = 'Normal';
                _this.displayNumb4.fill = '#ffffff';
                _this.box2_group.add(_this.displayNumb4);
            }
        if(_this.no1<3)
            {
                if(_this.numberIncBlue != 0)
                    _this.displayNumb4.y = _this.displayNumb4.y+7.3;
            }
        else{
                _this.displayNumb4.y = _this.displayNumb4.y+7;
         }
        _this.displayNumb4.setText(_this.numberIncBlue);
        if(_this.numberIncBlue == 0)
            _this.displayNumb4.setText('');
        if(_this.numberIncBlue <=0)
            {
                if(_this.displayNumb4)
                    _this.displayNumb4.y = 400;
            }
    },
    bar_chart:function()
    {  
        _this.box2_group=_this.add.group();
        _this.box2=_this.add.sprite(500,100,'Dhg1_5_Box2');
        _this.box2.scale.setTo(0.9);
        
        _this.checkbtn =_this.add.sprite(870,360,'rightDhg1_5_btn');
        _this.checkbtn.anchor.setTo(0.5);
        _this.checkbtn.scale.setTo(0.5,0.5);
        _this.checkbtn.inputEnabled=true;
        _this.checkbtn.events.onInputDown.add(_this.checkAns,this);
        
        _this.green_minus=_this.add.sprite(559,431,'Dhg1_5_minus');
        _this.green_minus.inputEnabled=true;
        _this.green_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.green_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_plus.inputEnabled=true;
            _this.green_bar.frame-=1;
            if(_this.green_bar.frame<=0)
                {
                    _this.green_bar.frame=0;
                }
            _this.addDecTextToGreenBox();
        },this);
        
        _this.green_plus=_this.add.sprite(586,423,'Dhg1_5_plus');
        _this.green_plus.inputEnabled=true;
        _this.green_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.green_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_bar.frame+=1;
            if(_this.green_bar.frame>24)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                  
                }
            if(_this.green_bar.frame<26)
                {
                    _this.addIncTextToGreenBox();
                }
        },this);
        
        _this.red_minus=_this.add.sprite(616,431,'Dhg1_5_minus');
        _this.red_minus.inputEnabled=true;
        _this.red_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.red_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_plus.inputEnabled=true;
            _this.red_bar.frame-=1;
            if(_this.red_bar.frame<=0)
                {
                    _this.red_bar.frame=0;
                }
            _this.addDecTextToRedBox();
        },this);
        
        _this.red_plus=_this.add.sprite(643,423,'Dhg1_5_plus');
        _this.red_plus.inputEnabled=true;
        _this.red_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.red_plus.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_bar.frame+=1;
            if(_this.red_bar.frame>24)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.red_bar.frame<26)
                {
                    _this.addIncTextToRedBox();
                }
        },this);
        
        _this.yellow_minus=_this.add.sprite(672,431,'Dhg1_5_minus');
        _this.yellow_minus.inputEnabled=true;
        _this.yellow_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.yellow_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.yellow_plus.inputEnabled=true;
            _this.yellow_bar.frame-=1;
            if(_this.yellow_bar.frame<=0)
                {
                    _this.yellow_bar.frame=0;
                }
            _this.addDecTextToYellowBox();
        },this);
        
        _this.yellow_plus=_this.add.sprite(699,423,'Dhg1_5_plus');
        _this.yellow_plus.inputEnabled=true;
        _this.yellow_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.yellow_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.yellow_bar.frame+=1;
            if(_this.yellow_bar.frame>24)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.yellow_bar.frame<26)
                {
                    _this.addIncTextToYellowBox();
                }
        },this);
        
        _this.blue_minus=_this.add.sprite(728,431,'Dhg1_5_minus');
        _this.blue_minus.inputEnabled=true;
        _this.blue_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.blue_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.blue_plus.inputEnabled=true;
            _this.blue_bar.frame-=1;
            if(_this.blue_bar.frame<=0)
                {
                    _this.blue_bar.frame=0;
                }
            _this.addDecTextToBlueBox();
        },this);
        
        _this.blue_plus=_this.add.sprite(755,423,'Dhg1_5_plus');
        _this.blue_plus.inputEnabled=true;
        _this.blue_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.blue_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.blue_bar.frame+=1;
            if(_this.blue_bar.frame>24)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.blue_bar.frame<26)
                {
                    _this.addIncTextToBlueBox();
                }
        },this);
        
        _this.green_bar=_this.add.sprite(565,223,'Dhg1_5_green_bar');
        _this.green_bar.frame=0;
        _this.green_bar.scale.setTo(0.9);
        _this.red_bar=_this.add.sprite(620,223,'Dhg1_5_red_bar');
        _this.red_bar.frame=0;
        _this.red_bar.scale.setTo(0.9);
        _this.yellow_bar=_this.add.sprite(675,223,'Dhg1_5_yellow_bar');
        _this.yellow_bar.frame=0;
        _this.yellow_bar.scale.setTo(0.9);
        _this.blue_bar=_this.add.sprite(730,223,'Dhg1_5_blue_bar');
        _this.blue_bar.frame=0;
        _this.blue_bar.scale.setTo(0.9);
        
        _this.box2_group.add(_this.box2);
        //_this.box2_group.add(_this.checkbtn);
        _this.box2_group.add(_this.green_minus);
        _this.box2_group.add(_this.green_plus);
        _this.box2_group.add(_this.red_minus);
        _this.box2_group.add(_this.red_plus);
        _this.box2_group.add(_this.yellow_minus);
        _this.box2_group.add(_this.yellow_plus);
        _this.box2_group.add(_this.blue_minus);
        _this.box2_group.add(_this.blue_plus);
        _this.box2_group.add(_this.green_bar);
        _this.box2_group.add(_this.red_bar);
        _this.box2_group.add(_this.yellow_bar);
        _this.box2_group.add(_this.blue_bar);
       
    },
    
    bar_chart2:function()
    {  
        _this.box2_group=_this.add.group();
        _this.box2=_this.add.sprite(500,100,'Dhg1_5_Box4');
        _this.box2.scale.setTo(0.9);
        
        _this.checkbtn =_this.add.sprite(870,360,'rightDhg1_5_btn');
        _this.checkbtn.anchor.setTo(0.5);
        _this.checkbtn.scale.setTo(0.5,0.5);
        _this.checkbtn.inputEnabled=true;
        _this.checkbtn.events.onInputDown.add(_this.checkAns,this);
        
        _this.green_minus=_this.add.sprite(556,439,'Dhg1_5_minus');
        _this.green_minus.inputEnabled=true;
        _this.green_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.green_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_plus.inputEnabled=true;
            _this.green_bar.frame-=1;
            if(_this.green_bar.frame<=0)
                {
                    _this.green_bar.frame=0;
                }
            _this.addDecTextToGreenBox();
        },this);
        
        _this.green_plus=_this.add.sprite(582,430,'Dhg1_5_plus');
        _this.green_plus.inputEnabled=true;
        _this.green_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.green_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.green_bar.frame+=1;
            if(_this.green_bar.frame>=40)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.green_bar.frame<41)
                {
                    _this.addIncTextToGreenBox();
                }
        },this);
        
        _this.red_minus=_this.add.sprite(613,439,'Dhg1_5_minus');
        _this.red_minus.inputEnabled=true;
        _this.red_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.red_minus.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_plus.inputEnabled=true;
            _this.red_bar.frame-=1;
            if(_this.red_bar.frame<=0)
                {
                    _this.red_bar.frame=0;
                }
            _this.addDecTextToRedBox();
        },this);
        
        _this.red_plus=_this.add.sprite(639,430,'Dhg1_5_plus');
        _this.red_plus.inputEnabled=true;
        _this.red_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.red_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.red_bar.frame+=1;
            if(_this.red_bar.frame>=40)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.red_bar.frame<41)
                {
                    _this.addIncTextToRedBox();
                }
        },this);
        
        _this.yellow_minus=_this.add.sprite(669,439,'Dhg1_5_minus');
        _this.yellow_minus.inputEnabled=true;
        _this.yellow_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.yellow_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.yellow_plus.inputEnabled=true;
            _this.yellow_bar.frame-=1;
            if(_this.yellow_bar.frame<=0)
                {
                    _this.yellow_bar.frame=0;
                }
            _this.addDecTextToYellowBox();
        },this);
        
        _this.yellow_plus=_this.add.sprite(695,430,'Dhg1_5_plus');
        _this.yellow_plus.inputEnabled=true;
        _this.yellow_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.yellow_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.yellow_bar.frame+=1;
            if(_this.yellow_bar.frame>=40)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.yellow_bar.frame<41)
                {
                    _this.addIncTextToYellowBox();
                }
        },this);
        
        _this.blue_minus=_this.add.sprite(725,439,'Dhg1_5_minus');
        _this.blue_minus.inputEnabled=true;
        _this.blue_minus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.blue_minus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.blue_plus.inputEnabled=true;
            _this.blue_bar.frame-=1;
            if(_this.blue_bar.frame<=0)
                {
                    _this.blue_bar.frame=0;
                }
            _this.addDecTextToBlueBox();
        },this);
        
        _this.blue_plus=_this.add.sprite(751,430,'Dhg1_5_plus');
        _this.blue_plus.inputEnabled=true;
        _this.blue_plus.events.onInputUp.add(function(target){ target.frame=0;},this);
        _this.blue_plus.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
     
     _this.clickSound.play();
            target.frame=1;
            _this.blue_bar.frame+=1;
            if(_this.blue_bar.frame>=40)
                {
                target.inputEnabled=false;
                    target.frame=0;
                }
            else
                {
                  target.inputEnabled=true; 
                }
            if(_this.blue_bar.frame<41)
                {
                    _this.addIncTextToBlueBox();
                }
        },this);
        
        _this.green_bar=_this.add.sprite(563,124,'Dhg1_5_silver_bar');
        _this.green_bar.frame=0;
        _this.green_bar.scale.setTo(0.9);
        _this.red_bar=_this.add.sprite(618,124,'Dhg1_5_silver_bar');
        _this.red_bar.frame=0;
        _this.red_bar.scale.setTo(0.9);
        _this.yellow_bar=_this.add.sprite(673,124,'Dhg1_5_silver_bar');
        _this.yellow_bar.frame=0;
        _this.yellow_bar.scale.setTo(0.9);
        _this.blue_bar=_this.add.sprite(728,124,'Dhg1_5_silver_bar');
        _this.blue_bar.frame=0;
        _this.blue_bar.scale.setTo(0.9);
        
        _this.box2_group.add(_this.box2);
        //_this.box2_group.add(_this.checkbtn);
        _this.box2_group.add(_this.green_minus);
        _this.box2_group.add(_this.green_plus);
        _this.box2_group.add(_this.red_minus);
        _this.box2_group.add(_this.red_plus);
        _this.box2_group.add(_this.yellow_minus);
        _this.box2_group.add(_this.yellow_plus);
        _this.box2_group.add(_this.blue_minus);
        _this.box2_group.add(_this.blue_plus);
        _this.box2_group.add(_this.green_bar);
        _this.box2_group.add(_this.red_bar);
        _this.box2_group.add(_this.yellow_bar);
        _this.box2_group.add(_this.blue_bar);
       
    },
    
    checkAns:function()
    {
    console.log("frames: "+_this.green_bar.frame+":"+_this.red_bar.frame+":"+_this.yellow_bar.frame+":"+_this.blue_bar.frame);
    console.log("rednum "+_this.greennum_count+":"+_this.rednum_count+":"+_this.yellownum_count+":"+_this.bluenum_count);

        if((_this.green_bar.frame==_this.greennum_count)&&(_this.red_bar.frame==_this.rednum_count)&&(_this.yellow_bar.frame==_this.yellownum_count)&&(_this.blue_bar.frame==_this.bluenum_count))  
         {
             _this.box_group.destroy();
             _this.green_minus.inputEnabled=false;
             _this.green_plus.inputEnabled=false;
             _this.red_minus.inputEnabled=false;
             _this.red_plus.inputEnabled=false;
             _this.yellow_plus.inputEnabled=false;
             _this.blue_minus.inputEnabled=false;
             _this.blue_plus.inputEnabled=false;
           _this.FinalAns();  
         }
        else 
            {
                _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                if(_this.green_bar.frame!=_this.greennum_count)
                    {
                     _this.shake.shake(10,_this.green_bar);   
                    }
                if(_this.red_bar.frame!=_this.rednum_count)
                    {
                      _this.shake.shake(10,_this.red_bar);  
                    }
                if(_this.yellow_bar.frame!=_this.yellownum_count)
                    {
                      _this.shake.shake(10,_this.yellow_bar);  
                    }
                if(_this.blue_bar.frame!=_this.bluenum_count)
                    {
                      _this.shake.shake(10,_this.blue_bar);  
                    }
            }
    },
    
    FinalAns:function()
    {
        _this.checkbtn.destroy();
        _this.Maintween = _this.add.tween(_this.numGroup);
                _this.Maintween.to({ y:100}, 0, 'Linear', true, 0);
               
                _this.tween=_this.add.tween(_this.box2_group);
                _this.tween.to({ x:-150},2000, 'Linear', true, 0);
                _this.tween.onComplete.add(function(){
                    _this.green_bar.inputEnabled=true;
                    _this.red_bar.inputEnabled=true;
                    _this.yellow_bar.inputEnabled=true;
                    _this.blue_bar.inputEnabled=true;
                    if((_this.no1==1)||(_this.no1==3)||(_this.no1==5))
                    {
                        /*if((_this.green_bar.frame==_this.red_bar.frame)||(_this.green_bar.frame==_this.yellow_bar.frame)||(_this.green_bar.frame==_this.blue_bar.frame)||(_this.red_bar.frame==_this.yellow_bar.frame)||(_this.red_bar.frame==_this.blue_bar.frame)||(_this.yellow_bar.frame==_this.blue_bar.frame))
                        {
                           _this.LeastSelect(); 
                        }
                        else
                        {*/
                    _this.voice1=0;
                    _this.voice2=0;
                    _this.voice3=1;
                    _this.voice4=0;
                        _this.getVoice();
                        _this.LeastSelect();    
                        //}
                    }
                    else if((_this.no1==0)||(_this.no1==2)||(_this.no1==4))
                    {
                        /*if((_this.green_bar.frame==_this.red_bar.frame)||(_this.green_bar.frame==_this.yellow_bar.frame)||(_this.green_bar.frame==_this.blue_bar.frame)||(_this.red_bar.frame==_this.yellow_bar.frame)||(_this.red_bar.frame==_this.blue_bar.frame)||(_this.yellow_bar.frame==_this.blue_bar.frame))
                        {
                           _this.MostSelect();  
                        }
                        else
                        {*/
                    _this.voice1=0;
                    _this.voice2=0;
                    _this.voice3=0;
                    _this.voice4=1;
                        _this.getVoice();
                    
                        _this.MostSelect(); 
                        //}
                    }
                },this);
        
    },
    
    LeastSelect:function()
    {

      _this.noofAttempts++;
                     
                     _this.green_bar.events.onInputDown.add(function(){
                        if((_this.green_bar.frame<=_this.red_bar.frame)&&(_this.green_bar.frame<=_this.yellow_bar.frame)&&(_this.green_bar.frame<=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                     
                     _this.red_bar.events.onInputDown.add(function(){
                         if((_this.red_bar.frame<=_this.green_bar.frame)&&(_this.red_bar.frame<=_this.yellow_bar.frame)&&(_this.red_bar.frame<=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                             _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                     
                     _this.yellow_bar.events.onInputDown.add(function(){
                         if((_this.yellow_bar.frame<=_this.green_bar.frame)&&(_this.yellow_bar.frame<=_this.red_bar.frame)&&(_this.yellow_bar.frame<=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                     
                     _this.blue_bar.events.onInputDown.add(function(){
                        if((_this.blue_bar.frame<=_this.green_bar.frame)&&(_this.blue_bar.frame<=_this.red_bar.frame)&&(_this.blue_bar.frame<=_this.yellow_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
    },
    MostSelect:function()
    {
      _this.noofAttempts++;
                    
                     _this.green_bar.events.onInputDown.add(function(){
                        if((_this.green_bar.frame>=_this.red_bar.frame)&&(_this.green_bar.frame>=_this.yellow_bar.frame)&&(_this.green_bar.frame>=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                  
                     _this.red_bar.events.onInputDown.add(function(){
                         if((_this.red_bar.frame>=_this.green_bar.frame)&&(_this.red_bar.frame>=_this.yellow_bar.frame)&&(_this.red_bar.frame>=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                             _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                    
                     _this.yellow_bar.events.onInputDown.add(function(){
                         if((_this.yellow_bar.frame>=_this.green_bar.frame)&&(_this.yellow_bar.frame>=_this.red_bar.frame)&&(_this.yellow_bar.frame>=_this.blue_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
                    
                     _this.blue_bar.events.onInputDown.add(function(){
                        if((_this.blue_bar.frame>=_this.green_bar.frame)&&(_this.blue_bar.frame>=_this.red_bar.frame)&&(_this.blue_bar.frame>=_this.yellow_bar.frame))
                            {
                              _this.correctAns();  
                            }
                         else{
                              _this.wSound = _this.add.audio('waudio');
     
     _this.wSound.play();
                             _this.shake.shake(10,_this.box2_group);   
                         }
                     },this);
    },
    
    correctAns:function()
    {
        _this.no1++;
        console.log("correct");
        _this.celebration = true;
        _this.cmusic = this.add.audio('celebr');
        _this.cmusic.play();
        this.time.events.add(500, this.removeCelebration, this);
        //target.tint = 0xA9A9A9;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        console.log(_this.starAnim);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();
        _this.rightbtn.events.onInputDown.removeAll();
        _this.checkbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();

         if(_this.timer)
                    {
                        _this.timer.stop();
                       _this.timer = null; 
                    }
                    _this.sceneCount++;
       telInitializer.tele_saveAssessment(1,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
    },

    removeCelebration:function()
    {

      _this.numberIncGreen = 0;
        _this.numberIncRed = 0; 
        _this.numberIncYellow = 0; 
        _this.numberIncBlue = 0;
        
        console.log("remove everythg");
        console.log("removeCeleb");
        _this.celebration = false;

        _this.displayNumb1.destroy();
        _this.displayNumb2.destroy();
        _this.displayNumb3.destroy();
        _this.displayNumb4.destroy();
        _this.displayNumb1 = null;
        _this.displayNumb2 = null;
        _this.displayNumb3 = null;
        _this.displayNumb4 = null;

        
        _this.box2_group.destroy();
//        _this.box_group.destroy();
        _this.numGroup.destroy();
        _this.rednum_count=0;
        _this.greennum_count=0;
        _this.bluenum_count=0;
        _this.yellownum_count=0;
        console.log("no"+_this.no1);
        _this.count1++;
            if(_this.no1<6)
            {
                 _this.timer1.stop();
                console.log("addq");
                 this.addQuestion(_this.count1);
            }
            else
            {
                _this.timer1.stop();
                 this.time.events.add(2000, function(){
                console.log("gameEnd");
                //this.stopAllVoice();
                this.state.start('longdivision3Score');
                 },this);
            }

    },
    
    getVoice:function(){
       
        _this.stopVoice();  
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
        
            if(_this.voice1==1)
            {
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/English/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Hindi/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Kannada/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Gujrati/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Marathi/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Telugu/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Tamil/dhdtg1.4_1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Urdu/dhdtg1.4_1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Odiya/dhdtg1.4_1.mp3");  
                    }
            }
            else if(_this.voice2==1)
            {
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/English/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Hindi/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Kannada/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Gujrati/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Marathi/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Telugu/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Tamil/dhdtg1.4_2.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Urdu/dhdtg1.4_2.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Odiya/dhdtg1.4_2.mp3");  
                    }
            }
            else if(_this.voice3==1)
            {
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/English/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Hindi/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Kannada/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Gujrati/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Marathi/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Telugu/which_is_least.mp3");
                    }
                    else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Tamil/which_is_least.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Urdu/which_is_least.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Odiya/which_is_least.mp3");  
                    }
            }
            else if(_this.voice4==1)
            {
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/English/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Hindi/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Kannada/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Gujrati/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Marathi/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Telugu/Which_are_most.mp3");
                    }
                    else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Tamil/Which_are_most.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Urdu/Which_are_most.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH2/Odiya/Which_are_most.mp3");  
                    }
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
  stopVoice:function()
    {       
        // _timer1.stop();
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
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-15, 10, 'Dhg1_5_starAnim');
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
    checkOverlap: function(opt0, target) {

    var boundsA = opt0.getBounds();
    var boundsB = target.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

};