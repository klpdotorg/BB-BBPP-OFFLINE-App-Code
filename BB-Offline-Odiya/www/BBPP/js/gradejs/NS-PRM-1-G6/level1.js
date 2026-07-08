Game.NS_PRM_1_G6level1=function(){};

Game.NS_PRM_1_G6level1.prototype =
{
    init:function(game)
    {
        _this= this;
        
        //* language is passed as parameter.
        _this.languageSelected = window.languageSelected;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);
        
        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/celebration.mp3"); 
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl+"sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);
        
        _this.AppleSlice = document.createElement('audio');
        _this.AppleSlicesrc = document.createElement('source');
        _this.AppleSlicesrc.setAttribute("src", window.baseUrl+"sounds/CarrotBite.mp3");
        _this.AppleSlice.appendChild(_this.AppleSlicesrc);

        _this.TraySound = document.createElement('audio');
        _this.TraySoundsrc = document.createElement('source');
        _this.TraySoundsrc.setAttribute("src", window.baseUrl+"sounds/Egg_Counter_onTray.mp3");
        _this.TraySound.appendChild(_this.TraySoundsrc);

        telInitializerbbpp.gameIdInit("NSN_PRM_1_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

 
	create:function(game)
    {
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1=0;

        _this.speakerbtn;
        _this.background;        
        _this.starsGroup;

         //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;
        
        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        _this.speakerbtnClicked=false;
        _this.rightbtn_is_Clicked=false;

        _this.Question_flag = 2;   //* initial question..Let us find out if the given...
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'bg');
        
        _this.navBar = _this.add.sprite(0,0,'navBar');

        _this.backbtn = _this.add.sprite(5,6,'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function ()
        {   
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50,function()
            {
                _this.state.start('grade6NumberSystems',true,false);
            }); 
        });

        _this.speakerbtn = _this.add.sprite(600,6,'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () 
        {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
            {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if(_this.Question_flag==0){     //* ask select the option to find if the.....
                    //_this.Ask_HowManyLines();
                    _this.Ask_SelectOption();
                }
                else if(_this.Question_flag==1){  //* ask is this prime/composite...
                    _this.Ask_Question();
                }
                else if (_this.Question_flag==2){    //* ask initial question Let us find if...
                    _this.Ask_LetUsFind();
                }

                _this.time.events.add(4000, function () 
                {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();

                });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305,6,'timebg');
        _this.timeDisplay = _this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        _this.apcount=0;
        _this.amcount=0;
 
        _this.time.events.add(2000, _this.getQuestion);

        // Initialize factors array
        _this.factors = [2,3,5,7,11,13];

        _this.factorX = [790,844];
        _this.factorY = [122,175,229];

        _this.factorNumX = [809,864];
        _this.factorNumY = [134,187,240];

        _this.factorTwoX = [802,855];

        _this.eraserX = [790,844];
        _this.eraserY = [122,175,228,283];

        _this.placeEggX = [100,137,177,214,253,
                           291,329,367,405,444,482,
                           519,558,596,634,673];
        _this.placeEggY = [101,139,177,217,254,293,333];

        _this.placeAppleX =  [94,132,170,208,246,
                              284,322,360,398,436,474,
                              511,549,587,625,663];
        _this.placeAppleY = [98,137,175,215,253,291,329];
        

        _this.isitPrimeComposite = [1,2];// audio question for is it a prime or composite, 1=is it a prime 2=is it a composite
        _this.primecompIndex = 0;

        _this.index_variable = 0; // used for select prime or composite number to be asked

        _this.hzorvert = [1,1]; // array for selectin horizontal or verticle representaion

        _this.hrvrt_index = 0;

        _this.primeorcomposite=[1,1,2,2,3,3]; // it stores 1=even composite and 2= odd composite 3= prime values to be shuffled for question

        _this.prmcompindex = 0; // index to prime and composite array

        _this.elementindex=0; // index to element

        _this.eggappleindex=0; // index for selecting egg or apple

        _this.factorGroup = _this.add.group(); // this stores all the factors to be displayed on the screen

        _this.eggGroup = _this.add.group(); // this stores eggs to be displayed on tray

        _this.appleGroup = _this.add.group(); // this stores apple to be displayed on tray

        _this.factorNumGroup = _this.add.group(); //this stores the factors displayed on screen

        _this.currentFactorIndx=0;//set the factor index to 0

        _this.crackeggGroup = _this.add.group();

        _this.sliceappleGroup = _this.add.group();

        _this.factorGroup;
        _this.factorNumGroup;

        _this.rightbtn=_this.add.sprite(830,460,'Rightbtn');
        _this.rightbtn.visible=false;
        _this.rightbtn.frame=1;
          
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () 
    {
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
        {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
    },


    updateTimer:function() 
    {
        _this.counterForTimer++;
  
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },


    shuffle: function(array) 
    {
        //console.log('hi');
        var currentIndex = array.length, temporaryValue, randomIndex;
        //console.log('_this.currentIndex');
            
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
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        
        // element,eggs/apple, prime/composite,for audio question is it a prime or composite
        _this.randomizing_elements();   
        
        _this.gotoPrimeNumber();

        this.questionid = 1;

    },

    stopVoice:function()
    {
        if(_this.SelectOption)
        {
            _this.SelectOption.pause();
            _this.SelectOption = null;
            _this.SelectOptionsrc = null;
        }
        if(_this.Question)
        {
            _this.Question.pause();
            _this.Question = null;
            _this.Questionsrc = null;
        }
        if(_this.Letusfind)
        {
            _this.Letusfind.pause();
            _this.Letusfind = null;
            _this.Letusfindsrc = null;
        }

        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },


    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim');
			for(var j = 0;j < i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=15;
					_this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}

	},

    gotoPrimeNumber:function()
    {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        // get the egg/apple from the shuffled array
        _this.currentFactorIndx = 0;

        _this.prmcompidx = _this.primeorcomposite[_this.prmcompindex];

        if(  _this.prmcompidx == 1)
        {
            _this.element =  _this.elementArray1[_this.elementindex];
        }
        else if( _this.prmcompidx == 2)
        {
            _this.element =  _this.elementArray2[_this.elementindex];
        }
        else
        {
            _this.element =  _this.elementArray3[_this.elementindex];
        }

//        _this.prmcompidx = 1;
//        _this.element = 25;

        //  shuffle the question to be asked
        _this.isitPrimeComposite = _this.shuffle(_this.isitPrimeComposite);

        _this.displayOnscreen();
        
        _this.findFactors();
        _this.displayFactors();
        
        _this.Question_flag = 2; //* set to 2 to play the first question if speaker button is pressed.
        
        if (_this.count1 <= 0)  //* play the first question only for the first question.
        {
            _this.Ask_LetUsFind();
            _this.time.events.add(5000, function () 
            {
                _this.checkPrime();
            });
        }
        else _this.checkPrime();
           
    },
	

	checkPrime:function()
    {

		//_this. Ask_HowManyLines();
        
        if (_this.count1 <= 0 && _this.currentFactorIndx == 0)  //* ask this question, only for first question, first factor 
        {
            _this.Ask_SelectOption();
        }
        _this.Question_flag=0;
     
        _this.highlightFactor();
	},

    Ask_LetUsFind:function()
    {
        _this.stopVoice();
        
        _this.Letusfind = document.createElement('audio');
        _this.Letusfindsrc = document.createElement('source');
        _this.Letusfindsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-PRM-1-G6/" + 
                                       _this.languageSelected + "/NS-PRM-1-G6-a.mp3");
        _this.Letusfind.appendChild(_this.Letusfindsrc);
        
        _this.Letusfind.play();
    },
    
    Ask_SelectOption:function()
    {
        _this.stopVoice();
        
        _this.SelectOption = document.createElement('audio');
        _this.SelectOptionsrc = document.createElement('source');
        _this.SelectOptionsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-PRM-1-G6/" + 
                                       _this.languageSelected + "/NS-PRM-1-G6-b.mp3");
        _this.SelectOption.appendChild(_this.SelectOptionsrc);
        
        _this.SelectOption.play();
    },
     
    //* this function is not used now. this Q is not required to be asked.
    Ask_HowManyLines:function(OddEvenAudio)
    {
        _this.stopVoice();
        
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-PRM-1-G6/" + 
                                       _this.languageSelected + "/howmanylines.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        
        _this.Question.play();

    },

	highlightFactor: function()
    {
        console.log("XXXXXXXXX current factor index: " + _this.currentFactorIndx);
		_this.currentFactorBox =_this.factorGroup.getChildAt(_this.currentFactorIndx);
		_this.currentFactorBox.frame=1;
		_this.currentFactorBox.inputEnabled = true;
				
        _this.currentFactorBox.input.useHandCursor = true;
        _this.currentFactorBox.events.onInputDown.add(_this.factorClicked,_this.currentFactorBox);
		
	},

    randomizing_elements:function()
    {
        // shuffle the array to get option to choose whether the prime or composite number to be asked
        _this.primeorcomposite=_this.shuffle(_this.primeorcomposite);

        console.log("shuffled item");
        for(i=0;i<_this.primeorcomposite.length;i++)
        {
            console.log("prime composite values");
            console.log(_this.primeorcomposite[i]);
        }

        // decide whether the representation is horizontal or vertical
        _this.hzorvert = _this.shuffle(_this.hzorvert);
       
       _this.elementArray1 = [4,6,8,10,12,14,16,18,20,22,24,26,28,30,32];//even comosite
       //_this.elementArray1 = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
        //_this.elementArray1 = [6,6,6,6,6,6,6,6];
        _this.elementArray1 = _this.shuffle(_this.elementArray1);
    
        _this.elementArray2=[9,15,21,25,27,9];//odd composite
        _this.elementArray2 = _this.shuffle(_this.elementArray2);
    
        _this.elementArray3= [5,7,11,13,17,19,23,29,31];//prime

        _this.elementArray3 = _this.shuffle(_this.elementArray3);

         //* shuufle the array to randomize egg and apple
         _this.egg_or_appleArray = [1,2]; // 1 = egg and 2 = apple
         _this.egg_or_appleArray = _this.shuffle(_this.egg_or_appleArray);  
    },

    Ask_Question:function()
    {
        if(_this.isitPrimeComposite[_this.primecompIndex] == 1)
        {
            _this.stopVoice(); 
            _this.Question = document.createElement('audio');
            _this.Questionsrc = document.createElement('source');
            _this.Questionsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-PRM-1-G6/" + 
                                       _this.languageSelected + "/NS-PRM-1-G6-c.mp3");
            _this.Question.appendChild(_this.Questionsrc);
            
            _this.Question.play();
        }
        else
        {
            _this.stopVoice(); 
            _this.Question = document.createElement('audio');
            _this.Questionsrc = document.createElement('source');
            _this.Questionsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-PRM-1-G6/" + 
                                       _this.languageSelected + "/NS-PRM-1-G6-d.mp3");
            _this.Question.appendChild(_this.Questionsrc);
            
            _this.Question.play();
        }   
    },

    //* function finds factors of the element selected. factor can be upto half of given number.
    //* if element selected is 6, factor from factors array are 2 and 3.
    //* if it does not find an end condition in factors array, then whole array is chosen.
    findFactors: function()
    {
        //console.log( "HHHHHHHHHHHHHHHH inside findfactors");
        _this.factors_index = -1;
        for (i=0; i< _this.factors.length;i++)
        {
            if(_this.factors[i] * 2 == _this.element)
            {
                _this.factors_index = i;
                _this.factor_index_adjust = 1;
                console.log("_this.factors[i]: " + _this.factors[i]);
                console.log("_this.factors_index: " + _this.factors_index);
                break;
            }
            else if (_this.factors[i] * 2 > _this.element)
            {
                _this.factors_index = i-1;
                console.log("_this.factors[i]: " + _this.factors[i]);
                console.log("_this.factors_index: " + _this.factors_index);
                break;
            }
        }
        
        
        if (_this.factors_index == -1)
        {
            _this.factors_index = _this.factors.length-1;
        }
        //console.log( "HHHHHHHHHHHHHHHH final factor_index is: " + _this.factors_index );
    },

    //this function display the factors on the screen
    displayFactors: function()
    {
        _this.factorGroup = _this.add.group();
        _this.factorNumGroup = _this.add.group();
        var row=0;
        var col=0;
       
        console.log("display factors: FI:" + _this.factors_index);
        
        if (_this.factors_index == 0)  //* this happens in case given number is 4 & 5. all other cases go to else part.
        {
            _this.factorbox = _this.add.sprite(_this.factorX[0],_this.factorY[0],'FactorBox');
            _this.factorbox.scale.setTo(0.8);
			_this.factorGroup.addChild(_this.factorbox);
            console.log("display factor loop: FG Length: " + _this.factorGroup.length);
            _this.factorTxt = _this.add.text(_this.factorNumX[0],_this.factorNumY[0],_this.factors[0]); 
            _this.factorNumGroup.addChild(_this.factorTxt);         
        }
        else
        {
            for(i=0;i <= _this.factors_index;i++)
            {

                _this.factorbox = _this.add.sprite(_this.factorX[row],_this.factorY[col],'FactorBox');
                _this.factorbox.scale.setTo(0.8);
                _this.factorGroup.addChild(_this.factorbox);
                console.log("display factors loop: FG Length: " + _this.factorGroup.length);
                console.log("The factors are: i: factor::" + i + ":" + _this.factors[i]);
                if( i <= 3)
                {
                    _this.factorTxt = _this.add.text(_this.factorNumX[row],_this.factorNumY[col],_this.factors[i]); 
                    _this.factorNumGroup.addChild(_this.factorTxt);
                }
                else
                {
                    _this.factorTxt = _this.add.text(_this.factorTwoX[row],_this.factorNumY[col],_this.factors[i]); 
                    _this.factorNumGroup.addChild(_this.factorTxt);

                }

                row+=1;

                if (row>=2)
                {
                    row=0;
                    col=col+1;       
                }

            }
        }
		_this.displayEraser();
    },
	
	displayEraser: function()
    {
        console.log("inside display eraser: ");
        console.log(_this.eraserX[1]);
        console.log(_this.eraserY[0]);
        console.log(_this.factors_index);
		if(_this.factors_index == 1)
        {
            _this.eraser = _this.add.sprite(_this.eraserX[1],_this.eraserY[0],'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.3);  //* set the factor tray size based on number of factors shown
        } 
        else if(_this.factors_index == 2)
		{
			 _this.eraser = _this.add.sprite(_this.eraserX[0],_this.eraserY[1],'Eraser');
             _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.5);
		}
		else if(_this.factors_index == 3)
		{
			 _this.eraser = _this.add.sprite(_this.eraserX[1],_this.eraserY[1],'Eraser');
             _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.5);
		}
		else if(_this.factors_index == 4)
		{
			 _this.eraser = _this.add.sprite(_this.eraserX[0],_this.eraserY[2],'Eraser');
             _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.7);
		}
		else if(_this.factors_index == 5)
		{
			 _this.eraser = _this.add.sprite(_this.eraserX[1],_this.eraserY[2],'Eraser');
             _this.eraser.scale.setTo(1.02);
            _this.mainBox.scale.setTo(0.7,0.7);
		}
		else if (_this.factors_index == 0)
		{
			 _this.eraser = _this.add.sprite(_this.eraserX[0],_this.eraserY[3],'Eraser');
             _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.3);
		}
        else
        {
            _this.eraser = _this.add.sprite(_this.eraserX[0],_this.eraserY[3],'Eraser');
            _this.eraser.scale.setTo(1.04);
            _this.mainBox.scale.setTo(0.7,0.7);            
        }
        _this.eraser.visible = false;
        
        //console.log("main box scale is set to: " + _this.mainBox.scale.x + " " + _this.mainBox.scale.y);
	},
    
    // display redBox, egg/apple tray on screen
    displayOnscreen: function()
    {
        if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
        {
            _this.initialTray=_this.add.image(83,80,'EggTray');
        }
        else
        {
            _this.initialTray=_this.add.image(83,80,'AppleTray');
        }

        _this.redBox=_this.add.image(10,90,'RedBox');
        _this.redBox.visible = true;
        _this.mainBox=_this.add.image(777,109,'MainBox');
//        _this.mainBox.scale.setTo(0.7,0.7);
        _this.Txt = _this.add.text(30,105,_this.element); 
        _this.Txt.fill = '#FFFFFF';
        console.log(_this.element);

    },

   
    factorClicked:function(SquareBox)
    {
        _this.initialTray.destroy();
        _this.eraser.frame=0;
        _this.eraser.inputEnabled = false;

        _this.crackeggGroup.destroy();
        _this.sliceappleGroup.destroy();
        
        _this.currentFactorBox.inputEnabled = false;
		_this.truncateTray();
        _this.eggGroup = _this.add.group();
        _this.crackeggGroup = _this.add.group();


        _this.appleGroup = _this.add.group();
        _this.sliceappleGroup = _this.add.group();

        if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
        {
             _this.TweenEggs();
        }
        else
        {
            _this.TweenApple();
        }
	},
	
    TweenEggs: function () 
    {
        var tween_LoopCount = 0;
        
        tween_LoopCount = Math.floor(_this.element / _this.factors[_this.currentFactorIndx]);

        _this.eraser.inputEnabled = false;

        if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
        {
            for (let i = 0; i < tween_LoopCount; i++) {
                _this.time.events.add(650 * i, function () {

                    for(let j=0; j<_this.factors[_this.currentFactorIndx];j++)
                    {
                        moveEgg1 = _this.add.sprite(_this.placeEggX[j],_this.placeEggY[i], 'Egg');
                        moveEgg1.scale.setTo(0.98);
                        _this.eggGroup.addChild(moveEgg1);   
                    }
                    _this.TraySound.play();
                
                });
            }
        }
        else
        {
            for (let i = 0; i < tween_LoopCount; i++) {
                _this.time.events.add(650 * i, function () {

                    for(let j=0; j<_this.factors[_this.currentFactorIndx];j++)
                    {
                        moveEgg1 = _this.add.sprite(_this.placeEggX[i],_this.placeEggY[j], 'Egg');
                        moveEgg1.scale.setTo(0.98);
                        _this.eggGroup.addChild(moveEgg1); 
                    }
                    _this.TraySound.play();
                
                });
            }
        }

        _this.time.events.add(650 * tween_LoopCount + 500, function () 
        {
                _this.time.events.add(1000, function ()
                {
                    for(p=0;p<_this.eggGroup.length;p++)
                    {
                        _this.purpleEgg=_this.eggGroup.getChildAt(p).frame=2; 

                    }
                });
                if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
                {
                    _this.ShowRectangleOnCounters1();
                }
                else
                {
                    _this.ShowRectangleOnCounters();
                }
        });
   
        //* move the last egg if the current question is odd.
        _this.remainder = _this.element % _this.factors[_this.currentFactorIndx];

        if ( _this.remainder!= 0) 
        {
            _this.time.events.add(650 * tween_LoopCount+375, function () 
            {
               
                if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
                {
                    for(let k= 0; k < _this.remainder; k++)
                    {
                        moveEgg1 = _this.add.sprite(_this.placeEggX[k],_this.placeEggY[tween_LoopCount], 'Egg');
                        moveEgg1.scale.setTo(0.98);
                        _this.crackeggGroup.addChild(moveEgg1);
  
                    }  
                    _this.TraySound.play();
                }
                else
                {
                    for(let k= 0; k < _this.remainder; k++)
                    {
                        moveEgg1 = _this.add.sprite(_this.placeEggX[tween_LoopCount],_this.placeEggY[k], 'Egg');
                        moveEgg1.scale.setTo(0.98);
                        _this.crackeggGroup.addChild(moveEgg1);
                    }   
                    _this.TraySound.play();
                }
            });

            var hatchTime =  650 * tween_LoopCount + 2000;

            _this.time.events.add(hatchTime, function () 
            {
                for(let i=0;i<_this.crackeggGroup.length;i++)
                {
                    _this.eggfinal = _this.crackeggGroup.getChildAt(i).frame=1;
                }
                _this.playEggCrack();
                
                _this.time.events.add(1000, function () 
                {
                    //if(_this.currentFactorIndx == _this.factors_index-1)
                    if(_this.currentFactorIndx == _this.factors_index)
                    {
                        _this.eraser.inputEnabled = false;

                        _this.thumsUp=_this.add.sprite(780,370,'Thumsup');
                        _this.thumsDown=_this.add.sprite(858,370,'Thumsdown');

                        _this.eraser.frame = 0;
                        _this.eraser.inputEnabled = false;
                        _this.thumsUpDownEnable();

                        _this.eraser.frame = 0;
                        _this.eraser.inputEnabled = false;
                        _this.Ask_Question();
                        _this.Question_flag=1;
                    }

                    else if(_this.currentFactorIndx < 5)
                    {
                        _this.currentFactorBox.frame = 2;
//                        _this.eraser.frame=1;
//                        _this.eraser.inputEnabled = true;
//                        _this.eraser.input.useHandCursor = true;

                        _this.time.events.add(1000, function ()
                        {
                            _this.eraserClicked();
                        });
                        //_this.eraser.events.onInputDown.add(_this.eraserClicked,_this.eraser);
                    }
                    else
                    {
                        _this.eraser.frame=0;
                        _this.eraser.inputEnabled = false;
                    }
                });
            });
        }
        else if (_this.remainder == 0)
        {
            _this.time.events.add(650 * tween_LoopCount + 1750, function () 
            {
                _this.eraser.inputEnabled = false;

                for(i=0;i<_this.factorGroup.length;i++)
                {
                    if(i == _this.currentFactorIndx)
                    {
                        _this.factorGroup.getChildAt(_this.currentFactorIndx).frame=1;
                    }
                    else
                    {
                        _this.factorGroup.getChildAt(i).frame=2;
                    }
                }

                _this.currentFactorBox.inputEnabled = false;

                _this.thumsUp=_this.add.sprite(780,370,'Thumsup');
                _this.thumsDown=_this.add.sprite(858,370,'Thumsdown');

                _this.eraser.frame = 0;
                _this.eraser.inputEnabled = false;
                _this.thumsUpDownEnable();



                _this.eraser.frame = 0;
                _this.eraser.inputEnabled = false;
                _this.Ask_Question(); // ask question is it prime or not
                _this.Question_flag=1;
             });
        }
    },

    playEggCrack : function()
    {
            _this.stopVoice(); 
            _this.Question = document.createElement('audio');
            _this.Questionsrc = document.createElement('source');
            _this.Questionsrc.setAttribute("src", "sounds/egg_cracking.wav");
            _this.Question.appendChild(_this.Questionsrc);
            
            _this.Question.play();
    },

    TweenApple: function () 
    {
        var tween_LoopCount = 0;
        
        tween_LoopCount = Math.floor(_this.element / _this.factors[_this.currentFactorIndx]);

        _this.eraser.inputEnabled = false;

        if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
        {
            for (let i = 0; i < tween_LoopCount; i++) 
            {
                _this.time.events.add(650 * i, function () 
                {
                    for(let j=0; j<_this.factors[_this.currentFactorIndx];j++)
                    {
                        moveApple1 = _this.add.sprite(_this.placeAppleX[j],_this.placeAppleY[i], 'Apple');
                        moveApple1.scale.setTo(1.10);
                        _this.appleGroup.addChild(moveApple1);   
                    }
                    _this.TraySound.play();
                
                });
            }
        }
        else
        {
            for (let i = 0; i < tween_LoopCount; i++) 
            {
                _this.time.events.add(650 * i, function () 
                {
                    for(let j=0; j<_this.factors[_this.currentFactorIndx];j++)
                    {
                        moveApple1 = _this.add.sprite(_this.placeAppleX[i],_this.placeAppleY[j], 'Apple');
                        moveApple1.scale.setTo(1.10);
                        _this.appleGroup.addChild(moveApple1);   
                    }
                    _this.TraySound.play();
                });
            }
        }

        _this.time.events.add(650 * tween_LoopCount+ 500, function () 
        {
            _this.time.events.add(1000, function ()
            {
                for(p=0;p<_this.appleGroup.length;p++)
                {
                    _this.purpleEgg=_this.appleGroup.getChildAt(p).frame=2; 

                }
            });
            
            if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
            {
                _this.ShowRectangleOnCounters1();
            }
            else
            {
                _this.ShowRectangleOnCounters();
            }
        });
   
        //* move the last remainder eggs
        _this.remainder = _this.element % _this.factors[_this.currentFactorIndx];

        if ( _this.remainder!= 0) 
        {
            _this.time.events.add(650 * tween_LoopCount + 375, function () 
            {
                if(_this.factors[_this.currentFactorIndx] == 11 || _this.factors[_this.currentFactorIndx] == 13)
                {
                    for(let k= 0; k < _this.remainder; k++)
                    {
                        moveApple1 = _this.add.sprite(_this.placeAppleX[k],_this.placeAppleY[tween_LoopCount], 'Apple');
                        moveApple1.scale.setTo(1.10);
                        _this.sliceappleGroup.addChild(moveApple1);
                    } 
                    _this.TraySound.play();
                }
                else
                {
                    for(let k= 0; k < _this.remainder; k++)
                    {
                        moveApple1 = _this.add.sprite(_this.placeAppleX[tween_LoopCount],_this.placeAppleY[k], 'Apple');
                        moveApple1.scale.setTo(1.10);
                        _this.sliceappleGroup.addChild(moveApple1);
                    }   
                    _this.TraySound.play();
                }
            });

            var hatchTime = 650 * tween_LoopCount + 2000;

            _this.time.events.add(hatchTime, function () 
            {

                for(let i=0;i<_this.sliceappleGroup.length;i++)
                {
                    _this.applefinal = _this.sliceappleGroup.getChildAt(i).frame=1;
                }

                _this.AppleSlice.play();

                _this.time.events.add(1000, function () 
                {

                    //if(_this.currentFactorIndx == _this.factors_index-1)
                    if(_this.currentFactorIndx == _this.factors_index)
                    {
                        _this.eraser.inputEnabled = false;

                        _this.thumsUp=_this.add.sprite(780,370,'Thumsup');
                        _this.thumsDown=_this.add.sprite(858,370,'Thumsdown');

                        _this.eraser.frame = 0;
                        _this.eraser.inputEnabled = false;
                        _this.thumsUpDownEnable();

                        _this.eraser.frame = 0;
                        _this.eraser.inputEnabled = false;
                        _this.Ask_Question();
                        _this.Question_flag=1;
                    }

                    else if(_this.currentFactorIndx < 5)
                    {
                        _this.currentFactorBox.frame = 2;
    //                    _this.eraser.frame=1;
    //                    _this.eraser.inputEnabled = true;
    //                    _this.eraser.input.useHandCursor = true;

                        _this.time.events.add(1000, function ()
                        {
                            _this.eraserClicked();
                        });

    //                    _this.eraser.events.onInputDown.add(_this.eraserClicked,_this.eraser);
                    }
                    else
                    {
                        _this.eraser.frame=0;
                        _this.eraser.inputEnabled = false;
                    }
                });
            });
            //******* the last odd egg should hatch next
        }
        
        else if(_this.remainder == 0)
        {
            _this.time.events.add(650 * tween_LoopCount + 1750, function () 
            {
                _this.eraser.inputEnabled = false;

                for(i=0;i<_this.factorGroup.length;i++)
                {
                    if(i == _this.currentFactorIndx)
                    {
                        _this.factorGroup.getChildAt(_this.currentFactorIndx).frame=1;
                    }
                    else
                    {
                        _this.factorGroup.getChildAt(i).frame=2;
                    }
                }
                _this.currentFactorBox.inputEnabled = false;


                _this.thumsUp=_this.add.sprite(780,370,'Thumsup');
                _this.thumsDown=_this.add.sprite(858,370,'Thumsdown');

                _this.eraser.frame = 0;
                _this.eraser.inputEnabled = false;
                _this.thumsUpDownEnable();

                _this.eraser.frame = 0;
                _this.eraser.inputEnabled = false;
                _this.Ask_Question(); // ask question is it prime or not
                _this.Question_flag=1;
            });
        }
    },

    eraserClicked: function(eraser)
    {
        _this.eggorappletray.destroy();

        if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
        {
            _this.initialTray=_this.add.image(83,80,'EggTray');
        }
        else
        {
            _this.initialTray=_this.add.image(83,80,'AppleTray');
        }
       
        _this.currentFactorBox.frame=2;
        _this.currentFactorBox.inputEnabled = false;
        _this.currentFactorIndx+=1;

        _this.eggGroup.destroy();
        _this.appleGroup.destroy();
        _this.checkPrime();

        _this.eraser.frame = 0;
        _this.eraser.inputEnabled = false;
    },

    thumsUpDownEnable : function()
    {
        _this.thumsUp.inputEnabled = true;
        _this.thumsUp.name = "1";
        _this.thumsUp.input.useHandCursor = true;
        _this.thumsUp.events.onInputDown.add(_this.thumsUpClicked,_this.thumsUp);

        _this.thumsDown.inputEnabled = true;
        _this.thumsDown.name = "2";
        _this.thumsDown.input.useHandCursor = true;
        _this.thumsDown.events.onInputDown.add(_this.thumsDownClicked,_this.thumsDown);
    },

    rightbtnEnable :function()
    {
        _this.rightbtn.visible =true;
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked,_this.rightbtn);
    },

    thumsUpClicked: function(target)
    {
        _this.thumsUp.frame = 1;
        _this.thumsDown.frame = 0;
        _this.selectedAns = target.name;
        _this.rightbtnEnable();
    },

    thumsDownClicked: function(target)
    {
        _this.thumsDown.frame = 1;
        _this.thumsUp.frame = 0;
        _this.selectedAns = target.name;
        _this.rightbtnEnable();
    },

    primeEvaluation: function()
    {
        if(_this.element % 2 == 0)
        {
            _this.evaluatedAns = 2; //composite 
            console.log("Composite");
            console.log(_this.evaluatedAns);
        }
        else
        {
            for(i=0;i<=_this.factors_index;i++)
            {
                if(_this.element % _this.factors[i] == 0)
                {
                    _this.evaluatedAns = 2;
                    console.log("Composite");
                    console.log( _this.evaluatedAns);
                    break;
                }
                _this.evaluatedAns = 1;//prime
            }
        }
    },

    rightbtnClicked: function()
    {

        _this.noofAttempts++;
        //_this.rightbtn.visible = false;
        _this.rightbtn.events.onInputDown.removeAll();
        _this.thumsDown.events.onInputDown.removeAll();
        _this.thumsUp.events.onInputDown.removeAll();

        _this.primeEvaluation();
        
        if(_this.isitPrimeComposite[_this.primecompIndex] == 1) //check asked question is isitprime or composite
        {
            if(_this.evaluatedAns == 1 && _this.selectedAns == 1) //check if the given number is prime & selected ans is thums up
            {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.time.events.add(500,function(){
                    _this.starActions();
                });

            }
            else if(_this.evaluatedAns == 1 && _this.selectedAns == 2)
            {
                _this.wrongAnswer();

            }
            else if(_this.evaluatedAns == 2 && _this.selectedAns == 1)
            {
                _this.wrongAnswer();

            }
            else
            {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.time.events.add(500,function(){
                    _this.starActions();
                });
               
            }
        }
        else
        {
            if(_this.evaluatedAns == 2 && _this.selectedAns == 1) //check if the given number is composite & selected ans is thums down
            {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.time.events.add(500,function(){
                    _this.starActions();
                });
               
            }
            else if(_this.evaluatedAns == 1 && _this.selectedAns == 1)
            {
                _this.wrongAnswer();

            }
            else if(_this.evaluatedAns == 2 && _this.selectedAns == 2)
            {

                _this.wrongAnswer();

            }
            else
            {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.time.events.add(500,function(){
                    _this.starActions();
                });
               
            }
        }

    },
       
    celebration: function()
    {
        
        if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
        {
            for(p=0;p<_this.eggGroup.length;p++)
            {
                _this.eggGroup.getChildAt(p).frame=1;  
                
            }
            _this.playEggCrack();
        }
        else
        {
            for(p=0;p<_this.appleGroup.length;p++)
            {
                _this.appleGroup.getChildAt(p).frame=1;
                    
            }
            _this.AppleSlice.play();
        }

        _this.time.events.add(500,function(){
            
            _this.celebrationSound.play();
        });

           
        _this.thumsUp.frame = 0;
        _this.thumsDown.frame = 0;
        _this.currentFactorBox.frame=0;
        _this.currentFactorIndx=0;         

        if(_this.count1 < 5)
        {
            _this.prmcompindex++;
            _this.elementindex++;

            if(_this.eggappleindex == 0)
            {
                _this.eggappleindex++;
            }
            else
            {
                _this.eggappleindex = 0;
            }

            _this.time.events.add(2000,function()
            {
                 rect.visible = false;
                _this.initialTray.destroy();
                _this.eggorappletray.destroy();
                _this.eggGroup.destroy();
                _this.crackeggGroup.destroy();
                _this.appleGroup.destroy();
                _this.sliceappleGroup.destroy();

                _this.Txt.destroy();
                _this.eraser.destroy(); 
                _this.thumsUp.destroy();
                _this.thumsDown.destroy();

                _this.rightbtn.visible=false;

                _this.redBox.destroy();
                _this.mainBox.destroy();

                _this.factorGroup.destroy();
                _this.factorNumGroup.destroy();

            });

            _this.time.events.add(3000,function()
            { 
                _this.count1++;
                _this.gotoPrimeNumber(); 

            });

        }
        else
        {
            _this.time.events.add(2000,function()
            { 
                _this.initialTray.destroy();
                _this.eggorappletray.destroy();
                _this.eggGroup.destroy();
                _this.crackeggGroup.destroy();
                _this.appleGroup.destroy();
                _this.sliceappleGroup.destroy();

                _this.Txt.destroy();
                _this.eraser.destroy(); 
                _this.thumsUp.destroy();
                _this.thumsDown.destroy();

                _this.rightbtn.visible=false;

                _this.redBox.destroy();
                _this.mainBox.destroy();

                _this.factorGroup.destroy();
                _this.factorNumGroup.destroy();

                _this.timer1.stop();
                _this.timer1=null;
                //_this.time.events.add(2000,function(){ window.parent.location.reload();});
                _this.time.events.add(1900,function()
                { 
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                   // _this.state.start('score');
                   _this.state.start('score',true,false,gameID,_this.microConcepts);
                });
            });
        }
    },

    wrongAnswer:function(){

        _this.wrongSound.play();
      
        _this.currentFactorBox.frame=1;
        _this.currentFactorBox.inputEnabled = true;
        _this.currentFactorBox.input.useHandCursor = true;
        _this.thumsUp.destroy();
        _this.thumsDown.destroy();
        
        _this.rightbtn.visible=false;

        _this.eggorappletray.destroy(); 
        _this.appleGroup.destroy();
        _this.eggGroup.destroy();
        _this.crackeggGroup.destroy();
        _this.sliceappleGroup.destroy();

        if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
        {
            _this.initialTray=_this.add.image(83,80,'EggTray');
        }
        else
        {
            _this.initialTray=_this.add.image(83,80,'AppleTray');
        }
        
        //_this.checkPrime();
        //_this. Ask_HowManyLines();
        _this.Question_flag = 0;
    },
    
	 
    truncateTray:function()
    {
	  _this.initialTray.destroy();

      if(_this.egg_or_appleArray [_this.eggappleindex] == 1)
      {
            switch(_this.factors[_this.currentFactorIndx])
            {

                case 2  : _this.eggorappletray= _this.add.image(83,85,'2x16EggTray');//change based on egg or apples
                        break;

                case 3  : _this.eggorappletray= _this.add.image(88,85,'3x16EggTray');
                        break;

                case 5  : _this.eggorappletray=_this.add.image(84,85,'5x16EggTray');
                        break;

                case 7  : _this.eggorappletray=_this.add.image(85,85,'7x16EggTray');
                        break;

                case 11 : _this.eggorappletray=_this.add.image(88,89,'10x11EggTray');
                        break;

                case 13 : _this.eggorappletray=_this.add.image(88,89,'10x13EggTray');
                        break;
            }
      }

      else
      {
            switch(_this.factors[_this.currentFactorIndx])
            {
                case 2  : _this.eggorappletray= _this.add.image(83,85,'2x16AppleTray');//change based on egg or apples
                          break;

                case 3  : _this.eggorappletray= _this.add.image(84,87,'3x16AppleTray');
                          break;

                case 5  : _this.eggorappletray=_this.add.image(82,87,'5x16AppleTray');
                          break;

                case 7  : _this.eggorappletray=_this.add.image(84,88,'7x16AppleTray');
                          break;

                case 11 : _this.eggorappletray=_this.add.image(84,89,'10x11AppleTray');
                          break;

                case 13 : _this.eggorappletray=_this.add.image(84,89,'10x13AppleTray');
                          break;
            }
      }
    },


    ShowRectangleOnCounters: function()
    {
        graphics = _this.add.graphics(100, 100);
        graphics.bringToTop = true;
        //_this.graphics.beginFill(0xFF3300);
        graphics.lineStyle(3, 0xffd900, 1);

        // factor = Math.floor(_this.Big_Num/_this.Small_Num);

        rect_width = Math.floor(_this.element / _this.factors[_this.currentFactorIndx]);

        rect = graphics.drawRect(-3, 0, rect_width*38.09,_this.factors[_this.currentFactorIndx]*38.5,  '#FF0000' );

        //_this.rect.anchor.setTo(0.5);

        rect.visible = true;
        rect.bringToTop = true;

//        _this.time.events.add(500,function()
//        {
//            rect.visible = false;
//        });
//
//        _this.time.events.add(1000,function()
//        {
//            rect.visible = true;
//        });
//
//        _this.time.events.add(1500,function()
//        {
//            rect.visible = false;
//        });
//
//        _this.time.events.add(2000,function()
//        {
//            rect.visible = true;
//        });

        _this.time.events.add(5000,function()
        {
            rect.visible = false;
        });
    },

    ShowRectangleOnCounters1: function()
    {
        graphics = _this.add.graphics(100, 100);
        graphics.bringToTop = true;
        //_this.graphics.beginFill(0xFF3300);
        graphics.lineStyle(3, 0xffd900, 1);

        // factor = Math.floor(_this.Big_Num/_this.Small_Num);

        rect_width = Math.floor(_this.element / _this.factors[_this.currentFactorIndx]);

        rect = graphics.drawRect(-3, 0, _this.factors[_this.currentFactorIndx]*38.5,rect_width*38.09,  '#FF0000' );
        //_this.rect.anchor.setTo(0.5);

        rect.visible = true;
        rect.bringToTop = true;

//        _this.time.events.add(500,function()
//        {
//            rect.visible = false;
//        });
//
//        _this.time.events.add(1000,function()
//        {
//            rect.visible = true;
//        });
//
//        _this.time.events.add(1500,function()
//        {
//            rect.visible = false;
//        });
//
//        _this.time.events.add(2000,function()
//        {
//            rect.visible = true;
//        });

        _this.time.events.add(5000,function()
        {
            rect.visible = false;
        });
    },
   
    starActions : function()
    {
        _this.score++;  
        console.log('the count1 is: '+ _this.count1);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_PRM_1_G6";
        // // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
         _this.microConcepts = "Number Systems";
        _this.anim.play();

    },
    
    shutdown:function()
    {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },    
}
    

    
