Game.multiplication_NOMG_1_1level2=function(){};

Game.multiplication_NOMG_1_1level2.prototype ={
    
    init:function(param,score,timerStopVar)
    {
       _this = this;
       
       _this.gameid = "Game 11.2";
       
        this.Stararr = param;
        this.score = score;
           this.timerStopVar = timerStopVar;
       // alert(this.timerStopVar);
        //telInitializer.gameIdInit("sequence2_5_1",gradeSelected);
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity11_1backg');
        

        if(window.languageSelected=="English")
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.2/English/11.2E.mp3";
                    else if(window.languageSelected=="Hindi")
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.2/Hindi/11.2H.mp3";
                    else if(window.languageSelected=="Kannada")
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.2/Kannada/11.2K.mp3";
                    else if(window.languageSelected=="Gujarati")
                        _this.qsoundurl = window.baseUrl+"questionSounds/Gujarati/11.2/11.2E.mp3";
					else if(window.languageSelected=="Marathi")
                    {
                         _this.qsoundurl = window.baseUrl+"questionSounds/11.2/Marathi/11.2E.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                         _this.qsoundurl = window.baseUrl+"questionSounds/11.2/Tamil/11.2E.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                         _this.qsoundurl = window.baseUrl+"questionSounds/11.2/Telugu/11.2E.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                         _this.qsoundurl = window.baseUrl+"questionSounds/11.2/Urdu/11.2E.mp3";
                    }
                    else
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.2/Odiya/11.2.mp3";

        commonNavBar.addNavBar(this,_this.qsoundurl,"numberoperation3");
        commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);

        commonNavBar.level2Bool = true;
       
    },
    
    create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;
        
		_this.amplify = null;
		
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.apple;
        _this.rightmark;
        _this.appleGrp;
        _this.boxGrp;
        _this.numbg;
        _this.ansbox;
        _this.txtbox;
        _this.rightAns ="";
        _this.numGroup;
        _this.background;
        _this.dropBoxGroup;
        _this.click3;
        _this.click1;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
        _this.sceneCount = 0;
        
        _this.enterTxt = null;
        _this.frameNum = 0;
        _this.selectedAns = "";
        _this.questioNo = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=5;
        _this.box=0;
        _this.correctflag=0;
        _this.correct=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.AnsTimerCount=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);

      
        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
         commonNavBar.getVoice(_this.qsoundurl);

         this.hintparams=['NODG1.2','level1',false,false,true,0];
           commonNavBar.addHint(this,this.hintparams);
        
        
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
       // commonNavBar.enableHintIcon();
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
    	switch(_this.qArrays[_this.no11])
    	{
            case 1: _this.gotoFirstQuestion();
    				break;
    		case 2:_this.gotoSecondQuestion();
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
    },
   
   generateStarsForTheScene:function(game,count)
    {
        this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'cstarAnim');
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
        
        this.starsGroup.getChildAt(5).frame = 2;
        this.starsGroup.getChildAt(6).frame = 0;
        this.starsGroup.getChildAt(7).frame = 0;
        this.starsGroup.getChildAt(8).frame = 0;
    },
    

  
