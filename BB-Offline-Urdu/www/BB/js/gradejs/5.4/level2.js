Game.grade5_4level2=function(){};

var background;

var slno;
var score = 0;
var slidearray=new Array();
var sortArr=new Array();
var sortArr1=new Array();
var correctflag=0;
var correctflag2=0;
var selmonth=new Array();
var randomslno=0;
var status="before";
var chkflag=0,chkflag1=0;

var starsGroup;
var count;
var groupmonth;
var randommonth;
var selectedarray;
var displmonth;
var blankarray;
var blankbox;
var group2;

var sortedArray;

var slidegroup;


var glow;
var midmonth;

var chknumb;

var timer;
var noofAttempts;
var AnsTimerCount;
var gameid;
var groupmonthname;

Game.grade5_4level2.prototype={
    init:function(game)
    {
        _this = this;
        _this.gameid = "5.4";
        _this.clickSound = _this.add.audio('ClickSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        _this.snapSound = _this.add.audio('snapSound');
        
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/


        telInitializer.gameIdInit("time5_4",gradeSelected);
        
    },
	create:function(game){

        _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;


        noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount=1;
        slno=0;
        count=0;

         score = 0;
         slidearray=new Array();
         sortArr=new Array();
         sortArr1=new Array();
         correctflag=0;
         correctflag2=0;
         selmonth=new Array();
         randomslno=0;
         status="before";
         chkflag=0;
         chkflag1=0;


        slidearray=[1,2,3,4,5,6];
        slidearray = this.shuffle(slidearray);		
        chknumb=new Array();
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();
		
        background = this.add.tileSprite(0,-10,this.world.width,this.world.height-50, 'Level54_bg54');
        background.scale.setTo(1.05,1.12);

        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);

        this.generateStarsForTheScene(6);
        
        _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            _this.backbtn.events.onInputDown.removeAll();
            //_this.stopVoice();
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false);
          //  _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

        _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');

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
        
        this.getslides(); 
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
        starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(_this.world.centerX-15, 12, 'starAnim1');
            
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
    
    getslides:function()
	{
        noofAttempts = 0;
        AnsTimerCount=0;
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;

       if(timer)
                    {
                        timer.stop();
                       timer = null; 
                    }
                if(_this.timer1)
                    {
                        _this.timer1.stop();
                       _this.timer1 = null; 
                    }

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
        
        _this.stopVoice();
        status="before";
       
		switch(slidearray[slno])
		{
			case 1: 
            case 2: 
            case 3:
            case 4:
            case 5:
            case 6:this.slide1(); break;
        }
    },
    
    slide1:function()
    {
        slidegroup=this.add.group();
        sl1no++;
        blankarray=new Array();    
        groupmonth=new Array();
        blankbox=new Array();
        randommonth=new Array();
        displmonth=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        sortArr1=new Array();
        groupmonthname=new Array();
        
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[0].alpha=0;blankbox[0].name="month1";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[1].alpha=0;blankbox[1].name="month2";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[2].alpha=0;blankbox[2].name="month3";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[3].alpha=0;blankbox[3].name="month4";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[4].alpha=0;blankbox[4].name="month5";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[5].alpha=0;blankbox[5].name="month6";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[6].alpha=0;blankbox[6].name="month7";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[7].alpha=0;blankbox[7].name="month8";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[8].alpha=0;blankbox[8].name="month9";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[9].alpha=0;blankbox[9].name="month10";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[10].alpha=0;blankbox[10].name="month11";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[11].alpha=0;blankbox[11].name="month12";

        
        
        groupmonth.push(this.add.sprite(60,400,'Level54_JAN2'));groupmonth[0].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10024'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10012'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10036'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10048'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10060'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10072'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10084'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10048'));

        groupmonthname[0].alpha=1;groupmonthname[0].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(130,420,'Level54_FEB2'));groupmonth[1].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10001'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10025'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10013'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10037'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10049'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10061'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10073'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10085'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10049'));

        groupmonthname[1].alpha=1;groupmonthname[1].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(190,400,'Level54_MAR2'));groupmonth[2].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10002'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10026'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10014'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10038'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10050'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10062'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10074'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10086'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10050'));

        groupmonthname[2].alpha=1;groupmonthname[2].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(260,420,'Level54_APR2'));groupmonth[3].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10003'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10027'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10015'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10039'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10051'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10063'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10075'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10087'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10051'));

        groupmonthname[3].alpha=1;groupmonthname[3].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(325,400,'Level54_MAY2'));groupmonth[4].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10004'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10028'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10016'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10040'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10052'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10064'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10076'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10088'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10052'));

        groupmonthname[4].alpha=1;groupmonthname[4].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(395,420,'Level54_JUNE2'));groupmonth[5].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10005'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10029'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10017'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10041'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10053'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10065'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10077'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10089'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10053'));

        groupmonthname[5].alpha=1;groupmonthname[5].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(455,400,'Level54_JULY2'));groupmonth[6].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10006'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10030'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10018'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10042'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10054'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10066'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10078'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10090'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10054'));

        groupmonthname[6].alpha=1;groupmonthname[6].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(525,420,'Level54_AUG2'));groupmonth[7].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10007'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10031'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10019'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10043'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10055'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10067'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10079'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10091'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10055'));

        groupmonthname[7].alpha=1;groupmonthname[7].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(585,400,'Level54_SEP2'));groupmonth[8].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10008'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10032'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10020'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10044'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10056'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10068'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10080'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10092'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10056'));

        groupmonthname[8].alpha=1;groupmonthname[8].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(655,420,'Level54_OCT2'));groupmonth[9].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10009'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10033'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10021'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10045'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10057'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10069'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10081'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10093'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10057'));

        groupmonthname[9].alpha=1;groupmonthname[9].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(715,400,'Level54_NOV2'));groupmonth[10].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10010'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10034'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10022'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10046'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10058'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10070'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10082'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10094'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10058'));

        groupmonthname[10].alpha=1;groupmonthname[10].scale.setTo(1.45,1.45);

        groupmonth.push(this.add.sprite(790,420,'Level54_DEC2'));groupmonth[11].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10011'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10035'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10023'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10047'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10059'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10071'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10083'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10095'));
        else
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10059'));
        
        groupmonthname[11].alpha=1;groupmonthname[11].scale.setTo(1.45,1.45);
        
        for(var k=0;k<12;k++){
           randommonth.push(groupmonth[k]); 
           groupmonth[k].addChild(groupmonthname[k]);
        }
        randommonth=Object.keys(randommonth);
        randommonth=this.shuffle(randommonth);
        
        displmonth=this.fetchrandom(randommonth);
        
        if(chknumb.indexOf(displmonth[0]) > -1 && chkflag<=30)
        {
            chkflag++;
            //console.log("already exists"+displmonth[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupmonth.length;j++)
            {
                groupmonth[j].destroy();     
            }
          
            randommonth=[];
            slidegroup.destroy();
            status="before";
            sl1no--;
           
           this.getslides();
        }
        else if((displmonth[0]==0 || displmonth[0]==11) && chkflag1<=30)
        {
            chkflag1++;
            //console.log("dont repeat"+displmonth[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupmonth.length;j++)
            {
                groupmonth[j].destroy();     
            }
          
            randommonth=[];
            slidegroup.destroy();
            status="before";
            sl1no--;
           
           this.getslides();
        }
        else
        {
            //console.log("not exists"+displmonth[0]);
            chknumb.push(displmonth[0]);
            randomslno++;
            if(displmonth[0]!=0 && displmonth[0]<=10)//jan feb mar// feb marc apr//marc apr may//apr may june//may june july//jhune jul aug
                //jul aug sep //aug sep oct// sep oct nov//oct nov dec
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])-1);
            }
            else if(displmonth[0]==11)//oct nov dec
            {
                displmonth.push(Number(displmonth[0])-1);
                displmonth.push(Number(displmonth[0])-2);
            }
            else if(displmonth[0]==0)//jn feb marc
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])+2);
            }
            displmonth.sort(function(a, b){return a-b});
            group2=this.add.group();
          
            for(var i=0;i<displmonth.length;i++)
            { 
                blankarray.push(blankbox[displmonth[i]]);
                if(i==2)
                {
                    selmonth.push(((blankarray[i].name).substring(5)-1));

                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr1.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));
                        sortArr1[j].x=210+(366*j);
                        sortArr1[j].y=105;
                        sortArr1[j].alpha=1;
                        sortArr1[j].scale.setTo(0.97,0.95);
                        slidegroup.add(sortArr1[j]);
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='month'+(selmonth[j]);
                        sortArr[j].x=232+(366*j);
                        sortArr[j].y=115;
                        sortArr[j].alpha=1;
                        sortArr[j].scale.setTo(0.45,0.45);
                        group2.add(sortArr[j]);
                    }
                }
            
                slidegroup.add(group2);
                if(i==1)
                {
                    groupmonth[displmonth[i]].x=208+(183*i);
                    groupmonth[displmonth[i]].y=100;
                    groupmonth[displmonth[i]].name="month"+displmonth[i];
                    midmonth=groupmonth[displmonth[i]].name;
                    groupmonth[displmonth[i]].alpha=1;
                    groupmonth[displmonth[i]].inputEnabled=false;
                }
                else
                {      
                    selmonth.push(((blankarray[i].name).substring(5)-1));
                    groupmonth[displmonth[i]].x=505-(100*i);
                    groupmonth[displmonth[i]].y=300;
                    groupmonth[displmonth[i]].alpha=1;
                    groupmonth[displmonth[i]].name="month"+displmonth[i];
                    groupmonth[displmonth[i]].inputEnabled = true;
                    groupmonth[displmonth[i]].input.useHandCursor = true;
                    groupmonth[displmonth[i]].input.enableDrag(true);
                    groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
                    groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
                }
                slidegroup.add(groupmonth[displmonth[i]]);
             }

           this.getVoice(midmonth,status);
           _this.speakerbtn.events.onInputDown.add(function(){
                //_this.stopVoice();
                _this.clickSound.play();
                this.getVoice(midmonth,status);
            },this);
           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
  
    fetchrandom: function(array){
         var count=0;
         for (var i=0;i<array.length;i++){
            
             if(array[i]!="undefined")
             { 
                selectedarray.push(array[i]); 
                 count++;
                if(count == 1){
                    return selectedarray;
                }
             } 
         }    
         
     },
    onDragStart:function(target)
	    {
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level54_"+target.name, 
                access_token: window.acctkn 
            } 
            
           // absdsjsapi.saveInteractEvent(interactEvent);
            _this.clickSound.play();
            target.width-=12;
            target.bringToTop(group2);
        },
        onDragStop:function(target)
	    {
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop",
                res_id: "Level54_"+target.name, 
                access_token: window.acctkn
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            target.width+=12;
            _this.snapSound.play();    
            for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {           
                        noofAttempts++;
                        if(target.name==group2.getChildAt(h).name )
                        {
                            if(h==1 && status=="before")
                            {
                                _this.wmusic.play();
                                shake.shake(10,target);
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=505-(100*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                status="after";
                                correctflag++;
                                if(correctflag==1)
                                    this.getVoice(midmonth,status);
                                target.x=Number(group2.getChildAt(h).x)-24;
                                target.y=Number(group2.getChildAt(h).y)-15;
                                target.inputEnabled=false;
                            }   
                            break;
                        }
                        else
                        {
                            _this.wmusic.play();
                            shake.shake(10,target);
                            if(target==groupmonth[displmonth[0]])
                            {
                                target.x=505-(100*0);
                                target.y=300;
                            }
                            else if(target==groupmonth[displmonth[1]])
                            {
                                target.x=505+(100*1);
                                target.y=300;
                            }
                            else if(target==groupmonth[displmonth[2]])
                            {
                                target.x=505-(100*2);
                                target.y=300;
                            }
                            break;
                        }
                    }
                }
            if(correctflag==2)
            {
                _this.cmusic.play();
                correctflag=0;
                this.correctans(target);  
            }
        },     
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    
    correctans:function(target)
    {
        if(timer)
                    {
                        timer.stop();
                       timer = null; 
                    }
                if(_this.timer1)
                    {
                        _this.timer1.stop();
                       _this.timer1 = null; 
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
                
              //  absdsjsapi.saveAssessment(saveAsment);


        telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

        glow=this.add.sprite(0,0,'Level54_glow');
        glow.height-=55;
        glow.alpha=0;
        _this.speakerbtn.inputEnabled=false;
        _this.clickSound.play();
        _this.cmusic.play();
        var starAnim = starsGroup.getChildAt(count);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count++;
        var tweendown = this.add.tween(slidegroup);
        tweendown.to({ y: 100}, 0, 'Linear', true, 0);
        tweendown.onComplete.add(function(){
                this.addGlowToSprite();
        },this);
        this.time.events.add(3000,function(){
            glow.destroy();
            var tween = this.add.tween(slidegroup);
            tween.to({ x: -1000}, 0, 'Linear', true, 0);
            tween.onComplete.add(function(){
            if(count<6){  
                _this.sceneCount++;
                this.getslides();
            }
            else
            {
                //_this.stopVoice();
                randomslno=0;
                chkflag=0;
                chkflag1=0;
                chknumb=new Array();
                this.state.start('grade5_4Score');
            }
        },this);
      },this);
    },
    
    update:function(){
       
    },
    
    getVoice:function(midmonth,status){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
       
        switch(midmonth)
            {
              case 'month0':
                            if(window.languageSelected == "English")
                            {
                                if(status=="before"){
                                    _this.questionid = 3;
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_3.mp3");
                                }    
                                else{
                                    _this.questionid = 2;
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_2.mp3");
                                }
                                    
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_2.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_2.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_2.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_3.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_2.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_3.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_2.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_3.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_2.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_3.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_2.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_2.mp3");
                                        } 
                            }
                            break;
                case 'month1':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_4.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_4.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_4.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_4.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_5.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_4.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_5.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_4.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_5.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_4.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_5.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_4.mp3");
                      } 
                             else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_4.mp3");
                                        } 
                            }
                            break;
                case 'month2':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 7;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = 6;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_6.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 7;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = 6;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_6.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 7;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = 6;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_6.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_6.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_7.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_6.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_7.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_6.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_7.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_6.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_7.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_6.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_6.mp3");
                                        } 
                            }
                            break;
                case 'month3':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 9;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = 8;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_8.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 9;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = 8;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_8.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 9;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = 8;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_8.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_8.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_9.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_8.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_9.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_8.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_9.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_8.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_9.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_8.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_8.mp3");
                                        } 
                            }
                            break;
                case 'month4':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 11;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = 10;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_10.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 11;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = 10;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_10.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 11;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = 10;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_10.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_10.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_11.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_10.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_11.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_10.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_11.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_10.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_11.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_10.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_10.mp3");
                                        } 
                            }
                            break;
                case 'month5':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 13;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_12.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 13;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = 13;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_12.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 13;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = 13;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_12.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_12.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_13.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_12.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_13.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_12.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_13.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_12.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_13.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_12.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_12.mp3");
                                        } 
                            }
                            break;
                case 'month6':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 15;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = 14;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_14.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 15;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = 14;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_14.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 15;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = 14;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_14.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_14.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_15.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_14.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_15.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_14.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_15.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_14.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_15.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_14.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_14.mp3");
                                        } 
                            }
                            break;
                case 'month7':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 17;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = 16;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_16.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 17;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = 16;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_16.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 17;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_16.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_16.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_17.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_16.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_17.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_16.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_17.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_16.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_17.mp3");
                               else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_16.mp3");
                      } 
                           
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_16.mp3");
                                        } 
                            }
                            break;
                case 'month8':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 19;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = 18;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_18.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 19;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = 18;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_18.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 19;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = 18;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_18.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_18.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_19.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_18.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_19.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_18.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_19.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_18.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_19.mp3");
                               else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_18.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_18.mp3");
                                        } 
                            }
                            break;
                case 'month9':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 21;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = 20;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_20.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 21;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = 20;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_20.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 21;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = 20;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_20.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_20.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_21.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_20.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_21.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_20.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_21.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_20.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_21.mp3");
                               else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_20.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_20.mp3");
                                        } 
                            }
                            break;
                case 'month10':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 23;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = 22;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_22.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 23;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = 22;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_22.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 23;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = 22;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_22.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_22.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_23.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_22.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_23.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_22.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_23.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_22.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_23.mp3");
                               else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_22.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_22.mp3");
                                        } 
                            }
                            break;
                case 'month11':
                            if(window.languageSelected=="English")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_25.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_24.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Kannada")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_25.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_24.mp3");
                                        }
                            }   
                            else if(window.languageSelected=="Hindi")
                            {
                                if(status=="before")
                                        {
                                            _this.questionid = 5;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_25.mp3");
                                        }
                                    else{
                                             _this.questionid = 4;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_24.mp3");
                                        }
                            }
                            else if(window.languageSelected=="Gujarati")
                            {
                                 if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_25.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_24.mp3");
                                        }
                            }
							else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_25.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_24.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_25.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_24.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_25.mp3");
                                else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_24.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_25.mp3");
                               else
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_24.mp3");
                      } 
                            else
                            {
                               if(status=="before")
                                        {
                                            _this.questionid = 3;
                                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_25.mp3");
                                        }
                                    else{
                                             _this.questionid = 2;
                                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_24.mp3");
                                        } 
                            }
                            break;
                default: //console.log("in default case");
                            break;                  
            }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        if(window.languageSelected=="Odiya")
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
            
        if(_this.cmusic)
        {
            if(_this.cmusic.isPlaying)
            {
                _this.cmusic.stop();
                _this.cmusic = null;
            }
        }

        if(_this.amplify!=null)
          {
              _this.amplify.context.close();
              _this.amplify = null;
          }
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
    
    addGlowToSprite:function(){
            glow.x=180+(0*180);
            glow.y=174;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=180+(1*180);
                glow.y=174;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=180+(2*180);
                    glow.y=174;
                    glow.alpha=1;
                },this);
            },this); 
    },
    
    shutdown:function(){
        _this.stopVoice();
        delete background;
        score = 0;
        slno=0;
        delete slidearray;
        delete starsGroup;
        count=0;
        delete groupmonth;
        delete randommonth;
        delete selectedarray;
        delete displmonth;
        delete blankarray;
        delete blankbox;
        delete group2;
        delete sortArr;
        delete sortedArray;
        correctflag=0;
        correctflag2=0;
        midmonth=0;
        delete slidegroup;
        delete selmonth;
        randomslno=0;
        delete glow;
        delete chknumb;
        chkflag=0;
        chkflag1=0;
        noofAttempts=0;
        delete timer;
        AnsTimerCount=0;
        gameid=null;
        delete groupmonthname;
        status=null;
    }
           
};