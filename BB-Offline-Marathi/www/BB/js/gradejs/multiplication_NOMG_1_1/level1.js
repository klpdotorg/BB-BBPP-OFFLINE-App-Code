Game.multiplication_NOMG_1_1level1=function(){};

Game.multiplication_NOMG_1_1level1.prototype={
    init:function(param,score)
    {
       _this = this;
       
       _this.gameid = "Game 11.1";

		this.Stararr = param;
        this.score = score;
		if(window.quizQuest == false)
			this.score =parseInt(window.score);
        
        
       
       telInitializer2.gameIdInit2("NOMG1.1");
    },

    preload:function(game){
        if(!window.grade1NOM1){

            window.grade1NOM1 = true;

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

        _this.load.atlas('unity11_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity11_1topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity11_1timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity11_1speaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');



        this.load.image('unity11_1backg',window.baseUrl+'assets/gradeAssets/11.1/backg.png');
        this.load.atlas('unity11_1erase', window.baseUrl+'assets/gradeAssets/11.1/erase.png', window.baseUrl+'json/gradeJson/11.1/erase.json');
        this.load.atlas('unity11_1mul', window.baseUrl+'assets/gradeAssets/11.1/mul.png', window.baseUrl+'json/gradeJson/11.1/mul.json');
        this.load.atlas('unity11_1numberpad', window.baseUrl+'assets/gradeAssets/11.1/numberpad.png', window.baseUrl+'json/gradeJson/11.1/numberpad.json');
        this.load.atlas('unity11_1numbers', window.baseUrl+'assets/gradeAssets/11.1/numbers.png', window.baseUrl+'json/gradeJson/11.1/numbers.json');
        this.load.atlas('unity11_1apple',window.baseUrl+'assets/gradeAssets/11.1/apple.png' ,window.baseUrl+'json/gradeJson/11.1/apple.json');
        this.load.atlas('unity11_1rightmark',window.baseUrl+'assets/gradeAssets/11.1/rightmark.png',window.baseUrl+'json/gradeJson/11.1/rightmark.json');
        
        this.load.image('unity11_1b2', window.baseUrl+'assets/gradeAssets/11.1/b2.png');
        this.load.image('unity11_1a1', window.baseUrl+'assets/gradeAssets/11.1/a1.png');
        this.load.image('unity11_1a2', window.baseUrl+'assets/gradeAssets/11.1/a2.png');
        this.load.image('unity11_1a3', window.baseUrl+'assets/gradeAssets/11.1/a3.png');
        this.load.image('unity11_1ansbox', window.baseUrl+'assets/gradeAssets/11.1/ansbox.png');
        this.load.image('unity11_1apple1', window.baseUrl+'assets/gradeAssets/11.1/apple1.png');
        this.load.image('unity11_1apple2', window.baseUrl+'assets/gradeAssets/11.1/apple2.png');
        this.load.image('unity11_1apple3', window.baseUrl+'assets/gradeAssets/11.1/apple3.png');
        this.load.image('unity11_1box', window.baseUrl+'assets/gradeAssets/11.1/box.png');
        this.load.image('unity11_1equal', window.baseUrl+'assets/gradeAssets/11.1/equal.png');
        this.load.image('unity11_1set', window.baseUrl+'assets/gradeAssets/11.1/set.png');
        this.load.image('unity11_1plus', window.baseUrl+'assets/gradeAssets/11.1/plus.png'); 

        _this.load.atlas('unity11_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity11_2topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity11_2timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity11_2speaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');



                this.load.image('unity11_2backg',window.baseUrl+'assets/gradeAssets/11.1/backg.png');
                this.load.atlas('unity11_2erase', window.baseUrl+'assets/gradeAssets/11.1/erase.png', window.baseUrl+'json/gradeJson/11.1/erase.json');
        this.load.atlas('unity11_2mul', window.baseUrl+'assets/gradeAssets/11.1/mul.png', window.baseUrl+'json/gradeJson/11.1/mul.json');
        this.load.atlas('unity11_2numberpad', window.baseUrl+'assets/gradeAssets/11.1/numberpad.png', window.baseUrl+'json/gradeJson/11.1/numberpad.json');
        this.load.atlas('unity11_2numbers', window.baseUrl+'assets/gradeAssets/11.1/numbers.png', window.baseUrl+'json/gradeJson/11.1/numbers.json');
        this.load.atlas('unity11_2apple',window.baseUrl+'assets/gradeAssets/11.1/apple.png' ,window.baseUrl+'json/gradeJson/11.1/apple.json');
        this.load.atlas('unity11_2rightmark',window.baseUrl+'assets/gradeAssets/11.1/rightmark.png',window.baseUrl+'json/gradeJson/11.1/rightmark.json');
        
        this.load.image('unity11_2b2', window.baseUrl+'assets/gradeAssets/11.1/b2.png');
        this.load.image('unity11_2a1', window.baseUrl+'assets/gradeAssets/11.1/a1.png');
        this.load.image('unity11_2a2', window.baseUrl+'assets/gradeAssets/11.1/a2.png');
        this.load.image('unity11_2a3', window.baseUrl+'assets/gradeAssets/11.1/a3.png');
        this.load.image('unity11_2ansbox', window.baseUrl+'assets/gradeAssets/11.1/ansbox.png');
        this.load.image('unity11_2apple1', window.baseUrl+'assets/gradeAssets/11.1/apple1.png');
        this.load.image('unity11_2apple2', window.baseUrl+'assets/gradeAssets/11.1/apple2.png');
        this.load.image('unity11_2apple3', window.baseUrl+'assets/gradeAssets/11.1/apple3.png');
        this.load.image('unity11_2box', window.baseUrl+'assets/gradeAssets/11.1/box.png');
        this.load.image('unity11_2equal', window.baseUrl+'assets/gradeAssets/11.1/equal.png');
        this.load.image('unity11_2set', window.baseUrl+'assets/gradeAssets/11.1/set.png');
        this.load.image('unity11_2plus', window.baseUrl+'assets/gradeAssets/11.1/plus.png'); 


    }

    },

create:function(game)
    {

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity11_1backg');

        if(window.languageSelected=="English")
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.1/English/11.1E.mp3";
                    else if(window.languageSelected=="Hindi")
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Hindi/11.1H.mp3";
                    else if(window.languageSelected=="Kannada")
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Kannada/11.1K.mp3";
                    else if(window.languageSelected=="Gujarati")
                        _this.qsoundurl = window.baseUrl+"questionSounds/Gujarati/11.1/11.1E.mp3";
					else if(window.languageSelected=="Marathi")
                    {
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Marathi/11.1E.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Tamil/11.1E.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Telugu/11.1E.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                         _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Urdu/11.1E.mp3";
                    }
                    else
                        _this.qsoundurl =window.baseUrl+"questionSounds/11.1/Odiya/11.1.mp3";



        commonNavBar.addNavBar(this,_this.qsoundurl,"numberoperation3");
        commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
        //commonNavBar.addHint(this);
       // this.hintparams=['NOMG1.1','level1',false,false,true,1];
      
       // commonNavBar.addHint(this,this.hintparams);


         this.Stararr = [];
         countcorrect=1;
		_this.amplify = null;
		_this.Maintween;
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
        _this.numGrp;
        _this.rightAns ="";
        _this.numGroup;
        _this.background;
        _this.click3;
        _this.anim4;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
    
        _this.enterTxt = null;
        _this.selectedAns = "";
        _this.questioNo = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        
        _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.box=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArrays = _this.shuffle(_this.qArrays);

     
        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
        commonNavBar.getVoice(_this.qsoundurl);
          
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
        //commonNavBar.enableHintIcon();
         console.log("get question");
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        
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
            case 11: _this.gotoEleventhQuestion();
    				break; 
            case 12: _this.gotoTwevelvethQuestion();
    				break; 
    	}
        
       telInitializer2.gameQuestionStart(this,_this.questionid);
        
    },
   

    
    generateStarsForTheScene:function(game,count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i <  count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX, 12, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=10;
					_this.starsGroup.getChildAt(i).x+=10;
				}
			}
		}
        _this.starsGroup.getChildAt(0).frame = 2; 
        _this.starsGroup.getChildAt(1).frame = 0;
        _this.starsGroup.getChildAt(2).frame = 0;
        _this.starsGroup.getChildAt(3).frame = 0;
        _this.starsGroup.getChildAt(4).frame = 0;
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


    
 gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
   
     //_this.getVoice();
     
     _this.box1 =_this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
    
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=4;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
    // _this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	_this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
    
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=3;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=3;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=3;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=3;
     
     _this.num5 = _this.add.sprite(450,220,'unity11_1numberpad');
     _this.num5.anchor.setTo(0.5);
     _this.num5.frame=3;
    
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      _this.numGrp.add(_this.num4);
      _this.numGrp.add(_this.num5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple3');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple3');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple3');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple3');
     _this.apple4.anchor.setTo(0.5);
    
     _this.plus4 = _this.add.sprite(340,290,'unity11_1plus');
     _this.plus4.anchor.setTo(0.5);
     
     _this.apple5 = _this.add.sprite(450,290,'unity11_1apple3');
     _this.apple5.anchor.setTo(0.5);
    
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.apple4);
      _this.appleGrp.add(_this.apple5);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
      _this.appleGrp.add(_this.plus3);
      _this.appleGrp.add(_this.plus4);
     
      _this.rightAns=15;
     
     },

