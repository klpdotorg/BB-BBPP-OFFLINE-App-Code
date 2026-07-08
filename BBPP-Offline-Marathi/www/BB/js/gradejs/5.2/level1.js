Game.grade5_2level1=function(){};

var background;
var score = 0;
var slidearray=new Array();
var sortArr=new Array();
var sortArr1=new Array();
var selmonth=new Array();
var correctflag=0;
var correctflag2=0;

var slideno=0;
var randomslno=0;
var dayselect=0;
var chkrandom=new Array();
var chkflag=0,chkflag1=0;


var sl1no;
var sl2no;

var starsGroup;
var speakerBtn;
var count;
var groupdays,groupdayname;
var randommonth;
var selectedarray;
var displdays;
var blankarray;
var blankbox;
var group2;

var sortedArray;

var slidegroup;


var chknumb;
var noofAttempts;
var timer;
var AnsTimerCount;
var gameid;

Game.grade5_2level1.prototype={
    init:function(game)
    {
        _this = this;
        _this.gameid = "5.2";
        _this.clickSound = _this.add.audio('ClickSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        _this.snapSound = _this.add.audio('snapSound');
        
       
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("time5_2",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade1MT2){

            window.grade1MT2 = true;

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

        this.load.image('Level52_bg1',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg1.png');
         this.load.atlas('Level52_btn',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/btn.png',window.baseUrl+'json/gradeJson/5.2/btn.json');
         this.load.image('Level52_bg3',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg3.png');
         this.load.image('Level52_tittleBaar',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/tittleBaar.png');
         this.load.atlas('Level52_replay',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/reply.png' ,window.baseUrl+'json/gradeJson/5.2/reply.json');
      
         this.load.image('Level52_glow',window.baseUrl+'assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Level52_Bg',window.baseUrl+'assets/gradeAssets/5.2/Bg.png');
         this.load.image('Level52_main_image1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('Level52_main_image2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('Level52_main_image3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('Level52_main_image4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('Level52_main_image5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('Level52_main_image6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('Level52_blankimg',window.baseUrl+'assets/gradeAssets/5.2/animslide.png',window.baseUrl+'json/gradeJson/5.2/animslide.json');
        
        
         /*this.load.atlas('Level52_sunday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/sunday.png',window.baseUrl+'json/gradeJson/5.2/sunday.json');
         this.load.atlas('Level52_monday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/monday.png',window.baseUrl+'json/gradeJson/5.2/monday.json');
         this.load.atlas('Level52_tuesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/tuesday.png',window.baseUrl+'json/gradeJson/5.2/tuesday.json');
         this.load.atlas('Level52_wednesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/wednesday.png',window.baseUrl+'json/gradeJson/5.2/wednesday.json');
         this.load.atlas('Level52_thursday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/thursday.png',window.baseUrl+'json/gradeJson/5.2/thursday.json');
         this.load.atlas('Level52_friday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/friday.png',window.baseUrl+'json/gradeJson/5.2/friday.json');
         this.load.atlas('Level52_saturday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/saturday.png',window.baseUrl+'json/gradeJson/5.2/saturday.json');
         */
         this.load.atlas('Level52_sunday',window.baseUrl+'assets/newAssets/07.png',window.baseUrl+'assets/newAssets/07.json');
         this.load.atlas('Level52_monday',window.baseUrl+'assets/newAssets/01.png',window.baseUrl+'assets/newAssets/01.json');
         this.load.atlas('Level52_tuesday',window.baseUrl+'assets/newAssets/02.png',window.baseUrl+'assets/newAssets/02.json');
         this.load.atlas('Level52_wednesday',window.baseUrl+'assets/newAssets/03.png',window.baseUrl+'assets/newAssets/03.json');
         this.load.atlas('Level52_thursday',window.baseUrl+'assets/newAssets/04.png',window.baseUrl+'assets/newAssets/04.json');
         this.load.atlas('Level52_friday',window.baseUrl+'assets/newAssets/05.png',window.baseUrl+'assets/newAssets/05.json');
         this.load.atlas('Level52_saturday',window.baseUrl+'assets/newAssets/06.png',window.baseUrl+'assets/newAssets/06.json');
         
        
         this.load.image('Level52_wed1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/wed1.png');
         this.load.image('Level52_tue1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/tue1.png');
         this.load.image('Level52_sun1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sun1.png');
         this.load.image('Level52_sat1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sat1.png');
         this.load.image('Level52_fri1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/fri1.png');
         this.load.image('Level52_thu1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/thu1.png');
         this.load.image('Level52_mon1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/mon1.png');
        
         this.load.image('Level52_mon2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/mon2.png');
         this.load.image('Level52_sat2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sat2.png');
         this.load.image('Level52_sun2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sun2.png');
         this.load.image('Level52_fri2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/fri2.png');
         this.load.image('Level52_tue2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/tue2.png');
         this.load.image('Level52_thu2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/thu2.png');
         this.load.image('Level52_wed2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/wed2.png');
        
         this.load.image('Level52_sun3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sun3.png');
         this.load.image('Level52_fri3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/fri3.png');
         this.load.image('Level52_mon3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/mon3.png');
         this.load.image('Level52_wed3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/wed3.png');
         this.load.image('Level52_thu3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/thu3.png');
         this.load.image('Level52_sat3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sat3.png');
         this.load.image('Level52_tue3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/tue3.png');
      
         this.load.image('Level52_tue4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/tue4.png');
         this.load.image('Level52_wed4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/wed4.png');
         this.load.image('Level52_mon4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/mon4.png');
         this.load.image('Level52_fri4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/fri4.png');
         this.load.image('Level52_sun4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sun4.png');
         this.load.image('Level52_thu4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/thu4.png');
         this.load.image('Level52_sat4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sat4.png');
    
         this.load.image('Level52_sat5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sat5.png');
         this.load.image('Level52_fri5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/fri5.png');
         this.load.image('Level52_tue5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/tue5.png');
         this.load.image('Level52_thu5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/thu5.png');
         this.load.image('Level52_sun5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sun5.png');
         this.load.image('Level52_wed5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/wed5.png');
         this.load.image('Level52_mon5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/mon5.png');
        
         this.load.image('Level52_sun6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sun6.png');
         this.load.image('Level52_tue6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/tue6.png');
         this.load.image('Level52_thu6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/thu6.png');
         this.load.image('Level52_sat6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sat6.png');
         this.load.image('Level52_fri6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/fri6.png');
         this.load.image('Level52_wed6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/wed6.png');
         this.load.image('Level52_mon6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/mon6.png');
        
         this.load.image('Level52_sun19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_mon19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_tue19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_wed19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_thu19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_fri19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_sat19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
        
         this.load.image('Level52_sun20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_mon20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_tue20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_wed20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_thu20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_fri20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_sat20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
        
         this.load.image('Level52_sun21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_mon21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_tue21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_wed21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_thu21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_fri21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_sat21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
        
         this.load.image('Level52_sun22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_mon22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_tue22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_wed22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_thu22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_fri22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_sat22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
        
         this.load.image('Level52_sun23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_mon23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_tue23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_wed23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_thu23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_fri23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_sat23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
        
         this.load.image('Level52_sun24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_mon24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_tue24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_wed24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_thu24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_fri24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_sat24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
        

    }

    },


    create:function(game){

        _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;


        noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount=0;
        sl1no=0;
        sl2no=0;
        count=0;

         score = 0;
         slidearray=new Array();
         sortArr=new Array();
         sortArr1=new Array();
         selmonth=new Array();
         correctflag=0;
         correctflag2=0;

         slideno=0;
         randomslno=0;
         dayselect=0;
         chkrandom=new Array();
         chkflag=0;
         chkflag1=0;

         //alert("here");

        slidearray1=[1,2,3,4,5,6];
        slidearray2=[7,8,9,10,11,12];
        //slidearray1 = this.shuffle(slidearray1);        
        //slidearray2 = this.shuffle(slidearray2);        
        chknumb = new Array();
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();
        
        background = this.add.tileSprite(0,-10,this.world.width,this.world.height-50, 'Level52_Bg');
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
    
    speakeron:function(){
        this.stopAllVoice();
        
    },
    
    stopAllVoice:function(){
       
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
        
        //_this.stopVoice();

        if(randomslno==0)
        {
            //console.log("in if");
            slideno=slidearray2[sl2no];
            randomslno++;
        }
        else
        {
            //console.log("in else");
            slideno=slidearray1[sl1no];
        }
            
        _this.speakerbtn.events.onInputDown.add(function()
        { 
            //_this.stopVoice();
            _this.clickSound.play();
            _this.getVoice(slideno);
        },_this);
        
        console.log("slideno=="+slideno);
        console.log("slideno1=="+sl1no);
        console.log("slideno2=="+sl2no);
        switch(slideno)
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:this.slide1(); break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:this.slide2(); break;
        }
        
    },
    
    slide1:function()
    {
	if(sl1no == 0)
	{
        this.getVoice(slideno); 
	}
        slidegroup=this.add.group();
        sl1no++;
        blankarray=new Array();    
        groupdays=new Array();
        groupdayname=new Array();
        blankbox=new Array();
        randommonth=new Array();
        displdays=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        sortArr1=new Array();
        chknumb=new Array();

        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[0].alpha=0;blankbox[0].name="day1";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[1].alpha=0;blankbox[1].name="day2";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[2].alpha=0;blankbox[2].name="day3";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[3].alpha=0;blankbox[3].name="day4";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[4].alpha=0;blankbox[4].name="day5";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[5].alpha=0;blankbox[5].name="day6";
        blankbox.push(this.add.sprite(0,0,'Level52_blankimg','blank'));blankbox[6].alpha=0;blankbox[6].name="day7";
       
        if(sl1no==1 || sl1no==4)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 19;
            }
            else if(grpselect==2)
            {
                dayselct = 20;
            }
            else
            {
                dayselct=19;
            }
        }
        else if(sl1no==2)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 21;
            }
            else if(grpselect==2)
            {
                dayselct = 22;
            }
            else
            {
                dayselct=21;
            }
        }
        else if(sl1no==3 || sl1no==5)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 23;
            }
            else if(grpselect==2)
            {
                dayselct = 24;
            }
            else
            {
                dayselct=23;
            }
        }
        
        groupdays.push(this.add.sprite(60,400,'Level52_mon'+dayselct));groupdays[0].alpha=0;
        
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_monday','Symbol 13 instance 10003'));
        
        groupdayname[0].alpha=1;groupdayname[0].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(130,420,'Level52_tue'+dayselct));groupdays[1].alpha=0;
        
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_tuesday','Symbol 14 instance 10003'));
        
        groupdayname[1].alpha=1;groupdayname[1].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(190,400,'Level52_wed'+dayselct));groupdays[2].alpha=0;
        
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_wednesday','Symbol 15 instance 10003'));
        
        groupdayname[2].alpha=1;groupdayname[2].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(260,420,'Level52_thu'+dayselct));groupdays[3].alpha=0;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_thursday','Symbol 16 instance 10003'));
        
        groupdayname[3].alpha=1;groupdayname[3].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(325,400,'Level52_fri'+dayselct));groupdays[4].alpha=0;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_friday','Symbol 17 instance 10003'));
        
        groupdayname[4].alpha=1;groupdayname[4].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(395,420,'Level52_sat'+dayselct));groupdays[5].alpha=0;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_saturday','Symbol 18 instance 10003'));
        
        groupdayname[5].alpha=1;groupdayname[5].scale.setTo(1.45,1.45);
        
        groupdays.push(this.add.sprite(455,400,'Level52_sun'+dayselct));groupdays[6].alpha=0;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10001'));
        else if(window.languageSelected=="Gujarati")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10004'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10008'));
        else
            groupdayname.push(this.add.sprite(15,110,'Level52_sunday','Symbol 19 instance 10003'));
        
        groupdayname[6].alpha=1;groupdayname[6].scale.setTo(1.45,1.45);
        
        for(var k=0;k<groupdays.length;k++){
           randommonth.push(groupdays[k]); 
            groupdays[k].addChild(groupdayname[k]);
        }
        randommonth=Object.keys(randommonth);
        
        randommonth=this.shuffle(randommonth);
        
        displdays=this.fetchrandom(randommonth,"slide1");


        //if(chknumb.includes(displdays[0]) && chkflag<=30)
        if(chknumb.indexOf(displdays[0]) > -1 && chkflag<=30)
        {
            chkflag++;
            //console.log("already exists"+displdays[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupdays.length;j++)
            {
                groupdays[j].destroy();     
            }
          
            randomdays=[];
            slidegroup.destroy();
            status2="before";
            sl1no--;
           
           this.getslides();
        }
        else if((displdays[0]==5 || displdays[0]==6) && chkflag1<=30)
        {
            chkflag1++;
            //console.log("dont repeat"+displdays[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupdays.length;j++)
            {
                groupdays[j].destroy();     
            }
          
            randomdays=[];
            slidegroup.destroy();
            status2="before";
            sl1no--;
          
           this.getslides();
        }
        else
        {
            randomslno++;
            //console.log("not exists"+displdays[0]);
            chknumb.push(displdays[0]);
          
            if(displdays[0]<=4)//mon tue wed//tue wed thu//wed thu fri//thu fri sat//fri sat sun
            {
                displdays.push(Number(displdays[0])+1);
                displdays.push(Number(displdays[0])+2);
            }
            else if(displdays[0]==5)//fri sat sun
            {
                displdays.push(Number(displdays[0])+1);
                displdays.push(Number(displdays[0])-1);
            }
            else if(displdays[0]==6)//fri sat sun
            {
                displdays.push(Number(displdays[0])-1);
                displdays.push(Number(displdays[0])-2);
            }
            displdays=this.shuffle(displdays);
            if(displdays[0]<displdays[1] && displdays[1]<displdays[2])
            {
                var temp=displdays[0];
                displdays[0]=displdays[2];
                displdays[2]=temp;
            }
            group2=this.add.group();

            for(var i=0;i<displdays.length;i++)
            { 
                blankarray.push(blankbox[displdays[i]]);
                selmonth.push(((blankarray[i].name).substring(3)-1));

                if(i==2)
                {
                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr1.push(this.add.sprite(0,0,'Level52_blankimg','blank'));
                        sortArr1[j].x=205+(183*j);
                        sortArr1[j].y=90;
                        sortArr1[j].alpha=1;
                        sortArr1[j].scale.setTo(0.99,0.95);
                        slidegroup.add(sortArr1[j]);
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='day'+(selmonth[j]);
                        sortArr[j].x=232+(183*j);
                        sortArr[j].y=115;
                        sortArr[j].alpha=1;
                        sortArr[j].scale.setTo(0.55,0.55);
                        group2.add(sortArr[j]);

                    }

                }

                slidegroup.add(group2);
                groupdays[displdays[i]].x=205+(183*i);
                groupdays[displdays[i]].y=300;
                groupdays[displdays[i]].alpha=1;
                groupdays[displdays[i]].name="day"+displdays[i];
                groupdays[displdays[i]].inputEnabled = true;
                groupdays[displdays[i]].value="slide1";
                groupdays[displdays[i]].input.useHandCursor = true;
                groupdays[displdays[i]].input.enableDrag(true);
                groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
                groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
                slidegroup.add(groupdays[displdays[i]]);
            }
            _this.sceneCount++;
           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
    
    slide2:function(){
        this.getVoice(slideno); 
		
        groupdays=new Array();
        groupall=this.add.group();
        groupall2=this.add.group();
        groupdayname=new Array();
        displdays=new Array();
        selectedarray=new Array();
        group2=this.add.group();
        slidegroup=this.add.group();
        sl2no++;
        var main_image;
        var mon_graphics=this.add.graphics(0,0);
        mon_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        mon_graphics.beginFill(0xFF700B, 1);
        mon_graphics.drawRect(126,290,65,80);
        mon_graphics.boundsPadding = 0;
        mon_graphics.name="day0";
        mon_graphics.alpha=0;
        
        var tue_graphics=this.add.graphics(0,0);
        tue_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        tue_graphics.beginFill(0xFF700B, 1);
        tue_graphics.drawRect(233,290,65,80);
        tue_graphics.boundsPadding = 0;
        tue_graphics.name="day1";
        tue_graphics.alpha=0;
        
        var wed_graphics=this.add.graphics(0,0);
        wed_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        wed_graphics.beginFill(0xFF700B, 1);
        wed_graphics.drawRect(340,290,65,80);
        wed_graphics.boundsPadding = 0;
        wed_graphics.name="day2";
        wed_graphics.alpha=0;
        
        var thu_graphics=this.add.graphics(0,0);
        thu_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        thu_graphics.beginFill(0xFF700B, 1);
        thu_graphics.drawRect(445,290,65,80);
        thu_graphics.boundsPadding = 0;
        thu_graphics.name="day3";
        thu_graphics.alpha=0;
        
        var fri_graphics=this.add.graphics(0,0);
        fri_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        fri_graphics.beginFill(0xFF700B, 1);
        fri_graphics.drawRect(552,290,65,80);
        fri_graphics.boundsPadding = 0;
        fri_graphics.name="day4";
        fri_graphics.alpha=0;
        
        var sat_graphics=this.add.graphics(0,0);
        sat_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        sat_graphics.beginFill(0xFF700B, 1);
        sat_graphics.drawRect(659,290,65,80);
        sat_graphics.boundsPadding = 0;
        sat_graphics.name="day5";
        sat_graphics.alpha=0;
        
        var sun_graphics=this.add.graphics(0,0);
        sun_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        sun_graphics.beginFill(0xFF700B, 1);
        sun_graphics.drawRect(765,290,65,80);
        sun_graphics.boundsPadding = 0;
        sun_graphics.name="day6";
        sun_graphics.alpha=0;
        
        group2.add(mon_graphics);
        group2.add(tue_graphics);
        group2.add(wed_graphics);
        group2.add(thu_graphics);
        group2.add(fri_graphics);
        group2.add(sat_graphics);
        group2.add(sun_graphics);

        if(sl2no==1)
        {
            var dayselarr=[1,2,3,4,5,6];
            dayselarr=this.shuffle(dayselarr);
            dayselect=dayselarr[0];
            if(dayselect==1)
                main_image=this.add.sprite(110,86,'Level52_main_image1');
            else if(dayselect==2)
                main_image=this.add.sprite(110,74,'Level52_main_image2');
            else if(dayselect==3)
                main_image=this.add.sprite(110,74,'Level52_main_image3'); 
            else if(dayselect==4)
                main_image=this.add.sprite(110,74,'Level52_main_image4'); 
            else if(dayselect==5)
                main_image=this.add.sprite(110,74,'Level52_main_image5'); 
            else if(dayselect==6)
                main_image=this.add.sprite(110,74,'Level52_main_image6'); 
            
            slidegroup.add(main_image);
        }
        
        groupdays.push(this.add.sprite(85,400,'Level52_mon'+dayselect));groupdays[0].alpha=1;

        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_monday','Symbol 13 instance 10004'));

        groupdayname[0].alpha=1;
        
        groupdays.push(this.add.sprite(200,410,'Level52_tue'+dayselect));groupdays[1].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_tuesday','Symbol 14 instance 10004'));

        groupdayname[1].alpha=1;
        
        groupdays.push(this.add.sprite(315,400,'Level52_wed'+dayselect));groupdays[2].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_wednesday','Symbol 15 instance 10004'));

        groupdayname[2].alpha=1;
        
        groupdays.push(this.add.sprite(430,410,'Level52_thu'+dayselect));groupdays[3].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_thursday','Symbol 16 instance 10004'));

        groupdayname[3].alpha=1;
        
        groupdays.push(this.add.sprite(545,400,'Level52_fri'+dayselect));groupdays[4].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_friday','Symbol 17 instance 10004'));

        groupdayname[4].alpha=1;
        
        groupdays.push(this.add.sprite(660,410,'Level52_sat'+dayselect));groupdays[5].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_saturday','Symbol 18 instance 10004'));

        groupdayname[5].alpha=1;
        
        groupdays.push(this.add.sprite(775,400,'Level52_sun'+dayselect));groupdays[6].alpha=1;
        if(window.languageSelected=="English")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10000'));
        else if(window.languageSelected=="Kannada")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10002'));
        else if(window.languageSelected=="Hindi")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10001'));
        else if(window.languageSelected=="Odiya")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10003'));
		else if(window.languageSelected=="Tamil")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10005'));
		else if(window.languageSelected=="Marathi")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10006'));
		else if(window.languageSelected=="Telugu")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10007'));
		else if(window.languageSelected=="Urdu")
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10008'));
        else
            groupdayname.push(this.add.sprite(5,60,'Level52_sunday','Symbol 19 instance 10004'));

        groupdayname[6].alpha=1;
        
       // groupdays[0].anchor.setTo(0.5);
        for(var k=0;k<7;k++){
             groupdays[k].addChild(groupdayname[k]);
        }
      
        displdays=Object.keys(groupdays);
        displdays=this.shuffle(displdays);
        for(var i=0;i<displdays.length;i++)
        {
            groupdays[displdays[i]].name="day"+(displdays[i]);
            groupdays[displdays[i]].value="slide2";
            groupdays[displdays[i]].x=85+(115*i);
            if(i==0 || i==2 || i==4 || i==6){
                groupdays[displdays[i]].y=400;
            }
            else{
                groupdays[displdays[i]].y=410;
            }
           
            groupdays[displdays[i]].height+=5;
            groupdays[displdays[i]].width+=2;
            groupdays[displdays[i]].inputEnabled = true;
            groupdays[displdays[i]].input.useHandCursor = true;
            groupdays[displdays[i]].input.enableDrag(true);
            groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
            groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
            slidegroup.add(groupdays[i]);
        }
       _this.sceneCount++;
       slidegroup.add(group2);
       slidegroup.x = 960;
       
       var tween = this.add.tween(slidegroup);
       tween.to({ x: 0}, 0, 'Linear', true, 0);
       tween.onComplete.add(function(){
          // this.getslides(slno);
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
            ////console.log("target name=="+target.name);
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level5.2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            _this.clickSound.play();
            target.width-=13;
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
                res_id: "Level5.2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            target.width+=13;
            _this.snapSound.play();    
            for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {     noofAttempts++;  
                        if(target.name==group2.getChildAt(h).name)
                        {
                            //console.log("matched");
                            if(target.value=="slide1")
                            {
                                correctflag++;
                                target.x=Number(group2.getChildAt(h).x)-27;//-27
                                target.y=Number(group2.getChildAt(h).y)-25;//-25
                                
                                //console.log("target x==="+target.x);
                                //console.log("target y==="+target.y);
                            }
                            else
                            {
                                correctflag2++;
                                target.x=110+(h*106);
                                target.y=277;
                                
                            }
                            target.inputEnabled=false;
                            break;
                        }
                        else
                        {
                            //console.log("not matched");
                            _this.wmusic.play();
                            shake.shake(10,target);
                            if(target.value=="slide1")
                            {
                                
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=205+(183*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=205+(183*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=205+(183*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=85+(115*0);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=85+(115*1);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=85+(115*2);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[3]])
                                {
                                    target.x=85+(115*3);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[4]])
                                {
                                    target.x=85+(115*4);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[5]])
                                {
                                    target.x=85+(115*5);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[6]])
                                {
                                    target.x=85+(115*6);
                                    target.y=400;
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
                if(correctflag2==7)
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
        if(target.value=="slide1")
        {
            var tweendown = this.add.tween(slidegroup);
            tweendown.to({ y: 100}, 0, 'Linear', true, 0);
            glow=this.add.sprite(0,0,'Level52_glow');
            glow.height-=58;
            glow.width+=10;
            glow.alpha=0;
            tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide1');
            },this);
        }
        else if(target.value=="slide2")
        {
            var tweendown = this.add.tween(slidegroup);
            tweendown.to({ y: 70}, 0, 'Linear', true, 0);
            glow=this.add.sprite(0,0,'Level52_glow');
            glow.height+=107;
            glow.width+=770;
            glow.alpha=0;
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
                chknumb=new Array();
                this.getslides();
            }  
            else
            {
                sl1no=0;
                sl2no=0;
                randomslno=0;
                blankarray=new Array();    
                groupdays=new Array();
                blankbox=new Array();
                randomdays=new Array();
                displdays=new Array();
                selectedarray=new Array();
                selmonth=new Array();
                sortArr=new Array();
                group2=this.add.group();
                slidegroup=this.add.group();
                chknumb=new Array();
                count=0;
                chkflag=0;
                chkflag1=0;
                this.state.start('grade5_2level2');
            }
            
            },this);
        },this);
        
        
    },
    
    addGlowToSprite:function(slide){
        if(slide=="slide1")
        {
            glow.x=176+(0*180);
            glow.y=163;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(1*180);
                glow.y=163;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=176+(2*180);
                    glow.y=163;
                    glow.alpha=1;
                },this);
            },this); 
        }
        else
        {
            if(dayselect==1)
            {
                glow.x=-20;
                glow.y=108;
                glow.alpha=1;
            }
            else
            {
                glow.x=-20;
                glow.y=103;
                glow.alpha=1;
            }
            
            
        }
            
    },
    
    update:function(){
       
    },
    
    getVoice:function(slideno){
        _this.stopVoice();  
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(slideno)
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:_this.questionid = 2;
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/5.2_3.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/5.2_3.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/5.2_3.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/5.2_3.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/5.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/5.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/5.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/5.2_3.mp3");
                      } 
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_3.mp3");
                         _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:_this.questionid = 1;
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/5.2_1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/5.2_1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/5.2_1.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/5.2_1.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/5.2_1.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/5.2_1.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/5.2_1.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/5.2_1.mp3");
                      } 
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_1.mp3");
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
              //  _this.cmusic = null;
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
        this.stopVoice();
    }
    
            
};