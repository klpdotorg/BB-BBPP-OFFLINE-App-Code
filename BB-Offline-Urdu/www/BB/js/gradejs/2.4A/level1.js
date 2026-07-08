Game.grade2_4Alevel1=function(){
 /*bg1;
 starsGroup;
 dragBox;
 count;
 gameBoxGroup;
 crocsGroup;
 tickMark;
 objGroup;
 rightOrderArray = [];
 glowOrderArray = [];
 no1,no2,no3;
 count;
 count1;
 qArrays = [];
 qArrays1 = [];
 qArrays2 = [];
 graphics;
 numGroup;
 selectedAns = "";
 rightAns = "";
 mainSprite;
 tapeXPos = 0;
 tapeYPos = 0;

 enterTxt;

 noofAttempts;
 timer;
 AnsTimerCount;

 gameid,questionid;*/
    
};


Game.grade2_4Alevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "2.4A";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("length2_4A",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade3ML1){

            window.grade3ML1 = true;

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

         _this.load.image('Level24A_bg1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
        _this.load.image('Level24B_bg1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
        
        
        
       // _this.load.atlas('Level24A_backbtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4A/backbtn.json');
        //_this.load.atlas('Level24A_speaker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4A/speaker.json');
        //_this.load.atlas('Level24A_starAnim',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4A/starAnim.json');
        _this.load.image('Level24A_cloud',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/cloud.png');
       // _this.load.atlas('Level24A_btn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4A/btn.json');
        _this.load.image('Level24A_bg3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg3.png');
        //_this.load.image('Level24A_tittleBaar',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level24A_replay',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4A/reply.json');
        _this.load.atlas('Level24A_numbg',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/2.4A/numbg.json');
        _this.load.atlas('Level24A_rightBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/rightBtn.json');
        _this.load.atlas('Level24A_wrongBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/wrongBtn.json');
        
        
        _this.load.atlas('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape15cm.json');
        _this.load.atlas('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape30cm.json');
        _this.load.atlas('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape100cm.json');
        _this.load.atlas('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,window.baseUrl+'json/gradeJson/2.4A/scaleMarker.json');
        _this.load.image('Level24A_scaleMarkerNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
        
        _this.load.image('Level24A_txtbox',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/box.png');
        _this.load.image('Level24A_tape1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape1.png');
        _this.load.image('Level24A_tape2',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape2.png');
        _this.load.image('Level24A_tape3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape3.png');
       // _this.load.image('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png');
       // _this.load.image('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png');
       // _this.load.image('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png');
        _this.load.image('Level24A_scale',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scale.png');
        _this.load.image('Level24A_scaleNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
        //_this.load.image('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png');
        _this.load.image('Level24A_tapeTint',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        _this.load.atlas('Level24A_shoe',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe.json');
        _this.load.atlas('Level24A_shoe2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe2.json');
        _this.load.atlas('Level24A_fish',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/fish.png' ,window.baseUrl+'json/gradeJson/2.4A/fish.json');
        _this.load.atlas('Level24A_clip',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/clip.png' ,window.baseUrl+'json/gradeJson/2.4A/clip.json');
        _this.load.atlas('Level24A_pencil',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pencil.png' ,window.baseUrl+'json/gradeJson/2.4A/pencil.json');
        _this.load.atlas('Level24A_screwDriver',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,window.baseUrl+'json/gradeJson/2.4A/screwDriver.json');
        _this.load.atlas('Level24A_key',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/key.png' ,window.baseUrl+'json/gradeJson/2.4A/key.json');
        _this.load.atlas('Level24A_watch',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/watch.png' ,window.baseUrl+'json/gradeJson/2.4A/watch.json');
        _this.load.atlas('Level24A_pen',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pen.png' ,window.baseUrl+'json/gradeJson/2.4A/pen.json');
        _this.load.atlas('Level24A_scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/scale1.json');
        _this.load.atlas('Level24A_scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/scale2.json');
        _this.load.atlas('Level24A_bat',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/bat.png' ,window.baseUrl+'json/gradeJson/2.4A/bat.json');
        _this.load.atlas('Level24A_cup',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/cup.png' ,window.baseUrl+'json/gradeJson/2.4A/cup.json');
        _this.load.atlas('Level24A_jug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/jug.png' ,window.baseUrl+'json/gradeJson/2.4A/jug.json');
        _this.load.atlas('Level24A_chair',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/chair.png' ,window.baseUrl+'json/gradeJson/2.4A/chair.json');
        _this.load.atlas('Level24A_mug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/mug.png' ,window.baseUrl+'json/gradeJson/2.4A/mug.json');
        _this.load.atlas('Level24A_table',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/table.png' ,window.baseUrl+'json/gradeJson/2.4A/table.json');
        _this.load.atlas('Level24A_pot',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pot.png' ,window.baseUrl+'json/gradeJson/2.4A/pot.json');
        
        
        _this.load.atlas('Level24A_level2Scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale1.json');
        _this.load.atlas('Level24A_level2Scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale2.json');
        _this.load.atlas('Level24A_level2Scale3',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale3.json');
        _this.load.atlas('Level24A_tree',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/tree.png' ,window.baseUrl+'json/gradeJson/2.4A/tree.json');
        _this.load.atlas('Level24A_tape4',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape4.png' ,window.baseUrl+'json/gradeJson/2.4A/tape4.json');
        _this.load.atlas('Level24A_car',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/car.png' ,window.baseUrl+'json/gradeJson/2.4A/car.json');
        _this.load.atlas('Level24A_carpet',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/carpet.png' ,window.baseUrl+'json/gradeJson/2.4A/carpet.json');
        
        _this.load.atlas('Level24B_birds1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/birds1.png' ,window.baseUrl+'json/gradeJson/2.4A/birds1.json');
        _this.load.atlas('Level24B_animals',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/animals.png' ,window.baseUrl+'json/gradeJson/2.4A/animals.json');
        _this.load.atlas('Level24B_snake',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/snake.png' ,window.baseUrl+'json/gradeJson/2.4A/snake.json');
        _this.load.atlas('Level24B_tables',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/tables.png' ,window.baseUrl+'json/gradeJson/2.4A/tables.json');
        _this.load.atlas('Level24B_buildings',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/buildings.png' ,window.baseUrl+'json/gradeJson/2.4A/buildings.json');
        _this.load.atlas('Level24B_table3',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/table3.png' ,window.baseUrl+'json/gradeJson/2.4A/table3.json');
        _this.load.atlas('Level24B_gate',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/gate.png' ,window.baseUrl+'json/gradeJson/2.4A/gate.json');

         //_this.load.atlas('DisplayScale',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/DisplayScale.png' ,window.baseUrl+'json/gradeJson/2.4A/DisplayScale.json');
         _this.load.atlas('DisplayScale',window.baseUrl+'assets/newAssets/DisplayScale.png' ,window.baseUrl+'assets/newAssets/DisplayScale.json');
       

    }

    },


	create:function(game){
        
		_this.amplify = null;
		noofAttempts=0;
		AnsTimerCount=0;
		_this.sceneCount = 0;

        selectedAns = "";
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		

        _this.q = 0;
        no1=0;
        no2=0;
        no3=0;
        
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays1 = [11,12,13,14,15,16,17,18];
        qArrays2 = [9,10];
        qArrays = this.shuffle(qArrays);
        qArrays1 = this.shuffle(qArrays1);
        count=0;
        count1=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level24A_bg1');
        
		_this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
		
        _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            console.log("yyyyy"+_this.q);
            _this.getVoice(_this.q);
            
        },_this);
		
		_this.timebg=this.add.sprite(305,6,'Level42C_timer');
		_this.timebg.scale.setTo(1,1);
			
		_this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
        
         _this.generateStarsForTheScene(6);
        
        graphics = this.add.graphics(0, 400);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,960,120);		
		graphics.boundsPadding = 0;
		graphics.alpha=0;
			      
        //this.generateStarsForTheScene(6);
        
        //no1++;
        this.getQuestion();

    },
    
	updateTimer:function() {        
     _this.counterForTimer++;
     if(_this.counterForTimer>59)
         {
          _this.counterForTimer = 0;
           if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
                        }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
         }
                else{
                        if (_this.counterForTimer < 10)        
                                _this.seconds = '0' + _this.counterForTimer;
                        else
                                _this.seconds = _this.counterForTimer;
                    }
     _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
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
	
		 noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

		timer = this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);
	
		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
        _this.speakerbtn.inputEnabled=true;     
        _this.speakerbtn.input.useHandCursor = true;
    	////console.log("get"+no1);
        
        
        if(no1<4)
        {
            //console.log("if");
            _this.q = qArrays[no1]; 
            if(no1==0)
                this.getVoice(1);
            no1++;
        }
        else if(no1>3&&no1<8)
        {
            //console.log("else")
            _this.q = qArrays1[no2]; 
            if(no1==4)
                this.getVoice(11);
            no1++;
            no2++;
        }
        else
        {
            //console.log("in here qq"+no3);
            _this.q = qArrays2[no3];
            if(no1==8)
                this.getVoice(1);
            no1++;
            no3++;
        }
        //console.log("getq=="+q);
    	switch(_this.q)      
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwevelvethQuestion();
    				break;
            case 13: this.gotoThirteenthQuestion();
    				break;
            case 14: this.gotoFourteenthQuestion();
    				break;
            case 15: this.gotoFifteenthQuestion();
    				break;
            case 16: this.gotoSixteenthQuestion();
    				break;
            case 17: this.gotoSeventeenthQuestion();
    				break;
            case 18: this.gotoEightteenthQuestion();
    				break;
    	}
    },
     
   
    removeEverthing:function() 
    {
		_this.timer1.stop();
        this.stopVoice();
        numGroup.destroy();
        objGroup.destroy();
        selectedAns="";
        tapePos = 0;
        if(no1<6)
        {
            count =0;
            //no1++;
           // no2++;
            this.getQuestion();    
        }
        else
        {
			_this.timer1.stop();
			_this.timer1 = null;
            this.stopVoice();
           // //console.log("gameover");
            this.state.start('grade2_4AScore');
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        var x = 50;
		var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
             var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;
            
            /*var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=70;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
        
        var wrongbtn = numGroup.create(x+100,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
		//wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+160,505,'tick');
        rightbtn.anchor.setTo(0.5);
		//rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
       // rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        
		 enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';
        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
            //text.fontWeight = 'bold';
       // enterTxt.fill = '#65B4C3';
	   enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){ _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			target.frame = 1;
		    var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: "Level24A_CrossButton", 
				access_token: window.acctkn 
			} 
			_this.time.events.add(300, function(){ target.frame = 0;}, _this);
			//absdsjsapi.saveInteractEvent(interactEvent);
			enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
            target.frame = 1;
            noofAttempts++;
             _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: "Level24A_TickButton", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
					if(timer)
                    {
                        timer.stop();
					   timer = null; 
                    }
					
				var currentTime = window.timeSaveFunc();
						var saveAsment = 
						{ 
							id_game_play: _this.savedVar,
							id_question: _this.questionid,  
							pass: "Yes",
							time2answer: AnsTimerCount,
							attempts: noofAttempts,
							date_time_submission: currentTime, 
							access_token: window.acctkn 
						}
				
				//absdsjsapi.saveAssessment(saveAsment);
		          telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

                    _this.speakerbtn.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;
                    //mainSprite.frame = 1;
                    var anim = mainSprite.animations.add('glow');
                    anim.play(12);
                    _this.cmusic1 = _this.add.audio('celebr');
		_this.cmusic1.play();
                    var starAnim = starsGroup.getChildAt(count1);
                   // //console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					//noofAttempts++;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, mainSprite);
                    _this.wmusic1 = _this.add.audio('waudio');
		_this.wmusic1.play(); 
                    //aiyoh.play(); 
                    objGroup.getByName('tape15cm').x = tapeXPos;
                    objGroup.getByName('tape15cm').y = tapeYPos;
                   this.time.events.add(300, function(){target.frame = 0;},this);
                }
        },this);
    },
    
    
    numClicked:function(target){
        ////console.log(target.name);
       // target.frame = 1;
	   var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: "Level24A_NumberBtn"+target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
         _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

        if(selectedAns.length<3)
        {
            selectedAns += target.frame;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // //console.log(selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
		
		_this.questionid = 1;
		
        //console.log("qno=="+no1);
        
        // this.getVoice(1);
        
         this.addNumberPad();
        

        objGroup = this.add.group();
    
        mainSprite = this.add.sprite(560,192,'Level24A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
      
        rightAns = "7";
        
        var tape15cm = this.add.sprite(320,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);                    
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        tape15cm.events.onInputDown.add(function(target){
       // //console.log(target.x);
            
			 _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			
        target.x = this.input.x;
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		 _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			
			},this);
			
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();

			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: "Level24A_MeasuringTape", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
           
            ////console.log(this.input.x);
            
            if(this.input.x>=720)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 707;
            }
            else if(this.input.x<=300)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 220;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(220,361,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
     },
    
    gotoSecondQuestion:function(){
		_this.questionid = 1;
		
        //console.log("qno=="+no1);
       
       // this.getVoice(2);
       
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(670,250,'Level24A_clip');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "3";
        
        var tape15cm = this.add.sprite(550,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			

            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
			
       // //console.log(target.x);
        target.x = this.input.x;
            
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
         var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: "Level24A_MeasuringTape", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop",
				res_id: "Level24A_MeasuringTape", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 711;
            }
            else if(this.input.x<=540)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 550;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){/*//console.log("sound complete");*/},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 450;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(450,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoThirdQuestion:function(){
		_this.questionid = 1;
		
        //console.log("qno=="+no1);
        
       // this.getVoice(3);
       
      	this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,220,'Level24A_fish');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "9";
        
        var tape15cm = this.add.sprite(320,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 717;
            }
            else if(this.input.x<=300)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 220;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(220,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoFourthQuestion:function(){
		_this.questionid = 1;
		
        //console.log("qno=="+no1);
       
        
        // this.getVoice(4);
       
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(620,250,'Level24A_pencil');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "5";
        
         var tape15cm = this.add.sprite(500,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
        target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(this.input.x<=480)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 500;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 400;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(400,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFifthQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no1);
       
       //  this.getVoice(5);
       
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(580,230,'Level24A_screwDriver');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "14";
        
         var tape15cm = this.add.sprite(235,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=890)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(this.input.x<=220)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 235;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 130;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(130,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
  
    gotoSixthQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no1);
       
     //   this.getVoice(6);
       
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(600,240,'Level24A_key');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        //mainSprite.width -= 8;
        
        rightAns = "4";
        
         var tape15cm = this.add.sprite(445,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=680)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 662;
            }
            else if(this.input.x<=430)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 445;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 340;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(340,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
     
    gotoSeventhQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no1);
        
      //  this.getVoice(7);
       
         this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,230,'Level24A_watch');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "8";
        
         var tape15cm = this.add.sprite(360,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
            
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(this.input.x<=340)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 360;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 250;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(250,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },

    
    gotoEighthQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no1);
        
       //  this.getVoice(8);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(630,230,'Level24A_pen');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 5;
        
        rightAns = "12";
        
         var tape15cm = this.add.sprite(220,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=890)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 873;
            }
            else if(this.input.x<=200)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 110;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
 
    
    
    gotoNinthQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no3);
    
    // this.getVoice(9);
       
     this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,260,'Level24A_scale1');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 7;
        
        rightAns = "15";
        
         var tape15cm = this.add.sprite(220,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            target.x = this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);   
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=900)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(this.input.x<=210)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 110;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
        
    gotoTenthQuestion:function(){
		_this.questionid = 1;
        //console.log("qno=="+no3);
        
      //  this.getVoice(10);
       
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(538,255,'Level24A_scale2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 14;
        
        rightAns = "30";
        
        var tape15cm = this.add.sprite(150,340,'Level24A_tape30cm');
        tape15cm.anchor.setTo(0.95,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            target.x = this.input.x;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.x>=920)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 903;
            }
            else if(this.input.x<=130)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 150;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(90,320,'Level24A_tape2');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoEleventhQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
       
        // this.getVoice(11);
      
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(505,348,'Level24A_shoe2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width += 10;
        mainSprite.height += 50;
        
        rightAns = "40";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);   
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=295)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 285;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
       
    gotoTwevelvethQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
        
     //    this.getVoice(12);
       
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(490,326,'Level24A_bat');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "60";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);      
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=235)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 222;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoThirteenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
        
       //  this.getVoice(13);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,405,'Level24A_cup');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "10";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=385)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 374;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFourteenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
        
       // this.getVoice(14);
       
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,362,'Level24A_jug');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "30";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=325)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 315;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFifteenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
       
       //  this.getVoice(15);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(510,302,'Level24A_chair');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "70";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=200)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 192;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    
    gotoSixteenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
        
       // this.getVoice(16);
       
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,380,'Level24A_mug');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "20";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=355)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 345;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoSeventeenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
       
       // this.getVoice(17);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(510,332,'Level24A_table');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "50";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=265)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 254;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoEightteenthQuestion:function(){
		_this.questionid = 2;
        //console.log("qno=="+no2);
        
      //  this.getVoice(18);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,272,'Level24A_pot');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "90";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this); 
        tape15cm.events.onDragStop.add(function(target){_this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(this.input.x);
            
            if(this.input.y>=140)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 131;
            }
            else if(this.input.y<=120)
            {
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
   
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX-15, 10,'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
   /* getVoice:function(question){
        this.stopVoice();
        switch(question)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:if(window.languageSelected=="English")
                        Eng_24A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A1.play();
                    else
                        Kan_24A1.play();
                    break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:if(window.languageSelected=="English")
                        Eng_24B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24B1.play();
                    else
                        Kan_24B1.play();
                    break;
            
        }
    },
    
    stopVoice:function(){
        Eng_24A1.stop();
        Hin_24A1.stop();
        Kan_24A1.stop();
        Eng_24B1.stop();
        Hin_24B1.stop();
        Kan_24B1.stop();
    },*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        console.log("question"+question);
         switch(question)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/English/2.4A1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Hindi/2.4A1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Kannada/2.4A1.mp3");
                        }
                        else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.4A/2.4A1.mp3");
                        }
						 else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Marathi/2.4A1.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Telugu/2.4A1.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Tamil/2.4A1.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Urdu/2.4A1.mp3");
                              }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Odiya/2.4A1.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/English/2.4B1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Hindi/2.4B1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Kannada/2.4B1.mp3");
                        }
                        else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.4A/2.4A2.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Marathi/2.4B1.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Telugu/2.4B1.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Tamil/2.4B1.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Urdu/2.4B1.mp3");
                              }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Odiya/2.4B1.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
                 console.log("stop"); 
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

       /* delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1,no2,no3;
        delete count;
        delete count1;
        delete qArrays;
        delete qArrays1;
        delete qArrays2;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete rightAns;
        delete mainSprite;
        delete tapeXPos;
        delete tapeYPos;

        delete enterTxt;

        delete noofAttempts;
        delete timer;
        delete AnsTimerCount;

        delete gameid,questionid;*/
        
    }

};