gotoSecondQuestion:function(){
       
     _this.questioNo = 2;
     
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
    
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=2;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=2;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=2;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=2;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      _this.numGrp.add(_this.num4);
      
     _this.appleGrp= _this.add.group();
    
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple2');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple2');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple2');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple2');
     _this.apple4.anchor.setTo(0.5);
    
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4);
     _this.appleGrp.add(_this.plus1);
     _this.appleGrp.add(_this.plus2);
     _this.appleGrp.add(_this.plus3);
     
      
      _this.rightAns=8;
     
     },
    
gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
    
     //_this.getVoice();
        
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
    // _this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	_this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
    
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=1;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=1;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=1;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=1;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      _this.numGrp.add(_this.num4);
      
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple1');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple1');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple1');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple1');
     _this.apple4.anchor.setTo(0.5);

      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.apple4);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
      _this.appleGrp.add(_this.plus3);
      
       _this.rightAns=4;
     
     },
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
    
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
    // _this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	_this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,100,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=3;
     
     _this.num2 = _this.add.sprite(450,100,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=3;
     
     _this.num3 = _this.add.sprite(680,100,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=3;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      
     _this.appleGrp=_this.add.group();  
         
     _this.apple1 = _this.add.sprite(230,180,'unity11_1apple3');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,180,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,180,'unity11_1apple3');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,180,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,180,'unity11_1apple3');
     _this.apple3.anchor.setTo(0.5);

      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
      
      _this.rightAns=9;
         
     
 },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
    
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=4;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
        
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=2;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=2;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=2;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=2;
     
     _this.num5 = _this.add.sprite(450,220,'unity11_1numberpad');
     _this.num5.anchor.setTo(0.5);
     _this.num5.frame=2;
    
     _this.numGrp.add(_this.num1);
     _this.numGrp.add(_this.num2);
     _this.numGrp.add(_this.num3);
     _this.numGrp.add(_this.num4);
     _this.numGrp.add(_this.num5);
        
     _this.appleGrp=_this.add.group();
        
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple2');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple2');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple2');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple2');
     _this.apple4.anchor.setTo(0.5);
    
     _this.plus4 = _this.add.sprite(340,290,'unity11_1plus');
     _this.plus4.anchor.setTo(0.5);
     
     _this.apple5 = _this.add.sprite(450,290,'unity11_1apple2');
     _this.apple5.anchor.setTo(0.5);
      
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4);
     _this.appleGrp.add(_this.apple5);
     _this.appleGrp.add(_this.plus1);
     _this.appleGrp.add(_this.plus2);
     _this.appleGrp.add(_this.plus3);
     _this.appleGrp.add(_this.plus4);
      
      _this.rightAns=10;
     
     },
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     
     //_this.getVoice();
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
    
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=1;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=1;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=1;
    
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple1');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple1');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple1');
     _this.apple3.anchor.setTo(0.5);
    
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
     
     _this.rightAns=3;
 },
    
   
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
   
     //_this.getVoice();
     
     _this.box1 =_this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=4;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
   //  _this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
   _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=1;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=1;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=1;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=1;
     
     _this.num5 = _this.add.sprite(450,220,'unity11_1numberpad');
     _this.num5.anchor.setTo(0.5);
     _this.num5.frame=1;
    
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      _this.numGrp.add(_this.num4);
      _this.numGrp.add(_this.num5);
     
     _this.appleGrp=_this.add.group();
     
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple1');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple1');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple1');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple1');
     _this.apple4.anchor.setTo(0.5);
    
     _this.plus4 = _this.add.sprite(340,290,'unity11_1plus');
     _this.plus4.anchor.setTo(0.5);
     
     _this.apple5 = _this.add.sprite(450,290,'unity11_1apple1');
     _this.apple5.anchor.setTo(0.5);
     
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.apple4);
      _this.appleGrp.add(_this.apple5);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
      _this.appleGrp.add(_this.plus3);
      _this.appleGrp.add(_this.plus4);
     
      _this.rightAns=5;
     
  },
    
    
gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
     
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=3;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
    
     _this.num1 = _this.add.sprite(230,80,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=3;
     
     _this.num2 = _this.add.sprite(450,80,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=3;
     
     _this.num3 = _this.add.sprite(680,80,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=3;
     
     _this.num4 = _this.add.sprite(230, 220,'unity11_1numberpad');
     _this.num4.anchor.setTo(0.5);
     _this.num4.frame=3;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      _this.numGrp.add(_this.num4);
      
     _this.appleGrp= _this.add.group();
    
     _this.apple1 = _this.add.sprite(230,150,'unity11_1apple3');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,150,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,150,'unity11_1apple3');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,150,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,150,'unity11_1apple3');
     _this.apple3.anchor.setTo(0.5);
    
     _this.plus3 = _this.add.sprite(790,150,'unity11_1plus');
     _this.plus3.anchor.setTo(0.5);
     
     _this.apple4 = _this.add.sprite(230,290,'unity11_1apple3');
     _this.apple4.anchor.setTo(0.5);
    
     _this.appleGrp.add(_this.apple1);
     _this.appleGrp.add(_this.apple2);
     _this.appleGrp.add(_this.apple3);
     _this.appleGrp.add(_this.apple4);
     _this.appleGrp.add(_this.plus1);
     _this.appleGrp.add(_this.plus2);
     _this.appleGrp.add(_this.plus3);
      
      _this.rightAns=12;
     
},

