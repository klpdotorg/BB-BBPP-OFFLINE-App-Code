Game.sequence_NSSG_6_3level3=function(){};

Game.sequence_NSSG_6_3level3.prototype={
    init:function(param,score,timerStopVar)
    {
       _this= this;
         this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
       // alert(this.timerStopVar);
        console.log(this.timerStopVar);
       //telInitializer.gameIdInit("sequence2_5_1",gradeSelected);
          window.languageSelected="English";
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity2_6_3_backg');
        _this.qsoundurl= "questionSounds/unity/2.6.3/English/26.3E.mp3";
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
       commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
       // commonNavBar.addHint(this);
        this.hintparams=['NSSG6.3','level3',false,false,false,0];
        commonNavBar.addHint(this,this.hintparams);
       
    },

create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;

		_this.amplify = null;
		
        _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount = 0;
    
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.base;
        _this.background;
        _this.click3;
        _this.click1;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
        _this.rectangleGrp;
        _this.objGrp;
        _this.n1Check;
        _this.n2Check;
        _this.questioNo = 0;
        _this.glowGrp;
        _this.boxGrp;
        _this.n1=0;
        _this.n2=0;
        _this.stopq=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=6;
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
        
        _this.graphics5 = _this.add.graphics(50, 50);
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(5, 5, 300, 400);
        _this.graphics5.alpha = 0;
		
          
        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
         commonNavBar.getVoice("questionSounds/unity/2.6.3/English/26.3E.mp3");
          
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
        // _this.stopvoice();
         
        _this.toCheck = true;
       _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
       
        //_this.questionid =1;
        
         if(_this.stopq == 0){
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
         }
         
    },
    
    generateStarsForTheScene:function(game,count)
    {
        this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'starAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;

                   
                }
            }
            if(this.Stararr[i])
                    {
                        
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
        }
        this.starsGroup.getChildAt(6).frame = 2;
        this.starsGroup.getChildAt(7).frame = 0;
        this.starsGroup.getChildAt(8).frame = 0;
    },
    
    
