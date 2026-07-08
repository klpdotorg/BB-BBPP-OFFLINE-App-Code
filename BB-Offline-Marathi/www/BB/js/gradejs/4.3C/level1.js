Game.grade4_3Clevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
var crocsGroup;
var tickMark;
var crossMark;
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
var counterText2;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var  equation;
var eqnum;
var wrong;
var count3 =0;
var count2 =0;


var noofAttempts;
var timer;
var AnsTimerCount;

var gameid;

Game.grade4_3Clevel1.prototype={
    init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.3C";
        
     /*  // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       telInitializer.gameIdInit("volume4_3C",gradeSelected);
        
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
        
        this.load.image('Level42C_redmark',window.baseUrl+'assets/gradeAssets/4.2C/redmark.png');
        
        _this.load.atlas('Level43A_equationB',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equationB.png' ,window.baseUrl+'json/gradeJson/4.3A/equationB.json');
        
        
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

        countIncrement = 0;
        smallJar = 0;
        timeforlng=0;
        selectedAns = "";
        rightAns = "";
		 _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        wrong = true;
        no1=0;
       // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,3,4,5,6,7,8,9];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
        tweenCount = 0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        _this.playOnce = true;
		_this.playTwise = true;

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
       
		/*var backbtn = this.add.button(5,1,'Level43A_CommonBackBtn',function(){
		this.stopVoice();
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       _this.speakerbtn = this.add.button(908,1,'Level43A_CommonSpeakerBtn',function(){
			this.getVoice(qArrays[no1]);
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

		if(_this.playOnce == true && qArrays[no1]<=4)
		{
			_this.playOnce = false;
			_this.getVoice();
		}
		if(_this.playTwise == true && qArrays[no1]>4)
		{
			_this.playTwise = false;
			_this.getVoice();
		}
		

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
         //no1 = 0;
        console.log(qArrays[no1]);
       
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
		
		_this.questionid = 1;
       
        questionNo = 1; 
       // this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,460,'Level43A_50QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "50QC";
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(370,460,'Level43A_100QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "100QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(691,403,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.name = "arrowC";
		 
		 if(window.languageSelected=="English"){
            kgTxt = this.add.text(736,388, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
             
            mlTxt = this.add.text(167,420, "ml");
			mlTxt.font = 'myfont';
			mlTxt.fontWeight = 'normal'
			mlTxt.fontSize = 19; 
            
            mlTxt1 = this.add.text(360,410, "ml");
			mlTxt1.font = 'myfont';
			mlTxt1.fontWeight = 'normal'
			mlTxt1.fontSize = 19;
             
            mlTxt2 = this.add.text(564,450, "50"+"ml");
			mlTxt2.font = 'myfont';
			mlTxt2.fontWeight = 'normal'
			mlTxt2.fontSize = 19;
             
            mlTxt3 = this.add.text(560,402, "250"+"ml");
			mlTxt3.font = 'myfont';
			mlTxt3.fontWeight = 'normal'
			mlTxt3.fontSize = 19;
            mlTxt3.fill = '#373535';
             
            mlTxt4 = this.add.text(559,350, "500"+"ml");
			mlTxt4.font = 'myfont';
			mlTxt4.fontWeight = 'normal'
			mlTxt4.fontSize = 19;
            mlTxt4.fill = '#373535';
             
            mlTxt5 = this.add.text(558,295, "750"+"ml");
			mlTxt5.font = 'myfont';
			mlTxt5.fontWeight = 'normal'
			mlTxt5.fontSize = 19;
            mlTxt5.fill = '#373535';
            
            mlTxt6 = this.add.text(551,245, "1000"+"ml");
			mlTxt6.font = 'myfont';
			mlTxt6.fontWeight = 'normal';
			mlTxt6.fontSize = 19;
            mlTxt6.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(747,392, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "मि.ली");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(746,392, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(161,425, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 9; 
              
                mlTxt1 = this.add.text(355,415, "ಮಿ.ಲೀ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 9;
              
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(580,458, "ಮಿ.ಲೀ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 9;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(560,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(582,413, "ಮಿ.ಲೀ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 9;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(559,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535';
              
                mlTxt7 = this.add.text(581,360, "ಮಿ.ಲೀ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 9;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(558,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(580,300, "ಮಿ.ಲೀ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 9;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(548,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(580,250, "ಮಿ.ಲೀ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 9;
                mlTxt11.fill = '#373535';
		   } 
		   else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(747,392, "એમ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "એમ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "એમ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(747,392, "மி.லி");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "மி.லி");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "மி.லி");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "மி.லி");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "மி.லி");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "மி.லி");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "மி.லி");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(747,392, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "మిల్లీ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "మిల్లీ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "మిల్లీ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "మిల్లీ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "మిల్లీ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "మిల్లీ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(747,392, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "ملی لیٹر");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "ملی لیٹر");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "ملی لیٹر");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "ملی لیٹر");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "ملی لیٹر");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "ملی لیٹر");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		    else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(747,392, "मि.ली");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "मि.ली");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
		   else{
				kgTxt = this.add.text(747,392, "ମି.ଲି");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "ମି.ଲି");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "ମି.ଲି");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "ମି.ଲି");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "ମି.ଲି");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "ମି.ଲି");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "ମି.ଲି");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "ମି.ଲି");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';
     

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';
        mlTxt.fill = '#373535';
        mlTxt1.fill = '#373535';
        mlTxt2.fill = '#373535';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
          crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'myfont';
        counterText2.fontSize = 30;
        counterText2.fontWeight = 'normal';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
        
        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);
        objGroup.add(mlTxt5);
        objGroup.add(mlTxt6);
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"||window.languageSelected=="Odiya"||window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
        objGroup.add(mlTxt7);
        objGroup.add(mlTxt8);
        objGroup.add(mlTxt9);
        objGroup.add(mlTxt10);
        objGroup.add(mlTxt11);
     }

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
           
        
     },
    
    gotoSecondQuestion:function(){
		
		_this.questionid = 1;
       
         questionNo = 2;
      //  this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,470,'Level43A_100QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "100QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(390,470,'Level43A_250QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "250QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(690,370,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 1;
         b6.name = "arrowC";
          if(window.languageSelected=="English"){
            kgTxt = this.add.text(734,354, "ml");
			kgTxt.font = 'Comic Sans MS';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
              
            mlTxt = this.add.text(167,420, "ml");
			mlTxt.font = 'myfont';
			mlTxt.fontWeight = 'normal'
			mlTxt.fontSize = 20; 
            
            mlTxt1 = this.add.text(385,360, "ml");
			mlTxt1.font = 'myfont';
			mlTxt1.fontWeight = 'normal'
			mlTxt1.fontSize = 20;
            mlTxt2 = this.add.text(564,450, "50"+"ml");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 19;

            mlTxt3 = this.add.text(560,402, "250"+"ml");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 19;
            mlTxt3.fill = '#373535';

            mlTxt4 = this.add.text(559,350, "500"+"ml");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 19;
            mlTxt4.fill = '#373535';

            mlTxt5 = this.add.text(558,295, "750"+"ml");
            mlTxt5.font = 'myfont';
            mlTxt5.fontWeight = 'normal'
            mlTxt5.fontSize = 19;
            mlTxt5.fill = '#373535';

            mlTxt6 = this.add.text(551,245, "1000"+"ml");
            mlTxt6.font = 'myfont';
            mlTxt6.fontWeight = 'normal'
            mlTxt6.fontSize = 19;
            mlTxt6.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(743,358, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "मि.ली ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
             
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(742,358, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(162,425, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "ಮಿ.ಲೀ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(580,458, "ಮಿ.ಲೀ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 9;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(560,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(582,413, "ಮಿ.ಲೀ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 9;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(559,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535';
              
                mlTxt7 = this.add.text(581,360, "ಮಿ.ಲೀ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 9;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(558,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(580,300, "ಮಿ.ಲೀ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 9;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(548,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(580,250, "ಮಿ.ಲೀ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 9;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Gujarati"){
			   kgTxt = this.add.text(743,358, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "એમ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   } 
		   else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(743,358, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(747,392, "மி.லி");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "மி.லி");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "மி.லி");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "மி.லி");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "மி.லி");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "மி.லி");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "மி.லி");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(747,392, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "మిల్లీ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "మిల్లీ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "మిల్లీ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "మిల్లీ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "మిల్లీ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "మిల్లీ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(747,392, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "ملی لیٹر");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "ملی لیٹر");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "ملی لیٹر");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "ملی لیٹر");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "ملی لیٹر");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "ملی لیٹر");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else{
			   kgTxt = this.add.text(743,358, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';
         mlTxt.fill = '#373535';
         mlTxt1.fill = '#373535';
        mlTxt2.fill = '#373535';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
          crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
          counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'myfont';
        counterText2.fontSize = 30;
        counterText2.fontWeight = 'normal';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

               objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);
        objGroup.add(mlTxt5);
        objGroup.add(mlTxt6);
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"||window.languageSelected=="Odiya"||window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
        objGroup.add(mlTxt7);
        objGroup.add(mlTxt8);
        objGroup.add(mlTxt9);
        objGroup.add(mlTxt10);
        objGroup.add(mlTxt11);
     }

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");

           
        
     },
    
    gotoThirdQuestion:function(){
		
		_this.questionid = 1;
       
          questionNo = 3;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,470,'Level43A_50QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "50QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(410,475,'Level43A_500QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "500QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(692,313,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 2;
         b6.name = "arrowC";
		 
		  if(window.languageSelected=="English"){
				kgTxt = this.add.text(736,297, "ml");
				kgTxt.font = 'myfont';
				kgTxt.fontWeight = 'normal'
				kgTxt.fontSize = 20;
                
                mlTxt = this.add.text(168,425, "ml");
                mlTxt.font = 'myfont';
                mlTxt.fontWeight = 'normal'
                mlTxt.fontSize = 20; 

                mlTxt1 = this.add.text(395,315, "ml");
                mlTxt1.font = 'myfont';
                mlTxt1.fontWeight = 'normal'
                mlTxt1.fontSize = 20;
                mlTxt2 = this.add.text(564,450, "50"+"ml");
                mlTxt2.font = 'myfont';
                mlTxt2.fontWeight = 'normal'
                mlTxt2.fontSize = 19;

                mlTxt3 = this.add.text(560,402, "250"+"ml");
                mlTxt3.font = 'myfont';
                mlTxt3.fontWeight = 'normal'
                mlTxt3.fontSize = 19;
                mlTxt3.fill = '#373535';

                mlTxt4 = this.add.text(559,350, "500"+"ml");
                mlTxt4.font = 'myfont';
                mlTxt4.fontWeight = 'normal'
                mlTxt4.fontSize = 19;
                mlTxt4.fill = '#373535';

                mlTxt5 = this.add.text(558,295, "750"+"ml");
                mlTxt5.font = 'myfont';
                mlTxt5.fontWeight = 'normal'
                mlTxt5.fontSize = 19;
                mlTxt5.fill = '#373535';

                mlTxt6 = this.add.text(551,245, "1000"+"ml");
                mlTxt6.font = 'myfont';
                mlTxt6.fontWeight = 'normal'
                mlTxt6.fontSize = 19;
                mlTxt6.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(746,302, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(165,430, "मि.ली ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(395,320, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(747,302, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(161,430, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 9;
             
                mlTxt1 = this.add.text(390,320, "ಮಿ.ಲೀ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(580,458, "ಮಿ.ಲೀ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 9;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(560,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(582,413, "ಮಿ.ಲೀ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 9;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(559,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535';
              
                mlTxt7 = this.add.text(581,360, "ಮಿ.ಲೀ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 9;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(558,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(580,300, "ಮಿ.ಲೀ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 9;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(548,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(580,250, "ಮಿ.ಲೀ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 9;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(746,302, "એમ  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(165,430, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(395,320, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(743,358, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(747,392, "மி.லி");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "மி.லி");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "மி.லி");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "மி.லி");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "மி.லி");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "மி.லி");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "மி.லி");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(747,392, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "మిల్లీ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "మిల్లీ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "మిల్లీ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "మిల్లీ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "మిల్లీ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "మిల్లీ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(747,392, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "ملی لیٹر");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "ملی لیٹر");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "ملی لیٹر");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "ملی لیٹر");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "ملی لیٹر");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "ملی لیٹر");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
			else{
				kgTxt = this.add.text(746,302, "એમ  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(165,430, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(395,320, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
		
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';
        mlTxt.fill = '#373535';
         mlTxt1.fill = '#373535';
        mlTxt2.fill = '#373535';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'myfont';
        counterText2.fontSize = 30;
        counterText2.fontWeight = 'normal';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);
        objGroup.add(mlTxt5);
        objGroup.add(mlTxt6);
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya"|| window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
        objGroup.add(mlTxt7);
        objGroup.add(mlTxt8);
        objGroup.add(mlTxt9);
        objGroup.add(mlTxt10);
        objGroup.add(mlTxt11);
     }

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
        
     },
    
    gotoFourthQuestion:function(){
		
		_this.questionid = 1;
       
          questionNo = 4;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(200,470,'Level43A_200QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "200QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(393,475,'Level43A_250QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "250QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(698,270,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 3;
         b6.name = "arrowC";
		 
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(753,254, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
           
            mlTxt = this.add.text(185,388, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20; 

            mlTxt1 = this.add.text(388,365, "ml");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt2 = this.add.text(564,450, "50"+"ml");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 19;

            mlTxt3 = this.add.text(560,402, "250"+"ml");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 19;
            mlTxt3.fill = '#373535';

            mlTxt4 = this.add.text(559,350, "500"+"ml");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 19;
            mlTxt4.fill = '#373535';

            mlTxt5 = this.add.text(558,295, "750"+"ml");
            mlTxt5.font = 'myfont';
            mlTxt5.fontWeight = 'normal'
            mlTxt5.fontSize = 19;
            mlTxt5.fill = '#373535';

            mlTxt6 = this.add.text(551,245, "1000"+"ml");
            mlTxt6.font = 'myfont';
            mlTxt6.fontWeight = 'normal'
            mlTxt6.fontSize = 19;
            mlTxt6.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(760,258, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               mlTxt = this.add.text(185,400, "मि.ली ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(385,373, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(758,258, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               mlTxt = this.add.text(185,395, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 9;
             
                mlTxt1 = this.add.text(385,373, "ಮಿ.ಲೀ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(580,458, "ಮಿ.ಲೀ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 9;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(560,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(582,413, "ಮಿ.ಲೀ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 9;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(559,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535';
              
                mlTxt7 = this.add.text(581,360, "ಮಿ.ಲೀ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 9;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(558,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(580,300, "ಮಿ.ಲೀ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 9;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(548,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(580,250, "ಮಿ.ಲೀ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 9;
                mlTxt11.fill = '#373535';
		   }
			else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(760,258, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               mlTxt = this.add.text(185,400, "એમ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(385,373, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(743,358, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(166,425, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(380,370, "मि.ली ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "मि.ली ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "मि.ली ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "मि.ली ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "मि.ली ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "मि.ली ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(747,392, "மி.லி");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "மி.லி");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "மி.லி");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "மி.லி");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "மி.லி");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "மி.லி");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "மி.லி");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(747,392, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "మిల్లీ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "మిల్లీ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "మిల్లీ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "మిల్లీ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "మిల్లీ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "మిల్లీ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(747,392, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(165,423, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(355,415, "ملی لیٹر");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "ملی لیٹر");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "ملی لیٹر");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "ملی لیٹر");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "ملی لیٹر");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "ملی لیٹر");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
		   }
			else{
				kgTxt = this.add.text(760,258, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               mlTxt = this.add.text(185,400, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
             
                mlTxt1 = this.add.text(385,373, "એમ ");
				mlTxt1.font = 'Comic Sans MS';
				mlTxt1.fontSize = 10;
             
                
                mlTxt2 = this.add.text(564,455, "50");
				mlTxt2.font = 'myfont';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535';
                
                mlTxt3 = this.add.text(582,458, "એમ ");
				mlTxt3.font = 'Comic Sans MS';
				mlTxt3.fontSize = 10;
                mlTxt3.fill = '#373535';
              
                mlTxt4 = this.add.text(562,410, "250");
				mlTxt4.font = 'myfont';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
              
                mlTxt5 = this.add.text(585,413, "એમ ");
				mlTxt5.font = 'Comic Sans MS';
				mlTxt5.fontSize = 10;
                mlTxt5.fill = '#373535';
              
                mlTxt6 = this.add.text(562,358, "500");
				mlTxt6.font = 'myfont';
				mlTxt6.fontSize = 12;
                mlTxt6.fill = '#373535'; 
              
                mlTxt7 = this.add.text(585,360, "એમ ");
				mlTxt7.font = 'Comic Sans MS';
				mlTxt7.fontSize = 10;
                mlTxt7.fill = '#373535';
              
                mlTxt8 = this.add.text(559,298, "750");
				mlTxt8.font = 'myfont';
				mlTxt8.fontSize = 12;
                mlTxt8.fill = '#373535';
              
                mlTxt9 = this.add.text(582,300, "એમ ");
				mlTxt9.font = 'Comic Sans MS';
				mlTxt9.fontSize = 10;
                mlTxt9.fill = '#373535';
              
                mlTxt10 = this.add.text(552,248, "1000");
				mlTxt10.font = 'myfont';
				mlTxt10.fontSize = 12;
                mlTxt10.fill = '#373535';
              
                mlTxt11 = this.add.text(582,250, "એમ ");
				mlTxt11.font = 'Comic Sans MS';
				mlTxt11.fontSize = 10;
                mlTxt11.fill = '#373535';
			}
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
         counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';
        mlTxt.fill = '#373535';
         mlTxt1.fill = '#373535';
        mlTxt2.fill = '#373535';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'myfont';
        counterText2.fontSize = 30;
        counterText2.fontWeight = 'normal';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);
        objGroup.add(mlTxt5);
        objGroup.add(mlTxt6);
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya"|| window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Tamil" || window.languageSelected=="Telugu" || window.languageSelected=="Urdu"){
        objGroup.add(mlTxt7);
        objGroup.add(mlTxt8);
        objGroup.add(mlTxt9);
        objGroup.add(mlTxt10);
        objGroup.add(mlTxt11);
     }

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
        
        
     }, 
  
   gotoFifthQuestion:function(){
	   
		_this.questionid = 2;
                questionNo = 5;
       //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_1000QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "1000QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
    
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(593,358,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 3;
         b6.name = "arrowC";
         
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(648,343, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
              
            mlTxt = this.add.text(245,290, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20;
            mlTxt.fill = '#373535';
              
            mlTxt1 = this.add.text(480,330, "1");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt1.fill = '#373535';
              
            mlTxt2 = this.add.text(485,330,"L");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 20;
            mlTxt2.fill = '#373535';
              
            mlTxt3 = this.add.text(470,195, "2");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 20;
            mlTxt3.fill = '#373535';
              
            mlTxt4 = this.add.text(483,195, "L");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 20;
            mlTxt4.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(653,345, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
             
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(655,345, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(245,295, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535';
              
                mlTxt1 = this.add.text(468,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(475,335, "ಲೀ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 10;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ಲೀ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 10;
                mlTxt4.fill = '#373535';
		   }
		 
			else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(653,345, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "લિટર ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "લિટર ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(653,345, "मि.ली  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली  ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली  ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली  ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(653,345, "மி.லி ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "லி");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "லி");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(653,345, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ల్లీ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ల్లీ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(653,345, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "لیٹر");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "لیٹر");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else {
				kgTxt = this.add.text(653,345, "ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ମି.ଲି ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ଲି ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ଲି ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
             
			}
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
    
    gotoSixthQuestion:function(){
		
		_this.questionid = 2;
        
         questionNo = 6;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_250QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "250QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,390,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 4;
         b6.name = "arrowC";
         
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(642,375, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal';
			kgTxt.fontSize = 20;
            
            mlTxt = this.add.text(248,385, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20;
            mlTxt.fill = '#373535';
              
            mlTxt1 = this.add.text(480,330, "1");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt1.fill = '#373535';
              
            mlTxt2 = this.add.text(485,330,"L");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 20;
            mlTxt2.fill = '#373535';
              
            mlTxt3 = this.add.text(470,195, "2");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 20;
            mlTxt3.fill = '#373535';
              
            mlTxt4 = this.add.text(483,195, "L");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 20;
            mlTxt4.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(646,378, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               
                mlTxt = this.add.text(248,390, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(649,378, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               
                mlTxt = this.add.text(248,390, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535';
              
                mlTxt1 = this.add.text(472,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ಲೀ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 10;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(468,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ಲೀ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 10;
                mlTxt4.fill = '#373535';
		   }
		   else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(646,378, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               
                mlTxt = this.add.text(248,390, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "લિટર");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "લિટર");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(653,345, "मि.ली  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली  ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली  ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली  ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(653,345, "மி.லி ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "லி");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "லி");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(653,345, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ల్లీ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ల్లీ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(653,345, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "لیٹر");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "لیٹر");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else {
				kgTxt = this.add.text(646,378, "ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
               
                mlTxt = this.add.text(248,390, "ମି.ଲି ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ଲି");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ଲି");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
         counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
   
    gotoSeventhQuestion:function(){
		
		_this.questionid = 2;
        
         questionNo = 7;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_500QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "500QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,293,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 5;
         b6.name = "arrowC";
         
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(648,277, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
            mlTxt = this.add.text(248,335, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20;
            mlTxt.fill = '#373535';
              
            mlTxt1 = this.add.text(480,330, "1");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt1.fill = '#373535';
              
            mlTxt2 = this.add.text(485,330,"L");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 20;
            mlTxt2.fill = '#373535';
              
            mlTxt3 = this.add.text(470,195, "2");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 20;
            mlTxt3.fill = '#373535';
              
            mlTxt4 = this.add.text(483,195, "L");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 20;
            mlTxt4.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(654,281, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,340, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(655,281, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
                mlTxt = this.add.text(245,340, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535';
              
                mlTxt1 = this.add.text(473,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ಲೀ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 10;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(468,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ಲೀ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 10;
                mlTxt4.fill = '#373535';
		   }
		   else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(654,281, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,340, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "લિટર");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "લિટર");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(653,345, "मि.ली  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली  ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली  ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली  ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(653,345, "மி.லி ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "லி");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "லி");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(653,345, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ల్లీ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ల్లీ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(653,345, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "لیٹر");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "لیٹر");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else {
				kgTxt = this.add.text(654,281, "ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,340, "ମି.ଲି ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ଲି");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ଲି");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
         counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
        objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
    
    gotoEighthQuestion:function(){
		
		_this.questionid = 2;
       
         questionNo = 8;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,475,'Level43A_250QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "250QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(591,258,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 6;
         b6.name = "arrowC";
         
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(645,243, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
            mlTxt = this.add.text(248,365, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20;
            mlTxt.fill = '#373535';
              
            mlTxt1 = this.add.text(480,330, "1");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt1.fill = '#373535';
              
            mlTxt2 = this.add.text(485,330,"L");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 20;
            mlTxt2.fill = '#373535';
              
            mlTxt3 = this.add.text(470,195, "2");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 20;
            mlTxt3.fill = '#373535';
              
            mlTxt4 = this.add.text(483,195, "L");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 20;
            mlTxt4.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(650,246, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
                mlTxt = this.add.text(248,370, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(652,246, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(248,370, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535';
              
                mlTxt1 = this.add.text(473,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ಲೀ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 10;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(468,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ಲೀ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 10;
                mlTxt4.fill = '#373535';
		   }
		else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(650,246, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
                mlTxt = this.add.text(248,370, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "લિટર");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "લિટર");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(653,345, "मि.ली  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली  ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली  ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली  ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(653,345, "மி.லி ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "லி");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "லி");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(653,345, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ల్లీ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ల్లీ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(653,345, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "لیٹر");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "لیٹر");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else {
				kgTxt = this.add.text(650,246, "ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
                mlTxt = this.add.text(248,370, "ମି.ଲି ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ଲି");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ଲି");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
         counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
         objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     },
    
    gotoNinthQuestion:function(){
		
		_this.questionid = 2;
        
         questionNo = 9;
        //this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_1000QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "1000QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,220,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 7;
         b6.name = "arrowC";
         
		  if(window.languageSelected=="English"){
            kgTxt = this.add.text(647,206, "ml");
			kgTxt.font = 'myfont';
			kgTxt.fontWeight = 'normal'
			kgTxt.fontSize = 20;
              
            mlTxt = this.add.text(248,290, "ml");
            mlTxt.font = 'myfont';
            mlTxt.fontWeight = 'normal'
            mlTxt.fontSize = 20;
            mlTxt.fill = '#373535';
              
            mlTxt1 = this.add.text(480,330, "1");
            mlTxt1.font = 'myfont';
            mlTxt1.fontWeight = 'normal'
            mlTxt1.fontSize = 20;
            mlTxt1.fill = '#373535';
              
            mlTxt2 = this.add.text(485,330,"L");
            mlTxt2.font = 'myfont';
            mlTxt2.fontWeight = 'normal'
            mlTxt2.fontSize = 20;
            mlTxt2.fill = '#373535';
              
            mlTxt3 = this.add.text(470,195, "2");
            mlTxt3.font = 'myfont';
            mlTxt3.fontWeight = 'normal'
            mlTxt3.fontSize = 20;
            mlTxt3.fill = '#373535';
              
            mlTxt4 = this.add.text(483,195, "L");
            mlTxt4.font = 'myfont';
            mlTxt4.fontWeight = 'normal'
            mlTxt4.fontSize = 20;
            mlTxt4.fill = '#373535';
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt = this.add.text(658,210, "मि.ली ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,295, "मि.ली");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
          else if(window.languageSelected=="Kannada"){
				kgTxt = this.add.text(658,209, "ಮಿ.ಲೀ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
              
                mlTxt = this.add.text(240,295, "ಮಿ.ಲೀ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535';
              
                mlTxt1 = this.add.text(473,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ಲೀ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 10;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(468,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ಲೀ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 10;
                mlTxt4.fill = '#373535';
              
		   }
		else if(window.languageSelected=="Gujarati"){
				kgTxt = this.add.text(658,210, "એમ ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,295, "એમ ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "લિટર");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "લિટર");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Marathi"){
				kgTxt = this.add.text(653,345, "मि.ली  ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "मि.ली  ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ली  ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ली  ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Tamil"){
				kgTxt = this.add.text(653,345, "மி.லி ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "மி.லி");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "லி");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "லி");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else if(window.languageSelected=="Telugu"){
				kgTxt = this.add.text(653,345, "మిల్లీ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "మిల్లీ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ల్లీ");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ల్లీ");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		   else if(window.languageSelected=="Urdu"){
				kgTxt = this.add.text(653,345, "ملی لیٹر");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(245,295, "ملی لیٹر");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "لیٹر");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "لیٹر");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
			else{
				kgTxt = this.add.text(658,210, "ମି.ଲି ");
				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 13;
             
                mlTxt = this.add.text(248,295, "ମି.ଲି ");
				mlTxt.font = 'Comic Sans MS';
				mlTxt.fontSize = 10;
                mlTxt.fill = '#373535'; 
             
                mlTxt1 = this.add.text(470,327, +"1");
				mlTxt1.font = 'myfont';
				mlTxt1.fontSize = 20;
                mlTxt1.fill = '#373535';
             
                mlTxt2 = this.add.text(480,335, "ଲି");
				mlTxt2.font = 'Comic Sans MS';
				mlTxt2.fontSize = 12;
                mlTxt2.fill = '#373535'; 
             
                mlTxt3 = this.add.text(465,190, +"2");
				mlTxt3.font = 'myfont';
				mlTxt3.fontSize = 20;
                mlTxt3.fill = '#373535';
             
                mlTxt4 = this.add.text(480,200, "ଲି");
				mlTxt4.font = 'Comic Sans MS';
				mlTxt4.fontSize = 12;
                mlTxt4.fill = '#373535';
			}
		kgTxt.anchor.setTo(0.5);
        kgTxt.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		//kgTxt.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt.fill = '#CC333C';

        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
         tickMark = this.add.sprite(835,280,'Level43A_tickMark');
         crossMark = this.add.sprite(835,350,'Level43A_crossMark');
        
        
     
        counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);
         objGroup.add(kgTxt);
        objGroup.add(mlTxt);
        objGroup.add(mlTxt1);
        objGroup.add(mlTxt2);
        objGroup.add(mlTxt3);
        objGroup.add(mlTxt4);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 

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
			
        //console.log("Im pressed"+target.name);
        
         tickMark.inputEnabled = true; 
         tickMark.input.useHandCursor = true; 
         tickMark.events.onInputDown.add(this.somefunction,this);
         
        crossMark.inputEnabled = true; 
         crossMark.input.useHandCursor = true; 
         crossMark.events.onInputDown.add(function(target){ _this.clickSound = _this.add.audio('ClickSound');
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
			
			b5.frame = 0;crossMark.frame = 1;countIncrement = 0;
                count3 = 0;count2 = 0; counterText.setText("");if(questionNo<5){counterText2.setText("")} b1.inputEnabled = true;
                                                           b2.inputEnabled = true;b1.input.useHandCursor = true;
                b2.input.useHandCursor = true;this.time.events.add(500, function(){crossMark.frame = 0},this);this.time.events.add(500, function(){crossMark.frame = 0},this);},this);
             
        if(countIncrement<20){
         countIncrement++;

          //console.log("countIncrement"+countIncrement);
        if(questionNo == 1)
            {
                _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                
                if(target.name =="50QC"){
                    if(countIncrement<=20){
                     count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                     else{
                        target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=19){
                    count2++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                    }
                     else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
        if(questionNo == 2)
            {
                _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                
                if(target.name =="100QC"){
                     if(countIncrement<=19){
                    count3++;
                    countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                     }
                     else{
                        target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=16){
                        count2++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                        b5.frame=countIncrement; 
                        counterText2.setText(count2);
                    }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }

            }
        if(questionNo == 3)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               if(target.name =="50QC"){
                   if(countIncrement<=20){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                   }
                   else{
                        target.inputEnabled = false;
                   }
                }

                else{
                     if(countIncrement<12){
                   count2++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                    }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
        if(questionNo == 4)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="200QC"){
                    if(countIncrement<=17){
                    count3++;
                     countIncrement++;
                     countIncrement++;
                     countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=16){
                   count2++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                        }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 5)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="1000QC"){
                    if(countIncrement<=5){
                    count3++;
                     countIncrement++;
                     countIncrement++;
                     countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 6)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="250QC"){
                    if(countIncrement<=8){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 7)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="500QC"){
                    if(countIncrement<=8){
                    count3++;
                        countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 8)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="250QC"){
                    if(countIncrement<=8){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 9)
            {
                 _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(target.name =="1000QC"){
                    if(countIncrement<=8){
                    count3++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
        }
        else{
            //b5.frame=countIncrement;
        }
    },
    
    somefunction:function(target)
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
		noofAttempts++;
        b1.inputEnabled = false;
        b2.inputEnabled = false;

        target.events.onInputDown.removeAll();
        
      //console.log("WWWW"+countIncrement); 
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
      target.frame = 1;
        if(questionNo == 1){
            if(countIncrement==8)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 2){
            if(countIncrement==11)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 3){
            if(countIncrement==16)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 4){
            if(countIncrement==20)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 5){
            if(countIncrement==4)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 6){
            if(countIncrement==3)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 7){
            if(countIncrement==6)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 8){
            if(countIncrement==7)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
                if(questionNo == 9){
            if(countIncrement==8 || countIncrement==9)
                {
 
                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        
    },
    
    rightFunction:function(target)
    {
        //console.log("correct11");
		
						
        _this.speakerbtn.inputEnabled=false;
                _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                var starAnim = starsGroup.getChildAt(count1);
                starAnim.smoothed = false;
                count1++;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();

                     if(_this.timer1)
            {
            _this.timer1.stop();
            }
                    
					if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

                    // var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: _this.currentTime, 
                            access_token: window.acctkn 
                        }
                
              //  absdsjsapi.saveAssessment(saveAsment);

              telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
									
                    /*b5.loadTexture('glow', 0, false);
                    b5.anchor.setTo(0.5,0.95);
               
                    if(questionNo ==1){
                        b5.frame = 0;
                    }
                    if(questionNo ==2){
                        b5.frame = 3;
                    }
                    if(questionNo ==3){
                        b5.frame = 6;
                    }
                    if(questionNo ==4){
                        b5.frame = 9;
                    }*/
                  b3.frame =1
                  b4.frame =1
                   var tween1 = this.add.tween(b3.scale);
                    tween1.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                     var tween2 = this.add.tween(b4.scale);
                    tween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
        
        
                    tween2.onComplete.add(function(){
                       // equation.frame = eqnum;
            
                        var tween1 = this.add.tween(b3.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        var tween2 = this.add.tween(b4.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        
                        
                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(b3.scale);
                            tween1.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                             var tween2 = this.add.tween(b4.scale);
                            tween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                            
                            
                            tween2.onComplete.add(function(){
                                var tween1 = this.add.tween(b3.scale);
                                tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                var tween2 = this.add.tween(b4.scale);
                                tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                
                                
                         },this);   
                         },this);
                         },this);
        this.time.events.add(2000, function(){this.removeEverthing();},this);
    },
                                          
