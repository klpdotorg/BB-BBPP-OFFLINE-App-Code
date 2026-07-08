Game.volume_MVG_3_4level3=function(){};
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

Game.volume_MVG_3_4level3.prototype={
    init:function(param,score,timerStopVar)
    {
        _this = this;

        //        _this.gameid = "4.3C";

        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

    },

    create:function(game){

        _this.amplify = null;
        noofAttempts=0;
        AnsTimerCount=0;

        this.playedwithHint = false;
        this.completelyplayed = false;

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
//        qArrays = [1,2,3,4,5,6,7,8,9];
        qArrays = [1,2,3,4];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=6;
        tweenCount = 0;

        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        _this.playOnce = true;
        _this.playTwise = true;

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        commonNavBar.addNavBar(game,_this.soundurl,"measurement4");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MVG2.4','level3',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

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

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {
            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if( _this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
            if(this.Stararr[i])
            {  
                _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
            }
        }
        _this.starsGroup.getChildAt(6).frame = 2;	               
    },

    getQuestion:function(target)
    {
        noofAttempts = 0;
        AnsTimerCount=0;
        _this.sceneCount++;

        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
            //            _this.updateTimer();
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
//        if(_this.playTwise == true && qArrays[no1]>4)
//        {
//            _this.playTwise = false;
//            _this.getVoice();
//        }

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

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    addQuestion:function(no2)
    {
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
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"||window.languageSelected=="Odiya"||window.languageSelected=="Gujarati"){
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
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"||window.languageSelected=="Odiya"||window.languageSelected=="Gujarati"){
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
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya"|| window.languageSelected=="Gujarati"){
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
     if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya"|| window.languageSelected=="Gujarati"){
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
  
//    gotoFifthQuestion:function(){
//
//        _this.questionid = 2;
//        questionNo = 5;
//
//        eqnum = 0;
//        objGroup = this.add.group();
//        fillingJarGroup = this.add.group();
//        shakeObjectGroup = this.add.group();
//        b1 = this.add.sprite(260,495,'Level43A_1000QC');
//        b1.anchor.setTo(0.5,1);
//        b1.frame = 1;
//        b1.name = "1000QC";
//        b1.inputEnabled = true;
//        b1.input.useHandCursor = true;
//        b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//
//        b2 = b1; 
//
//        b3 = this.add.sprite(120,470,'Level43A_incBox');
//        b3.anchor.setTo(0.5,1);
//        b3.name = "incBox";
//        b4 = b3; 
//
//        b5 = this.add.sprite(600,490,'Level43A_jugC');
//        b5.anchor.setTo(0.5,1);
//        b5.name = "jugC";
//
//        b6 = this.add.sprite(593,358,'Level43A_arrowC');
//        b6.anchor.setTo(0.5,1);
//        b6.frame = 3;
//        b6.name = "arrowC";
//
//        if(window.languageSelected=="English"){
//            kgTxt = this.add.text(648,343, "ml");
//            kgTxt.font = 'myfont';
//            kgTxt.fontWeight = 'normal'
//            kgTxt.fontSize = 20;
//
//            mlTxt = this.add.text(245,290, "ml");
//            mlTxt.font = 'myfont';
//            mlTxt.fontWeight = 'normal'
//            mlTxt.fontSize = 20;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(480,330, "1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontWeight = 'normal'
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(485,330,"L");
//            mlTxt2.font = 'myfont';
//            mlTxt2.fontWeight = 'normal'
//            mlTxt2.fontSize = 20;
//            mlTxt2.fill = '#373535';
//
//            mlTxt3 = this.add.text(470,195, "2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontWeight = 'normal'
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(483,195, "L");
//            mlTxt4.font = 'myfont';
//            mlTxt4.fontWeight = 'normal'
//            mlTxt4.fontSize = 20;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Hindi"){
//            kgTxt = this.add.text(653,345, "मि.ली ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(245,295, "मि.ली");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ली");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ली");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//
//        }
//        else if(window.languageSelected=="Kannada"){
//            kgTxt = this.add.text(655,345, "ಮಿ.ಲೀ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(245,295, "ಮಿ.ಲೀ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(468,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(475,335, "ಲೀ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 10;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ಲೀ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 10;
//            mlTxt4.fill = '#373535';
//        }
//        else {
//            kgTxt = this.add.text(653,345, "ମି.ଲି ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(245,295, "ମି.ଲି ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ଲି ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ଲି ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//
//        }
//        kgTxt.anchor.setTo(0.5);
//        kgTxt.align = 'center';
//
//        kgTxt.fill = '#CC333C';
//
//        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
//
//        tickMark = this.add.sprite(835,280,'Level43A_tickMark');
//        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
//
//        counterText = this.add.text(-1.5,-50,'Level43A_');
//        //titletext.scale.setTo(1.5);
//        counterText.anchor.setTo(0.5);
//        counterText.align = 'center';
//
//        counterText.font = 'myfont';
//        counterText.fontSize = 30;
//        counterText.fontWeight = 'normal';
//        counterText.fill = '#65B4C3';
//
//        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
//        b3.addChild(counterText);
//
//        shakeObjectGroup.add(b3);
//
//        objGroup.add(b1);
//        objGroup.add(b5);
//        objGroup.add(b6);
//        objGroup.add(tickMark);
//        objGroup.add(crossMark);
//        objGroup.add(kgTxt);
//        objGroup.add(mlTxt);
//        objGroup.add(mlTxt1);
//        objGroup.add(mlTxt2);
//        objGroup.add(mlTxt3);
//        objGroup.add(mlTxt4);
//
//        shakeObjectGroup.x = 1000;
//        objGroup.x = 1000;
//        var Maintween = this.add.tween(shakeObjectGroup);
//        Maintween.to({ x: 0}, 0,'Linear', true, 0);
//        var Maintween1 = this.add.tween(objGroup);
//        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
//
//        counterText.setText("0");
//
//    }, 
//
//    gotoSixthQuestion:function(){
//
//        _this.questionid = 2;
//
//        questionNo = 6;
//
//        eqnum = 0;
//        objGroup = this.add.group();
//        fillingJarGroup = this.add.group();
//        shakeObjectGroup = this.add.group();
//        b1 = this.add.sprite(260,495,'Level43A_250QC');
//        b1.anchor.setTo(0.5,1);
//        b1.frame = 1;
//        b1.name = "250QC";
//        b1.inputEnabled = true;
//        b1.input.useHandCursor = true;
//        b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//
//        b2 = b1; 
//        b3 = this.add.sprite(120,470,'Level43A_incBox');
//        b3.anchor.setTo(0.5,1);
//        b3.name = "incBox";
//        b4 = b3; 
//
//        b5 = this.add.sprite(600,490,'Level43A_jugC');
//        b5.anchor.setTo(0.5,1);
//        b5.name = "jugC";
//
//        b6 = this.add.sprite(595,390,'Level43A_arrowC');
//        b6.anchor.setTo(0.5,1);
//        b6.frame = 4;
//        b6.name = "arrowC";
//
//        if(window.languageSelected=="English"){
//            kgTxt = this.add.text(642,375, "ml");
//            kgTxt.font = 'myfont';
//            kgTxt.fontWeight = 'normal';
//            kgTxt.fontSize = 20;
//
//            mlTxt = this.add.text(248,385, "ml");
//            mlTxt.font = 'myfont';
//            mlTxt.fontWeight = 'normal'
//            mlTxt.fontSize = 20;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(480,330, "1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontWeight = 'normal'
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(485,330,"L");
//            mlTxt2.font = 'myfont';
//            mlTxt2.fontWeight = 'normal'
//            mlTxt2.fontSize = 20;
//            mlTxt2.fill = '#373535';
//
//            mlTxt3 = this.add.text(470,195, "2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontWeight = 'normal'
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(483,195, "L");
//            mlTxt4.font = 'myfont';
//            mlTxt4.fontWeight = 'normal'
//            mlTxt4.fontSize = 20;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Hindi"){
//            kgTxt = this.add.text(646,378, "मि.ली ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,390, "मि.ली");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ली");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ली");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Kannada"){
//            kgTxt = this.add.text(649,378, "ಮಿ.ಲೀ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,390, "ಮಿ.ಲೀ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(472,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ಲೀ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 10;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(468,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ಲೀ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 10;
//            mlTxt4.fill = '#373535';
//        }
//        else {
//            kgTxt = this.add.text(646,378, "ମି.ଲି ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,390, "ମି.ଲି ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ଲି");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ଲି");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//
//        kgTxt.anchor.setTo(0.5);
//        kgTxt.align = 'center';
//
//        kgTxt.fill = '#CC333C';
//
//        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
//
//        tickMark = this.add.sprite(835,280,'Level43A_tickMark');
//        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
//
//        counterText = this.add.text(-1.5,-50,'Level43A_');
//        //titletext.scale.setTo(1.5);
//        counterText.anchor.setTo(0.5);
//        counterText.align = 'center';
//
//        counterText.font = 'myfont';
//        counterText.fontSize = 30;
//        counterText.fontWeight = 'normal';
//        counterText.fill = '#65B4C3';
//
//        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
//        b3.addChild(counterText);
//
//        shakeObjectGroup.add(b3);
//
//        objGroup.add(b1);
//        objGroup.add(b5);
//        objGroup.add(b6);
//        objGroup.add(tickMark);
//        objGroup.add(crossMark);
//        objGroup.add(kgTxt);
//        objGroup.add(mlTxt);
//        objGroup.add(mlTxt1);
//        objGroup.add(mlTxt2);
//        objGroup.add(mlTxt3);
//        objGroup.add(mlTxt4);
//
//        shakeObjectGroup.x = 1000;
//        objGroup.x = 1000;
//        var Maintween = this.add.tween(shakeObjectGroup);
//        Maintween.to({ x: 0}, 0,'Linear', true, 0);
//        var Maintween1 = this.add.tween(objGroup);
//        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
//
//        counterText.setText("0");
//
//    }, 
//
//    gotoSeventhQuestion:function(){
//
//        _this.questionid = 2;
//
//        questionNo = 7;
//
//        eqnum = 0;
//        objGroup = this.add.group();
//        fillingJarGroup = this.add.group();
//        shakeObjectGroup = this.add.group();
//        b1 = this.add.sprite(260,495,'Level43A_500QC');
//        b1.anchor.setTo(0.5,1);
//        b1.frame = 1;
//        b1.name = "500QC";
//        b1.inputEnabled = true;
//        b1.input.useHandCursor = true;
//        b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//
//        b2 = b1; 
//        b3 = this.add.sprite(120,470,'Level43A_incBox');
//        b3.anchor.setTo(0.5,1);
//        b3.name = "incBox";
//        b4 = b3; 
//
//        b5 = this.add.sprite(600,490,'Level43A_jugC');
//        b5.anchor.setTo(0.5,1);
//        b5.name = "jugC";
//
//        b6 = this.add.sprite(595,293,'Level43A_arrowC');
//        b6.anchor.setTo(0.5,1);
//        b6.frame = 5;
//        b6.name = "arrowC";
//
//        if(window.languageSelected=="English"){
//            kgTxt = this.add.text(648,277, "ml");
//            kgTxt.font = 'myfont';
//            kgTxt.fontWeight = 'normal'
//            kgTxt.fontSize = 20;
//            mlTxt = this.add.text(248,335, "ml");
//            mlTxt.font = 'myfont';
//            mlTxt.fontWeight = 'normal'
//            mlTxt.fontSize = 20;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(480,330, "1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontWeight = 'normal'
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(485,330,"L");
//            mlTxt2.font = 'myfont';
//            mlTxt2.fontWeight = 'normal'
//            mlTxt2.fontSize = 20;
//            mlTxt2.fill = '#373535';
//
//            mlTxt3 = this.add.text(470,195, "2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontWeight = 'normal'
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(483,195, "L");
//            mlTxt4.font = 'myfont';
//            mlTxt4.fontWeight = 'normal'
//            mlTxt4.fontSize = 20;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Hindi"){
//            kgTxt = this.add.text(654,281, "मि.ली ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,340, "मि.ली");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ली");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ली");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Kannada"){
//            kgTxt = this.add.text(655,281, "ಮಿ.ಲೀ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//            mlTxt = this.add.text(245,340, "ಮಿ.ಲೀ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(473,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ಲೀ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 10;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(468,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ಲೀ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 10;
//            mlTxt4.fill = '#373535';
//        }
//        else {
//            kgTxt = this.add.text(654,281, "ମି.ଲି ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,340, "ମି.ଲି ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ଲି");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ଲି");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//
//        kgTxt.anchor.setTo(0.5);
//        kgTxt.align = 'center';
//
//        kgTxt.fill = '#CC333C';
//
//        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
//
//        tickMark = this.add.sprite(835,280,'Level43A_tickMark');
//        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
//
//        counterText = this.add.text(-1.5,-50,'Level43A_');
//        //titletext.scale.setTo(1.5);
//        counterText.anchor.setTo(0.5);
//        counterText.align = 'center';
//
//        counterText.font = 'myfont';
//        counterText.fontSize = 30;
//        counterText.fontWeight = 'normal';
//        counterText.fill = '#65B4C3';
//
//        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
//        b3.addChild(counterText);
//
//        shakeObjectGroup.add(b3);
//
//        objGroup.add(b1);
//        objGroup.add(b5);
//        objGroup.add(b6);
//        objGroup.add(tickMark);
//        objGroup.add(crossMark);
//        objGroup.add(kgTxt);
//        objGroup.add(mlTxt);
//        objGroup.add(mlTxt1);
//        objGroup.add(mlTxt2);
//        objGroup.add(mlTxt3);
//        objGroup.add(mlTxt4);
//
//        shakeObjectGroup.x = 1000;
//        objGroup.x = 1000;
//        var Maintween = this.add.tween(shakeObjectGroup);
//        Maintween.to({ x: 0}, 0,'Linear', true, 0);
//        var Maintween1 = this.add.tween(objGroup);
//        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
//
//        counterText.setText("0");
//
//    }, 
//
//    gotoEighthQuestion:function(){
//
//        _this.questionid = 2;
//
//        questionNo = 8;
//
//        eqnum = 0;
//        objGroup = this.add.group();
//        fillingJarGroup = this.add.group();
//        shakeObjectGroup = this.add.group();
//        b1 = this.add.sprite(260,475,'Level43A_250QC');
//        b1.anchor.setTo(0.5,1);
//        b1.frame = 1;
//        b1.name = "250QC";
//        b1.inputEnabled = true;
//        b1.input.useHandCursor = true;
//        b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//
//        b2 = b1; 
//        b3 = this.add.sprite(120,470,'Level43A_incBox');
//        b3.anchor.setTo(0.5,1);
//        b3.name = "incBox";
//        b4 = b3; 
//
//        b5 = this.add.sprite(600,490,'Level43A_jugC');
//        b5.anchor.setTo(0.5,1);
//        b5.name = "jugC";
//
//        b6 = this.add.sprite(591,258,'Level43A_arrowC');
//        b6.anchor.setTo(0.5,1);
//        b6.frame = 6;
//        b6.name = "arrowC";
//
//        if(window.languageSelected=="English"){
//            kgTxt = this.add.text(645,243, "ml");
//            kgTxt.font = 'myfont';
//            kgTxt.fontWeight = 'normal'
//            kgTxt.fontSize = 20;
//            mlTxt = this.add.text(248,365, "ml");
//            mlTxt.font = 'myfont';
//            mlTxt.fontWeight = 'normal'
//            mlTxt.fontSize = 20;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(480,330, "1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontWeight = 'normal'
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(485,330,"L");
//            mlTxt2.font = 'myfont';
//            mlTxt2.fontWeight = 'normal'
//            mlTxt2.fontSize = 20;
//            mlTxt2.fill = '#373535';
//
//            mlTxt3 = this.add.text(470,195, "2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontWeight = 'normal'
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(483,195, "L");
//            mlTxt4.font = 'myfont';
//            mlTxt4.fontWeight = 'normal'
//            mlTxt4.fontSize = 20;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Hindi"){
//            kgTxt = this.add.text(650,246, "मि.ली ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//            mlTxt = this.add.text(248,370, "मि.ली");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ली");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ली");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Kannada"){
//            kgTxt = this.add.text(652,246, "ಮಿ.ಲೀ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,370, "ಮಿ.ಲೀ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(473,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ಲೀ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 10;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(468,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ಲೀ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 10;
//            mlTxt4.fill = '#373535';
//        }
//        else {
//            kgTxt = this.add.text(650,246, "ମି.ଲି ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//            mlTxt = this.add.text(248,370, "ମି.ଲି ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ଲି");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ଲି");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        kgTxt.anchor.setTo(0.5);
//        kgTxt.align = 'center';
//
//        kgTxt.fill = '#CC333C';
//
//        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
//
//        tickMark = this.add.sprite(835,280,'Level43A_tickMark');
//        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
//
//        counterText = this.add.text(-1.5,-50,'Level43A_');
//        //titletext.scale.setTo(1.5);
//        counterText.anchor.setTo(0.5);
//        counterText.align = 'center';
//
//        counterText.font = 'myfont';
//        counterText.fontSize = 30;
//        counterText.fontWeight = 'normal';
//        counterText.fill = '#65B4C3';
//
//        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
//        b3.addChild(counterText);
//
//        shakeObjectGroup.add(b3);
//
//        objGroup.add(b1);
//        objGroup.add(b5);
//        objGroup.add(b6);
//        objGroup.add(tickMark);
//        objGroup.add(crossMark);
//        objGroup.add(kgTxt);
//        objGroup.add(mlTxt);
//        objGroup.add(mlTxt1);
//        objGroup.add(mlTxt2);
//        objGroup.add(mlTxt3);
//        objGroup.add(mlTxt4);
//
//        shakeObjectGroup.x = 1000;
//        objGroup.x = 1000;
//        var Maintween = this.add.tween(shakeObjectGroup);
//        Maintween.to({ x: 0}, 0,'Linear', true, 0);
//        var Maintween1 = this.add.tween(objGroup);
//        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
//
//        counterText.setText("0");
//
//    },

//    gotoNinthQuestion:function(){
//
//        _this.questionid = 2;
//
//        questionNo = 9;
//
//        eqnum = 0;
//        objGroup = this.add.group();
//        fillingJarGroup = this.add.group();
//        shakeObjectGroup = this.add.group();
//        b1 = this.add.sprite(260,495,'Level43A_1000QC');
//        b1.anchor.setTo(0.5,1);
//        b1.frame = 1;
//        b1.name = "1000QC";
//        b1.inputEnabled = true;
//        b1.input.useHandCursor = true;
//        b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//
//        b2 = b1; 
//        b3 = this.add.sprite(120,470,'Level43A_incBox');
//        b3.anchor.setTo(0.5,1);
//        b3.name = "incBox";
//        b4 = b3; 
//
//        b5 = this.add.sprite(600,490,'Level43A_jugC');
//        b5.anchor.setTo(0.5,1);
//        b5.name = "jugC";
//
//        b6 = this.add.sprite(595,220,'Level43A_arrowC');
//        b6.anchor.setTo(0.5,1);
//        b6.frame = 7;
//        b6.name = "arrowC";
//
//        if(window.languageSelected=="English"){
//            kgTxt = this.add.text(647,206, "ml");
//            kgTxt.font = 'myfont';
//            kgTxt.fontWeight = 'normal'
//            kgTxt.fontSize = 20;
//
//            mlTxt = this.add.text(248,290, "ml");
//            mlTxt.font = 'myfont';
//            mlTxt.fontWeight = 'normal'
//            mlTxt.fontSize = 20;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(480,330, "1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontWeight = 'normal'
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(485,330,"L");
//            mlTxt2.font = 'myfont';
//            mlTxt2.fontWeight = 'normal'
//            mlTxt2.fontSize = 20;
//            mlTxt2.fill = '#373535';
//
//            mlTxt3 = this.add.text(470,195, "2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontWeight = 'normal'
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(483,195, "L");
//            mlTxt4.font = 'myfont';
//            mlTxt4.fontWeight = 'normal'
//            mlTxt4.fontSize = 20;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Hindi"){
//            kgTxt = this.add.text(658,210, "मि.ली ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,295, "मि.ली");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ली");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ली");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        else if(window.languageSelected=="Kannada"){
//            kgTxt = this.add.text(658,209, "ಮಿ.ಲೀ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(240,295, "ಮಿ.ಲೀ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535';
//
//            mlTxt1 = this.add.text(473,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ಲೀ");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 10;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(468,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ಲೀ");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 10;
//            mlTxt4.fill = '#373535';
//
//        }
//        else{
//            kgTxt = this.add.text(658,210, "ମି.ଲି ");
//            kgTxt.font = 'Comic Sans MS';
//            kgTxt.fontSize = 13;
//
//            mlTxt = this.add.text(248,295, "ମି.ଲି ");
//            mlTxt.font = 'Comic Sans MS';
//            mlTxt.fontSize = 10;
//            mlTxt.fill = '#373535'; 
//
//            mlTxt1 = this.add.text(470,327, +"1");
//            mlTxt1.font = 'myfont';
//            mlTxt1.fontSize = 20;
//            mlTxt1.fill = '#373535';
//
//            mlTxt2 = this.add.text(480,335, "ଲି");
//            mlTxt2.font = 'Comic Sans MS';
//            mlTxt2.fontSize = 12;
//            mlTxt2.fill = '#373535'; 
//
//            mlTxt3 = this.add.text(465,190, +"2");
//            mlTxt3.font = 'myfont';
//            mlTxt3.fontSize = 20;
//            mlTxt3.fill = '#373535';
//
//            mlTxt4 = this.add.text(480,200, "ଲି");
//            mlTxt4.font = 'Comic Sans MS';
//            mlTxt4.fontSize = 12;
//            mlTxt4.fill = '#373535';
//        }
//        kgTxt.anchor.setTo(0.5);
//        kgTxt.align = 'center';
//
//        kgTxt.fill = '#CC333C';
//
//        kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
//
//        tickMark = this.add.sprite(835,280,'Level43A_tickMark');
//        crossMark = this.add.sprite(835,350,'Level43A_crossMark');
//
//        counterText = this.add.text(-1.5,-50,'Level43A_');
//        //titletext.scale.setTo(1.5);
//        counterText.anchor.setTo(0.5);
//        counterText.align = 'center';
//
//        counterText.font = 'myfont';
//        counterText.fontSize = 30;
//        counterText.fontWeight = 'normal';
//        counterText.fill = '#65B4C3';
//
//        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
//        b3.addChild(counterText);
//
//        shakeObjectGroup.add(b3);
//
//        objGroup.add(b1);
//        objGroup.add(b5);
//        objGroup.add(b6);
//        objGroup.add(tickMark);
//        objGroup.add(crossMark);
//        objGroup.add(kgTxt);
//        objGroup.add(mlTxt);
//        objGroup.add(mlTxt1);
//        objGroup.add(mlTxt2);
//        objGroup.add(mlTxt3);
//        objGroup.add(mlTxt4);
//
//        shakeObjectGroup.x = 1000;
//        objGroup.x = 1000;
//        var Maintween = this.add.tween(shakeObjectGroup);
//        Maintween.to({ x: 0}, 0,'Linear', true, 0);
//        var Maintween1 = this.add.tween(objGroup);
//        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
//
//        counterText.setText("0");
//
//    }, 

    onTapfillTheContainer:function(target)
    {

        tickMark.inputEnabled = true; 
        tickMark.input.useHandCursor = true; 
        tickMark.events.onInputDown.add(this.somefunction,this);

        crossMark.inputEnabled = true; 
        crossMark.input.useHandCursor = true; 

        crossMark.events.onInputDown.add(function(target){ 
            commonNavBar.playClickSound();

            b5.frame = 0;
            crossMark.frame = 1;
            countIncrement = 0;
            count3 = 0;
            count2 = 0; 
            counterText.setText("");
            if(questionNo < 5){
                counterText2.setText("");
            } 
            b1.inputEnabled = true;
            b2.inputEnabled = true;
            b1.input.useHandCursor = true;
            b2.input.useHandCursor = true;
            this.time.events.add(500, function(){
                crossMark.frame = 0;
            },this);
            this.time.events.add(500, function(){
                crossMark.frame = 0;
            },this);
        },this);

        if(countIncrement < 20){
            countIncrement++;

            if(questionNo == 1)
            {
                commonNavBar.playWaterFillingSound();

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
                commonNavBar.playWaterFillingSound();

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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
                commonNavBar.playWaterFillingSound();
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
        target.events.onInputDown.removeAll();
        noofAttempts++;
        b1.inputEnabled = false;
        b2.inputEnabled = false;

        commonNavBar.playClickSound();
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
        telInitializer2.gameCorrectAns();
        commonNavBar.playCelebrationSound();
		_this.Stararr.push(3);
        var starAnim = _this.starsGroup.getChildAt(count1);
        starAnim.smoothed = false;
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

        this.time.events.add(2000, function(){
            this.removeEverthing();
        },this);
    },

    wrongFunction:function(){
        telInitializer2.gameCorrectAns();
        //console.log("wrong");
        shake.shake(10, shakeObjectGroup);
        commonNavBar.playWrongCelebrationSound();
        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(count1).frame = 1;

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

        this.time.events.add(2000, function(){
            this.removeEverthing();
        },this);

    },

    removeEverthing:function() 
    {
        no1++;
        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
        MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);

        var MaintweenDestroy1 = this.add.tween(objGroup);
        MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
        
        if(no1 < 3)
        {
//            commonNavBar.stopVoice();
            wrong = true;

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

                _this.starsGroup.getChildAt(count1+1).frame = 2; 
                count1++;
            },this);

            tweenCount=0;
        }
        else
        {
            //console.log("gameover");

            MaintweenDestroy.onComplete.add(function(){
                countIncrement = 0;
                count2 = 0;
                count3 = 0;
                commonNavBar.stopTimer();
                commonNavBar.stopVoice();
                _this.stopVoice();
                commonNavBar.disableNavBar();

                crossMark.inputEnabled = false; 
                tickMark.inputEnabled = false; 

				commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                this.createScoreScene();
            },this);
        }
    },

    createScoreScene:function()
    {
        this.completelyplayed = true;

		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;

        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.score += this.scoreSceneScore;

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;

		this.backgroundtransp.visible=false; //Remove BackGround Opacity
		
        _this.state.start('measurement4',true,false);
        
    },

    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);

        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
        console.log(this.scoreSceneScore);
        if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);  

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }       
    },

    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3500, function()
                             { 
            commonNavBar.soundVar=null,
                commonNavBar.questionArray=null,
                commonNavBar.questionCount=null,
                commonNavBar.soundUrl=null,
                commonNavBar.hint1=true,
                commonNavBar.hint2=true,
                commonNavBar.hint3=true,
                commonNavBar.speakerbtn=null;
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('volume_MVG_3_4level1',true,false);
        }, this);
    },

    update:function(){

    },

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
                _this.soundurl =  window.baseUrl+"questionSounds/4.3A/English/4.3C1.mp3";
            }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.mp3";
                }
				else if(window.languageSelected == "Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1.mp3";
                }
				else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.3C1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/telugu/4.3C1.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.mp3";
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
                _this.soundurl =  window.baseUrl+"questionSounds/4.3A/English/4.3C1.1.mp3";
            }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Hindi/4.3C1.1.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Kannada/4.3C1.1.mp3";
                }
				else if(window.languageSelected == "Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1_1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/4.3A/4.3C1.mp3";
                }
				else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1_1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Marathi/4.3C1_1.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.3C1_1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/telugu/4.3C1_1.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1_1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Tamil/4.3C1_1.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1_1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/4.1A/Urdu/4.3C1_1.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Odiya/4.3C1.1.mp3";
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
        }

        commonNavBar.addNavBar(this,_this.soundurl,"measurement4");
        commonNavBar.getVoice(_this.soundurl);

       /* _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();*/

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

        if(this.playWaterFillingSound)
        {
            this.playWaterFillingSound.pause();
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

         window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
            telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"volume_MVG_3_4state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
            telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"volume_MVG_3_4state", "fullycomplete");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
    }


};