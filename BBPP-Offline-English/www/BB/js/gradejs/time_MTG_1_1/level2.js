Game.time_MTG_1_1level2=function(){};

var background;
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
var count1;
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

Game.time_MTG_1_1level2.prototype={
    init:function(param,score,timerStopVar)
    {
        _this = this;
        //        _this.gameid = "5.2";
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
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
        count1=3;

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

        slidearray1=[1,2,3,4,5,6];
        slidearray2=[7,8,9,10,11,12];
        slidearray1 = this.shuffle(slidearray1);        
        slidearray2 = this.shuffle(slidearray2);        
        chknumb = new Array();
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        background = this.add.tileSprite(0,-10,this.world.width,this.world.height-50, 'Level52_bg1');
        background.scale.setTo(1.05,1.12);

        commonNavBar.addNavBar(game,_this.soundurl,"measurement3");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MTG1.1','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

        this.getslides(); 
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
        _this.starsGroup.getChildAt(3).frame = 2;	               
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
        //        _this.speakerbtn.inputEnabled=true;
        //        _this.speakerbtn.input.useHandCursor = true;

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
            //            _this.updateTimer();
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

        //        _this.speakerbtn.events.onInputDown.add(function()
        //        { 
        //            //_this.stopVoice();
        //            commonNavBar.playClickSound();
        //            
        //            _this.getVoice(slideno);
        //        },_this);

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
         _this.rightmark = this.add.sprite(880,240,'Level51A_tickMark');
        _this.rightmark.inputEnabled=false;
		_this.rightmark.visible = false;
        telInitializer2.gameQuestionStart(this,_this.questionid);
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
         for(var j=0;j<group2.length;j++)
            {
               group2.getChildAt(j).visible = true; 
               group2.getChildAt(j).value2 = "wrong"; 
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

        groupdays.push(this.add.sprite(85,400,'Level52_mon'+dayselect));
        groupdays[0].alpha=1;

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
        
        groupdays.push(this.add.sprite(200,410,'Level52_tue'+dayselect));
        groupdays[1].alpha=1;

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
        
        groupdays.push(this.add.sprite(315,400,'Level52_wed'+dayselect));
        groupdays[2].alpha=1;
        
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
        
        groupdays.push(this.add.sprite(430,410,'Level52_thu'+dayselect));
        groupdays[3].alpha=1;
        
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
        
        groupdays.push(this.add.sprite(545,400,'Level52_fri'+dayselect));
        groupdays[4].alpha=1;
        
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
        
        groupdays.push(this.add.sprite(660,410,'Level52_sat'+dayselect));
        groupdays[5].alpha=1;
        
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
        
        groupdays.push(this.add.sprite(775,400,'Level52_sun'+dayselect));
        groupdays[6].alpha=1;
        
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

            //To add Hand icon for monday, we take x and y axis of monday sprite
            if(groupdays[displdays[i]].name == "day0"){
                mon_x = groupdays[displdays[i]].x;
                mon_y = groupdays[displdays[i]].y;
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
            _this.hand = _this.add.sprite(mon_x+20,mon_y+20,'hand');
            _this.hand.scale.setTo(0.65,0.65);

            _this.time.events.add(2000,function(){
                var tween1 = this.add.tween(_this.hand);
                tween1.to({ x: 135,y:310}, 1000, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                    _this.time.events.add(2500,function(){
                        _this.hand.destroy();
                    },this); 
                },this); 
            },this); 

        },this); 
        

        for(var j=0;j<group2.length;j++){
            group2.getChildAt(j).visible = true; 
            group2.getChildAt(j).value2 = "wrong"; 
        }
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
        commonNavBar.playClickSound();
        target.width-=13;
        target.bringToTop(group2);
        
        for(var j=0;j<group2.length;j++)
            {
               group2.getChildAt(j).visible = true; 
               //group2.getChildAt(j).value2 = "wrong"; 
            }
            
             for(var i=0;i<groupdays.length;i++)
                {
                    for(var j=0;j<group2.length;j++)
                    {
                        if(_this.checkOverlap(groupdays[i],group2.getChildAt(j)))
                        { 
                            group2.getChildAt(j).visible = false;
                              console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx ");
                            //break;
                        }
                        else{
                            //group2.getChildAt(j).visible = true;
                        }
                    }
                }
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
        target.value2 = "wrong";
        commonNavBar.playSnapSound();

        for(var h=0;h<group2.length;h++)
            {
                console.log("hhh "+h);
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {     noofAttempts++;  
                     console.log("HHH "+h);
                        if(target.name==group2.getChildAt(h).name)
                        {
                            console.log("matched "+target.value);
                            if(target.value=="slide1")
                            {
                                console.log("@@@");
                                if(group2.getChildAt(h).visible != false)
                                  {
                                      group2.getChildAt(h).value2 = "correct";
                                correctflag++;
                                target.x=Number(group2.getChildAt(h).x)-27;//-27
                                target.y=Number(group2.getChildAt(h).y)-25;//-25
                                //target.inputEnabled=false;
                                // group2.getChildAt(h).visible = false;
                                  }
                                //console.log("target x==="+target.x);
                                //console.log("target y==="+target.y);
                            }
                            else
                            {
                              if(group2.getChildAt(h).visible != false)
                                  {
                                      group2.getChildAt(h).value2 = "correct";
                                correctflag2++;
                                target.x=110+(h*106);
                                target.y=277;
                               // target.inputEnabled=false;
                               // group2.getChildAt(h).visible = false;
                                console.log("!!!"+group2.getChildAt(h).visible);
                                  
                                  }
                            }
                           // target.inputEnabled=false;
                            break;
                        }
                        else
                        {
                            target.value2 = "wrong";
                            console.log("not matched");
                           // _this.wmusic.play();
                            //shake.shake(10,target);
                            if(target.value=="slide1")
                            {
                                console.log("111 "+group2.getChildAt(h).visible);
                               /* if(target==groupdays[displdays[0]])
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
                                }*/
                                if(group2.getChildAt(h).visible != false)
                                  {
                                target.x=Number(group2.getChildAt(h).x)-27;//-27
                                target.y=Number(group2.getChildAt(h).y)-25;//-25
                                  }
                                else
                                    {
                                         console.log("Else");
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
                            }
                            else
                            {
                                console.log("222");
                                /*if(target==groupdays[displdays[0]])
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
                                }*/
                                if(group2.getChildAt(h).visible != false)
                                  {
                                      //group2.getChildAt(h).visible = false;
                                        console.log("$$$");
                                        target.x=110+(h*106);
                                        target.y=277;
                                  }
                                else{
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
                                 
                            }
                            
                          break;
                        }
                        
                    }
                else{
                    if(target.value=="slide2")
                            {
                                console.log("@nd Else");
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
                    else{
                         console.log("@nd Else");
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
                    }
               
                }
            
                 _this.TempValue = target.value;
                _this.rightmark.visible = true;
                _this.rightmark.inputEnabled=true;
                _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
               
        },
            
      clickTickMark:function(target){

        if(groupdays)
        {
            for(var k=0;k<groupdays.length;k++){
                groupdays[k].inputEnabled = false;
            }
        }
          var value = "correct";
         
                _this.rightmark.frame = 1;
                for(var j=0;j<group2.length;j++)
                {
                   if(group2.getChildAt(j).value2 == "wrong")
                    {
                       value = "wrong";
                        
                    }
                }
                
                if(value == "correct")
                    {
                        telInitializer2.gameCorrectAns();
                       commonNavBar.playCelebrationSound();
                    correctflag2=0;
                    this.correctans(target);  
                    }
                else{
                    telInitializer2.gameWrongAns();
                     _this.wrongans(target);
                    commonNavBar.playWrongCelebrationSound();
                }
           // }
          target.events.onInputDown.removeAll();
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

        // absdsjsapi.saveAssessment(saveAsment);

        //        telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

        //        _this.speakerbtn.inputEnabled=false;
        commonNavBar.playClickSound()
        commonNavBar.playCelebrationSound();
		_this.Stararr.push(3);
        var starAnim = _this.starsGroup.getChildAt(count1);
        starAnim.smoothed = false;
        var anim = starAnim.animations.add('star');
        anim.play();
        //        count++;
        if(_this.TempValue=="slide1")
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
        else if(_this.TempValue=="slide2")
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
			_this.rightmark.destroy();
            _this.removeEverything();
        },this);
    },

    wrongans:function(target){

        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(count1).frame = 1;

        this.time.events.add(1500,function(){
			_this.rightmark.destroy();
            _this.removeEverything();
        },this);
    },

    removeEverything:function(target){
        var tween = this.add.tween(slidegroup);
        tween.to({ x: -1000}, 0, 'Linear', true, 0);
        tween.onComplete.add(function(){
            if(count1 < 4){
                chknumb=new Array();
                this.getslides();
                _this.starsGroup.getChildAt(count1+1).frame = 2; 
                count1++;
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
                _this.stopVoice();
                var timerStopVar = commonNavBar.stopTimer();
                commonNavBar.stopTimer();
                commonNavBar.stopVoice();
                commonNavBar.navBar = null;
                commonNavBar.backbtn = null;
                commonNavBar.mcIcon = null;
                commonNavBar.speakerbtn = null;

                _this.state.start('time_MTG_1_1level3',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
            }

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
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/5.2_3.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/5.2_3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/5.2_3.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/5.2_3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/5.2_3.mp3";
                }
                else if(window.languageSelected == "Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/5.2_3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/5.2_3.mp3";
                }
				else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/5.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/5.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/5.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/5.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/5.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/5.2_3.mp3";
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/5.2_3.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/5.2_3.mp3";
                      } 
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_3.mp3";
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
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/5.2_1.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/5.2_1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/5.2_1.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/5.2_1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/5.2_1.mp3";
                }
                else if(window.languageSelected == "Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/5.2_1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/5.2_1.mp3";
                }
				else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/5.2_1.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/5.2_1.mp3";
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/5.2_1.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/5.2_1.mp3";
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/5.2_1.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/5.2_1.mp3";
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/5.2_1.mp3");
                           _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/5.2_1.mp3";
                      } 
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_1.mp3";
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
        }

        commonNavBar.addNavBar(this,_this.soundurl,"measurement3");
        commonNavBar.getVoice(_this.soundurl);
        //commonNavBar.stopVoice();

        //_this.playQuestionSound.appendChild(_this.src);
        //_this.playQuestionSound.play();
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

    shutdown:function()
    {
        this.stopVoice();
    }

};