wrongFunction:function(){
                         //console.log("wrong");
                    shake.shake(10, shakeObjectGroup);
                    _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play(); 
                    //aiyoh.play(); 
                    this.time.events.add(1000, function(){this.backToOriginalPosition();},this);
                    },
displayEquation:function()
    {
         
        /*counterText = this.add.text(520,300,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 32;
            //text.fontWeight = 'bold';
        counterText.fill = '#FFFFFF';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        counterText.setText(smallJar+" ml x "+countIncrement+" =");
        this.addNumberPad();*/
       
         equation = this.add.sprite(638,335,'Level43A_equation');
         equation.anchor.setTo(0.5,1);
         equation.frame = eqnum;
         equation.name = "equation";
  
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 120;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,500,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.name = i;
            
            var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'myfont';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=50;
        }
        var txtbox = this.add.sprite(730,300,'Level43A_AnswerBox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "AnswerBox";
        objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+80,500,'Level43A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+130,500,'Level43A_rightBtn');
        rightbtn.anchor.setTo(0.5);
        rightbtn.name = "rightbtn";
        rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        var enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'Alte Haas Grotesk';
        enterTxt.fontSize = 24;
            //text.fontWeight = 'bold';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox.name = "txtbox";
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(){console.log("fsdfdfdfdd");_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();enterTxt.setText("");count =0;count2 = 0;count3 = 0;selectedAns="";counterText.setText("");counterText2.setText("");},this);
        
        rightbtn.events.onInputDown.add(function(target){
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            //console.log(selectedAns);
            //console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
                    _this.speakerbtn.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    /*objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;*/
                    //mainSprite.frame = 1;
                 
                    
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
                    var tween1 = this.add.tween(b5.scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
              
                    
                    tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        txtbox.frame = 0;
                  
                        /*var tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);*/
                        var tween2 = this.add.tween(b5.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    
                    },this);
                    //this.time.events.add(3000, function(){this.removeEverthing();},this);
                }
            else
                {
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
        //console.log(target.name);
       // target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(selectedAns.length<4)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
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
            
            var MaintweenDestroy1 = this.add.tween(objGroup);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
            

            
            MaintweenDestroy.onComplete.add(function(){
             
               
                count =0;
                count2 = 0;
                count3 = 0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                if(questionNo<5){
                counterText2.setText("");
                }
                countIncrement = 0;
                this.getQuestion();
            },this);
            
               
            tweenCount=0;
           // this.getQuestion(); 
 
               
        }
        else
        {
           // ////console.log("gameover");
            countIncrement = 0;
            count2 = 0;
            count3 = 0;
           // this.stopVoice();
            this.state.start('grade4_3CScore');
        }
    },
    backToOriginalPosition:function(){
       
//        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0,'Linear', true, 0);
//        
//        var MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0,'Linear', true, 0);
             b5.frame=0;
                    counterText.setText("0");
                    if(questionNo<5){
                        counterText2.setText("0");
                        }
                    count2 = 0;
                    count3 = 0;
                    countIncrement = 0;
         tickMark.frame = 0;
         b1.inputEnabled = true;
         b2.inputEnabled = true;
        b1.input.useHandCursor = true;
        b2.input.useHandCursor = true;
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
       // ////console.log("here");
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
               // ////console.log(starAnim);
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
       // ////console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
           // ////console.log("for");
           // ////console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
              // ////console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // ////console.log(gameBoxGroup.getChildAt(i).frameName);
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
      //  ////console.log("Glow");
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
		//////console.log("correct");

        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	_this.cmusic = this.add.audio('celebr');
		_this.cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		//////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		//////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // ////console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // ////console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		_this.wmusic = this.add.audio('waudio');
		_this.wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		//////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		//////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
          //  ////console.log("vamitha");
            
			if(no1<1)
			{
            //    ////console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
			//	////console.log("gameEnd");
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
			//////console.log("gameEnd");
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
    
   /* getVoice:function(){
        this.stopVoice();
        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:if(window.languageSelected=="English")
                        Eng_43C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43C1.play();
                    else
                        Kan_43C1.play();
                    break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(window.languageSelected=="English")
                        Eng_43C11.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43C11.play();
                    else
                        Kan_43C11.play();
                    break;
        }
    },
    
    stopVoice:function(){
        //console.log("stopvoice");
        Eng_43C1.stop();
        Hin_43C1.stop();
        Kan_43C1.stop();
        Eng_43A1.stop();
        Hin_43B1.stop();
        Kan_43A1.stop();
        Eng_43C11.stop();
        Hin_43C11.stop();
        Kan_43C11.stop();
    }*/

 
    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/English/4.3C1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.3C1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/English/4.3C1.1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.1.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1_1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1_1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.3C1_1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1_1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1_1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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