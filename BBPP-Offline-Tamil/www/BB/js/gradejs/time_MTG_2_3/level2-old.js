Game.time_MTG_2_3level2=function(){};
var no22;
var no11;
var qArrays;
var voices;
var anim11;
var count;
var count1;
var months;
var celebration;
var monthJan;
var flagGroup1;
var backbg;
var monday;
var val;
var anim1;
var anim2;
var framesChange;
var dayflag=0;
var voice;
var groupcir;
var monarr=new Array();
var tuearr=new Array();
var wedarr=new Array();
var thurarr=new Array();
var friarr=new Array();
var satarr=new Array();
var sunarr=new Array();
var circleanim=new Array();
var correctgrp;

var circleanimArrpush = new Array();

Game.time_MTG_2_3level2.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
        _this.gameid = "6.2A";
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid,
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        //telInitializer.gameIdInit("time6_2",gradeSelected);

        

    },
    
	create:function(game){
        
		_this.amplify = null;
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        this.playedwithHint = false;
        this.completelyplayed = false;
		
        noofAttempts=0;
		AnsTimerCount=0;
		_this.sceneCount = 0;
        
        var background;
        var click3;
        var celebAnim1;
        var click4;
        var rightCount ;
        var wronggraphics1,wronggraphics2,wronggraphics3,wronggraphics4;
        var anim5;
        var wmusic;
        var flagmain11Anim;
        var count;
        var clickSound;
        var starsGroup1;
        var flagmain11Anim;
        var starsGroup;

		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        rightCount = 0;
       
        no11 = 0;
        no22 = 0;
        count=0;
        count1=4;
        celebration= false;
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        voices=new Array();
        voices=["Monday","Tuesday","Wednesday","Thursday","Friday","16","10","1","12","27","18"];
        correctgrp=this.add.group();
        
        qArrays = this.shuffle(qArrays);

		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

        background = this.add.tileSprite(0,-2,this.world.width,this.world.height, 'Level62_bg2');
		
		/*_this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
		
        //background.scale.setTo(1.05,1.12);
         _this.backbtn = _this.add.sprite(-3,5,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
           // _this.stopVoice();
            
            commonNavBar.playClickSound();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);*/
        commonNavBar.addNavBar(game,null,"measurement3");
         commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
         
         commonNavBar.addScore(game,this.score);
       _this.speakerbtn = _this.add.sprite(610,7,'speakerBtn');

        this.hintparams=['MVG1.4','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);
      // _this.speakerbtn.inputEnabled = true;
        
        
		/* _this.timebg=this.add.sprite(305,7,'Level42B_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,24,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';*/
			
        this.generateStarsForTheScene(9);
        
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
    
	  /*  updateTimer:function() {
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
},*/
    

    getQuestion:function()
    {
        commonNavBar.startTimer(this);
        noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           commonNavBar.playClickSound();
           this.getVoice(voices[0]);
            
        },_this);
		/*timer = this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
        
		 _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
		_this.timer1.start();*/
  
        //this.input.enabled=true;
        voices=this.shuffle(voices);
        //console.log("voice"+voices[0]);
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        this.getVoice(voices[0]);
        /*_this.speakerbtn.events.onInputDown.add(function(){
            this.getVoice(voices[0]);
        },this);*/
        console.log("question no=="+qArrays[no11]);
    	switch(qArrays[no11])
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
            case 9: this.gotoNinethQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwelvethQuestion();
    				break;
            
          
    	}
        
    },
  
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX, 10, 'cstarAnim');
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=10;
					starsGroup.getChildAt(i).x+=10;
				}
			}
            if(this.Stararr[i])
                    {
                        
                        starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
		}	
        starsGroup.getChildAt(4).frame = 2;
	},

    
    update:function(){

    },

    gotoFirstQuestion:function(){
         _this.questionid = 1;
        //january
    	no11++;
        val=1;
        
        monarr=[1,8,15,22,29];
        tuearr=[2,9,16,23,30];
        wedarr=[3,10,17,24,31];
        thuarr=[4,11,18,25];
        friarr=[5,12,19,26];
        satarr=[6,13,20,27];
        sunarr=[7,14,21,28];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];

        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.name = "january";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(446,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
           
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
          //  
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
          //  
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
          //  
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
           
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=0;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=332;
            months.y=116;
            months.frame=12;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=24;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=36;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        var whiteNum1= this.add.sprite(115,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            //
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"mongrp",5);
        },this);
        
        var whiteNum2= this.add.sprite(215,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"tuegrp",5);
        },this);
        
        var whiteNum3= this.add.sprite(315,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"wedgrp",5);
        },this);
        
        var whiteNum4= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"thugrp",4);
        },this);
        
        var whiteNum5= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"frigrp",4);
        },this);
        
        var whiteNum6= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"satgrp",4);
        },this);
        
        var redNum7= this.add.sprite(715,210,'Level62_redNum');
    	redNum7.scale.setTo(0.95,1);
        redNum7.frame=7;
        redNum7.inputEnabled=true;
        redNum7.input.useHandCursor = true;
        redNum7.events.onInputDown.add(function(){
            redNum7.inputEnabled=false;
            this.checkAns(redNum7,"sungrp",4);
        },this);
        
        var whiteNum8= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"mongrp",5);
        },this);
        
        var whiteNum9= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"tuegrp",5);
        },this);
        
        var whiteNum10= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"wedgrp",5);
        },this);
        
        var whiteNum11= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"thugrp",4);
        },this);
        
        var whiteNum12= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"frigrp",4);
        },this);
        
        var whiteNum13= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"satgrp",4);
        },this);
        
        var redNum14= this.add.sprite(715,260,'Level62_redNum');
    	redNum14.scale.setTo(0.95,1);
        redNum14.frame=14;
        redNum14.inputEnabled=true;
        redNum14.input.useHandCursor = true;
        redNum14.events.onInputDown.add(function(){
            redNum14.inputEnabled=false;
            this.checkAns(redNum14,"sungrp",4);
        },this);
        
        var whiteNum15= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"mongrp",5);
        },this);
        
        var whiteNum16= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"tuegrp",5);
        },this);
        
        var whiteNum17= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"wedgrp",5);
        },this);
        
        var whiteNum18= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"thugrp",4);
        },this);
        
        var whiteNum19= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"frigrp",4);
        },this);
        
        var whiteNum20= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"satgrp",4);
        },this);
        
        var redNum21= this.add.sprite(715,310,'Level62_redNum');
    	redNum21.scale.setTo(0.95,1);
        redNum21.frame=21;
        redNum21.inputEnabled=true;
        redNum21.input.useHandCursor = true;
        redNum21.events.onInputDown.add(function(){
            redNum21.inputEnabled=false;
            this.checkAns(redNum21,"sungrp",4);
        },this);
        
        var whiteNum22= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"mongrp",5);
        },this);
        
        var whiteNum23= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"tuegrp",5);
        },this);
        
        var whiteNum24= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"wedgrp",5);
        },this);
        
        var whiteNum25= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"thugrp",4);
        },this);
        
        var whiteNum26= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"frigrp",4);
        },this);
        
        var whiteNum27= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"satgrp",4);
        },this);
        
        var redNum28= this.add.sprite(715,360,'Level62_redNum');
    	redNum28.scale.setTo(0.95,1);
        redNum28.frame=28;
        redNum28.inputEnabled=true;
        redNum28.input.useHandCursor = true;
        redNum28.events.onInputDown.add(function(){
            redNum28.inputEnabled=false;
            this.checkAns(redNum28,"sungrp",4);
        },this);
        
        var whiteNum29= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"mongrp",5);
        },this);
 
        var whiteNum30= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"tuegrp",5);
        },this);
        
        var whiteNum31= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"wedgrp",5);
        },this);
        
       // groupcir=this.add.group();
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(redNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(redNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(redNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(redNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);              
    },
    
    gotoSecondQuestion:function(){
     _this.questionid = 1;
        //february
    	no11++;
        
        monarr=[5,12,19,26];
        tuearr=[6,13,20,27];
        wedarr=[7,14,21,28];
        thuarr=[1,8,15,22];
        friarr=[2,9,16,23];
        satarr=[3,10,17,24];
        sunarr=[4,11,18,25];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(451,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
           
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            //
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            //
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            //
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
           
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=1;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=336;
            months.y=116;
            months.frame=13;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=25;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=37;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
        var whiteNum1= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"thugrp",4);
        },this);
        
        var whiteNum2= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"frigrp",4);
        },this);
        
        var whiteNum3= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",4);
        },this);
        
        var redNum4= this.add.sprite(715,210,'Level62_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            redNum4.inputEnabled=false;
            this.checkAns(redNum4,"sungrp",4);
        },this);
        
        var whiteNum5= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"mongrp",4);
        },this);
        
        var whiteNum6= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"tuegrp",4);
        },this);
        
        var whiteNum7= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"wedgrp",4);
        },this);
        
        var whiteNum8= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"thugrp",4);
        },this);
        
        var whiteNum9= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",4);
        },this);
        
        var whiteNum10= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",4);
        },this);
        
        var redNum11= this.add.sprite(715,260,'Level62_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            redNum11.inputEnabled=false;
            this.checkAns(redNum11,"sungrp",4);
        },this);
        
        var whiteNum12= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        
        var whiteNum13= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        
        var whiteNum14= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        
        var whiteNum15= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"thugrp",4);
        },this);
        
        var whiteNum16= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",4);
        },this);
        
        var whiteNum17= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",4);
        },this);
        
        var redNum18= this.add.sprite(715,310,'Level62_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            redNum18.inputEnabled=false;
            this.checkAns(redNum18,"sungrp",4);
        },this);
        
        var whiteNum19= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        
        var whiteNum20= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        
        var whiteNum21= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        
        
        var whiteNum22= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"thugrp",4);
        },this);
        
        var whiteNum23= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",4);
        },this);
        
        var whiteNum24= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",4);
        },this);
        
        var redNum25= this.add.sprite(715,360,'Level62_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            redNum25.inputEnabled=false;
            this.checkAns(redNum25,"sungrp",4);
        },this);
        
        var whiteNum26= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        
        var whiteNum27= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
        
        var whiteNum28= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);

    },
    
    gotoThirdQuestion:function(){
       _this.questionid = 1;
        //march
    	no11++;
        
         monarr=[5,12,19,26];
         tuearr=[6,13,20,27];
         wedarr=[7,14,21,28];
         thuarr=[1,8,15,22,29];
         friarr=[2,9,16,23,30];
         satarr=[3,10,17,24,31];
         sunarr=[4,11,18,25];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(446,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
          //  
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            //
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
           
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
           
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
           
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=2;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=336;
            months.y=116;
            months.frame=14;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=325;
            months.y=114;
            months.frame=26;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=38;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
        var whiteNum1= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"thugrp",4);
        },this);
        
        var whiteNum2= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"frigrp",4);
        },this);
        
        var whiteNum3= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",4);
        },this);
        
        var redNum4= this.add.sprite(715,210,'Level62_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            redNum4.inputEnabled=false;
            this.checkAns(redNum4,"sungrp",4);
        },this);
        
        var whiteNum5= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"mongrp",4);
        },this);
        
        var whiteNum6= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"tuegrp",4);
        },this);
        
        var whiteNum7= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"wedgrp",4);
        },this);
        
        var whiteNum8= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"thugrp",4);
        },this);
        
        var whiteNum9= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",4);
        },this);
        
        var whiteNum10= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",4);
        },this);
        
        var redNum11= this.add.sprite(715,260,'Level62_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            redNum11.inputEnabled=false;
            this.checkAns(redNum11,"sungrp",4);
        },this);
        
        var whiteNum12= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        
        var whiteNum13= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        
        var whiteNum14= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        
        var whiteNum15= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"thugrp",4);
        },this);
        
        var whiteNum16= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",4);
        },this);
        
        var whiteNum17= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",4);
        },this);
        
        var redNum18= this.add.sprite(715,310,'Level62_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            redNum18.inputEnabled=false;
            this.checkAns(redNum18,"sungrp",4);
        },this);
        
        var whiteNum19= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        
        var whiteNum20= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        
        var whiteNum21= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        
        
        var whiteNum22= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"thugrp",4);
        },this);
        
        var whiteNum23= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",4);
        },this);
        
        var whiteNum24= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",4);
        },this);
        
        var redNum25= this.add.sprite(715,360,'Level62_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            redNum25.inputEnabled=false;
            this.checkAns(redNum25,"sungrp",4);
        },this);
        
        var whiteNum26= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        
        var whiteNum27= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
        
        var whiteNum28= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
         
        var whiteNum29= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"thugrp",5);
        },this);
        
        var whiteNum30= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"frigrp",5);
        },this);
        
        var whiteNum31= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"satgrp",5);
        },this);
       
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
    	    
    },
    
    gotoFourthQuestion:function(){
         _this.questionid = 1;
        //April
    	no11++;
        monarr=[2,9,16,23,30];
        tuearr=[3,10,17,24];
        wedarr=[4,11,18,25];
        thuarr=[5,12,19,26];
        friarr=[6,13,20,27];
        satarr=[7,14,21,28];
        sunarr=[1,8,15,22,29];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
 
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(428,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
           
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
           
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
          //  
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
           
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
           
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=3;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=323;
            months.y=116;
            months.frame=15;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=318;
            months.y=114;
            months.frame=27;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=39;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
        redNum1= this.add.sprite(715,210,'Level62_redNum');
    	redNum1.scale.setTo(0.95,1);
        redNum1.frame=1;
        redNum1.inputEnabled=true;
        redNum1.input.useHandCursor = true;
        redNum1.events.onInputDown.add(function(){
            redNum1.inputEnabled=false;
            this.checkAns(redNum1,"sungrp",5);
        },this);
        
        whiteNum2= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"mongrp",5);
        },this);
        
        whiteNum3= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"tuegrp",4);
        },this);
        
        whiteNum4= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"wedgrp",4);
        },this);
        
        whiteNum5= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"thugrp",4);
        },this);
        
        whiteNum6= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"frigrp",4);
        },this);
        
        whiteNum7= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"satgrp",4);
        },this);
        
        redNum8= this.add.sprite(715,260,'Level62_redNum');
    	redNum8.scale.setTo(0.95,1);
        redNum8.frame=8;
        redNum8.inputEnabled=true;
        redNum8.input.useHandCursor = true;
        redNum8.events.onInputDown.add(function(){
            redNum8.inputEnabled=false;
            this.checkAns(redNum8,"sungrp",5);
        },this);
        
       whiteNum9= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"mongrp",5);
        },this);
        
        whiteNum10= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"tuegrp",4);
        },this);
        
        whiteNum11= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"wedgrp",4);
        },this);
        
        whiteNum12= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"thugrp",4);
        },this);
        
        whiteNum13= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"frigrp",4);
        },this);
        
        whiteNum14= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"satgrp",4);
        },this);
        
        redNum15= this.add.sprite(715,310,'Level62_redNum');
    	redNum15.scale.setTo(0.95,1);
        redNum15.frame=15;
        redNum15.inputEnabled=true;
        redNum15.input.useHandCursor = true;
        redNum15.events.onInputDown.add(function(){
            redNum15.inputEnabled=false;
            this.checkAns(redNum15,"sungrp",5);
        },this);
        
        whiteNum16= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"mongrp",5);
        },this);
        
        whiteNum17= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"tuegrp",4);
        },this);
        
        whiteNum18= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"wedgrp",4);
        },this);
        
        whiteNum19= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"thugrp",4);
        },this);
        
        whiteNum20= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"frigrp",4);
        },this);
        
        whiteNum21= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"satgrp",4);
        },this);
        
        
        redNum22= this.add.sprite(715,360,'Level62_redNum');
    	redNum22.scale.setTo(0.95,1);
        redNum22.frame=22;
        redNum22.inputEnabled=true;
        redNum22.input.useHandCursor = true;
        redNum22.events.onInputDown.add(function(){
            redNum22.inputEnabled=false;
            this.checkAns(redNum22,"sungrp",5);
        },this);
        
        whiteNum23= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"mongrp",5);
        },this);
        
        whiteNum24= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"tuegrp",4);
        },this);
        
       whiteNum25= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"wedgrp",4);
        },this);
        
        whiteNum26= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"thugrp",4);
        },this);
        
        whiteNum27= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"frigrp",4);
        },this);
        
        whiteNum28= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"satgrp",4);
        },this);
        
        redNum29= this.add.sprite(715,410,'Level62_redNum');
    	redNum29.scale.setTo(0.95,1);
        redNum29.frame=29;
        redNum29.inputEnabled=true;
        redNum29.input.useHandCursor = true;
        redNum29.events.onInputDown.add(function(){
            redNum29.inputEnabled=false;
            this.checkAns(redNum29,"sungrp",5);
        },this);
        
        whiteNum30= this.add.sprite(115,210,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"mongrp",5);
        },this);
       
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(redNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(redNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(redNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(redNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(redNum29);
        flagGroup1.add(whiteNum30);
    	    
    },
    
    gotoFifthQuestion:function(){
  _this.questionid = 1;
        //may
    	no11++;
        monarr=[7,14,21,28];
        tuearr=[1,8,15,22,29];
        wedarr=[2,9,16,23,30];
        thuarr=[3,10,17,24,31];
        friarr=[4,11,18,25];
        satarr=[5,12,19,26];
        sunarr=[6,13,20,27];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(425,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
          //  
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
           
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
          //  
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
           
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
           
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=4;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=328;
            months.y=116;
            months.frame=16;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=328;
            months.y=114;
            months.frame=28;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=40;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        whiteNum1= this.add.sprite(215,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"tuegrp",5);
        },this);
        
        whiteNum2= this.add.sprite(315,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"wedgrp",5);
        },this);
        
        whiteNum3= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"thugrp",5);
        },this);
        
        whiteNum4= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"frigrp",4);
        },this);
        
        whiteNum5= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"satgrp",4);
        },this);
        
        redNum6= this.add.sprite(715,210,'Level62_redNum');
    	redNum6.scale.setTo(0.95,1);
        redNum6.frame=6;
        redNum6.inputEnabled=true;
        redNum6.input.useHandCursor = true;
        redNum6.events.onInputDown.add(function(){
            redNum6.inputEnabled=false;
            this.checkAns(redNum6,"sungrp",4);
        },this);
        
        whiteNum7= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"mongrp",4);
        },this);
        
        whiteNum8= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"tuegrp",5);
        },this);
        
       whiteNum9= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"wedgrp",5);
        },this);
        
        whiteNum10= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"thugrp",5);
        },this);
        
        whiteNum11= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"frigrp",4);
        },this);
        
        whiteNum12= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"satgrp",4);
        },this);
        
        redNum13= this.add.sprite(715,260,'Level62_redNum');
    	redNum13.scale.setTo(0.95,1);
        redNum13.frame=13;
        redNum13.inputEnabled=true;
        redNum13.input.useHandCursor = true;
        redNum13.events.onInputDown.add(function(){
            redNum13.inputEnabled=false;
            this.checkAns(redNum13,"sungrp",4);
        },this);
        
        whiteNum14= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"mongrp",4);
        },this);
        
        whiteNum15= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"tuegrp",5);
        },this);
        
        whiteNum16= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"wedgrp",5);
        },this);
        
        whiteNum17= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"thugrp",5);
        },this);
        
        whiteNum18= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"frigrp",4);
        },this);
        
        whiteNum19= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"satgrp",4);
        },this);
        
        redNum20= this.add.sprite(715,310,'Level62_redNum');
    	redNum20.scale.setTo(0.95,1);
        redNum20.frame=20;
        redNum20.inputEnabled=true;
        redNum20.input.useHandCursor = true;
        redNum20.events.onInputDown.add(function(){
            redNum20.inputEnabled=false;
            this.checkAns(redNum20,"sungrp",4);
        },this);
        
        whiteNum21= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"mongrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"tuegrp",5);
        },this);
        
        whiteNum23= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"wedgrp",5);
        },this);
        
        whiteNum24= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"thugrp",5);
        },this);
        
       whiteNum25= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"frigrp",4);
        },this);
        
        whiteNum26= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"satgrp",4);
        },this);
        
        redNum27= this.add.sprite(715,360,'Level62_redNum');
    	redNum27.scale.setTo(0.95,1);
        redNum27.frame=27;
        redNum27.inputEnabled=true;
        redNum27.input.useHandCursor = true;
        redNum27.events.onInputDown.add(function(){
            redNum27.inputEnabled=false;
            this.checkAns(redNum27,"sungrp",4);
        },this);
        
        whiteNum28= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"mongrp",4);
        },this);
        
        whiteNum29= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"tuegrp",5);
        },this);
        
        whiteNum30= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"wedgrp",5);
        },this);
        
        whiteNum31= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"thugrp",5);
        },this);
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(redNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(redNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(redNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(redNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
   
    },
    
    gotoSixthQuestion:function(){
       _this.questionid = 1;
        //june
    	no11++;
        monarr=[4,11,18,25];
        tuearr=[5,12,19,26];
        wedarr=[6,13,20,27];
        thuarr=[7,14,21,28];
        friarr=[1,8,15,22,29];
        satarr=[2,9,16,23,30];
        sunarr=[3,10,17,24];
      
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(428,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
          //  
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
         //   
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
         //   
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
         //   
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
          //  
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
          //  
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
          //  
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=5;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=333;
            months.y=116;
            months.frame=17;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=320;
            months.y=114;
            months.frame=29;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=41;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
        
        whiteNum1= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum1,"frigrp",5);
        },this);
        //whiteNum1.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum2= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
         whiteNum2.events.onInputDown.add(function(){
             whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"satgrp",5);
        },this);
        //whiteNum2.events.onInputDown.add(this.wrongAns,this);
        
        redNum3= this.add.sprite(715,210,'Level62_redNum');
    	redNum3.scale.setTo(0.95,1);
        redNum3.frame=3;
        redNum3.inputEnabled=true;
        redNum3.input.useHandCursor = true;
         redNum3.events.onInputDown.add(function(){
             redNum3.inputEnabled=false;
            this.checkAns(redNum3,"sungrp",4);
        },this);
        //redNum3.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum4= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"mongrp",4);
        },this);
        //whiteNum4.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum5= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"tuegrp",4);
        },this);
        //whiteNum5.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum6= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"wedgrp",4);
        },this);
        //whiteNum6.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum7= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"thugrp",4);
        },this);
        //whiteNum7.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum8= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"frigrp",5);
        },this);
       // whiteNum8.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum9= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"satgrp",5);
        },this);
        //whiteNum9.events.onInputDown.add(this.wrongAns,this);
        
        redNum10= this.add.sprite(715,260,'Level62_redNum');
    	redNum10.scale.setTo(0.95,1);
        redNum10.frame=10;
        redNum10.inputEnabled=true;
        redNum10.input.useHandCursor = true;
        redNum10.events.onInputDown.add(function(){
            redNum10.inputEnabled=false;
            this.checkAns(redNum10,"sungrp",4);
        },this);
        //redNum10.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum11= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"mongrp",4);
        },this);
        //whiteNum11.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum12= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"tuegrp",4);
        },this);
        //whiteNum12.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum13= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"wedgrp",4);
        },this);
        //whiteNum13.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum14= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"thugrp",4);
        },this);
        //whiteNum14.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum15= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"frigrp",5);
        },this);
       // whiteNum15.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum16= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"satgrp",5);
        },this);
        //whiteNum16.events.onInputDown.add(this.wrongAns,this);
        
        redNum17= this.add.sprite(715,310,'Level62_redNum');
    	redNum17.scale.setTo(0.95,1);
        redNum17.frame=17;
        redNum17.inputEnabled=true;
        redNum17.input.useHandCursor = true;
        redNum17.events.onInputDown.add(function(){
            redNum17.inputEnabled=false;
            this.checkAns(redNum17,"sungrp",4);
        },this);
       // redNum17.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum18= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"mongrp",4);
        },this);
        //whiteNum18.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum19= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"tuegrp",4);
        },this);
        //whiteNum19.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum20= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"wedgrp",4);
        },this);
        //whiteNum20.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum21= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"thugrp",4);
        },this);
        //whiteNum21.events.onInputDown.add(this.wrongAns,this);
        
        
        whiteNum22= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"frigrp",5);
        },this);
        //whiteNum22.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum23= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"satgrp",5);
        },this);
        //whiteNum23.events.onInputDown.add(this.wrongAns,this);
        
        redNum24= this.add.sprite(715,360,'Level62_redNum');
    	redNum24.scale.setTo(0.95,1);
        redNum24.frame=24;
        redNum24.inputEnabled=true;
        redNum24.input.useHandCursor = true;
        redNum24.events.onInputDown.add(function(){
            redNum24.inputEnabled=false;
            this.checkAns(redNum24,"sungrp",4);
        },this);
        //redNum24.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum25= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"mongrp",4);
        },this);
       // whiteNum25.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum26= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"tuegrp",4);
        },this);
        //whiteNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"wedgrp",4);
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"thugrp",4);
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum29= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"frigrp",5);
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"satgrp",5);
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
      
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(redNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(redNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(redNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(redNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
    	    
    },
    
    gotoSeventhQuestion:function(){
       _this.questionid = 1;
        //july
    	no11++;
        monarr=[2,9,16,23,30];
        tuearr=[3,10,17,24,31];
        wedarr=[4,11,18,25];
        thuarr=[5,12,19,26];
        friarr=[6,13,20,27];
        satarr=[7,14,21,28];
        sunarr=[1,8,15,22,29];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(424,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
            //
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
            //
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            //
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            //
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
           
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
           
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            //
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=6;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=318;
            months.y=116;
            months.frame=18;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=317;
            months.y=114;
            months.frame=30;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=42;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        redNum1= this.add.sprite(715,210,'Level62_redNum');
    	redNum1.scale.setTo(0.95,1);
        redNum1.frame=1;
        redNum1.inputEnabled=true;
        redNum1.input.useHandCursor = true;
        redNum1.events.onInputDown.add(function(){
            redNum1.inputEnabled=false;
            this.checkAns(redNum1,"sungrp",5);
        },this);
        
        whiteNum2= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"mongrp",5);
        },this);
        
        whiteNum3= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"tuegrp",4);
        },this);
        
        whiteNum4= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"wedgrp",4);
        },this);
        
        whiteNum5= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"thugrp",4);
        },this);
        
        whiteNum6= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"frigrp",4);
        },this);
        
        whiteNum7= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"satgrp",4);
        },this);
        
        redNum8= this.add.sprite(715,260,'Level62_redNum');
    	redNum8.scale.setTo(0.95,1);
        redNum8.frame=8;
        redNum8.inputEnabled=true;
        redNum8.input.useHandCursor = true;
        redNum8.events.onInputDown.add(function(){
            redNum8.inputEnabled=false;
            this.checkAns(redNum8,"sungrp",5);
        },this);
        
       whiteNum9= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"mongrp",5);
        },this);
        
        whiteNum10= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"tuegrp",4);
        },this);
        
        whiteNum11= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"wedgrp",4);
        },this);
        
        whiteNum12= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"thugrp",4);
        },this);
        
        whiteNum13= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"frigrp",4);
        },this);
        
        whiteNum14= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"satgrp",4);
        },this);
        
        redNum15= this.add.sprite(715,310,'Level62_redNum');
    	redNum15.scale.setTo(0.95,1);
        redNum15.frame=15;
        redNum15.inputEnabled=true;
        redNum15.input.useHandCursor = true;
        redNum15.events.onInputDown.add(function(){
            redNum15.inputEnabled=false;
            this.checkAns(redNum15,"sungrp",5);
        },this);
        
        whiteNum16= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"mongrp",5);
        },this);
        
        whiteNum17= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"tuegrp",4);
        },this);
        
        whiteNum18= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"wedgrp",4);
        },this);
        
        whiteNum19= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"thugrp",4);
        },this);
        
        whiteNum20= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"frigrp",4);
        },this);
        
        whiteNum21= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"satgrp",4);
        },this);
        
        
        redNum22= this.add.sprite(715,360,'Level62_redNum');
    	redNum22.scale.setTo(0.95,1);
        redNum22.frame=22;
        redNum22.inputEnabled=true;
        redNum22.input.useHandCursor = true;
        redNum22.events.onInputDown.add(function(){
            redNum22.inputEnabled=false;
            this.checkAns(redNum22,"sungrp",5);
        },this);
        
        whiteNum23= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"mongrp",5);
        },this);
        
        whiteNum24= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"tuegrp",4);
        },this);
        
       whiteNum25= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"wedgrp",4);
        },this);
        
        whiteNum26= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"thugrp",4);
        },this);
        
        whiteNum27= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"frigrp",4);
        },this);
        
        whiteNum28= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"satgrp",4);
        },this);
        
        redNum29= this.add.sprite(715,410,'Level62_redNum');
    	redNum29.scale.setTo(0.95,1);
        redNum29.frame=29;
        redNum29.inputEnabled=true;
        redNum29.input.useHandCursor = true;
        redNum29.events.onInputDown.add(function(){
            redNum29.inputEnabled=false;
            this.checkAns(redNum29,"sungrp",5);
        },this);
        
        whiteNum30= this.add.sprite(115,210,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"mongrp",5);
        },this);
        
        whiteNum31= this.add.sprite(215,210,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"tuegrp",5);
        },this);
       
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(redNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(redNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(redNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(redNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(redNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
    },
    
    gotoEighthQuestion:function(){
         _this.questionid = 1;
        //August
    	no11++;
        monarr=[6,13,20,27];
        tuearr=[7,14,21,28];
        wedarr=[1,8,15,22,29];
        thuarr=[2,9,16,23,30];
        friarr=[3,10,17,24,31];
        satarr=[4,11,18,25];
        sunarr=[5,12,19,26];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
       
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(443,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
           
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
            
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=7;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=336;
            months.y=116;
            months.frame=19;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=31;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=43;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        whiteNum1= this.add.sprite(315,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"wedgrp",5);
        },this);
        
        whiteNum2= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"thugrp",5);
        },this);
        
        whiteNum3= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"frigrp",5);
        },this);
        
        whiteNum4= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"satgrp",4);
        },this);
        
        redNum5= this.add.sprite(715,210,'Level62_redNum');
    	redNum5.scale.setTo(0.95,1);
        redNum5.frame=5;
        redNum5.inputEnabled=true;
        redNum5.input.useHandCursor = true;
        redNum5.events.onInputDown.add(function(){
            redNum5.inputEnabled=false;
            this.checkAns(redNum5,"sungrp",4);
        },this);
        
        whiteNum6= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"mongrp",4);
        },this);
        
        whiteNum7= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"tuegrp",4);
        },this);
        
        whiteNum8= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"wedgrp",5);
        },this);
        
       whiteNum9= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"thugrp",5);
        },this);
    
        whiteNum10= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"frigrp",5);
        },this);
        
        whiteNum11= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"satgrp",4);
        },this);
        
        redNum12= this.add.sprite(715,260,'Level62_redNum');
    	redNum12.scale.setTo(0.95,1);
        redNum12.frame=12;
        redNum12.inputEnabled=true;
        redNum12.input.useHandCursor = true;
        redNum12.events.onInputDown.add(function(){
            redNum12.inputEnabled=false;
            this.checkAns(redNum12,"sungrp",4);
        },this);
        
        whiteNum13= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"mongrp",4);
        },this);
        
        whiteNum14= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"tuegrp",4);
        },this);

        whiteNum15= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"wedgrp",5);
        },this);
        
        whiteNum16= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"thugrp",5);
        },this);
        
        whiteNum17= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"frigrp",5);
        },this);
        
        whiteNum18= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"satgrp",4);
        },this);
        
        redNum19= this.add.sprite(715,310,'Level62_redNum');
    	redNum19.scale.setTo(0.95,1);
        redNum19.frame=19;
        redNum19.inputEnabled=true;
        redNum19.input.useHandCursor = true;
        redNum19.events.onInputDown.add(function(){
            redNum19.inputEnabled=false;
            this.checkAns(redNum19,"sungrp",4);
        },this);
        
        whiteNum20= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"mongrp",4);
        },this);
        
        whiteNum21= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"tuegrp",4);
        },this);

        whiteNum22= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"wedgrp",5);
        },this);
        
        whiteNum23= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"thugrp",5);
        },this);
        
        whiteNum24= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"frigrp",5);
        },this);
        
       whiteNum25= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"satgrp",4);
        },this);
       // whiteNum25.events.onInputDown.add(this.wrongAns,this);
        
        redNum26= this.add.sprite(715,360,'Level62_redNum');
    	redNum26.scale.setTo(0.95,1);
        redNum26.frame=26;
        redNum26.inputEnabled=true;
        redNum26.input.useHandCursor = true;
        redNum26.events.onInputDown.add(function(){
            redNum26.inputEnabled=false;
            this.checkAns(redNum26,"sungrp",4);
        },this);
        //redNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"mongrp",4);
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"tuegrp",4);
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum29= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"wedgrp",5);
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"thugrp",5);
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum31= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"frigrp",5);
        },this);
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(redNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(redNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(redNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(redNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);              
    	    
    },
    
    gotoNinethQuestion:function(){
      _this.questionid = 1;
        //september
    	no11++;
        monarr=[3,10,17,24];
        tuearr=[4,11,18,25];
        wedarr=[5,12,19,26];
        thuarr=[6,13,20,27];
        friarr=[7,14,21,28];
        satarr=[1,8,15,22,29];
        sunarr=[2,9,16,23,30];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];

        months = this.add.sprite(330,121,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(460,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
            //
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
            
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=8;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=350;
            months.y=116;
            months.frame=20;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=32;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=44;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        whiteNum1= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"satgrp",5);
        },this);
        
        redNum2= this.add.sprite(715,210,'Level62_redNum');
    	redNum2.scale.setTo(0.95,1);
        redNum2.frame=2;
        redNum2.inputEnabled=true;
        redNum2.input.useHandCursor = true;
        redNum2.events.onInputDown.add(function(){
            redNum2.inputEnabled=false;
            this.checkAns(redNum2,"sungrp",5);
        },this);
        
        whiteNum3= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"mongrp",4);
        },this);
        
        whiteNum4= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"tuegrp",4);
        },this);
        
        whiteNum5= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"wedgrp",4);
        },this);
        
        whiteNum6= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"thugrp",4);
        },this);
        
        whiteNum7= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"frigrp",4);
        },this);
        
        whiteNum8= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"satgrp",5);
        },this);
        
       redNum9= this.add.sprite(715,260,'Level62_redNum');
    	redNum9.scale.setTo(0.95,1);
        redNum9.frame=9;
        redNum9.inputEnabled=true;
        redNum9.input.useHandCursor = true;
        redNum9.events.onInputDown.add(function(){
            redNum9.inputEnabled=false;
            this.checkAns(redNum9,"sungrp",5);
        },this);
        
        whiteNum10= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"mongrp",4);
        },this);
        
        whiteNum11= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"tuegrp",4);
        },this);
        
        whiteNum12= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"wedgrp",4);
        },this);
        
        whiteNum13= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"thugrp",4);
        },this);
        
        whiteNum14= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"frigrp",4);
        },this);
        
        whiteNum15= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"satgrp",5);
        },this);
        
        redNum16= this.add.sprite(715,310,'Level62_redNum');
    	redNum16.scale.setTo(0.95,1);
        redNum16.frame=16;
        redNum16.inputEnabled=true;
        redNum16.input.useHandCursor = true;
        redNum16.events.onInputDown.add(function(){
            redNum16.inputEnabled=false;
            this.checkAns(redNum16,"sungrp",5);
        },this);
        
        whiteNum17= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"mongrp",4);
        },this);
        
        whiteNum18= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"tuegrp",4);
        },this);
        
        whiteNum19= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"wedgrp",4);
        },this);
        
        whiteNum20= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"thugrp",4);
        },this);
        
        whiteNum21= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"frigrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"satgrp",5);
        },this);
        
        redNum23= this.add.sprite(715,360,'Level62_redNum');
    	redNum23.scale.setTo(0.95,1);
        redNum23.frame=23;
        redNum23.inputEnabled=true;
        redNum23.input.useHandCursor = true;
        redNum23.events.onInputDown.add(function(){
            redNum23.inputEnabled=false;
            this.checkAns(redNum23,"sungrp",5);
        },this);
        
        whiteNum24= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"mongrp",4);
        },this);
        
       whiteNum25= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"tuegrp",4);
        },this);
        
        whiteNum26= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"wedgrp",4);
        },this);
        
        whiteNum27= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"thugrp",4);
        },this);
        
        whiteNum28= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"frigrp",4);
        },this);
        
        whiteNum29= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"satgrp",5);
        },this);
        
        redNum30= this.add.sprite(715,410,'Level62_redNum');
    	redNum30.scale.setTo(0.95,1);
        redNum30.frame=30;
        redNum30.inputEnabled=true;
        redNum30.input.useHandCursor = true;
        redNum30.events.onInputDown.add(function(){
            redNum30.inputEnabled=false;
            this.checkAns(redNum30,"sungrp",5);
        },this);
  
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(redNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(redNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(redNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(redNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(redNum30);            
    	    
    },
    
    gotoTenthQuestion:function(){
        _this.questionid = 1;
        //october
    	no11++;
        monarr=[1,8,15,22,29];
        tuearr=[2,9,16,23,30];
        wedarr=[3,10,17,24,31];
        thuarr=[4,11,18,25];
        friarr=[5,12,19,26];
        satarr=[6,13,20,27];
        sunarr=[7,14,21,28];
        
       framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(0,0,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(444,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
            //
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
           
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
            
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=9;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=330;
            months.y=116;
            months.frame=21;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=315;
            months.y=114;
            months.frame=33;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=45;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        var whiteNum1= this.add.sprite(115,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            //
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"mongrp",5);
        },this);
        
        var whiteNum2= this.add.sprite(215,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"tuegrp",5);
        },this);
        
        var whiteNum3= this.add.sprite(315,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"wedgrp",5);
        },this);
        
        var whiteNum4= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"thugrp",4);
        },this);
        
        var whiteNum5= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"frigrp",4);
        },this);
        
        var whiteNum6= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"satgrp",4);
        },this);
        
        var redNum7= this.add.sprite(715,210,'Level62_redNum');
    	redNum7.scale.setTo(0.95,1);
        redNum7.frame=7;
        redNum7.inputEnabled=true;
        redNum7.input.useHandCursor = true;
        redNum7.events.onInputDown.add(function(){
            redNum7.inputEnabled=false;
            this.checkAns(redNum7,"sungrp",4);
        },this);
        
        var whiteNum8= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"mongrp",5);
        },this);
        
        var whiteNum9= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"tuegrp",5);
        },this);
        
        var whiteNum10= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"wedgrp",5);
        },this);
        
        var whiteNum11= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"thugrp",4);
        },this);
        
        var whiteNum12= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"frigrp",4);
        },this);
        
        var whiteNum13= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"satgrp",4);
        },this);
        
        var redNum14= this.add.sprite(715,260,'Level62_redNum');
    	redNum14.scale.setTo(0.95,1);
        redNum14.frame=14;
        redNum14.inputEnabled=true;
        redNum14.input.useHandCursor = true;
        redNum14.events.onInputDown.add(function(){
            redNum14.inputEnabled=false;
            this.checkAns(redNum14,"sungrp",4);
        },this);
        
        var whiteNum15= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"mongrp",5);
        },this);
        
        var whiteNum16= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"tuegrp",5);
        },this);
        
        var whiteNum17= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"wedgrp",5);
        },this);
        
        var whiteNum18= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"thugrp",4);
        },this);
        
        var whiteNum19= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"frigrp",4);
        },this);
        
        var whiteNum20= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"satgrp",4);
        },this);
        
        var redNum21= this.add.sprite(715,310,'Level62_redNum');
    	redNum21.scale.setTo(0.95,1);
        redNum21.frame=21;
        redNum21.inputEnabled=true;
        redNum21.input.useHandCursor = true;
        redNum21.events.onInputDown.add(function(){
            redNum21.inputEnabled=false;
            this.checkAns(redNum21,"sungrp",4);
        },this);
        
        var whiteNum22= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"mongrp",5);
        },this);
        
        var whiteNum23= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"tuegrp",5);
        },this);
        
        var whiteNum24= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"wedgrp",5);
        },this);
        
        var whiteNum25= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"thugrp",4);
        },this);
        
        var whiteNum26= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"frigrp",4);
        },this);
        
        var whiteNum27= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"satgrp",4);
        },this);
        
        var redNum28= this.add.sprite(715,360,'Level62_redNum');
    	redNum28.scale.setTo(0.95,1);
        redNum28.frame=28;
        redNum28.inputEnabled=true;
        redNum28.input.useHandCursor = true;
        redNum28.events.onInputDown.add(function(){
            redNum28.inputEnabled=false;
            this.checkAns(redNum28,"sungrp",4);
        },this);
        
        var whiteNum29= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"mongrp",5);
        },this);
 
        var whiteNum30= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"tuegrp",5);
        },this);
        
        var whiteNum31= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"wedgrp",5);
        },this);
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(redNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(redNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(redNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(redNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
      
    },
    
    gotoEleventhQuestion:function(){
     _this.questionid = 1;
        //march
    	no11++;
        monarr=[5,12,19,26];
        tuearr=[6,13,20,27];
        wedarr=[7,14,21,28];
        thuarr=[1,8,15,22,29];
        friarr=[2,9,16,23,30];
        satarr=[3,10,17,24];
        sunarr=[4,11,18,25];
        
       framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(330,121,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(457,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
           
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
          //  
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
            
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            
            this.checkdays(sunday,sunarr);
        },this);
        
		if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=10;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=348;
            months.y=116;
            months.frame=22;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=34;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=46;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        var whiteNum1= this.add.sprite(415,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"thugrp",4);
        },this);
        
        var whiteNum2= this.add.sprite(515,210,'Level62_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"frigrp",4);
        },this);
        
        var whiteNum3= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",4);
        },this);
        
        var redNum4= this.add.sprite(715,210,'Level62_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            redNum4.inputEnabled=false;
            this.checkAns(redNum4,"sungrp",4);
        },this);
        
        var whiteNum5= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"mongrp",4);
        },this);
        
        var whiteNum6= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"tuegrp",4);
        },this);
        
        var whiteNum7= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"wedgrp",4);
        },this);
        
        var whiteNum8= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"thugrp",4);
        },this);
        
        var whiteNum9= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",4);
        },this);
        
        var whiteNum10= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",4);
        },this);
        
        var redNum11= this.add.sprite(715,260,'Level62_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            redNum11.inputEnabled=false;
            this.checkAns(redNum11,"sungrp",4);
        },this);
        
        var whiteNum12= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        
        var whiteNum13= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        
        var whiteNum14= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        
        var whiteNum15= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"thugrp",4);
        },this);
        
        var whiteNum16= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",4);
        },this);
        
        var whiteNum17= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",4);
        },this);
        
        var redNum18= this.add.sprite(715,310,'Level62_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            redNum18.inputEnabled=false;
            this.checkAns(redNum18,"sungrp",4);
        },this);
        
        var whiteNum19= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        
        var whiteNum20= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        
        var whiteNum21= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        
        
        var whiteNum22= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"thugrp",4);
        },this);
        
        var whiteNum23= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",4);
        },this);
        
        var whiteNum24= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",4);
        },this);
        
        var redNum25= this.add.sprite(715,360,'Level62_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            redNum25.inputEnabled=false;
            this.checkAns(redNum25,"sungrp",4);
        },this);
        
        var whiteNum26= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        
        var whiteNum27= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
        
        var whiteNum28= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
         
        var whiteNum29= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"thugrp",5);
        },this);
        
        var whiteNum30= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            this.checkAns(whiteNum30,"frigrp",5);
        },this);

        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
    },
    
    gotoTwelvethQuestion:function(){
         _this.questionid = 1;
        //december
    	no11++;
        monarr=[3,10,17,24,31];
        tuearr=[4,11,18,25];
        wedarr=[5,12,19,26];
        thuarr=[6,13,20,27];
        friarr=[7,14,21,28];
        satarr=[1,8,15,22,29];
        sunarr=[2,9,16,23,30];
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
  
        backbg = this.add.sprite(70,60,'Level62_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(330,121,'Level62_months');
        months.scale.setTo(1,1.2);
        
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        
        year = this.add.sprite(457,124,'Level62_year');
        year.scale.setTo(1,1);
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        
        monday= this.add.sprite(115,165,'Level62_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        monday.name = "monday";
        monday.events.onInputDown.add(function(){
          //  
            this.checkdays(monday,monarr);
        },this);
        
        tuesday= this.add.sprite(215,165,'Level62_Tuesday');
    	tuesday.scale.setTo(0.95,1);
        tuesday.inputEnabled=true; tuesday.name = "tuesday";
        tuesday.input.useHandCursor = true;
        tuesday.events.onInputDown.add(function(){
         //   
            this.checkdays(tuesday,tuearr);
        },this);
        
        wednesday= this.add.sprite(315,165,'Level62_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;wednesday.name = "wednesday";
        wednesday.input.useHandCursor = true;
        wednesday.events.onInputDown.add(function(){
            
            this.checkdays(wednesday,wedarr);
        },this);
        
        thusday= this.add.sprite(415,165,'Level62_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;thusday.name= "thursday";
        thusday.input.useHandCursor = true;
        thusday.events.onInputDown.add(function(){
            
            this.checkdays(thusday,thuarr);
        },this);
        
        friday= this.add.sprite(515,165,'Level62_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true; friday.name = "friday";
        friday.input.useHandCursor = true;
        friday.events.onInputDown.add(function(){
            
            this.checkdays(friday,friarr);
        },this);
        
        saturday= this.add.sprite(615,165,'Level62_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;saturday.name = "saturday";
        saturday.input.useHandCursor = true;
        saturday.events.onInputDown.add(function(){
            
            this.checkdays(saturday,satarr);
        },this);
        
        sunday= this.add.sprite(715,165,'Level62_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.name="sunday";
        sunday.input.useHandCursor = true;
        sunday.events.onInputDown.add(function(){
            
            this.checkdays(sunday,sunarr);
        },this);
        if(window.languageSelected=="English"){
            months.x=320;
            months.y=118;
            months.frame=11;
            monday.frame=0;
            tuesday.frame=0;
            wednesday.frame=0;
            thusday.frame=0;
            friday.frame=0;
            saturday.frame=0;
            sunday.frame=0;
        }
        else if(window.languageSelected=="Hindi"){
            months.x=345;
            months.y=116;
            months.frame=23;
            monday.frame=1;
            tuesday.frame=1;
            wednesday.frame=1;
            thusday.frame=1;
            friday.frame=1;
            saturday.frame=1;
            sunday.frame=1;
        }
        else if(window.languageSelected=="Kannada"){
            months.x=332;
            months.y=114;
            months.frame=35;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=3;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else{
            months.x=324;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=47;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=2;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }

        whiteNum1= this.add.sprite(615,210,'Level62_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"satgrp",5);
        },this);
        
        redNum2= this.add.sprite(715,210,'Level62_redNum');
    	redNum2.scale.setTo(0.95,1);
        redNum2.frame=2;
        redNum2.inputEnabled=true;
        redNum2.input.useHandCursor = true;
        redNum2.events.onInputDown.add(function(){
            redNum2.inputEnabled=false;
            this.checkAns(redNum2,"sungrp",5);
        },this);
        
        whiteNum3= this.add.sprite(115,260,'Level62_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"mongrp",5);
        },this);
        
        whiteNum4= this.add.sprite(215,260,'Level62_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"tuegrp",4);
        },this);
        
        whiteNum5= this.add.sprite(315,260,'Level62_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"wedgrp",4);
        },this);
        
        whiteNum6= this.add.sprite(415,260,'Level62_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"thugrp",4);
        },this);
        
        whiteNum7= this.add.sprite(515,260,'Level62_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"frigrp",4);
        },this);
        
        whiteNum8= this.add.sprite(615,260,'Level62_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"satgrp",5);
        },this);
        
       redNum9= this.add.sprite(715,260,'Level62_redNum');
    	redNum9.scale.setTo(0.95,1);
        redNum9.frame=9;
        redNum9.inputEnabled=true;
        redNum9.input.useHandCursor = true;
        redNum9.events.onInputDown.add(function(){
            redNum9.inputEnabled=false;
            this.checkAns(redNum9,"sungrp",5);
        },this);
        
        whiteNum10= this.add.sprite(115,310,'Level62_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"mongrp",5);
        },this);
        
        whiteNum11= this.add.sprite(215,310,'Level62_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"tuegrp",4);
        },this);
        
        whiteNum12= this.add.sprite(315,310,'Level62_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"wedgrp",4);
        },this);
        
        whiteNum13= this.add.sprite(415,310,'Level62_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"thugrp",4);
        },this);
        
        whiteNum14= this.add.sprite(515,310,'Level62_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"frigrp",4);
        },this);
        
        whiteNum15= this.add.sprite(615,310,'Level62_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"satgrp",5);
        },this);
        
        redNum16= this.add.sprite(715,310,'Level62_redNum');
    	redNum16.scale.setTo(0.95,1);
        redNum16.frame=16;
        redNum16.inputEnabled=true;
        redNum16.input.useHandCursor = true;
        redNum16.events.onInputDown.add(function(){
            redNum16.inputEnabled=false;
            this.checkAns(redNum16,"sungrp",5);
        },this);
        
        whiteNum17= this.add.sprite(115,360,'Level62_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"mongrp",5);
        },this);
        
        whiteNum18= this.add.sprite(215,360,'Level62_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"tuegrp",4);
        },this);
        
        whiteNum19= this.add.sprite(315,360,'Level62_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"wedgrp",4);
        },this);
        
        whiteNum20= this.add.sprite(415,360,'Level62_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"thugrp",4);
        },this);
        
        whiteNum21= this.add.sprite(515,360,'Level62_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"frigrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(615,360,'Level62_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"satgrp",5);
        },this);
        
        redNum23= this.add.sprite(715,360,'Level62_redNum');
    	redNum23.scale.setTo(0.95,1);
        redNum23.frame=23;
        redNum23.inputEnabled=true;
        redNum23.input.useHandCursor = true;
        redNum23.events.onInputDown.add(function(){
            redNum23.inputEnabled=false;
            this.checkAns(redNum23,"sungrp",5);
        },this);
        
        whiteNum24= this.add.sprite(115,410,'Level62_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"mongrp",5);
        },this);
        
       whiteNum25= this.add.sprite(215,410,'Level62_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"tuegrp",4);
        },this);
        
        whiteNum26= this.add.sprite(315,410,'Level62_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"wedgrp",4);
        },this);
        
        whiteNum27= this.add.sprite(415,410,'Level62_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"thugrp",4);
        },this);
        
        whiteNum28= this.add.sprite(515,410,'Level62_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"frigrp",4);
        },this);
        
        whiteNum29= this.add.sprite(615,410,'Level62_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"satgrp",5);
        },this);
        
        redNum30= this.add.sprite(715,410,'Level62_redNum');
    	redNum30.scale.setTo(0.95,1);
        redNum30.frame=30;
        redNum30.inputEnabled=true;
        redNum30.input.useHandCursor = true;
        redNum30.events.onInputDown.add(function(){
            redNum30.inputEnabled=false;
            this.checkAns(redNum30,"sungrp",5);
        },this);
        
        whiteNum31= this.add.sprite(115,210,'Level62_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            this.checkAns(whiteNum31,"mongrp",5);
        },this);
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(redNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(redNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(redNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(redNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(redNum30);    
        flagGroup1.add(whiteNum31);
    },

    
	removeCelebration:function()
	{
        //console.log("index"+voices[0]);
        //console.log("index"+voices);
         var index = voices.indexOf(voices[0]);   
        if (index > -1) {
                voices.splice(index, 1);
            }
        //console.log("index"+voices[0]);
        //console.log("index"+voices);
		celebration = false;

       /* if(circleanim)
        {
            circleanim.forEach(function(element) {

                console.log(element);
                element.destroy();
            });
        }*/


       
        if(no11<5)
			{

					commonNavBar.stopTimer();
                starsGroup.getChildAt(count1+1).frame = 2; 
                count1++;
                this.time.events.add(1000,function(){

                    for(var i =0;i<circleanimArrpush.length;i++)
                        {
                            console.log("@@@ "+circleanimArrpush[0]);
                            circleanimArrpush[i].destroy();
                        }


                    flagGroup1.destroy();
                    this.getQuestion();
                },this);
			}
			else
			{
                this.time.events.add(1000,function(){
                    flagGroup1.destroy();

                    for(var i =0;i<circleanimArrpush.length;i++)
                        {
                            console.log("@@@ "+circleanimArrpush[0]);
                            circleanimArrpush[i].destroy();
                        }
                        
					commonNavBar.stopTimer();
                    commonNavBar.stopVoice();
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

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('measurement3',true,false);
        
    },

    generateStarsForScoreScene:function(game,count)
    {
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
                commonNavBar.backbtn=null;
                commonNavBar.navBar=null;
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('time_MTG_2_3level1',true,false);
        }, this);
    },

	correctAns:function(target)
	{
        this.Stararr.push(3);
        commonNavBar.stopTimer();
					
				/*_this.currentTime = window.timeSaveFunc();
						var saveAsment = 
						{ 
							id_game_play: _this.savedVar,
							id_question: _this.questionid,  
							pass: "Yes",
							time2answer: AnsTimerCount,
							attempts: noofAttempts,
							date_time_submission: _this.currentTime, 
							access_token: window.acctkn 
						}*/
				
				//absdsjsapi.saveAssessment(saveAsment);

                //telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
        
        _this.speakerbtn.inputEnabled=false;
		celebration = true;
        commonNavBar.playClickSound();
     	commonNavBar.playCelebrationSound();

        

        var starAnim =  starsGroup.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();  
        this.time.events.add(500,function(){
            this.removeCelebration();
        },this);
        //this.input.enabled=false;
        target.destroy();
	},

    wrongAns:function(target)
	{
		shake.shake(10, target);
        starsGroup.getChildAt(count1).frame = 1;
        this.Stararr.push(1);
       commonNavBar.playClickSound();
		commonNavBar.playWrongCelebrationSound();
        flagGroup1.forEach(function (c) { c.inputEnabled=false; });
        target.events.onInputDown.removeAll();
        this.time.events.add(10, this.removeCelebration, this);
	},
    
   checkAns:function(target,group,len)
    {
        
        noofAttempts++;
       // var currentTime = window.timeSaveFunc();
			/*var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: "Level62_"+target.frame, 
				access_token: window.acctkn 
			} */
			
			//absdsjsapi.saveInteractEvent(interactEvent);
        
       commonNavBar.playClickSound();
      //  circleanim=new Array();
        switch(voices[0])
        {
            case "Monday" : if(group=="mongrp")
                            { 
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                circleanimArrpush.push(circleanim);
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;                                   
                                    this.correctAns();                                   
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;
            case "Tuesday" :if(group=="tuegrp")
                            {
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                circleanimArrpush.push(circleanim);
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;
          case "Wednesday" :if(group=="wedgrp")
                            {
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                circleanimArrpush.push(circleanim);
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;
            case "Thursday" :if(group=="thugrp")
                             {
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                circleanimArrpush.push(circleanim);
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;
            case "Friday" : if(group=="frigrp")
                            {
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 

                                circleanimArrpush.push(circleanim);
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;
            /*case "Saturday" :if(group=="satgrp")
                             {
                                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                             else
                             {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                             }
                            break;
            case "Sunday" : if(group=="sungrp")
                            {
                                circleanim=this.add.sprite(0, 0, 'Level62_g4','Symbol 1 copy 14 instance 10000');
                                circleanim.scale.setTo(0.74,0.85);
                                circleanim.x=target.x+28;//140;
                                circleanim.y=target.y+3;//215+(dayflag*50);
                                circleanim.smoothed = true;
                                var circleanim1=circleanim.animations.add('anim31');
                                circleanim1.play(10,false); 
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wrongAns(target);
                            }
                            break;*/
            
        }
        target.events.onInputDown.removeAll();
        
    },
    
    checkdays:function(target,dayarray){
        
         noofAttempts++;
       // var currentTime = window.timeSaveFunc();
		/*	var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: "Level62_"+target.name, 
				access_token: window.acctkn 
			} */
			
			//absdsjsapi.saveInteractEvent(interactEvent);
            
        target.inputEnabled=false;
       commonNavBar.playClickSound();
      
        if(dayarray.indexOf(Number(voices[0])) > -1)
        {
            if(target.name=="sunday")
                circleanim=this.add.sprite(0, 0, 'Level62_g4','Symbol 1 copy 14 instance 10000');
            else
                circleanim=this.add.sprite(0, 0, 'Level62_g3','Symbol 1 copy 14 instance 10000');
            circleanim.width+=50;
            circleanim.x=target.x-5;
            circleanim.y=target.y-5;
            circleanim.smoothed = true;
            var circleanim1=circleanim.animations.add('anim31');
            circleanim1.play(10,false); 

            circleanimArrpush.push(circleanim);

            this.correctAns();
        }
        else
        {
            target.inputEnabled=true;
            this.wrongAns(target);
        }
         target.events.onInputDown.removeAll();
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
	
    getVoice:function(voice){
        this.stopVoice();
        
         _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
         switch(voice)
        {
            case  'Monday': if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/mondays.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/mondays.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/mondays.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_9.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case 'Tuesday':if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/tuesdays.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/tuesdays.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/tuesdays.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_11.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case 'Wednesday':if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/wednesdays.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/wednesdays.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/wednesdays.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_10.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case 'Thursday':if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/thursdays.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/thursdays.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/thursdays.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_7.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            
            case 'Friday':if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/fridays.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/fridays.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/fridays.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_8.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            /*case 'Saturday':if(selctedLang.selectedlanguage=="English")
                                Eng_saturdays.play();
                            else if(selctedLang.selectedlanguage=="Hindi")
                                Hin_saturdays.play();
                            else
                                Kan_saturdays.play();
                            break;
            
            case 'Sunday':if(selctedLang.selectedlanguage=="English")
                                Eng_sundays.play();
                            else if(selctedLang.selectedlanguage=="Hindi")
                                Hin_sundays.play();
                            else
                                Kan_sundays.play();
                            break;*/
                
            case "1":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/1.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/1.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/1.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_3.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            
            case "10":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/10.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/10.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/10.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_2.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case "12":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/12.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/12.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/12.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_4.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case "16":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/16.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/16.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            { 
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/16.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_1.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case "18":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/18.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/18.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/18.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_6.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case "27":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/English/27.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Hindi/27.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Kannada/27.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_5.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
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
                 //console.log("stop"); 
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
         no22= null;
         no11= null;
         qArrays= null;
         voices= null;
         anim11= null;
         count= null;
         count1= null;
         months= null;
         celebration= null;
         monthJan= null;
         flagGroup1= null;
         backbg= null;
         monday= null;
         val= null;
         anim1= null;
         anim2= null;
         framesChange= null;
         dayflag= null;
         voice= null;
         groupcir= null;
         monarr= null;
         tuearr= null;
         wedarr= null;
         thurarr= null;
         friarr= null;
         satarr= null;
         sunarr= null;
         circleanim= null;

         window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
            localStorage.setItem(window.avatarName+"time_MTG_2_3state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
            localStorage.setItem(window.avatarName+"time_MTG_2_3state", "fullycomplete");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }

    }

};



        
        
        
        
        