gotoNinthQuestion:function(){
    
    _this.questioNo = 9;
    
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=2;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
      _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(230,100,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=2;
     
     _this.num2 = _this.add.sprite(450,100,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=2;
     
     _this.num3 = _this.add.sprite(680,100,'unity11_1numberpad');
     _this.num3.anchor.setTo(0.5);
     _this.num3.frame=2;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
      _this.numGrp.add(_this.num3);
      
     _this.appleGrp=_this.add.group();  
         
     _this.apple1 = _this.add.sprite(230,180,'unity11_1apple2');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(340,180,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(450,180,'unity11_1apple2');
     _this.apple2.anchor.setTo(0.5);
     
     _this.plus2 = _this.add.sprite(560,180,'unity11_1plus');
     _this.plus2.anchor.setTo(0.5);
     
     _this.apple3 = _this.add.sprite(680,180,'unity11_1apple2');
     _this.apple3.anchor.setTo(0.5);

      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.apple3);
      _this.appleGrp.add(_this.plus1);
      _this.appleGrp.add(_this.plus2);
      
      _this.rightAns=6;
         
     
},

gotoTenthQuestion:function(){
    
    _this.questioNo = 10;
    
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=0;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(330,100,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=1;
     
     _this.num2 = _this.add.sprite(600,100,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=1;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
    
     _this.appleGrp=_this.add.group();  
         
     _this.apple1 = _this.add.sprite(330,180,'unity11_1apple1');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(460,180,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(600,180,'unity11_1apple1');
     _this.apple2.anchor.setTo(0.5);
     
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.plus1);
      
      _this.rightAns=2;
         
     
},
    
gotoEleventhQuestion:function(){
    
    _this.questioNo = 11;
    
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
    
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=1;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
    // _this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	_this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
      _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(330,100,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=2;
     
     _this.num2 = _this.add.sprite(600,100,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=2;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
    
     _this.appleGrp=_this.add.group();  
         
     _this.apple1 = _this.add.sprite(330,180,'unity11_1apple2');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(460,180,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(600,180,'unity11_1apple2');
     _this.apple2.anchor.setTo(0.5);
     
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.plus1);
      
      _this.rightAns=4;
         
     
},
    
gotoTwevelvethQuestion:function(){
    
    _this.questioNo = 12;
    
     //_this.getVoice();
     
     _this.box1 = _this.add.sprite(495,420,'unity11_1box');
     _this.box1.anchor.setTo(0.5);
     _this.box1.scale.setTo(0.4);
     
     _this.set = _this.add.sprite(440,420,'unity11_1set');
     _this.set.anchor.setTo(0.5);
     
     _this.numbers1 = _this.add.sprite(370,418,'unity11_1numbers');
     _this.numbers1.anchor.setTo(0.5);
     _this.numbers1.scale.setTo(0.9);
     _this.numbers1.frame=2;
     
     _this.mul = _this.add.sprite(415,415,'unity11_1mul');
     _this.mul.anchor.setTo(0.5);
    
     _this.numbers2 = _this.add.sprite(460,418,'unity11_1numbers');
     _this.numbers2.anchor.setTo(0.5);
     _this.numbers2.scale.setTo(0.9);
     _this.numbers2.frame=1;
     
     _this.equal1 = _this.add.sprite(510,420,'unity11_1mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.frame=1;
    
     _this.txtbox = _this.add.sprite(610,415,'unity11_1ansbox');
     _this.txtbox.anchor.setTo(0.5);
     _this.txtbox.scale.setTo(0.9);
     _this.txtbox.inputEnabled = true;
     _this.txtbox.input.useHandCursor = true;
     //_this.txtbox.events.onInputDown.add(_this.addNumberPad,_this);
	 _this.time.events.add(1000, function(){ _this.addNumberPad();}, _this);
     
     _this.numGrp=_this.add.group();
     
     _this.num1 = _this.add.sprite(330,100,'unity11_1numberpad');
     _this.num1.anchor.setTo(0.5);
     _this.num1.frame=3;
     
     _this.num2 = _this.add.sprite(600,100,'unity11_1numberpad');
     _this.num2.anchor.setTo(0.5);
     _this.num2.frame=3;
     
      _this.numGrp.add(_this.num1);
      _this.numGrp.add(_this.num2);
    
      
     _this.appleGrp=_this.add.group();  
         
     _this.apple1 = _this.add.sprite(330,180,'unity11_1apple3');
     _this.apple1.anchor.setTo(0.5);
     
     _this.plus1 = _this.add.sprite(460,180,'unity11_1plus');
     _this.plus1.anchor.setTo(0.5);
     
     _this.apple2 = _this.add.sprite(600,180,'unity11_1apple3');
     _this.apple2.anchor.setTo(0.5);
     
      _this.appleGrp.add(_this.apple1);
      _this.appleGrp.add(_this.apple2);
      _this.appleGrp.add(_this.plus1);
      
      _this.rightAns=6;
         
     
},
        
 addNumberPad:function(target){
        //console.log("IM IN ")
        // commonNavBar.playClickSound();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,503,'unity11_1b2');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'unity11_1numbg');  
			 _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
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
       
        _this.wrongbtn = _this.numGroup.create(_this.x+30,505,'unity11_1erase');
        _this.wrongbtn.anchor.setTo(0.5);
        //_this.wrongbtn.scale.setTo(0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'unity11_1rightmark');
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
            //commonNavBar.disableHintIcon();
            target.events.onInputDown.removeAll();
             _this.noofAttempts++;
             commonNavBar.playClickSound();
            //console.log(_this.selectedAns);
            //console.log(_this.rightAns);
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==""+_this.rightAns||_this.selectedAns==""+_this.rightAns)  
                {
                    //console.log("correct");
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
                    
                        _this.celebration = true;
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
                         if(window.quizQuest == true)
						{
							commonNavBar.updateScore(+5);
						}
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
                    if(window.quizQuest == true)
					{
						commonNavBar.updateScore(-5);
					}
                }
  
        },_this);
        
        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
        _this.numGroup.visible=true;
        _this.numGroup.y=50;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
            //target.events.onInputDown.removeAll();
        },_this);
    },
        
    
	
	 numClicked:function(target){
     //console.log(target.name);
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level11.1_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        commonNavBar.playtapSound();
        if(_this.selectedAns.length<2)
        {
            _this.selectedAns += target.name;
            _this.txtbox.getChildAt(0).setText(_this.selectedAns);
        }
     },
     
  
            
         
    removeCelebration:function()
	{
        //console.log("removeCeleb");
		_this.celebration = false;
		//console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
       
		  _this.no11++;
		   
		  if(_this.no11<5)
                    {
                        
                         _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                        _this.count1++;
                        _this.wrong = true;
                        _this.appleGrp.destroy();
                        _this.box1.destroy();
                        _this.txtbox.destroy();
                        _this.numGroup.destroy();
                        _this.numGrp.destroy();
                        _this.enterTxt.destroy();
                        _this.selectedAns = '';
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
								_this.getQuestion();
						}
                    
                    }
        
                else
                    {
                         var timerStopVar = commonNavBar.stopTimer();
                         this.count =0;
                        countIncrement = 0;
                       commonNavBar.stopVoice();

                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
                        _this.state.start('multiplication_NOMG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
                         
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
                    res_id: "level11.1_"+target.name, 
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
        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}                                                   
        
	},


  wrongAns:function(target)
	{
        telInitializer2.gameWrongAns();
        target.frame = 1;
        this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
		_this.shake.shake(10, target);
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
		 commonNavBar.playClickSound();
         commonNavBar.playWrongCelebrationSound();
         target.events.onInputDown.removeAll();
       //  commonNavBar.stopTimer();
        _this.time.events.add(1000, _this.removeCelebration, _this);
                                                                    if(window.quizQuest == true)
		{
			commonNavBar.updateScore(-5);
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
    }   
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       