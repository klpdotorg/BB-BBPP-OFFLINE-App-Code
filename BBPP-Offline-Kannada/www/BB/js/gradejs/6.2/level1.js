Game.grade6_2level1=function(){};
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

Game.grade6_2level1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "6.2A";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid,
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("time6_2",gradeSelected);

    },

    preload:function(game){
        if(!window.grade2MT2){

            window.grade2MT2 = true;

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

        this.load.image('Level62_bg2',window.baseUrl+'assets/gradeAssets/6.2/bg2.png');

        this.load.atlas('Level62_c1',window.baseUrl+'assets/gradeAssets/6.2/c1.png',window.baseUrl+'json/gradeJson/6.2/c1.json');
        this.load.atlas('Level62_redNum', window.baseUrl+'assets/gradeAssets/6.2/redNum.png', window.baseUrl+'json/gradeJson/6.2/redNum.json');
        this.load.atlas('Level62_whiteNum', window.baseUrl+'assets/gradeAssets/6.2/whiteNum.png', window.baseUrl+'json/gradeJson/6.2/whiteNum.json');
        
        //this.load.atlas('Level62_months', window.baseUrl+'assets/gradeAssets/6.2/months.png', window.baseUrl+'json/gradeJson/6.2/months.json'); 
        //this.load.atlas('Level62_months',window.baseUrl+'assets/newAssets/months.png',window.baseUrl+'assets/newAssets/months.json'); 
if(window.languageSelected == "Marathi" || window.languageSelected == "Telugu" || window.languageSelected == "Tamil" || window.languageSelected == "Urdu")
			this.load.atlas('Level62_months',window.baseUrl+'assets/newAssets/monthname.png' ,window.baseUrl+'assets/newAssets/monthname.json');
		else
			this.load.atlas('Level62_months',window.baseUrl+'assets/newAssets/monthname1.png', window.baseUrl+'assets/newAssets/monthname1.json');		
         
        
        this.load.image('Level62_year', window.baseUrl+'assets/gradeAssets/6.2/year.png');
        
        
        /*this.load.atlas('Level62_monday',window.baseUrl+'assets/gradeAssets/6.2/monday.png',window.baseUrl+'json/gradeJson/6.2/monday.json');
        this.load.atlas('Level62_tuesday',window.baseUrl+'assets/gradeAssets/6.2/tuesday.png',window.baseUrl+'json/gradeJson/6.2/tuesday.json');
        this.load.atlas('Level62_wednesday',window.baseUrl+'assets/gradeAssets/6.2/wednesday.png',window.baseUrl+'json/gradeJson/6.2/wednesday.json');
        this.load.atlas('Level62_thusday',window.baseUrl+'assets/gradeAssets/6.2/thursday.png',window.baseUrl+'json/gradeJson/6.2/thursday.json');
        this.load.atlas('Level62_friday',window.baseUrl+'assets/gradeAssets/6.2/friday.png',window.baseUrl+'json/gradeJson/6.2/friday.json');
        this.load.atlas('Level62_saturday',window.baseUrl+'assets/gradeAssets/6.2/saturday.png',window.baseUrl+'json/gradeJson/6.2/saturday.json');
        this.load.atlas('Level62_sunday',window.baseUrl+'assets/gradeAssets/6.2/sunday.png',window.baseUrl+'json/gradeJson/6.2/sunday.json');*/

        this.load.atlas('Level62_monday',window.baseUrl+'assets/newAssets/1.png',window.baseUrl+'assets/newAssets/1.json');
        this.load.atlas('Level62_tuesday',window.baseUrl+'assets/newAssets/2.png',window.baseUrl+'assets/newAssets/2.json');
        if(window.languageSelected == "Tamil")
			this.load.atlas('Level62_wednesday',window.baseUrl+'assets/newAssets/3_1.png',window.baseUrl+'assets/newAssets/3_1.json');
		else 
			this.load.atlas('Level62_wednesday',window.baseUrl+'assets/newAssets/3.png',window.baseUrl+'assets/newAssets/3.json');
        this.load.atlas('Level62_thusday',window.baseUrl+'assets/newAssets/4.png',window.baseUrl+'assets/newAssets/4.json');
        this.load.atlas('Level62_friday',window.baseUrl+'assets/newAssets/5.png',window.baseUrl+'assets/newAssets/5.json');
        this.load.atlas('Level62_saturday',window.baseUrl+'assets/newAssets/6.png',window.baseUrl+'assets/newAssets/6.json');
        this.load.atlas('Level62_sunday',window.baseUrl+'assets/newAssets/7.png',window.baseUrl+'assets/newAssets/7.json');

        this.load.atlas('anim1', window.baseUrl+'assets/gradeAssets/6.2/anim1.png', window.baseUrl+'json/gradeJson/6.2/anim1.json');
        this.load.atlas('anim2', window.baseUrl+'assets/gradeAssets/6.2/anim2.png', window.baseUrl+'json/gradeJson/6.2/anim2.json');
        this.load.atlas('Level62_g3',window.baseUrl+'assets/gradeAssets/6.2/g3.png',window.baseUrl+'json/gradeJson/6.2/g3.json');
        this.load.atlas('Level62_g4',window.baseUrl+'assets/gradeAssets/6.2/g4.png',window.baseUrl+'json/gradeJson/6.2/g4.json');
        

    }

    },

    
    create:function(game){
        
        _this.amplify = null;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        
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
        count1=0;
        celebration= false;
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        // qArrays = [3];
        voices=new Array();
        //voices=["Monday","tuesday","Wednesday","Thursday","Friday","16","10","1","12","27","18"];

        if(window.languageSelected == "Gujarati")
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","12","18"];
		else if(window.languageSelected == "Marathi")
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","12","16","18"];
		else if(window.languageSelected == "Telugu")
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","12","16","18"];
		else if(window.languageSelected == "Tamil")
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","12","16","18"];
		else if(window.languageSelected == "Urdu")
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","12","16","18"];
        else
            voices=["Monday","tuesday","Wednesday","Thursday","Friday","16","10","1","12","27","18"];

        correctgrp=this.add.group();
        
        qArrays = this.shuffle(qArrays);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        background = this.add.tileSprite(0,-2,this.world.width,this.world.height, 'Level62_bg2');
        
        _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
        
        //background.scale.setTo(1.05,1.12);
         _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
           // _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           this.getVoice(voices[0]);
            
        },_this);
        
         _this.timebg=this.add.sprite(305,6,'Level42B_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';
            
        this.generateStarsForTheScene(6);
        
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
    

    getQuestion:function()
    {
        noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

        timer = this.time.create(false);

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
        _this.timer1.start();
  
        //this.input.enabled=true;
        voices=this.shuffle(voices);
        //console.log("voice"+voices[0]);
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        this.getVoice(voices[0]);
        /*_this.speakerbtn.events.onInputDown.add(function(){
            this.getVoice(voices[0]);
        },this);*/
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
    
            starsGroup.create(this.world.centerX-15, 10, 'starAnim1');
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
        
        // year = this.add.sprite(446,124,'Level62_year');
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            // months.x=320;
            months.x=330;
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
            // months.x=332;
            months.x=342;
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
            // months.x=332;
            months.x=342;
            months.y=114;
            months.frame=24;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            // months.x=324;
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=36;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=48;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=60;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=72;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=84;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            // months.x=324;
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=48;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        // year = this.add.sprite(451,124,'Level62_year');
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=330;
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
            months.x=346;
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
            months.x=342;
            months.y=114;
            months.frame=25;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=364;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=37;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=49;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=61;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=73;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=85;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=49;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        // year = this.add.sprite(446,124,'Level62_year');
        year = this.add.sprite(505,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=340;
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
            months.x=366;
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
            months.x=352;
            months.y=114;
            months.frame=26;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=388;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=38;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=50;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=60;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=72;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=84;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=50;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
        }

        var whiteNum1= this.add.sprite(415,210,'Level62_whiteNum');
        whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"thugrp",5);
        },this);
        
        var whiteNum2= this.add.sprite(515,210,'Level62_whiteNum');
        whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"frigrp",5);
        },this);
        
        var whiteNum3= this.add.sprite(615,210,'Level62_whiteNum');
        whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",5);
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
            this.checkAns(whiteNum8,"thugrp",5);
        },this);
        
        var whiteNum9= this.add.sprite(515,260,'Level62_whiteNum');
        whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",5);
        },this);
        
        var whiteNum10= this.add.sprite(615,260,'Level62_whiteNum');
        whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",5);
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
            this.checkAns(whiteNum15,"thugrp",5);
        },this);
        
        var whiteNum16= this.add.sprite(515,310,'Level62_whiteNum');
        whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",5);
        },this);
        
        var whiteNum17= this.add.sprite(615,310,'Level62_whiteNum');
        whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",5);
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
            this.checkAns(whiteNum22,"thugrp",5);
        },this);
        
        var whiteNum23= this.add.sprite(515,360,'Level62_whiteNum');
        whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",5);
        },this);
        
        var whiteNum24= this.add.sprite(615,360,'Level62_whiteNum');
        whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",5);
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
        
        year = this.add.sprite(505,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=355;
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
            months.x=363;
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
            months.x=358;
            months.y=114;
            months.frame=27;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=384;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=39;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=51;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=63;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=75;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=87;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=51;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(505,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=360;
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
            months.x=375;
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
            months.x=370;
            months.y=114;
            months.frame=28;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=390;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=40;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=52;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=64;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=76;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=88;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=52;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=355;
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
            months.x=375;
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
            months.x=360;
            months.y=114;
            months.frame=29;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=394;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=41;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=53;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=65;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=77;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=89;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=53;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(505,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=360;
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
            months.x=355;
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
            months.x=350;
            months.y=114;
            months.frame=30;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=381;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=42;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=54;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=66;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=78;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=90;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=54;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=340;
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
            months.x=355;
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
            months.x=355;
            months.y=114;
            months.frame=31;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=384;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=43;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=5;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=67;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=79;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=91;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=55;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=340;
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
            months.x=342;
            months.y=114;
            months.frame=32;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=364;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=44;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=56;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=68;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=80;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=92;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=56;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=340;
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
            months.x=350;
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
            months.x=335;
            months.y=114;
            months.frame=33;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=368;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=45;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=57;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=69;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=81;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=93;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=57;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=340;
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
            months.x=360;
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
            months.x=342;
            months.y=114;
            months.frame=34;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=368;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=46;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=58;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=70;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=82;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=94;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=58;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
        }

        var whiteNum1= this.add.sprite(415,210,'Level62_whiteNum');
        whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            this.checkAns(whiteNum1,"thugrp",5);
        },this);
        
        var whiteNum2= this.add.sprite(515,210,'Level62_whiteNum');
        whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            this.checkAns(whiteNum2,"frigrp",5);
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
            this.checkAns(whiteNum8,"thugrp",5);
        },this);
        
        var whiteNum9= this.add.sprite(515,260,'Level62_whiteNum');
        whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",5);
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
            this.checkAns(whiteNum15,"thugrp",5);
        },this);
        
        var whiteNum16= this.add.sprite(515,310,'Level62_whiteNum');
        whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",5);
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
            this.checkAns(whiteNum22,"thugrp",5);
        },this);
        
        var whiteNum23= this.add.sprite(515,360,'Level62_whiteNum');
        whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",5);
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
        
        year = this.add.sprite(500,125,'Level62_year');
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
        
        tuesday= this.add.sprite(215,165,'Level62_tuesday');
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
            months.x=330;
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
            months.x=355;
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
            months.x=342;
            months.y=114;
            months.frame=35;
            monday.frame=2;
            tuesday.frame=2;
            wednesday.frame=2;
            thusday.frame=2;
            friday.frame=2;
            saturday.frame=2;
            sunday.frame=2;
        }
        else if(window.languageSelected=="Odiya"){
            months.x=368;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=47;
            monday.frame=3;
            tuesday.frame=3;
            wednesday.frame=3;
            thusday.frame=3;
            friday.frame=3;
            saturday.frame=3;
            sunday.frame=3;
        }
		else if(window.languageSelected=="Tamil"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=59;
            monday.frame=5;
            tuesday.frame=5;
            wednesday.frame=5;
            thusday.frame=5;
            friday.frame=5;
            saturday.frame=5;
            sunday.frame=5;
        }
		else if(window.languageSelected=="Marathi"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=71;
            monday.frame=6;
            tuesday.frame=6;
            wednesday.frame=5;
            thusday.frame=6;
            friday.frame=6;
            saturday.frame=6;
            sunday.frame=6;
        }
		else if(window.languageSelected=="Telugu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=83;
            monday.frame=7;
            tuesday.frame=7;
            wednesday.frame=6;
            thusday.frame=7;
            friday.frame=7;
            saturday.frame=7;
            sunday.frame=7;
        }
		else if(window.languageSelected=="Urdu"){
            months.x=367;
            months.y=118;
            months.scale.setTo(1,1);
            months.frame=95;
            monday.frame=8;
            tuesday.frame=8;
            wednesday.frame=7;
            thusday.frame=8;
            friday.frame=8;
            saturday.frame=8;
            sunday.frame=8;
        }
        else{
            months.x=367;
            months.y=117;
            months.scale.setTo(1,1);
            months.frame=59;
            monday.frame=4;
            tuesday.frame=4;
            wednesday.frame=4;
            thusday.frame=4;
            friday.frame=4;
            saturday.frame=4;
            sunday.frame=4;
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
        count1++;
        if(no11<6)
            {

                    _this.timer1.stop();
                this.time.events.add(1000,function(){
                    flagGroup1.destroy();
                    this.getQuestion();
                },this);
            }
            else
            {
                this.time.events.add(1000,function(){

                    _this.timer1.stop();
                    _this.timer1 = null;
                    this.state.start('grade6_2Score');
                },this);    
            }

    },

    correctAns:function()
    {
        if(timer)
                    {
                        timer.stop();
                        timer = null; 
                    }
                    
                _this.currentTime = window.timeSaveFunc();
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
                
                //absdsjsapi.saveAssessment(saveAsment);

                telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
        
        _this.speakerbtn.inputEnabled=false;
        celebration = true;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        _this.cmusic = this.add.audio('celebr');
        _this.cmusic.play();

        this.time.events.add(1500,function(){
            this.removeCelebration();
        },this);

        var starAnim = starsGroup.getChildAt(count1);
        //console.log(starAnim);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();  
        
        //this.input.enabled=false;
    },

    wrongAns:function(target)
    {
        shake.shake(10, target);
       _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.wmusic = this.add.audio('waudio');
        _this.wmusic.play();
        target.events.onInputDown.removeAll();
    },
    
   checkAns:function(target,group,len)
    {
        
        noofAttempts++;
       // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level62_"+target.frame, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
        
       _this.clickSound = _this.add.audio('ClickSound');
       _this.clickSound.play();
        var circleanim=new Array();
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
            case "tuesday" :if(group=="tuegrp")
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
          case "Wednesday" :if(group=="wedgrp")
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
            case "Thursday" :if(group=="thugrp")
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
            case "Friday" : if(group=="frigrp")
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
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level62_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
        target.inputEnabled=false;
       _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        var circleanim;
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/mondays.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/mondays.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/mondays.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/mondays.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/mondays.mp3");
                      } 
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Odiya/6.2_9.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                
            case 'tuesday':if(window.languageSelected == "English")
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/tuesdays.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/tuesdays.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/tuesdays.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/tuesdays.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/tuesdays.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/wednesdays.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/wednesdays.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/wednesdays.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/wednesdays.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/wednesdays.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/thursdays.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/thursdays.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/thursdays.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/thursdays.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/thursdays.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/fridays.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/fridays.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/fridays.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/fridays.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/fridays.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/1.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/1.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/1.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/1.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/1.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/10.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/10.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/10.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/10.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/10.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/12.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/12.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/12.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/12.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/12.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/16.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/16.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/16.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/16.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/16.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/18.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/18.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/18.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/18.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/18.mp3");
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
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/6.2/27.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Marathi/27.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Telugu/27.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Tamil/27.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/6.2/Urdu/27.mp3");
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

    }

};



        
        
        
        
        