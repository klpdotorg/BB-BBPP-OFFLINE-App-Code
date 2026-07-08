Game.sg8_2_2xlevel1=function(){};

Game.sg8_2_2xlevel1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("SG8_2_2x",gradeSelected);
    
    },

    preload:function(game){
        if(!window.grade2SG7){

            window.grade2SG7 = true;

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

            this.load.atlas('SG3_1_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.1.1/rightmark.json');
        

            this.load.atlas('8_2_2shape11',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape11.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape11.json');
        this.load.atlas('8_2_2shape12',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape12.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape12.json');
        this.load.atlas('8_2_2shape13',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape13.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape13.json');
        this.load.atlas('8_2_2shape14',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape14.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape14.json');
        this.load.atlas('8_2_2shape15',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape15.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape15.json');
        
        this.load.atlas('8_2_2shape21',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape21.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape21.json');
        this.load.atlas('8_2_2shape22',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape22.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape22.json');
        this.load.atlas('8_2_2shape23',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape23.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape23.json');
        this.load.atlas('8_2_2shape24',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape24.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape24.json');
        this.load.atlas('8_2_2shape25',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape25.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape25.json');
        
        this.load.atlas('8_2_2shape31',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape31.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape31.json');
        this.load.atlas('8_2_2shape32',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape32.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape32.json');
        this.load.atlas('8_2_2shape33',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape33.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape33.json');
        this.load.atlas('8_2_2shape34',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape34.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape34.json');
        
        this.load.atlas('8_2_2shape41',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape41.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape41.json');
        this.load.atlas('8_2_2shape42',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape42.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape42.json');
        this.load.atlas('8_2_2shape43',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape43.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape43.json');
        this.load.atlas('8_2_2shape44',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape44.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape44.json');
        this.load.atlas('8_2_2shape45',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape45.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape45.json');
        this.load.atlas('8_2_2shape46',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape46.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape46.json');
        
        this.load.atlas('8_2_2shape51',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape51.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape51.json');
        this.load.atlas('8_2_2shape52',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape52.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape52.json');
        this.load.atlas('8_2_2shape53',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape53.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape53.json');
        this.load.atlas('8_2_2shape54',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape54.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape54.json');
        this.load.atlas('8_2_2shape55',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape55.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape55.json');
        this.load.atlas('8_2_2shape56',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape56.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape56.json');
        this.load.atlas('8_2_2shape57',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape57.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape57.json');
        this.load.atlas('8_2_2shape58',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape58.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape58.json');
        
        this.load.atlas('8_2_2shape61',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape61.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape61.json');
        this.load.atlas('8_2_2shape62',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape62.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape62.json');
        this.load.atlas('8_2_2shape63',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape63.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape63.json');
        this.load.atlas('8_2_2shape64',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape64.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape64.json');
        this.load.atlas('8_2_2shape65',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape65.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape65.json');
        this.load.atlas('8_2_2shape66',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape66.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape66.json');
        this.load.atlas('8_2_2shape67',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape67.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape67.json');
        
        this.load.atlas('8_2_2shape71',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape71.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape71.json');
        this.load.atlas('8_2_2shape72',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape72.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape72.json');
        this.load.atlas('8_2_2shape73',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape73.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape73.json');
        this.load.atlas('8_2_2shape74',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape74.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape74.json');
        this.load.image('8_2_2dot71',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot71.png');
        this.load.image('8_2_2dot72',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot72.png');
        
        this.load.atlas('8_2_2shape91',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape91.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape91.json');
        this.load.atlas('8_2_2shape92',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape92.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape92.json');
        this.load.atlas('8_2_2shape93',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape93.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape93.json');
        this.load.atlas('8_2_2shape94',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape94.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape94.json');
        this.load.image('8_2_2dot91',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot91.png');
        this.load.image('8_2_2dot92',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot92.png');
        
        this.load.atlas('8_2_2shape101',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape101.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape101.json');
        this.load.atlas('8_2_2shape102',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape102.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape102.json');
        this.load.atlas('8_2_2shape103',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape103.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape103.json');
        this.load.atlas('8_2_2shape104',window.baseUrl+'assets/gradeAssets/sg8.2.2x/shape104.png',window.baseUrl+'json/gradeJson/sg8.2.2x/shape104.json');
        this.load.image('8_2_2dot11',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot11.png');
        this.load.image('8_2_2dot12',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot12.png');
        
        this.load.atlas('8_2_2diagonal1',window.baseUrl+'assets/gradeAssets/sg8.2.2x/diagonal1.png',window.baseUrl+'json/gradeJson/sg8.2.2x/diagonal1.json');
        this.load.atlas('8_2_2diagonal2',window.baseUrl+'assets/gradeAssets/sg8.2.2x/diagonal2.png',window.baseUrl+'json/gradeJson/sg8.2.2x/diagonal2.json');
        this.load.atlas('8_2_2diagonal3',window.baseUrl+'assets/gradeAssets/sg8.2.2x/diagonal3.png',window.baseUrl+'json/gradeJson/sg8.2.2x/diagonal3.json');
        this.load.atlas('8_2_2diagonal4',window.baseUrl+'assets/gradeAssets/sg8.2.2x/diagonal4.png',window.baseUrl+'json/gradeJson/sg8.2.2x/diagonal4.json');
        
        this.load.atlas('8_2_2tick',window.baseUrl+'assets/gradeAssets/sg8.2.2x/tick.png',window.baseUrl+'json/gradeJson/sg8.2.2x/tick.json');
        this.load.atlas('8_2_2dot',window.baseUrl+'assets/gradeAssets/sg8.2.2x/dot.png',window.baseUrl+'json/gradeJson/sg8.2.2x/dot.json');



    }

    },
    
	create:function(game)
    {
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.correctans=0;
        _this.questionNo = 0;
        _this.background;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
        _this.starsGroup;
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        _this.no11 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        _this.qArrays3 = new Array();
        _this.qArrays4 = new Array();
        
        _this.qArrays1 = [1,2,3];
        _this.qArrays2 = [4,5,6]
        _this.qArrays3 = [7,8];
        
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        _this.qArrays3 = _this.shuffle(_this.qArrays3);

        _this.sceneCount = 0;
        
        for(var i=0;i<2;i++)
        {
            _this.qArrays4.push(_this.qArrays1[i]);
        }
        for(var j=0;j<2;j++)
        {
            _this.qArrays4.push(_this.qArrays2[j]);
        }
        
         _this.qArrays4 = _this.shuffle(_this.qArrays4);
        
         for(var i=0;i<4;i++)
        {
            _this.qArrays.push(_this.qArrays4[i]);
        }
        for(var j=0;j<2;j++)
        {
            _this.qArrays.push(_this.qArrays3[j]);
        }
        
       // _this.qArrays = [1,2,3,4,5,6,7,8];
        
       // _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
       // _this.topicOutline = _this.add.sprite(70,5,'topicOutline');
       // _this.practice = _this.add.sprite(78,10,'practice');
        //_this.topic = _this.add.sprite(165,10,'topic');
        
        _this.timeDisplay = _this.add.text(331,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
    
        //language selection sounds
    },
    
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
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
    	console.log("getQuestion :"+_this.no11);
        console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid = 1;
        
        //_this.no11 = 0;
        
    	switch(_this.qArrays[_this.no11])
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
            
    	}
        
    },
    
    gotoFirstQuestion:function()
    {
         console.log("gotoFirstQuestion");
        _this.getVoice();
        _this.questionNo=1;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(357,201,'8_2_2shape21');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(473,201,'8_2_2shape22');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(302,337,'8_2_2shape23');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(529,332,'8_2_2shape24');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
        
        _this.shape5 = _this.add.sprite(417,415,'8_2_2shape25');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.name = 'shape5';
        _this.shape5.inputEnabled = true;
        _this.shape5.input.useHandCursor = true;
        _this.shape5.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape5);
        
        _this.dot1 = _this.add.sprite(416,158,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(304,257,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(304,414,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(529,410,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.name = 'dot4';
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.dot5 = _this.add.sprite(524,252,'8_2_2dot');
        _this.dot5.anchor.setTo(0.5);
        _this.dot5.scale.setTo(1.3,1.3);
        _this.dot5.name = 'dot5';
        _this.dot5.inputEnabled = true;
        _this.dot5.input.useHandCursor = true;
        _this.dot5.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        _this.objGrp1.add(_this.dot5);
        
        _this.objGrp1.rightcount = 5;
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.name = 'tick';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true; 
        
        _this.objGrp2.add(_this.tick);
        
    },
    
     gotoSecondQuestion:function()
    {
       console.log("gotoSecondQuestion");
        _this.getVoice();
        _this.questionNo=2;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(425,155,'8_2_2shape51');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(524,195,'8_2_2shape52');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(563,291,'8_2_2shape53');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(525,387,'8_2_2shape54');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
        
        _this.shape5 = _this.add.sprite(427,430,'8_2_2shape55');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.name = 'shape5';
        _this.shape5.inputEnabled = true;
        _this.shape5.input.useHandCursor = true;
        _this.shape5.events.onInputDown.add(_this.selected,_this);
        
        _this.shape6 = _this.add.sprite(330,390,'8_2_2shape56');
        _this.shape6.anchor.setTo(0.5);
        _this.shape6.name = 'shape6';
        _this.shape6.inputEnabled = true;
        _this.shape6.input.useHandCursor = true;
        _this.shape6.events.onInputDown.add(_this.selected,_this);

        _this.shape7 = _this.add.sprite(290,292,'8_2_2shape57');
        _this.shape7.anchor.setTo(0.5);
        _this.shape7.name = 'shape7';
        _this.shape7.inputEnabled = true;
        _this.shape7.input.useHandCursor = true;
        _this.shape7.events.onInputDown.add(_this.selected,_this);
        
        _this.shape8 = _this.add.sprite(327,195,'8_2_2shape58');
        _this.shape8.anchor.setTo(0.5);
        _this.shape8.name = 'shape8';
        _this.shape8.inputEnabled = true;
        _this.shape8.input.useHandCursor = true;
        _this.shape8.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape5);
        _this.objGrp.add(_this.shape6);
        _this.objGrp.add(_this.shape7);
        _this.objGrp.add(_this.shape8);
        
        _this.dot1 = _this.add.sprite(367,158,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(290,237,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(293,350,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(370,428,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.dot5 = _this.add.sprite(480,428,'8_2_2dot');
        _this.dot5.anchor.setTo(0.5);
        _this.dot5.scale.setTo(1.3,1.3);
        _this.dot5.name = 'dot5';
        _this.dot5.inputEnabled = true;
        _this.dot5.input.useHandCursor = true;
        _this.dot5.events.onInputDown.add(_this.selected,_this);
        
        _this.dot6 = _this.add.sprite(562,343,'8_2_2dot');
        _this.dot6.anchor.setTo(0.5);
        _this.dot6.scale.setTo(1.3,1.3);
        _this.dot6.name = 'dot6';
        _this.dot6.inputEnabled = true;
        _this.dot6.input.useHandCursor = true;
        _this.dot6.events.onInputDown.add(_this.selected,_this);
        
        _this.dot7 = _this.add.sprite(562,240,'8_2_2dot');
        _this.dot7.anchor.setTo(0.5);
        _this.dot7.scale.setTo(1.3,1.3);
        _this.dot7.name = 'dot7';
        _this.dot7.inputEnabled = true;
        _this.dot7.input.useHandCursor = true;
        _this.dot7.events.onInputDown.add(_this.selected,_this);
        
        _this.dot8 = _this.add.sprite(480,157,'8_2_2dot');
        _this.dot8.anchor.setTo(0.5);
        _this.dot8.scale.setTo(1.3,1.3);
        _this.dot8.name = 'dot8';
        _this.dot8.inputEnabled = true;
        _this.dot8.input.useHandCursor = true;
        _this.dot8.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        _this.objGrp1.add(_this.dot5);
        _this.objGrp1.add(_this.dot6);
        _this.objGrp1.add(_this.dot7);
        _this.objGrp1.add(_this.dot8);
        
        _this.objGrp1.rightcount = 8;
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;  
        
        _this.objGrp2.add(_this.tick);
        
    },
    
     gotoThirdQuestion:function()
    {
        console.log("gotoThirdQuestion");
        _this.getVoice();
       _this.questionNo=3;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(370,170,'8_2_2shape31');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(260,290,'8_2_2shape32');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(440,410,'8_2_2shape33');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(550,290,'8_2_2shape34');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
   
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        
        _this.dot1 = _this.add.sprite(262,175,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(260,405,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(615,407,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(475,173,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.name = 'dot4';
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        
        _this.objGrp1.rightcount = 4;
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
        
    },
    
     gotoFourthQuestion:function()
    {
        console.log("gotoFourthQuestion");
        _this.getVoice();
       _this.questionNo=4;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(499,180,'8_2_2shape41');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(564,295,'8_2_2shape42');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(499,410,'8_2_2shape43');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(364,410,'8_2_2shape44');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
        
        _this.shape5 = _this.add.sprite(299,295,'8_2_2shape45');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.name = 'shape5';
        _this.shape5.inputEnabled = true;
        _this.shape5.input.useHandCursor = true;
        _this.shape5.events.onInputDown.add(_this.selected,_this);
        
        _this.shape6 = _this.add.sprite(364,180,'8_2_2shape46');
        _this.shape6.anchor.setTo(0.5);
        _this.shape6.name = 'shape6';
        _this.shape6.inputEnabled = true;
        _this.shape6.input.useHandCursor = true;
        _this.shape6.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape5);
        _this.objGrp.add(_this.shape6);
        
        _this.objGrp.rightcount = 6;
        
        _this.dot1 = _this.add.sprite(430,147,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(300,223,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(300,368,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(430,445,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.name = 'dot4';
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.dot5 = _this.add.sprite(563,368,'8_2_2dot');
        _this.dot5.anchor.setTo(0.5);
        _this.dot5.scale.setTo(1.3,1.3);
        _this.dot5.name = 'dot5';
        _this.dot5.inputEnabled = true;
        _this.dot5.input.useHandCursor = true;
        _this.dot5.events.onInputDown.add(_this.selected,_this);
        
        _this.dot6 = _this.add.sprite(561,223,'8_2_2dot');
        _this.dot6.anchor.setTo(0.5);
        _this.dot6.scale.setTo(1.3,1.3);
        _this.dot6.name = 'dot6';
        _this.dot6.inputEnabled = true;
        _this.dot6.input.useHandCursor = true;
        _this.dot6.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        _this.objGrp1.add(_this.dot5);
        _this.objGrp1.add(_this.dot6);
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
    
    },
    
     gotoFifthQuestion:function()
    {
        console.log("gotoFifthQuestion");
        _this.getVoice();
        _this.questionNo=5;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(358,201,'8_2_2shape11');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(510,201,'8_2_2shape12');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(314,343,'8_2_2shape13');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(554,344,'8_2_2shape14');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
        
        _this.shape5 = _this.add.sprite(434,428,'8_2_2shape15');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.name = 'shape5';
        _this.shape5.inputEnabled = true;
        _this.shape5.input.useHandCursor = true;
        _this.shape5.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape5);
        
        _this.objGrp.rightcount = 5;
        
        _this.dot1 = _this.add.sprite(433,152,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(290,255,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(345,425,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(525,425,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.name = 'dot4';
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.dot5 = _this.add.sprite(578,255,'8_2_2dot');
        _this.dot5.anchor.setTo(0.5);
        _this.dot5.scale.setTo(1.3,1.3);
        _this.dot5.name = 'dot5';
        _this.dot5.inputEnabled = true;
        _this.dot5.input.useHandCursor = true;
        _this.dot5.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        _this.objGrp1.add(_this.dot5);
        
        _this.objGrp2 = _this.add.group();
       
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
        
    },
    
     gotoSixthQuestion:function()
    {
        console.log("gotoSixthQuestion");
        _this.getVoice();
       _this.questionNo=6;
        
        _this.objGrp = _this.add.group();
        _this.objGrp1 = _this.add.group();
        
        _this.shape1 = _this.add.sprite(400,190,'8_2_2shape61');
        _this.shape1.anchor.setTo(0.5);
        _this.shape1.name = 'shape1';
        _this.shape1.inputEnabled = true;
        _this.shape1.input.useHandCursor = true;
        _this.shape1.events.onInputDown.add(_this.selected,_this);
        
        _this.shape2 = _this.add.sprite(527,193,'8_2_2shape62');
        _this.shape2.anchor.setTo(0.5);
        _this.shape2.name = 'shape2';
        _this.shape2.inputEnabled = true;
        _this.shape2.input.useHandCursor = true;
        _this.shape2.events.onInputDown.add(_this.selected,_this);
        
        _this.shape3 = _this.add.sprite(537,267,'8_2_2shape63');
        _this.shape3.anchor.setTo(0.5);
        _this.shape3.name = 'shape3';
        _this.shape3.inputEnabled = true;
        _this.shape3.input.useHandCursor = true;
        _this.shape3.events.onInputDown.add(_this.selected,_this);
        
        _this.shape4 = _this.add.sprite(533,349,'8_2_2shape64');
        _this.shape4.anchor.setTo(0.5);
        _this.shape4.name = 'shape4';
        _this.shape4.inputEnabled = true;
        _this.shape4.input.useHandCursor = true;
        _this.shape4.events.onInputDown.add(_this.selected,_this);
        
        _this.shape5 = _this.add.sprite(468,407,'8_2_2shape65');
        _this.shape5.anchor.setTo(0.5);
        _this.shape5.name = 'shape5';
        _this.shape5.inputEnabled = true;
        _this.shape5.input.useHandCursor = true;
        _this.shape5.events.onInputDown.add(_this.selected,_this);
        
        _this.shape6 = _this.add.sprite(325,397,'8_2_2shape66');
        _this.shape6.anchor.setTo(0.5);
        _this.shape6.name = 'shape6';
        _this.shape6.inputEnabled = true;
        _this.shape6.input.useHandCursor = true;
        _this.shape6.events.onInputDown.add(_this.selected,_this);
        
        _this.shape7 = _this.add.sprite(300,289,'8_2_2shape67');
        _this.shape7.anchor.setTo(0.5);
        _this.shape7.name = 'shape7';
        _this.shape7.inputEnabled = true;
        _this.shape7.input.useHandCursor = true;
        _this.shape7.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape5);
        _this.objGrp.add(_this.shape6);
        _this.objGrp.add(_this.shape7);
        
        _this.objGrp.rightcount = 7;
        
        _this.dot1 = _this.add.sprite(479,170,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        _this.dot1.name = 'dot1';
        _this.dot1.inputEnabled = true;
        _this.dot1.input.useHandCursor = true;
        _this.dot1.events.onInputDown.add(_this.selected,_this);
        
        _this.dot2 = _this.add.sprite(322,216,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        _this.dot2.name = 'dot2';
        _this.dot2.inputEnabled = true;
        _this.dot2.input.useHandCursor = true;
        _this.dot2.events.onInputDown.add(_this.selected,_this);
        
        _this.dot3 = _this.add.sprite(282,360,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        _this.dot3.name = 'dot3';
        _this.dot3.inputEnabled = true;
        _this.dot3.input.useHandCursor = true;
        _this.dot3.events.onInputDown.add(_this.selected,_this);
        
        _this.dot4 = _this.add.sprite(377,425,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        _this.dot4.name = 'dot4';
        _this.dot4.inputEnabled = true;
        _this.dot4.input.useHandCursor = true;
        _this.dot4.events.onInputDown.add(_this.selected,_this);
        
        _this.dot5 = _this.add.sprite(551,387,'8_2_2dot');
        _this.dot5.anchor.setTo(0.5);
        _this.dot5.scale.setTo(1.3,1.3);
        _this.dot5.name = 'dot5';
        _this.dot5.inputEnabled = true;
        _this.dot5.input.useHandCursor = true;
        _this.dot5.events.onInputDown.add(_this.selected,_this);
        
        _this.dot6 = _this.add.sprite(511,310,'8_2_2dot');
        _this.dot6.anchor.setTo(0.5);
        _this.dot6.scale.setTo(1.3,1.3);
        _this.dot6.name = 'dot6';
        _this.dot6.inputEnabled = true;
        _this.dot6.input.useHandCursor = true;
        _this.dot6.events.onInputDown.add(_this.selected,_this);
        
        _this.dot7 = _this.add.sprite(560,225,'8_2_2dot');
        _this.dot7.anchor.setTo(0.5);
        _this.dot7.scale.setTo(1.3,1.3);
        _this.dot7.name = 'dot7';
        _this.dot7.inputEnabled = true;
        _this.dot7.input.useHandCursor = true;
        _this.dot7.events.onInputDown.add(_this.selected,_this);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        _this.objGrp1.add(_this.dot5);
        _this.objGrp1.add(_this.dot6);
        _this.objGrp1.add(_this.dot7);
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
       
    },
    
     gotoSeventhQuestion:function()
    {
        console.log("gotoSeventhQuestion");
        _this.getVoice();
        _this.questionNo=7;
        
        _this.objGrp = _this.add.group();
        
        _this.shape1 = _this.add.sprite(433,170,'8_2_2shape71');
        _this.shape1.anchor.setTo(0.5);
        
        _this.shape2 = _this.add.sprite(554,292,'8_2_2shape72');
        _this.shape2.anchor.setTo(0.5);
        
        _this.shape3 = _this.add.sprite(433,413,'8_2_2shape73');
        _this.shape3.anchor.setTo(0.5);
        
        _this.shape4 = _this.add.sprite(313,292,'8_2_2shape74');
        _this.shape4.anchor.setTo(0.5); 
        
        _this.shape11 = _this.add.sprite(427,287,'8_2_2diagonal3');
        _this.shape11.anchor.setTo(0.5); 
        _this.shape11.scale.setTo(0.95,0.95);
        _this.shape11.frame = 1;
        _this.shape11.visible = false;
        
        _this.shape12 = _this.add.sprite(433,286,'8_2_2diagonal4');
        _this.shape12.anchor.setTo(0.5); 
        _this.shape12.scale.setTo(0.95,0.95);
        _this.shape12.frame = 1;
        _this.shape12.visible = false;
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape11);
        _this.objGrp.add(_this.shape12);
        
        //_this.dot11 = _this.add.sprite(468,268,'8_2_2dot71');
        //_this.dot11.anchor.setTo(0.5);
        
       // _this.dot12 = _this.add.sprite(468,268,'8_2_2dot72');
       // _this.dot12.anchor.setTo(0.5);
        
        _this.objGrp1 = _this.add.group();
        
        _this.dot1 = _this.add.sprite(315,170,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        
        _this.dot2 = _this.add.sprite(315,413,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        
        _this.dot3 = _this.add.sprite(550,413,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        
        _this.dot4 = _this.add.sprite(550,170,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        
         /*****for line 1 *****/
        _this.lineGraphics1= _this.add.graphics(0,0);
        
        _this.dotDrag1 = _this.add.sprite(315,170,'8_2_2dot');
        _this.dotDrag1.anchor.setTo(0.5);
        _this.dotDrag1.scale.setTo(1.3,1.3);
        _this.dotDrag1.name = 'dot1';
        _this.dotDrag1.inputEnabled = true;
        _this.dotDrag1.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line1 = new Phaser.Line(_this.dot1.x, _this.dot1.y, _this.dotDrag1.x, _this.dotDrag1.y);
        
        _this.targetDot1 = _this.add.graphics(0,0);
        _this.targetDot1.beginFill(0xFF0000, 1);
        _this.targetDot1.drawCircle(560, 425, 5);
        _this.targetDot1.alpha = 0;
        
        /*****for line 2 *****/
        _this.lineGraphics2= _this.add.graphics(0,0);
        
        _this.dotDrag2 = _this.add.sprite(550,170,'8_2_2dot');
        _this.dotDrag2.anchor.setTo(0.5);
        _this.dotDrag2.scale.setTo(1.3,1.3);
        _this.dotDrag2.name = 'dot4';
        _this.dotDrag2.inputEnabled = true;
        _this.dotDrag2.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line2 = new Phaser.Line(_this.dot4.x, _this.dot4.y, _this.dotDrag2.x, _this.dotDrag2.y);
        
        _this.targetDot2 = _this.add.graphics(0,0);
        _this.targetDot2.beginFill(0xFF0000, 1);
        _this.targetDot2.drawCircle(300, 425, 5);
        _this.targetDot2.alpha = 0;
        
        /*****for line 3 *****/
        
        _this.lineGraphics3= _this.add.graphics(0,0);
        
        _this.dotDrag3 = _this.add.sprite(315,413,'8_2_2dot');
        _this.dotDrag3.anchor.setTo(0.5);
        _this.dotDrag3.scale.setTo(1.3,1.3);
        _this.dotDrag3.name = 'dot2';
        _this.dotDrag3.inputEnabled = true;
        _this.dotDrag3.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line3 = new Phaser.Line(_this.dot2.x, _this.dot2.y, _this.dotDrag3.x, _this.dotDrag3.y);
        
        _this.targetDot3 = _this.add.graphics(0,0);
        _this.targetDot3.beginFill(0xFF0000, 1);
        _this.targetDot3.drawCircle(560, 155, 5);
        _this.targetDot3.alpha = 0;
        
        /*****for line 4 *****/
        _this.lineGraphics4= _this.add.graphics(0,0);
        
        _this.dotDrag4 = _this.add.sprite(550,413,'8_2_2dot');
        _this.dotDrag4.anchor.setTo(0.5);
        _this.dotDrag4.scale.setTo(1.3,1.3);
        _this.dotDrag4.name = 'dot3';
        _this.dotDrag4.inputEnabled = true;
        _this.dotDrag4.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line4 = new Phaser.Line(_this.dot3.x, _this.dot3.y, _this.dotDrag4.x, _this.dotDrag4.y);
        
        _this.targetDot4 = _this.add.graphics(0,0);
        _this.targetDot4.beginFill(0xFF0000, 1);
        _this.targetDot4.drawCircle(300, 155, 5);
        _this.targetDot4.alpha = 0;
        /*************** end *************/
        
        _this.objGrp2 = _this.add.group();
        
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
        
    },
    
    gotoEighthQuestion:function()
    {
        console.log("gotoEighthQuestion");
        _this.getVoice();
        _this.questionNo=8;
        
        _this.objGrp = _this.add.group();
        
        _this.shape1 = _this.add.sprite(447,170,'8_2_2shape101');
        _this.shape1.anchor.setTo(0.5);
        
        _this.shape2 = _this.add.sprite(645,292,'8_2_2shape102');
        _this.shape2.anchor.setTo(0.5);
        
        _this.shape3 = _this.add.sprite(447,413,'8_2_2shape103');
        _this.shape3.anchor.setTo(0.5);
        
        _this.shape4 = _this.add.sprite(250,292,'8_2_2shape104');
        _this.shape4.anchor.setTo(0.5);
        
        _this.shape11 = _this.add.sprite(440,285,'8_2_2diagonal1');
        _this.shape11.anchor.setTo(0.5); 
        //_this.shape11.scale.setTo(0.95,0.95);
        _this.shape11.frame = 1;
        _this.shape11.visible = false;
        
        _this.shape12 = _this.add.sprite(455,285,'8_2_2diagonal2');
        _this.shape12.anchor.setTo(0.5); 
        //_this.shape12.scale.setTo(0.95,0.95);
        _this.shape12.frame = 1;
        _this.shape12.visible = false;
        
        _this.objGrp.add(_this.shape1);
        _this.objGrp.add(_this.shape2);
        _this.objGrp.add(_this.shape3);
        _this.objGrp.add(_this.shape4);
        _this.objGrp.add(_this.shape11);
        _this.objGrp.add(_this.shape12);
        
        //_this.dot11 = _this.add.sprite(475,270,'8_2_2dot11');
        //_this.dot11.anchor.setTo(0.5);
        
       // _this.dot12 = _this.add.sprite(474,270,'8_2_2dot12');
       // _this.dot12.anchor.setTo(0.5);
        
        _this.objGrp1 = _this.add.group();
        
        _this.dot1 = _this.add.sprite(257,175,'8_2_2dot');
        _this.dot1.anchor.setTo(0.5);
        _this.dot1.scale.setTo(1.3,1.3);
        
        _this.dot2 = _this.add.sprite(257,410,'8_2_2dot');
        _this.dot2.anchor.setTo(0.5);
        _this.dot2.scale.setTo(1.3,1.3);
        
        _this.dot3 = _this.add.sprite(645,410,'8_2_2dot');
        _this.dot3.anchor.setTo(0.5);
        _this.dot3.scale.setTo(1.3,1.3);
        
        _this.dot4 = _this.add.sprite(645,175,'8_2_2dot');
        _this.dot4.anchor.setTo(0.5);
        _this.dot4.scale.setTo(1.3,1.3);
        
        _this.objGrp1.add(_this.dot1);
        _this.objGrp1.add(_this.dot2);
        _this.objGrp1.add(_this.dot3);
        _this.objGrp1.add(_this.dot4);
        
         /*****for line 1 *****/
        
        _this.lineGraphics1= _this.add.graphics(0,0);
        
        _this.dotDrag1 = _this.add.sprite(257,175,'8_2_2dot');
        _this.dotDrag1.anchor.setTo(0.5);
        _this.dotDrag1.scale.setTo(1.3,1.3);
        _this.dotDrag1.name = 'dot1';
        _this.dotDrag1.inputEnabled = true;
        _this.dotDrag1.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line1 = new Phaser.Line(_this.dot1.x, _this.dot1.y, _this.dotDrag1.x, _this.dotDrag1.y);
        
        _this.targetDot1 = _this.add.graphics(0,0);
        _this.targetDot1.beginFill(0xFF0000, 1);
        _this.targetDot1.drawCircle(660, 417, 5);
        _this.targetDot1.alpha = 0;
        
         /*****for line 2 *****/
        
        _this.lineGraphics2= _this.add.graphics(0,0);
        
        _this.dotDrag2 = _this.add.sprite(645,175,'8_2_2dot');
        _this.dotDrag2.anchor.setTo(0.5);
        _this.dotDrag2.scale.setTo(1.3,1.3);
        _this.dotDrag2.name = 'dot4';
        _this.dotDrag2.inputEnabled = true;
        _this.dotDrag2.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line2 = new Phaser.Line(_this.dot4.x, _this.dot4.y, _this.dotDrag2.x, _this.dotDrag2.y);
        
        _this.targetDot2 = _this.add.graphics(0,0);
        _this.targetDot2.beginFill(0xFF0000, 1);
        _this.targetDot2.drawCircle(235, 417, 5);
        _this.targetDot2.alpha = 0;
        
         /*****for line 3 *****/
        
        _this.lineGraphics3= _this.add.graphics(0,0);
        
        _this.dotDrag3 = _this.add.sprite(257,410,'8_2_2dot');
        _this.dotDrag3.anchor.setTo(0.5);
        _this.dotDrag3.scale.setTo(1.3,1.3);
        _this.dotDrag3.name = 'dot2';
        _this.dotDrag3.inputEnabled = true;
        _this.dotDrag3.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line3 = new Phaser.Line(_this.dot2.x, _this.dot2.y, _this.dotDrag3.x, _this.dotDrag3.y);
        
        _this.targetDot3 = _this.add.graphics(0,0);
        _this.targetDot3.beginFill(0xFF0000, 1);
        _this.targetDot3.drawCircle(660, 157, 5);
        _this.targetDot3.alpha = 0;
        
         /*****for line 4 *****/
        _this.lineGraphics4= _this.add.graphics(0,0);
        
        _this.dotDrag4 = _this.add.sprite(645,410,'8_2_2dot');
        _this.dotDrag4.anchor.setTo(0.5);
        _this.dotDrag4.scale.setTo(1.3,1.3);
        _this.dotDrag4.name = 'dot3';
        _this.dotDrag4.inputEnabled = true;
        _this.dotDrag4.events.onInputDown.add(_this.changeTexture,_this);
        
        _this.line4 = new Phaser.Line(_this.dot3.x, _this.dot3.y, _this.dotDrag4.x, _this.dotDrag4.y);
        
        _this.targetDot4 = _this.add.graphics(0,0);
        _this.targetDot4.beginFill(0xFF0000, 1);
        _this.targetDot4.drawCircle(235, 162, 5);
        _this.targetDot4.alpha = 0;
        /********** end *********/
        
        _this.objGrp2 = _this.add.group();
       
        _this.tick = _this.add.sprite(870,280,'8_2_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        
        _this.objGrp2.add(_this.tick);
    },
    
    update:function() {
    
},
    
    selected:function(target){
        
        if(target.frame == 0)
            {
                _this.clickSound = _this.add.audio('ClickSound');
                _this.clickSound.play(); 
                console.log(target.name);
                target.frame = 1;
                _this.checkAns();
            }
        else if(target.frame == 1)
            {
                _this.clickSound = _this.add.audio('ClickSound');
                _this.clickSound.play(); 
                console.log(target.name);
                target.frame = 0;
            }
        
    },
    
       checkAns: function()
        {
         _this.tick.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();


             var temp = 0;
             var temp1 = 0;
            target.frame=1;
            
             for(var i=0;i<_this.objGrp.length;i++)
                {
                 for(var i=0;i<_this.objGrp1.length;i++)
                   {
                    console.log(_this.objGrp1.getAt(i).name);
                    if(_this.objGrp1.getAt(i).frame == 1 && _this.objGrp1.getAt(i).name != _this.objGrp.getAt(i).name && _this.objGrp.getAt(i).frame == 0 )
                        {
                          console.log("count"+temp)
                          temp++; 
                        }
                    else if(_this.objGrp.getAt(i).frame == 1 && _this.objGrp.getAt(i).name != _this.objGrp1.getAt(i).name &&
                           _this.objGrp1.getAt(i).frame == 0)
                        {
                           console.log("count"+temp1)
                            temp1++; 
                        }
                }
                }
            if(temp == _this.objGrp1.rightcount)
             {
                         console.log("vertices");
                        _this.objGrp1.setAll("frame",2);
                         _this.correctAns();
             }
            else if(temp1 == _this.objGrp.rightcount)
             {
                         console.log("sides");
                        _this.objGrp.setAll("frame",2);
                         _this.correctAns();
             }
            else 
            {
               
                     _this.shake.shake(10, _this.objGrp1); 
                     _this.shake.shake(10, _this.objGrp); 
                     _this.wrongAns(); 
                     _this.objGrp1.setAll("frame",0);
                     _this.objGrp.setAll("frame",0);
                     _this.time.events.add(300,function(){
                     _this.tick.frame=0;
                     },this);
             }
            
           
        },this);  
    },
    
    /*checkAns: function(target)
    {
        
        _this.tick.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
             var temp = 0;
             var temp1 = 0;
            target.frame=1;
            
             for(var i=0;i<_this.objGrp.length;i++)
                {
                 for(var i=0;i<_this.objGrp1.length;i++)
                   {
                    console.log(_this.objGrp1.getAt(i).name);
                    if(_this.objGrp1.getAt(i).frame == 1)
                        {
                          console.log("count"+temp)
                          temp++; 
                        }
                    else if(_this.objGrp.getAt(i).frame == 1)
                        {
                           console.log("count"+temp1)
                            temp1++; 
                        }
                }
                }
            if(temp == _this.objGrp1.rightcount)
             {
                         console.log("vertices");
                        _this.objGrp1.setAll("frame",2);
                         _this.correctAns();
             }
            else if(temp1 == _this.objGrp.rightcount)
             {
                         console.log("sides");
                        _this.objGrp.setAll("frame",2);
                         _this.correctAns();
             }
            else 
            {
                if(temp)
                 {
                     _this.shake.shake(10, _this.objGrp1); 
                     _this.wrongAns(); 
                     _this.objGrp1.setAll("frame",0);
                     _this.time.events.add(300,function(){
                     _this.tick.frame=0;
                     },this);
                 }
                else if(temp1)
                 {
                     _this.shake.shake(10, _this.objGrp); 
                     _this.wrongAns(); 
                     _this.objGrp.setAll("frame",0);
                     _this.time.events.add(300,function(){
                         _this.tick.frame=0;
                     },this);
                     
                    
                 }
            }
           
        },this);
        
           
    },*/
    
   changeTexture:function(target)
    {
        target.input.enableDrag();
        _this.click = _this.add.audio('ClickSound');
        _this.click.play();
        
        target.events.onDragUpdate.add(function(){
            
            if(target.name == 'dot1')
            {
            _this.dot1.frame = 1;    
            //_this.dot11.alpha = 0;
            _this.dotDrag4.inputEnabled = false;
            _this.dotDrag4.alpha = 0;
                
            _this.line1.fromSprite(_this.dot1, _this.dotDrag1, false);
            _this.lineGraphics1.clear();
            _this.lineGraphics1.visible = true;
            _this.lineGraphics1.lineStyle(10, 0xffd900, 1);
            _this.lineGraphics1.moveTo(_this.line1.start.x,_this.line1.start.y);
            _this.lineGraphics1.lineTo(_this.line1.end.x,_this.line1.end.y);
            
            if(_this.checkOverlap(target,_this.targetDot1))
                {
                    _this.dot3.frame = 1;
                    target.input.disableDrag();
                    _this.lineGraphics1.clear();
                     target.destroy();
                    _this.click = _this.add.audio('snapSound');
                    _this.click.play();
                    
                    if(_this.questionNo == 7)
                        {
                           _this.lineGraphics1.lineStyle(10, 0xffd900, 1);
                           _this.lineGraphics1.moveTo(322,180);
                           _this.lineGraphics1.lineTo(538,397);
                        }
                   else if(_this.questionNo == 8)
                        {
                           _this.lineGraphics1.lineStyle(10, 0xffd900, 1);
                           _this.lineGraphics1.moveTo(265,183);
                           _this.lineGraphics1.lineTo(628,397);
                        }
                    
                    
                }
            }
             else if(target.name == 'dot4')
            {
                
                _this.dot4.frame = 1;
                //_this.dot12.alpha = 0;
                _this.dotDrag3.inputEnabled = false;
                _this.dotDrag3.alpha = 0;
                
               _this.line2.fromSprite(_this.dot4, _this.dotDrag2, false);
               _this.lineGraphics2.clear();
               _this.lineGraphics2.visible = true;
               _this.lineGraphics2.lineStyle(10, 0xffd900, 1);
               _this.lineGraphics2.moveTo(_this.line2.start.x,_this.line2.start.y);
               _this.lineGraphics2.lineTo(_this.line2.end.x,_this.line2.end.y);
                
                if(_this.checkOverlap(target,_this.targetDot2))
                {
                    _this.dot2.frame = 1;
                    target.input.disableDrag();
                    _this.lineGraphics2.clear();
                    target.destroy();
                    _this.click = _this.add.audio('snapSound');
                    _this.click.play();
                     if(_this.questionNo == 7)
                    {
                       _this.lineGraphics2.lineStyle(10, 0xffd900, 1);
                       _this.lineGraphics2.moveTo(536,180);
                       _this.lineGraphics2.lineTo(323,398);
                    }
                    else if(_this.questionNo == 8)
                    {
                       _this.lineGraphics2.lineStyle(10, 0xffd900, 1);
                       _this.lineGraphics2.moveTo(630,181);
                       _this.lineGraphics2.lineTo(268,397);
                    }
                }
            }
            
            else if(target.name == 'dot2')
            {
                _this.dot2.frame = 1;
                //_this.dot12.alpha = 0;
                _this.dotDrag2.inputEnabled = false;
                _this.dotDrag2.alpha = 0;
                
               _this.line3.fromSprite(_this.dot2, _this.dotDrag3, false);
               _this.lineGraphics3.clear();
               _this.lineGraphics3.visible = true;
               _this.lineGraphics3.lineStyle(10, 0xffd900, 1);
               _this.lineGraphics3.moveTo(_this.line3.start.x,_this.line3.start.y);
               _this.lineGraphics3.lineTo(_this.line3.end.x,_this.line3.end.y);
                
                if(_this.checkOverlap(target,_this.targetDot3))
                {
                    _this.dot4.frame = 1;
                    target.input.disableDrag();
                    _this.lineGraphics3.clear();
                     target.destroy();
                    _this.click = _this.add.audio('snapSound');
                    _this.click.play();
                     if(_this.questionNo == 7)
                    {
                       _this.lineGraphics3.lineStyle(10, 0xffd900, 1);
                       _this.lineGraphics3.moveTo(323,398);//361,375
                       _this.lineGraphics3.lineTo(536,180);//572,163
                    }
                    else if(_this.questionNo == 8)
                    {
                       _this.lineGraphics3.lineStyle(10, 0xffd900, 1);
                       _this.lineGraphics3.moveTo(630,181);
                       _this.lineGraphics3.lineTo(268,397);
                    }
                }
            }
            else if(target.name == 'dot3')
            {
            _this.dot3.frame = 1;    
            //_this.dot11.alpha = 0;
            _this.dotDrag1.inputEnabled = false;
            _this.dotDrag1.alpha = 0;
                
            _this.line4.fromSprite(_this.dot3, _this.dotDrag4, false);
            _this.lineGraphics4.clear();
            _this.lineGraphics4.visible = true;
            _this.lineGraphics4.lineStyle(10, 0xffd900, 1);
            _this.lineGraphics4.moveTo(_this.line4.start.x,_this.line4.start.y);
            _this.lineGraphics4.lineTo(_this.line4.end.x,_this.line4.end.y);
            
            if(_this.checkOverlap(target,_this.targetDot4))
                {
                    _this.dot1.frame = 1;
                    target.input.disableDrag();
                    _this.lineGraphics4.clear();
                     target.destroy();
                    _this.click = _this.add.audio('snapSound');
                    _this.click.play();
                    
                    if(_this.questionNo == 7)
                        {
                           _this.lineGraphics4.lineStyle(10, 0xffd900, 1);
                           _this.lineGraphics4.moveTo(538,397);//573,373
                           _this.lineGraphics4.lineTo(322,180); //360,164
                        }
                   else if(_this.questionNo == 8)
                        {
                           _this.lineGraphics4.lineStyle(10, 0xffd900, 1);
                           _this.lineGraphics4.moveTo(628,397);
                           _this.lineGraphics4.lineTo(265,183);
                        }
                    
                    
                }
            }
             
        
        _this.tick.events.onInputDown.add(function(target){
            target.frame = 1;
            target.events.onInputDown.removeAll();
            if(_this.dot1.frame == 1 && _this.dot2.frame == 1 && _this.dot3.frame == 1 && _this.dot4.frame == 1)
                {
                    _this.correctAns();
                    _this.shape11.visible = true;
                    _this.shape12.visible = true;
                    _this.lineGraphics1.destroy();
                    _this.lineGraphics2.destroy();
                    _this.lineGraphics3.destroy();
                    _this.lineGraphics4.destroy();
                   // _this.dot11.destroy();
                   // _this.dot12.destroy();
                    
                }
            else if(_this.dot2.frame == 1 && _this.dot4.frame == 1 && (_this.dot1.frame == 0 || _this.dot3.frame == 0))
            {
                 _this.wrongAns(); 
                 _this.shake.shake(10, _this.objGrp);
                 _this.lineGraphics1.clear();
                 _this.lineGraphics4.clear();
                 _this.dot1.frame = 0;
                 _this.dot3.frame = 0;
                if(_this.questionNo == 7)
                    {
                      _this.dotDrag1.x = 315;//352;
                      _this.dotDrag1.y = 170;//155;
                      _this.dotDrag4.x = 550;//588;
                      _this.dotDrag4.y = 413;//388;
                    if(_this.dotDrag1.x == 315 && _this.dotDrag1.y == 170)
                           {
                              _this.dotDrag4.inputEnabled = true;
                              _this.dotDrag4.alpha = 1; 
                           } 
                    if(_this.dotDrag4.x == 550 && _this.dotDrag4.y == 413)
                           {
                              _this.dotDrag1.inputEnabled = true;
                              _this.dotDrag1.alpha = 1; 
                           }
                    }
                 else if(_this.questionNo == 8)
                    {
                      _this.dotDrag1.x = 257;//277;
                      _this.dotDrag1.y = 175;//151;
                      _this.dotDrag4.x = 645;//670;
                      _this.dotDrag4.y = 410;//387;
                    if(_this.dotDrag1.x == 257 && _this.dotDrag1.y == 175)
                           {
                              _this.dotDrag4.inputEnabled = true;
                              _this.dotDrag4.alpha = 1; 
                           } 
                    if(_this.dotDrag4.x == 645 && _this.dotDrag4.y == 410)
                           {
                              _this.dotDrag1.inputEnabled = true;
                              _this.dotDrag1.alpha = 1; 
                           }
                    }
                 _this.time.events.add(500,function(){
                    _this.tick.frame=0;
                    },this);
                
            }
            else if(_this.dot1.frame == 1 && _this.dot3.frame == 1 && (_this.dot2.frame == 0 || _this.dot4.frame == 0))
            {
                 _this.wrongAns(); 
                 _this.shake.shake(10, _this.objGrp);
                 _this.lineGraphics2.clear();
                 _this.lineGraphics3.clear();
                 _this.dot2.frame = 0;
                 _this.dot4.frame = 0;
                if(_this.questionNo == 7)
                    {
                     _this.dotDrag2.x = 550;//586;
                     _this.dotDrag2.y = 170;//155;
                     _this.dotDrag3.x = 315;//352;
                     _this.dotDrag3.y = 413;//388;           
                    if(_this.dotDrag2.x == 550 && _this.dotDrag2.y == 170)
                           {
                              _this.dotDrag3.inputEnabled = true;
                              _this.dotDrag3.alpha = 1; 
                           } 
                    if(_this.dotDrag3.x == 315 && _this.dotDrag3.y == 413)
                           {
                              _this.dotDrag2.inputEnabled = true;
                              _this.dotDrag2.alpha = 1; 
                           }
                        
                    }
                else if(_this.questionNo == 8)
                    {
                      _this.dotDrag2.x = 645;//670;
                      _this.dotDrag2.y = 175;//151;
                      _this.dotDrag3.x = 257;//277;
                      _this.dotDrag3.y = 410;//387;
                     if(_this.dotDrag2.x == 645 && _this.dotDrag2.y == 175)
                           {
                              _this.dotDrag3.inputEnabled = true;
                              _this.dotDrag3.alpha = 1; 
                           } 
                    if(_this.dotDrag3.x == 257 && _this.dotDrag3.y == 410)
                           {
                              _this.dotDrag2.inputEnabled = true;
                              _this.dotDrag2.alpha = 1; 
                           }
                    }
                 _this.time.events.add(500,function(){
                    _this.tick.frame=0;
                    //_this.dot12.alpha = 1; 
                    },this);
            }
                
             else if(_this.dot2.frame == 1 || _this.dot3.frame == 1 || _this.dot2.frame == 0 || _this.dot4.frame == 0)
                {
                 _this.wrongAns(); 
                 _this.shake.shake(10, _this.objGrp);
                 _this.lineGraphics1.clear();
                 _this.lineGraphics2.clear();
                 _this.lineGraphics3.clear();
                 _this.lineGraphics4.clear();
                 _this.dot1.frame = 0;
                 _this.dot2.frame = 0;
                 _this.dot3.frame = 0;
                 _this.dot4.frame = 0;
                if(_this.questionNo == 7)
                    {
                      _this.dotDrag1.x = 315;//352;
                      _this.dotDrag1.y = 170;//155;
                      _this.dotDrag2.x = 550;//586;
                      _this.dotDrag2.y = 170;//155;
                      _this.dotDrag3.x = 315;//352;
                      _this.dotDrag3.y = 413;//388;
                      _this.dotDrag4.x = 550;//588;
                      _this.dotDrag4.y = 413;//388;
                    if(_this.dotDrag1.x == 315 && _this.dotDrag1.y == 170)
                           {
                              _this.dotDrag4.inputEnabled = true;
                              _this.dotDrag4.alpha = 1; 
                           } 
                    if(_this.dotDrag4.x == 550 && _this.dotDrag4.y == 413)
                           {
                              _this.dotDrag1.inputEnabled = true;
                              _this.dotDrag1.alpha = 1; 
                           }
                    if(_this.dotDrag2.x == 550 && _this.dotDrag2.y == 170)
                           {
                              _this.dotDrag3.inputEnabled = true;
                              _this.dotDrag3.alpha = 1; 
                           } 
                    if(_this.dotDrag3.x == 315 && _this.dotDrag3.y == 413)
                           {
                              _this.dotDrag2.inputEnabled = true;
                              _this.dotDrag2.alpha = 1; 
                           }
                    }
                else if(_this.questionNo == 8)
                    {
                       _this.dotDrag1.x = 257;//277;
                       _this.dotDrag1.y = 175;//151;
                       _this.dotDrag2.x = 645;//670;
                       _this.dotDrag2.y = 175;//151;
                       _this.dotDrag3.x = 257;//277;
                       _this.dotDrag3.y = 410;//387;
                       _this.dotDrag4.x = 645;//670;
                       _this.dotDrag4.y = 410;//387;
                    if(_this.dotDrag1.x == 257 && _this.dotDrag1.y == 175)
                           {
                              _this.dotDrag4.inputEnabled = true;
                              _this.dotDrag4.alpha = 1; 
                           } 
                    if(_this.dotDrag4.x == 645 && _this.dotDrag4.y == 410)
                           {
                              _this.dotDrag1.inputEnabled = true;
                              _this.dotDrag1.alpha = 1; 
                           }
                    if(_this.dotDrag2.x == 645 && _this.dotDrag2.y == 175)
                           {
                              _this.dotDrag3.inputEnabled = true;
                              _this.dotDrag3.alpha = 1; 
                           } 
                    if(_this.dotDrag3.x == 257 && _this.dotDrag3.y == 410)
                           {
                              _this.dotDrag2.inputEnabled = true;
                              _this.dotDrag2.alpha = 1; 
                           }
                    }
                 _this.time.events.add(500,function(){
                     _this.tick.frame=0;
                     //_this.dot11.alpha = 1;
                    // _this.dot12.alpha = 1; 
                    },this);
                
            }
        },this);
            
         },this);   
            
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
                console.log("here");
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
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
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
             
 
    
    
 	changeQuestion:function()
	{
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        //target.events.onInputDown.removeAll();
        console.log("correct Answer");
        console.log("_this.questionNo :"+_this.questionNo);

        if(_this.objGrp)
            {
                _this.objGrp.setAll("inputEnabled",false);
            }

       _this.noofAttempts++;
          
          _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click"+target, 
                    res_id: target, 
                    access_token: window.acctkn 
               } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();

        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
           //target.frame=1;
           //_this.click1 = _this.add.audio('ClickSound');
           //_this.click1.play();
         
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
        
        _this.time.events.add(3000, _this.removeEverthing, _this);
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
    
	},

    wrongAns:function(target)
	{
        console.log("wrong function");
        _this.wrong = false;
      
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level8.2.2_"+target,  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
        
            //_this.click2 = _this.add.audio('ClickSound');
            //_this.click2.play();
        
            // _this.shake.shake(10, target);
            
              _this.wmusic = _this.add.audio('waudio');
		      _this.wmusic.play(); 
        
		  //_this.timer1.stop();
        
        
	},
    
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.no11++;
        _this.count1++;
        _this.wrong = true;
      
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp2);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.count =0;
                _this.objGrp.destroy();
                _this.objGrp1.destroy();
                _this.objGrp2.destroy();
                _this.getQuestion();
            },_this);  
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('sg8_2_2xScore');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        console.log("voice"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2: 
            case 3:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/English/8.2.2a.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Hindi/8.2.2a.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Kannada/8.2.2a.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Gujarati/8.2.2a.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Marathi/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Telugu/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Tamil/sg8.2.2a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Urdu/sg8.2.2a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Odiya/sg8.2.2a.mp3");
                    }
                    break;
           case 4: 
           case 5:
           case 6:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/English/8.2.2b.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Hindi/8.2.2b.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Kannada/8.2.2b.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Gujarati/8.2.2b.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Marathi/sg8.2.2b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Telugu/sg8.2.2b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Tamil/sg8.2.2b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Urdu/sg8.2.2b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Odiya/sg8.2.2b.mp3");
                    }

                    break;
           case 7:
           case 8:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/English/8.2.2c.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Hindi/8.2.2c.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Kannada/8.2.2c.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Gujarati/8.2.2c.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Marathi/sg8.2.2c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Telugu/sg8.2.2c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Tamil/sg8.2.2c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Urdu/sg8.2.2c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.2.2x/Odiya/sg8.2.2c.mp3");
                    }
                    break;
                
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


};