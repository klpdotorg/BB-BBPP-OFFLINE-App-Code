Game.NS_OE_1B_G6level1 = function () {};

Game.NS_OE_1B_G6level1.prototype = {

    init: function (minutes, seconds, counterForTimer) {
        _this = this;
        
    //* This game is to identify odd or even numbers from 4 trays which get filled with
    //* eggs or apples. Randomized numbers asked. At least 1 even & 1 odd numbers will be asked.
    //* part two of odd even. 3 questions asked.
        
//        var loc = window.location.pathname;
//        var dir = loc.substring(0, loc.lastIndexOf('/'));
//        console.log( "HHHHHHHHHHHHHpath is: " + loc + ": " + dir);
        
        //* use the language selected to form the string for url of the audio files.
        //* need to populate that from a parameter that is passed.
        //* 
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
        
        _this.arrangeinpairs = document.createElement('audio');
        _this.arrangeinpairssrc = document.createElement('source');
        _this.arrangeinpairs.setAttribute("src", window.baseUrl+"questionSounds/NS-OE-1A-G6/" + _this.languageSelected 
                                          + "/OE-drag.mp3");
        _this.arrangeinpairs.appendChild(_this.arrangeinpairssrc);

        _this.tweenSound = document.createElement('audio');
        _this.tweenSoundsrc = document.createElement('source');
        _this.tweenSoundsrc.setAttribute("src", window.baseUrl+"sounds/Egg_Counter_onTray.mp3");
        _this.tweenSound.appendChild(_this.tweenSoundsrc);
        _this.tweenSound.volume = 0.5;

        _this.hatchSound = document.createElement('audio');
        _this.hatchSoundsrc = document.createElement('source');
        _this.hatchSoundsrc.setAttribute("src", window.baseUrl+"sounds/egg_cracking.wav");
        _this.hatchSound.appendChild(_this.hatchSoundsrc);

       // telInitializerbbpp.gameIdInit("NS_OE_1A_G6",gradeSelected);
    },


    create: function (game) {
        console.log("Beginning of Create*")
        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.sceneCount = 3;
        _this.AnsTimerCount = 0;

        _this.count1 = 3;

        _this.speakerbtn;
        _this.background;
        _this.backbutton;
        _this.count = 0;
        _this.in;
        _this.starsGroup;

//        _this.seconds = 0;
//        _this.minutes = 0;
//
//        _this.counterForTimer = 0;
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_OE_1A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Numbers';
        _this.microConcepts = 'Number Systems';

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        //_this.tickButton == false

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
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

        _this.Question_flag=-1;

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () 
        {
            
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");            
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
            {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                
                if(_this.Question_flag==1)
                {
                    _this.Question1();
                }
                if(_this.Question_flag==2)
                {
                    if(_this.Ask_VoiceQuestionArray[_this.Ask_VoiceQuestionArrayIndex]==1)
                    {
                        _this.askOddQuestion();
                    }
                    else
                    {
                        _this.askEvenQuestion();
                    }
                }
                
                _this.time.events.add(4000, function () 
                {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                 });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        _this.array_egg_x = [60,95];
        _this.array_egg_y = [59,96,133,170,206,242,278,315,351,387];
        _this.array_egg_x1 = [260, 295];
        _this.array_egg_y1 = [59,96,133,170,206,242,278,315,351,387];
        _this.array_egg_x2 = [460, 495];
        _this.array_egg_y2 = [59,96,133,170,206,242,278,315,351,387];
        _this.array_egg_x3 = [660, 695];
        _this.array_egg_y3 = [59,96,133,170,206,242,278,315,351,387];

        _this.array_apple_x = [60,95];
        _this.array_apple_y = [59,96,133,170,206,242,278,315,351,387];
        _this.array_apple_x1 = [260, 295];
        _this.array_apple_y1 = [59,96,133,170,206,242,278,315,351,387];
        _this.array_apple_x2 = [460, 495];
        _this.array_apple_y2 = [59,96,133,170,206,242,278,315,351,387];
        _this.array_apple_x3 = [660, 695];
        _this.array_apple_y3 = [59,96,133,170,206,242,278,315,351,387];

        _this.array_traytype =[1, 0];
        _this.array_numbertype = [0, 1, 2, 3];
        _this.array_oddnumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        _this.array_evennumber = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

        _this.BoxPlacing = [0, 1, 2, 3];

        _this.CombinationArray = [1, 2, 3];

        _this.Ask_VoiceQuestionArray=[1,2];
        _this.Ask_VoiceQuestionArrayIndex=0;

        _this.box_clicked_placing_egg=false;
        _this.box_clicked_placing_apple=false;
        
        _this.SelectedNumBox = [];
        
        _this.getQuestion();
    },
    
    stopVoice: function()
    {
        if(_this.arrangeinpairs)
        {
            _this.arrangeinpairs.pause();
            _this.arrangeinpairs = null;
            _this.arrangeinpairssrc = null;
        }
        
        if(_this.oddquestionSound)
        {
            _this.oddquestionSound.pause();
            _this.oddquestionSound = null;
            _this.oddquestionSoundsrc = null;
        }
        
        if(_this.evenquestionSound)
        {
            _this.evenquestionSound.pause();
            _this.evenquestionSound = null;
            _this.evenquestionSoundsrc = null;
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


    shuffle: function (array) {
        var currentIndex = array.length;
        var temporaryValue, randomIndex;

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

    getQuestion: function (target) {
        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);
        _this.sceneCount++;

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);

        _this.timer1.start();

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        //_this.randomizing_tray();

        //* randomize the numbers, egg/apple array and the audio question to be asked

        //* display the stars from oe 1A game.
        _this.OE1Astars1 = _this.add.sprite(390,10,'starAnim');//_this.world.centerX-20
        _this.OE1Astars1.frame = 35;
        _this.OE1Astars2 = _this.add.sprite(420,10,'starAnim');//_this.world.centerX-20
        _this.OE1Astars2.frame = 35;
        _this.OE1Astars3 = _this.add.sprite(450,10,'starAnim');//_this.world.centerX-20
        _this.OE1Astars3.frame = 35;
        
        this.start();

        _this.questionid = 1;
    },

    start: function () {
        _this.sceneCount++;
        _this.randomizing_elements();

        _this.gotoOddEven();
    },


    gotoOddEven: function () {
        _this.AskQuestion();

        //_this.OddEvenAudio = _this.xxxArray[ use index varialbe used for this];
        _this.EggOrApple = _this.array_traytype[0];  //* change to an index. (to be incremented later)

        //* check if the choosen _this.OddEvenNumber is odd or even by taking modulus (remainder)
        if (_this.NumberText%2 == 0)
        {
            _this.IsEvenOdd = 0;
        }
        else
        {
            _this.IsEvenOdd = 1;
        }

        _this.traychosen = _this.array_traytype[0]; //* change to an index which should be ++ later
        _this.Question_flag=1;
        _this.readyToPlace();
    },

    AskQuestion: function () 
    {
        if(_this.NumberText < 10)
        {
           _this.enterTxt = _this.add.text(30, 31, "" + _this.NumberText, { fontSize: '30px' });
           _this.enterTxt.anchor.setTo(0.5); 
        }
        else
        {
           _this.enterTxt = _this.add.text(29, 31, "" + _this.NumberText, { fontSize: '30px' });
           _this.enterTxt.anchor.setTo(0.5); 
        }
        
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#F04C26';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.name=_this.NumberText;

        if(_this.NumberText1 < 10)
        {
          _this.enterTxt1 = _this.add.text(30, 31, "" + _this.NumberText1, { fontSize: '30px' });
          _this.enterTxt1.anchor.setTo(0.5);  
        }
        else
        {
          _this.enterTxt1 = _this.add.text(29, 31, "" + _this.NumberText1, { fontSize: '30px' });
          _this.enterTxt1.anchor.setTo(0.5);
        } 

        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fill = '#F04C26';
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.name=_this.NumberText1;

        if(_this.NumberText2 < 10)
        {
          _this.enterTxt2 = _this.add.text(30,31, "" + _this.NumberText2, { fontSize: '30px' });
          _this.enterTxt2.anchor.setTo(0.5);  
        }
        else
        {
           _this.enterTxt2 = _this.add.text(29,31, "" + _this.NumberText2, { fontSize: '30px' });
           _this.enterTxt2.anchor.setTo(0.5);
        }

        _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt2.fill = '#F04C26';
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.name=_this.NumberText2;
               
        if(_this.NumberText3 < 10)
        {
            _this.enterTxt3 = _this.add.text(30, 31, "" + _this.NumberText3, { fontSize: '30px' });
            _this.enterTxt3.anchor.setTo(0.5);
        }
        else
        {
            _this.enterTxt3 = _this.add.text(29, 31, "" + _this.NumberText3, { fontSize: '30px' });
            _this.enterTxt3.anchor.setTo(0.5);
        }
        
        _this.enterTxt3.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt3.fill = '#F04C26';
        _this.enterTxt3.fontWeight = 'normal';
        _this.enterTxt3.name=_this.NumberText3;

    },

    //* shuffle the number array and egg/apple array for selecting randomly.
    randomizing_elements: function () 
    {
        _this.CombinationArray = _this.shuffle(_this.CombinationArray);
        _this.array_evennumber = _this.shuffle(_this.array_evennumber);
        _this.array_oddnumber = _this.shuffle(_this.array_oddnumber);
        _this.oddEvenQuestion =_this.shuffle(_this.Ask_VoiceQuestionArray);
        
        if (_this.CombinationArray[0] == 1)
        {
            _this.NumberTypeArray = [0, 0, 0, 1]; //* Even, even, even and Odd
        }
        else if (_this.CombinationArray[0] == 2)
        {
            _this.NumberTypeArray = [0, 0, 1, 1]; //* Even, even, Odd and Odd
        }
        else 
        {
            _this.NumberTypeArray = [0, 1, 1, 1]; //* Even, Odd, Odd and Odd
        }
        
        //* shuffle the combination to randomize the question type asked.
        _this.NumberTypeArray = _this.shuffle(_this.NumberTypeArray);
        
//        _this.CombinationArray[0] == 3;
//        _this.NumberTypeArray = [1,1,1,0];

        //* select even or odd number based on the number type array (from odd or even array)
        for(var i=0; i< 4; i++)
        {
            if(_this.NumberTypeArray[i] == 0)
            {
              _this.question = _this.array_oddnumber[i]; 
            }
            else
            {
              _this.question = _this.array_evennumber[i];
                
            }
 
            //* place the selected number in box placing array for use in this question
            _this.BoxPlacing[i] = _this.question;
        
         }
         
        //* place them in number text
         _this.NumberText  = _this.BoxPlacing[0] ;
         _this.NumberText1 = _this.BoxPlacing[1] ;
         _this.NumberText2 = _this.BoxPlacing[2] ;
         _this.NumberText3 = _this.BoxPlacing[3] ;
        
        

        //* use the egg or apple array and shuffle it
        _this.array_traytype = _this.shuffle(_this.array_traytype);
    },


    readyToPlace: function () {

        _this.tickButton = _this.add.sprite(860, 450, 'Tick');
        _this.tickButton.frame = 1;

        _this.QuestionBox = _this.add.sprite(60, 450, "newNumBox");
        
        _this.QuestionBox1 = _this.add.sprite(260, 450, "newNumBox");
        _this.QuestionBox1.frame = 0;
        _this.QuestionBox2 = _this.add.sprite(460, 450, "newNumBox");
        _this.QuestionBox2.frame = 0;
        _this.QuestionBox3 = _this.add.sprite(660, 450, "newNumBox");
        _this.QuestionBox3.frame = 0;

        _this.QuestionBox.addChild(_this.enterTxt);
        _this.QuestionBox1.addChild(_this.enterTxt1);
        _this.QuestionBox2.addChild(_this.enterTxt2);
        _this.QuestionBox3.addChild(_this.enterTxt3);

        if (_this.array_traytype[0] == 1) 
        {
            _this.eggTray = _this.add.image(40, 40, "EggtrayVert");
            _this.eggTray1 = _this.add.image(240, 40, "EggtrayVert");
            _this.eggTray2 = _this.add.image(440, 40, "EggtrayVert");
            _this.eggTray3 = _this.add.image(640, 40, "EggtrayVert");
        
            _this.box_clicked_placing_egg=true;
            _this.QuestionBox.frame = 1;
            _this.placeEgg_Apple();
        }
        else 
        {
            _this.appleTray = _this.add.image(40, 40, "AppletrayVert");
            _this.appleTray1 = _this.add.image(240, 40, "AppletrayVert");
            _this.appleTray2 = _this.add.image(440, 40, "AppletrayVert");
            _this.appleTray3 = _this.add.image(640, 40, "AppletrayVert");

            _this.box_clicked_placing_apple=true;

            _this.QuestionBox.frame = 1;
            _this.placeEgg_Apple();
            //* need to show apple filled basket and other things.
        }
    },

    Question1:function()
    {
//        _this.arrangeinpairs = document.createElement('audio');
//        _this.arrangeinpairssrc = document.createElement('source');
//        _this.arrangeinpairs.setAttribute("src", "questionSounds/NS-OE-1-G6/English/Question.mp3");
//        _this.arrangeinpairs.appendChild(_this.arrangeinpairssrc);
        _this.arrangeinpairs.play();
    },

    placeEgg_Apple: function () 
    {
        //_this.clickSound.play();
        _this.eggGroup1 = _this.add.group();     
        _this.appleGroup1 = _this.add.group();
        
        _this.audio_delay = 1000;
        if ( _this.count1 == 3)
        {
            _this.audio_delay = 3000;   //* delay for audio to complete (in case of first Qs only)
            _this.Question1();
        }
        
        //* if current random selection is egg, then tween eggs else apples to the tray
        if (_this.EggOrApple == 1) 
        {
            _this.nexttray=0;
            //* Add a basket on screen with eggs.
            _this.ShowBasket(1)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.time.events.add(_this.audio_delay, function() 
            {
                _this.ShowInitialDragObj(1);  //* passing 1 to show egg. passing 2 to show apple.
                _this.counterCelebrationSound.play();
            });  //* passing 1 to show egg. passing 0 to show apple.
            
        }
        else 
        {
            _this.nexttray=0;
            //* Add a basket on screen with eggs.
            _this.ShowBasket(2)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.time.events.add(_this.audio_delay, function() 
            {
                _this.ShowInitialDragObj(2);  //* passing 1 to show egg. passing 2 to show apple.
                _this.counterCelebrationSound.play();
            });
        }
    },

    //* to show the initial two egg/apples which need to be dragged by player.
    
    ShowInitialDragObj: function(target)
    {
        //* show initial objects egg or apple on screen to be dragged.
        //* 1 means egg, 2 means apple
        if (target == 1)
        {
            _this.firstEgg1 = _this.add.sprite(820, 285, 'Egg');
            _this.firstEgg1.scale.setTo(0.7);
 
            _this.firstEgg1.name = "1";
            _this.firstEgg1.inputEnabled = true;
            _this.firstEgg1.input.useHandCursor=true;
            
            _this.firstEgg2 = _this.add.sprite(840, 285, 'Egg');
            _this.firstEgg2.scale.setTo(0.7);
            _this.firstEgg2.name = "2";
            _this.firstEgg2.inputEnabled = true;
            _this.firstEgg2.input.useHandCursor=true;
            
            //* show second egg only if the given number is >= 2. If it is lesser, make 2nd egg invisible.
            if (_this.nexttray == 0 && _this.NumberText < 2)
            {
                _this.firstEgg2.visible = false;
            }
            
            else if (_this.nexttray == 1 && _this.NumberText1 < 2)
            {
                _this.firstEgg2.visible = false;
            }
            
            else if (_this.nexttray == 2 && _this.NumberText2 < 2)
            {
                _this.firstEgg2.visible = false;
            }
            
            else if (_this.nexttray == 3 && _this.NumberText3 < 2)
            {
                _this.firstEgg2.visible = false;
            }
            
            //* tween the eggs a bit to higher position to show they are draggable.

            _this.time.events.add(100, function ()
            {
                var MoveAction1 = _this.add.tween(_this.firstEgg1);
                var MoveAction2 = _this.add.tween(_this.firstEgg2);
                MoveAction1.to({ y: 265 }, 100, 'Linear', true, 0);
                MoveAction2.to({ y: 265 }, 100, 'Linear', true, 0);

                _this.firstEgg1.input.enableDrag(true);
                _this.firstEgg1.events.onDragStop.add(_this.firstEggDrop, _this);
                _this.firstEgg1.events.onDragUpdate.add(_this.Egg_dragUpdate, _this.firstEgg1);
                _this.firstEgg2.input.enableDrag(true);
                _this.firstEgg2.events.onDragStop.add(_this.firstEggDrop, _this);
                _this.firstEgg2.events.onDragUpdate.add(_this.Egg_dragUpdate, _this.firstEgg2);
                _this.Basket.frame = 14;
            });
        }
        else
        {
            _this.firstApple1 = _this.add.sprite(820, 285, 'Apple');
            _this.firstApple1.scale.setTo(0.7);
             _this.firstApple1.name = "1";
            _this.firstApple1.inputEnabled = true;
            _this.firstApple1.input.useHandCursor=true;

            _this.firstApple2 = _this.add.sprite(840, 285, 'Apple');
            _this.firstApple2.scale.setTo(0.7);
            _this.firstApple2.name = "2";
            _this.firstApple2.inputEnabled = true;
            _this.firstApple2.input.useHandCursor=true;
    
            //* show second apple only if the given number is >= 2. If it is lesser, make 2nd apple invisible.
            if (_this.nexttray == 0 && _this.NumberText < 2)
            {
                _this.firstApple2.visible = false;
            }
            
            else if (_this.nexttray == 1 && _this.NumberText1 < 2)
            {
                _this.firstApple2.visible = false;
            }
            
            else if (_this.nexttray == 2 && _this.NumberText2 < 2)
            {
                _this.firstApple2.visible = false;
            }
            
            else if (_this.nexttray == 3 && _this.NumberText3 < 2)
            {
                _this.firstApple2.visible = false;
            }
            
            //* tween the apples a bit to higher position to show they are draggable.

            _this.time.events.add(100, function ()
            {
                var MoveAction1 = _this.add.tween(_this.firstApple1);
                var MoveAction2 = _this.add.tween(_this.firstApple2);
                MoveAction1.to({ y: 265 }, 100, 'Linear', true, 0);
                MoveAction2.to({ y: 265 }, 100, 'Linear', true, 0);
                
                _this.firstApple1.input.enableDrag(true);
                _this.firstApple1.events.onDragStop.add(_this.firstAppleDrop, _this);
                _this.firstApple1.events.onDragUpdate.add(_this.Apple_dragUpdate, _this.firstApple1);
                _this.firstApple2.input.enableDrag(true);
                _this.firstApple2.events.onDragStop.add(_this.firstAppleDrop, _this);
                _this.firstApple2.events.onDragUpdate.add(_this.Apple_dragUpdate, _this.firstApple2);
                _this.Basket.frame = 14;
            });        
        }
    },

    ShowBasket: function (target)
    {
        if (target == 1)
        {
            _this.Basket = _this.add.sprite(760, 280, "eggBasket");
            _this.Basket.frame = 13;

        }
        else
        {
            _this.Basket = _this.add.sprite(750, 280, "appleBasket");
            _this.Basket.frame = 13;
        }
    },
    
    Egg_dragUpdate: function(target)
    {        
        //console.log(" IIIIIIIIIIIinside dragupdate: target: " + target.name);
        if (target.name == "1")  //* first egg is being dragged. update x,y of second egg accordingly.
        {
            _this.firstEgg2.x = target.x + 20;
            _this.firstEgg2.y = target.y;
        }
        else   //* second egg is being dragged. update x,y of the first one
        {
            _this.firstEgg1.x = target.x - 20;
            _this.firstEgg1.y = target.y;            
        }
    },
    
    Apple_dragUpdate: function(target)
    {        
        //console.log(" FFFFFFFFFFinside dragupdate: target: " + target.name);
        if (target.name == "1")  //* first apple is being dragged. update x,y of second apple accordingly.
        {
            _this.firstApple2.x = target.x + 20;
            _this.firstApple2.y = target.y;
        }
        else   //* second apple is being dragged. update x,y of the first one
        {
            _this.firstApple1.x = target.x - 20;
            _this.firstApple1.y = target.y;            
        }
    },
    
    firstEggDrop: function(target)
    {
        //* check if dragg stop location of egg is on the 1/2/3/4th tray based on which one is played currently. 
        //* if it is on the tray, then place two eggs on the first two holes on the specific tray.
        //* once on tray, remove its events/functions.
        var left_x; var right_x;   //* tray X and Y variable for comparison for boundary while dropping egg/apple
        var top_y;  var bottom_y;  //* tray X and Y variable for comparison for boundary while dropping egg/apple
        
        //* based on which tray is being played, change the boundaries for dropping the object
        //* also set the x,y of the first row of the eggs to be kept on the tray
        
        switch (_this.nexttray)
        {
            case 0: left_x = 35; right_x = 200;   //* first tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_egg_x[0]; //* firstrow, first column
                    row1_x2 = _this.array_egg_x[1]; //* first row, second column
                    row1_y = _this.array_egg_y[0]; //* y for both the eggs.
                    break;
            case 1: left_x = 230; right_x = 400;   //* second tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_egg_x1[0]; //* firstrow, first column
                    row1_x2 = _this.array_egg_x1[1]; //* first row, second column
                    row1_y = _this.array_egg_y1[0]; //* y for both the eggs.
                    break;
            case 2: left_x = 430; right_x = 600;  //* third tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_egg_x2[0]; //* firstrow, first column
                    row1_x2 = _this.array_egg_x2[1]; //* first row, second column
                    row1_y = _this.array_egg_y2[0]; //* y for both the eggs.
                    break;
            case 3: left_x = 630; right_x = 800; //* last tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_egg_x3[0]; //* firstrow, first column
                    row1_x2 = _this.array_egg_x3[1]; //* first row, second column
                    row1_y = _this.array_egg_y3[0]; //* y for both the eggs.
                    break;
        }
        
        //* compare the boundary of where it is placed. if within boundary, fix it on first two slots.
        //* if it is placed else where take it back to the original position near basket.
        if (target.x >= left_x && target.x <= right_x && target.y >= top_y  && target.y <= bottom_y)
        {
            _this.tweenSound.play();

            if ( target.name == "1")
            {
                target.x = row1_x1;
                target.y = row1_y;
                _this.firstEgg2.x = row1_x2;
                _this.firstEgg2.y = row1_y;                
            }
            else
            {
                target.x = row1_x2;
                target.y = row1_y;
                _this.firstEgg1.x = row1_x1;
                _this.firstEgg1.y = row1_y; 
            }
            
            _this.firstEgg1.inputEnabled = false;
            _this.firstEgg1.input.useHandCursor=false;

            _this.firstEgg1.input.enableDrag(false);
            _this.firstEgg1.events.onDragStop.removeAll();
            _this.firstEgg1.events.onDragUpdate.removeAll();
            _this.firstEgg1.events.onInputDown.removeAll();
            
            _this.firstEgg2.inputEnabled = false;
            _this.firstEgg2.input.useHandCursor=false;

            _this.firstEgg2.input.enableDrag(false);
            _this.firstEgg2.events.onDragStop.removeAll();
            _this.firstEgg2.events.onDragUpdate.removeAll();
            _this.firstEgg2.events.onInputDown.removeAll();
            _this.EggAppears();
        }
        else  //* if dropped else where, take it back near basket.
        {
            _this.firstEgg1.x = 820;
            _this.firstEgg1.y = 275;
            _this.firstEgg2.x = 840;
            _this.firstEgg2.y = 275;            
        }
    },
    
    firstAppleDrop: function(target)
    {
        //* check if dragg stop location of apple is on the 1/2/3/4th tray based on which one is played currently. 
        //* if it is on the tray, then place two apples on the first two holes on the specific tray.
        //* once on tray, remove its events/functions.
        var left_x; var right_x;   //* tray X and Y variable for comparison for boundary while dropping egg/apple
        var top_y;  var bottom_y;  //* tray X and Y variable for comparison for boundary while dropping egg/apple
        
        //* based on which tray is being played, change the boundaries for dropping the object
        //* also set the x,y of the first row of the apples to be kept on the tray
        
        switch (_this.nexttray)
        {
            case 0: left_x = 35; right_x = 200;   //* first tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_apple_x[0]; //* firstrow, first column
                    row1_x2 = _this.array_apple_x[1]; //* first row, second column
                    row1_y = _this.array_apple_y[0]; //* y for both the apples.
                    break;
            case 1: left_x = 230; right_x = 400;   //* second tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_apple_x1[0]; //* firstrow, first column
                    row1_x2 = _this.array_apple_x1[1]; //* first row, second column
                    row1_y = _this.array_apple_y1[0]; //* y for both the apples.
                    break;
            case 2: left_x = 430; right_x = 600;  //* third tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_apple_x2[0]; //* firstrow, first column
                    row1_x2 = _this.array_apple_x2[1]; //* first row, second column
                    row1_y = _this.array_apple_y2[0]; //* y for both the apples.
                    break;
            case 3: left_x = 630; right_x = 800; //* last tray
                    top_y  = 40; bottom_y = 400;
                    row1_x1 = _this.array_apple_x3[0]; //* firstrow, first column
                    row1_x2 = _this.array_apple_x3[1]; //* first row, second column
                    row1_y = _this.array_apple_y3[0]; //* y for both the apples.
                    break;
        }
        
        //* compare the boundary of where it is placed. if within boundary, fix it on first two slots.
        //* if it is placed else where take it back to the original position near basket.
        if (target.x >= left_x && target.x <= right_x && target.y >= top_y  && target.y <= bottom_y)
        {
            _this.tweenSound.play();

            if ( target.name == "1")
            {
                target.x = row1_x1;
                target.y = row1_y;
                _this.firstApple2.x = row1_x2;
                _this.firstApple2.y = row1_y;                
            }
            else
            {
                target.x = row1_x2;
                target.y = row1_y;
                _this.firstApple1.x = row1_x1;
                _this.firstApple1.y = row1_y; 
            }
            
            _this.firstApple1.inputEnabled = false;
            _this.firstApple1.input.useHandCursor=false;

            _this.firstApple1.input.enableDrag(false);
            _this.firstApple1.events.onDragStop.removeAll();
            _this.firstApple1.events.onDragUpdate.removeAll();
            _this.firstApple1.events.onInputDown.removeAll();
            
            _this.firstApple2.inputEnabled = false;
            _this.firstApple2.input.useHandCursor=false;

            _this.firstApple2.input.enableDrag(false);
            _this.firstApple2.events.onDragStop.removeAll();
            _this.firstApple2.events.onDragUpdate.removeAll();
            _this.firstApple2.events.onInputDown.removeAll();
            _this.AppleAppears();
        }
        else  //* if dropped else where, take it back near basket.
        {
            _this.firstApple1.x = 820;
            _this.firstApple1.y = 275;
            _this.firstApple2.x = 840;
            _this.firstApple2.y = 275;            
        }
    },
    
    EggAppears: function () 
    {
        //_this.clickSound.play();    
        //* determine loop count while tweening.
        if(_this.box_clicked_placing_egg==true)
        {
            if(_this.nexttray==0)
            {
                if (_this.NumberText >= 2) 
                {   
                    _this.eggGroup1.addChild(_this.firstEgg1);
                    _this.eggGroup1.addChild(_this.firstEgg2);  //* add to group only if num>2
                }
                else _this.eggGroup1.addChild(_this.firstEgg1);   //* add only 1 egg to the group when number is 1
                
                var tween_LoopCount = 0;
                tween_LoopCount = Math.floor(_this.NumberText / 2); 
                
                for (let i = 1; i < tween_LoopCount; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        moveEgg2 = _this.add.sprite(840,285, 'Egg');
                        moveEgg2.scale.setTo(0.7);

                        _this.eggGroup1.addChild(moveEgg1);
                        _this.eggGroup1.addChild(moveEgg2);
                        
                        var clickMoveAction1 = _this.add.tween(moveEgg1);
                        var clickMoveAction2 = _this.add.tween(moveEgg2);
                        clickMoveAction1.to({ x: 60, y: _this.array_egg_y[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 95, y: _this.array_egg_y[i] }, 700, 'Linear', true, 0);
                    });
                }

                _this.time.events.add(1000*Math.floor(_this.NumberText/2),function()
                {
                    if(_this.IsEvenOdd==0)
                    {
                        _this.secondBox();
                    }
                });

                //* move the last egg if the current question is odd except when the given number is 1
                if (_this.IsEvenOdd == 1 &&  _this.NumberText > 2)
                {
                    console.log("oddeggplacing");
                    _this.time.events.add(750 * tween_LoopCount + 750, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        
                        clickMoveAction1 = _this.add.tween(moveEgg1);
                        
                        clickMoveAction1.to({ x: 60, y: _this.array_egg_y[tween_LoopCount] }, 700, 'Linear', true, 0);
                        
//                        moveEgg1 = _this.add.sprite(60,  _this.array_egg_y[tween_LoopCount], 'Egg');
//                        moveEgg1.scale.setTo(0.7);
                        //var hatchTime = 750 * tween_LoopCount + 200;
                        _this.time.events.add(1500, function () 
                        {
                            moveEgg1.frame = 1;
                            _this.hatchSound.play();
                            _this.eggGroup1.addChild(moveEgg1);
                            _this.secondBox();
                        });
                    });

                }
                else if (_this.IsEvenOdd == 1 &&  _this.NumberText == 1)//* when the number is 1, hatch & call second box
                {
                    _this.time.events.add(1500, function () 
                    {
                        _this.hatchSound.play();
                        _this.firstEgg1.frame = 1;
                        _this.secondBox();
                    });
                }
                _this.QuestionBox.inputEnabled=false;
                _this.timedelay = tween_LoopCount;
            }
                  
            else if(_this.nexttray==1)
            {
                var tween_LoopCount1 = 0;
                console.log("KKKKKKKKKKKKinside second box: " + _this.NumberText1 + " " + _this.IsEvenOdd1);
                
                if (_this.NumberText1 >= 2) 
                {   
                    _this.eggGroup1.addChild(_this.firstEgg1);
                    _this.eggGroup1.addChild(_this.firstEgg2);  //* add to group only if num>2
                }
                else _this.eggGroup1.addChild(_this.firstEgg1);   //* add only 1 egg to the group when number is 1
                
                tween_LoopCount1 = Math.floor(_this.NumberText1 / 2);            
                for (let i = 1; i < tween_LoopCount1; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        moveEgg2 = _this.add.sprite(840,285, 'Egg');
                        moveEgg2.scale.setTo(0.7);

                        _this.eggGroup1.addChild(moveEgg1);
                        _this.eggGroup1.addChild(moveEgg2);
                        var clickMoveAction1 = _this.add.tween(moveEgg1);
                        var clickMoveAction2 = _this.add.tween(moveEgg2);
                        clickMoveAction1.to({ x: 260, y: _this.array_egg_y1[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 295, y: _this.array_egg_y1[i] }, 700, 'Linear', true, 0);
                    });
                }
                _this.time.events.add(1000*Math.floor(_this.NumberText1/2),function()
                {
                    if(_this.IsEvenOdd1==0)
                    {
                        _this.thirdBox();
                    }
                });
                
                //* move the last egg if the current question is odd except when the given number is 1
                if (_this.IsEvenOdd1 == 1 &&  _this.NumberText1 > 2)
                {
                    _this.time.events.add(750 * tween_LoopCount1+750, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        
                        clickMoveAction1 = _this.add.tween(moveEgg1);
                        
                        clickMoveAction1.to({ x: 260, y: _this.array_egg_y1[tween_LoopCount1] }, 700, 'Linear', true, 0);
                        //var hatchTime = 1000 * tween_LoopCount1 + 200;
                        _this.time.events.add(1000, function () 
                        {
                            moveEgg1.frame = 1;
                            _this.hatchSound.play();
                            _this.eggGroup1.addChild(moveEgg1);
                            _this.thirdBox();
                        });
                    });
                }
                else if (_this.IsEvenOdd1 == 1 &&  _this.NumberText1 == 1)//* when the number is 1, hatch & call 3rd box
                {
                    console.log( " LLLLLLLLLLinside else number is: " + _this.NumberText1)
                    _this.time.events.add(1500, function () 
                    {
                        _this.hatchSound.play();
                        _this.firstEgg1.frame = 1;
                        _this.thirdBox();
                    });
                }
                _this.QuestionBox1.inputEnabled=false;
                _this.timedelay = tween_LoopCount1;   
            }

            else if(_this.nexttray==2)
            {
                var tween_LoopCount2 = 0;
                
                if (_this.NumberText2 >= 2) 
                {   
                    _this.eggGroup1.addChild(_this.firstEgg1);
                    _this.eggGroup1.addChild(_this.firstEgg2);  //* add to group only if num>2
                }
                else _this.eggGroup1.addChild(_this.firstEgg1);   //* add only 1 egg to the group when number is 1
                
                tween_LoopCount2 = Math.floor(_this.NumberText2 / 2);           
                for (let i = 1; i < tween_LoopCount2; i++) 
                {
                    _this.time.events.add(600 * i, function () 
                    {
                        _this.time.events.add(550, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        moveEgg2 = _this.add.sprite(840,285, 'Egg');
                        moveEgg2.scale.setTo(0.7);

                        var clickMoveAction1 = _this.add.tween(moveEgg1);
                        var clickMoveAction2 = _this.add.tween(moveEgg2);
                        clickMoveAction1.to({ x: 460, y: _this.array_egg_y2[i] }, 550, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 495, y: _this.array_egg_y2[i] }, 550, 'Linear', true, 0);
                        
                        _this.eggGroup1.addChild(moveEgg1);
                        _this.eggGroup1.addChild(moveEgg2);
                    });
                }
                _this.time.events.add(800*Math.floor(_this.NumberText2/2),function()
                {
                    if(_this.IsEvenOdd2==0)
                    {
                        _this.fourthBox();

                    }
                });
                
                //* move the last egg if the current question is odd except when the given number is 1
                if (_this.IsEvenOdd2 == 1 &&  _this.NumberText2 > 2)
                {
                    _this.time.events.add(750 * tween_LoopCount2+750, function () {
                        _this.time.events.add(550, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        
                        clickMoveAction1 = _this.add.tween(moveEgg1);
                        
                        clickMoveAction1.to({ x: 460, y: _this.array_egg_y2[tween_LoopCount2] }, 550, 'Linear', true, 0);
                        //var hatchTime = 1000 * tween_LoopCount2 + 200;
                        _this.time.events.add(800, function () 
                        {
                            moveEgg1.frame = 1;
                            _this.hatchSound.play();
                            _this.eggGroup1.addChild(moveEgg1);

                            _this.fourthBox();

                        });

                    });

                }
                
                else if (_this.IsEvenOdd2 == 1 &&  _this.NumberText2 == 1)//* when the number is 1, hatch & call 4th box
                {
                    _this.time.events.add(800, function () 
                    {
                        _this.hatchSound.play();
                        _this.firstEgg1.frame = 1;
                        _this.fourthBox();
                    });
                }
                _this.QuestionBox2.inputEnabled=false;
                _this.timedelay = tween_LoopCount2;
      
            }

            else if(_this.nexttray==3)
            {
                var tween_LoopCount3 = 0;
                
                if (_this.NumberText3 >= 2) 
                {   
                    _this.eggGroup1.addChild(_this.firstEgg1);
                    _this.eggGroup1.addChild(_this.firstEgg2);  //* add to group only if num>2
                }
                else _this.eggGroup1.addChild(_this.firstEgg1);   //* add only 1 egg to the group when number is 1
                
                tween_LoopCount3 = Math.floor(_this.NumberText3 / 2);           
                for (let i = 1; i < tween_LoopCount3; i++) 
                {
                    _this.time.events.add(600 * i, function () 
                    {
                        _this.time.events.add(550, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        moveEgg2 = _this.add.sprite(840,285, 'Egg');
                        moveEgg2.scale.setTo(0.7);

                        var clickMoveAction1 = _this.add.tween(moveEgg1);
                        var clickMoveAction2 = _this.add.tween(moveEgg2);
                        clickMoveAction1.to({ x: 660, y: _this.array_egg_y3[i] }, 550, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 695, y: _this.array_egg_y3[i] }, 550, 'Linear', true, 0);
                        
                        _this.eggGroup1.addChild(moveEgg1);
                        _this.eggGroup1.addChild(moveEgg2);
                    });
                }
                _this.time.events.add(550*Math.floor(_this.NumberText3/2),function(){
                    if(_this.IsEvenOdd3==0)
                    {
                        _this.QuestionBox3.frame=0;
                        _this.time.events.add(800,function(){
                        
                          _this.Basket.destroy();
                          _this.Ask_VoiceQuestion();
                        });
                        _this.box_clicked_placing_egg=false;
                    }
                });
                
                //* move the last egg if the current question is odd except when the given number is 1
                if (_this.IsEvenOdd3 == 1 &&  _this.NumberText3 > 2)
                {
                    _this.time.events.add(600 * tween_LoopCount3+750, function () 
                    {
                        _this.time.events.add(550, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveEgg1 = _this.add.sprite(820,285, 'Egg');
                        moveEgg1.scale.setTo(0.7);
                        
//                        moveEgg1 = _this.add.sprite(660,  _this.array_egg_y3[tween_LoopCount3], 'Egg');
//                        moveEgg1.scale.setTo(0.7);
                        
                        clickMoveAction1 = _this.add.tween(moveEgg1);
                        
                        clickMoveAction1.to({ x: 660, y: _this.array_egg_y3[tween_LoopCount3] }, 550, 'Linear', true, 0);
                        
                        //var hatchTime = 1000 * tween_LoopCount3 + 200;
                        _this.time.events.add(800, function () 
                        {
                            moveEgg1.frame = 1;
                            _this.hatchSound.play();
                            _this.eggGroup1.addChild(moveEgg1);
                            _this.QuestionBox3.frame=0;
                            _this.time.events.add(550,function(){
                                _this.Basket.destroy();
                                _this.Ask_VoiceQuestion();
                            });
                            _this.box_clicked_placing_egg=false;
                        });

                    });

                }
                
                else if (_this.IsEvenOdd3 == 1 &&  _this.NumberText3 == 1)//* when the number is 1, hatch & proceed to ask question.
                {
                    _this.time.events.add(800, function () 
                    {
                        _this.firstEgg1.frame = 1;
                        _this.hatchSound.play();
                        _this.QuestionBox3.frame=0;
                        _this.time.events.add(550,function(){
                            _this.Basket.destroy();
                            _this.Ask_VoiceQuestion();
                        });
                        _this.box_clicked_placing_egg=false;
                        
                    });
                }

                _this.QuestionBox3.inputEnabled=false;
                _this.timedelay = tween_LoopCount3;
            }

        }

    },

    AppleAppears: function () 
    {
        //_this.clickSound.play();    
        //* determine loop count while tweening.
        if(_this.box_clicked_placing_apple==true)
        {
            if(_this.nexttray==0)
            {
                
                if (_this.NumberText >= 2) 
                {   
                    _this.appleGroup1.addChild(_this.firstApple1);
                    _this.appleGroup1.addChild(_this.firstApple2);  //* add to group only if num>2
                }
                else this.appleGroup1.addChild(_this.firstApple1);  //* add only 1 egg to the group when number is 1
                
                var tween_LoopCount = 0;
                tween_LoopCount = Math.floor(_this.NumberText / 2); 
                
                for (let i = 1; i < tween_LoopCount; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        moveApple2 = _this.add.sprite(840,285, 'Apple');
                        moveApple2.scale.setTo(0.75);

                        _this.appleGroup1.addChild(moveApple1);
                        _this.appleGroup1.addChild(moveApple2);
                        
                        var clickMoveAction1 = _this.add.tween(moveApple1);
                        var clickMoveAction2 = _this.add.tween(moveApple2);
                        clickMoveAction1.to({ x: 60, y: _this.array_apple_y[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 95, y: _this.array_apple_y[i] }, 700, 'Linear', true, 0);
                    });
                }

                _this.time.events.add(1000*Math.floor(_this.NumberText/2),function()
                {
                    if(_this.IsEvenOdd==0)
                    {
                        _this.secondBox1();
                    }
                });

                //* move the last apple if the current question is odd.
                if (_this.IsEvenOdd == 1 &&  _this.NumberText > 2)
                {
                    
                    _this.time.events.add(750 * tween_LoopCount + 750, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        
                        clickMoveAction1 = _this.add.tween(moveApple1);
                        
                        clickMoveAction1.to({ x: 60, y: _this.array_apple_y[tween_LoopCount] }, 700, 'Linear', true, 0);
                        
                        //var hatchTime = 750 * tween_LoopCount + 200;
                        _this.time.events.add(1500, function () 
                        {
                            moveApple1.frame = 1;
                            _this.hatchSound.play();
                            _this.appleGroup1.addChild(moveApple1);
                            _this.secondBox1();
                        });
                    });

                }
                else if (_this.IsEvenOdd == 1 &&  _this.NumberText == 1)//* when the number is 1, hatch & proceed to ask question.
                {
                    _this.time.events.add(1500, function () 
                    {
                        _this.firstApple1.frame = 1;
                        _this.hatchSound.play();
                        _this.secondBox1();
                    });
                }
                _this.QuestionBox.inputEnabled=false;
                _this.timedelay = tween_LoopCount;
            }
                  
            else if(_this.nexttray==1)
            {
                var tween_LoopCount1 = 0;
                
                if (_this.NumberText1 >= 2) 
                {   
                    _this.appleGroup1.addChild(_this.firstApple1);
                    _this.appleGroup1.addChild(_this.firstApple2);  //* add to group only if num>2
                }
                else this.appleGroup1.addChild(_this.firstApple1);  //* add only 1 egg to the group when number is 1
                
                tween_LoopCount1 = Math.floor(_this.NumberText1 / 2);            
                for (let i = 1; i < tween_LoopCount1; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        moveApple2 = _this.add.sprite(840,285, 'Apple');
                        moveApple2.scale.setTo(0.7);

                        _this.appleGroup1.addChild(moveApple1);
                        _this.appleGroup1.addChild(moveApple2);
                        var clickMoveAction1 = _this.add.tween(moveApple1);
                        var clickMoveAction2 = _this.add.tween(moveApple2);
                        clickMoveAction1.to({ x: 260, y: _this.array_apple_y1[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 295, y: _this.array_apple_y1[i] }, 700, 'Linear', true, 0);
                    });
                }
                _this.time.events.add(1000*Math.floor(_this.NumberText1/2),function()
                {
                    if(_this.IsEvenOdd1==0)
                    {
                        _this.thirdBox1();
                    }
                });
                if (_this.IsEvenOdd1 == 1 &&  _this.NumberText1 > 2)
                {
                    _this.time.events.add(750 * tween_LoopCount1+750, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        
                        clickMoveAction1 = _this.add.tween(moveApple1);
                        
                        clickMoveAction1.to({ x: 260, y: _this.array_apple_y1[tween_LoopCount1] }, 700, 'Linear', true, 0);
                        //var hatchTime = 1000 * tween_LoopCount1 + 200;
                        _this.time.events.add(1000, function () 
                        {
                            moveApple1.frame = 1;
                            _this.hatchSound.play();
                            _this.appleGroup1.addChild(moveApple1);
                            _this.thirdBox1();
                        });
                    });
                }
                
                else if (_this.IsEvenOdd1 == 1 &&  _this.NumberText1 == 1)//* when the number is 1, hatch & proceed to ask question.
                {
                    _this.time.events.add(1500, function () 
                    {
                        _this.firstApple1.frame = 1;
                        _this.hatchSound.play();
                        _this.thirdBox1();
                    });
                }
                _this.QuestionBox1.inputEnabled=false;
                _this.timedelay = tween_LoopCount1;   
            }

            else if(_this.nexttray==2)
            {
                var tween_LoopCount2 = 0;
                
                if (_this.NumberText2 >= 2) 
                {   
                    _this.appleGroup1.addChild(_this.firstApple1);
                    _this.appleGroup1.addChild(_this.firstApple2);  //* add to group only if num>2
                }
                else this.appleGroup1.addChild(_this.firstApple1);  //* add only 1 egg to the group when number is 1
                
                tween_LoopCount2 = Math.floor(_this.NumberText2 / 2);           
                for (let i = 1; i < tween_LoopCount2; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        moveApple2 = _this.add.sprite(840,285, 'Apple');
                        moveApple2.scale.setTo(0.7);

                        var clickMoveAction1 = _this.add.tween(moveApple1);
                        var clickMoveAction2 = _this.add.tween(moveApple2);
                        clickMoveAction1.to({ x: 460, y: _this.array_apple_y2[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 495, y: _this.array_apple_y2[i] }, 700, 'Linear', true, 0);
                        
                        _this.appleGroup1.addChild(moveApple1);
                        _this.appleGroup1.addChild(moveApple2);
                    });
                }
                _this.time.events.add(1000*Math.floor(_this.NumberText2/2),function()
                {
                    if(_this.IsEvenOdd2==0)
                    {
                        _this.fourthBox1();

                    }
                });
                if (_this.IsEvenOdd2 == 1 &&  _this.NumberText2 > 2)
                {
                    _this.time.events.add(750 * tween_LoopCount2+750, function () {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        
                        clickMoveAction1 = _this.add.tween(moveApple1);
                        
                        clickMoveAction1.to({ x: 460, y: _this.array_apple_y2[tween_LoopCount2] }, 700, 'Linear', true, 0);
                        //var hatchTime = 1000 * tween_LoopCount2 + 200;
                        _this.time.events.add(1000, function () 
                        {
                            moveApple1.frame = 1;
                            _this.hatchSound.play();
                            _this.appleGroup1.addChild(moveApple1);

                            _this.fourthBox1();

                        });

                    });

                }
                else if (_this.IsEvenOdd2 == 1 &&  _this.NumberText2 == 1)//* when the number is 1, hatch & proceed to ask question.
                {
                    _this.time.events.add(1500, function () 
                    {
                        _this.firstApple1.frame = 1;
                        _this.hatchSound.play();
                        _this.fourthBox1();
                    });
                }
                _this.QuestionBox2.inputEnabled=false;
                _this.timedelay = tween_LoopCount2;
      
            }

            else if(_this.nexttray==3)
            {
                var tween_LoopCount3 = 0;
                
                if (_this.NumberText3 >= 2) 
                {   
                    _this.appleGroup1.addChild(_this.firstApple1);
                    _this.appleGroup1.addChild(_this.firstApple2);  //* add to group only if num>2
                }
                else this.appleGroup1.addChild(_this.firstApple1);  //* add only 1 egg to the group when number is 1
                
                tween_LoopCount3 = Math.floor(_this.NumberText3 / 2);           
                for (let i = 1; i < tween_LoopCount3; i++) 
                {
                    _this.time.events.add(750 * i, function () 
                    {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        moveApple2 = _this.add.sprite(840,285, 'Apple');
                        moveApple2.scale.setTo(0.75);

                        var clickMoveAction1 = _this.add.tween(moveApple1);
                        var clickMoveAction2 = _this.add.tween(moveApple2);
                        clickMoveAction1.to({ x: 660, y: _this.array_apple_y3[i] }, 700, 'Linear', true, 0);
                        clickMoveAction2.to({ x: 695, y: _this.array_apple_y3[i] }, 700, 'Linear', true, 0);
                        
                        _this.appleGroup1.addChild(moveApple1);
                        _this.appleGroup1.addChild(moveApple2);
                    });
                }
                _this.time.events.add(1000*Math.floor(_this.NumberText3/2),function(){
                    if(_this.IsEvenOdd3==0)
                    {
                        _this.QuestionBox3.frame=0;
                        _this.time.events.add(1000,function(){
                        
                          _this.Basket.destroy();
                          _this.Ask_VoiceQuestion();
                        });
                        _this.box_clicked_placing_apple=false;
                    }
                });
                if (_this.IsEvenOdd3 == 1 &&  _this.NumberText3 > 2)
                {
                    _this.time.events.add(750 * tween_LoopCount3+750, function () {
                        _this.time.events.add(700, function () 
                        {
                            _this.tweenSound.play();
                        });        
                        moveApple1 = _this.add.sprite(820,285, 'Apple');
                        moveApple1.scale.setTo(0.75);
                        //moveApple1 = _this.add.sprite(660,  _this.array_egg_y3[tween_LoopCount3], 'Apple');
                        //moveApple1.scale.setTo(0.75);
                        
                        clickMoveAction1 = _this.add.tween(moveApple1);
                        
                        clickMoveAction1.to({ x: 660, y: _this.array_apple_y3[tween_LoopCount3] }, 700, 'Linear', true, 0);
                        
                        //var hatchTime = 1000 * tween_LoopCount3 + 200;
                        _this.time.events.add(750, function () 
                        {
                            moveApple1.frame = 1;
                            _this.hatchSound.play();
                            _this.appleGroup1.addChild(moveApple1);
                            _this.QuestionBox3.frame=0;
                            _this.time.events.add(1000,function(){
                                _this.Basket.destroy();
                                _this.Ask_VoiceQuestion();
                            });
                            _this.box_clicked_placing_apple=false;
                        });

                    });

                }
                else if (_this.IsEvenOdd3 == 1 &&  _this.NumberText3 == 1)//* when the number is 1, hatch & proceed to ask question.
                {
                    _this.time.events.add(1500, function () 
                    {
                        _this.firstApple1.frame = 1;
                        _this.hatchSound.play();
                        _this.QuestionBox3.frame=0;
                        _this.time.events.add(1000,function(){
                            _this.Basket.destroy();
                            _this.Ask_VoiceQuestion();
                        });
                        _this.box_clicked_placing_apple=false;
                        
                    });
                }
                _this.QuestionBox3.inputEnabled=false;
                _this.timedelay = tween_LoopCount3;
            }

        }

    },   
    
    
