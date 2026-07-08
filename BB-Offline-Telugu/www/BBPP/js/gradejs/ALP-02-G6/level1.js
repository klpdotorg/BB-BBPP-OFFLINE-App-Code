Game.ALP_02_G6level1 = function () { };


Game.ALP_02_G6level1.prototype =
{
    init: function (param, score) {
        _this = this;

        this.Stararr = param;
        this.score = score;
        _this = this;
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
        _this.clickSoundsrc.setAttribute("src",  window.baseUrl+ "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src",  window.baseUrl+ "sounds/celebration.mp3"); 
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src",  window.baseUrl+ "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src",  window.baseUrl+ "sounds/wrongans.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src",  window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.Ask_Question1 = _this.createAudio("ALP-02-G6A");
        //_this.Ask_Question2 = _this.createAudio("V2");

        telInitializerbbpp.gameIdInit("ALP_02_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.trackCount = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.starsGroup;
        _this.selectedAns1='';
        _this.selectedAns2='';
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.answer=0;
        _this.stage=0;
        _this.Question_flag=0;
        _this.starting=0;
        _this.objectCounter =0;
        _this.i = 0;
        _this.j = 0;
        _this.limit =0;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;
       
        _this.counterForTimer = 0;
        _this.array=["3n", "2n", "3n", "2n", "4n", "5n", "3n", "2n+1", "3n+1", "5n+1", "7n+1", "4n+1", "3n+1", "2n+1"];
        _this.arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        _this.shuffle(_this.arr);

        _this.questionType2OrginalArray = []; 
        
        _this.col1objectArrayX = [148,188,148,188];
        _this.col1objectArrayY = [70,70,138,138];

        _this.col1purpleObjArrayX =[148,188,148,188];
        _this.col1purpleObjArrayY = [270,336,270,336];

        _this.col2objectArrayX = [240,280,320,360,400,440,480,520];
        _this.col2objectArrayY = [70,137];

        _this.col3objectArrayX = [580,620,660,700,740,780,820,860];
        _this.col3objectArrayY = [70,140];

        _this.col2purpleArrayX =[240,280,320,360,400,440,480,520,240,280,320,360,400,440,480,520];
        _this.col2purpleArrayY =[270, 336];

        _this.col3purpleArrayX =[580,620,660,700,740,780,820,860,580,620,660,700,740,780,820,860];
        _this.col3purpleArrayY =[270, 336];

        _this.empty_pos2Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        _this.empty_pos3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        _this.empty_pos1Array = [0,0,0,0];
        _this.tweenObjectGroup = _this.add.group();
        //  _this.draggedPurpleGroup = _this.add.group();
        // _this.initialObjectGroup = _this.add.group();
        _this.initObjectArray =[];

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6Algebra', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.Ask_Question1.play();
                }
                // else if (_this.Question_flag == 1) {
                //     _this.Ask_Question2.play();
                // }
          
                _this.time.events.add(4000, function () {
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

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        _this.greenObjectArray = [];
    
        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);

   
    },
    
    createAudio: function (src) 
    {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src",  window.baseUrl+ "questionSounds/ALP-02-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
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

    shuffle: function (array) {
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

    getQuestion: function (target) 
    {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.completed=0;
        _this.current=0;
        _this.choice=_this.arr[_this.starting++];

        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);

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

        //_this.Question_flag=0;
       
        _this.Initial_randomizing();
        _this.displayInitialScreen();
 
        if(_this.count1 == 0)
        {
            _this.Ask_Question1.play();
            _this.showHandSymbol();  //* demonstrate how to play the game.
        }

        _this.Question_flag=1;
        // if(_this.count1 == 0)
        // {
        //     _this.time.events.add(4500, function()
        //     {
        //         _this.Ask_Question2.play();
        //     });
        // }     
        _this.questionid = 1;

    },

    Initial_randomizing : function()
    {
        //* Randomize the objects to be displayed on the screen for each question (Cup and Elephant)
        //* Randomize the question type between m/4 , m+3, m*2.
        //* Randomize the numbers based on the question type
        //* 3 arrays to store object, question type and numbers.

        _this.objectArray = []; //* 1 = elephant , 2= cup

        _this.questionTypeArray = []; //1 ,2 ,3
        _this.questionType1Array =[8,12,16];//* m/4
        _this.shuffle(_this.questionType1Array);
        
        _this.questionType3optionArray = [1,2,2,1]; //* pick 1 or 2 for multiplication
        _this.shuffle(_this.questionType3optionArray);
        
        _this.questionType = Math.floor(Math.random() * (5 - 1) + 1);
        _this.questionTypeArray.push(_this.questionType);
       //_this.questionTypeArray.push(4);

        _this.objectValue = Math.floor(Math.random() * (3 - 1) + 1); 
        _this.objectArray.push(_this.objectValue);
        //_this.objectArray.push(1);

        if(_this.count1 < 1)
        {
            _this.Add_countTracker = 0; //* variables to keep track of the array element
            _this.Add_countTracker2 = 1;

            _this.Add_countTracker1 = 0; //* variables to keep track of the array element
            _this.Add_countTracker12 = 1;
    
            _this.Multi_countTracker = 0;
            _this.Multi_countTracker2 = 1;

            _this.Multi_countTracker1 = 0;
            _this.Multi_countTracker12 = 1;

            _this.Sub_countTracker = 0;
            _this.Sub_countTracker2 = 1;

            _this.Sub_countTracker1 = 0;
            _this.Sub_countTracker12 = 1;

            _this.Div_countTracker = 0;
            _this.Div_countTracker2 = 1;

            _this.Div_countTracker1 = 0;
            _this.Div_countTracker12 = 1;
    
            _this.questionType2Array =[];//* m+3
            _this.questionType3Array =[];//* m*2
            _this.questionType4Array =[];//* m-3 for subtraction

            _this.questionType2Array[0] = 1;
            _this.questionType3Array[0] = 1;
            _this.questionType3Array[1] = 2;
            _this.questionType4Array[0] = 4;

            _this.allQType = 0;
            _this.all_TypeQAarray = [1,2,3,4,5,6,7,8,9,10];
            _this.all_TypeQAarray = _this.shuffle(_this.all_TypeQAarray);

            //*m/4 -> 8/4, 12/4, 16/4
            //*m/3 -> 6/3, 9/3, 12/3 , 15,3
            //*m/2 -> 6/2, 8/2, 10/2, 12/2, 14/2, 16/2
            _this.divType1Array = [6,8,10,12,14,16]; // m/2
            _this.divType1Array = _this.shuffle(_this.divType1Array);
            _this.divType2Array = [6,9,12,15]; // m/3
            _this.divType2Array = _this.shuffle(_this.divType2Array);
            _this.divType3Array = [8,12,16]; // m/4
            _this.divType3Array = _this.shuffle(_this.divType3Array);
         
            // m*4 -> 2*4, 3*4, 4*4
            // m*3 -> 2*3, 3*3, 4*3, 5*3
            // m*2 -> 3*2, 4*2, 5*2, 6*2, 7*2, 8*2
            _this.mulType2Array = [3,4,5,6,7,8]; // m*2
            _this.mulType2Array = _this.shuffle(_this.mulType2Array);
            _this.mulType3Array = [2,3,4,5]; // m*3
            _this.mulType3Array = _this.shuffle(_this.mulType3Array);
            _this.mulType4Array = [2,3,4]; // m*4
            _this.mulType4Array = _this.shuffle(_this.mulType4Array);

            // m+2 -> 3+2, 4+2, 5+2 6+2 7+2 8+2 9+2 10+2 11+2 12+2 13+2 14+2
            // m+3 -> 2+3, 3+3, 4+3, 5+3 6+3 7+3 8+3 9+3 10+3 11+3 12+3 13+3 
            _this.addType2Array = [3,4,5,6,7,8,9,10,11,12,13,14]; // m+2
            _this.addType2Array = _this.shuffle(_this.addType2Array);
            _this.addType3Array = [2,3,4,5,6,7,8,9,10,11,12,13]; // m+3
            _this.addType3Array = _this.shuffle(_this.addType3Array);
            // _this.addType4Array = [2,3,4]; // m*4
            // _this.addType4Array = _this.shuffle(_this.addType4Array);

            //m-2 -> 5-2, ......16-2
            //m-3 -> 5-3, 6-3,....... 16-3
            _this.subType2Array = [5,6,7,8,9,10,11,12,13,14,15,16]; // m-2
            _this.subType2Array = _this.shuffle(_this.subType2Array);
            _this.subType3Array = [5,6,7,8,9,10,11,12,13,14,15,16]; // m-3
            _this.subType3Array = _this.shuffle(_this.subType3Array);
            // _this.addType4Array = [2,3,4]; // m*4
            // _this.addType4Array = _this.shuffle(_this.addType4Array);
            for(i=1; i< 13; i++)
            {
                //* ......Addition......
                // _this.objectValue = Math.floor(Math.random() * (3 - 1) + 1); 
                // _this.objectArray.push(_this.objectValue);

                //     //* here m can br from 1 tp 13
                _this.questionType2value = Math.floor(Math.random() * (14 - 2) + 2);
                for (j = 0; j <= i - 1; j++) 
                {
                    if (_this.questionType2value == _this.questionType2Array[j]) //_this.questionType2Array[j] &&
                    {
                        console.log("....................");
                        _this.questionType2value = Math.floor(Math.random() * (14 - 2) + 2);
                        j = -1;
                    }
                }
                _this.questionType2Array.push(_this.questionType2value);
                    // _this.questionType2value = Math.floor(Math.random() * (13 - 2) + 2);   
            }
                // //}
            for(i=2; i< 8; i++)
            {
                //* .....Multiplication....
                //* here m can br from 1 to 8 
                _this.questionType3value = Math.floor(Math.random() * (9 - 3) + 3);
                for (j = 0; j <= i - 1; j++) 
                {
                    if (_this.questionType3value == _this.questionType3Array[j])
                    {
                        console.log("....................");
                        _this.questionType3value = Math.floor(Math.random() * (9 - 3) + 3);
                        j = -1;
                    }
                }
                _this.questionType3Array.push(_this.questionType3value);
            }
            for(i= 1; i< 13; i++)
            {
                //* This for loop is for subtraction
                _this.questionType4value = Math.floor(Math.random() * (17 - 5) + 5);
                for (j = 0; j <= i - 1; j++) 
                {
                    if (_this.questionType4value == _this.questionType4Array[j])
                    {
                        console.log("....................");
                        _this.questionType4value = Math.floor(Math.random() * (17 - 5) + 5);
                        j = -1;
                    }
                }
                _this.questionType4Array.push(_this.questionType4value);
            }
        }

        console.log(_this.objectArray , "object array");
        console.log(_this.questionTypeArray, "Q type array");
        console.log(_this.questionType1Array, "numbers for m/4");
        console.log(_this.questionType2Array, "numbers for m+3");
        console.log(_this.questionType2OrginalArray, "Original Array numbers for m+3");
        console.log(_this.questionType3Array, "numbers for m*2");
        console.log(_this.questionType4Array, "numbers for m-3");
    },

    displayInitialScreen: function()
    {
        //* This function displays the initial screen with the big colum 
        //* and numbers, objects of the equation
        console.log("Initial screen ")
        _this.column = _this.add.image(50, 60, 'column1');

        switch(_this.all_TypeQAarray[_this.allQType])
        {
            case 1 : //* m/2("m/2")
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m/2");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 1;
                        _this.divType = 1;
                        break;
            case 2 : //* m/3
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m/3");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 2;
                        _this.divType = 2;
                        break;
            case 3 : //* m/4
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m/4");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                         _this.type_flag = 3;
                        _this.divType = 3;
                        break;
            case 4 : //* m*2
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m*2");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 4;
                        _this.divType = 1;
                        break;
            case 5 : //* m*3
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m*3");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 5;
                        _this.divType = 2;
                        break;
            case 6 : //* m*4
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m*4");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 6;
                        _this.divType = 3;
                        break;
            case 7 : //* m+2
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(65,410, "m+2");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                         _this.type_flag = 7;
                        _this.divType = 1;
                        break;
            case 8 : //* m+3
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(65,410, "m+3");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                         _this.type_flag = 8;
                        _this.divType = 2;
                        break;
            case 9 : //* m-2
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m-2");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                         _this.type_flag = 9;
                        _this.divType = 1;
                        break;
            case 10 : //* m-3
                        _this.box2= _this.add.image(55.5, 401,"textbox2");
                        _this.equationText = _this.add.text(68,410, "m-3");
                        _this.equationText.font = "Akzidenz-Grotesk BQ";
                        _this.equationText.fill = '#FF0000';
                        _this.type_flag = 10;
                        _this.divType = 2;
                        break;
        }
        console.log(_this.type_flag);

        _this.displayInitialObject(); //* objects to be displayed by the game
        //_this.dragpurpleObj();
    },
 
    displayInitialObject : function()
    {
        //* based on the question type Array this function will display the equation
        //* we have 3 equations now m/4, m+3, m*2.
        _this.initialObjectGroup = _this.add.group();
        _this.draggedPurpleGroup = _this.add.group();
        _this.draggedPurple2Group = _this.add.group();

        //* _this.trackCount this variable is used to keep track of the array. It is initialised as 0.
        if(_this.type_flag == 1 ||_this.type_flag == 2|| _this.type_flag == 3)
        {
            console.log("Divvv")
            _this.displayforDivision();
        }
        else if(_this.type_flag == 4 ||_this.type_flag == 5|| _this.type_flag == 6)
        {
            console.log("Mullll")
            _this.displayforMultiplication();
        }
        else if(_this.type_flag == 7|| _this.type_flag == 8)
        {
            console.log("Addd")
            _this.displayforAddition();
        }
        else if(_this.type_flag == 9||_this.type_flag == 10)
        {
            console.log("Subbb")
            _this.displayforSubtraction();
        }
    },

    displayforDivision: function()
    {
        //* This function is for division euqation
        //* Add the objects based on the object type
        //* display the number for this equation 
       
        _this.divTypecol1Array = [4,2,2,4];
        _this.divTypecol1Array = _this.shuffle(_this.divTypecol1Array);
        _this.initialObjectsBytheGame();
        _this.col2box1 = _this.add.image(160,205, "textBox1");
        if(_this.type_flag == 3)
        {
            _this.col2textMValue1 = _this.add.text(179,214, "4");
            _this.col2textMValue1Text = 4;
        }
        else if(_this.type_flag== 2)
        {
            _this.col2textMValue1 = _this.add.text(179,214, "3");
            _this.col2textMValue1Text = 3;
        }
        else
        {
            _this.col2textMValue1 = _this.add.text(179,214, _this.divTypecol1Array[0]);
            _this.col2textMValue1Text = _this.divTypecol1Array[0];
        }
         //Display 4 objects initially for division
        _this.col2textMValue1.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue1.fill = '#FF0000';
     
        _this.draggable_Obj();

        _this.nextPurplePosX = 0;
        _this.nextPurplePosY = 0;

        for(i=0; i< _this.col2textMValue1Text; i++)
        {
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
        //*use this for later
        // _this.col2textMValue2 = _this.add.text(350,200, _this.questionType1Array[_this.count1]);
        // _this.col2textMValue3 = _this.add.text(600,200, _this.questionType1Array[1]);

        _this.box_flag = 1;
        _this.AnswerBox = _this.add.image(160, 404,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },

    displayforAddition : function()
    {
        //* This function is for multiplication euqation
        //* Add the objects based on the object type
        //* display the number for this equation
     
        _this.question_flag =2;
        //* This function is for addition euqation
        //* Add the objects based on the object type
        //* display the number for this equation
        _this.addType1Array = [1,2,1,2];
        _this.addType1Array = _this.shuffle(_this.addType1Array);
        _this.initialObjectsBytheGame();
        _this.col2box1 = _this.add.image(160,205, "textBox1");
        if(_this.type_flag == 8)
        {
            _this.col2textMValue1 = _this.add.text(179,214, "1");
            _this.col2textMValue1Text = 1;
        }
        else if(_this.type_flag == 7)
        {
            _this.col2textMValue1 = _this.add.text(179,214,  _this.addType1Array[0]);
            _this.col2textMValue1Text =  _this.addType1Array[0];
        }
      
        // _this.col2textMValue1 = _this.add.text(179,214, _this.col2textMValue1Text);
        _this.col2textMValue1.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue1.fill = '#FF0000';

        _this.draggable_Obj();

        for(i=0; i< _this.col2textMValue1Text; i++)
        {
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType2Array[1]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType2Array[2]);
        //_this.dragpurpleObj();

        _this.box_flag = 1;
        _this.AnswerBox = _this.add.image(160, 404,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },

    displayforMultiplication: function()
    {
        //* This function is for multiplication euqation
        //* Add the objects based on the object type
        //* display the number for this equation
    
        _this.question_flag =3;
        _this.mulType1Array = [1,2,2,1];
        _this.mulType1Array = _this.shuffle(_this.mulType1Array);
       _this.initialObjectsBytheGame();
       _this.col2box1 = _this.add.image(160,205, "textBox1");
       if(_this.type_flag == 6)
        {
            _this.col2textMValue1 = _this.add.text(179,214, "1");
            _this.col2textMValue1Text = 1;
        }
        else if(_this.type_flag == 5)
        {
            _this.col2textMValue1 = _this.add.text(179,214, "1");
            _this.col2textMValue1Text = 1;
        }
        else
        {
            _this.col2textMValue1 = _this.add.text(179,214, _this.mulType1Array[0]);
            _this.col2textMValue1Text = _this.mulType1Array[0];
        }
      
       _this.col2textMValue1.font = "Akzidenz-Grotesk BQ";
       _this.col2textMValue1.fill = '#FF0000';

       _this.draggable_Obj();

       for(i=0; i< _this.col2textMValue1Text ; i++)
        {
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType3Array[2]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType3Array[3]);
        _this.box_flag = 1;
        _this.AnswerBox = _this.add.image(160, 404,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },

    displayforSubtraction: function()
    {
        //* This function is for subtraction euqation
        //* Add the objects based on the object type
        //* display the number for this equation
        console.log("2nd Qq")
        _this.subType1Array2 = [2,3,4];
        _this.subType1Array2 = _this.shuffle(_this.subType1Array2);
        _this.subType1Array3 = [3,4];
        _this.subType1Array3 = _this.shuffle(_this.subType1Array3);
       _this.initialObjectsBytheGame();
       _this.col2box1 = _this.add.image(160,205, "textBox1");
       if(_this.type_flag == 10)
        {
            _this.col2textMValue1 = _this.add.text(179,214, _this.subType1Array3[_this.trackCount]);
            _this.col2textMValue1Text = _this.subType1Array3[_this.trackCount];
        }
        else if(_this.type_flag == 9)
        {
            _this.col2textMValue1 = _this.add.text(179,214, _this.subType1Array2[_this.trackCount]);
            _this.col2textMValue1Text = _this.subType1Array2[_this.trackCount];
        }
      
      // _this.col2textMValue1 = _this.add.text(179,214, _this.questionType4Array[_this.trackCount]);
       _this.col2textMValue1.font = "Akzidenz-Grotesk BQ";
       _this.col2textMValue1.fill = '#FF0000';

       _this.draggable_Obj();

       for(i=0; i<  _this.col2textMValue1Text; i++)
        {
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col1objectArrayX[i],_this.col1objectArrayY[i], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType4Array[1]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType4Array[2]);

        _this.box_flag = 1;
        _this.AnswerBox = _this.add.image(160, 404,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.addNumberPad();
    },
    
    showHandSymbol: function()
    {
        
        //* hand movements to show how to play the game.
        
        //* create a temporary tropy or cup based on randomization selected.
        if(_this.objectArray[_this.trackCount] == 1)
        {
            _this.Tempimg = _this.add.sprite(70,300, "chesscoin2");
            _this.Tempimg.frame = 1;
            _this.Tempimg.scale.setTo(0.9);
        }
        else if(_this.objectArray[_this.trackCount] == 2)
        {
            _this.Tempimg = _this.add.sprite(70,300, "Trophy2"); 
            _this.Tempimg.frame = 0;
            _this.Tempimg.scale.setTo(0.9);
        } 
        
        //* create a temporary hand symbol & move it around to show & finally to drag cup/trophy/
        _this.hand = _this.add.image(90,240, 'hand')
        _this.hand.scale.setTo(0.50);
        _this.hand.rotation = 1.5;
        _this.time.events.add(200,function() {
            _this.tempDragAction =_this.add.tween(_this.hand);
            _this.tempDragAction.to({ x:180, y:240}, 1000, 'Linear', true, 0);
            _this.tempDragAction.start();
        });
        
        _this.time.events.add(1500,function() {
            _this.tempDragAction =_this.add.tween(_this.hand);
            _this.tempDragAction.to({ x:90, y:440}, 500, 'Linear', true, 0);
            _this.tempDragAction.start();
        });
        
        _this.time.events.add(2500,function() {
            _this.tempDragAction =_this.add.tween(_this.hand);
            _this.tempDragAction.to({ x:180, y:440}, 1000, 'Linear', true, 0);
            _this.tempDragAction.start();
        });
        
        _this.time.events.add(4000,function() {
            _this.tempDragAction =_this.add.tween(_this.hand);
            _this.tempDragAction.to({ x:95, y:340}, 1000, 'Linear', true, 0);
            _this.tempDragAction.start();
        });
        _this.time.events.add(5500,function() {
            _this.tempDragAction =_this.add.tween(_this.hand);
            _this.tempDragAction.to({ x:155, y:340}, 1400, 'Linear', true, 0);
            _this.tempDragAction.start();
            
            _this.tempDragAction1 =_this.add.tween(_this.Tempimg);
            _this.tempDragAction1.to({ x:130, y:300}, 1500, 'Linear', true, 0);
            _this.tempDragAction1.start();
        });
        _this.time.events.add(7200,function(){
            _this.hand.destroy();
        });
        
        _this.time.events.add(7200,function(){
            _this.Tempimg.destroy();
        });
    },

    checkOverlap:function(spriteA, spriteB) 
    {     
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    eraserClicked: function(target)
    {
        console.log("erase");
        target.input.enableDrag(true);
        target.events.onDragStop.add(_this.smallEraserClicked, target);
    },

    smallEraserClicked:function(target)
    {
        console.log("Try to erase now")
        target.x = 77;
        target.y = 350;
      
        if(_this.checkOverlap(target,_this.initialObjectGroup)) //_this.img1
        {
            //_this.img1.visible = false;
            _this.initialObjectGroup.getChildAt(_this.initialObjectGroup.length - 1).visible = false;
            _this.initialObjectGroup.getChildAt(_this.initialObjectGroup.length - 1).destroy();
        }   
    },

    initialObjectsBytheGame : function()
    {
        //* display the initial object on the screen based on randomization of object type
        //* we have two type of objects currently Chesscoin and Cup.

        // _this.addEraserObj = _this.add.image(70,340,"eraser");
        // _this.addEraserObj.scale.setTo(0.9);
        // _this.addEraser = _this.add.image(77,350, "eraser1");
        // _this.addEraser.scale.setTo(0.9,0.9);
        // _this.addEraser.inputEnabled = true;
        // _this.addEraser.useHandCursor = true;
        // _this.addEraser.input.enableDrag(true);
        // _this.addEraser.events.onInputDown.add(_this.eraserClicked, _this);

        switch(_this.objectArray[_this.trackCount])
        {
            case 1 : _this.displaychesscoin();
                    break;
            case 2 : _this.displayTrophy();
        }
    
    },

    displayTrophy : function()
    {
        //* Display Trophy if the object is trophy for the equation 
        //* Display the first value(m)
        //* Display the euqation based on the quation type (Switch case is used here)
        // _this.col1purpleGroup = _this.add.group();
        _this.col1greenObj = _this.add.sprite(70,300, "Trophy2");
        _this.col1greenObj.frame = 0;
        _this.col1greenObj.scale.setTo(0.9);
       
        _this.col1purpleObj = _this.add.sprite(70,99, "Trophy2");
        _this.col1purpleObj.frame = 1;
        _this.col1purpleObj.scale.setTo(0.9);

        _this.box1 = _this.add.image(55.5, 205,"textbox2");
        _this.col1textM = _this.add.text(80,211, "m");
        _this.col1textM.font = "Akzidenz-Grotesk BQ";
        _this.col1textM.fill = '#FF0000';
       //console.log(_this.purpleobjectArray.length);
    },

    displaychesscoin : function()
    {
        //* Display Trophy if the object is chesscoin for the equation 
        //* Display the first value(m)
        //* Display the euqation based on the quation type (Switch case is used here)

        _this.col1greenObj = _this.add.sprite(70,300, "chesscoin2");
        _this.col1greenObj.frame = 1;
        _this.col1greenObj.scale.setTo(0.9);


        _this.col1purpleObj = _this.add.sprite(70,100, "chesscoin2");//
        _this.col1purpleObj.frame = 0;
        _this.col1purpleObj.scale.setTo(0.9);
         
        _this.box1 = _this.add.image(55.5, 205,"textbox2");
        _this.col1textM = _this.add.text(80,211, "m");
        _this.col1textM.font = "Akzidenz-Grotesk BQ";
        _this.col1textM.fill = '#FF0000';
    },   
    
    stopVoice: function () 
    {
        if (_this.playQuestionSound) 
        {
            if (_this.playQuestionSound.contains(_this.src)) 
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.playQuestionSound.paused) {
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }
        if(_this.Ask_Question1)
        {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null; 
           //_this.VoiceNote1src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

    generateStarsForTheScene: function (count) 
    {
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

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad:function()
    {
        _this.Choice=1;
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();
        
        var bottomnumpadbg = _this.numGroup.create(0,515,'numpadbg');
        bottomnumpadbg.scale.setTo(1,1);
        
        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,552,'Numberpad'); 
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8,0.8);
            _this.numbg.name =i+1;
            _this.numbg.frame=i;
                        
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
           
            _this.x+=73;           
        }

        _this.wrongbtn = _this.numGroup.create(_this.x+10,552,'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8,0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked,_this);
                   
        _this.rightbtn = _this.numGroup.create(_this.x+80,552,'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8,0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked1,_this);
       
        _this.enterTxt = _this.add.text(-100,8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';
   
        _this.numpadTween = _this.add.tween(_this.numGroup);
        //_this.AnswerBox.visible=true;
        //tween in the number pad after a second.
        _this.tweenNumPad();   
    },
    
    wrongbtnClicked:function(target)
    {
        if(_this.questionTypeArray[_this.trackCount] == 4 && _this.subType1Array2[_this.trackCount] == 2)
        {
            if(_this.AnswerBox.name != 0)
            {
                console.log(" sub casee")
                _this.clickSound.play();
                _this.eraseScreen();
            }
            else
            {
                console.log(" Zero casee")
                _this.clickSound.play();
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.AnswerBox.name = 1;
            }
        }
        else
        {
            _this.clickSound.play();
            _this.eraseScreen();
        }   
    },

    eraseScreen:function(target)
    {
         _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);
       
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
        // _this.AnswerBox.name = '';
    },

    tweenNumPad: function()
    {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x:0, y:-43},1000, 'Linear', true, 0);   
    },

    numClicked:function(target)
    {
        console.log(target.name)
        _this.samplevar = target.name;
        _this.clickSound.play();
       if(_this.selectedAns2==='')
        {
            if (_this.selectedAns1===0 && target.name!==0)
            {
                _this.selectedAns2 = target.name;
            }
            else if(_this.selectedAns1!=='' && _this.selectedAns1!==0)
            {
                _this.selectedAns2 = target.name;
            }
            else if(_this.selectedAns1!== 0 && target.name==10)
            {
                _this.selectedAns1 = 0;
            }
            else
            {
                _this.selectedAns1 = target.name;
            }
        }
            
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible=false;
        
        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;
        
        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;
        
        if(_this.selectedAns2==="")
        _this.enterTxt = _this.add.text(17,8,"" +var_selectedAns1+var_selectedAns2, { fontSize: '30px' });
        else
        _this.enterTxt = _this.add.text(8,8,"" +var_selectedAns1+var_selectedAns2, { fontSize: '30px' });
        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible=true;   
        console.log(_this.selectedAns1, _this.selectedAns2)
        _this.AnswerBox.name = Number(''+var_selectedAns1+var_selectedAns2);
        console.log(_this.AnswerBox.name);
    },

    rightbtnClicked1: function(target)
    {
        console.log(target.name);
        console.log("inside rightbtn");
        _this.clickSound.play();
        // _this.draggedPurpleGroup = _this.add.group();
        
        if(_this.type_flag == 7 || _this.type_flag == 8)
        {
            if(_this.box_flag == 3)
            {
                if(_this.type_flag == 7)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.addType2Array[_this.Add_countTracker2] + 2 && _this.draggedPurple2Group.length == _this.addType2Array[_this.Add_countTracker2] + 2) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.numpad = 0;
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);

                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                            //_this.getQuestion();
                        // _this.displayInitialScreen();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 13");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 8)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.addType3Array[_this.Add_countTracker12] + 3 && _this.draggedPurple2Group.length == _this.addType3Array[_this.Add_countTracker12] + 3) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.numpad = 0;
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);

                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 13");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }  
            }
            if(_this.box_flag == 2)
            {
                if(_this.type_flag == 7)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.addType2Array[_this.Add_countTracker] + 2  && _this.draggedPurpleGroup.length == _this.addType2Array[_this.Add_countTracker] + 2)
                    {
                    // && _this.initialObjectGroup.length == _this.divAnswer
                        _this.counterCelebrationSound.play();
                        _this.add2Answer1 = _this.addType2Array[_this.Add_countTracker] + 2 ;
                        if(_this.add2Answer1 < 10)
                        {
                            _this.displayAnswer2 = _this.add.text(17,8,_this.add2Answer1, { fontSize: '30px' });
                        }
                        else
                        {
                            _this.displayAnswer2 = _this.add.text(8,8,_this.add2Answer1, { fontSize: '30px' });
                        }
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3AdditionObjects();
                        _this.eraseScreen();
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);

                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log("group len", _this.draggedPurpleGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound 12");
                        console.log("group len", _this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    } 
                }
                if(_this.type_flag == 8)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.addType3Array[_this.Add_countTracker1] + 3 && _this.draggedPurpleGroup.length == _this.addType3Array[_this.Add_countTracker1] + 3)
                    {
                    // && _this.initialObjectGroup.length == _this.divAnswer
                        _this.counterCelebrationSound.play();
                        _this.add2Answer2 = _this.addType3Array[_this.Add_countTracker1] + 3;
                        if(_this.add2Answer2 < 10)
                        {
                            _this.displayAnswer2 = _this.add.text(17,8,_this.add2Answer2, { fontSize: '30px' });
                        }
                        else
                        {
                            _this.displayAnswer2 = _this.add.text(8,8,_this.add2Answer2, { fontSize: '30px' });
                        }
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3AdditionObjects();
                        _this.eraseScreen();
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);

                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log("group len", _this.draggedPurpleGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound 12");
                        console.log("group len", _this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
            }
            if(_this.box_flag == 1)
            {
                if(_this.type_flag == 7)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.addType1Array[_this.trackCount] +2  && _this.initialObjectGroup.length == _this.addType1Array[_this.trackCount] +2)
                    {
                        // && _this.initialObjectGroup.length == _this.divAnswer
                        _this.counterCelebrationSound.play();
                        _this.addAnswerb1 = _this.addType1Array[_this.trackCount] +2;
                        _this.displayAnswer = _this.add.text(17,8,_this.addAnswerb1, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2AdditionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        console.log("group len", _this.initialObjectGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 8)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === 1 + 3  && _this.initialObjectGroup.length == 1 + 3)
                    {
                        // && _this.initialObjectGroup.length == _this.divAnswer
                        _this.counterCelebrationSound.play();
                        _this.addAnswerb2 = 4;
                        _this.displayAnswer = _this.add.text(17,8,_this.addAnswerb2, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2AdditionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        console.log("group len", _this.initialObjectGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }   
            }
        }
        if(_this.type_flag == 1 || _this.type_flag == 2|| _this.type_flag == 3)
        {
            if(_this.box_flag == 3)
            {
                if(_this.type_flag == 1)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType1Array[_this.Div_countTracker2]/2 && _this.draggedPurple2Group.length == _this.divType1Array[_this.Div_countTracker2]/2) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 2)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType2Array[_this.Div_countTracker12]/3 && _this.draggedPurple2Group.length == _this.divType2Array[_this.Div_countTracker12]/3) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {

                          _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 3)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType3Array[1]/4 && _this.draggedPurple2Group.length == _this.divType3Array[1]/4) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }   
            }
            if(_this.box_flag == 2)
            {
                if(_this.type_flag == 1)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType1Array[_this.Div_countTracker]/2 && _this.draggedPurpleGroup.length == _this.divType1Array[_this.Div_countTracker]/2) // || _this.div2Answer
                    {
                        console.log("Second IFFF");
                        _this.counterCelebrationSound.play();
                        _this.div2Answerb1 = _this.divType1Array[_this.Div_countTracker]/2;
                        _this.displayAnswer2 = _this.add.text(17,8,_this.div2Answerb1, { fontSize: '30px' });
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3DivisionObjects();
                        _this.eraseScreen(); 
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);
    
                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log(_this.draggedPurpleGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound");
                        console.log("group len",_this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();        
                    }
                }
                if(_this.type_flag == 2)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType2Array[_this.Div_countTracker1]/3 && _this.draggedPurpleGroup.length == _this.divType2Array[_this.Div_countTracker1]/3) // || _this.div2Answer
                    {
                        console.log("Second IFFF");
                        _this.counterCelebrationSound.play();
                        _this.div2Answerb2 = _this.divType2Array[_this.Div_countTracker1]/3;
                        _this.displayAnswer2 = _this.add.text(17,8,_this.div2Answerb2, { fontSize: '30px' });
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3DivisionObjects();
                        _this.eraseScreen(); 
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);
    
                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log(_this.draggedPurpleGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound");
                        console.log("group len",_this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 3)
                {
                   if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.divType3Array[0]/4 && _this.draggedPurpleGroup.length == _this.divType3Array[0]/4) // || _this.div2Answer
                   {
                       console.log("Second IFFF");
                       _this.counterCelebrationSound.play();
                       _this.div2Answerb3 = _this.divType3Array[0]/4;
                       _this.displayAnswer2 = _this.add.text(17,8,_this.div2Answerb3, { fontSize: '30px' });
                       _this.displayAnswer2.align = 'right';
                       _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                       _this.displayAnswer2.fill = '#65B4C3';
                       _this.displayAnswer2.fontWeight = 'normal';
                       _this.AnswerBox.addChild(_this.displayAnswer2);
                       _this.AnswerBox.frame = 0;
                       _this.numGroup.destroy();
                       _this.displayCol3DivisionObjects();
                       _this.eraseScreen(); 
                       _this.draggedPurpleGroup.forEach(element => {
                           element.inputEnabled = false;
                       });
                       _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                       console.log(_this.empty_pos2Array);
   
                       _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                       console.log(_this.empty_pos2Array);
                       console.log(_this.draggedPurpleGroup.length);   
                   }
                   else
                   {
                       console.log("wromg sound");
                       console.log("group len",_this.draggedPurpleGroup.length);
                       _this.wrongSound.play();
                       _this.eraseScreen();       
                   } 
                }  
            }
            if(_this.box_flag == 1)
            {
                if(_this.type_flag == 1)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) ===   _this.divTypecol1Array[_this.trackCount] / 2  && _this.initialObjectGroup.length ==   _this.divTypecol1Array[_this.trackCount]/ 2) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        console.log("First IFFF");
                        _this.counterCelebrationSound.play();
                        _this.divAnswerb1 =  _this.divTypecol1Array[_this.trackCount] / 2;
                        _this.displayAnswer = _this.add.text(17,8,_this.divAnswerb1, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2DivisionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 11");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 2)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) ===  3 / 3  && _this.initialObjectGroup.length == 3 / 3) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        console.log("First IFFF");
                        _this.counterCelebrationSound.play();
                        _this.divAnswerb2 = 1;
                        _this.displayAnswer = _this.add.text(17,8,_this.divAnswerb2, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2DivisionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 11");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 3)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === 4 / 4 && _this.initialObjectGroup.length == 4/4) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        console.log("First IFFF");
                        _this.counterCelebrationSound.play();
                        _this.divAnswerb3 = 1;
                        _this.displayAnswer = _this.add.text(17,8,_this.divAnswerb3, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2DivisionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 11");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                } 
            }       
        }
        if(_this.type_flag == 4 || _this.type_flag == 5|| _this.type_flag == 6)
        {
            if(_this.box_flag == 3)
            {
                if(_this.type_flag == 4)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType2Array[_this.Multi_countTracker2]*2 && _this.draggedPurple2Group.length ==_this.mulType2Array[_this.Multi_countTracker2]*2) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        //_this.displayInitialScreen();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 5)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType3Array[_this.Multi_countTracker12]*3 && _this.draggedPurple2Group.length == _this.mulType3Array[_this.Multi_countTracker12]*3) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        //_this.displayInitialScreen();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 6)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType4Array[1]*4 && _this.draggedPurple2Group.length == _this.mulType4Array[1]*4) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                        //_this.displayInitialScreen();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    } 
                }  
            }
            if(_this.box_flag == 2)
            {
                if(_this.type_flag == 4)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType2Array[_this.Multi_countTracker]*2 && _this.draggedPurpleGroup.length == _this.mulType2Array[_this.Multi_countTracker]*2) // || _this.div2Answer
                    {
                    console.log("Second IFFF");
                    _this.counterCelebrationSound.play();
                    _this.mulAnswer2 = _this.mulType2Array[_this.Multi_countTracker]*2;
                    if(_this.mulAnswer2 <10)
                    {
                        _this.displayAnswer2 = _this.add.text(17,8,_this.mulAnswer2, { fontSize: '30px' });
                    }
                    else
                    {
                        _this.displayAnswer2 = _this.add.text(8,8,_this.mulAnswer2, { fontSize: '30px' });
                    }
                    _this.displayAnswer2.align = 'right';
                    _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                    _this.displayAnswer2.fill = '#65B4C3';
                    _this.displayAnswer2.fontWeight = 'normal';
                    _this.AnswerBox.addChild(_this.displayAnswer2);
                    _this.AnswerBox.frame = 0;
                    _this.numGroup.destroy();
                    _this.displayCol3MultipObjects();
                    _this.eraseScreen(); 
                    _this.draggedPurpleGroup.forEach(element => {
                        element.inputEnabled = false;
                    });
                    _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                    console.log(_this.empty_pos2Array);

                    _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    console.log(_this.empty_pos2Array);
                    console.log(_this.draggedPurpleGroup.length);   
                }
                else
                {
                    console.log("wromg sound 2");
                    console.log("group len",_this.draggedPurpleGroup.length);
                    _this.wrongSound.play();
                    _this.eraseScreen();        
                }
                }
                if(_this.type_flag == 5)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType3Array[_this.Multi_countTracker1]*3 && _this.draggedPurpleGroup.length == _this.mulType3Array[_this.Multi_countTracker1]*3) // || _this.div2Answer
                    {
                    console.log("Second IFFF");
                    _this.counterCelebrationSound.play();
                    _this.mulAnswer22 = _this.mulType3Array[_this.Multi_countTracker1]*3;
                    if(_this.mulAnswer22 <10)
                    {
                        _this.displayAnswer2 = _this.add.text(17,8,_this.mulAnswer22, { fontSize: '30px' });
                    }
                    else
                    {
                        _this.displayAnswer2 = _this.add.text(8,8,_this.mulAnswer22, { fontSize: '30px' });
                    }
                    _this.displayAnswer2.align = 'right';
                    _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                    _this.displayAnswer2.fill = '#65B4C3';
                    _this.displayAnswer2.fontWeight = 'normal';
                    _this.AnswerBox.addChild(_this.displayAnswer2);
                    _this.AnswerBox.frame = 0;
                    _this.numGroup.destroy();
                    _this.displayCol3MultipObjects();
                    _this.eraseScreen(); 
                    _this.draggedPurpleGroup.forEach(element => {
                        element.inputEnabled = false;
                    });
                    _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                    console.log(_this.empty_pos2Array);

                    _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    console.log(_this.empty_pos2Array);
                    console.log(_this.draggedPurpleGroup.length);    
                }
                else
                {
                    console.log("wromg sound 2");
                    console.log("group len",_this.draggedPurpleGroup.length);
                    _this.wrongSound.play();
                    _this.eraseScreen();        
                }
                
                }
                if(_this.type_flag == 6)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType4Array[0]*4 && _this.draggedPurpleGroup.length == _this.mulType4Array[0]*4) // || _this.div2Answer
                    {
                    console.log("Second IFFF");
                    _this.counterCelebrationSound.play();
                    _this.mulAnswer3 = _this.mulType4Array[0]*4 ;
                    if(_this.mulAnswer3 <10)
                    {
                        _this.displayAnswer2 = _this.add.text(17,8,_this.mulAnswer3, { fontSize: '30px' });
                    }
                    else
                    {
                        _this.displayAnswer2 = _this.add.text(8,8,_this.mulAnswer3, { fontSize: '30px' });
                    }
                    _this.displayAnswer2.align = 'right';
                    _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                    _this.displayAnswer2.fill = '#65B4C3';
                    _this.displayAnswer2.fontWeight = 'normal';
                    _this.AnswerBox.addChild(_this.displayAnswer2);
                    _this.AnswerBox.frame = 0;
                    _this.numGroup.destroy();
                    _this.displayCol3MultipObjects();
                    _this.eraseScreen(); 
                    _this.draggedPurpleGroup.forEach(element => {
                        element.inputEnabled = false;
                    });
                    _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                    console.log(_this.empty_pos2Array);

                    _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    console.log(_this.empty_pos2Array);
                    console.log(_this.draggedPurpleGroup.length);   
                }
                else
                {
                    console.log("wromg sound 2");
                    console.log("group len",_this.draggedPurpleGroup.length);
                    _this.wrongSound.play();
                    _this.eraseScreen();        
                }
                }
                
            }
            if(_this.box_flag == 1)
            {
                if(_this.type_flag == 4)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.mulType1Array[_this.trackCount]*2 && _this.initialObjectGroup.length == _this.mulType1Array[_this.trackCount]*2) // || _this.div2Answer
                    {
                    _this.counterCelebrationSound.play();
                    console.log("First IFFF");
                    _this.mulAnswer = _this.mulType1Array[_this.trackCount]*2;
                    _this.displayAnswer = _this.add.text(17,8,_this.mulAnswer, { fontSize: '30px' });
                    _this.displayAnswer.align = 'right';
                    _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                    _this.displayAnswer.fill = '#65B4C3';
                    _this.displayAnswer.fontWeight = 'normal';
                    _this.AnswerBox.addChild(_this.displayAnswer);
                    _this.AnswerBox.frame = 0;
                    _this.numGroup.destroy();
                    _this.displayCol2MultiObjects();
                    _this.eraseScreen();
                    _this.initialObjectGroup.forEach(element => {
                        element.inputEnabled = false;
                    });
                    //_this.initialObjectGroup.removeAll();
                    console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                } 
                if(_this.type_flag == 5)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === 3*1 && _this.initialObjectGroup.length == 3*1) // || _this.div2Answer
                    {
                        _this.counterCelebrationSound.play();
                        console.log("First IFFF");
                        _this.mul2Answer2 = 3;
                        _this.displayAnswer = _this.add.text(17,8,_this.mul2Answer2, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2MultiObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }
                if(_this.type_flag == 6)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === 1*4 && _this.initialObjectGroup.length == 1*4) // || _this.div2Answer
                    {
                        _this.counterCelebrationSound.play();
                        console.log("First IFFF");
                        _this.mul3Answer = 4;
                        _this.displayAnswer = _this.add.text(17,8,_this.mul3Answer, { fontSize: '30px' });
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol2MultiObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }   
            }   
        }
        if(_this.type_flag == 9|| _this.type_flag == 10)
        {
            //*Checking the answer of subtraction equation
          
            if(_this.box_flag == 3)
            {
                if(_this.type_flag == 9)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.subType2Array[_this.Sub_countTracker2] - 2 && _this.draggedPurple2Group.length == _this.subType2Array[_this.Sub_countTracker2] - 2) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                           //_this.displayInitialScreen();
                        });
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    } 
                }
                if(_this.type_flag == 10)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.subType3Array[_this.Sub_countTracker12] - 3 && _this.draggedPurple2Group.length == _this.subType3Array[_this.Sub_countTracker12] - 3) //&& _this.objectCounter == _this.divAnswer// || _this.div2Answer
                    {
                        _this.noofAttempts++;
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log("Last Question");
                        _this.celebration();
                        _this.numGroup.destroy();
                        _this.AnswerBox.frame = 0;
                        console.log(_this.draggedPurple2Group.length);
                        _this.time.events.add(1000, function()
                        {
                            _this.clearScreen();
                            _this.nextquestion();
                           //_this.displayInitialScreen();
                        });
                    // _this.displayCol2DivisionObjects();
                    // _this.eraseScreen();
    
                    }
                    else
                    {
                        _this.noofAttempts++;
                        console.log("wromg sound 11");
                        console.log(_this.draggedPurple2Group.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    } 
                }    
            }
            if(_this.box_flag == 2)
            {
                if(_this.type_flag == 9)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.subType2Array[_this.Sub_countTracker] - 2 && _this.draggedPurpleGroup.length == _this.subType2Array[_this.Sub_countTracker] - 2) // || _this.div2Answer
                    {
                        console.log("Second IFFF");
                        _this.counterCelebrationSound.play();
                        _this.sub1Answer = _this.subType2Array[_this.Sub_countTracker] - 2;
                        if(_this.sub1Answer <10)
                        {
                            _this.displayAnswer2 = _this.add.text(17,8,_this.sub1Answer, { fontSize: '30px' });
                        }
                        else
                        {
                            _this.displayAnswer2 = _this.add.text(8,8,_this.sub1Answer, { fontSize: '30px' });
                        }
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3SubtractionObjects();
                        _this.eraseScreen(); 
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);
    
                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log(_this.draggedPurpleGroup.length);   
                    }
                    else
                    {
                        console.log("wromg sound 2");
                        console.log("group len",_this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();        
                    }
                }
                if(_this.type_flag == 10)
                {
                    if(Number(''+_this.selectedAns1+_this.selectedAns2) === _this.subType3Array[_this.Sub_countTracker1] - 3 && _this.draggedPurpleGroup.length == _this.subType3Array[_this.Sub_countTracker1] - 3) // || _this.div2Answer
                    {
                        console.log("Second IFFF");
                        _this.counterCelebrationSound.play();
                        _this.sub1Answer2 = _this.subType3Array[_this.Sub_countTracker1] - 3;
                        if(_this.sub1Answer2 <10)
                        {
                            _this.displayAnswer2 = _this.add.text(17,8,_this.sub1Answer2, { fontSize: '30px' });
                        }
                        else
                        {
                            _this.displayAnswer2 = _this.add.text(8,8,_this.sub1Answer2, { fontSize: '30px' });
                        }
                        _this.displayAnswer2.align = 'right';
                        _this.displayAnswer2.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer2.fill = '#65B4C3';
                        _this.displayAnswer2.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer2);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displayCol3SubtractionObjects();
                        _this.eraseScreen(); 
                        _this.draggedPurpleGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
                        console.log(_this.empty_pos2Array);
    
                        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                        console.log(_this.empty_pos2Array);
                        console.log(_this.draggedPurpleGroup.length);
                        
                    }
                    else
                    {
                        console.log("wromg sound 2");
                        console.log("group len",_this.draggedPurpleGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();  
                           
                    }
                }   
            }
            if(_this.box_flag == 1)
            {
                console.log("box 1")
               _this.originalAnswer = _this.subType1Array2[_this.trackCount] - 2;
               console.log(_this.originalAnswer);
         
                if(_this.type_flag == 9)
                { 
                    if(_this.AnswerBox.name === _this.originalAnswer && _this.initialObjectGroup.length == _this.originalAnswer) // || _this.div2Answer
                    {
                        //_this.originalAnswer && _this.initialObjectGroup.length == _this.originalAnswer
                        _this.counterCelebrationSound.play();
                        console.log("First IFFF");
                        _this.subAnswer1 = _this.subType1Array2[_this.trackCount] - 2;
                        _this.displayAnswer = _this.add.text(17,8,_this.subAnswer1, { fontSize: '30px'});
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displaycol2SubtractionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log(_this.AnswerBox.name);
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    } 
                }
                if(_this.type_flag == 10)
                {
                    if(_this.AnswerBox.name === _this.subType1Array3[_this.trackCount] - 3 && _this.initialObjectGroup.length == _this.subType1Array3[_this.trackCount] - 3) // || _this.div2Answer
                    {
                        _this.counterCelebrationSound.play();
                        console.log("First IFFF");
                        _this.sub2Answer1 = _this.subType1Array3[_this.trackCount] - 3;
                        _this.displayAnswer = _this.add.text(17,8,_this.sub2Answer1, { fontSize: '30px'});
                        _this.displayAnswer.align = 'right';
                        _this.displayAnswer.font = "Akzidenz-Grotesk BQ";
                        _this.displayAnswer.fill = '#65B4C3';
                        _this.displayAnswer.fontWeight = 'normal';
                        _this.AnswerBox.addChild(_this.displayAnswer);
                        _this.AnswerBox.frame = 0;
                        _this.numGroup.destroy();
                        _this.displaycol2SubtractionObjects();
                        _this.eraseScreen();
                        _this.initialObjectGroup.forEach(element => {
                            element.inputEnabled = false;
                        });
                        //_this.initialObjectGroup.removeAll();
                        console.log("group len", _this.initialObjectGroup.length);
                    }
                    else
                    {
                        console.log("wromg sound 1");
                        console.log("group len", _this.initialObjectGroup.length);
                        _this.wrongSound.play();
                        _this.eraseScreen();       
                    }
                }   
            }
        }
    },

    displayCol2AdditionObjects:function()
    {
        //* Display the question for column 2 Addition
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            })
        }

        _this.col2box2 = _this.add.image(330,205, "textBox1");
        if(_this.type_flag == 7)
        {
            _this.commonValue = _this.addType2Array[_this.Add_countTracker];
        }
        else if(_this.type_flag == 8)
        {
            _this.commonValue = _this.addType3Array[_this.Add_countTracker1];
        }
        // else if(_this.mulTypeArray[_this.trackCount] == 3)
        // {
        //     _this.commonValue = _this.mulType4Array[0];
        // }

        if(_this.commonValue < 10)
        {
            _this.col2textMValue2 = _this.add.text(349,214, _this.commonValue);
        }
        else
        {
            _this.col2textMValue2 = _this.add.text(340,214, _this.commonValue);
        }
        
        _this.col2textMValue2.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue2.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX = 0;
        _this.nextPositionY = 0;

        _this.i = 0;
        _this.j = 0;

        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col2greenObject); 
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType2Array[1]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType2Array[2]);
        //_this.dragpurpleObj();
        _this.box_flag = 2;
        _this.AnswerBox = _this.add.image(330, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        }) 
    },

    displayCol2DivisionObjects: function()
    {  
        //* Display the question for column 2 Division
        //_this.draggedPurpleGroup = _this.add.group();
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            })
        }

        _this.col2box2 = _this.add.image(335,205, "textBox1");
        if(_this.type_flag == 1)
        {
            _this.commonValue = _this.divType1Array[_this.Div_countTracker];
        }
        else if(_this.type_flag == 2)
        {
            _this.commonValue = _this.divType2Array[_this.Div_countTracker1];
        }
        else if(_this.type_flag  == 3)
        {
            _this.commonValue = _this.divType3Array[0];
        }

        if(_this.commonValue < 10)
        {
            _this.col2textMValue2 = _this.add.text(353,214,_this.commonValue); //_this.questionType1Array[_this.trackCount]
        }
        else
        {
            _this.col2textMValue2 = _this.add.text(345,214,_this.commonValue); 
        }
        
        _this.col2textMValue2.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue2.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;

        _this.i =0;
        _this.j =0;
        
        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
       //*use this for later
        // _this.col2textMValue2 = _this.add.text(350,200, _this.questionType1Array[_this.count1]);
        // _this.col2textMValue3 = _this.add.text(600,200, _this.questionType1Array[1]);
        //_this.dragpurpleObj();
        _this.AnswerBox = _this.add.image(335, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.box_flag = 2;
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        })

        console.log( _this.questionType1Array[_this.trackCount]);
    },

    draggable_Obj:function(target)
    {
        //* This function adds an duplicate image in the place of original chesscoin or Trophy(main image in the first column)
        //* Here we makw this duplicate image Draggable.
        //* when drag stops we are attaching an event which contain dragged_purpleobjects function
        console.log("Inside draggable object")
        // _this.initialObjectGroup = _this.add.group();
        if(_this.objectArray[_this.trackCount] == 1)
        {
            console.log("inside IFFF");
            _this.img = _this.add.sprite(70,300, "chesscoin2");
            _this.img.frame = 1;
            _this.img.scale.setTo(0.9);

            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.initObjectArray.push(_this.img);
            _this.img.events.onDragStop.add(function(target)
            {
                _this.img.visible = false;
                // if(_this.questionTypeArray[_this.count1] == 1)
                // {
                //     _this.dragged_purpleObjects();
                // }
                if(target.x >=70 && target.x <= 860 && target.y <=350 && target.y >=260)
                {
                   _this.dragged_purpleObjects();
                }
                else
                {
                    _this.draggable_Obj();
                }            
            });
        }
        else if(_this.objectArray[_this.trackCount] == 2)
        {
            console.log("Trophyyy");
            _this.img = _this.add.sprite(70,300, "Trophy2"); 
            _this.img.frame = 0;
            _this.img.scale.setTo(0.9);
            console.log("addedd");
            _this.initObjectArray.push(_this.img);
            _this.img.inputEnabled = true;
            _this.img.input.enableDrag(true);
            _this.img.events.onDragStop.add(function(target)
            {
                console.log("Purple Imaage");
                _this.img.visible = false;
               // _this.dragged_purpleObjects();
               if(target.x >=70 && target.x <= 860 && target.y <=350 && target.y >=260)
               {
                  _this.dragged_purpleObjects();
               }
               else
               {
                    _this.draggable_Obj();
               }        
            })   
        } 
    },

    searchEmptyPos3 : function()
    {
        console.log("Inside search fin")
        let i = 0;
        while(_this.empty_pos3Array[i] != 0 && i< _this.empty_pos3Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        { 
            i ++; 
        }
        return i;
    },

    searchEmptyPos2 : function()
    {
        //* search the empty_pos1Array from index 0 till it finds array element with value 0 
        //* i=0;
        //* while(empty_pos1Array[i] != 0 && i< empty_pos1Array.length){ i++; }
        //* return 
        console.log("Inside search fin")
        let i = 0;
        while(_this.empty_pos2Array[i] != 0 && i< _this.empty_pos2Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        { 
            i ++; 
        }
        return i;
    },

    searchEmptyPos1 : function() 
    {
        //* search the empty_pos1Array from index 0 till it finds array element with value 0 
        //* i=0;
        //* while(empty_pos1Array[i] != 0 && i< empty_pos1Array.length){ i++; }
        //* return i; 
        console.log("Inside search fin")
        let i = 0;
        while(_this.empty_pos1Array[i] != 0 && i< _this.empty_pos1Array.length) //_this.empty_pos1Array[i] != 0 && i< 4
        { 
            i ++; 
        }
        return i;
    },

    dragged_purpleObjects: function(target)
    {
        //* This function will add purple objects to the columns when the objects is dragged and dropped based on the box_flag.
        //* when the dragged object is dropped this function will add a image in the rescpective positions.
        //* also it adds duplicate image back to the draggable image(column1 main image chess coin or trophy), so that it can be dragged again
        
        // _this.initialObjectGroup = _this.add.group();
        if(_this.box_flag == 1)
        {
            if(_this.initialObjectGroup.length < 4)
            {
                console.log("First questionnnn");
                if(_this.objectArray[_this.trackCount] == 1)
                {
                    //* Search for empty space in column 1 and place the object in that position 
                    //* 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
                    //* 0,0, 1,0 2,0 3,0 4,0 5,0 6,0 7,0
                    //* 0,1  1,1 2,1 3,1 4,1 5,1 6,1 7,1
                    //* Example - 14 mod 8 = 6 = _this.i; 14 / 8 = 1 = _this.j
                
                    _this.searchPos = _this.searchEmptyPos1();
                    //_this.searchEmptyPos1();
                    // _this.searchPos = i;
                    _this.i = _this.searchPos % 4;
                    _this.j = Math.floor(_this.searchPos / 4);
                    console.log(_this.i, _this.j);
                    if(_this.i >=2)
                    {
                        _this.j ++;
                        //_this.i= 0;
                    }
                    _this.img1 = _this.add.sprite(_this.col1purpleObjArrayX[_this.i],_this.col1purpleObjArrayY[_this.j], "chesscoin1");
                    _this.img1.name = _this.searchPos;
                   
                    //* mark the returned index as 1 in empty_posArray
                    _this.empty_pos1Array[_this.searchPos] = 1;
                    console.log(_this.empty_pos1Array);
                    _this.img1.frame = 0;
                    _this.img1.scale.setTo(0.9);
                
                    _this.initialObjectGroup.add(_this.img1);
                    console.log(_this.initialObjectGroup.length);

                    // _this.initialObjectGroup.forEach(element => 
                    // {
                        _this.img1.inputEnabled = true;
                        _this.img1.input.enableDrag(true);
                        _this.img1.events.onDragStop.add(function(target)
                        {
                            // if(element.X > 70 < 90 && element.Y > 260 < 280)
                            // {
                            console.log("vanishh");
                            target.visible = false;
                            //* make the empty_posArray[target.name] = 0;
                            _this.empty_pos1Array[target.name] = 0;
                            console.log(_this.empty_pos1Array);
                            target.destroy();
                            //}
                            
                            // _this.initialObjectGroup.remove(element);
                            //_this.initialObjectGroup
                            console.log(_this.initialObjectGroup.length);
                            console.log(_this.initObjectArray.length);
                        }, target)        
                }  
                else
                {
                    _this.searchPos = _this.searchEmptyPos1();
                    //_this.searchEmptyPos1();
                   // _this.searchPos = i;
                    _this.i = _this.searchPos % 4;
                    _this.j = Math.floor(_this.searchPos / 4);
                    console.log(_this.i, _this.j);
                    if(_this.i >=2)
                    {
                        _this.j ++;
                        //_this.i= 0;
                    }

                    _this.img1 = _this.add.sprite(_this.col1purpleObjArrayX[_this.i],_this.col1purpleObjArrayY[_this.j], "Trophy1");
                    _this.img1.name = _this.searchPos;
                    _this.img1.frame = 0;
                    _this.img1.scale.setTo(0.9);
                    
                    //* mark the returned index as 1 in empty_posArray
                    _this.empty_pos1Array[_this.searchPos] = 1;
                    console.log(_this.empty_pos1Array);

                    _this.initialObjectGroup.add(_this.img1);
                    console.log(_this.initialObjectGroup.length);

                    // _this.initialObjectGroup.forEach(element => 
                    // {
                        //element1 =  (_this.initialObjectGroup.length) - 1;
                        _this.img1.inputEnabled = true;
                        _this.img1.input.enableDrag(true);
                        _this.img1.events.onDragStop.add(function(target)
                        {
                            console.log("vanishh");
                            target.visible = false;

                            //* make the empty_posArray[target.name] = 0;
                            _this.empty_pos1Array[target.name] = 0;
                            console.log(_this.empty_pos1Array);
                            target.destroy();
                            //_this.initialObjectGroup.remove(element);
                            
                            console.log(_this.initialObjectGroup.length);
                            console.log(_this.initObjectArray.length);
                        }, target);
                        
                   // }); 
                }
                _this.initObjectArray.push(_this.img1);
                console.log(_this.initObjectArray.length);
            }
        }
        if(_this.box_flag == 2)
        {
            if(_this.draggedPurpleGroup.length < 16)
            {
                    console.log("second questionnnn");
                    if(_this.objectArray[_this.trackCount] == 1)
                    {
                        _this.searchPos = _this.searchEmptyPos2();
                        _this.i = _this.searchPos % 16;
                        _this.j = Math.floor(_this.searchPos / 16);
                        console.log(_this.i, _this.j);
                        if(_this.i >=8)
                        {
                            _this.j ++;
                            //_this.i= 0;
                        }
                        _this.img1 = _this.add.sprite(_this.col2purpleArrayX[_this.i],_this.col2purpleArrayY[_this.j], "chesscoin1");
                        _this.img1.name = _this.searchPos;
                        _this.img1.frame = 0;
                        _this.img1.scale.setTo(0.9);
                        //_this.posCheckArray[j] = 1;
                        //_this.posCheckArray[_this.nextPositionX] = 1;
                        //* mark the returned index as 1 in empty_posArray
                        _this.empty_pos2Array[_this.searchPos] = 1;
                        console.log(_this.empty_pos2Array);

                        _this.draggedPurpleGroup.add(_this.img1);
                       // _this.draggedPurpleGroup.add(_this.img1);
                        console.log(_this.draggedPurpleGroup.length);

                        // _this.draggedPurpleGroup.forEach(element => 
                        // {
                            //element1 =  (_this.initialObjectGroup.length) - 1;
                            _this.img1.inputEnabled = true;
                            _this.img1.input.enableDrag(true);
                            _this.img1.events.onDragStop.add(function(target)
                            {
                                console.log("vanishh");
                                target.visible = false;
                              
                                //* make the empty_posArray[target.name] = 0;
                                _this.empty_pos2Array[target.name] = 0;
                                console.log(_this.empty_pos2Array);
                                target.destroy();
                                //_this.draggedPurpleGroup.remove(element);
                                
                                //_this.initialObjectGroup
                                console.log(_this.draggedPurpleGroup.length);
                                console.log(_this.initObjectArray.length);
                                
                            }, target);
                    }
                    else
                    {
                        _this.searchPos = _this.searchEmptyPos2();
                        _this.i = _this.searchPos % 16;
                        _this.j = Math.floor(_this.searchPos / 16);
                        console.log(_this.i, _this.j);

                        if(_this.i >=8)
                        {
                            _this.j ++;
                            //_this.i= 0;
                        }
                        _this.img1 = _this.add.sprite(_this.col2purpleArrayX[_this.i ],_this.col2purpleArrayY[_this.j], "Trophy1");
                        _this.img1.name = _this.searchPos;
                        _this.img1.frame = 0;
                        _this.img1.scale.setTo(0.9);
                        _this.empty_pos2Array[_this.searchPos] = 1;
                        console.log(_this.empty_pos2Array);


                        _this.draggedPurpleGroup.add(_this.img1);
                        console.log(_this.draggedPurpleGroup.length);

                        // _this.draggedPurpleGroup.forEach(element => 
                        // {
                            //element1 =  (_this.initialObjectGroup.length) - 1;
                            _this.img1.inputEnabled = true;
                            _this.img1.input.enableDrag(true);
                            _this.img1.events.onDragStop.add(function(target)
                            {
                                console.log("vanishh");
                                target.visible = false;

                                 //* make the empty_posArray[target.name] = 0;
                                 _this.empty_pos2Array[target.name] = 0;
                                 console.log(_this.empty_pos2Array);
                                 target.destroy();
                                //_this.draggedPurpleGroup.remove(element);
                                
                                console.log(_this.draggedPurpleGroup.length);
                                console.log(_this.initObjectArray.length);
                            },target);
                        
                        //});   
                    }
                    _this.initObjectArray.push(_this.img1);  
                    console.log(_this.initObjectArray.length);  
            }
        }
        if(_this.box_flag == 3)
        {
           //draggedPurple2Group 
            if(_this.draggedPurple2Group.length < 16)
            {
                    console.log("3rd questionnnn");
                    if(_this.objectArray[_this.trackCount] == 1)
                    {
                        _this.searchPos = _this.searchEmptyPos2();
                        _this.i = _this.searchPos % 16;
                        _this.j = Math.floor(_this.searchPos / 16);
                        console.log(_this.i, _this.j);
                        if(_this.i >=8)
                        {
                            _this.j ++;
                            //_this.i= 0;
                        }
                        _this.img1 = _this.add.sprite(_this.col3purpleArrayX[_this.i],_this.col3purpleArrayY[_this.j], "chesscoin1");
                        _this.img1.name = _this.searchPos;
                        _this.img1.frame = 0;
                        _this.img1.scale.setTo(0.9);
                    
                        //* mark the returned index as 1 in empty_posArray
                        _this.empty_pos2Array[_this.searchPos] = 1;
                        console.log(_this.empty_pos2Array);
                        
                        _this.draggedPurple2Group.add(_this.img1);
                        console.log(_this.draggedPurple2Group.length);

                        // _this.draggedPurple2Group.forEach(element => 
                        // {
                            //element1 =  (_this.initialObjectGroup.length) - 1;
                            _this.img1.inputEnabled = true;
                            _this.img1.input.enableDrag(true);
                            _this.img1.events.onDragStop.add(function(target)
                            {
                               
                                console.log("vanishh");
                                target.visible = false;
                                
                                //* make the empty_posArray[target.name] = 0;
                                _this.empty_pos2Array[target.name] = 0;
                                console.log(_this.empty_pos2Array);
                                target.destroy();
                                
                                //_this.draggedPurple2Group.remove(element);
                            
                                console.log(_this.draggedPurple2Group.length);
                                console.log(_this.initObjectArray.length);
                            }, target);
                    }
                    else
                    {
                        _this.searchPos = _this.searchEmptyPos2();
                        _this.i = _this.searchPos % 16;
                        _this.j = Math.floor(_this.searchPos / 16);
                        console.log(_this.i, _this.j);
                        if(_this.i >=8)
                        {
                            _this.j ++;
                            //_this.i= 0;
                        }
                        _this.img1 = _this.add.sprite(_this.col3purpleArrayX[_this.i],_this.col3purpleArrayY[_this.j], "Trophy1");
                        _this.img1.name = _this.searchPos;
                        _this.img1.frame = 0;
                        _this.img1.scale.setTo(0.9);

                        //* mark the returned index as 1 in empty_posArray
                        _this.empty_pos2Array[_this.searchPos] = 1;
                        console.log(_this.empty_pos2Array);

                        _this.draggedPurple2Group.add(_this.img1);
                        console.log(_this.draggedPurple2Group.length);

                        // _this.draggedPurple2Group.forEach(element => 
                        // {
                            //element1 =  (_this.initialObjectGroup.length) - 1;
                            _this.img1.inputEnabled = true;
                            _this.img1.input.enableDrag(true);
                            _this.img1.events.onDragStop.add(function(target)
                            {
                                console.log("vanishh");
                                target.visible = false;

                                //* make the empty_posArray[target.name] = 0;
                                _this.empty_pos2Array[target.name] = 0;
                                console.log(_this.empty_pos2Array);
                                target.destroy();
                               // _this.draggedPurple2Group.remove(element);
                                
                                console.log(_this.draggedPurple2Group.length);
                                console.log(_this.initObjectArray.length);
                            },target);
                        
                        //});   
                    }      
            } 
        }
        _this.draggable_Obj();  
    },

    displayCol2MultiObjects:function()
    {
        //* Display the question for column 2 Multiplication
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            }) 
        }

        _this.col2box2 = _this.add.image(330,205, "textBox1");
        if(_this.type_flag == 4)
        {
            _this.commonValue = _this.mulType2Array[_this.Multi_countTracker];
        }
        else if(_this.type_flag == 5)
        {
            _this.commonValue = _this.mulType3Array[_this.Multi_countTracker1];
        }
        else if(_this.type_flag == 6)
        {
            _this.commonValue = _this.mulType4Array[0];
        }
        _this.col2textMValue2 = _this.add.text(349,214, _this.commonValue);
        _this.col2textMValue2.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue2.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;

        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
       //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType3Array[2]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType3Array[3]);
        _this.box_flag = 2;
        _this.AnswerBox = _this.add.image(330, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        }) 
    },

    displaycol2SubtractionObjects : function()
    {
        //* Display the question for column 2 Subtraction
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            }) 
        }

        _this.col2box2 = _this.add.image(330,205, "textBox1");
        if(_this.type_flag == 9)
        {
            _this.commonValue = _this.subType2Array[_this.Sub_countTracker];
        }
        else if(_this.type_flag == 10)
        {
            _this.commonValue = _this.subType3Array[_this.Sub_countTracker1];
        }

        if(_this.commonValue >=10)
        {
            _this.col2textMValue2 = _this.add.text(341,214, _this.commonValue);
        }
        else
        {
            _this.col2textMValue2 = _this.add.text(349,214, _this.commonValue);
        }
     
        _this.col2textMValue2.font = "Akzidenz-Grotesk BQ";
        _this.col2textMValue2.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX = 0;
        _this.nextPositionY = 0;

        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "chesscoin1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col2greenObject = _this.add.sprite(_this.col2objectArrayX[j],_this.col2objectArrayY[k], "Trophy1");
                _this.col2greenObject.frame = 1;
                _this.col2greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col2greenObject);
        }
       //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType4Array[1]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType4Array[2]);
        _this.box_flag = 2;
        _this.AnswerBox = _this.add.image(330, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        });
    },

    displayCol3DivisionObjects:function()
    {
        //* Display the question for column 3 dvision
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            })
        }

        _this.col3box3 = _this.add.image(700,205, "textBox1");
        if(_this.type_flag == 1)
        {
            _this.commonValue = _this.divType1Array[_this.Div_countTracker2];
        }
        else if(_this.type_flag  == 2)
        {
            _this.commonValue = _this.divType2Array[_this.Div_countTracker12];
        }
        else if(_this.type_flag == 3)
        {
            _this.commonValue = _this.divType3Array[1];
        }

        if(_this.commonValue < 10)
        {
            _this.col3textMValue3 = _this.add.text(720,214,_this.commonValue); //_this.questionType1Array[_this.trackCount]
        }
        else
        {
            _this.col3textMValue3 = _this.add.text(710,214,_this.commonValue); 
        }
       
        _this.col3textMValue3.font = "Akzidenz-Grotesk BQ";
        _this.col3textMValue3.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;
        
        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "chesscoin1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "Trophy1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col3greenObject);
        }
       //*use this for later
        // _this.col2textMValue2 = _this.add.text(350,200, _this.questionType1Array[_this.count1]);
        // _this.col2textMValue3 = _this.add.text(600,200, _this.questionType1Array[1]);
        //_this.dragpurpleObj();
        _this.box_flag = 3;
        _this.AnswerBox = _this.add.image(700, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        })
    },

    displayCol3AdditionObjects: function()
    {
        //* Display the question for column 2 Addition
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
                
            })
        }

        _this.col3box3 = _this.add.image(700,205, "textBox1");
        if(_this.type_flag  == 7)
        {
            _this.commonValue = _this.addType2Array[_this.Add_countTracker2];
        }
        else if(_this.type_flag == 8)
        {
            _this.commonValue = _this.addType3Array[_this.Add_countTracker12];
        }
        // else if(_this.addTypeArray[_this.trackCount] == 3)
        // {
        //     _this.commonValue = _this.mulType4Array[1];
        // }

        if(_this.commonValue < 10)
        {
            _this.col3textMValue3 = _this.add.text(720,214,_this.commonValue); //_this.questionType2Array[2]
        }
        else
        {
            _this.col3textMValue3 = _this.add.text(710,214, _this.commonValue);
        }
        
        _this.col3textMValue3.font = "Akzidenz-Grotesk BQ";
        _this.col3textMValue3.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;
        
        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "chesscoin1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "Trophy1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col3greenObject);
        }
        //*use this for later
        // _this.col2textMValue2 = _this.add.text(350,200, _this.questionType1Array[_this.count1]);
        // _this.col2textMValue3 = _this.add.text(600,200, _this.questionType1Array[1]);
        //_this.dragpurpleObj();
        _this.box_flag = 3;
        _this.AnswerBox = _this.add.image(700, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function(){
            _this.addNumberPad();
        })
    },

    displayCol3MultipObjects: function()
    {
        //* Display the question for column 2 multiplication
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function(){
                _this.Ask_Question1.play();
            })
        }

        _this.col3box3 = _this.add.image(700,205, "textBox1");
        if(_this.type_flag == 4)
        {
            _this.commonValue = _this.mulType2Array[_this.Multi_countTracker2];
        }
        else if(_this.type_flag == 5)
        {
            _this.commonValue = _this.mulType3Array[_this.Multi_countTracker12];
        }
        else if(_this.type_flag == 6)
        {
            _this.commonValue = _this.mulType4Array[1];
        }
        _this.col3textMValue3 = _this.add.text(720,214, _this.commonValue);
        _this.col3textMValue3.font = "Akzidenz-Grotesk BQ";
        _this.col3textMValue3.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;
        
        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "chesscoin1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "Trophy1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col3greenObject);
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType3Array[2]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType3Array[3]);
        //_this.dragpurpleObj();
        _this.box_flag = 3;
        _this.AnswerBox = _this.add.image(700, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function()
        {
            _this.addNumberPad();
        })
    },

    displayCol3SubtractionObjects : function()
    {
        //* Display the question for column 2 subtraction
        _this.Question_flag=1;
        if(_this.count1 == 0)
        {
            _this.time.events.add(1000,function()
            {
                _this.Ask_Question1.play();
                
            })
        }

        _this.col3box3 = _this.add.image(700,205, "textBox1");
        if(_this.type_flag == 9)
        {
            _this.commonValue = _this.subType2Array[_this.Sub_countTracker2];
        }
        else if(_this.type_flag == 10)
        {
            _this.commonValue = _this.subType3Array[_this.Sub_countTracker12];
        }


        if(_this.commonValue < 10)
        {
            _this.col3textMValue3 = _this.add.text(720,214, _this.commonValue);
        }
        else
        {
            _this.col3textMValue3 = _this.add.text(711,214, _this.commonValue);
        }
        _this.col3textMValue3.font = "Akzidenz-Grotesk BQ";
        _this.col3textMValue3.fill = '#FF0000';

        _this.draggable_Obj();

        _this.nextPositionX =0;
        _this.nextPositionY = 0;
        
        var j = 0;
        var k = 0;
        for(i=0; i< _this.commonValue; i++)
        {
            
            if(_this.objectArray[_this.trackCount] == 1)
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "chesscoin1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }
            else
            {
                _this.col3greenObject = _this.add.sprite(_this.col3objectArrayX[j],_this.col3objectArrayY[k], "Trophy1");
                _this.col3greenObject.frame = 1;
                _this.col3greenObject.scale.setTo(0.9);
            }

            j++;
            if (j >= 8) 
            {
                k++;
                j = 0;
            }
            _this.greenObjectArray.push(_this.col3greenObject);
        }
        //*use this for later
        //_this.col2textMValue2 = _this.add.text(350,200, _this.questionType3Array[2]);
        //_this.col2textMValue3 = _this.add.text(600,200, _this.questionType3Array[3]);
        //_this.dragpurpleObj();
        _this.box_flag = 3;
        _this.AnswerBox = _this.add.image(700, 405,'textbox3');
        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.frame = 1;
        _this.initObjectArray.push(_this.AnswerBox);
        _this.time.events.add(1000, function()
        {
            _this.addNumberPad();
        })
    },

    nextquestion: function () 
    {
        if (_this.count1 < 6) 
        {
            //  _this.enterFractionBox1.frame = 1;
            //  _this.enterFractionBox2.frame = 0;
            _this.qn_flag = 1;
            _this.time.events.add(500, function () 
            {
                _this.getQuestion();
            });
        }
        else 
        {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () 
            {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    clearScreen: function()
    {
        console.log("clear the screen");
        _this.trackCount = 0;
        _this.allQType ++;
        _this.col2box1.destroy();
        _this.col2textMValue1.destroy();
        _this.col2box2.destroy();
        _this.col2textMValue2.destroy();
        _this.col3box3.destroy();
        _this.col3textMValue3.destroy();
        _this.box1.destroy();
        _this.col1textM.destroy();
        _this.box2.destroy();
        _this.equationText.destroy();

        _this.AnswerBox.destroy();
        _this.displayAnswer.destroy();
        _this.displayAnswer2.destroy();
       // _this.addEraserObj.destroy();
        //_this.addEraser.destroy();
        _this.col1greenObj.destroy();
        _this.col1purpleObj.destroy();

        _this.column.destroy();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt = null;

        _this.initialObjectGroup.destroy();
        _this.draggedPurpleGroup.destroy();
        _this.draggedPurple2Group.destroy();
      

        if(_this.type_flag == 1)
        {
                _this.Div_countTracker += 2;
                _this.Div_countTracker2 += 2;
            //}
        }
        if( _this.type_flag == 2) //_this.questionTypeArray[_this.trackCount] == 1 &&
        {
                _this.Div_countTracker1 += 2;
                _this.Div_countTracker12 += 2;
            //}
        }
        // if(_this.questionTypeArray[_this.trackCount] == 1)
        // {
            if(_this.type_flag == 1 && _this.Div_countTracker >=5)
            {
                _this.Div_countTracker = 0;
                _this.Div_countTracker2 = 1;
            }
            if(_this.type_flag == 2 && _this.Div_countTracker1 >=3)
            {
                _this.Div_countTracker1 = 0;
                _this.Div_countTracker12 = 1;
            }
       // }
       
        if(_this.type_flag == 4) //_this.questionTypeArray[_this.trackCount] == 3 &&
        {
                _this.Multi_countTracker += 2;
                _this.Multi_countTracker2 += 2;
            //}
        }
        if(_this.type_flag == 5)
        {
                _this.Multi_countTracker1 += 2;
                _this.Multi_countTracker12 += 2;
            //}
        }
        // if(_this.questionTypeArray[_this.trackCount] == 3)
        // {
            if(_this.type_flag == 4 && _this.Multi_countTracker >=5)
            {
                _this.Multi_countTracker = 0;
                _this.Multi_countTracker2 = 1;
            }
            if(_this.type_flag == 5 && _this.Multi_countTracker1 >=3)
            {
                _this.Multi_countTracker1 = 0;
                _this.Multi_countTracker12 = 1;
            }
       // }
        if(_this.type_flag == 7)//_this.questionTypeArray[_this.trackCount] == 2 &&
        {
                _this.Add_countTracker += 2;
                _this.Add_countTracker2 += 2;
            //}
        }
        if(_this.type_flag == 8)
        {
                _this.Add_countTracker1 += 2;
                _this.Add_countTracker12 += 2;
            //}
        }
        // if(_this.questionTypeArray[_this.trackCount] == 2)
        // {
            if(_this.type_flag == 7 && _this.Add_countTracker >=11)
            {
                _this.Add_countTracker = 0;
                _this.Add_countTracker2 = 1;
            }
            if(_this.type_flag == 8 && _this.Add_countTracker1 >=11)
            {
                _this.Add_countTracker1 = 0;
                _this.Add_countTracker12 = 1;
            }
        //}
        if(_this.type_flag == 9) //_this.questionTypeArray[_this.trackCount] == 4 &&
        {
                _this.Sub_countTracker += 2;
                _this.Sub_countTracker2 += 2;
            //}
        }
        if(_this.type_flag == 10)
        {
                _this.Sub_countTracker1 += 2;
                _this.Sub_countTracker12 += 2;
            //}
        }
        // if(_this.questionTypeArray[_this.trackCount] == 4)
        // {
            if(_this.type_flag == 9 && _this.Sub_countTracker >=11)
            {
                _this.Sub_countTracker = 0;
                _this.Sub_countTracker2 = 1;
            }
            if(_this.type_flag == 10 && _this.Sub_countTracker1 >=11)
            {
                _this.Sub_countTracker1 = 0;
                _this.Sub_countTracker12 = 1;
            }
        //}
        _this.empty_pos1Array.splice(0, _this.empty_pos1Array.length);
        console.log(_this.empty_pos1Array);

        _this.empty_pos2Array.splice(0, _this.empty_pos2Array.length);
        console.log(_this.empty_pos2Array);
        
        _this.empty_pos3Array.splice(0, _this.empty_pos3Array.length);
        console.log(_this.empty_pos3Array);

        _this.empty_pos1Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        console.log(_this.empty_pos1Array);

        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        console.log(_this.empty_pos2Array);

        _this.empty_pos2Array.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        console.log(_this.empty_pos1Array);
      
        _this.greenObjectArray.forEach(element =>
        {
            element.destroy();
        });
        _this.initObjectArray.forEach(element=>{
            element.destroy();
        }); 
    },

    celebration:function()
    {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    checkOverlap: function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    calculate: function (choice, number) {
        if(choice===0){
            return number*3;
        }
        else if(choice===1){
            return number*2;
        }
        else if(choice===2){
            return number*3;
        }
        else if(choice===3){
            return number*2;
        }
        else if(choice===4){
            return number*4;
        }
        else if(choice===5){
            return number*5;
        }
        else if(choice===6){
            return number*3;
        }
        else if(choice===7){
            return number*2+1;
        }
        else if(choice===8){
            return number*3+1;
        }
        else if(choice===9){
            return number*5+1;
        }
        else if(choice===10){
            return number*7+1;
        }
        else if(choice===11){
            return number*4+1;
        }
        else if(choice===12){
            return number*3+1;
        }
        else if(choice===13){
            return number*2+1;
        }
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();
        //  //* star Actions changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "ALP_02_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Variable and Equation";
          _this.microConcepts = "Algebra";

        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
    },
}