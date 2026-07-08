Game.grade4_3Blevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
var crocsGroup;
var tickMark;
var objGroup;
var rightOrderArray = [];
var glowOrderArray = [];
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var tweenCount;

var selectedAns = "";
var rightAns = "";
var counterText;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
 var  equation;
var eqnum;
var wrong;

var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;

var gameid;

Game.grade4_3Blevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.3B";
        
      /*  _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("volume4_3B",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade4MVG5){

            window.grade4MVG5 = true;

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

            _this.load.image('Level43A_bg1',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/BG.png');
        //_this.load.atlas('Level43A_backbtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.3A/backbtn.json');
       // _this.load.atlas('Level43A_speaker',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.3A/speaker.json');
       // _this.load.atlas('Level43A_starAnim',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.3A/starAnim.json');
        _this.load.image('Level43A_cloud',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/cloud.png');
        //_this.load.atlas('Level43A_btn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.3A/btn.json');
        _this.load.image('Level43A_bg3',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/bg3.png');
        //_this.load.image('Level43A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level43A_replay',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.3A/reply.json');
        
        _this.load.atlas('tick',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/4.3A/tick.json');
        _this.load.atlas('eraser',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/eraser.png' ,window.baseUrl+'json/gradeJson/4.3A/eraser.json');


        _this.load.atlas('Level43A_numbg',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/4.3A/numbg.json');
        _this.load.atlas('Level43A_rightBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/rightBtn.json');
        _this.load.atlas('Level43A_wrongBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/wrongBtn.json');
        
        //My files to load
      //  _this.load.atlas('Level43A_gameBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.3A/gameBox.json');
        //_this.load.atlas('Level43A_allimg',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.3A/allimg.json');
        _this.load.atlas('Level43A_tickMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.3A/tickMark.json');
        _this.load.atlas('Level43A_crossMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,window.baseUrl+'json/gradeJson/4.3A/crossMark.json');
        
        //_this.load.image('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glow.png');
        
        //game items
            _this.load.image('Level43A_arrow',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/Arw.png');
        
         _this.load.atlas('Level43A_incBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/4.3A/box1.json');
         _this.load.atlas('Level43A_AnswerBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box2.png' ,window.baseUrl+'json/gradeJson/4.3A/box2.json');
        
         _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQ.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQ.json');
         _this.load.atlas('Level43A_200Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQ.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQ.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQ.json');
        
         _this.load.atlas('Level43A_200A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 200.png' ,window.baseUrl+'json/gradeJson/4.3A/A 200.json');
         _this.load.atlas('Level43A_250A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 250.png' ,window.baseUrl+'json/gradeJson/4.3A/A 250.json');
         _this.load.atlas('Level43A_500A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 500.png' ,window.baseUrl+'json/gradeJson/4.3A/A 500.json');
         _this.load.atlas('Level43A_1000A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,window.baseUrl+'json/gradeJson/4.3A/A 1000.json');
        
        
        _this.load.atlas('Level43A_equation',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equation.png' ,window.baseUrl+'json/gradeJson/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
                _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQB.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQB.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQB.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQB.json');
        
         _this.load.atlas('Level43A_bottle',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,window.baseUrl+'json/gradeJson/4.3A/bottleB.json');
         _this.load.atlas('Level43A_bottle2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle2B.json');
         _this.load.atlas('Level43A_bottle3',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle3B.json');
         _this.load.atlas('Level43A_cup',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/cupB.png' ,window.baseUrl+'json/gradeJson/4.3A/cupB.json');
         _this.load.atlas('Level43A_glass',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glassB.png' ,window.baseUrl+'json/gradeJson/4.3A/glassB.json');
         _this.load.atlas('Level43A_jug',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jugB.png' ,window.baseUrl+'json/gradeJson/4.3A/jugB.json');
         _this.load.atlas('Level43A_jug2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,window.baseUrl+'json/gradeJson/4.3A/jug2B.json');
        
        
        _this.load.atlas('Level43A_equationB',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equationB.png' ,window.baseUrl+'json/gradeJson/4.3A/equationB.json');
        
        this.load.image('Level42C_redmark',window.baseUrl+'assets/gradeAssets/4.2C/redmark.png');
        
        /*********************Level 4.3 C*******************************/
         _this.load.atlas('Level43A_50QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQC.json');
         _this.load.atlas('Level43A_100QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQC.json');
         _this.load.atlas('Level43A_200QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQC.json');
         _this.load.atlas('Level43A_250QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQC.json');
         _this.load.atlas('Level43A_500QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQC.json');
        
         _this.load.atlas('Level43A_1000AC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,window.baseUrl+'json/gradeJson/4.3A/1000ltrC.json');
         _this.load.atlas('Level43A_1000QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,window.baseUrl+'json/gradeJson/4.3A/1000mlQD.json');
         _this.load.atlas('Level43A_jugC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,window.baseUrl+'json/gradeJson/4.3A/2lJug.json');
         _this.load.atlas('Level43A_arrowC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,window.baseUrl+'json/gradeJson/4.3A/arrowC.json');
         _this.load.atlas('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glowC.png' ,window.baseUrl+'json/gradeJson/4.3A/glowC.json');

    }

    },


	create:function(game){
        _this.amplify = null;
		noofAttempts=0;
        AnsTimerCount=0;
        
        _this.sceneCount = 0;
_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        countIncrement = 0;
        smallJar = 0;
        timeforlng=0;
        selectedAns = "";
        rightAns = "";
		redmark = 0;
		
        wrong = true;
        no1=0;
       // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
        tweenCount = 0;

		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

       

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
       
		/*var backbtn = this.add.button(5,1,'Level43A_CommonBackBtn',function(){
		this.stopVoice();
		enterTxt.setText("");
		selectedAns="";
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       _this.speakerbtn = this.add.button(908,1,'Level43A_CommonSpeakerBtn',function(){
			this.getVoice(1);
		},this,1,0,2);*/
		
		_this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
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

        _this.speakerbtn = this.add.button(600,6,'Level42A_CommonSpeakerBtn',function(){},this,1,0,2);
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           
            _this.getVoice(1);
            
        },_this);
        
       /* graphics = this.add.graphics(0, 400);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,960,120);		
		graphics.boundsPadding = 0;
		graphics.alpha=0;*/
		
		 _this.timebg=this.add.sprite(305,6,'Level42B_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


            /*_this.dottedBox=this.add.sprite(70,7,'dottedBox');
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
        
            _this.numTxt2 = this.add.text(220,24, 'Volume');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        this.generateStarsForTheScene(6);
        
       // no1++;
        if(window.languageSelected=="English")
            timforlang=14000;
        else if(window.languageSelected=="Kannada")
            timforlang=16000;
        else
            timforlang=12000;

        this.getQuestion();

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


    getQuestion:function(target)
    {   
		 noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

          _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
  _this.timer1.start();

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //console.log("get"+no1);
		//no1 =6;
		_this.questionid = 1;
    	switch(qArrays[no1])      
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwevelvethQuestion();
    				break;
           
    	}
        
    },
    
    addQuestion:function(no2)
    {
          ////////console.log("here");
           this.time.events.add(2000, function(){
  
           var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);
    },
    
 gotoFirstQuestion:function(){
        
        questionNo = 1;
		_this.firstValue = 50;
		_this.secondValue = 1;
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,445,'Level43A_cup');
         b2.anchor.setTo(0.5,1);
         b2.name = "cup";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		 redmark=this.add.sprite(618,360,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
            
        
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      

                shakeObjectGroup.x = 1000;
                b3.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(b3);
                Maintween1.to({ x: 220}, 0,'Linear', true, 0);
    
                counterText.setText("0");
           
        
     },
    
    gotoSecondQuestion:function(){
        
          questionNo = 2;
            eqnum = 1;
			_this.firstValue = 50;
		   _this.secondValue = 4;
           //console.log("Question number "+questionNo);
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		 redmark=this.add.sprite(610,290,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
         
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
          Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     },
    gotoThirdQuestion:function(){
        
          questionNo = 3;
         eqnum = 2;
		 _this.firstValue = 100;
		_this.secondValue = 1;
        //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_glass');
         b2.anchor.setTo(0.5,1);
         b2.name = "glass";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     },
    gotoFourthQuestion:function(){
       
          questionNo = 4;
        eqnum = 3;
		_this.firstValue = 100;
		_this.secondValue = 5;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle2');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle2";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		  redmark=this.add.sprite(610,200,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
		 
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     }, 
    gotoFifthQuestion:function(){
        
          questionNo = 5;
         eqnum = 4;
		 _this.firstValue = 250;
		_this.secondValue = 2;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle3');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle3";
      
         b3 = this.add.sprite(210,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		 redmark=this.add.sprite(610,200,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 210}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     }, 
    gotoSixthQuestion:function(){
        
          questionNo = 6;
        smallJar = 0
         eqnum = 7;
		 _this.firstValue = 500;
		_this.secondValue = 2;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_500Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "500Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		  redmark=this.add.sprite(643,185,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
            
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 180}, 0,'Linear', true, 0);
        counterText.setText("0");
        
     },
    gotoSeventhQuestion:function(){
        
         questionNo = 7;
         smallJar = 0;
         eqnum = 6;
		 _this.firstValue = 250;
		_this.secondValue = 4;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		 redmark=this.add.sprite(643,185,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        counterText.setText("0");
        
     },
    gotoEighthQuestion:function(){
       
         questionNo = 8;
         smallJar = 0;
		 _this.firstValue = 250;
		_this.secondValue = 3;
    //console.log("Question number "+questionNo);
         eqnum = 5;
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug2');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug2";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
		 
		 redmark=this.add.sprite(600,182,'Level42C_redmark');
         redmark.scale.setTo(0.75,0.75);
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(redmark);
      
 
            
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        
         counterText.setText("0");
        
     },
    /*gotoNinthQuestion:function(){
     
         questionNo = 9;
         smallJar = 0;
         eqnum = 16;
         //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_500Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "500Q";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(590,440,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(150,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
        
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        //console.log("wrong"+!wrong);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 150}, 0,'Linear', true, 0);
        
            counterText.setText("0");
      
        
     },
    */
onTapfillTheContainer:function(target)
    {
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        //console.log("Im pressed");
        countIncrement++;
        if(questionNo == 1)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 1)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 380}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 135}, 0,'Linear', true, 0);
                        

                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 50;
                    }
            }
        if(questionNo == 2)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 370}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
      
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 200;
                    }
            }
        if(questionNo == 3)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 1)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 375}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 100;
                    }
            }
        if(questionNo == 4)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 5)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 373}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                    
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            }
        if(questionNo == 5)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                    b2.frame=countIncrement;
                counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 220}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 373}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            } 
        if(questionNo == 6)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                smallJar +=2;
                //console.log("smallJar"+smallJar);
                    b2.frame=smallJar;
                  counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 180}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 380}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 430}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 70}, 0,'Linear', true, 0);
                        

                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 7)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                 b2.frame=countIncrement;
            /*    if(countIncrement==1)
                    b2.frame=countIncrement+4;
                if(countIncrement ==2)
                    b2.frame=countIncrement+8;*/
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 170}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 360}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 410}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 70}, 0,'Linear', true, 0);
                        
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 8)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                b2.frame=countIncrement;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 3)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
						
						var Maintween2 = this.add.tween(redmark);
                        Maintween2.to({ x: 360}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 110}, 0,'Linear', true, 0);
                        

                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 750;
                    }
            }
        
        /* if(questionNo == 9)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(countIncrement==1)
                    b2.frame=countIncrement+9;
                if(countIncrement ==2)
                    b2.frame=countIncrement+18;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 190}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 355}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 85}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }*/
        
    },