//    AppleAppears: function () 
//    {
//     
//     _this.clickSound.play();   
//     //* determine loop count while tweening.
//     if(_this.box_clicked_placing_apple==true)
//     {
//        if(_this.nexttray==0)
//        {
//            var tween_LoopCount = 0;
//            tween_LoopCount = Math.floor(_this.NumberText / 2);           
//            for (let i = 0; i < tween_LoopCount; i++) 
//            {
//                _this.time.events.add(750 * i, function () 
//                {
//                    _this.tweenSound.play();
//                    moveApple1 = _this.add.sprite(60,  _this.array_apple_y[i], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    moveApple2 = _this.add.sprite(95,  _this.array_apple_y[i], 'Apple');
//                    moveApple2.scale.setTo(0.75);
//                    _this.appleGroup1.addChild(moveApple1);
//                    _this.appleGroup1.addChild(moveApple2);
//                });
//
//            }
//            _this.time.events.add(1000*Math.floor(_this.NumberText/2),function(){
//                if(_this.IsEvenOdd==0)
//                {
//                    _this.secondBox1();
//                }
//            });
//            
//            //* move the last egg if the current question is odd.
//            if (_this.IsEvenOdd == 1) 
//            {
//                _this.time.events.add(750 * tween_LoopCount, function () {
//                    _this.tweenSound.play();        
//                    moveApple1 = _this.add.sprite(60,  _this.array_apple_y[tween_LoopCount], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    //var hatchTime = 1000 * tween_LoopCount + 200;
//                    _this.time.events.add(1000, function () 
//                    {
//                        moveApple1.frame = 1;
//                        _this.hatchSound.play();
//                        _this.appleGroup1.addChild(moveApple1);
//                        _this.secondBox1();
//                    });
//
//                });
//            }
//            _this.QuestionBox.inputEnabled=false;
//            _this.timedelay = tween_LoopCount;
//        
//        }
//                          
//        else if(_this.nexttray==1)
//        {
//                var tween_LoopCount1 = 0;
//                tween_LoopCount1 = Math.floor(_this.NumberText1 / 2);           
//                for (let i = 0; i < tween_LoopCount1; i++) 
//                {
//                    _this.time.events.add(750 * i, function () 
//                    {
//                        _this.tweenSound.play();
//                        moveApple1 = _this.add.sprite(260,  _this.array_apple_y1[i], 'Apple');
//                        moveApple1.scale.setTo(0.75);
//                        moveApple2 = _this.add.sprite(295,  _this.array_apple_y1[i], 'Apple');
//                        moveApple2.scale.setTo(0.75);
//                        _this.appleGroup1.addChild(moveApple1);
//                        _this.appleGroup1.addChild(moveApple2);
//                    });
//                }
//                _this.time.events.add(1000*Math.floor(_this.NumberText1/2),function(){
//                    if(_this.IsEvenOdd1==0)
//                    {
//                        _this.thirdBox1();
//                    }
//                });
//                if (_this.IsEvenOdd1 == 1) 
//                {
//                    _this.time.events.add(750 * tween_LoopCount1, function () {
//                        _this.tweenSound.play();        
//                        moveApple1 = _this.add.sprite(260,  _this.array_apple_y1[tween_LoopCount1], 'Apple');
//                        moveApple1.scale.setTo(0.75);
//                        //var hatchTime = 1000 * tween_LoopCount1 + 200;
//                        _this.time.events.add(1000, function () 
//                        {
//                            moveApple1.frame = 1;
//                            _this.hatchSound.play();
//                            _this.appleGroup1.addChild(moveApple1);
//                            _this.thirdBox1();
//                        });
//
//                    });
//
//                }
//                _this.QuestionBox1.inputEnabled=false;
//                _this.timedelay = tween_LoopCount1;
//
//        }
//        else if(_this.nexttray==2)
//        {
//            var tween_LoopCount2 = 0;
//            tween_LoopCount2 = Math.floor(_this.NumberText2 / 2);           
//            for (let i = 0; i < tween_LoopCount2; i++) 
//            {
//                _this.time.events.add(750 * i, function () 
//                {
//                    _this.tweenSound.play();
//                    moveApple1 = _this.add.sprite(460,  _this.array_apple_y2[i], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    moveApple2 = _this.add.sprite(495,  _this.array_apple_y2[i], 'Apple');
//                    moveApple2.scale.setTo(0.75);
//                    _this.appleGroup1.addChild(moveApple1);
//                    _this.appleGroup1.addChild(moveApple2);
//                });
//            }
//            _this.time.events.add(1000*Math.floor(_this.NumberText2/2),function(){
//                if(_this.IsEvenOdd2==0)
//                {
//                    _this.fourthBox1();
//
//                }
//            });
//            if (_this.IsEvenOdd2 == 1) 
//            {
//                console.log("oddappleplacing");
//                _this.time.events.add(750 * tween_LoopCount2, function () {
//
//                    _this.tweenSound.play();        
//                    moveApple1 = _this.add.sprite(460,  _this.array_apple_y2[tween_LoopCount2], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    //var hatchTime = 1000 * tween_LoopCount2 + 200;
//                    _this.time.events.add(1000, function () 
//                    {
//                        moveApple1.frame = 1;
//                        _this.hatchSound.play();
//                        _this.appleGroup1.addChild(moveApple1);
//                        _this.fourthBox1();
//
//                    });
//
//                });
//
//            }
//            _this.QuestionBox2.inputEnabled=false;
//            _this.timedelay = tween_LoopCount2;
//
//        }
//
//
//        else if(_this.nexttray==3)
//        {
//            var tween_LoopCount3 = 0;
//            tween_LoopCount3 = Math.floor(_this.NumberText3 / 2);           
//            for (let i = 0; i < tween_LoopCount3; i++) 
//            {
//                _this.time.events.add(750 * i, function () 
//                {
//                    _this.tweenSound.play();
//                    moveApple1 = _this.add.sprite(660,  _this.array_apple_y3[i], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    moveApple2 = _this.add.sprite(695,  _this.array_apple_y3[i], 'Apple');
//                    moveApple2.scale.setTo(0.75);
//
//                    _this.appleGroup1.addChild(moveApple1);
//                    _this.appleGroup1.addChild(moveApple2);
//                });
//            }
//            _this.time.events.add(1000*Math.floor(_this.NumberText3/2),function(){
//                if(_this.IsEvenOdd3==0)
//                {
//                    _this.QuestionBox3.frame=0;
//                    _this.time.events.add(1000,function(){
//                        _this.Ask_VoiceQuestion();
//                    });
//                
//                    _this.box_clicked_placing_apple=false;
//                }
//            });
//            if (_this.IsEvenOdd3 == 1) 
//            {
//                _this.time.events.add(750 * tween_LoopCount3, function () {
//
//                    _this.tweenSound.play();        
//                    moveApple1 = _this.add.sprite(660,  _this.array_apple_y3[tween_LoopCount3], 'Apple');
//                    moveApple1.scale.setTo(0.75);
//                    //var hatchTime = 1000 * tween_LoopCount3 + 200;
//                    _this.time.events.add(750, function () 
//                    {
//                        moveApple1.frame = 1;
//                        _this.hatchSound.play();
//                        _this.appleGroup1.addChild(moveApple1);
//                        _this.QuestionBox3.frame=0;
//                        _this.time.events.add(1000,function(){
//                            _this.Ask_VoiceQuestion();
//                        });
//                        
//                        _this.box_clicked_placing_apple=false;
//                    });
//
//                });
//
//            }
//            _this.QuestionBox3.inputEnabled=false;
//            _this.timedelay = tween_LoopCount3;
//
//        }
//
//    }
//    },

    Ask_VoiceQuestion:function()
    {

        _this.Question_flag=-1;
        if(_this.Ask_VoiceQuestionArray[_this.Ask_VoiceQuestionArrayIndex]==1)
        {
            _this.askOddQuestion();
            console.log("ask odd question");
        }
        else
        {            
            _this.askEvenQuestion();
             console.log("ask even question");
            
        }

        _this.time.events.add(2000,function(){
            _this.selectingBox();
            _this.Question_flag=2;
        });

    },

    askOddQuestion:function(){
        _this.oddquestionSound = document.createElement('audio');
        _this.oddquestionSoundsrc = document.createElement('source');
        _this.oddquestionSoundsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-OE-1B-G6/" + _this.languageSelected 
                                               + "/NS-OE-1B-G6-b.mp3");
        _this.oddquestionSound.appendChild(_this.oddquestionSoundsrc);
        _this.oddquestionSound.play();
        console.log("The url for odd Q: " + _this.oddquestionSoundsrc.getAttribute("src"));
    },

    askEvenQuestion:function(){
        _this.evenquestionSound = document.createElement('audio');
        _this.evenquestionSoundsrc = document.createElement('source');
        _this.evenquestionSoundsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-OE-1B-G6/" + _this.languageSelected 
                                                + "/NS-OE-1B-G6-a.mp3");
        _this.evenquestionSound.appendChild(_this.evenquestionSoundsrc);
        _this.evenquestionSound.play();
        console.log("The url for eve Q: " + _this.evenquestionSoundsrc.getAttribute("src"));
    },

    selectingBox:function(){
        
        _this.QuestionBox.inputEnabled=true;
        _this.QuestionBox.input.useHandCursor=true;
        _this.QuestionBox.events.onInputDown.add(_this.showSelection,_this.QuestionBox);
        
        _this.QuestionBox1.inputEnabled=true;
        _this.QuestionBox1.input.useHandCursor=true;
        _this.QuestionBox1.events.onInputDown.add(_this.showSelection1,_this.QuestionBox1);
        
        _this.QuestionBox2.inputEnabled=true;
        _this.QuestionBox2.input.useHandCursor=true;
        _this.QuestionBox2.events.onInputDown.add(_this.showSelection2,_this.QuestionBox2);
        
        _this.QuestionBox3.inputEnabled=true;
        _this.QuestionBox3.input.useHandCursor=true;
        _this.QuestionBox3.events.onInputDown.add(_this.showSelection3,_this.QuestionBox3);

        _this.tickButton.inputEnabled = true;
        _this.tickButton.input.useHandCursor=true;
        _this.tickButton.events.onInputDown.add(_this.evaluation);
        
        
    },

    showSelection: function(target)
    {
        _this.clickSound.play();
        _this.Question_flag=2;
        if(target.frame == 1)
        {
            target.frame = 0;
            _this.SelectedNumBox[0] = 0;
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[0] = 1;
        }        
    
    }, 

    showSelection1: function(target)
    {
        _this.clickSound.play();
        _this.Question_flag=2;
        if(target.frame == 1)
        {
            target.frame = 0;
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
        _this.Question_flag=2;
        if(target.frame == 1)
        {
            target.frame = 0;
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
         _this.Question_flag=2;   
        if(target.frame == 1)
        {
            target.frame = 0;
            _this.SelectedNumBox[3] = 0;
        }
        else
        {
            target.frame = 1;
            _this.SelectedNumBox[3] = 1;
        }    
    }, 


    evaluation:function()
    {
        _this.clickSound.play();  
        _this.tickButton.inputEnabled=false;
        _this.QuestionBox.inputEnabled=false;
        _this.QuestionBox1.inputEnabled=false;
        _this.QuestionBox2.inputEnabled=false;
        _this.QuestionBox3.inputEnabled=false;
        
        selected=0;
        Number_evn_odd=0;
        if(_this.Ask_VoiceQuestionArray[_this.Ask_VoiceQuestionArrayIndex]==2)
        {
            for(var i=0;i<4;i++)
            {              
                if(_this.NumberTypeArray[i]==1)//checking for even
                {
                    Number_evn_odd++;
                    if(_this.SelectedNumBox[i]==1)//checking for selected or not
                    {                            
                        selected++;
                    }
                    
                }
                else
                {                    
                    if(_this.SelectedNumBox[i]==1)
                    {
                        selected--;
                    }
                    
                }
                
            }
           
        }
        else if(_this.Ask_VoiceQuestionArray[_this.Ask_VoiceQuestionArrayIndex]==1)
        {
            for(var i=0;i<4;i++)
            {
                if(_this.NumberTypeArray[i]==0)//checking for even
                {
                    Number_evn_odd++;
                    if(_this.SelectedNumBox[i]==1)//checking for selected or not
                    {                            
                        selected++;
                    }
                    
                }
                else
                {                    
                    if(_this.SelectedNumBox[i]==1)
                    {
                        selected--;
                    }
                    
                }
                
            }
           
        }
        _this.noofAttempts++;    
        if(Number_evn_odd == selected)
        {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.AnsTimerCount = 0;
            _this.noofAttempts =0;
            
            _this.celebrationSound.play();
            _this.celebration();
            _this.starActions();


            _this.time.events.add(3000,function(){
                _this.destroy();
                _this.Question_flag=-1;
            }); 
        }
        else
        {
            _this.wrongSound.play();
            _this.time.events.add(1000,function(){
                _this.Question_flag=-1;
                _this.removeObject();
//                _this.Ask_VoiceQuestion();
                _this.gotoOddEven();
            });
        } 
        
    },
    
    celebration:function(){
        if(_this.EggOrApple==0){
            for(var i=0;i<_this.appleGroup1.length;i++)
            _this.appleGroup1.getChildAt(i).frame=1;
        }
        else if(_this.EggOrApple==1){
            for(var i=0;i<_this.eggGroup1.length;i++)
            _this.eggGroup1.getChildAt(i).frame=1;
        }
    },

    removeObject:function(){

//        _this.QuestionBox.frame=0;
//        _this.QuestionBox1.frame=0;
//        _this.QuestionBox2.frame=0;
//        _this.QuestionBox3.frame=0;
//        _this.SelectedNumBox[0]=0;
//        _this.SelectedNumBox[1]=0;
//        _this.SelectedNumBox[2]=0;
//        _this.SelectedNumBox[3]=0;
    
        _this.QuestionBox.removeChild(_this.enterTxt);
        _this.QuestionBox1.removeChild(_this.enterTxt1);
        _this.QuestionBox2.removeChild(_this.enterTxt2);
        _this.QuestionBox3.removeChild(_this.enterTxt3); 

        _this.QuestionBox.destroy();
        _this.QuestionBox1.destroy();
        _this.QuestionBox2.destroy();
        _this.QuestionBox3.destroy();
        _this.tickButton.destroy();
        _this.Basket.destroy();
        
        if(_this.EggOrApple==0)
        {
           _this.appleGroup1.destroy();
           _this.appleTray.destroy();
           _this.appleTray1.destroy();
           _this.appleTray2.destroy();
           _this.appleTray3.destroy();

        }
        else if(_this.EggOrApple==1)
        {
           _this.eggGroup1.destroy();
           _this.eggTray.destroy();
           _this.eggTray1.destroy();
           _this.eggTray2.destroy();
           _this.eggTray3.destroy();                                                
        }
        _this.SelectedNumBox[0]=0;
        _this.SelectedNumBox[1]=0;
        _this.SelectedNumBox[2]=0;
        _this.SelectedNumBox[3]=0;

    },

    destroy: function () {

        _this.time.events.add(1000, function () {
            _this.QuestionBox.removeChild(_this.enterTxt);
            _this.QuestionBox1.removeChild(_this.enterTxt1);
            _this.QuestionBox2.removeChild(_this.enterTxt2);
            _this.QuestionBox3.removeChild(_this.enterTxt3); 

            _this.QuestionBox.destroy();
            _this.QuestionBox1.destroy();
            _this.QuestionBox2.destroy();
            _this.QuestionBox3.destroy();
            _this.tickButton.destroy();
            _this.Basket.destroy();
        
            if(_this.EggOrApple==0)
            {
               _this.appleGroup1.destroy();
               _this.appleTray.destroy();
               _this.appleTray1.destroy();
               _this.appleTray2.destroy();
               _this.appleTray3.destroy();
           
            }
            else if(_this.EggOrApple==1)
            {
               _this.eggGroup1.destroy();
               _this.eggTray.destroy();
               _this.eggTray1.destroy();
               _this.eggTray2.destroy();
               _this.eggTray3.destroy();                                                
            } 
            _this.SelectedNumBox[0]=0;
            _this.SelectedNumBox[1]=0;
            _this.SelectedNumBox[2]=0;
            _this.SelectedNumBox[3]=0;
            
            
            if (_this.count1 < 6)
            {
                _this.time.events.add(1000, function () { _this.start(); })
            }
            else
            {
                _this.timer1.stop();
                _this.timer1=null;
                _this.stopVoice();
                //_this.time.events.add(1000,function(){ window.parent.location.reload();});
                _this.time.events.add(900,function()
                { 
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                    //_this.state.start('score');
                   _this.state.start('score',true,false,gameID,_this.microConcepts);
                    // console.log(_this.game_id);
                    // console.log(_this.userHasPlayed);
                    // console.log(_this.timeinMinutes);
                    // console.log(_this.timeinSeconds);
                    // console.log(_this.score, "score");
                    // console.log(_this.gradeTopics);
                    // console.log(_this.grade);
                    // console.log(_this.microConcepts);
                });
            }
        });
    },


    secondBox:function(){
        
        var delay;
        
        _this.Basket.destroy();
        
        if (_this.NumberText <= 3) delay = 2500;
        else delay = 1500;
        
        _this.time.events.add(delay, function (){
            _this.QuestionBox.frame=0;
            _this.QuestionBox1.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox1.visible=true;
            
            //* Add a basket on screen with eggs.
            _this.ShowBasket(1)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(1);  //* passing 1 to show egg. passing 2 to show apple.
        });
        

        if (_this.NumberText1%2 == 0)
        {
            _this.IsEvenOdd1 = 0;
        }
        else
        {
            _this.IsEvenOdd1 = 1;
        }

    },

    secondBox1:function(){

        var delay;
        
        _this.Basket.destroy();
        
        if (_this.NumberText <= 3) delay = 2500;
        else delay = 1500;
        
        _this.time.events.add(delay, function (){
            _this.QuestionBox.frame=0;
            _this.QuestionBox1.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox1.visible=true;
            
            //* Add a basket on screen with eggs.
            _this.ShowBasket(2)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(2);  //* passing 1 to show egg. passing 2 to show apple.
            
//            _this.QuestionBox1.inputEnabled=true;
//            _this.QuestionBox1.input.useHandCursor=true;
//            _this.QuestionBox1.events.onInputDown.add(_this.AppleAppears,_this.QuestionBox1);
//            _this.QuestionBox.events.onInputDown.removeAll();
        });
        

        if (_this.NumberText1%2 == 0)
        {
            _this.IsEvenOdd1 = 0;
        }
        else
        {
            _this.IsEvenOdd1 = 1;
        }

    },

    thirdBox:function(){
        
        var delay;
        
        _this.Basket.destroy();
        
        if (_this.NumberText1 <= 3) delay = 2500;
        else delay = 1500;
         
         _this.time.events.add(delay, function (){
            _this.QuestionBox1.frame=0;
            _this.QuestionBox2.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox2.visible=true;
             
            //* Add a basket on screen with eggs.
            _this.ShowBasket(1)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(1);  //* passing 1 to show egg. passing 2 to show apple.
             
//            _this.QuestionBox2.inputEnabled=true;
//            _this.QuestionBox2.input.useHandCursor=true;
//            _this.QuestionBox2.events.onInputDown.add(_this.EggAppears,_this.QuestionBox2);
//            _this.QuestionBox1.events.onInputDown.removeAll();
        });
        

        if (_this.NumberText2%2 == 0)
        {
            _this.IsEvenOdd2 = 0;
        }
        else
        {
            _this.IsEvenOdd2 = 1;
        }



    },
    thirdBox1:function(){

        var delay;
        
        _this.Basket.destroy();
        
        if (_this.NumberText1 <= 3) delay = 2500;
        else delay = 1500;
        
         _this.time.events.add(delay, function (){
            _this.QuestionBox1.frame=0;
            _this.QuestionBox2.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox2.visible=true;
             
            //* Add a basket on screen with eggs.
            _this.ShowBasket(2)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(2);  //* passing 1 to show egg. passing 2 to show apple.
             
//            _this.QuestionBox2.inputEnabled=true;
//            _this.QuestionBox2.input.useHandCursor=true;
//            _this.QuestionBox2.events.onInputDown.add(_this.AppleAppears,_this.QuestionBox2);
//            _this.QuestionBox1.events.onInputDown.removeAll();
        });
        

        if (_this.NumberText2%2 == 0)
        {
            _this.IsEvenOdd2 = 0;
        }
        else
        {
            _this.IsEvenOdd2 = 1;
        }
    },

    fourthBox:function(){
        
        var delay;
        
        _this.Basket.destroy();
        
        if (_this.NumberText2 <= 3) delay = 2500;
        else delay = 1500;
         
         _this.time.events.add(delay, function (){
            _this.QuestionBox2.frame=0;
            _this.QuestionBox3.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox3.visible=true;
             
            //* Add a basket on screen with eggs.
            _this.ShowBasket(1)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(1);  //* passing 1 to show egg. passing 2 to show apple.
             
//            _this.QuestionBox3.inputEnabled=true;
//            _this.QuestionBox3.input.useHandCursor=true;
//            _this.QuestionBox3.events.onInputDown.add(_this.EggAppears,_this.QuestionBox3);
//            _this.QuestionBox2.events.onInputDown.removeAll();
        });
        

        if (_this.NumberText3%2 == 0)
        {
            _this.IsEvenOdd3 = 0;
        }
        else
        {
            _this.IsEvenOdd3 = 1;
        }
    },

    fourthBox1:function(){
        
        var delay;
        _this.Basket.destroy();
        
        
        if (_this.NumberText2 <= 3) delay = 2500;
        else delay = 1500;
         
         _this.time.events.add(delay, function (){
            _this.QuestionBox2.frame=0;
            _this.QuestionBox3.frame=1;
            _this.counterCelebrationSound.play();
            _this.nexttray++;
            _this.QuestionBox3.visible=true;
             
            //* Add a basket on screen with eggs.
            _this.ShowBasket(2)  //* 1 stands for eggs. 2 for apples.
            //* first show two eggs to be dragged by the player.
            _this.ShowInitialDragObj(2);  //* passing 1 to show egg. passing 2 to show apple.
             
//            _this.QuestionBox3.inputEnabled=true;
//            _this.QuestionBox3.input.useHandCursor=true;
//            _this.QuestionBox3.events.onInputDown.add(_this.AppleAppears,_this.QuestionBox3);
//            _this.QuestionBox2.events.onInputDown.removeAll();
        });
        

        if (_this.NumberText3%2 == 0)
        {
            _this.IsEvenOdd3 = 0;
        }
        else
        {
            _this.IsEvenOdd3 = 1;
        }

    },

    starActions: function () 
    {
        _this.score++;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NS_OE_1A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
        // _this.microConcepts = "Number Systems";
        _this.anim.play();
        _this.count1++;

    },

    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }
    },


    updateTimer: function () {
        _this.counterForTimer++;
        if (_this.counterForTimer > 59) {
            _this.counterForTimer = 0;

            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            }
            else {
                _this.minutes = _this.minutes + 1;
            }
        }
        else {
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },


    shutdown: function () {
        console.log("inside shutdown function");
    }


}