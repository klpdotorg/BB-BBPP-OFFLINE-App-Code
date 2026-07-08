Game.longdivision2=function(){};

Game.longdivision2.prototype={
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
        telInitializer.gameIdInit("DH1",gradeSelected);

    },

    preload:function(game){
        if(!window.longdivision2){

            window.longdivision2 = true;

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
            this.load.video('demo_dhdcg1_4',window.baseUrl+'assets/DH1/demoVideos/DHDCG1_4.mp4');
        this.load.image('dhdcg1_4skipDemoVideos',window.baseUrl+'assets/DH1/commonAssets/skipArrow.png');
        //common for all games.
        this.load.atlas('dhdcg1_4backbtn',window.baseUrl+'assets/DH1/commonAssets/backbtn.png' ,window.baseUrl+'json/DH1/gradeJson/backbtn.json');
        this.load.atlas('dhdcg1_4CommonSpeakerBtn',window.baseUrl+'assets/DH1/commonAssets/speaker.png' ,window.baseUrl+'json/DH1/gradeJson/speaker.json');
        this.load.atlas('dhdcg1_4starAnim',window.baseUrl+'assets/DH1/commonAssets/starAnim.png',window.baseUrl+'json/DH1/gradeJson/starAnim.json');
        this.load.atlas('dhdcg1_4replay',window.baseUrl+'assets/DH1/commonAssets/reply.png' ,window.baseUrl+'json/DH1/gradeJson/reply.json');
        this.load.atlas('dhdcg1_4btn',window.baseUrl+'assets/DH1/commonAssets/btn.png',window.baseUrl+'json/DH1/gradeJson/btn.json');
        
        this.load.image('dhdcg1_4background1',window.baseUrl+'assets/DH1/commonAssets/bg1.png');
        this.load.image('dhdcg1_4tittleBar',window.baseUrl+'assets/DH1/commonAssets/tittleBar.png');
        this.load.image('dhdcg1_4navBar',window.baseUrl+'assets/DH1/commonAssets/navBar.png');
        this.load.image('dhdcg1_4timebg',window.baseUrl+'assets/DH1/commonAssets/timebg.png');
        
        this.load.atlas('dhdcg1_4_erase',window.baseUrl+'assets/DH1/commonAssets/erase.png' ,window.baseUrl+'json/DH1/gradeJson/erase.json');
        this.load.atlas('dhdcg1_4_rightmark',window.baseUrl+'assets/DH1/commonAssets/rightmark.png' ,window.baseUrl+'json/DH1/gradeJson/rightmark.json');
        this.load.image('dhdcg1_4_numBG',window.baseUrl+'assets/DH1/commonAssets/b2.png');
        this.load.atlas('dhdcg1_4_numberpad',window.baseUrl+'assets/DH1/commonAssets/calNum.png',window.baseUrl+'json/DH1/gradeJson/calNum.json');
        this.load.atlas('dhdcg1_4_numbers1',window.baseUrl+'assets/DH1/commonAssets/numbers1.png',window.baseUrl+'json/DH1/gradeJson/numbers1.json');
       
        //game assets.
        this.load.image('dhdcg1_4background',window.baseUrl+'assets/DH1/gradeAssets/BG2.png');
                     
        this.load.atlas('dhdcg1_4ball',window.baseUrl+'assets/DH1/gradeAssets/ball.png',window.baseUrl+'json/DH1/gradeJson/assets/ball.json');
        this.load.atlas('dhdcg1_4smallBall',window.baseUrl+'assets/DH1/gradeAssets/smallBall.png',window.baseUrl+'json/DH1/gradeJson/assets/smallBall.json');
        this.load.atlas('dhdcg1_4balloon',window.baseUrl+'assets/DH1/gradeAssets/balloon.png',window.baseUrl+'json/DH1/gradeJson/assets/balloon.json');
        this.load.atlas('dhdcg1_4carrot',window.baseUrl+'assets/DH1/gradeAssets/carrot.png',window.baseUrl+'json/DH1/gradeJson/assets/carrot.json');
        this.load.atlas('dhdcg1_4cherry',window.baseUrl+'assets/DH1/gradeAssets/cherry.png',window.baseUrl+'json/DH1/gradeJson/assets/cherry.json');
        this.load.atlas('dhdcg1_4flower',window.baseUrl+'assets/DH1/gradeAssets/flower.png',window.baseUrl+'json/DH1/gradeJson/assets/flower.json');
        this.load.atlas('dhdcg1_4orange',window.baseUrl+'assets/DH1/gradeAssets/orange.png',window.baseUrl+'json/DH1/gradeJson/assets/orange.json');
        this.load.atlas('dhdcg1_4papaya',window.baseUrl+'assets/DH1/gradeAssets/papaya.png',window.baseUrl+'json/DH1/gradeJson/assets/papaya.json');
        this.load.atlas('dhdcg1_4shoe',window.baseUrl+'assets/DH1/gradeAssets/shoe.png',window.baseUrl+'json/DH1/gradeJson/assets/shoe.json');
        this.load.atlas('dhdcg1_4watermelon',window.baseUrl+'assets/DH1/gradeAssets/watermelon.png',window.baseUrl+'json/DH1/gradeJson/assets/watermelon.json');
        
        this.load.atlas('dhdcg1_4circle',window.baseUrl+'assets/DH1/gradeAssets/circle.png',window.baseUrl+'json/DH1/gradeJson/assets/circle.json');
        this.load.atlas('dhdcg1_4oval',window.baseUrl+'assets/DH1/gradeAssets/oval.png',window.baseUrl+'json/DH1/gradeJson/assets/oval.json');
        this.load.atlas('dhdcg1_4square',window.baseUrl+'assets/DH1/gradeAssets/square.png',window.baseUrl+'json/DH1/gradeJson/assets/square.json');
        this.load.atlas('dhdcg1_4triangle',window.baseUrl+'assets/DH1/gradeAssets/triangle.png',window.baseUrl+'json/DH1/gradeJson/assets/triangle.json');
        
        this.load.atlas('dhdcg1_4blueGraph',window.baseUrl+'assets/DH1/gradeAssets/blueGraph.png',window.baseUrl+'json/DH1/gradeJson/assets/blueGraph.json');
        this.load.atlas('dhdcg1_4greenGraph',window.baseUrl+'assets/DH1/gradeAssets/greenGraph.png',window.baseUrl+'json/DH1/gradeJson/assets/greenGraph.json');
        this.load.atlas('dhdcg1_4redGraph',window.baseUrl+'assets/DH1/gradeAssets/redGraph.png',window.baseUrl+'json/DH1/gradeJson/assets/redGraph.json');
        this.load.atlas('dhdcg1_4yellowGraph',window.baseUrl+'assets/DH1/gradeAssets/yellowGraph.png',window.baseUrl+'json/DH1/gradeJson/assets/yellowGraph.json');
        this.load.atlas('dhdcg1_4emptyGraph',window.baseUrl+'assets/DH1/gradeAssets/emptyGraph.png',window.baseUrl+'json/DH1/gradeJson/assets/emptyGraph.json');
        this.load.atlas('dhdcg1_4plus',window.baseUrl+'assets/DH1/gradeAssets/P.png',window.baseUrl+'json/DH1/gradeJson/assets/P.json');
        this.load.atlas('dhdcg1_4minus',window.baseUrl+'assets/DH1/gradeAssets/M.png',window.baseUrl+'json/DH1/gradeJson/assets/M.json');
        this.load.atlas('dhdcg1_4glow',window.baseUrl+'assets/DH1/gradeAssets/glow.png',window.baseUrl+'json/DH1/gradeJson/assets/glow.json');
        
        this.load.image('dhdcg1_4emptyBox',window.baseUrl+'assets/DH1/gradeAssets/box1.png');
        this.load.image('dhdcg1_4colorBox',window.baseUrl+'assets/DH1/gradeAssets/box2.png');
        this.load.image('dhdcg1_4shapeBox',window.baseUrl+'assets/DH1/gradeAssets/box3.png');
        this.load.image('dhdcg1_4emptyBoard',window.baseUrl+'assets/DH1/gradeAssets/box4.png');
        this.load.image('dhdcg1_4shapeBoard',window.baseUrl+'assets/DH1/gradeAssets/box5.png');
        this.load.image('dhdcg1_4colorBoard',window.baseUrl+'assets/DH1/gradeAssets/box6.png');
        
        this.load.atlas('dhdcg1_4numberBox',window.baseUrl+'assets/DH1/gradeAssets/b1.png',window.baseUrl+'json/DH1/gradeJson/assets/b1.json'); 

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
        
            _this.countCheck = 0;
            _this.storeVar1 = "";
            _this.storeVar2 = "";
            _this.storeTarget= "";
        _this.Green=0;
        _this.Red=0;
        _this.Yellow=0;
        _this.Blue=0;
        
        _this.g=0;
        _this.r=0;
        _this.y=0;
        _this.b=0;
        
        _this.w=0;
        
        _this.circle=0;
        _this.triangle=0;
        _this.square=0;
        _this.oval=0;
        
        _this.cir=0;
        _this.tri=0;
        _this.squ=0;
        _this.ova=0;
 
        _this.wrongAnswer = false;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
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
        
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";
        
        _this.celebration= false;
        _this.check=0;
        
        _this.soundPlayed = false;
        
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        
        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'dhdcg1_4background');
        //_this.bg1.scale.setTo(1.05,1.12);
        
        _this.TopBar=this.add.sprite(0,0,'dhdcg1_4navBar');
        _this.TopBar.name="dhdcg1_4navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'dhdcg1_4backbtn',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
 

        },_this);

        _this.speakerbtn1 = this.add.button(595,7,'dhdcg1_4CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn1.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.getVoice1();
            
        },_this);
        _this.speakerbtn2 = this.add.button(595,7,'dhdcg1_4CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn2.visible=false;
        _this.speakerbtn2.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.getVoice2();
            
        },_this);
        _this.speakerbtn3 = this.add.button(595,7,'dhdcg1_4CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn3.visible=false;
        _this.speakerbtn3.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.getVoice3();
            
        },_this);
        _this.speakerbtn4 = this.add.button(595,7,'dhdcg1_4CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn4.visible=false;
        _this.speakerbtn4.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.getVoice4();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'dhdcg1_4timebg');
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
        //_this.getVoice();
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
         //_this.sceneCount++;
    
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
        _this.speakerbtn1.inputEnabled=true;
        _this.speakerbtn1.input.useHandCursor = true;
         
        
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
            
        }
        
    },
    
   
  generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-17, 15, 'dhdcg1_4starAnim');
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
    
  loadColorObjects:function(target)
   {
        _this.greenWatermelon1 = _this.add.sprite(480,165,'dhdcg1_4watermelon');
        _this.greenWatermelon1.anchor.setTo(0.5);
        _this.greenWatermelon1.scale.setTo(1);
        _this.greenWatermelon1.frame = 3;
        _this.greenWatermelon1.visible = false;
       
        _this.greenWatermelon2 = _this.add.sprite(480,235,'dhdcg1_4watermelon');
        _this.greenWatermelon2.anchor.setTo(0.5);
        _this.greenWatermelon2.scale.setTo(1);
        _this.greenWatermelon2.frame = 3;
        _this.greenWatermelon2.visible = false;
       
        _this.greenPapaya1 = _this.add.sprite(480,165,'dhdcg1_4papaya');
        _this.greenPapaya1.anchor.setTo(0.5);
        _this.greenPapaya1.scale.setTo(0.9,0.8);
        _this.greenPapaya1.frame = 3;
        _this.greenPapaya1.visible = false;
       
        _this.greenPapaya2 = _this.add.sprite(480,235,'dhdcg1_4papaya');
        _this.greenPapaya2.anchor.setTo(0.5);
        _this.greenPapaya2.scale.setTo(0.9,0.8);
        _this.greenPapaya2.frame = 3;
        _this.greenPapaya2.visible = false;
       
        _this.greenSmallBall1 = _this.add.sprite(480,165,'dhdcg1_4smallBall');
        _this.greenSmallBall1.anchor.setTo(0.5);
        _this.greenSmallBall1.scale.setTo(0.8);
        _this.greenSmallBall1.frame = 3;
        _this.greenSmallBall1.visible = false;
       
        _this.greenSmallBall2 = _this.add.sprite(480,235,'dhdcg1_4smallBall');
        _this.greenSmallBall2.anchor.setTo(0.5);
        _this.greenSmallBall2.scale.setTo(0.8);
        _this.greenSmallBall2.frame = 3;
        _this.greenSmallBall2.visible = false;
       
        _this.greenSmallBall3 = _this.add.sprite(480,305,'dhdcg1_4smallBall');
        _this.greenSmallBall3.anchor.setTo(0.5);
        _this.greenSmallBall3.scale.setTo(0.8);
        _this.greenSmallBall3.frame = 3;
        _this.greenSmallBall3.visible = false;
       
        _this.greenSmallBall4 = _this.add.sprite(480,375,'dhdcg1_4smallBall');
        _this.greenSmallBall4.anchor.setTo(0.5);
        _this.greenSmallBall4.scale.setTo(0.8);
        _this.greenSmallBall4.frame = 3;
        _this.greenSmallBall4.visible = false;
       
        _this.greenFlower1 = _this.add.sprite(480,165,'dhdcg1_4flower');
        _this.greenFlower1.anchor.setTo(0.5);
        _this.greenFlower1.scale.setTo(0.9);
        _this.greenFlower1.frame = 3;
        _this.greenFlower1.visible = false;
       
        _this.greenFlower2 = _this.add.sprite(480,235,'dhdcg1_4flower');
        _this.greenFlower2.anchor.setTo(0.5);
        _this.greenFlower2.scale.setTo(0.9);
        _this.greenFlower2.frame = 3;
        _this.greenFlower2.visible = false;
       
        _this.greenFlower3 = _this.add.sprite(480,305,'dhdcg1_4flower');
        _this.greenFlower3.anchor.setTo(0.5);
        _this.greenFlower3.scale.setTo(0.9);
        _this.greenFlower3.frame = 3;
        _this.greenFlower3.visible = false;
       
        _this.greenFlower4 = _this.add.sprite(480,375,'dhdcg1_4flower');
        _this.greenFlower4.anchor.setTo(0.5);
        _this.greenFlower4.scale.setTo(0.9);
        _this.greenFlower4.frame = 3;
        _this.greenFlower4.visible = false;
       
        _this.greenCherry1 = _this.add.sprite(480,165,'dhdcg1_4cherry');
        _this.greenCherry1.anchor.setTo(0.5);
        _this.greenCherry1.scale.setTo(0.9);
        _this.greenCherry1.frame = 3;
        _this.greenCherry1.visible = false;
       
        _this.greenCherry2 = _this.add.sprite(480,235,'dhdcg1_4cherry');
        _this.greenCherry2.anchor.setTo(0.5);
        _this.greenCherry2.scale.setTo(0.9);
        _this.greenCherry2.frame = 3;
        _this.greenCherry2.visible = false;
       
        _this.greenCherry3 = _this.add.sprite(480,305,'dhdcg1_4cherry');
        _this.greenCherry3.anchor.setTo(0.5);
        _this.greenCherry3.scale.setTo(0.9);
        _this.greenCherry3.frame = 3;
        _this.greenCherry3.visible = false;
       
        _this.greenCherry4 = _this.add.sprite(480,375,'dhdcg1_4cherry');
        _this.greenCherry4.anchor.setTo(0.5);
        _this.greenCherry4.scale.setTo(0.9);
        _this.greenCherry4.frame = 3;
        _this.greenCherry4.visible = false;
       
        _this.greenOrange1 = _this.add.sprite(480,165,'dhdcg1_4orange');
        _this.greenOrange1.anchor.setTo(0.5);
        _this.greenOrange1.scale.setTo(0.9);
        _this.greenOrange1.frame = 3;
        _this.greenOrange1.visible = false;
       
        _this.greenOrange2 = _this.add.sprite(480,235,'dhdcg1_4orange');
        _this.greenOrange2.anchor.setTo(0.5);
        _this.greenOrange2.scale.setTo(0.9);
        _this.greenOrange2.frame = 3;
        _this.greenOrange2.visible = false;
       
        _this.greenOrange3 = _this.add.sprite(480,305,'dhdcg1_4orange');
        _this.greenOrange3.anchor.setTo(0.5);
        _this.greenOrange3.scale.setTo(0.9);
        _this.greenOrange3.frame = 3;
        _this.greenOrange3.visible = false;
       
        _this.greenOrange4 = _this.add.sprite(480,375,'dhdcg1_4orange');
        _this.greenOrange4.anchor.setTo(0.5);
        _this.greenOrange4.scale.setTo(0.9);
        _this.greenOrange4.frame = 3;
        _this.greenOrange4.visible = false;
       
        _this.greenBall1 = _this.add.sprite(480,165,'dhdcg1_4ball');
        _this.greenBall1.anchor.setTo(0.5);
        _this.greenBall1.scale.setTo(0.9);
        _this.greenBall1.frame = 3;
        _this.greenBall1.visible = false;
       
        _this.greenBall2 = _this.add.sprite(480,235,'dhdcg1_4ball');
        _this.greenBall2.anchor.setTo(0.5);
        _this.greenBall2.scale.setTo(0.9);
        _this.greenBall2.frame = 3;
        _this.greenBall2.visible = false;
       
        _this.greenBall3 = _this.add.sprite(480,305,'dhdcg1_4ball');
        _this.greenBall3.anchor.setTo(0.5);
        _this.greenBall3.scale.setTo(0.9);
        _this.greenBall3.frame = 3;
        _this.greenBall3.visible = false;
       
        _this.greenShoe1 = _this.add.sprite(480,165,'dhdcg1_4shoe');
        _this.greenShoe1.anchor.setTo(0.5);
        _this.greenShoe1.scale.setTo(0.9);
        _this.greenShoe1.frame = 3;
        _this.greenShoe1.visible = false;
       
        _this.greenShoe2 = _this.add.sprite(480,235,'dhdcg1_4shoe');
        _this.greenShoe2.anchor.setTo(0.5);
        _this.greenShoe2.scale.setTo(0.9);
        _this.greenShoe2.frame = 3;
        _this.greenShoe2.visible = false;
       
        _this.greenShoe3 = _this.add.sprite(480,305,'dhdcg1_4shoe');
        _this.greenShoe3.anchor.setTo(0.5);
        _this.greenShoe3.scale.setTo(0.9);
        _this.greenShoe3.frame = 3;
        _this.greenShoe3.visible = false;
       
        _this.greenCarrot1 = _this.add.sprite(480,165,'dhdcg1_4carrot');
        _this.greenCarrot1.anchor.setTo(0.5);
        _this.greenCarrot1.scale.setTo(0.9);
        _this.greenCarrot1.frame = 3;
        _this.greenCarrot1.visible = false;
       
        _this.greenCarrot2 = _this.add.sprite(480,235,'dhdcg1_4carrot');
        _this.greenCarrot2.anchor.setTo(0.5);
        _this.greenCarrot2.scale.setTo(0.9);
        _this.greenCarrot2.frame = 3;
        _this.greenCarrot2.visible = false;
       
        _this.greenCarrot3 = _this.add.sprite(480,305,'dhdcg1_4carrot');
        _this.greenCarrot3.anchor.setTo(0.5);
        _this.greenCarrot3.scale.setTo(0.9);
        _this.greenCarrot3.frame = 3;
        _this.greenCarrot3.visible = false;
       
        _this.greenBalloon1 = _this.add.sprite(480,165,'dhdcg1_4balloon');
        _this.greenBalloon1.anchor.setTo(0.5);
        _this.greenBalloon1.scale.setTo(0.9,0.8);
        _this.greenBalloon1.frame = 3;
        _this.greenBalloon1.visible = false;
       
        _this.greenBalloon2 = _this.add.sprite(480,235,'dhdcg1_4balloon');
        _this.greenBalloon2.anchor.setTo(0.5);
        _this.greenBalloon2.scale.setTo(0.9,0.8);
        _this.greenBalloon2.frame = 3;
        _this.greenBalloon2.visible = false;
       
        _this.greenBalloon3 = _this.add.sprite(480,305,'dhdcg1_4balloon');
        _this.greenBalloon3.anchor.setTo(0.5);
        _this.greenBalloon3.scale.setTo(0.9,0.8);
        _this.greenBalloon3.frame = 3;
        _this.greenBalloon3.visible = false;
       
        _this.redSmallBall1 = _this.add.sprite(580,165,'dhdcg1_4smallBall');
        _this.redSmallBall1.anchor.setTo(0.5);
        _this.redSmallBall1.scale.setTo(0.8); 
        _this.redSmallBall1.visible=false; 
        
        _this.redSmallBall2 = _this.add.sprite(580,235,'dhdcg1_4smallBall');
        _this.redSmallBall2.anchor.setTo(0.5);
        _this.redSmallBall2.scale.setTo(0.8);
        _this.redSmallBall2.visible=false;
       
        _this.redSmallBall3 = _this.add.sprite(580,305,'dhdcg1_4smallBall');
        _this.redSmallBall3.anchor.setTo(0.5);
        _this.redSmallBall3.scale.setTo(0.8);
        _this.redSmallBall3.visible=false;
       
        _this.redSmallBall4 = _this.add.sprite(580,375,'dhdcg1_4smallBall');
        _this.redSmallBall4.anchor.setTo(0.5);
        _this.redSmallBall4.scale.setTo(0.8);
        _this.redSmallBall4.visible=false;
        
        _this.redBall1 = _this.add.sprite(580,165,'dhdcg1_4ball');
        _this.redBall1.anchor.setTo(0.5);
        _this.redBall1.scale.setTo(0.8,0.9);
        _this.redBall1.visible=false;
       
        _this.redBall2 = _this.add.sprite(580,235,'dhdcg1_4ball');
        _this.redBall2.anchor.setTo(0.5);
        _this.redBall2.scale.setTo(0.8,0.9);
        _this.redBall2.visible=false;
       
        _this.redBall3 = _this.add.sprite(580,305,'dhdcg1_4ball');
        _this.redBall3.anchor.setTo(0.5);
        _this.redBall3.scale.setTo(0.8,0.9);
        _this.redBall3.visible=false;
       
        _this.redBall4 = _this.add.sprite(580,375,'dhdcg1_4ball');
        _this.redBall4.anchor.setTo(0.5);
        _this.redBall4.scale.setTo(0.8,0.9);
        _this.redBall4.visible=false;
       
        _this.redCherry1 = _this.add.sprite(580,165,'dhdcg1_4cherry');
        _this.redCherry1.anchor.setTo(0.5);
        _this.redCherry1.scale.setTo(0.9);
        _this.redCherry1.visible=false;
       
        _this.redCherry2 = _this.add.sprite(580,235,'dhdcg1_4cherry');
        _this.redCherry2.anchor.setTo(0.5);
        _this.redCherry2.scale.setTo(0.9);
        _this.redCherry2.visible=false;
       
        _this.redCherry3 = _this.add.sprite(580,305,'dhdcg1_4cherry');
        _this.redCherry3.anchor.setTo(0.5);
        _this.redCherry3.scale.setTo(0.9);
        _this.redCherry3.visible=false;
       
        _this.redCherry4 = _this.add.sprite(580,375,'dhdcg1_4cherry');
        _this.redCherry4.anchor.setTo(0.5);
        _this.redCherry4.scale.setTo(0.9);
        _this.redCherry4.visible=false;
       
        _this.redCarrot1 = _this.add.sprite(580,165,'dhdcg1_4carrot');
        _this.redCarrot1.anchor.setTo(0.5);
        _this.redCarrot1.scale.setTo(1);
        _this.redCarrot1.visible=false;
       
        _this.redCarrot2 = _this.add.sprite(580,235,'dhdcg1_4carrot');
        _this.redCarrot2.anchor.setTo(0.5);
        _this.redCarrot2.scale.setTo(1);
        _this.redCarrot2.visible=false;
       
        _this.redCarrot3 = _this.add.sprite(580,305,'dhdcg1_4carrot');
        _this.redCarrot3.anchor.setTo(0.5);
        _this.redCarrot3.scale.setTo(1);
        _this.redCarrot3.visible=false;
       
        _this.redCarrot4 = _this.add.sprite(580,375,'dhdcg1_4carrot');
        _this.redCarrot4.anchor.setTo(0.5);
        _this.redCarrot4.scale.setTo(1);
        _this.redCarrot4.visible=false;
       
        _this.redPapaya1 = _this.add.sprite(580,165,'dhdcg1_4papaya');
        _this.redPapaya1.anchor.setTo(0.5);
        _this.redPapaya1.scale.setTo(0.8); 
        _this.redPapaya1.visible=false; 
        
        _this.redPapaya2 = _this.add.sprite(580,235,'dhdcg1_4papaya');
        _this.redPapaya2.anchor.setTo(0.5);
        _this.redPapaya2.scale.setTo(0.8);
        _this.redPapaya2.visible=false;
       
        _this.redPapaya3 = _this.add.sprite(580,305,'dhdcg1_4papaya');
        _this.redPapaya3.anchor.setTo(0.5);
        _this.redPapaya3.scale.setTo(0.8);
        _this.redPapaya3.visible=false;
       
        _this.redBalloon1 = _this.add.sprite(580,165,'dhdcg1_4balloon');
        _this.redBalloon1.anchor.setTo(0.5);
        _this.redBalloon1.scale.setTo(0.8); 
        _this.redBalloon1.visible=false; 
        
        _this.redBalloon2 = _this.add.sprite(580,235,'dhdcg1_4balloon');
        _this.redBalloon2.anchor.setTo(0.5);
        _this.redBalloon2.scale.setTo(0.8);
        _this.redBalloon2.visible=false;
       
        _this.redBalloon3 = _this.add.sprite(580,305,'dhdcg1_4balloon');
        _this.redBalloon3.anchor.setTo(0.5);
        _this.redBalloon3.scale.setTo(0.8);
        _this.redBalloon3.visible=false;
       
        _this.redFlower1 = _this.add.sprite(580,165,'dhdcg1_4flower');
        _this.redFlower1.anchor.setTo(0.5);
        _this.redFlower1.scale.setTo(0.9); 
        _this.redFlower1.visible=false; 
        
        _this.redFlower2 = _this.add.sprite(580,235,'dhdcg1_4flower');
        _this.redFlower2.anchor.setTo(0.5);
        _this.redFlower2.scale.setTo(0.9);
        _this.redFlower2.visible=false;
       
        _this.redFlower3 = _this.add.sprite(580,305,'dhdcg1_4flower');
        _this.redFlower3.anchor.setTo(0.5);
        _this.redFlower3.scale.setTo(0.9);
        _this.redFlower3.visible=false;
       
        _this.redWatermelon1 = _this.add.sprite(580,165,'dhdcg1_4watermelon');
        _this.redWatermelon1.anchor.setTo(0.5);
        _this.redWatermelon1.scale.setTo(0.9); 
        _this.redWatermelon1.visible=false; 
        
        _this.redWatermelon2 = _this.add.sprite(580,235,'dhdcg1_4watermelon');
        _this.redWatermelon2.anchor.setTo(0.5);
        _this.redWatermelon2.scale.setTo(0.9);
        _this.redWatermelon2.visible=false;
       
        _this.redOrange1 = _this.add.sprite(580,165,'dhdcg1_4orange');
        _this.redOrange1.anchor.setTo(0.5);
        _this.redOrange1.scale.setTo(1); 
        _this.redOrange1.visible=false; 
        
        _this.redOrange2 = _this.add.sprite(580,235,'dhdcg1_4orange');
        _this.redOrange2.anchor.setTo(0.5);
        _this.redOrange2.scale.setTo(1);
        _this.redOrange2.visible=false;
       
        _this.redShoe1 = _this.add.sprite(580,165,'dhdcg1_4shoe');
        _this.redShoe1.anchor.setTo(0.5);
        _this.redShoe1.scale.setTo(0.8); 
        _this.redShoe1.visible=false;
       
        _this.yellowFlower1 = _this.add.sprite(680,165,'dhdcg1_4flower');
        _this.yellowFlower1.anchor.setTo(0.5);
        _this.yellowFlower1.scale.setTo(1);
        _this.yellowFlower1.frame = 1;
        _this.yellowFlower1.visible=false;
       
        _this.yellowFlower2 = _this.add.sprite(680,235,'dhdcg1_4flower');
        _this.yellowFlower2.anchor.setTo(0.5);
        _this.yellowFlower2.scale.setTo(1);
        _this.yellowFlower2.frame = 1;
        _this.yellowFlower2.visible=false;
       
        _this.yellowFlower3 = _this.add.sprite(680,305,'dhdcg1_4flower');
        _this.yellowFlower3.anchor.setTo(0.5);
        _this.yellowFlower3.scale.setTo(1);
        _this.yellowFlower3.frame = 1;
        _this.yellowFlower3.visible=false;
        
        _this.yellowShoe1 = _this.add.sprite(680,165,'dhdcg1_4shoe');
        _this.yellowShoe1.anchor.setTo(0.5);
        _this.yellowShoe1.scale.setTo(0.8);
        _this.yellowShoe1.frame = 1;
        _this.yellowShoe1.visible=false;
       
        _this.yellowShoe2 = _this.add.sprite(680,235,'dhdcg1_4shoe');
        _this.yellowShoe2.anchor.setTo(0.5);
        _this.yellowShoe2.scale.setTo(0.8);
        _this.yellowShoe2.frame = 1;
        _this.yellowShoe2.visible=false;
       
        _this.yellowShoe3 = _this.add.sprite(680,305,'dhdcg1_4shoe');
        _this.yellowShoe3.anchor.setTo(0.5);
        _this.yellowShoe3.scale.setTo(0.8);
        _this.yellowShoe3.frame = 1;
        _this.yellowShoe3.visible=false;
       
        _this.yellowOrange1 = _this.add.sprite(680,165,'dhdcg1_4orange');
        _this.yellowOrange1.anchor.setTo(0.5);
        _this.yellowOrange1.scale.setTo(1);
        _this.yellowOrange1.frame = 1;
        _this.yellowOrange1.visible=false;
       
        _this.yellowOrange2 = _this.add.sprite(680,235,'dhdcg1_4orange');
        _this.yellowOrange2.anchor.setTo(0.5);
        _this.yellowOrange2.scale.setTo(1);
        _this.yellowOrange2.frame = 1;
        _this.yellowOrange2.visible=false;
       
        _this.yellowOrange3 = _this.add.sprite(680,305,'dhdcg1_4orange');
        _this.yellowOrange3.anchor.setTo(0.5);
        _this.yellowOrange3.scale.setTo(1);
        _this.yellowOrange3.frame = 1;
        _this.yellowOrange3.visible=false;
       
        _this.yellowCarrot1 = _this.add.sprite(680,165,'dhdcg1_4carrot');
        _this.yellowCarrot1.anchor.setTo(0.5);
        _this.yellowCarrot1.scale.setTo(1);
        _this.yellowCarrot1.frame = 1;
        _this.yellowCarrot1.visible=false;
       
        _this.yellowCherry1 = _this.add.sprite(680,145,'dhdcg1_4cherry');
        _this.yellowCherry1.anchor.setTo(0.5);
        _this.yellowCherry1.scale.setTo(0.8);
        _this.yellowCherry1.frame = 1;
        _this.yellowCherry1.visible=false;
       
        _this.yellowCherry2 = _this.add.sprite(680,200,'dhdcg1_4cherry');
        _this.yellowCherry2.anchor.setTo(0.5);
        _this.yellowCherry2.scale.setTo(0.8);
        _this.yellowCherry2.frame = 1;
        _this.yellowCherry2.visible=false;
       
        _this.yellowCherry3 = _this.add.sprite(680,260,'dhdcg1_4cherry');
        _this.yellowCherry3.anchor.setTo(0.5);
        _this.yellowCherry3.scale.setTo(0.8);
        _this.yellowCherry3.frame = 1;
        _this.yellowCherry3.visible=false;
       
        _this.yellowCherry4 = _this.add.sprite(680,315,'dhdcg1_4cherry');
        _this.yellowCherry4.anchor.setTo(0.5);
        _this.yellowCherry4.scale.setTo(0.8);
        _this.yellowCherry4.frame = 1;
        _this.yellowCherry4.visible=false;
       
        _this.yellowCherry5 = _this.add.sprite(680,375,'dhdcg1_4cherry');
        _this.yellowCherry5.anchor.setTo(0.5);
        _this.yellowCherry5.scale.setTo(0.8);
        _this.yellowCherry5.frame = 1;
        _this.yellowCherry5.visible=false;
       
        _this.yellowSmallBall1 = _this.add.sprite(680,155,'dhdcg1_4smallBall');
        _this.yellowSmallBall1.anchor.setTo(0.5);
        _this.yellowSmallBall1.scale.setTo(0.8);
        _this.yellowSmallBall1.frame = 1;
        _this.yellowSmallBall1.visible=false;
       
        _this.yellowSmallBall2 = _this.add.sprite(680,210,'dhdcg1_4smallBall');
        _this.yellowSmallBall2.anchor.setTo(0.5);
        _this.yellowSmallBall2.scale.setTo(0.8);
        _this.yellowSmallBall2.frame = 1;
        _this.yellowSmallBall2.visible=false;
       
        _this.yellowSmallBall3 = _this.add.sprite(680,265,'dhdcg1_4smallBall');
        _this.yellowSmallBall3.anchor.setTo(0.5);
        _this.yellowSmallBall3.scale.setTo(0.8);
        _this.yellowSmallBall3.frame = 1;
        _this.yellowSmallBall3.visible=false;
       
        _this.yellowSmallBall4 = _this.add.sprite(680,320,'dhdcg1_4smallBall');
        _this.yellowSmallBall4.anchor.setTo(0.5);
        _this.yellowSmallBall4.scale.setTo(0.8);
        _this.yellowSmallBall4.frame = 1;
        _this.yellowSmallBall4.visible=false;
       
        _this.yellowSmallBall5 = _this.add.sprite(680,375,'dhdcg1_4smallBall');
        _this.yellowSmallBall5.anchor.setTo(0.5);
        _this.yellowSmallBall5.scale.setTo(0.8);
        _this.yellowSmallBall5.frame = 1;
        _this.yellowSmallBall5.visible=false;
       
        _this.yellowBalloon1 = _this.add.sprite(680,165,'dhdcg1_4balloon');
        _this.yellowBalloon1.anchor.setTo(0.5);
        _this.yellowBalloon1.scale.setTo(0.8,0.7);
        _this.yellowBalloon1.frame = 1;
        _this.yellowBalloon1.visible=false;
       
        _this.yellowBalloon2 = _this.add.sprite(680,220,'dhdcg1_4balloon');
        _this.yellowBalloon2.anchor.setTo(0.5);
        _this.yellowBalloon2.scale.setTo(0.8,0.7);
        _this.yellowBalloon2.frame = 1;
        _this.yellowBalloon2.visible=false;
       
        _this.yellowBalloon3 = _this.add.sprite(680,275,'dhdcg1_4balloon');
        _this.yellowBalloon3.anchor.setTo(0.5);
        _this.yellowBalloon3.scale.setTo(0.8,0.7);
        _this.yellowBalloon3.frame = 1;
        _this.yellowBalloon3.visible=false;
       
        _this.yellowBalloon4 = _this.add.sprite(680,325,'dhdcg1_4balloon');
        _this.yellowBalloon4.anchor.setTo(0.5);
        _this.yellowBalloon4.scale.setTo(0.8,0.7);
        _this.yellowBalloon4.frame = 1;
        _this.yellowBalloon4.visible=false;
       
        _this.yellowBalloon5 = _this.add.sprite(680,380,'dhdcg1_4balloon');
        _this.yellowBalloon5.anchor.setTo(0.5);
        _this.yellowBalloon5.scale.setTo(0.8,0.7);
        _this.yellowBalloon5.frame = 1;
        _this.yellowBalloon5.visible=false;
       
        _this.yellowBall1 = _this.add.sprite(680,155,'dhdcg1_4ball');
        _this.yellowBall1.anchor.setTo(0.5);
        _this.yellowBall1.scale.setTo(0.8);
        _this.yellowBall1.frame = 1;
        _this.yellowBall1.visible=false;
       
        _this.yellowBall2 = _this.add.sprite(680,210,'dhdcg1_4ball');
        _this.yellowBall2.anchor.setTo(0.5);
        _this.yellowBall2.scale.setTo(0.8);
        _this.yellowBall2.frame = 1;
        _this.yellowBall2.visible=false;
       
        _this.yellowBall3 = _this.add.sprite(680,265,'dhdcg1_4ball');
        _this.yellowBall3.anchor.setTo(0.5);
        _this.yellowBall3.scale.setTo(0.8);
        _this.yellowBall3.frame = 1;
        _this.yellowBall3.visible=false;
       
        _this.yellowBall4 = _this.add.sprite(680,320,'dhdcg1_4ball');
        _this.yellowBall4.anchor.setTo(0.5);
        _this.yellowBall4.scale.setTo(0.8);
        _this.yellowBall4.frame = 1;
        _this.yellowBall4.visible=false;
       
        _this.yellowBall5 = _this.add.sprite(680,375,'dhdcg1_4ball');
        _this.yellowBall5.anchor.setTo(0.5);
        _this.yellowBall5.scale.setTo(0.8);
        _this.yellowBall5.frame = 1;
        _this.yellowBall5.visible=false;
       
        _this.yellowPapaya1 = _this.add.sprite(680,155,'dhdcg1_4papaya');
        _this.yellowPapaya1.anchor.setTo(0.5);
        _this.yellowPapaya1.scale.setTo(0.8);
        _this.yellowPapaya1.frame = 1;
        _this.yellowPapaya1.visible=false;
       
        _this.yellowPapaya2 = _this.add.sprite(680,210,'dhdcg1_4papaya');
        _this.yellowPapaya2.anchor.setTo(0.5);
        _this.yellowPapaya2.scale.setTo(0.8);
        _this.yellowPapaya2.frame = 1;
        _this.yellowPapaya2.visible=false;
       
        _this.yellowPapaya3 = _this.add.sprite(680,265,'dhdcg1_4papaya');
        _this.yellowPapaya3.anchor.setTo(0.5);
        _this.yellowPapaya3.scale.setTo(0.8);
        _this.yellowPapaya3.frame = 1;
        _this.yellowPapaya3.visible=false;
       
        _this.yellowPapaya4 = _this.add.sprite(680,320,'dhdcg1_4papaya');
        _this.yellowPapaya4.anchor.setTo(0.5);
        _this.yellowPapaya4.scale.setTo(0.8);
        _this.yellowPapaya4.frame = 1;
        _this.yellowPapaya4.visible=false;
       
        _this.yellowPapaya5 = _this.add.sprite(680,375,'dhdcg1_4papaya');
        _this.yellowPapaya5.anchor.setTo(0.5);
        _this.yellowPapaya5.scale.setTo(0.8);
        _this.yellowPapaya5.frame = 1;
        _this.yellowPapaya5.visible=false;
       
        _this.yellowWatermelon1 = _this.add.sprite(680,155,'dhdcg1_4watermelon');
        _this.yellowWatermelon1.anchor.setTo(0.5);
        _this.yellowWatermelon1.scale.setTo(1);
        _this.yellowWatermelon1.frame = 1;
        _this.yellowWatermelon1.visible=false;
       
        _this.yellowWatermelon2 = _this.add.sprite(680,210,'dhdcg1_4watermelon');
        _this.yellowWatermelon2.anchor.setTo(0.5);
        _this.yellowWatermelon2.scale.setTo(1);
        _this.yellowWatermelon2.frame = 1;
        _this.yellowWatermelon2.visible=false;
       
        _this.blueBall1 = _this.add.sprite(780,165,'dhdcg1_4ball');
        _this.blueBall1.anchor.setTo(0.5);
        _this.blueBall1.scale.setTo(0.9);
        _this.blueBall1.frame = 2;
        _this.blueBall1.visible=false;
       
        _this.blueBall2 = _this.add.sprite(780,235,'dhdcg1_4ball');
        _this.blueBall2.anchor.setTo(0.5);
        _this.blueBall2.scale.setTo(0.9);
        _this.blueBall2.frame = 2;
        _this.blueBall2.visible=false;
       
        _this.blueBall3 = _this.add.sprite(780,305,'dhdcg1_4ball');
        _this.blueBall3.anchor.setTo(0.5);
        _this.blueBall3.scale.setTo(0.9);
        _this.blueBall3.frame = 2;
        _this.blueBall3.visible=false;
       
        _this.blueBall4 = _this.add.sprite(780,375,'dhdcg1_4ball');
        _this.blueBall4.anchor.setTo(0.5);
        _this.blueBall4.scale.setTo(0.9);
        _this.blueBall4.frame = 2;
        _this.blueBall4.visible=false;
       
        _this.blueFlower1 = _this.add.sprite(780,165,'dhdcg1_4flower');
        _this.blueFlower1.anchor.setTo(0.5);
        _this.blueFlower1.scale.setTo(0.9);
        _this.blueFlower1.frame = 2;
        _this.blueFlower1.visible=false;
       
        _this.blueFlower2 = _this.add.sprite(780,235,'dhdcg1_4flower');
        _this.blueFlower2.anchor.setTo(0.5);
        _this.blueFlower2.scale.setTo(0.9);
        _this.blueFlower2.visible=false;
        _this.blueFlower2.frame = 2;
       
        _this.blueFlower3 = _this.add.sprite(780,305,'dhdcg1_4flower');
        _this.blueFlower3.anchor.setTo(0.5);
        _this.blueFlower3.scale.setTo(0.9);
        _this.blueFlower3.visible=false;
        _this.blueFlower3.frame = 2;
        
        _this.blueballoon1 = _this.add.sprite(780,175,'dhdcg1_4balloon');
        _this.blueballoon1.anchor.setTo(0.5);
        _this.blueballoon1.scale.setTo(0.8);
        _this.blueballoon1.frame = 2;
        _this.blueballoon1.visible=false;
       
        _this.blueballoon2 = _this.add.sprite(780,255,'dhdcg1_4balloon');
        _this.blueballoon2.anchor.setTo(0.5);
        _this.blueballoon2.scale.setTo(0.8);
        _this.blueballoon2.visible=false;
        _this.blueballoon2.frame = 2;
       
        _this.blueballoon3 = _this.add.sprite(780,335,'dhdcg1_4balloon');
        _this.blueballoon3.anchor.setTo(0.5);
        _this.blueballoon3.scale.setTo(0.8);
        _this.blueballoon3.visible=false;
        _this.blueballoon3.frame = 2;
       
        _this.blueOrange1 = _this.add.sprite(780,165,'dhdcg1_4orange');
        _this.blueOrange1.anchor.setTo(0.5);
        _this.blueOrange1.scale.setTo(1);
        _this.blueOrange1.frame = 2;
        _this.blueOrange1.visible=false;
       
        _this.blueOrange2 = _this.add.sprite(780,235,'dhdcg1_4orange');
        _this.blueOrange2.anchor.setTo(0.5);
        _this.blueOrange2.scale.setTo(1);
        _this.blueOrange2.visible=false;
        _this.blueOrange2.frame = 2;
       
        _this.blueOrange3 = _this.add.sprite(780,305,'dhdcg1_4orange');
        _this.blueOrange3.anchor.setTo(0.5);
        _this.blueOrange3.scale.setTo(1);
        _this.blueOrange3.visible=false;
        _this.blueOrange3.frame = 2;
       
        _this.blueOrange4 = _this.add.sprite(780,375,'dhdcg1_4orange');
        _this.blueOrange4.anchor.setTo(0.5);
        _this.blueOrange4.scale.setTo(1);
        _this.blueOrange4.visible=false;
        _this.blueOrange4.frame = 2;
       
        _this.blueWatermelon1 = _this.add.sprite(780,165,'dhdcg1_4watermelon');
        _this.blueWatermelon1.anchor.setTo(0.5);
        _this.blueWatermelon1.scale.setTo(1);
        _this.blueWatermelon1.frame = 2;
        _this.blueWatermelon1.visible=false;
       
        _this.blueWatermelon2 = _this.add.sprite(780,235,'dhdcg1_4watermelon');
        _this.blueWatermelon2.anchor.setTo(0.5);
        _this.blueWatermelon2.scale.setTo(1);
        _this.blueWatermelon2.visible=false;
        _this.blueWatermelon2.frame = 2;
       
        _this.blueWatermelon3 = _this.add.sprite(780,305,'dhdcg1_4watermelon');
        _this.blueWatermelon3.anchor.setTo(0.5);
        _this.blueWatermelon3.scale.setTo(1);
        _this.blueWatermelon3.visible=false;
        _this.blueWatermelon3.frame = 2;
       
        _this.blueWatermelon4 = _this.add.sprite(780,375,'dhdcg1_4watermelon');
        _this.blueWatermelon4.anchor.setTo(0.5);
        _this.blueWatermelon4.scale.setTo(1);
        _this.blueWatermelon4.visible=false;
        _this.blueWatermelon4.frame = 2;
       
        _this.blueCherry1 = _this.add.sprite(780,165,'dhdcg1_4cherry');
        _this.blueCherry1.anchor.setTo(0.5);
        _this.blueCherry1.scale.setTo(1);
        _this.blueCherry1.frame = 2;
        _this.blueCherry1.visible=false;
       
        _this.blueCherry2 = _this.add.sprite(780,235,'dhdcg1_4cherry');
        _this.blueCherry2.anchor.setTo(0.5);
        _this.blueCherry2.scale.setTo(1);
        _this.blueCherry2.visible=false;
        _this.blueCherry2.frame = 2;
       
        _this.blueCherry3 = _this.add.sprite(780,305,'dhdcg1_4cherry');
        _this.blueCherry3.anchor.setTo(0.5);
        _this.blueCherry3.scale.setTo(1);
        _this.blueCherry3.visible=false;
        _this.blueCherry3.frame = 2;
       
        _this.blueCherry4 = _this.add.sprite(780,375,'dhdcg1_4cherry');
        _this.blueCherry4.anchor.setTo(0.5);
        _this.blueCherry4.scale.setTo(1);
        _this.blueCherry4.visible=false;
        _this.blueCherry4.frame = 2;
       
        _this.blueCarrot1 = _this.add.sprite(780,165,'dhdcg1_4carrot');
        _this.blueCarrot1.anchor.setTo(0.5);
        _this.blueCarrot1.scale.setTo(1);
        _this.blueCarrot1.frame = 2;
        _this.blueCarrot1.visible=false;
       
        _this.blueCarrot2 = _this.add.sprite(780,235,'dhdcg1_4carrot');
        _this.blueCarrot2.anchor.setTo(0.5);
        _this.blueCarrot2.scale.setTo(1);
        _this.blueCarrot2.visible=false;
        _this.blueCarrot2.frame = 2;
       
        _this.blueCarrot3 = _this.add.sprite(780,305,'dhdcg1_4carrot');
        _this.blueCarrot3.anchor.setTo(0.5);
        _this.blueCarrot3.scale.setTo(1);
        _this.blueCarrot3.visible=false;
        _this.blueCarrot3.frame = 2;
       
        _this.blueCarrot4 = _this.add.sprite(780,375,'dhdcg1_4carrot');
        _this.blueCarrot4.anchor.setTo(0.5);
        _this.blueCarrot4.scale.setTo(1);
        _this.blueCarrot4.visible=false;
        _this.blueCarrot4.frame = 2;
       
        _this.blueShoe1 = _this.add.sprite(780,165,'dhdcg1_4shoe');
        _this.blueShoe1.anchor.setTo(0.5);
        _this.blueShoe1.scale.setTo(0.8);
        _this.blueShoe1.frame = 2;
        _this.blueShoe1.visible=false;
       
        _this.bluePapaya1 = _this.add.sprite(780,165,'dhdcg1_4papaya');
        _this.bluePapaya1.anchor.setTo(0.5);
        _this.bluePapaya1.scale.setTo(0.8);
        _this.bluePapaya1.frame = 2;
        _this.bluePapaya1.visible=false;
       
        _this.bluePapaya2 = _this.add.sprite(780,235,'dhdcg1_4papaya');
        _this.bluePapaya2.anchor.setTo(0.5);
        _this.bluePapaya2.scale.setTo(0.8);
        _this.bluePapaya2.visible=false;
        _this.bluePapaya2.frame = 2;
       
       _this.objectGrp = _this.add.group();
       
       _this.objectGrp.add(_this.greenWatermelon1);
       _this.objectGrp.add(_this.greenWatermelon2);
       _this.objectGrp.add(_this.greenPapaya1);
       _this.objectGrp.add(_this.greenPapaya2);
       _this.objectGrp.add(_this.greenSmallBall1);
       _this.objectGrp.add(_this.greenSmallBall2);
       _this.objectGrp.add(_this.greenSmallBall3);
       _this.objectGrp.add(_this.greenSmallBall4);
       _this.objectGrp.add(_this.greenFlower1);
       _this.objectGrp.add(_this.greenFlower2);
       _this.objectGrp.add(_this.greenFlower3);
       _this.objectGrp.add(_this.greenFlower4);
       _this.objectGrp.add(_this.greenCherry1);
       _this.objectGrp.add(_this.greenCherry2);
       _this.objectGrp.add(_this.greenCherry3);
       _this.objectGrp.add(_this.greenCherry4);
       _this.objectGrp.add(_this.greenOrange1);
       _this.objectGrp.add(_this.greenOrange2);
       _this.objectGrp.add(_this.greenOrange3);
       _this.objectGrp.add(_this.greenOrange4);
       _this.objectGrp.add(_this.greenBall1);
       _this.objectGrp.add(_this.greenBall2);
       _this.objectGrp.add(_this.greenBall3);
       _this.objectGrp.add(_this.greenShoe1);
       _this.objectGrp.add(_this.greenShoe2);
       _this.objectGrp.add(_this.greenShoe3);
       _this.objectGrp.add(_this.greenCarrot1);
       _this.objectGrp.add(_this.greenCarrot2);
       _this.objectGrp.add(_this.greenCarrot3);
       _this.objectGrp.add(_this.greenBalloon1);
       _this.objectGrp.add(_this.greenBalloon2);
       _this.objectGrp.add(_this.greenBalloon3);
       _this.objectGrp.add(_this.redSmallBall1);
       _this.objectGrp.add(_this.redSmallBall2);
       _this.objectGrp.add(_this.redSmallBall3);
       _this.objectGrp.add(_this.redSmallBall4);
       _this.objectGrp.add(_this.redCherry1);
       _this.objectGrp.add(_this.redCherry2);
       _this.objectGrp.add(_this.redCherry3);
       _this.objectGrp.add(_this.redCherry4);
       _this.objectGrp.add(_this.redCarrot1);
       _this.objectGrp.add(_this.redCarrot2);
       _this.objectGrp.add(_this.redCarrot3);
       _this.objectGrp.add(_this.redCarrot4);
       _this.objectGrp.add(_this.redBall1);
       _this.objectGrp.add(_this.redBall2);
       _this.objectGrp.add(_this.redBall3);
       _this.objectGrp.add(_this.redBall4);
       _this.objectGrp.add(_this.redPapaya1);
       _this.objectGrp.add(_this.redPapaya2);
       _this.objectGrp.add(_this.redPapaya3);
       _this.objectGrp.add(_this.redBalloon1);
       _this.objectGrp.add(_this.redBalloon2);
       _this.objectGrp.add(_this.redBalloon3);
       _this.objectGrp.add(_this.redFlower1);
       _this.objectGrp.add(_this.redFlower2);
       _this.objectGrp.add(_this.redFlower3);
       _this.objectGrp.add(_this.redWatermelon1);
       _this.objectGrp.add(_this.redWatermelon2);
       _this.objectGrp.add(_this.redOrange1);
       _this.objectGrp.add(_this.redOrange2);
       _this.objectGrp.add(_this.redShoe1);
       _this.objectGrp.add(_this.yellowFlower1);
       _this.objectGrp.add(_this.yellowFlower2);
       _this.objectGrp.add(_this.yellowFlower3);
       _this.objectGrp.add(_this.yellowShoe1);
       _this.objectGrp.add(_this.yellowShoe2);
       _this.objectGrp.add(_this.yellowShoe3);
       _this.objectGrp.add(_this.yellowOrange1);
       _this.objectGrp.add(_this.yellowOrange2);
       _this.objectGrp.add(_this.yellowOrange3);
       _this.objectGrp.add(_this.yellowCarrot1);
       _this.objectGrp.add(_this.yellowCherry1);
       _this.objectGrp.add(_this.yellowCherry2);
       _this.objectGrp.add(_this.yellowCherry3);
       _this.objectGrp.add(_this.yellowCherry4);
       _this.objectGrp.add(_this.yellowCherry5);
       _this.objectGrp.add(_this.yellowSmallBall1);
       _this.objectGrp.add(_this.yellowSmallBall2);
       _this.objectGrp.add(_this.yellowSmallBall3);
       _this.objectGrp.add(_this.yellowSmallBall4);
       _this.objectGrp.add(_this.yellowSmallBall5);
       _this.objectGrp.add(_this.yellowBalloon1);
       _this.objectGrp.add(_this.yellowBalloon2);
       _this.objectGrp.add(_this.yellowBalloon3);
       _this.objectGrp.add(_this.yellowBalloon4);
       _this.objectGrp.add(_this.yellowBalloon5);
       _this.objectGrp.add(_this.yellowBall1);
       _this.objectGrp.add(_this.yellowBall2);
       _this.objectGrp.add(_this.yellowBall3);
       _this.objectGrp.add(_this.yellowBall4);
       _this.objectGrp.add(_this.yellowBall5);
       _this.objectGrp.add(_this.yellowPapaya1);
       _this.objectGrp.add(_this.yellowPapaya2);
       _this.objectGrp.add(_this.yellowPapaya3);
       _this.objectGrp.add(_this.yellowPapaya4);
       _this.objectGrp.add(_this.yellowPapaya5);
       _this.objectGrp.add(_this.yellowWatermelon1);
       _this.objectGrp.add(_this.yellowWatermelon2);
       _this.objectGrp.add(_this.blueBall1);
       _this.objectGrp.add(_this.blueBall2);
       _this.objectGrp.add(_this.blueBall3);
       _this.objectGrp.add(_this.blueFlower1);
       _this.objectGrp.add(_this.blueFlower2);
       _this.objectGrp.add(_this.blueFlower3);
       _this.objectGrp.add(_this.blueballoon1);
       _this.objectGrp.add(_this.blueballoon2);
       _this.objectGrp.add(_this.blueballoon3);
       _this.objectGrp.add(_this.blueOrange1);
       _this.objectGrp.add(_this.blueOrange2);
       _this.objectGrp.add(_this.blueOrange3);
       _this.objectGrp.add(_this.blueOrange4);
       _this.objectGrp.add(_this.blueWatermelon1);
       _this.objectGrp.add(_this.blueWatermelon2);
       _this.objectGrp.add(_this.blueWatermelon3);
       _this.objectGrp.add(_this.blueWatermelon4);
       _this.objectGrp.add(_this.blueCherry1);
       _this.objectGrp.add(_this.blueCherry2);
       _this.objectGrp.add(_this.blueCherry3);
       _this.objectGrp.add(_this.blueCherry4);
       _this.objectGrp.add(_this.blueCarrot1);
       _this.objectGrp.add(_this.blueCarrot2);
       _this.objectGrp.add(_this.blueCarrot3);
       _this.objectGrp.add(_this.blueCarrot4);
       _this.objectGrp.add(_this.blueShoe1);
       _this.objectGrp.add(_this.bluePapaya1);
       _this.objectGrp.add(_this.bluePapaya2);
       
       _this.graphBoard = _this.add.sprite(655,270,'dhdcg1_4colorBoard');
       _this.graphBoard.anchor.setTo(0.5);
       _this.graphBoard.scale.setTo(1.1,1);
       _this.graphBoard.visible=false;
       
       _this.greenGraph = _this.add.sprite(563,300,'dhdcg1_4greenGraph');
       _this.greenGraph.anchor.setTo(0.5);
       _this.greenGraph.scale.setTo(1.1,1);
       
       _this.glow1 = _this.add.sprite(564,301,'dhdcg1_4glow');
       _this.glow1.anchor.setTo(0.5);
       _this.glow1.scale.setTo(1.1,1);
       _this.glow1.visible=false;
       
       _this.redGraph = _this.add.sprite(631,300,'dhdcg1_4redGraph');
       _this.redGraph.anchor.setTo(0.5);
       _this.redGraph.scale.setTo(1.1,1);
       
       _this.glow2 = _this.add.sprite(632,300,'dhdcg1_4glow');
       _this.glow2.anchor.setTo(0.5);
       _this.glow2.scale.setTo(1.1,1);
       _this.glow2.visible=false;
       
       _this.yellowGraph = _this.add.sprite(699,300,'dhdcg1_4yellowGraph');
       _this.yellowGraph.anchor.setTo(0.5);
       _this.yellowGraph.scale.setTo(1.1,1);
       
       _this.glow3 = _this.add.sprite(700,300,'dhdcg1_4glow');
       _this.glow3.anchor.setTo(0.5);
       _this.glow3.scale.setTo(1.1,1);
       _this.glow3.visible=false;
       
       _this.blueGraph = _this.add.sprite(767,300,'dhdcg1_4blueGraph');
       _this.blueGraph.anchor.setTo(0.5);
       _this.blueGraph.scale.setTo(1.1,1);
       
       _this.glow4 = _this.add.sprite(768,300,'dhdcg1_4glow');
       _this.glow4.anchor.setTo(0.5);
       _this.glow4.scale.setTo(1.1,1);
       _this.glow4.visible=false;
       
       _this.plus1 = _this.add.sprite(582,441,'dhdcg1_4plus');
       _this.plus1.anchor.setTo(0.5);
       _this.plus1.scale.setTo(1.1,1.1);
       _this.plus1.visible=false;
       _this.plus1.inputEnabled=true;
       _this.plus1.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();
          _this.minus1.inputEnabled=true;   
          _this.g+=1;
           console.log("Gvalue"+ _this.g);
           _this.plus1.frame=1;
           _this.time.events.add(100,function(){
              _this.plus1.frame=0;               
           },this);
          _this.greenBar();
           },_this);
       _this.minus1 = _this.add.sprite(547.8,441,'dhdcg1_4minus');
       _this.minus1.anchor.setTo(0.5);
       _this.minus1.scale.setTo(1.1,1.1);
       _this.minus1.visible=false;
       _this.minus1.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus1.inputEnabled=true;
           _this.g-=1;
           console.log("Gvalue"+ _this.g);
           _this.minus1.frame=1;
           _this.time.events.add(100,function(){
              _this.minus1.frame=0;               
           },this);
           _this.greenBar();
       },_this);
       
       
       _this.plus2 = _this.add.sprite(652,441,'dhdcg1_4plus');
       _this.plus2.anchor.setTo(0.5);
       _this.plus2.scale.setTo(1.1,1.1);
       _this.plus2.visible=false;
       _this.plus2.inputEnabled=true;
       _this.plus2.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.minus2.inputEnabled=true;   
           _this.r+=1;
           console.log("Gvalue"+ _this.g);
           _this.plus2.frame=1;
           _this.time.events.add(100,function(){
              _this.plus2.frame=0;               
           },this);
           _this.redBar();
           },_this);
       _this.minus2 = _this.add.sprite(617.6,441,'dhdcg1_4minus');
       _this.minus2.anchor.setTo(0.5);
       _this.minus2.scale.setTo(1.1,1.1);
       _this.minus2.visible=false;
       _this.minus2.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus2.inputEnabled=true;
           _this.r-=1;
           console.log("Gvalue"+ _this.g);
           _this.minus2.frame=1;
           _this.time.events.add(100,function(){
              _this.minus2.frame=0;               
           },this);
          _this.redBar();
       },_this);
       
       
       _this.plus3 = _this.add.sprite(720,441,'dhdcg1_4plus');
       _this.plus3.anchor.setTo(0.5);
       _this.plus3.scale.setTo(1.1,1.1);
       _this.plus3.visible=false;
       _this.plus3.inputEnabled=true;
       _this.plus3.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();   
          _this.minus3.inputEnabled=true;   
          _this.y+=1;
           console.log("Gvalue"+ _this.g);
           _this.plus3.frame=1;
           _this.time.events.add(100,function(){
              _this.plus3.frame=0;               
           },this);
          _this.yellowBar();
           },_this);
       _this.minus3 = _this.add.sprite(685.7,441,'dhdcg1_4minus');
       _this.minus3.anchor.setTo(0.5);
       _this.minus3.scale.setTo(1.1,1.1);
       _this.minus3.visible=false;
       _this.minus3.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus3.inputEnabled=true;
           _this.y-=1;
           console.log("Gvalue"+ _this.g);
           _this.minus3.frame=1;
           _this.time.events.add(100,function(){
              _this.minus3.frame=0;               
           },this);
           _this.yellowBar();
       },_this);
       
       
       _this.plus4 = _this.add.sprite(789,441,'dhdcg1_4plus');
       _this.plus4.anchor.setTo(0.5);
       _this.plus4.scale.setTo(1.1,1.1);
       _this.plus4.visible=false;
       _this.plus4.inputEnabled=true;
       _this.plus4.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();
          _this.minus4.inputEnabled=true;   
          _this.b+=1;
           console.log("Gvalue"+ _this.g);
           _this.plus4.frame=1;
           _this.time.events.add(100,function(){
              _this.plus4.frame=0;               
           },this);
          _this.blueBar();
           },_this);
       _this.minus4 = _this.add.sprite(754.9,441,'dhdcg1_4minus');
       _this.minus4.anchor.setTo(0.5);
       _this.minus4.scale.setTo(1.1,1.1);
       _this.minus4.visible=false;
       _this.minus4.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus4.inputEnabled=true;
           _this.b-=1;
           console.log("Gvalue"+ _this.g);
           _this.minus4.frame=1;
           _this.time.events.add(100,function(){
              _this.minus4.frame=0;               
           },this);
           _this.blueBar();
       },_this);
              
       _this.graphGrp2 = _this.add.group();
       _this.graphGrp2.add(_this.graphBoard);
       _this.graphGrp2.add(_this.plus1);
       _this.graphGrp2.add(_this.plus2);
       _this.graphGrp2.add(_this.plus3);
       _this.graphGrp2.add(_this.plus4);
       _this.graphGrp2.add(_this.minus1);
       _this.graphGrp2.add(_this.minus2);
       _this.graphGrp2.add(_this.minus3);
       _this.graphGrp2.add(_this.minus4);
              
       _this.graphGrp = _this.add.group();
      
       _this.graphGrp.add(_this.greenGraph);
       _this.graphGrp.add(_this.redGraph);
       _this.graphGrp.add(_this.yellowGraph);
       _this.graphGrp.add(_this.blueGraph);
       _this.graphGrp.add(_this.glow1);
       _this.graphGrp.add(_this.glow2);
       _this.graphGrp.add(_this.glow3);
       _this.graphGrp.add(_this.glow4);
       
   },
  loadShapeObjects:function(target){
     _this.redCircle1 = _this.add.sprite(480,165,'dhdcg1_4circle');
     _this.redCircle1.anchor.setTo(0.5);
     _this.redCircle1.scale.setTo(0.9);
     _this.redCircle1.visible = false;
      
     _this.redCircle2 = _this.add.sprite(480,230,'dhdcg1_4circle');
     _this.redCircle2.anchor.setTo(0.5);
     _this.redCircle2.scale.setTo(0.9);
     _this.redCircle2.visible = false;
      
     _this.redCircle3 = _this.add.sprite(480,300,'dhdcg1_4circle');
     _this.redCircle3.anchor.setTo(0.5);
     _this.redCircle3.scale.setTo(0.9);
     _this.redCircle3.visible = false;
      
     _this.redCircle4 = _this.add.sprite(480,370,'dhdcg1_4circle');
     _this.redCircle4.anchor.setTo(0.5);
     _this.redCircle4.scale.setTo(0.9);
     _this.redCircle4.visible = false;
      
     _this.redCirc1 = _this.add.sprite(480,165,'dhdcg1_4circle');
     _this.redCirc1.anchor.setTo(0.5);
     _this.redCirc1.scale.setTo(0.9);
     _this.redCirc1.visible = false;
      
     _this.redCirc2 = _this.add.sprite(480,230,'dhdcg1_4circle');
     _this.redCirc2.anchor.setTo(0.5);
     _this.redCirc2.scale.setTo(0.9);
     _this.redCirc2.visible = false;
      
     _this.redCirc3 = _this.add.sprite(480,300,'dhdcg1_4circle');
     _this.redCirc3.anchor.setTo(0.5);
     _this.redCirc3.scale.setTo(0.9);
     _this.redCirc3.visible = false;
      
     _this.redCirc4 = _this.add.sprite(480,370,'dhdcg1_4circle');
     _this.redCirc4.anchor.setTo(0.5);
     _this.redCirc4.scale.setTo(0.9);
     _this.redCirc4.visible = false; 
      
     _this.yellowCircle1 = _this.add.sprite(480,165,'dhdcg1_4circle');
     _this.yellowCircle1.anchor.setTo(0.5);
     _this.yellowCircle1.scale.setTo(0.9);
     _this.yellowCircle1.frame = 1;
     _this.yellowCircle1.visible = false;
      
     _this.yellowCircle2 = _this.add.sprite(480,230,'dhdcg1_4circle');
     _this.yellowCircle2.anchor.setTo(0.5);
     _this.yellowCircle2.scale.setTo(0.9);
     _this.yellowCircle2.frame = 1;
     _this.yellowCircle2.visible = false;
      
     _this.yellowCircle3 = _this.add.sprite(480,300,'dhdcg1_4circle');
     _this.yellowCircle3.anchor.setTo(0.5);
     _this.yellowCircle3.scale.setTo(0.9);
     _this.yellowCircle3.frame = 1;
     _this.yellowCircle3.visible = false;
      
     _this.yellowCircle4 = _this.add.sprite(480,370,'dhdcg1_4circle');
     _this.yellowCircle4.anchor.setTo(0.5);
     _this.yellowCircle4.scale.setTo(0.9);
     _this.yellowCircle4.frame = 1;
     _this.yellowCircle4.visible = false;
     
     _this.blueCircle1 = _this.add.sprite(480,165,'dhdcg1_4circle');
     _this.blueCircle1.anchor.setTo(0.5);
     _this.blueCircle1.scale.setTo(0.9);
     _this.blueCircle1.frame = 2;
     _this.blueCircle1.visible = false;
      
     _this.blueCircle2 = _this.add.sprite(480,230,'dhdcg1_4circle');
     _this.blueCircle2.anchor.setTo(0.5);
     _this.blueCircle2.scale.setTo(0.9);
     _this.blueCircle2.frame = 2;
     _this.blueCircle2.visible = false;
      
     _this.blueCircle3 = _this.add.sprite(480,300,'dhdcg1_4circle');
     _this.blueCircle3.anchor.setTo(0.5);
     _this.blueCircle3.scale.setTo(0.9);
     _this.blueCircle3.frame = 2;
     _this.blueCircle3.visible = false;
      
     _this.blueCircle4 = _this.add.sprite(480,370,'dhdcg1_4circle');
     _this.blueCircle4.anchor.setTo(0.5);
     _this.blueCircle4.scale.setTo(0.9);
     _this.blueCircle4.frame = 2;
     _this.blueCircle4.visible = false;
      
     _this.greenCircle1 = _this.add.sprite(480,165,'dhdcg1_4circle');
     _this.greenCircle1.anchor.setTo(0.5);
     _this.greenCircle1.scale.setTo(0.9);
     _this.greenCircle1.frame = 3;
     _this.greenCircle1.visible = false;
      
     _this.greenCircle2 = _this.add.sprite(480,230,'dhdcg1_4circle');
     _this.greenCircle2.anchor.setTo(0.5);
     _this.greenCircle2.scale.setTo(0.9);
     _this.greenCircle2.frame = 3;
     _this.greenCircle2.visible = false;
      
     _this.greenCircle3 = _this.add.sprite(480,300,'dhdcg1_4circle');
     _this.greenCircle3.anchor.setTo(0.5);
     _this.greenCircle3.scale.setTo(0.9);
     _this.greenCircle3.frame = 3;
     _this.greenCircle3.visible = false;
      
     _this.greenCircle4 = _this.add.sprite(480,370,'dhdcg1_4circle');
     _this.greenCircle4.anchor.setTo(0.5);
     _this.greenCircle4.scale.setTo(0.9);
     _this.greenCircle4.frame = 3;
     _this.greenCircle4.visible = false;
      
     _this.redSquare1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.redSquare1.anchor.setTo(0.5);
     _this.redSquare1.scale.setTo(0.7);
     _this.redSquare1.visible = false;
      
     _this.redSquare2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.redSquare2.anchor.setTo(0.5);
     _this.redSquare2.scale.setTo(0.7);
     _this.redSquare2.visible = false;
      
     _this.redSquare3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.redSquare3.anchor.setTo(0.5);
     _this.redSquare3.scale.setTo(0.7);
     _this.redSquare3.visible = false;
      
     _this.redSquare4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.redSquare4.anchor.setTo(0.5);
     _this.redSquare4.scale.setTo(0.7);
     _this.redSquare4.visible = false;
      
     _this.redSquare5 = _this.add.sprite(785,376,'dhdcg1_4square');
     _this.redSquare5.anchor.setTo(0.5);
     _this.redSquare5.scale.setTo(0.7);
     _this.redSquare5.visible = false;
      
     _this.yellowSquare1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.yellowSquare1.anchor.setTo(0.5);
     _this.yellowSquare1.scale.setTo(0.7);
     _this.yellowSquare1.frame = 1;
     _this.yellowSquare1.visible = false;
      
     _this.yellowSquare2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.yellowSquare2.anchor.setTo(0.5);
     _this.yellowSquare2.scale.setTo(0.7);
     _this.yellowSquare2.frame = 1;
     _this.yellowSquare2.visible = false;
      
     _this.yellowSquare3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.yellowSquare3.anchor.setTo(0.5);
     _this.yellowSquare3.scale.setTo(0.7);
     _this.yellowSquare3.frame = 1;
     _this.yellowSquare3.visible = false;
      
     _this.yellowSquare4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.yellowSquare4.anchor.setTo(0.5);
     _this.yellowSquare4.scale.setTo(0.7);
     _this.yellowSquare4.frame = 1;
     _this.yellowSquare4.visible = false;
      
     _this.yellowSquare5 = _this.add.sprite(785,376,'dhdcg1_4square');
     _this.yellowSquare5.anchor.setTo(0.5);
     _this.yellowSquare5.scale.setTo(0.7);
     _this.yellowSquare5.frame = 1;
     _this.yellowSquare5.visible = false;
      
     _this.yellowSqr1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.yellowSqr1.anchor.setTo(0.5);
     _this.yellowSqr1.scale.setTo(0.7);
     _this.yellowSqr1.frame = 1;
     _this.yellowSqr1.visible = false;
      
     _this.yellowSqr2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.yellowSqr2.anchor.setTo(0.5);
     _this.yellowSqr2.scale.setTo(0.7);
     _this.yellowSqr2.frame = 1;
     _this.yellowSqr2.visible = false;
      
     _this.yellowSqr3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.yellowSqr3.anchor.setTo(0.5);
     _this.yellowSqr3.scale.setTo(0.7);
     _this.yellowSqr3.frame = 1;
     _this.yellowSqr3.visible = false;
      
     _this.yellowSqr4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.yellowSqr4.anchor.setTo(0.5);
     _this.yellowSqr4.scale.setTo(0.7);
     _this.yellowSqr4.frame = 1;
     _this.yellowSqr4.visible = false;
      
     _this.yellowSqr5 = _this.add.sprite(785,376,'dhdcg1_4square');
     _this.yellowSqr5.anchor.setTo(0.5);
     _this.yellowSqr5.scale.setTo(0.7);
     _this.yellowSqr5.frame = 1;
     _this.yellowSqr5.visible = false;  
     
     _this.blueSquare1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.blueSquare1.anchor.setTo(0.5);
     _this.blueSquare1.scale.setTo(0.7);
     _this.blueSquare1.frame = 2;
     _this.blueSquare1.visible = false;
      
     _this.blueSquare2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.blueSquare2.anchor.setTo(0.5);
     _this.blueSquare2.scale.setTo(0.7);
     _this.blueSquare2.frame = 2;
     _this.blueSquare2.visible = false;
      
     _this.blueSquare3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.blueSquare3.anchor.setTo(0.5);
     _this.blueSquare3.scale.setTo(0.7);
     _this.blueSquare3.frame = 2;
     _this.blueSquare3.visible = false;
      
     _this.blueSquare4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.blueSquare4.anchor.setTo(0.5);
     _this.blueSquare4.scale.setTo(0.7);
     _this.blueSquare4.frame = 2;
     _this.blueSquare4.visible = false;
      
     _this.blueSquare5 = _this.add.sprite(785,376,'dhdcg1_4square');
     _this.blueSquare5.anchor.setTo(0.5);
     _this.blueSquare5.scale.setTo(0.7);
     _this.blueSquare5.frame = 2;
     _this.blueSquare5.visible = false;
      
     _this.greenSquare1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.greenSquare1.anchor.setTo(0.5);
     _this.greenSquare1.scale.setTo(0.7);
     _this.greenSquare1.frame = 3;
     _this.greenSquare1.visible = false;
      
     _this.greenSquare2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.greenSquare2.anchor.setTo(0.5);
     _this.greenSquare2.scale.setTo(0.7);
     _this.greenSquare2.frame = 3;
     _this.greenSquare2.visible = false;
      
     _this.greenSquare3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.greenSquare3.anchor.setTo(0.5);
     _this.greenSquare3.scale.setTo(0.7);
     _this.greenSquare3.frame = 3;
     _this.greenSquare3.visible = false;
      
     _this.greenSquare4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.greenSquare4.anchor.setTo(0.5);
     _this.greenSquare4.scale.setTo(0.7);
     _this.greenSquare4.frame = 3;
     _this.greenSquare4.visible = false;
      
     _this.greenSquare5 = _this.add.sprite(785,376,'dhdcg1_4square');
     _this.greenSquare5.anchor.setTo(0.5);
     _this.greenSquare5.scale.setTo(0.7);
     _this.greenSquare5.frame = 3;
     _this.greenSquare5.visible = false;
      
     _this.greenSqr1 = _this.add.sprite(785,156,'dhdcg1_4square');
     _this.greenSqr1.anchor.setTo(0.5);
     _this.greenSqr1.scale.setTo(0.7);
     _this.greenSqr1.frame = 3;
     _this.greenSqr1.visible = false;
      
     _this.greenSqr2 = _this.add.sprite(785,211,'dhdcg1_4square');
     _this.greenSqr2.anchor.setTo(0.5);
     _this.greenSqr2.scale.setTo(0.7);
     _this.greenSqr2.frame = 3;
     _this.greenSqr2.visible = false;
      
     _this.greenSqr3 = _this.add.sprite(785,266,'dhdcg1_4square');
     _this.greenSqr3.anchor.setTo(0.5);
     _this.greenSqr3.scale.setTo(0.7);
     _this.greenSqr3.frame = 3;
     _this.greenSqr3.visible = false;
      
     _this.greenSqr4 = _this.add.sprite(785,321,'dhdcg1_4square');
     _this.greenSqr4.anchor.setTo(0.5);
     _this.greenSqr4.scale.setTo(0.7);
     _this.greenSqr4.frame = 3;
     _this.greenSqr4.visible = false;  
      
     _this.redTriangle1 = _this.add.sprite(580,165,'dhdcg1_4triangle');
     _this.redTriangle1.anchor.setTo(0.5);
     _this.redTriangle1.scale.setTo(1);
     _this.redTriangle1.visible = false;
      
     _this.redTriangle2 = _this.add.sprite(580,235,'dhdcg1_4triangle');
     _this.redTriangle2.anchor.setTo(0.5);
     _this.redTriangle2.scale.setTo(1);
     _this.redTriangle2.visible = false;
      
     _this.yellowTriangle1 = _this.add.sprite(580,165,'dhdcg1_4triangle');
     _this.yellowTriangle1.anchor.setTo(0.5);
     _this.yellowTriangle1.scale.setTo(1);
     _this.yellowTriangle1.frame = 1;
     _this.yellowTriangle1.visible = false;
      
     _this.yellowTriangle2 = _this.add.sprite(580,235,'dhdcg1_4triangle');
     _this.yellowTriangle2.anchor.setTo(0.5);
     _this.yellowTriangle2.scale.setTo(1);
     _this.yellowTriangle2.frame = 1;
     _this.yellowTriangle2.visible = false;
      
     _this.yellowTriangle3 = _this.add.sprite(580,305,'dhdcg1_4triangle');
     _this.yellowTriangle3.anchor.setTo(0.5);
     _this.yellowTriangle3.scale.setTo(1);
     _this.yellowTriangle3.frame = 1;
     _this.yellowTriangle3.visible = false;
     
     _this.blueTriangle1 = _this.add.sprite(580,165,'dhdcg1_4triangle');
     _this.blueTriangle1.anchor.setTo(0.5);
     _this.blueTriangle1.scale.setTo(1);
     _this.blueTriangle1.frame = 2;
     _this.blueTriangle1.visible = false;
      
     _this.blueTriangle2 = _this.add.sprite(580,235,'dhdcg1_4triangle');
     _this.blueTriangle2.anchor.setTo(0.5);
     _this.blueTriangle2.scale.setTo(1);
     _this.blueTriangle2.frame = 2;
     _this.blueTriangle2.visible = false;
      
     _this.blueTriangle3 = _this.add.sprite(580,305,'dhdcg1_4triangle');
     _this.blueTriangle3.anchor.setTo(0.5);
     _this.blueTriangle3.scale.setTo(1);
     _this.blueTriangle3.frame = 2;
     _this.blueTriangle3.visible = false;
      
     _this.greenTriangle1 = _this.add.sprite(580,165,'dhdcg1_4triangle');
     _this.greenTriangle1.anchor.setTo(0.5);
     _this.greenTriangle1.scale.setTo(1);
     _this.greenTriangle1.frame = 3;
     _this.greenTriangle1.visible = false;
      
     _this.greenTriangle2 = _this.add.sprite(580,235,'dhdcg1_4triangle');
     _this.greenTriangle2.anchor.setTo(0.5);
     _this.greenTriangle2.scale.setTo(1);
     _this.greenTriangle2.frame = 3;
     _this.greenTriangle2.visible = false;
      
     _this.greenTriangle3 = _this.add.sprite(580,305,'dhdcg1_4triangle');
     _this.greenTriangle3.anchor.setTo(0.5);
     _this.greenTriangle3.scale.setTo(1);
     _this.greenTriangle3.frame = 3;
     _this.greenTriangle3.visible = false;
      
     _this.redOval1 = _this.add.sprite(685,165,'dhdcg1_4oval');
     _this.redOval1.anchor.setTo(0.5);
     _this.redOval1.scale.setTo(0.9);
     _this.redOval1.visible = false;
      
     _this.redOval2 = _this.add.sprite(685,230,'dhdcg1_4oval');
     _this.redOval2.anchor.setTo(0.5);
     _this.redOval2.scale.setTo(0.9);
     _this.redOval2.visible = false;
      
     _this.redOval3 = _this.add.sprite(685,300,'dhdcg1_4oval');
     _this.redOval3.anchor.setTo(0.5);
     _this.redOval3.scale.setTo(0.9);
     _this.redOval3.visible = false;
      
     _this.redOval4 = _this.add.sprite(685,370,'dhdcg1_4oval');
     _this.redOval4.anchor.setTo(0.5);
     _this.redOval4.scale.setTo(0.9);
     _this.redOval4.visible = false;
      
     _this.yellowOval1 = _this.add.sprite(685,165,'dhdcg1_4oval');
     _this.yellowOval1.anchor.setTo(0.5);
     _this.yellowOval1.scale.setTo(0.9);
     _this.yellowOval1.frame = 1;
     _this.yellowOval1.visible = false;
      
     _this.yellowOval2 = _this.add.sprite(685,230,'dhdcg1_4oval');
     _this.yellowOval2.anchor.setTo(0.5);
     _this.yellowOval2.scale.setTo(0.9);
     _this.yellowOval2.frame = 1;
     _this.yellowOval2.visible = false;
      
     _this.yellowOval3 = _this.add.sprite(685,300,'dhdcg1_4oval');
     _this.yellowOval3.anchor.setTo(0.5);
     _this.yellowOval3.scale.setTo(0.9);
     _this.yellowOval3.frame = 1;
     _this.yellowOval3.visible = false;
      
     _this.yellowOval4 = _this.add.sprite(685,370,'dhdcg1_4oval');
     _this.yellowOval4.anchor.setTo(0.5);
     _this.yellowOval4.scale.setTo(0.9);
     _this.yellowOval4.frame = 1;
     _this.yellowOval4.visible = false;
     
     _this.blueOval1 = _this.add.sprite(685,165,'dhdcg1_4oval');
     _this.blueOval1.anchor.setTo(0.5);
     _this.blueOval1.scale.setTo(0.9);
     _this.blueOval1.frame = 2;
     _this.blueOval1.visible = false;
      
     _this.blueOval2 = _this.add.sprite(685,230,'dhdcg1_4oval');
     _this.blueOval2.anchor.setTo(0.5);
     _this.blueOval2.scale.setTo(0.9);
     _this.blueOval2.frame = 2;
     _this.blueOval2.visible = false;
      
     _this.blueOval3 = _this.add.sprite(685,300,'dhdcg1_4oval');
     _this.blueOval3.anchor.setTo(0.5);
     _this.blueOval3.scale.setTo(0.9);
     _this.blueOval3.frame = 2;
     _this.blueOval3.visible = false;
      
     _this.blueOval4 = _this.add.sprite(685,370,'dhdcg1_4oval');
     _this.blueOval4.anchor.setTo(0.5);
     _this.blueOval4.scale.setTo(0.9);
     _this.blueOval4.frame = 2;
     _this.blueOval4.visible = false;
      
     _this.greenOval1 = _this.add.sprite(685,165,'dhdcg1_4oval');
     _this.greenOval1.anchor.setTo(0.5);
     _this.greenOval1.scale.setTo(0.9);
     _this.greenOval1.frame = 3;
     _this.greenOval1.visible = false; 
      
     _this.greenOval2 = _this.add.sprite(685,230,'dhdcg1_4oval');
     _this.greenOval2.anchor.setTo(0.5);
     _this.greenOval2.scale.setTo(0.9);
     _this.greenOval2.frame = 3;
     _this.greenOval2.visible = false; 
      
     _this.greenOval3 = _this.add.sprite(685,300,'dhdcg1_4oval');
     _this.greenOval3.anchor.setTo(0.5);
     _this.greenOval3.scale.setTo(0.9);
     _this.greenOval3.frame = 3;
     _this.greenOval3.visible = false; 
      
     _this.greenOval4 = _this.add.sprite(685,370,'dhdcg1_4oval');
     _this.greenOval4.anchor.setTo(0.5);
     _this.greenOval4.scale.setTo(0.9);
     _this.greenOval4.frame = 3;
     _this.greenOval4.visible = false;
      
     _this.objectGrp = _this.add.group();
       
       _this.objectGrp.add(_this.redCircle1);
       _this.objectGrp.add(_this.redCircle2);
       _this.objectGrp.add(_this.redCircle3);
       _this.objectGrp.add(_this.redCircle4);
       _this.objectGrp.add(_this.redCirc1);
       _this.objectGrp.add(_this.redCirc2);
       _this.objectGrp.add(_this.redCirc3);
       _this.objectGrp.add(_this.redCirc4);
       _this.objectGrp.add(_this.greenCircle1);
       _this.objectGrp.add(_this.greenCircle2);
       _this.objectGrp.add(_this.greenCircle3);
       _this.objectGrp.add(_this.greenCircle4);
       _this.objectGrp.add(_this.blueCircle1);
       _this.objectGrp.add(_this.blueCircle2);
       _this.objectGrp.add(_this.blueCircle3);
       _this.objectGrp.add(_this.blueCircle4);
       _this.objectGrp.add(_this.yellowCircle1);
       _this.objectGrp.add(_this.yellowCircle2);
       _this.objectGrp.add(_this.yellowCircle3);
       _this.objectGrp.add(_this.yellowCircle4);
       _this.objectGrp.add(_this.redSquare1);
       _this.objectGrp.add(_this.redSquare2);
       _this.objectGrp.add(_this.redSquare3);
       _this.objectGrp.add(_this.redSquare4);
       _this.objectGrp.add(_this.redSquare5);
       _this.objectGrp.add(_this.yellowSquare1);
       _this.objectGrp.add(_this.yellowSquare2);
       _this.objectGrp.add(_this.yellowSquare3);
       _this.objectGrp.add(_this.yellowSquare4);
       _this.objectGrp.add(_this.yellowSquare5);
       _this.objectGrp.add(_this.yellowSqr1);
       _this.objectGrp.add(_this.yellowSqr2);
       _this.objectGrp.add(_this.yellowSqr3);
       _this.objectGrp.add(_this.yellowSqr4);
       _this.objectGrp.add(_this.yellowSqr5);
       _this.objectGrp.add(_this.blueSquare1);
       _this.objectGrp.add(_this.blueSquare2);
       _this.objectGrp.add(_this.blueSquare3);
       _this.objectGrp.add(_this.blueSquare4);
       _this.objectGrp.add(_this.blueSquare5);
       _this.objectGrp.add(_this.greenSquare1);
       _this.objectGrp.add(_this.greenSquare2);
       _this.objectGrp.add(_this.greenSquare3);
       _this.objectGrp.add(_this.greenSquare4);
       _this.objectGrp.add(_this.greenSquare5);
       _this.objectGrp.add(_this.greenSqr1);
       _this.objectGrp.add(_this.greenSqr2);
       _this.objectGrp.add(_this.greenSqr3);
       _this.objectGrp.add(_this.greenSqr4);
       _this.objectGrp.add(_this.redTriangle1);
       _this.objectGrp.add(_this.redTriangle2);
       _this.objectGrp.add(_this.greenTriangle1);
       _this.objectGrp.add(_this.greenTriangle2);
       _this.objectGrp.add(_this.greenTriangle3);
       _this.objectGrp.add(_this.blueTriangle1);
       _this.objectGrp.add(_this.blueTriangle2);
       _this.objectGrp.add(_this.blueTriangle3);
       _this.objectGrp.add(_this.yellowTriangle1);
       _this.objectGrp.add(_this.yellowTriangle2);
       _this.objectGrp.add(_this.yellowTriangle3);
       _this.objectGrp.add(_this.redOval1);
       _this.objectGrp.add(_this.redOval2);
       _this.objectGrp.add(_this.redOval3);
       _this.objectGrp.add(_this.redOval4);
       _this.objectGrp.add(_this.yellowOval1);
       _this.objectGrp.add(_this.yellowOval2);
       _this.objectGrp.add(_this.yellowOval3);
       _this.objectGrp.add(_this.yellowOval4);
       _this.objectGrp.add(_this.blueOval1);
       _this.objectGrp.add(_this.blueOval2);
       _this.objectGrp.add(_this.blueOval3);
       _this.objectGrp.add(_this.blueOval4);
       _this.objectGrp.add(_this.greenOval1);
       _this.objectGrp.add(_this.greenOval2);
       _this.objectGrp.add(_this.greenOval3);
       _this.objectGrp.add(_this.greenOval4);
              
       _this.graphBoard = _this.add.sprite(655,270,'dhdcg1_4shapeBoard');
       _this.graphBoard.anchor.setTo(0.5);
       _this.graphBoard.scale.setTo(1.1,1);
       _this.graphBoard.visible=false;
       
       _this.circleGraph = _this.add.sprite(563,300,'dhdcg1_4emptyGraph');
       _this.circleGraph.anchor.setTo(0.5);
       _this.circleGraph.scale.setTo(1.1,1);
      
       _this.glow1 = _this.add.sprite(564,300,'dhdcg1_4glow');
       _this.glow1.anchor.setTo(0.5);
       _this.glow1.scale.setTo(1.1,1);
       _this.glow1.visible=false;
       
       _this.triangleGraph = _this.add.sprite(631,300,'dhdcg1_4emptyGraph');
       _this.triangleGraph.anchor.setTo(0.5);
       _this.triangleGraph.scale.setTo(1.1,1);
      
       _this.glow2 = _this.add.sprite(632,300,'dhdcg1_4glow');
       _this.glow2.anchor.setTo(0.5);
       _this.glow2.scale.setTo(1.1,1);
       _this.glow2.visible=false;
       
       _this.ovalGraph = _this.add.sprite(699,300,'dhdcg1_4emptyGraph');
       _this.ovalGraph.anchor.setTo(0.5);
       _this.ovalGraph.scale.setTo(1.1,1);
      
       _this.glow3 = _this.add.sprite(700,300,'dhdcg1_4glow');
       _this.glow3.anchor.setTo(0.5);
       _this.glow3.scale.setTo(1.1,1);
       _this.glow3.visible=false;
       
       _this.squareGraph = _this.add.sprite(767,300,'dhdcg1_4emptyGraph');
       _this.squareGraph.anchor.setTo(0.5);
       _this.squareGraph.scale.setTo(1.1,1);
      
       _this.glow4 = _this.add.sprite(768,300,'dhdcg1_4glow');
       _this.glow4.anchor.setTo(0.5);
       _this.glow4.scale.setTo(1.1,1);
       _this.glow4.visible=false;
       
       _this.plus1 = _this.add.sprite(582,441,'dhdcg1_4plus');
       _this.plus1.anchor.setTo(0.5);
       _this.plus1.scale.setTo(1.1,1.1);
       _this.plus1.visible=false;
       _this.plus1.inputEnabled=true;
       _this.plus1.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play(); 
          _this.minus1.inputEnabled=true;   
          _this.cir+=1;
           console.log("Gvalue"+ _this.cir);
           _this.plus1.frame=1;
           _this.time.events.add(100,function(){
              _this.plus1.frame=0;               
           },this);
          _this.circleBar();
           },_this);
       _this.minus1 = _this.add.sprite(547.8,441,'dhdcg1_4minus');
       _this.minus1.anchor.setTo(0.5);
       _this.minus1.scale.setTo(1.1,1.1);
       _this.minus1.visible=false;
       _this.minus1.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus1.inputEnabled=true;
           _this.cir-=1;
           console.log("Gvalue"+ _this.cir);
           _this.minus1.frame=1;
           _this.time.events.add(100,function(){
              _this.minus1.frame=0;               
           },this);
           _this.circleBar();
       },_this);
       
       
       _this.plus2 = _this.add.sprite(652,441,'dhdcg1_4plus');
       _this.plus2.anchor.setTo(0.5);
       _this.plus2.scale.setTo(1.1,1.1);
       _this.plus2.visible=false;
       _this.plus2.inputEnabled=true;
       _this.plus2.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.minus2.inputEnabled=true;   
           _this.tri+=1;
           console.log("Gvalue"+ _this.tri);
           _this.plus2.frame=1;
           _this.time.events.add(100,function(){
              _this.plus2.frame=0;               
           },this);
           _this.triangleBar();
           },_this);
       _this.minus2 = _this.add.sprite(617.6,441,'dhdcg1_4minus');
       _this.minus2.anchor.setTo(0.5);
       _this.minus2.scale.setTo(1.1,1.1);
       _this.minus2.visible=false;
       _this.minus2.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus2.inputEnabled=true;
           _this.tri-=1;
           console.log("Gvalue"+ _this.tri);
           _this.minus2.frame=1;
           _this.time.events.add(100,function(){
              _this.minus2.frame=0;               
           },this);
          _this.triangleBar();
       },_this);
       
       
       _this.plus3 = _this.add.sprite(720,441,'dhdcg1_4plus');
       _this.plus3.anchor.setTo(0.5);
       _this.plus3.scale.setTo(1.1,1.1);
       _this.plus3.visible=false;
       _this.plus3.inputEnabled=true;
       _this.plus3.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();   
          _this.minus3.inputEnabled=true;   
          _this.ova+=1;
           console.log("Gvalue"+ _this.ova);
           _this.plus3.frame=1;
           _this.time.events.add(100,function(){
              _this.plus3.frame=0;               
           },this);
          _this.ovalBar();
           },_this);
       _this.minus3 = _this.add.sprite(685.7,441,'dhdcg1_4minus');
       _this.minus3.anchor.setTo(0.5);
       _this.minus3.scale.setTo(1.1,1.1);
       _this.minus3.visible=false;
       _this.minus3.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus3.inputEnabled=true;
           _this.ova-=1;
           console.log("Gvalue"+ _this.ova);
           _this.minus3.frame=1;
           _this.time.events.add(100,function(){
              _this.minus3.frame=0;               
           },this);
           _this.ovalBar();
       },_this);
       
       
       _this.plus4 = _this.add.sprite(789,441,'dhdcg1_4plus');
       _this.plus4.anchor.setTo(0.5);
       _this.plus4.scale.setTo(1.1,1.1);
       _this.plus4.visible=false;
       _this.plus4.inputEnabled=true;
       _this.plus4.events.onInputDown.add(function(target){
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();   
          _this.minus4.inputEnabled=true;   
          _this.squ+=1;
           console.log("Gvalue"+ _this.squ);
           _this.plus4.frame=1;
           _this.time.events.add(100,function(){
              _this.plus4.frame=0;               
           },this);
          _this.squareBar();
           },_this);
       _this.minus4 = _this.add.sprite(754.9,441,'dhdcg1_4minus');
       _this.minus4.anchor.setTo(0.5);
       _this.minus4.scale.setTo(1.1,1.1);
       _this.minus4.visible=false;
       _this.minus4.events.onInputDown.add(function(target){
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.plus4.inputEnabled=true;
           _this.squ-=1;
           console.log("Gvalue"+ _this.squ);
           _this.minus4.frame=1;
           _this.time.events.add(100,function(){
              _this.minus4.frame=0;               
           },this);
           _this.squareBar();
       },_this);
              
       _this.graphGrp2 = _this.add.group();
       _this.graphGrp2.add(_this.graphBoard);
       _this.graphGrp2.add(_this.plus1);
       _this.graphGrp2.add(_this.plus2);
       _this.graphGrp2.add(_this.plus3);
       _this.graphGrp2.add(_this.plus4);
       _this.graphGrp2.add(_this.minus1);
       _this.graphGrp2.add(_this.minus2);
       _this.graphGrp2.add(_this.minus3);
       _this.graphGrp2.add(_this.minus4);
       
       _this.graphGrp = _this.add.group();
      
       _this.graphGrp.add(_this.circleGraph);
       _this.graphGrp.add(_this.triangleGraph);
       _this.graphGrp.add(_this.ovalGraph);
       _this.graphGrp.add(_this.squareGraph);
       _this.graphGrp.add(_this.glow1);
       _this.graphGrp.add(_this.glow2);
       _this.graphGrp.add(_this.glow3);
       _this.graphGrp.add(_this.glow4);
  },
   
  /****************************firstquestion************************/
  gotoFirstQuestion:function(){
         _this.questionNo =1;
         _this.getVoice1();
         //_this.no11++;
         console.log("one");
        
        _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
        _this.emptyBox.anchor.setTo(0.5);
        _this.emptyBox.scale.setTo(1);
        
        _this.colorBox = _this.add.sprite(630,270,'dhdcg1_4colorBox');
        _this.colorBox.anchor.setTo(0.5);
        _this.colorBox.scale.setTo(1);
        
        _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.scale.setTo(1);
        _this.tickMark.visible = false;
        
        _this.boxGroup = _this.add.group();
        
        _this.boxGroup.add(_this.emptyBox);
        _this.boxGroup.add(_this.colorBox);
                
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark2.anchor.setTo(0.5);
        _this.tickMark2.scale.setTo(1);
        _this.tickMark2.visible=false;
        
        _this.blueballoon = _this.add.sprite(130,160,'dhdcg1_4balloon');
        _this.blueballoon.anchor.setTo(0.5);
        _this.blueballoon.scale.setTo(1.1,1.1);
        _this.blueballoon.frame = 2;
        _this.blueballoon.name = "blueBalloon";
        _this.blueballoon.inputEnabled=true;
        _this.blueballoon.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.greenPapaya = _this.add.sprite(220,160,'dhdcg1_4papaya');
        _this.greenPapaya.anchor.setTo(0.5);
        _this.greenPapaya.scale.setTo(1);
        _this.greenPapaya.frame = 3;
        _this.greenPapaya.name = "greenPapaya";
        _this.greenPapaya.inputEnabled=true;
        _this.greenPapaya.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.redBall = _this.add.sprite(340,150,'dhdcg1_4ball');
        _this.redBall.anchor.setTo(0.5);
        _this.redBall.scale.setTo(1.1,1.1);
        _this.redBall.inputEnabled=true;
        _this.redBall.name="redBall";
        _this.redBall.events.onInputDown.add(_this.redDrag,_this);
        
        _this.yellowShoe = _this.add.sprite(100,260,'dhdcg1_4shoe');
        _this.yellowShoe.anchor.setTo(0.5);
        _this.yellowShoe.scale.setTo(1);
        _this.yellowShoe.frame = 1;
        _this.yellowShoe.name = "yellowShoe";
        _this.yellowShoe.inputEnabled=true;
        _this.yellowShoe.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.redCarrot = _this.add.sprite(200,250,'dhdcg1_4carrot');
        _this.redCarrot.anchor.setTo(0.5);
        _this.redCarrot.scale.setTo(1);
        _this.redCarrot.inputEnabled=true;
        _this.redCarrot.name="redCarrot";
        _this.redCarrot.events.onInputDown.add(_this.redDrag,_this);
        
        _this.blueFlower = _this.add.sprite(300,250,'dhdcg1_4flower');
        _this.blueFlower.anchor.setTo(0.5);
        _this.blueFlower.scale.setTo(1.1,1.1);
        _this.blueFlower.frame = 2;
        _this.blueFlower.name = "blueFlower";
        _this.blueFlower.inputEnabled=true;
        _this.blueFlower.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.redCherry = _this.add.sprite(100,360,'dhdcg1_4cherry');
        _this.redCherry.anchor.setTo(0.5);
        _this.redCherry.scale.setTo(1);
        _this.redCherry.inputEnabled=true;
        _this.redCherry.name="redCherry";
        _this.redCherry.events.onInputDown.add(_this.redDrag,_this);
        
        _this.blueBall = _this.add.sprite(200,340,'dhdcg1_4ball');
        _this.blueBall.anchor.setTo(0.5);
        _this.blueBall.scale.setTo(1.1,1.1);
        _this.blueBall.frame = 2;
        _this.blueBall.name = "blueBall";
        _this.blueBall.inputEnabled=true;
        _this.blueBall.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.greenWatermelon = _this.add.sprite(320,340,'dhdcg1_4watermelon');
        _this.greenWatermelon.anchor.setTo(0.5);
        _this.greenWatermelon.scale.setTo(1.1,1.1);
        _this.greenWatermelon.frame = 3;
        _this.greenWatermelon.name = "greenWatermelon";
        _this.greenWatermelon.inputEnabled=true;
        _this.greenWatermelon.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.yellowOrange = _this.add.sprite(130,440,'dhdcg1_4orange');
        _this.yellowOrange.anchor.setTo(0.5);
        _this.yellowOrange.scale.setTo(1.1,1.1);
        _this.yellowOrange.frame = 1;
        _this.yellowOrange.name = "yellowOrange";
        _this.yellowOrange.inputEnabled=true;
        _this.yellowOrange.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.redSmallBall = _this.add.sprite(220,430,'dhdcg1_4smallBall');
        _this.redSmallBall.anchor.setTo(0.5);
        _this.redSmallBall.scale.setTo(1);
        _this.redSmallBall.inputEnabled=true;
        _this.redSmallBall.name="redSmallBall";
        _this.redSmallBall.events.onInputDown.add(_this.redDrag,_this);
        
        _this.yellowFlower = _this.add.sprite(320,430,'dhdcg1_4flower');
        _this.yellowFlower.anchor.setTo(0.5);
        _this.yellowFlower.scale.setTo(1.1,1.1);
        _this.yellowFlower.frame = 1;
        _this.yellowFlower.name = "yellowFlower";
        _this.yellowFlower.inputEnabled=true;
        _this.yellowFlower.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.objectGroup = _this.add.group();
        _this.objectGroup.add(_this.blueballoon);
        _this.objectGroup.add(_this.greenPapaya);
        _this.objectGroup.add(_this.redBall);
        _this.objectGroup.add(_this.yellowShoe);
        _this.objectGroup.add(_this.redCarrot);
        _this.objectGroup.add(_this.blueFlower);
        _this.objectGroup.add(_this.redCherry);
        _this.objectGroup.add(_this.blueBall);
        _this.objectGroup.add(_this.greenWatermelon);
        _this.objectGroup.add(_this.yellowOrange);
        _this.objectGroup.add(_this.redSmallBall);
        _this.objectGroup.add(_this.yellowFlower);
        
        _this.objectGroup.x = -600;
            _this.tween = _this.add.tween(_this.objectGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.loadColorObjects();
        
        _this.greenGraph.name="correctAnswer1";
        _this.greenGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=2;
            _this.checkAns3(target);
        },_this);
        
        _this.redGraph.name="wrongAnswer";
        _this.redGraph.events.onInputDown.add(function(target){
            _this.glow2.visible=true;
            _this.glow2.frame=4;
            _this.checkAns3(target);
        },_this);
        
        _this.yellowGraph.name="wrongAnswer";
        _this.yellowGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=3;
            _this.checkAns3(target);
        },_this);
          
        _this.blueGraph.name="wrongAnswer";      
        _this.blueGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=3;
            _this.checkAns3(target);
        },_this);
        
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
        
        _this.rightAns="2433";
                        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);

        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    
  gotoSecondQuestion:function(){
         _this.questionNo =2;
         _this.getVoice1();
         //_this.no11++;
         console.log("two");
        
        _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
        _this.emptyBox.anchor.setTo(0.5);
        _this.emptyBox.scale.setTo(1);
        
        _this.colorBox = _this.add.sprite(630,270,'dhdcg1_4colorBox');
        _this.colorBox.anchor.setTo(0.5);
        _this.colorBox.scale.setTo(1);
        
        _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.scale.setTo(1);
        _this.tickMark.visible = false;
        
        _this.boxGroup = _this.add.group();
        
        _this.boxGroup.add(_this.emptyBox);
        _this.boxGroup.add(_this.colorBox);
                
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark2.anchor.setTo(0.5);
        _this.tickMark2.scale.setTo(1);
        _this.tickMark2.visible=false;
        
        _this.blueCarrot = _this.add.sprite(110,150,'dhdcg1_4carrot');
        _this.blueCarrot.anchor.setTo(0.5);
        _this.blueCarrot.scale.setTo(1.1,1.1);
        _this.blueCarrot.frame = 2;
        _this.blueCarrot.name = "blueCarrot";
        _this.blueCarrot.inputEnabled=true;
        _this.blueCarrot.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.redPapaya = _this.add.sprite(220,130,'dhdcg1_4papaya');
        _this.redPapaya.anchor.setTo(0.5);
        _this.redPapaya.scale.setTo(1);
        _this.redPapaya.name = "redPapaya";
        _this.redPapaya.inputEnabled=true;
        _this.redPapaya.events.onInputDown.add(_this.redDrag,_this);
        
        _this.blueWatermelon = _this.add.sprite(340,130,'dhdcg1_4watermelon');
        _this.blueWatermelon.anchor.setTo(0.5);
        _this.blueWatermelon.scale.setTo(1.1,1.1);
        _this.blueWatermelon.frame = 2;
        _this.blueWatermelon.name = "blueWatermelon";
        _this.blueWatermelon.inputEnabled=true;
        _this.blueWatermelon.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.yellowCarrot = _this.add.sprite(100,230,'dhdcg1_4carrot');
        _this.yellowCarrot.anchor.setTo(0.5);
        _this.yellowCarrot.scale.setTo(1);
        _this.yellowCarrot.frame = 1;
        _this.yellowCarrot.name = "yellowCarrot";
        _this.yellowCarrot.inputEnabled=true;
        _this.yellowCarrot.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.greenFlower = _this.add.sprite(200,240,'dhdcg1_4flower');
        _this.greenFlower.anchor.setTo(0.5);
        _this.greenFlower.scale.setTo(1);
        _this.greenFlower.frame=3;
        _this.greenFlower.inputEnabled=true;
        _this.greenFlower.name="greenFlower";
        _this.greenFlower.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.greenCherry = _this.add.sprite(300,220,'dhdcg1_4cherry');
        _this.greenCherry.anchor.setTo(0.5);
        _this.greenCherry.scale.setTo(1.1,1.1);
        _this.greenCherry.frame = 3;
        _this.greenCherry.name = "greenCherry";
        _this.greenCherry.inputEnabled=true;
        _this.greenCherry.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.greenOrange = _this.add.sprite(100,330,'dhdcg1_4orange');
        _this.greenOrange.anchor.setTo(0.5);
        _this.greenOrange.scale.setTo(1);
        _this.greenOrange.frame=3;
        _this.greenOrange.inputEnabled=true;
        _this.greenOrange.name="greenOrange";
        _this.greenOrange.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.redFlower = _this.add.sprite(200,340,'dhdcg1_4flower');
        _this.redFlower.anchor.setTo(0.5);
        _this.redFlower.scale.setTo(1.1,1.1);
        _this.redFlower.name = "redFlower";
        _this.redFlower.inputEnabled=true;
        _this.redFlower.events.onInputDown.add(_this.redDrag,_this);
        
        _this.blueOrange = _this.add.sprite(320,310,'dhdcg1_4orange');
        _this.blueOrange.anchor.setTo(0.5);
        _this.blueOrange.scale.setTo(1.1,1.1);
        _this.blueOrange.frame = 2;
        _this.blueOrange.name = "blueOrange";
        _this.blueOrange.inputEnabled=true;
        _this.blueOrange.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.greenSmallBall = _this.add.sprite(130,430,'dhdcg1_4smallBall');
        _this.greenSmallBall.anchor.setTo(0.5);
        _this.greenSmallBall.scale.setTo(1);
        _this.greenSmallBall.frame = 3;
        _this.greenSmallBall.inputEnabled=true;
        _this.greenSmallBall.name="greenSmallBall";
        _this.greenSmallBall.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.blueCherry = _this.add.sprite(220,430,'dhdcg1_4cherry');
        _this.blueCherry.anchor.setTo(0.5);
        _this.blueCherry.scale.setTo(1);
        _this.blueCherry.frame=2;
        _this.blueCherry.inputEnabled=true;
        _this.blueCherry.name="blueCherry";
        _this.blueCherry.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.redBalloon = _this.add.sprite(320,420,'dhdcg1_4balloon');
        _this.redBalloon.anchor.setTo(0.5);
        _this.redBalloon.scale.setTo(1.1,1.1);
        _this.redBalloon.name = "redBalloon";
        _this.redBalloon.inputEnabled=true;
        _this.redBalloon.events.onInputDown.add(_this.redDrag,_this);
        
        _this.objectGroup = _this.add.group();
        _this.objectGroup.add(_this.blueOrange);
        _this.objectGroup.add(_this.greenSmallBall);
        _this.objectGroup.add(_this.redPapaya);
        _this.objectGroup.add(_this.yellowCarrot);
        _this.objectGroup.add(_this.redBalloon);
        _this.objectGroup.add(_this.blueWatermelon);
        _this.objectGroup.add(_this.redFlower);
        _this.objectGroup.add(_this.blueCherry);
        _this.objectGroup.add(_this.greenFlower);
        _this.objectGroup.add(_this.greenCherry);
        _this.objectGroup.add(_this.greenOrange);
        _this.objectGroup.add(_this.blueCarrot);
        
        _this.objectGroup.x = -600;
            _this.tween = _this.add.tween(_this.objectGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.loadColorObjects();
        
        _this.greenGraph.name="correctAnswer1";
        _this.greenGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=4;
            _this.checkAns3(target);
        },_this);
        
        _this.redGraph.name="wrongAnswer";
        _this.redGraph.events.onInputDown.add(function(target){
            _this.glow2.visible=true;
            _this.glow2.frame=3;
            _this.checkAns3(target);
        },_this);
        
        _this.yellowGraph.name="wrongAnswer";
        _this.yellowGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=1;
            _this.checkAns3(target);
        },_this);
          
        _this.blueGraph.name="correctAnswer2";      
        _this.blueGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=4;
            _this.checkAns3(target);
        },_this);
      
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
      
        _this.rightAns="4314";
                    
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);
        
        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    },
    
  gotoThirdQuestion:function(){
         _this.questionNo =3;
         _this.getVoice1();
         //_this.no11++;
         console.log("three");
        
        _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
        _this.emptyBox.anchor.setTo(0.5);
        _this.emptyBox.scale.setTo(1);
        
        _this.colorBox = _this.add.sprite(630,270,'dhdcg1_4colorBox');
        _this.colorBox.anchor.setTo(0.5);
        _this.colorBox.scale.setTo(1);
        
        _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.scale.setTo(1);
        _this.tickMark.visible = false;
        
        _this.boxGroup = _this.add.group();
        
        _this.boxGroup.add(_this.emptyBox);
        _this.boxGroup.add(_this.colorBox);
                
        _this.boxGroup.x = -600;
            _this.tween = _this.add.tween(_this.boxGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
        _this.tickMark2.anchor.setTo(0.5);
        _this.tickMark2.scale.setTo(1);
        _this.tickMark2.visible=false;
        
        _this.greenBall = _this.add.sprite(290,420,'dhdcg1_4ball');
        _this.greenBall.anchor.setTo(0.5);
        _this.greenBall.scale.setTo(1.1,1.1);
        _this.greenBall.frame = 3;
        _this.greenBall.name = "greenBall";
        _this.greenBall.inputEnabled=true;
        _this.greenBall.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.redWatermelon = _this.add.sprite(220,120,'dhdcg1_4watermelon');
        _this.redWatermelon.anchor.setTo(0.5);
        _this.redWatermelon.scale.setTo(1);
        _this.redWatermelon.name = "redWatermelon";
        _this.redWatermelon.inputEnabled=true;
        _this.redWatermelon.events.onInputDown.add(_this.redDrag,_this);
        
        _this.yellowCherry = _this.add.sprite(340,120,'dhdcg1_4cherry');
        _this.yellowCherry.anchor.setTo(0.5);
        _this.yellowCherry.scale.setTo(1.1,1.1);
        _this.yellowCherry.frame = 1;
        _this.yellowCherry.name = "yellowCherry";
        _this.yellowCherry.inputEnabled=true;
        _this.yellowCherry.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.blueShoe = _this.add.sprite(320,310,'dhdcg1_4shoe');
        _this.blueShoe.anchor.setTo(0.5);
        _this.blueShoe.scale.setTo(1);
        _this.blueShoe.frame = 2;
        _this.blueShoe.name = "blueShoe";
        _this.blueShoe.inputEnabled=true;
        _this.blueShoe.events.onInputDown.add(_this.blueDrag,_this);
        
        _this.greenCarrot = _this.add.sprite(200,220,'dhdcg1_4carrot');
        _this.greenCarrot.anchor.setTo(0.5);
        _this.greenCarrot.scale.setTo(1);
        _this.greenCarrot.frame=3;
        _this.greenCarrot.inputEnabled=true;
        _this.greenCarrot.name="greenCarrot";
        _this.greenCarrot.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.redOrange = _this.add.sprite(220,330,'dhdcg1_4orange');
        _this.redOrange.anchor.setTo(0.5);
        _this.redOrange.scale.setTo(1.1,1.1);
        _this.redOrange.name = "redOrange";
        _this.redOrange.inputEnabled=true;
        _this.redOrange.events.onInputDown.add(_this.redDrag,_this);
        
        _this.greenShoe = _this.add.sprite(100,320,'dhdcg1_4shoe');
        _this.greenShoe.anchor.setTo(0.5);
        _this.greenShoe.scale.setTo(1);
        _this.greenShoe.frame=3;
        _this.greenShoe.inputEnabled=true;
        _this.greenShoe.name="greenShoe";
        _this.greenShoe.events.onInputDown.add(_this.greenDrag,_this);
        
        _this.yellowSmallball = _this.add.sprite(300,210,'dhdcg1_4smallBall');
        _this.yellowSmallball.anchor.setTo(0.5);
        _this.yellowSmallball.scale.setTo(1);
        _this.yellowSmallball.frame=1;
        _this.yellowSmallball.name = "yellowSmallball";
        _this.yellowSmallball.inputEnabled=true;
        _this.yellowSmallball.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.yellowBalloon = _this.add.sprite(100,220,'dhdcg1_4balloon');
        _this.yellowBalloon.anchor.setTo(0.5);
        _this.yellowBalloon.scale.setTo(1.1,1.1);
        _this.yellowBalloon.frame = 1;
        _this.yellowBalloon.name = "yellowBalloon";
        _this.yellowBalloon.inputEnabled=true;
        _this.yellowBalloon.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.yellowBall = _this.add.sprite(130,420,'dhdcg1_4ball');
        _this.yellowBall.anchor.setTo(0.5);
        _this.yellowBall.scale.setTo(1.1);
        _this.yellowBall.frame = 1;
        _this.yellowBall.inputEnabled=true;
        _this.yellowBall.name="yellowBall";
        _this.yellowBall.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.yellowPapaya = _this.add.sprite(110,120,'dhdcg1_4papaya');
        _this.yellowPapaya.anchor.setTo(0.5);
        _this.yellowPapaya.scale.setTo(1);
        _this.yellowPapaya.frame=1;
        _this.yellowPapaya.inputEnabled=true;
        _this.yellowPapaya.name="yellowPapaya";
        _this.yellowPapaya.events.onInputDown.add(_this.yellowDrag,_this);
        
        _this.objectGroup = _this.add.group();
        _this.objectGroup.add(_this.greenBall);
        _this.objectGroup.add(_this.redWatermelon);
        _this.objectGroup.add(_this.yellowCherry);
        _this.objectGroup.add(_this.blueShoe);
        _this.objectGroup.add(_this.greenCarrot);
        _this.objectGroup.add(_this.redOrange);
        _this.objectGroup.add(_this.greenShoe);
        _this.objectGroup.add(_this.yellowSmallball);
        _this.objectGroup.add(_this.yellowBalloon);
        _this.objectGroup.add(_this.yellowBall);
        _this.objectGroup.add(_this.yellowPapaya);
        
        _this.objectGroup.x = -600;
            _this.tween = _this.add.tween(_this.objectGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.loadColorObjects();
        
        _this.greenGraph.name="wrongAnswer";
        _this.greenGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=3;
            _this.checkAns3(target);
        },_this);
        
        _this.redGraph.name="wrongAnswer";
        _this.redGraph.events.onInputDown.add(function(target){
            _this.glow2.visible=true;
            _this.glow2.frame=2;
            _this.checkAns3(target);
        },_this);
        
        _this.yellowGraph.name="correctAnswer1";
        _this.yellowGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=5;
            _this.checkAns3(target);
        },_this);
          
        _this.blueGraph.name="wrongAnswer";      
        _this.blueGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=1;
            _this.checkAns3(target);
        },_this);
        
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
      
        _this.rightAns="3251";
                
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);

        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
        
    }, 
  gotoFourthQuestion:function(){
     _this.questionNo =4;
     _this.getVoice1();  
     //_this.no11++;
     console.log("Four");

    _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
    _this.emptyBox.anchor.setTo(0.5);
    _this.emptyBox.scale.setTo(1);

    _this.shapeBox = _this.add.sprite(630,270,'dhdcg1_4shapeBox');
    _this.shapeBox.anchor.setTo(0.5);
    _this.shapeBox.scale.setTo(1);

    _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1);
    _this.tickMark.visible = false;

    _this.boxGroup = _this.add.group();

    _this.boxGroup.add(_this.emptyBox);
    _this.boxGroup.add(_this.shapeBox);

    _this.boxGroup.x = -600;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
    _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark2.anchor.setTo(0.5);
    _this.tickMark2.scale.setTo(1);
    _this.tickMark2.visible=false;
     
    _this.greenCircle = _this.add.sprite(100,145,'dhdcg1_4circle');
    _this.greenCircle.anchor.setTo(0.5);
    _this.greenCircle.scale.setTo(1);
    _this.greenCircle.frame = 3;
    _this.greenCircle.inputEnabled=true;
    _this.greenCircle.name="greenCircle";
    _this.greenCircle.events.onInputDown.add(_this.circleDrag,_this);
      
    _this.yellowOval = _this.add.sprite(180,145,'dhdcg1_4oval');
    _this.yellowOval.anchor.setTo(0.5);
    _this.yellowOval.scale.setTo(1.1);
    _this.yellowOval.frame = 1;
    _this.yellowOval.inputEnabled=true;
    _this.yellowOval.name="yellowOval";
    _this.yellowOval.events.onInputDown.add(_this.ovalDrag,_this);  
    
    _this.blueSquare = _this.add.sprite(270,155,'dhdcg1_4square');
    _this.blueSquare.anchor.setTo(0.5);
    _this.blueSquare.scale.setTo(1);
    _this.blueSquare.frame = 2;
    _this.blueSquare.inputEnabled=true;
    _this.blueSquare.name="blueSquare";
    _this.blueSquare.events.onInputDown.add(_this.squareDrag,_this);
    
    _this.greenOval = _this.add.sprite(130,240,'dhdcg1_4oval');
    _this.greenOval.anchor.setTo(0.5);
    _this.greenOval.scale.setTo(1);
    _this.greenOval.frame = 3;
    _this.greenOval.inputEnabled=true;
    _this.greenOval.name="greenOval";
    _this.greenOval.events.onInputDown.add(_this.ovalDrag,_this);

    _this.redSquare = _this.add.sprite(210,245,'dhdcg1_4square');
    _this.redSquare.anchor.setTo(0.5);
    _this.redSquare.scale.setTo(1);
    _this.redSquare.inputEnabled=true;
    _this.redSquare.name="redSquare";
    _this.redSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.blueOval = _this.add.sprite(290,245,'dhdcg1_4oval');
    _this.blueOval.anchor.setTo(0.5);
    _this.blueOval.scale.setTo(1);
    _this.blueOval.frame = 2;
    _this.blueOval.inputEnabled=true;
    _this.blueOval.name="blueOval";
    _this.blueOval.events.onInputDown.add(_this.ovalDrag,_this);
      
    _this.yellowSquare = _this.add.sprite(95,340,'dhdcg1_4square');
    _this.yellowSquare.anchor.setTo(0.5);
    _this.yellowSquare.scale.setTo(1);
    _this.yellowSquare.frame = 1;
    _this.yellowSquare.inputEnabled=true;
    _this.yellowSquare.name="yellowSquare";
    _this.yellowSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.greenTriangle = _this.add.sprite(175,340,'dhdcg1_4triangle');
    _this.greenTriangle.anchor.setTo(0.5);
    _this.greenTriangle.scale.setTo(1);
    _this.greenTriangle.frame = 3;
    _this.greenTriangle.inputEnabled=true;
    _this.greenTriangle.name="greenTriangle";
    _this.greenTriangle.events.onInputDown.add(_this.triangleDrag,_this);
      
    _this.greenSquare = _this.add.sprite(260,340,'dhdcg1_4square');
    _this.greenSquare.anchor.setTo(0.5);
    _this.greenSquare.scale.setTo(1);
    _this.greenSquare.frame = 3;
    _this.greenSquare.inputEnabled=true;
    _this.greenSquare.name="greenSquare";
    _this.greenSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.blueTriangle = _this.add.sprite(340,340,'dhdcg1_4triangle');
    _this.blueTriangle.anchor.setTo(0.5);
    _this.blueTriangle.scale.setTo(1);
    _this.blueTriangle.frame = 2;
    _this.blueTriangle.inputEnabled=true;
    _this.blueTriangle.name="blueTriangle";
    _this.blueTriangle.events.onInputDown.add(_this.triangleDrag,_this);
      
    _this.yellowTriangle = _this.add.sprite(130,420,'dhdcg1_4triangle');
    _this.yellowTriangle.anchor.setTo(0.5);
    _this.yellowTriangle.scale.setTo(1);
    _this.yellowTriangle.frame = 1;
    _this.yellowTriangle.inputEnabled=true;
    _this.yellowTriangle.name="yellowTriangle";
    _this.yellowTriangle.events.onInputDown.add(_this.triangleDrag,_this);
     
    _this.redOval = _this.add.sprite(210,420,'dhdcg1_4oval');
    _this.redOval.anchor.setTo(0.5);
    _this.redOval.scale.setTo(1);
    _this.redOval.inputEnabled=true;
    _this.redOval.name="redOval";
    _this.redOval.events.onInputDown.add(_this.ovalDrag,_this);
      
    _this.yellowSqr = _this.add.sprite(300,420,'dhdcg1_4square');
    _this.yellowSqr.anchor.setTo(0.5);
    _this.yellowSqr.scale.setTo(1);
    _this.yellowSqr.frame = 1;
    _this.yellowSqr.inputEnabled=true;
    _this.yellowSqr.name="yellowSqr";
    _this.yellowSqr.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.objectGroup = _this.add.group();
    _this.objectGroup.add(_this.greenCircle);
    _this.objectGroup.add(_this.greenTriangle);
    _this.objectGroup.add(_this.blueTriangle);
    _this.objectGroup.add(_this.yellowTriangle);
    _this.objectGroup.add(_this.greenOval);
    _this.objectGroup.add(_this.blueOval);
    _this.objectGroup.add(_this.redOval);
    _this.objectGroup.add(_this.yellowOval);
    _this.objectGroup.add(_this.blueSquare);
    _this.objectGroup.add(_this.redSquare);
    _this.objectGroup.add(_this.greenSquare);
    _this.objectGroup.add(_this.yellowSquare);
    _this.objectGroup.add(_this.yellowSqr);
        
    _this.objectGroup.x = -600;
        _this.tween = _this.add.tween(_this.objectGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
      
    _this.loadShapeObjects();
     
        _this.circleGraph.name="wrongAnswer";
        _this.circleGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=1;
            _this.checkAns3(target);
        },_this);
        
        _this.triangleGraph.name="wrongAnswer";
        _this.triangleGraph.events.onInputDown.add(function(target){
           _this.glow2.visible=true;
           _this.glow2.frame=3;    
           _this.checkAns3(target);
        },_this);
        
        _this.ovalGraph.name="wrongAnswer";
        _this.ovalGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=4;
            _this.checkAns3(target);
        },_this);
          
        _this.squareGraph.name="correctAnswer1";      
        _this.squareGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=5;
            _this.checkAns3(target);
        },_this);
      
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
        
        _this.rightAns="1345";
                        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);

        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
  },
  gotoFifthQuestion:function(){
     _this.questionNo =5;
     _this.getVoice1();  
     //_this.no11++;
     console.log("Five");

    _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
    _this.emptyBox.anchor.setTo(0.5);
    _this.emptyBox.scale.setTo(1);

    _this.shapeBox = _this.add.sprite(630,270,'dhdcg1_4shapeBox');
    _this.shapeBox.anchor.setTo(0.5);
    _this.shapeBox.scale.setTo(1);

    _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1);
    _this.tickMark.visible = false;

    _this.boxGroup = _this.add.group();

    _this.boxGroup.add(_this.emptyBox);
    _this.boxGroup.add(_this.shapeBox);

    _this.boxGroup.x = -600;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
    _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark2.anchor.setTo(0.5);
    _this.tickMark2.scale.setTo(1);
    _this.tickMark2.visible=false;  
     
    _this.greenCircle = _this.add.sprite(210,420,'dhdcg1_4circle');
    _this.greenCircle.anchor.setTo(0.5);
    _this.greenCircle.scale.setTo(1);
    _this.greenCircle.frame = 3;
    _this.greenCircle.inputEnabled=true;
    _this.greenCircle.name="greenCircle";
    _this.greenCircle.events.onInputDown.add(_this.circleDrag,_this);
      
    _this.yellowOval = _this.add.sprite(225,145,'dhdcg1_4oval');
    _this.yellowOval.anchor.setTo(0.5);
    _this.yellowOval.scale.setTo(1.1);
    _this.yellowOval.frame = 1;
    _this.yellowOval.inputEnabled=true;
    _this.yellowOval.name="yellowOval";
    _this.yellowOval.events.onInputDown.add(_this.ovalDrag,_this);  
    
    _this.blueSquare = _this.add.sprite(130,420,'dhdcg1_4square');
    _this.blueSquare.anchor.setTo(0.5);
    _this.blueSquare.scale.setTo(1);
    _this.blueSquare.frame = 2;
    _this.blueSquare.inputEnabled=true;
    _this.blueSquare.name="blueSquare";
    _this.blueSquare.events.onInputDown.add(_this.squareDrag,_this);
    
    _this.greenOval = _this.add.sprite(130,240,'dhdcg1_4oval');
    _this.greenOval.anchor.setTo(0.5);
    _this.greenOval.scale.setTo(1);
    _this.greenOval.frame = 3;
    _this.greenOval.inputEnabled=true;
    _this.greenOval.name="greenOval";
    _this.greenOval.events.onInputDown.add(_this.ovalDrag,_this);

    _this.redSquare = _this.add.sprite(210,245,'dhdcg1_4square');
    _this.redSquare.anchor.setTo(0.5);
    _this.redSquare.scale.setTo(1);
    _this.redSquare.inputEnabled=true;
    _this.redSquare.name="redSquare";
    _this.redSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.blueOval = _this.add.sprite(290,245,'dhdcg1_4oval');
    _this.blueOval.anchor.setTo(0.5);
    _this.blueOval.scale.setTo(1);
    _this.blueOval.frame = 2;
    _this.blueOval.inputEnabled=true;
    _this.blueOval.name="blueOval";
    _this.blueOval.events.onInputDown.add(_this.ovalDrag,_this);
          
    _this.greenTriangle = _this.add.sprite(310,145,'dhdcg1_4triangle');
    _this.greenTriangle.anchor.setTo(0.5);
    _this.greenTriangle.scale.setTo(1);
    _this.greenTriangle.frame = 3;
    _this.greenTriangle.inputEnabled=true;
    _this.greenTriangle.name="greenTriangle";
    _this.greenTriangle.events.onInputDown.add(_this.triangleDrag,_this);
      
    _this.greenSquare = _this.add.sprite(260,340,'dhdcg1_4square');
    _this.greenSquare.anchor.setTo(0.5);
    _this.greenSquare.scale.setTo(1);
    _this.greenSquare.frame = 3;
    _this.greenSquare.inputEnabled=true;
    _this.greenSquare.name="greenSquare";
    _this.greenSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.greenSqr = _this.add.sprite(95,340,'dhdcg1_4square');
    _this.greenSqr.anchor.setTo(0.5);
    _this.greenSqr.scale.setTo(1);
    _this.greenSqr.frame = 3;
    _this.greenSqr.inputEnabled=true;
    _this.greenSqr.name="greenSqr";
    _this.greenSqr.events.onInputDown.add(_this.squareDrag,_this);  
      
    _this.blueCircle = _this.add.sprite(340,340,'dhdcg1_4circle');
    _this.blueCircle.anchor.setTo(0.5);
    _this.blueCircle.scale.setTo(1);
    _this.blueCircle.frame = 2;
    _this.blueCircle.inputEnabled=true;
    _this.blueCircle.name="blueCircle";
    _this.blueCircle.events.onInputDown.add(_this.circleDrag,_this);
      
    _this.yellowCircle = _this.add.sprite(175,340,'dhdcg1_4circle');
    _this.yellowCircle.anchor.setTo(0.5);
    _this.yellowCircle.scale.setTo(1);
    _this.yellowCircle.frame = 1;
    _this.yellowCircle.inputEnabled=true;
    _this.yellowCircle.name="yellowCircle";
    _this.yellowCircle.events.onInputDown.add(_this.circleDrag,_this);
     
    _this.redCircle = _this.add.sprite(130,145,'dhdcg1_4circle');
    _this.redCircle.anchor.setTo(0.5);
    _this.redCircle.scale.setTo(1);
    _this.redCircle.inputEnabled=true;
    _this.redCircle.name="redCircle";
    _this.redCircle.events.onInputDown.add(_this.circleDrag,_this);
      
    _this.redTriangle = _this.add.sprite(300,420,'dhdcg1_4triangle');
    _this.redTriangle.anchor.setTo(0.5);
    _this.redTriangle.scale.setTo(1);
    _this.redTriangle.inputEnabled=true;
    _this.redTriangle.name="redTriangle";
    _this.redTriangle.events.onInputDown.add(_this.triangleDrag,_this);
      
    _this.objectGroup = _this.add.group();
    _this.objectGroup.add(_this.greenCircle);
    _this.objectGroup.add(_this.greenTriangle);
    _this.objectGroup.add(_this.blueCircle);
    _this.objectGroup.add(_this.yellowCircle);
    _this.objectGroup.add(_this.greenOval);
    _this.objectGroup.add(_this.blueOval);
    _this.objectGroup.add(_this.redCircle);
    _this.objectGroup.add(_this.yellowOval);
    _this.objectGroup.add(_this.blueSquare);
    _this.objectGroup.add(_this.redSquare);
    _this.objectGroup.add(_this.greenSquare);
    _this.objectGroup.add(_this.greenSqr);
    _this.objectGroup.add(_this.redTriangle);
        
    _this.objectGroup.x = -600;
        _this.tween = _this.add.tween(_this.objectGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
      
    _this.loadShapeObjects();
      
        _this.circleGraph.name="wrongAnswer";
        _this.circleGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=4;
            _this.checkAns3(target);
        },_this);
        
        _this.triangleGraph.name="correctAnswer1";
        _this.triangleGraph.events.onInputDown.add(function(target){
           _this.glow2.visible=true;
           _this.glow2.frame=2;    
           _this.checkAns3(target);
        },_this);
        
        _this.ovalGraph.name="wrongAnswer";
        _this.ovalGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=3;
            _this.checkAns3(target);
        },_this);
          
        _this.squareGraph.name="wrongAnswer";      
        _this.squareGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=4;
            _this.checkAns3(target);
        },_this);
      
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
        
        _this.rightAns="4234";
                        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);

        _this.graphicsGroup.add(_this.graphics1);
        _this.graphicsGroup.add(_this.graphics2);
        _this.graphicsGroup.add(_this.graphics3);
        _this.graphicsGroup.add(_this.graphics4);
        _this.graphicsGroup.alpha=0;
  },
  gotoSixthQuestion:function(){
     _this.questionNo =6;
     _this.getVoice1();  
     //_this.no11++;
     console.log("Six");

    _this.emptyBox = _this.add.sprite(215,270,'dhdcg1_4emptyBox');
    _this.emptyBox.anchor.setTo(0.5);
    _this.emptyBox.scale.setTo(1);

    _this.shapeBox = _this.add.sprite(630,270,'dhdcg1_4shapeBox');
    _this.shapeBox.anchor.setTo(0.5);
    _this.shapeBox.scale.setTo(1);

    _this.tickMark = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark.anchor.setTo(0.5);
    _this.tickMark.scale.setTo(1);
    _this.tickMark.visible = false;

    _this.boxGroup = _this.add.group();

    _this.boxGroup.add(_this.emptyBox);
    _this.boxGroup.add(_this.shapeBox);

    _this.boxGroup.x = -600;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
    _this.tickMark2 = _this.add.sprite(900,265,'dhdcg1_4_rightmark');
    _this.tickMark2.anchor.setTo(0.5);
    _this.tickMark2.scale.setTo(1);
    _this.tickMark2.visible=false;  
     
    _this.greenOval = _this.add.sprite(130,420,'dhdcg1_4oval');
    _this.greenOval.anchor.setTo(0.5);
    _this.greenOval.scale.setTo(1);
    _this.greenOval.frame = 3;
    _this.greenOval.inputEnabled=true;
    _this.greenOval.name="greenOval";
    _this.greenOval.events.onInputDown.add(_this.ovalDrag,_this);
      
    _this.greenCircle = _this.add.sprite(130,230,'dhdcg1_4circle');
    _this.greenCircle.anchor.setTo(0.5);
    _this.greenCircle.scale.setTo(1);
    _this.greenCircle.frame = 3;
    _this.greenCircle.inputEnabled=true;
    _this.greenCircle.name="greenCircle";
    _this.greenCircle.events.onInputDown.add(_this.circleDrag,_this);  
    
    _this.blueTriangle = _this.add.sprite(280,125,'dhdcg1_4triangle');
    _this.blueTriangle.anchor.setTo(0.5);
    _this.blueTriangle.scale.setTo(1);
    _this.blueTriangle.frame = 2;
    _this.blueTriangle.inputEnabled=true;
    _this.blueTriangle.name="blueTriangle";
    _this.blueTriangle.events.onInputDown.add(_this.triangleDrag,_this);
    
    _this.redCircle = _this.add.sprite(210,235,'dhdcg1_4circle');
    _this.redCircle.anchor.setTo(0.5);
    _this.redCircle.scale.setTo(1);
    _this.redCircle.inputEnabled=true;
    _this.redCircle.name="redCircle";
    _this.redCircle.events.onInputDown.add(_this.circleDrag,_this);
      
    _this.redCirc = _this.add.sprite(210,420,'dhdcg1_4circle');
    _this.redCirc.anchor.setTo(0.5);
    _this.redCirc.scale.setTo(1);
    _this.redCirc.inputEnabled=true;
    _this.redCirc.name="redCirc";
    _this.redCirc.events.onInputDown.add(_this.circleDrag,_this);  
      
    _this.blueOval = _this.add.sprite(290,235,'dhdcg1_4oval');
    _this.blueOval.anchor.setTo(0.5);
    _this.blueOval.scale.setTo(1);
    _this.blueOval.frame = 2;
    _this.blueOval.inputEnabled=true;
    _this.blueOval.name="blueOval";
    _this.blueOval.events.onInputDown.add(_this.ovalDrag,_this);
          
    _this.redSquare = _this.add.sprite(260,330,'dhdcg1_4square');
    _this.redSquare.anchor.setTo(0.5);
    _this.redSquare.scale.setTo(1);
    _this.redSquare.inputEnabled=true;
    _this.redSquare.name="redSquare";
    _this.redSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.blueSquare = _this.add.sprite(95,330,'dhdcg1_4square');
    _this.blueSquare.anchor.setTo(0.5);
    _this.blueSquare.scale.setTo(1);
    _this.blueSquare.frame = 2;
    _this.blueSquare.inputEnabled=true;
    _this.blueSquare.name="blueSquare";
    _this.blueSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.yellowOval = _this.add.sprite(195,130,'dhdcg1_4oval');
    _this.yellowOval.anchor.setTo(0.5);
    _this.yellowOval.scale.setTo(1);
    _this.yellowOval.frame = 1;
    _this.yellowOval.inputEnabled=true;
    _this.yellowOval.name="yellowOval";
    _this.yellowOval.events.onInputDown.add(_this.ovalDrag,_this);  
     
    _this.yellowCircle = _this.add.sprite(175,330,'dhdcg1_4circle');
    _this.yellowCircle.anchor.setTo(0.5);
    _this.yellowCircle.scale.setTo(1);
    _this.yellowCircle.frame = 1;
    _this.yellowCircle.inputEnabled=true;
    _this.yellowCircle.name="yellowCircle";
    _this.yellowCircle.events.onInputDown.add(_this.circleDrag,_this);
    
    _this.yellowSquare = _this.add.sprite(300,420,'dhdcg1_4square');
    _this.yellowSquare.anchor.setTo(0.5);
    _this.yellowSquare.scale.setTo(1);
    _this.yellowSquare.frame = 1;  
    _this.yellowSquare.inputEnabled=true;
    _this.yellowSquare.name="yellowSquare";
    _this.yellowSquare.events.onInputDown.add(_this.squareDrag,_this);
      
    _this.redOval = _this.add.sprite(105,130,'dhdcg1_4oval');
    _this.redOval.anchor.setTo(0.5);
    _this.redOval.scale.setTo(1);
    _this.redOval.inputEnabled=true;
    _this.redOval.name="redOval";
    _this.redOval.events.onInputDown.add(_this.ovalDrag,_this);  
      
    _this.objectGroup = _this.add.group();
    _this.objectGroup.add(_this.greenOval);
    _this.objectGroup.add(_this.yellowCircle);
    _this.objectGroup.add(_this.redCircle);
    _this.objectGroup.add(_this.blueTriangle);
    _this.objectGroup.add(_this.blueOval);
    _this.objectGroup.add(_this.yellowSquare);
    _this.objectGroup.add(_this.blueSquare);
    _this.objectGroup.add(_this.redSquare);
    _this.objectGroup.add(_this.redCirc);
    _this.objectGroup.add(_this.greenCircle);
    _this.objectGroup.add(_this.yellowOval);
    _this.objectGroup.add(_this.redOval);
    
    _this.objectGroup.x = -600;
        _this.tween = _this.add.tween(_this.objectGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
      
    _this.loadShapeObjects();
    
        _this.circleGraph.name="correctAnswer1";
        _this.circleGraph.events.onInputDown.add(function(target){
            _this.glow1.visible=true;
            _this.glow1.frame=4;
            _this.checkAns3(target);
        },_this);
        
        _this.triangleGraph.name="wrongAnswer";
        _this.triangleGraph.events.onInputDown.add(function(target){
           _this.glow2.visible=true;
           _this.glow2.frame=1;    
           _this.checkAns3(target);
        },_this);
        
        _this.ovalGraph.name="correctAnswer2";
        _this.ovalGraph.events.onInputDown.add(function(target){
            _this.glow3.visible=true;
            _this.glow3.frame=4;
            _this.checkAns3(target);
        },_this);
          
        _this.squareGraph.name="wrongAnswer";      
        _this.squareGraph.events.onInputDown.add(function(target){
            _this.glow4.visible=true;
            _this.glow4.frame=3;
            _this.checkAns3(target);
        },_this);
      
        _this.numberBox1 = _this.add.sprite(480,443,'dhdcg1_4numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(0.8);
        _this.numberBox1.inputEnabled=true;
        _this.numberBox1.visible=false;
        _this.numberBox1.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox1.name ;
                  _this.numBox1Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox1.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox2 = _this.add.sprite(582,443,'dhdcg1_4numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(0.8);
        _this.numberBox2.inputEnabled=true;
        _this.numberBox2.visible=false;
        _this.numberBox2.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox2.name ;
                  _this.numBox2Pressed = true;
                  _this.numBox1Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox2.frame = 1;
                    _this.numberBox1.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox3 = _this.add.sprite(685,443,'dhdcg1_4numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(0.8);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.visible=false;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  _this.numBox3Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numBox4Pressed = false;
                    _this.numberBox3.frame = 1;
                    _this.numberBox2.frame = 0;
                    _this.numberBox1.frame = 0;
                    _this.numberBox4.frame = 0;
              },_this);
        
        _this.numberBox4 = _this.add.sprite(785,443,'dhdcg1_4numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(0.8);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.visible=false;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  _this.numBox4Pressed = true;
                  _this.numBox2Pressed = false;
                  _this.numBox3Pressed = false;
                  _this.numBox1Pressed = false;
                  _this.numberBox4.frame = 1; 
                    _this.numberBox2.frame = 0;
                    _this.numberBox3.frame = 0;
                    _this.numberBox1.frame = 0;
              },_this);
        
        _this.numberBoxGrp = _this.add.group();
        _this.numberBoxGrp.add(_this.numberBox1);
        _this.numberBoxGrp.add(_this.numberBox2);
        _this.numberBoxGrp.add(_this.numberBox3);
        _this.numberBoxGrp.add(_this.numberBox4);
        
        _this.numBoxNum1 = _this.add.sprite(480,443,'dhdcg1_4_numbers1');
        _this.numBoxNum1.anchor.setTo(0.5);
        _this.numBoxNum1.scale.setTo(1);
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
                
        _this.numBoxNum2 = _this.add.sprite(582,443,'dhdcg1_4_numbers1');
        _this.numBoxNum2.anchor.setTo(0.5);
        _this.numBoxNum2.scale.setTo(1);
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(685,443,'dhdcg1_4_numbers1');
        _this.numBoxNum3.anchor.setTo(0.5);
        _this.numBoxNum3.scale.setTo(1);
        _this.numBox3Pressed = false;
        _this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(785,443,'dhdcg1_4_numbers1');
        _this.numBoxNum4.anchor.setTo(0.5);
        _this.numBoxNum4.scale.setTo(1);
        _this.numBox4Pressed = false;
        _this.numBoxNum4.visible = false;
        
        _this.rightAns="4143";
                        
        _this.graphicsGroup = _this.add.group();
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics3 = _this.add.graphics(100, 100);
        _this.graphics4 = _this.add.graphics(100, 100);
        
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(333, 35, 90, 270);
        
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(435, 35, 90, 270);
        
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(537, 35, 90, 270);
        
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(640, 35, 90, 270);

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
   greenDrag:function(target){
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
     if(_this.questionNo==1){
        if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenPapaya")&&(_this.greenWatermelon1.visible==false)){
            _this.greenPapaya.visible=false;
            _this.greenPapaya1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenPapaya")&&(_this.greenWatermelon2.visible==false)&&(_this.greenWatermelon1.visible==true)){
            _this.greenPapaya.visible=false;
            _this.greenPapaya2.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenWatermelon")&&(_this.greenPapaya1.visible==false)){
            _this.greenWatermelon.visible=false;
            _this.greenWatermelon1.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenWatermelon")&&(_this.greenPapaya2.visible==false)&&(_this.greenPapaya1.visible==true)){
            _this.greenWatermelon.visible=false;
            _this.greenWatermelon2.visible=true;
            _this.Green+=1;
       }
            console.log("Green="+_this.Green)
            if(_this.Green==2){
                _this.checkAns1();
            }
    }
    else if(_this.questionNo==2){
        if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenSmallBall")&&(_this.greenFlower1.visible==false)&&(_this.greenCherry1.visible==false)&&(_this.greenOrange1.visible==false)){
            _this.greenSmallBall.visible=false;
            _this.greenSmallBall1.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenSmallBall")&&(_this.greenFlower2.visible==false)&&(_this.greenCherry2.visible==false)&&(_this.greenOrange2.visible==false)&&((_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenSmallBall.visible=false;
            _this.greenSmallBall2.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenSmallBall")&&(_this.greenFlower3.visible==false)&&(_this.greenCherry3.visible==false)&&(_this.greenOrange3.visible==false)&&((_this.greenFlower2.visible==true)||(_this.greenCherry2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenSmallBall.visible=false;
            _this.greenSmallBall3.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenSmallBall")&&(_this.greenFlower4.visible==false)&&(_this.greenCherry4.visible==false)&&(_this.greenOrange4.visible==false)&&((_this.greenFlower3.visible==true)||(_this.greenCherry3.visible==true)||(_this.greenOrange3.visible==true))&&((_this.greenFlower2.visible==true)||(_this.greenCherry2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenSmallBall.visible=false;
            _this.greenSmallBall4.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenFlower")&&(_this.greenSmallBall1.visible==false)&&(_this.greenCherry1.visible==false)&&(_this.greenOrange1.visible==false)){
            _this.greenFlower.visible=false;
            _this.greenFlower1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenFlower")&&(_this.greenSmallBall2.visible==false)&&(_this.greenCherry2.visible==false)&&(_this.greenOrange2.visible==false)&&((_this.greenSmallBall1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenFlower.visible=false;
            _this.greenFlower2.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenFlower")&&(_this.greenSmallBall3.visible==false)&&(_this.greenCherry3.visible==false)&&(_this.greenOrange3.visible==false)&&((_this.greenSmallBall2.visible==true)||(_this.greenCherry2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenFlower.visible=false;
            _this.greenFlower3.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenFlower")&&(_this.greenSmallBall4.visible==false)&&(_this.greenCherry4.visible==false)&&(_this.greenOrange4.visible==false)&&((_this.greenSmallBall3.visible==true)||(_this.greenCherry3.visible==true)||(_this.greenOrange3.visible==true))&&((_this.greenSmallBall2.visible==true)||(_this.greenCherry2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenCherry1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenFlower.visible=false;
            _this.greenFlower4.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCherry")&&(_this.greenSmallBall1.visible==false)&&(_this.greenFlower1.visible==false)&&(_this.greenOrange1.visible==false)){
            _this.greenCherry.visible=false;
            _this.greenCherry1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCherry")&&(_this.greenSmallBall2.visible==false)&&(_this.greenFlower2.visible==false)&&(_this.greenOrange2.visible==false)&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenCherry.visible=false;
            _this.greenCherry2.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCherry")&&(_this.greenSmallBall3.visible==false)&&(_this.greenFlower3.visible==false)&&(_this.greenOrange3.visible==false)&&((_this.greenSmallBall2.visible==true)||(_this.greenFlower2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenCherry.visible=false;
            _this.greenCherry3.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCherry")&&(_this.greenSmallBall4.visible==false)&&(_this.greenFlower4.visible==false)&&(_this.greenOrange4.visible==false)&&((_this.greenSmallBall3.visible==true)||(_this.greenFlower3.visible==true)||(_this.greenOrange3.visible==true))&&((_this.greenSmallBall2.visible==true)||(_this.greenFlower2.visible==true)||(_this.greenOrange2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenOrange1.visible==true))){
            _this.greenCherry.visible=false;
            _this.greenCherry4.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenOrange")&&(_this.greenSmallBall1.visible==false)&&(_this.greenFlower1.visible==false)&&(_this.greenCherry1.visible==false)){
            _this.greenOrange.visible=false;
            _this.greenOrange1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenOrange")&&(_this.greenSmallBall2.visible==false)&&(_this.greenFlower2.visible==false)&&(_this.greenCherry2.visible==false)&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true))){
            _this.greenOrange.visible=false;
            _this.greenOrange2.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenOrange")&&(_this.greenSmallBall3.visible==false)&&(_this.greenFlower3.visible==false)&&(_this.greenCherry3.visible==false)&&((_this.greenSmallBall2.visible==true)||(_this.greenFlower2.visible==true)||(_this.greenCherry2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true))){
            _this.greenOrange.visible=false;
            _this.greenOrange3.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenOrange")&&(_this.greenSmallBall4.visible==false)&&(_this.greenFlower4.visible==false)&&(_this.greenCherry4.visible==false)&&((_this.greenSmallBall3.visible==true)||(_this.greenFlower3.visible==true)||(_this.greenCherry3.visible==true))&&((_this.greenSmallBall2.visible==true)||(_this.greenFlower2.visible==true)||(_this.greenCherry2.visible==true))&&((_this.greenSmallBall1.visible==true)||(_this.greenFlower1.visible==true)||(_this.greenCherry1.visible==true))){
            _this.greenOrange.visible=false;
            _this.greenOrange4.visible=true;
            _this.Green+=1;
        } 
            console.log("Green="+_this.Green)
            if(_this.Green==4){
                _this.checkAns1();
            }
    }
    else if(_this.questionNo==3){
        if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenBall")&&(_this.greenShoe1.visible==false)&&(_this.greenCarrot1.visible==false)){
            _this.greenBall.visible=false;
            _this.greenBall1.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenBall")&&(_this.greenShoe2.visible==false)&&(_this.greenCarrot2.visible==false)&&((_this.greenShoe1.visible==true)||(_this.greenCarrot1.visible==true))){
            _this.greenBall.visible=false;
            _this.greenBall2.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenBall")&&(_this.greenShoe3.visible==false)&&(_this.greenCarrot3.visible==false)&&((_this.greenShoe2.visible==true)||(_this.greenCarrot2.visible==true))&&((_this.greenShoe1.visible==true)||(_this.greenCarrot1.visible==true))){
            _this.greenBall.visible=false;
            _this.greenBall3.visible=true;
            _this.Green+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenShoe")&&(_this.greenBall1.visible==false)&&(_this.greenCarrot1.visible==false)){
            _this.greenShoe.visible=false;
            _this.greenShoe1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenShoe")&&(_this.greenBall2.visible==false)&&(_this.greenCarrot2.visible==false)&&((_this.greenBall1.visible==true)||(_this.greenCarrot1.visible==true))){
            _this.greenShoe.visible=false;
            _this.greenShoe2.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenShoe")&&(_this.greenBall3.visible==false)&&(_this.greenCarrot3.visible==false)&&((_this.greenBall2.visible==true)||(_this.greenCarrot2.visible==true))&&((_this.greenBall1.visible==true)||(_this.greenCarrot1.visible==true))){
            _this.greenShoe.visible=false;
            _this.greenShoe3.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCarrot")&&(_this.greenBall1.visible==false)&&(_this.greenShoe1.visible==false)){
            _this.greenCarrot.visible=false;
            _this.greenCarrot1.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCarrot")&&(_this.greenBall2.visible==false)&&(_this.greenShoe2.visible==false)&&((_this.greenBall1.visible==true)||(_this.greenShoe1.visible==true))){
            _this.greenCarrot.visible=false;
            _this.greenCarrot2.visible=true;
            _this.Green+=1;
        }
        else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCarrot")&&(_this.greenBall3.visible==false)&&(_this.greenShoe3.visible==false)&&((_this.greenBall2.visible==true)||(_this.greenShoe2.visible==true))&&((_this.greenBall1.visible==true)||(_this.greenShoe1.visible==true))){
            _this.greenCarrot.visible=false;
            _this.greenCarrot3.visible=true;
            _this.Green+=1;
        }
          console.log("Green="+_this.Green)
            if(_this.Green==3){
                _this.checkAns1();
            }
    }
               
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
        },_this);
       },
   redDrag:function(target){
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
        if(_this.questionNo==1){
       if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBall")&&(_this.redCarrot1.visible==false)&&(_this.redCherry1.visible==false)&&(_this.redSmallBall1.visible==false)){
            _this.redBall.visible=false;
            _this.redBall1.visible=true;
            _this.Red+=1;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBall")&&(_this.redCarrot2.visible==false)&&(_this.redCherry2.visible==false)&&(_this.redSmallBall2.visible==false)&&((_this.redCarrot1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redBall.visible=false;
            _this.redBall2.visible=true;
            _this.Red+=1;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBall")&&(_this.redCarrot3.visible==false)&&(_this.redCherry3.visible==false)&&(_this.redSmallBall3.visible==false)&&((_this.redCarrot2.visible==true)||(_this.redCherry2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redCarrot1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redBall.visible=false;
            _this.redBall3.visible=true;
            _this.Red+=1;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBall")&&(_this.redCarrot4.visible==false)&&(_this.redCherry4.visible==false)&&(_this.redSmallBall4.visible==false)&&((_this.redCarrot3.visible==true)||(_this.redCherry3.visible==true)||(_this.redSmallBall3.visible==true))&&((_this.redCarrot2.visible==true)||(_this.redCherry2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redCarrot1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redBall.visible=false;
            _this.redBall4.visible=true;
            _this.Red+=1;
       }
       else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCarrot")&&(_this.redBall1.visible==false)&&(_this.redCherry1.visible==false)&&(_this.redSmallBall1.visible==false)){
            _this.redCarrot.visible=false;
            _this.redCarrot1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCarrot")&&(_this.redBall2.visible==false)&&(_this.redCherry2.visible==false)&&(_this.redSmallBall2.visible==false)&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCarrot.visible=false;
            _this.redCarrot2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCarrot")&&(_this.redBall3.visible==false)&&(_this.redCherry3.visible==false)&&(_this.redSmallBall3.visible==false)&&((_this.redBall2.visible==true)||(_this.redCherry2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCarrot.visible=false;
            _this.redCarrot3.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCarrot")&&(_this.redBall4.visible==false)&&(_this.redCherry4.visible==false)&&(_this.redSmallBall4.visible==false)&&((_this.redBall3.visible==true)||(_this.redCherry3.visible==true)||(_this.redSmallBall3.visible==true))&&((_this.redBall2.visible==true)||(_this.redCherry2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCarrot.visible=false;
            _this.redCarrot4.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCherry")&&(_this.redBall1.visible==false)&&(_this.redCarrot1.visible==false)&&(_this.redSmallBall1.visible==false)){
            _this.redCherry.visible=false;
            _this.redCherry1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCherry")&&(_this.redBall2.visible==false)&&(_this.redCarrot2.visible==false)&&(_this.redSmallBall2.visible==false)&&((_this.redBall1.visible==true)||(_this.redCarrot1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCherry.visible=false;
            _this.redCherry2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCherry")&&(_this.redBall3.visible==false)&&(_this.redCarrot3.visible==false)&&(_this.redSmallBall3.visible==false)&&((_this.redBall2.visible==true)||(_this.redCarrot2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCarrot1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCherry.visible=false;
            _this.redCherry3.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redCherry")&&(_this.redCarrot4.visible==false)&&(_this.redBall4.visible==false)&&(_this.redSmallBall4.visible==false)&&((_this.redBall3.visible==true)||(_this.redCarrot3.visible==true)||(_this.redSmallBall3.visible==true))&&((_this.redBall2.visible==true)||(_this.redCarrot2.visible==true)||(_this.redSmallBall2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCarrot1.visible==true)||(_this.redSmallBall1.visible==true))){
            _this.redCherry.visible=false;
            _this.redCherry4.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redSmallBall")&&(_this.redBall1.visible==false)&&(_this.redCherry1.visible==false)&&(_this.redCarrot1.visible==false)){
            _this.redSmallBall.visible=false;
            _this.redSmallBall1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redSmallBall")&&(_this.redBall2.visible==false)&&(_this.redCherry2.visible==false)&&(_this.redCarrot2.visible==false)&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redCarrot1.visible==true))){
            _this.redSmallBall.visible=false;
            _this.redSmallBall2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redSmallBall")&&(_this.redBall3.visible==false)&&(_this.redCherry3.visible==false)&&(_this.redCarrot3.visible==false)&&((_this.redBall2.visible==true)||(_this.redCherry2.visible==true)||(_this.redCarrot2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redCarrot1.visible==true))){
            _this.redSmallBall.visible=false;
            _this.redSmallBall3.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redSmallBall")&&(_this.redBall4.visible==false)&&(_this.redCherry4.visible==false)&&(_this.redCarrot4.visible==false)&&((_this.redBall3.visible==true)||(_this.redCherry3.visible==true)||(_this.redCarrot3.visible==true))&&((_this.redBall2.visible==true)||(_this.redCherry2.visible==true)||(_this.redCarrot2.visible==true))&&((_this.redBall1.visible==true)||(_this.redCherry1.visible==true)||(_this.redCarrot1.visible==true))){
            _this.redSmallBall.visible=false;
            _this.redSmallBall4.visible=true;
            _this.Red+=1;
        }
        if(_this.Red==4){
            _this.checkAns1();
        } 
        }
        else if(_this.questionNo==2){
            if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redPapaya")&&(_this.redBalloon1.visible==false)&&(_this.redFlower1.visible==false)){
                _this.redPapaya.visible=false;
                _this.redPapaya1.visible=true;
                _this.Red+=1;
            }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redPapaya")&&(_this.redBalloon2.visible==false)&&(_this.redFlower2.visible==false)&&((_this.redBalloon1.visible==true)||(_this.redFlower1.visible==true))){
            _this.redPapaya.visible=false;
            _this.redPapaya2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redPapaya")&&(_this.redBalloon3.visible==false)&&(_this.redFlower3.visible==false)&&((_this.redBalloon2.visible==true)||(_this.redFlower2.visible==true))&&((_this.redBalloon1.visible==true)||(_this.redFlower1.visible==true))){
            _this.redPapaya.visible=false;
            _this.redPapaya3.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBalloon")&&(_this.redFlower1.visible==false)&&(_this.redPapaya1.visible==false)){
            _this.redBalloon.visible=false;
            _this.redBalloon1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBalloon")&&(_this.redFlower2.visible==false)&&(_this.redPapaya2.visible==false)&&((_this.redFlower1.visible==true)||(_this.redPapaya1.visible==true))){
            _this.redBalloon.visible=false;
            _this.redBalloon2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redBalloon")&&(_this.redFlower3.visible==false)&&(_this.redPapaya3.visible==false)&&((_this.redFlower2.visible==true)||(_this.redPapaya2.visible==true))&&((_this.redFlower1.visible==true)||(_this.redPapaya1.visible==true))){
            _this.redBalloon.visible=false;
            _this.redBalloon3.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redFlower")&&(_this.redPapaya1.visible==false)&&(_this.redBalloon1.visible==false)){
            _this.redFlower.visible=false;
            _this.redFlower1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redFlower")&&(_this.redPapaya2.visible==false)&&(_this.redBalloon2.visible==false)&&((_this.redPapaya1.visible==true)||(_this.redBalloon1.visible==true))){
            _this.redFlower.visible=false;
            _this.redFlower2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redFlower")&&(_this.redPapaya3.visible==false)&&(_this.redBalloon3.visible==false)&&((_this.redPapaya2.visible==true)||(_this.redBalloon2.visible==true))&&((_this.redPapaya1.visible==true)||(_this.redBalloon1.visible==true))){
            _this.redFlower.visible=false;
            _this.redFlower3.visible=true;
            _this.Red+=1;
        }
        if(_this.Red==3){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==3){
            if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redWatermelon")&&(_this.redOrange1.visible==false)){
                _this.redWatermelon.visible=false;
                _this.redWatermelon1.visible=true;
                _this.Red+=1;
            }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redWatermelon")&&(_this.redOrange2.visible==false)&&(_this.redOrange1.visible==true)){
            _this.redWatermelon.visible=false;
            _this.redWatermelon2.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redOrange")&&(_this.redWatermelon1.visible==false)){
            _this.redOrange.visible=false;
            _this.redOrange1.visible=true;
            _this.Red+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redOrange")&&(_this.redWatermelon2.visible==false)&&(_this.redWatermelon1.visible==true)){
            _this.redOrange.visible=false;
            _this.redOrange2.visible=true;
            _this.Red+=1;
        }
        if(_this.Red==2){
            _this.checkAns1();
        }
        }    
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("Red="+_this.Red)
        },_this);
                   
    },
   yellowDrag:function(target){
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
        if(_this.questionNo==1){
        if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowShoe")&&(_this.yellowOrange1.visible==false)&&(_this.yellowFlower1.visible==false)){
            _this.yellowShoe.visible=false;
            _this.yellowShoe1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowShoe")&&(_this.yellowOrange2.visible==false)&&(_this.yellowFlower2.visible==false)&&((_this.yellowOrange1.visible==true)||(_this.yellowFlower1.visible==true))){
            _this.yellowShoe.visible=false;
            _this.yellowShoe2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowShoe")&&(_this.yellowOrange3.visible==false)&&(_this.yellowFlower3.visible==false)&&((_this.yellowOrange2.visible==true)||(_this.yellowFlower2.visible==true))&&((_this.yellowOrange1.visible==true)||(_this.yellowFlower1.visible==true))){
            _this.yellowShoe.visible=false;
            _this.yellowShoe3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOrange")&&(_this.yellowShoe1.visible==false)&&(_this.yellowFlower1.visible==false)){
            _this.yellowOrange.visible=false;
            _this.yellowOrange1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOrange")&&(_this.yellowShoe2.visible==false)&&(_this.yellowFlower2.visible==false)&&((_this.yellowShoe1.visible==true)||(_this.yellowFlower1.visible==true))){
            _this.yellowOrange.visible=false;
            _this.yellowOrange2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOrange")&&(_this.yellowShoe3.visible==false)&&(_this.yellowFlower3.visible==false)&&((_this.yellowShoe2.visible==true)||(_this.yellowFlower2.visible==true))&&((_this.yellowShoe1.visible==true)||(_this.yellowFlower1.visible==true))){
            _this.yellowOrange.visible=false;
            _this.yellowOrange3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowFlower")&&(_this.yellowShoe1.visible==false)&&(_this.yellowOrange1.visible==false)){
            _this.yellowFlower.visible=false;
            _this.yellowFlower1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowFlower")&&(_this.yellowShoe2.visible==false)&&(_this.yellowOrange2.visible==false)&&((_this.yellowShoe1.visible==true)||(_this.yellowOrange1.visible==true))){
            _this.yellowFlower.visible=false;
            _this.yellowFlower2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowFlower")&&(_this.yellowShoe3.visible==false)&&(_this.yellowOrange3.visible==false)&&((_this.yellowShoe2.visible==true)||(_this.yellowOrange2.visible==true))&&((_this.yellowShoe1.visible==true)||(_this.yellowOrange1.visible==true))){
            _this.yellowFlower.visible=false;
            _this.yellowFlower3.visible=true;
            _this.Yellow+=1;
        }
        if(_this.Yellow==3){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==2){
           if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCarrot")){
            _this.yellowCarrot.visible=false;
            _this.yellowCarrot1.visible=true;
            _this.Yellow+=1;
        }
            if(_this.Yellow==1){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==3){
           if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCherry")&&(_this.yellowSmallBall1.visible==false)&&(_this.yellowBalloon1.visible==false)&&(_this.yellowBall1.visible==false)&&(_this.yellowPapaya1.visible==false)){
            _this.yellowCherry.visible=false;
            _this.yellowCherry1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCherry")&&(_this.yellowSmallBall2.visible==false)&&(_this.yellowBalloon2.visible==false)&&(_this.yellowBall2.visible==false)&&(_this.yellowPapaya2.visible==false)&&((_this.yellowSmallBall1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowCherry.visible=false;
            _this.yellowCherry2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCherry")&&(_this.yellowSmallBall3.visible==false)&&(_this.yellowBalloon3.visible==false)&&(_this.yellowBall3.visible==false)&&(_this.yellowPapaya3.visible==false)&&((_this.yellowSmallBall2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowCherry.visible=false;
            _this.yellowCherry3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCherry")&&(_this.yellowSmallBall4.visible==false)&&(_this.yellowBalloon4.visible==false)&&(_this.yellowBall4.visible==false)&&(_this.yellowPapaya4.visible==false)&&((_this.yellowSmallBall3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowCherry.visible=false;
            _this.yellowCherry4.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowCherry")&&(_this.yellowSmallBall5.visible==false)&&(_this.yellowBalloon5.visible==false)&&(_this.yellowBall5.visible==false)&&(_this.yellowPapaya5.visible==false)&&((_this.yellowSmallBall4.visible==true)||(_this.yellowBalloon4.visible==true)||(_this.yellowBall4.visible==true)||(_this.yellowPapaya4.visible==true))&&((_this.yellowSmallBall3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowCherry.visible=false;
            _this.yellowCherry5.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowSmallball")&&(_this.yellowCherry1.visible==false)&&(_this.yellowBalloon1.visible==false)&&(_this.yellowBall1.visible==false)&&(_this.yellowPapaya1.visible==false)){
            _this.yellowSmallball.visible=false;
            _this.yellowSmallBall1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowSmallball")&&(_this.yellowCherry2.visible==false)&&(_this.yellowBalloon2.visible==false)&&(_this.yellowBall2.visible==false)&&(_this.yellowPapaya2.visible==false)&&((_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowSmallball.visible=false;
            _this.yellowSmallBall2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowSmallball")&&(_this.yellowCherry3.visible==false)&&(_this.yellowBalloon3.visible==false)&&(_this.yellowBall3.visible==false)&&(_this.yellowPapaya3.visible==false)&&((_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowSmallball.visible=false;
            _this.yellowSmallBall3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowSmallball")&&(_this.yellowCherry4.visible==false)&&(_this.yellowBalloon4.visible==false)&&(_this.yellowBall4.visible==false)&&(_this.yellowPapaya4.visible==false)&&((_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowSmallball.visible=false;
            _this.yellowSmallBall4.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowSmallball")&&(_this.yellowCherry5.visible==false)&&(_this.yellowBalloon5.visible==false)&&(_this.yellowBall5.visible==false)&&(_this.yellowPapaya5.visible==false)&&((_this.yellowCherry4.visible==true)||(_this.yellowBalloon4.visible==true)||(_this.yellowBall4.visible==true)||(_this.yellowPapaya4.visible==true))&&((_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowSmallball.visible=false;
            _this.yellowSmallBall5.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBalloon")&&(_this.yellowSmallBall1.visible==false)&&(_this.yellowCherry1.visible==false)&&(_this.yellowBall1.visible==false)&&(_this.yellowPapaya1.visible==false)){
            _this.yellowBalloon.visible=false;
            _this.yellowBalloon1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBalloon")&&(_this.yellowSmallBall2.visible==false)&&(_this.yellowCherry2.visible==false)&&(_this.yellowBall2.visible==false)&&(_this.yellowPapaya2.visible==false)&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBalloon.visible=false;
            _this.yellowBalloon2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBalloon")&&(_this.yellowSmallBall3.visible==false)&&(_this.yellowCherry3.visible==false)&&(_this.yellowBall3.visible==false)&&(_this.yellowPapaya3.visible==false)&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBalloon.visible=false;
            _this.yellowBalloon3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBalloon")&&(_this.yellowSmallBall4.visible==false)&&(_this.yellowCherry4.visible==false)&&(_this.yellowBall4.visible==false)&&(_this.yellowPapaya4.visible==false)&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBalloon.visible=false;
            _this.yellowBalloon4.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBalloon")&&(_this.yellowSmallBall5.visible==false)&&(_this.yellowCherry5.visible==false)&&(_this.yellowBall5.visible==false)&&(_this.yellowPapaya5.visible==false)&&((_this.yellowSmallBall4.visible==true)||(_this.yellowCherry4.visible==true)||(_this.yellowBall4.visible==true)||(_this.yellowPapaya4.visible==true))&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBall3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBall2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBall1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBalloon.visible=false;
            _this.yellowBalloon5.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBall")&&(_this.yellowSmallBall1.visible==false)&&(_this.yellowCherry1.visible==false)&&(_this.yellowBalloon1.visible==false)&&(_this.yellowPapaya1.visible==false)){
            _this.yellowBall.visible=false;
            _this.yellowBall1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBall")&&(_this.yellowSmallBall2.visible==false)&&(_this.yellowCherry2.visible==false)&&(_this.yellowBalloon2.visible==false)&&(_this.yellowPapaya2.visible==false)&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBall.visible=false;
            _this.yellowBall2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBall")&&(_this.yellowSmallBall3.visible==false)&&(_this.yellowCherry3.visible==false)&&(_this.yellowBalloon3.visible==false)&&(_this.yellowPapaya3.visible==false)&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBall.visible=false;
            _this.yellowBall3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBall")&&(_this.yellowSmallBall4.visible==false)&&(_this.yellowCherry4.visible==false)&&(_this.yellowBalloon4.visible==false)&&(_this.yellowPapaya4.visible==false)&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBall.visible=false;
            _this.yellowBall4.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowBall")&&(_this.yellowSmallBall5.visible==false)&&(_this.yellowCherry5.visible==false)&&(_this.yellowBalloon5.visible==false)&&(_this.yellowPapaya5.visible==false)&&((_this.yellowSmallBall4.visible==true)||(_this.yellowCherry4.visible==true)||(_this.yellowBalloon4.visible==true)||(_this.yellowPapaya4.visible==true))&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowPapaya3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowPapaya2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowPapaya1.visible==true))){
            _this.yellowBall.visible=false;
            _this.yellowBall5.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowPapaya")&&(_this.yellowSmallBall1.visible==false)&&(_this.yellowCherry1.visible==false)&&(_this.yellowBalloon1.visible==false)&&(_this.yellowBall1.visible==false)){
            _this.yellowPapaya.visible=false;
            _this.yellowPapaya1.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowPapaya")&&(_this.yellowSmallBall2.visible==false)&&(_this.yellowCherry2.visible==false)&&(_this.yellowBalloon2.visible==false)&&(_this.yellowBall2.visible==false)&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true))){
            _this.yellowPapaya.visible=false;
            _this.yellowPapaya2.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowPapaya")&&(_this.yellowSmallBall3.visible==false)&&(_this.yellowCherry3.visible==false)&&(_this.yellowBalloon3.visible==false)&&(_this.yellowBall3.visible==false)&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true))){
            _this.yellowPapaya.visible=false;
            _this.yellowPapaya3.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowPapaya")&&(_this.yellowSmallBall4.visible==false)&&(_this.yellowCherry4.visible==false)&&(_this.yellowBalloon4.visible==false)&&(_this.yellowBall4.visible==false)&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true))){
            _this.yellowPapaya.visible=false;
            _this.yellowPapaya4.visible=true;
            _this.Yellow+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowPapaya")&&(_this.yellowSmallBall5.visible==false)&&(_this.yellowCherry5.visible==false)&&(_this.yellowBalloon5.visible==false)&&(_this.yellowBall5.visible==false)&&((_this.yellowSmallBall4.visible==true)||(_this.yellowCherry4.visible==true)||(_this.yellowBalloon4.visible==true)||(_this.yellowBall4.visible==true))&&((_this.yellowSmallBall3.visible==true)||(_this.yellowCherry3.visible==true)||(_this.yellowBalloon3.visible==true)||(_this.yellowBall3.visible==true))&&((_this.yellowSmallBall2.visible==true)||(_this.yellowCherry2.visible==true)||(_this.yellowBalloon2.visible==true)||(_this.yellowBall2.visible==true))&&((_this.yellowSmallBall1.visible==true)||(_this.yellowCherry1.visible==true)||(_this.yellowBalloon1.visible==true)||(_this.yellowBall1.visible==true))){
            _this.yellowPapaya.visible=false;
            _this.yellowPapaya5.visible=true;
            _this.Yellow+=1;
        }
        if(_this.Yellow==5){
            _this.checkAns1();
        }
        }
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("Yellow="+_this.Yellow)
        
        },_this);
         
    },
   blueDrag:function(target){
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
        if(_this.questionNo==1){
            if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBalloon")&&(_this.blueFlower1.visible==false)&&(_this.blueBall1.visible==false)){
                _this.blueballoon.visible=false;
                _this.blueballoon1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBalloon")&&(_this.blueFlower2.visible==false)&&(_this.blueBall2.visible==false)&&((_this.blueFlower1.visible==true)||(_this.blueBall1.visible==true))){
                _this.blueballoon.visible=false;
                _this.blueballoon2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBalloon")&&(_this.blueFlower3.visible==false)&&(_this.blueBall3.visible==false)&&((_this.blueFlower2.visible==true)||(_this.blueBall2.visible==true))&&((_this.blueFlower1.visible==true)||(_this.blueBall1.visible==true))){
                _this.blueballoon.visible=false;
                _this.blueballoon3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueFlower")&&(_this.blueBall1.visible==false)&&(_this.blueballoon1.visible==false)){
                _this.blueFlower.visible=false;
                _this.blueFlower1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueFlower")&&(_this.blueBall2.visible==false)&&(_this.blueballoon2.visible==false)&&((_this.blueBall1.visible==true)||(_this.blueballoon1.visible==true))){
                _this.blueFlower.visible=false;
                _this.blueFlower2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueFlower")&&(_this.blueBall3.visible==false)&&(_this.blueballoon3.visible==false)&&((_this.blueBall2.visible==true)||(_this.blueballoon2.visible==true))&&((_this.blueBall1.visible==true)||(_this.blueballoon1.visible==true))){
                _this.blueFlower.visible=false;
                _this.blueFlower3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBall")&&(_this.blueballoon1.visible==false)&&(_this.blueFlower1.visible==false)){
                _this.blueBall.visible=false;
                _this.blueBall1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBall")&&(_this.blueballoon2.visible==false)&&(_this.blueFlower2.visible==false)&&((_this.blueballoon1.visible==true)||(_this.blueFlower1.visible==true))){
                _this.blueBall.visible=false;
                _this.blueBall2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueBall")&&(_this.blueballoon3.visible==false)&&(_this.blueFlower3.visible==false)&&((_this.blueballoon2.visible==true)||(_this.blueFlower2.visible==true))&&((_this.blueballoon1.visible==true)||(_this.blueFlower1.visible==true))){
                _this.blueBall.visible=false;
                _this.blueBall3.visible=true;
                _this.Blue+=1;
            }
            if(_this.Blue==3){
                _this.checkAns1();
            }
        }
        else if(_this.questionNo==2){
            if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueOrange")&&(_this.blueWatermelon1.visible==false)&&(_this.blueCherry1.visible==false)&&(_this.blueCarrot1.visible==false)){
                _this.blueOrange.visible=false;
                _this.blueOrange1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueOrange")&&(_this.blueWatermelon2.visible==false)&&(_this.blueCherry2.visible==false)&&(_this.blueCarrot2.visible==false)&&((_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueOrange.visible=false;
                _this.blueOrange2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueOrange")&&(_this.blueWatermelon3.visible==false)&&(_this.blueCherry3.visible==false)&&(_this.blueCarrot3.visible==false)&&((_this.blueWatermelon2.visible==true)||(_this.blueCherry2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueOrange.visible=false;
                _this.blueOrange3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueOrange")&&(_this.blueWatermelon4.visible==false)&&(_this.blueCherry4.visible==false)&&(_this.blueCarrot4.visible==false)&&((_this.blueWatermelon3.visible==true)||(_this.blueCherry3.visible==true)||(_this.blueCarrot3.visible==true))&&((_this.blueWatermelon2.visible==true)||(_this.blueCherry2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueOrange.visible=false;
                _this.blueOrange4.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueWatermelon")&&(_this.blueOrange1.visible==false)&&(_this.blueCherry1.visible==false)&&(_this.blueCarrot1.visible==false)){
                _this.blueWatermelon.visible=false;
                _this.blueWatermelon1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueWatermelon")&&(_this.blueOrange2.visible==false)&&(_this.blueCherry2.visible==false)&&(_this.blueCarrot2.visible==false)&&((_this.blueOrange1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueWatermelon.visible=false;
                _this.blueWatermelon2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueWatermelon")&&(_this.blueOrange3.visible==false)&&(_this.blueCherry3.visible==false)&&(_this.blueCarrot3.visible==false)&&((_this.blueOrange2.visible==true)||(_this.blueCherry2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueWatermelon.visible=false;
                _this.blueWatermelon3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueWatermelon")&&(_this.blueOrange4.visible==false)&&(_this.blueCherry4.visible==false)&&(_this.blueCarrot4.visible==false)&&((_this.blueOrange3.visible==true)||(_this.blueCherry3.visible==true)||(_this.blueCarrot3.visible==true))&&((_this.blueOrange2.visible==true)||(_this.blueCherry2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueCherry1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueWatermelon.visible=false;
                _this.blueWatermelon4.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCherry")&&(_this.blueOrange1.visible==false)&&(_this.blueWatermelon1.visible==false)&&(_this.blueCarrot1.visible==false)){
                _this.blueCherry.visible=false;
                _this.blueCherry1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCherry")&&(_this.blueOrange2.visible==false)&&(_this.blueWatermelon2.visible==false)&&(_this.blueCarrot2.visible==false)&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueCherry.visible=false;
                _this.blueCherry2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCherry")&&(_this.blueOrange3.visible==false)&&(_this.blueWatermelon3.visible==false)&&(_this.blueCarrot3.visible==false)&&((_this.blueOrange2.visible==true)||(_this.blueWatermelon2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueCherry.visible=false;
                _this.blueCherry3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCherry")&&(_this.blueOrange4.visible==false)&&(_this.blueWatermelon4.visible==false)&&(_this.blueCarrot4.visible==false)&&((_this.blueOrange3.visible==true)||(_this.blueWatermelon3.visible==true)||(_this.blueCarrot3.visible==true))&&((_this.blueOrange2.visible==true)||(_this.blueWatermelon2.visible==true)||(_this.blueCarrot2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCarrot1.visible==true))){
                _this.blueCherry.visible=false;
                _this.blueCherry4.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCarrot")&&(_this.blueOrange1.visible==false)&&(_this.blueWatermelon1.visible==false)&&(_this.blueCherry1.visible==false)){
                _this.blueCarrot.visible=false;
                _this.blueCarrot1.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCarrot")&&(_this.blueOrange2.visible==false)&&(_this.blueWatermelon2.visible==false)&&(_this.blueCherry2.visible==false)&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true))){
                _this.blueCarrot.visible=false;
                _this.blueCarrot2.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCarrot")&&(_this.blueOrange3.visible==false)&&(_this.blueWatermelon3.visible==false)&&(_this.blueCherry3.visible==false)&&((_this.blueOrange2.visible==true)||(_this.blueWatermelon2.visible==true)||(_this.blueCherry2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true))){
                _this.blueCarrot.visible=false;
                _this.blueCarrot3.visible=true;
                _this.Blue+=1;
            }
            else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueCarrot")&&(_this.blueOrange4.visible==false)&&(_this.blueWatermelon4.visible==false)&&(_this.blueCherry4.visible==false)&&((_this.blueOrange3.visible==true)||(_this.blueWatermelon3.visible==true)||(_this.blueCherry3.visible==true))&&((_this.blueOrange2.visible==true)||(_this.blueWatermelon2.visible==true)||(_this.blueCherry2.visible==true))&&((_this.blueOrange1.visible==true)||(_this.blueWatermelon1.visible==true)||(_this.blueCherry1.visible==true))){
                _this.blueCarrot.visible=false;
                _this.blueCarrot4.visible=true;
                _this.Blue+=1;
            }
            if(_this.Blue==4){
                _this.checkAns1();
            }
        }
        else if(_this.questionNo==3){
           if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueShoe")){
            _this.blueShoe.visible=false;
            _this.blueShoe1.visible=true;
            _this.Blue+=1;
        }
            if(_this.Blue==1){
            _this.checkAns1();
        }
        }
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("Blue="+_this.Blue)
        
        },_this);
        
   },
   
   circleDrag:function(target){
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
    if(_this.questionNo==4){
       if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")){
            _this.greenCircle.visible=false;
            _this.greenCircle1.visible=true;
            _this.circle+=1;
       }
        if(_this.circle==1){
            _this.checkAns1();
        }
        }
    else if(_this.questionNo==5){
       if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="blueCircle")&&(_this.greenCircle1.visible==false)&&(_this.redCircle1.visible==false)&&(_this.yellowCircle1.visible==false)){
            _this.blueCircle.visible=false;
            _this.blueCircle1.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="blueCircle")&&(_this.greenCircle2.visible==false)&&(_this.redCircle2.visible==false)&&(_this.yellowCircle2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true))){
            _this.blueCircle.visible=false;
            _this.blueCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="blueCircle")&&(_this.greenCircle3.visible==false)&&(_this.redCircle3.visible==false)&&(_this.yellowCircle3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true))){
            _this.blueCircle.visible=false;
            _this.blueCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="blueCircle")&&(_this.greenCircle4.visible==false)&&(_this.redCircle4.visible==false)&&(_this.yellowCircle4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.redCircle3.visible==true)||(_this.yellowCircle3.visible==true))){
            _this.blueCircle.visible=false;
            _this.blueCircle4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle1.visible==false)&&(_this.redCircle1.visible==false)&&(_this.blueCircle1.visible==false)){
            _this.yellowCircle.visible=false;
            _this.yellowCircle1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle2.visible==false)&&(_this.redCircle2.visible==false)&&(_this.blueCircle2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.blueCircle1.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle3.visible==false)&&(_this.redCircle3.visible==false)&&(_this.blueCircle3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.blueCircle2.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle4.visible==false)&&(_this.redCircle4.visible==false)&&(_this.blueCircle4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.blueCircle2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.redCircle3.visible==true)||(_this.blueCircle3.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle1.visible==false)&&(_this.yellowCircle1.visible==false)&&(_this.blueCircle1.visible==false)){
            _this.redCircle.visible=false;
            _this.redCircle1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle2.visible==false)&&(_this.yellowCircle2.visible==false)&&(_this.blueCircle2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle3.visible==false)&&(_this.yellowCircle3.visible==false)&&(_this.blueCircle3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.blueCircle2.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle4.visible==false)&&(_this.yellowCircle4.visible==false)&&(_this.blueCircle4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.blueCircle2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.yellowCircle3.visible==true)||(_this.blueCircle3.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.yellowCircle1.visible==false)&&(_this.redCircle1.visible==false)&&(_this.blueCircle1.visible==false)){
            _this.greenCircle.visible=false;
            _this.greenCircle1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle2.visible==false)&&(_this.yellowCircle2.visible==false)&&(_this.blueCircle2.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle3.visible==false)&&(_this.yellowCircle3.visible==false)&&(_this.blueCircle3.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.blueCircle2.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle4.visible==false)&&(_this.yellowCircle4.visible==false)&&(_this.blueCircle4.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.blueCircle1.visible==true))&&((_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.blueCircle2.visible==true))&&((_this.redCircle3.visible==true)||(_this.yellowCircle3.visible==true)||(_this.blueCircle3.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle4.visible=true;
            _this.circle+=1;
       }    
        if(_this.circle==4){
            _this.checkAns1();
        }
        }
       else if(_this.questionNo==6){
       if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle1.visible==false)&&(_this.redCircle1.visible==false)&&(_this.redCirc1.visible==false)){
            _this.yellowCircle.visible=false;
            _this.yellowCircle1.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle2.visible==false)&&(_this.redCircle2.visible==false)&&(_this.redCirc2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.redCirc1.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle3.visible==false)&&(_this.redCircle3.visible==false)&&(_this.redCirc3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.redCirc1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.redCirc2.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="yellowCircle")&&(_this.greenCircle4.visible==false)&&(_this.redCircle4.visible==false)&&(_this.redCirc4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCircle1.visible==true)||(_this.redCirc1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCircle2.visible==true)||(_this.redCirc2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.redCircle3.visible==true)||(_this.redCirc3.visible==true))){
            _this.yellowCircle.visible=false;
            _this.yellowCircle4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle1.visible==false)&&(_this.redCirc1.visible==false)&&(_this.yellowCircle1.visible==false)){
            _this.redCircle.visible=false;
            _this.redCircle1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle2.visible==false)&&(_this.redCirc2.visible==false)&&(_this.yellowCircle2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCirc1.visible==true)||(_this.yellowCircle1.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle3.visible==false)&&(_this.redCirc3.visible==false)&&(_this.yellowCircle3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCirc1.visible==true)||(_this.yellowCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCirc2.visible==true)||(_this.yellowCircle2.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCircle")&&(_this.greenCircle4.visible==false)&&(_this.redCirc4.visible==false)&&(_this.yellowCircle4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.redCirc1.visible==true)||(_this.yellowCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.redCirc2.visible==true)||(_this.yellowCircle2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.redCirc3.visible==true)||(_this.yellowCircle3.visible==true))){
            _this.redCircle.visible=false;
            _this.redCircle4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCirc")&&(_this.greenCircle1.visible==false)&&(_this.yellowCircle1.visible==false)&&(_this.redCircle1.visible==false)){
            _this.redCirc.visible=false;
            _this.redCirc1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCirc")&&(_this.greenCircle2.visible==false)&&(_this.yellowCircle2.visible==false)&&(_this.redCircle2.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCircle1.visible==true))){
            _this.redCirc.visible=false;
            _this.redCirc2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCirc")&&(_this.greenCircle3.visible==false)&&(_this.yellowCircle3.visible==false)&&(_this.redCircle3.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.redCircle2.visible==true))){
            _this.redCirc.visible=false;
            _this.redCirc3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="redCirc")&&(_this.greenCircle4.visible==false)&&(_this.yellowCircle4.visible==false)&&(_this.redCircle4.visible==false)&&((_this.greenCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCircle1.visible==true))&&((_this.greenCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.redCircle2.visible==true))&&((_this.greenCircle3.visible==true)||(_this.yellowCircle3.visible==true)||(_this.redCircle3.visible==true))){
            _this.redCirc.visible=false;
            _this.redCirc4.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.yellowCircle1.visible==false)&&(_this.redCircle1.visible==false)&&(_this.redCirc1.visible==false)){
            _this.greenCircle.visible=false;
            _this.greenCircle1.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle2.visible==false)&&(_this.yellowCircle2.visible==false)&&(_this.redCirc2.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCirc1.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle2.visible=true;
            _this.circle+=1;
       }
       else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle3.visible==false)&&(_this.yellowCircle3.visible==false)&&(_this.redCirc3.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCirc1.visible==true))&&((_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.redCirc2.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle3.visible=true;
            _this.circle+=1;
       }
      else if(_this.checkOverlap(_this.graphics1, target)&&(target.name=="greenCircle")&&(_this.redCircle4.visible==false)&&(_this.yellowCircle4.visible==false)&&(_this.redCirc4.visible==false)&&((_this.redCircle1.visible==true)||(_this.yellowCircle1.visible==true)||(_this.redCirc1.visible==true))&&((_this.redCircle2.visible==true)||(_this.yellowCircle2.visible==true)||(_this.redCirc2.visible==true))&&((_this.redCircle3.visible==true)||(_this.yellowCircle3.visible==true)||(_this.redCirc3.visible==true))){
            _this.greenCircle.visible=false;
            _this.greenCircle4.visible=true;
            _this.circle+=1;
       }    
        if(_this.circle==4){
            _this.checkAns1();
        }
        }    
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("circle="+_this.circle)
        },_this);
   }, 
   triangleDrag:function(target){
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
        if(_this.questionNo==4){
            if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="greenTriangle")&&(_this.yellowTriangle1.visible==false)&&(_this.blueTriangle1.visible==false)){
            _this.greenTriangle.visible=false;
            _this.greenTriangle1.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="greenTriangle")&&(_this.yellowTriangle2.visible==false)&&(_this.blueTriangle2.visible==false)&&((_this.yellowTriangle1.visible==true)||(_this.blueTriangle1.visible==true))){
            _this.greenTriangle.visible=false;
            _this.greenTriangle2.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="greenTriangle")&&(_this.yellowTriangle3.visible==false)&&(_this.blueTriangle3.visible==false)&&((_this.yellowTriangle2.visible==true)||(_this.blueTriangle2.visible==true))&&((_this.yellowTriangle1.visible==true)||(_this.blueTriangle1.visible==true))){
            _this.greenTriangle.visible=false;
            _this.greenTriangle3.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="blueTriangle")&&(_this.yellowTriangle1.visible==false)&&(_this.greenTriangle1.visible==false)){
            _this.blueTriangle.visible=false;
            _this.blueTriangle1.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="blueTriangle")&&(_this.yellowTriangle2.visible==false)&&(_this.greenTriangle2.visible==false)&&((_this.yellowTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.blueTriangle.visible=false;
            _this.blueTriangle2.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="blueTriangle")&&(_this.yellowTriangle3.visible==false)&&(_this.greenTriangle3.visible==false)&&((_this.yellowTriangle2.visible==true)||(_this.greenTriangle2.visible==true))&&((_this.yellowTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.blueTriangle.visible=false;
            _this.blueTriangle3.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="yellowTriangle")&&(_this.blueTriangle1.visible==false)&&(_this.greenTriangle1.visible==false)){
            _this.yellowTriangle.visible=false;
            _this.yellowTriangle1.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="yellowTriangle")&&(_this.blueTriangle2.visible==false)&&(_this.greenTriangle2.visible==false)&&((_this.blueTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.yellowTriangle.visible=false;
            _this.yellowTriangle2.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="yellowTriangle")&&(_this.blueTriangle3.visible==false)&&(_this.greenTriangle3.visible==false)&&((_this.blueTriangle2.visible==true)||(_this.greenTriangle2.visible==true))&&((_this.blueTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.yellowTriangle.visible=false;
            _this.yellowTriangle3.visible=true;
            _this.triangle+=1;
        }
        if(_this.triangle==3){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==5){
            if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="greenTriangle")&&(_this.redTriangle1.visible==false)){
            _this.greenTriangle.visible=false;
            _this.greenTriangle1.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="greenTriangle")&&(_this.redTriangle2.visible==false)&&((_this.redTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.greenTriangle.visible=false;
            _this.greenTriangle2.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redTriangle")&&(_this.greenTriangle1.visible==false)){
            _this.redTriangle.visible=false;
            _this.redTriangle1.visible=true;
            _this.triangle+=1;
        }
        else if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="redTriangle")&&(_this.greenTriangle2.visible==false)&&((_this.greenTriangle1.visible==true)||(_this.greenTriangle1.visible==true))){
            _this.redTriangle.visible=false;
            _this.redTriangle2.visible=true;
            _this.triangle+=1;
        }
        if(_this.triangle==2){
            _this.checkAns1();
        }
        } 
        else if(_this.questionNo==6){
            if(_this.checkOverlap(_this.graphics2, target)&&(target.name=="blueTriangle")){
            _this.blueTriangle.visible=false;
            _this.blueTriangle1.visible=true;
            _this.triangle+=1;
        }
        if(_this.triangle==1){
            _this.checkAns1();
        }
        }    
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("triangle="+_this.triangle)
        },_this);
   },
   ovalDrag:function(target){
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
        if(_this.questionNo==4){
        if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval1.visible==false)&&(_this.blueOval1.visible==false)&&(_this.redOval1.visible==false)){
            _this.greenOval.visible=false;
            _this.greenOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval2.visible==false)&&(_this.blueOval2.visible==false)&&(_this.redOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval3.visible==false)&&(_this.blueOval3.visible==false)&&(_this.redOval3.visible==false)&&((_this.yellowOval2.visible==true)||(_this.blueOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval4.visible==false)&&(_this.blueOval4.visible==false)&&(_this.redOval4.visible==false)&&((_this.yellowOval3.visible==true)||(_this.blueOval3.visible==true)||(_this.redOval3.visible==true))&&((_this.yellowOval2.visible==true)||(_this.blueOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval4.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.redOval1.visible==false)){
            _this.blueOval.visible=false;
            _this.blueOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.redOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.redOval3.visible==false)&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.redOval4.visible==false)&&((_this.yellowOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.redOval3.visible==true))&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval4.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.yellowOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.blueOval1.visible==false)){
            _this.redOval.visible=false;
            _this.redOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.yellowOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.blueOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.redOval.visible=false;
            _this.redOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.yellowOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.blueOval3.visible==false)&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.blueOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.redOval.visible=false;
            _this.redOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.yellowOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.blueOval4.visible==false)&&((_this.yellowOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.blueOval3.visible==true))&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.blueOval2.visible==true))&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.redOval.visible=false;
            _this.redOval4.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.redOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.blueOval1.visible==false)){
            _this.yellowOval.visible=false;
            _this.yellowOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.redOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.blueOval2.visible==false)&&((_this.redOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.redOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.blueOval3.visible==false)&&((_this.redOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.blueOval2.visible==true))&&((_this.redOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.redOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.blueOval4.visible==false)&&((_this.redOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.blueOval3.visible==true))&&((_this.redOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.blueOval2.visible==true))&&((_this.redOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval4.visible=true;
            _this.oval+=1;
        }
        if(_this.oval==4){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==5){
        if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval1.visible==false)&&(_this.blueOval1.visible==false)){
            _this.greenOval.visible=false;
            _this.greenOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval2.visible==false)&&(_this.blueOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval3.visible==false)&&(_this.blueOval3.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.blueOval2.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval1.visible==false)&&(_this.greenOval1.visible==false)){
            _this.blueOval.visible=false;
            _this.blueOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval2.visible==false)&&(_this.greenOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval3.visible==false)&&(_this.greenOval3.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval1.visible==false)&&(_this.greenOval1.visible==false)){
            _this.yellowOval.visible=false;
            _this.yellowOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval2.visible==false)&&(_this.greenOval2.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval3.visible==false)&&(_this.greenOval3.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true))&&((_this.blueOval2.visible==true)||(_this.greenOval2.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval3.visible=true;
            _this.oval+=1;
        }    
        if(_this.oval==3){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==6){
        if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval1.visible==false)&&(_this.blueOval1.visible==false)&&(_this.redOval1.visible==false)){
            _this.greenOval.visible=false;
            _this.greenOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval2.visible==false)&&(_this.blueOval2.visible==false)&&(_this.redOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval3.visible==false)&&(_this.blueOval3.visible==false)&&(_this.redOval3.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.blueOval2.visible==true)||(_this.redOval2.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="greenOval")&&(_this.yellowOval4.visible==false)&&(_this.blueOval4.visible==false)&&(_this.redOval4.visible==false)&&((_this.yellowOval1.visible==true)||(_this.blueOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.blueOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval3.visible==true)||(_this.blueOval3.visible==true)||(_this.redOval3.visible==true))){
            _this.greenOval.visible=false;
            _this.greenOval4.visible=true;
            _this.oval+=1;
        }    
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.redOval1.visible==false)){
            _this.blueOval.visible=false;
            _this.blueOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.redOval2.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.redOval3.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="blueOval")&&(_this.yellowOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.redOval4.visible==false)&&((_this.yellowOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.yellowOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.yellowOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.redOval3.visible==true))){
            _this.blueOval.visible=false;
            _this.blueOval4.visible=true;
            _this.oval+=1;
        }    
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.redOval1.visible==false)){
            _this.yellowOval.visible=false;
            _this.yellowOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.redOval2.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.redOval3.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.blueOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="yellowOval")&&(_this.blueOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.redOval4.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.redOval1.visible==true))&&((_this.blueOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.redOval2.visible==true))&&((_this.blueOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.redOval3.visible==true))){
            _this.yellowOval.visible=false;
            _this.yellowOval4.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.blueOval1.visible==false)&&(_this.greenOval1.visible==false)&&(_this.yellowOval1.visible==false)){
            _this.redOval.visible=false;
            _this.redOval1.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.blueOval2.visible==false)&&(_this.greenOval2.visible==false)&&(_this.yellowOval2.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.yellowOval1.visible==true))){
            _this.redOval.visible=false;
            _this.redOval2.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.blueOval3.visible==false)&&(_this.greenOval3.visible==false)&&(_this.yellowOval3.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.yellowOval1.visible==true))&&((_this.blueOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.yellowOval2.visible==true))){
            _this.redOval.visible=false;
            _this.redOval3.visible=true;
            _this.oval+=1;
        }
        else if(_this.checkOverlap(_this.graphics3, target)&&(target.name=="redOval")&&(_this.blueOval4.visible==false)&&(_this.greenOval4.visible==false)&&(_this.yellowOval4.visible==false)&&((_this.blueOval1.visible==true)||(_this.greenOval1.visible==true)||(_this.yellowOval1.visible==true))&&((_this.blueOval2.visible==true)||(_this.greenOval2.visible==true)||(_this.yellowOval2.visible==true))&&((_this.blueOval3.visible==true)||(_this.greenOval3.visible==true)||(_this.yellowOval3.visible==true))){
            _this.redOval.visible=false;
            _this.redOval4.visible=true;
            _this.oval+=1;
        }    
        if(_this.oval==4){
            _this.checkAns1();
        }
        }    
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("oval="+_this.oval)
        },_this);
   },
   squareDrag:function(target){
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
        if(_this.questionNo==4){
        if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.redSquare1.visible==false)&&(_this.greenSquare1.visible==false)&&(_this.yellowSquare1.visible==false)&&(_this.yellowSqr1.visible==false)){
            _this.blueSquare.visible=false;
            _this.blueSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.redSquare2.visible==false)&&(_this.greenSquare2.visible==false)&&(_this.yellowSquare2.visible==false)&&(_this.yellowSqr2.visible==false)&&((_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.redSquare3.visible==false)&&(_this.greenSquare3.visible==false)&&(_this.yellowSquare3.visible==false)&&(_this.yellowSqr3.visible==false)&&((_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.redSquare4.visible==false)&&(_this.greenSquare4.visible==false)&&(_this.yellowSquare4.visible==false)&&(_this.yellowSqr4.visible==false)&&((_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.redSquare5.visible==false)&&(_this.greenSquare5.visible==false)&&(_this.yellowSquare5.visible==false)&&(_this.yellowSqr5.visible==false)&&((_this.redSquare4.visible==true)||(_this.greenSquare4.visible==true)||(_this.yellowSquare4.visible==true)||(_this.yellowSqr4.visible==true))&&((_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare5.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.blueSquare1.visible==false)&&(_this.greenSquare1.visible==false)&&(_this.yellowSquare1.visible==false)&&(_this.yellowSqr1.visible==false)){
            _this.redSquare.visible=false;
            _this.redSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.blueSquare2.visible==false)&&(_this.greenSquare2.visible==false)&&(_this.yellowSquare2.visible==false)&&(_this.yellowSqr2.visible==false)&&((_this.blueSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.blueSquare3.visible==false)&&(_this.greenSquare3.visible==false)&&(_this.yellowSquare3.visible==false)&&(_this.yellowSqr3.visible==false)&&((_this.blueSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.blueSquare4.visible==false)&&(_this.greenSquare4.visible==false)&&(_this.yellowSquare4.visible==false)&&(_this.yellowSqr4.visible==false)&&((_this.blueSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.blueSquare5.visible==false)&&(_this.greenSquare5.visible==false)&&(_this.yellowSquare5.visible==false)&&(_this.yellowSqr5.visible==false)&&((_this.blueSquare4.visible==true)||(_this.greenSquare4.visible==true)||(_this.yellowSquare4.visible==true)||(_this.yellowSqr4.visible==true))&&((_this.blueSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare5.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.blueSquare1.visible==false)&&(_this.redSquare1.visible==false)&&(_this.yellowSquare1.visible==false)&&(_this.yellowSqr1.visible==false)){
            _this.greenSquare.visible=false;
            _this.greenSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.blueSquare2.visible==false)&&(_this.redSquare2.visible==false)&&(_this.yellowSquare2.visible==false)&&(_this.yellowSqr2.visible==false)&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.blueSquare3.visible==false)&&(_this.redSquare3.visible==false)&&(_this.yellowSquare3.visible==false)&&(_this.yellowSqr3.visible==false)&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.blueSquare4.visible==false)&&(_this.redSquare4.visible==false)&&(_this.yellowSquare4.visible==false)&&(_this.yellowSqr4.visible==false)&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.blueSquare5.visible==false)&&(_this.redSquare5.visible==false)&&(_this.yellowSquare5.visible==false)&&(_this.yellowSqr5.visible==false)&&((_this.blueSquare4.visible==true)||(_this.redSquare4.visible==true)||(_this.yellowSquare4.visible==true)||(_this.yellowSqr4.visible==true))&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.yellowSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.yellowSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.yellowSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare5.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.blueSquare1.visible==false)&&(_this.redSquare1.visible==false)&&(_this.greenSquare1.visible==false)&&(_this.yellowSqr1.visible==false)){
            _this.yellowSquare.visible=false;
            _this.yellowSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.blueSquare2.visible==false)&&(_this.redSquare2.visible==false)&&(_this.greenSquare2.visible==false)&&(_this.yellowSqr2.visible==false)&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.blueSquare3.visible==false)&&(_this.redSquare3.visible==false)&&(_this.greenSquare3.visible==false)&&(_this.yellowSqr3.visible==false)&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.blueSquare4.visible==false)&&(_this.redSquare4.visible==false)&&(_this.greenSquare4.visible==false)&&(_this.yellowSqr4.visible==false)&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.blueSquare5.visible==false)&&(_this.redSquare5.visible==false)&&(_this.greenSquare5.visible==false)&&(_this.yellowSqr5.visible==false)&&((_this.blueSquare4.visible==true)||(_this.redSquare4.visible==true)||(_this.greenSquare4.visible==true)||(_this.yellowSqr4.visible==true))&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSqr3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSqr2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSqr1.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare5.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSqr")&&(_this.blueSquare1.visible==false)&&(_this.redSquare1.visible==false)&&(_this.greenSquare1.visible==false)&&(_this.yellowSquare1.visible==false)){
            _this.yellowSqr.visible=false;
            _this.yellowSqr1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSqr")&&(_this.blueSquare2.visible==false)&&(_this.redSquare2.visible==false)&&(_this.greenSquare2.visible==false)&&(_this.yellowSquare2.visible==false)&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true))){
            _this.yellowSqr.visible=false;
            _this.yellowSqr2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSqr")&&(_this.blueSquare3.visible==false)&&(_this.redSquare3.visible==false)&&(_this.greenSquare3.visible==false)&&(_this.yellowSquare3.visible==false)&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true))){
            _this.yellowSqr.visible=false;
            _this.yellowSqr3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSqr")&&(_this.blueSquare4.visible==false)&&(_this.redSquare4.visible==false)&&(_this.greenSquare4.visible==false)&&(_this.yellowSquare4.visible==false)&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true))){
            _this.yellowSqr.visible=false;
            _this.yellowSqr4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSqr")&&(_this.blueSquare5.visible==false)&&(_this.redSquare5.visible==false)&&(_this.greenSquare5.visible==false)&&(_this.yellowSquare5.visible==false)&&((_this.blueSquare4.visible==true)||(_this.redSquare4.visible==true)||(_this.greenSquare4.visible==true)||(_this.yellowSquare4.visible==true))&&((_this.blueSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.greenSquare3.visible==true)||(_this.yellowSquare3.visible==true))&&((_this.blueSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSquare2.visible==true)||(_this.yellowSquare2.visible==true))&&((_this.blueSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSquare1.visible==true)||(_this.yellowSquare1.visible==true))){
            _this.yellowSqr.visible=false;
            _this.yellowSqr5.visible=true;
            _this.square+=1;
        }
        if(_this.square==5){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==5){
        if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.redSquare1.visible==false)&&(_this.blueSquare1.visible==false)&&(_this.greenSqr1.visible==false)){
            _this.greenSquare.visible=false;
            _this.greenSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.redSquare2.visible==false)&&(_this.blueSquare2.visible==false)&&(_this.greenSqr2.visible==false)&&((_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.redSquare3.visible==false)&&(_this.blueSquare3.visible==false)&&(_this.greenSqr3.visible==false)&&((_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.redSquare2.visible==true)||(_this.blueSquare2.visible==true)||(_this.greenSqr2.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSquare")&&(_this.redSquare4.visible==false)&&(_this.blueSquare4.visible==false)&&(_this.greenSqr4.visible==false)&&((_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.redSquare2.visible==true)||(_this.blueSquare2.visible==true)||(_this.greenSqr2.visible==true))&&((_this.redSquare3.visible==true)||(_this.blueSquare3.visible==true)||(_this.greenSqr3.visible==true))){
            _this.greenSquare.visible=false;
            _this.greenSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.greenSquare1.visible==false)&&(_this.blueSquare1.visible==false)&&(_this.greenSqr1.visible==false)){
            _this.redSquare.visible=false;
            _this.redSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.greenSquare2.visible==false)&&(_this.blueSquare2.visible==false)&&(_this.greenSqr2.visible==false)&&((_this.greenSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.greenSquare3.visible==false)&&(_this.blueSquare3.visible==false)&&(_this.greenSqr3.visible==false)&&((_this.greenSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.blueSquare2.visible==true)||(_this.greenSqr2.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.greenSquare4.visible==false)&&(_this.blueSquare4.visible==false)&&(_this.greenSqr4.visible==false)&&((_this.greenSquare1.visible==true)||(_this.blueSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.blueSquare2.visible==true)||(_this.greenSqr2.visible==true))&&((_this.greenSquare3.visible==true)||(_this.blueSquare3.visible==true)||(_this.greenSqr3.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.greenSquare1.visible==false)&&(_this.redSquare1.visible==false)&&(_this.greenSqr1.visible==false)){
            _this.blueSquare.visible=false;
            _this.blueSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.greenSquare2.visible==false)&&(_this.redSquare2.visible==false)&&(_this.greenSqr2.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSqr1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.greenSquare3.visible==false)&&(_this.redSquare3.visible==false)&&(_this.greenSqr3.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSqr2.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.greenSquare4.visible==false)&&(_this.redSquare4.visible==false)&&(_this.greenSqr4.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.greenSqr1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.greenSqr2.visible==true))&&((_this.greenSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.greenSqr3.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare4.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSqr")&&(_this.greenSquare1.visible==false)&&(_this.redSquare1.visible==false)&&(_this.blueSquare1.visible==false)){
            _this.greenSqr.visible=false;
            _this.greenSqr1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSqr")&&(_this.greenSquare2.visible==false)&&(_this.redSquare2.visible==false)&&(_this.blueSquare2.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true))){
            _this.greenSqr.visible=false;
            _this.greenSqr2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSqr")&&(_this.greenSquare3.visible==false)&&(_this.redSquare3.visible==false)&&(_this.blueSquare3.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.blueSquare2.visible==true))){
            _this.greenSqr.visible=false;
            _this.greenSqr3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="greenSqr")&&(_this.greenSquare4.visible==false)&&(_this.redSquare4.visible==false)&&(_this.blueSquare4.visible==false)&&((_this.greenSquare1.visible==true)||(_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true))&&((_this.greenSquare2.visible==true)||(_this.redSquare2.visible==true)||(_this.blueSquare2.visible==true))&&((_this.greenSquare3.visible==true)||(_this.redSquare3.visible==true)||(_this.blueSquare3.visible==true))){
            _this.greenSqr.visible=false;
            _this.greenSqr4.visible=true;
            _this.square+=1;
        }
        if(_this.square==4){
            _this.checkAns1();
        }
        }
        else if(_this.questionNo==6){
        if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.redSquare1.visible==false)&&(_this.blueSquare1.visible==false)){
            _this.yellowSquare.visible=false;
            _this.yellowSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.redSquare2.visible==false)&&(_this.blueSquare2.visible==false)&&((_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="yellowSquare")&&(_this.redSquare3.visible==false)&&(_this.blueSquare3.visible==false)&&((_this.redSquare1.visible==true)||(_this.blueSquare1.visible==true))&&((_this.redSquare2.visible==true)||(_this.blueSquare2.visible==true))){
            _this.yellowSquare.visible=false;
            _this.yellowSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.yellowSquare1.visible==false)&&(_this.blueSquare1.visible==false)){
            _this.redSquare.visible=false;
            _this.redSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.yellowSquare2.visible==false)&&(_this.blueSquare2.visible==false)&&((_this.yellowSquare1.visible==true)||(_this.blueSquare1.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="redSquare")&&(_this.yellowSquare3.visible==false)&&(_this.blueSquare3.visible==false)&&((_this.yellowSquare1.visible==true)||(_this.blueSquare1.visible==true))&&((_this.yellowSquare2.visible==true)||(_this.blueSquare2.visible==true))){
            _this.redSquare.visible=false;
            _this.redSquare3.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.yellowSquare1.visible==false)&&(_this.redSquare1.visible==false)){
            _this.blueSquare.visible=false;
            _this.blueSquare1.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.yellowSquare2.visible==false)&&(_this.redSquare2.visible==false)&&((_this.yellowSquare1.visible==true)||(_this.redSquare1.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare2.visible=true;
            _this.square+=1;
        }
        else if(_this.checkOverlap(_this.graphics4, target)&&(target.name=="blueSquare")&&(_this.yellowSquare3.visible==false)&&(_this.redSquare3.visible==false)&&((_this.yellowSquare1.visible==true)||(_this.redSquare1.visible==true))&&((_this.yellowSquare2.visible==true)||(_this.redSquare2.visible==true))){
            _this.blueSquare.visible=false;
            _this.blueSquare3.visible=true;
            _this.square+=1;
        }
        if(_this.square==3){
            _this.checkAns1();
        }
        }    
            target.events.onDragStop.removeAll();
            target.x=_this.vx;
            console.log("vx3="+_this.vx)
            target.y=_this.vy;
            console.log("vy3="+_this.vy)
            console.log("square="+_this.square)
        },_this); 
   },
    
   checkAns1:function(){
      if(_this.questionNo ==1){
        if((_this.Green==2) && (_this.Red==4) && (_this.Yellow==3) && (_this.Blue==3))
        {
            console.log("checkTrue1")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }
      else if(_this.questionNo ==2){
        if((_this.Green==4) && (_this.Red==3) && (_this.Yellow==1) && (_this.Blue==4))
        {
            console.log("checkTrue2")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }
      else if(_this.questionNo ==3){
        if((_this.Green==3) && (_this.Red==2) && (_this.Yellow==5) && (_this.Blue==1))
        {
            console.log("checkTrue3")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }
      else if(_this.questionNo ==4){
        if((_this.circle==1) && (_this.triangle==3) && (_this.oval==4) && (_this.square==5))
        {
            console.log("checkTrue4")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }
      else if(_this.questionNo ==5){
        if((_this.circle==4) && (_this.triangle==2) && (_this.oval==3) && (_this.square==4))
        {
            console.log("checkTrue4")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }
      else if(_this.questionNo ==6){
        if((_this.circle==4) && (_this.triangle==1) && (_this.oval==4) && (_this.square==3))
        {
            console.log("checkTrue6")
            _this.speakerbtn1.inputEnabled=false; 
            _this.speakerbtn2.visible=true;
            _this.speakerbtn2.inputEnabled=true;
            _this.speakerbtn2.input.useHandCursor = true;
            _this.getVoice2();
            _this.numberBox1.visible=true;
            _this.numberBox2.visible=true;
            _this.numberBox3.visible=true;
            _this.numberBox4.visible=true;
            _this.addNumberPad();
       }
        }   
    },
    
   graphDrawing:function(){
          _this.speakerbtn2.inputEnabled=false;
          _this.speakerbtn3.visible=true;
          _this.speakerbtn3.inputEnabled=true;
          _this.speakerbtn3.input.useHandCursor = true;
          _this.getVoice3();
          _this.emptyBox.destroy();
          _this.boxGroup.addChild(_this.objectGrp);
                    
          _this.boxGroup.addChild(_this.numberBox1);
          _this.boxGroup.addChild(_this.numberBox2);
          _this.boxGroup.addChild(_this.numberBox3);
          _this.boxGroup.addChild(_this.numberBox4);
          
          _this.boxGroup.addChild(_this.numBoxNum1);
          _this.boxGroup.addChild(_this.numBoxNum2);
          _this.boxGroup.addChild(_this.numBoxNum3);
          _this.boxGroup.addChild(_this.numBoxNum4);
          
          _this.boxGroup.x  = 0;
          _this.tween2 = _this.add.tween(_this.boxGroup);
          _this.tween2.to({ x:-400}, 0, 'Linear', true, 0);
          
          _this.time.events.add(1100,function(){
              _this.graphBoard.visible=true;
              _this.plus1.visible=true;
              _this.plus2.visible=true;
              _this.plus3.visible=true;
              _this.plus4.visible=true;
              _this.minus1.visible=true;
              _this.minus2.visible=true;
              _this.minus3.visible=true;
              _this.minus4.visible=true;
           },this);
      
  },
    
   greenBar:function(target){
      console.log("greenBarrr")
      if(_this.g==0){
          _this.greenGraph.frame=0;
          _this.minus1.inputEnabled=false;
      }
      else if(_this.g==1){
          console.log("GreenClicked")
          _this.greenGraph.frame=1;
      }
      else if(_this.g==2){
          _this.greenGraph.frame=2;
      }
      else if(_this.g==3){
          _this.greenGraph.frame=3;
      }
      else if(_this.g==4){
          _this.greenGraph.frame=4;
      }
      else if(_this.g==5){
          _this.greenGraph.frame=5;
          _this.plus1.inputEnabled=false;
      }
      _this.checkAns2();
  },
    
   redBar:function(target){
      console.log("greenBarrr")
      if(_this.r==0){
          _this.redGraph.frame=0;
          _this.minus2.inputEnabled=false;
      }
      else if(_this.r==1){
          _this.redGraph.frame=1;
      }
      else if(_this.r==2){
          _this.redGraph.frame=2;
      }
      else if(_this.r==3){
          _this.redGraph.frame=3;
      }
      else if(_this.r==4){
          _this.redGraph.frame=4;
      }
      else if(_this.r==5){
          _this.redGraph.frame=5;
          _this.plus2.inputEnabled=false;
      }
      _this.checkAns2();
   },
    
   yellowBar:function(target){
      console.log("greenBarrr")
      if(_this.y==0){
          _this.yellowGraph.frame=0;
          _this.minus3.inputEnabled=false;
      }
      else if(_this.y==1){
          _this.yellowGraph.frame=1;
      }
      else if(_this.y==2){
          _this.yellowGraph.frame=2;
      }
      else if(_this.y==3){
          _this.yellowGraph.frame=3;
      }
      else if(_this.y==4){
          _this.yellowGraph.frame=4;
      }
      else if(_this.y==5){
          _this.yellowGraph.frame=5;
          _this.plus3.inputEnabled=false;
      }
       _this.checkAns2();
   },
    
   blueBar:function(target){
      console.log("greenBarrr")
      if(_this.b==0){
          _this.blueGraph.frame=0;
          _this.minus4.inputEnabled=false;
      }
      else if(_this.b==1){
          _this.blueGraph.frame=1;
      }
      else if(_this.b==2){
          _this.blueGraph.frame=2;
      }
      else if(_this.b==3){
          _this.blueGraph.frame=3;
      }
      else if(_this.b==4){
          _this.blueGraph.frame=4;
      }
      else if(_this.b==5){
          _this.blueGraph.frame=5;
          _this.plus4.inputEnabled=false;
      }
       _this.checkAns2();
   },
    
   circleBar:function(target){
      console.log("circleBarrr")
      if(_this.cir==0){
          _this.circleGraph.frame=0;
          _this.minus1.inputEnabled=false;
      }
      else if(_this.cir==1){
          _this.circleGraph.frame=1;
      }
      else if(_this.cir==2){
          _this.circleGraph.frame=2;
      }
      else if(_this.cir==3){
          _this.circleGraph.frame=3;
      }
      else if(_this.cir==4){
          _this.circleGraph.frame=4;
      }
      else if(_this.cir==5){
          _this.circleGraph.frame=5;
          _this.plus1.inputEnabled=false;
      }
      _this.checkAns2();
  },
    
   triangleBar:function(target){
      console.log("triangleBarrr")
      if(_this.tri==0){
          _this.triangleGraph.frame=0;
          _this.minus2.inputEnabled=false;
      }
      else if(_this.tri==1){
          _this.triangleGraph.frame=1;
      }
      else if(_this.tri==2){
          _this.triangleGraph.frame=2;
      }
      else if(_this.tri==3){
          _this.triangleGraph.frame=3;
      }
      else if(_this.tri==4){
          _this.triangleGraph.frame=4;
      }
      else if(_this.tri==5){
          _this.triangleGraph.frame=5;
          _this.plus2.inputEnabled=false;
      }
      _this.checkAns2();
   },
    
   ovalBar:function(target){
      console.log("ovalBarrr")
      if(_this.ova==0){
          _this.ovalGraph.frame=0;
          _this.minus3.inputEnabled=false;
      }
      else if(_this.ova==1){
          _this.ovalGraph.frame=1;
      }
      else if(_this.ova==2){
          _this.ovalGraph.frame=2;
      }
      else if(_this.ova==3){
          _this.ovalGraph.frame=3;
      }
      else if(_this.ova==4){
          _this.ovalGraph.frame=4;
      }
      else if(_this.ova==5){
          _this.ovalGraph.frame=5;
          _this.plus3.inputEnabled=false;
      }
       _this.checkAns2();
   },
    
   squareBar:function(target){
      console.log("squareBarrr")
      if(_this.squ==0){
          _this.squareGraph.frame=0;
          _this.minus4.inputEnabled=false;
      }
      else if(_this.squ==1){
          _this.squareGraph.frame=1;
      }
      else if(_this.squ==2){
          _this.squareGraph.frame=2;
      }
      else if(_this.squ==3){
          _this.squareGraph.frame=3;
      }
      else if(_this.squ==4){
          _this.squareGraph.frame=4;
      }
      else if(_this.squ==5){
          _this.squareGraph.frame=5;
          _this.plus4.inputEnabled=false;
      }
       _this.checkAns2();
   },    
    
   checkAns2:function(){
    _this.tickMark.visible = true;
    _this.tickMark.inputEnabled=true;  
    _this.tickMark.events.onInputDown.add(function(target){
    _this.tickMark.frame=1;
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
        
    _this.time.events.add(200,function(){
              _this.tickMark.frame=0;               
           },this);
           
      if(_this.questionNo==1){
          if((_this.greenGraph.frame==2)&&(_this.redGraph.frame==4)&&(_this.yellowGraph.frame==3)&&(_this.blueGraph.frame==3))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.greenGraph.inputEnabled=true;
                  _this.redGraph.inputEnabled=true;
                  _this.yellowGraph.inputEnabled=true;
                  _this.blueGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
             }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }
      else if(_this.questionNo==2){
          if((_this.greenGraph.frame==4)&&(_this.redGraph.frame==3)&&(_this.yellowGraph.frame==1)&&(_this.blueGraph.frame==4))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.greenGraph.inputEnabled=true;
                  _this.redGraph.inputEnabled=true;
                  _this.yellowGraph.inputEnabled=true;
                  _this.blueGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
             }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }
      else if(_this.questionNo==3){
          if((_this.greenGraph.frame==3)&&(_this.redGraph.frame==2)&&(_this.yellowGraph.frame==5)&&(_this.blueGraph.frame==1))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.greenGraph.inputEnabled=true;
                  _this.redGraph.inputEnabled=true;
                  _this.yellowGraph.inputEnabled=true;
                  _this.blueGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
             }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }
      else if(_this.questionNo==4){
          if((_this.circleGraph.frame==1)&&(_this.triangleGraph.frame==3)&&(_this.ovalGraph.frame==4)&&(_this.squareGraph.frame==5))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.circleGraph.inputEnabled=true;
                  _this.ovalGraph.inputEnabled=true;
                  _this.triangleGraph.inputEnabled=true;
                  _this.squareGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
              }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }
      else if(_this.questionNo==5){
          if((_this.circleGraph.frame==4)&&(_this.triangleGraph.frame==2)&&(_this.ovalGraph.frame==3)&&(_this.squareGraph.frame==4))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.circleGraph.inputEnabled=true;
                  _this.ovalGraph.inputEnabled=true;
                  _this.triangleGraph.inputEnabled=true;
                  _this.squareGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
             }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }
      else if(_this.questionNo==6){
          if((_this.circleGraph.frame==4)&&(_this.triangleGraph.frame==1)&&(_this.ovalGraph.frame==4)&&(_this.squareGraph.frame==3))
              {
                  _this.boxGroup.destroy();
                  _this.graphGrp.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.graphGrp2.x  = 0;
                  _this.tween2 = _this.add.tween(_this.graphGrp2);
                  _this.tween2.to({ x:-190}, 0, 'Linear', true, 0);
                  
                  _this.plus1.inputEnabled=false;
                  _this.plus2.inputEnabled=false;
                  _this.plus3.inputEnabled=false;
                  _this.plus4.inputEnabled=false;
                  _this.minus1.inputEnabled=false;
                  _this.minus2.inputEnabled=false;
                  _this.minus3.inputEnabled=false;
                  _this.minus4.inputEnabled=false;
                  _this.tickMark.inputEnabled=false;
                  _this.circleGraph.inputEnabled=true;
                  _this.ovalGraph.inputEnabled=true;
                  _this.triangleGraph.inputEnabled=true;
                  _this.squareGraph.inputEnabled=true;
                  _this.speakerbtn3.inputEnabled=false;
                  _this.speakerbtn4.visible=true;
                  _this.speakerbtn4.inputEnabled=true;
                  _this.speakerbtn4.input.useHandCursor = true;
                  _this.getVoice4();
             }
          else{
                  _this.shake.shake(10,_this.graphGrp);
                  _this.wmusic = _this.add.audio('waudio');
                  _this.wmusic.play();
          }
      }     
    },this);    
  },
   
   checkAns3:function(target){
      console.log("FFFFFFFFF "+target.name);
       _this.clickSound = _this.add.audio('ClickSound');
       _this.clickSound.play();
        _this.tickMark2.visible=true;
        _this.tickMark2.inputEnabled=true;
        _this.countCheck++;
        _this.storeTarget = target;
       if((_this.questionNo==2)||(_this.questionNo==6)){
            if(_this.countCheck == 1)
                {
                    _this.storeVar1 = target.name;
                }
            else if(_this.countCheck ==2)
                {
                    _this.storeVar2 = target.name;
                    _this.countCheck = 0;
                }
       }
       else if((_this.questionNo==1)||(_this.questionNo==3)||(_this.questionNo==4)||(_this.questionNo==5)){
           if(_this.countCheck == 1)
                {
                    _this.storeVar1 = target.name;
                    console.log("GGGGGGGGGGGG "+_this.storeVar1);
                    _this.countCheck = 0;
                }
           else if(_this.countCheck ==2)
                {
                    _this.storeVar1 = target.name;
                    console.log("GGGGGGGGGGGG "+_this.storeVar1);
                    _this.countCheck = 0;
                }
           
       }
       
        _this.tickMark2.events.onInputDown.add(function(target){
            console.log("@@@@@@@@@@@@@ "+_this.storeVar1,_this.storeVar2);
            _this.tickMark2.frame=1;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 

            _this.time.events.add(200,function(){
                      _this.tickMark2.frame=0;               
                   },this);
            target.events.onInputDown.removeAll();
            
        if((_this.questionNo==2)||(_this.questionNo==6)){
            if(((_this.storeVar1 == "correctAnswer1") && (_this.storeVar2 == "correctAnswer2"))||((_this.storeVar2 == "correctAnswer1") && (_this.storeVar1 == "correctAnswer2")))
                {
                    //alert("Correct");
                    _this.correctAns();
                }
            else if(((_this.storeVar1 == "wrongAnswer")&& (_this.storeVar2 == "correctAnswer2"))||((_this.storeVar1 == "wrongAnswer")&&(_this.storeVar2 == "correctAnswer1"))||((_this.storeVar2 == "wrongAnswer")&&(_this.storeVar1 == "correctAnswer1"))||((_this.storeVar2 == "wrongAnswer")&&(_this.storeVar1 == "correctAnswer2"))||(_this.storeVar1 == "wrongAnswer")||(_this.storeVar2 == "wrongAnswer")||(_this.storeVar1 == "correctAnswer1")||(_this.storeVar1 == "correctAnswer2")||(_this.storeVar2 == "correctAnswer1")||(_this.storeVar2 == "correctAnswer2")){
                        //alert('Wrong');
                      _this.storeVar1 = "";
                      _this.storeVar2 = "";
                      _this.glow1.visible=false;    
                      _this.glow2.visible=false;    
                      _this.glow3.visible=false;    
                      _this.glow4.visible=false;    
                      _this.shake.shake(10,_this.storeTarget);
                      _this.wmusic = _this.add.audio('waudio');
                      _this.wmusic.play();
                }
        }
        else if((_this.questionNo==1)||(_this.questionNo==3)||(_this.questionNo==4)||(_this.questionNo==5)){
            if((_this.storeVar1 == "correctAnswer1"))
                {
                    //alert("Correct");
                    _this.correctAns();
                }
            else if((_this.storeVar1 == "wrongAnswer")){
                      //alert('Wrong');    
                      _this.glow1.visible=false;    
                      _this.glow2.visible=false;    
                      _this.glow3.visible=false;    
                      _this.glow4.visible=false;    
                      _this.shake.shake(10,_this.storeTarget);
                      _this.wmusic = _this.add.audio('waudio');
                      _this.wmusic.play();
                    }
                }
        },_this);
        
   },    
   
   addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'dhdcg1_4_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numBackground.scale.setTo(1);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);
        _this.numBox1Pressed=true;
        _this.numberBox1.frame = 1;
        _this.numberBox2.frame = 0;
       
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'dhdcg1_4_numberpad'); 
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name =i;
            _this.numbg.frame=i;
            
            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';
            _this.numTxt.font = 'myfont';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
                  
        _this.eraser = _this.numGroup.create(_this.x+20,509,'dhdcg1_4_erase');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.1,1.1);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+80,509,'dhdcg1_4_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
          
        _this.eraser.events.onInputDown.add(function(){
             _this.eraserclicked=1;
             _this.eraser.frame=1;
             _this.clickSound.play();

                if(_this.numBox1Pressed){
                    _this.numberBox1.frame = 1;
                    _this.numBoxNum1.visible = false;
                    _this.numBox1Pressed = true;
                }
                else if(_this.numBox2Pressed){
                    _this.numberBox2.frame = 1;
                    _this.numBoxNum2.visible = false;
                    _this.numBox2Pressed = true;
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numberBox3.frame = 1;
                    _this.numBoxNum3.visible = false;
                    _this.numBox3Pressed = true;
                }
                else if(_this.numBox4Pressed)
                {
                    _this.numberBox4.frame = 1;
                    _this.numBoxNum4.visible = false;
                    _this.numBox4Pressed = true;
                }
         
            this.time.events.add(500,function(){
              _this.eraser.frame=0;                
           },this);
          
         _this.toCheckNumberPad = false;
          },this);
    
        _this.numGroup.y  = 100;
      
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
       
    },
    
   numClicked:function(target){
        _this.num = target.name;
        console.log(_this.num);
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
                
            if(_this.numBox1Pressed){
                 _this.numBoxNum1.visible = true;
                 _this.selectedAns1 = target.name;
                 _this.numBoxNum1.frame = target.name;
                 _this.numberBox1.frame = 0;
                 _this.numberBox2.frame = 1;
                 _this.numBox2Pressed = true;
                 _this.numBox1Pressed = false;
             }
            
            else if(_this.numBox2Pressed){
                 _this.numBoxNum2.visible = true;
                 _this.selectedAns2 = target.name;
                 _this.numBoxNum2.frame = target.name;
                 _this.numberBox2.frame = 0;
                 _this.numberBox3.frame = 1;
                 _this.numBox3Pressed = true;
                 _this.numBox2Pressed = false;
             }
             else if(_this.numBox3Pressed){
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name;
                 _this.numberBox3.frame = 0;
                 _this.numberBox4.frame = 1;
                 _this.numBox4Pressed = true;
                 _this.numBox3Pressed = false;
             }
             else if(_this.numBox4Pressed){
                 _this.numBoxNum4.visible = true;
                 _this.selectedAns4 = target.name;
                 _this.numBoxNum4.frame = target.name;
                 _this.numberBox4.frame = 0;
                 _this.numberBox1.frame = 1;
                 _this.numBox1Pressed = true;
                 _this.numBox4Pressed = false;
             }
       
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function(target){
        _this.rightbtn.frame=1;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
            
        _this.noofAttempts++;
          if(_this.glow)
          _this.glow.destroy();
             
        this.time.events.add(500,function(){
            _this.rightbtn.frame=0;                
        },this);
          
        _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;    
        // //console.log("selected Answer "+ _this.selectedAns);
        if( _this.selectedAns == _this.rightAns)  
            {
                 console.log("correct");
                _this.eraserclicked=0;
                _this.numberBoxGrp.setAll("frame",1);
                _this.graphDrawing();
                
                _this.numGroup.y  = 0;
                _this.Maintween = _this.add.tween(_this.numGroup);
                _this.Maintween.to({ y:100}, 0, 'Linear', true, 0);
                
                target.events.onInputDown.removeAll();
            }
        else {
            _this.shake.shake(10,_this.numberBoxGrp);
            console.log("wrong");

            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
            _this.numBoxNum3.visible = false;
            _this.numBoxNum4.visible = false;
            
            _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
            
            }
         },_this);
    },
   
   removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.celebration = false;
        console.log("no"+_this.no11);
        _this.count1++;
        _this.no11++;
        
        if(_this.no11<6)
        {
            _this.graphGrp.destroy();
            _this.graphGrp2.destroy();
            _this.tickMark.destroy();
            _this.tickMark2.destroy();
            _this.Green=0;
            _this.Red=0;
            _this.Yellow=0;
            _this.Blue=0;
            
            _this.g=0;
            _this.r=0;
            _this.y=0;
            _this.b=0;

            _this.w=0;

            _this.circle=0;
            _this.triangle=0;
            _this.square=0;
            _this.oval=0;

            _this.cir=0;
            _this.tri=0;
            _this.squ=0;
            _this.ova=0;
            _this.getQuestion();
            //_this.starsGroup.getChildAt(_this.count1).frame = 2;
             
        }
        else
        {
            //_this.stopVoice();
            _this.counterForTimer = null;
            _this.timer1=null;
            _this.state.start('longdivision2Score');
        }
    },
    
    correctAns:function()
    {
        console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        //_this.stopvoice();
        //_this.noofAttempts++;
       
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            console.log(_this.starAnim);

            _this.starAnim.smoothed = false;
            _this.anim = _this.starAnim.animations.add('star');
            _this.anim.play();
        
            if(_this.questionNo==1){
            _this.anim1 = _this.glow1.animations.add('play',[0,2,0,2,0,2]);
            _this.anim1.play(3,false);
              _this.glow2.visible=false;    
              _this.glow3.visible=false;    
              _this.glow4.visible=false;
            }
            else if(_this.questionNo==2){
            _this.anim2 = _this.glow1.animations.add('play',[0,4,0,4,0,4]);
            _this.anim2.play(3,false);
                
            _this.anim2 = _this.glow4.animations.add('play',[0,4,0,4,0,4]);
            _this.anim2.play(3,false);
                _this.glow2.visible=false;    
                _this.glow3.visible=false;
            }  
            else if(_this.questionNo==3){
            _this.anim3 = _this.glow3.animations.add('play',[0,5,0,5,0,5]);
            _this.anim3.play(3,false);
                _this.glow1.visible=false;    
                _this.glow2.visible=false;    
                _this.glow4.visible=false;
            }
            else if(_this.questionNo==4){
            _this.anim4 = _this.glow4.animations.add('play',[0,5,0,5,0,5]);
            _this.anim4.play(3,false);
                _this.glow1.visible=false;    
                _this.glow2.visible=false;    
                _this.glow3.visible=false;
            }
            else if(_this.questionNo==5){
            _this.anim5 = _this.glow2.animations.add('play',[0,2,0,2,0,2]);
            _this.anim5.play(3,false);
                _this.glow1.visible=false;    
                _this.glow3.visible=false;    
                _this.glow4.visible=false;
            }
            else if(_this.questionNo==6){
            _this.anim6 = _this.glow1.animations.add('play',[0,4,0,4,0,4]);
            _this.anim6.play(3,false);
                
            _this.anim6 = _this.glow3.animations.add('play',[0,4,0,4,0,4]);
            _this.anim6.play(3,false);
                _this.glow2.visible=false;    
                _this.glow4.visible=false;
            }
            
            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();
     
        
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
             
            _this.speakerbtn4.inputEnabled=false;
            _this.speakerbtn4.input.useHandCursor = false;
               
             console.log("correct11");
           
            _this.celebration = true;
        
            _this.click3 = _this.add.audio('ClickSound');
            _this.click3.play();
        
            _this.time.events.add(3000, _this.removeEverthing, _this);

            if(_this.timer)
                    {
                        _this.timer.stop();
                       _this.timer = null; 
                    }
                    _this.sceneCount++;
       telInitializer.tele_saveAssessment(1,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

           // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
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
    
    getVoice1:function()
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
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/Drag_objects.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/Drag_objects.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    getVoice2:function()
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
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/How_many_objects.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/How_many_objects.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    getVoice3:function()
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
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/Represent_in_graph.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/Represent_in_graph.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    getVoice4:function()
    {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArray[_this.no11])
        {
            case 1:
            case 5: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/Which_is_least.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/Which_is_least.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 3:
            case 4: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/Which_is_most.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/Which_is_most.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 2:    
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/English/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Hindi/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Kannada/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Gujarati/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Marathi/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Odiya/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Tamil/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Telugu/Which_are_equal.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/DH1/Urdu/Which_are_equal.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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