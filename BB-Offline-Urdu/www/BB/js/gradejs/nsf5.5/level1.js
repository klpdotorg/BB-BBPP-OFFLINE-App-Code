Game.nsf5_5level1=function(){};


Game.nsf5_5level1.prototype={

    init:function(param,score)
    {
        _this = this;

        this.Stararr = param;
        this.score = score;
        
        telInitializer.gameIdInit("NSF5_5",gradeSelected);

    },

    preload:function(game){
  if(!window.grade5NSF5){

            window.grade5NSF5 = true;

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

            //GAME ASSETS       

            this.load.image('F2_5backg',window.baseUrl+'assets/gradeAssets/nsf2.5/backg.png');  

            this.load.atlas("NSF5_5_TickMark",window.baseUrl+"assets/gradeAssets/nsf5.5/tick.png",window.baseUrl+"json/gradeJson/nsf5.5/tick.json");
        this.load.atlas("NSF5_5_Eraser",window.baseUrl+"assets/gradeAssets/nsf5.5/erase.png",window.baseUrl+"json/gradeJson/nsf5.5/erase.json");
        this.load.atlas('NSF5_5_numberpad',window.baseUrl+'assets/gradeAssets/nsf5.5/numberpad.png',window.baseUrl+'json/gradeJson/nsf5.5/numberpad.json');
        this.load.atlas("NSF5_5_AnsBox",window.baseUrl+"assets/gradeAssets/nsf5.5/AnsBox.png",window.baseUrl+"json/gradeJson/nsf5.5/AnsBox.json");
        this.load.image('NSF5_5_Bottombar',window.baseUrl+'assets/gradeAssets/nsf5.5/bottombar.png');
        this.load.image('NSF5_5_Line',window.baseUrl+'assets/gradeAssets/nsf5.5/line1.png');
        this.load.image('NSF5_5_BG',window.baseUrl+'assets/gradeAssets/nsf5.5/BackGround.png');
        
        //Plate Images
        this.load.image("NSF5_5_SmallPlate",window.baseUrl+"assets/gradeAssets/nsf5.5/smallplate.png");
        this.load.image("NSF5_5_BigPlate",window.baseUrl+"assets/gradeAssets/nsf5.5/bigplate.png");
        this.load.image("NSF5_5_RedPlate",window.baseUrl+"assets/gradeAssets/nsf5.5/RedPlate.png");
        this.load.image("NSF5_5_GreenPlate",window.baseUrl+"assets/gradeAssets/nsf5.5/GreenPlate.png");
        
        //Cake Images
        this.load.image("NSF5_5_BigCake1",window.baseUrl+"assets/gradeAssets/nsf5.5/A1.png");
        this.load.image("NSF5_5_BigCake2",window.baseUrl+"assets/gradeAssets/nsf5.5/A2.png");
        this.load.image("NSF5_5_BigCake3",window.baseUrl+"assets/gradeAssets/nsf5.5/A3.png");
        this.load.image("NSF5_5_BigCake4",window.baseUrl+"assets/gradeAssets/nsf5.5/A4.png");
        this.load.image("NSF5_5_BigCake5",window.baseUrl+"assets/gradeAssets/nsf5.5/A5.png");
        this.load.image("NSF5_5_BigCake6",window.baseUrl+"assets/gradeAssets/nsf5.5/A6.png");
        this.load.image("NSF5_5_BigCake7",window.baseUrl+"assets/gradeAssets/nsf5.5/A7.png");
        this.load.image("NSF5_5_BigCake8",window.baseUrl+"assets/gradeAssets/nsf5.5/A8.png");
        this.load.image("NSF5_5_BigCake9",window.baseUrl+"assets/gradeAssets/nsf5.5/A9.png");
        this.load.image("NSF5_5_BigCake10",window.baseUrl+"assets/gradeAssets/nsf5.5/A10.png");
        
        //4 piece cake
        this.load.atlas("NSF5_5_4p_Cake1",window.baseUrl+"assets/gradeAssets/nsf5.5/4/1.png",window.baseUrl+"json/gradeJson/nsf5.5/4/1.json");
        this.load.atlas("NSF5_5_4p_Cake2",window.baseUrl+"assets/gradeAssets/nsf5.5/4/2.png",window.baseUrl+"json/gradeJson/nsf5.5/4/2.json");
        this.load.atlas("NSF5_5_4p_Cake3",window.baseUrl+"assets/gradeAssets/nsf5.5/4/3.png",window.baseUrl+"json/gradeJson/nsf5.5/4/3.json");
        this.load.atlas("NSF5_5_4p_Cake4",window.baseUrl+"assets/gradeAssets/nsf5.5/4/4.png",window.baseUrl+"json/gradeJson/nsf5.5/4/4.json");
        
        //16 piece cake
        this.load.atlas("NSF5_5_16p_Cake1",window.baseUrl+"assets/gradeAssets/nsf5.5/16/1.png",window.baseUrl+"json/gradeJson/nsf5.5/16/1.json");
        this.load.atlas("NSF5_5_16p_Cake2",window.baseUrl+"assets/gradeAssets/nsf5.5/16/2.png",window.baseUrl+"json/gradeJson/nsf5.5/16/2.json");
        this.load.atlas("NSF5_5_16p_Cake3",window.baseUrl+"assets/gradeAssets/nsf5.5/16/3.png",window.baseUrl+"json/gradeJson/nsf5.5/16/3.json");
        this.load.atlas("NSF5_5_16p_Cake4",window.baseUrl+"assets/gradeAssets/nsf5.5/16/4.png",window.baseUrl+"json/gradeJson/nsf5.5/16/4.json");
        this.load.atlas("NSF5_5_16p_Cake5",window.baseUrl+"assets/gradeAssets/nsf5.5/16/5.png",window.baseUrl+"json/gradeJson/nsf5.5/16/5.json");
        this.load.atlas("NSF5_5_16p_Cake6",window.baseUrl+"assets/gradeAssets/nsf5.5/16/6.png",window.baseUrl+"json/gradeJson/nsf5.5/16/6.json");
        this.load.atlas("NSF5_5_16p_Cake7",window.baseUrl+"assets/gradeAssets/nsf5.5/16/7.png",window.baseUrl+"json/gradeJson/nsf5.5/16/7.json");
        this.load.atlas("NSF5_5_16p_Cake8",window.baseUrl+"assets/gradeAssets/nsf5.5/16/8.png",window.baseUrl+"json/gradeJson/nsf5.5/16/8.json");
        this.load.atlas("NSF5_5_16p_Cake9",window.baseUrl+"assets/gradeAssets/nsf5.5/16/9.png",window.baseUrl+"json/gradeJson/nsf5.5/16/9.json");
        this.load.atlas("NSF5_5_16p_Cake10",window.baseUrl+"assets/gradeAssets/nsf5.5/16/10.png",window.baseUrl+"json/gradeJson/nsf5.5/16/10.json");
        this.load.atlas("NSF5_5_16p_Cake11",window.baseUrl+"assets/gradeAssets/nsf5.5/16/11.png",window.baseUrl+"json/gradeJson/nsf5.5/16/11.json");
        this.load.atlas("NSF5_5_16p_Cake12",window.baseUrl+"assets/gradeAssets/nsf5.5/16/12.png",window.baseUrl+"json/gradeJson/nsf5.5/16/12.json");
        this.load.atlas("NSF5_5_16p_Cake13",window.baseUrl+"assets/gradeAssets/nsf5.5/16/13.png",window.baseUrl+"json/gradeJson/nsf5.5/16/13.json");
        this.load.atlas("NSF5_5_16p_Cake14",window.baseUrl+"assets/gradeAssets/nsf5.5/16/14.png",window.baseUrl+"json/gradeJson/nsf5.5/16/14.json");
        this.load.atlas("NSF5_5_16p_Cake15",window.baseUrl+"assets/gradeAssets/nsf5.5/16/15.png",window.baseUrl+"json/gradeJson/nsf5.5/16/15.json");
        this.load.atlas("NSF5_5_16p_Cake16",window.baseUrl+"assets/gradeAssets/nsf5.5/16/16.png",window.baseUrl+"json/gradeJson/nsf5.5/16/16.json");
        
        //Fraction Question Images
        this.load.image("NSF5_5_Fraction-6/10",window.baseUrl+"assets/gradeAssets/nsf5.5/6-10.png");
        this.load.image("NSF5_5_Fraction-8/10",window.baseUrl+"assets/gradeAssets/nsf5.5/8-10.png");
        this.load.image("NSF5_5_Fraction-6/14",window.baseUrl+"assets/gradeAssets/nsf5.5/6-14.png");
        this.load.image("NSF5_5_Fraction-3/18",window.baseUrl+"assets/gradeAssets/nsf5.5/3-18.png");
        this.load.image("NSF5_5_Fraction-4/18",window.baseUrl+"assets/gradeAssets/nsf5.5/4-18.png");
        this.load.image("NSF5_5_Fraction-6/12",window.baseUrl+"assets/gradeAssets/nsf5.5/6-12.png");
        this.load.image("NSF5_5_Fraction-6/14",window.baseUrl+"assets/gradeAssets/nsf5.5/6-14.png");
        this.load.image("NSF5_5_Fraction-6/15",window.baseUrl+"assets/gradeAssets/nsf5.5/6-15.png");
        this.load.image("NSF5_5_Fraction-6/16",window.baseUrl+"assets/gradeAssets/nsf5.5/6-16.png");
        this.load.image("NSF5_5_Fraction-8/14",window.baseUrl+"assets/gradeAssets/nsf5.5/8-14.png");
        this.load.image("NSF5_5_Fraction-9/18",window.baseUrl+"assets/gradeAssets/nsf5.5/9-18.png");
        
        //Fraction Images
        this.load.image("NSF5_5_Fraction-1",window.baseUrl+"assets/gradeAssets/nsf5.5/1.png");
        this.load.image("NSF5_5_Fraction-1/2",window.baseUrl+"assets/gradeAssets/nsf5.5/1-2.png");
        this.load.image("NSF5_5_Fraction-1/3",window.baseUrl+"assets/gradeAssets/nsf5.5/1-3.png");
        this.load.image("NSF5_5_Fraction-1/4",window.baseUrl+"assets/gradeAssets/nsf5.5/1-4.png");
        this.load.image("NSF5_5_Fraction-1/5",window.baseUrl+"assets/gradeAssets/nsf5.5/1-5.png");
        this.load.image("NSF5_5_Fraction-1/6",window.baseUrl+"assets/gradeAssets/nsf5.5/1-6.png");
        this.load.image("NSF5_5_Fraction-1/7",window.baseUrl+"assets/gradeAssets/nsf5.5/1-7.png");
        this.load.image("NSF5_5_Fraction-1/8",window.baseUrl+"assets/gradeAssets/nsf5.5/1-8.png");
        this.load.image("NSF5_5_Fraction-1/9",window.baseUrl+"assets/gradeAssets/nsf5.5/1-9.png");
        this.load.image("NSF5_5_Fraction-1/10",window.baseUrl+"assets/gradeAssets/nsf5.5/1-10.png");
    }

    },

    create:function(game){
        _this = this;
        _this.Stararr = [];
        //_this.amplify = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.wrongAnswer = false;

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=0;

        _this.clicked=0; 

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.toCheckNumberPad = false;
        _this.toCheckNumberPad1 = false;

        _this.qArray = new Array();

        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();

        _this.qArrays1 = [1,2,3,4];
        _this.qArrays2 = [5,6,7,8,9,10,11,12];
       

        //this.qArrays1 = this.shuffle(_this.qArrays1);
        this.qArrays2 = this.shuffle(_this.qArrays2);

        for(var i=0;i<3;i++)
        {
            _this.qArray.push(_this.qArrays1[i]);
        }
        for(var j=0;j<3;j++)
        {
            _this.qArray.push(_this.qArrays2[j]);
        }
    
        
        console.log(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'F2_5backg');

       
        
        commonNavBar_nsf5_5.addNavBar(game,_this.soundurl);
        commonNavBar_nsf5_5.addTimerToTheGame(game,0,0,0);
        commonNavBar_nsf5_5.startTimer(game);

         _this.speakerbtn = this.add.button(600,5,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.generateStarsForTheScene(6);

        _this.getQuestion();
        _this.getVoice();

    },

    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

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
        console.log(_this.qArray[_this.no11]);

         if(!_this.timer)
        {
          _this.sceneCount++;
          _this.noofAttempts=0;
          _this.AnsTimerCount=0;
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }

        _this.toCheckNumberPad = true;
        _this.toCheckNumberPad1 = true;

        

        if(_this.no11==0)
        {
            _this.getVoice();
        }
        else if(_this.no11==3)
        {
            _this.getVoice();
        }

        switch(_this.qArray[_this.no11])
        {
            case 1: 
                _this.gotoFirstQuestion();
                break;

            case 2: 
                _this.gotoSecondQuestion();
                break;

            case 3: 
                _this.gotoThirdQuestion();
                break;

            case 4: 
                _this.gotoFourthQuestion();
                break;

            case 5: 
                _this.gotoFifthQuestion();
                break;

            case 6: 
                _this.gotoSixthQuestion();
                break;

            case 7: 
                _this.gotoSeventhQuestion();
                break;

            case 8: 
                _this.gotoEighthQuestion();
                break;

            case 9: 
                _this.gotoNinthQuestion();
                break;

            case 10: 
                _this.gotoTenthQuestion();
                break;

            case 11: 
                _this.gotoEleventhQuestion();
                break;

            case 12: 
                _this.gotoTwelvthQuestion();
                break;

        }
    },

    loadAssets:function(){

        _this.redplate = _this.add.sprite(_this.world.centerX+110,_this.world.centerY+30,'NSF5_5_RedPlate');
        _this.redplate.anchor.setTo(0.5);
        _this.redplate.scale.setTo(1.2,1.4);
        _this.redplate.name="RedPlate";

        _this.graphics1 = _this.add.graphics(_this.world.centerX-245,_this.world.centerY-70);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,50,125);
        _this.graphics1.inputEnabled = true;
        // _this.graphics1.input.priorityID = 1;
        _this.graphics1.alpha = 0;

    },

    loadTextBox:function(){

        _this.txtbox1 = _this.add.sprite(_this.world.centerX+350,_this.world.centerY-30,'NSF5_5_AnsBox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.scale.setTo(1.5,1.5);
        _this.txtbox1.frame = 0;
        _this.txtbox1.name="AnsBox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this); 

        _this.line = _this.add.sprite(_this.world.centerX+295,_this.world.centerY+15,'NSF5_5_Line');

        _this.txtbox2 = _this.add.sprite(_this.world.centerX+350,_this.world.centerY+70,'NSF5_5_AnsBox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.scale.setTo(1.5,1.5);
        _this.txtbox2.frame = 0;
        _this.txtbox2.name="AnsBox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this); 

        _this.txtbox1Pressed = false;
        _this.txtbox2Pressed = false;

    },

    loadAssets1:function(){

        _this.bg = _this.add.sprite(_this.world.centerX-150,_this.world.centerY+20,'NSF5_5_BG');
        _this.bg.anchor.setTo(0.5);
        _this.bg.name="GreyBG";

        _this.onebytwo = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+10,'NSF5_5_Fraction-1/2');
        _this.onebytwo.anchor.setTo(0.5);
        _this.onebytwo.name="1/2";
        _this.onebytwo_X = _this.world.centerX-300;
        _this.onebytwo_Y = _this.world.centerY+10;
        _this.onebytwo.inputEnabled = true;
        _this.onebytwo.input.useHandCursor = true;  
        _this.onebytwo.input.enableDrag(true);
        _this.onebytwo.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebytwo.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebythree = _this.add.sprite(_this.world.centerX-263,_this.world.centerY-26,'NSF5_5_Fraction-1/3');
        _this.onebythree.anchor.setTo(0.5);
        _this.onebythree.name="1/3";
        _this.onebythree_X = _this.world.centerX-263;
        _this.onebythree_Y = _this.world.centerY-26;
        _this.onebythree.inputEnabled = true;
        _this.onebythree.input.useHandCursor = true;  
        _this.onebythree.input.enableDrag(true);
        _this.onebythree.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebythree.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebyfour = _this.add.sprite(_this.world.centerX-226,_this.world.centerY-44,'NSF5_5_Fraction-1/4');
        _this.onebyfour.anchor.setTo(0.5);
        _this.onebyfour.name="1/4";
        _this.onebyfour_X = _this.world.centerX-226;
        _this.onebyfour_Y = _this.world.centerY-44;
        _this.onebyfour.inputEnabled = true;
        _this.onebyfour.input.useHandCursor = true;  
        _this.onebyfour.input.enableDrag(true);
        _this.onebyfour.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebyfour.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebyfive = _this.add.sprite(_this.world.centerX-189,_this.world.centerY-55,'NSF5_5_Fraction-1/5');
        _this.onebyfive.anchor.setTo(0.5);
        _this.onebyfive.name="1/5";
        _this.onebyfive_X = _this.world.centerX-189;
        _this.onebyfive_Y = _this.world.centerY-55;
        _this.onebyfive.inputEnabled = true;
        _this.onebyfive.input.useHandCursor = true;  
        _this.onebyfive.input.enableDrag(true);
        _this.onebyfive.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebyfive.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebysix = _this.add.sprite(_this.world.centerX-152,_this.world.centerY-62,'NSF5_5_Fraction-1/6');
        _this.onebysix.anchor.setTo(0.5);
        _this.onebysix.name="1/6";
        _this.onebysix_X = _this.world.centerX-152;
        _this.onebysix_Y = _this.world.centerY-62;
        _this.onebysix.inputEnabled = true;
        _this.onebysix.input.useHandCursor = true;  
        _this.onebysix.input.enableDrag(true);
        _this.onebysix.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebysix.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebyseven = _this.add.sprite(_this.world.centerX-115,_this.world.centerY-67,'NSF5_5_Fraction-1/7');
        _this.onebyseven.anchor.setTo(0.5);
        _this.onebyseven.name="1/7";
        _this.onebyseven_X = _this.world.centerX-115;
        _this.onebyseven_Y = _this.world.centerY-67;
        _this.onebyseven.inputEnabled = true;
        _this.onebyseven.input.useHandCursor = true;  
        _this.onebyseven.input.enableDrag(true);
        _this.onebyseven.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebyseven.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebyeight = _this.add.sprite(_this.world.centerX-78,_this.world.centerY-71,'NSF5_5_Fraction-1/8');
        _this.onebyeight.anchor.setTo(0.5);
        _this.onebyeight.name="1/8";
        _this.onebyeight_X = _this.world.centerX-78;
        _this.onebyeight_Y = _this.world.centerY-71;
        _this.onebyeight.inputEnabled = true;
        _this.onebyeight.input.useHandCursor = true;  
        _this.onebyeight.input.enableDrag(true);
        _this.onebyeight.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebyeight.events.onDragStop.add(_this.onDragStopBar, _this);

        _this.onebynine = _this.add.sprite(_this.world.centerX-41,_this.world.centerY-74,'NSF5_5_Fraction-1/9');
        _this.onebynine.anchor.setTo(0.5);
        _this.onebynine.name="1/9";
        _this.onebynine_X = _this.world.centerX-41;
        _this.onebynine_Y = _this.world.centerY-74;
        _this.onebynine.inputEnabled = true;
        _this.onebynine.input.useHandCursor = true;  
        _this.onebynine.input.enableDrag(true);
        _this.onebynine.events.onDragStart.add(_this.onDragStartBar, _this);
        _this.onebynine.events.onDragStop.add(_this.onDragStopBar, _this);

        if(_this.questionNo == 5 || _this.questionNo == 6){

            _this.onebyten = _this.add.sprite(_this.world.centerX-4,_this.world.centerY-76,'NSF5_5_Fraction-1/10');
            _this.onebyten.anchor.setTo(0.5);
            _this.onebyten.name="1/10";
            _this.onebyten_X = _this.world.centerX-4;
            _this.onebyten_Y = _this.world.centerY-76;
            _this.onebyten.alpha=0;

        }else{

            _this.onebyten = _this.add.sprite(_this.world.centerX-4,_this.world.centerY-76,'NSF5_5_Fraction-1/10');
            _this.onebyten.anchor.setTo(0.5);
            _this.onebyten.name="1/10";
            _this.onebyten_X = _this.world.centerX-4;
            _this.onebyten_Y = _this.world.centerY-76;
            _this.onebyten.inputEnabled = true;
            _this.onebyten.input.useHandCursor = true;  
            _this.onebyten.input.enableDrag(true);
            _this.onebyten.events.onDragStart.add(_this.onDragStartBar, _this);
            _this.onebyten.events.onDragStop.add(_this.onDragStopBar, _this);

        }

        _this.txtbox1 = _this.add.sprite(_this.world.centerX+350,_this.world.centerY-30,'NSF5_5_AnsBox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.scale.setTo(1.5,1.5);
        _this.txtbox1.frame = 0;
        _this.txtbox1.name="AnsBox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this); 

        _this.line = _this.add.sprite(_this.world.centerX+295,_this.world.centerY+15,'NSF5_5_Line');

        _this.txtbox2 = _this.add.sprite(_this.world.centerX+350,_this.world.centerY+70,'NSF5_5_AnsBox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.scale.setTo(1.5,1.5);
        _this.txtbox2.frame = 0;
        _this.txtbox2.name="AnsBox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this); 

        _this.txtbox1Pressed = false;
        _this.txtbox2Pressed = false;

    },

    numberBoxClicked:function(target){

        commonNavBar_nsf5_5.playClickSound();

        if(target.name == "AnsBox1")
        {
            _this.txtbox1Pressed = true;
            _this.txtbox2Pressed = false;

            _this.txtbox1.frame = 2;

            if(_this.clicked == 0 && _this.toCheckNumberPad1)
                _this.txtbox2.frame = 0;
            else
                _this.txtbox2.frame = 1;
        } 
        if(target.name == "AnsBox2")
        {
            _this.txtbox2Pressed = true;
            _this.txtbox1Pressed = false;

            _this.txtbox2.frame = 2;

            if(_this.clicked == 0 && _this.toCheckNumberPad1)
                _this.txtbox1.frame = 0;
            else
                _this.txtbox1.frame = 1;
        } 

        _this.clicked = 1;

        if( _this.toCheckNumberPad && _this.toCheckNumberPad1)
        {
            _this.toCheckNumberPad = false;
            _this.toCheckNumberPad1 = false;
            _this.addNumberPad();
        }

    },

    gotoFirstQuestion:function(){

        _this.questionNo = 1;

        _this.plate = _this.add.sprite(_this.world.centerX-245,_this.world.centerY+30,'NSF5_5_BigPlate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.name="EmptyPlate";

        _this.loadAssets();

        //        _this.LeftCake5 = _this.add.sprite(_this.world.centerX-263.5,_this.world.centerY-76.5,'NSF5_5_BigCake7');
        //        _this.LeftCake5.name = "Q1_LeftCake5";
        //        _this.LeftCake6 = _this.add.sprite(_this.world.centerX-243.5,_this.world.centerY-66.8,'NSF5_5_BigCake6');
        //        _this.LeftCake6.name = "Q1_LeftCake6";
        //        _this.LeftCake7 = _this.add.sprite(_this.world.centerX-243,_this.world.centerY-41.5,'NSF5_5_BigCake5');   
        //        _this.LeftCake7.name = "Q1_LeftCake7";
        //        _this.LeftCake8 = _this.add.sprite(_this.world.centerX-244,_this.world.centerY-31,'NSF5_5_BigCake4');
        //        _this.LeftCake8.name = "Q1_LeftCake8";
        //        _this.LeftCake4 = _this.add.sprite(_this.world.centerX-304,_this.world.centerY-76,'NSF5_5_BigCake8');
        //        _this.LeftCake4.name = "Q1_LeftCake4";
        //        _this.LeftCake3 = _this.add.sprite(_this.world.centerX-313,_this.world.centerY-56,'NSF5_5_BigCake9');
        //        _this.LeftCake3.name = "Q1_LeftCake3";
        //        _this.LeftCake2 = _this.add.sprite(_this.world.centerX-312,_this.world.centerY-31,'NSF5_5_BigCake10');
        //        _this.LeftCake2.name = "Q1_LeftCake2";
        //        _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-30,'NSF5_5_BigCake3');
        //        _this.LeftCake1.name = "Q1_LeftCake1";

        if(_this.wrongAnswer == false){

            _this.LeftCake = _this.add.sprite(_this.world.centerX-310,_this.world.centerY-60,'NSF5_5_BigCake1');

            _this.hand = _this.add.sprite(_this.world.centerX-120,_this.world.centerY-80,'hand');
            _this.hand.scale.setTo(0.8);

            _this.time.events.add(500, function(){
                _this.HandTween = _this.add.tween(_this.hand);
                _this.HandTween.to({ x: 270,y: 230 }, 300,'Linear', true, 0);
                _this.HandTween.onComplete.add(function(){

                    _this.time.events.add(100, function(){
                        _this.LeftCake.destroy();

                        _this.LeftCake5 = _this.add.sprite(_this.world.centerX-262,_this.world.centerY-90,'NSF5_5_BigCake7');
                        _this.LeftCake5.name = "Q1_LeftCake5";
                        _this.LeftCake6 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY-80,'NSF5_5_BigCake6');
                        _this.LeftCake6.name = "Q1_LeftCake6";
                        _this.LeftCake7 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY-45,'NSF5_5_BigCake5');   
                        _this.LeftCake7.name = "Q1_LeftCake7";
                        _this.LeftCake8 = _this.add.sprite(_this.world.centerX-235,_this.world.centerY-20,'NSF5_5_BigCake4');
                        _this.LeftCake8.name = "Q1_LeftCake8";
                        _this.LeftCake4 = _this.add.sprite(_this.world.centerX-312,_this.world.centerY-85,'NSF5_5_BigCake8');
                        _this.LeftCake4.name = "Q1_LeftCake4";
                        _this.LeftCake3 = _this.add.sprite(_this.world.centerX-321,_this.world.centerY-56,'NSF5_5_BigCake9');
                        _this.LeftCake3.name = "Q1_LeftCake3";
                        _this.LeftCake2 = _this.add.sprite(_this.world.centerX-320,_this.world.centerY-21,'NSF5_5_BigCake10');
                        _this.LeftCake2.name = "Q1_LeftCake2";
                        _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-10,'NSF5_5_BigCake3');
                        _this.LeftCake1.name = "Q1_LeftCake1";

                        _this.world.bringToTop(_this.hand);
                    },_this);

                    _this.time.events.add(1000, function(){
                        _this.HandTween = _this.add.tween(_this.hand);
                        _this.HandTween.to({ x: 610,y: 250 }, 1000,'Linear', true, 0);
                        _this.RightCake1 = _this.add.tween(_this.LeftCake7);
                        _this.RightCake1.to({ x: 580,y: 250 }, 0,'Linear', true, 0);
                        _this.RightCake1.onComplete.add(function(){
                            _this.HandTween.to({ x: 260,y: 260 }, 700,'Linear', true, 0);
                            _this.HandTween.onComplete.add(function(){
                                //   _this.time.events.add(800, function(){
                                _this.HandTween = _this.add.tween(_this.hand);
                                _this.HandTween.to({ x: 560,y: 260 }, 1000,'Linear', true, 0);
                                _this.RightCake2 = _this.add.tween(_this.LeftCake8);
                                _this.RightCake2.to({ x: 540,y: 250 }, 0,'Linear', true, 0);
                                _this.RightCake2.onComplete.add(function(){

                                    _this.loadTextBox();

                                    _this.LeftCake7.inputEnabled = true;
                                    _this.LeftCake7.input.useHandCursor = true;  

                                    _this.LeftCake8.inputEnabled = true;
                                    _this.LeftCake8.input.useHandCursor = true; 

                                    _this.LeftCake7.input.enableDrag(true);
                                    _this.LeftCake8.input.enableDrag(true);

                                    _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
                                    _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

                                    _this.LeftCake8.events.onDragStart.add(_this.onDragStart, _this);
                                    _this.LeftCake8.events.onDragStop.add(_this.onDragStop, _this);

                                    _this.time.events.add(500, function(){
                                        _this.hand.destroy();
                                    }, _this);   

                                    if(_this.toCheckNumberPad1){
                                        _this.toCheckNumberPad1 = false;
                                        _this.addNumberPad();
                                    } 

                                }, _this); 
                                //    }, _this); 
                            }, _this); 
                        }, _this); 
                    }, _this);
                }, _this);
            }, _this);

        }else{

            _this.loadTextBox();

            _this.LeftCake5 = _this.add.sprite(_this.world.centerX-262,_this.world.centerY-90,'NSF5_5_BigCake7');
            _this.LeftCake5.name = "Q1_LeftCake5";
            _this.LeftCake6 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY-80,'NSF5_5_BigCake6');
            _this.LeftCake6.name = "Q1_LeftCake6";
            _this.LeftCake7 = _this.add.sprite(580,250,'NSF5_5_BigCake5');   
            _this.LeftCake7.name = "Q1_LeftCake7";
            _this.LeftCake8 = _this.add.sprite(540,250,'NSF5_5_BigCake4');
            _this.LeftCake8.name = "Q1_LeftCake8";
            _this.LeftCake4 = _this.add.sprite(_this.world.centerX-312,_this.world.centerY-85,'NSF5_5_BigCake8');
            _this.LeftCake4.name = "Q1_LeftCake4";
            _this.LeftCake3 = _this.add.sprite(_this.world.centerX-321,_this.world.centerY-56,'NSF5_5_BigCake9');
            _this.LeftCake3.name = "Q1_LeftCake3";
            _this.LeftCake2 = _this.add.sprite(_this.world.centerX-320,_this.world.centerY-21,'NSF5_5_BigCake10');
            _this.LeftCake2.name = "Q1_LeftCake2";
            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-10,'NSF5_5_BigCake3');
            _this.LeftCake1.name = "Q1_LeftCake1";

            _this.LeftCake7.inputEnabled = true;
            _this.LeftCake7.input.useHandCursor = true;  

            _this.LeftCake8.inputEnabled = true;
            _this.LeftCake8.input.useHandCursor = true; 

            _this.LeftCake7.input.enableDrag(true);
            _this.LeftCake8.input.enableDrag(true);

            _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake8.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake8.events.onDragStop.add(_this.onDragStop, _this);

            if(_this.toCheckNumberPad1){
                _this.toCheckNumberPad1 = false;
                _this.addNumberPad();
            } 
        }

        // X and Y axis of the cakes in the Left side plate
        _this.LeftCake7_X = _this.world.centerX-230;
        _this.LeftCake7_Y = _this.world.centerY-45;

        _this.LeftCake8_X = _this.world.centerX-235;
        _this.LeftCake8_Y = _this.world.centerY-20;

        // X and Y axis of the cakes in the right side plate
        _this.RightCake1_X = 580;
        _this.RightCake1_Y = 250;

        _this.RightCake2_X = 540;
        _this.RightCake2_Y = 250;

        _this.rightAns1 = 1;
        _this.rightAns2 = 4;

    },

    gotoSecondQuestion:function(){

        _this.questionNo = 2;

        _this.plate = _this.add.sprite(_this.world.centerX-245,_this.world.centerY+30,'NSF5_5_BigPlate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.name="EmptyPlate";
        _this.loadAssets();

        if(_this.wrongAnswer == false){

            _this.LeftCake = _this.add.sprite(_this.world.centerX-310,_this.world.centerY-60,'NSF5_5_BigCake1');

            _this.hand = _this.add.sprite(_this.world.centerX-120,_this.world.centerY-80,'hand');
            _this.hand.scale.setTo(0.8);

            _this.time.events.add(500, function(){
                _this.HandTween = _this.add.tween(_this.hand);
                _this.HandTween.to({ x: 230,y: 220 }, 300,'Linear', true, 0);
                _this.HandTween.onComplete.add(function(){

                    _this.time.events.add(100, function(){
                        _this.LeftCake.destroy();

                        _this.LeftCake5 = _this.add.sprite(_this.world.centerX-262,_this.world.centerY-90,'NSF5_5_BigCake7');
                        _this.LeftCake5.name = "Q2_LeftCake5";
                        _this.LeftCake6 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY-80,'NSF5_5_BigCake6');
                        _this.LeftCake6.name = "Q2_LeftCake6";
                        _this.LeftCake7 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY-45,'NSF5_5_BigCake5');   
                        _this.LeftCake7.name = "Q2_LeftCake7";
                        _this.LeftCake8 = _this.add.sprite(_this.world.centerX-235,_this.world.centerY-20,'NSF5_5_BigCake4');
                        _this.LeftCake8.name = "Q2_LeftCake8";
                        _this.LeftCake4 = _this.add.sprite(_this.world.centerX-312,_this.world.centerY-85,'NSF5_5_BigCake8');
                        _this.LeftCake4.name = "Q2_LeftCake4";
                        _this.LeftCake3 = _this.add.sprite(_this.world.centerX-321,_this.world.centerY-56,'NSF5_5_BigCake9');
                        _this.LeftCake3.name = "Q2_LeftCake3";
                        _this.LeftCake2 = _this.add.sprite(_this.world.centerX-320,_this.world.centerY-21,'NSF5_5_BigCake10');
                        _this.LeftCake2.name = "Q2_LeftCake2";
                        _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-10,'NSF5_5_BigCake3');
                        _this.LeftCake1.name = "Q2_LeftCake1";

                        _this.world.bringToTop(_this.hand);

                        _this.HandTween = _this.add.tween(_this.hand);
                        _this.HandTween.to({ x: 230,y: 190 }, 500,'Linear', true, 0);

                    },_this);

                    _this.time.events.add(500, function(){
                        _this.HandTween = _this.add.tween(_this.hand);
                        _this.HandTween.to({ x: 560,y: 210 }, 1000,'Linear', true, 0);
                        _this.RightCake1 = _this.add.tween(_this.LeftCake5);
                        _this.RightCake1.to({ x: 540,y: 200 }, 0,'Linear', true, 0);
                        _this.RightCake1.onComplete.add(function(){
                            _this.HandTween.to({ x: 270,y: 205 }, 700,'Linear', true, 0);
                            _this.HandTween.onComplete.add(function(){
                                //   _this.time.events.add(800, function(){
                                _this.HandTween = _this.add.tween(_this.hand);
                                _this.HandTween.to({ x: 620,y: 225 }, 1000,'Linear', true, 0);
                                _this.RightCake2 = _this.add.tween(_this.LeftCake6);
                                _this.RightCake2.to({ x: 590,y: 210 }, 0,'Linear', true, 0);
                                _this.RightCake2.onComplete.add(function(){
                                    _this.HandTween.to({ x: 280,y: 230 }, 700,'Linear', true, 0);
                                    _this.HandTween.onComplete.add(function(){
                                        //    _this.time.events.add(800, function(){
                                        _this.HandTween = _this.add.tween(_this.hand);
                                        _this.HandTween.to({ x: 610,y: 265 }, 1000,'Linear', true, 0);
                                        _this.RightCake3 = _this.add.tween(_this.LeftCake7);
                                        _this.RightCake3.to({ x: 580,y: 260 }, 0,'Linear', true, 0);
                                        _this.RightCake3.onComplete.add(function(){
                                            _this.HandTween.to({ x: 265,y: 260 }, 700,'Linear', true, 0);
                                            _this.HandTween.onComplete.add(function(){
                                                //  _this.time.events.add(800, function(){
                                                _this.HandTween = _this.add.tween(_this.hand);
                                                _this.HandTween.to({ x: 550,y: 270 }, 1000,'Linear', true, 0);
                                                _this.RightCake4 = _this.add.tween(_this.LeftCake8);
                                                _this.RightCake4.to({ x: 530,y: 260 }, 0,'Linear', true, 0);
                                                _this.RightCake4.onComplete.add(function(){

                                                    _this.LeftCake5.inputEnabled = true;
                                                    _this.LeftCake5.input.useHandCursor = true; 

                                                    _this.LeftCake6.inputEnabled = true;
                                                    _this.LeftCake6.input.useHandCursor = true; 

                                                    _this.LeftCake7.inputEnabled = true;
                                                    _this.LeftCake7.input.useHandCursor = true;  

                                                    _this.LeftCake8.inputEnabled = true;
                                                    _this.LeftCake8.input.useHandCursor = true; 

                                                    _this.LeftCake5.input.enableDrag(true);
                                                    _this.LeftCake6.input.enableDrag(true);
                                                    _this.LeftCake7.input.enableDrag(true);
                                                    _this.LeftCake8.input.enableDrag(true);

                                                    _this.LeftCake5.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake5.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake6.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake6.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake8.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake8.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.loadTextBox();

                                                    _this.time.events.add(500, function(){
                                                        _this.hand.destroy();
                                                    }, _this);

                                                    if(_this.toCheckNumberPad1){
                                                        _this.toCheckNumberPad1 = false;
                                                        _this.addNumberPad();
                                                    } 

                                                }, _this); 
                                                //    }, _this); 
                                            }, _this); 
                                        }, _this); 
                                        //      }, _this); 
                                    }, _this); 
                                }, _this); 
                                //   }, _this); 
                            }, _this); 
                        }, _this); 
                    }, _this); 
                }, _this);
            }, _this);

        }else{

            _this.loadTextBox();

            _this.LeftCake5 = _this.add.sprite(540,200,'NSF5_5_BigCake7');
            _this.LeftCake5.name = "Q2_LeftCake5";
            _this.LeftCake6 = _this.add.sprite(590,210,'NSF5_5_BigCake6');
            _this.LeftCake6.name = "Q2_LeftCake6";
            _this.LeftCake7 = _this.add.sprite(580,260,'NSF5_5_BigCake5');   
            _this.LeftCake7.name = "Q2_LeftCake7";
            _this.LeftCake8 = _this.add.sprite(530,260,'NSF5_5_BigCake4');
            _this.LeftCake8.name = "Q2_LeftCake8";
            _this.LeftCake4 = _this.add.sprite(_this.world.centerX-312,_this.world.centerY-85,'NSF5_5_BigCake8');
            _this.LeftCake4.name = "Q1_LeftCake4";
            _this.LeftCake3 = _this.add.sprite(_this.world.centerX-321,_this.world.centerY-56,'NSF5_5_BigCake9');
            _this.LeftCake3.name = "Q1_LeftCake3";
            _this.LeftCake2 = _this.add.sprite(_this.world.centerX-320,_this.world.centerY-21,'NSF5_5_BigCake10');
            _this.LeftCake2.name = "Q1_LeftCake2";
            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-10,'NSF5_5_BigCake3');
            _this.LeftCake1.name = "Q1_LeftCake1";

            _this.LeftCake5.inputEnabled = true;
            _this.LeftCake5.input.useHandCursor = true; 

            _this.LeftCake6.inputEnabled = true;
            _this.LeftCake6.input.useHandCursor = true; 

            _this.LeftCake7.inputEnabled = true;
            _this.LeftCake7.input.useHandCursor = true;  

            _this.LeftCake8.inputEnabled = true;
            _this.LeftCake8.input.useHandCursor = true; 

            _this.LeftCake5.input.enableDrag(true);
            _this.LeftCake6.input.enableDrag(true);
            _this.LeftCake7.input.enableDrag(true);
            _this.LeftCake8.input.enableDrag(true);

            _this.LeftCake5.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake5.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake6.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake6.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake8.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake8.events.onDragStop.add(_this.onDragStop, _this);

            if(_this.toCheckNumberPad1){
                _this.toCheckNumberPad1 = false;
                _this.addNumberPad();
            } 

        }

        // X and Y axis of the cakes in the Left side plate
        _this.LeftCake5_X = _this.world.centerX-262;
        _this.LeftCake5_Y = _this.world.centerY-90;

        _this.LeftCake6_X = _this.world.centerX-230;
        _this.LeftCake6_Y = _this.world.centerY-80;

        _this.LeftCake7_X = _this.world.centerX-230;
        _this.LeftCake7_Y = _this.world.centerY-45;

        _this.LeftCake8_X = _this.world.centerX-235;
        _this.LeftCake8_Y = _this.world.centerY-20;

        // X and Y axis of the cakes in the right side plate
        _this.RightCake1_X = 540;
        _this.RightCake1_Y = 200;

        _this.RightCake2_X = 590;
        _this.RightCake2_Y = 210;

        _this.RightCake3_X = 580;
        _this.RightCake3_Y = 260;

        _this.RightCake4_X = 530;
        _this.RightCake4_Y = 260;

        _this.rightAns1 = 1;
        _this.rightAns2 = 2;

    },

    gotoThirdQuestion:function(){

        _this.questionNo = 3;

        _this.plate = _this.add.sprite(_this.world.centerX-240,_this.world.centerY+30,'NSF5_5_BigPlate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.name="EmptyPlate";

        _this.loadAssets();

        if(_this.wrongAnswer == false){

            //            _this.LeftCake10 = _this.add.sprite(_this.world.centerX-264,_this.world.centerY-75,'NSF5_5_16p_Cake9');
            //            _this.LeftCake10.name = "Q3_LeftCake10";
            //            _this.LeftCake11 = _this.add.sprite(_this.world.centerX-286.5,_this.world.centerY-75,'NSF5_5_16p_Cake12');
            //            _this.LeftCake11.name = "Q3_LeftCake11";
            //            _this.LeftCake12 = _this.add.sprite(_this.world.centerX-308,_this.world.centerY-68,'NSF5_5_16p_Cake11');
            //            _this.LeftCake12.name = "Q3_LeftCake12";
            //            _this.LeftCake13 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY-54,'NSF5_5_16p_Cake14');
            //            _this.LeftCake13.name = "Q3_LeftCake13";
            //            _this.LeftCake14 = _this.add.sprite(_this.world.centerX-317,_this.world.centerY-40,'NSF5_5_16p_Cake13');
            //            _this.LeftCake14.name = "Q3_LeftCake14";
            //            _this.LeftCake15 = _this.add.sprite(_this.world.centerX-316,_this.world.centerY-29,'NSF5_5_16p_Cake15');
            //            _this.LeftCake15.name = "Q3_LeftCake15";
            //            _this.LeftCake16 = _this.add.sprite(_this.world.centerX-305,_this.world.centerY-29,'NSF5_5_16p_Cake16');
            //            _this.LeftCake16.name = "Q3_LeftCake16";
            //            _this.LeftCake9 = _this.add.sprite(_this.world.centerX-248,_this.world.centerY-71,'NSF5_5_16p_Cake10');
            //            _this.LeftCake9.name = "Q3_LeftCake9";
            //            _this.LeftCake8 = _this.add.sprite(_this.world.centerX-241,_this.world.centerY-66,'NSF5_5_16p_Cake7');
            //            _this.LeftCake8.name = "Q3_LeftCake8";
            //            _this.LeftCake7 = _this.add.sprite(_this.world.centerX-240,_this.world.centerY-56,'NSF5_5_16p_Cake8');
            //            _this.LeftCake7.name = "Q3_LeftCake7";
            //            _this.LeftCake6 = _this.add.sprite(_this.world.centerX-239,_this.world.centerY-41.5,'NSF5_5_16p_Cake6');   
            //            _this.LeftCake6.name = "Q3_LeftCake6";
            //            _this.LeftCake5 = _this.add.sprite(_this.world.centerX-240,_this.world.centerY-30,'NSF5_5_16p_Cake5');
            //            _this.LeftCake5.name = "Q3_LeftCake5";
            //            _this.LeftCake4 = _this.add.sprite(_this.world.centerX-241,_this.world.centerY-29,'NSF5_5_16p_Cake4');
            //            _this.LeftCake4.name = "Q3_LeftCake4";
            //            _this.LeftCake3 = _this.add.sprite(_this.world.centerX-243,_this.world.centerY-29,'NSF5_5_16p_Cake3');
            //            _this.LeftCake3.name = "Q3_LeftCake3";
            //            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-30,'NSF5_5_16p_Cake1');
            //            _this.LeftCake1.name = "Q3_LeftCake1";
            //            _this.LeftCake2 = _this.add.sprite(_this.world.centerX-255,_this.world.centerY-30,'NSF5_5_16p_Cake2');
            //            _this.LeftCake2.name = "Q3_LeftCake2";

            _this.LeftCake = _this.add.sprite(_this.world.centerX-310,_this.world.centerY-60,'NSF5_5_BigCake1');

            _this.hand = _this.add.sprite(_this.world.centerX-120,_this.world.centerY-80,'hand');
            _this.hand.scale.setTo(0.6);

            _this.time.events.add(500, function(){
                _this.HandTween = _this.add.tween(_this.hand);
                _this.HandTween.to({ x: 275,y: 258 }, 300,'Linear', true, 0);
                _this.HandTween.onComplete.add(function(){

                    _this.LeftCake.destroy();

                    _this.LeftCake10 = _this.add.sprite(_this.world.centerX-258,_this.world.centerY-88,'NSF5_5_16p_Cake9');
                    _this.LeftCake10.name = "Q3_LeftCake10";
                    _this.LeftCake11 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-88,'NSF5_5_16p_Cake12');
                    _this.LeftCake11.name = "Q3_LeftCake11";
                    _this.LeftCake12 = _this.add.sprite(_this.world.centerX-315,_this.world.centerY-78,'NSF5_5_16p_Cake11');
                    _this.LeftCake12.name = "Q3_LeftCake12";
                    _this.LeftCake13 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-60,'NSF5_5_16p_Cake14');
                    _this.LeftCake13.name = "Q3_LeftCake13";
                    _this.LeftCake14 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-40,'NSF5_5_16p_Cake13');
                    _this.LeftCake14.name = "Q3_LeftCake14";
                    _this.LeftCake15 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-25,'NSF5_5_16p_Cake15');
                    _this.LeftCake15.name = "Q3_LeftCake15";
                    _this.LeftCake16 = _this.add.sprite(_this.world.centerX-313,_this.world.centerY-15,'NSF5_5_16p_Cake16');
                    _this.LeftCake16.name = "Q3_LeftCake16";
                    _this.LeftCake9 = _this.add.sprite(_this.world.centerX-235,_this.world.centerY-83,'NSF5_5_16p_Cake10');
                    _this.LeftCake9.name = "Q3_LeftCake9";
                    _this.LeftCake8 = _this.add.sprite(_this.world.centerX-225,_this.world.centerY-73,'NSF5_5_16p_Cake7');
                    _this.LeftCake8.name = "Q3_LeftCake8";
                    _this.LeftCake7 = _this.add.sprite(_this.world.centerX-224,_this.world.centerY-60,'NSF5_5_16p_Cake8');
                    _this.LeftCake7.name = "Q3_LeftCake7";
                    _this.LeftCake6 = _this.add.sprite(_this.world.centerX-225,_this.world.centerY-40,'NSF5_5_16p_Cake6');   
                    _this.LeftCake6.name = "Q3_LeftCake6";
                    _this.LeftCake5 = _this.add.sprite(_this.world.centerX-225,_this.world.centerY-25,'NSF5_5_16p_Cake5');
                    _this.LeftCake5.name = "Q3_LeftCake5";
                    _this.LeftCake4 = _this.add.sprite(_this.world.centerX-229,_this.world.centerY-16,'NSF5_5_16p_Cake4');
                    _this.LeftCake4.name = "Q3_LeftCake4";
                    _this.LeftCake3 = _this.add.sprite(_this.world.centerX-237,_this.world.centerY-11,'NSF5_5_16p_Cake3');
                    _this.LeftCake3.name = "Q3_LeftCake3";
                    _this.LeftCake1 = _this.add.sprite(_this.world.centerX-285,_this.world.centerY-10,'NSF5_5_16p_Cake1');
                    _this.LeftCake1.name = "Q3_LeftCake1";
                    _this.LeftCake2 = _this.add.sprite(_this.world.centerX-255,_this.world.centerY-10,'NSF5_5_16p_Cake2');
                    _this.LeftCake2.name = "Q3_LeftCake2";

                    _this.world.bringToTop(_this.hand);

                    _this.time.events.add(500, function(){
                        _this.HandTween = _this.add.tween(_this.hand);
                        _this.HandTween.to({ x: 560,y: 270 }, 1000,'Linear', true, 0);
                        _this.RightCake1 = _this.add.tween(_this.LeftCake4);
                        _this.RightCake1.to({ x: 530,y: 260 }, 0,'Linear', true, 0);
                        _this.RightCake1.onComplete.add(function(){
                            _this.HandTween.to({ x: 295,y: 250 }, 700,'Linear', true, 0);
                            _this.HandTween.onComplete.add(function(){
                                //  _this.time.events.add(800, function(){
                                _this.HandTween = _this.add.tween(_this.hand);
                                _this.HandTween.to({ x: 595,y: 265 }, 1000,'Linear', true, 0);
                                _this.RightCake2 = _this.add.tween(_this.LeftCake5);
                                _this.RightCake2.to({ x: 560,y: 260 }, 0,'Linear', true, 0);
                                _this.RightCake2.onComplete.add(function(){
                                    _this.HandTween.to({ x: 295,y: 235 }, 700,'Linear', true, 0);
                                    _this.HandTween.onComplete.add(function(){
                                        // _this.time.events.add(800, function(){
                                        _this.HandTween = _this.add.tween(_this.hand);
                                        _this.HandTween.to({ x: 620,y: 245 }, 1000,'Linear', true, 0);
                                        _this.RightCake3 = _this.add.tween(_this.LeftCake6);
                                        _this.RightCake3.to({ x: 580,y: 240 }, 0,'Linear', true, 0);
                                        _this.RightCake3.onComplete.add(function(){
                                            _this.HandTween.to({ x: 290,y: 225 }, 700,'Linear', true, 0);
                                            _this.HandTween.onComplete.add(function(){
                                                //  _this.time.events.add(800, function(){
                                                _this.HandTween = _this.add.tween(_this.hand);
                                                _this.HandTween.to({ x: 595,y: 225 }, 1000,'Linear', true, 0);
                                                _this.RightCake4 = _this.add.tween(_this.LeftCake7);
                                                _this.RightCake4.to({ x: 560,y: 210 }, 0,'Linear', true, 0);
                                                _this.RightCake4.onComplete.add(function(){

                                                    _this.LeftCake4.inputEnabled = true;
                                                    _this.LeftCake4.input.useHandCursor = true; 

                                                    _this.LeftCake5.inputEnabled = true;
                                                    _this.LeftCake5.input.useHandCursor = true; 

                                                    _this.LeftCake6.inputEnabled = true;
                                                    _this.LeftCake6.input.useHandCursor = true;  

                                                    _this.LeftCake7.inputEnabled = true;
                                                    _this.LeftCake7.input.useHandCursor = true; 

                                                    _this.LeftCake4.input.enableDrag(true);
                                                    _this.LeftCake5.input.enableDrag(true);
                                                    _this.LeftCake6.input.enableDrag(true);
                                                    _this.LeftCake7.input.enableDrag(true);

                                                    _this.LeftCake4.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake4.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake5.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake5.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake6.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake6.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
                                                    _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

                                                    _this.loadTextBox();

                                                    _this.time.events.add(500, function(){
                                                        _this.hand.destroy();
                                                    }, _this);

                                                    if(_this.toCheckNumberPad1){
                                                        _this.toCheckNumberPad1 = false;
                                                        _this.addNumberPad();
                                                    } 

                                                }, _this); 
                                                //   }, _this); 
                                            }, _this); 
                                        }, _this); 
                                        //    }, _this); 
                                    }, _this); 
                                }, _this); 
                                //  }, _this); 
                            }, _this); 
                        }, _this); 
                    }, _this);
                }, _this);
            }, _this);

        }else{

            _this.loadTextBox();

            _this.LeftCake10 = _this.add.sprite(_this.world.centerX-258,_this.world.centerY-88,'NSF5_5_16p_Cake9');
            _this.LeftCake10.name = "Q3_LeftCake10";
            _this.LeftCake11 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-88,'NSF5_5_16p_Cake12');
            _this.LeftCake11.name = "Q3_LeftCake11";
            _this.LeftCake12 = _this.add.sprite(_this.world.centerX-315,_this.world.centerY-78,'NSF5_5_16p_Cake11');
            _this.LeftCake12.name = "Q3_LeftCake12";
            _this.LeftCake13 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-60,'NSF5_5_16p_Cake14');
            _this.LeftCake13.name = "Q3_LeftCake13";
            _this.LeftCake14 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-40,'NSF5_5_16p_Cake13');
            _this.LeftCake14.name = "Q3_LeftCake14";
            _this.LeftCake15 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-25,'NSF5_5_16p_Cake15');
            _this.LeftCake15.name = "Q3_LeftCake15";
            _this.LeftCake16 = _this.add.sprite(_this.world.centerX-313,_this.world.centerY-15,'NSF5_5_16p_Cake16');
            _this.LeftCake16.name = "Q3_LeftCake16";
            _this.LeftCake9 = _this.add.sprite(_this.world.centerX-235,_this.world.centerY-83,'NSF5_5_16p_Cake10');
            _this.LeftCake9.name = "Q3_LeftCake9";
            _this.LeftCake8 = _this.add.sprite(_this.world.centerX-225,_this.world.centerY-73,'NSF5_5_16p_Cake7');
            _this.LeftCake8.name = "Q3_LeftCake8";
            _this.LeftCake7 = _this.add.sprite(560,210,'NSF5_5_16p_Cake8');
            _this.LeftCake7.name = "Q3_LeftCake7";
            _this.LeftCake6 = _this.add.sprite(580,240,'NSF5_5_16p_Cake6');   
            _this.LeftCake6.name = "Q3_LeftCake6";
            _this.LeftCake5 = _this.add.sprite(560,260,'NSF5_5_16p_Cake5');
            _this.LeftCake5.name = "Q3_LeftCake5";
            _this.LeftCake4 = _this.add.sprite(530,260,'NSF5_5_16p_Cake4');
            _this.LeftCake4.name = "Q3_LeftCake4";
            _this.LeftCake3 = _this.add.sprite(_this.world.centerX-237,_this.world.centerY-11,'NSF5_5_16p_Cake3');
            _this.LeftCake3.name = "Q3_LeftCake3";
            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-285,_this.world.centerY-10,'NSF5_5_16p_Cake1');
            _this.LeftCake1.name = "Q3_LeftCake1";
            _this.LeftCake2 = _this.add.sprite(_this.world.centerX-255,_this.world.centerY-10,'NSF5_5_16p_Cake2');
            _this.LeftCake2.name = "Q3_LeftCake2";

            _this.LeftCake4.inputEnabled = true;
            _this.LeftCake4.input.useHandCursor = true; 

            _this.LeftCake5.inputEnabled = true;
            _this.LeftCake5.input.useHandCursor = true; 

            _this.LeftCake6.inputEnabled = true;
            _this.LeftCake6.input.useHandCursor = true;  

            _this.LeftCake7.inputEnabled = true;
            _this.LeftCake7.input.useHandCursor = true; 

            _this.LeftCake4.input.enableDrag(true);
            _this.LeftCake5.input.enableDrag(true);
            _this.LeftCake6.input.enableDrag(true);
            _this.LeftCake7.input.enableDrag(true);

            _this.LeftCake4.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake4.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake5.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake5.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake6.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake6.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake7.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake7.events.onDragStop.add(_this.onDragStop, _this);

            if(_this.toCheckNumberPad1){
                _this.toCheckNumberPad1 = false;
                _this.addNumberPad();
            } 

        }

        // X and Y axis of the cakes in the Left side plate
        //        _this.LeftCake4_X = _this.world.centerX-230;
        //        _this.LeftCake4_Y = _this.world.centerY-20;

        _this.LeftCake4_X = _this.world.centerX-229;
        _this.LeftCake4_Y = _this.world.centerY-16;

        _this.LeftCake5_X = _this.world.centerX-225;
        _this.LeftCake5_Y = _this.world.centerY-25;

        _this.LeftCake6_X = _this.world.centerX-225;
        _this.LeftCake6_Y = _this.world.centerY-40;

        _this.LeftCake7_X = _this.world.centerX-224;
        _this.LeftCake7_Y = _this.world.centerY-60;

        // X and Y axis of the cakes in the right side plate
        _this.RightCake1_X = 530;
        _this.RightCake1_Y = 260;

        _this.RightCake2_X = 560;
        _this.RightCake2_Y = 260;

        _this.RightCake3_X = 580;
        _this.RightCake3_Y = 240;

        _this.RightCake4_X = 560;
        _this.RightCake4_Y = 210;

        _this.rightAns1 = 1;
        _this.rightAns2 = 4;

    },

    gotoFourthQuestion:function(){

        _this.questionNo = 4;

        _this.plate = _this.add.sprite(_this.world.centerX-255,_this.world.centerY+30,'NSF5_5_BigPlate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.name="EmptyPlate";

        _this.loadAssets();

        if(_this.wrongAnswer == false){

            //            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-71,'NSF5_5_4p_Cake1');
            //            _this.LeftCake1.name = "Q4_LeftCake1";
            //            _this.LeftCake2 = _this.add.sprite(_this.world.centerX-264,_this.world.centerY-60,'NSF5_5_4p_Cake2');
            //            _this.LeftCake2.name = "Q4_LeftCake2";
            //            _this.LeftCake4 = _this.add.sprite(_this.world.centerX-335,_this.world.centerY-50,'NSF5_5_4p_Cake4');
            //            _this.LeftCake4.name = "Q4_LeftCake4";
            //            _this.LeftCake3 = _this.add.sprite(_this.world.centerX-302,_this.world.centerY-24,'NSF5_5_4p_Cake3');
            //            _this.LeftCake3.name = "Q4_LeftCake3";

            _this.LeftCake = _this.add.sprite(_this.world.centerX-320,_this.world.centerY-60,'NSF5_5_BigCake1');

            _this.hand = _this.add.sprite(_this.world.centerX-120,_this.world.centerY-80,'hand');
            _this.hand.scale.setTo(0.8);

            _this.time.events.add(500, function(){
                _this.HandTween = _this.add.tween(_this.hand);
                _this.HandTween.to({ x: 270,y: 230 }, 300,'Linear', true, 0);
                _this.HandTween.onComplete.add(function(){

                    _this.LeftCake.destroy();

                    _this.LeftCake1 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-75,'NSF5_5_4p_Cake1');
                    _this.LeftCake1.name = "Q4_LeftCake1";
                    _this.LeftCake2 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY-60,'NSF5_5_4p_Cake2');
                    _this.LeftCake2.name = "Q4_LeftCake2";
                    _this.LeftCake4 = _this.add.sprite(_this.world.centerX-340,_this.world.centerY-45,'NSF5_5_4p_Cake4');
                    _this.LeftCake4.name = "Q4_LeftCake4";
                    _this.LeftCake3 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-15,'NSF5_5_4p_Cake3');
                    _this.LeftCake3.name = "Q4_LeftCake3";

                    _this.world.bringToTop(_this.hand);

                    _this.time.events.add(500, function(){
                        _this.HandTween = _this.add.tween(_this.hand);
                        _this.HandTween.to({ x: 620,y: 220 }, 1000,'Linear', true, 0);
                        _this.RightCake1 = _this.add.tween(_this.LeftCake2);
                        _this.RightCake1.to({ x: 580,y: 200 }, 0,'Linear', true, 0);
                        _this.RightCake1.onComplete.add(function(){
                            _this.HandTween.to({ x: 240,y: 280 }, 700,'Linear', true, 0);
                            _this.HandTween.onComplete.add(function(){
                                // _this.time.events.add(800, function(){
                                _this.HandTween = _this.add.tween(_this.hand);
                                _this.HandTween.to({ x: 590,y: 270 }, 1000,'Linear', true, 0);
                                _this.RightCake2 = _this.add.tween(_this.LeftCake3);
                                _this.RightCake2.to({ x: 540,y: 250 }, 0,'Linear', true, 0);
                                _this.RightCake2.onComplete.add(function(){

                                    _this.LeftCake2.inputEnabled = true;
                                    _this.LeftCake2.input.useHandCursor = true;  

                                    _this.LeftCake3.inputEnabled = true;
                                    _this.LeftCake3.input.useHandCursor = true; 

                                    _this.LeftCake2.input.enableDrag(true);
                                    _this.LeftCake3.input.enableDrag(true);

                                    _this.LeftCake2.events.onDragStart.add(_this.onDragStart, _this);
                                    _this.LeftCake2.events.onDragStop.add(_this.onDragStop, _this);

                                    _this.LeftCake3.events.onDragStart.add(_this.onDragStart, _this);
                                    _this.LeftCake3.events.onDragStop.add(_this.onDragStop, _this);

                                    _this.loadTextBox();

                                    _this.time.events.add(500, function(){
                                        _this.hand.destroy();
                                    }, _this);   

                                    if(_this.toCheckNumberPad1){
                                        _this.toCheckNumberPad1 = false;
                                        _this.addNumberPad();
                                    } 

                                }, _this); 
                                //   }, _this); 
                            }, _this); 
                        }, _this); 
                    }, _this);
                }, _this);
            }, _this);

        }else{

            _this.loadTextBox();

            _this.LeftCake1 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY-75,'NSF5_5_4p_Cake1');
            _this.LeftCake1.name = "Q4_LeftCake1";
            _this.LeftCake2 = _this.add.sprite(580,200,'NSF5_5_4p_Cake2');
            _this.LeftCake2.name = "Q4_LeftCake2";
            _this.LeftCake4 = _this.add.sprite(_this.world.centerX-340,_this.world.centerY-45,'NSF5_5_4p_Cake4');
            _this.LeftCake4.name = "Q4_LeftCake4";
            _this.LeftCake3 = _this.add.sprite(540,250,'NSF5_5_4p_Cake3');
            _this.LeftCake3.name = "Q4_LeftCake3";

            _this.LeftCake2.inputEnabled = true;
            _this.LeftCake2.input.useHandCursor = true;  

            _this.LeftCake3.inputEnabled = true;
            _this.LeftCake3.input.useHandCursor = true; 

            _this.LeftCake2.input.enableDrag(true);
            _this.LeftCake3.input.enableDrag(true);

            _this.LeftCake2.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake2.events.onDragStop.add(_this.onDragStop, _this);

            _this.LeftCake3.events.onDragStart.add(_this.onDragStart, _this);
            _this.LeftCake3.events.onDragStop.add(_this.onDragStop, _this);

            if(_this.toCheckNumberPad1){
                _this.toCheckNumberPad1 = false;
                _this.addNumberPad();
            } 
        }

        // X and Y axis of the cakes in the Left side plate
        _this.LeftCake2_X = _this.world.centerX-250;
        _this.LeftCake2_Y = _this.world.centerY-60;

        _this.LeftCake3_X = _this.world.centerX-290;
        _this.LeftCake3_Y = _this.world.centerY-15;

        // X and Y axis of the cakes in the right side plate
        _this.RightCake1_X = 580;
        _this.RightCake1_Y = 200;

        _this.RightCake2_X = 540;
        _this.RightCake2_Y = 250;

        _this.rightAns1 = 1;
        _this.rightAns2 = 2;

    },

    gotoFifthQuestion:function(){

        _this.questionNo = 5;

        _this.loadAssets1();

        _this.sixbyten = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-6/10');
        _this.sixbyten.anchor.setTo(0.5);
        _this.sixbyten.name="6/10";

        _this.onebyfive_1 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-66,'NSF5_5_Fraction-1/5');
        _this.onebyfive_1.anchor.setTo(0.5);
        _this.onebyfive_1.name="1/5_1";
        _this.onebyfive_2 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+23,'NSF5_5_Fraction-1/5');
        _this.onebyfive_2.anchor.setTo(0.5);
        _this.onebyfive_2.name="1/5_2";
        _this.onebyfive_3 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+110,'NSF5_5_Fraction-1/5');
        _this.onebyfive_3.anchor.setTo(0.5);
        _this.onebyfive_3.name="1/5_3";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-100);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,50);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-10);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,50);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+80);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,50);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;

        _this.onebyfive_1.visible=false;
        _this.onebyfive_2.visible=false;
        _this.onebyfive_3.visible=false;

        _this.rightAns1=3;
        _this.rightAns2=5;

    },

    gotoSixthQuestion:function(){

        _this.questionNo = 6;

        _this.loadAssets1();

        _this.eightbyten = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-8/10');
        _this.eightbyten.anchor.setTo(0.5);
        _this.eightbyten.name="8/10";

        _this.onebyfive_1 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-110,'NSF5_5_Fraction-1/5');
        _this.onebyfive_1.anchor.setTo(0.5);
        _this.onebyfive_1.name="1/5_1";
        _this.onebyfive_2 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-21,'NSF5_5_Fraction-1/5');
        _this.onebyfive_2.anchor.setTo(0.5);
        _this.onebyfive_2.name="1/5_2";
        _this.onebyfive_3 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+68,'NSF5_5_Fraction-1/5');
        _this.onebyfive_3.anchor.setTo(0.5);
        _this.onebyfive_3.name="1/5_3";
        _this.onebyfive_4 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+155,'NSF5_5_Fraction-1/5');
        _this.onebyfive_4.anchor.setTo(0.5);
        _this.onebyfive_4.name="1/5_4";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-140);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,50);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-50);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,50);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+40);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,50);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;

        _this.graphics4 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+130);
        _this.graphics4.beginFill(0x027a71);
        _this.graphics4.lineStyle(1, 0xFFF, 1);
        _this.graphics4.drawRect(0, 0,35,50);
        _this.graphics4.inputEnabled = true;
        _this.graphics4.alpha = 0;

        _this.onebyfive_1.visible=false;
        _this.onebyfive_2.visible=false;
        _this.onebyfive_3.visible=false;
        _this.onebyfive_4.visible=false;

        _this.rightAns1=4;
        _this.rightAns2=5;

    },

    gotoSeventhQuestion:function(){

        _this.questionNo = 7;

        _this.loadAssets1();

        _this.sixbyfourteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-6/14');
        _this.sixbyfourteen.anchor.setTo(0.5);
        _this.sixbyfourteen.name="6/14";

        _this.onebyseven_1 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-41,'NSF5_5_Fraction-1/7');
        _this.onebyseven_1.anchor.setTo(0.5);
        _this.onebyseven_1.name="1/7_1";
        _this.onebyseven_2 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+23,'NSF5_5_Fraction-1/7');
        _this.onebyseven_2.anchor.setTo(0.5);
        _this.onebyseven_2.name="1/7_2";
        _this.onebyseven_3 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+86,'NSF5_5_Fraction-1/7');
        _this.onebyseven_3.anchor.setTo(0.5);
        _this.onebyseven_3.name="1/7_3";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-60);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,30);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+5);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,30);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+70);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,30);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;

        _this.onebyseven_1.visible=false;
        _this.onebyseven_2.visible=false;
        _this.onebyseven_3.visible=false;

        _this.rightAns1=3;
        _this.rightAns2=7;

    },

    gotoEighthQuestion:function(){

        _this.questionNo = 8;

        _this.loadAssets1();

        _this.eightbyfourteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-8/14');
        _this.eightbyfourteen.anchor.setTo(0.5);
        _this.eightbyfourteen.name="8/14";

        _this.onebyseven_1 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-73,'NSF5_5_Fraction-1/7');
        _this.onebyseven_1.anchor.setTo(0.5);
        _this.onebyseven_1.name="1/7_1";
        _this.onebyseven_2 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY-9,'NSF5_5_Fraction-1/7');
        _this.onebyseven_2.anchor.setTo(0.5);
        _this.onebyseven_2.name="1/7_2";
        _this.onebyseven_3 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+54,'NSF5_5_Fraction-1/7');
        _this.onebyseven_3.anchor.setTo(0.5);
        _this.onebyseven_3.name="1/7_3";
        _this.onebyseven_4 = _this.add.sprite(_this.world.centerX+200,_this.world.centerY+116,'NSF5_5_Fraction-1/7');
        _this.onebyseven_4.anchor.setTo(0.5);
        _this.onebyseven_4.name="1/7_4";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-90);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,30);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY-25);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,30);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+38);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,30);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;

        _this.graphics4 = _this.add.graphics(_this.world.centerX+180,_this.world.centerY+100);
        _this.graphics4.beginFill(0x027a71);
        _this.graphics4.lineStyle(1, 0xFFF, 1);
        _this.graphics4.drawRect(0, 0,35,30);
        _this.graphics4.inputEnabled = true;
        _this.graphics4.alpha = 0;

        _this.onebyseven_1.visible=false;
        _this.onebyseven_2.visible=false;
        _this.onebyseven_3.visible=false;
        _this.onebyseven_4.visible=false;

        _this.rightAns1=4;
        _this.rightAns2=7;

    },

    gotoNinthQuestion:function(){

        _this.questionNo = 9;

        _this.loadAssets1();

        _this.sixbyfifteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-6/15');
        _this.sixbyfifteen.anchor.setTo(0.5);
        _this.sixbyfifteen.name="6/15";

        _this.onebyfive_1 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY-25,'NSF5_5_Fraction-1/5');
        _this.onebyfive_1.anchor.setTo(0.5);
        _this.onebyfive_1.name="1/5_1";
        _this.onebyfive_2 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY+64,'NSF5_5_Fraction-1/5');
        _this.onebyfive_2.anchor.setTo(0.5);
        _this.onebyfive_2.name="1/5_2";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY-50);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,40);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+40);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,40);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.onebyfive_1.visible=false;
        _this.onebyfive_2.visible=false;

        _this.rightAns1=2;
        _this.rightAns2=5;

    },

    gotoTenthQuestion:function(){

        _this.questionNo = 10;

        _this.loadAssets1();

        _this.sixbysixteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-6/16');
        _this.sixbysixteen.anchor.setTo(0.5);
        _this.sixbysixteen.name="6/16";

        _this.onebyeight_1 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY-32,'NSF5_5_Fraction-1/8');
        _this.onebyeight_1.anchor.setTo(0.5);
        _this.onebyeight_1.name="1/8_1";
        _this.onebyeight_2 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY+23,'NSF5_5_Fraction-1/8');
        _this.onebyeight_2.anchor.setTo(0.5);
        _this.onebyeight_2.name="1/8_2";
        _this.onebyeight_3 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY+77,'NSF5_5_Fraction-1/8');
        _this.onebyeight_3.anchor.setTo(0.5);
        _this.onebyeight_3.name="1/8_3";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY-50);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,30);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+5);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,30);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+60);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,30);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;

        _this.onebyeight_1.visible=false;
        _this.onebyeight_2.visible=false;
        _this.onebyeight_3.visible=false;

        _this.rightAns1=3;
        _this.rightAns2=8;

    },

    gotoEleventhQuestion:function(){

        _this.questionNo = 11;

        _this.loadAssets1();

        _this.fourbyeighteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-4/18');
        _this.fourbyeighteen.anchor.setTo(0.5);
        _this.fourbyeighteen.name="4/18";

        _this.onebynine_1 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY-3,'NSF5_5_Fraction-1/9');
        _this.onebynine_1.anchor.setTo(0.5);
        _this.onebynine_1.name="1/9_1";
        _this.onebynine_2 = _this.add.sprite(_this.world.centerX+197,_this.world.centerY+45,'NSF5_5_Fraction-1/9');
        _this.onebynine_2.anchor.setTo(0.5);
        _this.onebynine_2.name="1/9_2";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY-15);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,20);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+35);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,20);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.onebynine_1.visible=false;
        _this.onebynine_2.visible=false;

        _this.rightAns1=2;
        _this.rightAns2=9;

    },

    gotoTwelvthQuestion:function(){

        _this.questionNo = 12;

        _this.loadAssets1();

        _this.ninebyeighteen = _this.add.sprite(_this.world.centerX+160,_this.world.centerY+20,'NSF5_5_Fraction-9/18');
        _this.ninebyeighteen.anchor.setTo(0.5);
        _this.ninebyeighteen.name="9/18";

        _this.onebysix_1 = _this.add.sprite(_this.world.centerX+198,_this.world.centerY-51,'NSF5_5_Fraction-1/6');
        _this.onebysix_1.anchor.setTo(0.5);
        _this.onebysix_1.name="1/6_1";
        _this.onebysix_2 = _this.add.sprite(_this.world.centerX+198,_this.world.centerY+22,'NSF5_5_Fraction-1/6');
        _this.onebysix_2.anchor.setTo(0.5);
        _this.onebysix_2.name="1/6_2";
        _this.onebysix_3 = _this.add.sprite(_this.world.centerX+198,_this.world.centerY+95,'NSF5_5_Fraction-1/6');
        _this.onebysix_3.anchor.setTo(0.5);
        _this.onebysix_3.name="1/6_3";
        
        _this.onebytwo_1 = _this.add.sprite(_this.world.centerX+198,_this.world.centerY+22,'NSF5_5_Fraction-1/2');
        _this.onebytwo_1.anchor.setTo(0.5);
        _this.onebytwo_1.name="1/2_1";

        _this.graphics1 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY-70);
        _this.graphics1.beginFill(0x027a71);
        _this.graphics1.lineStyle(1, 0xFFF, 1);
        _this.graphics1.drawRect(0, 0,35,30);
        _this.graphics1.inputEnabled = true;
        _this.graphics1.alpha = 0;

        _this.graphics2 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+5);
        _this.graphics2.beginFill(0x027a71);
        _this.graphics2.lineStyle(1, 0xFFF, 1);
        _this.graphics2.drawRect(0, 0,35,30);
        _this.graphics2.inputEnabled = true;
        _this.graphics2.alpha = 0;

        _this.graphics3 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY+80);
        _this.graphics3.beginFill(0x027a71);
        _this.graphics3.lineStyle(1, 0xFFF, 1);
        _this.graphics3.drawRect(0, 0,35,30);
        _this.graphics3.inputEnabled = true;
        _this.graphics3.alpha = 0;
        
        _this.graphics4 = _this.add.graphics(_this.world.centerX+179,_this.world.centerY-70);
        _this.graphics4.beginFill(0x027a71);
        _this.graphics4.lineStyle(1, 0xFFF, 1);
        _this.graphics4.drawRect(0, 0,35,180);
        _this.graphics4.inputEnabled = true;
        _this.graphics4.alpha = 0;

        _this.onebysix_1.visible=false;
        _this.onebysix_2.visible=false;
        _this.onebysix_3.visible=false;
        _this.onebytwo_1.visible=false;

        _this.rightAns1=1;
        _this.rightAns2=2;
        
        _this.rightAns3=3;
        _this.rightAns4=6;

    },

    onDragStartBar:function(target){

        console.log("startdrag "+target.name);

        commonNavBar_nsf5_5.playClickSound();

        if(target == _this.onebytwo){
            _this.vx = _this.onebytwo_X;
            _this.vy = _this.onebytwo_Y;
        }
        if(target == _this.onebythree){
            _this.vx = _this.onebythree_X;
            _this.vy = _this.onebythree_Y;
        }
        if(target == _this.onebyfour){
            _this.vx = _this.onebyfour_X;
            _this.vy = _this.onebyfour_Y;
        }
        if(target == _this.onebyfive){
            _this.vx = _this.onebyfive_X;
            _this.vy = _this.onebyfive_Y;
        }
        if(target == _this.onebysix){
            _this.vx = _this.onebysix_X;
            _this.vy = _this.onebysix_Y;
        }
        if(target == _this.onebyseven){
            _this.vx = _this.onebyseven_X;
            _this.vy = _this.onebyseven_Y;
        }
        if(target == _this.onebyeight){
            _this.vx = _this.onebyeight_X;
            _this.vy = _this.onebyeight_Y;
        }
        if(target == _this.onebynine){
            _this.vx = _this.onebynine_X;
            _this.vy = _this.onebynine_Y;
        }
        if(target == _this.onebyten){
            _this.vx = _this.onebyten_X;
            _this.vy = _this.onebyten_Y;
        }

    },

    onDragStopBar:function(target){

        console.log(target.name);

        target.x = _this.vx;
        target.y = _this.vy;

        commonNavBar_nsf5_5.snapSound();

        if(_this.questionNo == 5 && target == _this.onebyfive){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyfive_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyfive_2.visible=true;
            }else if(_this.checkOverlap(_this.graphics3, target)){
                _this.onebyfive_3.visible=true;
            }
            if(_this.onebyfive_1.visible == true && _this.onebyfive_2.visible == true && _this.onebyfive_3.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 6 && target == _this.onebyfive){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyfive_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyfive_2.visible=true;
            }else if(_this.checkOverlap(_this.graphics3, target)){
                _this.onebyfive_3.visible=true;
            }else if(_this.checkOverlap(_this.graphics4, target)){
                _this.onebyfive_4.visible=true;
            }
            if(_this.onebyfive_1.visible == true && _this.onebyfive_2.visible == true && _this.onebyfive_3.visible == true && _this.onebyfive_4.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 7 && target == _this.onebyseven){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyseven_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyseven_2.visible=true;
            }else if(_this.checkOverlap(_this.graphics3, target)){
                _this.onebyseven_3.visible=true;
            }
            if(_this.onebyseven_1.visible == true && _this.onebyseven_2.visible == true && _this.onebyseven_3.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 8 && target == _this.onebyseven){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyseven_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyseven_2.visible=true;
            }else if(_this.checkOverlap(_this.graphics3, target)){
                _this.onebyseven_3.visible=true;
            }else if(_this.checkOverlap(_this.graphics4, target)){
                _this.onebyseven_4.visible=true;
            }

            if(_this.onebyseven_1.visible == true && _this.onebyseven_2.visible == true && _this.onebyseven_3.visible == true  && _this.onebyseven_4.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 9 && target == _this.onebyfive){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyfive_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyfive_2.visible=true;
            }

            if(_this.onebyfive_1.visible == true && _this.onebyfive_2.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 10 && target == _this.onebyeight){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebyeight_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebyeight_2.visible=true;
            }else if(_this.checkOverlap(_this.graphics3, target)){
                _this.onebyeight_3.visible=true;
            }

            if(_this.onebyeight_1.visible == true && _this.onebyeight_2.visible == true && _this.onebyeight_3.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

        if(_this.questionNo == 11 && target == _this.onebynine){
            if(_this.checkOverlap(_this.graphics1, target)){
                _this.onebynine_1.visible=true;
            }else if(_this.checkOverlap(_this.graphics2, target)){
                _this.onebynine_2.visible=true;
            }

            if(_this.onebynine_1.visible == true && _this.onebynine_2.visible == true){
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

         if(_this.questionNo == 12 && _this.toCheckNumberPad1){
            if( target == _this.onebysix){
                if(_this.checkOverlap(_this.graphics1, target)){
                    _this.onebysix_1.visible=true;
                }else if(_this.checkOverlap(_this.graphics2, target)){
                    _this.onebysix_2.visible=true;
                }else if(_this.checkOverlap(_this.graphics3, target)){
                    _this.onebysix_3.visible=true;
                }
            }else if( target == _this.onebytwo){
                if(_this.checkOverlap(_this.graphics4, target))
                    _this.onebytwo_1.visible=true;
            }
        
            if(_this.onebysix_1.visible == true && _this.onebysix_2.visible == true && _this.onebysix_3.visible == true){
                _this.rightAns1=3;
                _this.rightAns2=6;
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }else if(_this.onebytwo_1.visible == true){
                _this.rightAns3=1;
                _this.rightAns4=2;
                if(_this.toCheckNumberPad1){
                    _this.toCheckNumberPad1 = false;
                    _this.addNumberPad();
                } 
            }
        }

    },

    onDragStart:function(target){

        console.log("startdrag "+target.name);

        commonNavBar_nsf5_5.playClickSound();
    },

    onDragStop:function(target){
        console.log(target.name);

        commonNavBar_nsf5_5.snapSound();

        if(_this.checkOverlap(_this.graphics1, target)){

            if(target.name == "Q1_LeftCake7"){
                target.x = _this.LeftCake7_X;
                target.y = _this.LeftCake7_Y;
            } 
            if(target.name == "Q1_LeftCake8"){
                target.x = _this.LeftCake8_X;
                target.y = _this.LeftCake8_Y;
            }
            if(target.name == "Q2_LeftCake5"){
                target.x = _this.LeftCake5_X;
                target.y = _this.LeftCake5_Y;
            }
            if(target.name == "Q2_LeftCake6"){
                target.x = _this.LeftCake6_X;
                target.y = _this.LeftCake6_Y;
            }
            if(target.name == "Q2_LeftCake7"){
                target.x = _this.LeftCake7_X;
                target.y = _this.LeftCake7_Y;
            }
            if(target.name == "Q2_LeftCake8"){
                target.x = _this.LeftCake8_X;
                target.y = _this.LeftCake8_Y;
            }
            if(target.name == "Q3_LeftCake4"){
                target.x = _this.LeftCake4_X;
                target.y = _this.LeftCake4_Y;
            }
            if(target.name == "Q3_LeftCake5"){
                target.x = _this.LeftCake5_X;
                target.y = _this.LeftCake5_Y;
                _this.temp3++;
            }
            if(target.name == "Q3_LeftCake6"){
                target.x = _this.LeftCake6_X;
                target.y = _this.LeftCake6_Y;
            }
            if(target.name == "Q3_LeftCake7"){
                target.x = _this.LeftCake7_X;
                target.y = _this.LeftCake7_Y;
            }
            if(target.name == "Q4_LeftCake2"){
                target.x = _this.LeftCake2_X;
                target.y = _this.LeftCake2_Y;
            }
            if(target.name == "Q4_LeftCake3"){
                target.x = _this.LeftCake3_X;
                target.y = _this.LeftCake3_Y;
            }

        }else{

            if(target.name == "Q1_LeftCake7"){
                target.x = _this.RightCake1_X;
                target.y = _this.RightCake1_Y;
            } 
            if(target.name == "Q1_LeftCake8"){
                target.x = _this.RightCake2_X;
                target.y = _this.RightCake2_Y;
            }
            if(target.name == "Q2_LeftCake5"){
                target.x = _this.RightCake1_X;
                target.y = _this.RightCake1_Y;
            }
            if(target.name == "Q2_LeftCake6"){
                target.x = _this.RightCake2_X;
                target.y = _this.RightCake2_Y;
            }
            if(target.name == "Q2_LeftCake7"){
                target.x = _this.RightCake3_X;
                target.y = _this.RightCake3_Y;
            }
            if(target.name == "Q2_LeftCake8"){
                target.x = _this.RightCake4_X;
                target.y = _this.RightCake4_Y;
            }
            if(target.name == "Q3_LeftCake4"){
                target.x = _this.RightCake1_X;
                target.y = _this.RightCake1_Y;
            }
            if(target.name == "Q3_LeftCake5"){
                target.x = _this.RightCake2_X;
                target.y = _this.RightCake2_Y;
            }
            if(target.name == "Q3_LeftCake6"){
                target.x = _this.RightCake3_X;
                target.y = _this.RightCake3_Y;
            }
            if(target.name == "Q3_LeftCake7"){
                target.x = _this.RightCake4_X;
                target.y = _this.RightCake4_Y;
            }
            if(target.name == "Q4_LeftCake2"){
                target.x = _this.RightCake1_X;
                target.y = _this.RightCake1_Y;
            }
            if(target.name == "Q4_LeftCake3"){
                target.x = _this.RightCake2_X;
                target.y = _this.RightCake2_Y;
            }

        }

        //        if( _this.questionNo == 1 && _this.LeftCake7.x == _this.LeftCake7_X && _this.LeftCake8.x == _this.LeftCake8_X){
        //            if(_this.toCheckNumberPad1){
        //                _this.toCheckNumberPad1 = false;
        //                _this.addNumberPad();
        //            } 
        //        }
        //        if( _this.questionNo == 2 &&_this.LeftCake5.x == _this.LeftCake5_X && _this.LeftCake6.x == _this.LeftCake6_X && _this.LeftCake7.x == _this.LeftCake7_X && _this.LeftCake8.x == _this.LeftCake8_X){
        //            if(_this.toCheckNumberPad1){
        //                _this.toCheckNumberPad1 = false;
        //                _this.addNumberPad();
        //            }    
        //        }
        //        if( _this.questionNo == 3 && _this.LeftCake4.x == _this.LeftCake4_X && _this.LeftCake5.x == _this.LeftCake5_X && _this.LeftCake6.x == _this.LeftCake6_X && _this.LeftCake7.x == _this.LeftCake7_X){
        //            if(_this.toCheckNumberPad1){
        //                _this.toCheckNumberPad1 = false;
        //                _this.addNumberPad();
        //            }    
        //        }
        //        if( _this.questionNo == 4 && _this.LeftCake2.x == _this.LeftCake2_X && _this.LeftCake3.x == _this.LeftCake3_X){
        //            if(_this.toCheckNumberPad1){
        //                _this.toCheckNumberPad1 = false;
        //                _this.addNumberPad();
        //            }    
        //        }

    },

    addNumberPad:function(target){

        //        _this.clickSound = _this.add.audio('ClickSound');
        //        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box = _this.numGroup.create(480,505,'NSF5_5_Bottombar');
        _this.box.anchor.setTo(0.5);
        _this.x = 80;

        _this.txtbox1Pressed = true;
        _this.txtbox1.frame = 2;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'NSF5_5_numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
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

        _this.objGroup.add(_this.txtbox1);
        _this.objGroup.add(_this.txtbox2);

        _this.eraserbtn = _this.numGroup.create(_this.x+30,508,'NSF5_5_Eraser');
        _this.eraserbtn.anchor.setTo(0.5);
        _this.eraserbtn.scale.setTo(1.1,1.1);
        _this.eraserbtn.name = "Eraser";
        _this.eraserbtn.inputEnabled = true;
        _this.eraserbtn.input.useHandCursor = true;

        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'NSF5_5_TickMark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        _this.enterTxt1 = _this.add.text(-2,1, _this.selectedAns1);
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = 'myfont';
        _this.enterTxt1.name = "enterTxt";
        _this.enterTxt1.fontSize = 30;
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fill = '#00C4EB';
        _this.enterTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox1.addChild(_this.enterTxt1);

        _this.enterTxt2 = _this.add.text(-2,1, _this.selectedAns2);
        _this.enterTxt2.anchor.setTo(0.5);
        _this.enterTxt2.align = 'center';
        _this.enterTxt2.font = 'myfont';
        _this.enterTxt2.name = "enterTxt";
        _this.enterTxt2.fontSize = 30;
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.fill = '#00C4EB';
        _this.enterTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox2.addChild(_this.enterTxt2);

        _this.eraserbtn.events.onInputDown.add(function(){
            commonNavBar.playClickSound();
            _this.eraserbtn.frame=1;
            _this.time.events.add(500, function(){    
                _this.eraserbtn.frame=0;
            },_this);

            if(_this.txtbox1Pressed){
                _this.enterTxt1.setText("");
                _this.selectedAns1="";
            }
            if(_this.txtbox2Pressed){
                _this.enterTxt2.setText("");
                _this.selectedAns2="";
            }

        },_this);

        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            commonNavBar.playClickSound();

            if(( _this.selectedAns1 == _this.rightAns1     ||
                _this.selectedAns1 == ""+_this.rightAns1   ||
                _this.selectedAns1 == ""+_this.rightAns1 ) && 
               ( _this.selectedAns2 == _this.rightAns2    ||
                _this.selectedAns2 == ""+_this.rightAns2  ||
                _this.selectedAns2 == ""+_this.rightAns2)  
                ||
                ( _this.selectedAns1 == _this.rightAns3     ||
                _this.selectedAns1 == ""+_this.rightAns3   ||
                _this.selectedAns1 == ""+_this.rightAns3 ) && 
               ( _this.selectedAns2 == _this.rightAns4    ||
                _this.selectedAns2 == ""+_this.rightAns4  ||
                _this.selectedAns2 == ""+_this.rightAns4) && 
               (_this.selectedAns1 !="" && _this.selectedAns2 !="" 
               && _this.rightAns1!="" && _this.rightAns2!=""
               && _this.rightAns3!="" && _this.rightAns4!=""))
            {
                console.log("correct");

                _this.wrongAnswer = false;

                target.events.onInputDown.removeAll();
                _this.rightbtn.frame=1;

                _this.txtbox1.frame=2;
                _this.txtbox2.frame=2;

                _this.celebr = _this.add.audio('celebr');
                _this.celebr.play();

                _this.starAnim = _this.starsGroup.getChildAt(_this.count);
                _this.starAnim.smoothed = false;
                _this.anim4 = _this.starAnim.animations.add('star');
                _this.anim4.play();
                _this.time.events.add(1000, function(){    
                    _this.rightbtn.frame=0;
                },_this);

                _this.time.events.add(2000, function(){_this.removeCelebration();},_this);

                if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
            _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
            }
            else
            {
                console.log("wrong");

                _this.wrongAnswer = true;

                _this.rightbtn.frame=1;
                _this.selectedAns1 = "";
                _this.selectedAns2 = "";
                _this.enterTxt1.setText("");
                _this.enterTxt2.setText("");
                _this.shake.shake(10, _this.objGroup);
                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play(); 

                _this.time.events.add(500, function(){   

                    _this.rightbtn.frame=0;
                    _this.numGroup.visible=false;

                    _this.txtbox1.destroy();
                    _this.txtbox2.destroy();
                    _this.line.destroy();

                    //First instance
                    if(_this.LeftCake1)
                        _this.LeftCake1.destroy();
                    if(_this.LeftCake2)
                        _this.LeftCake2.destroy();
                    if(_this.LeftCake3)
                        _this.LeftCake3.destroy();
                    if(_this.LeftCake4)
                        _this.LeftCake4.destroy();
                    if(_this.LeftCake5)
                        _this.LeftCake5.destroy();
                    if(_this.LeftCake6)
                        _this.LeftCake6.destroy();
                    if(_this.LeftCake7)
                        _this.LeftCake7.destroy();
                    if(_this.LeftCake8)
                        _this.LeftCake8.destroy();
                    if(_this.LeftCake9)
                        _this.LeftCake9.destroy();
                    if(_this.LeftCake10)
                        _this.LeftCake10.destroy();
                    if(_this.LeftCake11)
                        _this.LeftCake11.destroy();
                    if(_this.LeftCake12)
                        _this.LeftCake12.destroy();
                    if(_this.LeftCake13)
                        _this.LeftCake13.destroy();
                    if(_this.LeftCake14)
                        _this.LeftCake14.destroy();
                    if(_this.LeftCake15)
                        _this.LeftCake15.destroy();
                    if(_this.LeftCake16)
                        _this.LeftCake16.destroy();

                    if(_this.hand)
                        _this.hand.destroy();

                    if(_this.plate)
                        _this.plate.destroy();
                    if(_this.redplate)
                        _this.redplate.destroy();

                    _this.toCheckNumberPad=false;
                    _this.toCheckNumberPad1=false;
                    _this.clicked = 0;

                    //Second instance
                    if(_this.bg)
                        _this.bg.destroy();

                    if(_this.onebytwo)
                        _this.onebytwo.destroy();
                    if(_this.onebythree)
                        _this.onebythree.destroy();
                    if(_this.onebyfour)
                        _this.onebyfour.destroy();
                    if(_this.onebyfive)
                        _this.onebyfive.destroy();
                    if(_this.onebysix)
                        _this.onebysix.destroy();
                    if(_this.onebyseven)
                        _this.onebyseven.destroy();
                    if(_this.onebyeight)
                        _this.onebyeight.destroy();
                    if(_this.onebynine)
                        _this.onebynine.destroy();
                    if(_this.onebyten)
                        _this.onebyten.destroy();

                    if(_this.threebyeighteen)
                        _this.threebyeighteen.destroy();
                    if(_this.fourbyeighteen)
                        _this.fourbyeighteen.destroy();
                    if(_this.sixbyten)
                        _this.sixbyten.destroy();
                    if(_this.sixbyfourteen)
                        _this.sixbyfourteen.destroy();
                    if(_this.sixbyfifteen)
                        _this.sixbyfifteen.destroy();
                    if(_this.sixbysixteen)
                        _this.sixbysixteen.destroy();
                    if(_this.eightbyten)
                        _this.eightbyten.destroy();
                    if(_this.eightbyfourteen)
                        _this.eightbyfourteen.destroy();
                    if(_this.ninebyeighteen)
                        _this.ninebyeighteen.destroy();

                    if(_this.onebytwo_1)
                        _this.onebytwo_1.destroy();
                    if(_this.onebyfive_1)
                        _this.onebyfive_1.destroy();
                    if(_this.onebyfive_2)
                        _this.onebyfive_2.destroy();
                    if(_this.onebyfive_3)
                        _this.onebyfive_3.destroy();
                    if(_this.onebyfive_4)
                        _this.onebyfive_4.destroy();
                    if(_this.onebysix_1)
                        _this.onebysix_1.destroy();
                    if(_this.onebysix_2)
                        _this.onebysix_2.destroy();
                    if(_this.onebysix_3)
                        _this.onebysix_3.destroy();
                    if(_this.onebyseven_1)
                        _this.onebyseven_1.destroy();
                    if(_this.onebyseven_2)
                        _this.onebyseven_2.destroy();
                    if(_this.onebyseven_3)
                        _this.onebyseven_3.destroy();
                    if(_this.onebyseven_4)
                        _this.onebyseven_4.destroy();
                    if(_this.onebyeight_1)
                        _this.onebyeight_1.destroy();
                    if(_this.onebyeight_2)
                        _this.onebyeight_2.destroy();
                    if(_this.onebyeight_3)
                        _this.onebyeight_3.destroy();
                    if(_this.onebynine_1)
                        _this.onebynine_1.destroy();
                    if(_this.onebynine_2)
                        _this.onebynine_2.destroy();

                    _this.rightAns1 = "";
                    _this.rightAns2 = "";
                    _this.rightAns3 = "";
                    _this.rightAns4 = "";
                    
                    _this.getQuestion();

                },_this);
            }

        },_this);

        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
            _this.numGroup.visible=true;
            _this.numGroup.y=100;
            _this.Maintween = _this.add.tween(_this.numGroup);
            _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
        },_this);

    },

    numClicked:function(target){

        commonNavBar_nsf5_5.playTapSound();

        if(_this.txtbox1Pressed){

            _this.selectedAns1 = target.name;
            _this.txtbox1.getChildAt(0).setText(_this.selectedAns1);

            _this.txtbox2.frame=2;
            _this.txtbox1.frame=1;

            _this.txtbox2Pressed=true;
            _this.txtbox1Pressed=false;
        }
        else if(_this.txtbox2Pressed){
            _this.selectedAns2 = target.name;
            _this.txtbox2.getChildAt(0).setText(_this.selectedAns2);

            _this.txtbox1.frame=2;
            _this.txtbox2.frame=1;

            _this.txtbox1Pressed=true;
            _this.txtbox2Pressed=false;
        }

        /*================================================================
        if(_this.txtbox1Pressed){
            if(_this.selectedAns1.length < 2 ){
                _this.txtbox1.frame=2;
                _this.selectedAns1 += target.name;
                _this.txtbox1.getChildAt(0).setText(_this.selectedAns1);
                _this.selectedAns2= "";
            }
        }
        else if(_this.txtbox2Pressed){
            if(_this.selectedAns2.length < 2){
                _this.txtbox2.frame=2;
                _this.selectedAns2 += target.name;
                _this.txtbox2.getChildAt(0).setText(_this.selectedAns2);
                _this.selectedAns1= "";
            }
        }

        if(_this.selectedAns1.length == 2 ){
            _this.selectedAns1= "";
        }
        if(_this.selectedAns2.length == 2 ){
            _this.selectedAns2= "";
        }
        ================================================================*/

    },

    removeCelebration:function()
    {

        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        //First Instance
        if(_this.LeftCake1)
            _this.LeftCake1.destroy();
        if(_this.LeftCake2)
            _this.LeftCake2.destroy();
        if(_this.LeftCake3)
            _this.LeftCake3.destroy();
        if(_this.LeftCake4)
            _this.LeftCake4.destroy();
        if(_this.LeftCake5)
            _this.LeftCake5.destroy();
        if(_this.LeftCake6)
            _this.LeftCake6.destroy();
        if(_this.LeftCake7)
            _this.LeftCake7.destroy();
        if(_this.LeftCake8)
            _this.LeftCake8.destroy();
        if(_this.LeftCake9)
            _this.LeftCake9.destroy();
        if(_this.LeftCake10)
            _this.LeftCake10.destroy();
        if(_this.LeftCake11)
            _this.LeftCake11.destroy();
        if(_this.LeftCake12)
            _this.LeftCake12.destroy();
        if(_this.LeftCake13)
            _this.LeftCake13.destroy();
        if(_this.LeftCake14)
            _this.LeftCake14.destroy();
        if(_this.LeftCake15)
            _this.LeftCake15.destroy();
        if(_this.LeftCake16)
            _this.LeftCake16.destroy();

        if(_this.hand){
            _this.hand.destroy();
        }

        _this.numGroup.destroy();
        _this.objGroup.destroy();
        _this.enterTxt1.destroy();
        _this.enterTxt2.destroy();
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";

        _this.toCheckNumberPad=false;
        _this.toCheckNumberPad1=false;
        _this.clicked = 0;

        if(_this.plate)
            _this.plate.destroy();
        if(_this.redplate)
            _this.redplate.destroy();

        //Second instance
        if(_this.bg)
            _this.bg.destroy();

        if(_this.onebytwo)
            _this.onebytwo.destroy();
        if(_this.onebythree)
            _this.onebythree.destroy();
        if(_this.onebyfour)
            _this.onebyfour.destroy();
        if(_this.onebyfive)
            _this.onebyfive.destroy();
        if(_this.onebysix)
            _this.onebysix.destroy();
        if(_this.onebyseven)
            _this.onebyseven.destroy();
        if(_this.onebyeight)
            _this.onebyeight.destroy();
        if(_this.onebynine)
            _this.onebynine.destroy();
        if(_this.onebyten)
            _this.onebyten.destroy();

        if(_this.threebyeighteen)
            _this.threebyeighteen.destroy();
        if(_this.fourbyeighteen)
            _this.fourbyeighteen.destroy();
        if(_this.sixbyten)
            _this.sixbyten.destroy();
        if(_this.sixbyfourteen)
            _this.sixbyfourteen.destroy();
        if(_this.sixbyfifteen)
            _this.sixbyfifteen.destroy();
        if(_this.sixbysixteen)
            _this.sixbysixteen.destroy();
        if(_this.eightbyten)
            _this.eightbyten.destroy();
        if(_this.eightbyfourteen)
            _this.eightbyfourteen.destroy();
        if(_this.ninebyeighteen)
            _this.ninebyeighteen.destroy();

        if(_this.onebytwo_1)
            _this.onebytwo_1.destroy();
        if(_this.onebyfive_1)
            _this.onebyfive_1.destroy();
        if(_this.onebyfive_2)
            _this.onebyfive_2.destroy();
        if(_this.onebyfive_3)
            _this.onebyfive_3.destroy();
        if(_this.onebyfive_4)
            _this.onebyfive_4.destroy();
        if(_this.onebysix_1)
            _this.onebysix_1.destroy();
        if(_this.onebysix_2)
            _this.onebysix_2.destroy();
        if(_this.onebysix_3)
            _this.onebysix_3.destroy();
        if(_this.onebyseven_1)
            _this.onebyseven_1.destroy();
        if(_this.onebyseven_2)
            _this.onebyseven_2.destroy();
        if(_this.onebyseven_3)
            _this.onebyseven_3.destroy();
        if(_this.onebyseven_4)
            _this.onebyseven_4.destroy();
        if(_this.onebyeight_1)
            _this.onebyeight_1.destroy();
        if(_this.onebyeight_2)
            _this.onebyeight_2.destroy();
        if(_this.onebyeight_3)
            _this.onebyeight_3.destroy();
        if(_this.onebynine_1)
            _this.onebynine_1.destroy();
        if(_this.onebynine_2)
            _this.onebynine_2.destroy();

        _this.rightAns1 = "";
        _this.rightAns2 = "";
        _this.rightAns3 = "";
        _this.rightAns4 = "";
        
        _this.line.destroy();

        _this.no11++;

        if(_this.no11 < 6)
        {
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            var timerStopVar = commonNavBar.stopTimer();
            /*commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();

            commonNavBar.navBar= null;
            commonNavBar.speakerbtn= null;
            commonNavBar.backbtn= null;*/

            _this.state.start('nsf5_5Score',true,false);
        }
    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    update:function(){

    },

    getVoice:function()
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(_this.no11<3)
        {

            if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/English/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Hindi/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Kannada/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Gujarati/nsf5.5a.mp3");
            }
			else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Marathi/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Telugu/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Tamil/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Urdu/nsf5.5.mp3");
                    }
            else
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Odiya/nsf5.5a.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        }
        else
        {
            if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/English/nsf5.5b.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Hindi/nsf5.5b.mp3");
            }
            else if(window.languageSelected == "Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Kannada/nsf5.5b.mp3");
            }
			else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Marathi/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Telugu/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Tamil/nsf5.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Urdu/nsf5.5.mp3");
                    }
            else if(window.languageSelected == "Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Gujarati/nsf5.5b.mp3");
            }
            else
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf5.5/Odiya/nsf5.5b.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        }

        /*if(_this.no11<3)
        {

            if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/English/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Hindi/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Kannada")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Kannada/nsf5.5a.mp3");
            }
            else if(window.languageSelected == "Gujarati")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Gujarati/nsf5.5a.mp3");
            }
            else
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Odiya/nsf5.5a.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        }
        else
        {
            if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/English/nsf5.5b.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Hindi/nsf5.5b.mp3");
            }
            else if(window.languageSelected == "Kannada")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Kannada/nsf5.5b.mp3");
            }
            else if(window.languageSelected == "Gujarati")
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Gujarati/nsf5.5b.mp3");
            }
            else
            {
                _this.src.setAttribute("src", "sounds/nsf5.5/Odiya/nsf5.5b.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        }*/


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
            //_this.amplify.context.close();
            //_this.amplify = null;
        }
    },

    shutdown:function()
    {
        commonNavBar_nsf5_5.stopTimer();
            commonNavBar_nsf5_5.stopVoice();
            commonNavBar_nsf5_5.disableNavBar();

            commonNavBar_nsf5_5.navBar= null;
            commonNavBar_nsf5_5.speakerbtn= null;
            commonNavBar_nsf5_5.backbtn= null;
        _this.stopVoice();
        commonNavBar_nsf5_5.stopVoice();
    }

};