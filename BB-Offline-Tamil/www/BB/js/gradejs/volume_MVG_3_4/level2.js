Game.volume_MVG_3_4level2=function(){};
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

Game.volume_MVG_3_4level2.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;

        //        _this.gameid = "4.3B";
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

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
        count1=3;
        tweenCount = 0;

        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        if(window.languageSelected == "English")  
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/English/4.3B1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Hindi/4.3B1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Kannada/4.3B1.mp3";
        }
		else if(window.languageSelected == "Gujarati")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/4.3A/4.3B1.mp3";
		}
		else if(window.languageSelected == "Marathi")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.1A/Marathi/4.3B1.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.1A/telugu/4.3B1.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.1A/Tamil/4.3B1.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.1A/Urdu/4.3B1.mp3";
                    }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Odiya/4.3B1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar.addNavBar(game,_this.soundurl,"measurement4");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MVG3.4','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);
        
        // After playing Question sounds for a particular seconds 
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
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    gotoFirstQuestion:function(){

        questionNo = 1;
        _this.firstValue = 50;
        _this.secondValue = 1;

        eqnum = 0;
        objGroup = this.add.group();
        fillingJarGroup = this.add.group();
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(618,360,'Level43A_redmark');
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

        fillingJarGroup = this.add.group();
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(610,290,'Level43A_redmark');
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

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_100Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "100Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_100Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "100Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(610,200,'Level43A_redmark');
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

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_250Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "250Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(610,200,'Level43A_redmark');
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
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(643,185,'Level43A_redmark');
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

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(260,415,'Level43A_250Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "250Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(643,185,'Level43A_redmark');
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

        eqnum = 5;
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(260,415,'Level43A_250Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "250Q";
        if(no1==0)
        {
//            this.getVoice();
//            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
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

        redmark=this.add.sprite(600,182,'Level43A_redmark');
//        redmark=this.add.sprite(600,182,'Level43A_arrow');
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
        
        countIncrement++;
        if(questionNo == 1)
        {
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playWaterFillingSound();
            
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
            commonNavBar.playClickSound();

            wrongbtn.frame = 1;enterTxt.setText("");selectedAns="";
            this.time.events.add(1000, function(){wrongbtn.frame = 0},this);
        },this);

        rightbtn.events.onInputDown.add(function(target){
            noofAttempts++;
            target.events.onInputDown.removeAll();
            commonNavBar.playClickSound();
            rightbtn.frame = 1;
            this.time.events.add(1000, function(){rightbtn.frame = 0},this);
            //console.log(selectedAns);
            //console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
            {
                telInitializer2.gameCorrectAns();
                target.events.onInputDown.removeAll();
                
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

                /*var currentTime = window.timeSaveFunc();
                var saveAsment = 
                    { 
                        id_game_play: _this.savedVar,
                        id_question: _this.questionid,  
                        pass: "Yes",
                        time2answer: AnsTimerCount,
                        attempts: noofAttempts,
                        date_time_submission: currentTime, 
                        access_token: window.acctkn 
                    }*/

                commonNavBar.playCelebrationSound();
                _this.Stararr.push(3);
                var starAnim = _this.starsGroup.getChildAt(count1);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
               
                txtbox.frame = 1;
                
                var tween1 = this.add.tween(txtbox.scale);
                tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                
                tween1.onComplete.add(function(){
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
                telInitializer2.gameWrongAns();
                noofAttempts++;
                //console.log("wrong");
                selectedAns = "";
                enterTxt.setText("");
                shake.shake(10, txtbox);
                commonNavBar.playWrongCelebrationSound();
                _this.Stararr.push(1);
                _this.starsGroup.getChildAt(count1).frame = 1;

                txtbox.frame = 1;
                
                var tween1 = this.add.tween(txtbox.scale);
                tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                
                tween1.onComplete.add(function(){
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
            
        },this);
    },

    numClicked:function(target){

        commonNavBar.playClickSound(); 
        
        if(selectedAns.length<4)
        {
            selectedAns += target.frame;
            objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }

    },

    removeEverthing:function() 
    {
        no1++;
        if(no1 < 3)
        {
            //no1++;
            wrong = true;
            var MaintweenDestroy = this.add.tween(shakeObjectGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);

            var MaintweenDestroy1 = this.add.tween(b3);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);

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
                
                _this.starsGroup.getChildAt(count1+1).frame = 2; 
                count1++;
            },this);
            
            tweenCount=0;

        }
        else
        {
            // //console.log("gameover");
            selectedAns = '';
            countIncrement = 0;
            this.stopVoice();
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.navBar = null;
            commonNavBar.backbtn = null;
            commonNavBar.mcIcon = null;
            commonNavBar.speakerbtn = null;

            _this.state.start('volume_MVG_3_4level3',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },
    
    backToOriginalPosition:function(){

        selectedAns = 0;
        countIncrement = 0;
    
    },

    update:function(){

    },

    getVoice:function(question)
    {   
        /*_this.stopVoice();  

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
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3B1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();*/

        commonNavBar.getVoice(_this.soundurl);

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
    }

};