gotoFirstQuestion:function(){
       
     //_this.getVoice();
     
     _this.questioNo = 1;
     _this.frameNum = 0;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(170,160,'unity11_2apple');
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(200,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(330,160,'unity11_2apple');
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(360,160,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(490,160,'unity11_2apple');
     _this.a3.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(550,380,'unity11_2apple');
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(550,310,'unity11_2apple');
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(550,240,'unity11_2apple');
     _this.c3.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(117,160,'unity11_2apple1');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(277,160,'unity11_2apple1');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple3 = _this.add.sprite(438,160,'unity11_2apple1');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
      
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
    
     _this.equal2 = _this.add.sprite(600,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=3;
     _this.box=3;
      
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
      
     
 },

gotoSecondQuestion:function(){
    
     //_this.getVoice();
     
     _this.questioNo = 2;
     _this.frameNum = 2;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(170,160,'unity11_2apple');
     _this.a1.frame = 2;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(240,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(360,160,'unity11_2apple');
     _this.a2.frame = 2;
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(435,160,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 =_this.add.sprite(560,160,'unity11_2apple');
     _this.a3.frame = 2;
     _this.a3.anchor.setTo(0.5);
     
     _this.set =_this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(550,380,'unity11_2apple');
     _this.c1.frame = 2;
     _this.c1.anchor.setTo(0.5);
     
     _this.c2 = _this.add.sprite(550,310,'unity11_2apple');
     _this.c2.frame = 2;
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(550,240,'unity11_2apple');
     _this.c3.frame = 2;
     _this.c3.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(144,160,'unity11_2apple2');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(334,160,'unity11_2apple2');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple3 = _this.add.sprite(534,160,'unity11_2apple2');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
      
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
      
     _this.equal2 = _this.add.sprite(630,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=6;
     _this.box=3;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.plus1);
     _this. boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
    
     
},
    
    
gotoThirdQuestion:function(){
       
     //_this.getVoice();
        
     _this.questioNo = 3;
     _this.frameNum = 4;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(170,160,'unity11_2apple');
     _this.a1.frame = 4;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(275,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(385,160,'unity11_2apple');
     _this.a2.frame = 4;
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(485,160,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(595,160,'unity11_2apple');
     _this.a3.frame = 4;
     _this.a3.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(530,380,'unity11_2apple');
     _this.c1.frame = 4;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(530,310,'unity11_2apple');
     _this.c2.frame = 4;
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(530,240,'unity11_2apple');
     _this.c3.frame = 4;
     _this.c3.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(169,160,'unity11_2apple3');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(384,160,'unity11_2apple3');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple3 = _this.add.sprite(594,160,'unity11_2apple3');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
      
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
      
     _this.equal2 =_this.add.sprite(660,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=9;
     _this.box=3;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this. dropBoxGroup.add(_this.c3);
     _this. boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this. boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
     
  },
    
    
gotoFourthQuestion:function(){
       
     //_this.getVoice();
         
     _this.questioNo = 3;
     _this.frameNum = 4;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(170,160,'unity11_2apple');
     _this.a1.frame = 4;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(320,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(470,160,'unity11_2apple');
     _this.a2.frame = 4;
     _this.a2.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(530,380,'unity11_2apple');
     _this.c1.frame = 4;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(530,310,'unity11_2apple');
     _this.c2.frame = 4;
     _this.c2.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(168,160,'unity11_2apple3');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(470,160,'unity11_2apple3');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
    
     _this.equal2 = _this.add.sprite(650,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox =_this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=6;
     _this.box=2;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
     
 },
    
gotoFifthQuestion:function(){
       
     //_this.getVoice();
    
     _this.questioNo = 5;
     _this.frameNum = 2;
     
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
    
     _this.a1 = _this.add.sprite(170,140,'unity11_2apple');
     _this.a1.frame = 2;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(240,140,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(360,140,'unity11_2apple');
     _this.a2.frame = 2;
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(435,140,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(560,140,'unity11_2apple');
     _this.a3.frame = 2;
     _this.a3.anchor.setTo(0.5);
        
     _this.plus3 = _this.add.sprite(630,140,'unity11_2plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.a4 = _this.add.sprite(760,140,'unity11_2apple');
     _this.a4.frame = 2;
     _this.a4.anchor.setTo(0.5);
    
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(540,430,'unity11_2apple');
     _this.c1.frame = 2;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(540,360,'unity11_2apple');
     _this.c2.frame = 2;
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(540,290,'unity11_2apple');
     _this.c3.frame = 2;
     _this.c3.anchor.setTo(0.5);
     
     _this.c4 = _this.add.sprite(540,220,'unity11_2apple');
     _this.c4.frame = 2;
     _this.c4.anchor.setTo(0.5); 
        
     _this.appleGrp= _this.add.group();
     
     _this.apple1 = _this.add.sprite(143,140,'unity11_2apple2');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(334,140,'unity11_2apple2');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
        

     _this.apple3 = _this.add.sprite(533,140,'unity11_2apple2');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.apple4 = _this.add.sprite(734,140,'unity11_2apple2');
     _this.apple4.scale.setTo(1.2,1.2);
     _this.apple4.anchor.setTo(0.5);
     _this.apple4.inputEnabled = true;
     _this.apple4.input.useHandCursor = true;
     _this.apple4.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4); 
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
     
     _this.equal2 = _this.add.sprite(630,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=8;
     _this.box=4;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.dropBoxGroup.add(_this.c4);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.a4);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.plus3);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul); 
     
 },
    
    
gotoSixthQuestion:function(){
     
    //_this.getVoice();
     
    _this.questioNo = 6;
     _this.frameNum = 0;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
    
     _this.a1 =_this.add.sprite(170,130,'unity11_2apple');
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(187,130,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(320,130,'unity11_2apple');
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(340,130,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(470,130,'unity11_2apple');
     _this.a3.anchor.setTo(0.5);
        
     _this.plus3 =_this.add.sprite(490,130,'unity11_2plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.a4 = _this.add.sprite(620,130,'unity11_2apple');
     _this.a4.anchor.setTo(0.5);
     
     _this.plus4 = _this.add.sprite(640,130,'unity11_2plus');
     _this.plus4.anchor.setTo(0.5);
     
     _this.a5 = _this.add.sprite(775,130,'unity11_2apple');
     _this.a5.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=4;
     
     _this.equal1 =_this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1 = _this.add.sprite(540,440,'unity11_2apple');
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(540,375,'unity11_2apple');
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(540,310,'unity11_2apple');
     _this.c3.anchor.setTo(0.5);
     
     _this.c4 = _this.add.sprite(540,245,'unity11_2apple');
     _this.c4.anchor.setTo(0.5); 
        
     _this.c5 = _this.add.sprite(540,180,'unity11_2apple');
     _this.c5.anchor.setTo(0.5); 
        
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(118,130,'unity11_2apple1');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(267,130,'unity11_2apple1');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple3 = _this.add.sprite(417,130,'unity11_2apple1');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.apple4 = _this.add.sprite(568,130,'unity11_2apple1');
     _this.apple4.scale.setTo(1.2,1.2);
     _this.apple4.anchor.setTo(0.5);
     _this.apple4.inputEnabled = true;
     _this.apple4.input.useHandCursor = true;
     _this.apple4.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.apple5 = _this.add.sprite(722,130,'unity11_2apple1');
     _this.apple5.scale.setTo(1.2,1.2);
     _this.apple5.anchor.setTo(0.5);
     _this.apple5.inputEnabled = true;
     _this.apple5.input.useHandCursor = true;
     _this.apple5.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4);
     _this.appleGrp.add(_this.apple5);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
     
     _this.equal2 = _this.add.sprite(600,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=5;
     _this.box=5;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.dropBoxGroup.add(_this.c4);
     _this.dropBoxGroup.add(_this.c5);
     _this.boxGrp.add(_this.a1);
     _this. boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.a4);
     _this.boxGrp.add(_this.a5);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.plus3);
     _this.boxGrp.add(_this.plus4);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
         
     },
    
gotoSeventhQuestion:function(){
     
     //_this.getVoice();
         
     _this.questioNo = 7;
     _this.frameNum = 0;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(300,160,'unity11_2apple');
     _this.a1.frame = 0;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(360,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(530,160,'unity11_2apple');
     _this.a2.frame = 0;
     _this.a2.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(550,380,'unity11_2apple');
     _this.c1.frame = 0;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(550,310,'unity11_2apple');
     _this.c2.frame = 0;
     _this.c2.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(248,160,'unity11_2apple1');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(477,160,'unity11_2apple1');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
      
     _this.equal2 = _this.add.sprite(600,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox =_this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=2;
     _this.box=2;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
},
    
gotoEighthQuestion:function(){
     
     //_this.getVoice();
         
     _this.questioNo = 8;
     _this.frameNum = 2;
    
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
         
     _this.a1 = _this.add.sprite(300,160,'unity11_2apple');
     _this.a1.frame = 2;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(410,160,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(580,160,'unity11_2apple');
     _this.a2.frame = 2;
     _this.a2.anchor.setTo(0.5);
     
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(550,380,'unity11_2apple');
     _this.c1.frame = 2;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(550,310,'unity11_2apple');
     _this.c2.frame = 2;
     _this.c2.anchor.setTo(0.5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(274,160,'unity11_2apple2');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(554,160,'unity11_2apple2');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
      
     _this.equal2 = _this.add.sprite(620,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox =_this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=4;
     _this.box=2;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
},

gotoNinthQuestion:function(){
       
     //_this.getVoice();
     
     _this.questioNo = 9;
     _this.frameNum = 0;
     
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
    
     _this.a1 = _this.add.sprite(196,140,'unity11_2apple');
     _this.a1.frame = 0;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(240,140,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(387,140,'unity11_2apple');
     _this.a2.frame = 0;
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(435,140,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(584,140,'unity11_2apple');
     _this.a3.frame = 0;
     _this.a3.anchor.setTo(0.5);
        
     _this.plus3 = _this.add.sprite(630,140,'unity11_2plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.a4 = _this.add.sprite(787,140,'unity11_2apple');
     _this.a4.frame = 0;
     _this.a4.anchor.setTo(0.5);
    
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(550,430,'unity11_2apple');
     _this.c1.frame = 0;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(550,360,'unity11_2apple');
     _this.c2.frame = 0;
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(550,290,'unity11_2apple');
     _this.c3.frame = 0;
     _this.c3.anchor.setTo(0.5);
     
     _this.c4 = _this.add.sprite(550,220,'unity11_2apple');
     _this.c4.frame = 0;
     _this.c4.anchor.setTo(0.5); 
        
     _this.appleGrp= _this.add.group();
     
     _this.apple1 = _this.add.sprite(143,140,'unity11_2apple1');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(334,140,'unity11_2apple1');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
    
     _this.apple3 = _this.add.sprite(532,140,'unity11_2apple1');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.apple4 = _this.add.sprite(734,140,'unity11_2apple1');
     _this.apple4.scale.setTo(1.2,1.2);
     _this.apple4.anchor.setTo(0.5);
     _this.apple4.inputEnabled = true;
     _this.apple4.input.useHandCursor = true;
     _this.apple4.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4); 
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
     
     _this.equal2 = _this.add.sprite(600,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=4;
     _this.box=4;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.dropBoxGroup.add(_this.c4);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.a4);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.plus3);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
        
     
 },
    
gotoTenthQuestion:function(){
       
     //_this.getVoice();
     
     _this.questioNo = 10;
     _this.frameNum = 4;
     
     _this.outbox = _this.add.sprite(480,290,'unity11_2box');
     _this.outbox.anchor.setTo(0.5);
    
     _this.a1 = _this.add.sprite(155,140,'unity11_2apple');
     _this.a1.frame = 4;
     _this.a1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(260,140,'unity11_2plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.a2 = _this.add.sprite(370,140,'unity11_2apple');
     _this.a2.frame = 4;
     _this.a2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(475,140,'unity11_2plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.a3 = _this.add.sprite(585,140,'unity11_2apple');
     _this.a3.frame = 4;
     _this.a3.anchor.setTo(0.5);
        
     _this.plus3 = _this.add.sprite(690,140,'unity11_2plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.a4 = _this.add.sprite(800,140,'unity11_2apple');
     _this.a4.frame = 4;
     _this.a4.anchor.setTo(0.5);
    
     _this.set = _this.add.sprite(240,360,'unity11_2set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(180,356,'unity11_2numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
    
     _this.numbers2 = _this.add.sprite(290,356,'unity11_2numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(400,360,'unity11_2equal');
     _this.equal1.anchor.setTo(0.5);
     
     _this.boxGrp=_this.add.group();
     _this.dropBoxGroup=_this.add.group();
      
     _this.c1  = _this.add.sprite(540,430,'unity11_2apple');
     _this.c1.frame = 4;
     _this.c1.anchor.setTo(0.5);
    
     _this.c2 = _this.add.sprite(540,360,'unity11_2apple');
     _this.c2.frame = 4;
     _this.c2.anchor.setTo(0.5);
     
     _this.c3 = _this.add.sprite(540,290,'unity11_2apple');
     _this.c3.frame = 4;
     _this.c3.anchor.setTo(0.5);
     
     _this.c4 = _this.add.sprite(540,220,'unity11_2apple');
     _this.c4.frame = 4;
     _this.c4.anchor.setTo(0.5); 
        
     _this.appleGrp= _this.add.group();
     
     _this.apple1 = _this.add.sprite(155,140,'unity11_2apple3');
     _this.apple1.scale.setTo(1.2,1.2);
     _this.apple1.anchor.setTo(0.5);
     _this.apple1.inputEnabled = true;
     _this.apple1.input.useHandCursor = true;
     _this.apple1.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.apple2 = _this.add.sprite(370,140,'unity11_2apple3');
     _this.apple2.scale.setTo(1.2,1.2);
     _this.apple2.anchor.setTo(0.5);
     _this.apple2.inputEnabled = true;
     _this.apple2.input.useHandCursor = true;
     _this.apple2.events.onInputDown.add(_this.onDragStart,_this);
    
     _this.apple3 = _this.add.sprite(585,140,'unity11_2apple3');
     _this.apple3.scale.setTo(1.2,1.2);
     _this.apple3.anchor.setTo(0.5);
     _this.apple3.inputEnabled = true;
     _this.apple3.input.useHandCursor = true;
     _this.apple3.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.apple4 = _this.add.sprite(800,140,'unity11_2apple3');
     _this.apple4.scale.setTo(1.2,1.2);
     _this.apple4.anchor.setTo(0.5);
     _this.apple4.inputEnabled = true;
     _this.apple4.input.useHandCursor = true;
     _this.apple4.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4); 
     _this.appleGrp.add(_this.numbers1);
     _this.appleGrp.add(_this.numbers2);
     
     _this.equal2 = _this.add.sprite(650,360,'unity11_2equal');
     _this.equal2.anchor.setTo(0.5);
     
     _this.txtbox = _this.add.sprite(750,360,'unity11_2ansbox');
     _this.txtbox.anchor.setTo(0.5);
     
     _this.mul = _this.add.sprite(230,355,'unity11_2mul');
     _this.mul.anchor.setTo(0.5);
      
     _this.rightAns=12;
     _this.box=4;
     
     _this.dropBoxGroup.add(_this.c1);
     _this.dropBoxGroup.add(_this.c2);
     _this.dropBoxGroup.add(_this.c3);
     _this.dropBoxGroup.add(_this.c4);
     _this.boxGrp.add(_this.a1);
     _this.boxGrp.add(_this.a2);
     _this.boxGrp.add(_this.a3);
     _this.boxGrp.add(_this.a4);
     _this.boxGrp.add(_this.plus1);
     _this.boxGrp.add(_this.plus2);
     _this.boxGrp.add(_this.plus3);
     _this.boxGrp.add(_this.equal1);
     _this.boxGrp.add(_this.equal2);
     _this.boxGrp.add(_this.set);
     _this.boxGrp.add(_this.mul);
        
     
     
 },

     onDragStart:function(target){
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level11.2_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
         
       _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        commonNavBar.playClickSound();
     
      
        target.events.onDragStop.add(
        function(target){
        for(var i=0;i<_this.dropBoxGroup.length;i++)
         {
             
            if(_this.checkOverlap(target,_this.dropBoxGroup.getChildAt(i))&&_this.dropBoxGroup.getChildAt(i).frame==_this.frameNum)
                {
                    
                    _this.correct++;
                    
                    _this.dropBoxGroup.getChildAt(i).frame = _this.dropBoxGroup.getChildAt(i).frame+1;
                    target.visible = false;
                   
                    if(_this.correct>=_this.box)
                        {
                            //console.log("hhhhhhh" +_this.correct);
                            _this.addNumberPad();
                        }
                    break;
                }
                 
         
                
         }
         target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
        
    },_this);
       
          
 },
      
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
           
        
 addNumberPad:function(){
     
        // commonNavBar.playClickSound();
        _this.numGroup = _this.add.group();
        _this.objGroup =_this.add.group();
        _this.box1 = _this.numGroup.create(480,503,'unity11_2b2');
        _this.box1.anchor.setTo(0.5);
        
        _this. x = 80;
        for(var i=0;i<10;i++)
        {
            _this. numbg = _this.numGroup.create(_this.x,505,'unity11_1numbg');  
            _this.numbg.anchor.setTo(0.5);
			_this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name =i;
            _this.numbg.frame=i;
            
            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
   
        _this.txtbox.name = "AnswerBox";
        _this.objGroup.add(_this.txtbox);
       
		
        _this.wrongbtn = _this.numGroup.create(_this.x+30,505,'unity11_2erase');
        _this.wrongbtn.anchor.setTo(0.5);
        //_this.wrongbtn.scale.setTo(0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'unity11_2rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "wrongbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        _this.enterTxt = _this.add.text(-2,1, _this.selectedAns);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';

        _this.enterTxt.font = 'myfont';
        _this.enterTxt.name = "enterTxt";
        _this.enterTxt.fontSize = 70;
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#00C4EB';
    
        _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox.addChild(_this.enterTxt);
        _this.txtbox.name = "txtbox";
    
        
    
      _this.wrongbtn.events.onInputDown.add(function(target){
			target.frame = 1;
			 commonNavBar.playClickSound();
			_this.enterTxt.setText("");
			_this.selectedAns="";
			 _this.time.events.add(500, function(){target.frame = 0; 
				},_this);
			},_this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
			target.frame = 1;
            _this.noofAttempts++;
            target.events.onInputDown.removeAll();
            //commonNavBar.disableHintIcon();
            commonNavBar.playClickSound();
            //console.log(_this.selectedAns);
            //console.log(_this.rightAns);
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==""+_this.rightAns||_this.selectedAns==""+_this.rightAns)  
                {
                    telInitializer2.gameCorrectAns();
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
                        
                        this.celebration = true;
                        commonNavBar.playClickSound();
                        commonNavBar.playCelebrationSound();
                        target.events.onInputDown.removeAll();
                        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                        _this.starAnim.smoothed = false;
                        _this.anim4 = _this.starAnim.animations.add('star');
                       _this.anim4.play(25,false); 
                        this.Stararr.push(3);
                       // _this.time.events.add(1000, _this.removeCelebration, _this);
                        _this.sceneCount++;
                        //_this.count1++;
                       _this.tween1 = _this.add.tween(_this.numGroup);
                       _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                       _this.time.events.add(1000, function(){_this.removeCelebration();},_this);
                }
            else
                {
                   telInitializer2.gameWrongAns();
                     //console.log("wrong");
                     target.frame = 1;
                    this.starsGroup.getChildAt(_this.count1).frame = 1;
                    this.Stararr.push(1);
                    _this.selectedAns = "";
                    _this.enterTxt.setText("");
                    _this.shake.shake(10, _this.txtbox);
                    commonNavBar.playClickSound();
                    commonNavBar.playWrongCelebrationSound();
                    target.events.onInputDown.removeAll();
                    _this.time.events.add(1000, _this.removeCelebration, _this);
					//_this.time.events.add(300, function(){target.frame = 0;},_this);
                }
  
        },_this);
        
        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
        _this.numGroup.visible=true;
        _this.numGroup.y=50;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
        },_this);
    },
        
	
	 numClicked:function(target){
     //console.log(target.name);
        // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level11.2_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        commonNavBar.playtapSound();
        if(_this.selectedAns.length<2)
        {
            _this.selectedAns += target.name;
            //_this.numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
            _this.txtbox.getChildAt(0).setText(_this.selectedAns);
        }
     },
    
    removeCelebration:function()
	{
        //console.log("removeCeleb");
		_this.celebration = false;
		//console.log("no"+_this.no11);
		_this.correctflag=0;
        _this.correct=0;
        _this.count=0;
       
		  _this.no11++;
		   
		  if(_this.no11<4)
                    {
                        
                        _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                        _this.count1++;
                        _this.wrong = true;
                       
                        _this.appleGrp.destroy();
                        _this.boxGrp.destroy();
                        _this.numGroup.destroy();
                        _this.dropBoxGroup.destroy();
                        _this.box1.destroy();
                        _this.objGroup.destroy();
                         _this.outbox.destroy();
                        _this.enterTxt = '';
                        _this.selectedAns = '';
                        _this.txtbox.destroy();
                        _this.getQuestion();
                    }
        
                else
                    {
                         _this.appleGrp.destroy();
                        _this.boxGrp.destroy();
                         _this.numGroup.destroy();
                        _this.dropBoxGroup.destroy();
                        _this.box1.destroy();
                         _this.objGroup.destroy();
                         _this.outbox.destroy();
                        _this.enterTxt = '';
                        _this.selectedAns = '';
                        console.log("score");
                        scoreflag=1;
                        no11=0;
                        countcorrect=0;
                      // commonNavBar.stopTimer();
                      // commonNavBar.disableNavBar();
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
                  }



		
	},
    
    
 correctAns:function(target)
	{
       telInitializer2.gameCorrectAns();
        
        target.events.onInputDown.removeAll(); 
       _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level11.2_"+target.name, 
                    access_token: window.acctkn 
               } 
      
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
                    
               absdsjsapi.saveAssessment(_this.saveAsment);
        
        _this.celebration = true;
        
        commonNavBar.playClickSound();
        commonNavBar.playCelebrationSound();
        target.events.onInputDown.removeAll();
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(25,false); 
         this.Stararr.push(3);
        _this.time.events.add(1000, _this.removeCelebration, _this);
        _this.sceneCount++;
        
	},


  wrongAns:function(target)
	{
       telInitializer2.gameWrongAns();
         target.frame = 1;
        this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
		_this.shake.shake(10, target);
        _this.noofAttempts++;
        _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level11.2_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
		 commonNavBar.playClickSound();
         commonNavBar.playWrongCelebrationSound();
         target.events.onInputDown.removeAll();
       //  commonNavBar.stopTimer();
        _this.time.events.add(1000, _this.removeCelebration, _this);
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
    
		this.backgroundtransp.visible=false;

        _this.state.start('numberoperation3',true,false);
        
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
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('multiplication_NOMG_1_1level1',true,false);
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
            this.stopvoice();

             window.score = this.score;

              window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;

            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"multiplication_NOMG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"multiplication_NOMG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"multiplication_NOMG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }   
        }

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       