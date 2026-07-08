Game.fraction_NSFG_3_1level1=function(){};


Game.fraction_NSFG_3_1level1.prototype={

    init:function(param,score)
    {
        _this = this;

//        _this.gameid = "1.1B";

        this.Stararr = param;
		this.score = score;
		if(window.quizQuest == false)
			this.score =parseInt(window.score);			  

        telInitializer2.gameIdInit2("NSFG3.1");
    },

    preload:function(game){
        if(!window.grade1NSFG3_1){

            window.grade1NSFG3_1 = true;

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

        _this.load.image('Level13A_background',window.baseUrl+'assets/gradeAssets/1.3A/bg.png');
        
        _this.load.atlas('Level13A_flagmain11', window.baseUrl+'assets/gradeAssets/1.3A/m1.png', window.baseUrl+'json/gradeJson/1.3A/m1.json');
        _this.load.image('Level13A_Ans1',window.baseUrl+'assets/gradeAssets/1.3A/o11.png');
        _this.load.image('Level13A_Ans2',window.baseUrl+'assets/gradeAssets/1.3A/o12.png');
        _this.load.image('Level13A_Ans3',window.baseUrl+'assets/gradeAssets/1.3A/o13.png');

        /*_this.load.atlas('Level13A_flagmain12', window.baseUrl+'assets/gradeAssets/1.3A/m2.png', window.baseUrl+'json/gradeJson/1.3A/m2.json');
        _this.load.image('Level13A_Ans21',window.baseUrl+'assets/gradeAssets/1.3A/o21.png');
        _this.load.image('Level13A_Ans22',window.baseUrl+'assets/gradeAssets/1.3A/o22.png');
        _this.load.image('Level13A_Ans23',window.baseUrl+'assets/gradeAssets/1.3A/o23.png');

        _this.load.atlas('Level13A_flagmain31', window.baseUrl+'assets/gradeAssets/1.3A/m3.png', window.baseUrl+'json/gradeJson/1.3A/m3.json');
        _this.load.image('Level13A_Ans31',window.baseUrl+'assets/gradeAssets/1.3A/o31.png');
        _this.load.image('Level13A_Ans32',window.baseUrl+'assets/gradeAssets/1.3A/o32.png');
        _this.load.image('Level13A_Ans33',window.baseUrl+'assets/gradeAssets/1.3A/o33.png');*/

        _this.load.atlas('Level13A_flagmain41', window.baseUrl+'assets/gradeAssets/1.3A/m4.png', window.baseUrl+'json/gradeJson/1.3A/m4.json');
        _this.load.image('Level13A_Ans41',window.baseUrl+'assets/gradeAssets/1.3A/o41.png');
        _this.load.image('Level13A_Ans42',window.baseUrl+'assets/gradeAssets/1.3A/o42.png');
        _this.load.image('Level13A_Ans43',window.baseUrl+'assets/gradeAssets/1.3A/o43.png');

        _this.load.atlas('Level13A_flagmain51', window.baseUrl+'assets/gradeAssets/1.3A/m5.png', window.baseUrl+'json/gradeJson/1.3A/m5.json');
        _this.load.image('Level13A_Ans51',window.baseUrl+'assets/gradeAssets/1.3A/o51.png');
        _this.load.image('Level13A_Ans52',window.baseUrl+'assets/gradeAssets/1.3A/o52.png');
        _this.load.image('Level13A_Ans53',window.baseUrl+'assets/gradeAssets/1.3A/o53.png');

        /*_this.load.atlas('Level13A_flagmain61', window.baseUrl+'assets/gradeAssets/1.3A/m6.png', window.baseUrl+'json/gradeJson/1.3A/m6.json');
        _this.load.image('Level13A_Ans61',window.baseUrl+'assets/gradeAssets/1.3A/o61.png');
        _this.load.image('Level13A_Ans62',window.baseUrl+'assets/gradeAssets/1.3A/o62.png');
        _this.load.image('Level13A_Ans63',window.baseUrl+'assets/gradeAssets/1.3A/o63.png');*/
        
        _this.load.atlas('Level13A_flagmain71', window.baseUrl+'assets/gradeAssets/1.3A/m7.png', window.baseUrl+'json/gradeJson/1.3A/m7.json');
        _this.load.image('Level13A_Ans71',window.baseUrl+'assets/gradeAssets/1.3A/o71.png');
        _this.load.image('Level13A_Ans72',window.baseUrl+'assets/gradeAssets/1.3A/o72.png');
        _this.load.image('Level13A_Ans73',window.baseUrl+'assets/gradeAssets/1.3A/o73.png');

        _this.load.image('Level13B_background',window.baseUrl+'assets/gradeAssets/1.3B/bg.png');
        
        _this.load.atlas('Level13B_flagmain11', window.baseUrl+'assets/gradeAssets/1.3B/m1.png', window.baseUrl+'json/gradeJson/1.3B/m1.json');
        _this.load.image('Level13B_Ans1',window.baseUrl+'assets/gradeAssets/1.3B/o11.png');
        _this.load.image('Level13B_Ans2',window.baseUrl+'assets/gradeAssets/1.3B/o12.png');
        _this.load.image('Level13B_Ans3',window.baseUrl+'assets/gradeAssets/1.3B/o13.png');

        _this.load.atlas('Level13B_flagmain12', window.baseUrl+'assets/gradeAssets/1.3B/m2.png', window.baseUrl+'json/gradeJson/1.3B/m2.json');
        _this.load.image('Level13B_Ans21',window.baseUrl+'assets/gradeAssets/1.3B/o21.png');
        _this.load.image('Level13B_Ans22',window.baseUrl+'assets/gradeAssets/1.3B/o22.png');
        _this.load.image('Level13B_Ans23',window.baseUrl+'assets/gradeAssets/1.3B/o23.png');

        _this.load.atlas('Level13B_flagmain31', window.baseUrl+'assets/gradeAssets/1.3B/m3.png', window.baseUrl+'json/gradeJson/1.3B/m3.json');
        _this.load.image('Level13B_Ans31',window.baseUrl+'assets/gradeAssets/1.3B/o31.png');
        _this.load.image('Level13B_Ans32',window.baseUrl+'assets/gradeAssets/1.3B/o32.png');
        _this.load.image('Level13B_Ans33',window.baseUrl+'assets/gradeAssets/1.3B/o33.png');

        _this.load.atlas('Level13B_flagmain41', window.baseUrl+'assets/gradeAssets/1.3B/m4.png', window.baseUrl+'json/gradeJson/1.3B/m4.json');
        _this.load.image('Level13B_Ans41',window.baseUrl+'assets/gradeAssets/1.3B/o41.png');
        _this.load.image('Level13B_Ans42',window.baseUrl+'assets/gradeAssets/1.3B/o42.png');

        _this.load.atlas('Level13B_flagmain51', window.baseUrl+'assets/gradeAssets/1.3B/m5.png', window.baseUrl+'json/gradeJson/1.3B/m5.json');
        _this.load.image('Level13B_Ans51',window.baseUrl+'assets/gradeAssets/1.3B/o51.png');
        _this.load.image('Level13B_Ans52',window.baseUrl+'assets/gradeAssets/1.3B/o52.png');
        _this.load.image('Level13B_Ans53',window.baseUrl+'assets/gradeAssets/1.3B/o53.png');

        _this.load.atlas('Level13B_flagmain61', window.baseUrl+'assets/gradeAssets/1.3B/m6.png', window.baseUrl+'json/gradeJson/1.3B/m6.json');
        _this.load.image('Level13B_Ans61',window.baseUrl+'assets/gradeAssets/1.3B/o61.png');
        _this.load.image('Level13B_Ans62',window.baseUrl+'assets/gradeAssets/1.3B/o62.png');
        _this.load.image('Level13B_Ans63',window.baseUrl+'assets/gradeAssets/1.3B/o63.png');
        
        _this.load.atlas('Level13B_flagmain71', window.baseUrl+'assets/gradeAssets/1.3B/m7.png', window.baseUrl+'json/gradeJson/1.3B/m7.json');
        
        _this.load.atlas('Level13B_flagmain81', window.baseUrl+'assets/gradeAssets/1.3B/m8.png', window.baseUrl+'json/gradeJson/1.3B/m8.json');
        _this.load.image('Level13B_Ans81',window.baseUrl+'assets/gradeAssets/1.3B/o81.png');
        _this.load.image('Level13B_Ans82',window.baseUrl+'assets/gradeAssets/1.3B/o82.png');
        _this.load.image('Level13B_Ans83',window.baseUrl+'assets/gradeAssets/1.3B/o83.png');
        
        _this.load.atlas('Level13B_flagmain91', window.baseUrl+'assets/gradeAssets/1.3B/m9.png', window.baseUrl+'json/gradeJson/1.3B/m9.json');
        _this.load.image('Level13B_Ans91',window.baseUrl+'assets/gradeAssets/1.3B/o91.png');
        _this.load.image('Level13B_Ans92',window.baseUrl+'assets/gradeAssets/1.3B/o92.png');
        _this.load.image('Level13B_Ans93',window.baseUrl+'assets/gradeAssets/1.3B/o93.png');
        
        _this.load.atlas('Level13B_flagmain91', window.baseUrl+'assets/gradeAssets/1.3B/m9.png', window.baseUrl+'json/gradeJson/1.3B/m9.json');
        
        _this.load.atlas('Level13B_flagmain10_1', window.baseUrl+'assets/gradeAssets/1.3B/m10.png', window.baseUrl+'json/gradeJson/1.3B/m10.json');
        _this.load.image('Level13B_Ans10_1',window.baseUrl+'assets/gradeAssets/1.3B/o101.png');
        _this.load.image('Level13B_Ans10_2',window.baseUrl+'assets/gradeAssets/1.3B/o102.png');
        _this.load.image('Level13B_Ans10_3',window.baseUrl+'assets/gradeAssets/1.3B/o103.png');
        
        _this.load.atlas('Level13B_flagmain11_1', window.baseUrl+'assets/gradeAssets/1.3B/m11.png', window.baseUrl+'json/gradeJson/1.3B/m11.json');
        _this.load.image('Level13B_Ans11_1',window.baseUrl+'assets/gradeAssets/1.3B/o111.png');
        _this.load.image('Level13B_Ans11_2',window.baseUrl+'assets/gradeAssets/1.3B/o101.png');
        _this.load.image('Level13B_Ans11_3',window.baseUrl+'assets/gradeAssets/1.3B/o113.png');
       

    }

    },


    create:function(game){
        _this = this;
        _this.Stararr = [];
        _this.amplify = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.opt1X=0;
        _this.opt1Y=0;
        _this.opt2X=0;
        _this.opt2Y=0;
        _this.opt3X=0;
        _this.opt3Y=0;
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6,7,8,9];
        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg2');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/English/1.1A2.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Hindi/1.1A2.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Kannada/1.1A2.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl = window.baseUrl+"questionSounds/Gujarati/1.1B/1.1A2.mp3";
        }
		else if(window.languageSelected == "Marathi")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/1.1B/Marathi/1.1A2.mp3";
		}
		else if(window.languageSelected == "Telugu")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/1.1B/telugu/1.1A2.mp3";
		}
		else if(window.languageSelected == "Tamil")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/1.1B/Tamil/1.1A2.mp3";
		}
		else if(window.languageSelected == "Urdu")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/1.1B/Urdu/1.1A2.mp3";
		}
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Odiya/1.1A2.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense5");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSFG3.1','level1',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

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

    getQuestion:function(target1)
    {

        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];

        switch(_this.qArray[_this.no11])

        {
            case 1:
            case 2:
            case 9:
                _this.questionid = 1;
                _this.obj1Array = ['Level13A_flagmain11',230,290,"Level13A_MainCircle"];
                _this.obj2Array = ['Level13A_Ans1',600,250,"Level13A_CircleCorrectMissingPiece"];
                _this.obj3Array = ['Level13A_Ans2',730,360,"Level13A_CircleWrongMissingPiece"];//640,370
                _this.obj4Array = ['Level13A_Ans3',760,190,"Level13A_CircleWrongMissingPiece"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                break;
            case 3:
            case 4:
                _this.questionid = 1;
                _this.obj1Array = ['Level13A_flagmain41',230,290,"Level13A_MainCircle"];
                _this.obj2Array = ['Level13A_Ans41',610,220,"Level13A_CircleWrongMissingPiece"];
                _this.obj3Array = ['Level13A_Ans43',780,225,"Level13A_CircleCorrectMissingPiece"];
                _this.obj4Array = ['Level13A_Ans42',690,390,"Level13A_CircleWrongMissingPiece"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                break;
            case 5: 
            case 6:
                _this.questionid = 1;
                _this.obj1Array = ['Level13A_flagmain51',230,290,"Level13A_MainCircle"];
                _this.obj2Array = ['Level13A_Ans52',630,220,"Level13A_CircleWrongMissingPiece"];
                _this.obj3Array = ['Level13A_Ans53',800,220,"Level13A_CircleWrongMissingPiece"];
                _this.obj4Array = ['Level13A_Ans51',730,400,"Level13A_CircleCorrectMissingPiece"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                break;   
            case 7:
            case 8:
                _this.questionid = 1;
                _this.obj1Array = ['Level13A_flagmain71',230,290,"Level13A_MainCircle"];
                _this.obj2Array = ['Level13A_Ans72',630,210,"Level13A_CircleWrongMissingPiece"];
                _this.obj3Array = ['Level13A_Ans73',730,400,"Level13A_CircleCorrectMissingPiece"];
                _this.obj4Array = ['Level13A_Ans71',830,220,"Level13A_CircleWrongMissingPiece"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                break;
        }

        telInitializer2.gameQuestionStart(this,_this.questionid);

    },
    gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array){
        // _this.getVoice();
        
        _this.flagGroup1 = _this.add.group();

        _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.b1.anchor.setTo(0.5);
        _this.b1.name = obj1Array[3];
        _this.b1.inputEnabled = true;
        _this.b1.input.useHandCursor = true;

        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5);
        _this.b2.name =  obj2Array[3];
        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;

        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5);
        _this.b3.name = obj3Array[3];
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;  

        _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5);
        _this.b4.name = obj4Array[3];
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;

        if(_this.qArray[_this.no11]==2){
            _this.b1.scale.x*=-1;
            _this.b2.scale.x*=-1;
            _this.b3.scale.x*=-1;
            _this.b4.scale.x*=-1;
        }else if(_this.qArray[_this.no11]==3 || _this.qArray[_this.no11]==9){
            console.log("3rd q");
            _this.b1.scale.y*=-1;
            _this.b2.scale.y*=-1;
            _this.b3.scale.y*=-1;
            _this.b4.scale.y*=-1;
        }else if(_this.qArray[_this.no11]==6){
            console.log("6rd q");
            _this.b1.scale.y*=-1;
            _this.b2.scale.y*=-1;
            _this.b3.scale.y*=-1;
            _this.b4.scale.y*=-1;
        }else if(_this.qArray[_this.no11]==8){
            console.log("3rd q");
            _this.b1.scale.x*=-1;
            _this.b2.scale.x*=-1;
            _this.b3.scale.x*=-1;
            _this.b4.scale.x*=-1;
        }

        _this.addListeners();
        _this.opt1X = _this.b2.x;
        _this.opt1Y = _this.b2.y;

        _this.opt2X = _this.b3.x;
        _this.opt2Y = _this.b3.y;

        _this.opt3X = _this.b4.x;
        _this.opt3Y = _this.b4.y;

        _this.flagGroup1.add(_this.b1);
        _this.flagGroup1.add(_this.b2);
        _this.flagGroup1.add(_this.b3);
        _this.flagGroup1.add(_this.b4);

        _this.flagGroup1.x = 1000;
        var tween = _this.add.tween(_this.flagGroup1);
        tween.to({ x: 0 }, 0,'Linear', true, 0);

        //Disable HINT icon when question tweens at first
        commonNavBar.disableHintIcon();

        tween.onComplete.add(function(){
            _this.timer = _this.time.create(false);
            _this.timer.loop(1000, function(){
                _this.AnsTimerCount++;
            }, _this); 
            _this.timer.start();

            //Enable HINT icon when next question appears
            commonNavBar.enableHintIcon();

        }, _this); 
        commonNavBar.opt1=_this.b2;
        commonNavBar.opt2=_this.b3;
        commonNavBar.opt3=_this.b4;
    },


    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

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

    addQuestion:function(no2)
    {

        _this.time.events.add(900, function(){
            var tween = _this.add.tween(_this.flagGroup1);
            tween.to({ x: -1000 }, 0,'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);
        }, _this);
    },

    update:function(){

    },

    addListeners:function()
    {
        _this.b2.input.enableDrag(true);
        _this.b3.input.enableDrag(true);
        _this.b4.input.enableDrag(true);


        _this.b2.events.onDragStart.add(_this.onDragStart, _this);
        _this.b2.events.onDragStop.add(_this.onDragStop, _this);

        _this.b3.events.onDragStart.add(_this.onDragStart, _this);
        _this.b3.events.onDragStop.add(_this.onDragStop, _this);

        _this.b4.events.onDragStart.add(_this.onDragStart, _this);
        _this.b4.events.onDragStop.add(_this.onDragStop, _this);
    },
    
    removeListeners:function()
    {   
        _this.b2.inputEnabled=false;
        _this.b3.inputEnabled=false;
        _this.b4.inputEnabled=false;
    },


    changeQuestion:function()
    {
        _this.flagGroup1.destroy();
        _this.no11++;
        if(_this.no11 < 4)
        {
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
            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
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
            _this.state.start('fraction_NSFG_3_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
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

    removeCelebration1:function()
    {
        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;
        _this.addQuestion(_this.count);

    },

    correctAns1:function(target)
    {
        telInitializer2.gameCorrectAns();
        _this.timer.stop();
        _this.timer = null;

        _this.noofAttempts++;
        
        _this.AnsTimerCount=0;

        _this.removeListeners();

        _this.anim5 = target.animations.add('playAnim');
        _this.anim5.play();

        _this.celebration1 = true;
       
        this.Stararr.push(3);
        commonNavBar.playCelebrationSound();
        
        _this.time.events.add(500, _this.removeCelebration1, _this);

        var starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();      
        target.events.onInputDown.removeAll();
        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}                      
    },

    wrongAns1:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.noofAttempts++;
        _this.removeListeners();
        _this.shake.shake(10, target);
        _this.Stararr.push(1);
		commonNavBar.playWrongCelebrationSound();
        _this.starsGroup.getChildAt(_this.count).frame = 1;
        _this.time.events.add(500, _this.removeCelebration1, _this);
        target.events.onInputDown.removeAll();
        if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}
    },


    onDragStart:function(target){

        targetCoordinatesX = target.x;
        targetCoordinatesY = target.y;
        commonNavBar.playClickSound();
    },

    onDragStop:function(target){
        
        if (_this.checkOverlap(_this.b1, target))
        {
            if(
                target.name=='Level13A_StarCorrectMissingPiece'
                ||target.name=='Level13A_CircleCorrectMissingPiece'
                ||target.name=='Level13A_OctagonCorrectMissingPiece'
                ||target.name=='Level13A_TriangleCorrectMissingPiece'
                ||target.name=='Level13A_BlueSquareCorrectMissingPiece'
                ||target.name=='Level13A_PirpleSquareCorrectMissingPiece'
            )
            {
                //disable HINT icon after dragging of the Correct shape
                commonNavBar.disableHintIcon();
                
                commonNavBar.playSnapSound();
                target.destroy();
                _this.b1.frame = 1;
                _this.correctAns1(_this.b1);
            }
            else
            {
                //console.log("wrong");
                //disable HINT icon after dragging of the Wrong shape
                commonNavBar.disableHintIcon();
                if(target == _this.b2)
                {
                    target.x = _this.opt1X;
                    target.y = _this.opt1Y;
                }
                else if(target == _this.b3)
                {
                    target.x = _this.opt2X;
                    target.y = _this.opt2Y;
                }
                else if(target == _this.b4)
                {
                    target.x = _this.opt3X;
                    target.y = _this.opt3Y;
                }

                _this.wrongAns1(target);
            }
        }
        else
        {
            if(target == _this.b2)
            {
                target.x = _this.opt1X;
                target.y = _this.opt1Y;
            }
            else if(target == _this.b3)
            {
                target.x = _this.opt2X;
                target.y = _this.opt2Y;
            }
            else if(target == _this.b4)
            {
                target.x = _this.opt3X;
                target.y = _this.opt3Y;
            }
        }

    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },


    getVoice:function()
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');


        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/English/1.1A2.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Hindi/1.1A2.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Kannada/1.1A2.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.1B/1.1A2.mp3");
        }
		else if(window.languageSelected == "Marathi")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Marathi/1.1A2.mp3");
		}
		else if(window.languageSelected == "Telugu")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/telugu/1.1A2.mp3");
		}
		else if(window.languageSelected == "Tamil")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Tamil/1.1A2.mp3");
		}
		else if(window.languageSelected == "Urdu")
		{
			_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Urdu/1.1A2.mp3");
		}
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Odiya/1.1A2.mp3");
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
    }

};