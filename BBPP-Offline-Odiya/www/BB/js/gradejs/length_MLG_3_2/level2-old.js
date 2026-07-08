Game.length_MLG_3_2level2=function(){
    /* bg1;
     starsGroup;
     dragBox;
     count;
     gameBoxGroup;
     crocsGroup;
     tickMark;
     objGroup;
     rightOrderArray = [];
     glowOrderArray = [];
     no1;
     count;
     count1;
     qArrays = [];
     graphics;
     numGroup;
     selectedAns = "";
     rightAns = "";
     mainSprite;
     speaker;
     enterTxt;

     noofAttempts;
     timer;
     AnsTimerCount;

     gameid;*/
};


Game.length_MLG_3_2level2.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;
        
        _this.gameid = "2.4B";
        this.Stararr = param;
          this.score = score;
          _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level24B_bg1');
           commonNavBar.addNavBar(this,null,"measurement1");
           this.timerStopVar = timerStopVar;
           commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
           commonNavBar.startTimer(this);
           commonNavBar.addScore(this,commonNavBar.getScore());
       console.log("game24b");
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        //telInitializer.gameIdInit("length2_4B",gradeSelected);//gradeSelected
        

    },


    create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

        this.hintparams=['MTG3.3','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);


           
	_this.questno = 0;
		_this.amplify = null;
        noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        selectedAns = "";
        
        no1=0;
        qArrays = [1,2,3];
       // qArrays = this.shuffle(qArrays);
		
		qArrays1 = new Array();
        qArrays1 = [5,6,7,8,9,10,11,12,14];
        qArrays1 = _this.shuffle(qArrays1);
		
        count=0;
        count1=4;
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        popup2 = null;

        /*_this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level24B_bg1');
        
		_this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1.1);
		
        _this.backbtn = _this.add.sprite(10,7,'Level42A_CommonBackBtn');
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

       _this.speakerbtn = _this.add.sprite(600,7,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            console.log("yyyyy"+_this.q);
            //_this.getVoice(qArrays[no1]);
             _this.getVoice(_this.questno);
            
        },_this);
        
		_this.timebg=this.add.sprite(305,7,'Level42C_timer');
		_this.timebg.scale.setTo(1.2,1);
			
		_this.timeDisplay = this.add.text(335,23,_this.minutes + ' : '+ _this.seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
		*/
         _this.generateStarsForTheScene(game,9);
        
        graphics = this.add.graphics(0, 400);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,960,120);     
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        
        
        
       
        
        //no1++;
        this.getQuestion();
         _this.getVoice1(qArrays[no1]);
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

       /* timer = this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);
*/
		/**************************************************************************/ 
        /*_this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();*/
        /**************************************************************************/ 
		
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        /*timer.start();
        
        _this.speakerbtn.inputEnabled=true;     
        _this.speakerbtn.input.useHandCursor = true;
        console.log("get"+no1);
        console.log("get"+qArrays[no1]);*/
		//no1 = 8;
		if(no1<=2)
            {
                _this.questno = qArrays[no1];
            }
		else{
				_this.questno = qArrays1[no1];
                if(no1 == 3)
                    {
                        _this.getVoice1(_this.questno);
                    }
			}
		
        switch(_this.questno)      
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
            case 9: this.gotoNinethQuestion();
                    break;
            case 10: this.gotoTenthQuestion();
                    break;
            case 11: this.gotoEleventhQuestion();
                    break;
            case 12: this.gotoTwelvethQuestion();
                    break;
            case 13: this.gotoThirteenthQuestion();
                    break;
            case 14: this.gotoFourteenthQuestion();
                    break;
            case 15: this.gotoFifteenthQuestion();
                    break;
            case 16: this.gotoSixteenthQuestion();
                    break;
          
        }
        
        
    },
     
   
    removeEverthing:function() 
    {
		/*_this.timer1.stop();
        this.stopVoice();*/
        commonNavBar.stopVoice();
        numGroup.destroy();
        objGroup.destroy();

        if(popup2!=null)
        {
            popup2.destroy();
            popup2 = null;
        }
        selectedAns="";
        console.log("no1"+no1);
        if(no1<4)
        {
            _this.time.events.add(600, function(){
           _this.starsGroup.getChildAt(count1).frame = 2; 

            }, _this);

            count =0;
            no1++;
            if(no1 == 3)
                {

                    _this.displayPopUp = _this.add.sprite(150,250,'DisplayScale'); 
                    if(window.languageSelected == "English")
                        {
                             _this.displayPopUp.frame = 0;
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.displayPopUp.frame = 1;
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                             _this.displayPopUp.frame = 2;
                        }
						else
                        {
                             _this.displayPopUp.frame = 3;
                        }
                    this.time.events.add(4000, function(){
                        this.getQuestion();
                        _this.displayPopUp.destroy();
                    },this);
                }
            else{
                   this.getQuestion();
                }
               
        }
        else
        {
			commonNavBar.stopTimer();
                 
            commonNavBar.stopVoice();
            
                commonNavBar.disableNavBar();
                this.createScoreScene();
        }
    },
    createScoreScene:function()
    {
        
        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        /* this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        this.tryAgainText.anchor.setTo(0.5);
        this.tryAgainText.align = 'center';
        this.tryAgainText.fontWeight = 'bold';
        this.tryAgainText.fontSize = 40;
        this.tryAgainText.fill = 'White';
        this.tryAgainText.visible = false;
        
        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';
        this.terrificText.visible = false;
        
        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        this.verGoodText.anchor.setTo(0.5);
        this.verGoodText.align = 'center';
        this.verGoodText.fontWeight = 'bold';
        this.verGoodText.fontSize = 40;
        this.verGoodText.fill = 'White';
        this.verGoodText.visible = false;
        
        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        this.excellentText.anchor.setTo(0.5);
        this.excellentText.align = 'center';
        this.excellentText.fontWeight = 'bold';
        this.excellentText.fontSize = 40;
        this.excellentText.fill = 'White';
        this.excellentText.visible = false; */
  
  this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.6,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.6,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('measurement1',true,false);
        
    },


generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);
        
        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
        /* if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.tryAgainText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
            this.terrificText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
            this.verGoodText.visible = true;
        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
            this.excellentText.visible = true;
        } */
  
  if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);   

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }      
    },
    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.time.events.add(3000, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.time.events.add(500,function(){
            _this.state.start('length_MLG_3_2level1',true,false);
             },this);
        }, this);
    },
    
    checkOverlap:function(spriteA, spriteB) 
    {
        
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        var x = 40;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level24A_numbg');  
            numbg.anchor.setTo(0.5);
           // numbg.scale.setTo(0.6,0.6);
            numbg.name = i;
            numbg.frame=i;
            
            var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=70;
        }
        if(no1<=2)
            {
            if(window.languageSelected=="English")
                {
                    var gmTxt = this.add.text(x+60,505, "cm");
                    gmTxt.anchor.setTo(0.5);
                    gmTxt.align = 'center';

                    gmTxt.font = 'myfont';
                    gmTxt.fontSize = 30;
                    gmTxt.fontWeight = 'normal';
                    gmTxt.fill = '#FFFFFF';

                    gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt);
                }
            else if(window.languageSelected=="Hindi")
                {
                    var gmTxt1 = this.add.text(x+60,510, "सें.मी");
                    gmTxt1.anchor.setTo(0.5);
                    gmTxt1.align = 'center';

                    gmTxt1.font = 'myfont';
                    gmTxt1.fontSize = 24;
                    gmTxt1.fontWeight = 'normal';
                    gmTxt1.fill = '#FFFFFF';

                    gmTxt1.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt1);
                    
                }
            else if(window.languageSelected=="Kannada")
                {
                    var gmTxt2 = this.add.text(x+65,510, "ಸೆಂ.ಮೀ"); 
                    gmTxt2.anchor.setTo(0.5);
                    gmTxt2.align = 'center';

                    gmTxt2.font = 'myfont';
                    gmTxt2.fontSize = 15;
                    gmTxt2.fontWeight = 'normal';
                    gmTxt2.fill = '#FFFFFF';

                    gmTxt2.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt2);
                }
            else 
            {
                var gmTxt2 = this.add.text(x+65,510, "ସେ.ମୀ");
                    gmTxt2.anchor.setTo(0.5);
                    gmTxt2.align = 'center';

                    gmTxt2.font = 'myfont';
                    gmTxt2.fontSize = 20;
                    gmTxt2.fontWeight = 'normal';
                    gmTxt2.fill = '#FFFFFF';

                    gmTxt2.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt2);
                
                }
        
            }
        else{
            if(window.languageSelected=="English")
                {
                    var gmTxt = this.add.text(x+60,505, "m");
                    gmTxt.anchor.setTo(0.5);
                    gmTxt.align = 'center';

                    gmTxt.font = 'myfont';
                    gmTxt.fontSize = 30;
                    gmTxt.fontWeight = 'normal';
                    gmTxt.fill = '#FFFFFF';

                    gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt);
                }
            else if(window.languageSelected=="Hindi")
                {
                    var gmTxt1 = this.add.text(x+60,510, "मी");
                    gmTxt1.anchor.setTo(0.5);
                    gmTxt1.align = 'center';

                    gmTxt1.font = 'myfont';
                    gmTxt1.fontSize = 24;
                    gmTxt1.fontWeight = 'normal';
                    gmTxt1.fill = '#FFFFFF';

                    gmTxt1.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt1);
                    
                }
            else if(window.languageSelected=="Kannada")
                {
                    var gmTxt2 = this.add.text(x+65,510, "ಮೀ"); 
                    gmTxt2.anchor.setTo(0.5);
                    gmTxt2.align = 'center';

                    gmTxt2.font = 'myfont';
                    gmTxt2.fontSize = 20;
                    gmTxt2.fontWeight = 'normal';
                    gmTxt2.fill = '#FFFFFF';

                    gmTxt2.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt2);
                }
            else {
                var gmTxt2 = this.add.text(x+65,510, "ମୀ");
                    gmTxt2.anchor.setTo(0.5);
                    gmTxt2.align = 'center';

                    gmTxt2.font = 'myfont';
                    gmTxt2.fontSize = 20;
                    gmTxt2.fontWeight = 'normal';
                    gmTxt2.fill = '#FFFFFF';

                    gmTxt2.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
                    numGroup.add(gmTxt2);
                
                }
        }
        
        var txtbox = this.add.sprite(x+5,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
        
        var wrongbtn = numGroup.create(x+120,505,'Level24A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+180,505,'Level24A_rightBtn');
        rightbtn.anchor.setTo(0.5);
        //rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        //rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){commonNavBar.playClickSound();
			target.frame = 1;
        //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level24B_CrossButton", 
                access_token: window.acctkn 
            } 
             _this.time.events.add(300, function(){ target.frame = 0;}, _this);
            //absdsjsapi.saveInteractEvent(interactEvent);
            enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
			target.frame = 1;
            noofAttempts++;
            //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level24B_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            commonNavBar.playClickSound();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
                    /*if(timer)
                    {
                        timer.stop();
                       timer = null; 
                    }
                    */
                //var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: _this.currentTime, 
                            access_token: window.acctkn 
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               //telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
        
        
                    //_this.speakerbtn.inputEnabled=false;
                    console.log("correct");
                    target.events.onInputDown.removeAll();
                    objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;
                    
                    if(qArrays[no1]==5||qArrays[no1]==6||qArrays[no1]==7||qArrays[no1]==8||qArrays[no1]==9||qArrays[no1]==10||qArrays[no1]==11||qArrays[no1]==12
                    ||qArrays[no1]==13||qArrays[no1]==14||qArrays[no1]==15||qArrays[no1]==16)
                    {
                       //objGroup.getByName('tapetint').frame = 1; 
                       objGroup.callAll('animations.add', 'animations', 'spin', 0, 10, false);    
                       objGroup.callAll('animations.play', 'animations', 'spin');
                    }
                    
                    //mainSprite.frame = 1;
                    var anim = mainSprite.animations.add('glow');
                    anim.play(12);
                    
                    commonNavBar.playCelebrationSound();
                     var starAnim = _this.starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play(25,false);
                        this.Stararr.push(3);
                       // anim.onComplete.add(function(){this.removeEverthing();},this);
                        this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
                    noofAttempts++;
                    console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, mainSprite);
                    commonNavBar.playWrongCelebrationSound();
                   // aiyoh.play(); 
                    _this.starsGroup.getChildAt(count1).frame = 1;
                    this.Stararr.push(1);
                    count1++;
           
                    objGroup.getByName('tape15cm').x = tapeXPos;
                    objGroup.getByName('tape15cm').y = tapeYPos;
					this.time.events.add(300, function(){target.frame = 0;this.removeEverthing();},this);
                }
        },this);
    },
    
    
    numClicked:function(target){
        //console.log(target.name);
        //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level24A_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
             if(target.name=="1")
                    enterTxt.setText(target.name+"1");
                 if(target.name=="2")
                    enterTxt.setText(target.name+"2");
                 if(target.name=="3")
                    enterTxt.setText("3");
                 if(target.name=="4")
                    enterTxt.setText("4");
                 if(target.name=="5")
                    enterTxt.setText("5");
                 if(target.name=="6")
                    enterTxt.setText("6");
                 if(target.name=="7")
                    enterTxt.setText("7");
                 if(target.name=="8")
                    enterTxt.setText("8");
                 if(target.name=="9")
                    enterTxt.setText("9");
        commonNavBar.playClickSound();
        if(selectedAns.length<3)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
        
        _this.questionid = 1;
        
       
        //this.getVoice(1);
       
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,255,'Level24A_level2Scale1');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       
       // mainSprite.width -= 8;
        
        rightAns = "15";
        
        var tape15cm = this.add.sprite(230,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
             //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
        target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);
        tape15cm.events.onDragStop.add(function(target){            commonNavBar.playSnapSound();

        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=900)
            {
                            commonNavBar.playSnapSound();

                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(this.input.x<=210)
            {
                            commonNavBar.playSnapSound();

                tape15cm.input.draggable = false;
                target.x = 230;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                               commonNavBar.playClickSound();

                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
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
        
        var tapeRoll = this.add.sprite(120,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
     },
    
    gotoSecondQuestion:function(){
        
        _this.questionid = 1;
        
        
        //this.getVoice(2);
        
         this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(538,255,'Level24A_level2Scale2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       // mainSprite.width -= 10;
        
        rightAns = "30";
        
         var tape15cm = this.add.sprite(150,340,'Level24A_tape30cm');
        tape15cm.anchor.setTo(0.95,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        

        tape15cm.events.onInputDown.add(function(target){
            // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            target.x = this.input.x;
            
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);  
        tape15cm.events.onDragStop.add(function(target){
            commonNavBar.playSnapSound();
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=920)
            {
               commonNavBar.playSnapSound();
                tape15cm.input.draggable = false;
                target.x = 903;
            }
            else if(this.input.x<=130)
            {
                commonNavBar.playSnapSound();
                tape15cm.input.draggable = false;
                target.x = 150;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    commonNavBar.playClickSound();
                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
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
    
    gotoThirdQuestion:function(){
        
        _this.questionid = 1;
       
        //this.getVoice(3);
        
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,275,'Level24A_level2Scale3');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        //mainSprite.width -= 10;
       
        
        rightAns = "100";
        
        var tape15cm = this.add.sprite(130,337,'Level24A_tape100cm');
        tape15cm.anchor.setTo(0.916,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
             //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            target.x = this.input.x;
            
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);
        tape15cm.events.onDragStop.add(function(target){
            commonNavBar.playSnapSound();
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            },this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=905)
            {
                commonNavBar.playSnapSound();
                tape15cm.input.draggable = false;
                target.x = 892;
            }
            else if(this.input.x<=120)
            {
                            commonNavBar.playSnapSound();

                tape15cm.input.draggable = false;
                target.x = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                               commonNavBar.playClickSound();

                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 100;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();  
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(100,320,'Level24A_tape3');
        tapeRoll.anchor.setTo(0.5);
        
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoFourthQuestion:function(){
        
        _this.questionid = 1;
       
        //this.getVoice(4);
        
         this.addNumberPad();
        objGroup = this.add.group();

        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
                    if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;

        mainSprite = this.add.sprite(this.world.centerX+20,this.world.centerY-50,'Level24A_tree');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       // mainSprite.width -= 8;

       
        
        rightAns = "1";
        
        
        var tape15cm = this.add.sprite(this.world.centerX+19,this.world.centerY+130,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
      /*   var tape15cm = this.add.sprite(490,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=770)
            {
                
                tape15cm.input.draggable = false;
                target.x = 760;
            }
            if(this.input.x<=460)
            {
                tape15cm.input.draggable = false;
                target.x = 490;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 380;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(600, 0);   
        mask.lineTo(600, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(380,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        */
      //  //objGroup.add(popup2);
       // //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },
    
    gotoFifthQuestion:function(){
        
        _this.questionid = 1;
       
        //this.getVoice(5);
        
         this.addNumberPad();
        objGroup = this.add.group();

        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;

        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-30,'Level24A_car');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "2";
        
        var tapeTint = this.add.sprite(this.world.centerX-168,this.world.centerY+140,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.name = "tapetint";
        
        var tape15cm = this.add.sprite(this.world.centerX+170,this.world.centerY+140,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var dragObj = this.add.sprite(this.world.centerX+170,this.world.centerY+140,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.inputEnabled = true;
        dragObj.events.onInputDown.add(function(target){
             //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            commonNavBar.playClickSound();
            dragObj.input.enableDrag();
        
            dragObj.events.onDragStop.add(function(target){
                /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
            
            commonNavBar.playSnapSound();
            if(this.checkOverlap(target,tapeTint))
            {
                dragObj.visible = false;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                
            }
            dragObj.x = this.world.centerX+170;
            dragObj.y = this.world.centerY+120;
            
            
            
        },this);
            
            
        },this);
        
        
       /*  var tape15cm = this.add.sprite(270,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=950)
            {
                
                tape15cm.input.draggable = false;
                target.x = 940;
            }
            if(this.input.x<=250)
            {
                tape15cm.input.draggable = false;
                target.x = 270;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 150;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(150,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
       */ 
       ////objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },
    
    gotoSixthQuestion:function(){
        
        _this.questionid = 1;
      
        //this.getVoice(6);
       
        this.addNumberPad();
        objGroup = this.add.group();

        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;

        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-20,'Level24A_carpet');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "2";
        
        var tapeTint = this.add.sprite(this.world.centerX-135,this.world.centerY+150,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.name = "tapetint";
        
        var tape15cm = this.add.sprite(this.world.centerX+203,this.world.centerY+150,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var dragObj = this.add.sprite(this.world.centerX+203,this.world.centerY+150,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.inputEnabled = true;
        
        dragObj.events.onInputDown.add(function(){

             //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_MeasuringTape", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);

commonNavBar.playClickSound();
             dragObj.input.enableDrag();

            dragObj.events.onDragStop.add(function(target){
                            commonNavBar.playSnapSound();

                if(this.checkOverlap(target,tapeTint))
                {
                    dragObj.visible = false;
                    tapeTint.loadTexture("Level24A_tape4",0,false);

                }
                dragObj.x = this.world.centerX+203;
                dragObj.y = this.world.centerY+120;



            },this);
        },this);
        
       /*  var tape15cm = this.add.sprite(270,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=950)
            {
                
                tape15cm.input.draggable = false;
                target.x = 940;
            }
            if(this.input.x<=250)
            {
                tape15cm.input.draggable = false;
                target.x = 270;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 150;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(150,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
       */ 
      // //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },

    gotoSeventhQuestion:function(){
        _this.questionid = 1;
     
        //this.getVoice(7);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-25,'Level24A_tree');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "3";
        
        var tapeTint = this.add.sprite(this.world.centerX-6,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.38,0.5); 
        tapeTint.name = "tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX-142,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.38,0.5); 
        tapeTint2.name = "tapetint";
        
        var tape15cm = this.add.sprite(this.world.centerX+130,this.world.centerY+145,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.38,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+130,this.world.centerY+145,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.38,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
            //_this.clickSound = _this.add.audio('ClickSound');
            //_this.clickSound.play();
            dragObj.input.enableDrag();
         dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();


                console.log(this.checkOverlap(target,tapeTint2));

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-6;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-142;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=2)
                dragObj.visible = false;
            
            
        },this);
            
            
        //},this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
    },
    
    gotoEighthQuestion:function(){
         _this.questionid = 1;
      
        //this.getVoice(8);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-20,'Level24A_carpet');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "6";
        
        var tapeTint = this.add.sprite(this.world.centerX+239,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.385,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX+105,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.385,0.5); 
        tapeTint2.name = "Level24A_tapetint2";
        
        var tapeTint3 = this.add.sprite(this.world.centerX-30,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint3.anchor.setTo(0.5); 
        tapeTint3.scale.setTo(0.385,0.5); 
        tapeTint3.name = "Level24A_tapetint3";
        
        var tapeTint4 = this.add.sprite(this.world.centerX-164,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint4.anchor.setTo(0.5); 
        tapeTint4.scale.setTo(0.385,0.5); 
        tapeTint4.name = "Level24A_tapetint4";
        
        var tapeTint5 = this.add.sprite(this.world.centerX-300,this.world.centerY+145,'Level24A_tapeTint');
        tapeTint5.anchor.setTo(0.5); 
        tapeTint5.scale.setTo(0.385,0.5); 
        tapeTint5.name = "Level24A_tapetint5";
        
       
        
        var tape15cm = this.add.sprite(this.world.centerX+375,this.world.centerY+145,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.38,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+375,this.world.centerY+145,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.38,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
            //_this.clickSound = _this.add.audio('ClickSound');
           // _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+238;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+105;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint3) && tapeTint3.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint3.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-30;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                
            else if(this.checkOverlap(target,tapeTint4) && tapeTint4.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint4.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-164;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint5) && tapeTint5.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint5.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-300;
                dragObj.y = this.world.centerY+145; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=5)
                dragObj.visible = false;
            
            
        },this);
            
            
       // },this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tapeTint3);
       objGroup.add(tapeTint4);
       objGroup.add(tapeTint5);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
   
    },
   
     gotoNinethQuestion:function(){
     _this.questionid = 1;
        //this.getVoice(9);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX-30,this.world.centerY+30,'Level24B_birds1');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "4";
        
        var tapeTint = this.add.sprite(this.world.centerX+100,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.47,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX-65,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.47,0.5); 
        tapeTint2.name = "Level24A_tapetint2";
        
        var tapeTint3 = this.add.sprite(this.world.centerX-230,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint3.anchor.setTo(0.5); 
        tapeTint3.scale.setTo(0.47,0.5); 
        tapeTint3.name = "Level24A_tapetint3";
        
       
       
        
        var tape15cm = this.add.sprite(this.world.centerX+265,this.world.centerY+125,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.47,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+265,this.world.centerY+125,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.47,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
          //  _this.clickSound = _this.add.audio('ClickSound');
           // _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                       commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+100;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-65;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint3) && tapeTint3.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint3.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-230;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                
           
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=3)
                dragObj.visible = false;
            
            
        },this);
            
            
        //},this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tapeTint3);
       
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
   
    },
    
        gotoTenthQuestion:function(){
     _this.questionid = 1;
        //this.getVoice(10);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY+30,'Level24B_animals');
        mainSprite.anchor.setTo(0.5);
        //mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "5";
        
        var tapeTint = this.add.sprite(this.world.centerX+140,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.38,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX+5,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.38,0.5); 
        tapeTint2.name = "Level24A_tapetint2";
        
        var tapeTint3 = this.add.sprite(this.world.centerX-130,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint3.anchor.setTo(0.5); 
        tapeTint3.scale.setTo(0.38,0.5); 
        tapeTint3.name = "Level24A_tapetint3";
            
        var tapeTint4 = this.add.sprite(this.world.centerX-265,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint4.anchor.setTo(0.5); 
        tapeTint4.scale.setTo(0.38,0.5); 
        tapeTint4.name = "Level24A_tapetint4";
        
       
       
        
        var tape15cm = this.add.sprite(this.world.centerX+275,this.world.centerY+125,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.38,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+275,this.world.centerY+125,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.38,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
           //_this.clickSound = _this.add.audio('ClickSound');
           // _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+140;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+5;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint3) && tapeTint3.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint3.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-130;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                else if(this.checkOverlap(target,tapeTint4) && tapeTint4.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint4.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-265;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                
           
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=4)
                dragObj.visible = false;
            
            
        },this);
            
            
       // },this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tapeTint3);
       objGroup.add(tapeTint4);
       
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
   
    },
    
    gotoEleventhQuestion:function(){
       _this.questionid = 1;
        //this.getVoice(11);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX+10,this.world.centerY+50,'Level24B_snake');
        mainSprite.anchor.setTo(0.5);
        //mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        
        rightAns = "5";
        
        var tapeTint = this.add.sprite(this.world.centerX+140,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.38,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX+5,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.38,0.5); 
        tapeTint2.name = "Level24A_tapetint2";
        
        var tapeTint3 = this.add.sprite(this.world.centerX-130,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint3.anchor.setTo(0.5); 
        tapeTint3.scale.setTo(0.38,0.5); 
        tapeTint3.name = "Level24A_tapetint3";
            
        var tapeTint4 = this.add.sprite(this.world.centerX-265,this.world.centerY+125,'Level24A_tapeTint');
        tapeTint4.anchor.setTo(0.5); 
        tapeTint4.scale.setTo(0.38,0.5); 
        tapeTint4.name = "Level24A_tapetint4";
        
       
       
        
        var tape15cm = this.add.sprite(this.world.centerX+275,this.world.centerY+125,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.38,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+275,this.world.centerY+125,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.38,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
        //    _this.clickSound = _this.add.audio('ClickSound');
        //    _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+140;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+5;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint3) && tapeTint3.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint3.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-130;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                else if(this.checkOverlap(target,tapeTint4) && tapeTint4.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint4.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-265;
                dragObj.y = this.world.centerY+125; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
                
           
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=4)
                dragObj.visible = false;
            
            
        },this);
            
            
        //},this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
        
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tapeTint3);
       objGroup.add(tapeTint4);
       
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
   
    },
    
    gotoTwelvethQuestion:function(){
         _this.questionid = 1;
     
        //this.getVoice(12);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY+8,'Level24A_car');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(0.6,0.6);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        
        
        rightAns = "3";
        
        var tapeTint = this.add.sprite(this.world.centerX-3,this.world.centerY+120,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.39,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        var tapeTint2 = this.add.sprite(this.world.centerX-140,this.world.centerY+120,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.38,0.5); 
        tapeTint2.name = "Level24A_tapetint2";
        
        var tape15cm = this.add.sprite(this.world.centerX+135,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.38,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+135,this.world.centerY+120,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.4,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
            //_this.clickSound = _this.add.audio('ClickSound');
            //_this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
           commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-3;
                dragObj.y = this.world.centerY+120; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-140;
                dragObj.y = this.world.centerY+120; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=2)
                dragObj.visible = false;
            
            
        },this);
            
            
        //},this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tapeTint2);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },
    
     gotoThirteenthQuestion:function(){
         _this.questionid = 1;
     
        //this.getVoice(13);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-30,'Level24B_buildings');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "2";
        
        var tapeTint = this.add.sprite(this.world.centerX-88,this.world.centerY+140,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.46,0.5); 
        tapeTint.name = "Level24A_tapetint";
		
		 var tapeTint2 = this.add.sprite(this.world.centerX-88,this.world.centerY+140,'Level24A_tapeTint');
        tapeTint2.anchor.setTo(0.5); 
        tapeTint2.scale.setTo(0.46,0.5); 
        tapeTint2.name = "tapetint";
        
        
        
        var tape15cm = this.add.sprite(this.world.centerX+75,this.world.centerY+140,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.46,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+75,this.world.centerY+140,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.46,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
          //  _this.clickSound = _this.add.audio('ClickSound');
          //  _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
				
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+75;
                dragObj.y = this.world.centerY+140; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else if(this.checkOverlap(target,tapeTint2) && tapeTint2.key == "Level24A_tapeTint")
            {
                 count++;
                dragObj.visible = true;
                tapeTint2.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX-88;
                dragObj.y = this.world.centerY+140; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=1)
                dragObj.visible = false;
            
            
        },this);
            
            
       // },this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
    },
    
    gotoFourteenthQuestion:function(){
         _this.questionid = 1;
      
        //this.getVoice(14);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX-5,this.world.centerY-15,'Level24B_gate');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        
        
        rightAns = "2";
        
        var tapeTint = this.add.sprite(this.world.centerX-88,this.world.centerY+120,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.scale.setTo(0.46,0.5); 
        tapeTint.name = "Level24A_tapetint";
        
        
        
        var tape15cm = this.add.sprite(this.world.centerX+75,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.46,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
        var dragObj = this.add.sprite(this.world.centerX+75,this.world.centerY+120,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.scale.setTo(0.46,0.5);
        dragObj.inputEnabled = true;
        prevX = dragObj.x;
        prevY = dragObj.y;
        //dragObj.events.onInputDown.add(function(){
          //  _this.clickSound = _this.add.audio('ClickSound');
          //  _this.clickSound.play();
            dragObj.input.enableDrag();
        dragObj.events.onDragStart.add(function(target,pointer){
            commonNavBar.playClickSound();
        },this);
            dragObj.events.onDragStop.add(function(target){
                        commonNavBar.playSnapSound();

            if(this.checkOverlap(target,tapeTint) && tapeTint.key == "Level24A_tapeTint")
            {
                count++;
                dragObj.visible = true;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                dragObj.x = this.world.centerX+75;
                dragObj.y = this.world.centerY+120; 
                prevX = dragObj.x;
                prevY = dragObj.y;
            }
            
            else
            {
                dragObj.x = prevX;
                dragObj.y = prevY;
                              
            }
            
            if(count>=1)
                dragObj.visible = false;
            
            
        },this);
            
            
       // },this);
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
        
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
    },
   
     gotoFifteenthQuestion:function(){
         _this.questionidth = 1;
      
        //this.getVoice(15);
        
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX-5,this.world.centerY-5,'Level24B_tables');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        
        rightAns = "1";
       
        
        
        var tape15cm = this.add.sprite(this.world.centerX+20,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.46,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
       
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       //objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       //objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
    },
    
        gotoSixteenthQuestion:function(){
             _this.questionid = 1;
      
        //this.getVoice(16);
       
         this.addNumberPad();
        objGroup = this.add.group();
        
        popup2=this.add.sprite(480,70,'game24b_popup2');
        popup2.anchor.setTo(0.5);
        if(window.languageSelected=="English")
                        popup2.frame=0;
                    else if(window.languageSelected=="Hindi")
                        popup2.frame=1;
                    else  if(window.languageSelected=="Kannada")
                        popup2.frame=2;
					else 
                        popup2.frame=3;
        
        mainSprite = this.add.sprite(this.world.centerX-5,this.world.centerY+25,'Level24B_table3');
        mainSprite.anchor.setTo(0.5);
        mainSprite.scale.setTo(1.2,1);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        
        rightAns = "1";
       
        
        
        var tape15cm = this.add.sprite(this.world.centerX-5,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        tape15cm.scale.setTo(0.45,0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var count = 0;
        var prevX = 0;
        var prevY = 0;
        
       
     
       //objGroup.add(popup2);
       objGroup.add(mainSprite);
       //objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       //objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
   
    },
     
   
    
   
    generateStarsForTheScene:function(game,count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i <  count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX, 7, 'starAnim');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
            if(this.Stararr[i])
                    {
                        
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
        }
        _this.starsGroup.getChildAt(4).frame = 2; 
    },

    
 
    update:function(){

    },
    
  /*  getVoice:function(question){
        this.stopVoice();
        console.log("qq"+question);
        switch(question)
        {
            case 1:
            case 2:
            case 3:if(window.languageSelected=="English")
                        Eng_24A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A1.play();
                    else
                        Kan_24A1.play();
                    break;
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English")
                        Eng_24A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A2.play();
                    else
                        Kan_24A2.play();
                    break;
        }
    },
    
    stopVoice:function(){
        Eng_24A1.stop();
        Hin_24A1.stop();
        Kan_24A1.stop();
        Eng_24A2.stop();
        Hin_24A2.stop();
        Kan_24A2.stop();
    }*/

    getVoice1:function(question)
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
                    if(window.languageSelected == "English")
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
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Odiya/2.4A1.mp3");
                            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                    if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/English/2.4A2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Hindi/2.4A2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Kannada/2.4A2.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.4A/Odiya/2.4A2.mp3");
                            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            
        }


        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        commonNavBar.addNavBar(this,_this.src.src,'measurement1');
        commonNavBar.stopVoice();
       
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

        delete gameid;*/

         window.score = this.score;
        localStorage.setItem("Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
            localStorage.setItem("length_MLG_3_2state", "playedwithhint");
            localStorage.setItem("measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
            localStorage.setItem("length_MLG_3_2state", "fullycomplete");
            localStorage.setItem("measurementPlayed", "played");
        }
        
    }

    
};