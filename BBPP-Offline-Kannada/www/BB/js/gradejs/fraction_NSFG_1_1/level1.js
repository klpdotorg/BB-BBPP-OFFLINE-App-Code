Game.fraction_NSFG_1_1level1=function(){

};



Game.fraction_NSFG_1_1level1.prototype={
	
	init:function(param,score)
	{
		_this = this;
        this.Stararr = param;
        this.score = score;

        if(window.quizQuest == false)
        this.score =parseInt(window.score);
       
		//telInitializer.gameIdInit("pinwheel1_1A",gradeSelected);
		telInitializer2.gameIdInit2("NSFG1.1");
	},

	preload:function(game){
        if(!window.grade1NSFG1_1){

            window.grade1NSFG1_1 = true;

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

        _this.load.image('grade11_TopBar', window.baseUrl+'assets/gradeAssets/1.1A/grade11_TopBar.png');

		

        _this.load.atlas('flg1o1', window.baseUrl+'assets/gradeAssets/1.1A/flg1o1.png', window.baseUrl+'json/gradeJson/1.1A/flg1o1.json');
        _this.load.image('flg1o2', window.baseUrl+'assets/gradeAssets/1.1A/flg1o2.png');
        _this.load.image('flg1o3', window.baseUrl+'assets/gradeAssets/1.1A/flg1o3.png');
        
        _this.load.atlas('flg2o2', window.baseUrl+'assets/gradeAssets/1.1A/flg2o2.png', window.baseUrl+'json/gradeJson/1.1A/flg2o2.json');
        _this.load.image('flg2o1', window.baseUrl+'assets/gradeAssets/1.1A/flg2o1.png');
        _this.load.image('flg2o3', window.baseUrl+'assets/gradeAssets/1.1A/flg2o3.png');
               
        _this.load.atlas('flg3o3', window.baseUrl+'assets/gradeAssets/1.1A/flg3o3.png', window.baseUrl+'json/gradeJson/1.1A/flg3o3.json');
        _this.load.image('flg3o1', window.baseUrl+'assets/gradeAssets/1.1A/flg3o1.png');
        _this.load.image('flg3o2', window.baseUrl+'assets/gradeAssets/1.1A/flg3o2.png');
                        
        _this.load.atlas('flg4o2', window.baseUrl+'assets/gradeAssets/1.1A/flg4o2.png', window.baseUrl+'json/gradeJson/1.1A/flg4o2.json');
        _this.load.image('flg4o1', window.baseUrl+'assets/gradeAssets/1.1A/flg4o1.png');
        _this.load.image('flg4o3', window.baseUrl+'assets/gradeAssets/1.1A/flg4o3.png');
        
        _this.load.atlas('flg5o1', window.baseUrl+'assets/gradeAssets/1.1A/flg5o1.png', window.baseUrl+'json/gradeJson/1.1A/flg5o1.json');
        _this.load.image('flg5o2', window.baseUrl+'assets/gradeAssets/1.1A/flg5o2.png');
        _this.load.image('flg5o3', window.baseUrl+'assets/gradeAssets/1.1A/flg5o3.png');

        _this.load.atlas('flg6o2', window.baseUrl+'assets/gradeAssets/1.1A/flg6o2.png', window.baseUrl+'json/gradeJson/1.1A/flg6o2.json');
        _this.load.image('flg6o1', window.baseUrl+'assets/gradeAssets/1.1A/flg6o1.png');
        _this.load.image('flg6o3', window.baseUrl+'assets/gradeAssets/1.1A/flg6o3.png');
        
        _this.load.atlas('flg7o3', window.baseUrl+'assets/gradeAssets/1.1A/flg7o3.png', window.baseUrl+'json/gradeJson/1.1A/flg7o3.json');
        _this.load.image('flg7o1', window.baseUrl+'assets/gradeAssets/1.1A/flg7o1.png');
        _this.load.image('flg7o2', window.baseUrl+'assets/gradeAssets/1.1A/flg7o2.png');
        
        _this.load.atlas('flg8o1', window.baseUrl+'assets/gradeAssets/1.1A/flg8o1.png', window.baseUrl+'json/gradeJson/1.1A/flg8o1.json');
        _this.load.image('flg8o2', window.baseUrl+'assets/gradeAssets/1.1A/flg8o2.png');
        _this.load.image('flg8o3', window.baseUrl+'assets/gradeAssets/1.1A/flg8o3.png');
        
        _this.load.atlas('flg9o1', window.baseUrl+'assets/gradeAssets/1.1A/flg9o1.png', window.baseUrl+'json/gradeJson/1.1A/flg9o1.json');
        _this.load.image('flg9o2', window.baseUrl+'assets/gradeAssets/1.1A/flg9o2.png');
        _this.load.image('flg9o3', window.baseUrl+'assets/gradeAssets/1.1A/flg9o3.png');
        
        _this.load.atlas('flg10o1', window.baseUrl+'assets/gradeAssets/1.1A/flg10o1.png', window.baseUrl+'json/gradeJson/1.1A/flg10o1.json');
        _this.load.image('flg10o2', window.baseUrl+'assets/gradeAssets/1.1A/flg10o2.png');
        _this.load.image('flg10o3', window.baseUrl+'assets/gradeAssets/1.1A/flg10o3.png');

        _this.load.atlas('flg11o1', window.baseUrl+'assets/gradeAssets/1.1A/flg11o1.png', window.baseUrl+'json/gradeJson/1.1A/flg11o1.json');
        _this.load.image('flg11o2', window.baseUrl+'assets/gradeAssets/1.1A/flg11o2.png');
        _this.load.image('flg11o3', window.baseUrl+'assets/gradeAssets/1.1A/flg11o3.png');
        
        _this.load.atlas('flg12o3', window.baseUrl+'assets/gradeAssets/1.1A/flg12o3.png', window.baseUrl+'json/gradeJson/1.1A/flg12o3.json');
        _this.load.image('flg12o1', window.baseUrl+'assets/gradeAssets/1.1A/flg12o1.png');
        _this.load.image('flg12o2', window.baseUrl+'assets/gradeAssets/1.1A/flg12o2.png');
        
        _this.load.atlas('flg13o1', window.baseUrl+'assets/gradeAssets/1.1A/flg13o1.png', window.baseUrl+'json/gradeJson/1.1A/flg13o1.json');
        _this.load.image('flg13o2', window.baseUrl+'assets/gradeAssets/1.1A/flg13o2.png');
        _this.load.image('flg13o3', window.baseUrl+'assets/gradeAssets/1.1A/flg13o3.png');
        
        _this.load.atlas('flg14o1', window.baseUrl+'assets/gradeAssets/1.1A/flg14o1.png', window.baseUrl+'json/gradeJson/1.1A/flg14o1.json');
        _this.load.image('flg14o2', window.baseUrl+'assets/gradeAssets/1.1A/flg14o2.png');
        _this.load.image('flg14o3', window.baseUrl+'assets/gradeAssets/1.1A/flg14o3.png');
        
        _this.load.atlas('flg15o1', window.baseUrl+'assets/gradeAssets/1.1A/flg15o1.png', window.baseUrl+'json/gradeJson/1.1A/flg15o1.json');
        _this.load.image('flg15o2', window.baseUrl+'assets/gradeAssets/1.1A/flg15o2.png');
        _this.load.image('flg15o3', window.baseUrl+'assets/gradeAssets/1.1A/flg15o3.png');

        _this.load.image('Level11B_background',window.baseUrl+'assets/gradeAssets/1.1B/bg.png');
        
        _this.load.atlas('Level11B_flagmain11', window.baseUrl+'assets/gradeAssets/1.1B/m1.png', window.baseUrl+'json/gradeJson/1.1B/m1.json');
		_this.load.image('Level11B_Ans1',window.baseUrl+'assets/gradeAssets/1.1B/o11.png');
		_this.load.image('Level11B_Ans2',window.baseUrl+'assets/gradeAssets/1.1B/o12.png');
		_this.load.image('Level11B_Ans3',window.baseUrl+'assets/gradeAssets/1.1B/o13.png');

		_this.load.atlas('Level11B_flagmain12', window.baseUrl+'assets/gradeAssets/1.1B/m2.png', window.baseUrl+'json/gradeJson/1.1B/m2.json');
		_this.load.image('Level11B_Ans21',window.baseUrl+'assets/gradeAssets/1.1B/o21.png');
		_this.load.image('Level11B_Ans22',window.baseUrl+'assets/gradeAssets/1.1B/o22.png');
		_this.load.image('Level11B_Ans32',window.baseUrl+'assets/gradeAssets/1.1B/o23.png');

		_this.load.atlas('Level11B_flagmain41', window.baseUrl+'assets/gradeAssets/1.1B/m4.png', window.baseUrl+'json/gradeJson/1.1B/m4.json');
		_this.load.image('Level11B_Ans41',window.baseUrl+'assets/gradeAssets/1.1B/o41.png');
		_this.load.image('Level11B_Ans42',window.baseUrl+'assets/gradeAssets/1.1B/o42.png');
		_this.load.image('Level11B_Ans43',window.baseUrl+'assets/gradeAssets/1.1B/o43.png');

		_this.load.atlas('Level11B_flagmain61', window.baseUrl+'assets/gradeAssets/1.1B/m6.png', window.baseUrl+'json/gradeJson/1.1B/m6.json');
		_this.load.image('Level11B_Ans61',window.baseUrl+'assets/gradeAssets/1.1B/o61.png');
		_this.load.image('Level11B_Ans62',window.baseUrl+'assets/gradeAssets/1.1B/o62.png');
		_this.load.image('Level11B_Ans63',window.baseUrl+'assets/gradeAssets/1.1B/o63.png');
        
        _this.load.atlas('Level11B_flagmain71', window.baseUrl+'assets/gradeAssets/1.1B/m7.png', window.baseUrl+'json/gradeJson/1.1B/m7.json');
		_this.load.image('Level11B_Ans71',window.baseUrl+'assets/gradeAssets/1.1B/o71.png');
		_this.load.image('Level11B_Ans72',window.baseUrl+'assets/gradeAssets/1.1B/o72.png');
		_this.load.image('Level11B_Ans73',window.baseUrl+'assets/gradeAssets/1.1B/o73.png');
        
        _this.load.atlas('Level11B_flagmain81', window.baseUrl+'assets/gradeAssets/1.1B/m8.png', window.baseUrl+'json/gradeJson/1.1B/m8.json');
		_this.load.image('Level11B_Ans81',window.baseUrl+'assets/gradeAssets/1.1B/o81.png');
		_this.load.image('Level11B_Ans82',window.baseUrl+'assets/gradeAssets/1.1B/o82.png');
		_this.load.image('Level11B_Ans83',window.baseUrl+'assets/gradeAssets/1.1B/o83.png');
        
        _this.load.atlas('Level11B_flagmain10_1', window.baseUrl+'assets/gradeAssets/1.1B/m10.png', window.baseUrl+'json/gradeJson/1.1B/m10.json');
		_this.load.image('Level11B_Ans10_1',window.baseUrl+'assets/gradeAssets/1.1B/o101.png');
		_this.load.image('Level11B_Ans10_2',window.baseUrl+'assets/gradeAssets/1.1B/o102.png');
		_this.load.image('Level11B_Ans10_3',window.baseUrl+'assets/gradeAssets/1.1B/o103.png');
        
        _this.load.atlas('Level11B_flagmain11_1', window.baseUrl+'assets/gradeAssets/1.1B/m11.png', window.baseUrl+'json/gradeJson/1.1B/m11.json');
		_this.load.image('Level11B_Ans11_1',window.baseUrl+'assets/gradeAssets/1.1B/o111.png');
		_this.load.image('Level11B_Ans11_2',window.baseUrl+'assets/gradeAssets/1.1B/o112.png');
		_this.load.image('Level11B_Ans11_3',window.baseUrl+'assets/gradeAssets/1.1B/o113.png');
        
        _this.load.atlas('Level11B_flagmain12_1', window.baseUrl+'assets/gradeAssets/1.1B/m12.png', window.baseUrl+'json/gradeJson/1.1B/m12.json');
		_this.load.image('Level11B_Ans12_1',window.baseUrl+'assets/gradeAssets/1.1B/o121.png');
		_this.load.image('Level11B_Ans12_2',window.baseUrl+'assets/gradeAssets/1.1B/o122.png');
		_this.load.image('Level11B_Ans12_3',window.baseUrl+'assets/gradeAssets/1.1B/o123.png');
        
        _this.load.atlas('Level11B_flagmain13_1', window.baseUrl+'assets/gradeAssets/1.1B/m13.png', window.baseUrl+'json/gradeJson/1.1B/m13.json');
		_this.load.image('Level11B_Ans13_1',window.baseUrl+'assets/gradeAssets/1.1B/o131.png');
		_this.load.image('Level11B_Ans13_2',window.baseUrl+'assets/gradeAssets/1.1B/o132.png');
		_this.load.image('Level11B_Ans13_3',window.baseUrl+'assets/gradeAssets/1.1B/o133.png');
       

    }

    },
	
	create:function(game){
		
		_this.amplify = null;
        _this.Stararr = [];
		_this.questionid = null;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.firstTime = true;
		_this.sceneCount = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
		
		//_this.playQuestionSound = null;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		_this.timer1 = null;
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1A/English/1.1A1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1A/Hindi/1.1A1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1A/Kannada/1.1A1.mp3";
        }
        else if(window.languageSelected == "Gujarati")
		{
			_this.soundurl = window.baseUrl+"questionSounds/Gujarati/1.1A/1.1A1.mp3";
		}
		else if(window.languageSelected == "Marathi")
		{
			_this.soundurl = window.baseUrl+"questionSounds/1.1A/Marathi/1.1A1.mp3";
		}
		else if(window.languageSelected == "Telugu")
		{
			_this.soundurl = window.baseUrl+"questionSounds/1.1A/telugu/1.1A1.mp3";
		}
		else if(window.languageSelected == "Tamil")
		{
			_this.soundurl = window.baseUrl+"questionSounds/1.1A/Tamil/1.1A1.mp3";
		}
		else if(window.languageSelected == "Urdu")
		{
			_this.soundurl = window.baseUrl+"questionSounds/1.1A/Urdu/1.1A1.mp3";
		}
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1A/Odiya/1.1A1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense5");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSFG1.1','level1',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);
		
        _this.generateStarsForTheScene(9);

		_this.getQuestion();
          
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
		}
        _this.starsGroup.getChildAt(0).frame = 2;				
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
        else
        {
        this.minutes =  this.minutes+1;           
        }
    }
    else
    {
        if (_this.counterForTimer < 10)        
            this.seconds = '0' + this.counterForTimer;
        else
            this.seconds = this.counterForTimer;
    }
    this.timeDisplay.setText(_this.minutes+':' + this.seconds);
 
    //timer.setText(minutes + ':'+ seconds );
    },

    getQuestion:function()
    {    
		_this.obj1Array = [];
		_this.obj2Array = [];
		_this.obj3Array = [];
		_this.sceneCount++;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;

        _this.questno=_this.qArrays[_this.no11];
        
        //console.log("questno"+questno);
    	switch(_this.questno)
       {
    		case 1: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg1o1','Level11A_triangleExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg1o2','Level11A_trianglenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg1o3','Level11A_trianglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 2: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg2o1','Level11A_rectanglenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg2o2','Level11A_rectangleExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg2o3','Level11A_rectanglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 3: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg3o1','Level11A_circlenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg3o2','Level11A_circlenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg3o3','Level11A_circleExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 4: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg4o1','Level11A_squarenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg4o2','Level11A_squareExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg4o3','Level11A_squarenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 5: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg5o1','Level11A_triangleExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg5o3','Level11A_trianglenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg5o2','Level11A_trianglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 6: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg6o1','Level11A_rectanglenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg6o2','Level11A_rectangleExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg6o3','Level11A_rectanglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 7: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg7o1','Level11A_circlenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg7o2','Level11A_circlenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg7o3','Level11A_circleExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 8: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg8o1','Level11A_squareExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg8o2','Level11A_squarenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg8o3','Level11A_squarenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 9: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg9o2','Level11A_trianglenotExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg9o3','Level11A_trianglenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg9o1','Level11A_triangleExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 10: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg10o2','Level11A_rectanglenotExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg10o1','Level11A_rectangleExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg10o3','Level11A_rectanglenotExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 11: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg11o2','Level11A_circlenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg11o3','Level11A_circlenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg11o1','Level11A_circleExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 12: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg12o3','Level11A_squareExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg12o1','Level11A_squarenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg12o2','Level11A_squarenotExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 13: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg13o2','Level11A_rectanglenotExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg13o1','Level11A_rectangleExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg13o3','Level11A_rectanglenotExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 14: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg14o2','Level11A_circlenotExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg14o3','Level11A_circlenotExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg14o1','Level11A_circleExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;            
            case 15: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg15o1','Level11A_squareExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg15o2','Level11A_squarenotExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg15o3','Level11A_squarenotExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    	}

    	_this.questionid = 1;
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    gotoFirstQuestion:function(obj1Array,obj2Array,obj3Array){
		
		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();
		
    	//_this.no11++;
		if(_this.firstTime)
		{
			_this.firstTime = false;
			_this.getVoice();
		}
		
    	_this.opt1 = _this.add.sprite(obj1Array[0],obj1Array[1],obj1Array[2]);
    	_this.opt1.anchor.setTo(0.5);
        
		_this.opt1.name = obj1Array[3];
        
    	_this.opt2 = _this.add.sprite(obj2Array[0],obj2Array[1],obj2Array[2]);
    	_this.opt2.anchor.setTo(0.5);
		_this.opt2.name = obj2Array[3];
       
    	_this.opt3 = _this.add.sprite(obj3Array[0],obj3Array[1],obj3Array[2]);
    	_this.opt3.anchor.setTo(0.5);
		_this.opt3.name = obj3Array[3];
        
		_this.flagGroup = _this.add.group();

    	_this.flagGroup.add(_this.opt1);
    	_this.flagGroup.add(_this.opt2);
    	_this.flagGroup.add(_this.opt3);
    	
    	_this.flagGroup.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        //Disable HINT icon when question tweens at first
        commonNavBar.disableHintIcon();
        
        _this.tween.onComplete.add(function(){
			_this.tween = null;
            //Enable HINT icon when question appears
			commonNavBar.enableHintIcon();
			_this.addListeners();
			
     }, _this);  
        commonNavBar.opt1=_this.opt1;
        commonNavBar.opt2=_this.opt2;
        commonNavBar.opt3=_this.opt3;
    },
	
    addListeners:function()
	{
		_this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.checkAns,_this);

		_this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.checkAns,_this);
			
		_this.opt3.inputEnabled = true;
    	_this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.checkAns,_this);
        
	},
	
	removeListeners:function()
	{
		_this.opt1.inputEnabled = false;
		_this.opt1.input.useHandCursor = false;
        _this.opt1.events.onInputDown.removeAll();
			
		_this.opt2.inputEnabled = false;
    	_this.opt2.input.useHandCursor = false;
        _this.opt2.events.onInputDown.removeAll();
			
		_this.opt3.inputEnabled = false;
    	_this.opt3.input.useHandCursor = false;
        _this.opt3.events.onInputDown.removeAll();
	},
	
	removeCelebration:function()
	{
		//_this.count1++;
		if(_this.timer1)
        {
			_this.timer1.stop();
        }
		
		if(_this.no11< 4)
		{
            //console.log("addq");
            //_this.addQuestion(_this.count1);
			
			_this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            
//            commonNavBar.disableHintIcon();
            _this.tween.onComplete.add(function()
            {
				_this.tween = null;
				_this.destroyEverything();
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
              
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;
            }, _this);			
		}
		else
		{
            var timerStopVar = commonNavBar.stopTimer();
			commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            _this.state.start('fraction_NSFG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
		}		
	},
 
	checkAns:function(target)
	{
		commonNavBar.playClickSound();
		
		_this.noofAttempts++;

		//*****************this is called whenever there is a click event on a object******************
		/*_this.currentTime = window.timeSaveFunc();
		_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			}*/ 
			
		//absdsjsapi.saveInteractEvent(_this.interactEvent);
			
		
		if(target.name == "Level11A_triangleExactlyhalfdivided"
			||target.name == "Level11A_rectangleExactlyhalfdivided"
			||target.name == "Level11A_circleExactlyhalfdivided"
			||target.name == "Level11A_squareExactlyhalfdivided"
			||target.name == "Level11A_triangleExactlydivided3parts"
			||target.name == "Level11A_rectangleExactlydivided3parts"
			||target.name == "Level11A_squareExactlydivided3parts"
			||target.name == "Level11A_triangleExactlydivided4parts"
			||target.name == "Level11A_rectangleExactlydivided4parts"
			||target.name == "Level11A_circleExactlydivided4parts"
			||target.name == "Level11A_squareExactlydivided4parts"
			)
		{

			telInitializer2.gameCorrectAns();
            //disable HINT icon after click of the Correct shape
			commonNavBar.disableHintIcon();
            
			_this.removeListeners();
			
			if(_this.timer)
			{
				_this.timer.stop();
				_this.timer = null;
			}


			//*****************this is called whenever the user clicks on the right answer******************
			/*_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "yes",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}
				
			absdsjsapi.saveAssessment(_this.saveAsment);*/


			//telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
			_this.anim = target.animations.add('flag1');
			_this.anim.play();
			_this.anim.onComplete.add(
			function(target)
			{
				target.frame = target.animations.frameTotal-1;
				target.tint = 0xA9A9B8;
				_this.anim = null;
				this.Stararr.push(3);
				commonNavBar.playCelebrationSound();
				
				_this.starAnim = _this.starsGroup.getChildAt(_this.count1);
				_this.anim = _this.starAnim.animations.add('star');
				_this.anim.play();
				_this.anim.onComplete.add(
				function()
				{
					_this.anim = null;
					_this.removeCelebration();
					
				},this);
			},this);
				if(window.quizQuest == true)
			{
				commonNavBar.updateScore(+5);
			}						 
		}
		else
		{
			telInitializer2.gameWrongAns();
            //disable HINT icon after click of the Wrong shape
            commonNavBar.disableHintIcon();
            
            _this.removeListeners();
			target.tint = 0xA9A9A9;
        
			_this.shake.shake(10, target);
			_this.Stararr.push(1);
			commonNavBar.playWrongCelebrationSound();
				//_this.disableListeners();
			target.events.onInputDown.removeAll();
			_this.starsGroup.getChildAt(_this.count1).frame = 1;
			 _this.time.events.add(2000, function(){ _this.removeCelebration();}, _this);
			if(window.quizQuest == true)
				{
					commonNavBar.updateScore(-5);
				}
			/*_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "no",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}
				
			absdsjsapi.saveAssessment(_this.saveAsment);*/
		}
	},

	destroyEverything:function()
	{
		_this.flagGroup.destroy();
		_this.opt1.destroy();
		_this.opt2.destroy();
		_this.opt3.destroy();
		
		_this.flagGroup = null;
		_this.opt1 = null;
		_this.opt2 = null;
		_this.opt3 = null;
	},
	
	getVoice:function()
	{	
		_this.stopVoice();	

		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
	
		if(window.languageSelected == "English")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/English/1.1A1.mp3");
		}
		else if(window.languageSelected == "Hindi")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Hindi/1.1A1.mp3");
		}
		else if(window.languageSelected == "Kannada")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Kannada/1.1A1.mp3");
		}
		else if(window.languageSelected == "Gujarati")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.1A/1.1A1.mp3");
		}
		else if(window.languageSelected == "Marathi")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Marathi/1.1A1.mp3");
		}
		else if(window.languageSelected == "Telugu")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/telugu/1.1A1.mp3");
		}
		else if(window.languageSelected == "Tamil")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Tamil/1.1A1.mp3");
		}
		else if(window.languageSelected == "Urdu")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Urdu/1.1A1.mp3");
		}
		else
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1A/Odiya/1.1A1.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
		}
		
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();

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
		// _timer1.stop();
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
		
		/*//_this.playQuestionSound.remove();
		//_this.src.remove();

		_this.playQuestionSound=null;
		_this.src = null;
		
		
		
		_this.background = null;
		_this.tween = null;
		_this.time.events.removeAll();
		_this.playQuestionSound = null;
		_this.celebrationSound = null;
		_this.clickSound = null;
				
		
		_this.noofAttempts = null;
		_this.AnsTimerCount = null;
		_this.firstTime = null;
		
		_this.shake = null;
		
        _this.rightCount = null;
        _this.no11 = null;
        _this.rno11 = null;
        _this.vno11 = null;
        _this.no22 = null;
        _this.count=null;
        _this.count1=null;
        _this.celebration= null;
		
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArrays = null;
        _this.qArrays1 = null;
        _this.qArrays2 = null;
        

      
        _this.background = null;
		
		_this.backbtn.events.onInputDown.removeAll();
		_this.backbtn = null;
		
		_this.speakerbtn.events.onInputDown.removeAll();
		_this.speakerbtn = null;
		
		_this.obj1Array = null;
		_this.obj1Array = null;
		_this.obj1Array = null;
		
		_this.opt1.inputEnabled = false;
		_this.opt1.events.onInputDown.removeAll();
        _this.opt1 = null;
			
		_this.opt2.inputEnabled = false;
    	_this.opt2.events.onInputDown.removeAll();
        _this.opt2 = null;
			
		_this.opt3.inputEnabled = false;
    	_this.opt3.events.onInputDown.removeAll();
        _this.opt3 = null;

        _this.world.removeAll();
		
		_this = null;*/
	}

	
	
};