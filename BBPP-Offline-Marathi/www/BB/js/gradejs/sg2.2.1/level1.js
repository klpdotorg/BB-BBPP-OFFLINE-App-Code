Game.sg2_2_1level1=function(){};


Game.sg2_2_1level1.prototype={

    init:function(param,score)
    {
        _this = this;

        //        _this.gameid = "1.1B";

        this.Stararr = param;
        this.score = score;

        telInitializer.gameIdInit("SG2_2_1",gradeSelected);
    },

    preload:function(game){
        if(!window.grade1SG4){

            window.grade1SG4 = true;

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

        this.load.atlas("sg2_2_1_boxIcon",window.baseUrl+"assets/gradeAssets/sg2.2.1/icon1.png",window.baseUrl+"json/gradeJson/sg2.2.1/icon1.json");
        this.load.atlas("sg2_2_1_roundIcon",window.baseUrl+"assets/gradeAssets/sg2.2.1/icon2.png",window.baseUrl+"json/gradeJson/sg2.2.1/icon2.json");
        
        this.load.image("sg2_2_1_Drum",window.baseUrl+"assets/gradeAssets/sg2.2.1/image1.png");
        this.load.image("sg2_2_1_Tyre",window.baseUrl+"assets/gradeAssets/sg2.2.1/image2.png");
        this.load.image("sg2_2_1_Bottle",window.baseUrl+"assets/gradeAssets/sg2.2.1/image3.png");
        this.load.image("sg2_2_1_Bucket",window.baseUrl+"assets/gradeAssets/sg2.2.1/image4.png");
        this.load.image("sg2_2_1_Cylinder",window.baseUrl+"assets/gradeAssets/sg2.2.1/image5.png");
        this.load.image("sg2_2_1_Coin",window.baseUrl+"assets/gradeAssets/sg2.2.1/image6.png");
        
        this.load.atlas("sg2_2_1_TickMark",window.baseUrl+"assets/gradeAssets/sg2.2.1/tick.png",window.baseUrl+"json/gradeJson/sg2.2.1/tick.json");
        
        this.load.atlas("sg2_2_1_DrumAnim1",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim1.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim1.json");
        this.load.atlas("sg2_2_1_TyreAnim2",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim2.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim2.json");
        this.load.atlas("sg2_2_1_BottleAnim3",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim3.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim3.json");
        this.load.atlas("sg2_2_1_BucketAnim4",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim4.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim4.json");
        this.load.atlas("sg2_2_1_CylinderAnim5",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim5.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim5.json");
        this.load.atlas("sg2_2_1_CoinAnim6",window.baseUrl+"assets/gradeAssets/sg2.2.1/anim6.png",window.baseUrl+"json/gradeJson/sg2.2.1/anim6.json");


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
        _this.qArray = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg2');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/English/SG 2.2.1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Hindi/sg2.2.1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Kannada/sg2.2.1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Gujarati/sg2.2.1.mp3";
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Marathi/sg2.2.1.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Telugu/sg2.2.1.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Tamil/sg2.2.1.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Urdu/sg2.2.1.mp3";
                    }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg2.2.1/Odiya/sg2.2.1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        commonNavBar_sg2_2_1.addNavBar(game,_this.soundurl);
        commonNavBar_sg2_2_1.addTimerToTheGame(game,0,0,0);
        commonNavBar_sg2_2_1.startTimer(game);

        _this.generateStarsForTheScene(6);

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

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'starAnim1');

            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=12;
                    _this.starsGroup.getChildAt(i).x+=12;
                }
            }
        } 
        _this.starsGroup.getChildAt(0).frame = 2;
    },

    getQuestion:function(target1)
    {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];

        switch(_this.qArray[_this.no11])
        {
            case 1: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectDrumBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Drum',200,230,"box"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 2: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectTyreRound"];
                _this.obj3Array = ['sg2_2_1_TyreAnim2',200,230,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 3: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectBottleRound"];
                _this.obj3Array = ['sg2_2_1_BottleAnim3',200,230,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 4: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectBucketBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Bucket',200,230,"box"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 5: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectCylinderRound"];
                _this.obj3Array = ['sg2_2_1_CylinderAnim5',200,230,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 6: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectCoinBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Coin',200,200,"box"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 7: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectDrumRound"];
                _this.obj3Array = ['sg2_2_1_DrumAnim1',200,230,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 8: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectTyreBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Tyre',200,230,"box"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 9: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectBottleBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Bottle',200,230,"box",];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 10: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectBucketRound"];
                _this.obj3Array = ['sg2_2_1_BucketAnim4',200,230,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 11: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"CorrectCylinderBox"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"Round"];
                _this.obj3Array = ['sg2_2_1_Cylinder',200,230,"box"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
            case 12: 
                _this.questionid = 1;
                _this.obj1Array = ['sg2_2_1_boxIcon',800,200,"Box"];
                _this.obj2Array = ['sg2_2_1_roundIcon',800,350,"CorrectCoinRound"];
                _this.obj3Array = ['sg2_2_1_CoinAnim6',200,200,"round"];
                _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
                break;
        }
    },

    gotoQuestion:function(obj1Array,obj2Array,obj3Array){
        // _this.getVoice();

        _this.flagGroup1 = _this.add.group();

        _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.b1.anchor.setTo(0.5);
        _this.b1.name = obj1Array[3];
        _this.b1.key = obj3Array[0];
        _this.b1.inputEnabled = true;
        _this.b1.input.useHandCursor = true;

        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5);
        _this.b2.name =  obj2Array[3];
        _this.b2.key = obj3Array[0];
        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;

        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5);
        _this.b3.name = obj3Array[3];
        _this.b3.key = obj3Array[4];

        _this.addListeners();

        _this.flagGroup1.add(_this.b3);

        _this.flagGroup1.x = -100;
        var tween = _this.add.tween(_this.flagGroup1);
        tween.to({ x: 0 }, 150,'Linear', true, 0);

        //Disable HINT icon when question tweens at first
        //        commonNavBar_sg2_2_1.disableHintIcon();

        tween.onComplete.add(function(){

            _this.timer = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            _this.timer.loop(1000, function(){
                _this.AnsTimerCount++;
            }, _this); 
            _this.timer.start();

            //Enable HINT icon when next question appears
            //            commonNavBar_sg2_2_1.enableHintIcon();

        }, _this); 
        commonNavBar_sg2_2_1.opt1=_this.b3;
    },

    addListeners:function()
    {
        _this.b1.inputEnabled = true;
        _this.b1.input.useHandCursor = true;
        _this.b1.events.onInputDown.add(_this.checkAns,_this);

        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;
        _this.b2.events.onInputDown.add(_this.checkAns,_this);
    },

    checkAns:function(target){

        commonNavBar_sg2_2_1.playClickSound();

        if(_this.b) //Temporary sprite to hold wrong target for changing the frame to 0
            _this.b.frame=0;

        target.frame=1;

        _this.noofAttempts++;

        console.log(target);

        if((target.name == "CorrectDrumBox" || 
            target.name == "CorrectBucketBox" ||
            target.name == "CorrectCoinBox" ||
            target.name == "CorrectBottleBox"||
            target.name == "CorrectTyreBox" ||
            target.name == "CorrectCylinderBox") && 
           (_this.b3.name == "box") )
        {
            console.log("CORRECT==== BOX");

            commonNavBar_sg2_2_1.playSlidingSound();
            var ObjSlide = _this.add.tween(_this.b3);
            ObjSlide.to({ x: 1500,y:600 }, 3500,'Linear', true, 0);

            _this.correctAns1(target);

        }else if((target.name == "CorrectBottleRound" ||
                  target.name == "CorrectTyreRound" ||
                  target.name == "CorrectCylinderRound" ||
                  target.name == "CorrectDrumRound" ||
                  target.name == "CorrectBucketRound" ||
                  target.name == "CorrectCoinRound" ) && 
                 (_this.b3.name == "round") )
        {
            console.log("CORRECT==== ROUND");

            commonNavBar_sg2_2_1.playRollingSound();
            anim1 = _this.b3.animations.add('roll');
            anim1.play(10, true);
            var ObjSlide = _this.add.tween(_this.b3);
            ObjSlide.to({ x: 1500,y:600 }, 3500,'Linear', true, 0);

            _this.correctAns1(target);

        }else{
            console.log("WRONG");

            _this.shake.shake(10, _this.b3);

            _this.wrongAns1(target);
        }

    },

    checkOverlap:function(spriteA, spriteB) 
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    correctAns1:function(target)
    {
        //_this.noofAttempts++;
        

        _this.celebration1 = true;

        _this.removeListeners();

        commonNavBar_sg2_2_1.playCelebrationSound();
        this.Stararr.push(3);

        var starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();      

        _this.time.events.add(3500, _this.removeCelebration1, _this);

        target.events.onInputDown.removeAll();

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        _this.AnsTimerCount=0;
    },

    wrongAns1:function(target)
    {
        //_this.noofAttempts++;
        _this.b = target;   //Temporary sprite to hold wrong target
        commonNavBar_sg2_2_1.playWrongCelebrationSound();
        _this.time.events.add(500, function(){
            target.frame = 0;
        }, _this);
    },

    removeListeners:function()
    {   
        _this.b1.inputEnabled=false;
        _this.b2.inputEnabled=false;
    },

    removeCelebration1:function()
    {
        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        _this.changeQuestion();

        //        _this.addQuestion(_this.count);
    },

    addQuestion:function(no2)
    {
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(_this.flagGroup1);
            tween.to({ x: -1000 }, 0,'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);
        }, _this);
    },

    changeQuestion:function()
    {
        _this.b1.destroy();
        _this.b2.destroy();

        if(_this.b)
            _this.b.destroy();  //Temporary sprite to hold wrong target destroyed 

        _this.flagGroup1.destroy();
        _this.no11++;
        if(_this.no11 < 6)
        {
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            var timerStopVar = commonNavBar_sg2_2_1.stopTimer();
            commonNavBar_sg2_2_1.stopTimer();
            commonNavBar_sg2_2_1.stopVoice();
            commonNavBar_sg2_2_1.disableNavBar();
            _this.state.start('sg2_2_1Score',true,false);
        }
    },

    update:function(){

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

    getVoice:function()
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/English/SG 2.2.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Hindi/sg2.2.1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Kannada/sg2.2.1.mp3");
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Gujarati/sg2.2.1.mp3");
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Marathi/sg2.2.1.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Telugu/sg2.2.1.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Tamil/sg2.2.1.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Urdu/sg2.2.1.mp3");
                    }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.2.1/Odiya/sg2.2.1.mp3");
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

        commonNavBar_sg2_2_1.stopTimer();
            commonNavBar_sg2_2_1.stopVoice();
            commonNavBar_sg2_2_1.disableNavBar();

            commonNavBar_sg2_2_1.navBar= null;
            commonNavBar_sg2_2_1.speakerbtn= null;
            commonNavBar_sg2_2_1.backbtn= null;


        _this.stopVoice();
        commonNavBar_sg2_2_1.stopVoice();
    }

};