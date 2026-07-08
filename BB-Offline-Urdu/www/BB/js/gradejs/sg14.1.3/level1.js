Game.sg14_1_3level1=function(){};

Game.sg14_1_3level1.prototype={
    init:function(game)
    {
       _this = this;
        telInitializer.gameIdInit("SG14_1_3",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade3SG3){

            window.grade3SG3 = true;

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

            this.load.image('SG14_1_3grid1', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid1.png');
        this.load.image('SG14_1_3emptygrid1', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid1.png');
        this.load.image('SG14_1_3blue', window.baseUrl+'assets/gradeAssets/sg14.1.3/blue.png');
        this.load.image('SG14_1_3green', window.baseUrl+'assets/gradeAssets/sg14.1.3/green.png');
        this.load.image('SG14_1_3orange', window.baseUrl+'assets/gradeAssets/sg14.1.3/orange.png');
        this.load.image('SG14_1_3purple', window.baseUrl+'assets/gradeAssets/sg14.1.3/purple.png');
        this.load.image('SG14_1_3red', window.baseUrl+'assets/gradeAssets/sg14.1.3/red.png');
        this.load.image('SG14_1_3yellow', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellow.png');
        this.load.atlas('SG14_1_3screen', window.baseUrl+'assets/gradeAssets/sg14.1.3/screen.png', window.baseUrl+'json/gradeJson/sg14.1.3/screen.json');
       
        this.load.image('SG14_1_3grid2', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid2.png');
        this.load.image('SG14_1_3emptygrid2', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid2.png');
        this.load.image('SG14_1_3hexagon', window.baseUrl+'assets/gradeAssets/sg14.1.3/hexagon.png');
        
        this.load.image('SG14_1_3grid3', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid3.png');
        this.load.image('SG14_1_3emptygrid3', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid3.png');
        this.load.image('SG14_1_3yellowtriangle', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowtriangle.png');
        this.load.image('SG14_1_3redtriangle', window.baseUrl+'assets/gradeAssets/sg14.1.3/redtriangle.png');
        
        this.load.image('SG14_1_3grid4', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid4.png');
        this.load.image('SG14_1_3emptygrid4', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid4.png');
        this.load.image('SG14_1_3yellowhexa1', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowhexa1.png');
        this.load.image('SG14_1_3yellowhexa2', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowhexa2.png');
        this.load.image('SG14_1_3orange1', window.baseUrl+'assets/gradeAssets/sg14.1.3/orange1.png');
        this.load.image('SG14_1_3orange2', window.baseUrl+'assets/gradeAssets/sg14.1.3/orange2.png');
        this.load.image('SG14_1_3orange3', window.baseUrl+'assets/gradeAssets/sg14.1.3/orange3.png');
        this.load.image('SG14_1_3purple1', window.baseUrl+'assets/gradeAssets/sg14.1.3/purple1.png');
        this.load.image('SG14_1_3purple2', window.baseUrl+'assets/gradeAssets/sg14.1.3/purple2.png');
        this.load.image('SG14_1_3purple3', window.baseUrl+'assets/gradeAssets/sg14.1.3/purple3.png');
      
        this.load.image('SG14_1_3grid5', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid5.png');
        this.load.image('SG14_1_3emptygrid5', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid5.png');
        this.load.image('SG14_1_3square', window.baseUrl+'assets/gradeAssets/sg14.1.3/square.png');
        this.load.image('SG14_1_3greenleft', window.baseUrl+'assets/gradeAssets/sg14.1.3/greenleft.png');  
        this.load.image('SG14_1_3greenright', window.baseUrl+'assets/gradeAssets/sg14.1.3/greenright.png');
        this.load.image('SG14_1_3blueshape', window.baseUrl+'assets/gradeAssets/sg14.1.3/blueshape.png');
        this.load.image('SG14_1_3hexa', window.baseUrl+'assets/gradeAssets/sg14.1.3/hexa.png');
        
        this.load.image('SG14_1_3grid6', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid6.png');
        this.load.image('SG14_1_3emptygrid6', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid6.png');
        this.load.image('SG14_1_3redpentagon1', window.baseUrl+'assets/gradeAssets/sg14.1.3/redpentagon1.png');
        this.load.image('SG14_1_3redpentagon2', window.baseUrl+'assets/gradeAssets/sg14.1.3/redpentagon2.png');  
        this.load.image('SG14_1_3orangepentagon1', window.baseUrl+'assets/gradeAssets/sg14.1.3/orangepentagon1.png');
        this.load.image('SG14_1_3orangepentagon2', window.baseUrl+'assets/gradeAssets/sg14.1.3/orangepentagon2.png');
        this.load.image('SG14_1_3blue1', window.baseUrl+'assets/gradeAssets/sg14.1.3/blue1.png');
        this.load.image('SG14_1_3green1', window.baseUrl+'assets/gradeAssets/sg14.1.3/green1.png');
        
        this.load.image('SG14_1_3grid7', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid7.png');
        this.load.image('SG14_1_3emptygrid7', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid7.png');
        this.load.image('SG14_1_3redtri', window.baseUrl+'assets/gradeAssets/sg14.1.3/redtri.png');
        this.load.image('SG14_1_3yellowtri', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowtri.png');
        this.load.image('SG14_1_3lbsquare', window.baseUrl+'assets/gradeAssets/sg14.1.3/lbsquare.png');
        this.load.image('SG14_1_3bsquare', window.baseUrl+'assets/gradeAssets/sg14.1.3/bsquare.png');
        
        this.load.image('SG14_1_3grid8', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid8.png');
        this.load.image('SG14_1_3emptygrid8', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid8.png');
        this.load.image('SG14_1_3rightgreen', window.baseUrl+'assets/gradeAssets/sg14.1.3/rightgreen.png');
        this.load.image('SG14_1_3leftgreen', window.baseUrl+'assets/gradeAssets/sg14.1.3/leftgreen.png');
        this.load.image('SG14_1_3rightorange', window.baseUrl+'assets/gradeAssets/sg14.1.3/rightorange.png');
        this.load.image('SG14_1_3leftorange', window.baseUrl+'assets/gradeAssets/sg14.1.3/leftorange.png');
        this.load.image('SG14_1_3yellowhexa', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowhexa.png');
        this.load.image('SG14_1_3orangesquare', window.baseUrl+'assets/gradeAssets/sg14.1.3/orangesquare.png');
        
        this.load.image('SG14_1_3grid9', window.baseUrl+'assets/gradeAssets/sg14.1.3/grid9.png');
        this.load.image('SG14_1_3emptygrid9', window.baseUrl+'assets/gradeAssets/sg14.1.3/emptygrid9.png');
        this.load.image('SG14_1_3octagon', window.baseUrl+'assets/gradeAssets/sg14.1.3/octagon.png');
        this.load.image('SG14_1_3purplesquare', window.baseUrl+'assets/gradeAssets/sg14.1.3/purplesquare.png');
        
        
        this.load.image('SG14_1_3purplePenta', window.baseUrl+'assets/gradeAssets/sg14.1.3/purplePenta.png');
        this.load.image('SG14_1_3yellowPenta', window.baseUrl+'assets/gradeAssets/sg14.1.3/yellowPenta.png');


    }

    },

create:function(game)
    {
		_this.amplify = null;
		
        _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount = 0;
    
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.background;
        _this.click3;
        _this.click2
        _this.click1;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.questioNo = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.correct=0;
        _this.number=0;
        
        _this.canadd1=false;_this.canadd2=false;_this.canadd3=false;_this.canadd4=false;_this.canadd5=false;_this.canadd6=false;
        _this.canadd7=false;_this.canadd8=false;_this.canadd9=false;_this.canadd10=false;_this.canadd11=false;_this.canadd12=false; _this.canadd13=false;_this.canadd14=false;_this.canadd15=false;_this.canadd16=false;_this.canadd17=false;_this.canadd18=false;
        _this.canadd19=false;_this.canadd20=false;_this.canadd21=false;_this.canadd22=false;_this.canadd23=false;_this.canadd24=false;
        _this.canadd25=false;_this.canadd26=false;_this.canadd27=false;_this.canadd28=false;_this.canadd29=false;_this.canadd30=false;
        _this.canadd31=false;_this.canadd32=false;_this.canadd33=false;_this.canadd34=false;_this.canadd35=false;_this.canadd36=false;
        _this.canadd37=false;_this.canadd38=false;_this.canadd39=false;_this.canadd40=false;_this.canadd41=false;_this.canadd42=false;
        _this.canadd43=false;_this.canadd44=false;_this.canadd45=false;_this.canadd46=false;_this.canadd47=false;_this.canadd48=false;
        _this.canadd49=false;_this.canadd50=false;_this.canadd51=false; _this.canadd52=false;_this.canadd53=false;_this.canadd54=false;   
        
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
    
        
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        
        _this.qArrays1 = [2,3,9];
        _this.qArrays2 = [1,4,5,6,7,8];
        
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        
        for(var i=0;i<3;i++)
        {
            _this.qArrays.push(_this.qArrays1[i]);
        }
        for(var j=0;j<3;j++)
        {
            _this.qArrays.push(_this.qArrays2[j]);
        }
        
        console.log(_this.qArrays);
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
        _this.backbtn.events.onInputDown.removeAll();
        _this.stopvoice();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speaker = _this.add.button(600,6,'grade11_speaker');
        _this.speaker.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();

        },_this);
        
        _this.timerbg=_this.add.sprite(305,6,'Level42C_timer');
        _this.timerbg.scale.setTo(1,1);
        
        _this.timerDisplay = _this.add.text(330,22,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'myfont';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        
        _this.getQuestion(); 
		_this.getVoice();
          
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
    
        _this.timerDisplay.setText(_this.minutes+':' +_this.seconds);
        
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
    
    getQuestion:function(target)
    {
         _this.stopvoice();
         
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
        
    	//console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
       _this.questionid =1;
        
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
             case 9: _this.gotoNinthQuestion();
    				  break; 
                     
           
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


 gotoFirstQuestion:function()
    {
        _this.questioNo = 1;
        _this.slideGrp = _this.add.group();
      
        _this.screen = _this.add.sprite(620,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1.5,1); 
        
        _this.emptygrid = _this.add.sprite(615,293,'SG14_1_3emptygrid1');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
        
         _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
        
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(615,293,'SG14_1_3grid1');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.orange = _this.add.sprite(80,150,'SG14_1_3orange');
    	_this.orange.anchor.setTo(0.5);
        _this.orange.scale.setTo(0.9,0.9); 
        _this.orange.inputEnabled = true;
        _this.orange.input.useHandCursor = true;
        _this.orange.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.red = _this.add.sprite(80,250,'SG14_1_3red');
    	_this.red.anchor.setTo(0.5);
        _this.red.scale.setTo(0.9,0.9);
        _this.red.inputEnabled = true;
        _this.red.input.useHandCursor = true;
        _this.red.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.green = _this.add.sprite(80,350,'SG14_1_3green');
    	_this.green.anchor.setTo(0.5);
        _this.green.scale.setTo(0.9,0.9); 
        _this.green.inputEnabled = true;
        _this.green.input.useHandCursor = true;
        _this.green.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.yellow = _this.add.sprite(210,380,'SG14_1_3yellow');
    	_this.yellow.anchor.setTo(0.5);
        _this.yellow.scale.setTo(0.9,0.9);
        _this.yellow.inputEnabled = true;
        _this.yellow.input.useHandCursor = true;
        _this.yellow.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.blue = _this.add.sprite(210,200,'SG14_1_3blue');
    	_this.blue.anchor.setTo(0.5);
        _this.blue.scale.setTo(0.9,0.9);
        _this.blue.inputEnabled = true;
        _this.blue.input.useHandCursor = true;
        _this.blue.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.purple = _this.add.sprite(80,445,'SG14_1_3purple');
    	_this.purple.anchor.setTo(0.5);
        _this.purple.scale.setTo(0.9,0.9); 
        _this.purple.inputEnabled = true;
        _this.purple.input.useHandCursor = true;
        _this.purple.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
        
        _this.dragGrp.add(_this.orange);
        _this.dragGrp.add(_this.red);
        _this.dragGrp.add(_this.green);
        _this.dragGrp.add(_this.yellow);
        _this.dragGrp.add(_this.blue);
        _this.dragGrp.add(_this.purple);
    
        
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        
        _this.canadd1 = true;
        _this.canadd2 = true;
        _this.canadd3 = true;
        _this.canadd4 = true;
        _this.canadd5 = true;
        _this.canadd6 = true;
        
        _this.red1 = _this.add.sprite(369,181,'SG14_1_3red');
    	_this.red1.anchor.setTo(0.5);
        _this.red1.scale.setTo(1,1); 
        //_this.red1.visible=false;
        _this.red1.name = "red1";
        
        _this.yellow1 = _this.add.sprite(368,218,'SG14_1_3yellow');
    	_this.yellow1.anchor.setTo(0.5);
        _this.yellow1.scale.setTo(1,1); 
        //_this.yellow1.visible=false;
        _this.yellow1.name = "yellow1";
        
        _this.orange1 = _this.add.sprite(369,255,'SG14_1_3orange');
    	_this.orange1.anchor.setTo(0.5);
        _this.orange1.scale.setTo(1,1); 
        //_this.orange1.visible=false;
        _this.orange1.name = "orange1";
        
        _this.purple1 = _this.add.sprite(467,181,'SG14_1_3purple');
    	_this.purple1.anchor.setTo(0.5);
        _this.purple1.scale.setTo(1,1); 
        //_this.purple1.visible=false;
        _this.purple1.name = "purple1";
        
        _this.blue1 = _this.add.sprite(467,219,'SG14_1_3blue');
    	_this.blue1.anchor.setTo(0.5);
        _this.blue1.scale.setTo(1,1);
        //_this.blue1.visible=false;
        _this.blue1.name = "blue1";
        
        _this.green1 = _this.add.sprite(468,255,'SG14_1_3green');
    	_this.green1.anchor.setTo(0.5);
        _this.green1.scale.setTo(1,1); 
        //_this.green1.visible=false;
        _this.green1.name = "green1";
        
        _this.red2 = _this.add.sprite(566,181,'SG14_1_3red');
    	_this.red2.anchor.setTo(0.5);
        _this.red2.scale.setTo(1,1);  
        _this.red2.visible=false;
        _this.red2.name = "red2";
        
        _this.yellow2 = _this.add.sprite(566,218,'SG14_1_3yellow');
    	_this.yellow2.anchor.setTo(0.5);
        _this.yellow2.scale.setTo(1,1);  
        _this.yellow2.visible=false;
        _this.yellow2.name = "yellow2";
        
        _this.orange2 = _this.add.sprite(565,255,'SG14_1_3orange');
    	_this.orange2.anchor.setTo(0.5);
        _this.orange2.scale.setTo(1,1); 
        _this.orange2.visible=false;
        _this.orange2.name = "orange2";
        
        _this.purple2 = _this.add.sprite(664,181,'SG14_1_3purple');
    	_this.purple2.anchor.setTo(0.5);
        _this.purple2.scale.setTo(1,1); 
        _this.purple2.visible=false;
        _this.purple2.name = "purple2";
        
        _this.blue2 = _this.add.sprite(665,218,'SG14_1_3blue');
    	_this.blue2.anchor.setTo(0.5);
        _this.blue2.scale.setTo(1,1); 
        _this.blue2.visible=false;
        _this.blue2.name = "blue2";
        
        _this.green2 = _this.add.sprite(665,255,'SG14_1_3green');
    	_this.green2.anchor.setTo(0.5);
        _this.green2.scale.setTo(1,1);  
        _this.green2.visible=false;
        _this.green2.name = "green2";
         
        _this.red3 = _this.add.sprite(762,181,'SG14_1_3red');
    	_this.red3.anchor.setTo(0.5);
        _this.red3.scale.setTo(1,1);  
        _this.red3.visible=false;
        _this.red3.name = "red3";
        
        _this.yellow3 = _this.add.sprite(762,218,'SG14_1_3yellow');
    	_this.yellow3.anchor.setTo(0.5);
        _this.yellow3.scale.setTo(1,1);  
        _this.yellow3.visible=false;
        _this.yellow3.name = "yellow3";
        
        _this.orange3 = _this.add.sprite(762,255,'SG14_1_3orange');
    	_this.orange3.anchor.setTo(0.5);
        _this.orange3.scale.setTo(1,1);  
        _this.orange3.visible=false;
        _this.orange3.name = "orange3";
        
        _this.purple3 = _this.add.sprite(860,181,'SG14_1_3purple');
    	_this.purple3.anchor.setTo(0.5);
        _this.purple3.scale.setTo(1,1); 
        _this.purple3.visible=false;
        _this.purple3.name = "purple3";
        
        _this.blue3 = _this.add.sprite(860,219,'SG14_1_3blue');
    	_this.blue3.anchor.setTo(0.5);
        _this.blue3.scale.setTo(1,1); 
        _this.blue3.visible=false;
        _this.blue3.name = "blue3";
        
        _this.green3 = _this.add.sprite(861,255,'SG14_1_3green');
    	_this.green3.anchor.setTo(0.5);
        _this.green3.scale.setTo(1,1); 
       _this.green3.visible=false;
        _this.green3.name = "green3";
            
        _this.red4 = _this.add.sprite(369,330,'SG14_1_3red');
    	_this.red4.anchor.setTo(0.5);
        _this.red4.scale.setTo(1,1); 
        _this.red4.visible=false;
        _this.red4.name = "red4";
        
        _this.yellow4 = _this.add.sprite(368,368,'SG14_1_3yellow');
    	_this.yellow4.anchor.setTo(0.5);
        _this.yellow4.scale.setTo(1,1);  
        _this.yellow4.visible=false;
        _this.yellow4.name = "yellow4";
        
        _this.orange4 = _this.add.sprite(368,405,'SG14_1_3orange');
    	_this.orange4.anchor.setTo(0.5);
        _this.orange4.scale.setTo(1,1); 
        _this.orange4.visible=false;
        _this.orange4.name = "orange4";
        
        _this.purple4 = _this.add.sprite(467,330,'SG14_1_3purple');
    	_this.purple4.anchor.setTo(0.5);
        _this.purple4.scale.setTo(1,1); 
        _this.purple4.visible=false;
        _this.purple4.name = "purple4";
        
        _this.blue4 = _this.add.sprite(467,367,'SG14_1_3blue');
    	_this.blue4.anchor.setTo(0.5);
        _this.blue4.scale.setTo(1,1); 
        _this.blue4.visible=false;
        _this.blue4.name = "blue4";
        
        _this.green4 = _this.add.sprite(467,405,'SG14_1_3green');
    	_this.green4.anchor.setTo(0.5);
        _this.green4.scale.setTo(1,1);  
        _this.green4.visible=false;
        _this.green4.name = "green4";
        
        _this.red5 = _this.add.sprite(565,330,'SG14_1_3red');
    	_this.red5.anchor.setTo(0.5);
        _this.red5.scale.setTo(1,1);
        _this.red5.visible=false;
        _this.red5.name = "red5";
        
        _this.yellow5 = _this.add.sprite(565,367,'SG14_1_3yellow');
    	_this.yellow5.anchor.setTo(0.5);
        _this.yellow5.scale.setTo(1,1); 
        _this.yellow5.visible=false;
        _this.yellow5.name = "yellow5";
        
        _this.orange5 = _this.add.sprite(565,405,'SG14_1_3orange');
    	_this.orange5.anchor.setTo(0.5);
        _this.orange5.scale.setTo(1,1); 
        _this.orange5.visible=false;
        _this.orange5.name = "orange5";
        
        _this.purple5 = _this.add.sprite(664,330,'SG14_1_3purple');
    	_this.purple5.anchor.setTo(0.5);
        _this.purple5.scale.setTo(1,1); 
        _this.purple5.visible=false;
        _this.purple5.name = "purple5";
        
        _this.blue5 = _this.add.sprite(664,368,'SG14_1_3blue');
    	_this.blue5.anchor.setTo(0.5);
        _this.blue5.scale.setTo(1,1); 
        _this.blue5.visible=false;
        _this.blue5.name = "blue5";
        
        _this.green5 = _this.add.sprite(665,405,'SG14_1_3green');
    	_this.green5.anchor.setTo(0.5);
        _this.green5.scale.setTo(1,1);  
        _this.green5.visible=false;
        _this.green5.name = "green5";
        
        _this.red6 = _this.add.sprite(762,330,'SG14_1_3red');
    	_this.red6.anchor.setTo(0.5);
        _this.red6.scale.setTo(1,1);  
        _this.red6.visible=false;
        _this.red6.name = "red6";
        
        _this.yellow6 = _this.add.sprite(762,368,'SG14_1_3yellow');
    	_this.yellow6.anchor.setTo(0.5);
        _this.yellow6.scale.setTo(1,1);  
        _this.yellow6.visible=false;
        _this.yellow6.name = "yellow6";
        
        _this.orange6 = _this.add.sprite(762,405,'SG14_1_3orange');
    	_this.orange6.anchor.setTo(0.5);
        _this.orange6.scale.setTo(1,1);  
        _this.orange6.visible=false;
        _this.orange6.name = "orange6";
        
        _this.purple6 = _this.add.sprite(860,330,'SG14_1_3purple');
    	_this.purple6.anchor.setTo(0.5);
        _this.purple6.scale.setTo(1,1); 
        _this.purple6.visible=false;
        _this.purple6.name = "purple6";
        
        _this.blue6 = _this.add.sprite(860,367,'SG14_1_3blue');
    	_this.blue6.anchor.setTo(0.5);
        _this.blue6.scale.setTo(1,1); 
        _this.blue6.visible=false;
        _this.blue6.name = "blue6";
        
        _this.green6 = _this.add.sprite(861,405,'SG14_1_3green');
    	_this.green6.anchor.setTo(0.5);
        _this.green6.scale.setTo(1,1); 
        _this.green6.visible=false;
        _this.green6.name = "green6";
        
       
     
        _this.shapeGrp1.add(_this.red1);_this.shapeGrp1.add(_this.yellow1);_this.shapeGrp1.add(_this.orange1);_this.shapeGrp1.add(_this.purple1);
        _this.shapeGrp1.add(_this.blue1);_this.shapeGrp1.add(_this.green1);
        _this.shapeGrp1.x = -1000;
        var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
        
        _this.shapeGrp.add(_this.red2);_this.shapeGrp.add(_this.yellow2);
        _this.shapeGrp.add(_this.orange2);_this.shapeGrp.add(_this.purple2);_this.shapeGrp.add(_this.blue2);_this.shapeGrp.add(_this.green2);
        _this.shapeGrp.add(_this.red3);_this.shapeGrp.add(_this.yellow3);_this.shapeGrp.add(_this.orange3);_this.shapeGrp.add(_this.purple3);
        _this.shapeGrp.add(_this.blue3);_this.shapeGrp.add(_this.green3);_this.shapeGrp.add(_this.red4);_this.shapeGrp.add(_this.yellow4);
        _this.shapeGrp.add(_this.orange4);_this.shapeGrp.add(_this.purple4);_this.shapeGrp.add(_this.blue4);_this.shapeGrp.add(_this.green4);
        _this.shapeGrp.add(_this.red5);_this.shapeGrp.add(_this.yellow5);_this.shapeGrp.add(_this.orange5);_this.shapeGrp.add(_this.purple5);
        _this.shapeGrp.add(_this.blue5);_this.shapeGrp.add(_this.green5);_this.shapeGrp.add(_this.red6);_this.shapeGrp.add(_this.yellow6);
        _this.shapeGrp.add(_this.orange6);_this.shapeGrp.add(_this.purple6);_this.shapeGrp.add(_this.blue6);_this.shapeGrp.add(_this.green6);
       
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(285, 60, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1";

        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(255, 120, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";

        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(285, 170, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";

        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(345, 60, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";

        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(380, 110, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";

        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(345,170, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(480, 60, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";

        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(450, 110, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";

        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(480, 170, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";

        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(550, 60, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";

        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(580, 110, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";

        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(540,165, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(675, 60, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";

        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(640, 110, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";

        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(670, 170, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";

        _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(730, 70, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape16";

        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(770, 120, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";

        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(730,160, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";
         
        _this.graphics19 = _this.add.graphics(100, 100);       
        _this.graphics19.lineStyle(2, 0x0000FF, 1);
        _this.graphics19.drawRect(290, 215, 5, 5);
        _this.graphics19.alpha=0;
        _this.graphics19.name = "shape19";

        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(250, 260, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";

        _this.graphics21 = _this.add.graphics(100, 100);       
        _this.graphics21.lineStyle(2, 0x0000FF, 1);
        _this.graphics21.drawRect(290, 320, 5, 5);
        _this.graphics21.alpha=0;
        _this.graphics21.name = "shape21";

        _this.graphics22 = _this.add.graphics(100, 100);       
        _this.graphics22.lineStyle(2, 0x0000FF, 1);
        _this.graphics22.drawRect(350, 210, 5, 5);
        _this.graphics22.alpha=0;
        _this.graphics22.name = "shape22";

        _this.graphics23 = _this.add.graphics(100, 100);       
        _this.graphics23.lineStyle(2, 0x0000FF, 1);
        _this.graphics23.drawRect(380,260, 5, 5);
        _this.graphics23.alpha=0;
        _this.graphics23.name = "shape23";

        _this.graphics24 = _this.add.graphics(100, 100);       
        _this.graphics24.lineStyle(2, 0x0000FF, 1);
        _this.graphics24.drawRect(340,310, 5, 5);
        _this.graphics24.alpha=0;
        _this.graphics24.name = "shape24";
        
        _this.graphics25 = _this.add.graphics(100, 100);       
        _this.graphics25.lineStyle(2, 0x0000FF, 1);
        _this.graphics25.drawRect(480, 210, 5, 5);
        _this.graphics25.alpha=0;
        _this.graphics25.name = "shape25";

        _this.graphics26 = _this.add.graphics(100, 100);       
        _this.graphics26.lineStyle(2, 0x0000FF, 1);
        _this.graphics26.drawRect(450, 260, 5, 5);
        _this.graphics26.alpha=0;
        _this.graphics26.name = "shape26";

        _this.graphics27 = _this.add.graphics(100, 100);       
        _this.graphics27.lineStyle(2, 0x0000FF, 1);
        _this.graphics27.drawRect(480, 320, 5, 5);
        _this.graphics27.alpha=0;
        _this.graphics27.name = "shape27";

        _this.graphics28 = _this.add.graphics(100, 100);       
        _this.graphics28.lineStyle(2, 0x0000FF, 1);
        _this.graphics28.drawRect(550, 210, 5, 5);
        _this.graphics28.alpha=0;
        _this.graphics28.name = "shape28";

        _this.graphics29 = _this.add.graphics(100, 100);       
        _this.graphics29.lineStyle(2, 0x0000FF, 1);
        _this.graphics29.drawRect(570, 260, 5, 5);
        _this.graphics29.alpha=0;
        _this.graphics29.name = "shape29";

        _this.graphics30 = _this.add.graphics(100, 100);       
        _this.graphics30.lineStyle(2, 0x0000FF, 1);
        _this.graphics30.drawRect(550,320, 5, 5);
        _this.graphics30.alpha=0;
        _this.graphics30.name = "shape30";
        
        _this.graphics31 = _this.add.graphics(100, 100);       
        _this.graphics31.lineStyle(2, 0x0000FF, 1);
        _this.graphics31.drawRect(675, 210, 5, 5);
        _this.graphics31.alpha=0;
        _this.graphics31.name = "shape31";

        _this.graphics32 = _this.add.graphics(100, 100);       
        _this.graphics32.lineStyle(2, 0x0000FF, 1);
        _this.graphics32.drawRect(650, 260, 5, 5);
        _this.graphics32.alpha=0;
        _this.graphics32.name = "shape32";

        _this.graphics33 = _this.add.graphics(100, 100);       
        _this.graphics33.lineStyle(2, 0x0000FF, 1);
        _this.graphics33.drawRect(675, 320, 5, 5);
        _this.graphics33.alpha=0;
        _this.graphics33.name = "shape33";

        _this.graphics34 = _this.add.graphics(100, 100);       
        _this.graphics34.lineStyle(2, 0x0000FF, 1);
        _this.graphics34.drawRect(730, 220, 5, 5);
        _this.graphics34.alpha=0;
        _this.graphics34.name = "shape34";

        _this.graphics35 = _this.add.graphics(100, 100);       
        _this.graphics35.lineStyle(2, 0x0000FF, 1);
        _this.graphics35.drawRect(770, 270, 5, 5);
        _this.graphics35.alpha=0;
        _this.graphics35.name = "shape35";

        _this.graphics36 = _this.add.graphics(100, 100);       
        _this.graphics36.lineStyle(2, 0x0000FF, 1);
        _this.graphics36.drawRect(730,320, 5, 5);
        _this.graphics36.alpha=0;
        _this.graphics36.name = "shape36";
        
        
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics16);_this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);
        _this.GraphicGrp.add(_this.graphics19);_this.GraphicGrp.add(_this.graphics20);_this.GraphicGrp.add(_this.graphics21); 
        _this.GraphicGrp.add(_this.graphics22);_this.GraphicGrp.add(_this.graphics23);_this.GraphicGrp.add(_this.graphics24);
        _this.GraphicGrp.add(_this.graphics25);_this.GraphicGrp.add(_this.graphics26);_this.GraphicGrp.add(_this.graphics27);
        _this.GraphicGrp.add(_this.graphics28);_this.GraphicGrp.add(_this.graphics29);_this.GraphicGrp.add(_this.graphics30); 
        _this.GraphicGrp.add(_this.graphics31);_this.GraphicGrp.add(_this.graphics32);_this.GraphicGrp.add(_this.graphics33); 
        _this.GraphicGrp.add(_this.graphics34);_this.GraphicGrp.add(_this.graphics35);_this.GraphicGrp.add(_this.graphics36);
        
        _this.number=30;
    },
       
   

    onDragStart:function(target){
    
        this.world.bringToTop(_this.dragGrp);
        // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level14.1.3_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
         _this.vx = target.x;    
         _this.vy = target.y; 
         
         target.input.enableDrag();
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();             
            
       
     target.events.onDragStop.add(function(target)
    {
        target.x = _this.vx;   
        target.y = _this.vy;
         
        _this.click2 = this.add.audio('dragsnapsound');
         _this.click2.play();
          if(_this.questioNo==1)
              {
                 
                  if(_this.checkOverlap(_this.red,_this.graphics1) && (_this.canadd1==false))
                 {
                       _this.correct++;
                       console.log("matched "+_this.correct);
                      _this.red1.visible=true;
                      _this.canadd1=true;
              
                 }
                else if(_this.checkOverlap(_this.yellow,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow1.visible=true;
                     _this.canadd2=true;
                     
                }
                else if(_this.checkOverlap(_this.orange,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange1.visible=true;
                     _this.canadd3=true;
                    
                }
               else if(_this.checkOverlap(_this.purple,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple1.visible=true;
                     _this.canadd4=true;
                    
                }
                else if(_this.checkOverlap(_this.blue,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue1.visible=true;
                     _this.canadd5=true;
                    
                }
               else if(_this.checkOverlap(_this.green,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green1.visible=true;
                     _this.canadd6=true;
                     
                }
                else if(_this.checkOverlap(_this.red,_this.graphics7) && (_this.canadd7==false))
                 {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.red2.visible=true;
                      _this.canadd7=true;
                     
               
                 }
                else if(_this.checkOverlap(_this.yellow,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow2.visible=true;
                     _this.canadd8=true;
                     
                }
                else if(_this.checkOverlap(_this.orange,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange2.visible=true;
                     _this.canadd9=true;
                     
                }
                else if(_this.checkOverlap(_this.purple,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple2.visible=true;
                     _this.canadd10=true;
                     
                }
                else if(_this.checkOverlap(_this.blue,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue2.visible=true;
                     _this.canadd11=true;
                     
                }
               else  if(_this.checkOverlap(_this.green,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green2.visible=true;
                     _this.canadd12=true;
                     
                }
               else if(_this.checkOverlap(_this.red,_this.graphics13) && (_this.canadd13==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.red3.visible=true;
                       _this.canadd13=true;
               
                 }
               else if(_this.checkOverlap(_this.yellow,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow3.visible=true;
                     _this.canadd14=true;
                    
                }
               else if(_this.checkOverlap(_this.orange,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange3.visible=true;
                     _this.canadd15=true;
                    
                }
               else if(_this.checkOverlap(_this.purple,_this.graphics16) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple3.visible=true;
                     _this.canadd16=true;
                     
                }
               else if(_this.checkOverlap(_this.blue,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue3.visible=true;
                     _this.canadd17=true;
                     
                }
              else if(_this.checkOverlap(_this.green,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green3.visible=true;
                     _this.canadd18=true;
                    
                }
               else if(_this.checkOverlap(_this.red,_this.graphics19) && (_this.canadd19==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.red4.visible=true;
                     _this.canadd19=true;
                      
               
                }
              else if(_this.checkOverlap(_this.yellow,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow4.visible=true;
                     _this.canadd20=true;
                    
                }
              else if(_this.checkOverlap(_this.orange,_this.graphics21) && (_this.canadd21==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange4.visible=true;
                     _this.canadd21=true;
                     
                }
               else if(_this.checkOverlap(_this.purple,_this.graphics22) && (_this.canadd22==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple4.visible=true;
                     _this.canadd22=true;
                     
                }
              else if(_this.checkOverlap(_this.blue,_this.graphics23) && (_this.canadd23==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue4.visible=true;
                     _this.canadd23=true;
                    
                }
              else if(_this.checkOverlap(_this.green,_this.graphics24) && (_this.canadd24==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green4.visible=true;
                     _this.canadd24=true;
                    
                }
              else if(_this.checkOverlap(_this.red,_this.graphics25) && (_this.canadd25==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.red5.visible=true;
                      _this.canadd25=true;
               
                }
             else if(_this.checkOverlap(_this.yellow,_this.graphics26) && (_this.canadd26==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow5.visible=true;
                      _this.canadd26=true;
                }
              else if(_this.checkOverlap(_this.orange,_this.graphics27) && (_this.canadd27==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange5.visible=true;
                      _this.canadd27=true;
                }
              else if(_this.checkOverlap(_this.purple,_this.graphics28) && (_this.canadd28==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple5.visible=true;
                     _this.canadd28=true;
                }
              else if(_this.checkOverlap(_this.blue,_this.graphics29) && (_this.canadd29==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue5.visible=true;
                      _this.canadd29=true;
                }
              else if(_this.checkOverlap(_this.green,_this.graphics30) && (_this.canadd30==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green5.visible=true;
                      _this.canadd30=true;
                }
             else if(_this.checkOverlap(_this.red,_this.graphics31) && (_this.canadd31==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.red6.visible=true;
                      _this.canadd31=true;
               
                }
             else if(_this.checkOverlap(_this.yellow,_this.graphics32) && (_this.canadd32==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellow6.visible=true;
                     _this.canadd32=true;
                }
             else if(_this.checkOverlap(_this.orange,_this.graphics33) && (_this.canadd33==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.orange6.visible=true;
                      _this.canadd33=true;
                }
             else if(_this.checkOverlap(_this.purple,_this.graphics34) && (_this.canadd34==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.purple6.visible=true;
                     _this.canadd34=true;
                }
             else if(_this.checkOverlap(_this.blue,_this.graphics35) && (_this.canadd35==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.blue6.visible=true;
                      _this.canadd35=true;
                }
             else if(_this.checkOverlap(_this.green,_this.graphics36) && (_this.canadd36==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.green6.visible=true;
                      _this.canadd36=true;
                }
                 
             else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }
         if(_this.questioNo==2)
             {
                 if(_this.checkOverlap(_this.hexagon,_this.graphics1) && (_this.canadd1==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon1.visible=true;
                     _this.canadd1=true;
                } 
                else if(_this.checkOverlap(_this.hexagon,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon2.visible=true;
                     _this.canadd2=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon3.visible=true;
                     _this.canadd3=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon4.visible=true;
                     _this.canadd4=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon5.visible=true;
                     _this.canadd5=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon6.visible=true;
                     _this.canadd6=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics7) && (_this.canadd7==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon7.visible=true;
                     _this.canadd7=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon8.visible=true;
                     _this.canadd8=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon9.visible=true;
                     _this.canadd9=true;
                } 
                  else if(_this.checkOverlap(_this.hexagon,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.hexagon10.visible=true;
                     _this.canadd10=true;
                } 
                    else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
             }
         if(_this.questioNo==3)
             {
                 if(_this.checkOverlap(_this.yellowtriangle,_this.graphics1) && (_this.canadd1==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle1.visible=true;
                     _this.canadd1=true;
                } 
                else if(_this.checkOverlap(_this.redtriangle,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle1.visible=true;
                     _this.canadd2=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle2.visible=true;
                     _this.canadd3=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle2.visible=true;
                     _this.canadd4=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle3.visible=true;
                     _this.canadd5=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle3.visible=true;
                     _this.canadd6=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics7) && (_this.canadd7==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle4.visible=true;
                     _this.canadd7=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle4.visible=true;
                     _this.canadd8=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle5.visible=true;
                     _this.canadd9=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle5.visible=true;
                     _this.canadd10=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics11) && (_this.canadd11==false))
                {
                    console.log("!!!!! 11 ");
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle6.visible=true;
                     _this.canadd11=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics12) && (_this.canadd12==false))
                {
                     
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle6.visible=true;
                     _this.canadd12=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics13) && (_this.canadd13==false))
                {
                    console.log("##### 13 ");
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle7.visible=true;
                     _this.canadd13=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle7.visible=true;
                     _this.canadd14=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics16) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle8.visible=true;
                     _this.canadd15=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics15) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle8.visible=true;
                     _this.canadd16=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle9.visible=true;
                     _this.canadd17=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle9.visible=true;
                     _this.canadd18=true;
                } 
                  else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics19) && (_this.canadd19==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.yellowtriangle10.visible=true;
                     _this.canadd19=true;
                } 
                  else if(_this.checkOverlap(_this.redtriangle,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.redtriangle10.visible=true;
                     _this.canadd20=true;
                } 
              else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }
         if(_this.questioNo==4)
             {
                 if(_this.checkOverlap(_this.orange3,_this.graphics1) && (_this.canadd1==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape1.visible=true;
                     _this.canadd1=true;
                } 
                else if(_this.checkOverlap(_this.orange1,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                } 
                  else if(_this.checkOverlap(_this.orange1,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape3.visible=true;
                     _this.canadd3=true;
                } 
                  else if(_this.checkOverlap(_this.orange3,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape4.visible=true;
                     _this.canadd4=true;
                } 
                  else if(_this.checkOverlap(_this.orange2,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                } 
                  else if(_this.checkOverlap(_this.orange2,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape6.visible=true;
                     _this.canadd6=true;
                } 
                 /* else if(_this.checkOverlap(_this.orange1,_this.graphics7) && (_this.canadd7==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape7.visible=true;
                     _this.canadd7=true;
                } 
                  else if(_this.checkOverlap(_this.orange3,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape8.visible=true;
                     _this.canadd8=true;
                } 
                  else if(_this.checkOverlap(_this.orange2,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape9.visible=true;
                     _this.canadd9=true;
                } 
                  else if(_this.checkOverlap(_this.orange2,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape10.visible=true;
                     _this.canadd10=true;
                } 
                  else if(_this.checkOverlap(_this.orange3,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                } 
                  else if(_this.checkOverlap(_this.orange1,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape12.visible=true;
                     _this.canadd12=true;
                } */
                  else if(_this.checkOverlap(_this.purple3,_this.graphics13) && (_this.canadd13==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape13.visible=true;
                     _this.canadd13=true;
                } 
                  else if(_this.checkOverlap(_this.purple1,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape14.visible=true;
                     _this.canadd14=true;
                } 
                  else if(_this.checkOverlap(_this.purple2,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape15.visible=true;
                     _this.canadd15=true;
                } 
                  else if(_this.checkOverlap(_this.purple2,_this.graphics16) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape16.visible=true;
                     _this.canadd16=true;
                } 
                  else if(_this.checkOverlap(_this.purple1,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape17.visible=true;
                     _this.canadd17=true;
                } 
                  else if(_this.checkOverlap(_this.purple3,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape18.visible=true;
                     _this.canadd18=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa1,_this.graphics19) && (_this.canadd19==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape19.visible=true;
                     _this.canadd19=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa2,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape20.visible=true;
                     _this.canadd20=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa2,_this.graphics21) && (_this.canadd21==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape21.visible=true;
                     _this.canadd21=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa1,_this.graphics22) && (_this.canadd22==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape22.visible=true;
                     _this.canadd22=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa1,_this.graphics23) && (_this.canadd23==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape23.visible=true;
                     _this.canadd23=true;
                } 
                  else if(_this.checkOverlap(_this.yellowhexa2,_this.graphics24) && (_this.canadd24==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape24.visible=true;
                     _this.canadd24=true;
                } 
                  else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
             }
            if(_this.questioNo==5)
              {
                 
                 /*
                 if(_this.checkOverlap(_this.square,_this.graphics1) && (_this.canadd1==false))
                 {
                       _this.correct++;
                       console.log("matched "+_this.correct);
                      _this.shape1.visible=true;
                      _this.canadd1=true;
              
                 }
                else if(_this.checkOverlap(_this.square,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                     
                }
                else if(_this.checkOverlap(_this.square,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape3.visible=true;
                     _this.canadd3=true;
                    
                }
               else if(_this.checkOverlap(_this.square,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape4.visible=true;
                     _this.canadd4=true;
                    
                }
                else if(_this.checkOverlap(_this.square,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                    
                }
               else if(_this.checkOverlap(_this.square,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape6.visible=true;
                     _this.canadd6=true;
                     
                }*/
                 if(_this.checkOverlap(_this.square,_this.graphics7) && (_this.canadd7==false))
                 {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape7.visible=true;
                      _this.canadd7=true;
                     
               
                 }
                else if(_this.checkOverlap(_this.square,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape8.visible=true;
                     _this.canadd8=true;
                     
                }
                else if(_this.checkOverlap(_this.square,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape9.visible=true;
                     _this.canadd9=true;
                     
                }
              /*  else if(_this.checkOverlap(_this.square,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape10.visible=true;
                     _this.canadd10=true;
                     
                }
                else if(_this.checkOverlap(_this.square,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                     
                }
               else  if(_this.checkOverlap(_this.square,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape12.visible=true;
                     _this.canadd12=true;
                     
                }*/
               else if(_this.checkOverlap(_this.square,_this.graphics13) && (_this.canadd13==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape13.visible=true;
                       _this.canadd13=true;
               
                 }
               else if(_this.checkOverlap(_this.square,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape14.visible=true;
                     _this.canadd14=true;
                    
                }
               else if(_this.checkOverlap(_this.square,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape15.visible=true;
                     _this.canadd15=true;
                    
                }
               /*else if(_this.checkOverlap(_this.square,_this.graphics16) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape16.visible=true;
                     _this.canadd16=true;
                     
                }
               else if(_this.checkOverlap(_this.square,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape17.visible=true;
                     _this.canadd17=true;
                     
                }
              else if(_this.checkOverlap(_this.square,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape18.visible=true;
                     _this.canadd18=true;
                    
                }*/
               else if(_this.checkOverlap(_this.blueshape,_this.graphics19) && (_this.canadd19==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape19.visible=true;
                     _this.canadd19=true;
                      
               
                }
              else if(_this.checkOverlap(_this.blueshape,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape20.visible=true;
                     _this.canadd20=true;
                    
                }
              else if(_this.checkOverlap(_this.blueshape,_this.graphics21) && (_this.canadd21==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape21.visible=true;
                     _this.canadd21=true;
                     
                }
               else if(_this.checkOverlap(_this.blueshape,_this.graphics22) && (_this.canadd22==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape22.visible=true;
                     _this.canadd22=true;
                     
                }
              else if(_this.checkOverlap(_this.blueshape,_this.graphics23) && (_this.canadd23==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape23.visible=true;
                     _this.canadd23=true;
                    
                }
              else if(_this.checkOverlap(_this.blueshape,_this.graphics24) && (_this.canadd24==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape24.visible=true;
                     _this.canadd24=true;
                    
                }
              else if(_this.checkOverlap(_this.hexa,_this.graphics25) && (_this.canadd25==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape25.visible=true;
                      _this.canadd25=true;
               
                }
             else if(_this.checkOverlap(_this.hexa,_this.graphics26) && (_this.canadd26==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape26.visible=true;
                      _this.canadd26=true;
                }
              else if(_this.checkOverlap(_this.hexa,_this.graphics27) && (_this.canadd27==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape27.visible=true;
                      _this.canadd27=true;
                }
             /* else if(_this.checkOverlap(_this.hexa,_this.graphics28) && (_this.canadd28==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape28.visible=true;
                     _this.canadd28=true;
                }
              else if(_this.checkOverlap(_this.hexa,_this.graphics29) && (_this.canadd29==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape29.visible=true;
                      _this.canadd29=true;
                }
              else if(_this.checkOverlap(_this.hexa,_this.graphics30) && (_this.canadd30==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape30.visible=true;
                      _this.canadd30=true;
                }*/
             else if(_this.checkOverlap(_this.greenright,_this.graphics31) && (_this.canadd31==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape31.visible=true;
                      _this.canadd31=true;
               
                }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics32) && (_this.canadd32==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape32.visible=true;
                     _this.canadd32=true;
                }
             else if(_this.checkOverlap(_this.greenright,_this.graphics33) && (_this.canadd33==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape33.visible=true;
                      _this.canadd33=true;
                }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics34) && (_this.canadd34==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape34.visible=true;
                     _this.canadd34=true;
                }
             else if(_this.checkOverlap(_this.greenright,_this.graphics35) && (_this.canadd35==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape35.visible=true;
                      _this.canadd35=true;
                }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics36) && (_this.canadd36==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape36.visible=true;
                      _this.canadd36=true;
                }
             else if(_this.checkOverlap(_this.greenright,_this.graphics37) && (_this.canadd37==false))
                 {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape37.visible=true;
                       _this.canadd37=true;
               
                 }
            else if(_this.checkOverlap(_this.greenleft,_this.graphics38) && (_this.canadd38==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape38.visible=true;
                     _this.canadd38=true;
                }
            else if(_this.checkOverlap(_this.greenright,_this.graphics39) && (_this.canadd39==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape39.visible=true;
                      _this.canadd39=true;
                }
           else if(_this.checkOverlap(_this.greenleft,_this.graphics40) && (_this.canadd40==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape40.visible=true;
                     _this.canadd40=true;
                }
            else if(_this.checkOverlap(_this.greenright,_this.graphics41) && (_this.canadd41==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape41.visible=true;
                      _this.canadd41=true;
                }
            else if(_this.checkOverlap(_this.greenleft,_this.graphics42) && (_this.canadd42==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape42.visible=true;
                      _this.canadd42=true;
                }
          /* 
          else if(_this.checkOverlap(_this.greenright,_this.graphics43) && (_this.canadd43==false))
                 {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape43.visible=true;
                       _this.canadd43=true;
               
                 }
           else if(_this.checkOverlap(_this.greenleft,_this.graphics44) && (_this.canadd44==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape44.visible=true;
                      _this.canadd44=true;
                }
           else if(_this.checkOverlap(_this.greenright,_this.graphics45) && (_this.canadd45==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape45.visible=true;
                      _this.canadd45=true;
                }
           else if(_this.checkOverlap(_this.greenleft,_this.graphics46) && (_this.canadd46==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape46.visible=true;
                      _this.canadd46=true;
                }
            else     if(_this.checkOverlap(_this.greenright,_this.graphics47) && (_this.canadd47==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape47.visible=true;
                      _this.canadd47=true;
                }
            else if(_this.checkOverlap(_this.greenleft,_this.graphics48) && (_this.canadd48==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape48.visible=true;
                      _this.canadd48=true;
                }
            else if(_this.checkOverlap(_this.greenright,_this.graphics49) && (_this.canadd49==false))
                 {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape49.visible=true;         
                      _this.canadd49=true;
                 }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics50) && (_this.canadd50==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape50.visible=true;
                     _this.canadd50=true;
                }
             else if(_this.checkOverlap(_this.greenright,_this.graphics51) && (_this.canadd51==false))
                {
                    _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape51.visible=true;
                      _this.canadd51=true;
                }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics52) && (_this.canadd52==false))
                {
                    _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape52.visible=true;
                      _this.canadd52=true;
                }
             else if(_this.checkOverlap(_this.greenright,_this.graphics53) && (_this.canadd53==false))
                {
                    _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape53.visible=true;
                      _this.canadd53=true;
                }
             else if(_this.checkOverlap(_this.greenleft,_this.graphics54) && (_this.canadd54==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape54.visible=true;
                      _this.canadd54=true;
                } */
                 
             else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }
         if(_this.questioNo==6)
              {
                 
                  if(_this.checkOverlap(_this.blue1,_this.graphics1) && (_this.canadd1==false))
                 {
                       _this.correct++;
                       console.log("matched "+_this.correct);
                      _this.shape1.visible=true;
                      _this.canadd1=true;
              
                 }
                else if(_this.checkOverlap(_this.blue1,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                     
                }
               
               else if(_this.checkOverlap(_this.blue1,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape4.visible=true;
                     _this.canadd4=true;
                    
                }
                else if(_this.checkOverlap(_this.blue1,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                    
                }
             
                else if(_this.checkOverlap(_this.green1,_this.graphics7) && (_this.canadd7==false))
                 {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape7.visible=true;
                      _this.canadd7=true;
                     
               
                 }
                else if(_this.checkOverlap(_this.green1,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape8.visible=true;
                     _this.canadd8=true;
                     
                }
                else if(_this.checkOverlap(_this.redpentagon1,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                     
                }
               else  if(_this.checkOverlap(_this.redpentagon2,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape12.visible=true;
                     _this.canadd12=true;
                     
                }
               else if(_this.checkOverlap(_this.redpentagon1,_this.graphics13) && (_this.canadd13==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape13.visible=true;
                       _this.canadd13=true;
               
                 }
               else if(_this.checkOverlap(_this.redpentagon2,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape14.visible=true;
                     _this.canadd14=true;
                    
                }
               else if(_this.checkOverlap(_this.redpentagon1,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape15.visible=true;
                     _this.canadd15=true;
                    
                }
               else if(_this.checkOverlap(_this.orangepentagon1,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape17.visible=true;
                     _this.canadd17=true;
                     
                }
              else if(_this.checkOverlap(_this.orangepentagon2,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape18.visible=true;
                     _this.canadd18=true;
                    
                }
               else if(_this.checkOverlap(_this.orangepentagon1,_this.graphics19) && (_this.canadd19==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape19.visible=true;
                     _this.canadd19=true;
                      
               
                }
              else if(_this.checkOverlap(_this.orangepentagon2,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape20.visible=true;
                     _this.canadd20=true;
                    
                }
              else if(_this.checkOverlap(_this.redpentagon1,_this.graphics23) && (_this.canadd23==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape23.visible=true;
                     _this.canadd23=true;
                    
                }
              else if(_this.checkOverlap(_this.redpentagon2,_this.graphics24) && (_this.canadd24==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape24.visible=true;
                     _this.canadd24=true;
                    
                }
              else if(_this.checkOverlap(_this.redpentagon1,_this.graphics25) && (_this.canadd25==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape25.visible=true;
                      _this.canadd25=true;
               
                }
             else if(_this.checkOverlap(_this.redpentagon2,_this.graphics26) && (_this.canadd26==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape26.visible=true;
                      _this.canadd26=true;
                }
              else if(_this.checkOverlap(_this.redpentagon1,_this.graphics27) && (_this.canadd27==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape27.visible=true;
                      _this.canadd27=true;
                }
                else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }
         if(_this.questioNo==7)
              {
                 
                  if(_this.checkOverlap(_this.yellowtriangle,_this.graphics1) && (_this.canadd1==false))
                 {
                       _this.correct++;
                       console.log("matched "+_this.correct);
                      _this.shape1.visible=true;
                      _this.canadd1=true;
              
                 }
                else if(_this.checkOverlap(_this.redtriangle,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape3.visible=true;
                     _this.canadd3=true;
                    
                }
               else if(_this.checkOverlap(_this.redtriangle,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape4.visible=true;
                     _this.canadd4=true;
                    
                }
                else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                    
                }
               else if(_this.checkOverlap(_this.redtriangle,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape6.visible=true;
                     _this.canadd6=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics7) && (_this.canadd7==false))
                 {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape7.visible=true;
                      _this.canadd7=true;
                     
               
                 }
                else if(_this.checkOverlap(_this.redtriangle,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape8.visible=true;
                     _this.canadd8=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape9.visible=true;
                     _this.canadd9=true;
                     
                }
                else if(_this.checkOverlap(_this.redtriangle,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape10.visible=true;
                     _this.canadd10=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                     
                }
               else  if(_this.checkOverlap(_this.redtriangle,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape12.visible=true;
                     _this.canadd12=true;
                     
                }
               else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics13) && (_this.canadd13==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape13.visible=true;
                       _this.canadd13=true;
               
                 }
               else if(_this.checkOverlap(_this.redtriangle,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape14.visible=true;
                     _this.canadd14=true;
                    
                }
               else if(_this.checkOverlap(_this.yellowtriangle,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape15.visible=true;
                     _this.canadd15=true;
                    
                }
               else if(_this.checkOverlap(_this.redtriangle,_this.graphics16) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape16.visible=true;
                     _this.canadd16=true;
                     
                }
               
              else if(_this.checkOverlap(_this.bluesquare,_this.graphics25) && (_this.canadd25==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape25.visible=true;
                      _this.canadd25=true;
               
                }
             else if(_this.checkOverlap(_this.lbluesquare,_this.graphics26) && (_this.canadd26==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape26.visible=true;
                      _this.canadd26=true;
                }
              else if(_this.checkOverlap(_this.bluesquare,_this.graphics27) && (_this.canadd27==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape27.visible=true;
                      _this.canadd27=true;
                }
              else if(_this.checkOverlap(_this.lbluesquare,_this.graphics28) && (_this.canadd28==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape28.visible=true;
                     _this.canadd28=true;
                }
              else if(_this.checkOverlap(_this.bluesquare,_this.graphics29) && (_this.canadd29==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape29.visible=true;
                      _this.canadd29=true;
                }
              else if(_this.checkOverlap(_this.lbluesquare,_this.graphics30) && (_this.canadd30==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape30.visible=true;
                      _this.canadd30=true;
                }
             else if(_this.checkOverlap(_this.bluesquare,_this.graphics31) && (_this.canadd31==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape31.visible=true;
                      _this.canadd31=true;
               
                }
             else if(_this.checkOverlap(_this.lbluesquare,_this.graphics32) && (_this.canadd32==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape32.visible=true;
                     _this.canadd32=true;
                }
                  else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }
                
               if(_this.questioNo==8)
              {

                  if(_this.checkOverlap(_this.yellowPenta,_this.graphics2) && (_this.canadd1==false))
                 {
                       _this.correct++;
                       console.log("matched "+_this.correct);
                      _this.shape3.visible=true;
                      _this.canadd1=true;
              
                 }
                else if(_this.checkOverlap(_this.yellowPenta,_this.graphics1) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowPenta,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape1.visible=true;
                     _this.canadd3=true;
                    
                }
               else if(_this.checkOverlap(_this.yellowPenta,_this.graphics4) && (_this.canadd4==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape4.visible=true;
                     _this.canadd4=true;
                    
                }
                else if(_this.checkOverlap(_this.yellowPenta,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                    
                }
               else if(_this.checkOverlap(_this.yellowPenta,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape6.visible=true;
                     _this.canadd6=true;
                     
                }
                else if(_this.checkOverlap(_this.yellowPenta,_this.graphics7) && (_this.canadd7==false))
                 {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape7.visible=true;
                      _this.canadd7=true;
                     
               
                 }
                else if(_this.checkOverlap(_this.yellowPenta,_this.graphics8) && (_this.canadd8==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape8.visible=true;
                     _this.canadd8=true;
                     
                }
                else if(_this.checkOverlap(_this.purplePenta,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape9.visible=true;
                     _this.canadd9=true;
                     
                }
                else if(_this.checkOverlap(_this.purplePenta,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape10.visible=true;
                     _this.canadd10=true;
                     
                }
                else if(_this.checkOverlap(_this.purplePenta,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                     
                }
               else  if(_this.checkOverlap(_this.purplePenta,_this.graphics12) && (_this.canadd12==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape12.visible=true;
                     _this.canadd12=true;
                     
                }
               else if(_this.checkOverlap(_this.purplePenta,_this.graphics13) && (_this.canadd13==false))
                {
                      _this.correct++;
                      console.log("matched "+_this.correct);
                      _this.shape13.visible=true;
                       _this.canadd13=true;
               
                 }
               else if(_this.checkOverlap(_this.purplePenta,_this.graphics14) && (_this.canadd14==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape14.visible=true;
                     _this.canadd14=true;
                    
                }
               else if(_this.checkOverlap(_this.purplePenta,_this.graphics15) && (_this.canadd15==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape15.visible=true;
                     _this.canadd15=true;
                    
                }
               else if(_this.checkOverlap(_this.purplePenta,_this.graphics16) && (_this.canadd16==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape16.visible=true;
                     _this.canadd16=true;
                     
                }
             else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
              
              }  
           if(_this.questioNo==9)
             {
                 if(_this.checkOverlap(_this.octagon,_this.graphics1) && (_this.canadd1==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape1.visible=true;
                     _this.canadd1=true;
                } 
                else if(_this.checkOverlap(_this.octagon,_this.graphics2) && (_this.canadd2==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape2.visible=true;
                     _this.canadd2=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics3) && (_this.canadd3==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape3.visible=true;
                     _this.canadd3=true;
                } 
                
                  else if(_this.checkOverlap(_this.octagon,_this.graphics5) && (_this.canadd5==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape5.visible=true;
                     _this.canadd5=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics6) && (_this.canadd6==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape6.visible=true;
                     _this.canadd6=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics7) && (_this.canadd7==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape7.visible=true;
                     _this.canadd7=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics9) && (_this.canadd9==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape9.visible=true;
                     _this.canadd9=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics10) && (_this.canadd10==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape10.visible=true;
                     _this.canadd10=true;
                } 
                  else if(_this.checkOverlap(_this.octagon,_this.graphics11) && (_this.canadd11==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape11.visible=true;
                     _this.canadd11=true;
                } 
                  else if(_this.checkOverlap(_this.purplesquare,_this.graphics17) && (_this.canadd17==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape17.visible=true;
                     _this.canadd17=true;
                } 
                  else if(_this.checkOverlap(_this.purplesquare,_this.graphics18) && (_this.canadd18==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape18.visible=true;
                     _this.canadd18=true;
                } 
                  else if(_this.checkOverlap(_this.purplesquare,_this.graphics20) && (_this.canadd20==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape20.visible=true;
                     _this.canadd20=true;
                } 
                  else if(_this.checkOverlap(_this.purplesquare,_this.graphics21) && (_this.canadd21==false))
                {
                     _this.correct++;
                      console.log("matched "+_this.correct);
                     _this.shape21.visible=true;
                     _this.canadd21=true;
                } 
                  else if(_this.checkOverlap(target,_this.emptygrid))
               {
                        _this.shake.shake(10, target);
                        _this.wmusic = _this.add.audio('waudio');
		                _this.wmusic.play();
               } 
             }
         if(_this.correct == _this.number)
                 {
                      console.log("dddd" +_this.correct);
                      _this.dragGrp.visible=false;
                      _this.grid.visible=true;
                      //_this.screen.frame=1;
                     // _this.glow = _this.screen.animations.add('walk');                   
                     // _this.glow.play(3,true);
                      //_this.time.events.add(1000,function(){
                       _this.correctAns();
                   // },_this);
                     
                 }  
          
        target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy; 
        
     },_this);

         
            
  
 },

gotoSecondQuestion:function()
    {
        _this.questioNo = 2;
        _this.slideGrp = _this.add.group();
        
        _this.screen = _this.add.sprite(670,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1,1); 
        
        _this.emptygrid = _this.add.sprite(667,293,'SG14_1_3emptygrid2');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
         
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
         _this.grid = _this.add.sprite(667,293,'SG14_1_3grid2');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
       
        _this.dragGrp = _this.add.group();
        
        _this.hexagon = _this.add.sprite(230,280,'SG14_1_3hexagon');
    	_this.hexagon.anchor.setTo(0.5);
        _this.hexagon.scale.setTo(1,1); 
        _this.hexagon.inputEnabled = true;
        _this.hexagon.input.useHandCursor = true;
        _this.hexagon.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.dragGrp.add(_this.hexagon);
        
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        _this.canadd1 = true;
        _this.canadd4 = true;
        
        _this.hexagon1 = _this.add.sprite(573,211,'SG14_1_3hexagon');
    	_this.hexagon1.anchor.setTo(0.5);
        _this.hexagon1.scale.setTo(1,1); 
        //_this.hexagon1.visible=false;
        _this.hexagon1.name = "hexa1";
        
        _this.hexagon2 = _this.add.sprite(666,211,'SG14_1_3hexagon');
    	_this.hexagon2.anchor.setTo(0.5);
        _this.hexagon2.scale.setTo(1,1); 
        _this.hexagon2.visible=false;
        _this.hexagon2.name = "hexa2";
        
        _this.hexagon3 = _this.add.sprite(760,211,'SG14_1_3hexagon');
    	_this.hexagon3.anchor.setTo(0.5);
        _this.hexagon3.scale.setTo(1,1); 
        _this.hexagon3.visible=false;
        _this.hexagon3.name = "hexa3";
        
        _this.hexagon4 = _this.add.sprite(525,293,'SG14_1_3hexagon');
    	_this.hexagon4.anchor.setTo(0.5);
        _this.hexagon4.scale.setTo(1,1); 
        //_this.hexagon4.visible=false;
        _this.hexagon4.name = "hexa4";
        
        _this.hexagon5 = _this.add.sprite(620,293,'SG14_1_3hexagon');
    	_this.hexagon5.anchor.setTo(0.5);
        _this.hexagon5.scale.setTo(1,1); 
        _this.hexagon5.visible=false;
        _this.hexagon5.name = "hexa5";
        
        _this.hexagon6 = _this.add.sprite(715,293,'SG14_1_3hexagon');
    	_this.hexagon6.anchor.setTo(0.5);
        _this.hexagon6.scale.setTo(1,1); 
        _this.hexagon6.visible=false;
        _this.hexagon6.name = "hexa6";
        
        _this.hexagon7 = _this.add.sprite(807,293,'SG14_1_3hexagon');
    	_this.hexagon7.anchor.setTo(0.5);
        _this.hexagon7.scale.setTo(1,1); 
        _this.hexagon7.visible=false;
        _this.hexagon7.name = "hexa7";
        
        _this.hexagon8 = _this.add.sprite(573,375,'SG14_1_3hexagon');
    	_this.hexagon8.anchor.setTo(0.5);
        _this.hexagon8.scale.setTo(1,1); 
        _this.hexagon8.visible=false;
        _this.hexagon8.name = "hexa8";
        
        _this.hexagon9 = _this.add.sprite(667,375,'SG14_1_3hexagon');
    	_this.hexagon9.anchor.setTo(0.5);
        _this.hexagon9.scale.setTo(1,1); 
        _this.hexagon9.visible=false;
        _this.hexagon9.name = "hexa9";
       
        _this.hexagon10 = _this.add.sprite(760,375,'SG14_1_3hexagon');
    	_this.hexagon10.anchor.setTo(0.5);
        _this.hexagon10.scale.setTo(1,1); 
        _this.hexagon10.visible=false;
        _this.hexagon10.name = "hexa10";
        
        
        _this.shapeGrp1.add(_this.hexagon1); _this.shapeGrp1.add(_this.hexagon4);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
        
        
        _this.shapeGrp.add(_this.hexagon2);_this.shapeGrp.add(_this.hexagon3);
       _this.shapeGrp.add(_this.hexagon5);_this.shapeGrp.add(_this.hexagon6);
        _this.shapeGrp.add(_this.hexagon7);_this.shapeGrp.add(_this.hexagon8);_this.shapeGrp.add(_this.hexagon9);
        _this.shapeGrp.add(_this.hexagon10);
        
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(470, 110, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1";
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(560, 110, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(660, 110, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(430, 190, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(520, 190, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(610, 190, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(710, 190, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(470, 270, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(570, 270, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(660, 270, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
       
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);
        _this.number=8;
    },
 

gotoThirdQuestion:function()
 { 
       _this.questioNo = 3;
     
        _this.slideGrp = _this.add.group();
        
        _this.screen = _this.add.sprite(670,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1,1.1); 
        
        _this.emptygrid = _this.add.sprite(667,293,'SG14_1_3emptygrid3');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
		
        
        _this.grid = _this.add.sprite(667,293,'SG14_1_3grid3');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.yellowtriangle = _this.add.sprite(150,200,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle.anchor.setTo(0.5);
        _this.yellowtriangle.scale.setTo(1,1); 
        _this.yellowtriangle.inputEnabled = true;
        _this.yellowtriangle.input.useHandCursor = true;
        _this.yellowtriangle.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.redtriangle = _this.add.sprite(260,380,'SG14_1_3redtriangle');
    	_this.redtriangle.anchor.setTo(0.5);
        _this.redtriangle.scale.setTo(1,1); 
        _this.redtriangle.inputEnabled = true;
        _this.redtriangle.input.useHandCursor = true;
        _this.redtriangle.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.dragGrp.add(_this.yellowtriangle);
        _this.dragGrp.add(_this.redtriangle);
     
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        _this.canadd1 = true;
        _this.canadd6 = true;
        _this.yellowtriangle1 = _this.add.sprite(540,128,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle1.anchor.setTo(0.5);
        _this.yellowtriangle1.scale.setTo(1,1); 
        //_this.yellowtriangle1.visible=false;
        _this.yellowtriangle1.name = "yellowtriangle1";
     
        _this.redtriangle1 = _this.add.sprite(605,129,'SG14_1_3redtriangle');
    	_this.redtriangle1.anchor.setTo(0.5);
        _this.redtriangle1.scale.setTo(1,1); 
        _this.redtriangle1.visible=false;
        _this.redtriangle1.name = "redtriangle1";
     
        _this.yellowtriangle2 = _this.add.sprite(670,128,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle2.anchor.setTo(0.5);
        _this.yellowtriangle2.scale.setTo(1,1); 
        _this.yellowtriangle2.visible=false;
        _this.yellowtriangle2.name = "yellowtriangle2";
     
        _this.redtriangle2 = _this.add.sprite(735,129,'SG14_1_3redtriangle');
    	_this.redtriangle2.anchor.setTo(0.5);
        _this.redtriangle2.scale.setTo(1,1); 
        _this.redtriangle2.visible=false;
        _this.redtriangle2.name = "redtriangle2";
     
        _this.yellowtriangle3 = _this.add.sprite(795,128,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle3.anchor.setTo(0.5);
        _this.yellowtriangle3.scale.setTo(1,1); 
        _this.yellowtriangle3.visible=false;
        _this.yellowtriangle3.name = "yellowtriangle3";
     
        _this.redtriangle3 = _this.add.sprite(540,238,'SG14_1_3redtriangle');
    	_this.redtriangle3.anchor.setTo(0.5);
        _this.redtriangle3.scale.setTo(1,1); 
        //_this.redtriangle3.visible=false;
        _this.redtriangle3.name = "redtriangle3";
     
        _this.yellowtriangle4 = _this.add.sprite(605,237,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle4.anchor.setTo(0.5);
        _this.yellowtriangle4.scale.setTo(1,1); 
        _this.yellowtriangle4.visible=false;
        _this.yellowtriangle4.name = "yellowtriangle4";
     
        _this.redtriangle4 = _this.add.sprite(670,238,'SG14_1_3redtriangle');
    	_this.redtriangle4.anchor.setTo(0.5);
        _this.redtriangle4.scale.setTo(1,1); 
        _this.redtriangle4.visible=false;
        _this.redtriangle4.name = "redtriangle4";
     
        _this.redtriangle5 = _this.add.sprite(795,238,'SG14_1_3redtriangle');
    	_this.redtriangle5.anchor.setTo(0.5);
        _this.redtriangle5.scale.setTo(1,1); 
        _this.redtriangle5.visible=false;
        _this.redtriangle5.name = "redtriangle5";
     
        _this.yellowtriangle5 = _this.add.sprite(732,237,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle5.anchor.setTo(0.5);
        _this.yellowtriangle5.scale.setTo(1,1); 
        _this.yellowtriangle5.visible=false;
        _this.yellowtriangle5.name = "yellowtriangle5";
     
        _this.redtriangle6 = _this.add.sprite(605,348,'SG14_1_3redtriangle');
    	_this.redtriangle6.anchor.setTo(0.5);
        _this.redtriangle6.scale.setTo(1,1); 
        _this.redtriangle6.visible=false;
        _this.redtriangle6.name = "redtriangle6";
     
        _this.yellowtriangle6 = _this.add.sprite(541,347,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle6.anchor.setTo(0.5);
        _this.yellowtriangle6.scale.setTo(1,1); 
        _this.yellowtriangle6.visible=false;
        _this.yellowtriangle6.name = "yellowtriangle6";
     
        _this.redtriangle7 = _this.add.sprite(733,348,'SG14_1_3redtriangle');
    	_this.redtriangle7.anchor.setTo(0.5);
        _this.redtriangle7.scale.setTo(1,1); 
        _this.redtriangle7.visible=false;
        _this.redtriangle7.name = "redtriangle7";
     
        _this.yellowtriangle7 = _this.add.sprite(669,347,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle7.anchor.setTo(0.5);
        _this.yellowtriangle7.scale.setTo(1,1); 
        _this.yellowtriangle7.visible=false;
        _this.yellowtriangle7.name = "yellowtriangle7";
     
        _this.redtriangle8 = _this.add.sprite(540,458,'SG14_1_3redtriangle');
    	_this.redtriangle8.anchor.setTo(0.5);
        _this.redtriangle8.scale.setTo(1,1); 
        _this.redtriangle8.visible=false;
        _this.redtriangle8.name = "redtriangle8";
     
        _this.yellowtriangle8 = _this.add.sprite(795,347,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle8.anchor.setTo(0.5);
        _this.yellowtriangle8.scale.setTo(1,1); 
        _this.yellowtriangle8.visible=false;
        _this.yellowtriangle8.name = "yellowtriangle8";
     
        _this.yellowtriangle9 = _this.add.sprite(605,458,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle9.anchor.setTo(0.5);
        _this.yellowtriangle9.scale.setTo(1,1); 
        _this.yellowtriangle9.visible=false;
        _this.yellowtriangle9.name = "yellowtriangle9";
     
        _this.redtriangle9 = _this.add.sprite(670,458,'SG14_1_3redtriangle');
    	_this.redtriangle9.anchor.setTo(0.5);
        _this.redtriangle9.scale.setTo(1,1); 
        _this.redtriangle9.visible=false;
        _this.redtriangle9.name = "redtriangle9";
     
        _this.yellowtriangle10 = _this.add.sprite(733,458,'SG14_1_3yellowtriangle');
    	_this.yellowtriangle10.anchor.setTo(0.5);
        _this.yellowtriangle10.scale.setTo(1,1); 
        _this.yellowtriangle10.visible=false;
        _this.yellowtriangle10.name = "yellowtriangle10";
     
        _this.redtriangle10 = _this.add.sprite(793,458,'SG14_1_3redtriangle');
    	_this.redtriangle10.anchor.setTo(0.5);
        _this.redtriangle10.scale.setTo(1,1); 
        _this.redtriangle10.visible=false;
        _this.redtriangle10.name = "redtriangle10";
     
       
     
        _this.shapeGrp1.add(_this.yellowtriangle1);_this.shapeGrp1.add(_this.redtriangle3);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
     
     _this.shapeGrp.add(_this.redtriangle1);_this.shapeGrp.add(_this.yellowtriangle2); _this.shapeGrp.add(_this.redtriangle2);_this.shapeGrp.add(_this.yellowtriangle3);
        _this.shapeGrp.add(_this.yellowtriangle4);_this.shapeGrp.add(_this.redtriangle4);_this.shapeGrp.add(_this.yellowtriangle5); _this.shapeGrp.add(_this.redtriangle5);_this.shapeGrp.add(_this.yellowtriangle6);_this.shapeGrp.add(_this.redtriangle6);
        _this.shapeGrp.add(_this.yellowtriangle7);_this.shapeGrp.add(_this.redtriangle7);_this.shapeGrp.add(_this.yellowtriangle8); _this.shapeGrp.add(_this.redtriangle8);_this.shapeGrp.add(_this.yellowtriangle9);_this.shapeGrp.add(_this.redtriangle9);
        _this.shapeGrp.add(_this.yellowtriangle10);_this.shapeGrp.add(_this.redtriangle10);
         
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(440, 50, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(500, 10, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(570, 50, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(630, 10, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(690, 50, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(440, 120, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(500, 150, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(565, 120, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(630, 150, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(690, 120, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(440, 260, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(500, 230, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(570, 260, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(630, 230, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(690, 260, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
        
        _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(440, 340, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape16";
        
        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(505, 370, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";
        
        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(570, 340, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";
        
        _this.graphics19 = _this.add.graphics(100, 100);       
        _this.graphics19.lineStyle(2, 0x0000FF, 1);
        _this.graphics19.drawRect(630, 370, 5, 5);
        _this.graphics19.alpha=0;
        _this.graphics19.name = "shape19";
        
        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(690, 340, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";
        
        
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics16);_this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);
        _this.GraphicGrp.add(_this.graphics19);_this.GraphicGrp.add(_this.graphics20);
     
        _this.number=18;
       
 },
   
gotoFourthQuestion:function()
 {
         _this.questioNo = 4;
        _this.slideGrp = _this.add.group();
     
        _this.screen = _this.add.sprite(670,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1,1.1); 
        
        _this.emptygrid = _this.add.sprite(667,293,'SG14_1_3emptygrid4');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
		
        
        _this.grid = _this.add.sprite(667,293,'SG14_1_3grid4');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.orange1 = _this.add.sprite(100,160,'SG14_1_3orange2');
        _this.orange1.anchor.setTo(0.5);
        _this.orange1.scale.setTo(1,1); 
        _this.orange1.inputEnabled = true;
        _this.orange1.input.useHandCursor = true;
        _this.orange1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.orange2 = _this.add.sprite(100,290,'SG14_1_3orange1');
    	_this.orange2.anchor.setTo(0.5);
        _this.orange2.scale.setTo(1,1); 
        _this.orange2.inputEnabled = true;
        _this.orange2.input.useHandCursor = true;
        _this.orange2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.orange3 = _this.add.sprite(100,430,'SG14_1_3orange3');
    	_this.orange3.anchor.setTo(0.5);
        _this.orange3.scale.setTo(1,1); 
        _this.orange3.inputEnabled = true;
        _this.orange3.input.useHandCursor = true;
        _this.orange3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.purple1 = _this.add.sprite(210,160,'SG14_1_3purple1');
    	_this.purple1.anchor.setTo(0.5);
        _this.purple1.scale.setTo(1,1); 
        _this.purple1.inputEnabled = true;
        _this.purple1.input.useHandCursor = true;
        _this.purple1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.purple2 = _this.add.sprite(210,430,'SG14_1_3purple2');
    	_this.purple2.anchor.setTo(0.5);
        _this.purple2.scale.setTo(1,1); 
        _this.purple2.inputEnabled = true;
        _this.purple2.input.useHandCursor = true;
        _this.purple2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.purple3 = _this.add.sprite(210,290,'SG14_1_3purple3');
    	_this.purple3.anchor.setTo(0.5);
        _this.purple3.scale.setTo(1,1); 
        _this.purple3.inputEnabled = true;
        _this.purple3.input.useHandCursor = true;
        _this.purple3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.yellowhexa1 = _this.add.sprite(340,200,'SG14_1_3yellowhexa1');
    	_this.yellowhexa1.anchor.setTo(0.5);
        _this.yellowhexa1.scale.setTo(0.9,0.9); 
        _this.yellowhexa1.inputEnabled = true;
        _this.yellowhexa1.input.useHandCursor = true;
        _this.yellowhexa1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.yellowhexa2 = _this.add.sprite(340,400,'SG14_1_3yellowhexa2');
    	_this.yellowhexa2.anchor.setTo(0.5);
        _this.yellowhexa2.scale.setTo(0.9,0.9); 
        _this.yellowhexa2.inputEnabled = true;
        _this.yellowhexa2.input.useHandCursor = true;
        _this.yellowhexa2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.dragGrp.add(_this.orange1);_this.dragGrp.add(_this.orange2); _this.dragGrp.add(_this.orange3);
        _this.dragGrp.add(_this.purple1);_this.dragGrp.add(_this.purple2);_this.dragGrp.add(_this.purple3);
        _this.dragGrp.add(_this.yellowhexa1);_this.dragGrp.add(_this.yellowhexa2);

        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        
        _this.canadd1 = true;
        _this.canadd2 = true;
        _this.canadd13 = true;
        _this.canadd19 = true;
        _this.canadd20 = true;
        
        _this.shape1 = _this.add.sprite(830,200,'SG14_1_3orange3');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(0.99,0.99); 
        //_this.shape1.visible=false;
        _this.shape1.name = "orange1";
     
        _this.shape2 = _this.add.sprite(505,200,'SG14_1_3orange2');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(0.99,0.99); 
        //_this.shape2.visible=false;
        _this.shape2.name = "orange2";
     
        _this.shape3 = _this.add.sprite(710,320,'SG14_1_3orange2');
    	_this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(0.99,0.99);
        _this.shape3.visible=false;
        _this.shape3.name = "orange3";
     
        _this.shape4 = _this.add.sprite(625,320,'SG14_1_3orange3');
    	_this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(0.99,0.99); 
        _this.shape4.visible=false;
        _this.shape4.name = "orange4";
     
        _this.shape5 = _this.add.sprite(667,481,'SG14_1_3orange1');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(0.99,0.99); 
        _this.shape5.visible=false;
        _this.shape5.name = "orange5";
     
        _this.shape6 = _this.add.sprite(667,244,'SG14_1_3orange1');
    	_this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(0.99,0.99); 
        _this.shape6.visible=false;
        _this.shape6.name = "orange6";
     
        /*_this.shape7 = _this.add.sprite(559,395,'SG14_1_3orange2');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(0.99,0.99); 
        _this.shape7.visible=false;
        _this.shape7.name = "orange7";
     
        _this.shape8 = _this.add.sprite(775,395,'SG14_1_3orange3');
    	_this.shape8.anchor.setTo(0.5);
        _this.shape8.scale.setTo(0.99,0.99); 
        _this.shape8.visible=false;
        _this.shape8.name = "orange8";
     
        _this.shape9 = _this.add.sprite(667,424,'SG14_1_3orange1');
    	_this.shape9.anchor.setTo(0.5);
        _this.shape9.scale.setTo(0.99,0.99); 
        _this.shape9.visible=false;
        _this.shape9.name = "orange9";
     
        _this.shape10 = _this.add.sprite(667,266,'SG14_1_3orange1');
    	_this.shape10.anchor.setTo(0.5);
        _this.shape10.scale.setTo(0.99,0.99); 
        _this.shape10.visible=false;
        _this.shape10.name = "orange10";
     
        _this.shape11 = _this.add.sprite(638,316,'SG14_1_3orange3');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(0.99,0.99); 
        _this.shape11.visible=false;
        _this.shape11.name = "orange11";
     
        _this.shape12 = _this.add.sprite(696,316,'SG14_1_3orange2');
    	_this.shape12.anchor.setTo(0.5);
        _this.shape12.scale.setTo(0.99,0.99); 
        _this.shape12.visible=false;
        _this.shape12.name = "orange12";*/
     
        _this.shape13 = _this.add.sprite(667,124,'SG14_1_3purple3');
    	_this.shape13.anchor.setTo(0.5);
        _this.shape13.scale.setTo(1,1); 
       // _this.shape13.visible=false;
        _this.shape13.name = "purple1";
        
        _this.shape14 = _this.add.sprite(608,260,'SG14_1_3purple1');
    	_this.shape14.anchor.setTo(0.5);
        _this.shape14.scale.setTo(1,1); 
        _this.shape14.visible=false;
        _this.shape14.name = "purple2";
     
        _this.shape15 = _this.add.sprite(727,260,'SG14_1_3purple2');
    	_this.shape15.anchor.setTo(0.5);
        _this.shape15.scale.setTo(1,1); 
        _this.shape15.visible=false;
        _this.shape15.name = "purple3";
     
        _this.shape16 = _this.add.sprite(525,378,'SG14_1_3purple2');
    	_this.shape16.anchor.setTo(0.5);
        _this.shape16.scale.setTo(1,1); 
        _this.shape16.visible=false;
        _this.shape16.name = "purple4";
     
        _this.shape17 = _this.add.sprite(812,378,'SG14_1_3purple1');
    	_this.shape17.anchor.setTo(0.5);
        _this.shape17.scale.setTo(1,1); 
        _this.shape17.visible=false;
        _this.shape17.name = "purple5";
     
        _this.shape18 = _this.add.sprite(668,366,'SG14_1_3purple3');
    	_this.shape18.anchor.setTo(0.5);
        _this.shape18.scale.setTo(1,1); 
        _this.shape18.visible=false;
        _this.shape18.name = "purple6";
     
        _this.shape19 = _this.add.sprite(598.5,175,'SG14_1_3yellowhexa1');
    	_this.shape19.anchor.setTo(0.5);
        _this.shape19.scale.setTo(1,1); 
        //_this.shape19.visible=false;
        _this.shape19.name = "yellowhexa1";
     
        _this.shape20 = _this.add.sprite(736,175,'SG14_1_3yellowhexa2');
    	_this.shape20.anchor.setTo(0.5);
        _this.shape20.scale.setTo(1,1); 
        //_this.shape20.visible=false;
        _this.shape20.name = "yellowhexa2";
     
        _this.shape21 = _this.add.sprite(530,294,'SG14_1_3yellowhexa2');
    	_this.shape21.anchor.setTo(0.5);
        _this.shape21.scale.setTo(1,1); 
        _this.shape21.visible=false;
        _this.shape21.name = "yellowhexa3";
       
        _this.shape22 = _this.add.sprite(804,294,'SG14_1_3yellowhexa1');
    	_this.shape22.anchor.setTo(0.5);
        _this.shape22.scale.setTo(1,1); 
        _this.shape22.visible=false;
        _this.shape22.name = "yellowhexa4";
     
        _this.shape23 = _this.add.sprite(598,413,'SG14_1_3yellowhexa1');
    	_this.shape23.anchor.setTo(0.5);
        _this.shape23.scale.setTo(1,1); 
        _this.shape23.visible=false;
        _this.shape23.name = "yellowhexa5";
     
        _this.shape24 = _this.add.sprite(736,413,'SG14_1_3yellowhexa2');
    	_this.shape24.anchor.setTo(0.5);
        _this.shape24.scale.setTo(1,1); 
        _this.shape24.visible=false;
        _this.shape24.name = "yellowhexa6";
     
        _this.shapeGrp1.add(_this.shape1);_this.shapeGrp1.add(_this.shape2); _this.shapeGrp1.add(_this.shape13);_this.shapeGrp1.add(_this.shape19);_this.shapeGrp1.add(_this.shape20);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
     _this.shapeGrp.add(_this.shape3);_this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);_this.shapeGrp.add(_this.shape6);/*_this.shapeGrp.add(_this.shape7);_this.shapeGrp.add(_this.shape8);
        _this.shapeGrp.add(_this.shape9);_this.shapeGrp.add(_this.shape10);_this.shapeGrp.add(_this.shape11);_this.shapeGrp.add(_this.shape12);*/
       _this.shapeGrp.add(_this.shape14);_this.shapeGrp.add(_this.shape15);_this.shapeGrp.add(_this.shape16);
        _this.shapeGrp.add(_this.shape17);_this.shapeGrp.add(_this.shape18);
        _this.shapeGrp.add(_this.shape21);_this.shapeGrp.add(_this.shape22);_this.shapeGrp.add(_this.shape23);_this.shapeGrp.add(_this.shape24);
         
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(730, 100, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(400, 100, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(610, 220, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(520, 220, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(560, 380, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(560, 145, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        /*_this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(450, 300, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(670, 300, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(560, 320, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(560, 160, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(535, 220, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(590, 220, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";*/
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(565, 20, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(510, 160, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(620, 165, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
        
        _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(425, 275, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape16";
        
        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(705, 270, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";
        
        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(565, 265, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";
        
        _this.graphics19 = _this.add.graphics(100, 100);       
        _this.graphics19.lineStyle(2, 0x0000FF, 1);
        _this.graphics19.drawRect(500, 70, 5, 5);
        _this.graphics19.alpha=0;
        _this.graphics19.name = "shape19";
        
        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(630, 80, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";
        
        _this.graphics21 = _this.add.graphics(100, 100);       
        _this.graphics21.lineStyle(2, 0x0000FF, 1);
        _this.graphics21.drawRect(420, 200, 5, 5);
        _this.graphics21.alpha=0;
        _this.graphics21.name = "shape21";
        
        _this.graphics22 = _this.add.graphics(100, 100);       
        _this.graphics22.lineStyle(2, 0x0000FF, 1);
        _this.graphics22.drawRect(700, 200, 5, 5);
        _this.graphics22.alpha=0;
        _this.graphics22.name = "shape22";
        
        _this.graphics23 = _this.add.graphics(100, 100);       
        _this.graphics23.lineStyle(2, 0x0000FF, 1);
        _this.graphics23.drawRect(500, 320, 5, 5);
        _this.graphics23.alpha=0;
        _this.graphics23.name = "shape23";
        
        _this.graphics24 = _this.add.graphics(100, 100);       
        _this.graphics24.lineStyle(2, 0x0000FF, 1);
        _this.graphics24.drawRect(640, 320, 5, 5);
        _this.graphics24.alpha=0;
        _this.graphics24.name = "shape24";
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        /*_this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);*/
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics16);_this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);
        _this.GraphicGrp.add(_this.graphics19);_this.GraphicGrp.add(_this.graphics20);_this.GraphicGrp.add(_this.graphics21); 
        _this.GraphicGrp.add(_this.graphics22);_this.GraphicGrp.add(_this.graphics23);_this.GraphicGrp.add(_this.graphics24);
        
        _this.number=13;
 },
    
gotoFifthQuestion:function()
 {
         _this.questioNo = 5;
        _this.slideGrp = _this.add.group();
        
        _this.screen = _this.add.sprite(650,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1.3,1); 
        
        _this.emptygrid = _this.add.sprite(647,293,'SG14_1_3emptygrid5');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(647,293,'SG14_1_3grid5');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.hexa = _this.add.sprite(120,280,'SG14_1_3hexa');
        _this.hexa.anchor.setTo(0.5);
        _this.hexa.scale.setTo(0.9,0.9); 
        _this.hexa.inputEnabled = true;
        _this.hexa.input.useHandCursor = true;
        _this.hexa.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.greenleft = _this.add.sprite(270,200,'SG14_1_3greenleft');
        _this.greenleft.anchor.setTo(0.5);
        _this.greenleft.scale.setTo(1,1); 
        _this.greenleft.inputEnabled = true;
        _this.greenleft.input.useHandCursor = true;
        _this.greenleft.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.greenright = _this.add.sprite(270,380,'SG14_1_3greenright');
        _this.greenright.anchor.setTo(0.5);
        _this.greenright.scale.setTo(1,1); 
        _this.greenright.inputEnabled = true;
        _this.greenright.input.useHandCursor = true;
        _this.greenright.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.square = _this.add.sprite(120,130,'SG14_1_3square');
        _this.square.anchor.setTo(0.5);
        _this.square.scale.setTo(1,1); 
        _this.square.inputEnabled = true;
        _this.square.input.useHandCursor = true;
        _this.square.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.blueshape = _this.add.sprite(120,430,'SG14_1_3blueshape');
        _this.blueshape.anchor.setTo(0.5);
        _this.blueshape.scale.setTo(1,1); 
        _this.blueshape.inputEnabled = true;
        _this.blueshape.input.useHandCursor = true;
        _this.blueshape.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       
        _this.dragGrp.add(_this.hexa);_this.dragGrp.add(_this.greenleft); _this.dragGrp.add(_this.greenright);
        _this.dragGrp.add(_this.square);_this.dragGrp.add(_this.blueshape);
       

        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        
     _this.canadd7 = true;
     _this.canadd19 = true;
     _this.canadd25 = true;
     _this.canadd31 = true;
     _this.canadd32 = true;
       /* _this.shape1 = _this.add.sprite(494,183,'SG14_1_3square');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
        _this.shape1.visible=false;
        _this.shape1.name = "square1";
     
        _this.shape2 = _this.add.sprite(494,232,'SG14_1_3square');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1,1); 
        _this.shape2.visible=false;
        _this.shape2.name = "square2";
     
        _this.shape3 = _this.add.sprite(494,281,'SG14_1_3square');
    	_this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(1,1); 
        _this.shape3.visible=false;
        _this.shape3.name = "square3";
     
        _this.shape4 = _this.add.sprite(494,330,'SG14_1_3square');
    	_this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(1,1); 
        _this.shape4.visible=false;
        _this.shape4.name = "square4";
     
        _this.shape5 = _this.add.sprite(494,379,'SG14_1_3square');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1,1); 
        _this.shape5.visible=false;
        _this.shape5.name = "square5";
     
        _this.shape6 = _this.add.sprite(494,428,'SG14_1_3square');
    	_this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(1,1); 
        _this.shape6.visible=false;
        _this.shape6.name = "square6";*/
     
        _this.shape7 = _this.add.sprite(547,219,'SG14_1_3square');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(1,1); 
        //_this.shape7.visible=false;
        _this.shape7.name = "square7";
     
        _this.shape8 = _this.add.sprite(547,293,'SG14_1_3square');
    	_this.shape8.anchor.setTo(0.5);
        _this.shape8.scale.setTo(1,1); 
        _this.shape8.visible=false;
        _this.shape8.name = "square8";
     
        _this.shape9 = _this.add.sprite(547,367,'SG14_1_3square');
    	_this.shape9.anchor.setTo(0.5);
        _this.shape9.scale.setTo(1,1); 
        _this.shape9.visible=false;
        _this.shape9.name = "square9";
     
       /* _this.shape10 = _this.add.sprite(624,330,'SG14_1_3square');
    	_this.shape10.anchor.setTo(0.5);
        _this.shape10.scale.setTo(1,1); 
        _this.shape10.visible=false;
        _this.shape10.name = "square10";
     
        _this.shape11 = _this.add.sprite(624,379,'SG14_1_3square');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(1,1); 
        _this.shape11.visible=false;
        _this.shape11.name = "square11";
     
        _this.shape12 = _this.add.sprite(624,428,'SG14_1_3square');
    	_this.shape12.anchor.setTo(0.5);
        _this.shape12.scale.setTo(1,1); 
        _this.shape12.visible=false;
        _this.shape12.name = "square12";*/
     
        _this.shape13 = _this.add.sprite(746,219,'SG14_1_3square');
    	_this.shape13.anchor.setTo(0.5);
        _this.shape13.scale.setTo(1,1); 
        _this.shape13.visible=false;
        _this.shape13.name = "square13";
        
        _this.shape14 = _this.add.sprite(746,293,'SG14_1_3square');
    	_this.shape14.anchor.setTo(0.5);
        _this.shape14.scale.setTo(1,1); 
        _this.shape14.visible=false;
        _this.shape14.name = "square14";
     
        _this.shape15 = _this.add.sprite(746,367,'SG14_1_3square');
    	_this.shape15.anchor.setTo(0.5);
        _this.shape15.scale.setTo(1,1); 
        _this.shape15.visible=false;
        _this.shape15.name = "square15";
     
        /*_this.shape16 = _this.add.sprite(757,330,'SG14_1_3square');
    	_this.shape16.anchor.setTo(0.5);
        _this.shape16.scale.setTo(1,1); 
        _this.shape16.visible=false;
        _this.shape16.name = "square16";
     
        _this.shape17 = _this.add.sprite(757,379,'SG14_1_3square');
    	_this.shape17.anchor.setTo(0.5);
        _this.shape17.scale.setTo(1,1); 
        _this.shape17.visible=false;
        _this.shape17.name = "square17";
     
        _this.shape18 = _this.add.sprite(757,428,'SG14_1_3square');
    	_this.shape18.anchor.setTo(0.5);
        _this.shape18.scale.setTo(1,1); 
        _this.shape18.visible=false;
        _this.shape18.name = "square18";*/
     
        _this.shape19 = _this.add.sprite(448,185,'SG14_1_3blueshape');
    	_this.shape19.anchor.setTo(0.5);
        _this.shape19.scale.setTo(1,1); 
        //_this.shape19.visible=false;
        _this.shape19.name = "blueshape1";
     
        _this.shape20 = _this.add.sprite(647,185,'SG14_1_3blueshape');
    	_this.shape20.anchor.setTo(0.5);
        _this.shape20.scale.setTo(1,1); 
        _this.shape20.visible=false;
        _this.shape20.name = "blueshape2";
     
        _this.shape21 = _this.add.sprite(845,185,'SG14_1_3blueshape');
    	_this.shape21.anchor.setTo(0.5);
        _this.shape21.scale.setTo(1,1); 
        _this.shape21.visible=false;
        _this.shape21.name = "blueshape3";

        _this.shape22 = _this.add.sprite(448,402,'SG14_1_3blueshape');
    	_this.shape22.anchor.setTo(0.5);
        _this.shape22.scale.setTo(1,1); 
        _this.shape22.visible=false;
        _this.shape22.name = "blueshape4";
     
        _this.shape23 = _this.add.sprite(647,402,'SG14_1_3blueshape');
    	_this.shape23.anchor.setTo(0.5);
        _this.shape23.scale.setTo(1,1); 
        _this.shape23.visible=false;
        _this.shape23.name = "blueshape5";
     
        _this.shape24 = _this.add.sprite(845,402,'SG14_1_3blueshape');
    	_this.shape24.anchor.setTo(0.5);
        _this.shape24.scale.setTo(1,1); 
        _this.shape24.visible=false;
        _this.shape24.name = "blueshape6";
     
        _this.shape25 = _this.add.sprite(447,293,'SG14_1_3hexa');
    	_this.shape25.anchor.setTo(0.5);
        _this.shape25.scale.setTo(0.98,0.98); 
        //_this.shape25.visible=false;
        _this.shape25.name = "hexa1";
     
        _this.shape26 = _this.add.sprite(646,293,'SG14_1_3hexa');
    	_this.shape26.anchor.setTo(0.5);
        _this.shape26.scale.setTo(0.99,0.99); 
        _this.shape26.visible=false;
        _this.shape26.name = "hexa2";
     
        _this.shape27 = _this.add.sprite(845.5,293,'SG14_1_3hexa');
    	_this.shape27.anchor.setTo(0.5);
        _this.shape27.scale.setTo(0.99,0.99); 
        _this.shape27.visible=false;
        _this.shape27.name = "hexa3";
     
       /* _this.shape28 = _this.add.sprite(558,378,'SG14_1_3hexa');
    	_this.shape28.anchor.setTo(0.5);
        _this.shape28.scale.setTo(0.98,0.98); 
        _this.shape28.visible=false;
        _this.shape28.name = "hexa4";
     
        _this.shape29 = _this.add.sprite(690,378,'SG14_1_3hexa');
    	_this.shape29.anchor.setTo(0.5);
        _this.shape29.scale.setTo(1,1); 
        _this.shape29.visible=false;
        _this.shape29.name = "hexa5";
     
        _this.shape30 = _this.add.sprite(823,378,'SG14_1_3hexa');
    	_this.shape30.anchor.setTo(0.5);
        _this.shape30.scale.setTo(1,1); 
        _this.shape30.visible=false;
        _this.shape30.name = "hexa6";*/
     
        _this.shape31 = _this.add.sprite(417,221,'SG14_1_3greenright');
    	_this.shape31.anchor.setTo(0.5);
        _this.shape31.scale.setTo(1,1); 
        //_this.shape31.visible=false;
        _this.shape31.name = "triangle1";
     
        _this.shape32 = _this.add.sprite(479,221,'SG14_1_3greenleft');
    	_this.shape32.anchor.setTo(0.5);
        _this.shape32.scale.setTo(1,1); 
        //_this.shape32.visible=false;
        _this.shape32.name = "triangle2";
     
        _this.shape33 = _this.add.sprite(615,221,'SG14_1_3greenright');
    	_this.shape33.anchor.setTo(0.5);
        _this.shape33.scale.setTo(1,1); 
        _this.shape33.visible=false;
        _this.shape33.name = "triangle3";
     
        _this.shape34 = _this.add.sprite(678,221,'SG14_1_3greenleft');
    	_this.shape34.anchor.setTo(0.5);
        _this.shape34.scale.setTo(1,1); 
        _this.shape34.visible=false;
        _this.shape34.name = "triangle4";
     
        _this.shape35 = _this.add.sprite(814,221,'SG14_1_3greenright');
    	_this.shape35.anchor.setTo(0.5);
        _this.shape35.scale.setTo(1,1); 
        _this.shape35.visible=false;
        _this.shape35.name = "triangle5";
     
        _this.shape36 = _this.add.sprite(877,221,'SG14_1_3greenleft');
    	_this.shape36.anchor.setTo(0.5);
        _this.shape36.scale.setTo(1,1); 
        _this.shape36.visible=false;
        _this.shape36.name = "triangle6";
     
        _this.shape37 = _this.add.sprite(417,365,'SG14_1_3greenright');
    	_this.shape37.anchor.setTo(0.5);
        _this.shape37.scale.setTo(1,1); 
        _this.shape37.visible=false;
        _this.shape37.name = "triangle7";
     
        _this.shape38 = _this.add.sprite(479,365,'SG14_1_3greenleft');
    	_this.shape38.anchor.setTo(0.5);
        _this.shape38.scale.setTo(1,1); 
        _this.shape38.visible=false;
        _this.shape38.name = "triangle8";
     
        _this.shape39 = _this.add.sprite(615,365,'SG14_1_3greenright');
    	_this.shape39.anchor.setTo(0.5);
        _this.shape39.scale.setTo(1,1); 
        _this.shape39.visible=false;
        _this.shape39.name = "triangle9";
     
        _this.shape40 = _this.add.sprite(678,365,'SG14_1_3greenleft');
    	_this.shape40.anchor.setTo(0.5);
        _this.shape40.scale.setTo(1,1); 
        _this.shape40.visible=false;
        _this.shape40.name = "triangle10";
     
        _this.shape41 = _this.add.sprite(814,365,'SG14_1_3greenright');
    	_this.shape41.anchor.setTo(0.5);
        _this.shape41.scale.setTo(1,1); 
        _this.shape41.visible=false;
        _this.shape41.name = "triangle11";
     
        _this.shape42 = _this.add.sprite(877,365,'SG14_1_3greenleft');
    	_this.shape42.anchor.setTo(0.5);
        _this.shape42.scale.setTo(1,1);
        _this.shape42.visible=false;
        _this.shape42.name = "triangle12";
     
       /* _this.shape43 = _this.add.sprite(538,330,'SG14_1_3greenright');
    	_this.shape43.anchor.setTo(0.5);
        _this.shape43.scale.setTo(1,1); 
        _this.shape43.visible=false;
        _this.shape43.name = "triangle13";
     
        _this.shape44 = _this.add.sprite(578,330,'SG14_1_3greenleft');
    	_this.shape44.anchor.setTo(0.5);
        _this.shape44.scale.setTo(1,1); 
        _this.shape44.visible=false;
        _this.shape44.name = "triangle14";
     
        _this.shape45 = _this.add.sprite(669,330,'SG14_1_3greenright');
    	_this.shape45.anchor.setTo(0.5);
        _this.shape45.scale.setTo(1,1); 
        _this.shape45.visible=false;
        _this.shape45.name = "triangle15";
     
        _this.shape46 = _this.add.sprite(711,330,'SG14_1_3greenleft');
    	_this.shape46.anchor.setTo(0.5);
        _this.shape46.scale.setTo(1,1); 
        _this.shape46.visible=false;
        _this.shape46.name = "triangle16";
     
        _this.shape47 = _this.add.sprite(802,330,'SG14_1_3greenright');
    	_this.shape47.anchor.setTo(0.5);
        _this.shape47.scale.setTo(1,1); 
        _this.shape47.visible=false;
        _this.shape47.name = "triangle17";
     
        _this.shape48 = _this.add.sprite(844,330,'SG14_1_3greenleft');
    	_this.shape48.anchor.setTo(0.5);
        _this.shape48.scale.setTo(1,1); 
        _this.shape48.visible=false;
        _this.shape48.name = "triangle18";
     
        _this.shape49 = _this.add.sprite(538,426,'SG14_1_3greenright');
    	_this.shape49.anchor.setTo(0.5);
        _this.shape49.scale.setTo(1,1); 
        _this.shape49.visible=false;
        _this.shape49.name = "triangle19";
        
        _this.shape50 = _this.add.sprite(578,426,'SG14_1_3greenleft');
    	_this.shape50.anchor.setTo(0.5);
        _this.shape50.scale.setTo(1,1); 
        _this.shape50.visible=false;
        _this.shape50.name = "triangle20";
     
        _this.shape51 = _this.add.sprite(669,426,'SG14_1_3greenright');
    	_this.shape51.anchor.setTo(0.5);
        _this.shape51.scale.setTo(1,1); 
        _this.shape51.visible=false;
        _this.shape51.name = "triangle21";
     
        _this.shape52 = _this.add.sprite(711,426,'SG14_1_3greenleft');
    	_this.shape52.anchor.setTo(0.5);
        _this.shape52.scale.setTo(1,1); 
        _this.shape52.visible=false;
        _this.shape52.name = "triangle22";
     
        _this.shape53 = _this.add.sprite(802,426,'SG14_1_3greenright');
    	_this.shape53.anchor.setTo(0.5);
        _this.shape53.scale.setTo(1,1); 
        _this.shape53.visible=false;
        _this.shape53.name = "triangle23";
     
        _this.shape54 = _this.add.sprite(844,426,'SG14_1_3greenleft');
    	_this.shape54.anchor.setTo(0.5);
        _this.shape54.scale.setTo(1,1); 
        _this.shape54.visible=false;
        _this.shape54.name = "triangle24";*/
     
      _this.shapeGrp1.add(_this.shape7);_this.shapeGrp1.add(_this.shape19);_this.shapeGrp1.add(_this.shape25);_this.shapeGrp1.add(_this.shape31);_this.shapeGrp1.add(_this.shape32);
     _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       /* _this.shapeGrp.add(_this.shape1);_this.shapeGrp.add(_this.shape2);_this.shapeGrp.add(_this.shape3);_this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);_this.shapeGrp.add(_this.shape6);*/_this.shapeGrp.add(_this.shape8);
        _this.shapeGrp.add(_this.shape9);/*_this.shapeGrp.add(_this.shape10);_this.shapeGrp.add(_this.shape11);_this.shapeGrp.add(_this.shape12);*/
        _this.shapeGrp.add(_this.shape13);_this.shapeGrp.add(_this.shape14);_this.shapeGrp.add(_this.shape15);/*_this.shapeGrp.add(_this.shape16);
        _this.shapeGrp.add(_this.shape17);_this.shapeGrp.add(_this.shape18);*/_this.shapeGrp.add(_this.shape20);
        _this.shapeGrp.add(_this.shape21);_this.shapeGrp.add(_this.shape22);_this.shapeGrp.add(_this.shape23);_this.shapeGrp.add(_this.shape24);
        _this.shapeGrp.add(_this.shape26);_this.shapeGrp.add(_this.shape27);/*_this.shapeGrp.add(_this.shape28);
        _this.shapeGrp.add(_this.shape29);_this.shapeGrp.add(_this.shape30);*/
        _this.shapeGrp.add(_this.shape33);_this.shapeGrp.add(_this.shape34);_this.shapeGrp.add(_this.shape35);_this.shapeGrp.add(_this.shape36);
        _this.shapeGrp.add(_this.shape37);_this.shapeGrp.add(_this.shape38);_this.shapeGrp.add(_this.shape39);_this.shapeGrp.add(_this.shape40);
        _this.shapeGrp.add(_this.shape41);_this.shapeGrp.add(_this.shape42);/*_this.shapeGrp.add(_this.shape43);_this.shapeGrp.add(_this.shape44);
        _this.shapeGrp.add(_this.shape45);_this.shapeGrp.add(_this.shape46);_this.shapeGrp.add(_this.shape47);_this.shapeGrp.add(_this.shape48);
        _this.shapeGrp.add(_this.shape49);_this.shapeGrp.add(_this.shape50);_this.shapeGrp.add(_this.shape51);_this.shapeGrp.add(_this.shape52);
        _this.shapeGrp.add(_this.shape53);_this.shapeGrp.add(_this.shape54);*/
         
        _this.GraphicGrp = _this.add.group();
      
        /*_this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(390, 80, 5, 5);
        //_this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(390, 130, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(390, 180, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(390, 230, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(390, 280, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(390, 330, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";*/
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(440, 110, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(440, 190, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(440, 270, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
       /* _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(520, 230, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(520, 280, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(520, 330, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";*/
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(640, 120, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(640, 190, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(640, 270, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
        
       /* _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(650, 230, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape16";
        
        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(650, 280, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";
        
        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(650, 330, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";*/
        
        _this.graphics19 = _this.add.graphics(100, 100);       
        _this.graphics19.lineStyle(2, 0x0000FF, 1);
        _this.graphics19.drawRect(340, 80, 5, 5);
        _this.graphics19.alpha=0;
        _this.graphics19.name = "shape19";
        
        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(540,80, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";
        
        _this.graphics21 = _this.add.graphics(100, 100);       
        _this.graphics21.lineStyle(2, 0x0000FF, 1);
        _this.graphics21.drawRect(740, 80, 5, 5);
        _this.graphics21.alpha=0;
        _this.graphics21.name = "shape21";
        
        _this.graphics22 = _this.add.graphics(100, 100);       
        _this.graphics22.lineStyle(2, 0x0000FF, 1);
        _this.graphics22.drawRect(340, 300, 5, 5);
        _this.graphics22.alpha=0;
        _this.graphics22.name = "shape22";
        
        _this.graphics23 = _this.add.graphics(100, 100);       
        _this.graphics23.lineStyle(2, 0x0000FF, 1);
        _this.graphics23.drawRect(540, 300, 5, 5);
        _this.graphics23.alpha=0;
        _this.graphics23.name = "shape23";
        
        _this.graphics24 = _this.add.graphics(100, 100);       
        _this.graphics24.lineStyle(2, 0x0000FF, 1);
        _this.graphics24.drawRect(740, 300, 5, 5);
        _this.graphics24.alpha=0;
        _this.graphics24.name = "shape24";
        
        _this.graphics25 = _this.add.graphics(100, 100);       
        _this.graphics25.lineStyle(2, 0x0000FF, 1);
        _this.graphics25.drawRect(350, 190, 5, 5);
        _this.graphics25.alpha=0;
        _this.graphics25.name = "shape25";

        _this.graphics26 = _this.add.graphics(100, 100);       
        _this.graphics26.lineStyle(2, 0x0000FF, 1);
        _this.graphics26.drawRect(545, 190, 5, 5);
        _this.graphics26.alpha=0;
        _this.graphics26.name = "shape26";

        _this.graphics27 = _this.add.graphics(100, 100);       
        _this.graphics27.lineStyle(2, 0x0000FF, 1);
        _this.graphics27.drawRect(745, 190, 5, 5);
        _this.graphics27.alpha=0;
        _this.graphics27.name = "shape27";

        /*_this.graphics28 = _this.add.graphics(100, 100);       
        _this.graphics28.lineStyle(2, 0x0000FF, 1);
        _this.graphics28.drawRect(455, 280, 5, 5);
        _this.graphics28.alpha=0;
        _this.graphics28.name = "shape28";

        _this.graphics29 = _this.add.graphics(100, 100);       
        _this.graphics29.lineStyle(2, 0x0000FF, 1);
        _this.graphics29.drawRect(585, 280, 5, 5);
        _this.graphics29.alpha=0;
        _this.graphics29.name = "shape29";

        _this.graphics30 = _this.add.graphics(100, 100);       
        _this.graphics30.lineStyle(2, 0x0000FF, 1);
        _this.graphics30.drawRect(715,280, 5, 5);
        _this.graphics30.alpha=0;
        _this.graphics30.name = "shape30";*/
        
        _this.graphics31 = _this.add.graphics(100, 100);       
        _this.graphics31.lineStyle(2, 0x0000FF, 1);
        _this.graphics31.drawRect(300, 120, 5, 5);
        _this.graphics31.alpha=0;
        _this.graphics31.name = "shape31";

        _this.graphics32 = _this.add.graphics(100, 100);       
        _this.graphics32.lineStyle(2, 0x0000FF, 1);
        _this.graphics32.drawRect(380, 120, 5, 5);
        _this.graphics32.alpha=0;
        _this.graphics32.name = "shape32";

        _this.graphics33 = _this.add.graphics(100, 100);       
        _this.graphics33.lineStyle(2, 0x0000FF, 1);
        _this.graphics33.drawRect(500, 120, 5, 5);
        _this.graphics33.alpha=0;
        _this.graphics33.name = "shape33";

        _this.graphics34 = _this.add.graphics(100, 100);       
        _this.graphics34.lineStyle(2, 0x0000FF, 1);
        _this.graphics34.drawRect(580, 120, 5, 5);
        _this.graphics34.alpha=0;
        _this.graphics34.name = "shape34";

        _this.graphics35 = _this.add.graphics(100, 100);       
        _this.graphics35.lineStyle(2, 0x0000FF, 1);
        _this.graphics35.drawRect(700, 120, 5, 5);
        _this.graphics35.alpha=0;
        _this.graphics35.name = "shape35";

        _this.graphics36 = _this.add.graphics(100, 100);       
        _this.graphics36.lineStyle(2, 0x0000FF, 1);
        _this.graphics36.drawRect(780,120, 5, 5);
        _this.graphics36.alpha=0;
        _this.graphics36.name = "shape36";
        
        _this.graphics37 = _this.add.graphics(100, 100);       
        _this.graphics37.lineStyle(2, 0x0000FF, 1);
        _this.graphics37.drawRect(300, 265, 5, 5);
        _this.graphics37.alpha=0;
        _this.graphics37.name = "shape37";

        _this.graphics38 = _this.add.graphics(100, 100);       
        _this.graphics38.lineStyle(2, 0x0000FF, 1);
        _this.graphics38.drawRect(380, 265, 5, 5);
        _this.graphics38.alpha=0;
        _this.graphics38.name = "shape38";

        _this.graphics39 = _this.add.graphics(100, 100);       
        _this.graphics39.lineStyle(2, 0x0000FF, 1);
        _this.graphics39.drawRect(500, 265, 5, 5);
        _this.graphics39.alpha=0;
        _this.graphics39.name = "shape39";

        _this.graphics40 = _this.add.graphics(100, 100);       
        _this.graphics40.lineStyle(2, 0x0000FF, 1);
        _this.graphics40.drawRect(580, 265, 5, 5);
        _this.graphics40.alpha=0;
        _this.graphics40.name = "shape40";

        _this.graphics41 = _this.add.graphics(100, 100);       
        _this.graphics41.lineStyle(2, 0x0000FF, 1);
        _this.graphics41.drawRect(700,265, 5, 5);
        _this.graphics41.alpha=0;
        _this.graphics41.name = "shape41";

        _this.graphics42 = _this.add.graphics(100, 100);       
        _this.graphics42.lineStyle(2, 0x0000FF, 1);
        _this.graphics42.drawRect(780,265, 5, 5);
        _this.graphics42.alpha=0;
        _this.graphics42.name = "shape42";
        
       /* _this.graphics43 = _this.add.graphics(100, 100);       
        _this.graphics43.lineStyle(2, 0x0000FF, 1);
        _this.graphics43.drawRect(430, 230, 5, 5);
        _this.graphics43.alpha=0;
        _this.graphics43.name = "shape43";

        _this.graphics44 = _this.add.graphics(100, 100);       
        _this.graphics44.lineStyle(2, 0x0000FF, 1);
        _this.graphics44.drawRect(480, 230, 5, 5);
        _this.graphics44.alpha=0;
        _this.graphics44.name = "shape44";

        _this.graphics45 = _this.add.graphics(100, 100);       
        _this.graphics45.lineStyle(2, 0x0000FF, 1);
        _this.graphics45.drawRect(560, 230, 5, 5);
        _this.graphics45.alpha=0;
        _this.graphics45.name = "shape45";

        _this.graphics46 = _this.add.graphics(100, 100);       
        _this.graphics46.lineStyle(2, 0x0000FF, 1);
        _this.graphics46.drawRect(610, 230, 5, 5);
        _this.graphics46.alpha=0;
        _this.graphics46.name = "shape46";

        _this.graphics47 = _this.add.graphics(100, 100);       
        _this.graphics47.lineStyle(2, 0x0000FF, 1);
        _this.graphics47.drawRect(690, 230, 5, 5);
        _this.graphics47.alpha=0;
        _this.graphics47.name = "shape47";

        _this.graphics48 = _this.add.graphics(100, 100);       
        _this.graphics48.lineStyle(2, 0x0000FF, 1);
        _this.graphics48.drawRect(750,230, 5, 5);
        _this.graphics48.alpha=0;
        _this.graphics48.name = "shape48";
        
        _this.graphics49 = _this.add.graphics(100, 100);       
        _this.graphics49.lineStyle(2, 0x0000FF, 1);
        _this.graphics49.drawRect(430, 325, 5, 5);
        _this.graphics49.alpha=0;
        _this.graphics49.name = "shape49";

        _this.graphics50 = _this.add.graphics(100, 100);       
        _this.graphics50.lineStyle(2, 0x0000FF, 1);
        _this.graphics50.drawRect(480, 325, 5, 5);
        _this.graphics50.alpha=0;
        _this.graphics50.name = "shape50";

        _this.graphics51 = _this.add.graphics(100, 100);       
        _this.graphics51.lineStyle(2, 0x0000FF, 1);
        _this.graphics51.drawRect(560, 325, 5, 5);
        _this.graphics51.alpha=0;
        _this.graphics51.name = "shape51";

        _this.graphics52 = _this.add.graphics(100, 100);       
        _this.graphics52.lineStyle(2, 0x0000FF, 1);
        _this.graphics52.drawRect(610, 325, 5, 5);
        _this.graphics52.alpha=0;
        _this.graphics52.name = "shape52";

        _this.graphics53 = _this.add.graphics(100, 100);       
        _this.graphics53.lineStyle(2, 0x0000FF, 1);
        _this.graphics53.drawRect(690, 325, 5, 5);
        _this.graphics53.alpha=0;
        _this.graphics53.name = "shape53";

        _this.graphics54 = _this.add.graphics(100, 100);       
        _this.graphics54.lineStyle(2, 0x0000FF, 1);
        _this.graphics54.drawRect(750,325, 5, 5);
        _this.graphics54.alpha=0;
        _this.graphics54.name = "shape54";*/
        
       /* _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);*/
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        /*_this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);*/
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        /*_this.GraphicGrp.add(_this.graphics16);_this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);*/
        _this.GraphicGrp.add(_this.graphics19);_this.GraphicGrp.add(_this.graphics20);_this.GraphicGrp.add(_this.graphics21); 
        _this.GraphicGrp.add(_this.graphics22);_this.GraphicGrp.add(_this.graphics23);_this.GraphicGrp.add(_this.graphics24);
        _this.GraphicGrp.add(_this.graphics25);_this.GraphicGrp.add(_this.graphics26);_this.GraphicGrp.add(_this.graphics27);
        /*_this.GraphicGrp.add(_this.graphics28);_this.GraphicGrp.add(_this.graphics29);_this.GraphicGrp.add(_this.graphics30); */
        _this.GraphicGrp.add(_this.graphics31);_this.GraphicGrp.add(_this.graphics32);_this.GraphicGrp.add(_this.graphics33); 
        _this.GraphicGrp.add(_this.graphics34);_this.GraphicGrp.add(_this.graphics35);_this.GraphicGrp.add(_this.graphics36);
        _this.GraphicGrp.add(_this.graphics37);_this.GraphicGrp.add(_this.graphics38);_this.GraphicGrp.add(_this.graphics39); 
        _this.GraphicGrp.add(_this.graphics40);_this.GraphicGrp.add(_this.graphics41);_this.GraphicGrp.add(_this.graphics42); 
        /*_this.GraphicGrp.add(_this.graphics43);_this.GraphicGrp.add(_this.graphics44);_this.GraphicGrp.add(_this.graphics45); 
        _this.GraphicGrp.add(_this.graphics46);_this.GraphicGrp.add(_this.graphics47);_this.GraphicGrp.add(_this.graphics48); 
        _this.GraphicGrp.add(_this.graphics49);_this.GraphicGrp.add(_this.graphics50);_this.GraphicGrp.add(_this.graphics51);
        _this.GraphicGrp.add(_this.graphics52);_this.GraphicGrp.add(_this.graphics53);_this.GraphicGrp.add(_this.graphics54); */
        
        _this.number=22;
     
     
          
 },
    
 gotoSixthQuestion:function()
 {
        _this.questioNo = 6;
        _this.slideGrp = _this.add.group();
     
        _this.screen = _this.add.sprite(670,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1.1,1); 
        
        _this.emptygrid = _this.add.sprite(667,293,'SG14_1_3emptygrid6');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
         _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
		 _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(667,293,'SG14_1_3grid6');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.redpentagon1 = _this.add.sprite(150,400,'SG14_1_3redpentagon1');
        _this.redpentagon1.anchor.setTo(0.5);
        _this.redpentagon1.scale.setTo(0.9,0.9); 
        _this.redpentagon1.inputEnabled = true;
        _this.redpentagon1.input.useHandCursor = true;
        _this.redpentagon1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.redpentagon2 = _this.add.sprite(150,200,'SG14_1_3redpentagon2');
        _this.redpentagon2.anchor.setTo(0.5);
        _this.redpentagon2.scale.setTo(1,1); 
        _this.redpentagon2.inputEnabled = true;
        _this.redpentagon2.input.useHandCursor = true;
        _this.redpentagon2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.orangepentagon1 = _this.add.sprite(300,400,'SG14_1_3orangepentagon1');
        _this.orangepentagon1.anchor.setTo(0.5);
        _this.orangepentagon1.scale.setTo(1,1); 
        _this.orangepentagon1.inputEnabled = true;
        _this.orangepentagon1.input.useHandCursor = true;
        _this.orangepentagon1.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.orangepentagon2 = _this.add.sprite(300,200,'SG14_1_3orangepentagon2');
        _this.orangepentagon2.anchor.setTo(0.5);
        _this.orangepentagon2.scale.setTo(1,1); 
        _this.orangepentagon2.inputEnabled = true;
        _this.orangepentagon2.input.useHandCursor = true;
        _this.orangepentagon2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.blue1 = _this.add.sprite(150,300,'SG14_1_3blue1');
        _this.blue1.anchor.setTo(0.5);
        _this.blue1.scale.setTo(1,1); 
        _this.blue1.inputEnabled = true;
        _this.blue1.input.useHandCursor = true;
        _this.blue1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.green1 = _this.add.sprite(300,300,'SG14_1_3green1');
        _this.green1.anchor.setTo(0.5);
        _this.green1.scale.setTo(1,1); 
        _this.green1.inputEnabled = true;
        _this.green1.input.useHandCursor = true;
        _this.green1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       
        _this.dragGrp.add(_this.redpentagon1);_this.dragGrp.add(_this.redpentagon2); _this.dragGrp.add(_this.orangepentagon1);
        _this.dragGrp.add(_this.orangepentagon2);_this.dragGrp.add(_this.blue1);_this.dragGrp.add(_this.green1);
       
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        
         _this.canadd1 = true;
         _this.canadd11 = true;
         _this.canadd17 = true;
         _this.canadd23 = true;
     
        _this.shape1 = _this.add.sprite(555,244,'SG14_1_3blue1');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
        //_this.shape1.visible=false;
        _this.shape1.name = "blue1";
     
        _this.shape2 = _this.add.sprite(725,245,'SG14_1_3blue1');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1,1); 
        _this.shape2.visible=false;
        _this.shape2.name = "blue2";
     
     
        _this.shape4 = _this.add.sprite(556,442,'SG14_1_3blue1');
    	_this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(1,1); 
        _this.shape4.visible=false;
        _this.shape4.name = "blue4";
     
        _this.shape5 = _this.add.sprite(724,442,'SG14_1_3blue1');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1,1); 
        _this.shape5.visible=false;
        _this.shape5.name = "blue5";
     
        _this.shape7 = _this.add.sprite(642,342,'SG14_1_3green1');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(1,1); 
        _this.shape7.visible=false;
        _this.shape7.name = "green1";
     
        _this.shape8 = _this.add.sprite(806,341,'SG14_1_3green1');
    	_this.shape8.anchor.setTo(0.5);
        _this.shape8.scale.setTo(1,1); 
        _this.shape8.visible=false;
        _this.shape8.name = "green2";
    
     
        _this.shape11 = _this.add.sprite(498,212,'SG14_1_3redpentagon1');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(1,1); 
        //_this.shape11.visible=false;
        _this.shape11.name = "redpenta1";
     
        _this.shape12 = _this.add.sprite(583,174,'SG14_1_3redpentagon2');
    	_this.shape12.anchor.setTo(0.5);
        _this.shape12.scale.setTo(1,1); 
        _this.shape12.visible=false;
        _this.shape12.name = "redpenta2";
     
        _this.shape13 = _this.add.sprite(668,212,'SG14_1_3redpentagon1');
    	_this.shape13.anchor.setTo(0.5);
        _this.shape13.scale.setTo(1,1); 
        _this.shape13.visible=false;
        _this.shape13.name = "redpenta3";
        
        _this.shape14 = _this.add.sprite(752.5,175,'SG14_1_3redpentagon2');
    	_this.shape14.anchor.setTo(0.5);
        _this.shape14.scale.setTo(1,1); 
        _this.shape14.visible=false;
        _this.shape14.name = "redpenta4";
     
        _this.shape15 = _this.add.sprite(837,213,'SG14_1_3redpentagon1');
    	_this.shape15.anchor.setTo(0.5);
        _this.shape15.scale.setTo(1,1); 
        _this.shape15.visible=false;
        _this.shape15.name = "redpenta5";
     
        
     
        _this.shape17 = _this.add.sprite(530,313,'SG14_1_3orangepentagon1');
    	_this.shape17.anchor.setTo(0.5);
        _this.shape17.scale.setTo(1,1); 
        //_this.shape17.visible=false;
        _this.shape17.name = "redpenta7";
     
        _this.shape18 = _this.add.sprite(615,274,'SG14_1_3orangepentagon2');
    	_this.shape18.anchor.setTo(0.5);
        _this.shape18.scale.setTo(1,1); 
        _this.shape18.visible=false;
        _this.shape18.name = "redpenta8";
     
        _this.shape19 = _this.add.sprite(699,314,'SG14_1_3orangepentagon1');
    	_this.shape19.anchor.setTo(0.5);
        _this.shape19.scale.setTo(1,1); 
        _this.shape19.visible=false;
        _this.shape19.name = "redpenta9";
     
        _this.shape20 = _this.add.sprite(784,275,'SG14_1_3orangepentagon2');
    	_this.shape20.anchor.setTo(0.5);
        _this.shape20.scale.setTo(1,1); 
        _this.shape20.visible=false;
        _this.shape20.name = "redpenta10";
     
        _this.shape23 = _this.add.sprite(499,410,'SG14_1_3redpentagon1');
    	_this.shape23.anchor.setTo(0.5);
        _this.shape23.scale.setTo(1,1); 
        //_this.shape23.visible=false;
        _this.shape23.name = "orangepenta1";
     
        _this.shape24 = _this.add.sprite(584.5,373,'SG14_1_3redpentagon2');
    	_this.shape24.anchor.setTo(0.5);
        _this.shape24.scale.setTo(1,1);
        _this.shape24.visible=false;
        _this.shape24.name = "orangepenta2";
     
        _this.shape25 = _this.add.sprite(668,411,'SG14_1_3redpentagon1');
    	_this.shape25.anchor.setTo(0.5);
        _this.shape25.scale.setTo(0.98,0.98); 
        _this.shape25.visible=false;
        _this.shape25.name = "orangepenta3";
     
        _this.shape26 = _this.add.sprite(750,373,'SG14_1_3redpentagon2');
    	_this.shape26.anchor.setTo(0.5);
        _this.shape26.scale.setTo(0.99,0.99); 
        _this.shape26.visible=false;
        _this.shape26.name = "orangepenta4";
     
        _this.shape27 = _this.add.sprite(834.5,410.5,'SG14_1_3redpentagon1');
    	_this.shape27.anchor.setTo(0.5);
        _this.shape27.scale.setTo(0.99,0.99); 
        _this.shape27.visible=false;
        _this.shape27.name = "orangepenta5";
     
     
        _this.shapeGrp1.add(_this.shape1);_this.shapeGrp1.add(_this.shape11);_this.shapeGrp1.add(_this.shape17);_this.shapeGrp1.add(_this.shape23);
         _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
     
        _this.shapeGrp.add(_this.shape2);_this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);_this.shapeGrp.add(_this.shape7);_this.shapeGrp.add(_this.shape8);
       _this.shapeGrp.add(_this.shape12);
        _this.shapeGrp.add(_this.shape13);_this.shapeGrp.add(_this.shape14);_this.shapeGrp.add(_this.shape15);
        _this.shapeGrp.add(_this.shape18);_this.shapeGrp.add(_this.shape19);_this.shapeGrp.add(_this.shape20);
        _this.shapeGrp.add(_this.shape24);
        _this.shapeGrp.add(_this.shape25);_this.shapeGrp.add(_this.shape26);_this.shapeGrp.add(_this.shape27);
           
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(450, 145, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(620, 145, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(450, 340, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(620, 340, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5"; 
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(540, 240, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(705, 240, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(390, 100, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(480, 80, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(565, 100, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(650, 80, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(730, 100, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
        
        
        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(425, 210, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";
        
        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(510, 180, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";
        
        _this.graphics19 = _this.add.graphics(100, 100);       
        _this.graphics19.lineStyle(2, 0x0000FF, 1);
        _this.graphics19.drawRect(595, 200, 5, 5);
        _this.graphics19.alpha=0;
        _this.graphics19.name = "shape19";
        
        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(680, 170, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";
        
        _this.graphics23 = _this.add.graphics(100, 100);       
        _this.graphics23.lineStyle(2, 0x0000FF, 1);
        _this.graphics23.drawRect(400, 300, 5, 5);
        _this.graphics23.alpha=0;
        _this.graphics23.name = "shape23";
        
        _this.graphics24 = _this.add.graphics(100, 100);       
        _this.graphics24.lineStyle(2, 0x0000FF, 1);
        _this.graphics24.drawRect(480, 270, 5, 5);
        _this.graphics24.alpha=0;
        _this.graphics24.name = "shape24";
        
        _this.graphics25 = _this.add.graphics(100, 100);       
        _this.graphics25.lineStyle(2, 0x0000FF, 1);
        _this.graphics25.drawRect(565, 300, 5, 5);
        _this.graphics25.alpha=0;
        _this.graphics25.name = "shape25";

        _this.graphics26 = _this.add.graphics(100, 100);       
        _this.graphics26.lineStyle(2, 0x0000FF, 1);
        _this.graphics26.drawRect(645, 270, 5, 5);
        _this.graphics26.alpha=0;
        _this.graphics26.name = "shape26";

        _this.graphics27 = _this.add.graphics(100, 100);       
        _this.graphics27.lineStyle(2, 0x0000FF, 1);
        _this.graphics27.drawRect(730, 300, 5, 5);
        _this.graphics27.alpha=0;
        _this.graphics27.name = "shape27";

        

        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);
        _this.GraphicGrp.add(_this.graphics19);_this.GraphicGrp.add(_this.graphics20);
        _this.GraphicGrp.add(_this.graphics23);_this.GraphicGrp.add(_this.graphics24);
        _this.GraphicGrp.add(_this.graphics25);_this.GraphicGrp.add(_this.graphics26);_this.GraphicGrp.add(_this.graphics27);
        
        _this.number=16;
     
       
 },
    
 gotoSeventhQuestion:function()
 {
        _this.questioNo = 7;
        
        _this.slideGrp = _this.add.group();
     
        _this.screen = _this.add.sprite(630,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1.3,1.1); 
        
        _this.emptygrid = _this.add.sprite(627,293,'SG14_1_3emptygrid7');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
         _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(627,293,'SG14_1_3grid7');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.redtriangle = _this.add.sprite(110,220,'SG14_1_3redtri');
        _this.redtriangle.anchor.setTo(0.5);
        _this.redtriangle.scale.setTo(0.9,0.9); 
        _this.redtriangle.inputEnabled = true;
        _this.redtriangle.input.useHandCursor = true;
        _this.redtriangle.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.yellowtriangle = _this.add.sprite(110,350,'SG14_1_3yellowtri');
        _this.yellowtriangle.anchor.setTo(0.5);
        _this.yellowtriangle.scale.setTo(0.9,0.9); 
        _this.yellowtriangle.inputEnabled = true;
        _this.yellowtriangle.input.useHandCursor = true;
        _this.yellowtriangle.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.bluesquare = _this.add.sprite(260,220,'SG14_1_3bsquare');
        _this.bluesquare.anchor.setTo(0.5);
        _this.bluesquare.scale.setTo(0.8,0.8); 
        _this.bluesquare.inputEnabled = true;
        _this.bluesquare.input.useHandCursor = true;
        _this.bluesquare.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.lbluesquare = _this.add.sprite(260,350,'SG14_1_3lbsquare');
        _this.lbluesquare.anchor.setTo(0.5);
        _this.lbluesquare.scale.setTo(0.8,0.8); 
        _this.lbluesquare.inputEnabled = true;
        _this.lbluesquare.input.useHandCursor = true;
        _this.lbluesquare.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       
        _this.dragGrp.add(_this.redtriangle);_this.dragGrp.add(_this.yellowtriangle);
        _this.dragGrp.add(_this.bluesquare);_this.dragGrp.add(_this.lbluesquare);
          
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        _this.canadd1 = true;
        _this.canadd2 = true;
        _this.canadd3 = true;
        _this.canadd25 = true;
        _this.canadd26 = true;
        
        _this.shape1 = _this.add.sprite(462,134,'SG14_1_3yellowtri');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
       // _this.shape1.visible=false;
        _this.shape1.name = "tri1";
     
        _this.shape2 = _this.add.sprite(517,134,'SG14_1_3redtri');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1,1); 
        //_this.shape2.visible=false;
        _this.shape2.name = "tri2";
     
        _this.shape3 = _this.add.sprite(572,134,'SG14_1_3yellowtri');
    	_this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(1,1); 
        //_this.shape3.visible=false;
        _this.shape3.name = "tri3";
     
        _this.shape4 = _this.add.sprite(628,134,'SG14_1_3redtri');
    	_this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(1,1); 
        _this.shape4.visible=false;
        _this.shape4.name = "tri4";
     
        _this.shape5 = _this.add.sprite(684,134,'SG14_1_3yellowtri');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1,1); 
        _this.shape5.visible=false;
        _this.shape5.name = "tri5";
     
        _this.shape6 = _this.add.sprite(739,134,'SG14_1_3redtri');
    	_this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(1,1); 
        _this.shape6.visible=false;
        _this.shape6.name = "tri6";
     
        _this.shape7 = _this.add.sprite(795,134,'SG14_1_3yellowtri');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(1,1); 
        _this.shape7.visible=false;
        _this.shape7.name = "tri7";
     
        _this.shape8 = _this.add.sprite(850,134,'SG14_1_3redtri');
    	_this.shape8.anchor.setTo(0.5);
        _this.shape8.scale.setTo(1,1); 
        _this.shape8.visible=false;
        _this.shape8.name = "tri8";
     
        _this.shape9 = _this.add.sprite(406,341,'SG14_1_3yellowtri');
    	_this.shape9.anchor.setTo(0.5);
        _this.shape9.scale.setTo(1,1); 
        _this.shape9.visible=false;
        _this.shape9.name = "tri9";
     
        _this.shape10 = _this.add.sprite(462,341,'SG14_1_3redtri');
    	_this.shape10.anchor.setTo(0.5);
        _this.shape10.scale.setTo(1,1); 
        _this.shape10.visible=false;
        _this.shape10.name = "tri10";
     
        _this.shape11 = _this.add.sprite(517,341,'SG14_1_3yellowtri');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(1,1); 
        _this.shape11.visible=false;
        _this.shape11.name = "tri11";
     
        _this.shape12 = _this.add.sprite(573,341,'SG14_1_3redtri');
    	_this.shape12.anchor.setTo(0.5);
        _this.shape12.scale.setTo(1,1); 
        _this.shape12.visible=false;
        _this.shape12.name = "tri12";
     
        _this.shape13 = _this.add.sprite(628,341,'SG14_1_3yellowtri');
    	_this.shape13.anchor.setTo(0.5);
        _this.shape13.scale.setTo(1,1); 
        _this.shape13.visible=false;
        _this.shape13.name = "tri13";
        
        _this.shape14 = _this.add.sprite(684,341,'SG14_1_3redtri');
    	_this.shape14.anchor.setTo(0.5);
        _this.shape14.scale.setTo(1,1); 
        _this.shape14.visible=false;
        _this.shape14.name = "tri14";
     
        _this.shape15 = _this.add.sprite(739.5,341,'SG14_1_3yellowtri');
    	_this.shape15.anchor.setTo(0.5);
        _this.shape15.scale.setTo(1,1); 
        _this.shape15.visible=false;
        _this.shape15.name = "tri15";
     
        _this.shape16 = _this.add.sprite(795,341,'SG14_1_3redtri');
    	_this.shape16.anchor.setTo(0.5);
        _this.shape16.scale.setTo(1,1); 
        _this.shape16.visible=false;
        _this.shape16.name = "tri16";
     
        
     
        _this.shape25 = _this.add.sprite(461,237,'SG14_1_3bsquare');
    	_this.shape25.anchor.setTo(0.5);
        _this.shape25.scale.setTo(1,1); 
        //_this.shape25.visible=false;
        _this.shape25.name = "square1";
     
        _this.shape26 = _this.add.sprite(573,237,'SG14_1_3lbsquare');
    	_this.shape26.anchor.setTo(0.5);
        _this.shape26.scale.setTo(1,1); 
        //_this.shape26.visible=false;
        _this.shape26.name = "square2";
     
        _this.shape27 = _this.add.sprite(684.5,237,'SG14_1_3bsquare');
    	_this.shape27.anchor.setTo(0.5);
        _this.shape27.scale.setTo(1,1); 
        _this.shape27.visible=false;
        _this.shape27.name = "square3";
     
        _this.shape28 = _this.add.sprite(796,237,'SG14_1_3lbsquare');
    	_this.shape28.anchor.setTo(0.5);
        _this.shape28.scale.setTo(1,1); 
        _this.shape28.visible=false;
        _this.shape28.name = "square4";
     
        _this.shape29 = _this.add.sprite(406,444,'SG14_1_3bsquare');
    	_this.shape29.anchor.setTo(0.5);
        _this.shape29.scale.setTo(1,1); 
        _this.shape29.visible=false;
        _this.shape29.name = "square5";
     
        _this.shape30 = _this.add.sprite(518,444,'SG14_1_3lbsquare');
    	_this.shape30.anchor.setTo(0.5);
        _this.shape30.scale.setTo(1,1); 
        _this.shape30.visible=false;
        _this.shape30.name = "square6";
     
        _this.shape31 = _this.add.sprite(629.5,444,'SG14_1_3bsquare');
    	_this.shape31.anchor.setTo(0.5);
        _this.shape31.scale.setTo(1,1); 
        _this.shape31.visible=false;
        _this.shape31.name = "square7";
     
        _this.shape32 = _this.add.sprite(741,444,'SG14_1_3lbsquare');
    	_this.shape32.anchor.setTo(0.5);
        _this.shape32.scale.setTo(1,1); 
        _this.shape32.visible=false;
        _this.shape32.name = "square8";
     
        _this.shapeGrp1.add(_this.shape1);_this.shapeGrp1.add(_this.shape2);_this.shapeGrp1.add(_this.shape3);_this.shapeGrp1.add(_this.shape25);_this.shapeGrp1.add(_this.shape26);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);_this.shapeGrp.add(_this.shape6);_this.shapeGrp.add(_this.shape7);_this.shapeGrp.add(_this.shape8);
        _this.shapeGrp.add(_this.shape9);_this.shapeGrp.add(_this.shape10);_this.shapeGrp.add(_this.shape11);_this.shapeGrp.add(_this.shape12);
        _this.shapeGrp.add(_this.shape13);_this.shapeGrp.add(_this.shape14);_this.shapeGrp.add(_this.shape15);_this.shapeGrp.add(_this.shape16);
       
        _this.shapeGrp.add(_this.shape27);_this.shapeGrp.add(_this.shape28);
        _this.shapeGrp.add(_this.shape29);_this.shapeGrp.add(_this.shape30);_this.shapeGrp.add(_this.shape31);_this.shapeGrp.add(_this.shape32);
     
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(350, 50, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(410, 20, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(470, 50, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(530, 20, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(580, 50, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(630, 20, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(690, 50, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(750, 20, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(300, 250, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(360, 220, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(420, 250, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(470, 220, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(525, 250, 5, 5);
       _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(580,220, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(630, 250, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
        
        _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(695, 220, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape16";
        
        _this.graphics25 = _this.add.graphics(100, 100);       
        _this.graphics25.lineStyle(2, 0x0000FF, 1);
        _this.graphics25.drawRect(360, 140, 5, 5);
        _this.graphics25.alpha=0;
        _this.graphics25.name = "shape25";

        _this.graphics26 = _this.add.graphics(100, 100);       
        _this.graphics26.lineStyle(2, 0x0000FF, 1);
        _this.graphics26.drawRect(470, 140, 5, 5);
        _this.graphics26.alpha=0;
        _this.graphics26.name = "shape26";

        _this.graphics27 = _this.add.graphics(100, 100);       
        _this.graphics27.lineStyle(2, 0x0000FF, 1);
        _this.graphics27.drawRect(580, 140, 5, 5);
        _this.graphics27.alpha=0;
        _this.graphics27.name = "shape27";

        _this.graphics28 = _this.add.graphics(100, 100);       
        _this.graphics28.lineStyle(2, 0x0000FF, 1);
        _this.graphics28.drawRect(690, 140, 5, 5);
        _this.graphics28.alpha=0;
        _this.graphics28.name = "shape28";

        _this.graphics29 = _this.add.graphics(100, 100);       
        _this.graphics29.lineStyle(2, 0x0000FF, 1);
        _this.graphics29.drawRect(300, 350, 5, 5);
        _this.graphics29.alpha=0;
        _this.graphics29.name = "shape29";

        _this.graphics30 = _this.add.graphics(100, 100);       
        _this.graphics30.lineStyle(2, 0x0000FF, 1);
        _this.graphics30.drawRect(410,350, 5, 5);
        _this.graphics30.alpha=0;
        _this.graphics30.name = "shape30";
        
        _this.graphics31 = _this.add.graphics(100, 100);       
        _this.graphics31.lineStyle(2, 0x0000FF, 1);
        _this.graphics31.drawRect(530, 350, 5, 5);
        _this.graphics31.alpha=0;
        _this.graphics31.name = "shape31";

        _this.graphics32 = _this.add.graphics(100, 100);       
        _this.graphics32.lineStyle(2, 0x0000FF, 1);
        _this.graphics32.drawRect(635, 350, 5, 5);
        _this.graphics32.alpha=0;
        _this.graphics32.name = "shape32";
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics16);
        _this.GraphicGrp.add(_this.graphics25);_this.GraphicGrp.add(_this.graphics26);_this.GraphicGrp.add(_this.graphics27);
        _this.GraphicGrp.add(_this.graphics28);_this.GraphicGrp.add(_this.graphics29);_this.GraphicGrp.add(_this.graphics30); 
        _this.GraphicGrp.add(_this.graphics31);_this.GraphicGrp.add(_this.graphics32); 
         
        _this.number=19;
        
     
 },
    
    
gotoEighthQuestion:function()
 {      
       _this.questioNo = 8;
        _this.slideGrp = _this.add.group();
        
        _this.screen = _this.add.sprite(600,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1.4,1); 
        
        _this.emptygrid = _this.add.sprite(597,293,'SG14_1_3emptygrid8');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(597,293,'SG14_1_3grid8');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.purplePenta = _this.add.sprite(150,350,'SG14_1_3purplePenta');
        _this.purplePenta.anchor.setTo(0.5);
        _this.purplePenta.scale.setTo(0.9,0.9); 
        _this.purplePenta.inputEnabled = true;
        _this.purplePenta.input.useHandCursor = true;
        _this.purplePenta.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.yellowPenta = _this.add.sprite(150,180,'SG14_1_3yellowPenta');
        _this.yellowPenta.anchor.setTo(0.5);
        _this.yellowPenta.scale.setTo(0.9,0.9); 
        _this.yellowPenta.inputEnabled = true;
        _this.yellowPenta.input.useHandCursor = true;
        _this.yellowPenta.events.onInputDown.add(_this.onDragStart,_this);
     
     
     
        _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       
        _this.dragGrp.add(_this.purplePenta);_this.dragGrp.add(_this.yellowPenta);
       

        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        _this.canadd3 = true;
        _this.canadd9 = true;
        
        _this.shape1 = _this.add.sprite(367,273,'SG14_1_3yellowPenta');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
        //_this.shape1.visible=false;
        _this.shape1.name = "hexa1";
     
        _this.shape2 = _this.add.sprite(517,165,'SG14_1_3yellowPenta');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1,1); 
        _this.shape2.visible=false;
        _this.shape2.name = "hexa2";
     
        _this.shape3 = _this.add.sprite(700,164,'SG14_1_3yellowPenta');
    	_this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(1,1); 
        _this.shape3.visible=false;
        _this.shape3.name = "hexa3";
     
        _this.shape4 = _this.add.sprite(551,273,'SG14_1_3yellowPenta');
    	_this.shape4.anchor.setTo(0.5);
        _this.shape4.scale.setTo(1,1); 
        _this.shape4.visible=false;
        _this.shape4.name = "hexa4";
     
        _this.shape5 = _this.add.sprite(735,272,'SG14_1_3yellowPenta');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1,1); 
        _this.shape5.visible=false;
        _this.shape5.name = "hexa5";
     
        _this.shape6 = _this.add.sprite(400,381,'SG14_1_3yellowPenta');
    	_this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(1,1); 
        _this.shape6.visible=false;
        _this.shape6.name = "hexa6";
     
        _this.shape7 = _this.add.sprite(587,380,'SG14_1_3yellowPenta');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(1,1); 
        _this.shape7.visible=false;
        _this.shape7.name = "hexa7";
     
        _this.shape8 = _this.add.sprite(770,380,'SG14_1_3yellowPenta');
    	_this.shape8.anchor.setTo(0.5);
        _this.shape8.scale.setTo(1,1); 
        _this.shape8.visible=false;
        _this.shape8.name = "hexa8";
     
        _this.shape9 = _this.add.sprite(425,206,'SG14_1_3purplePenta');
    	_this.shape9.anchor.setTo(0.5);
        _this.shape9.scale.setTo(1,1); 
        //_this.shape9.visible=false;
        _this.shape9.name = "hexa9";
     
        _this.shape10 = _this.add.sprite(610,206,'SG14_1_3purplePenta');
    	_this.shape10.anchor.setTo(0.5);
        _this.shape10.scale.setTo(1,1); 
        _this.shape10.visible=false;
        _this.shape10.name = "hexa10";
     
        _this.shape11 = _this.add.sprite(792,206,'SG14_1_3purplePenta');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(1,1); 
        _this.shape11.visible=false;
        _this.shape11.name = "square1";
     
        _this.shape12 = _this.add.sprite(459,314,'SG14_1_3purplePenta');
    	_this.shape12.anchor.setTo(0.5);
        _this.shape12.scale.setTo(1,1); 
        _this.shape12.visible=false;
        _this.shape12.name = "square2";
     
        _this.shape13 = _this.add.sprite(644,314,'SG14_1_3purplePenta');
    	_this.shape13.anchor.setTo(0.5);
        _this.shape13.scale.setTo(1,1); 
        _this.shape13.visible=false;
        _this.shape13.name = "square3";
        
        _this.shape14 = _this.add.sprite(828,314,'SG14_1_3purplePenta');
    	_this.shape14.anchor.setTo(0.5);
        _this.shape14.scale.setTo(1,1); 
        _this.shape14.visible=false;
        _this.shape14.name = "square4";
     
        _this.shape15 = _this.add.sprite(494,422,'SG14_1_3purplePenta');
    	_this.shape15.anchor.setTo(0.5);
        _this.shape15.scale.setTo(1,1); 
        _this.shape15.visible=false;
        _this.shape15.name = "square5";
     
        _this.shape16 = _this.add.sprite(679,422,'SG14_1_3purplePenta');
    	_this.shape16.anchor.setTo(0.5);
        _this.shape16.scale.setTo(1,1); 
        _this.shape16.visible=false;
        _this.shape16.name = "square6";
     
        
      
        _this.shapeGrp1.add(_this.shape1);_this.shapeGrp1.add(_this.shape9);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.shapeGrp.add(_this.shape2);_this.shapeGrp.add(_this.shape3);_this.shapeGrp.add(_this.shape4);
        _this.shapeGrp.add(_this.shape5);_this.shapeGrp.add(_this.shape6);_this.shapeGrp.add(_this.shape7);_this.shapeGrp.add(_this.shape8);
        _this.shapeGrp.add(_this.shape10);_this.shapeGrp.add(_this.shape11);_this.shapeGrp.add(_this.shape12);
        _this.shapeGrp.add(_this.shape13);_this.shapeGrp.add(_this.shape14);_this.shapeGrp.add(_this.shape15);_this.shapeGrp.add(_this.shape16);
        
         
        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(410, 70, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(590, 70, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(260, 180, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        
        _this.graphics4 = _this.add.graphics(100, 100);       
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(450, 180, 5, 5);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "shape4";
        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(630, 180, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(300, 290, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(480, 290, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        _this.graphics8 = _this.add.graphics(100, 100);       
        _this.graphics8.lineStyle(2, 0x0000FF, 1);
        _this.graphics8.drawRect(670, 290, 5, 5);
        _this.graphics8.alpha=0;
        _this.graphics8.name = "shape8";
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(320, 100, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(510, 100, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(690, 100, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
        _this.graphics12 = _this.add.graphics(100, 100);       
        _this.graphics12.lineStyle(2, 0x0000FF, 1);
        _this.graphics12.drawRect(350, 200, 5, 5);
        _this.graphics12.alpha=0;
        _this.graphics12.name = "shape12";
        
        _this.graphics13 = _this.add.graphics(100, 100);       
        _this.graphics13.lineStyle(2, 0x0000FF, 1);
        _this.graphics13.drawRect(540, 200, 5, 5);
        _this.graphics13.alpha=0;
        _this.graphics13.name = "shape13";
        
        _this.graphics14 = _this.add.graphics(100, 100);       
        _this.graphics14.lineStyle(2, 0x0000FF, 1);
        _this.graphics14.drawRect(720, 200, 5, 5);
        _this.graphics14.alpha=0;
        _this.graphics14.name = "shape14";
        
        _this.graphics15 = _this.add.graphics(100, 100);       
        _this.graphics15.lineStyle(2, 0x0000FF, 1);
        _this.graphics15.drawRect(390, 310, 5, 5);
        _this.graphics15.alpha=0;
        _this.graphics15.name = "shape15";
     
        _this.graphics16 = _this.add.graphics(100, 100);       
        _this.graphics16.lineStyle(2, 0x0000FF, 1);
        _this.graphics16.drawRect(570, 310, 5, 5);
        _this.graphics16.alpha=0;
        _this.graphics16.name = "shape15";
        
        
        
        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
        _this.GraphicGrp.add(_this.graphics4);_this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics8);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);_this.GraphicGrp.add(_this.graphics12);
        _this.GraphicGrp.add(_this.graphics13);_this.GraphicGrp.add(_this.graphics14);_this.GraphicGrp.add(_this.graphics15); 
        _this.GraphicGrp.add(_this.graphics16);
        
        _this.number=14;
     
       
 },
   
gotoNinthQuestion:function()
 {      
       _this.questioNo = 9;
        _this.slideGrp = _this.add.group();
        
        _this.screen = _this.add.sprite(678,295,'SG14_1_3screen');
    	_this.screen.anchor.setTo(0.5);
        _this.screen.scale.setTo(1,1); 
        
        _this.emptygrid = _this.add.sprite(675,296,'SG14_1_3emptygrid9');
    	_this.emptygrid.anchor.setTo(0.5);
        _this.emptygrid.scale.setTo(1,1); 
     
        _this.slideGrp.x = -1000;
         var tween = _this.add.tween(_this.slideGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
		 
        _this.slideGrp.add(_this.screen);
        _this.slideGrp.add(_this.emptygrid);
        
        _this.grid = _this.add.sprite(675,296,'SG14_1_3grid9');
    	_this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1,1); 
        _this.grid.visible=false;
        
        _this.dragGrp = _this.add.group();
        
        _this.octagon = _this.add.sprite(150,290,'SG14_1_3octagon');
        _this.octagon.anchor.setTo(0.5);
        _this.octagon.scale.setTo(0.9,0.9); 
        _this.octagon.inputEnabled = true;
        _this.octagon.input.useHandCursor = true;
        _this.octagon.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.purplesquare = _this.add.sprite(290,300,'SG14_1_3purplesquare');
        _this.purplesquare.anchor.setTo(0.5);
        _this.purplesquare.scale.setTo(1,1); 
        _this.purplesquare.inputEnabled = true;
        _this.purplesquare.input.useHandCursor = true;
        _this.purplesquare.events.onInputDown.add(_this.onDragStart,_this);
       
         _this.dragGrp.x = -1000;
         var tween = _this.add.tween(_this.dragGrp);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
       
        _this.dragGrp.add(_this.octagon);_this.dragGrp.add(_this.purplesquare); 
    
        _this.shapeGrp = _this.add.group();
        _this.shapeGrp1 = _this.add.group();
        
     _this.canadd1 = true;
     _this.canadd5 = true;
     _this.canadd17 = true;
        _this.shape1 = _this.add.sprite(543,165,'SG14_1_3octagon');
    	_this.shape1.anchor.setTo(0.5);
        _this.shape1.scale.setTo(1,1); 
       // _this.shape1.visible=false;
        _this.shape1.name = "octa1";
     
        _this.shape2 = _this.add.sprite(674.5,165,'SG14_1_3octagon');
    	_this.shape2.anchor.setTo(0.5);
        _this.shape2.scale.setTo(1,1); 
        _this.shape2.visible=false;
        _this.shape2.name = "octa2";
     
        _this.shape3 = _this.add.sprite(806,165,'SG14_1_3octagon');
    	_this.shape3.anchor.setTo(0.5);
        _this.shape3.scale.setTo(1,1); 
        _this.shape3.visible=false;
        _this.shape3.name = "octa3";
     
     
        _this.shape5 = _this.add.sprite(543,295,'SG14_1_3octagon');
    	_this.shape5.anchor.setTo(0.5);
        _this.shape5.scale.setTo(1,1); 
       // _this.shape5.visible=false;
        _this.shape5.name = "octa5";
     
        _this.shape6 = _this.add.sprite(674.5,295,'SG14_1_3octagon');
    	_this.shape6.anchor.setTo(0.5);
        _this.shape6.scale.setTo(1,1); 
        _this.shape6.visible=false;
        _this.shape6.name = "octa6";
     
        _this.shape7 = _this.add.sprite(806,295,'SG14_1_3octagon');
    	_this.shape7.anchor.setTo(0.5);
        _this.shape7.scale.setTo(1,1); 
        _this.shape7.visible=false;
        _this.shape7.name = "octa7";
     
     
        _this.shape9 = _this.add.sprite(543,427,'SG14_1_3octagon');
    	_this.shape9.anchor.setTo(0.5);
        _this.shape9.scale.setTo(1,1); 
        _this.shape9.visible=false;
        _this.shape9.name = "octa9";
     
        _this.shape10 = _this.add.sprite(674.5,427,'SG14_1_3octagon');
    	_this.shape10.anchor.setTo(0.5);
        _this.shape10.scale.setTo(1,1); 
        _this.shape10.visible=false;
        _this.shape10.name = "octa10";
     
        _this.shape11 = _this.add.sprite(806,427,'SG14_1_3octagon');
    	_this.shape11.anchor.setTo(0.5);
        _this.shape11.scale.setTo(1,1); 
        _this.shape11.visible=false;
        _this.shape11.name = "octa11";
     
     
        _this.shape17 = _this.add.sprite(609,230,'SG14_1_3purplesquare');
    	_this.shape17.anchor.setTo(0.5);
        _this.shape17.scale.setTo(1,1); 
        //_this.shape17.visible=false;
        _this.shape17.name = "square1";
     
        _this.shape18 = _this.add.sprite(740,230,'SG14_1_3purplesquare');
    	_this.shape18.anchor.setTo(0.5);
        _this.shape18.scale.setTo(1,1); 
        _this.shape18.visible=false;
        _this.shape18.name = "square2";
     
        _this.shape20 = _this.add.sprite(609,361,'SG14_1_3purplesquare');
    	_this.shape20.anchor.setTo(0.5);
        _this.shape20.scale.setTo(1,1); 
        _this.shape20.visible=false;
        _this.shape20.name = "square4";
     
        _this.shape21 = _this.add.sprite(740,361,'SG14_1_3purplesquare');
    	_this.shape21.anchor.setTo(0.5);
        _this.shape21.scale.setTo(1,1); 
        _this.shape21.visible=false;
        _this.shape21.name = "square5";
       
       
     
        _this.shapeGrp1.add(_this.shape1);_this.shapeGrp1.add(_this.shape5); _this.shapeGrp1.add(_this.shape17);
        _this.shapeGrp1.x = -1000;
         var tween = _this.add.tween(_this.shapeGrp1);
         tween.to({ x: 0 }, 2000,'Linear', true, 0);
     
        _this.shapeGrp.add(_this.shape2);_this.shapeGrp.add(_this.shape3);
        _this.shapeGrp.add(_this.shape6);_this.shapeGrp.add(_this.shape7);
        _this.shapeGrp.add(_this.shape9);_this.shapeGrp.add(_this.shape10);_this.shapeGrp.add(_this.shape11);
        _this.shapeGrp.add(_this.shape18);_this.shapeGrp.add(_this.shape20);
        _this.shapeGrp.add(_this.shape21);

        _this.GraphicGrp = _this.add.group();
      
        _this.graphics1 = _this.add.graphics(100, 100);       
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(440, 60, 5, 5);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "shape1"
        
        _this.graphics2 = _this.add.graphics(100, 100);       
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(567, 60, 5, 5);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "shape2";
        
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(704, 60, 5, 5);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "shape3";
        

        
        _this.graphics5 = _this.add.graphics(100, 100);       
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(440, 187, 5, 5);
        _this.graphics5.alpha=0;
        _this.graphics5.name = "shape5";
        
        _this.graphics6 = _this.add.graphics(100, 100);       
        _this.graphics6.lineStyle(2, 0x0000FF, 1);
        _this.graphics6.drawRect(567, 187, 5, 5);
        _this.graphics6.alpha=0;
        _this.graphics6.name = "shape6";
        
        _this.graphics7 = _this.add.graphics(100, 100);       
        _this.graphics7.lineStyle(2, 0x0000FF, 1);
        _this.graphics7.drawRect(704, 187, 5, 5);
        _this.graphics7.alpha=0;
        _this.graphics7.name = "shape7";
        
        
        _this.graphics9 = _this.add.graphics(100, 100);       
        _this.graphics9.lineStyle(2, 0x0000FF, 1);
        _this.graphics9.drawRect(440, 320, 5, 5);
        _this.graphics9.alpha=0;
        _this.graphics9.name = "shape9";
        
        _this.graphics10 = _this.add.graphics(100, 100);       
        _this.graphics10.lineStyle(2, 0x0000FF, 1);
        _this.graphics10.drawRect(567, 320, 5, 5);
        _this.graphics10.alpha=0;
        _this.graphics10.name = "shape10";
        
        _this.graphics11 = _this.add.graphics(100, 100);       
        _this.graphics11.lineStyle(2, 0x0000FF, 1);
        _this.graphics11.drawRect(704, 320, 5, 5);
        _this.graphics11.alpha=0;
        _this.graphics11.name = "shape11";
        
       
        
        _this.graphics17 = _this.add.graphics(100, 100);       
        _this.graphics17.lineStyle(2, 0x0000FF, 1);
        _this.graphics17.drawRect(510, 125, 5, 5);
        _this.graphics17.alpha=0;
        _this.graphics17.name = "shape17";
        
        _this.graphics18 = _this.add.graphics(100, 100);       
        _this.graphics18.lineStyle(2, 0x0000FF, 1);
        _this.graphics18.drawRect(640, 125, 5, 5);
        _this.graphics18.alpha=0;
        _this.graphics18.name = "shape18";
        
       
        
        _this.graphics20 = _this.add.graphics(100, 100);       
        _this.graphics20.lineStyle(2, 0x0000FF, 1);
        _this.graphics20.drawRect(510, 260, 5, 5);
        _this.graphics20.alpha=0;
        _this.graphics20.name = "shape20";
        
        _this.graphics21 = _this.add.graphics(100, 100);       
        _this.graphics21.lineStyle(2, 0x0000FF, 1);
        _this.graphics21.drawRect(640, 260, 5, 5);
        _this.graphics21.alpha=0;
        _this.graphics21.name = "shape21";
        
        

        _this.GraphicGrp.add(_this.graphics1);_this.GraphicGrp.add(_this.graphics2);_this.GraphicGrp.add(_this.graphics3);
       _this.GraphicGrp.add(_this.graphics5);_this.GraphicGrp.add(_this.graphics6);
        _this.GraphicGrp.add(_this.graphics7);_this.GraphicGrp.add(_this.graphics9); 
        _this.GraphicGrp.add(_this.graphics10);_this.GraphicGrp.add(_this.graphics11);
        _this.GraphicGrp.add(_this.graphics17);_this.GraphicGrp.add(_this.graphics18);
        _this.GraphicGrp.add(_this.graphics20);_this.GraphicGrp.add(_this.graphics21); 
       
         
        _this.number=10;
     
       
 },
     
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
           

    removeCelebration:function()
	{
        //console.log("removeCeleb");
		celebration = false;
		//console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
		  _this.no11++;

           _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
		   
		  if(_this.no11<6)
         {
                        
             _this.canadd1=false;_this.canadd2=false;_this.canadd3=false;_this.canadd4=false;_this.canadd5=false;_this.canadd6=false;
             _this.canadd7=false;_this.canadd8=false;_this.canadd9=false;_this.canadd10=false;_this.canadd11=false;_this.canadd12=false; _this.canadd13=false;_this.canadd14=false;_this.canadd15=false;_this.canadd16=false;_this.canadd17=false;_this.canadd18=false;
             _this.canadd19=false;_this.canadd20=false;_this.canadd21=false;_this.canadd22=false;_this.canadd23=false;_this.canadd24=false;
             _this.canadd25=false;_this.canadd26=false;_this.canadd27=false;_this.canadd28=false;_this.canadd29=false;_this.canadd30=false;
             _this.canadd31=false;_this.canadd32=false;_this.canadd33=false;_this.canadd34=false;_this.canadd35=false;_this.canadd36=false;
             _this.canadd37=false;_this.canadd38=false;_this.canadd39=false;_this.canadd40=false;_this.canadd41=false;_this.canadd42=false;
             _this.canadd43=false;_this.canadd44=false;_this.canadd45=false;_this.canadd46=false;_this.canadd47=false;_this.canadd48=false;
             _this.canadd49=false;_this.canadd50=false;_this.canadd51=false; _this.canadd52=false;_this.canadd53=false;_this.canadd54=false;   
             _this.shapeGrp.destroy();
             _this.dragGrp.destroy();
             _this.GraphicGrp.destroy();
             _this.grid.destroy();
             _this.slideGrp.destroy();
             _this.getQuestion();
                    
          }
        
        else
         {
                         
               _this.stopvoice();
                _this.state.start('sg14_1_3Score');
         }



		
	},
    
   
     
    
  correctAns:function(target)
	{
       
       
        _this.stopvoice();
       // target.events.onInputDown.removeAll();
        _this.speaker.inputEnabled=false;
       // _this.rightmark.inputEnabled=false;
        
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: target,
                    access_token: window.acctkn 
               } 
               
         // absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
       if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }

                if(_this.timer1)
               {
                    _this.timer1.stop();
                    _this.timer1 = null;
               }
        _this.currentTime = window.timeSaveFunc();
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
            _this.sceneCount++;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
               
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
        _this.count1++;
       
        _this.speaker.inputEnabled=false;
		_this.celebration = true;
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
       
        _this.shapeGrp.destroy();
        _this.shapeGrp1.destroy();
        _this.emptygrid.destroy();
        
                 _this.tween5 = this.add.tween(_this.grid.scale);
                 _this.tween5.to({ x:1.1, y:1.1}, 300,'Linear', true, 0);
                 _this.time.events.add(1300, function(){
                  var killTween = this.add.tween(_this.grid.scale);
                  killTween.to({x:0,y:0}, 600, Phaser.Easing.Linear.None);
                  killTween.onComplete.addOnce(function(){
                 _this.grid.kill();
                 }, this);
                 killTween.start();
                },_this);
        
        if(_this.questioNo==7)
            {
                 _this.tween5 = this.add.tween(_this.grid.scale);
                 _this.tween5.to({ x:1.02, y:1.02}, 300,'Linear', true, 0);
                 _this.time.events.add(1300, function(){
                  var killTween = this.add.tween(_this.grid.scale);
                  killTween.to({x:0,y:0}, 600, Phaser.Easing.Linear.None);
                  killTween.onComplete.addOnce(function(){
                 _this.grid.kill();
                 }, this);
                 killTween.start();
                },_this);
            }

        _this.time.events.add(2700, _this.removeCelebration, _this);	
        
	},

    

  wrongAns:function(target)
	{
       
        _this.stopvoice();
       
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
       
          
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
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/English/sg14.1.3E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Hindi/sg14.1.3H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Kannada/sg14.1.3K.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Gujrati/sg14.1.3.mp3");
						// _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Marathi/sg14.1.3.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Telugu/sg14.1.3.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Tamil/sg14.1.3.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Urdu/sg14.1.3.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg14.1.3/Odiya/sg14.1.3.mp3");
                    }
                    break;

                
             }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
                
   
    stopvoice:function(){
            
          if(_this.playQuestionSound)
          {
               if(_this.playQuestionSound.contains(_this.src))
               {
                    _this.playQuestionSound.removeChild(_this.src);
                    _this.src = null;
               }
               if(!_this.playQuestionSound.paused)
               {
                   //console.log("here");
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
        }         
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       