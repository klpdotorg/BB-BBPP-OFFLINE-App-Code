Game.addition_NOAG_1_1level1=function(){};
var no22;
var no11;
var qArrays;
var carrot;
var addLength;
var imp;
var carrot;
var displayCarrots1,displayCarrots2,displayCarrots3,displayCarrots4,displayCarrots5,displayCarrots6,displayCarrots7,displayCarrots8;
var randomno;
var randarr;
var dragged;
var allElements;
var blackCarrots;
var carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9;
var blackCarrots1,blackCarrots2,blackCarrots3,blackCarrots4,blackCarrots5,blackCarrots6,blackCarrots7,blackCarrots8,blackCarrots9;
var framesChange;
var f,v;
var framesChange1;
var greenNumbers;
var greenNumbers1;
var shakeGroup;
var correctflag;
var qArrays1;
var carrotArray;
var count;
var count1;
var dragcount;
var speakerbtn;
var destCarrots;
var counterForTimer;
var minutes;
var seconds;
var celebration;
var thinkingCloud;
var carrotGroup;
var pressed;
var starsGroup;
var timeDisplay;


Game.addition_NOAG_1_1level1.prototype={

  init:function(param,score)
  {
    _this = this;
					  
	this.Stararr = param;
	this.score = score;				
    if(window.quizQuest == false)
		this.score =parseInt(window.score);

    _this.gameid = "1.1";

    

        /*  this.gameid = "Game 5.1";
          this.questionid=null;
            this.noofAttempts=0;
            this.sceneCount=0;
            this.AnsTimerCount=0;*/
            telInitializer2.gameIdInit2("NOAG1.1");
          },


          preload:function(game){
        if(!window.grade1NSN8){

            window.grade1NSN8 = true;

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

            //game assets.
        this.load.image('grade61_background',window.baseUrl+'assets/gradeAssets/unity/6.1/bg.png');
        this.load.image('grade61_bg1',window.baseUrl+'assets/gradeAssets/unity/6.1/bg1.png');
        this.load.image('grade61_boxbg', window.baseUrl+'assets/gradeAssets/unity/6.1/Boxbg.png');
        this.load.image('grade61_timebg', window.baseUrl+'assets/gradeAssets/unity/6.1/timebg.png');
        this.load.image('grade61_WhiteBox', window.baseUrl+'assets/gradeAssets/unity/6.1/WhiteBox.png');
        this.load.image('grade61_TopBar', window.baseUrl+'assets/gradeAssets/unity/6.1/Topbar.png');
        this.load.image('grade61_bottomBar', window.baseUrl+'assets/gradeAssets/unity/6.1/bottomBar.png');
        this.load.image('grade61_dottedBox', window.baseUrl+'assets/gradeAssets/unity/6.1/dottedBox.png');
        this.load.image('grade61_plusSign', window.baseUrl+'assets/gradeAssets/unity/6.1/plusSign.png');
        this.load.image('grade61_equalSymbol', window.baseUrl+'assets/gradeAssets/unity/6.1/equalSymbol.png');
        this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/unity/6.1/carrotsAnim.json');
        this.load.atlas('grade61_RabitAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/RabitAnim.png' ,window.baseUrl+'json/gradeJson/unity/6.1/RabitAnim.json');
        this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/unity/6.1/calNum.png' ,window.baseUrl+'json/gradeJson/unity/6.1/calNum.json');
        this.load.atlas('grade61_greenNumbers',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers.json');
        this.load.atlas('grade61_carrot',window.baseUrl+'assets/gradeAssets/unity/6.1/carrot.png' ,window.baseUrl+'json/gradeJson/unity/6.1/carrot.json');
        this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers1.json');
        this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers2.json');
        this.load.atlas('grade61_txtbox',window.baseUrl+'assets/gradeAssets/unity/6.1/txtbox.png' ,window.baseUrl+'json/gradeJson/unity/6.1/txtbox.json');
        this.load.atlas('grade61_tick',window.baseUrl+'assets/gradeAssets/unity/6.1/tick.png' ,window.baseUrl+'json/gradeJson/unity/6.1/tick.json');
        this.load.atlas('grade61_eraser',window.baseUrl+'assets/gradeAssets/unity/6.1/eraser.png' ,window.baseUrl+'json/gradeJson/unity/6.1/eraser.json');
        this.load.atlas('grade61_thinkingCloud',window.baseUrl+'assets/gradeAssets/unity/6.1/thinkingCloud.png',window.baseUrl+'json/gradeJson/unity/6.1/thinkingCloud.json');
        this.load.atlas('grade61_backbtn',window.baseUrl+'assets/gradeAssets/unity/6.1/backbtn.png' ,window.baseUrl+'json/gradeJson/unity/6.1/backbtn.json');
        this.load.atlas('grade61_speaker',window.baseUrl+'assets/gradeAssets/unity/6.1/speaker.png' ,window.baseUrl+'json/gradeJson/unity/6.1/speaker.json');
        this.load.atlas('grade61_starAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/starAnim.png',window.baseUrl+'json/gradeJson/unity/6.1/starAnim.json');
        this.load.atlas('grade61_btn',window.baseUrl+'assets/gradeAssets/unity/6.1/btn.png',window.baseUrl+'json/gradeJson/unity/6.1/btn.json');
        this.load.image('grade61_tittleBar', window.baseUrl+'assets/gradeAssets/unity/6.1/tittleBar.png');
        this.load.atlas('grade61_replay', window.baseUrl+'assets/gradeAssets/unity/6.1/reply.png', window.baseUrl+'json/gradeJson/unity/6.1/reply.json');

    }

    },

          create:function(game){

            _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'grade61_bg1');
       // _this.qsoundurl= "questionSounds/unity/5.1/English/2.4.mp3";
       commonNavBar.addNavBar(this,_this.qsoundurl,"numberoperation1");
       commonNavBar.addTimerToTheGame(this,0,0,0);
       commonNavBar.startTimer(this);
       commonNavBar.addScore(game,this.score);
       // commonNavBar.addHint(this);
       this.hintparams=['NOAG1.1','level1',false,false,true,1];
       commonNavBar.addHint(this,this.hintparams);

            this.Stararr = [];

            _this.amplify = null;
            shake = new Phaser.Plugin.Shake(game);
            game.plugins.add(shake);
            no11 = 0;
            addLength=0;
            no22 = 0;
            minutes=0;
            seconds=0;
            counterForTimer=0;
            randomno=0;
         //countcorrect=1;
        //dragged=false;
        _this.count=0;
        _this.count1=0;
        celebration= false;
        
        framesChange11=new Array();
        framesChange=new Array();
        framesChange1=new Array();
        randarr = new Array();
        carrotArray = new Array();
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6];
        //qArrays = this.shuffle(qArrays);
       this.physics.startSystem(Phaser.Physics.ARCADE);
       this.physics.setBoundsToWorld();

       framesChange = [1,2,3,4,5,6];
       framesChange1 = [1,2,3,4,5,6,7];




        //this.generateStarsForTheScene(6);
        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
        
        
       /* var timebg=this.add.sprite(300,9,'grade61_timebg');
        timebg.scale.setTo(1.2,1);
        timebg.name="grade61_timebg";
        
        timeDisplay = this.add.text(330,25,minutes + ' : '+ seconds);
            timeDisplay.anchor.setTo(0.5);
            timeDisplay.align = 'center';
            timeDisplay.font = 'Oh Whale';
            timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            timeDisplay.fill = '#ADFF2F';*/


       /* var dottedBox=this.add.sprite(70,7,'grade51_dottedBox');
        dottedBox.name="grade51_dottedBox";
            var numTxt1 = this.add.text(45,17, 'PRACTICE');
            numTxt1.anchor.setTo(0.5);
        numTxt1.scale.setTo(1.2,1.2);
            numTxt1.align = 'center';
            numTxt1.font = 'Alte Haas Grotesk';
            numTxt1.fontSize = 10;
            numTxt1.fill = '#ffffff';
            numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            dottedBox.addChild(numTxt1);
        
            var numTxt2 = this.add.text(210,24, 'Addition');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
            
			//_this.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.playRabbitSound, _this);

    },
    
	//commonNavBar.playRabbitSound();

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
    
    stopVoice:function(){
     if(this.playQuestionSound)
     {
       if(this.playQuestionSound.contains(this.src))
       {
        this.playQuestionSound.removeChild(this.src);
        this.src = null;
      }
      if(!this.playQuestionSound.paused)
      {
        this.playQuestionSound.pause();
        this.playQuestionSound.currentTime = 0.0;
      }
      this.playQuestionSound = null;
      this.src = null;
    }

    if(this.celebrationSound)
    {
     if(this.celebr.isPlaying)
     {
      this.celebr.stop();
      this.celebr = null;
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

getVoice:function(){    
       // this.stopVoice();

       this.playQuestionSound = document.createElement('audio');
       this.src = document.createElement('source');

       if(Number(greenNumbers1.frame+1)==1){
        this.questionid = 1;

               //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFirst.mp3");

               if(window.languageSelected=="English")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameFirst.mp3");
              else if(window.languageSelected=="Hindi")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFirst.mp3");
              else if(window.languageSelected=="Kannada")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFirst.mp3");
              else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFirst.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFirst.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFirst.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFirst.mp3");
				else if(window.languageSelected=="Urdu")
					this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFirst.mp3");
              else
              {
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_a.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
              }

            }

            else if(Number(greenNumbers1.frame+1)==2){
              this.questionid = 2;

              // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSecond.mp3");
              if(window.languageSelected=="English")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameSecond.mp3");
              else if(window.languageSelected=="Hindi")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSecond.mp3");
              else if(window.languageSelected=="Kannada")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSecond.mp3");
              else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSecond.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSecond.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSecond.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSecond.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSecond.mp3");
              else
              {
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_b.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
              }


            }
            else if(Number(greenNumbers1.frame+1)==3){
              this.questionid = 3;
              
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameThird.mp3");
              if(window.languageSelected=="English")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameThird.mp3");

              else if(window.languageSelected=="Hindi")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameThird.mp3");

              else if(window.languageSelected=="Kannada")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameThird.mp3");
               else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameThird.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameThird.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameThird.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameThird.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameThird.mp3");
              else
              {
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_c.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
              }


            }
            else if(Number(greenNumbers1.frame+1)==4){
              this.questionid = 4;
              
             // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFourth.mp3");
             if(window.languageSelected=="English")
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameFourth.mp3");

            else if(window.languageSelected=="Hindi")
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFourth.mp3");

            else if(window.languageSelected=="Kannada")
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFourth.mp3");
             else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFourth.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFourth.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFourth.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFourth.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFourth.mp3");
            else
            {
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_d.mp3");
              _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }


          }
          else if(Number(greenNumbers1.frame+1)==5){
            this.questionid = 5;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFifth.mp3");
              if(window.languageSelected=="English")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameFifth.mp3");

              else if(window.languageSelected=="Hindi")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFifth.mp3");

              else if(window.languageSelected=="Kannada")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFifth.mp3");
               else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFifth.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EgameFirfth.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EgameFirfth.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EgameFirfth.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EgameFirfth.mp3");
              else
              {
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_e.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
              }


            }
            else if(Number(greenNumbers1.frame+1)==6){
              this.questionid = 6;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSixth.mp3");
              if(window.languageSelected=="English")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameSixth.mp3");

              else if(window.languageSelected=="Hindi")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSixth.mp3");

              else if(window.languageSelected=="Kannada")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSixth.mp3");
               else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSixth.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSixth.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSixth.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSixth.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSixth.mp3");
              else
              {
                this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_f.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
              }


            }
            else if(Number(greenNumbers1.frame+1)==7){
              this.questionid = 7;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSeventh.mp3");
              if(window.languageSelected=="English")
               this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EGameSeventh.mp3");

             else if(window.languageSelected=="Hindi")
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSeventh.mp3");

            else if(window.languageSelected=="Kannada")
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSeventh.mp3");
             else if(window.languageSelected=="Gujarati")
                this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSeventh.mp3");
			else if(window.languageSelected=="Marathi")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSeventh.mp3");
				else if(window.languageSelected=="Telugu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSeventh.mp3");
				else if(window.languageSelected=="Tamil")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSeventh.mp3");
				else if(window.languageSelected=="Urdu")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSeventh.mp3");
            else
            {
              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_g.mp3");
              _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }


          }
          this.playQuestionSound.appendChild(this.src);
          this.playQuestionSound.play(); 

        },

        getQuestion:function()
        {
          console.log("get question");
          this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
        //_this.sceneCount++;

        dragcount = 0;

        switch(qArrays[no11])
       //switch(no11)
       {
        case 1: 
        case 2: 
        case 3: 
        case 4:
        case 5: 
        case 6: this.gotoFirstQuestion();
        break;
      }
      console.log("!!!!!!!!! "+Number(greenNumbers1.frame));
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
      this.starsGroup.getChildAt(0).frame = 2;
      this.starsGroup.getChildAt(1).frame = 0;
      this.starsGroup.getChildAt(2).frame = 0;
      this.starsGroup.getChildAt(3).frame = 0;

      if(window.quizQuest == true)
      {
          this.starsGroup.visible = false;
          
          this.quiztext = this.add.text(120,24, "\n"+window.quizText+"\n");
          this.quiztext.anchor.setTo(0.5);
          this.quiztext.align = 'center';
          this.quiztext.font = 'gradefont';
          this.quiztext.fontWeight = 'normal';
          this.quiztext.fontSize = 18;
          this.quiztext.fill = '#ADFF2F';
      }
    },
    
     /*callsuccess:function()
    {       
        commonNavBar.getVoice(commonNavBar.soundUrl);
      },*/


   /* addQuestion:function(no22)
    {
        //////console.log("wwwww");
      
        destCarrots.destroy();
            
        timer1.stop();
        allElements.destroy();
        carrotArray.length=0;
        carrotGroup.destroy();
        shakeGroup.destroy();
        for(var m=0;m<randarr.length;m++)
        {
            randarr[m].destroy();
            
            
        }
        randarr.length=0;
      
        //carrot.destroy();
        //randarr[f].destroy();
        
        //this.time.events.add(500, function(){
        this.changeQuestion();
        //}, this);

      },*/

  /*  update:function(){

  },*/

  gotoFirstQuestion:function(){
    	//no11++;


        //this.input.enabled = false;
        //this.getVoice();
        
        allElements=this.add.group();
       // randomno=  Math.ceil(Math.random() * 7);
        //carrotArray=this.shuffle(carrotArray);
        //randomno=carrotArray[0];
        //////console.log("length="+randomno);
        this.addNumberPad();
        this.carrotVisible();

        carrotGroup.setAll("inputEnabled",false);
        
        var selectarr=this.carrotInsideCloud();
        //////console.log("selectarr==="+randomno);

        
        var RabitAnim = this.add.sprite(70,440,'grade61_RabitAnim','Symbol 2 instance 10000');
        RabitAnim.name="grade51_RabitAnim";
        RabitAnim.anchor.setTo(0.5);
        RabitAnim.scale.setTo(0.6,0.6);
        RabitAnim.smoothed = true;
        var animRabit=RabitAnim.animations.add('RabitAnim');
        animRabit.play(10,true);
        
        
        thinkingCloud = this.add.sprite(180,260,'grade61_thinkingCloud','Symbol 5 instance 10000');
        thinkingCloud.name="grade51_thinkingCloud";
        thinkingCloud.anchor.setTo(0.5);
        thinkingCloud.scale.setTo(0.8,0.9);
        thinkingCloud.smoothed = true;
        var animCloud=thinkingCloud.animations.add('thinkingCloud');
        animCloud.play(10,false);
        animCloud.onComplete.add(function(){
          //this.input.enabled = true;
          carrotGroup.setAll("inputEnabled",true);
        },this);
        

        

        
        allElements.add(RabitAnim);
        allElements.add(thinkingCloud);

        
        


      },

      carrotInsideCloud:function(){
        console.log("cloud here");
        commonNavBar.disableHintIcon();

        this.time.events.add(900, function(){

          carrotArray=[1,2,3,4,5,6,7,8];

          for(f=0,v=0;f<randomno;f++)
          {

           if(f<4){
             randarr.push(this.add.sprite(0,0,'grade61_carrot'));
             randarr.name="grade51_carrot1";
             randarr[f].x=80+(f*50);
             randarr[f].y=180;
           }
           else 
           {

            randarr.push(this.add.sprite(0,0,'grade61_carrot'));
            randarr.name="grade51_carrot2";
            randarr[f].x=80+(v*50);
            randarr[f].y=260;
            v++;
          }


          randarr[f].anchor.setTo(0.5);
          randarr[f].scale.setTo(0.5,0.5);
          randarr[f].frame=1;
          randarr[f].visible=true;
          commonNavBar.enableHintIcon();
        }


            //randomno1=randomno;
            
        ////////console.log("last position of carrot="+randarr[randarr.length].x);
        //////console.log("length="+randarr.length);

        addLength=randarr.length-1;
         //////console.log("last x position of carrot ="+randarr[addLength].x);
         //////console.log("last  y position of carrot="+randarr[addLength].y);
       },this);
      },

      addListeners:function(target){
        carrot1.input.enableDrag(true);
        carrot2.input.enableDrag(true);
        carrot3.input.enableDrag(true);
        carrot4.input.enableDrag(true);
        carrot5.input.enableDrag(true);
        carrot6.input.enableDrag(true);
        carrot7.input.enableDrag(true);
        carrot8.input.enableDrag(true);
        carrot9.input.enableDrag(true);

        /*this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();*/
        commonNavBar.playClickSound();
        
        carrot1.events.onDragStart.add(this.onDragStart, this);
        carrot1.events.onDragStop.add(this.onDragStop, this);

        carrot2.events.onDragStart.add(this.onDragStart, this);
        carrot2.events.onDragStop.add(this.onDragStop, this);

        carrot3.events.onDragStart.add(this.onDragStart, this);
        carrot3.events.onDragStop.add(this.onDragStop, this);
        
        carrot4.events.onDragStart.add(this.onDragStart, this);
        carrot4.events.onDragStop.add(this.onDragStop, this);

        carrot5.events.onDragStart.add(this.onDragStart, this);
        carrot5.events.onDragStop.add(this.onDragStop, this);

        carrot6.events.onDragStart.add(this.onDragStart, this);
        carrot6.events.onDragStop.add(this.onDragStop, this);
        
        carrot7.events.onDragStart.add(this.onDragStart, this);
        carrot7.events.onDragStop.add(this.onDragStop, this);

        carrot8.events.onDragStart.add(this.onDragStart, this);
        carrot8.events.onDragStop.add(this.onDragStop, this);

        carrot9.events.onDragStart.add(this.onDragStart, this);
        carrot9.events.onDragStop.add(this.onDragStop, this);
      },

      onDragStart:function(target){
    	//////console.log("startdrag");
     if(_this.timer)
     {
           // _this.timer.stop();
           commonNavBar.stopTimer();
         }
         if(target==carrot1)
         {
                //////console.log("target="+target);
                blackCarrots1.visible=true;
              }
              if(target==carrot2)
              {
                blackCarrots2.visible=true;
              }
              if(target==carrot3)
              {
                blackCarrots3.visible=true;
              }
              if(target==carrot4)
              {
                blackCarrots4.visible=true;
              }
              if(target==carrot5)
              {
                blackCarrots5.visible=true;
              }
              if(target==carrot6)
              {
                blackCarrots6.visible=true;
              }
              if(target==carrot7)
              {
                blackCarrots7.visible=true;
              }
              if(target==carrot8)
              {
                blackCarrots8.visible=true;
              }
              if(target==carrot9)
              {
                blackCarrots9.visible=true;
              }


              targetCoordinatesX = target.x;
              targetCoordinatesY = target.y;
        //click1 = this.add.audio('ClickSound');
        //click1.play();
      },


      onDragStop:function(target){

       commonNavBar.playsnapSound();

       if (this.checkOverlap(thinkingCloud, target)&&dragcount<Number(greenNumbers1.frame+1))
       {
         dragcount++;
            //snap1 = this.add.audio('snapSound');
            //snap1.play();
            //////console.log("drag start");
             //////console.log(randarr[randarr.length-1].x);
            //if(randarr[randarr.length-1].x>=230 && ){ 

              if(randarr.length<4)
              {

                    //////console.log(randarr[randarr.length-1].x);
                    target.x=randarr[randarr.length-1].x+50;
                    target.y=180;
                  }
                  else
                  {
                    if(randarr.length==4)

                      target.x=randarr[randarr.length-1].x-150;
                    else
                      target.x=randarr[randarr.length-1].x+50;  
                    
                    target.y=260;
                  }



                  randarr.push(target);

                  if(dragcount==Number(greenNumbers1.frame+1))
                  {

                        //this.CarrotBite.play(); 
                        commonNavBar.playCarrotBiteSound();
                        
                        this.destroyCarrots();
                        this.time.events.add(600, function(){

                            //_this.speakerbtn.inputEnabled=false;
                            
                            this.playQuestionSound = document.createElement('audio');
                            this.src = document.createElement('source');
                            if(window.languageSelected =="English")
                            {
                              this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/English/EHowMany.mp3");     
                            }
                            else if(window.languageSelected =="Hindi")
                            {

                             this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Hindi/HHowMany.mp3");
                           }
                           else if(window.languageSelected=="Kannada")
                           {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Kannada/KHowMany.mp3");

                          }
                          else if(window.languageSelected=="Odiya")
                           {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Odiya/OHowMany.mp3");
                          }
                          else if(window.languageSelected=="Gujarati")
                           {
                            this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/5.1/EHowMany.mp3");
                          }
						  else if(window.languageSelected=="Marathi")
                                     {
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Marathi/EHowMany.mp3");
                                    }
									else if(window.languageSelected=="Telugu")
                                     {
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Telugu/EHowMany.mp3");
                                    }
									else if(window.languageSelected=="Tamil")
                                     {
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Tamil/EHowMany.mp3");
                                    }
									else if(window.languageSelected=="Urdu")
                                     {
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/5.1/Urdu/EHowMany.mp3");
                                    }

                            //_this.soundUrl =  window.baseUrl+"questionSounds/unity/5.1/English/EHowMany.mp3";    
                            commonNavBar.getVoice(this.src.src);
                            //_this.soundurl =  window.baseUrl+"questionSounds/unity/5.1/English/EHowMany.mp3";
                            commonNavBar.addNavBar(this,this.src.src,"numberoperation1");
                           // commonNavBar.getVoice(commonNavBar.soundUrl);
                           /* this.playQuestionSound.appendChild(this.src);
                           this.playQuestionSound.play();*/






                         },this);
                        dragged=true;
                        this.slideleft();
                        
                        
                      }

                      target.inputEnabled = false;


                    }
                    else{
            //////console.log("wrong");
            
            if(target == carrot1)
            {
              target.x = 400;
              target.y = 160;
            }
            else if(target == carrot2)
            {
              target.x = 480;
              target.y = 160;
            }
            else if(target == carrot3)
            {
              target.x = 570;
              target.y = 160;
            }
            else if(target == carrot4)
            {
              target.x = 400;
              target.y = 280;
            }
            else  if(target == carrot5)
            {
              target.x = 480;
              target.y = 280;
            }
            if(target == carrot6)
            {
              target.x = 570;
              target.y = 280;
            }
            else if(target == carrot7)
            {
              target.x = 400;
              target.y = 400;
            }
            else if(target == carrot8)
            {
              target.x = 480;
              target.y = 400;
            }
            else if(target == carrot9)
            {
              target.x = 570;
              target.y = 400;
            }
            
          }

        },

        checkOverlap:function(spriteA, spriteB) 
        {

         var boundsA = spriteA.getBounds();
         var boundsB = spriteB.getBounds();

         return Phaser.Rectangle.intersects(boundsA, boundsB);
       },


       carrotVisible:function(){

        carrotGroup=this.add.group();
        
        blackCarrots1 = this.add.sprite(400,160,'grade61_carrot');
        blackCarrots1.anchor.setTo(0.5);
        blackCarrots1.scale.setTo(0.5,0.5);
        blackCarrots1.frame=0;
        blackCarrots1.visible=false;
        
        
        blackCarrots2 = this.add.sprite(480,160,'grade61_carrot');
        blackCarrots2.anchor.setTo(0.5);
        blackCarrots2.scale.setTo(0.5,0.5);
        blackCarrots2.frame=0;
        blackCarrots2.visible=false;
        
        blackCarrots3 = this.add.sprite(570,160,'grade61_carrot');
        blackCarrots3.anchor.setTo(0.5);
        blackCarrots3.scale.setTo(0.5,0.5);
        blackCarrots3.frame=0;
        blackCarrots3.visible=false;
        
        blackCarrots4 = this.add.sprite(400,280,'grade61_carrot');
        blackCarrots4.anchor.setTo(0.5);
        blackCarrots4.scale.setTo(0.5,0.5);
        blackCarrots4.frame=0;
        blackCarrots4.visible=false;
        
        blackCarrots5 = this.add.sprite(480,280,'grade61_carrot');
        blackCarrots5.anchor.setTo(0.5);
        blackCarrots5.scale.setTo(0.5,0.5);
        blackCarrots5.frame=0;
        blackCarrots5.visible=false;
        
        blackCarrots6 = this.add.sprite(570,280,'grade61_carrot');
        blackCarrots6.anchor.setTo(0.5);
        blackCarrots6.scale.setTo(0.5,0.5);
        blackCarrots6.frame=0;
        blackCarrots6.visible=false;
        
        blackCarrots7 = this.add.sprite(400,400,'grade61_carrot');
        blackCarrots7.anchor.setTo(0.5);
        blackCarrots7.scale.setTo(0.5,0.5);
        blackCarrots7.frame=0;
        blackCarrots7.visible=false;
        
        blackCarrots8 = this.add.sprite(480,400,'grade61_carrot');
        blackCarrots8.anchor.setTo(0.5);
        blackCarrots8.scale.setTo(0.5,0.5);
        blackCarrots8.frame=0;
        blackCarrots8.visible=false;
        
        blackCarrots9 = this.add.sprite(570,400,'grade61_carrot');
        blackCarrots9.anchor.setTo(0.5);
        blackCarrots9.scale.setTo(0.5,0.5);
        blackCarrots9.frame=0;
        blackCarrots9.visible=false;
        

        carrot1=this.add.sprite(400,160,'grade61_carrot');
        carrot1.anchor.setTo(0.5);
        carrot1.scale.setTo(0.5,0.5);
        carrot1.frame=1;
        carrot1.inputEnabled=true;
        carrot1.input.useHandCursor = true;
        carrot1.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        
        carrot2=this.add.sprite(480,160,'grade61_carrot');
        carrot2.anchor.setTo(0.5);
        carrot2.scale.setTo(0.5,0.5);
        carrot2.frame=1;
        carrot2.inputEnabled=true;
        carrot2.input.useHandCursor = true;
        carrot2.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot3=this.add.sprite(570,160,'grade61_carrot');
        carrot3.anchor.setTo(0.5);
        carrot3.scale.setTo(0.5,0.5);
        carrot3.frame=1;
        carrot3.inputEnabled=true;
        carrot3.input.useHandCursor = true;
        carrot3.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot4=this.add.sprite(400,280,'grade61_carrot');
        carrot4.anchor.setTo(0.5);
        carrot4.scale.setTo(0.5,0.5);
        carrot4.frame=1;
        carrot4.inputEnabled=true;
        carrot4.input.useHandCursor = true;
        carrot4.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot5=this.add.sprite(480,280,'grade61_carrot');
        carrot5.anchor.setTo(0.5);
        carrot5.scale.setTo(0.5,0.5);
        carrot5.frame=1;
        carrot5.inputEnabled=true;
        carrot5.input.useHandCursor = true;
        carrot5.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot6=this.add.sprite(570,280,'grade61_carrot');
        carrot6.anchor.setTo(0.5);
        carrot6.scale.setTo(0.5,0.5);
        carrot6.frame=1;
        carrot6.inputEnabled=true;
        carrot6.input.useHandCursor = true;
        carrot6.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot7=this.add.sprite(400,400,'grade61_carrot');
        carrot7.anchor.setTo(0.5);
        carrot7.scale.setTo(0.5,0.5);
        carrot7.frame=1;
        carrot7.inputEnabled=true;
        carrot7.input.useHandCursor = true;
        carrot7.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot8=this.add.sprite(480,400,'grade61_carrot');
        carrot8.anchor.setTo(0.5);
        carrot8.scale.setTo(0.5,0.5);
        carrot8.frame=1;
        carrot8.inputEnabled=true;
        carrot8.input.useHandCursor = true;
        carrot8.events.onInputDown.add(function(){
         this.addListeners();
       },this);
        
        carrot9=this.add.sprite(570,400,'grade61_carrot');
        carrot9.anchor.setTo(0.5);
        carrot9.scale.setTo(0.5,0.5);
        carrot9.frame=1;
        carrot9.inputEnabled=true;
        carrot9.input.useHandCursor = true;
        carrot9.events.onInputDown.add(function(){
         this.addListeners();
       },this);
           // }

           blackCarrots1.name = "blackCarrot";
           blackCarrots2.name = "blackCarrot";
           blackCarrots3.name = "blackCarrot";
           blackCarrots4.name = "blackCarrot";
           blackCarrots5.name = "blackCarrot";
           blackCarrots6.name = "blackCarrot";
           blackCarrots7.name = "blackCarrot";
           blackCarrots8.name = "blackCarrot";
           blackCarrots9.name = "blackCarrot";

           carrot1.name = "carrot";
           carrot2.name = "carrot";
           carrot3.name = "carrot";
           carrot4.name = "carrot";
           carrot5.name = "carrot";
           carrot6.name = "carrot";
           carrot7.name = "carrot";
           carrot8.name = "carrot";
           carrot9.name = "carrot";

           carrotGroup.add(blackCarrots1);
           carrotGroup.add(blackCarrots2);
           carrotGroup.add(blackCarrots3);
           carrotGroup.add(blackCarrots4);
           carrotGroup.add(blackCarrots5);
           carrotGroup.add(blackCarrots6);
           carrotGroup.add(blackCarrots7);
           carrotGroup.add(blackCarrots8);
           carrotGroup.add(blackCarrots9);
           carrotGroup.add(carrot1);
           carrotGroup.add(carrot2);
           carrotGroup.add(carrot3);
           carrotGroup.add(carrot4);
           carrotGroup.add(carrot5);
           carrotGroup.add(carrot6);
           carrotGroup.add(carrot7);
           carrotGroup.add(carrot8);
           carrotGroup.add(carrot9);
         },


	/*changeQuestion:function()
	{
		//flagGroup1.destroy();
        
		if(no11<6)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			 commonNavBar.soundVar=null,
             commonNavBar.questionArray=null,
             commonNavBar.questionCount=null,
             commonNavBar.soundUrl=null,
             commonNavBar.hint1=true,
             commonNavBar.hint2=true,
             commonNavBar.hint3=true,
            
            _this.state.start('level2');
		}
	},*/


  removeCelebration:function()
  {
		//////console.log("removeCeleb");
		celebration = false;

       // _this.noofAttempts = 0;
       // _this.AnsTimerCount = 0;


		//////console.log("no"+no11);
	   ////console.log("index="+framesChange);
        ////console.log(randomno);
        framesChange[0]=randomno;
        framesChange.splice(0,1);
        ////console.log("index="+framesChange);
        
        
        //console.log("--------------------------"+_this.no11);

        if(no11<3)
        {
          _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
          _this.count1++;
          _this.wrong = true;
          console.log("no"+no11);
          no11++;

          _this.time.events.add(1000, function()
          {
            _this.count =0;
            carrotGroup.destroy();
            destCarrots.destroy();
            allElements.destroy();
            destCarrots.destroy();
            carrotArray.length=0;
            shakeGroup.destroy();

			if(window.quizQuest == true)
				{
					var timerStopVar = commonNavBar.stopTimer();
					commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
					commonNavBar.questionArray=null,
					commonNavBar.questionCount=null,
					commonNavBar.soundUrl=null,
					commonNavBar.speakerbtn=null,
					
					quizCommonFile.changeQuestions(this.Stararr,commonNavBar.getScore());
				}
				else
				{
					this.getQuestion();
				}
          },this);  
        }


			/*if(_this.no11<4)
			{
                //////console.log("addq");
                 this.addQuestion(_this.count1);
               }*/

               else
               {
                 var timerStopVar = commonNavBar.stopTimer();
                 _this.stopVoice();
                 commonNavBar.stopTimer();
                 commonNavBar.stopVoice();
                 commonNavBar.navBar = null;
                 commonNavBar.backbtn = null;
                 commonNavBar.mcIcon = null;
                 commonNavBar.speakerbtn = null;

                 _this.state.start('addition_NOAG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
               }



		//}


		
	},

	correctAns:function()
	{
    telInitializer2.gameCorrectAns();
    //commonNavBar.disableHintIcon();
		//////console.log("correct11");

    tick.inputEnabled=false;

        /*if(_this.timer)
        {
          //_this.timer.stop();
            commonNavBar.stopTimer();
          _this.timer = null;
        }
        */
        
       // this.AnsTimerCount=minutes+':' + seconds;
        /*this.currentTime = window.timeSaveFunc();
        this.saveAsment = 
       { 
        id_game_play: this.savedVar,
        id_question: this.questionid,  
        pass: "yes",
        time2answer: this.AnsTimerCount,
        attempts: this.noofAttempts,
        date_time_submission: this.currentTime, 
        access_token: window.acctkn 
      }*/

  // absdsjsapi.saveAssessment(this.saveAsment);


      //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        //destCarrots.destroy();
        
        //opt1.inputEnabled=false;
        //opt2.inputEnabled=false;

        //anim =target.animations.add('flag1');
        //anim.play();
        celebration = true;
		//celebAnim = this.add.tileSprite(0,0,this.world.width,this.world.height,'celeb');

    commonNavBar.playClickSound();
    commonNavBar.playCelebrationSound();
    commonNavBar.disableHintIcon();

		//scoretext.setText(selctedLang.score+' : '+score);
		


		//celebAnim.smoothed=true;

		////////console.log(target);
        //target.tint = 0xA9A9A9;

        

       // var starAnim = starsGroup.getChildAt(count1);
       _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
       _this.starAnim.smoothed = false;
       _this.anim4 = _this.starAnim.animations.add('star');
       _this.anim4.play(25,false);
       this.Stararr.push(3);
       _this.sceneCount++;
       _this.time.events.add(2000,_this.removeCelebration,_this);

        //this.disableListeners();
		//target.events.onInputDown.removeAll();
		if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}						
	},


  wrongAns:function()
  {
        //////console.log("wrong");
        telInitializer2.gameWrongAns();

		//scoretext.setText(selctedLang.score+' : '+score);
        ////////console.log(target);
        //target.tint = 0xA9A9A9;
        this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        
        _this.wrong = false;
        this.noofAttempts++;
        
        shake.shake(10, shakeGroup);
        txtbox.frame=0;

        commonNavBar.playClickSound();
        commonNavBar.playWrongCelebrationSound();

        _this.time.events.add(500, _this.removeCelebration, _this);

		if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
      },

      destroyCarrots:function(){
        //destCarrots.destroy();
        carrotArray.length=0;
        for(var m=0;m<randarr.length;m++)
        {
          randarr[m].destroy();


        }
        randarr.length=0;
        
        
            // this.time.events.add(1000, function(){
              destCarrots=this.add.group();


              displayCarrots1 = this.add.sprite(80,180,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots1.name="grade51_carrotsAnim1";
              displayCarrots1.anchor.setTo(0.5);
              displayCarrots1.scale.setTo(0.5,0.5);
              displayCarrots1.smoothed = true;
              displayCarrots1.visible=false;

              displayCarrots2 = this.add.sprite(130,180,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots2.name="grade51_carrotsAnim2";
              displayCarrots2.anchor.setTo(0.5);
              displayCarrots2.scale.setTo(0.5,0.5);
              displayCarrots2.smoothed = true;
              displayCarrots2.visible=false;

              displayCarrots3 = this.add.sprite(180,180,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots3.name="grade51_carrotsAnim3";
              displayCarrots3.anchor.setTo(0.5);
              displayCarrots3.scale.setTo(0.5,0.5);
              displayCarrots3.smoothed = true;
              displayCarrots3.visible=false;

              displayCarrots4 = this.add.sprite(230,180,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots4.name="grade51_carrotsAnim4";
              displayCarrots4.anchor.setTo(0.5);
              displayCarrots4.scale.setTo(0.5,0.5);
              displayCarrots4.smoothed = true;
              displayCarrots4.visible=false;

              displayCarrots5 = this.add.sprite(80,260,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots5.name="grade51_carrotsAnim5";
              displayCarrots5.anchor.setTo(0.5);
              displayCarrots5.scale.setTo(0.5,0.5);
              displayCarrots5.smoothed = true;
              displayCarrots5.visible=false;

              displayCarrots6 = this.add.sprite(130,260,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots6.name="grade51_carrotsAnim6";
              displayCarrots6.anchor.setTo(0.5);
              displayCarrots6.scale.setTo(0.5,0.5);
              displayCarrots6.smoothed = true;
              displayCarrots6.visible=false;

              displayCarrots7 = this.add.sprite(180,260,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots7.name="grade51_carrotsAnim7";
              displayCarrots7.anchor.setTo(0.5);
              displayCarrots7.scale.setTo(0.5,0.5);
              displayCarrots7.smoothed = true;
              displayCarrots7.visible=false;

              displayCarrots8 = this.add.sprite(230,260,'grade61_carrotsAnim','Symbol 1 instance 10000');
              displayCarrots8.name="grade51_carrotsAnim8";
              displayCarrots8.anchor.setTo(0.5);
              displayCarrots8.scale.setTo(0.5,0.5);
              displayCarrots8.smoothed = true;
              displayCarrots8.visible=false;


              destCarrots.add(displayCarrots1);
              destCarrots.add(displayCarrots2);
              destCarrots.add(displayCarrots3);
              destCarrots.add(displayCarrots4);
              destCarrots.add(displayCarrots5);
              destCarrots.add(displayCarrots6);
              destCarrots.add(displayCarrots7);
              destCarrots.add(displayCarrots8);

        //},this);
        
           //2
           if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1))
           {
            correctflag=2;
            displayCarrots1.visible=true;
            var d11=displayCarrots1.animations.add('displayCarrots');
            d11.play(5,false);

            displayCarrots2.visible=true;
            var d12=displayCarrots2.animations.add('displayCarrots');
            d12.play(5,false);
          }

        //3
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=3;
          displayCarrots1.visible=true;
          var d21=displayCarrots1.animations.add('displayCarrots');
          d21.play(5,false);

          displayCarrots2.visible=true;
          var d22=displayCarrots2.animations.add('displayCarrots');
          d22.play(5,false);

          displayCarrots3.visible=true;
          var d23=displayCarrots3.animations.add('displayCarrots');
          d23.play(5,false);

        }
        //4
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3))
        {
          correctflag=4;
          displayCarrots1.visible=true;
          var d31=displayCarrots1.animations.add('displayCarrots');
          d31.play(5,false);

          displayCarrots2.visible=true;
          var d32=displayCarrots2.animations.add('displayCarrots');
          d32.play(5,false);

          displayCarrots3.visible=true;
          var d33=displayCarrots3.animations.add('displayCarrots');
          d33.play(5,false);

          displayCarrots4.visible=true;
          var d34=displayCarrots4.animations.add('displayCarrots');
          d34.play(5,false);

        }
        //5
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4))
        {
          correctflag=5;
          displayCarrots1.visible=true;
          var d41=displayCarrots1.animations.add('displayCarrots');
          d41.play(5,false);

          displayCarrots2.visible=true;
          var d42=displayCarrots2.animations.add('displayCarrots');
          d42.play(5,false);

          displayCarrots3.visible=true;
          var d43=displayCarrots3.animations.add('displayCarrots');
          d43.play(5,false);

          displayCarrots4.visible=true;
          var d44=displayCarrots4.animations.add('displayCarrots');
          d44.play(5,false);

          displayCarrots5.visible=true;
          var d45=displayCarrots5.animations.add('displayCarrots');
          d45.play(5,false);

        }
        //6
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5))
        {
          correctflag=6;
          displayCarrots1.visible=true;
          var d51=displayCarrots1.animations.add('displayCarrots');
          d51.play(5,false);

          displayCarrots2.visible=true;
          var d52=displayCarrots2.animations.add('displayCarrots');
          d52.play(5,false);

          displayCarrots3.visible=true;
          var d53=displayCarrots3.animations.add('displayCarrots');
          d53.play(5,false);

          displayCarrots4.visible=true;
          var d54=displayCarrots4.animations.add('displayCarrots');
          d54.play(5,false);

          displayCarrots5.visible=true;
          var d55=displayCarrots5.animations.add('displayCarrots');
          d55.play(5,false);

          displayCarrots6.visible=true;
          var d56=displayCarrots6.animations.add('displayCarrots');
          d56.play(5,false);

        }
        //7
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6))
        {
          correctflag=7;
          displayCarrots1.visible=true;
          var d61=displayCarrots1.animations.add('displayCarrots');
          d61.play(5,false);

          displayCarrots2.visible=true;
          var d62=displayCarrots2.animations.add('displayCarrots');
          d62.play(5,false);

          displayCarrots3.visible=true;
          var d63=displayCarrots3.animations.add('displayCarrots');
          d63.play(5,false);

          displayCarrots4.visible=true;
          var d64=displayCarrots4.animations.add('displayCarrots');
          d64.play(5,false);

          displayCarrots5.visible=true;
          var d65=displayCarrots5.animations.add('displayCarrots');
          d65.play(5,false);

          displayCarrots6.visible=true;
          var d66=displayCarrots6.animations.add('displayCarrots');
          d66.play(5,false);

          displayCarrots7.visible=true;
          var d67=displayCarrots7.animations.add('displayCarrots');
          d67.play(5,false);
        }
        //8
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7))
        {
          correctflag=8;
          displayCarrots1.visible=true;
          var d71=displayCarrots1.animations.add('displayCarrots');
          d71.play(5,false);

          displayCarrots2.visible=true;
          var d72=displayCarrots2.animations.add('displayCarrots');
          d72.play(5,false);

          displayCarrots3.visible=true;
          var d73=displayCarrots3.animations.add('displayCarrots');
          d73.play(5,false);

          displayCarrots4.visible=true;
          var d74=displayCarrots4.animations.add('displayCarrots');
          d74.play(5,false);

          displayCarrots5.visible=true;
          var d75=displayCarrots5.animations.add('displayCarrots');
          d75.play(5,false);

          displayCarrots6.visible=true;
          var d76=displayCarrots6.animations.add('displayCarrots');
          d76.play(5,false);

          displayCarrots7.visible=true;
          var d77=displayCarrots7.animations.add('displayCarrots');
          d77.play(5,false);

          displayCarrots8.visible=true;
          var d78=displayCarrots8.animations.add('displayCarrots');
          d78.play(5,false);
        }
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=9;
          displayCarrots1.visible=true;
          var d81=displayCarrots1.animations.add('displayCarrots');
          d81.play(5,false);

          displayCarrots2.visible=true;
          var d82=displayCarrots2.animations.add('displayCarrots');
          d82.play(5,false);

          displayCarrots3.visible=true;
          var d83=displayCarrots3.animations.add('displayCarrots');
          d83.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=10;
          displayCarrots1.visible=true;
          var d91=displayCarrots1.animations.add('displayCarrots');
          d91.play(5,false);

          displayCarrots2.visible=true;
          var d92=displayCarrots2.animations.add('displayCarrots');
          d92.play(5,false);

          displayCarrots3.visible=true;
          var d93=displayCarrots3.animations.add('displayCarrots');
          d93.play(5,false);

          displayCarrots4.visible=true;
          var d94=displayCarrots4.animations.add('displayCarrots');
          d94.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3))
        {
          correctflag=11;
          displayCarrots1.visible=true;
          var d101=displayCarrots1.animations.add('displayCarrots');
          d101.play(5,false);

          displayCarrots2.visible=true;
          var d102=displayCarrots2.animations.add('displayCarrots');
          d102.play(5,false);

          displayCarrots3.visible=true;
          var d103=displayCarrots3.animations.add('displayCarrots');
          d103.play(5,false);

          displayCarrots4.visible=true;
          var d104=displayCarrots4.animations.add('displayCarrots');
          d104.play(5,false);

          displayCarrots5.visible=true;
          var d105=displayCarrots5.animations.add('displayCarrots');
          d105.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4))
        {
          correctflag=12;
          displayCarrots1.visible=true;
          var d111=displayCarrots1.animations.add('displayCarrots');
          d111.play(5,false);

          displayCarrots2.visible=true;
          var d112=displayCarrots2.animations.add('displayCarrots');
          d112.play(5,false);

          displayCarrots3.visible=true;
          var d113=displayCarrots3.animations.add('displayCarrots');
          d113.play(5,false);

          displayCarrots4.visible=true;
          var d114=displayCarrots4.animations.add('displayCarrots');
          d114.play(5,false);

          displayCarrots5.visible=true;
          var d115=displayCarrots5.animations.add('displayCarrots');
          d115.play(5,false);

          displayCarrots6.visible=true;
          var d116=displayCarrots6.animations.add('displayCarrots');
          d116.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5))
        {
          correctflag=13;
          displayCarrots1.visible=true;
          var d121=displayCarrots1.animations.add('displayCarrots');
          d121.play(5,false);

          displayCarrots2.visible=true;
          var d122=displayCarrots2.animations.add('displayCarrots');
          d122.play(5,false);

          displayCarrots3.visible=true;
          var d123=displayCarrots3.animations.add('displayCarrots');
          d123.play(5,false);

          displayCarrots4.visible=true;
          var d124=displayCarrots4.animations.add('displayCarrots');
          d124.play(5,false);

          displayCarrots5.visible=true;
          var d125=displayCarrots5.animations.add('displayCarrots');
          d125.play(5,false);

          displayCarrots6.visible=true;
          var d126=displayCarrots6.animations.add('displayCarrots');
          d126.play(5,false);

          displayCarrots7.visible=true;
          var d127=displayCarrots7.animations.add('displayCarrots');
          d127.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6))
        {
          correctflag=14;
          displayCarrots1.visible=true;
          var d131=displayCarrots1.animations.add('displayCarrots');
          d131.play(5,false);

          displayCarrots2.visible=true;
          var d132=displayCarrots2.animations.add('displayCarrots');
          d132.play(5,false);

          displayCarrots3.visible=true;
          var d133=displayCarrots3.animations.add('displayCarrots');
          d133.play(5,false);

          displayCarrots4.visible=true;
          var d134=displayCarrots4.animations.add('displayCarrots');
          d134.play(5,false);

          displayCarrots5.visible=true;
          var d135=displayCarrots5.animations.add('displayCarrots');
          d135.play(5,false);

          displayCarrots6.visible=true;
          var d136=displayCarrots6.animations.add('displayCarrots');
          d136.play(5,false);

          displayCarrots7.visible=true;
          var d137=displayCarrots7.animations.add('displayCarrots');
          d137.play(5,false);

          displayCarrots8.visible=true;
          var d138=displayCarrots8.animations.add('displayCarrots');
          d138.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=15;
          displayCarrots1.visible=true;
          var d141=displayCarrots1.animations.add('displayCarrots');
          d141.play(5,false);

          displayCarrots2.visible=true;
          var d142=displayCarrots2.animations.add('displayCarrots');
          d142.play(5,false);

          displayCarrots3.visible=true;
          var d143=displayCarrots3.animations.add('displayCarrots');
          d143.play(5,false);

          displayCarrots4.visible=true;
          var d144=displayCarrots4.animations.add('displayCarrots');
          d144.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=16;
          displayCarrots1.visible=true;
          var d151=displayCarrots1.animations.add('displayCarrots');
          d151.play(5,false);

          displayCarrots2.visible=true;
          var d152=displayCarrots2.animations.add('displayCarrots');
          d152.play(5,false);

          displayCarrots3.visible=true;
          var d153=displayCarrots3.animations.add('displayCarrots');
          d153.play(5,false);

          displayCarrots4.visible=true;
          var d154=displayCarrots4.animations.add('displayCarrots');
          d154.play(5,false);

          displayCarrots5.visible=true;
          var d155=displayCarrots5.animations.add('displayCarrots');
          d155.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3))
        {
          correctflag=17;
          displayCarrots1.visible=true;
          var d161=displayCarrots1.animations.add('displayCarrots');
          d161.play(5,false);

          displayCarrots2.visible=true;
          var d162=displayCarrots2.animations.add('displayCarrots');
          d162.play(5,false);

          displayCarrots3.visible=true;
          var d163=displayCarrots3.animations.add('displayCarrots');
          d163.play(5,false);

          displayCarrots4.visible=true;
          var d164=displayCarrots4.animations.add('displayCarrots');
          d164.play(5,false);

          displayCarrots5.visible=true;
          var d165=displayCarrots5.animations.add('displayCarrots');
          d165.play(5,false);

          displayCarrots6.visible=true;
          var d166=displayCarrots6.animations.add('displayCarrots');
          d166.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4))
        {
          correctflag=18;
          displayCarrots1.visible=true;
          var d171=displayCarrots1.animations.add('displayCarrots');
          d171.play(5,false);

          displayCarrots2.visible=true;
          var d172=displayCarrots2.animations.add('displayCarrots');
          d172.play(5,false);

          displayCarrots3.visible=true;
          var d173=displayCarrots3.animations.add('displayCarrots');
          d173.play(5,false);

          displayCarrots4.visible=true;
          var d174=displayCarrots4.animations.add('displayCarrots');
          d174.play(5,false);

          displayCarrots5.visible=true;
          var d175=displayCarrots5.animations.add('displayCarrots');
          d175.play(5,false);

          displayCarrots6.visible=true;
          var d176=displayCarrots6.animations.add('displayCarrots');
          d176.play(5,false);

          displayCarrots7.visible=true;
          var d177=displayCarrots7.animations.add('displayCarrots');
          d177.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5))
        {
          correctflag=19;
          displayCarrots1.visible=true;
          var d181=displayCarrots1.animations.add('displayCarrots');
          d181.play(5,false);

          displayCarrots2.visible=true;
          var d182=displayCarrots2.animations.add('displayCarrots');
          d182.play(5,false);

          displayCarrots3.visible=true;
          var d183=displayCarrots3.animations.add('displayCarrots');
          d183.play(5,false);

          displayCarrots4.visible=true;
          var d184=displayCarrots4.animations.add('displayCarrots');
          d184.play(5,false);

          displayCarrots5.visible=true;
          var d185=displayCarrots5.animations.add('displayCarrots');
          d185.play(5,false);

          displayCarrots6.visible=true;
          var d186=displayCarrots6.animations.add('displayCarrots');
          d186.play(5,false);

          displayCarrots7.visible=true;
          var d187=displayCarrots7.animations.add('displayCarrots');
          d187.play(5,false);

          displayCarrots8.visible=true;
          var d188=displayCarrots8.animations.add('displayCarrots');
          d188.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=20;
          displayCarrots1.visible=true;
          var d191=displayCarrots1.animations.add('displayCarrots');
          d191.play(5,false);

          displayCarrots2.visible=true;
          var d192=displayCarrots2.animations.add('displayCarrots');
          d192.play(5,false);

          displayCarrots3.visible=true;
          var d193=displayCarrots3.animations.add('displayCarrots');
          d193.play(5,false);

          displayCarrots4.visible=true;
          var d194=displayCarrots4.animations.add('displayCarrots');
          d194.play(5,false);

          displayCarrots5.visible=true;
          var d195=displayCarrots5.animations.add('displayCarrots');
          d195.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=21;
          displayCarrots1.visible=true;
          var d201=displayCarrots1.animations.add('displayCarrots');
          d201.play(5,false);

          displayCarrots2.visible=true;
          var d202=displayCarrots2.animations.add('displayCarrots');
          d202.play(5,false);

          displayCarrots3.visible=true;
          var d203=displayCarrots3.animations.add('displayCarrots');
          d203.play(5,false);

          displayCarrots4.visible=true;
          var d204=displayCarrots4.animations.add('displayCarrots');
          d204.play(5,false);

          displayCarrots5.visible=true;
          var d205=displayCarrots5.animations.add('displayCarrots');
          d205.play(5,false);

          displayCarrots6.visible=true;
          var d206=displayCarrots6.animations.add('displayCarrots');
          d206.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3))
        {
          correctflag=22;
          displayCarrots1.visible=true;
          var d211=displayCarrots1.animations.add('displayCarrots');
          d211.play(5,false);

          displayCarrots2.visible=true;
          var d212=displayCarrots2.animations.add('displayCarrots');
          d212.play(5,false);

          displayCarrots3.visible=true;
          var d213=displayCarrots3.animations.add('displayCarrots');
          d213.play(5,false);

          displayCarrots4.visible=true;
          var d214=displayCarrots4.animations.add('displayCarrots');
          d214.play(5,false);

          displayCarrots5.visible=true;
          var d215=displayCarrots5.animations.add('displayCarrots');
          d215.play(5,false);

          displayCarrots6.visible=true;
          var d216=displayCarrots6.animations.add('displayCarrots');
          d216.play(5,false);

          displayCarrots7.visible=true;
          var d217=displayCarrots7.animations.add('displayCarrots');
          d217.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4))
        {
          correctflag=23;
          displayCarrots1.visible=true;
          var d221=displayCarrots1.animations.add('displayCarrots');
          d221.play(5,false);

          displayCarrots2.visible=true;
          var d222=displayCarrots2.animations.add('displayCarrots');
          d222.play(5,false);

          displayCarrots3.visible=true;
          var d223=displayCarrots3.animations.add('displayCarrots');
          d223.play(5,false);

          displayCarrots4.visible=true;
          var d224=displayCarrots4.animations.add('displayCarrots');
          d224.play(5,false);

          displayCarrots5.visible=true;
          var d225=displayCarrots5.animations.add('displayCarrots');
          d225.play(5,false);

          displayCarrots6.visible=true;
          var d226=displayCarrots6.animations.add('displayCarrots');
          d226.play(5,false);

          displayCarrots7.visible=true;
          var d227=displayCarrots7.animations.add('displayCarrots');
          d227.play(5,false);

          displayCarrots8.visible=true;
          var d228=displayCarrots8.animations.add('displayCarrots');
          d228.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=24;
          displayCarrots1.visible=true;
          var d231=displayCarrots1.animations.add('displayCarrots');
          d231.play(5,false);

          displayCarrots2.visible=true;
          var d232=displayCarrots2.animations.add('displayCarrots');
          d232.play(5,false);

          displayCarrots3.visible=true;
          var d233=displayCarrots3.animations.add('displayCarrots');
          d233.play(5,false);

          displayCarrots4.visible=true;
          var d234=displayCarrots4.animations.add('displayCarrots');
          d234.play(5,false);

          displayCarrots5.visible=true;
          var d235=displayCarrots5.animations.add('displayCarrots');
          d235.play(5,false);

          displayCarrots6.visible=true;
          var d236=displayCarrots6.animations.add('displayCarrots');
          d236.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=25;
          displayCarrots1.visible=true;
          var d241=displayCarrots1.animations.add('displayCarrots');
          d241.play(5,false);

          displayCarrots2.visible=true;
          var d242=displayCarrots2.animations.add('displayCarrots');
          d242.play(5,false);

          displayCarrots3.visible=true;
          var d243=displayCarrots3.animations.add('displayCarrots');
          d243.play(5,false);

          displayCarrots4.visible=true;
          var d244=displayCarrots4.animations.add('displayCarrots');
          d244.play(5,false);

          displayCarrots5.visible=true;
          var d245=displayCarrots5.animations.add('displayCarrots');
          d245.play(5,false);

          displayCarrots6.visible=true;
          var d246=displayCarrots6.animations.add('displayCarrots');
          d246.play(5,false);

          displayCarrots7.visible=true;
          var d247=displayCarrots7.animations.add('displayCarrots');
          d247.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3))
        {
          correctflag=26;
          displayCarrots1.visible=true;
          var d251=displayCarrots1.animations.add('displayCarrots');
          d251.play(5,false);

          displayCarrots2.visible=true;
          var d252=displayCarrots2.animations.add('displayCarrots');
          d252.play(5,false);

          displayCarrots3.visible=true;
          var d253=displayCarrots3.animations.add('displayCarrots');
          d253.play(5,false);

          displayCarrots4.visible=true;
          var d254=displayCarrots4.animations.add('displayCarrots');
          d254.play(5,false);

          displayCarrots5.visible=true;
          var d255=displayCarrots5.animations.add('displayCarrots');
          d255.play(5,false);

          displayCarrots6.visible=true;
          var d256=displayCarrots6.animations.add('displayCarrots');
          d256.play(5,false);

          displayCarrots7.visible=true;
          var d257=displayCarrots7.animations.add('displayCarrots');
          d257.play(5,false);

          displayCarrots8.visible=true;
          var d258=displayCarrots8.animations.add('displayCarrots');
          d258.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=27;
          displayCarrots1.visible=true;
          var d261=displayCarrots1.animations.add('displayCarrots');
          d261.play(5,false);

          displayCarrots2.visible=true;
          var d262=displayCarrots2.animations.add('displayCarrots');
          d262.play(5,false);

          displayCarrots3.visible=true;
          var d263=displayCarrots3.animations.add('displayCarrots');
          d263.play(5,false);

          displayCarrots4.visible=true;
          var d264=displayCarrots4.animations.add('displayCarrots');
          d264.play(5,false);

          displayCarrots5.visible=true;
          var d265=displayCarrots5.animations.add('displayCarrots');
          d265.play(5,false);

          displayCarrots6.visible=true;
          var d266=displayCarrots6.animations.add('displayCarrots');
          d266.play(5,false);

          displayCarrots7.visible=true;
          var d267=displayCarrots7.animations.add('displayCarrots');
          d267.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2))
        {
          correctflag=28;
          displayCarrots1.visible=true;
          var d271=displayCarrots1.animations.add('displayCarrots');
          d271.play(5,false);

          displayCarrots2.visible=true;
          var d272=displayCarrots2.animations.add('displayCarrots');
          d272.play(5,false);

          displayCarrots3.visible=true;
          var d273=displayCarrots3.animations.add('displayCarrots');
          d273.play(5,false);

          displayCarrots4.visible=true;
          var d274=displayCarrots4.animations.add('displayCarrots');
          d274.play(5,false);

          displayCarrots5.visible=true;
          var d275=displayCarrots5.animations.add('displayCarrots');
          d275.play(5,false);

          displayCarrots6.visible=true;
          var d276=displayCarrots6.animations.add('displayCarrots');
          d276.play(5,false);

          displayCarrots7.visible=true;
          var d277=displayCarrots7.animations.add('displayCarrots');
          d277.play(5,false);

          displayCarrots8.visible=true;
          var d278=displayCarrots8.animations.add('displayCarrots');
          d278.play(5,false);
        }
        if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1))
        {
          correctflag=29;
          displayCarrots1.visible=true;
          var d281=displayCarrots1.animations.add('displayCarrots');
          d281.play(5,false);

          displayCarrots2.visible=true;
          var d282=displayCarrots2.animations.add('displayCarrots');
          d282.play(5,false);

          displayCarrots3.visible=true;
          var d283=displayCarrots3.animations.add('displayCarrots');
          d283.play(5,false);

          displayCarrots4.visible=true;
          var d284=displayCarrots4.animations.add('displayCarrots');
          d284.play(5,false);

          displayCarrots5.visible=true;
          var d285=displayCarrots5.animations.add('displayCarrots');
          d285.play(5,false);

          displayCarrots6.visible=true;
          var d286=displayCarrots6.animations.add('displayCarrots');
          d286.play(5,false);

          displayCarrots7.visible=true;
          var d287=displayCarrots7.animations.add('displayCarrots');
          d287.play(5,false);

          displayCarrots8.visible=true;
          var d288=displayCarrots8.animations.add('displayCarrots');
          d288.play(5,false);
        }
        
        
        
      },

      darkCarrtsVisible:function(){
        /*
        if((Number(greenNumbers1.frame+1)==1))
            {
                carrot1.destroy();
                blackCarrots1.visible=true;
                //this.addListeners();
            }
        
        if((Number(greenNumbers1.frame+1)==2))
            {
                carrot1.destroy();
                carrot2.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                
            }
        if((Number(greenNumbers1.frame+1)==3))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                
            }
        if((Number(greenNumbers1.frame+1)==4))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                carrot4.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                blackCarrots4.visible=true;
                
            }
         if((Number(greenNumbers1.frame+1)==5))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                carrot4.destroy();
                carrot5.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                blackCarrots4.visible=true;
                blackCarrots5.visible=true;
                
            }
        if((Number(greenNumbers1.frame+1)==6))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                carrot4.destroy();
                carrot5.destroy();
                carrot6.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                blackCarrots4.visible=true;
                blackCarrots5.visible=true;
                blackCarrots6.visible=true;
                
            }
        if((Number(greenNumbers1.frame+1)==7))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                carrot4.destroy();
                carrot5.destroy();
                carrot6.destroy();
                carrot7.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                blackCarrots4.visible=true;
                blackCarrots5.visible=true;
                blackCarrots6.visible=true;
                blackCarrots7.visible=true;
                
            }
        if((Number(greenNumbers1.frame+1)==8))
            {
                carrot1.destroy();
                carrot2.destroy();
                carrot3.destroy();
                carrot4.destroy();
                carrot5.destroy();
                carrot6.destroy();
                carrot7.destroy();
                carrot8.destroy();
                blackCarrots1.visible=true;
                blackCarrots2.visible=true;
                blackCarrots3.visible=true;
                blackCarrots4.visible=true;
                blackCarrots5.visible=true;
                blackCarrots6.visible=true;
                blackCarrots7.visible=true;
                blackCarrots8.visible=true;
                
              }*/
        /*var temp = 0;
        for(var i=0;i<carrotGroup.length;i++)
            {
                //////console.log("for");
               if(carrotGroup.getChildAt(i).visible == true && carrotGroup.getChildAt(i).name == "blackCarrot")
                   {
                       //////console.log("increment");
                       temp++;
                   }
            }
        
        for(var i=0;i<Number(greenNumbers1.frame+1)-temp;i++)
        {
            for(var j=0;j<carrotGroup.length;j++)
            {
                if(carrotGroup.getChildAt(i).name == "blackCarrot")
                {
                    carrotGroup.getChildAt(i).visible = false;  
                    break;
                }
            }
        }
        
        for(var i=0;i<Number(greenNumbers1.frame+1)-temp;i++)
        {
            //////console.log("hai");
            for(var j=0;j<carrotGroup.length;j++)
            {
                //////console.log("hai2"+carrotGroup.getChildAt(i).name);
                if(carrotGroup.getChildAt(i).name == "carrot")
                {
                     //////console.log("hai3");
                    carrotGroup.getChildAt(i).visible = false;  
                    break;
                }
            }
          }*/
          var temp = 0;
          for(var i=0;i<carrotGroup.length;i++)
          {
                //////console.log("for");
                if(carrotGroup.getChildAt(i).visible == true && carrotGroup.getChildAt(i).name == "blackCarrot")
                {
                       //////console.log("increment");
                       temp++;
                     }
                   }

        //////console.log("temp"+temp);
        if(temp!=0)
        {
            /*//////console.log('itshere');
            for(var i=0;i<temp;i++)
            {
                 //////console.log('itshere');
                if(carrotGroup.getChildAt(i).name == 'carrot')
                {
                    carrotGroup.getChildAt(i).visible = false;   
                }
                //carrotGroup.getChildAt(i+9).visible = false;    
              }*/
            }
            else
            {
            //////console.log("cheeeeeeeedsd");
            for(var i=0;i<Number(greenNumbers1.frame+1);i++)
            {
              carrotGroup.getChildAt(i).visible = true;    
              carrotGroup.getChildAt(i+9).visible = false;    
            } 
          }
        },

        shuffleNumbers:function(){


          framesChange = this.shuffle(framesChange);
          randomno = framesChange[0];

          greenNumbers = this.add.sprite(705,95,'grade61_greenNumbers');
          greenNumbers.name="grade51_greenNumbers";
          greenNumbers.scale.setTo(0.7,0.7);
          greenNumbers.frame=framesChange[0];

       //framesChange1 = ["GameFirst","GameSecond","GameThird","GameFourth","GameFifth","GameSixth","GameSeventh"];

       framesChange1 = this.shuffle(framesChange1);

       greenNumbers1 = this.add.sprite(765,95,'grade61_greenNumbers1');
       greenNumbers1.name="grade51_greenNumbers1";
       greenNumbers1.scale.setTo(0.7,0.7);
       greenNumbers1.frame=framesChange1[0];
       imp=greenNumbers1.frame;
        //this.getVoice();

      },

      addNumberPad:function(){
      // //////console.log("first norrrrrr=="+randomno);

        //this.time.events.add(5000, function(){

         pressed=0;
         dragged=false;

         this.shuffleNumbers();


         shakeGroup=this.add.group();
         var boxbg = this.add.sprite(800,280,'grade61_boxbg');
         boxbg.name="grade51_boxbg";
         boxbg.anchor.setTo(0.5);
         boxbg.scale.setTo(0.6,0.6);


         var WhiteBox=this.add.sprite(800,120,'grade61_WhiteBox');
         WhiteBox.name="grade51_WhiteBox";
         WhiteBox.anchor.setTo(0.5);
         WhiteBox.scale.setTo(0.55,0.55);
        //WhiteBox.addChild(greenNumbers);
        //WhiteBox.addChild(greenNumbers1);

        
        

        //framesChange = [1,2,3,4,5,6,7,8];
        //greenNumbers = this.add.sprite(705,95,'greenNumbers');
    	//greenNumbers.scale.setTo(0.7,0.7);
        greenNumbers.frame=(randomno-1);//framesChange[0];

        
//         framesChange1 = ["GameFirst","GameSecond","GameThird","GameFourth","GameFifth","GameSixth","GameSeventh"];
//        framesChange1 = this.shuffle(framesChange1);


        //////console.log("first no b4=="+randomno);
       //////console.log("second no b4=="+framesChange1[0]);
//        greenNumbers1 = this.add.sprite(765,95,'greenNumbers1');
//    	greenNumbers1.scale.setTo(0.7,0.7);
//      


var sum=randomno+framesChange1[0];
        //////console.log("summmm no=="+sum);
        if(sum <=8) {
          greenNumbers1.frame=(framesChange1[0]-1);
            //////console.log("first no=="+greenNumbers.frame);
            //////console.log("second no=="+greenNumbers1.frame);
          }
          else
          {

            if(greenNumbers.frame<5)
            {
                    //////console.log("greenNumbers.frame="+greenNumbers.frame);
                    framesChange11 = [1,2];
                    framesChange11=this.shuffle(framesChange11);
                    greenNumbers1.frame=framesChange11[0];
                  }
                  else
                  {
                   greenNumbers1.frame=0;
                 }

               }



               plusSign=this.add.sprite(740,95,'grade61_plusSign');
               plusSign.name="grade51_plusSign";
               plusSign.scale.setTo(0.7,0.7);

               var equalSymbol=this.add.sprite(810,95,'grade61_equalSymbol');
               equalSymbol.name="grade51_equalSymbol";
               equalSymbol.scale.setTo(0.7,0.7);
       //////console.log("greennum1=="+Number(greenNumbers1.frame+1));
       //this.getVoice();
       console.log("WHAT!!!!!!!!!!!!!!!!!!!!");
       if(Number(greenNumbers1.frame+1)==1){
        this.questionid = 1;

               //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFirst.mp3",null);
               if(window.languageSelected=="English")
                 _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameFirst.mp3";
               else if(window.languageSelected=="Hindi")
                 _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFirst.mp3";
               else if(window.languageSelected=="Kannada")
                 _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFirst.mp3";
               else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFirst.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFirst.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFirst.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFirst.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFirst.mp3";
               else
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_a.mp3";

            }

            else if(Number(greenNumbers1.frame+1)==2){
              this.questionid = 2;


              // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSecond.mp3");
              if(window.languageSelected=="English")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameSecond.mp3";
              else if(window.languageSelected=="Hindi")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSecond.mp3";
             else if(window.languageSelected=="Kannada")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSecond.mp3";
             else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSecond.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSecond.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSecond.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSecond.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSecond.mp3";
             else
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_b.mp3";



           }
           else if(Number(greenNumbers1.frame+1)==3){
            this.questionid = 3;

                //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameThird.mp3",null);
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameFirst.mp3";
                if(window.languageSelected=="English")
                 _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameThird.mp3";
               else if(window.languageSelected=="Hindi")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameThird.mp3";
              else if(window.languageSelected=="Kannada")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameThird.mp3";
              else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameThird.mp3";
			  else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameThird.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameThird.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameThird.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameThird.mp3";
              else
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_c.mp3";          

            }
            else if(Number(greenNumbers1.frame+1)==4){
              this.questionid = 4;
              
             // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFourth.mp3");
             if(window.languageSelected=="English")
              _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameFourth.mp3";
            else if(window.languageSelected=="Hindi")
             _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFourth.mp3";

           else if(window.languageSelected=="Kannada")
             _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFourth.mp3";
           else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFourth.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFourth.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFourth.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFourth.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFourth.mp3";
           else
             _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_d.mp3";


         }
         else if(Number(greenNumbers1.frame+1)==5){
          this.questionid = 5;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFifth.mp3");
              if(window.languageSelected=="English")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameFifth.mp3";   
             else if(window.languageSelected=="Hindi")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFifth.mp3";   
             else if(window.languageSelected=="Kannada")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFifth.mp3";
             else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFifth.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EgameFirfth.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EgameFirfth.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EgameFirfth.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EgameFirfth.mp3";
             else
              _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_e.mp3";                  
          }
          else if(Number(greenNumbers1.frame+1)==6){
            this.questionid = 6;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSixth.mp3");
              if(window.languageSelected=="English")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameSixth.mp3";
              else if(window.languageSelected=="Hindi")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSixth.mp3";
             else if(window.languageSelected=="Kannada")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSixth.mp3";
             else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSixth.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSixth.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSixth.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSixth.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSixth.mp3";
             else
              _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_f.mp3";



          }
          else if(Number(greenNumbers1.frame+1)==7){
            this.questionid = 7;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSeventh.mp3");
              if(window.languageSelected=="English")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/English/EGameSeventh.mp3";
              else if(window.languageSelected=="Hindi")
                _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSeventh.mp3";
              else if(window.languageSelected=="Kannada")
               _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSeventh.mp3";
             else if(window.languageSelected=="Gujarati")
                 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSeventh.mp3";
			 else if(window.languageSelected=="Marathi")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSeventh.mp3";
				else if(window.languageSelected=="Telugu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSeventh.mp3";
				else if(window.languageSelected=="Tamil")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSeventh.mp3";
				else if(window.languageSelected=="Urdu")
                    _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSeventh.mp3";
             else
              _this.soundurl = window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_g.mp3";

          }

          commonNavBar.addNavBar(this,_this.soundurl,"numberoperation1");

          if(Number(greenNumbers1.frame+1)==1){
            this.questionid = 1;

               //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFirst.mp3",null);
               if(window.languageSelected=="English")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameFirst.mp3");
               else if(window.languageSelected=="Hindi")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFirst.mp3");
               else if(window.languageSelected=="Kannada")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFirst.mp3");
               else if(window.languageSelected=="Gujarati")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFirst.mp3");
			 else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFirst.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFirst.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFirst.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFirst.mp3");
               else
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_a.mp3");

             }

             else if(Number(greenNumbers1.frame+1)==2){
              this.questionid = 2;

              // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSecond.mp3");
              if(window.languageSelected=="English")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameSecond.mp3");
             else if(window.languageSelected=="Hindi")
              commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSecond.mp3");
            else if(window.languageSelected=="Kannada")
             commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSecond.mp3");
           else if(window.languageSelected=="Gujarati")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSecond.mp3");
			  else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSecond.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSecond.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSecond.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSecond.mp3");
           else
             commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_b.mp3");



         }
         else if(Number(greenNumbers1.frame+1)==3){
          this.questionid = 3;

                //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameThird.mp3",null);
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameFirst.mp3");
                if(window.languageSelected=="English")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameThird.mp3");
               else if(window.languageSelected=="Hindi")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameThird.mp3");
              else if(window.languageSelected=="Kannada")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameThird.mp3");
              else if(window.languageSelected=="Gujarati")
                 commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameThird.mp3");
			 else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameThird.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameThird.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameThird.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameThird.mp3");
              else
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_c.mp3");          

            }
            else if(Number(greenNumbers1.frame+1)==4){
              this.questionid = 4;
              
             // commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFourth.mp3");
             if(window.languageSelected=="English")
              commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameFourth.mp3");
            else if(window.languageSelected=="Hindi")
             commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFourth.mp3");

           else if(window.languageSelected=="Kannada")
             commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFourth.mp3");
           else if(window.languageSelected=="Gujarati")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFourth.mp3");
			else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameFourth.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameFourth.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameFourth.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameFourth.mp3");
           else
             commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_d.mp3");


         }
         else if(Number(greenNumbers1.frame+1)==5){
          this.questionid = 5;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameFifth.mp3");
              if(window.languageSelected=="English")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameFifth.mp3");   
             else if(window.languageSelected=="Hindi")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameFifth.mp3");   
             else if(window.languageSelected=="Kannada")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameFifth.mp3");
             else if(window.languageSelected=="Gujarati")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameFifth.mp3");
			else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EgameFirfth.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EgameFirfth.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EgameFirfth.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EgameFirfth.mp3");
             else
              commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_e.mp3");                  
          }
          else if(Number(greenNumbers1.frame+1)==6){
            this.questionid = 6;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSixth.mp3");
              if(window.languageSelected=="English")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameSixth.mp3");
              else if(window.languageSelected=="Hindi")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSixth.mp3");
             else if(window.languageSelected=="Kannada")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSixth.mp3");
             else if(window.languageSelected=="Gujarati")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/5.1/EGameSixth.mp3");
		   else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSixth.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSixth.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSixth.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSixth.mp3");
             else
              commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_f.mp3");



          }
          else if(Number(greenNumbers1.frame+1)==7){
            this.questionid = 7;
              //commonNavBar.getVoice("questionSounds/unity/5.1/English/EGameSeventh.mp3");
              if(window.languageSelected=="English")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/English/EGameSeventh.mp3");
              else if(window.languageSelected=="Hindi")
                commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Hindi/HGameSeventh.mp3");
              else if(window.languageSelected=="Kannada")
               commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Kannada/KGameSeventh.mp3");
             else if(window.languageSelected=="Gujarati")
                 commonNavBar.getVoice("questionSounds/Gujarati/unity/5.1/EGameSeventh.mp3");
			  else if(window.languageSelected=="Marathi")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Marathi/EGameSeventh.mp3");
				else if(window.languageSelected=="Telugu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Telugu/EGameSeventh.mp3");
				else if(window.languageSelected=="Tamil")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Tamil/EGameSeventh.mp3");
				else if(window.languageSelected=="Urdu")
                    commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Urdu/EGameSeventh.mp3");
             else
              commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/5.1/Odiya/5.1_g.mp3");

          }

          //alert("here");


       /* if(no11==0)   
        {               
            _this.time.events.add(5500, function(){
                this.getVoice();
                commonNavBar.getVoice(commonNavBar.soundUrl);
            },_this);
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
          }*/



          txtbox=this.add.sprite(870,118,'grade61_txtbox');
          txtbox.name="grade51_txtbox";
          txtbox.anchor.setTo(0.5);
          txtbox.scale.setTo(0.55,0.55);


          var calNum1=this.add.sprite(720,200,'grade61_calNum');
          calNum1.name="grade51_calNum1";
          calNum1.anchor.setTo(0.5);
          calNum1.scale.setTo(0.66,0.66);
          calNum1.frame=1;
          calNum1.inputEnabled=true;
          calNum1.input.useHandCursor = true;
            //destCarrots.destroy();
        //this.destroyCarrots();
        calNum1.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
               // this.Tap.play();


               txtbox.frame=2;
               pressed++;
               if(pressed==1 && dragged==false)
               {
                 this.destroyCarrots();
               }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
                
              },this);

        var calNum2=this.add.sprite(790,200,'grade61_calNum');
        calNum2.name="grade51_calNum2";
        calNum2.anchor.setTo(0.5);
        calNum2.scale.setTo(0.66,0.66);
        calNum2.frame=2;
        calNum2.inputEnabled=true;
        calNum2.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum2.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
                //this.Tap.play();
                
                txtbox.frame=3;
                pressed++;
                if(pressed==1&&dragged==false)
                {
                  this.destroyCarrots();
                }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);

        var calNum3=this.add.sprite(860,200,'grade61_calNum');
        calNum3.name="grade51_calNum3";
        calNum3.anchor.setTo(0.5);
        calNum3.scale.setTo(0.66,0.66);
        calNum3.frame=3;
        calNum3.inputEnabled=true;
        calNum3.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum3.events.onInputDown.add(function(){
         commonNavBar.playTapSound();
               // this.Tap.play();
               
               txtbox.frame=4;
               pressed++;
               if(pressed==1&&dragged==false)
               {
                this.destroyCarrots();
              }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);

        var calNum4=this.add.sprite(720,270,'grade61_calNum');
        calNum4.name="grade51_calNum4";
        calNum4.anchor.setTo(0.5);
        calNum4.scale.setTo(0.66,0.66);
        calNum4.frame=4;
        calNum4.inputEnabled=true;
        calNum4.input.useHandCursor = true;
       // destCarrots.destroy();
       calNum4.events.onInputDown.add(function(){
        commonNavBar.playTapSound();
                //this.Tap.play();
                
                txtbox.frame=5;
                pressed++;
                if(pressed==1&&dragged==false)
                {
                  this.destroyCarrots();
                }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);
       
       var calNum5=this.add.sprite(790,270,'grade61_calNum');
       calNum5.name="grade51_calNum5";
       calNum5.anchor.setTo(0.5);
       calNum5.scale.setTo(0.66,0.66);
       calNum5.frame=5;
       calNum5.inputEnabled=true;
       calNum5.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum5.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
               // this.Tap.play();

               txtbox.frame=6;
               pressed++;
               if(pressed==1&&dragged==false)
               {
                this.destroyCarrots();
              }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);


        var calNum6=this.add.sprite(860,270,'grade61_calNum');
        calNum6.name="grade51_calNum6";
        calNum6.anchor.setTo(0.5);
        calNum6.scale.setTo(0.66,0.66);
        calNum6.frame=6;
        calNum6.inputEnabled=true;
        calNum6.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum6.events.onInputDown.add(function(){
         commonNavBar.playTapSound();
                //this.Tap.play();
                
                txtbox.frame=7;
                pressed++;
                if(pressed==1&&dragged==false)
                {
                  this.destroyCarrots();
                }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);

        var calNum7=this.add.sprite(720,340,'grade61_calNum');
        calNum7.name="grade51_calNum7";
        calNum7.anchor.setTo(0.5);
        calNum7.scale.setTo(0.66,0.66);
        calNum7.frame=7;
        calNum7.inputEnabled=true;
        calNum7.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum7.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
               //this.Tap.play();
               txtbox.frame=8;
               pressed++;
               if(pressed==1&&dragged==false)
               {
                this.destroyCarrots();
              }
               // this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);

        var calNum8=this.add.sprite(790,340,'grade61_calNum');
        calNum8.name="grade51_calNum8";
        calNum8.anchor.setTo(0.5);
        calNum8.scale.setTo(0.66,0.66);
        calNum8.frame=8;
        calNum8.inputEnabled=true;
        calNum8.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum8.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
               // this.Tap.play();

               txtbox.frame=9;
               pressed++;
               if(pressed==1&&dragged==false)
               {
                this.destroyCarrots();
              }
               // this.destroyCarrots();
               // destCarrots.destroy();
               this.darkCarrtsVisible();
             },this);

        var calNum9=this.add.sprite(860,340,'grade61_calNum');
        calNum9.name="grade51_calNum9";
        calNum9.anchor.setTo(0.5);
        calNum9.scale.setTo(0.66,0.66);
        calNum9.frame=9;
        calNum9.inputEnabled=true;
        calNum9.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum9.events.onInputDown.add(function(){
         commonNavBar.playTapSound();
                //this.Tap.play();
                
                txtbox.frame=10;
                pressed++;
                if(pressed==1&&dragged==false)
                {
                  this.destroyCarrots();
                }
                //this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);

        var calNum0=this.add.sprite(720,410,'grade61_calNum');
        calNum0.name="grade51_calNum0";
        calNum0.anchor.setTo(0.5);
        calNum0.scale.setTo(0.66,0.66);
        calNum0.frame=0;
        calNum0.inputEnabled=true;
        calNum0.input.useHandCursor = true;
        //destCarrots.destroy();
        calNum0.events.onInputDown.add(function(){
          commonNavBar.playTapSound();
                //this.Tap.play();
                
                txtbox.frame=1;
                pressed++;
                if(pressed==1&&dragged==false)
                {
                  this.destroyCarrots();
                }
               // this.destroyCarrots();
                //destCarrots.destroy();
                this.darkCarrtsVisible();
              },this);
       //////console.log("pressed=="+pressed);



       

       tick=this.add.sprite(860,412,'grade61_tick');
       tick.name="grade51_tick";
       tick.anchor.setTo(0.5);
       tick.scale.setTo(1.3,1.3);
       tick.frame=0;
       tick.inputEnabled=true;
       tick.input.useHandCursor = true;
       tick.events.onInputDown.add(function(target){
         target.events.onInputDown.removeAll();   
         this.noofAttempts++;



         tick.frame=1;
         this.time.events.add(500, function(){
          tick.frame=0;
          if(correctflag==1){
                        //this.events.onInputDown.removeAll();
                      }

                      this.checkAns();

                    },this);
       },this);
       
       eraser=this.add.sprite(790,412,'grade61_eraser');
       eraser.name="grade51_eraser";
       eraser.anchor.setTo(0.5);
       eraser.scale.setTo(1.3,1.3);
       eraser.frame=0;
       eraser.inputEnabled=true;
       eraser.input.useHandCursor = true;
       eraser.events.onInputDown.add(function(){
        commonNavBar.playTapSound();
                //this.Tap.play();
                eraser.frame=1;
                this.time.events.add(500, function(){
                  eraser.frame=0;
                },this);
                txtbox.frame=0;

              },this);

        //////console.log("txt frame=="+txtbox.frame);
        
        


        shakeGroup.add(boxbg);
        shakeGroup.add(WhiteBox);
        shakeGroup.add(greenNumbers);
        shakeGroup.add(greenNumbers1);
        shakeGroup.add(plusSign);
        shakeGroup.add(equalSymbol);
        shakeGroup.add(txtbox);
        shakeGroup.add(calNum1);
        shakeGroup.add(calNum2);
        shakeGroup.add(calNum3);
        shakeGroup.add(calNum4);
        shakeGroup.add(calNum5);
        shakeGroup.add(calNum6);
        shakeGroup.add(calNum7);
        shakeGroup.add(calNum8);
        shakeGroup.add(calNum9);
        shakeGroup.add(calNum0);
        shakeGroup.add(tick);
        shakeGroup.add(eraser);
        shakeGroup.visible=false;
        
      },
   /* shutdown:function(){
        this.stopVoice();

         carrot1.events.onInputDown.removeAll();
        carrot2.events.onInputDown.removeAll();
        carrot3.events.onInputDown.removeAll();
        carrot4.events.onInputDown.removeAll();
        carrot5.events.onInputDown.removeAll();
        carrot6.events.onInputDown.removeAll();
        carrot7.events.onInputDown.removeAll();
        carrot8.events.onInputDown.removeAll();
        carrot9.events.onInputDown.removeAll();

        no22=null;
        src = null;
        no11=null;
        qArrays=null;
        carrot=null;
        addLength=null;
        imp=null;
        carrot=null;
        displayCarrots1=null;
        displayCarrots2=null;
        displayCarrots3=null;
        displayCarrots4=null;
        displayCarrots5=null;
        displayCarrots6=null;
        displayCarrots7=null;
        displayCarrots8=null;
        randomno=null;
        randarr=null;
        dragged=null;
        allElements=null;
        blackCarrots=null;
        carrot1=null;
        carrot2=null;
        carrot3=null;
        carrot4=null;
        carrot5=null;
        carrot6=null;
        carrot7=null;
        carrot8=null;
        carrot9=null;
         blackCarrots1=null;
        blackCarrots2=null;
        blackCarrots3=null;
        blackCarrots4=null;
        blackCarrots5=null;
        blackCarrots6=null;
        blackCarrots7=null;
        blackCarrots8=null;
        blackCarrots9=null;
        framesChange=null;
        f=null;
        v=null;
        framesChange1=null;
        greenNumbers=null;
        greenNumbers=null;
        greenNumbers1=null;
        shakeGroup=null;
        correctflag=null;
        qArrays1=null;
        carrotArray=null;
        count=null;
        count1=null;
        dragcount=null;
        speakerbtn=null;
        destCarrots=null;
        counterForTimer=null;
        minutes=null;
        seconds=null;
        celebration=null;
        thinkingCloud=null;
        carrotGroup=null;
        pressed=null;
        starsGroup=null;
        timeDisplay=null;
        tick.events.onInputDown.removeAll();
        tick=null;
        eraser.events.onInputDown.removeAll();
        eraser=null;
       
        //calNum1.events.onInputDown.removeAll();
        calnum1=null;
        //calNum2.events.onInputDown.removeAll();
        calnum2=null;
        //calNum3.events.onInputDown.removeAll();
        calnum3=null;
        //calNum4.events.onInputDown.removeAll();
        calnum4=null;
        //calNum5.events.onInputDown.removeAll();
        calnum5=null;
        //calNum6.events.onInputDown.removeAll();
        calnum6=null;
        //calNum7.events.onInputDown.removeAll();
        calnum7=null;
        //calNum8.events.onInputDown.removeAll();
        calnum8=null;
       // calNum9.events.onInputDown.removeAll();
        calnum9=null;
        //calNum0.events.onInputDown.removeAll();
        calnum0=null;
       // backbtn.events.onInputDown.removeAll();
        backbtn=null;
        //_speakerbtn.events.onInputDown.removeAll();
        speakerbtn=null;
        
      },*/

      slideleft:function(){

        this.time.events.add(2000, function(){
            //////console.log("tween");
            shakeGroup.x=500;
            shakeGroup.visible=true;

            
            var Maintween = this.add.tween(shakeGroup);
            Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
          },this);
      },

      checkAns:function(){

       //////console.log("greenframe="+Number(greenNumbers.frame+1));
       //////console.log("greenframe1="+Number(greenNumbers1.frame+1));


        //1+1=2

        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 

         this.wrongAns();
       }  

        //1+2=3

        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //1+3=4
        
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //1+4=5

        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //1+5=6
        
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //1+6=7
        
        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //1+7=8

        if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //2+1=3

        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //2+2=4
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //2+3=5
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //2+4=6
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //2+5=7
        
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //2+6=8
        
        
        if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //3+1=4
        
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //3+2=5
        
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //3+3=6
        
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //3+4=7
        
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //3+5=8
        
        if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //4+1=5
        
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //4+2=6
        
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //4+3=7

        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 
        //4+4=8
        
        if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  
        //5+1=6
        
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 
        //5+2=7
        
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //5+3=8
        
        if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //6+1=7
        
        if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       } 

        //6+2=8
        
        if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
       { 
         this.wrongAns();
       }  

        //7+1=8
        
        if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9))
        {
         correctflag=1;
         this.correctAns();

       }
       else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||                      (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
        (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||(Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
       { 

         this.wrongAns();
       }  
     }
   };