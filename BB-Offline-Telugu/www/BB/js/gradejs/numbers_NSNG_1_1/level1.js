Game.number_NSNG_1_1level1=function(){};


Game.number_NSNG_1_1level1.prototype ={
    
    init:function(param,score)
    {
       _this = this;

		this.Stararr = param;
        this.score = score;
	if(window.quizQuest == false)
       this.score =parseInt(window.score);
       telInitializer2.gameIdInit2("NSNG1.1");
       
    },

    preload:function(game){
  if(!window.gradeNSNG1_1){

            window.gradeNSNG1_1 = true;

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

            this.load.atlas('unity1_4backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png',window.baseUrl+'json/gradeJson/unity/1.1/backgrd.json');

            this.load.atlas('unity1_1Tick', window.baseUrl+'assets/gradeAssets/unity/1.1/Tick.png', window.baseUrl+'json/gradeJson/unity/1.1/Tick.json');

        
        //game assets.
        this.load.image('unity1_1BG_01', window.baseUrl+'assets/gradeAssets/unity/1.1/BG_01.png');
        //this.load.image('unity1_1Tick', window.baseUrl+'assets/gradeAssets/unity/1.1/Tick.png');
        this.load.image('unity1_1practice',window.baseUrl+'assets/gradeAssets/unity/1.1/practice.png');
        this.load.image('unity1_1topic',window.baseUrl+'assets/gradeAssets/unity/1.1/topic.png');
        //this.load.image('unity1_1backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png');
        this.load.atlas('unity1_1backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png',window.baseUrl+'json/gradeJson/unity/1.1/backgrd.json');
        
        this.load.atlas('unity1_1ice_1', window.baseUrl+'assets/gradeAssets/unity/1.1/1.png', window.baseUrl+'json/gradeJson/unity/1.1/1.json');
        this.load.atlas('unity1_1flowe_aim', window.baseUrl+'assets/gradeAssets/unity/1.1/flowe_aim.png', window.baseUrl+'json/gradeJson/unity/1.1/flowe_aim.json');
        this.load.atlas('unity1_1ball_anim', window.baseUrl+'assets/gradeAssets/unity/1.1/ball_anim.png', window.baseUrl+'json/gradeJson/unity/1.1/ball_anim.json');
        
        this.load.atlas('unity1_1ice_anim', window.baseUrl+'assets/gradeAssets/unity/1.1/ice_anim.png', window.baseUrl+'json/gradeJson/unity/1.1/ice_anim.json');
        this.load.atlas('unity1_1ball_anim2', window.baseUrl+'assets/gradeAssets/unity/1.1/ball_anim2.png', window.baseUrl+'json/gradeJson/unity/1.1/ball_anim2.json');
        this.load.atlas('unity1_1flowe_aim2', window.baseUrl+'assets/gradeAssets/unity/1.1/flowe_aim2.png', window.baseUrl+'json/gradeJson/unity/1.1/flowe_aim2.json');

        this.load.image('unity1_2shadow',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket_shadow.png');
        this.load.image('unity1_2basket',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket.png');
        this.load.image('unity1_2Basket_Back',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket_Back.png');
        this.load.image('unity1_2tree',window.baseUrl+'assets/gradeAssets/unity/1.2/Tree.png');
        this.load.image('unity1_2topic',window.baseUrl+'assets/gradeAssets/unity/1.2/topic.png');
         this.load.image('unity1_2practice',window.baseUrl+'assets/gradeAssets/unity/1.2/practice.png');
        this.load.atlas('unity1_2mango',window.baseUrl+'assets/gradeAssets/unity/1.2/mango.png' ,window.baseUrl+'json/gradeJson/unity/1.2/mango.json');
        this.load.atlas('unity1_2mangoCeleb',window.baseUrl+'assets/gradeAssets/unity/1.2/mangoCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.2/mangoCeleb.json');

        
       }

    },
    
	create:function(game)
    {
        _this.sceneCount = 0;
        _this.crball=0;
        this.Stararr = [];
        
        _this.group1childVisible = 0;//candys
        _this.group2childVisible = 0;
        _this.group3childVisible = 0;
        _this.candyaudio = 0;
        _this.candyaudio1 = 0;
        _this.candyaudio2 = 0;
        
        _this.flower1childVisible = 0;//flowers
        _this.flower2childVisible = 0;
        _this.flower3childVisible = 0;
        _this.flowerVoice = 0;
        _this.flowerVoice1 = 0;
        _this.flowerVoice2 = 0;
        
        _this.ball1childVisible = 0;//balls
        _this.ball2childVisible = 0;
        _this.ball3childVisible = 0;
        _this.ballVoice = 0;
        _this.ballVoice1 = 0;
        _this.ballVoice2 = 0;

        _this.qArrays;
        _this.speakerbtn;
        _this.group1;
        _this.group2;
        _this.group3;
        _this.group1Anim;
        _this.ShakeObjectGroup1;
        _this.ShakeObjectGroup2;
        _this.ShakeObjectGroup3;
        _this.ShakeObjectGroup4;
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount;
        _this.opt1;
        _this.opt2;
        _this.opt3;
        _this.anim5;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;
        
        //_this.candyaudio=0;
        
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
       
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [5,2,3,4,5,6,7,8,9];
        
        _this.qArrays = _this.shuffle(_this.qArrays);


       


		
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity1_1BG_01');

         
        //_this.soundurl1 ="questionSounds/unity/1.1/English/question.mp3";

        //Language selection Sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/question.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/question.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/question.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.1/question.mp3");
        } 
		else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/question.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/question.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/question.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/question.mp3");
        else 
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/question.mp3");
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        commonNavBar.addNavBar(game,_this.src.src,"numbersense1");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSNG1.1','level1',false,false,true,1];
         commonNavBar.addHint(game,this.hintparams);
        //commonNavBar.disableHint(game);

        //this.getVoice();
        commonNavBar.getVoice(_this.soundurl1);

        this.generateStarsForTheScene(game,8);
        if(window.quizQuest == true)
		{
			_this.speakerbtn = _this.add.sprite(470,7,'speakerBtn');
		}
		else
            _this.speakerbtn = _this.add.sprite(610,7,'speakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {

            commonNavBar.playClickSound();

            _this.getVoice();

        },_this);

        this.getQuestion();



      //  this.createScoreScene();

    },

    generateStarsForTheScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = game.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(game.world.centerX, 10, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;
                }
            }
        }           
        this.starsGroup.getChildAt(0).frame = 2;            
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
    
    callsuccess:function()
    {       
        commonNavBar.getVoice(commonNavBar.soundUrl);
    },
   
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
        commonNavBar.enableHintIcon();
        commonNavBar.startTimer(this);
       _this.questionid = 1;
       /* commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(_this.soundurl1);
        },this);*/
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        console.log("qid===="+_this.qArrays[_this.no11]);
      switch(_this.qArrays[_this.no11])
         	//switch(4)
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
            case 9: _this.gotoNinethQuestion();
    				break;
    	}
        
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },


    createCandy:function(group)
    {
        _this.candy1 = group.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ice_1');  
        _this.candy1.name = "candy1";
        _this.candy1.anchor.setTo(0.5);
        _this.candy1.scale.setTo(0.5);
        
        //_this.candy1.inputEnabled = true;
        //_this.candy1.input.useHandCursor = true;
        //_this.candy1.events.onInputDown.add(_this.candyVoice,_this);

        _this.candy2 = group.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ice_1');  
        _this.candy2.name = "candy2";
        _this.candy2.anchor.setTo(0.5);
        _this.candy2.scale.setTo(0.5);
        
        //_this.candy2.inputEnabled = true;
        //_this.candy2.input.useHandCursor = true;
        //_this.candy2.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy3 = group.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ice_1');  
        _this.candy3.anchor.setTo(0.5);
        _this.candy3.scale.setTo(0.5);
        _this.candy3.name = "candy3";
        
        //_this.candy3.inputEnabled = true;
        //_this.candy3.input.useHandCursor = true;
        //_this.candy3.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy4 = group.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ice_1');  
        _this.candy4.anchor.setTo(0.5);
        _this.candy4.scale.setTo(0.5);
        _this.candy4.name = "candy4";
        
        //_this.candy4.inputEnabled = true;
        //_this.candy4.input.useHandCursor = true;
        //_this.candy4.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy5 = group.create(_this.world.centerX,_this.world.centerY,'unity1_1ice_1');  
        _this.candy5.anchor.setTo(0.5);
        _this.candy5.scale.setTo(0.5);
        _this.candy5.name = "candy5";
        
        //_this.candy5.inputEnabled = true;
        //_this.candy5.input.useHandCursor = true;
        //_this.candy5.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy6 = group.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ice_1');  
        _this.candy6.anchor.setTo(0.5);
        _this.candy6.scale.setTo(0.5);
        _this.candy6.name = "candy6";
        
        //_this.candy6.inputEnabled = true;
        //_this.candy6.input.useHandCursor = true;
        //_this.candy6.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy7 = group.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ice_1');  
        _this.candy7.anchor.setTo(0.5);
        _this.candy7.scale.setTo(0.5);
        _this.candy7.name = "candy7";
        
        //_this.candy7.inputEnabled = true;
        //_this.candy7.input.useHandCursor = true;
        //_this.candy7.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy8 = group.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ice_1');  
        _this.candy8.anchor.setTo(0.5);
        _this.candy8.scale.setTo(0.5);
        _this.candy8.name = "candy8";
        
        //_this.candy8.inputEnabled = true;
        //_this.candy8.input.useHandCursor = true;
        //_this.candy8.events.onInputDown.add(_this.candyVoice,_this);
        
        _this.candy9 = group.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ice_1');  
        _this.candy9.anchor.setTo(0.5);
        _this.candy9.scale.setTo(0.5);
        _this.candy9.name = "candy9";
        
        //_this.candy9.inputEnabled = true;
        //_this.candy9.input.useHandCursor = true;
        //_this.candy9.events.onInputDown.add(_this.candyVoice,_this);

    },
    
    createCandyright:function(groupAnim)
    {
        _this.unity1_1backgrd = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		//_this.unity1_1backgrd.input.priorityID = 1;
        _this.unity1_1backgrd.name = "candyBg";
        _this.unity1_1backgrd.scale.setTo(0.5);
        _this.unity1_1backgrd.anchor.setTo(0.5);
        
        _this.candyAnim1 = groupAnim.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ice_anim');  
        _this.candyAnim1.name = "candyAnim1";
        _this.candyAnim1.anchor.setTo(0.5);
        _this.candyAnim1.scale.setTo(0.5);
        
        _this.candyAnim2 = groupAnim.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ice_anim');  
        _this.candyAnim2.name = "candyAnim2";
        _this.candyAnim2.anchor.setTo(0.5);
        _this.candyAnim2.scale.setTo(0.5);
        
        _this.candyAnim3 = groupAnim.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ice_anim');  
        _this.candyAnim3.anchor.setTo(0.5);
        _this.candyAnim3.scale.setTo(0.5);
        _this.candyAnim3.name = "candyAnim3";
        
        _this.candyAnim4 = groupAnim.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ice_anim');  
        _this.candyAnim4.anchor.setTo(0.5);
        _this.candyAnim4.scale.setTo(0.5);
        _this.candyAnim4.name = "candyAnim4";
        
        _this.candyAnim5 = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_1ice_anim');  
        _this.candyAnim5.anchor.setTo(0.5);
        _this.candyAnim5.scale.setTo(0.5);
        _this.candyAnim5.name = "candyAnim5";
        
        _this.candyAnim6 = groupAnim.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ice_anim');  
        _this.candyAnim6.anchor.setTo(0.5);
        _this.candyAnim6.scale.setTo(0.5);
        _this.candyAnim6.name = "candyAnim6";
        
        _this.candyAnim7 = groupAnim.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ice_anim');  
        _this.candyAnim7.anchor.setTo(0.5);
        _this.candyAnim7.scale.setTo(0.5);
        _this.candyAnim7.name = "candyAnim7";
        
        _this.candyAnim8 = groupAnim.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ice_anim');  
        _this.candyAnim8.anchor.setTo(0.5);
        _this.candyAnim8.scale.setTo(0.5);
        _this.candyAnim8.name = "candyAnim8";
        
        _this.candyAnim9 = groupAnim.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ice_anim');  
        _this.candyAnim9.anchor.setTo(0.5);
        _this.candyAnim9.scale.setTo(0.5);
        _this.candyAnim9.name = "candyAnim9";
    },
    
    createflower:function(group_flower)
    {
        _this.flower1 = group_flower.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1flowe_aim');  
        _this.flower1.name = "flowe_aim1";
        _this.flower1.anchor.setTo(0.5);
        _this.flower1.scale.setTo(0.5);
        
        //_this.flower1.inputEnabled = true;
        //_this.flower1.input.useHandCursor = true;
        //_this.flower1.events.onInputDown.add(_this.flowerVoice,_this);

        _this.flower2 = group_flower.create(_this.world.centerX,_this.world.centerY-70,'unity1_1flowe_aim');  
        _this.flower2.name = "unity1_1flowe_aim2";
        _this.flower2.anchor.setTo(0.5);
        _this.flower2.scale.setTo(0.5);
        
        //_this.flower2.inputEnabled = true;
        //_this.flower2.input.useHandCursor = true;
        //_this.flower2.events.onInputDown.add(_this.flowerVoice,_this);
        
        _this.flower3 = group_flower.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1flowe_aim');  
        _this.flower3.anchor.setTo(0.5);
        _this.flower3.scale.setTo(0.5);
        _this.flower3.name = "flowe_aim3";
        
        //_this.flower3.inputEnabled = true;
        //_this.flower3.input.useHandCursor = true;
        //_this.flower3.events.onInputDown.add(_this.flowerVoice,_this);
        
        _this.flower4 = group_flower.create(_this.world.centerX-70,_this.world.centerY,'unity1_1flowe_aim');  
        _this.flower4.anchor.setTo(0.5);
        _this.flower4.scale.setTo(0.5);
        _this.flower4.name = "flowe_aim4";
        
        //_this.flower4.inputEnabled = true;
        //_this.flower4.input.useHandCursor = true;
        //_this.flower4.events.onInputDown.add(_this.flowerVoice,_this);
     
        _this.flower5 = group_flower.create(_this.world.centerX,_this.world.centerY,'unity1_1flowe_aim');  
        _this.flower5.anchor.setTo(0.5);
        _this.flower5.scale.setTo(0.5);
        _this.flower5.name = "flowe_aim5";
        
        //_this.flower5.inputEnabled = true;
        //_this.flower5.input.useHandCursor = true;
        //_this.flower5.events.onInputDown.add(_this.flowerVoice,_this);

        _this.flower6 = group_flower.create(_this.world.centerX+70,_this.world.centerY,'unity1_1flowe_aim');  
        _this.flower6.anchor.setTo(0.5);
        _this.flower6.scale.setTo(0.5);
        _this.flower6.name = "flowe_aim6";
        
        //_this.flower6.inputEnabled = true;
        //_this.flower6.input.useHandCursor = true;
        //_this.flower6.events.onInputDown.add(_this.flowerVoice,_this);
        
        
        _this.flower7 = group_flower.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1flowe_aim');  
        _this.flower7.anchor.setTo(0.5);
        _this.flower7.scale.setTo(0.5);
        _this.flower7.name = "flowe_aim7";
        
        //_this.flower7.inputEnabled = true;
        //_this.flower7.input.useHandCursor = true;
        //_this.flower7.events.onInputDown.add(_this.flowerVoice,_this);
        
        
        _this.flower8 = group_flower.create(_this.world.centerX,_this.world.centerY+70,'unity1_1flowe_aim');  
        _this.flower8.anchor.setTo(0.5);
        _this.flower8.scale.setTo(0.5);
        _this.flower8.name = "flowe_aim8";
        
        //_this.flower8.inputEnabled = true;
        //_this.flower8.input.useHandCursor = true;
        //_this.flower8.events.onInputDown.add(_this.flowerVoice,_this);
     
        _this.flower9 = group_flower.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1flowe_aim');  
        _this.flower9.anchor.setTo(0.5);
        _this.flower9.scale.setTo(0.5);
        _this.flower9.name = "flowe_aim9";
        
        _this.flower9.inputEnabled = true;
        _this.flower9.input.useHandCursor = true;
        //_this.flower9.events.onInputDown.add(_this.flowerVoice,_this);
        
    },
    
    createflowerRight:function(groupAnim)
    { 
        _this.candyAnim1 = groupAnim.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1flowe_aim2');  
        _this.candyAnim1.name = "candyAnim1";
        _this.candyAnim1.anchor.setTo(0.5);
        _this.candyAnim1.scale.setTo(0.5);
        
        _this.candyAnim2 = groupAnim.create(_this.world.centerX,_this.world.centerY-70,'unity1_1flowe_aim2');  
        _this.candyAnim2.name = "candyAnim2";
        _this.candyAnim2.anchor.setTo(0.5);
        _this.candyAnim2.scale.setTo(0.5);
        
        _this.candyAnim3 = groupAnim.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1flowe_aim2');  
        _this.candyAnim3.anchor.setTo(0.5);
        _this.candyAnim3.scale.setTo(0.5);
        _this.candyAnim3.name = "candyAnim3";
        
        _this.candyAnim4 = groupAnim.create(_this.world.centerX-70,_this.world.centerY,'unity1_1flowe_aim2');  
        _this.candyAnim4.anchor.setTo(0.5);
        _this.candyAnim4.scale.setTo(0.5);
        _this.candyAnim4.name = "candyAnim4";
        
        _this.candyAnim5 = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_1flowe_aim2');  
        _this.candyAnim5.anchor.setTo(0.5);
        _this.candyAnim5.scale.setTo(0.5);
        _this.candyAnim5.name = "candyAnim5";
        
        _this.candyAnim6 = groupAnim.create(_this.world.centerX+70,_this.world.centerY,'unity1_1flowe_aim2');  
        _this.candyAnim6.anchor.setTo(0.5);
        _this.candyAnim6.scale.setTo(0.5);
        _this.candyAnim6.name = "candyAnim6";
        
        _this.candyAnim7 = groupAnim.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1flowe_aim2');  
        _this.candyAnim7.anchor.setTo(0.5);
        _this.candyAnim7.scale.setTo(0.5);
        _this.candyAnim7.name = "candyAnim7";
        
        _this.candyAnim8 = groupAnim.create(_this.world.centerX,_this.world.centerY+70,'unity1_1flowe_aim2');  
        _this.candyAnim8.anchor.setTo(0.5);
        _this.candyAnim8.scale.setTo(0.5);
        _this.candyAnim8.name = "candyAnim8";
        
        _this.candyAnim9 = groupAnim.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1flowe_aim2');  
        _this.candyAnim9.anchor.setTo(0.5);
        _this.candyAnim9.scale.setTo(0.5);
        _this.candyAnim9.name = "candyAnim9";
    },

    createball:function(group_ball)
    {
        _this.crball++;
      
       /* _this.unity1_1backgrd = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.unity1_1backgrd.scale.setTo(0.5);
        _this.unity1_1backgrd.anchor.setTo(0.5);
       */ 
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ball1_anim');  
//        else
            _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ball_anim');  
        _this.ball1.name = "ball_anim1";
        _this.ball1.anchor.setTo(0.5);
        _this.ball1.scale.setTo(0.5);
        //_this.ball1.inputEnabled = true;
        //_this.ball1.input.useHandCursor = true;
        //_this.ball1.events.onInputDown.add(_this.ballVoice,_this);
        
        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ball1_anim');  
//        else
            _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ball_anim');  
        _this.ball2.name = "unity1_1ball_anim2";
        _this.ball2.anchor.setTo(0.5);
        _this.ball2.scale.setTo(0.5);
        //_this.ball2.inputEnabled = true;
        //_this.ball2.input.useHandCursor = true;
        //_this.ball2.events.onInputDown.add(_this.ballVoice,_this);
        
        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ball1_anim');  
//        else
            _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ball_anim');  
        _this.ball3.anchor.setTo(0.5);
        _this.ball3.scale.setTo(0.5);
        _this.ball3.name = "ball_anim3";
        //_this.ball3.inputEnabled = true;
        //_this.ball3.input.useHandCursor = true;
        //_this.ball3.events.onInputDown.add(_this.ballVoice,_this);
        
        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ball1_anim');  
//        else
            _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ball_anim');  
        _this.ball4.anchor.setTo(0.5);
        _this.ball4.scale.setTo(0.5);
        _this.ball4.name = "ball_anim4";
        //_this.ball4.inputEnabled = true;
        //_this.ball4.input.useHandCursor = true;
        //_this.ball4.events.onInputDown.add(_this.ballVoice,_this);
        
         
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1ball1_anim');  
//        else
            _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1ball_anim'); 
        _this.ball5.anchor.setTo(0.5);
        _this.ball5.scale.setTo(0.5);
        _this.ball5.name = "ball_anim5";
        //_this.ball5.inputEnabled = true;
        //_this.ball5.input.useHandCursor = true;
        //this.ball5.events.onInputDown.add(_this.ballVoice,_this);
        
        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ball1_anim');  
//        else
            _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ball_anim');  
        _this.ball6.anchor.setTo(0.5);
        _this.ball6.scale.setTo(0.5);
        _this.ball6.name = "ball_anim6";
        //_this.ball6.inputEnabled = true;
        //_this.ball6.input.useHandCursor = true;
        //_this.ball6.events.onInputDown.add(_this.ballVoice,_this);
        
        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ball1_anim');  
//        else
            _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ball_anim');  
        _this.ball7.anchor.setTo(0.5);
        _this.ball7.scale.setTo(0.5);
        _this.ball7.name = "ball_anim7";
        //_this.ball7.inputEnabled = true;
        //_this.ball7.input.useHandCursor = true;
        //_this.ball7.events.onInputDown.add(_this.ballVoice,_this);

        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ball1_anim');  
//        else
            _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ball_anim');  
        _this.ball8.anchor.setTo(0.5);
        _this.ball8.scale.setTo(0.5);
        _this.ball8.name = "ball_anim8";
        //_this.ball8.inputEnabled = true;
        //_this.ball8.input.useHandCursor = true;
        //_this.ball8.events.onInputDown.add(_this.ballVoice,_this);

        
//        if(_this.crball==0 || _this.crball==2 || _this.crball==4)
//            _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ball1_anim');  
//        else
            _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ball_anim'); 
        _this.ball9.anchor.setTo(0.5);
        _this.ball9.scale.setTo(0.5);
        _this.ball9.name = "ball_anim9";
        
        //_this.ball9.inputEnabled = true;
       // _this.ball9.input.useHandCursor = true;
        //_this.ball9.events.onInputDown.add(_this.ballVoice,_this);


    },
    
    createballright:function(group_ball)
    {
        _this.crballright++;
       /* _this.unity1_1backgrd = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.unity1_1backgrd.scale.setTo(0.5);
        _this.unity1_1backgrd.anchor.setTo(0.5);*/
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ball1_anim');  
//        else  
        _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_1ball_anim2');  
        _this.ball1.name = "ball_anim1";
        _this.ball1.anchor.setTo(0.5);
        _this.ball1.scale.setTo(0.5);
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ball1_anim');
//        else
        _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_1ball_anim2');  
        _this.ball2.name = "unity1_1ball_anim2";
        _this.ball2.anchor.setTo(0.5);
        _this.ball2.scale.setTo(0.5);
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ball1_anim');  
//        else
            _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_1ball_anim2');  
        _this.ball3.anchor.setTo(0.5);
        _this.ball3.scale.setTo(0.5);
        _this.ball3.name = "ball_anim3";

//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ball1_anim');  
//        else
        _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_1ball_anim2');  
        _this.ball4.anchor.setTo(0.5);
        _this.ball4.scale.setTo(0.5);
        _this.ball4.name = "ball_anim4";
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1ball1_anim'); 
//        else
            _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_1ball_anim2');  
        _this.ball5.anchor.setTo(0.5);
        _this.ball5.scale.setTo(0.5);
        _this.ball5.name = "ball_anim5";
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ball1_anim'); 
//        else
            _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_1ball_anim2'); 
        _this.ball6.anchor.setTo(0.5);
        _this.ball6.scale.setTo(0.5);
        _this.ball6.name = "ball_anim6";
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ball1_anim');  
//        else
            _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_1ball_anim2');  
        _this.ball7.anchor.setTo(0.5);
        _this.ball7.scale.setTo(0.5);
        _this.ball7.name = "ball_anim7";
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ball1_anim');  
//        else
            _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_1ball_anim2');  
        _this.ball8.anchor.setTo(0.5);
        _this.ball8.scale.setTo(0.5);
        _this.ball8.name = "ball_anim8";
        
//        if(_this.crballright==0 || _this.crballright==2 || _this.crballright==4)
//            _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ball1_anim'); 
//        else
            _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_1ball_anim2'); 
        _this.ball9.anchor.setTo(0.5);
        _this.ball9.scale.setTo(0.5);
        _this.ball9.name = "ball_anim9";
    },
    
    candyVoice:function(target)
    {
        _this.candyaudio++;
 
        if(target.key=='unity1_1ice_1')
            {
                target.loadTexture('unity1_1ice_anim', 0, false);
            }
            
            _this.time.events.add(300, function()
            { 
                //_this.candyAnim1.destroy();
                target.loadTexture('unity1_1ice_1', 0, false);
            }, this);
        
        if(_this.candyaudio==1)
        {
           
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==2)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==3)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==4)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==5)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==6)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==7)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==8)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio==9)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.candySound.play();
        }
        

        if(_this.candyaudio>=_this.group1childVisible)
            {
                _this.candyaudio = 0;
            }

        
    },
    
    candyVoice2:function(target)
    {
        _this.candyaudio2++;
 
        if(target.key=='unity1_1ice_1')
            {
                target.loadTexture('unity1_1ice_anim', 0, false);
            }
            
            _this.time.events.add(300, function()
            { 
                //_this.candyAnim1.destroy();
                target.loadTexture('unity1_1ice_1', 0, false);
            }, this);
        
        if(_this.candyaudio2==1)
        {
           
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==2)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==3)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==4)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==5)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==6)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==7)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==8)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio2==9)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.candySound.play();
        }
        

        if(_this.candyaudio2>=_this.group3childVisible)
            {
                _this.candyaudio2 = 0;
            }

        
    },
    
    candyVoice1:function(target)
    {
        _this.candyaudio1++;
 
        if(target.key=='unity1_1ice_1')
            {
                target.loadTexture('unity1_1ice_anim', 0, false);
            }
            
            _this.time.events.add(300, function()
            { 
                //_this.candyAnim1.destroy();
                target.loadTexture('unity1_1ice_1', 0, false);
            }, this);
        
        if(_this.candyaudio1==1)
        {
           
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==2)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==3)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==4)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==5)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==6)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==7)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==8)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.candySound.play();
        }
        
        if(_this.candyaudio1==9)
        {
           this.candySound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.candySound.play();
        }
        

        if(_this.candyaudio1>=_this.group2childVisible)
            {
                _this.candyaudio1 = 0;
            }

        
    },
    
    flowerAudio:function(target)
    {
        
        
        _this.flowerVoice++;
        
        
        
        if(target.key=='unity1_1flowe_aim')
        {
            target.loadTexture('unity1_1flowe_aim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice==1)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==2)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.flowerSound.play();  
           
        }
        
        if(_this.flowerVoice==3)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==4)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==5)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==6)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==7)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==8)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice==9)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice>=_this.flower1childVisible)
        {
            _this.flowerVoice = 0;
        }
        
    },
    
    flowerAudio1:function(target)
    {
        _this.flowerVoice1++;
        
        
        
        if(target.key=='unity1_1flowe_aim')
        {
            target.loadTexture('unity1_1flowe_aim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice1==1)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==2)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.flowerSound.play();  
           
        }
        
        if(_this.flowerVoice1==3)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==4)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==5)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==6)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==7)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==8)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1==9)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice1>=_this.flower2childVisible)
        {
            _this.flowerVoice1 = 0;
        }

    },
       
    flowerAudio2:function(target)
    {
        _this.flowerVoice2++;
        
        
        
        if(target.key=='unity1_1flowe_aim')
        {
            target.loadTexture('unity1_1flowe_aim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice2==1)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==2)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.flowerSound.play();  
           
        }
        
        if(_this.flowerVoice2==3)
        {
           this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==4)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==5)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==6)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==7)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==8)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2==9)
        {
            this.flowerSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.flowerSound.play();
        }
        
        if(_this.flowerVoice2>=_this.flower3childVisible)
        {
            _this.flowerVoice2 = 0;
        }
    },
  
    ballAudio:function(target)
    {
        
        _this.ballVoice++;
        
        
        if(target.key=='unity1_1ball_anim')
        {
            target.loadTexture('unity1_1ball_anim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice==1)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==2)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.ballSound.play();
            
           
        }
        
        if(_this.ballVoice==3)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==4)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==5)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==6)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==7)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==8)
        {
           this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice==9)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.ballSound.play();
        }
        
        
        if(_this.ballVoice>=_this.ball1childVisible)
        {
            _this.ballVoice = 0;
        } 
    },
    
    ballAudio1:function(target)
    {
       _this.ballVoice1++;
        
        
        if(target.key=='unity1_1ball_anim')
        {
            target.loadTexture('unity1_1ball_anim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice1==1)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==2)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.ballSound.play();
            
           
        }
        
        if(_this.ballVoice1==3)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==4)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==5)
        {
            this.ballSound = new Audio(window.baseUrl+window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==6)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==7)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==8)
        {
           this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice1==9)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.ballSound.play();
        }
        
        
        if(_this.ballVoice1>=_this.ball2childVisible)
        {
            _this.ballVoice1 = 0;
        } 
    },
    
    ballAudio2:function(target)
    {
        _this.ballVoice2++;
        
        
        if(target.key=='unity1_1ball_anim')
        {
            target.loadTexture('unity1_1ball_anim2', 0, false);
        }

        _this.time.events.add(300, function()
        { 
            target.loadTexture('unity1_1ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice2==1)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/1.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==2)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/2.mp3');
           this.ballSound.play();
            
           
        }
        
        if(_this.ballVoice2==3)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/3.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==4)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/4.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==5)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/5.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==6)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/6.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==7)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/7.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==8)
        {
           this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/8.mp3');
           this.ballSound.play();
        }
        
        if(_this.ballVoice2==9)
        {
            this.ballSound = new Audio(window.baseUrl+'questionSounds/unity/1.1/English/9.mp3');
           this.ballSound.play();
        }
        
        
        if(_this.ballVoice2>=_this.ball3childVisible)
        {
            _this.ballVoice2 = 0;
        } 
    },

    gotoFirstQuestion:function()
    {    
        //alert("here");
        
        
        if( _this.no11==0)   
        {      
			if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
       
        // _this.stopVoice();

        _this.questionNo = 1;
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);
            
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(7).visible = false;
        
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.name = 'tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.name = 'tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.name = 'tick3';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        flagGroup1 = _this.add.group();
        
    	_this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
     //   flagGroup1.add(_this.backgrd1);
     //   flagGroup1.add(_this.backgrd2);
     //   flagGroup1.add(_this.backgrd3);
    	
    //	flagGroup1.x = 1000;
        
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.group1childVisible = 8;
        _this.group2childVisible = 5;
        _this.group3childVisible = 4;
        
      //  _this.group1.onChildInputDown.add(_this.candyVoice, _this);
      //  _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
     //   _this.group3.onChildInputDown.add(_this.candyVoice2, _this);
    },
   
    gotoSecondQuestion:function()
    {
       // _this.stopVoice();
        
        if( _this.no11==0)   
        {               
           if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
       // _this.no11++;                                               //4,7,1-----------------4
        _this.questionNo = 2;
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		////_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		////_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.name = 'tick1';*/

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.name = "tick2";*/
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.name= "tick3";
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(5).visible = false;
        _this.group1.getChildAt(7).visible = false;
        
        _this.group2.getChildAt(8).visible = false;
        _this.group2.getChildAt(6).visible = false;
        
        _this.group3.getChildAt(0).visible = false;
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(2).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(7).visible = false;
        _this.group3.getChildAt(8).visible = false;
    
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
      //  flagGroup1.add(_this.opt1);
      //  flagGroup1.add(_this.opt2);
      //  flagGroup1.add(_this.opt3);
    	
    	//flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 4;
        _this.flower2childVisible = 7;
        _this.flower3childVisible = 1;
   
       // _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
      //  _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
      //  _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);

    },
   
    gotoThirdQuestion:function()
    {
       // _this.stopVoice();
        
        if( _this.no11==0)   
        {               
           if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
                                                   
        _this.questionNo = 3;                         //9,4,3--------3;
       

       _this.group1 = _this.add.group();
        _this.group2 = _this.add.group();
        _this.group3 = _this.add.group();
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
   

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
      
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        
        
        _this.ShakeObjectGroup1 = _this.add.group();
        _this.ShakeObjectGroup2 = _this.add.group();
        _this.ShakeObjectGroup3 = _this.add.group();
        

        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
         _this.backgrd1.name="tick1";
         _this.backgrd1.frame=0;
        _this.backgrd1.inputEnabled=true;
        _this.backgrd1.input.useHandCursor=true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);

        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
         _this.backgrd2.name="tick2";
         _this.backgrd2.frame=0;
        _this.backgrd2.inputEnabled=true;
        _this.backgrd2.input.useHandCursor=true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
         _this.backgrd3.name="tick3";
         _this.backgrd3.frame=0;
        _this.backgrd3.inputEnabled=true;
        _this.backgrd3.input.useHandCursor=true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
       
        
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(7).visible = false;
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
    
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
        _this.ShakeObjectGroup2.add(_this.backgrd2);
        _this.ShakeObjectGroup3.add(_this.backgrd3);
        
        _this.ShakeObjectGroup1.add(_this.group1);
        _this.ShakeObjectGroup2.add(_this.group2);
        _this.ShakeObjectGroup3.add(_this.group3);
        
      
        _this.ShakeObjectGroup1.x = 1000;
        _this.ShakeObjectGroup2.x = 1000;
        _this.ShakeObjectGroup3.x = 1000;
        
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
        _this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
        _this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
        _this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 9;//balls
        _this.ball2childVisible = 4;
        _this.ball3childVisible = 3;
        
      
    
    },
   
    gotoFourthQuestion:function()
    {
        //_this.stopVoice();
        
        if( _this.no11==0)   
        {               
           if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 4;           //2,1,5----------1
     /*   _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
      

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
      
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

       
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
        _this.backgrd1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
        _this.backgrd2.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;

        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;
 
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
     
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this. tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        _this. tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 2;//balls
        _this.ball2childVisible = 1;
        _this.ball3childVisible = 5;*/
        
       
       _this.group1 = _this.add.group();
        _this.group2 = _this.add.group();
        _this.group3 = _this.add.group();
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
   

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
      
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        
        
        _this.ShakeObjectGroup1 = _this.add.group();
        _this.ShakeObjectGroup2 = _this.add.group();
        _this.ShakeObjectGroup3 = _this.add.group();
        

        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
         _this.backgrd1.name="tick1";
         _this.backgrd1.frame=0;
        _this.backgrd1.inputEnabled=true;
        _this.backgrd1.input.useHandCursor=true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
         _this.backgrd2.name="tick2";
         _this.backgrd2.frame=0;
        _this.backgrd2.inputEnabled=true;
        _this.backgrd2.input.useHandCursor=true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.correctAns,_this);

        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
         _this.backgrd3.name="tick3";
         _this.backgrd3.frame=0;
        _this.backgrd3.inputEnabled=true;
        _this.backgrd3.input.useHandCursor=true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
       
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;

        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;

    
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
        _this.ShakeObjectGroup2.add(_this.backgrd2);
        _this.ShakeObjectGroup3.add(_this.backgrd3);
        
        _this.ShakeObjectGroup1.add(_this.group1);
        _this.ShakeObjectGroup2.add(_this.group2);
        _this.ShakeObjectGroup3.add(_this.group3);
        
      
        _this.ShakeObjectGroup1.x = 1000;
        _this.ShakeObjectGroup2.x = 1000;
        _this.ShakeObjectGroup3.x = 1000;
        
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
        _this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
        _this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
        _this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 2;//balls
        _this.ball2childVisible = 1;
        _this.ball3childVisible = 5;
    },

    gotoFifthQuestion:function()
    {
        //_this.stopVoice();
        
        if( _this.no11==0)   
        {               
           if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 5;          //2,6,5------------2
        /*_this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
      

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
      
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

      
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
       
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(5).visible = false;

        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
       
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 2;//balls
        _this.ball2childVisible = 6;
        _this.ball3childVisible = 5;
        */
      _this.group1 = _this.add.group();
        _this.group2 = _this.add.group();
        _this.group3 = _this.add.group();
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
   

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
      
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        
        
        _this.ShakeObjectGroup1 = _this.add.group();
        _this.ShakeObjectGroup2 = _this.add.group();
        _this.ShakeObjectGroup3 = _this.add.group();
        

        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
         _this.backgrd1.name="tick1";
         _this.backgrd1.frame=0;
        _this.backgrd1.inputEnabled=true;
        _this.backgrd1.input.useHandCursor=true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);

        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
         _this.backgrd2.name="tick2";
         _this.backgrd2.frame=0;
        _this.backgrd2.inputEnabled=true;
        _this.backgrd2.input.useHandCursor=true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
         _this.backgrd3.name="tick3";
         _this.backgrd3.frame=0;
        _this.backgrd3.inputEnabled=true;
        _this.backgrd3.input.useHandCursor=true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
       
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;

        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;

    
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
        _this.ShakeObjectGroup2.add(_this.backgrd2);
        _this.ShakeObjectGroup3.add(_this.backgrd3);
        
        _this.ShakeObjectGroup1.add(_this.group1);
        _this.ShakeObjectGroup2.add(_this.group2);
        _this.ShakeObjectGroup3.add(_this.group3);
        
      
        _this.ShakeObjectGroup1.x = 1000;
        _this.ShakeObjectGroup2.x = 1000;
        _this.ShakeObjectGroup3.x = 1000;
        
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
        _this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
        _this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
        _this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 2;//balls
        _this.ball2childVisible = 6;
        _this.ball3childVisible = 5;

    },

    gotoSixthQuestion:function()
    {
        //_this.stopVoice();
        
        if( _this.no11==0)   
        {               
            if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 6;   //8,9,7-----------9
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(4).visible = false;
        
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(8).visible = false;
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = 'tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = 'tick3';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        flagGroup1 = _this.add.group();
    	_this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
     //   flagGroup1.add(_this.opt1);
     //   flagGroup1.add(_this.opt2);
     //   flagGroup1.add(_this.opt3);
    	
    //	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.group1childVisible = 8;
        _this.group2childVisible = 9;
        _this.group3childVisible = 7;
        
     //   _this.group1.onChildInputDown.add(_this.candyVoice, _this);
     //   _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
     //   _this.group3.onChildInputDown.add(_this.candyVoice2, _this);
    },
    
    gotoSeventhQuestion:function()
    {
       // _this.stopVoice();
        
       if( _this.no11==0)   
        {               
            if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 7;       //7,8,6-------------------7
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(4).visible = false;
        
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = 'tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = 'tick3';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        flagGroup1 = _this.add.group();
    	_this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
       // flagGroup1.add(_this.opt1);
       // flagGroup1.add(_this.opt2);
       // flagGroup1.add(_this.opt3);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.group1childVisible = 7;
        _this.group2childVisible = 8;
        _this.group3childVisible = 6;
        
       // _this.group1.onChildInputDown.add(_this.candyVoice, _this);
       // _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
       // _this.group3.onChildInputDown.add(_this.candyVoice2, _this);
    },

    gotoEighthQuestion:function()
    {
       // _this.stopVoice();
        
        if( _this.no11==0)   
        {               
           if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 8;  //6,5,2----------------5
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.correctAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'tick1';*/

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = "tick2";*/
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name= "tick3";
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(5).visible = false;

        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(7).visible = false;
        
        _this.group3.getChildAt(0).visible = false;
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(2).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(7).visible = false;
        _this.group3.getChildAt(8).visible = false;
    
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
       // flagGroup1.add(_this.opt1);
       // flagGroup1.add(_this.opt2);
       // flagGroup1.add(_this.opt3);
    	
    	//flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 6;
        _this.flower2childVisible = 5;
        _this.flower3childVisible = 2;
   
     //   _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
      //  _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
      // _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);

    },

    gotoNinethQuestion:function()
    {
        //_this.stopVoice();
        
        if( _this.no11==0)   
        {               
          if(window.languageSelected=="English")
			{
				_this.time.events.add(5500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else if(window.languageSelected=="Hindi")
			{
				_this.time.events.add(6500, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
			else
			{
				_this.time.events.add(8000, function(){
					this.getVoice();
					commonNavBar.getVoice(commonNavBar.soundUrl);
				},_this);
			}
        }
        else
        {
           this.getVoice();
            commonNavBar.getVoice(commonNavBar.soundUrl);
        }
        
        _this.questionNo = 9;            //7,3,6-------------------6
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd1.name = "candyBg";
        _this.backgrd1.scale.setTo(0.5);
        _this.backgrd1.anchor.setTo(0.5);
        _this.backgrd1.name = 'tick1';
        _this.backgrd1.inputEnabled = true;
        _this.backgrd1.input.useHandCursor = true;
		//_this.backgrd1.input.priorityID = 1;
        _this.backgrd1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd2.name = "candyBg";
        _this.backgrd2.scale.setTo(0.5);
        _this.backgrd2.anchor.setTo(0.5);
        _this.backgrd2.name = 'tick2';
        _this.backgrd2.inputEnabled = true;
        _this.backgrd2.input.useHandCursor = true;
		//_this.backgrd2.input.priorityID = 1;
        _this.backgrd2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_1backgrd','Symbol 14 instance 10000');
		
        _this.backgrd3.name = "candyBg";
        _this.backgrd3.scale.setTo(0.5);
        _this.backgrd3.anchor.setTo(0.5);
        _this.backgrd3.name = 'tick3';
        _this.backgrd3.inputEnabled = true;
        _this.backgrd3.input.useHandCursor = true;
		//_this.backgrd3.input.priorityID = 1;
        _this.backgrd3.events.onInputDown.add(_this.correctAns,_this);
        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'tick1';*/

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = "tick2";*/
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

       /* _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_1Tick');
    	_this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name= "tick3";
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);*/
        
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(8).visible = false;
    
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;
        
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.backgrd1);
    	_this.ShakeObjectGroup2.add(_this.backgrd2);
    	_this.ShakeObjectGroup3.add(_this.backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
      //  flagGroup1.add(_this.opt1);
      //  flagGroup1.add(_this.opt2);
      //  flagGroup1.add(_this.opt3);
    	
    	//flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 7;
        _this.flower2childVisible = 3;
        _this.flower3childVisible = 6;
   
     //   _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
     //   _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
      //  _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);
    },


	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            _this.count++;
            
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
           // _this.stopVoice();
           commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
         //   var timerStopVar = commonNavBar.stopTimer();
            _this.state.start('number_NSNG_1_1level2',true,false);
		}
	},
   
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        
        _this.no11++;
        
        //console.log("--------------------------"+_this.no11);

        if(_this.no11<5)
        {
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2;  
        }
        _this.count1++;
        if(_this.no11<4)
        {
            wrong = true;
           
            
            _this.MaintweenDestroy = _this.add.tween(_this.ShakeObjectGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy1 = _this.add.tween(_this.ShakeObjectGroup2);
            _this.MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup3);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            if(_this.ShakeObjectGroup4)
            {
            	_this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup4);
            	_this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            }
            
            //console.log("inside removeEverthing");
            
            _this.MaintweenDestroy.onComplete.add(function(){

            	//_this.game.input.enabled = true;
                _this.count =0;
                _this.ShakeObjectGroup1.destroy();
                _this.ShakeObjectGroup2.destroy();
                _this.ShakeObjectGroup3.destroy();

                if(_this.ShakeObjectGroup4)
                	_this.ShakeObjectGroup4.destroy();
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
            },_this);   
        }
        else
        {
            //commonNavBar.stopTimer();
            //commonNavBar.disableNavBar();

        	_this.MaintweenDestroy = _this.add.tween(_this.ShakeObjectGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy1 = _this.add.tween(_this.ShakeObjectGroup2);
            _this.MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup3);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            if(_this.ShakeObjectGroup4)
            {
                _this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup4);
                _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            }
            
            //console.log("inside removeEverthing");
            
            _this.MaintweenDestroy.onComplete.add(function(){

                //_this.game.input.enabled = true;
                _this.count =0;
                _this.ShakeObjectGroup1.destroy();
                _this.ShakeObjectGroup2.destroy();
                _this.ShakeObjectGroup3.destroy();

                if(_this.ShakeObjectGroup4)
                    _this.ShakeObjectGroup4.destroy();

                   // this.createScoreScene();
                    var timerStopVar = commonNavBar.stopTimer();
                    commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
           
                   _this.state.start('number_NSNG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
                
            },_this);
        }
    },
    
	correctAns:function(target)
	{
        commonNavBar.disableHintIcon();
        telInitializer2.gameCorrectAns();
		target.frame = 1;
        var timerStopVar = commonNavBar.stopTimer();
        _this.ShakeObjectGroup4 = _this.add.group();
        //console.log("correct Answer");
        //console.log(_this.questionNo);
        _this.group1Anim = _this.add.group();

		//_this.game.input.enabled = false;

      
       _this.backgrd1.events.onInputDown.removeAll();

      
        _this.backgrd2.events.onInputDown.removeAll();

       
        _this.backgrd3.events.onInputDown.removeAll();
        
        if(_this.questionNo==1)
        {
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.x -= 300;
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1Anim.getChildAt(8).visible = false;
        }
        else if(_this.questionNo == 2)
        {
            _this.group1Anim.x -= 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
        } 
        else if(_this.questionNo == 3)
        {
            _this.group1Anim.x += 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group3.destroy();
            _this.group1Anim.getChildAt(0).visible = false;
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(6).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
        }  
        else if(_this.questionNo == 4)
        {
            //group1Anim.x -= 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group2.destroy();
            
            _this.group1Anim.getChildAt(0).visible = false;
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            //_this.group2.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(6).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
        }
        else if(_this.questionNo == 5)
        {
            _this.group1Anim.x -= 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
            
            _this.group1Anim.getChildAt(0).visible = false;
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
           // group1.getChildAt(6).visible = false;
            _this.group1Anim.getChildAt(6).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
        }
        else if(_this.questionNo == 6)
        {
            //group1Anim.x -= 300;
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group2.destroy();
            
        }
        else if(_this.questionNo == 7)
        {
            _this.group1Anim.x -= 300;
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            
            _this.group1.destroy();
           
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(9).visible = false;
        }
        else if(_this.questionNo == 8)
        {
            //group1Anim.x -= 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group2.destroy();
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
        }
        else
        {
            _this.group1Anim.x += 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group3.destroy();
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
        }
        
        _this.ShakeObjectGroup4.add(_this.group1Anim);
       _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;
        
        commonNavBar.playClickSound();
        _this.time.events.add(100,function(){
            commonNavBar.playCelebrationSound();
        },_this);
        
        
        _this.time.events.add(2200,function(){
            target.frame = 0;
            target.events.onInputDown.removeAll();
            _this.removeEverthing();
        },_this);
        //console.log("correct target:"+target);
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log("starAnim:"+_this.starAnim);
        
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();    

        this.Stararr.push(3);

        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}
	},

    wrongAns:function(target)
	{
        commonNavBar.disableHintIcon();
        telInitializer2.gameWrongAns();
	//	target.frame = 1;
       var timerStopVar = commonNavBar.stopTimer();
        //_this.game.input.enabled = false;
         _this.backgrd1.events.onInputDown.removeAll();

      
        _this.backgrd2.events.onInputDown.removeAll();

       
        _this.backgrd3.events.onInputDown.removeAll();
		
        if(target.name=='tick1')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup1);
        } 
        else if(target.name=='tick2')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup2);
        }
        else if(target.name=='tick3')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup3);
        }
           
        commonNavBar.playClickSound();
        _this.time.events.add(100,function(){
            commonNavBar.playWrongCelebrationSound();
        },_this);
		

        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);

      

      //  _this.time.events.add(500, function(){ target.frame = 0;}, _this);

      _this.time.events.add(2200, _this.removeEverthing, _this);
       if(window.quizQuest == true)
		{
			commonNavBar.updateScore(-5);
		}
     
	},


    
    getVoice1:function()
    {
       
       if(window.languageSelected=="English")
                         commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/English/";
                    else if(window.languageSelected=="Hindi")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Hindi/";
                    else if(window.languageSelected=="Kannada")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Kannada/";
                    else if(window.languageSelected=="Odiya")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Odiya/";
					else if(window.languageSelected=="Marathi")
						 commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Marathi/No";
					 else if(window.languageSelected=="Telugu")
						 commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Telugu/No";
					 else if(window.languageSelected=="Tamil")
						 commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Tamil/No";
					 else if(window.languageSelected=="Urdu")
						 commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.1/Urdu/No";
                    else
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/Gujarati/unity/numbers/No";


        switch(this.qArrays[this.no11])
        {
            case 4: 
                    commonNavBar.soundUrl += "1.mp3";
                    break;
            case 5:
                    commonNavBar.soundUrl += "2.mp3";
                    break;
            case 3: 
                    commonNavBar.soundUrl += "3.mp3";
                    break;
            case 2:
                    commonNavBar.soundUrl += "4.mp3";
                    break;
            case 8:
                    commonNavBar.soundUrl += "5.mp3";
                    break;
            case 9:
                    commonNavBar.soundUrl += "6.mp3";
                    break;
            case 7:
                    commonNavBar.soundUrl += "7.mp3";
                    break;
            case 1:
                    commonNavBar.soundUrl += "8.mp3";
                    break;
            case 6:
                    commonNavBar.soundUrl += "9.mp3";
                    break;
        }
        
        commonNavBar.getVoice(commonNavBar.soundUrl);
       
       
    },

   /* createScoreScene:function()
    {
        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        //this.terrificText = this.add.sprite(this.world.centerX,this.world.centerY,'terrificText');
        //this.terrificText.anchor.setTo(0.5);

        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        //this.terrificText.font = 'myfont';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,8);
    },

    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = game.add.group();
        this.scoreSceneScore = 0;

       // this.Stararr = [1,3,1,3,1,3,1,3];
        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(game.world.centerX, game.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(game.world.centerX, game.world.centerY-70, 'dot');
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

        //this.addScoreSceneScore(this,this.scoreSceneScore);         
        commonNavBar.deductScore(this,this.scoreSceneScore,false);        
    },

    replayClicked:function()
    {
        this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true);

        this.time.events.add(2000, function()
        { 
            this.state.restart();
        }, this);
    },*/

    getVoice:function()
    {
        _this.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 4: if(window.languageSelected=="English")
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/1.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/1.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/1.mp3");
					else if(window.languageSelected=="Marathi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No1.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No1.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No1.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No1.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No1.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No1.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/1.mp3");
                    break;
            case 5: if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/2.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/2.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/2.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No2.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No2.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No2.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No2.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No2.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/2.mp3");
                    break;
            case 3: if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/3.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/3.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/3.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No3.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No3.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No3.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No3.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No3.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/3.mp3");
                    break;
            case 2:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/4.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/4.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/4.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No4.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No4.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No4.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No4.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No4.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/4.mp3");
                    break;
            case 8:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/5.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/5.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/5.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No5.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No5.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No5.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No5.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No5.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/5.mp3");
                    break;
            case 9:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/6.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/6.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/6.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No6.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No6.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No6.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No6.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No6.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/6.mp3");
                    break;
            case 7:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/7.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/7.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/7.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No7.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No7.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No7.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No7.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No7.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/7.mp3");
                    break;
            case 1:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/8.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/8.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/8.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No8.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No8.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No8.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No8.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No8.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/8.mp3");
                    break;
            case 6:if(window.languageSelected=="English")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/9.mp3");
                    else if(window.languageSelected=="Hindi")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/9.mp3");
                    else if(window.languageSelected=="Kannada")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/9.mp3");
					else if(window.languageSelected=="Marathi")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No9.mp3");
		 else if(window.languageSelected=="Telugu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No9.mp3");
		 else if(window.languageSelected=="Tamil")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No9.mp3");
		 else if(window.languageSelected=="Urdu")
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No9.mp3");
                    else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No9.mp3");
					else
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/9.mp3");
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
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
        this.stopVoice();
    }

};