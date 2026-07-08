Game.time_MTG_1_1level3=function(){};

var background;
var slidearray=new Array();
var correctflag=0;
var correctflag2=0;
var status2="before";
var slideno=0;
var randomslno=0;
var chkflag=0,chkflag1=0;

var chknumb;
var sl1no;
var sl2no;

var starsGroup;
var speakerBtn;
var count;
var groupdays;
var randomdays;
var selectedarray;
var displdays;
var blankarray;
var blankbox;
var group2;
var sortArr;
var sortedArray;

var slidegroup;
var selmonth;

var glow;
var middays;

var groupdayname;
var noofAttempts;
var timer;
var AnsTimerCount;
var gameid;

Game.time_MTG_1_1level3.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;
        //        _this.gameid = "5.2";
        //        telInitializer.gameIdInit("time5_2",gradeSelected);
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
        count=5;
        middays=null;
        slidearray=new Array();
        correctflag=0;
        correctflag2=0;
        status2="before";
        slideno=0;
        randomslno=0;
        chkflag=0;
        chkflag1=0;

        slidearray1=[1,2,3,4,5,6];
        slidearray1 = this.shuffle(slidearray1);            
        chknumb=new Array();
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        background = this.add.tileSprite(0,-10,this.world.width,this.world.height-50, 'Level52_bg1');
        background.scale.setTo(1.05,1.12);

        //        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        //        _this.TopBar.name="grade11_TopBar";
        //        _this.TopBar.scale.setTo(1,1.1);
        //
        //        this.generateStarsForTheScene(6);
        //
        //        _this.backbtn = _this.add.sprite(10,7,'grade11_backbtn');
        //        _this.backbtn.inputEnabled = true;
        //        _this.backbtn.events.onInputDown.add(function()
        //                                             {
        //            //_this.cache.destroy();
        //            _this.backbtn.events.onInputDown.removeAll();
        //            // _this.stopVoice();
        //            _this.clickSound.play();
        //            if(grade2Selected == false)
        //                _this.state.start('grade1levelSelectionScreen',true,false); 
        //            else
        //                _this.state.start('grade2levelSelectionScreen',true,false);
        //            //  _this.state.start('grade4levelSelectionScreen',true,false); 
        //        },_this);
        //
        //        _this.speakerbtn = _this.add.sprite(595,7,'grade11_speaker');
        //        /*_this.speakerbtn.events.onInputDown.add(function()
        //        { 
        //            _this.clickSound.play();
        //            _this.getVoice();
        //        },_this);*/
        //
        //        _this.timebg=this.add.sprite(300,9,'Level42C_timer');
        //        _this.timebg.name="common_timebg";
        //        _this.timebg.scale.setTo(1.2,1);
        //
        //
        //        this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
        //        _this.timeDisplay.anchor.setTo(0.5);
        //        _this.timeDisplay.align = 'center';
        //        _this.timeDisplay.font = 'Oh Whale';
        //        _this.timeDisplay.fontSize = 20;
        //        //text.fontWeight = 'bold';
        //        _this.timeDisplay.fill = '#ADFF2F';

        commonNavBar.addNavBar(game,_this.soundurl,"measurement3");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MTG1.1','level3',false,false,false,0];
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
        _this.starsGroup.getChildAt(5).frame = 2;	               
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

        //
        //        _this.speakerbtn.inputEnabled=true;
        //        _this.speakerbtn.input.useHandCursor = true;

        status2="before";
        _this.stopVoice();
        //console.log("sl1no=="+sl1no);
        switch(slidearray1[sl1no])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:this.slide1(); break;
        }
        _this.rightmark = this.add.sprite(880,240,'Level51A_tickMark');
        _this.rightmark.inputEnabled=false;
		_this.rightmark.visible = false;
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    slide1:function()
    {
        groupdayname = new Array();
        slidegroup=this.add.group();
        sl1no++;
        blankarray=new Array();    
        groupdays=new Array();
        blankbox=new Array();
        randomdays=new Array();
        displdays=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        group2=this.add.group();
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
        else if(sl1no==2 || sl1no==5)
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
        else if(sl1no==3 || sl1no==6)
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
        else
        {
            dayselct=19;
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
            randomdays.push(groupdays[k]); 
            groupdays[k].addChild(groupdayname[k]);
        }

        randomdays=Object.keys(randomdays);

        randomdays=this.shuffle(randomdays);

        displdays=this.fetchrandom(randomdays,"slide1");
        //console.log("chkflag=="+chkflag);
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

            for(var i=0;i<displdays.length;i++)
            { 
                blankarray.push(blankbox[displdays[i]]);
                if(i==2)
                {
                    selmonth.push(((blankarray[i].name).substring(3)-1));

                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='day'+(selmonth[j]);
                        sortArr[j].x=205+(366*j);
                        sortArr[j].y=100;
                        sortArr[j].alpha=1;
                        sortArr[j].scale.setTo(0.99,0.98);
                        group2.add(sortArr[j]);
                    }
                }

                slidegroup.add(group2);
                if(i==1)
                {

                    groupdays[displdays[i]].x=205+(183*i);
                    groupdays[displdays[i]].y=100;
                    groupdays[displdays[i]].alpha=1;
                    groupdays[displdays[i]].name="day"+displdays[i];
                    middays=groupdays[displdays[i]].name;
                    groupdays[displdays[i]].inputEnabled = false;  
                }
                else
                {
                    selmonth.push(((blankarray[i].name).substring(3)-1));
                    groupdays[displdays[i]].x=505-(100*i);
                    groupdays[displdays[i]].y=300;
                    groupdays[displdays[i]].alpha=1;
                    groupdays[displdays[i]].name="day"+displdays[i];
                    groupdays[displdays[i]].inputEnabled = true;
                    groupdays[displdays[i]].input.useHandCursor = true;
                    groupdays[displdays[i]].input.enableDrag(true);
                    groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
                    groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
                }

                slidegroup.add(groupdays[displdays[i]]);
            }
            this.getVoice(middays,status2);
            commonNavBar.speakerbtn.events.onInputDown.add(function(){
                //_this.stopVoice();
                commonNavBar.playClickSound();
                this.getVoice(middays,status2);
            },this);
            slidegroup.x = 960;

            var tween = this.add.tween(slidegroup);
            tween.to({ x: 0}, 0, 'Linear', true, 0);
        }
        for(var j=0;j<group2.length;j++)
            {
               group2.getChildAt(j).visible = true; 
               group2.getChildAt(j).value2 = "wrong"; 
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
               group2.getChildAt(j).canAdd = true;
               //group2.getChildAt(j).value2 = "wrong"; 
            }
            
            for(var i=0;i<groupdays.length;i++)
                                    {
                                        for(var j=0;j<group2.length;j++)
                                        {
                                            if(_this.checkOverlap(groupdays[i],group2.getChildAt(j)))
                                            { 
                                                group2.getChildAt(j).canAdd = false;
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
            _this.noHit = true;

        //absdsjsapi.saveInteractEvent(interactEvent);

        target.value2 = "wrong";
        target.width+=13;
        commonNavBar.playSnapSound();  
         for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)) && group2.getChildAt(h).canAdd)
                    {     
                         noofAttempts++;
                        if(target.name==group2.getChildAt(h).name)
                        {
                            if(h==1 && status2=="before")
                            {
                                //alert(1);
                                console.log("mismatch");
                                //_this.wmusic.play();
                                //shake.shake(10,target); 
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=505-(100*2);
                                    target.y=300;
                                }
                                //status2="after";
                               /* status2="after";
                                this.getVoice(middays,status2);
                                
                                        //group2.getChildAt(h).value2 = "correct";
                                        target.x=group2.getChildAt(h).x;
                                        target.y=group2.getChildAt(h).y;*/
                                  
                            }
                            else
                            {
                                //alert(2);
                                 status2="after";
                                console.log("correct match");
                                correctflag++;
                                //if(correctflag==1)
                                //    this.getVoice(middays,status2);
                                
                                        group2.getChildAt(h).value2 = "correct";
                                        target.x=group2.getChildAt(h).x;
                                        target.y=group2.getChildAt(h).y;
                                  
                                //taret.inputEnabled=false;
                            }  
                           // break;
                        }
                        else
                        {
                            //alert(3);
                            group2.getChildAt(h).value2 = "wrong";
                             target.value2 = "wrong";
                            console.log("ELSE mismatch");
                           // _this.wmusic.play();
                        //    shake.shake(10,target); 
                            if(h==1 && status2=="before")
                                {
                                    
                                    if(target==groupdays[displdays[0]])
                                    {
                                        target.x=505-(100*0);
                                        target.y=300;
                                    }
                                    else if(target==groupdays[displdays[1]])
                                    {
                                        target.x=505-(100*1);
                                        target.y=300;
                                    }
                                    else if(target==groupdays[displdays[2]])
                                    {
                                        target.x=505-(100*2);
                                        target.y=300;
                                    }
                                }
                            else{
                                
                                        status2="after";
                                        //if(correctflag==1)
                                          //  this.getVoice(middays,status2);
                                        //group2.getChildAt(h).value2 = "correct";
                                        target.x=group2.getChildAt(h).x;
                                        target.y=group2.getChildAt(h).y;
                            }
                             //target.x=group2.getChildAt(h).x;
                             //           target.y=group2.getChildAt(h).y;*/
                            /*status2="after";
                            this.getVoice(middays,status2);
                                
                                        //group2.getChildAt(h).value2 = "correct";
                                        target.x=group2.getChildAt(h).x;
                                        target.y=group2.getChildAt(h).y;
                                  */
                           // break;
                        }
                        _this.noHit = false;
                    }  

            }

            if(_this.noHit)
                    {
                        
                          if(target==groupdays[displdays[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=505-(100*2);
                                    target.y=300;
                                }

                            if(!group2.getChildAt(0).canAdd && group2.getChildAt(1).canAdd)
                            {
                                status2="before";
                            }
                            else if(group2.getChildAt(0).canAdd && !group2.getChildAt(1).canAdd)
                            {
                                status2="before";
                            }
                            else if(!group2.getChildAt(0).canAdd && !group2.getChildAt(1).canAdd)
                            {
                                status2="afer";
                            }
                    }

            if(status2=="before")
            {
                //status2="before";
                this.getVoice(middays,status2);
            }
            else
            {
                //status2="after";
                this.getVoice(middays,status2);
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
                    commonNavBar.playWrongCelebrationSound();
                    _this.wrongans(target);
                }
           // }
        target.events.onInputDown.removeAll();
      }, 

    wrongans:function(target){

        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(count).frame = 1;

        this.time.events.add(1500,function(){
			_this.rightmark.destroy();
            _this.removeEverything();
        },this);
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
        _this.questionid = 3;

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

        glow=this.add.sprite(0,0,'Level52_glow');
        glow.height-=58;
        glow.width+=10;
        glow.alpha=0;
        //console.log("correct ans==");
        //        _this.speakerbtn.inputEnabled=false;
        commonNavBar.playClickSound();
        commonNavBar.playCelebrationSound();
        _this.Stararr.push(3);
        var starAnim = _this.starsGroup.getChildAt(count);
        starAnim.smoothed = false;
        var anim = starAnim.animations.add('star');
        anim.play();
        //        count++;
        var tweendown = this.add.tween(slidegroup);
        tweendown.to({ y: 100}, 0, 'Linear', true, 0);
        tweendown.onComplete.add(function(){
            this.addGlowToSprite();
        },this);
        this.time.events.add(3000,function(){
            glow.destroy();
			_this.rightmark.destroy();
            _this.removeEverything();
        },this);
    },

    removeEverything:function(){
        var tween = this.add.tween(slidegroup);
        tween.to({ x: -1000}, 0, 'Linear', true, 0);
        tween.onComplete.add(function(){
            if(count < 5){
                _this.starsGroup.getChildAt(count+1).frame = 2; 
                 //_this.rightmark.frame = 0;
                // _this.rightmark.destroy();
                count++;
                this.getslides();
            }
            else
            {
                sl1no=0;
                sl2no=0;
                randomslno=0;
                // _this.rightmark.frame = 0
                 // _this.rightmark.destroy();
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
                count=5;
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

                _this.state.start('time_MTG_1_1level4',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
            }

        },this);
    },

    update:function(){

    },

    addGlowToSprite:function(){
        glow.x=176+(0*180);
        glow.y=173;
        glow.alpha=1;
        this.time.events.add(700,function(){
            glow.x=176+(1*180);
            glow.y=173;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(2*180);
                glow.y=173;
                glow.alpha=1;
            },this);
        },this); 
    },

    getVoice:function(middays,status2){
        //console.log("getvoice");
        _this.stopVoice();  
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(middays==null)
        {

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
            }

        }
        else
        {
            //console.log("getvoice in else"+middays);

            switch(middays)
            {
                case 'day0':
                    if(window.languageSelected == "English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-monday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-monday.mp3";
                        }
                    } 
                    else if(window.languageSelected == "Hindi")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-monday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-monday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-monday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-monday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-monday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-monday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-monday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-monday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-monday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-monday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-monday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-monday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-monday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-monday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-monday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-monday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_6.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_6.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_7.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_7.mp3";
                        }
                    }
                    break;
                case 'day1':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-tuesday.mp3";
                        } else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-tuesday.mp3";
                        }
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-tuesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-tuesday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-tuesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-tuesday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-tuesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-tuesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-tuesday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-tuesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-tuesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-tuesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-tuesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-tuesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-tuesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-tuesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-tuesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-tuesday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_8.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_8.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_9.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_9.mp3";
                        }
                    }
                    break;
                case 'day2':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-wednesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-wednesday.mp3";
                        }
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-wednesday.mp3"; 
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-wednesday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-wednesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-wednesday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-wednesday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-wednesday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-wednesday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-wednesday.mp3");
                                   _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-wednesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-wednesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-wednesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-wednesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-wednesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-wednesday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-wednesday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-wednesday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-wednesday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_10.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_10.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_11.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_11.mp3";
                        }
                    }
                    break;
                case 'day3':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-thursday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-thursday.mp3";
                        }
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-thursday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-thursday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-thursday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-thursday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-thursday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-thursday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-thursday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-thursday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-thursday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-thursday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-thursday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-thursday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-thursday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-thursday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-thursday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-thursday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_12.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_12.mp3";
                        }else{
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_13.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_12.mp3";
                        }
                    }
                    break;
                case 'day4':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-friday.mp3";
                        } else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-friday.mp3";
                        }
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-friday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-friday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-friday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-friday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-friday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-friday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-friday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-friday.mp3");
                                   _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-friday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-friday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-friday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-friday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-friday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-friday.mp3");
                                   _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-friday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-friday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-friday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-friday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_14.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_14.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_15.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_15.mp3";
                        }
                    }
                    break;
                case 'day5':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-saturday.mp3";
                        } else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-saturday.mp3";
                        }
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-saturday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-saturday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-saturday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-saturday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-saturday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-saturday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-saturday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-saturday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-saturday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-saturday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-saturday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-saturday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-saturday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-saturday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-saturday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-saturday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_16.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_16.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_17.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_17.mp3";
                        }
                    }
                    break;
                case 'day6':
                    if(window.languageSelected=="English")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/b-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/b-sunday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/English/a-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/English/a-sunday.mp3";
                        }
                    }   
                    else if(window.languageSelected=="Hindi")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/b-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/b-sunday.mp3";
                        } else{
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Hindi/a-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Hindi/a-sunday.mp3";
                        }
                    }   
                    else if(window.languageSelected == "Kannada")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/b-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/b-sunday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Kannada/a-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Kannada/a-sunday.mp3";
                        }
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/b-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/b-sunday.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/5.2/a-sunday.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.2/a-sunday.mp3";
                        }
                    }
					else if(window.languageSelected == "Marathi")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/b-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/b-sunday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Marathi/a-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Marathi/a-sunday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/b-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/b-sunday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Telugu/a-sunday.mp3");
                                   _this.soundurl =  window.baseUrl+"questionSounds/5.2/Telugu/a-sunday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/b-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/b-sunday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Tamil/a-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Tamil/a-sunday.mp3";
								}
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           if(status2=="before")
						   {
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/b-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/b-sunday.mp3";
						   }
                                else
								{
                                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Urdu/a-sunday.mp3");
                                    _this.soundurl =  window.baseUrl+"questionSounds/5.2/Urdu/a-sunday.mp3";
								}
                      } 
                    else
                    {
                        if(status2=="before"){
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_4.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_4.mp3";
                        }else{
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.2/Odiya/5.2_5.mp3");
                            _this.soundurl =  window.baseUrl+"questionSounds/5.2/Odiya/5.2_5.mp3";
                        }
                    }
                    break;
                default: //console.log("in default case");
                    break;
            }
        }
        commonNavBar.addNavBar(this,_this.soundurl,"measurement3");
        commonNavBar.getVoice(_this.soundurl);
        /*_this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        if(window.languageSelected == "Odiya")
        {
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }*/

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