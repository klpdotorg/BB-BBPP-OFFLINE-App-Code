Game.placevalue_NSPVG_1_1level2=function(){};

Game.placevalue_NSPVG_1_1level2.prototype={
    init:function(param,score,timerStopVar)
    {
        _this = this;
        // telInitializer.gameIdInit("sequence2_6_1",gradeSelected);
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

        commonNavBar.level2Bool = true;

    },

    create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this.amplify = null;
        this.hintparams=[];
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click3;
        _this.click1;
        _this.click2;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
        _this.objGrp;
        _this.n1Check;
        _this.n2Check;
        _this.questioNo = 0;
        _this.glowGrp;
        _this.boxGrp;
        _this.n1=0;
        _this.n2=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=4;
        _this.minutes=0;
        _this.seconds=0;
        _this.correct=0;
        _this.n1Check = false;
        _this.n2Check = false;

        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
        _this.boxAdded = 0;

        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);
        //        _this.soundurl="questionSounds/2.6.1/English/26.1E.mp3";
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity2_6_1_backg');

        if(window.languageSelected=="English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/2.6.1/English/26.1E.mp3";
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/2.6.1/Hindi/26.1H.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/2.6.1/Kannada/26.1K.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
             _this.soundurl = window.baseUrl+"questionSounds/Gujarati/2.6.1/26.1E.mp3";
         }
		 else if(window.languageSelected=="Marathi")
                    {
                       _this.soundurl = window.baseUrl+"questionSounds/2.6.1/Marathi/26.1E.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/2.6.1/Telugu/26.1E.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/2.6.1/Tamil/26.1E.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/2.6.1/Urdu/26.1E.mp3";
                    }
        else
        {
            _this.soundurl = window.baseUrl+"questionSounds/2.6.1/Odiya/2.6.1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar.addNavBar(game,_this.soundurl,"numbersense4");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        //commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSPVG1.1','level2',false,false,true,1];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(8);

        _this.graphics5 = _this.add.graphics(50, 50);
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(5, 5, 300, 400);
        _this.graphics5.alpha = 0;
        _this.getQuestion(); 
        _this.getVoice();		

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

    getQuestion:function(target)
    {
        commonNavBar.startTimer(this);
        _this.stopvoice();
        _this.questionid =1;
        //        _this.speakerbtn = _this.add.sprite(610,7,'speakerBtn');
        //        _this.speakerbtn.inputEnabled=true;
        //        _this.speakerbtn.events.onInputDown.add(function(){
        //            _this.getVoice(_this.soundurl);		
        //        },this);
        switch(_this.qArrays[_this.no11])
        {
            case 1: _this.gotoFirstQuestion();
                break; 
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break; 
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
            case 7: _this.gotoSeventhQuestion();
                break;
            case 8: _this.gotoEighthQuestion();
                break;
            case 9: _this.gotoNinthQuestion();
                break; 
            case 10: _this.gotoTenthQuestion();
                break;         

        }
        telInitializer2.gameQuestionStart(this,_this.questionid);

        commonNavBar.enableHintIcon();
    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 8, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
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
        _this.starsGroup.getChildAt(4).frame = 2;
    },


    createNumbers:function(){

        _this.base = _this.add.sprite(642,289,'unity2_6_1_Base');//644,297
        _this.base.anchor.setTo(0.5);
        //_this.base.scale.setTo(0.97,1.03); 
        _this.base.scale.setTo(0.70,0.85); 

        _this.rightmark = _this.add.sprite(880,290,'unity2_6_1_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        _this.Rectangle1 = _this.add.sprite(506,172,'unity2_6_1_Rectangle');
        _this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 

        _this.text1 = _this.add.text(0, 0, "1");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);

        _this.Rectangle2 =_this.add.sprite(574,172,'unity2_6_1_Rectangle');
        _this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 

        _this.text2 = _this.add.text(0, 0, "2");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);

        _this.Rectangle3 =_this.add.sprite(642,172,'unity2_6_1_Rectangle');
        _this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 

        _this.text3 = _this.add.text(0, 0, "3");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);

        _this.Rectangle4 =_this.add.sprite(710,172,'unity2_6_1_Rectangle');
        _this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 

        _this.text4 = _this.add.text(0, 0, "4");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);

        _this.Rectangle5 =_this.add.sprite(779,172,'unity2_6_1_Rectangle');//712
        _this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 

        _this.text5 = _this.add.text(0, 0, "5");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);

        _this.Rectangle6 =_this.add.sprite(506,252,'unity2_6_1_Rectangle');
        _this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 

        _this.text6 = _this.add.text(0, 0, "6");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);

        _this.Rectangle7 =_this.add.sprite(574,252,'unity2_6_1_Rectangle');
        _this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 

        _this.text7 = _this.add.text(0, 0, "7");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);

        _this.Rectangle8 =_this.add.sprite(642,252,'unity2_6_1_Rectangle');
        _this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 

        _this.text8 = _this.add.text(0, 0, "8");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);

        _this.Rectangle9 =_this.add.sprite(710,252,'unity2_6_1_Rectangle');
        _this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);

        _this.text9 = _this.add.text(0, 0, "9");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);

        _this.Rectangle10 =_this.add.sprite(779,252,'unity2_6_1_Rectangle');
        _this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 

        _this.text10 = _this.add.text(0, 0, "10");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);

        _this.Rectangle11 =_this.add.sprite(506,332,'unity2_6_1_Rectangle');
        _this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 

        _this.text11 = _this.add.text(0, 0, "11");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);

        _this.Rectangle12 =_this.add.sprite(574,332,'unity2_6_1_Rectangle');
        _this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 

        _this.text12 = _this.add.text(0, 0, "12");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);

        _this.Rectangle13 =_this.add.sprite(642,332,'unity2_6_1_Rectangle');
        _this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 

        _this.text13 = _this.add.text(0, 0, "13");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);

        _this.Rectangle14 =_this.add.sprite(710,332,'unity2_6_1_Rectangle');
        _this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 

        _this.text14 = _this.add.text(0, 0, "14");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);

        _this.Rectangle15 =_this.add.sprite(779,332,'unity2_6_1_Rectangle');
        _this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 

        _this.text15 = _this.add.text(0, 0, "15");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);

        _this.Rectangle16 =_this.add.sprite(506,412,'unity2_6_1_Rectangle');
        _this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 

        _this.text16 = _this.add.text(0, 0, "16");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);

        _this.Rectangle17 =_this.add.sprite(574,412,'unity2_6_1_Rectangle');
        _this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 

        _this.text17 = _this.add.text(0, 0, "17");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);

        _this.Rectangle18 =_this.add.sprite(642,412,'unity2_6_1_Rectangle');
        _this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 

        _this.text18 = _this.add.text(0, 0, "18");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);

        _this.Rectangle19 =_this.add.sprite(710,412,'unity2_6_1_Rectangle');
        _this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 

        _this.text19 = _this.add.text(0, 0, "19");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);

        _this.Rectangle20 =_this.add.sprite(779,412,'unity2_6_1_Rectangle');
        _this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 

        _this.text20 = _this.add.text(0, 0, "20");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);

    },

    gotoFirstQuestion:function()
    {
        //_this.getVoice();
        _this.createNumbers();

        _this.Rectangle16.alpha = 0;
        _this.Rectangle17.alpha = 0;

        _this.Rectangle9.alpha = 0;
        _this.Rectangle10.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 210);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(380, 164, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(100, -112);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(584, 322, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(544,377,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.9);
        _this.glow1.frame=25;
        _this.glow1.name = "box1";

        _this.glow2 =_this.add.sprite(749,216,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.9);
        _this.glow2.frame=25;
        _this.glow2.name = "box2";

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,150,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=1;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text16 = _this.add.text(1, -2, "16");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text16);

        _this.text17 = _this.add.text(80, -1, "17");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text17);

        _this.box2 =_this.add.sprite(200,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8); 
        _this.box2.frame=1;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text33 = _this.add.text(1, -2, "9");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text33);

        _this.text34 = _this.add.text(80, -1, "10");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text34);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=34;
        _this.n2=-36;

        _this.x1=100;
        _this.y1=150;

        _this.x2=200;
        _this.y2=400;

        _this.hl1=13;
        _this.hl2=13;

    },

    gotoSecondQuestion:function()
    {

        // _this.getVoice();
        _this.createNumbers();

        _this.Rectangle14.alpha = 0;
        _this.Rectangle9.alpha = 0;
        _this.Rectangle11.alpha = 0;
        _this.Rectangle16.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(-40, 130);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(720, 85, 60, 145);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(165, 55);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(310, 245, 60, 145);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(714,253,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.75,0.95);
        _this.glow1.frame=1;


        _this.glow2 =_this.add.sprite(507,336,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.75,0.95);
        _this.glow2.frame=1;


        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,152,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=0;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text14 = _this.add.text(1, 0, "9");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text14);

        _this.text21 = _this.add.text(1, 78, "14");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text21);

        _this.box2 =_this.add.sprite(200,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=0;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text22 = _this.add.text(1, 0, "11");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text22);

        _this.text29 = _this.add.text(1, 78, "16");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text29);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=1;
        _this.n2=-2;

        _this.x1=100;
        _this.y1=152;

        _this.x2=200;
        _this.y2=400;

        _this.hl1=12;
        _this.hl2=12;
    },


    gotoThirdQuestion:function()
    { 
        // _this.getVoice();
        _this.createNumbers();

        _this.Rectangle1.alpha = 0;
        _this.Rectangle2.alpha = 0;
        _this.Rectangle3.alpha = 0;
        _this.Rectangle16.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle18.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(162, 132);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(310, 3, 195, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(95, 55);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(380, 322, 195, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(575,129,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(1.2,1);
        _this.glow1.frame=25;  

        _this.glow2 =_this.add.sprite(575,374,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(1.2,1);
        _this.glow2.frame=25;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(200,160,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=3;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text1 = _this.add.text(-80, 0, "1");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text1);

        _this.text2 = _this.add.text(0, 0, "2");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text2);

        _this.text3 = _this.add.text(80, 0, "3");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);

        _this.box2 =_this.add.sprite(200,350,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=3;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text30 = _this.add.text(-83, 0, "16");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text30);

        _this.text31 = _this.add.text(0, 0, "17");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text31);

        _this.text32 = _this.add.text(80, 0, "18");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text32);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=3;
        _this.n2=-42;

        _this.x1=200;
        _this.y1=160;

        _this.x2=200;
        _this.y2=350;

        _this.hl1=15;
        _this.hl2=15;
    },

    gotoFourthQuestion:function()
    {
        // _this.getVoice();
        _this.createNumbers();

        _this.Rectangle4.alpha = 0;
        _this.Rectangle9.alpha = 0;
        _this.Rectangle14.alpha = 0;
        _this.Rectangle7.alpha = 0;
        _this.Rectangle12.alpha = 0;
        _this.Rectangle17.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 130);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(580, 3, 65, 230);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(443, 165, 65, 230);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(714,250,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.99);
        _this.glow1.frame=5;  

        _this.glow2 =_this.add.sprite(577,329,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.99);
        _this.glow2.frame=5;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,160,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=2;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text5 = _this.add.text(0, -80, "4");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text5);

        _this.text12 = _this.add.text(0, -2, "9");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text12);

        _this.text19 = _this.add.text(0, 79, "14");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text19);

        _this.box2 =_this.add.sprite(270,350,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=2;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text17 = _this.add.text(0, -80, "7");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text17);

        _this.text24 = _this.add.text(0, -2, "12");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text24);

        _this.text31 = _this.add.text(0, 79, "17");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text31);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=1;
        _this.n2=-3;

        _this.x1=100;
        _this.y1=160;

        _this.x2=270;
        _this.y2=350;

        _this.hl1=14;
        _this.hl2=14;
    },

    gotoFifthQuestion:function()
    {
        //_this.getVoice();
        _this.createNumbers();

        _this.Rectangle2.alpha = 0;
        _this.Rectangle3.alpha = 0;
        _this.Rectangle18.alpha = 0;
        _this.Rectangle19.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(165, 130);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(380, 3, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(100, 210);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(515, 165, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(611,135,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.9);
        _this.glow1.frame=25;

        _this.glow2 =_this.add.sprite(680,376,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.9);
        _this.glow2.frame=25;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,150,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=1;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text2 = _this.add.text(0, -2, "2");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text2);

        _this.text3 = _this.add.text(80, -2, "3");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);

        _this.box2 =_this.add.sprite(200,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8); 
        _this.box2.frame=1;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text18 = _this.add.text(0, -2, "18");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text18);

        _this.text19 = _this.add.text(80, -2, "19");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal'; 
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text19);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=35;
        _this.n2=-38;

        _this.x1=100;
        _this.y1=150;

        _this.x2=200;
        _this.y2=400;

        _this.hl1=13;
        _this.hl2=13;

    },

    gotoSixthQuestion:function()
    {
        // _this.getVoice();
        _this.createNumbers();
        _this.Rectangle4.alpha = 0;
        _this.Rectangle9.alpha = 0;
        _this.Rectangle13.alpha = 0;
        _this.Rectangle18.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 135);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(580, 3, 65, 150);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(100, 55);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(512, 240, 65, 150);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(714,174,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.75,0.95);
        _this.glow1.frame=1;

        _this.glow2 =_this.add.sprite(646,335,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.75,0.95);
        _this.glow2.frame=1;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,150,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=0;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text5 = _this.add.text(1, 0, "4");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text5);

        _this.text12 = _this.add.text(1, 78, "9");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text12);

        _this.box2 =_this.add.sprite(200,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=0;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text25 = _this.add.text(1, 0, "13");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text25);

        _this.text32 = _this.add.text(1, 78, "18");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text32);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=1;
        _this.n2=-2;

        _this.x1=100;
        _this.y1=150;

        _this.x2=200;
        _this.y2=400;

        _this.hl1=12;
        _this.hl2=12;

    },

    gotoSeventhQuestion:function()
    {
        //_this.getVoice();
        _this.createNumbers();

        _this.Rectangle3.alpha = 0;
        _this.Rectangle4.alpha = 0;
        _this.Rectangle5.alpha = 0;
        _this.Rectangle16.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle18.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 130);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(513, 3, 200, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(160, 210);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(310, 165, 200, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(715,135,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(1.2,0.9);
        _this.glow1.frame=25;  

        _this.glow2 =_this.add.sprite(576,377,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(1.2,0.9);
        _this.glow2.frame=25;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(200,160,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=3;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text4 = _this.add.text(-83, 0, "3");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text4);

        _this.text5 = _this.add.text(0, 0, "4");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text5);

        _this.text6 = _this.add.text(80, 0, "5");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text6);

        _this.box2 =_this.add.sprite(200,350,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=3;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text15 = _this.add.text(-83, 0, "16");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text15);

        _this.text16 = _this.add.text(0, 0, "17");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text16);

        _this.text17 = _this.add.text(80, 0, "18");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text17);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=3
        _this.n2=-35;

        _this.x1=200;
        _this.y1=160;

        _this.x2=200;
        _this.y2=350;

        _this.hl1=15;
        _this.hl2=15;
    },


    gotoEighthQuestion:function()
    {      
        // _this.getVoice();
        _this.createNumbers();

        _this.Rectangle3.alpha = 0;
        _this.Rectangle8.alpha = 0;
        _this.Rectangle13.alpha = 0;
        _this.Rectangle6.alpha = 0;
        _this.Rectangle11.alpha = 0;
        _this.Rectangle16.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(510, 3, 67, 235);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(375, 162, 67, 235);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(645,250,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.99);
        _this.glow1.frame=5  

        _this.glow2 =_this.add.sprite(507,329,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.99);
        _this.glow2.frame=5;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(100,160,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=2;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text4 = _this.add.text(0, -80, "3");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text4);

        _this.text11 = _this.add.text(0, -2, "8");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text11);

        _this.text18 = _this.add.text(0, 79, "13");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text18);

        _this.box2 =_this.add.sprite(270,350,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=2;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text16 = _this.add.text(0, -80, "6");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal'; 
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text16);

        _this.text23 = _this.add.text(0, -2, "11");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text23);

        _this.text30 = _this.add.text(0, 79, "16");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text30);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=1;
        _this.n2=-3;

        _this.x1=100;
        _this.y1=160;

        _this.x2=270;
        _this.y2=350;


        _this.hl1=14;
        _this.hl2=14;

    },

    gotoNinthQuestion:function()
    {         
        //_this.getVoice();
        _this.createNumbers();

        _this.Rectangle4.alpha = 0;
        _this.Rectangle9.alpha = 0;
        _this.Rectangle10.alpha = 0;
        _this.Rectangle12.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle18.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(30, 130);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(650, 85, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics1 = _this.add.graphics(40, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(650, 50, 50, 50);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(95, 135);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(450, 242, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(450, 210, 50, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(715,250,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.92);
        _this.glow1.frame=17;

        _this.glow2 =_this.add.sprite(580,412,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.92);
        _this.glow2.frame=17;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(200,170,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=8;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text6 = _this.add.text(0,-80, "4");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text6);

        _this.text13 = _this.add.text(0,0, "9");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text13);

        _this.text14 = _this.add.text(80,0, "10");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text14);

        _this.box2 =_this.add.sprite(100,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=8;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text17 = _this.add.text(0,-80, "12");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.box2.addChild(_this.text17);

        _this.text24 = _this.add.text(0,0, "17");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text24);

        _this.text25 = _this.add.text(80,0, "18");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text25);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2)

        _this.n1=3;
        _this.n2=-2;

        _this.x1=200;
        _this.y1=170;

        _this.x2=100;
        _this.y2=400;

        _this.hl1=20;
        _this.hl2=20;

    },

    gotoTenthQuestion:function()
    {
        //  _this.getVoice();
        _this.createNumbers();

        _this.Rectangle2.alpha = 0;
        _this.Rectangle3.alpha = 0;
        _this.Rectangle8.alpha = 0;
        _this.Rectangle11.alpha = 0;
        _this.Rectangle12.alpha = 0;
        _this.Rectangle17.alpha = 0;

        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();

        _this.graphics1 = _this.add.graphics(100, 136);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(512, 3, 63, 145);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics1 = _this.add.graphics(100, 90);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(450, 58, 50, 60);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";

        _this.graphics2 = _this.add.graphics(166, 50);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(376, 245, 63, 145);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.graphics2 = _this.add.graphics(158, 0);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(318, 295, 50, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";

        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);

        _this.glow1 =_this.add.sprite(645,173,'unity2_6_1_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.95);
        _this.glow1.frame=21;

        _this.glow2 =_this.add.sprite(576,335,'unity2_6_1_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.95);
        _this.glow2.frame=21;

        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);

        _this.boxGrp=_this.add.group();

        _this.box1 =_this.add.sprite(150,180,'unity2_6_1_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=10;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text3 = _this.add.text(-80, -2, "2");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);

        _this.text4 = _this.add.text(0, 1, "3");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text4);

        _this.text11 = _this.add.text(0, 80, "8");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text11);

        _this.box2 =_this.add.sprite(200,400,'unity2_6_1_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=10;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);

        _this.text22 = _this.add.text(-80, 0, "11");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text22);

        _this.text23 = _this.add.text(0, 1, "12");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text23);

        _this.text30 = _this.add.text(0, 80, "17");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text30);

        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);

        _this.n1=-1;
        _this.n2=-2;

        _this.x1=150;
        _this.y1=180;

        _this.x2=200;
        _this.y2=400;

        _this.hl1=22;
        _this.hl2=22;
    },



    onDragStart:function(target){
		 target.bringToTop(graphics1);
        target.bringToTop(graphics2);
        // _this.noofAttempts++;
        /*_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.6.1_"+target.name, 
            access_token: window.acctkn 
        } */

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        //console.log("drag"+target.name);
        _this.temp1 = target.x;
        _this.temp2 = target.y;
        _this.vx = target.x;    
        _this.vy = target.y; 
        target.inputEnabled =true;
        target.input.enableDrag();
        target.width=235;
        target.height=272;
        commonNavBar.playClickSound();

        for(var i=0;i<_this.glowGrp.length;i++)
        {
            if(_this.checkOverlap(target.getChildAt(0),_this.glowGrp.getChildAt(i)))
            { 
                _this.glowGrp.getChildAt(i).visible = true;
                target.width=170;
                target.height=220;

                _this.boxAdded--;

                if(_this.correct!=0)
                    _this.correct--;

                //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx "+_this.boxAdded);
                break;
            }
        }

        target.events.onDragStop.add(
            function(target){
				
                //console.log("fffffffffffffff "+_this.correct);
                //console.log("fffffffffffffff"+target.getChildAt(0).text);
                _this.click2 = _this.add.audio('snapSound');
                _this.click2.play();
                for(var i=0;i<_this.objGrp.length;i++)
                {
                    if(_this.checkOverlap(target.getChildAt(0),_this.objGrp.getChildAt(i))&&(_this.glowGrp.getChildAt(i).visible))
                    {
                        target.width=235;
                        target.height=272;
                        _this.boxAdded++;
                        //console.log("overlappedtrgt "+target.name);
                        //console.log("overlappedgrp "+_this.objGrp.getChildAt(i).name);

                        if(target.name==_this.objGrp.getChildAt(i).name)
                        {
                            //console.log("ccccccccccccccccccccccccccccccccccccccc");
                            target.x=_this.glowGrp.getChildAt(i).x-_this.n1;
                            target.y=_this.glowGrp.getChildAt(i).y-_this.n2;

                            _this.glowGrp.getChildAt(i).visible = false;

                            if(target.name==_this.objGrp.getChildAt(i).name)
                            {
                                if(target.name ==_this.objGrp.getChildAt(0).name)
                                {
                                    _this.correct++;
                                    _this.n1Check = true;
                                    _this.correctflag++;
                                    _this.glow1.inputEnabled = false;
                                    //console.log("fdsdfdfdfdfdf 0 "+_this.objGrp.getChildAt(0).name);

                                } 
                                else if(target.name ==_this.objGrp.getChildAt(1).name)
                                {
                                    _this.correct++;
                                    _this.n2Check = true;
                                    _this.correctflag++;
                                    _this.glow2.inputEnabled = false;
                                    //console.log("fdsdfdfdfdfdf 1 "+_this.objGrp.getChildAt(1).name);

                                }
                                //console.log("right");
                                //console.log("correctflag ::: "+_this.correctflag); 
                            }
                            break;

                        }
                        else 
                        {


                            target.x=_this.glowGrp.getChildAt(i).x-_this.n1;
                            target.y=_this.glowGrp.getChildAt(i).y-_this.n2;
                            //console.log("wrong");
                            _this.glowGrp.getChildAt(i).visible = false;
                            break;
                        }
                    }
                    else if(_this.checkOverlap(_this.graphics5,target.getChildAt(0)))
                    {
                        if(target.name == "box1")
                        {
                            target.x = _this.x1;
                            target.y = _this.y1;
                            target.width=170;
                            target.height=220;


                        }
                        else{
                            target.x = _this.x2;
                            target.y = _this.y2;
                            target.width=170;
                            target.height=220;
                        }
                    }
                    else 
                    {
                        /* target.width=235;
				 target.height=272;
				 target.x = _this.temp1;    
				 target.y = _this.temp2;*/

                        if(target.name == "box1")
                        {
                            target.x = _this.x1;
                            target.y = _this.y1;
                            target.width=170;
                            target.height=220;


                        }
                        else{
                            target.x = _this.x2;
                            target.y = _this.y2;
                            target.width=170;
                            target.height=220;
                        }

                    } 


                }
                target.events.onDragStop.removeAll(); 

                // alert(_this.boxAdded);

                // if(_this.boxAdded >= 2){
                _this.rightmark.inputEnabled=true;
                _this.rightmark.events.onInputUp.add(function(target){
                    target.frame = 0;
                },_this);
                _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
                //  }

            },_this);

    },


    checkOverlap:function(spriteA, spriteB) 
    {

        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);

    },  

    clickTickMark:function(target){

        commonNavBar.disableHintIcon();
        _this.objGrp.setAll("inputEnabled",false);
        _this.glowGrp.setAll("inputEnabled",false);
         _this.boxGrp.setAll("inputEnabled",false);

        if(_this.correct >= 2)
        {
            target.events.onInputDown.removeAll(); 
            //target.tint = 0xA9A9A9;
            _this.rightmark.frame=1;

            _this.correctAns(target);
        }

        else
        { 
            target.events.onInputDown.removeAll(); 
            _this.boxAdded = 0; 
            _this.wrongAns(target);

        }

    },


    removeCelebration:function()
    {
        //console.log("removeCeleb");
        celebration = false;
        //console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        if(_this.no11<4)
        {

            var timerStopVar = commonNavBar.stopTimer();
            _this.objGrp.destroy();
            _this.glowGrp.destroy();
            _this.boxGrp.destroy();
            _this.rightmark.destroy();
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            _this.getQuestion();

        }

        else
        {
//            _this.rightmark.inputEnabled=false;
            _this.objGrp.destroy();
            _this.glowGrp.destroy();
            _this.boxGrp.destroy();
            _this.rightmark.destroy();
            _this.base.destroy();
            _this.box1.destroy();
            _this.box2.destroy();
            _this.box2.destroy();
            //            var tween = this.add.tween(_this.boxGrp);
            //            tween.to({ x: -1000}, 0, 'Linear', true, 0);
            //            tween.onComplete.add(function(){

            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
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
            //            },this);
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

        this.generateStarsForScoreScene(this,8);   //Stars based on the Game
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

        _this.state.start('numbersense4',true,false);
        
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

        this.time.events.add(3000, function()
                             { 
            commonNavBar.soundVar=null,
                commonNavBar.questionArray=null,
                commonNavBar.questionCount=null,
                commonNavBar.soundUrl=null,
                commonNavBar.hint1=true,
                commonNavBar.hint2=true,
                commonNavBar.hint3=true,
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
                _this.state.start('placevalue_NSPVG_1_1level1',true,false);
        }, this);
    },

    correctAns:function(target)
    {
        telInitializer2.gameCorrectAns();

        _this.stopvoice();
        target.events.onInputDown.removeAll();
        //        _this.speakerbtn.inputEnabled=false;
        _this.rightmark.inputEnabled=false;
        _this.rightmark.events.onInputUp.removeAll();
        _this.noofAttempts++;
        /*_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "Click", 
            res_id: "level2.6.1_"+target.name, 
            access_token: window.acctkn 
        } */

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


       /* _this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
            { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }*/

        //absdsjsapi.saveAssessment(_this.saveAsment);
        _this.sceneCount++;
        // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();
        _this.box1.frame=_this.hl1;
        _this.box2.frame=_this.hl2;
        //console.log("correct11");
        //        _this.speakerbtn.inputEnabled=false;


        _this.celebration = true;

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        _this.time.events.add(2000, _this.removeCelebration, _this);


    },

    wrongAns:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        _this.stopvoice();
        _this.rightmark.frame=1;
        commonNavBar.playWrongCelebrationSound();
        _this.glow1.visible=true;
        _this.glow2.visible=true;
        _this.box1.height=220;
        _this.box1.width=170;
        _this.box2.height=220;
        _this.box2.width=170;
        _this.box1.x = _this.x1;
        _this.box1.y = _this.y1;   
        _this.box2.x = _this.x2;
        _this.box2.y = _this.y2;

        _this.noofAttempts++;

        //_this.currentTime = window.timeSaveFunc();
        /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 


          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        */
        _this.time.events.add(1000, _this.removeCelebration, _this);
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

    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/English/26.1E.mp3");
            }
                else if(window.languageSelected=="Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/Hindi/26.1H.mp3");
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src",window.baseUrl+"questionSounds/2.6.1/Kannada/26.1K.mp3");
                }
                else if(window.languageSelected=="Gujarati")
                {
                     _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.6.1/26.1E.mp3");
                }
				else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/Marathi/26.1E.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/Telugu/26.1E.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/Tamil/26.1E.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.6.1/Urdu/26.1E.mp3");
                    }
                else
                {
                    _this.src.setAttribute("src",window.baseUrl+"questionSounds/2.6.1/Odiya/2.6.1.mp3");
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;


        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },



    stopvoice:function(){

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                //console.log("here");
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
       // _this.stopVoice();

        window.score = this.score;

        window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;

            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            } 
    }         


};






















