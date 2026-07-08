Game.grade5_4level1=function(){};

var background;

var sl1no;
var sl2no;
var score = 0;
var slidearray=new Array();
var sortArr=new Array();
var sortArr1=new Array();
var selmonth=new Array();
var randomslno=0;
var correctflag=0;
var correctflag2=0;
var chkflag=0,chkflag1=0;

var starsGroup;
var speakerBtn;
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
var chknumb;

var noofAttempts;
var AnsTimerCount;
var timer;
var gameid;
var groupmonthname;

Game.grade5_4level1.prototype={
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

     preload:function(game){
        if(!window.grade1MT3){

            window.grade1MT3 = true;

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

        this.load.image('Level54_bg1',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.atlas('Level54_btn',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.4/btn.json');
        this.load.image('Level54_bg3',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/bg3.png');
        this.load.image('Level54_tittleBaar',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/tittleBaar.png');
        this.load.atlas('Level54_replay',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.4/reply.json');
        //this.load.atlas('Level54_monthname',window.baseUrl+'assets/gradeAssets/5.4/monthname.png' ,window.baseUrl+'json/gradeJson/5.4/monthname.json');
        if(window.languageSelected == "Gujarati")
			this.load.atlas('Level54_monthname',window.baseUrl+'assets/newAssets/monthname1.png' ,window.baseUrl+'assets/newAssets/monthname1.json');
		else
			this.load.atlas('Level54_monthname',window.baseUrl+'assets/newAssets/monthname.png' ,window.baseUrl+'assets/newAssets/monthname.json');
        //game assets
        this.load.atlas('Level54_main_imageanim',window.baseUrl+'assets/gradeAssets/5.4/main_imageanim.png' ,window.baseUrl+'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image',window.baseUrl+'assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow',window.baseUrl+'assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN',window.baseUrl+'assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB',window.baseUrl+'assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR',window.baseUrl+'assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR',window.baseUrl+'assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY',window.baseUrl+'assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE',window.baseUrl+'assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY',window.baseUrl+'assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG',window.baseUrl+'assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP',window.baseUrl+'assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT',window.baseUrl+'assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV',window.baseUrl+'assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC',window.baseUrl+'assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2',window.baseUrl+'assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2',window.baseUrl+'assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2',window.baseUrl+'assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2',window.baseUrl+'assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2',window.baseUrl+'assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2',window.baseUrl+'assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2',window.baseUrl+'assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2',window.baseUrl+'assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2',window.baseUrl+'assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2',window.baseUrl+'assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2',window.baseUrl+'assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2',window.baseUrl+'assets/gradeAssets/5.4/DEC2.png');
        

    }

    },


	create:function(game){

        _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;


        noofAttempts=0;
        _this.sceneCount=0;
        sl1no=0;
        sl2no=0;
        count=0;


         score = 0;
         slidearray=new Array();
         sortArr=new Array();
         sortArr1=new Array();
         selmonth=new Array();
         randomslno=0;
         correctflag=0;
         correctflag2=0;
         chkflag=0;
         chkflag1=0;



        slidearray1=[1,2,3,4,5];
        slidearray2=[6,7,8];
        slidearray1 = this.shuffle(slidearray1);		
        slidearray2 = this.shuffle(slidearray2);		
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
    
    
    generateStarsForTheScene:function(count)
    {
        starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
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
    
    getslides:function()
	{
        noofAttempts = 0;
         AnsTimerCount=0;
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
		//_this.questionid = "5.4#SCR-"+_this.sceneCount;

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
           // this.updateTimer();
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
        if(randomslno==0)
        {
            slideno=slidearray2[sl2no];
            randomslno++;
        }
        else
        {
            slideno=slidearray1[sl1no];
        }
        
        _this.speakerbtn.events.onInputDown.add(function()
        { 
           // _this.stopVoice();    
            _this.clickSound.play();
            _this.getVoice(randomslno-1);
        },_this);
        //console.log(slideno);
		switch(slideno)
		{  
			case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:this.slide1(); break;
            case 6:
            case 7:
            case 8:this.slide2(); break;
                
        }
       
    },
    
    slide1:function()
    {
		if(sl1no ==0)
			this.getVoice(randomslno); 
        slidegroup=this.add.group();
        groupmonthname=new Array();
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
        
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[0].alpha=0;blankbox[0].name="month1";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[1].alpha=0;blankbox[1].name="month2";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[2].alpha=0;blankbox[2].name="month3";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[3].alpha=0;blankbox[3].name="month4";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[4].alpha=0;blankbox[4].name="month5";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[5].alpha=0;blankbox[5].name="month6";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[6].alpha=0;blankbox[6].name="month7";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[7].alpha=0;blankbox[7].name="month8";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[8].alpha=0;blankbox[8].name="month9";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[9].alpha=0;blankbox[9].name="month10";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[10].alpha=0;blankbox[10].name="month11";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim'));blankbox[11].alpha=0;blankbox[11].name="month12";
        
        
        
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
             groupmonthname.push(this.add.sprite(15,72,'Level54_monthname','Symbol 12 copy instance 10052'));

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
        
        displmonth=this.fetchrandom(randommonth,"slide1");
        if(chknumb.indexOf(displmonth[0]) > -1 && chkflag<=30)
        {
            chkflag++;
           // //console.log("already exists"+displmonth[0]);
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
            sl1no--;
           
           this.getslides();
        }
        else if((displmonth[0]==0 || displmonth[0]==11) && chkflag1<=30)
        {
            chkflag1++;
            ////console.log("dont repeat"+displmonth[0]);
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
            sl1no--;
          
           this.getslides();
        }
        else
        {
            randomslno++;
            ////console.log("not exists"+displmonth[0]);
            chknumb.push(displmonth[0]);
            if(displmonth[0]!=0 && displmonth[0]<=10)
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])-1);
            }
            else if(displmonth[0]==11)
            {
                displmonth.push(Number(displmonth[0])-1);
                displmonth.push(Number(displmonth[0])-2);
            }
            else if(displmonth[0]==0)
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])+2);
            }

            group2=this.add.group();
            displmonth=this.shuffle(displmonth);
           // //console.log("displmonth before========"+displmonth);
            if(displmonth[0]<displmonth[1] && displmonth[1]<displmonth[2])
            {
                var temp=displmonth[0];
                displmonth[0]=displmonth[2];
                displmonth[2]=temp;
            }
         //   //console.log("displmonth after========"+displmonth);
            for(var i=0;i<displmonth.length;i++)
            { 
                blankarray.push(blankbox[displmonth[i]]);
                selmonth.push(((blankarray[i].name).substring(5)-1));

                if(i==2)
                    {
                        selmonth.sort(function(a, b){return a-b});

                        for(var j=0;j<selmonth.length;j++)
                        {
                            sortArr1.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));
                            sortArr1[j].x=210+(183*j);
                            sortArr1[j].y=93;
                            sortArr1[j].alpha=1;
                            sortArr1[j].scale.setTo(0.97,0.95);
                            slidegroup.add(sortArr1[j]);
                            sortArr.push(blankbox[selmonth[j]]);
                            sortArr[j].name='month'+(selmonth[j]);
                            sortArr[j].x=232+(183*j);
                            sortArr[j].y=115;
                            sortArr[j].alpha=1;
                            sortArr[j].scale.setTo(0.45,0.45);
                            group2.add(sortArr[j]);

                        }

                    }

                slidegroup.add(group2);
                groupmonth[displmonth[i]].x=205+(183*i);
                groupmonth[displmonth[i]].y=300;
                groupmonth[displmonth[i]].alpha=1;
                groupmonth[displmonth[i]].name="month"+displmonth[i];
                groupmonth[displmonth[i]].inputEnabled = true;
                groupmonth[displmonth[i]].value="slide1";
                groupmonth[displmonth[i]].input.useHandCursor = true;
                groupmonth[displmonth[i]].input.enableDrag(true);
                groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
                groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
                slidegroup.add(groupmonth[displmonth[i]]);
            }

           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
    
    slide2:function(){
        this.getVoice(randomslno); 
        groupmonth=new Array();
        groupmonthname=new Array();
        displmonth=new Array();
        selectedarray=new Array();
        group2=this.add.group();
        slidegroup=this.add.group();
        sl2no++; 
        var main_image=this.add.sprite(55,100,'Level54_main_image');
        slidegroup.add(main_image);
        var jan_graphics=this.add.graphics(0,0);
        jan_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jan_graphics.beginFill(0xFF700B, 1);
		jan_graphics.drawRect(74,116,110,110);
		jan_graphics.boundsPadding = 0;
        jan_graphics.name="month0";
        jan_graphics.alpha=0;

        var feb_graphics=this.add.graphics(0,0);
        feb_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		feb_graphics.beginFill(0xFF700B, 1);
		feb_graphics.drawRect(214,116,110,110);
		feb_graphics.boundsPadding = 0;
        feb_graphics.name="month1";
        feb_graphics.alpha=0;
        
        var mar_graphics=this.add.graphics(0,0);
        mar_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		mar_graphics.beginFill(0xFF700B, 1);
		mar_graphics.drawRect(354,116,110,110);
		mar_graphics.boundsPadding = 0;
        mar_graphics.name="month2";
        mar_graphics.alpha=0;
        
        var apr_graphics=this.add.graphics(0,0);
        apr_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		apr_graphics.beginFill(0xFF700B, 1);
		apr_graphics.drawRect(498,116,110,110);
		apr_graphics.boundsPadding = 0;
        apr_graphics.name="month3";
        apr_graphics.alpha=0;
        
        var may_graphics=this.add.graphics(0,0);
        may_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		may_graphics.beginFill(0xFF700B, 1);
		may_graphics.drawRect(638,116,110,110);
		may_graphics.boundsPadding = 0;
        may_graphics.name="month4";
        may_graphics.alpha=0;
        
        var jun_graphics=this.add.graphics(0,0);
        jun_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jun_graphics.beginFill(0xFF700B, 1);
		jun_graphics.drawRect(780,116,110,110);
		jun_graphics.boundsPadding = 0;
        jun_graphics.name="month5";
        jun_graphics.alpha=0;
        
        var july_graphics=this.add.graphics(0,0);
        july_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		july_graphics.beginFill(0xFF700B, 1);
		july_graphics.drawRect(74,258,110,110);
		july_graphics.boundsPadding = 0;
        july_graphics.name="month6";
        july_graphics.alpha=0;
        
        var aug_graphics=this.add.graphics(0,0);
        aug_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		aug_graphics.beginFill(0xFF700B, 1);
		aug_graphics.drawRect(214,258,110,110);
		aug_graphics.boundsPadding = 0;
        aug_graphics.name="month7";
        aug_graphics.alpha=0;
        
        var sep_graphics=this.add.graphics(0,0);
        sep_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sep_graphics.beginFill(0xFF700B, 1);
		sep_graphics.drawRect(354,258,110,110);
		sep_graphics.boundsPadding = 0;
        sep_graphics.name="month8";
        sep_graphics.alpha=0;
        
        var oct_graphics=this.add.graphics(0,0);
        oct_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		oct_graphics.beginFill(0xFF700B, 1);
		oct_graphics.drawRect(498,258,110,110);
		oct_graphics.boundsPadding = 0;
        oct_graphics.name="month9";
        oct_graphics.alpha=0;
        
        var nov_graphics=this.add.graphics(0,0);
        nov_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		nov_graphics.beginFill(0xFF700B, 1);
		nov_graphics.drawRect(638,258,110,110);
		nov_graphics.boundsPadding = 0;
        nov_graphics.name="month10";
        nov_graphics.alpha=0;
        
        var dec_graphics=this.add.graphics(0,0);
        dec_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		dec_graphics.beginFill(0xFF700B, 1);
		dec_graphics.drawRect(780,258,110,110);
		dec_graphics.boundsPadding = 0;
        dec_graphics.name="month11";
        dec_graphics.alpha=0;
        
        group2.add(jan_graphics);
        group2.add(feb_graphics);
        group2.add(mar_graphics);
        group2.add(apr_graphics);
        group2.add(may_graphics);
        group2.add(jun_graphics);
        group2.add(july_graphics);
        group2.add(aug_graphics);
        group2.add(sep_graphics);
        group2.add(oct_graphics);
        group2.add(nov_graphics);
        group2.add(dec_graphics);
        
        groupmonth.push(this.add.sprite(60,400,'Level54_JAN'));groupmonth[0].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10024'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10012'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10036'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10048'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10060'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10072'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10084'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10048'));


        groupmonthname[0].alpha=1;groupmonthname[0].scale.setTo(1.15,1.15);


        groupmonth.push(this.add.sprite(130,420,'Level54_FEB'));groupmonth[1].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10001'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10025'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10013'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10037'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10049'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10061'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10073'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10085'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10050'));

        groupmonthname[1].alpha=1;groupmonthname[1].scale.setTo(1.15,1.15);


        groupmonth.push(this.add.sprite(190,400,'Level54_MAR'));groupmonth[2].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10002'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10026'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10014'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10038'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10050'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10062'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10074'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10086'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10050'));

        groupmonthname[2].alpha=1;groupmonthname[2].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(260,420,'Level54_APR'));groupmonth[3].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10003'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10027'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10015'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10039'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10051'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10063'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10075'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10087'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10051'));

        groupmonthname[3].alpha=1;groupmonthname[3].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(325,400,'Level54_MAY'));groupmonth[4].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10004'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10028'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10016'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10040'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10052'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10064'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10076'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10088'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10052'));

        groupmonthname[4].alpha=1;groupmonthname[4].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(392,420,'Level54_JUNE'));groupmonth[5].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10005'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10029'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10017'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10041'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10053'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10065'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10077'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10089'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10053'));

        groupmonthname[5].alpha=1;groupmonthname[5].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(455,400,'Level54_JULY'));groupmonth[6].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10006'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10030'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10018'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10042'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10054'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10066'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10078'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10090'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10054'));

        groupmonthname[6].alpha=1;groupmonthname[6].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(525,420,'Level54_AUG'));groupmonth[7].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10007'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10031'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10019'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10043'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10055'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10067'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10079'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10091'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10055'));

        groupmonthname[7].alpha=1;groupmonthname[7].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(585,400,'Level54_SEP'));groupmonth[8].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10008'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10032'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10020'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10044'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10056'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10068'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10080'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10092'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10056'));

        groupmonthname[8].alpha=1;groupmonthname[8].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(655,420,'Level54_OCT'));groupmonth[9].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10009'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10033'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10021'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10045'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10057'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10069'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10081'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10093'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10058'));

        groupmonthname[9].alpha=1;groupmonthname[9].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(715,400,'Level54_NOV'));groupmonth[10].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10010'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10034'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10022'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10046'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10058'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10070'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10082'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10094'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10058'));

        groupmonthname[10].alpha=1;groupmonthname[10].scale.setTo(1.15,1.15);

        groupmonth.push(this.add.sprite(790,420,'Level54_DEC'));groupmonth[11].alpha=0;
        if(window.languageSelected=="English")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10011'));
        else if(window.languageSelected=="Kannada")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10035'));
        else if(window.languageSelected=="Hindi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10023'));
        else if(window.languageSelected=="Odiya")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10047'));
		else if(window.languageSelected=="Tamil")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10059'));
		else if(window.languageSelected=="Marathi")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10071'));
		else if(window.languageSelected=="Telugu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10083'));
		else if(window.languageSelected=="Urdu")
            groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10095'));
        else
             groupmonthname.push(this.add.sprite(-7,35,'Level54_monthname','Symbol 12 copy instance 10059'));
        
        groupmonthname[11].alpha=1;groupmonthname[11].scale.setTo(1.15,1.15);
        
        for(var k=0;k<12;k++){
             groupmonth[k].addChild(groupmonthname[k]);
        }
        
        displmonth=Object.keys(groupmonth);
        displmonth=this.shuffle(displmonth);
        for(var i=0;i<displmonth.length;i++)
        {
            groupmonth[displmonth[i]].name="month"+(displmonth[i]);
            groupmonth[displmonth[i]].value="slide2";
            if(i==0){groupmonth[displmonth[i]].x=60;groupmonth[displmonth[i]].y=400;}
            else if(i==1){groupmonth[displmonth[i]].x=130;groupmonth[displmonth[i]].y=420;}
            else if(i==2){groupmonth[displmonth[i]].x=190;groupmonth[displmonth[i]].y=400;}
            else if(i==3){groupmonth[displmonth[i]].x=260;groupmonth[displmonth[i]].y=420;}
            else if(i==4){groupmonth[displmonth[i]].x=325;groupmonth[displmonth[i]].y=400;}
            else if(i==5){groupmonth[displmonth[i]].x=395;groupmonth[displmonth[i]].y=420;}
            else if(i==6){groupmonth[displmonth[i]].x=455;groupmonth[displmonth[i]].y=400;}
            else if(i==7){groupmonth[displmonth[i]].x=525;groupmonth[displmonth[i]].y=420;}
            else if(i==8){groupmonth[displmonth[i]].x=585;groupmonth[displmonth[i]].y=400;}
            else if(i==9){groupmonth[displmonth[i]].x=655;groupmonth[displmonth[i]].y=420;}
            else if(i==10){groupmonth[displmonth[i]].x=715;groupmonth[displmonth[i]].y=400;}
            else if(i==11){groupmonth[displmonth[i]].x=790;groupmonth[displmonth[i]].y=420;}
            groupmonth[displmonth[i]].alpha=1;
            groupmonth[displmonth[i]].inputEnabled = true;
            groupmonth[displmonth[i]].input.useHandCursor = true;
            groupmonth[displmonth[i]].input.enableDrag(true);
            groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
            groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
            
            slidegroup.add(groupmonth[i]);
        }
       slidegroup.add(group2);
       slidegroup.x = 960;
       var tween = this.add.tween(slidegroup);
       tween.to({ x: 0}, 0, 'Linear', true, 0);
       tween.onComplete.add(function(){
         
       },this); 
    },
  
    fetchrandom: function(array,slide){
         var count=0;
         for (var i=0;i<array.length;i++){
            
             if(array[i]!="undefined")
             {
                     count++;
                     
                     if(slide=="slide1")
                     {
                        selectedarray.push(array[i]); 
                            return selectedarray;
                     }
                    else
                    {
                        selectedarray.push(array[i]); 
                        if(count == 12){
                          return selectedarray;
                        }
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
            if(randomslno==0)
            target.width-=13;
            else
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
            target.width+=13;
            target.height+=2;
            _this.snapSound.play();    
            for(var h=0;h<group2.length;h++)
            {
                //console.log("target name=="+target.name);
                //console.log("group2.getChildAt(h).name=="+group2.getChildAt(h).name);
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {
                        noofAttempts++;
                        //console.log("overlapped name==");
                        if(target.name==group2.getChildAt(h).name)
                        {
                            //console.log("matched==");
                            if(target.value=="slide1")
                            {
                                correctflag++;
                                target.x=Number(group2.getChildAt(h).x)-27;
                                target.y=Number(group2.getChildAt(h).y)-25;
                            }
                            else
                            {
                                correctflag2++;
                                if(h==0)
                                {
                                    target.x=75;target.y=119;
                                }
                                else if(h==1)
                                {
                                    target.x=216;target.y=119;
                                }
                                else if(h==2)
                                {
                                    target.x=358;target.y=119;
                                }
                                else if(h==3)
                                {
                                    target.x=500;target.y=119;
                                }
                                else if(h==4)
                                {
                                    target.x=641;target.y=119;
                                }
                                else if(h==5)
                                {
                                    target.x=783;target.y=119;
                                }
                                else if(h==6)
                                {
                                    target.x=75;target.y=260;
                                }
                                else if(h==7)
                                {
                                    target.x=216;target.y=260;
                                }
                                else if(h==8)
                                {
                                    target.x=358;target.y=260;
                                }
                                else if(h==9)
                                {
                                    target.x=500;target.y=260;
                                }
                                else if(h==10)
                                {
                                    target.x=641;target.y=260;
                                }
                                else if(h==11)
                                {
                                    target.x=783;target.y=260;
                                }
                            }
                            target.inputEnabled=false;
                            break;
                        }
                        else
                        {
                            //console.log("not matched==");
                            _this.wmusic.play();
                            shake.shake(10,target);
                            if(target.value=="slide1")
                            {
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=205+(183*0);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=205+(183*1);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=205+(183*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=60;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=130;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=190;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[3]])
                                {
                                    target.x=260;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[4]])
                                {
                                    target.x=325;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[5]])
                                {
                                    target.x=395;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[6]])
                                {
                                    target.x=455;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[7]])
                                {
                                    target.x=525;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[8]])
                                {
                                    target.x=585;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[9]])
                                {
                                    target.x=655;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[10]])
                                {
                                    target.x=715;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[11]])
                                {
                                    target.x=790;target.y=420;
                                }
                            }
                            
                            break;
                        }
                    }
                    
                }
            if(target.value=="slide1")
            {
                if(correctflag==3)
                {
                    _this.cmusic.play();
                    correctflag=0;
                    this.correctans(target);  
                }
            }
            else if(target.value=="slide2")
            {
                if(correctflag2==12)
                {
                    _this.cmusic.play();
                    correctflag2=0;
                    this.correctans(target);  
                }
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

        _this.sceneCount++;
        _this.questionid = 1;
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
                
       // absdsjsapi.saveAssessment(saveAsment);


       telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

        _this.speakerbtn.inputEnabled=false;
        _this.clickSound.play();
        _this.cmusic.play();
        var starAnim = starsGroup.getChildAt(count);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count++;
        var tweendown = this.add.tween(slidegroup);
        if(target.value=="slide1")
            {
                glow=this.add.sprite(0,0,'Level54_glow');
                glow.height-=52;
                glow.width+=6;
                glow.alpha=0;
                tweendown.to({ y: 100}, 0, 'Linear', true, 0);
                tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide1');
                },this);
            }
        else
            {
                glow=this.add.sprite(0,0,'Level54_glow');
                glow.height+=86;
                glow.width+=900;
                glow.alpha=0;
                tweendown.to({ y: 50}, 0, 'Linear', true, 0);
                tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide2');
                },this);
            }
            this.time.events.add(3000,function(){
            glow.destroy();
            var tween = this.add.tween(slidegroup);
            tween.to({ x: -1000}, 0, 'Linear', true, 0);
            tween.onComplete.add(function(){
            if(count<6){  
                if(timer)
                    {
                        timer.stop();
                        timer = null; 
                    }
                this.getslides();
            }
            else
            {
               // this.stopVoice();
                randomslno=0;
                chkflag=0;
                chkflag1=0;
                chknumb=new Array();
                this.state.start('grade5_4level2');
            }
            
            },this);
        },this);
        
        
    },
    
    update:function(){
       
    },
    
    getVoice:function(slideno){
        _this.stopVoice();  
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/English/5.4_1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Hindi/5.4_1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Kannada/5.4_1.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.4/5.4_1.mp3");
        }
		else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Marathi/5.4_1.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Telugu/5.4_1.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Tamil/5.4_1.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Urdu/5.4_1.mp3");
                      } 
        else
        {
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.4/Odiya/5.4_1.mp3");
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        if(window.languageSelected=="Odiya")
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
    
    
    addGlowToSprite:function(arg){
        if(arg=="slide1")
        {
            glow.x=176+(0*180);
            glow.y=162;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(1*180);
                glow.y=162;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=176+(2*180);
                    glow.y=162;
                    glow.alpha=1;
                },this);
            },this); 
        }
        else
        {
            glow.x=-80;
            glow.y=104;
            glow.alpha=1;
        }
    },

   /* updateTimer:function() {
        
     counterForTimer++;
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     timeDisplay.setText(minutes+':' + seconds);
},*/
    
    shutdown:function(){
        _this.stopVoice();
        delete background;
        score = 0;
        sl1no=0;
        sl2no=0;
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
        delete sortArr1;
        delete sortedArray;
        correctflag=0;
        correctflag2=0;
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
    }
    
            
};