displayEquation:function()
    {
         
        /*counterText = this.add.text(520,300,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 32;
            //text.fontWeight = 'bold';
        counterText.fill = '#FFFFFF';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        counterText.setText(smallJar+" ml x "+countIncrement+" =");
        this.addNumberPad();*/
       
         /*equation = this.add.sprite(642,323,'Level43A_equationB');
         equation.anchor.setTo(0.5,1);
         equation.frame = eqnum;
         equation.name = "equationB";
         shakeObjectGroup.add(equation);*/
         this.addNumberPad();
		 if(qArrays[no1] ==5 || qArrays[no1] == 6 ||qArrays[no1]==7 || qArrays[no1]==8)
		{
		 if(window.languageSelected=="English"){
            kgTxt0 = this.add.text(612,304, _this.firstValue+" ml x "+_this.secondValue+" = ");
            kgTxt = this.add.text(557,300);
            kgTxt1 = this.add.text(820,304, " ml");
			kgTxt0.fontWeight = 'normal';
			kgTxt0.font = 'myfont';
			//kgTxt.font = 'myfont';
			kgTxt1.font = 'myfont';
			
			//kgTxt.fontWeight = 'normal'
			kgTxt1.fontWeight = 'normal';
			kgTxt0.fontSize = 40;
			//kgTxt.fontSize = 25;
			kgTxt1.fontSize = 40;
		 }
         else if(window.languageSelected=="Hindi"){
			 
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(599,307, "मि.ली ");
				kgTxt1 = this.add.text(831,307, " मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"     x "+_this.secondValue+" = ");
				kgTxt = this.add.text(595,305, "ಮಿ.ಲೀ");
				kgTxt1 = this.add.text(837,305, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 16;
				kgTxt1.fontSize = 16;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Gujarati"){
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(599,307, "એમ");
				kgTxt1 = this.add.text(831,307, " એમ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		     }
			 else if(window.languageSelected=="Marathi"){
			 kgTxt0 = this.add.text(590,304, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(580,307, "मिलीलिटर");
				kgTxt1 = this.add.text(837,307, " मिलीलिटर");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Tamil"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "மி.லி");
				kgTxt1 = this.add.text(814,305, "மி.லி");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Telugu"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "మిల్లీ,");
				kgTxt1 = this.add.text(814,305, "మిల్లీ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Urdu"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "ملی لیٹر");
				kgTxt1 = this.add.text(830,305, "ملی لیٹر");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
			 else{
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(599,307, "ମି.ଲି ");
				kgTxt1 = this.add.text(831,307, " ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		     }
		   
		}
		else
		{

		  if(window.languageSelected=="English"){
            kgTxt0 = this.add.text(620,304, _this.firstValue+" ml x "+_this.secondValue+" = ");
            kgTxt = this.add.text(575,300);
            kgTxt1 = this.add.text(820,304, " ml");
			kgTxt0.fontWeight = 'normal';
			kgTxt0.font = 'myfont';
			//kgTxt.font = 'myfont';
			kgTxt1.font = 'myfont';
			
			//kgTxt.fontWeight = 'normal'
			kgTxt1.fontWeight = 'normal';
			kgTxt0.fontSize = 40;
			//kgTxt.fontSize = 25;
			kgTxt1.fontSize = 40;
		 }
         else if(window.languageSelected=="Hindi"){
			 
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(598,307, "मि.ली ");
				kgTxt1 = this.add.text(831,307, " मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
			}
          else if(window.languageSelected=="Kannada"){
			  kgTxt0 = this.add.text(615,304, _this.firstValue+"  "+"     x "+_this.secondValue+" = ");
				kgTxt = this.add.text(597,305, "ಮಿ.ಲೀ");
				kgTxt1 = this.add.text(837,305, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 16;
				kgTxt1.fontSize = 16;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Gujarati"){
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(598,307, "એમ ");
				kgTxt1 = this.add.text(831,307, " એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Marathi"){
			 kgTxt0 = this.add.text(597,304, _this.firstValue+"  "+"        x "+_this.secondValue+" = ");
				kgTxt = this.add.text(580,307, "मिलीलिटर");
				kgTxt1 = this.add.text(839,307, " मिलीलिटर ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Tamil"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "மி.லி");
				kgTxt1 = this.add.text(830,305, "மி.லி");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Telugu"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "మిల్లీ,");
				kgTxt1 = this.add.text(830,305, "మిల్లీ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else if(window.languageSelected=="Urdu"){
			  kgTxt0 = this.add.text(565,300, _this.firstValue+"  "+"       x "+_this.secondValue+" = ");
				kgTxt = this.add.text(545,305, "ملی لیٹر");
				kgTxt1 = this.add.text(830,305, "ملی لیٹر");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else{
				kgTxt0 = this.add.text(610,304, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(598,307, "ମି.ଲି ");
				kgTxt1 = this.add.text(831,307, " ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt0.font = 'myfont';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		}
		kgTxt0.anchor.setTo(0.5);
		
		kgTxt1.anchor.setTo(0.5);
        kgTxt0.align = 'center';
       
        kgTxt1.align = 'center';
		
		 kgTxt0.fill = '#ffffff';
		 kgTxt0.fontWeight = 'normal'
        kgTxt1.fill = '#ffffff';

       // kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
        kgTxt1.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
		shakeObjectGroup.add(kgTxt0);
		shakeObjectGroup.add(kgTxt1);
		shakeObjectGroup.add(kgTxt);
        /*if(window.languageSelected == "English"){
		equation.frame = eqnum;
	   }
	   else if(window.languageSelected == "Hindi")
	   {
		   equation.frame = eqnum+1;
	   }else{
		  equation.frame = eqnum+2;
	   }*/
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 80;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;
            
            // var numTxt = this.add.text(-2,1, i);
            // //titletext.scale.setTo(1.5);
            // numTxt.anchor.setTo(0.5);
            // numTxt.align = 'center';

            // numTxt.font = 'Alte Haas Grotesk';
            // numTxt.fontSize = 24;
            // //text.fontWeight = 'bold';
            // numTxt.fill = '#FFFFFF';

            // numTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
            
            // numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=70;
        }
        var txtbox = this.add.sprite(760,304,'Level43A_AnswerBox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "AnswerBox";
        objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+10,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+75,505,'tick');
        rightbtn.anchor.setTo(0.5);
        //rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.scale.setTo(1.1,1.1);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox.name = "txtbox";
        //numGroup.add(txtbox);
        
        numGroup.y = 50;
		var tween = this.add.tween(numGroup);
		tween.to({ y: 0 }, 0, 'Linear', true, 0);
		
        wrongbtn.events.onInputDown.add(function(target){
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
		
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
			wrongbtn.frame = 1;enterTxt.setText("");selectedAns="";
                                                   this.time.events.add(1000, function(){wrongbtn.frame = 0},this);
                                                  },this);
        
        rightbtn.events.onInputDown.add(function(target){
            noofAttempts++;
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            rightbtn.frame = 1;
             this.time.events.add(1000, function(){rightbtn.frame = 0},this);
            //console.log(selectedAns);
            //console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
					//timer.stop();
					//timer = null;
					target.events.onInputDown.removeAll();
                    _this.speakerbtn.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    /*objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;*/
                    //mainSprite.frame = 1;
                     if(_this.timer1)
            {
            _this.timer1.stop();
            }
						
				    if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

                     var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
								
                    
                    //var anim = equation.animations.add('equation');
                    //anim.play(1);
                    _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                    var starAnim = starsGroup.getChildAt(count1);
                   // //console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    //anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                    //equation.frame = eqnum+1;
                    txtbox.frame = 1;
                  /*  var tween = this.add.tween(equation.scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);*/
                    var tween1 = this.add.tween(txtbox.scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        //txtbox.frame = 0;
                        
                        /*var tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);*/
                        var tween2 = this.add.tween(txtbox.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                      
                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(txtbox.scale);
                            tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                        
                       tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(txtbox.scale);
                            tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    },this);
                    },this);
                    },this);
					var tween1 = this.add.tween(numGroup);
                    tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                    this.time.events.add(2000, function(){this.removeEverthing();},this);
                }
            else
                {
					noofAttempts++;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, txtbox);
                     _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play(); 
                    //aiyoh.play(); 
                   // this.time.events.add(2000, function(){this.backToOriginalPosition();},this);
  
                }
        },this);
    },
    
     numClicked:function(target){
		 
		/* var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
			
        //console.log(target.name);
       // target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(selectedAns.length<4)
        {
            selectedAns += target.frame;
            objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // //console.log(selectedAns);
        
    },
    
    removeEverthing:function() 
    {
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        no1++;
        //console.log("--------------------------"+no1);
        if(no1<6)
        {
            //no1++;
             wrong = true;
           var MaintweenDestroy = this.add.tween(shakeObjectGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            
            var MaintweenDestroy1 = this.add.tween(b3);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
            
//            var MaintweenDestroy2 = this.add.tween(equation);
//            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0); 
            
            var MaintweenDestroy2 = this.add.tween(numGroup);
            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0);
            
			var MaintweenDestroy3 = this.add.tween(objGroup);
            MaintweenDestroy3.to({ x: -1000}, 0,'Linear', true, 0);
			
            MaintweenDestroy.onComplete.add(function(){
                 b3.destroy();
                //equation.destroy();
               objGroup.destroy();
               numGroup.destroy();
                count =0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                selectedAns = '';
                countIncrement = 0;
                this.getQuestion();
            },this);
            
               
            tweenCount=0;
           // this.getQuestion(); 
 
               
        }
        else
        {
           // //console.log("gameover");
            selectedAns = '';
            countIncrement = 0;
           // this.stopVoice();
            this.state.start('grade4_3BScore');
        }
    },
    backToOriginalPosition:function(){
       
//        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0,'Linear', true, 0);
//        
//        var MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0,'Linear', true, 0);
        selectedAns = 0;
        countIncrement = 0;
       /*shakeObjectGroup.destroy();
       b3.destroy();
       equation.destroy();
       objGroup.destroy();*/
       // numGroup.destroy();
       // wrong = false;
       // this.addNumberPad();
        //this.getQuestion();
        
    },
    
    
    checkAns:function(target){
       // //console.log("here");
        objGroup.destroy();
       // target.events.onInputDown.removeAll();
        
        var tween = this.add.tween(gameBoxGroup);
    	tween.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){

        }, this);
       
        var tween1 = this.add.tween(crocsGroup);
    	tween1.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween1.onComplete.add(function(){
             //this.checkFortheRightOrder();
            _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
             var starAnim = starsGroup.getChildAt(count1);
               // //console.log(starAnim);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
                anim4.onComplete.add(function(){this.addGlowtoTheSprite();},this);
            count1++;
            
        }, this);
        

        
    },
    
     
    checkFortheRightOrder:function(target){
        target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        target.events.onInputDown.removeAll();
        var wrongBox = this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        var selectedFrameArray = [];
        var objTovisible = [];
        var wrongXpos = [];
        var wrongYpos = [];
        wrongBox.x = gameBoxGroup.x;
        wrongBox.y = gameBoxGroup.y;
       // //console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
           // //console.log("for");
           // //console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
              // //console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // //console.log(gameBoxGroup.getChildAt(i).frameName);
                count--;
                gameBoxGroup.getChildAt(i).visible = false;
                selectedFrameArray.push("blank");
                objTovisible.push(gameBoxGroup.getChildAt(i).frameName);
                wrongBoxArray.push(gameBoxGroup.getChildAt(i).frameName);
                indexArray.push(i);
                wrongXpos.push(gameBoxGroup.getChildAt(i).x);
                wrongYpos.push(gameBoxGroup.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            var wBox = wrongBox.create(0,0,'Level43A_gameBox');
            wBox.anchor.setTo(0.435,0.42);
            wBox.x = wrongXpos[j];
            wBox.y = wrongYpos[j];
            wBox.frameName = wrongBoxArray[j];
        }
        shake.shake(10,wrongBox);
       
         this.time.events.add(1000, function(){


            wrongBox.destroy();
             
            for(var j=0;j<gameBoxGroup.children.length;j++)
            {
                gameBoxGroup.getChildAt(j).visible = true;
                gameBoxGroup.getChildAt(j).frameName = selectedFrameArray[j];
            }
            for(var k=0;k<objTovisible.length;k++)
            {
                 objGroup.getByName(objTovisible[k]).visible = true;  
            }
            
            //this.addGlowtoTheSprite();
             if(rightCount>=4)
                 {
                     
                 }
             else
                 {
                     target.frame = 0;
                 }
            
         }, this);
        if(rightCount>=4)
        {
            for(var k=0;k<gameBoxGroup.children.length;k++)
            {
                gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
            
            this.checkAns();
        }
        else
        {
              _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();  
            
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      //  //console.log("Glow");
        gameBoxGroup.getChildAt(glowOrderArray[0]).removeChildren();
        var glow = this.add.sprite(0,0,'Level43A_glow');
        glow.anchor.setTo(0.495);

        gameBoxGroup.getChildAt(glowOrderArray[0]).addChild(glow);  
        var anim = glow.animations.add('glow');
        anim.play(100,1);
        this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[1]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[1]).addChild(glow);
            
            anim.play(100,1);
            
            this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[2]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[2]).addChild(glow);
            
            anim.play();
            
            
            this.time.events.add(1000, function(){
            
                    anim.stop();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).removeChildren();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).addChild(glow);

                    anim.play();

                this.time.events.add(1000, function(){this.removeEverthing();},this);
                


                },this);
            
            
            },this);
            
            
            
        },this);
        
    },
    
  
   
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX-15, 10,'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
		////console.log("correct");

        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	_this.cmusic = this.add.audio('celebr');
		_this.cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		 _this.wmusic = this.add.audio('waudio');
		 _this.wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
          //  //console.log("vamitha");
            
			if(no1<1)
			{
            //    //console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
			//	//console.log("gameEnd");
                this.state.start('score');
				//this.state.start('level2');
			}

	},
    
    
	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(no1<20)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level43A_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0.5)', 0);
            

    
       
               this.state.start('level2');
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


    

    
    update:function(){

    },
    
    /*getVoice:function(){
        this.stopVoice();
        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_43B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43B1.play();
                    else
                        Kan_43B1.play();
                    break;
        }
    },
    
    
    stopVoice:function(){
        Eng_43B1.stop();
        Hin_43B1.stop();
        Kan_43B1.stop();
    }*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');


       if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/English/4.3B1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3B1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3B1.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3A/4.3B1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.3B1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.3B1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.3B1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.3B1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3B1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                 console.log("stop"); 
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
        _this.stopVoice();
        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,_this.questionid;*/
    }

    
};