gotoFirstQuestion:function()
    {
        //_this.getVoice();
      
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
         _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "965");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "966");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "967");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "968");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "969");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "970");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "971");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "972");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "973");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "974");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "975");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "976");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "977");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "978");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "979");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "980");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "981");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "982");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "983");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "984");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "985");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "986");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "987");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "988");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "989");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "990");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "991");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "992");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "993");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "994");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "995");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "996");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "997");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "998");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "999");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
        
        _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
        
         
        _this.Rectangle16.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle33.alpha = 0;
        _this.Rectangle34.alpha = 0;
        
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(380, 164, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(584, 322, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
       
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
        
        _this.glow1 =_this.add.sprite(545,265,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.9);
        _this.glow1.frame=25;
        _this.glow1.name = "box1";
        
        _this.glow2 =_this.add.sprite(750,425,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.9);
        _this.glow2.frame=25;
        _this.glow2.name = "box2";
        
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
        
        _this.box1 =_this.add.sprite(100,150,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=1;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.text16 = _this.add.text(1, -2, "980");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text16);
     
        _this.text17 = _this.add.text(80, -1, "981");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text17);
        
        _this.box2 =_this.add.sprite(200,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8); 
        _this.box2.frame=1;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.text33 = _this.add.text(1, -2, "997");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text33);
     
        _this.text34 = _this.add.text(80, -1, "998");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text34);
        
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        
        _this.n1=35;
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
        
        //_this.getVoice();
        
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
         _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "821");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "822");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "823");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "824");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "825");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "826");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "827");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "828");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "829");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "830");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "831");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "832");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "833");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "834");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "835");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "836");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "837");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "838");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "839");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "840");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "841");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "842");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "843");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "844");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "845");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "846");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "847");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "848");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "849");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "850");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "851");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "852");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "853");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "854");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "855");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
        
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
        _this.Rectangle14.alpha = 0;
        _this.Rectangle21.alpha = 0;
        _this.Rectangle22.alpha = 0;
        _this.Rectangle29.alpha = 0;
        
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(720, 85, 60, 145);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(310, 245, 60, 145);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
        
        _this.glow1 =_this.add.sprite(850,220,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.75,0.95);
        _this.glow1.frame=1;
        
        _this.glow2 =_this.add.sprite(442,380,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.75,0.95);
        _this.glow2.frame=1;
        
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
        
        _this.box1 =_this.add.sprite(100,152,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=0;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text14 = _this.add.text(1, 0, "834");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text14);
        
        _this.text21 = _this.add.text(1, 78, "841");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text21);
        
        _this.box2 =_this.add.sprite(200,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=0;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text22 = _this.add.text(1, 0, "842");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text22);
        
        _this.text29 = _this.add.text(1, 78, "849");
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
        //_this.getVoice();
     
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "745");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "746");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "747");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "748");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "749");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "750");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "751");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "752");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "753");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "754");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "755");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "756");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "757");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "758");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "759");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "760");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "761");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "762");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "763");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "764");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "765");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "766");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "767");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "768");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "769");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "770");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "771");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "772");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "773");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "774");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "775");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "776");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "777");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "778");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "779");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
        _this.Rectangle1.alpha = 0;
        _this.Rectangle2.alpha = 0;
        _this.Rectangle3.alpha = 0;
        _this.Rectangle30.alpha = 0;
        _this.Rectangle31.alpha = 0;
        _this.Rectangle32.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
     
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(310, 3, 195, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
         
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(380, 322, 195, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
     
        _this.glow1 =_this.add.sprite(514,105,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(1.2,0.9);
        _this.glow1.frame=25;  
     
        _this.glow2 =_this.add.sprite(580,425,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(1.2,0.9);
        _this.glow2.frame=25;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
        
        _this.box1 =_this.add.sprite(200,160,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=3;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text1 = _this.add.text(-80, 0, "745");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text1);
    
        _this.text2 = _this.add.text(0, 0, "746");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text2);

        _this.text3 = _this.add.text(80, 0, "747");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);
     
        _this.box2 =_this.add.sprite(200,350,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=3;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text30 = _this.add.text(-83, 0, "774");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text30);
      
        _this.text31 = _this.add.text(0, 0, "775");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text31);
     
        _this.text32 = _this.add.text(80, 0, "776");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text32);
     
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
     
        _this.n1=4.5;
        _this.n2=-36;
     
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
     
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
        _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "601");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "602");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "603");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "604");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "605");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "606");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "607");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "608");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "609");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "610");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "611");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "612");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "613");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "614");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "615");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "616");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "617");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "618");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "619");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "620");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "621");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "622");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "623");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "624");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "625");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "626");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "627");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "628");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "629");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "630");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "631");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "632");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "633");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "634");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "635");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
        _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
    
        _this.Rectangle5.alpha = 0;
        _this.Rectangle12.alpha = 0;
        _this.Rectangle19.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle24.alpha = 0;
        _this.Rectangle31.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
     
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(580, 3, 65, 230);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(443, 165, 65, 230);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
     
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
      
        _this.glow1 =_this.add.sprite(714,218,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.95);
        _this.glow1.frame=5;  
     
        _this.glow2 =_this.add.sprite(579,378,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.95);
        _this.glow2.frame=5;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
     
        _this.box1 =_this.add.sprite(100,160,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=2;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text5 = _this.add.text(0, -80, "605");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text5);
        
        _this.text12 = _this.add.text(0, -2, "612");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text12);
     
        _this.text19 = _this.add.text(0, 79, "619");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text19);
     
        _this.box2 =_this.add.sprite(270,350,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=2;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text17 = _this.add.text(0, -80, "617");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text17);
       
        _this.text24 = _this.add.text(0, -2, "624");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text24);
     
        _this.text31 = _this.add.text(0, 79, "631");
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
       // _this.getVoice();
    
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "541");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "542");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "543");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "544");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "545");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "546");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "547");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "548");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "549");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "550");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "551");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "552");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "553");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "554");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "555");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "556");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "557");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "558");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "559");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "560");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "561");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "562");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "563");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "564");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "565");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "566");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "567");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "568");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "569");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "570");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "571");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "572");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "573");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "574");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "575");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
    
        _this.Rectangle2.alpha = 0;
        _this.Rectangle3.alpha = 0;
        _this.Rectangle18.alpha = 0;
        _this.Rectangle19.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
     
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(380, 3, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(515, 165, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
        
        _this.glow1 =_this.add.sprite(545,105,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.9);
        _this.glow1.frame=25;
        
        _this.glow2 =_this.add.sprite(680,265,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.9);
        _this.glow2.frame=25;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
     
        _this.boxGrp=_this.add.group();
        
        _this.box1 =_this.add.sprite(100,150,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=1;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.text2 = _this.add.text(0, -2, "542");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text2);

        _this.text3 = _this.add.text(80, -2, "543");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);
        
        _this.box2 =_this.add.sprite(200,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8); 
        _this.box2.frame=1;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.text18 = _this.add.text(0, -2, "558");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text18);
     
        _this.text19 = _this.add.text(80, -2, "559");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal'; 
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text19);
        
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
     
        _this.n1=35;
        _this.n2=-37;
     
        _this.x1=100;
        _this.y1=150;
            
        _this.x2=200;
        _this.y2=400;
     
        _this.hl1=13;
        _this.hl2=13;
          
 },
    
 gotoSixthQuestion:function()
 {
        //_this.getVoice();
     
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "455");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "456");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "457");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "458");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "459");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "460");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "461");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "462");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "463");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "464");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "465");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "466");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "467");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "468");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "469");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "470");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "471");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "472");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "473");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "474");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "475");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "476");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "477");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "478");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "479");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "480");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "481");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "482");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "483");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "484");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "485");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "486");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "487");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "488");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "489");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
        _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
    
        _this.Rectangle5.alpha = 0;
        _this.Rectangle12.alpha = 0;
        _this.Rectangle25.alpha = 0;
        _this.Rectangle32.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
     
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(580, 3, 65, 150);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(512, 240, 65, 150);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
        
        _this.glow1 =_this.add.sprite(714,140,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.75,0.95);
        _this.glow1.frame=1;
        
        _this.glow2 =_this.add.sprite(646,380,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.75,0.95);
        _this.glow2.frame=1;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
        
        _this.box1 =_this.add.sprite(100,150,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=0;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);

        _this.text5 = _this.add.text(1, 0, "459");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text5);
        
        _this.text12 = _this.add.text(1, 78, "466");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text12);
        
        _this.box2 =_this.add.sprite(200,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=0;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text25 = _this.add.text(1, 0, "479");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text25);
        
        _this.text32 = _this.add.text(1, 78, "486");
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
       // _this.getVoice();
     
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
        _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "333");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "334");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "335");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "336");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "337");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "338");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "339");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "340");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "341");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "342");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "343");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "344");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "345");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "346");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "347");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "348");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "349");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "350");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "351");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "352");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "353");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "354");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "355");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "356");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "357");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "358");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "359");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "360");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "361");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "362");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "363");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "364");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "365");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "366");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "367");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
     
        _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
     
        _this.Rectangle4.alpha = 0;
        _this.Rectangle5.alpha = 0;
        _this.Rectangle6.alpha = 0;
        _this.Rectangle15.alpha = 0;
        _this.Rectangle16.alpha = 0;
        _this.Rectangle17.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
     
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(513, 3, 200, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(310, 165, 200, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
     
        _this.glow1 =_this.add.sprite(715,105,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(1.2,0.9);
        _this.glow1.frame=25;  
     
        _this.glow2 =_this.add.sprite(515,265,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(1.2,0.9);
        _this.glow2.frame=25;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
    
        _this.boxGrp=_this.add.group();
     
        _this.box1 =_this.add.sprite(200,160,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=3;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text4 = _this.add.text(-83, 0, "336");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text4);
    
        _this.text5 = _this.add.text(0, 0, "337");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text5);

        _this.text6 = _this.add.text(80, 0, "338");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text6);
     
        _this.box2 =_this.add.sprite(200,350,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=3;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text15 = _this.add.text(-83, 0, "347");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text15);
      
        _this.text16 = _this.add.text(0, 0, "348");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text16);
     
        _this.text17 = _this.add.text(80, 0, "349");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text17);
     
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
     
        _this.n1=4;
        _this.n2=-36;
     
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
      
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "215");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "216");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "217");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "218");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "219");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "220");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "221");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "222");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "223");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "224");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "225");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "226");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "227");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "228");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "229");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "230");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "231");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "232");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "233");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "234");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "235");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "236");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "237");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "238");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "239");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "240");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "241");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "242");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "243");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "244");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "245");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "246");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "247");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "248");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "249");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
        
        _this.Rectangle4.alpha = 0;
        _this.Rectangle11.alpha = 0;
        _this.Rectangle18.alpha = 0;
        _this.Rectangle16.alpha = 0;
        _this.Rectangle23.alpha = 0;
        _this.Rectangle30.alpha = 0;
     
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
     
        _this.glow1 =_this.add.sprite(647,218,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.95);
        _this.glow1.frame=5;  
     
        _this.glow2 =_this.add.sprite(511,378,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.95);
        _this.glow2.frame=5;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
     
        _this.box1 =_this.add.sprite(100,160,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=2;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text4 = _this.add.text(0, -80, "218");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text4);
        
        _this.text11 = _this.add.text(0, -2, "225");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text11);
     
        _this.text18 = _this.add.text(0, 79, "232");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text18);
     
        _this.box2 =_this.add.sprite(270,350,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=2;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text16 = _this.add.text(0, -80, "230");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal'; 
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text16);
       
        _this.text23 = _this.add.text(0, -2, "237");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text23);
     
        _this.text30 = _this.add.text(0, 79, "244");
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
       // _this.getVoice();
    
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
    
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "111");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "112");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "113");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "114");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "115");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "116");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "117");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "118");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "119");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "120");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "121");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "122");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "123");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "124");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "125");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "126");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "127");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "128");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "129");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "130");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "131");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "132");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "133");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "134");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "135");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "136");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "137");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "138");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "139");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "140");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "141");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "142");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "143");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "144");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "145");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
    
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
         
        _this.Rectangle6.alpha = 0;
        _this.Rectangle13.alpha = 0;
        _this.Rectangle14.alpha = 0;
        _this.Rectangle17.alpha = 0;
        _this.Rectangle24.alpha = 0;
        _this.Rectangle25.alpha = 0;
    
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(650, 85, 125, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
    
        _this.graphics1 = _this.add.graphics(100, 50);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(650, 50, 50, 50);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
        
        _this.graphics2 = _this.add.graphics(100, 100);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(450, 242, 125, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
    
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(450, 210, 50, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
    
        _this.glow1 =_this.add.sprite(785,219,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.92);
        _this.glow1.frame=17;
    
        _this.glow2 =_this.add.sprite(580,380,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.92);
        _this.glow2.frame=17;
        
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
        
        _this.boxGrp=_this.add.group();
    
        _this.box1 =_this.add.sprite(200,170,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=8;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.text6 = _this.add.text(0,-80, "116");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text6);
    
        _this.text13 = _this.add.text(0,0, "123");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text13);
     
        _this.text14 = _this.add.text(80,0, "124");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text14);
    
        _this.box2 =_this.add.sprite(100,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=8;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.text17 = _this.add.text(0,-80, "127");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.box2.addChild(_this.text17);
     
        _this.text24 = _this.add.text(0,0, "134");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text24);
     
        _this.text25 = _this.add.text(80,0, "135");
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
        //_this.getVoice();
     
        _this.base = _this.add.sprite(644,297,'unity2_6_3_Base');
    	_this.base.anchor.setTo(0.5);
        _this.base.scale.setTo(0.97,1.03); 
      
        _this.rightmark = _this.add.sprite(50,500,'unity2_6_3_rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
     
         _this.rectangleGrp=_this.add.group();
     
        _this.Rectangle1 = _this.add.sprite(440,140,'unity2_6_3_Rectangle');
    	_this.Rectangle1.anchor.setTo(0.5); 
        _this.Rectangle1.scale.setTo(0.85,1.0); 
     
        _this.text1 = _this.add.text(0, 0, "365");
        _this.text1.font = "myfont";
        _this.text1.fill = "#ffffff";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.scale.setTo(1.2,1.3); 
        _this.Rectangle1.addChild(_this.text1);
        
        _this.Rectangle2 =_this.add.sprite(508,140,'unity2_6_3_Rectangle');
    	_this.Rectangle2.anchor.setTo(0.5); 
        _this.Rectangle2.scale.setTo(0.85,1.0); 
     
        _this.text2 = _this.add.text(0, 0, "366");
        _this.text2.font = "myfont";
        _this.text2.fill = "#ffffff";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.scale.setTo(1.2,1.3); 
        _this.Rectangle2.addChild(_this.text2);
     
        _this.Rectangle3 =_this.add.sprite(576,140,'unity2_6_3_Rectangle');
    	_this.Rectangle3.anchor.setTo(0.5); 
        _this.Rectangle3.scale.setTo(0.85,1.0); 
     
        _this.text3 = _this.add.text(0, 0, "367");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.Rectangle3.addChild(_this.text3);
     
        _this.Rectangle4 =_this.add.sprite(644,140,'unity2_6_3_Rectangle');
    	_this.Rectangle4.anchor.setTo(0.5); 
        _this.Rectangle4.scale.setTo(0.85,1.0); 
     
        _this.text4 = _this.add.text(0, 0, "368");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3); 
        _this.Rectangle4.addChild(_this.text4);
     
        _this.Rectangle5 =_this.add.sprite(712,140,'unity2_6_3_Rectangle');
    	_this.Rectangle5.anchor.setTo(0.5); 
        _this.Rectangle5.scale.setTo(0.85,1.0); 
     
        _this.text5 = _this.add.text(0, 0, "369");
        _this.text5.font = "myfont";
        _this.text5.fill = "#ffffff";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.scale.setTo(1.2,1.3); 
        _this.Rectangle5.addChild(_this.text5);
     
        _this.Rectangle6 =_this.add.sprite(780,140,'unity2_6_3_Rectangle');
    	_this.Rectangle6.anchor.setTo(0.5); 
        _this.Rectangle6.scale.setTo(0.85,1.0); 
       
        _this.text6 = _this.add.text(0, 0, "370");
        _this.text6.font = "myfont";
        _this.text6.fill = "#ffffff";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.scale.setTo(1.2,1.3); 
        _this.Rectangle6.addChild(_this.text6);
     
        _this.Rectangle7 =_this.add.sprite(848,140,'unity2_6_3_Rectangle');
    	_this.Rectangle7.anchor.setTo(0.5); 
        _this.Rectangle7.scale.setTo(0.85,1.0); 
     
        _this.text7 = _this.add.text(0, 0, "371");
        _this.text7.font = "myfont";
        _this.text7.fill = "#ffffff";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.scale.setTo(1.2,1.3); 
        _this.Rectangle7.addChild(_this.text7);
     
        _this.Rectangle8 =_this.add.sprite(440,220,'unity2_6_3_Rectangle');
    	_this.Rectangle8.anchor.setTo(0.5); 
        _this.Rectangle8.scale.setTo(0.85,1.0); 
     
        _this.text8 = _this.add.text(0, 0, "372");
        _this.text8.font = "myfont";
        _this.text8.fill = "#ffffff";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.scale.setTo(1.2,1.3); 
        _this.Rectangle8.addChild(_this.text8);
     
        _this.Rectangle9 =_this.add.sprite(508,220,'unity2_6_3_Rectangle');
    	_this.Rectangle9.anchor.setTo(0.5); 
        _this.Rectangle9.scale.setTo(0.85,1.0);
     
        _this.text9 = _this.add.text(0, 0, "373");
        _this.text9.font = "myfont";
        _this.text9.fill = "#ffffff";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.scale.setTo(1.2,1.3); 
        _this.Rectangle9.addChild(_this.text9);
     
        _this.Rectangle10 =_this.add.sprite(576,220,'unity2_6_3_Rectangle');
    	_this.Rectangle10.anchor.setTo(0.5); 
        _this.Rectangle10.scale.setTo(0.85,1.0); 
     
        _this.text10 = _this.add.text(0, 0, "374");
        _this.text10.font = "myfont";
        _this.text10.fill = "#ffffff";
        _this.text10.fontWeight = 'normal';
        _this.text10.anchor.set(0.5);
        _this.text10.scale.setTo(1.2,1.3); 
        _this.Rectangle10.addChild(_this.text10);
     
        _this.Rectangle11 =_this.add.sprite(644,220,'unity2_6_3_Rectangle');
    	_this.Rectangle11.anchor.setTo(0.5); 
        _this.Rectangle11.scale.setTo(0.85,1.0); 
     
        _this.text11 = _this.add.text(0, 0, "375");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.Rectangle11.addChild(_this.text11);
     
        _this.Rectangle12 =_this.add.sprite(712,220,'unity2_6_3_Rectangle');
    	_this.Rectangle12.anchor.setTo(0.5); 
        _this.Rectangle12.scale.setTo(0.85,1.0); 
     
        _this.text12 = _this.add.text(0, 0, "376");
        _this.text12.font = "myfont";
        _this.text12.fill = "#ffffff";
        _this.text12.fontWeight = 'normal';
        _this.text12.anchor.set(0.5);
        _this.text12.scale.setTo(1.2,1.3); 
        _this.Rectangle12.addChild(_this.text12);
     
        _this.Rectangle13 =_this.add.sprite(780,220,'unity2_6_3_Rectangle');
    	_this.Rectangle13.anchor.setTo(0.5); 
        _this.Rectangle13.scale.setTo(0.85,1.0); 
     
        _this.text13 = _this.add.text(0, 0, "377");
        _this.text13.font = "myfont";
        _this.text13.fill = "#ffffff";
        _this.text13.fontWeight = 'normal';
        _this.text13.anchor.set(0.5);
        _this.text13.scale.setTo(1.2,1.3); 
        _this.Rectangle13.addChild(_this.text13);
     
        _this.Rectangle14 =_this.add.sprite(848,220,'unity2_6_3_Rectangle');
    	_this.Rectangle14.anchor.setTo(0.5); 
        _this.Rectangle14.scale.setTo(0.85,1.0); 
     
        _this.text14 = _this.add.text(0, 0, "378");
        _this.text14.font = "myfont";
        _this.text14.fill = "#ffffff";
        _this.text14.fontWeight = 'normal';
        _this.text14.anchor.set(0.5);
        _this.text14.scale.setTo(1.2,1.3); 
        _this.Rectangle14.addChild(_this.text14);
     
        _this.Rectangle15 =_this.add.sprite(440,300,'unity2_6_3_Rectangle');
    	_this.Rectangle15.anchor.setTo(0.5); 
        _this.Rectangle15.scale.setTo(0.85,1.0); 
     
        _this.text15 = _this.add.text(0, 0, "379");
        _this.text15.font = "myfont";
        _this.text15.fill = "#ffffff";
        _this.text15.fontWeight = 'normal';
        _this.text15.anchor.set(0.5);
        _this.text15.scale.setTo(1.2,1.3); 
        _this.Rectangle15.addChild(_this.text15);
       
        _this.Rectangle16 =_this.add.sprite(508,300,'unity2_6_3_Rectangle');
    	_this.Rectangle16.anchor.setTo(0.5); 
        _this.Rectangle16.scale.setTo(0.85,1.0); 
    
        _this.text16 = _this.add.text(0, 0, "380");
        _this.text16.font = "myfont";
        _this.text16.fill = "#ffffff";
        _this.text16.fontWeight = 'normal';
        _this.text16.anchor.set(0.5);
        _this.text16.scale.setTo(1.2,1.3); 
        _this.Rectangle16.addChild(_this.text16);
     
        _this.Rectangle17 =_this.add.sprite(576,300,'unity2_6_3_Rectangle');
    	_this.Rectangle17.anchor.setTo(0.5); 
        _this.Rectangle17.scale.setTo(0.85,1.0); 
       
        _this.text17 = _this.add.text(0, 0, "381");
        _this.text17.font = "myfont";
        _this.text17.fill = "#ffffff";
        _this.text17.fontWeight = 'normal';
        _this.text17.anchor.set(0.5);
        _this.text17.scale.setTo(1.2,1.3);
        _this.Rectangle17.addChild(_this.text17);
     
        _this.Rectangle18 =_this.add.sprite(644,300,'unity2_6_3_Rectangle');
    	_this.Rectangle18.anchor.setTo(0.5); 
        _this.Rectangle18.scale.setTo(0.85,1.0); 
     
        _this.text18 = _this.add.text(0, 0, "382");
        _this.text18.font = "myfont";
        _this.text18.fill = "#ffffff";
        _this.text18.fontWeight = 'normal';
        _this.text18.anchor.set(0.5);
        _this.text18.scale.setTo(1.2,1.3); 
        _this.Rectangle18.addChild(_this.text18);
     
        _this.Rectangle19 =_this.add.sprite(712,300,'unity2_6_3_Rectangle');
    	_this.Rectangle19.anchor.setTo(0.5); 
        _this.Rectangle19.scale.setTo(0.85,1.0); 
     
        _this.text19 = _this.add.text(0, 0, "383");
        _this.text19.font = "myfont";
        _this.text19.fill = "#ffffff";
        _this.text19.fontWeight = 'normal';
        _this.text19.anchor.set(0.5);
        _this.text19.scale.setTo(1.2,1.3); 
        _this.Rectangle19.addChild(_this.text19);
     
        _this.Rectangle20 =_this.add.sprite(780,300,'unity2_6_3_Rectangle');
    	_this.Rectangle20.anchor.setTo(0.5); 
        _this.Rectangle20.scale.setTo(0.85,1.0); 
     
        _this.text20 = _this.add.text(0, 0, "384");
        _this.text20.font = "myfont";
        _this.text20.fill = "#ffffff";
        _this.text20.fontWeight = 'normal';
        _this.text20.anchor.set(0.5);
        _this.text20.scale.setTo(1.2,1.3); 
        _this.Rectangle20.addChild(_this.text20);
     
        _this.Rectangle21 =_this.add.sprite(848,300,'unity2_6_3_Rectangle');
    	_this.Rectangle21.anchor.setTo(0.5); 
        _this.Rectangle21.scale.setTo(0.85,1.0); 
     
        _this.text21 = _this.add.text(0, 0, "385");
        _this.text21.font = "myfont";
        _this.text21.fill = "#ffffff";
        _this.text21.fontWeight = 'normal';
        _this.text21.anchor.set(0.5);
        _this.text21.scale.setTo(1.2,1.3); 
        _this.Rectangle21.addChild(_this.text21);
     
        _this.Rectangle22 =_this.add.sprite(440,380,'unity2_6_3_Rectangle');
    	_this.Rectangle22.anchor.setTo(0.5); 
        _this.Rectangle22.scale.setTo(0.85,1.0); 
     
        _this.text22 = _this.add.text(0, 0, "386");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.Rectangle22.addChild(_this.text22);
     
        _this.Rectangle23=_this.add.sprite(508,380,'unity2_6_3_Rectangle');
    	_this.Rectangle23.anchor.setTo(0.5); 
        _this.Rectangle23.scale.setTo(0.85,1.0); 
     
        _this.text23 = _this.add.text(0, 0, "387");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.Rectangle23.addChild(_this.text23);
     
        _this.Rectangle24 =_this.add.sprite(576,380,'unity2_6_3_Rectangle');
    	_this.Rectangle24.anchor.setTo(0.5); 
        _this.Rectangle24.scale.setTo(0.85,1.0); 
     
        _this.text24 = _this.add.text(0, 0, "388");
        _this.text24.font = "myfont";
        _this.text24.fill = "#ffffff";
        _this.text24.fontWeight = 'normal';
        _this.text24.anchor.set(0.5);
        _this.text24.scale.setTo(1.2,1.3); 
        _this.Rectangle24.addChild(_this.text24);
     
        _this.Rectangle25 =_this.add.sprite(644,380,'unity2_6_3_Rectangle');
    	_this.Rectangle25.anchor.setTo(0.5); 
        _this.Rectangle25.scale.setTo(0.85,1.0); 
     
        _this.text25 = _this.add.text(0, 0, "389");
        _this.text25.font = "myfont";
        _this.text25.fill = "#ffffff";
        _this.text25.fontWeight = 'normal';
        _this.text25.anchor.set(0.5);
        _this.text25.scale.setTo(1.2,1.3); 
        _this.Rectangle25.addChild(_this.text25);
     
        _this.Rectangle26 =_this.add.sprite(712,380,'unity2_6_3_Rectangle');
    	_this.Rectangle26.anchor.setTo(0.5); 
        _this.Rectangle26.scale.setTo(0.85,1.0); 
        
        _this.text26 = _this.add.text(0, 0, "390");
        _this.text26.font = "myfont";
        _this.text26.fill = "#ffffff";
        _this.text26.fontWeight = 'normal';
        _this.text26.anchor.set(0.5);
        _this.text26.scale.setTo(1.2,1.3); 
        _this.Rectangle26.addChild(_this.text26);
     
        _this.Rectangle27 =_this.add.sprite(780,380,'unity2_6_3_Rectangle');
    	_this.Rectangle27.anchor.setTo(0.5); 
        _this.Rectangle27.scale.setTo(0.85,1.0); 
     
        _this.text27 = _this.add.text(0, 0, "391");
        _this.text27.font = "myfont";
        _this.text27.fill = "#ffffff";
        _this.text27.fontWeight = 'normal';
        _this.text27.anchor.set(0.5);
        _this.text27.scale.setTo(1.2,1.3); 
        _this.Rectangle27.addChild(_this.text27);
     
        _this.Rectangle28 =_this.add.sprite(848,380,'unity2_6_3_Rectangle');
    	_this.Rectangle28.anchor.setTo(0.5); 
        _this.Rectangle28.scale.setTo(0.85,1.0);  
     
        _this.text28 = _this.add.text(0, 0, "392");
        _this.text28.font = "myfont";
        _this.text28.fill = "#ffffff";
        _this.text28.fontWeight = 'normal';
        _this.text28.anchor.set(0.5);
        _this.text28.scale.setTo(1.2,1.3); 
        _this.Rectangle28.addChild(_this.text28);
     
        _this.Rectangle29 =_this.add.sprite(440,460,'unity2_6_3_Rectangle');
    	_this.Rectangle29.anchor.setTo(0.5); 
        _this.Rectangle29.scale.setTo(0.85,1.0); 
     
        _this.text29 = _this.add.text(0, 0, "393");
        _this.text29.font = "myfont";
        _this.text29.fill = "#ffffff";
        _this.text29.fontWeight = 'normal';
        _this.text29.anchor.set(0.5);
        _this.text29.scale.setTo(1.2,1.3); 
        _this.Rectangle29.addChild(_this.text29);
     
        _this.Rectangle30=_this.add.sprite(508,460,'unity2_6_3_Rectangle');
    	_this.Rectangle30.anchor.setTo(0.5); 
        _this.Rectangle30.scale.setTo(0.85,1.0); 
     
        _this.text30 = _this.add.text(0, 0, "394");
        _this.text30.font = "myfont";
        _this.text30.fill = "#ffffff";
        _this.text30.fontWeight = 'normal';
        _this.text30.anchor.set(0.5);
        _this.text30.scale.setTo(1.2,1.3); 
        _this.Rectangle30.addChild(_this.text30);
     
        _this.Rectangle31 =_this.add.sprite(576,460,'unity2_6_3_Rectangle');
    	_this.Rectangle31.anchor.setTo(0.5); 
        _this.Rectangle31.scale.setTo(0.85,1.0); 
     
        _this.text31 = _this.add.text(0, 0, "395");
        _this.text31.font = "myfont";
        _this.text31.fill = "#ffffff";
        _this.text31.fontWeight = 'normal';
        _this.text31.anchor.set(0.5);
        _this.text31.scale.setTo(1.2,1.3); 
        _this.Rectangle31.addChild(_this.text31);
     
        _this.Rectangle32 =_this.add.sprite(644,460,'unity2_6_3_Rectangle');
    	_this.Rectangle32.anchor.setTo(0.5); 
        _this.Rectangle32.scale.setTo(0.85,1.0); 
       
        _this.text32 = _this.add.text(0, 0, "396");
        _this.text32.font = "myfont";
        _this.text32.fill = "#ffffff";
        _this.text32.fontWeight = 'normal';
        _this.text32.anchor.set(0.5);
        _this.text32.scale.setTo(1.2,1.3); 
        _this.Rectangle32.addChild(_this.text32);
     
        _this.Rectangle33 =_this.add.sprite(712,460,'unity2_6_3_Rectangle');
    	_this.Rectangle33.anchor.setTo(0.5); 
        _this.Rectangle33.scale.setTo(0.85,1.0);
      
        _this.text33 = _this.add.text(0, 0, "397");
        _this.text33.font = "myfont";
        _this.text33.fill = "#ffffff";
        _this.text33.fontWeight = 'normal';
        _this.text33.anchor.set(0.5);
        _this.text33.scale.setTo(1.2,1.3); 
        _this.Rectangle33.addChild(_this.text33);
     
        _this.Rectangle34 =_this.add.sprite(780,460,'unity2_6_3_Rectangle');
    	_this.Rectangle34.anchor.setTo(0.5); 
        _this.Rectangle34.scale.setTo(0.85,1.0); 
       
        _this.text34 = _this.add.text(0, 0, "398");
        _this.text34.font = "myfont";
        _this.text34.fill = "#ffffff";
        _this.text34.fontWeight = 'normal';
        _this.text34.anchor.set(0.5);
        _this.text34.scale.setTo(1.2,1.3); 
        _this.Rectangle34.addChild(_this.text34);

        _this.Rectangle35 =_this.add.sprite(848,460,'unity2_6_3_Rectangle');
    	_this.Rectangle35.anchor.setTo(0.5); 
        _this.Rectangle35.scale.setTo(0.85,1.0);  
     
        _this.text35 = _this.add.text(0, 0, "399");
        _this.text35.font = "myfont";
        _this.text35.fill = "#ffffff";
        _this.text35.fontWeight = 'normal';
        _this.text35.anchor.set(0.5);
        _this.text35.scale.setTo(1.2,1.3); 
        _this.Rectangle35.addChild(_this.text35);
     
         _this.rectangleGrp.add(_this.Rectangle1);
        _this.rectangleGrp.add(_this.Rectangle2);
        _this.rectangleGrp.add(_this.Rectangle3);
        _this.rectangleGrp.add(_this.Rectangle4);
        _this.rectangleGrp.add(_this.Rectangle5);
        _this.rectangleGrp.add(_this.Rectangle6);
        _this.rectangleGrp.add(_this.Rectangle7);
        _this.rectangleGrp.add(_this.Rectangle8);
        _this.rectangleGrp.add(_this.Rectangle9);
        _this.rectangleGrp.add(_this.Rectangle10);
        _this.rectangleGrp.add(_this.Rectangle11);
        _this.rectangleGrp.add(_this.Rectangle12);
        _this.rectangleGrp.add(_this.Rectangle13);
        _this.rectangleGrp.add(_this.Rectangle14);
        _this.rectangleGrp.add(_this.Rectangle15);
        _this.rectangleGrp.add(_this.Rectangle16);
        _this.rectangleGrp.add(_this.Rectangle17);
        _this.rectangleGrp.add(_this.Rectangle18);
        _this.rectangleGrp.add(_this.Rectangle19);
        _this.rectangleGrp.add(_this.Rectangle20);
        _this.rectangleGrp.add(_this.Rectangle21);
        _this.rectangleGrp.add(_this.Rectangle22);
        _this.rectangleGrp.add(_this.Rectangle23);
        _this.rectangleGrp.add(_this.Rectangle24);
        _this.rectangleGrp.add(_this.Rectangle25);
        _this.rectangleGrp.add(_this.Rectangle26);
        _this.rectangleGrp.add(_this.Rectangle27);
        _this.rectangleGrp.add(_this.Rectangle28);
        _this.rectangleGrp.add(_this.Rectangle29);
        _this.rectangleGrp.add(_this.Rectangle30);
        _this.rectangleGrp.add(_this.Rectangle31);
        _this.rectangleGrp.add(_this.Rectangle32);
        _this.rectangleGrp.add(_this.Rectangle33);
        _this.rectangleGrp.add(_this.Rectangle34);
        _this.rectangleGrp.add(_this.Rectangle35);
       
        _this.Rectangle3.alpha = 0;
        _this.Rectangle4.alpha = 0;
        _this.Rectangle11.alpha = 0;
        _this.Rectangle22.alpha = 0;
        _this.Rectangle23.alpha = 0;
        _this.Rectangle30.alpha = 0;
     
        _this.objGrp=_this.add.group();
        _this.glowGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(512, 3, 63, 145);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
     
        _this.graphics1 = _this.add.graphics(100, 50);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(450, 58, 50, 60);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "box1";
     
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(376, 245, 63, 145);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(318, 295, 50, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "box2";
        
        _this.objGrp.add(_this.graphics1);
        _this.objGrp.add(_this.graphics2);
       
        _this.glow1 =_this.add.sprite(645,139,'unity2_6_3_glow1');
        _this.glow1.anchor.setTo(0.5); 
        _this.glow1.scale.setTo(0.8,0.95);
        _this.glow1.frame=21;
       
        _this.glow2 =_this.add.sprite(510,380,'unity2_6_3_glow1');
        _this.glow2.anchor.setTo(0.5); 
        _this.glow2.scale.setTo(0.8,0.95);
        _this.glow2.frame=21;
     
        _this.glowGrp.add(_this.glow1);
        _this.glowGrp.add(_this.glow2);
      
        _this.boxGrp=_this.add.group();
       
        _this.box1 =_this.add.sprite(150,180,'unity2_6_3_box');
        _this.box1.anchor.setTo(0.5); 
        _this.box1.scale.setTo(0.6,0.8);  
        _this.box1.frame=10;
        _this.box1.name = "box1";
        _this.box1.inputEnabled = true;
        _this.box1.input.useHandCursor = true;
        _this.box1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.text3 = _this.add.text(-80, -2, "367");
        _this.text3.font = "myfont";
        _this.text3.fill = "#ffffff";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text3);
     
        _this.text4 = _this.add.text(0, 1, "368");
        _this.text4.font = "myfont";
        _this.text4.fill = "#ffffff";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.scale.setTo(1.2,1.3);
        _this.box1.addChild(_this.text4);
     
        _this.text11 = _this.add.text(0, 80, "375");
        _this.text11.font = "myfont";
        _this.text11.fill = "#ffffff";
        _this.text11.fontWeight = 'normal';
        _this.text11.anchor.set(0.5);
        _this.text11.scale.setTo(1.2,1.3); 
        _this.box1.addChild(_this.text11);
     
        _this.box2 =_this.add.sprite(200,400,'unity2_6_3_box');
        _this.box2.anchor.setTo(0.5); 
        _this.box2.scale.setTo(0.6,0.8);  
        _this.box2.frame=10;
        _this.box2.name = "box2";
        _this.box2.inputEnabled = true;
        _this.box2.input.useHandCursor = true;
        _this.box2.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.text22 = _this.add.text(-80, 0, "386");
        _this.text22.font = "myfont";
        _this.text22.fill = "#ffffff";
        _this.text22.fontWeight = 'normal';
        _this.text22.anchor.set(0.5);
        _this.text22.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text22);
    
        _this.text23 = _this.add.text(0, 1, "387");
        _this.text23.font = "myfont";
        _this.text23.fill = "#ffffff";
        _this.text23.fontWeight = 'normal';
        _this.text23.anchor.set(0.5);
        _this.text23.scale.setTo(1.2,1.3); 
        _this.box2.addChild(_this.text23);
     
        _this.text30 = _this.add.text(0, 80, "394");
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
    
        // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level2.6.3_"+target.name, 
                    access_token: window.acctkn 
               } 
               
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
         //_this.click1 = _this.add.audio('ClickSound');
         //_this.click1.play();
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
           // _this.click2 = _this.add.audio('snapSound');
           // _this.click2.play();
            commonNavBar.playsnapSound();
        for(var i=0;i<_this.objGrp.length;i++)
         {
            if(_this.checkOverlap(target.getChildAt(0),_this.objGrp.getChildAt(i)))
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
            
        //if(_this.boxAdded >= 2){
           _this.rightmark.inputEnabled=true;
            _this.rightmark.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);
           _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
       // }
        
   
},_this);
     
 
 },

     
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
           

    clickTickMark:function(target){
        
        if(_this.correct >= 2)
        {
            target.events.onInputDown.removeAll(); 
             _this.rightmark.frame=1;
            _this.correctAns(target);
        }
        
        else
           { 
              _this.boxAdded = 0; 
               _this.wrongAns();
             
          }
         
        
    },

        
    

    removeCelebration:function()
	{
        //console.log("removeCeleb");
		celebration = false;
		//console.log("no"+_this.no11);
        _this.correct=0;
        //_this.count=0;
        _this.correctflag=0;

       // _this.noofAttempts = 0;
        // _this.AnsTimerCount = 0;
       
		  _this.no11++;
		   
		  if(_this.no11<3)
                    {
                        _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                        _this.count1++;
                        _this.wrong = true;
                         _this.time.events.add(1000, function()
                        {
                        _this.count =0;
                        _this.objGrp.destroy();
                        _this.glowGrp.destroy();
                        _this.boxGrp.destroy();
                        _this.rightmark.destroy();
                        _this.base.destroy();
                        _this.rectangleGrp.destroy();
                        _this.getQuestion();
                    
                    }, this);
                 }
        
                else
                    {
                         
                         // _this.stopVoice();
            //commonNavBar.stopTimer();
                    
                    console.log("score");
                    scoreflag=1;
                    no11=0;
                    countcorrect=0;
                
                    //commonNavBar.stopTimer();
                    commonNavBar.disableNavBar();
                    this.createScoreScene();
                  }



		
	},
    
    correctAns:function(target)
	{
       
       
        //_this.stopvoice();
        target.events.onInputDown.removeAll();
       // _this.speaker.inputEnabled=false;
        _this.rightmark.inputEnabled=false;
        
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level2.6.3_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
      
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }
                    
               //absdsjsapi.saveAssessment(_this.saveAsment);
        _this.sceneCount++;
       // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
               
       
		
    	
        _this.box1.frame=_this.hl1;
        _this.box2.frame=_this.hl2;
        
           _this.time.events.add(1000, function()
                        {
                        _this.count =0;
                        _this.objGrp.destroy();
                        _this.glowGrp.destroy();
                        _this.boxGrp.destroy();
                        _this.rightmark.destroy();
                        _this.base.destroy();
                        _this.rectangleGrp.destroy();
                       // _this.Rectangle1.destroy();
                       // _this.Rectangle2.destroy();
                        //_this.getQuestion();
                    
                    }, this);
		//console.log("correct11");
       // _this.speaker.inputEnabled=false;
       // _this.count1++;
       
		_this.celebration = true;
		
     	//_this.cmusic = _this.add.audio('celebr');
		//_this.cmusic.play();

          commonNavBar.playClickSound();
            commonNavBar.playCelebrationSound();
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
           // this.starsGroup.getChildAt(countcorrect).frame = 2; 
           // countcorrect++;
            target.events.onInputDown.removeAll();
           _this.time.events.add(1500, _this.removeCelebration, _this);
        
	},



  wrongAns:function(target)
	{
       this.starsGroup.getChildAt(_this.count1).frame = 1;
         this.Stararr.push(1);
       // _this.stopvoice();
        // _this.wmusic = _this.add.audio('waudio');
		//_this.wmusic.play();
       commonNavBar.playWrongCelebrationSound();
        _this.rightmark.frame=1;
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
        
         _this.time.events.add(1000, function()
                        {
                        _this.count =0;
                        _this.objGrp.destroy();
                        _this.glowGrp.destroy();
                        _this.boxGrp.destroy();
                        _this.rightmark.destroy();
                        _this.base.destroy();
                        _this.rectangleGrp.destroy();
                       // _this.Rectangle1.destroy();
                       // _this.Rectangle2.destroy();
                        //_this.getQuestion();
                    
                    }, this);
       
       // _this.noofAttempts++;
         //target.events.onInputDown.removeAll();
            //commonNavBar.stopTimer();
            _this.time.events.add(1000,_this.removeCelebration,_this);
        
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
   

        	//this.disableListeners();
       // target.events.onInputDown.removeAll();
	},
     
    createScoreScene:function()
    {
        this.completelyplayed = true;

        _this.stopq=1;
        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
  
        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.5,0.6);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.5,0.6);
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

        _this.state.start('numbersense2',true,false);
        
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
        /* if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.tryAgainText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
            this.terrificText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
            this.verGoodText.visible = true;
        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
            this.excellentText.visible = true;
        } */
  
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
            _this.state.start('sequence_NSSG_6_3level1',true,false);
        }, this);
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
            window.score = this.score;
            localStorage.setItem("Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("sequence_NSSG_6_3state", "playedwithhint");
                localStorage.setItem("numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("sequence_NSSG_6_3state", "fullycomplete");
                //localStorage.setItem("number_NSNG_2_1state", "canplay");
                localStorage.setItem("numbersensePlayed", "played");
            }   
        }         
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       