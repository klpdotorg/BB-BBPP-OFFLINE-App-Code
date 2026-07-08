Game.NS_FM_4B_G6level1=function(){};

Game.NS_FM_4B_G6level1.prototype =
{
    
    init:function (minutes, seconds, counterForTimer)
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
                
        _this.seconds = seconds;
        _this.minutes = minutes;
        _this.counterForTimer = counterForTimer;

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

        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl+"questionSounds/NS-FM-4B-G6/" + 
                                       _this.languageSelected + "/NS-FM-4B-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl+"questionSounds/NS-FM-4B-G6/" + 
                                       _this.languageSelected + "/NS-FM-4B-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.boxHighlight = document.createElement('audio');
        _this.boxHighlightsrc = document.createElement('source');
        _this.boxHighlightsrc.setAttribute("src", window.baseUrl+"sounds/Next_option_sound.mp3");
        _this.boxHighlight.appendChild(_this.boxHighlightsrc);
        
        _this.notFactorSound = document.createElement('audio');
        _this.notFactorSoundsrc = document.createElement('source');
        _this.notFactorSoundsrc.setAttribute("src", window.baseUrl+"sounds/Not_factor_sound.mp3");
        _this.notFactorSound.appendChild(_this.notFactorSoundsrc);

       // telInitializerbbpp.gameIdInit("NS_FM_4A_G6", gradeSelected);

    },

 
    create:function(game)
    {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.sceneCount = 3;
        _this.questionid = null;
        //* initialize to 3 since already 3 stars are given in 4A game.
        _this.count1=3;

        _this.speakerbtn;
        _this.background;        
        _this.starsGroup;
        
//        _this.seconds = 0;
//        _this.minutes = 0;
//        _this.counterForTimer = 0;
        _this.number;
        _this.position;
        _this.top1=0;
        _this.top2=0;
        _this.top3=0;
        _this.top4=0;
        _this.repetition=0;
        _this.Choice=0;
        _this.Grouptile=_this.add.group();

        _this.SelectedNumBox = [];

        // //* BB++ variables..
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
       // _this.microConcepts; 
      //  _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_FM_4A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Numbers';
     

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.speakerbtnClicked=false;
        _this.rightbtn_is_Clicked=false;
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        
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
        
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () 
        {
            console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
            {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Ask_Question(_this.Choice);

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
        
        //* display the stars from oe 4A game.
        _this.FM4Astars1 = _this.add.sprite(390,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars1.frame = 35;
        _this.FM4Astars2 = _this.add.sprite(420,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars2.frame = 35;
        _this.FM4Astars3 = _this.add.sprite(450,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars3.frame = 35;

        

        _this.Counter_position = [55,90,125,160,195,230,265,300,335,370,405,440,475,510,545,580,615,650,685,720,755,790];
        _this.Counter_position_emptyBox = [64,100,137,173,210,246,283,319,356,393,429,466,502,539,575,612,649,686,722,759,795,832];

        _this.larger_Number = [20, 20, 18, 18, 16, 16, 15, 15, 14, 14, 12, 12, 12, 10, 10, 9, 9, 8, 8];
        _this.smaller_Number = [[3, 4, 7, 10], [2, 3, 5, 11], [3, 5, 7, 9], [4, 6, 9, 10], [3, 7, 8, 9], [2, 4, 6, 9], [2, 3, 4, 8], [2, 4, 5, 6], [2, 3, 5, 8], [4, 5, 7, 8], [2, 3, 6, 7], [3, 4, 5, 7], [3, 6, 8, 9], [2, 5, 7, 8], [2, 4, 5, 6], [3, 4, 5, 7], [2, 3, 5, 7], [2, 3, 4, 5], [2, 3, 4, 5], [3, 4, 5,6]]; 
        _this.sequence_Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        _this.resp_Number = [];
        _this.large_number = [];
        _this.small_number = [];
        _this.final_large_number = [];
        _this.final_small_number = [];
        _this.tween1=0;
        _this.getQuestion();
    },

    Ask_Question: function (target)
    {
        if(target==0)
        {
            _this.Question1.play();
        }
        else
        {
            _this.Question2.play();
        }
    },
     
    //* function to enable the speaker button once pressed.
    EnableVoice: function () 
    {
        //console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
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
    },

    shuffle2D: function(array, idx) 
    {
        var array_number=[30, 43, 4];
        var currentidx = array_number[idx];
        var temporaryValue, randomidx; 
                   
        //While there remain elements to shuffle...
        while (0 !== currentidx) 
        {
            // Pick a remaining element...
            randomidx = Math.floor(Math.random()*currentidx);
            currentidx -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentidx][0];
            array[currentidx][0]= array[randomidx][0];
            array[randomidx][0] = temporaryValue;

            temporaryValue = array[currentidx][1];
            array[currentidx][1] = array[randomidx][1];
            array[randomidx][1] = temporaryValue;
        }

        return array;
    },

    getQuestion:function()
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
        
        _this.randomizing_elements();   
        _this.gotoMultiples(_this.repetition);

        _this.questionid = 1;
    },

    stopVoice:function()
    {
        if(_this.Question1)
        {
            _this.Question1.pause();
            _this.Question1 = null;
            _this.Question1src = null;
        }
        
        if(_this.Question2)
        {
            _this.Question2.pause();
            _this.Question2 = null;
            _this.Question2src = null;
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

    starActions : function(target)
    {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_FM_4A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
         _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    SoundofCelebration:function()
    {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) 
        {
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    randomizing_elements:function()
    {
        //* shuffle the sequence num, 
        //*pick first 3 seq nums 
        //* based on seq num pic lage num and small num from arrays
        //* copy the small num array & shuffle it
        _this.sequence_Number = _this.shuffle(_this.sequence_Number);
        for(var i=0; i<3; i++)
        {
            _this.resp_Number = _this.sequence_Number[i];

            _this.large_number = _this.larger_Number[_this.resp_Number];

            _this.small_number = _this.smaller_Number[_this.resp_Number];
            _this.small_number = _this.shuffle(_this.small_number);

            _this.final_large_number[i] = _this.large_number;

            _this.final_small_number[i] = _this.small_number;
        }
    },

    gotoMultiples : function(repetition)
    {  
        _this.sceneCount++;
        _this.noofAttempts =0;
        _this.AnsTimerCount=0;

    //* take large num from the array. take corresponding small num from its array 
    //* populate large num, samll num 1 to 4  
        _this.Multiplier = _this.final_large_number[_this.repetition];
        _this.factorbox_Num0 = _this.final_small_number[_this.repetition][0];
        _this.factorbox_Num1 = _this.final_small_number[_this.repetition][1];
        _this.factorbox_Num2 = _this.final_small_number[_this.repetition][2];
        _this.factorbox_Num3 = _this.final_small_number[_this.repetition][3];

        _this.onScreenDisplay();  
    },

    onScreenDisplay : function()
    {
        //*ask 1st question
        //* 4 empty box to be created 
        //first empty box should be yelow

        
        if (this.count1 == 3) _this.Ask_Question(0);  //* ask first question only for 1st Question of 4B.
        _this.Choice=0;

        //_this.tween1=0;
        _this.emptyBox1 = _this.add.sprite(55, 210, 'EmptyBox');
        _this.emptyBox1.visible=true;

        _this.emptyBox2 = _this.add.sprite(55, 280, 'EmptyBox');
        _this.emptyBox2.visible=true;

        _this.emptyBox3 = _this.add.sprite(55, 350, 'EmptyBox');
        _this.emptyBox3.visible=true;

        _this.emptyBox4 = _this.add.sprite(55, 420, 'EmptyBox');
        _this.emptyBox4.visible=true;

        _this.redBox = _this.add.sprite( 45, 75, 'RedBox' );

        if(_this.Multiplier < 10)
        {
            _this.largeTxt = _this.add.text( 69, 90, _this.Multiplier);
        }
        else
        {
            _this.largeTxt = _this.add.text( 63, 90, _this.Multiplier);
        }
        _this.largeTxt.fill = '#FFFFFF';

        _this.QuestionBox = _this.add.sprite(880, 197, "FactorBox");
        _this.QuestionBox.frame = 0;
        _this.QuestionBox1 = _this.add.sprite(880, 267, "FactorBox");
        _this.QuestionBox1.frame = 0;
        _this.QuestionBox2 = _this.add.sprite(880, 337, "FactorBox");
        _this.QuestionBox2.frame = 0;
        _this.QuestionBox3 = _this.add.sprite(880, 408, "FactorBox");
        _this.QuestionBox3.frame = 0;

        _this.enterTxt = _this.add.text(915, 233, "" + _this.factorbox_Num0, { fontSize: '30px' });//90,480
        _this.enterTxt.anchor.setTo(0.5); 
        
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#000000';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.name=_this.factorbox_Num0;

        _this.enterTxt1 = _this.add.text(915, 303, "" + _this.factorbox_Num1, { fontSize: '30px' });//290, 480
        _this.enterTxt1.anchor.setTo(0.5);  

        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fill = '#000000';
        _this.enterTxt1.fontWeight = 'normal';

    },

 
    create:function(game)
    {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        // _this.sceneCount = 0;
        _this.questionid = null;
        //* initialize to 3 since already 3 stars are given in 4A game.
        _this.count1=3;

        _this.speakerbtn;
        _this.background;        
        _this.starsGroup;
        
//        _this.seconds = 0;
//        _this.minutes = 0;
//        _this.counterForTimer = 0;
        _this.number;
        _this.position;
        _this.top1=0;
        _this.top2=0;
        _this.top3=0;
        _this.top4=0;
        _this.repetition=0;
        _this.Choice=0;
        _this.Grouptile=_this.add.group();

        _this.SelectedNumBox = [];

        // //* BB++ variables..
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
        // _this.microConcepts; 
        // _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_FM_4A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Numbers';
        // _this.microConcepts = 'Number Systems';

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.speakerbtnClicked=false;
        _this.rightbtn_is_Clicked=false;
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        
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
        
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () 
        {
            console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
            {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Ask_Question(_this.Choice);

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
        
        //* display the stars from oe 4A game.
        _this.FM4Astars1 = _this.add.sprite(390,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars1.frame = 35;
        _this.FM4Astars2 = _this.add.sprite(420,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars2.frame = 35;
        _this.FM4Astars3 = _this.add.sprite(450,10,'starAnim');//_this.world.centerX-20
        _this.FM4Astars3.frame = 35;

        

        _this.Counter_position = [55,90,125,160,195,230,265,300,335,370,405,440,475,510,545,580,615,650,685,720,755,790];
        _this.Counter_position_emptyBox = [64,100,137,173,210,246,283,319,356,393,429,466,502,539,575,612,649,686,722,759,795,832];

        _this.larger_Number = [20, 20, 18, 18, 16, 16, 15, 15, 14, 14, 12, 12, 12, 10, 10, 9, 9, 8, 8];
        _this.smaller_Number = [[3, 4, 7, 10], [2, 3, 5, 11], [3, 5, 7, 9], [4, 6, 9, 10], [3, 7, 8, 9], [2, 4, 6, 9], [2, 3, 4, 8], [2, 4, 5, 6], [2, 3, 5, 8], [4, 5, 7, 8], [2, 3, 6, 7], [3, 4, 5, 7], [3, 6, 8, 9], [2, 5, 7, 8], [2, 4, 5, 6], [3, 4, 5, 7], [2, 3, 5, 7], [2, 3, 4, 5], [2, 3, 4, 5], [3, 4, 5,6]]; 
        _this.sequence_Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        _this.resp_Number = [];
        _this.large_number = [];
        _this.small_number = [];
        _this.final_large_number = [];
        _this.final_small_number = [];
        _this.tween1=0;
        _this.getQuestion();
    },

    Ask_Question: function (target)
    {
        if(target==0)
        {
            _this.Question1.play();
        }
        else
        {
            _this.Question2.play();
        }
    },
     
    //* function to enable the speaker button once pressed.
    EnableVoice: function () 
    {
        //console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
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
    },

    shuffle2D: function(array, idx) 
    {
        var array_number=[30, 43, 4];
        var currentidx = array_number[idx];
        var temporaryValue, randomidx; 
                   
        //While there remain elements to shuffle...
        while (0 !== currentidx) 
        {
            // Pick a remaining element...
            randomidx = Math.floor(Math.random()*currentidx);
            currentidx -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentidx][0];
            array[currentidx][0]= array[randomidx][0];
            array[randomidx][0] = temporaryValue;

            temporaryValue = array[currentidx][1];
            array[currentidx][1] = array[randomidx][1];
            array[randomidx][1] = temporaryValue;
        }

        return array;
    },

    getQuestion:function()
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
        
        _this.randomizing_elements();   
        _this.gotoMultiples(_this.repetition);

        _this.questionid = 1;
    },

    stopVoice:function()
    {
        if(_this.Question1)
        {
            _this.Question1.pause();
            _this.Question1 = null;
            _this.Question1src = null;
        }
        
        if(_this.Question2)
        {
            _this.Question2.pause();
            _this.Question2 = null;
            _this.Question2src = null;
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

    starActions : function(target)
    {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_FM_4A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
         _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    SoundofCelebration:function()
    {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) 
        {
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    randomizing_elements:function()
    {
        //* shuffle the sequence num, 
        //*pick first 3 seq nums 
        //* based on seq num pic lage num and small num from arrays
        //* copy the small num array & shuffle it
        _this.sequence_Number = _this.shuffle(_this.sequence_Number);
        for(var i=0; i<3; i++)
        {
            _this.resp_Number = _this.sequence_Number[i];

            _this.large_number = _this.larger_Number[_this.resp_Number];

            _this.small_number = _this.smaller_Number[_this.resp_Number];
            _this.small_number = _this.shuffle(_this.small_number);

            _this.final_large_number[i] = _this.large_number;

            _this.final_small_number[i] = _this.small_number;
        }
    },

    gotoMultiples : function(repetition)
    {  
        _this.sceneCount++;
        _this.noofAttempts =0;
        _this.AnsTimerCount=0;

    //* take large num from the array. take corresponding small num from its array 
    //* populate large num, samll num 1 to 4  
        _this.Multiplier = _this.final_large_number[_this.repetition];
        _this.factorbox_Num0 = _this.final_small_number[_this.repetition][0];
        _this.factorbox_Num1 = _this.final_small_number[_this.repetition][1];
        _this.factorbox_Num2 = _this.final_small_number[_this.repetition][2];
        _this.factorbox_Num3 = _this.final_small_number[_this.repetition][3];

        _this.onScreenDisplay();  
    },

    onScreenDisplay : function()
    {
        //*ask 1st question
        //* 4 empty box to be created 
        //first empty box should be yelow

        
        if (this.count1 == 3) _this.Ask_Question(0);  //* ask first question only for 1st Question of 4B.
        _this.Choice=0;

        //_this.tween1=0;
        _this.emptyBox1 = _this.add.sprite(55, 210, 'EmptyBox');
        _this.emptyBox1.visible=true;

        _this.emptyBox2 = _this.add.sprite(55, 280, 'EmptyBox');
        _this.emptyBox2.visible=true;

        _this.emptyBox3 = _this.add.sprite(55, 350, 'EmptyBox');
        _this.emptyBox3.visible=true;

        _this.emptyBox4 = _this.add.sprite(55, 420, 'EmptyBox');
        _this.emptyBox4.visible=true;

        _this.redBox = _this.add.sprite( 45, 75, 'RedBox' );

        if(_this.Multiplier < 10)
        {
            _this.largeTxt = _this.add.text( 69, 90, _this.Multiplier);
        }
        else
        {
            _this.largeTxt = _this.add.text( 63, 90, _this.Multiplier);
        }
        _this.largeTxt.fill = '#FFFFFF';

        _this.QuestionBox = _this.add.sprite(880, 197, "FactorBox");
        _this.QuestionBox.frame = 0;
        _this.QuestionBox1 = _this.add.sprite(880, 267, "FactorBox");
        _this.QuestionBox1.frame = 0;
        _this.QuestionBox2 = _this.add.sprite(880, 337, "FactorBox");
        _this.QuestionBox2.frame = 0;
        _this.QuestionBox3 = _this.add.sprite(880, 408, "FactorBox");
        _this.QuestionBox3.frame = 0;

        _this.enterTxt = _this.add.text(915, 233, "" + _this.factorbox_Num0, { fontSize: '30px' });//90,480
        _this.enterTxt.anchor.setTo(0.5); 
        
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#000000';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.name=_this.factorbox_Num0;

        _this.enterTxt1 = _this.add.text(915, 303, "" + _this.factorbox_Num1, { fontSize: '30px' });//290, 480
        _this.enterTxt1.anchor.setTo(0.5);  

        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fill = '#000000';
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.name=_this.factorbox_Num1;
        
        _this.enterTxt2 = _this.add.text(915,373, "" + _this.factorbox_Num2, { fontSize: '30px' });//490, 480
        _this.enterTxt2.anchor.setTo(0.5);  
        
        _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt2.fill = '#000000';
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.name=_this.factorbox_Num2;

        _this.enterTxt3 = _this.add.text(915, 443, "" + _this.factorbox_Num3, { fontSize: '30px' });
        _this.enterTxt3.anchor.setTo(0.5);

        _this.enterTxt3.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt3.fill = '#000000';
        _this.enterTxt3.fontWeight = 'normal';
        _this.enterTxt3.name=_this.factorbox_Num3;

        var emptyBox_String_1 = "EmptyBox_l_" + _this.Multiplier;  
        
        _this.emptyBox_First_num = _this.add.sprite(55, 155, emptyBox_String_1); 

        _this.Group_Multiple= _this.add.group();
        _this.GroupCopy1 = _this.add.group();
        _this.Group1 = _this.add.group();
        _this.Group_top1 = _this.add.group();

        _this.GroupCopy2 = _this.add.group();
        _this.Group2 = _this.add.group();
        _this.Group_top2 = _this.add.group();

        _this.GroupCopy3 = _this.add.group();
        _this.Group3 = _this.add.group();
        _this.Group_top3 = _this.add.group();

        _this.GroupCopy4 = _this.add.group();
        _this.Group4 = _this.add.group();
        _this.Group_top4 = _this.add.group();
        
        // * display the counters based  on _this.largerNum 

        for(let i=0; i<_this.Multiplier; i++)
        {
            let Counter = _this.add.sprite( _this.Counter_position_emptyBox[i], 155, 'FourColorBox');
            _this.Group_Multiple.addChild(Counter);
            Counter.frame=0;
        }

        //* create 4 smaller number counters
        //* add event for each of the counters for drag and drop
        for(let j=0; j<_this.factorbox_Num0; j++)
        {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[j], 214,'FourColorBox');
            Counter.frame = 1;
            Counter.name=String(j);
            _this.top1++;
            _this.Group1.addChild(Counter);
        }

        _this.time.events.add(500, function (top1) 
        {
            if(_this.tween1==0&&_this.top1>0)
            {
                for(let i=0; i<_this.factorbox_Num0; i++)
                {
                    let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                    Counter.frame=2;
                    Counter.x=_this.Group1.getChildAt(i).x;
                    Counter.y=_this.Group1.getChildAt(i).y;
                    let CounterAnime = _this.add.tween(Counter);
                    CounterAnime.to({x: _this.Counter_position_emptyBox[i+_this.top1], y: 214}, 1250, 'Quart', false, 0);
                    CounterAnime.onComplete.add(function() {Counter.destroy();});
                    CounterAnime.start();
                }
                _this.tween1=1;

            }
            
            _this.QuestionBox.frame = 1;
            _this.boxHighlight.play();
            
            _this.time.events.add(100, function ()
            {
               for(let i=0; i<_this.factorbox_Num0; i++)
               {
                  _this.Group1.getChildAt(i).inputEnabled=true;
                  _this.Group1.getChildAt(i).input.useHandCursor = true;
                  _this.Group1.getChildAt(i).events.onInputDown.add(_this.One_element_clicked1, _this);
               }
            });

        }, _this.top1);

        for(let j=0; j<_this.factorbox_Num1; j++)
        {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[j], 284,'FourColorBox');
            Counter.frame = 2;
            Counter.name=String(j);
            _this.top2++;
            _this.Group2.addChild(Counter);
        }

        for(let j=0; j<_this.factorbox_Num2; j++)
        {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[j], 354,'FourColorBox');
            Counter.frame = 3;
            Counter.name=String(j);
            _this.top3++;
            _this.Group3.addChild(Counter);
        }

        for(let j=0; j<_this.factorbox_Num3; j++)
        {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[j], 424,'FourColorBox');
            Counter.frame = 1;
            Counter.name=String(j);
            _this.top4++;
            _this.Group4.addChild(Counter);
        }
    },

    One_element_clicked1 : function(target)
    {
        target.bringToTop=true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length=_this.factorbox_Num0;
        let frame=_this.Group1.getChildAt(0).frame;

        for(let i=0;i<length;i++)
        {
            let Counter = _this.add.sprite(0, 0,'FourColorBox');
            Counter.frame=frame;
            Counter.x=_this.Group1.getChildAt(i).x;
            Counter.y=_this.Group1.getChildAt(i).y;
            if(frame==1&&_this.top1!=0)
                _this.Group1.getChildAt(i).frame=2;
            else
                _this.Group1.getChildAt(i).frame=1;
            _this.GroupCopy1.addChild(Counter); 
        }

        for(let i=0;i<length;i++)
        {
            let Counter;
            Counter=_this.Group1.getChildAt(i);
            Counter.name=String(i);
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate1, Counter);
            Counter.events.onDragStop.add(function(target)
            {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if(target.y>=200&&target.y<=255&&_this.Group1.getChildAt(_this.Group1.length-1).x>=64&&_this.Group1.getChildAt(0).x<=862&&_this.top1<=22)
                {
                    for(var i=0;i<length;i++)
                    {
                        _this.Group1.getChildAt(i).inputEnabled=true;
                        _this.Group1.getChildAt(i).input.useHandCursor = true;
                        _this.Group1.getChildAt(i).input.enableDrag(false);
                        _this.Group1.getChildAt(i).name=String(i);
                        _this.Group1.getChildAt(i).x=_this.Counter_position_emptyBox[_this.top1++];
                        _this.Group1.getChildAt(i).y=214;
                        _this.Group1.getChildAt(i).events.onInputDown.add(_this.One_element_clicked1, _this);
                    }
                    for(var i=0;i<length;i++)
                    {
                        _this.Group_top1.addChild(_this.GroupCopy1.getChildAt(0));
                    }
        
                    if(_this.top1>=_this.Multiplier)
                    {
                        //* play negative sound if not matching length. else play a positive sound
                        if (_this.top1 > _this.Multiplier) _this.notFactorSound.play();
                        else _this.counterCelebrationSound.play();
                        
                        _this.emptyBox1.visible=true;
                        for(var i=0;i<length;i++)
                        {
                            _this.Group1.getChildAt(i).inputEnabled=false;
                        }
                        _this.QuestionBox.frame = 2;

                        _this.time.events.add(1300, function ()      //* after a delay highlight next option
                        {
                            _this.boxHighlight.play();  //* play sound
                            _this.QuestionBox1.frame = 1;
                            _this.SelectCounters1(); 
                        });
                    }
                }
                else
                {
                    _this.Group1.destroy();
                    _this.Group1=_this.add.group();
                    for(let i=0;i<length;i++)
                    {
                        let Counter=_this.GroupCopy1.getChildAt(0);
                        Counter.inputEnabled=true;
                        Counter.name=String(i);
                        Counter.input.useHandCursor = true;
                        _this.Group1.addChild(Counter);
                        Counter.events.onInputDown.add(_this.One_element_clicked1, _this);
                    }   
                }
            }, _this);
        }           
    },

    dragUpdate1 : function(Counter)
    { 
        let frontpos=1, backpos=1;
        var number=_this.factorbox_Num0;

        for(let k=Number(Counter.name)+1; k<number; k++)
        {
            _this.Group1.getChildAt(k).y = Counter.y;
            _this.Group1.getChildAt(k).x = Counter.x + 30*frontpos;
            frontpos++;
        }
        for(let k=Number(Counter.name)-1; k>=0; k--)
        {
            _this.Group1.getChildAt(k).y = Counter.y;
            _this.Group1.getChildAt(k).x = Counter.x - 30*backpos;
            backpos++;
        }  
    },

    SelectCounters1 : function()
    {
        for(let i=0; i<_this.factorbox_Num1; i++)
        {
            _this.Group2.getChildAt(i).inputEnabled=true;
            _this.Group2.getChildAt(i).input.useHandCursor = true;
            _this.Group2.getChildAt(i).events.onInputDown.add(_this.One_element_clicked2, _this);
        }  
        
    },

    One_element_clicked2 : function(target)
    {
        target.bringToTop=true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length=_this.factorbox_Num1;
        let frame=_this.Group2.getChildAt(0).frame;

        for(let i=0;i<length;i++)
        {
            let Counter = _this.add.sprite(0, 0,'FourColorBox');
            Counter.frame=frame;
            Counter.x=_this.Group2.getChildAt(i).x;
            Counter.y=_this.Group2.getChildAt(i).y;
            if(frame==2&&_this.top2!=0)
                _this.Group2.getChildAt(i).frame=3;
            else
                _this.Group2.getChildAt(i).frame=2;
            _this.GroupCopy2.addChild(Counter);
        }

        for(let i=0;i<length;i++)
        {
            let Counter;
            Counter=_this.Group2.getChildAt(i);
            Counter.name=String(i);
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate2, Counter);
            Counter.events.onDragStop.add(function(target)
            {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if(target.y>=270&&target.y<=290&&_this.Group2.getChildAt(_this.Group2.length-1).x>=64&&_this.Group2.getChildAt(0).x<=862&&_this.top2<=22)
                {
                    for(var i=0;i<length;i++)
                    {
                        _this.Group2.getChildAt(i).inputEnabled=true;
                        _this.Group2.getChildAt(i).input.useHandCursor = true;
                        _this.Group2.getChildAt(i).input.enableDrag(false);
                        _this.Group2.getChildAt(i).name=String(i);
                        _this.Group2.getChildAt(i).x=_this.Counter_position_emptyBox[_this.top2++];
                        _this.Group2.getChildAt(i).y=284;
                        _this.Group2.getChildAt(i).events.onInputDown.add(_this.One_element_clicked2, _this);
                    }
                    for(var i=0;i<length;i++)
                    {
                        _this.Group_top2.addChild(_this.GroupCopy2.getChildAt(0));
                    }
                    if(_this.top2>=_this.Multiplier)
                    {
                        //* play negative sound if not matching length. else play a positive sound
                        if (_this.top2 > _this.Multiplier) _this.notFactorSound.play();
                        else _this.counterCelebrationSound.play();
                        
                        _this.emptyBox2.visible=true;
                        for(var i=0;i<length;i++)
                        {
                            _this.Group2.getChildAt(i).inputEnabled=false;
                        }
                        _this.QuestionBox1.frame = 2;
                        
                        _this.time.events.add(1300, function ()      //* after a delay highlight next option
                        {
                            _this.boxHighlight.play();
                            _this.QuestionBox2.frame = 1;
                            _this.SelectCounters2();
                        });
                    }
                }
                else
                {
                    _this.Group2.destroy();
                    _this.Group2=_this.add.group();
                    for(let i=0;i<length;i++)
                    {
                        let Counter=_this.GroupCopy2.getChildAt(0);
                        Counter.inputEnabled=true;
                        Counter.name=String(i);
                        Counter.input.useHandCursor = true;
                        _this.Group2.addChild(Counter);
                        Counter.events.onInputDown.add(_this.One_element_clicked2, _this);
                    }
                }
            },_this);
        }
    },

    dragUpdate2 : function(Counter)
    {
        let frontpos=1, backpos=1;
        var number=_this.factorbox_Num1;

        for(let k=Number(Counter.name)+1; k<number; k++)
        {
            _this.Group2.getChildAt(k).y = Counter.y;
            _this.Group2.getChildAt(k).x = Counter.x + 30*frontpos;
            frontpos++;
        }
        for(let k=Number(Counter.name)-1; k>=0; k--)
        {
            _this.Group2.getChildAt(k).y = Counter.y;
            _this.Group2.getChildAt(k).x = Counter.x - 30*backpos;
            backpos++;
        }  
    },

    SelectCounters2 : function()
    {
        for(let i=0; i<_this.factorbox_Num2; i++)
        {
            _this.Group3.getChildAt(i).inputEnabled=true;
            _this.Group3.getChildAt(i).input.useHandCursor = true;
            _this.Group3.getChildAt(i).events.onInputDown.add(_this.One_element_clicked3, _this);
        }  
        
    },

    One_element_clicked3 : function(target)
    {
        target.bringToTop=true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length=_this.factorbox_Num2;
        let frame=_this.Group3.getChildAt(0).frame;

        for(let i=0;i<length;i++)
        {
            let Counter = _this.add.sprite(0, 0,'FourColorBox');
            Counter.frame=frame;
            Counter.x=_this.Group3.getChildAt(i).x;
            Counter.y=_this.Group3.getChildAt(i).y;
            if(frame==3&&_this.top3!=0)
                _this.Group3.getChildAt(i).frame=1;
            else
                _this.Group3.getChildAt(i).frame=3;
            _this.GroupCopy3.addChild(Counter);
        }

        for(let i=0;i<length;i++)
        {
            let Counter;
            Counter=_this.Group3.getChildAt(i);
            Counter.name=String(i);
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate3, Counter);
            Counter.events.onDragStop.add(function(target)
            {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if(target.y>=340&&target.y<=360&&_this.Group3.getChildAt(_this.Group3.length-1).x>=64&&_this.Group3.getChildAt(0).x<=862&&_this.top3<=22)
                {
                    for(var i=0;i<length;i++)
                    {
                        _this.Group3.getChildAt(i).inputEnabled=true;
                        _this.Group3.getChildAt(i).input.useHandCursor = true;
                        _this.Group3.getChildAt(i).input.enableDrag(false);
                        _this.Group3.getChildAt(i).name=String(i);
                        _this.Group3.getChildAt(i).x=_this.Counter_position_emptyBox[_this.top3++];
                        _this.Group3.getChildAt(i).y=354;
                        _this.Group3.getChildAt(i).events.onInputDown.add(_this.One_element_clicked3, _this);
                    }
                    for(var i=0;i<length;i++)
                    {
                        _this.Group_top3.addChild(_this.GroupCopy3.getChildAt(0));
                    }
                    if(_this.top3>=_this.Multiplier)
                    {
                        //* play negative sound if not matching length. else play a positive sound
                        if (_this.top3 > _this.Multiplier) _this.notFactorSound.play();
                        else _this.counterCelebrationSound.play();
                        
                        _this.emptyBox3.visible=true;
                        for(var i=0;i<length;i++)
                        {
                            _this.Group3.getChildAt(i).inputEnabled=false;
                        }
                        _this.QuestionBox2.frame = 2;
                        
                        _this.time.events.add(1300, function ()      //* after a delay highlight next option
                        {
                            _this.boxHighlight.play();
                            _this.QuestionBox3.frame = 1;
                            _this.SelectCounters3();
                        });
                    }
                }
                else
                {
                    _this.Group3.destroy();
                    _this.Group3=_this.add.group();
                    for(let i=0;i<length;i++)
                    {
                        let Counter=_this.GroupCopy3.getChildAt(0);
                        Counter.inputEnabled=true;
                        Counter.name=String(i);
                        Counter.input.useHandCursor = true;
                        _this.Group3.addChild(Counter);
                        Counter.events.onInputDown.add(_this.One_element_clicked3, _this);
                    }
                }
            },_this);
        }
    },

    dragUpdate3 : function(Counter)
    {
        let frontpos=1, backpos=1;
        var number=_this.factorbox_Num2;

        for(let k=Number(Counter.name)+1; k<number; k++)
        {
            _this.Group3.getChildAt(k).y = Counter.y;
            _this.Group3.getChildAt(k).x = Counter.x + 30*frontpos;
            frontpos++;
        }
        for(let k=Number(Counter.name)-1; k>=0; k--)
        {
            _this.Group3.getChildAt(k).y = Counter.y;
            _this.Group3.getChildAt(k).x = Counter.x - 30*backpos;
            backpos++;
        }  
    },

    SelectCounters3 : function()
    {
        for(let i=0; i<_this.factorbox_Num3; i++)
        {
            _this.Group4.getChildAt(i).inputEnabled=true;
            _this.Group4.getChildAt(i).input.useHandCursor = true;
            _this.Group4.getChildAt(i).events.onInputDown.add(_this.One_element_clicked4, _this);
        }  
        
    },

    One_element_clicked4 : function(target)
    {
        target.bringToTop=true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length=_this.factorbox_Num3;
        let frame=_this.Group4.getChildAt(0).frame;

        for(let i=0;i<length;i++)
        {
            let Counter = _this.add.sprite(0, 0,'FourColorBox');
            Counter.frame=frame;
            Counter.x=_this.Group4.getChildAt(i).x;
            Counter.y=_this.Group4.getChildAt(i).y;
            if(frame==1&&_this.top4!=0)
                _this.Group4.getChildAt(i).frame=2;
            else
                _this.Group4.getChildAt(i).frame=1;
            _this.GroupCopy4.addChild(Counter);
        }

        for(let i=0;i<length;i++)
        {
            let Counter;
            Counter=_this.Group4.getChildAt(i);
            Counter.name=String(i);
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate4, Counter);
            Counter.events.onDragStop.add(function(target)
            {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if(target.y>=415&&target.y<=435&&_this.Group4.getChildAt(_this.Group4.length-1).x>=64&&_this.Group4.getChildAt(0).x<=862&&_this.top4<=22)
                {
                    for(var i=0;i<length;i++)
                    {
                        _this.Group4.getChildAt(i).inputEnabled=true;
                        _this.Group4.getChildAt(i).input.useHandCursor = true;
                        _this.Group4.getChildAt(i).input.enableDrag(false);
                        _this.Group4.getChildAt(i).name=String(i);
                        _this.Group4.getChildAt(i).x=_this.Counter_position_emptyBox[_this.top4++];
                        _this.Group4.getChildAt(i).y=424;
                        _this.Group4.getChildAt(i).events.onInputDown.add(_this.One_element_clicked4, _this);
                    }
                    for(var i=0;i<length;i++)
                    {
                        _this.Group_top4.addChild(_this.GroupCopy4.getChildAt(0));
                    }
                    if(_this.top4>=_this.Multiplier)
                    {
                        //* play negative sound if not matching length. else play a positive sound
                        if (_this.top4 > _this.Multiplier) _this.notFactorSound.play();
                        else _this.counterCelebrationSound.play();
                        
                        _this.emptyBox4.visible=true;
                        for(var i=0;i<length;i++)
                        {
                            _this.Group4.getChildAt(i).inputEnabled=false;
                        }
                        _this.QuestionBox3.frame = 2;
                        
                        _this.time.events.add(1300, function ()      //* after a delay ask final question
                        {
                            if ( _this.count1 == 3 ) _this.Ask_Question(1);
                            _this.Choice=1;
                            _this.selectingBox();
                        });
                    }
                }
                else
                {
                    _this.Group4.destroy();
                    _this.Group4=_this.add.group();
                    for(let i=0;i<length;i++)
                    {
                        let Counter=_this.GroupCopy4.getChildAt(0);
                        Counter.inputEnabled=true;
                        Counter.name=String(i);
                        Counter.input.useHandCursor = true;
                        _this.Group4.addChild(Counter);
                        Counter.events.onInputDown.add(_this.One_element_clicked4, _this);
                    }
                }
            },_this);
        }
    },
    

    dragUpdate4 : function(Counter)
    {
        let frontpos=1, backpos=1;
        var number=_this.factorbox_Num3;

        for(let k=Number(Counter.name)+1; k<number; k++)
        {
            _this.Group4.getChildAt(k).y = Counter.y;
            _this.Group4.getChildAt(k).x = Counter.x + 30*frontpos;
            frontpos++;
        }
        for(let k=Number(Counter.name)-1; k>=0; k--)
        {
            _this.Group4.getChildAt(k).y = Counter.y;
            _this.Group4.getChildAt(k).x = Counter.x - 30*backpos;
            backpos++;
        }  
    },


    selectingBox:function(){

    
        _this.SelectedNumBox[0] = 0;
        _this.SelectedNumBox[1] = 0;
        _this.SelectedNumBox[2] = 0;
        _this.SelectedNumBox[3] = 0;

        _this.QuestionBox.inputEnabled=true;
        _this.QuestionBox.frame = 0;
        _this.QuestionBox.input.useHandCursor=true;
        _this.QuestionBox.events.onInputDown.add(_this.showSelection,_this.QuestionBox);
        
        
        _this.QuestionBox1.inputEnabled=true;
        _this.QuestionBox1.frame = 0;
        _this.QuestionBox1.input.useHandCursor=true;
        _this.QuestionBox1.events.onInputDown.add(_this.showSelection1,_this.QuestionBox1);

        
        _this.QuestionBox2.inputEnabled=true;
        _this.QuestionBox2.frame = 0;
        _this.QuestionBox2.input.useHandCursor=true;
        _this.QuestionBox2.events.onInputDown.add(_this.showSelection2,_this.QuestionBox2);
        
        
        _this.QuestionBox3.inputEnabled=true;
        _this.QuestionBox3.frame = 0;
        _this.QuestionBox3.input.useHandCursor=true;
        _this.QuestionBox3.events.onInputDown.add(_this.showSelection3,_this.QuestionBox3);

        _this.tickButton = _this.add.sprite(880, 480, 'Tick');
        _this.tickButton.frame = 1;
        _this.tickButton.inputEnabled = true;
        _this.tickButton.input.useHandCursor=true;
        _this.tickButton.events.onInputDown.add(_this.Evaluation);
    },

    showSelection: function(target)
    {
        _this.clickSound.play();

        if(target.frame == 1)
        {
            target.frame = 2;
            _this.SelectedNumBox[0] = 0;
            console.log(_this.SelectedNumBox);
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[0] = 1;
            console.log("2nd" +_this.SelectedNumBox);
        }        
    
    }, 

    showSelection1: function(target)
    {
        _this.clickSound.play();
        
        if(target.frame == 1)
        {
            target.frame = 2;
            _this.SelectedNumBox[1] = 0;
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[1] = 1;
        }    
    }, 

    showSelection2: function(target)
    {
        _this.clickSound.play();
    
        if(target.frame == 1)
        {
            target.frame = 2;
            _this.SelectedNumBox[2] = 0;
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[2] = 1;
        }    
    }, 

    showSelection3: function(target)
    {
        _this.clickSound.play();
  
        if(target.frame == 1)
        {
            target.frame = 2;
            _this.SelectedNumBox[3] = 0;
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[3] = 1;
        }    
    }, 

    Evaluation : function()
    {
        _this.tickButton.inputEnabled = false;

        _this.QuestionBox.inputEnabled=false;
        _this.QuestionBox1.inputEnabled=false;
        _this.QuestionBox2.inputEnabled=false;
        _this.QuestionBox3.inputEnabled=false;

        _this.flag1 = false;
        _this.flag2 = false;
        _this.flag3 = false;
        _this.flag4 = false;


        if(_this.SelectedNumBox[0] == 1 && _this.Multiplier == _this.top1)
        {
             _this.flag1 = true;
        }
        else
        {
            if(_this.SelectedNumBox[0] == 0 && _this.Multiplier != _this.top1)
            _this.flag1 = true;
        }

        if(_this.SelectedNumBox[1] == 1 && _this.Multiplier == _this.top2)
        {
             _this.flag2 = true;
        }
        else
        {
            if(_this.SelectedNumBox[1] == 0 && _this.Multiplier != _this.top2)
            _this.flag2 = true;
        }

        if(_this.SelectedNumBox[2] == 1 && _this.Multiplier == _this.top3)
        {
             _this.flag3 = true;
        }
        else
        {
            if(_this.SelectedNumBox[2] == 0 && _this.Multiplier != _this.top3)
            _this.flag3 = true;
        }

        if(_this.SelectedNumBox[3] == 1 && _this.Multiplier == _this.top4)
        {
             _this.flag4 = true;
        }
        else
        {
            if(_this.SelectedNumBox[3] == 0 && _this.Multiplier != _this.top4)
            _this.flag4 = true;
        }

        _this.noofAttempts++;
        if(_this.flag1 == true && _this.flag2 == true && _this.flag3 == true && _this.flag4 == true)
        {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.celebration();
        }
        else
        {
            
            _this.wrongAnswer();
        }
    },

    celebration : function()
    {
        _this.SoundofCelebration();
        
        _this.time.events.add(900, function (top)
        {
            _this.Group_Multiple.destroy();
            _this.GroupCopy1.destroy();
            _this.Group1.destroy();
            _this.Group_top1.destroy();

            _this.GroupCopy2.destroy();
            _this.Group2.destroy();
            _this.Group_top2.destroy();

            _this.GroupCopy3.destroy();
            _this.Group3.destroy();
            _this.Group_top3.destroy();

            _this.GroupCopy4.destroy();
            _this.Group4.destroy();
            _this.Group_top4.destroy();

            _this.emptyBox1.destroy();
            _this.emptyBox1.visible = false;

            _this.emptyBox2.destroy();
            _this.emptyBox2.visible=false;

            _this.emptyBox3.destroy();
            _this.emptyBox3.visible=false;

            _this.emptyBox4.destroy();
            _this.emptyBox4.visible=false;

            _this.emptyBox_First_num.destroy();

            _this.redBox.destroy();

            _this.enterTxt.destroy();
            _this.enterTxt1.destroy();
            _this.enterTxt2.destroy();
            _this.enterTxt3.destroy();
            _this.largeTxt.destroy();

            _this.QuestionBox.destroy();
            _this.QuestionBox1.destroy();
            _this.QuestionBox2.destroy();
            _this.QuestionBox3.destroy();
            _this.tickButton.destroy();

            _this.top1=0;
            _this.top2=0;
            _this.top3=0;
            _this.top4=0;

            _this.repetition++;
        });

        if (_this.count1 < 6 )
        {
            _this.time.events.add(1200, function ()
            {
                _this.gotoMultiples(_this.repetition);
            }); 
        }
        else
        {
            _this.timer1.stop();
            _this.time.events.add(1800,function()
            { 
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder
                
                //_this.state.start('score');
                console.log(_this.microConcepts,"mc Concept");
                _this.state.start('score',true,false,gameID,_this.microConcepts);
            }); 
        }
            
    },

    wrongAnswer : function()
    {
        _this.wrongSound.play();

        _this.QuestionBox.frame = 0;
        _this.QuestionBox1.frame = 0;
        _this.QuestionBox2.frame = 0;
        _this.QuestionBox3.frame = 0;

        _this.time.events.add(1000, function ()
        {
            _this.selectingBox();
        });
    },
}
    

    
