Game.NS_INT_7_G6level1=function(){};


Game.NS_INT_7_G6level1.prototype =
{
    
    init:function(game)
    {
        
        //* This game is for integer addition. Addition of two positive integers (3Qs) and
        //* addition of two -ve integers (3Qs).
        
        _this= this;
        
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
        _this.wrongSoundsrc.setAttribute("src",window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.nullyficationSound = document.createElement('audio');
        _this.nullyficationSoundsrc = document.createElement('source');
        _this.nullyficationSoundsrc.setAttribute("src", window.baseUrl+"sounds/Game_Asset_Disappear.mp3");
        _this.nullyficationSound.appendChild(_this.nullyficationSoundsrc);
        
        telInitializerbbpp.gameIdInit("NS_INT_7_G6", gradeSelected);
        console.log(gameID,"gameID...");
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
        _this.count=0;
        _this.in;
        _this.starsGroup;
        
        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.first_evaluation=0;
        _this.numpad_present=0;

        // //*BB++ variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.speakerbtnClicked=false;
        _this.rightbtn_is_Clicked=false;
      
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
                _this.Ask_Question();

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

        _this.objGroup;
        _this.numGroup;
        _this.objGroup1;
        _this.repeat1=1;

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
    
        _this.signplus;
        _this.signminus;

        _this.flag1=0;//counting element one
        _this.flag2=0;//counting element two

        _this.rectangleBox1=_this.add.sprite(35,180,"RectangleBox");
        _this.rectangleBox2=_this.add.sprite(35,300,"RectangleBox");

        _this.rectangleBox1.frame=0;
        _this.rectangleBox2.frame=0;

        _this.rectangleBox1.width=895;
        _this.rectangleBox2.width=895;

        _this.Question_AnswerBox=_this.add.sprite(560,73,'QnABox');
        _this.Question_AnswerBox.frame=1;

        _this.square3=_this.add.sprite(-200,-200,'highlightBox');
        _this.square3.scale.setTo(0.8,0.7);
        _this.square3.visibile = false;
        
        _this.square4=_this.add.sprite(-200,-200,'highlightBox');
        _this.square4.scale.setTo(1.1,0.7);
        _this.square4.visibile = false;
        
//        _this.square5=_this.add.sprite(-200,-200,'highlightBox');
//        _this.square5.scale.setTo(0.3,0.7);
//        _this.square5.visibile = false;

        _this.square1=_this.add.sprite(40,70,'SquareBox');
        _this.square2=_this.add.sprite(150,70,'SquareBox');
        //_this.square4.width='500px';

        _this.plus1=_this.add.sprite(61,85,'plus');
        _this.plus1.frame=0;
        _this.plus2=_this.add.sprite(61,85,'plus');
        _this.plus2.frame=0;

        _this.minus1=_this.add.sprite(171,85,'minus');
        _this.minus1.frame=0;
        _this.minus2=_this.add.sprite(171,85,'minus');
        _this.minus2.frame=0;
        _this.QnAsTxtGroup;
        _this.tickbtn=_this.add.sprite(880,395,'Tick');
        _this.tickbtn.frame=0;
        _this.tickbtn.inputEnabled=true;
        _this.tickbtn.input.useHandCursor = true;
        
        _this.time.events.add(4000,function()
        {
            _this.tickbtn.events.onInputDown.add(_this.tickbtn_Clicked_and_evaluation);

        });
       
        _this.spotx_rectaglebox1=60;
        _this.spoty_rectaglebox1=195;
        _this.spotx_rectaglebox2=60;
        _this.spoty_rectaglebox2=315;

        _this.flipbtn=_this.add.sprite(261,70,'flipbtn');
        _this.flipbtn.frame=2;
      
        _this.count_box2=0;
        _this.array_box_x = [45,100,155,210,265,320,375,430,485,540,595,650,705,760,815,870,925];
        
        _this.object_present_box1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        _this.object_present_box2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        _this.object_sign_box1 = [];
        _this.object_sign_box2 = [];

        _this.obj_group1=_this.add.group();
        _this.obj_group2=_this.add.group();
        
        _this.Sign = '+';
        _this.shownHandSymbol=false;

        _this.time.events.add(2000, _this.getQuestion);
             
    },

    showingTickbtn:function(){
        _this.tickbtn.inputEnabled=false;
        //var tick = _this.add.sprite(880,395,'Tick');
        var hand = _this.add.sprite(800,420,'hand');
        hand.scale.setTo(0.5,0.5);
        handDragAction = _this.add.tween(hand);
        handDragAction.to({x: 900, y: 420 }, 1000, 'Linear', false, 0);
        handDragAction.onComplete.add(function(){_this.tickbtn.frame=1;});
        handDragAction.start();
        _this.time.events.add(3000,function(){
            _this.tickbtn.frame=0;
            _this.tickbtn.inputEnabled=true;
            hand.destroy();
        });
    },

    tickbtn_Clicked_and_evaluation:function()
    {

        _this.clickSound.play();
        _this.tickbtn.inputEnabled=false;
        _this.tickbtn.frame=1;
        
        if(_this.obj_group1.length == _this.element1 && _this.obj_group2.length == _this.element2)
        {
            _this.square1.frame=0;
            _this.square2.frame=0;
            _this.tickbtn.frame=1;
            _this.first_evaluation=1;
            _this.plus2.inputEnabled=false;
            _this.minus2.inputEnabled=false;

            for(var i=0;i<_this.obj_group1.length;i++)
            {
            _this.obj_group1.getChildAt(i).inputEnabled=false;
            _this.obj_group1.getChildAt(i).enableDrag=false;
            }

            _this.time.events.add(1000,function()
            {
                _this.tickbtn.visible=false;
            });

            _this.time.events.add(2000,function()
            {
                _this.counterCelebrationSound.play();
                _this.Question_AnswerBox.frame=2;
//                _this.square5.frame=1;
//                _this.square5.visible = true;
                _this.addNumberPad();
            });
        }

        else
        {
            _this.time.events.add(4000,function()
            {
                _this.tickbtn.frame=0;
                _this.tickbtn.inputEnabled=true;
                _this.tickbtn.input.useHandCursor = true;
            });
            
            _this.wrongSound.play();

            _this.obj_group1.removeAll();
            _this.obj_group2.removeAll();
            _this.first_evaluation=0;

            if(_this.Sign == '+')
            {
                _this.square1.frame=1;
                _this.square2.frame=0;                
            }
            else if (_this.Sign == '-')
            {
                _this.square1.frame=0;
                _this.square2.frame=1;                
            }

            _this.square3.visible = true;
            _this.square4.visible = false;

    
            _this.object_present_box1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            _this.object_present_box2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            _this.object_sign_box1 = [];
            _this.object_sign_box2 = [];

            _this.rectangleBox1.frame=1;
            _this.rectangleBox2.frame=0;

            _this.rectangleBox1.width=895;
            _this.rectangleBox2.width=895;
            _this.Txt1.fill='#000000';
            _this.Txt2.fill='#000000';
            _this.flipbtn.frame=2;
            
            _this.glowing_objects();

        }
    },

    ShowDragAction:function()
    {
         var dragPlus = _this.add.sprite(61,85,'plus');
        
         dragPlusDragAction = _this.add.tween(dragPlus);
         
         dragPlusDragAction.to({x: 45, y: _this.spoty_rectaglebox1 }, 1250, 'Quart', false, 0);
         dragPlusDragAction.onComplete.add(function() {dragPlus.destroy();});
         dragPlusDragAction.start();
    },

    
    EnableVoice: function () 
    {

        console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);

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
        ////console.log("lololil"+counterForTimer);
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
        _this.randomizing_elements();   
        _this.gotoaddingInteger();

        _this.questionid=1;
    },
    
    stopVoice:function()
    {
        if(_this.Question)
        {
            _this.Question.pause();
            _this.Question = null;
            _this.Questionsrc = null;
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
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=15;
					_this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},

    gotoaddingInteger:function()
    {
        _this.sceneCount++;
        _this.AnsTimerCount=0;
        _this.noofAttempts=0;

        _this.element1=_this.box1Array[_this.flag1];
        _this.element2=_this.box2Array[_this.flag2];
        _this.Question_AnswerBox.frame=1;
        

        //_this.element1=9;

        _this.rightbtn_is_Clicked=false;
        
        if (this.count1 == 0)  _this.Ask_Question();   //* audio Q onlt for first question
        
        //* after 3 questions, change the sign to -ve for both numbers.
        if (_this.count1 >= 3)
        {
            _this.Sign = '-';
        }
    
       // _this.QnAsTxtGroup1 = _this.add.group();
       // _this.QnAsTxtGroup2 = _this.add.group();

        _this.Txt1 = _this.add.text(21,33,_this.Sign+_this.element1,{ fontSize: '30px', font: 'Akzidenz-Grotesk BQ'});
        _this.Txt2 = _this.add.text(122,33,"(" + _this.Sign +_this.element2+")",{ fontSize: '30px', font: 'Akzidenz-Grotesk BQ'});
        
        _this.Txt1.align = 'center';
        _this.Txt1.fill = '#000000';
        
        _this.Txt2.align = 'center';
        _this.Txt2.fill = '#000000';

        _this.Txt1.bringToTop();
        _this.Txt2.bringToTop();
        

        _this.Txt1.bringToTop();
        _this.Txt2.bringToTop();
        
        _this.plus_sign=_this.add.text(90,33,"+", { fontSize: '30px', font: "Akzidenz-Grotesk BQ"});

        _this.equalTo=_this.add.text(207,33,"=",{ fontSize: '30px', font: "Akzidenz-Grotesk BQ"});
        _this.equalTo.fill = '#000000';
        _this.plus_sign.fill = '#FF0000'

        _this.Question_AnswerBox.addChild(_this.plus_sign);
        _this.Question_AnswerBox.addChild(_this.equalTo);     
        _this.Question_AnswerBox.addChild(_this.square3);
        _this.Question_AnswerBox.addChild(_this.square4);
//        _this.Question_AnswerBox.addChild(_this.square5);
        _this.Question_AnswerBox.addChild(_this.Txt1);
        _this.Question_AnswerBox.addChild(_this.Txt2);
        _this.square3.x=15;
        _this.square3.y=18;
        _this.square4.x=115;
        _this.square4.y=18;
//        _this.square5.x=88;
//        _this.square5.y=18;
        _this.square3.visible = true;
        _this.square4.visible = false;
//        _this.square5.visible = false;

        _this.plus_sign.bringToTop();
        
        _this.glowing_objects();
        _this.enablingSign();
    },

    randomizing_elements:function()
    {
        _this.box1Array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        _this.box1Array=_this.shuffle(_this.box1Array);
        _this.box2Array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        _this.box2Array=_this.shuffle(_this.box2Array);
        
    },

    glowing_objects:function()
    {
        _this.rectangleBox1.frame=1;

        if(_this.Sign == '+')
        {
            _this.square1.frame=1;
            _this.square2.frame=0;                
        }
        else if (_this.Sign == '-')
        {
            _this.square1.frame=0;
            _this.square2.frame=1;                
        }
    },

    Ask_Question:function()
    {
        _this.stopVoice();
        _this.Question = document.createElement('audio');
        _this.Questionsrc = document.createElement('source');
        _this.Questionsrc.setAttribute("src", window.baseUrl+"questionSounds/NS-INT-10-G6/" + _this.languageSelected + "/Int-Op-q.mp3");
        _this.Question.appendChild(_this.Questionsrc);
        
        _this.Question.play();

    },


    checkOverlap:function(spriteA, spriteB) 
    {
            
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
 
    addNumberPad:function()
    {
        console.log("inside numberpad");
        
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();
        

        var bottomnumpadbg = _this.numGroup.create(0,515,'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1,1);
        
        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        console.log("inside numberpad1");
        
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,552,'Numberpad'); 
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8,0.8);
            _this.numbg.name =i;
            _this.numbg.frame=i;
                        
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=63;
            
        }
        
        _this.minusbtn = _this.numGroup.create(_this.x,552,'Numberpad');
        _this.minusbtn.frame = 10;
        _this.minusbtn.anchor.setTo(0.5);
        _this.minusbtn.scale.setTo(0.8,0.8);
        _this.minusbtn.inputEnabled = true;
        _this.minusbtn.name = "-";
        _this.minusbtn.input.useHandCursor = true;
        _this.minusbtn.events.onInputDown.add(_this.signbtnClicked,_this);

        _this.plusbtn = _this.numGroup.create(_this.x+63,552,'Numberpad');
        _this.plusbtn.frame = 11;
        _this.plusbtn.anchor.setTo(0.5);
        _this.plusbtn.scale.setTo(0.8,0.8);
        _this.plusbtn.inputEnabled = true;
        _this.plusbtn.name = "+";

        _this.plusbtn.input.useHandCursor = true;
        _this.plusbtn.events.onInputDown.add(_this.signbtnClicked,_this);

        _this.wrongbtn = _this.numGroup.create(_this.x+126,552,'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8,0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked,_this);
            
        _this.rightbtn = _this.numGroup.create(_this.x+189,552,'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8,0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked,_this);

        // _this.ScreenTextBox = _this.add.sprite(870,85,'ScreenTextBox');
        // _this.ScreenTextBox.anchor.setTo(0.5);
        // _this.ScreenTextBox.visible=false;
        // _this.ScreenTextBox.scale.set(0.5);
        // _this.ScreenTextBox.inputEnabled = true;
        // _this.ScreenTextBox.frame = 0;

        _this.enterTxt = _this.add.text(0,0, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.scale.setTo(1.5,1.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);

       
        //_this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //_this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        _this.time.events.add(1000, _this.tweenNumPad);
    //        console.log("inside numberpad4");

        //after 2 seconds, show the screen text box as enabled
        //_this.time.events.add(2000, _this.enableScreenText);


    },
        
    tweenNumPad: function()
    {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x:0, y:-53},1000, 'Linear', true, 0);
    
    },

    enableScreenText: function()
    {
        _this.ScreenTextBox.frame = 1;
    },


    numClicked:function(target)
    {
        _this.clickSound.play();
        
        if(_this.selectedAns3==='')
        {
            if (_this.selectedAns2===0 && target.name!==0)
            {
                _this.selectedAns3 = target.name;
            }
            else if(_this.selectedAns2!=='' && _this.selectedAns2!==0)
            {
                _this.selectedAns3 = target.name;
            }
            else
            {
                _this.selectedAns2 = target.name;
            }
        }
                
        _this.Question_AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible=false;
        
        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;
        
        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;
        
        if (_this.selectedAns3 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns3;
        
        _this.enterTxt = _this.add.text(255,33,""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3,{ fontSize: '30px' });
        
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';

        _this.Question_AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible=true;   

    },

    signbtnClicked:function(target)
    {    
        _this.clickSound.play();
        _this.selectedAns1 = target.name;
        _this.Question_AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible=false;
        
        
        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;
        
        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;
        
        if (_this.selectedAns3 === "") var_selectedAns3 = " ";
        else var_selectedAns3 = _this.selectedAns3;
        
        _this.enterTxt = _this.add.text(255,33,""+var_selectedAns1+var_selectedAns2+var_selectedAns3,{ fontSize: '30px' });
        
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
                //_this.Txt1.fontSize = 20;
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        
        _this.Question_AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible=true;
    },   
        
        
    wrongbtnClicked:function(target)
    {
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.Question_AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = ""; 
    },

    evaluation1:function()
    {
        if( (_this.selectedAns1=='+'||_this.selectedAns1=='') && _this.Sign == '+')
        {
            if(Number(''+_this.selectedAns2+_this.selectedAns3)==_this.element1+_this.element2)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
        else if (_this.selectedAns1=='-' && _this.Sign == '-')
        {
            if(Number(''+_this.selectedAns2+_this.selectedAns3)==_this.element1+_this.element2)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
        else
        {
            return 0;
        }
    },

    celebration:function()
    {
        _this.obj_group1.removeAll();
        _this.obj_group2.removeAll();
        
        if (_this.Sign == '+')
        {
            for(_this.j=0;_this.j<=_this.element1-1;_this.j++)
            {                            _this.plus_anm=_this.add.sprite(_this.array_box_x[_this.j],_this.spoty_rectaglebox1,'plus_anm');
                _this.plus_anm.animations.add('plus_anm');
                _this.plus_anm.frame = 0;
                _this.obj_group1.addChild(_this.plus_anm);

            }

            for(_this.j=0;_this.j<=_this.element2-1;_this.j++)
            {
                _this.plus_anm=_this.add.sprite(_this.array_box_x[_this.j],_this.spoty_rectaglebox2,'plus_anm');
                _this.plus_anm.animations.add('plus_anm');
                _this.plus_anm.frame = 0;
                _this.obj_group2.addChild(_this.plus_anm);

            }

            _this.time.events.add(100,function()
            {
                for(_this.j=0;_this.j<_this.obj_group1.length;_this.j++)
                {
                        _this.obj_group1.getChildAt(_this.j).play('plus_anm',20,true);
                        console.log("first");
                }


                _this.celebrationSound.play();
                _this.starActions();

            });

            _this.time.events.add(100,function()
            {

                for(_this.j=0;_this.j<_this.obj_group2.length;_this.j++)
                {
                        _this.obj_group2.getChildAt(_this.j).play('plus_anm',20,true);
                        console.log("second");
                }
                _this.celebrationSound.play();
                _this.starActions();

            });
        }
        
        else if (_this.Sign == '-')
        {
            for(_this.j=0;_this.j<=_this.element1-1;_this.j++)
            {                              _this.minus_anm=_this.add.sprite(_this.array_box_x[_this.j],_this.spoty_rectaglebox1,'minus_anm');
                _this.minus_anm.animations.add('minus_anm');
                _this.minus_anm.frame = 0;
                _this.obj_group1.addChild(_this.minus_anm);

            }

            for(_this.j=0;_this.j<=_this.element2-1;_this.j++)
            {
                _this.minus_anm=_this.add.sprite(_this.array_box_x[_this.j],_this.spoty_rectaglebox2,'minus_anm');
                _this.minus_anm.animations.add('minus_anm');
                _this.minus_anm.frame = 0;
                _this.obj_group2.addChild(_this.minus_anm);

            }
            
            _this.time.events.add(100,function()
            {
                for(_this.j=0;_this.j<_this.obj_group1.length;_this.j++)
                {
                        _this.obj_group1.getChildAt(_this.j).play('minus_anm',20,true);
                }


                _this.celebrationSound.play();
                _this.starActions();

            });

            _this.time.events.add(100,function()
            {

                for(_this.j=0;_this.j<_this.obj_group2.length;_this.j++)
                {
                        _this.obj_group2.getChildAt(_this.j).play('minus_anm',20,true);
                }
                _this.celebrationSound.play();
                _this.starActions();

            });
        }
        //}
    },


    rightbtnClicked:function()
    {
        _this.rightbtn_is_Clicked=true;
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.rightbtn.events.onInputDown.removeAll();
        
        _this.noofAttempts++;
        if(_this.evaluation1())
        {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            //_this.Question_AnswerBox.frame=3;
            _this.celebration();
            

            _this.first_evaluation=0;
            _this.numpad_present=0;

            _this.time.events.add(2200,function()
            {
                _this.obj_group2.removeAll();
                _this.obj_group1.removeAll();
                
            });

            _this.time.events.add(200,function()
            {
                _this.objGroup.destroy();
                _this.numGroup.destroy();
            });                                     
        
            _this.time.events.add(2000,function(){
                _this.wrongbtnClicked();
                _this.Txt1.destroy();
                _this.Txt2.destroy();
                _this.Txt1;
                _this.Txt2;
                _this.Question_AnswerBox.removeChildren();
            });

            _this.object_present_box1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            _this.object_present_box2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            _this.object_sign_box1 = [];
            _this.object_sign_box2 = [];

            //_this.flipbtn.frame=0;
            _this.flipbtn.inputEnabled=false;

            //_this.minus_sign.destroy();
            //_this.minus_sign;
            //_this.Question_AnswerBox.removeChildren();

            _this.plus2.inputEnabled=false;
            _this.minus2.inputEnabled=false;

            //_this.wrongbtnClicked();


            if(_this.count1 < 5)
            {
                // before incrimenting count1, give some delay for staraction function to finish. staraction happens 
                // based on count1.
                _this.time.events.add(2100,function(){_this.count1++;});
                _this.flag1++;
                _this.flag2++;
                _this.time.events.add(5000,function()
                {    
                    _this.tickbtn.inputEnabled=true;
                    _this.tickbtn.frame=0;
                    _this.tickbtn.visible=true;
                    _this.tickbtn.input.useHandCursor = true;
                    _this.gotoaddingInteger();
                
                });
                
            }
            else
            {
                _this.timer1.stop();
                _this.timer1=null;
                _this.time.events.add(5000,function()
                { 
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                   // _this.state.start('score');
                   _this.state.start('score',true,false,gameID,_this.microConcepts);
                });

            }
        }
                
        else
        {
            _this.wrongSound.play();
            
            _this.plus2.inputEnabled=false;
            _this.minus2.inputEnabled=false;

            _this.flipbtn.frame=2;
            _this.flipbtn.inputEnabled=false;
            _this.wrongbtnClicked();
            _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked,_this);
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked,_this);
            _this.rightbtn_is_Clicked=false;
        }
    },

    enablingSign:function()
    {
        if (_this.Sign == '+')
        {
            _this.plus2.inputEnabled = true;
            _this.plus2.input.useHandCursor = true;
            _this.plus2.events.onInputDown.add(_this.plusClicked,_this.plus2);
        }
        else if (_this.Sign == '-')
        {
            _this.plus2.inputEnabled = false;
            _this.plus2.input.useHandCursor = false;
            _this.plus2.events.onInputDown.removeAll();
            _this.minus2.inputEnabled = true;
            _this.minus2.input.useHandCursor = true;
            _this.minus2.events.onInputDown.add(_this.minusClicked,_this.minus2);
            
        }
    },


    plusClicked:function(target)
    {
        target.bringToTop();

        target.input.enableDrag(true);

        _this.clickSound.play();
        _this.plus2.events.onDragStop.add(_this.checkoverlap_plus_placing,_this.plus2);
    },

    minusClicked:function(target)
    {
        target.bringToTop();

        target.input.enableDrag(true);

        _this.clickSound.play();
        _this.minus2.events.onDragStop.add(_this.checkoverlap_minus_placing,_this.minus2);
    },

    plusClicked1:function(target)
    {
        target.bringToTop();
        _this.vx = target.x;   
        _this.vy = target.y;
        
        target.input.enableDrag(true);
        _this.clickSound.play();
        target.events.onDragStop.add(_this.checkoverlap_plus_placing1,target);
    },

    minusClicked1:function(target)
    {
        target.bringToTop();
        _this.vx = target.x;   
        _this.vy = target.y;
        
        target.input.enableDrag(true);
        _this.clickSound.play();
        target.events.onDragStop.add(_this.checkoverlap_minus_placing1,target);
    },


    checkoverlap_plus_placing: function(target)
    {    
        
        if(_this.obj_group1.length>=_this.element1 && _this.checkOverlap(target, _this.rectangleBox2))
        {
            //if(_this.checkOverlap(target, _this.rectangleBox2))
            //{
            
                for(_this.i=0;_this.i<=15&&_this.object_present_box2[_this.i]!=0;_this.i++);

                if(_this.i!=16)
                {
                    _this.Newplus =_this.add.sprite(_this.array_box_x[_this.i], _this.spoty_rectaglebox2,'plus');
                    _this.Newplus.frame=0;

                    _this.object_sign_box2[_this.i]=1;
                    _this.object_present_box2[_this.i]=1;

                    _this.Newplus.inputEnabled = true;

                    _this.Newplus.input.useHandCursor = true;

                    _this.Newplus.name=String(_this.i);

                    _this.obj_group2.add(_this.Newplus);

                    _this.Newplus.events.onInputDown.add(_this.plusClicked1,_this);
                }

                if(_this.first_evaluation==0)
                {
                    if(_this.obj_group1.length>=_this.element1)
                    {
                        if(_this.obj_group2.length>=_this.element2)
                        {
                            _this.time.events.add(1000,function(){
                                if(_this.count1==0 && _this.shownHandSymbol==false){ 
                                _this.showingTickbtn();
                                _this.shownHandSymbol=true;
                                }
                            });

                            _this.rectangleBox2.frame=0;
                            //_this.Txt2.fill='#000000';
                            _this.square4.frame=0;
                            _this.square4.visible = false;
                        }

                        else
                        {
                            _this.rectangleBox2.frame=1;
                            //_this.Txt2.fill='#FFD741';
                            _this.square4.frame=1;
                            _this.square4.visible = true;
                        }
                    }
                    if(_this.obj_group2.length>=_this.element2)
                    {
                        _this.rectangleBox2.frame=0;
                        //_this.Txt2.fill='#000000';
                        _this.square4.frame=0;
                        _this.square4.visible = false;
                    }

                    else
                    {
                        _this.rectangleBox2.frame=1;
                        //_this.Txt2.fill='#FFD741';
                        //_this.square4.frame=1;
                        _this.square4.visible = true;
                    }
                }

                _this.i=0;
            //}
            
        }

        else if(_this.checkOverlap(target, _this.rectangleBox1))
        {    
            if(_this.obj_group2.length==0){
                for(_this.i=0;_this.i<=15&&_this.object_present_box1[_this.i]!=0;_this.i++);

            if(_this.i!=16)
            {
                _this.Newplus = _this.add.sprite(_this.array_box_x[_this.i], _this.spoty_rectaglebox1,'plus');
                _this.Newplus.frame=0;

                _this.object_sign_box1[_this.i]=1;
                _this.object_present_box1[_this.i]=1;

                _this.Newplus.inputEnabled = true;

                _this.Newplus.input.useHandCursor = true;

                _this.Newplus.name=String(_this.i);

                _this.obj_group1.add(_this.Newplus);

                _this.Newplus.events.onInputDown.add(_this.plusClicked1,_this);
            }

            if(_this.first_evaluation==0)
            {
                if(_this.obj_group1.length>=_this.element1)
                {
                    
                    _this.rectangleBox1.frame=0;
                    //_this.Txt1.fill='#000000';
                    _this.square3.frame=0;
                    _this.square3.visible = false;
                    if(_this.obj_group2.length>=_this.element2)
                    {
                        _this.rectangleBox2.frame=0;
                        //_this.Txt2.fill='#000000';
                        //_this.square4.frame=0;
                        _this.square4.visible = false;
                    }

                    else
                    {
                        _this.rectangleBox2.frame=1;
                        //_this.Txt2.fill='#FFD741';
                        //_this.square4.frame=1;
                        _this.square4.visible = true;
                    }
                }
                else
                {
                    _this.rectangleBox1.frame=1;
                    //_this.Txt2.fill='#FFD741';
                    _this.square3.frame=1;
                    _this.square3.visible = true;
                }
            }

            _this.i=0;
                
            }
        }
        
        target.x=61;
        target.y=85;
    },

    checkoverlap_minus_placing: function(target)
    {    
        
        if(_this.obj_group1.length>=_this.element1 && _this.checkOverlap(target, _this.rectangleBox2))
        {
            //if(_this.checkOverlap(target, _this.rectangleBox2))
            //{
            
                for(_this.i=0;_this.i<=15&&_this.object_present_box2[_this.i]!=0;_this.i++);

                if(_this.i!=16)
                {
                    _this.Newminus =_this.add.sprite(_this.array_box_x[_this.i], _this.spoty_rectaglebox2,'minus');
                    _this.Newminus.frame=0;

                    _this.object_sign_box2[_this.i]=0;
                    _this.object_present_box2[_this.i]=1;

                    _this.Newminus.inputEnabled = true;

                    _this.Newminus.input.useHandCursor = true;

                    _this.Newminus.name=String(_this.i);

                    _this.obj_group2.add(_this.Newminus);

                    _this.Newminus.events.onInputDown.add(_this.minusClicked1,_this);
                }

                if(_this.first_evaluation==0)
                {
                    if(_this.obj_group1.length>=_this.element1)
                    {
                        if(_this.obj_group2.length>=_this.element2)
                        {
                            _this.time.events.add(1000,function(){
                                
                            });

                            _this.rectangleBox2.frame=0;
                            //_this.Txt2.fill='#000000';
                            _this.square4.frame=0;
                            _this.square4.visible = false;
                        }

                        else
                        {
                            _this.rectangleBox2.frame=1;
                            //_this.Txt2.fill='#FFD741';
                            _this.square4.frame=1;
                            _this.square4.visible = true;
                        }
                    }
                    if(_this.obj_group2.length>=_this.element2)
                    {
                        _this.rectangleBox2.frame=0;
                        //_this.Txt2.fill='#000000';
                        _this.square4.frame=0;
                        _this.square4.visible = false;
                    }

                    else
                    {
                        _this.rectangleBox2.frame=1;
                        //_this.Txt2.fill='#FFD741';
                        //_this.square4.frame=1;
                        _this.square4.visible = true;
                    }
                }

                _this.i=0;
            //}
            
        }

        else if(_this.checkOverlap(target, _this.rectangleBox1))
        {    
            if(_this.obj_group2.length==0){
                for(_this.i=0;_this.i<=15&&_this.object_present_box1[_this.i]!=0;_this.i++);

            if(_this.i!=16)
            {
                _this.Newminus = _this.add.sprite(_this.array_box_x[_this.i], _this.spoty_rectaglebox1,'minus');
                _this.Newminus.frame=0;

                _this.object_sign_box1[_this.i]=0;
                _this.object_present_box1[_this.i]=1;

                _this.Newminus.inputEnabled = true;

                _this.Newminus.input.useHandCursor = true;

                _this.Newminus.name=String(_this.i);

                _this.obj_group1.add(_this.Newminus);

                _this.Newminus.events.onInputDown.add(_this.minusClicked1,_this);
            }

            if(_this.first_evaluation==0)
            {
                if(_this.obj_group1.length>=_this.element1)
                {
                    

                    _this.rectangleBox1.frame=0;
                    //_this.Txt1.fill='#000000';
                    _this.square3.frame=0;
                    _this.square3.visible = false;
                    if(_this.obj_group2.length>=_this.element2)
                    {
                        _this.rectangleBox2.frame=0;
                        //_this.Txt2.fill='#000000';
                        //_this.square4.frame=0;
                        _this.square4.visible = false;
                    }

                    else
                    {
                        _this.rectangleBox2.frame=1;
                        //_this.Txt2.fill='#FFD741';
                        //_this.square4.frame=1;
                        _this.square4.visible = true;
                    }
                }
                else
                {
                    _this.rectangleBox1.frame=1;
                    //_this.Txt2.fill='#FFD741';
                    _this.square3.frame=1;
                    _this.square3.visible = true;
                }
            }

            _this.i=0;
                
            }
        }
        
        target.x=171;
        target.y=85;
    },

    checkoverlap_plus_placing1:function(target)
    {
        if(_this.first_evaluation==0)
        {
            if((_this.vy==315&&_this.obj_group2.length<=_this.element2)||(_this.vy==195&&_this.obj_group1.length<=_this.element1))
            {
                target.x=_this.vx;
                target.y=_this.vy;
                return;  
            }

            else
            {
                if(_this.checkOverlap(target,_this.rectangleBox2))
                {
                    if(_this.vy==_this.spoty_rectaglebox2)
                    {
                        target.x=_this.vx;
                        target.y=_this.vy;
                    }

                    else
                    {
                        _this.object_present_box1[Number(target.name)]=0;
                        target.destroy();
                    }
                }
                else if(_this.checkOverlap(target,_this.rectangleBox1))
                {
                    if(_this.vy==_this.spoty_rectaglebox1)
                    {
                        target.x=_this.vx;
                        target.y=_this.vy;
                    }

                    else
                    {
                        _this.object_present_box2[Number(target.name)]=0;
                        target.destroy();
                    }
                }

                else
                {
                    if(_this.vy==_this.spoty_rectaglebox2)
                    {
                        _this.object_present_box2[Number(target.name)]=0;
                        target.destroy();
                    }
                    else if(_this.vy==_this.spoty_rectaglebox1)
                    {
                        _this.object_present_box1[Number(target.name)]=0;
                        target.destroy();
                    }
                }

                if(_this.obj_group2.length>=_this.element2)
                {
                    _this.rectangleBox2.frame=0;
                   // _this.square4.frame=0;

                }

                else
                {
                    _this.rectangleBox2.frame=1;
                    _this.square4.visible=true;
                }

                if(_this.obj_group1.length>=_this.element1)
                {
                    _this.rectangleBox1.frame=0;
                    _this.square3.frame=0;

                }

                else
                {
                    _this.rectangleBox1.frame=1;
                    _this.square3.frame=1;
                }
            }
        }

        else
        {
            if(_this.vy==_this.spoty_rectaglebox2)
            {
                for(_this.index=0;_this.index<_this.obj_group1.length;_this.index++)
                {
                    if(_this.checkOverlap(_this.obj_group1.getChildAt(_this.index),target))
                    {
                        if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]!=_this.object_sign_box2[Number(target.name)])
                        {
                                
                            var imag;
                            if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]==1)
                            {
                                imag=_this.add.sprite(_this.array_box_x[Number(_this.obj_group1.getChildAt(_this.index).name)],_this.spoty_rectaglebox1,'plus');
                                imag.frame=0;
                            }

                            else if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]==0)
                            {
                                imag=_this.add.sprite(_this.array_box_x[Number(_this.obj_group1.getChildAt(_this.index).name)],_this.spoty_rectaglebox1,'minus');
                                imag.frame=0;
                            }
                            
                            _this.object_present_box2[Number(target.name)]=0;
                            _this.object_present_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]=0;
                            _this.nullyficationSound.pause();
                            _this.nullyficationSound.currentTime = 0.0;
                            _this.nullyficationSound.play();
                            target.destroy();
                            _this.obj_group1.getChildAt(_this.index).destroy();

                            _this.time.events.add(100,function()
                            {
                                imag.frame=1;
                            });
            
                            _this.time.events.add(300,function()
                            {
                                imag.frame=2;
                            });
            
                            _this.time.events.add(500,function()
                            { 
                                imag.destroy();
                            });

                            _this.time.events.add(550,function()
                            {
                                if(_this.numpad_present==0)
                                {
                                    if(_this.flipbtn.frame==1)
                                    {
                                        if((_this.obj_group1.length==(_this.element1-_this.element2))&&_this.obj_group2.length==0)
                                        {
                                            _this.flipbtn.frame=0;
                                            _this.flipbtn.inputEnabled=false;
                                            _this.numpad_present=1;
                                            _this.addNumberPad();
                                        }

                                        else if((_this.obj_group2.length==(_this.element2-_this.element1))&&_this.obj_group1.length==0)
                                        {
                                            _this.flipbtn.frame=0;
                                            _this.flipbtn.inputEnabled=false;
                                            _this.numpad_present=1;
                                            _this.addNumberPad();
                                        }
                
                                    
                                    }
                                }
                            });

                            return;

                        }
                    }
                }
            }
            
            target.x=_this.vx;
            target.y=_this.vy;    
        }
    },

    checkoverlap_minus_placing1:function(target)
    {
        if(_this.first_evaluation==0)
        {
            if((_this.vy==315&&_this.obj_group2.length<=_this.element2)||(_this.vy==195&&_this.obj_group1.length<=_this.element1))
            {
                target.x=_this.vx;
                target.y=_this.vy;
                return;  
            }

            else
            {
                if(_this.checkOverlap(target,_this.rectangleBox2))
                {
                    if(_this.vy==_this.spoty_rectaglebox2)
                    {
                        target.x=_this.vx;
                        target.y=_this.vy;
                    }

                    else
                    {
                        _this.object_present_box1[Number(target.name)]=0;
                        target.destroy();
                    }
                }
                else if(_this.checkOverlap(target,_this.rectangleBox1))
                {
                    if(_this.vy==_this.spoty_rectaglebox1)
                    {
                        target.x=_this.vx;
                        target.y=_this.vy;
                    }

                    else
                    {
                        _this.object_present_box2[Number(target.name)]=0;
                        target.destroy();
                    }
                }

                else
                {
                    if(_this.vy==_this.spoty_rectaglebox2)
                    {
                        _this.object_present_box2[Number(target.name)]=0;
                        target.destroy();
                    }
                    else if(_this.vy==_this.spoty_rectaglebox1)
                    {
                        _this.object_present_box1[Number(target.name)]=0;
                        target.destroy();
                    }
                }

                if(_this.obj_group2.length>=_this.element2)
                {
                    _this.rectangleBox2.frame=0;
                   // _this.square4.frame=0;

                }

                else
                {
                    _this.rectangleBox2.frame=1;
                    _this.square4.visible=true;
                }

                if(_this.obj_group1.length>=_this.element1)
                {
                    _this.rectangleBox1.frame=0;
                    _this.square3.frame=0;

                }

                else
                {
                    _this.rectangleBox1.frame=1;
                    _this.square3.frame=1;
                }
            }
        }

        else
        {
            if(_this.vy==_this.spoty_rectaglebox2)
            {
                for(_this.index=0;_this.index<_this.obj_group1.length;_this.index++)
                {
                    if(_this.checkOverlap(_this.obj_group1.getChildAt(_this.index),target))
                    {
                        if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]!=_this.object_sign_box2[Number(target.name)])
                        {
                                
                            var imag;
                            if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]==1)
                            {
                                imag=_this.add.sprite(_this.array_box_x[Number(_this.obj_group1.getChildAt(_this.index).name)],_this.spoty_rectaglebox1,'plus');
                                imag.frame=0;
                            }

                            else if(_this.object_sign_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]==0)
                            {
                                imag=_this.add.sprite(_this.array_box_x[Number(_this.obj_group1.getChildAt(_this.index).name)],_this.spoty_rectaglebox1,'minus');
                                imag.frame=0;
                            }
                            
                            _this.object_present_box2[Number(target.name)]=0;
                            _this.object_present_box1[Number(_this.obj_group1.getChildAt(_this.index).name)]=0;
                            _this.nullyficationSound.pause();
                            _this.nullyficationSound.currentTime = 0.0;
                            _this.nullyficationSound.play();
                            target.destroy();
                            _this.obj_group1.getChildAt(_this.index).destroy();

                            _this.time.events.add(100,function()
                            {
                                imag.frame=1;
                            });
            
                            _this.time.events.add(300,function()
                            {
                                imag.frame=2;
                            });
            
                            _this.time.events.add(500,function()
                            { 
                                imag.destroy();
                            });

                            _this.time.events.add(550,function()
                            {
                                if(_this.numpad_present==0)
                                {
                                    if(_this.flipbtn.frame==1)
                                    {
                                        if((_this.obj_group1.length==(_this.element1-_this.element2))&&_this.obj_group2.length==0)
                                        {
                                            _this.flipbtn.frame=0;
                                            _this.flipbtn.inputEnabled=false;
                                            _this.numpad_present=1;
                                            _this.addNumberPad();
                                        }

                                        else if((_this.obj_group2.length==(_this.element2-_this.element1))&&_this.obj_group1.length==0)
                                        {
                                            _this.flipbtn.frame=0;
                                            _this.flipbtn.inputEnabled=false;
                                            _this.numpad_present=1;
                                            _this.addNumberPad();
                                        }
                
                                    
                                    }
                                }
                            });

                            return;

                        }
                    }
                }
            }
            
            target.x=_this.vx;
            target.y=_this.vy;    
        }
    },

    starActions : function()
    {
        _this.score++; 
        console.log('the count1 is: '+ _this.count1);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');

        // _this.userHasPlayed = 1;
        // _this.game_id='NS_INT_7_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
         _this.microConcepts = "Number Systems";
        
        _this.anim.play();
        //_this.count1++;

    },
    
    shutdown:function()
    {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },
    
}