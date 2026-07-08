Game.weight_MWG_2_2level3=function(){
    
};


Game.weight_MWG_2_2level3.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;
        
        _this.gameid = "3.2D";
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

      //  telInitializer.gameIdInit("weight3_2D",gradeSelected);
        
    },


    create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

		_this.amplify = null;
		noofAttempts=0;
        AnsTimerCount=0;
        selectedAns = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCkeckVar = 0;
		_this.balancevar = 0;
		
		
        no1=0;
        //qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 6;
        objAdded = 0;
        
        
        qArrays = [1,5,7,8,9,10,11,12,13,14,15,16,19,20];
        qArrays = this.shuffle(qArrays);
        
        
        angleArray = [[10,5]];
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

      

        bg1 =_this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level32C_level2Bg');
       
	   commonNavBar.addNavBar(this,_this.soundurl,"measurement2");
             commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
		
         _this.generateStarsForTheScene(9);
        
        //no1++;
        this.getQuestion();
        this.getVoice();
        //this.Voice1(10);
        //this.input.enabled = false;
        
       // this.gotoFirstQuestion();
		tp=null;
        tp1=null;

         this.hintparams=['MWG11','level1',false,false,false,0];
              commonNavBar.addHint(this,this.hintparams);

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

   
    removeEverthing:function() 
    {
        no1++;
		//_this.timer1.stop();
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        if(no1<3)
        {
            //count =0;
            this.sceneCount++;
			_this.balanceCkeckVar = 0;
			_this.balancevar = 0;
            
            var MaintweenDestroy = this.add.tween(objGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(scale1Group);
            Maintween1Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                scale1Group.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(scale2Group);
            Maintween2Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                scale2Group.destroy();
            },this);
            var Maintween3Destroy = this.add.tween(obj1Group);
            Maintween3Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween3Destroy.onComplete.add(function(){
                obj1Group.destroy();
            },this);
            var Maintween4Destroy = this.add.tween(obj2Group);
            Maintween4Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween4Destroy.onComplete.add(function(){
                obj2Group.destroy();
            },this);
            var Maintween5Destroy = this.add.tween(obj3Group);
            Maintween5Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween5Destroy.onComplete.add(function(){
                obj3Group.destroy();
                this.getQuestion();
            },this);
        this.starsGroup.getChildAt(count1+1).frame = 2; 
            count1++;
        }
        else
        {
			//commonNavBar.stopTimer();
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
								commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
           this.createScoreScene(); 
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 this.starsGroup.create(this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if( this.starsGroup.getChildAt(j))
				{
					 this.starsGroup.getChildAt(j).x-=10;
					 this.starsGroup.getChildAt(i).x+=10;
				}
			}
		if(this.Stararr[i])
                    {  
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
		}
        this.starsGroup.getChildAt(6).frame = 2;		
    },
    
	
    
    createScoreScene:function()
    {
        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
          
        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
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

        _this.state.start('measurement2',true,false);
        
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

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3500, function()
        { 
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
				this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('weight_MWG_2_2level1',true,false);
        }, this);
    },
    
   /* stopAllVoice:function(){
        ElevelD.stop();
        HlevelD.stop();
        KlevelD.stop();
    },*/
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
            
           /* var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level32C_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            // x+=70;
            x+=65;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";

        if(window.languageSelected=="English")
            var gmTxt1 = this.add.text(x+90,505, "gm");
        else if(window.languageSelected=="Hindi")
            var gmTxt = this.add.text(x+90,505, "ग्राम");
        else if(window.languageSelected=="Kannada")
            var gmTxt = this.add.text(x+90,505, "ಗ್ರಾಂ"); 
        else if(window.languageSelected=="Odiya")
            var gmTxt = this.add.text(x+90,505, "ଗ୍ରାମ");
		else if(window.languageSelected=="Marathi")
				var gmTxt = this.add.text(x+90,505, "ग्रॅम");
			else if(window.languageSelected=="Telugu")
				var gmTxt = this.add.text(x+90,505, "గ్రాము");
			else if(window.languageSelected=="Tamil")
				var gmTxt = this.add.text(x+90,505, "கிராம்");
			else if(window.languageSelected=="Urdu")
				var gmTxt = this.add.text(x+90,505, "گرام");
        else 
            var gmTxt = this.add.text(x+90,505, "ગ્રા");
            
        if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || languageSelected=="Urdu"){
            gmTxt.anchor.setTo(0.5);
            gmTxt.align = 'center';

            gmTxt.font = 'Alte Haas Grotesk';
            gmTxt.fontSize = 24;
                    //text.fontWeight = 'bold';
            gmTxt.fill = '#65B4C3';

            gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
            numGroup.add(gmTxt);
        }else{
            gmTxt1.anchor.setTo(0.5);
            gmTxt1.align = 'center';

            gmTxt1.font = 'myfont';
            gmTxt1.fontSize = 28;
            //gmTxt1.fontWeight = 'normal';
            gmTxt1.fill = '#65B4C3';

            gmTxt1.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
            numGroup.add(gmTxt1);
        }
        
        // var wrongbtn = numGroup.create(x+100,505,'eraser');
        var wrongbtn = numGroup.create(x+160,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        // var rightbtn = numGroup.create(x+160,505,'tick');
        var rightbtn = numGroup.create(x+220,505,'tick');
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
           commonNavBar.playClickSound();
		/*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32D_CrossButton", 
                access_token: window.acctkn 
            } */
            _this.time.events.add(300, function(){ target.frame = 0;}, _this);
            //absdsjsapi.saveInteractEvent(interactEvent);
			enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();

            if(numGroup)
                numGroup.setAll("inputEnabled",false);

            if(objGroup)
                objGroup.setAll("inputEnabled",false);

            if(scale1Group)
                scale1Group.setAll("inputEnabled",false);

            if(scale2Group)
                scale2Group.setAll("inputEnabled",false);

            if(obj1Group)
                obj1Group.setAll("inputEnabled",false);

            if(obj2Group)
                obj2Group.setAll("inputEnabled",false);

            if(obj3Group)
                obj3Group.setAll("inputEnabled",false);


			target.frame = 1;
			 noofAttempts++;
            /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32D_TickButton", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            commonNavBar.playClickSound();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
                     telInitializer2.gameCorrectAns();
                    //console.log("correct");
                    this.Stararr.push(3);
                    //_this.speakerbtn.inputEnabled=false;
                    target.events.onInputDown.removeAll();
                    commonNavBar.playCelebrationSound();
                    var starAnim = this.starsGroup.getChildAt(count1);
                        // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play();
                    //count1++;
                    //mainSprite.frame = 1;
//                    var anim = weightScale3.animations.add('glow');
//                    anim.play(10);
//                    var anim2 = weightScale4.animations.add('glow');
//                    anim2.play(10);
                     //var anim = mainSprite.animations.add('glow');
                    //anim.play(10);
                    
                    
                    if(scale2Group.getByName("targetAnim1"))
                    {
                        var tempFrame = scale2Group.getByName("targetAnim1").frame; 
                        var tempX = scale2Group.getByName("targetAnim1").x; 
                        var tempY = scale2Group.getByName("targetAnim1").y;
                        scale2Group.getByName("targetAnim1").loadTexture('Level32C_w1AnimGlow',0,false);
                        scale2Group.getByName("targetAnim1").frame = tempFrame;
                        scale2Group.getByName("targetAnim1").x = tempX+5;
                        scale2Group.getByName("targetAnim1").y = tempY+18.5;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                            largeTween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                        largeTween3.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                               // this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
                    
                    
                    if(scale2Group.getByName("targetAnim"))
                    {
                        var tempFrame = scale2Group.getByName("targetAnim").frame; 
                        var tempX = scale2Group.getByName("targetAnim").x; 
                        var tempY = scale2Group.getByName("targetAnim").y;
                        scale2Group.getByName("targetAnim").loadTexture('Level32C_w22AnimGlow',0,false);
                        scale2Group.getByName("targetAnim").frame = tempFrame;
                        scale2Group.getByName("targetAnim").x = tempX+2;
                        scale2Group.getByName("targetAnim").y = tempY+17;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                            largeTween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                        largeTween3.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                               // this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
                    
                    
					//commonNavBar.stopTimer();

                    /* var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }*/
                
               // absdsjsapi.saveAssessment(saveAsment);
                   // telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
                    
                         //anim4.onComplete.add(function(){this.removeEverthing();},this);
                        this.time.events.add(2000, function(){this.removeEverthing();},this);
                    
                }
            else
                {
                     telInitializer2.gameWrongAns();
                    commonNavBar.stopVoice();
                    commonNavBar.playWrongCelebrationSound();
                    this.starsGroup.getChildAt(count1).frame = 1;
					this.Stararr.push(1);
					target.events.onInputDown.removeAll();
                    this.time.events.add(1000, function(){ this.removeEverthing();}, this);
                }
  
        },this);
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    var targetGroup = this.add.group();
                    var scaleGroupFlag;
                    if(scale1Group.getByName("targetAnim"))
                    {
                        targetGroup.add(scale1Group.getByName("targetAnim"));
                        targetGroup.x = scale1Group.x;
                        targetGroup.y = scale1Group.y;
                        scaleGroupFlag = "scale1Group";
                    }
                    if(scale1Group.getByName("targetAnim1"))
                    {
                        targetGroup.add(scale1Group.getByName("targetAnim1"));
                        targetGroup.x = scale1Group.x;
                        targetGroup.y = scale1Group.y;
                        scaleGroupFlag = "scale1Group";
                    }
                    if(scale2Group.getByName("targetAnim"))
                    {
                        targetGroup.add(scale2Group.getByName("targetAnim"));
                        targetGroup.x = scale2Group.x;
                        targetGroup.y = scale2Group.y;
                        scaleGroupFlag = "scale2Group";
                    }
                    if(scale2Group.getByName("targetAnim1"))
                    {
                        targetGroup.add(scale2Group.getByName("targetAnim1"));
                        targetGroup.x = scale2Group.x;
                        targetGroup.y = scale2Group.y;
                        scaleGroupFlag = "scale2Group";
                    }
                    

                    if(targetGroup.getByName("targetAnim"))
                        targetGroup.bringToTop(targetGroup.getByName("targetAnim"));
                    shake.shake(10, targetGroup);
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
                     
						_this.balancevar = 0;
                        var tempAngle = 0;
                        var tempweight = 0;
                        if(tp!=null)
                        {
                            for(var j=0;j<tp.length;j++)
                            {
                                if(!tp.getChildAt(j).visible)
                                {
                                    tp.getChildAt(j).visible = true;
                                    tp.getChildAt(j).inputEnabled = true;
                                    tp.getChildAt(j).input.useHandCursor = true;
                                    tp.getChildAt(j).events.onInputDown.add(function(target){
										
										/*var currentTime = window.timeSaveFunc();
										var interactEvent = 
										{ 
											id_game_play: window.gameid, 
											id_question: window.gameid,  
											date_time_event: currentTime, 
											event_type: "click", 
											res_id: target.name, 
											access_token: window.acctkn 
										} 
										
										//absdsjsapi.saveInteractEvent(interactEvent);*/
			
			
                                        this.objectClicked(target,tweenVal,angleVal);
                                    },this);
                                    //break;
                                    tempAngle=angleSlide;
                                    tempweight=tweenSlide;
                                }
                            }
                        }
                        if(tp1!=null)
                        {
                            for(var j=0;j<tp1.length;j++)
                            {
                                if(tp1.getChildAt(j).tint == 0xA1A1A1)
                                {
                                    tp1.getChildAt(j).visible = true;
                                    tp1.getChildAt(j).tint = 0xFFFFFF;
                                    tp1.getChildAt(j).inputEnabled = true;
                                    tp1.getChildAt(j).input.useHandCursor = true;
                                    tp1.getChildAt(j).events.onInputDown.add(function(target){
										/*var currentTime = window.timeSaveFunc();
										var interactEvent = 
										{ 
											id_game_play: window.gameid, 
											id_question: window.gameid,  
											date_time_event: currentTime, 
											event_type: "click", 
											res_id: target.name, 
											access_token: window.acctkn 
										} 
										
										//absdsjsapi.saveInteractEvent(interactEvent);*/
										
                                        this.objectClicked1(target,tweenVal1,angleVal1);
                                    },this);
                                    //break;
                                    tempAngle=angleSlide;
                                    tempweight=tweenSlide;
                                }
                            }
                        }
                        
                        targetGroup.destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                        //console.log("tempAngle"+tempAngle);
                        weightScale2.angle=angleSlide;
                        scale1Group.y=tweenSlide;
                        scale2Group.y=tweenSlide1;

                       
                    },this);
					//_this.time.events.add(300, function(){target.frame = 0;},this);
                },
        //},this);
        
       
   
    
    
    numClicked:function(target){
        //console.log(target.name);
        /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32D_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        commonNavBar.playClickSound();
        if(selectedAns.length<3)
        {
            selectedAns += target.frame;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },


    getQuestion:function(target)
    {       
	   noofAttempts = 0;
         AnsTimerCount=0;
         this.sceneCount++;

        /*timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

		/**************************************************************************/ 
        /*_this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        //timer.start();


        //_this.speakerbtn.inputEnabled=true;
       // _this.speakerbtn.input.useHandCursor = true;

		
		_this.questionid = 1;
		
        switch(qArrays[no1])      
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
            case 8: this.gotoEightQuestion();
                    break;
            case 9: this.gotoNinthQuestion();
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
            case 17: this.gotoSeventeenthQuestion();
                    break;
            case 18: this.gotoEighteenthQuestion();
                    break;
            case 19: this.gotoNinteenthQuestion();
                    break;
            case 20: this.gotoTwentythQuestion();
                    break;
        }

        telInitializer2.gameQuestionStart(this,_this.questionid);
        
    },
 
    gotoFirstQuestion:function(){
        //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
        wg = this.add.group();
        
        tp=null;
        tp1=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        var popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);


        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
         weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_bottle2');
        object1.name = "bottle2";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,1.25,0.5);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
            
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
         
            object3.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,1.1,0.5);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
    
        
        //objGroup.add(object1);
       // objGroup.add(object2);
      /*  var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";*/
        
        
      /* wronggraphics11 = this.add.graphics(this.world.centerX+438, this.world.centerY);
        wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics11.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics11.lineTo(0, 12);
        wronggraphics11.lineTo(170, 12);
        wronggraphics11.lineTo(170, 0);
        wronggraphics11.lineTo(0, 0);
       wronggraphics11.angle = 180;
       wronggraphics11.alpha = 0;
         wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        
        wronggraphics22 = this.add.graphics(this.world.centerX+438, this.world.centerY);
        wronggraphics22.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics22.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics22.lineTo(0, 12);
        wronggraphics22.lineTo(170, 12);
        wronggraphics22.lineTo(170, 0);
        wronggraphics22.lineTo(0, 0);
       wronggraphics22.angle = 180;
       wronggraphics22.alpha = 0;
         wronggraphics22.inputEnabled = true;
        wronggraphics22.input.useHandCursor = true;
        
        
        wg.add(wronggraphics11);
        wg.add(wronggraphics22);
        */
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        //objGroup.add(graphics2);
        
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "110";
		_this.balanceCkeckVar = 110;
		
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
        
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
       
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
        
        //wg.x = 1000;
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        
        
       // var Maintween0 = this.add.tween(wg);
        //Maintween0.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
     /* Voice1:function(question){
        if(window.languageSelected=="English")
                    {
                        ElevelD.play();
                        ElevelD.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelD.play();
                        HlevelD.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelD.play();
                        KlevelD.onStop.add(function(){this.input.enabled = true;}, this);
                    }
    },*/
    
    gotoSecondQuestion:function(){
        //_this.getVoice();
               this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*

        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/


        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_bottle');
        object1.name = "bottle";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,2.5,1);
            },this);
           y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
             
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.17,0.1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "99";
		_this.balanceCkeckVar = 99;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
     
    gotoThirdQuestion:function(){
         //_this.getVoice();
               this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,2.8,1.25);
            },this);
            y+=14;
            obj2Group.add(object2);
            //y-=5;
            
        }
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.2,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "86";
		_this.balanceCkeckVar = 86;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
                   angleSlide = weightScale2.angle-11;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=11;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
    
     gotoFourthQuestion:function(){
         //_this.getVoice();
                 this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Shoe');
        object1.name = "Shoe";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,3.2,1.44);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
          x = 0;
        y = 0;
             for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.99,0.4);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "59";
       _this.balanceCkeckVar = 59;
        
        scale1Group.add(object1);
        scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+100;
        object1.y = weightScale3.y+44;
        
        
        //this.objectClicked(object1,50,8);
        angleSlide = weightScale2.angle-11;
        tweenSlide = scale2Group.y+25;
        tweenSlide1 = scale2Group.y-25;
        
        weightScale2.angle-=11;
        scale1Group.y+=25;
        scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
    
      gotoFifthQuestion:function(){
           //_this.getVoice();
                    this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Book');
        object1.name = "Book";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,3.6,1.5);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.45,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "65";
		_this.balanceCkeckVar= 65;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
            angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
     gotoSixthQuestion:function(){
          //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Ball');
        object1.name = "Ball";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,4.105,1.71);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
         
            x = 0;
            y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.42,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "58";
		_this.balanceCkeckVar = 58;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
           angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
    
    
      gotoSeventhQuestion:function(){
           //_this.getVoice();
                    this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Carrot');
        object1.name = "Carrot";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
          //      tweenVal = 2;
          //      angleVal = 0.8;
                this.objectClicked1(target,5.8,2.4);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
        //        tweenVal = 2;
        //        angleVal = 0.8;
                this.objectClicked(target,0.78,0.3);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "42";
		_this.balanceCkeckVar = 42;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
       /* 
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5.7;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
      gotoEightQuestion:function(){
          //_this.getVoice();
                        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Glass');
        object1.name = "Glass";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked1(target,6.5,3);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
                y = 0;
         for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked(target,0.8,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "37";
		_this.balanceCkeckVar = 37;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
      /*         
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.4;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
    
     gotoNinthQuestion:function(){
         //_this.getVoice();
                     this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_ScrewDriver');
        object1.name = "ScrewDriver";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked1(target,10,4);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
         
             x = 0;
            y = 0;
         for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked(target,1.15,0.4);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "24";
		 _this.balanceCkeckVar = 24;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        /*
               
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5.4;
          scale1Group.y-=8;
          scale2Group.y+=8;
        
        */
         
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
     },
    
     gotoTenthQuestion:function(){
          //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Mug');
        object1.name = "Mug";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,23,9);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.7);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "11";
		_this.balanceCkeckVar = 11;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.9;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
      gotoEleventhQuestion:function(){
           //_this.getVoice();
           this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_coin1');
        object1.name = "coin1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
             x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "10";
		_this.balanceCkeckVar = 10;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
               
        
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoTwelvethQuestion:function(){
          //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Banana');
        object1.name = "Banana";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
            x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "9";
		_this.balanceCkeckVar =9;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.2;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-9;
         tweenSlide = scale2Group.y+22.5;
         tweenSlide1 = scale2Group.y-22.5;
        
          weightScale2.angle-=9;
          scale1Group.y+=22.5;
          scale2Group.y-=22.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
      
      
     },
    
      gotoThirteenthQuestion:function(){
          //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_tomoto');
        object1.name = "tomoto";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "8";
		_this.balanceCkeckVar= 8;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
       /* 
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.2;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
          
        angleSlide = weightScale2.angle-8;
         tweenSlide = scale2Group.y+20;
         tweenSlide1 = scale2Group.y-20;
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoFourteenthQuestion:function(){
         //_this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_spoon');
        object1.name = "spoon";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
               x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "7";
		_this.balanceCkeckVar = 7;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-7;
         tweenSlide = scale2Group.y+17.5;
         tweenSlide1 = scale2Group.y-17.5;
        
          weightScale2.angle-=7;
          scale1Group.y+=17.5;
          scale2Group.y-=17.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
    
     gotoFifteenthQuestion:function(){
         //_this.getVoice();
       this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Comb');
        object1.name = "Comb";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
            
                x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "6";
		_this.balanceCkeckVar= 6;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
       /*        
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        */
         
         angleSlide = weightScale2.angle-6;
         tweenSlide = scale2Group.y+15;
         tweenSlide1 = scale2Group.y-15;
        
          weightScale2.angle-=6;
          scale1Group.y+=15;
          scale2Group.y-=15;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSixteenthQuestion:function(){
        //_this.getVoice();
       this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Key');
        object1.name = "Key";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "5";
		_this.balanceCkeckVar=  5;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        */
        
        angleSlide = weightScale2.angle-5;
         tweenSlide = scale2Group.y+12.5;
         tweenSlide1 = scale2Group.y-12.5;
        
          weightScale2.angle-=5;
          scale1Group.y+=12.5;
          scale2Group.y-=12.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
      gotoSeventeenthQuestion:function(){
           //_this.getVoice();
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_eraser1');
        object1.name = "eraser1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "4";
		_this.balanceCkeckVar= 4;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-4;
         tweenSlide = scale2Group.y+10;
         tweenSlide1 = scale2Group.y-10;
        
          weightScale2.angle-=4;
          scale1Group.y+=10;
          scale2Group.y-=10;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);  
      
     },
    
     gotoEighteenthQuestion:function(){
          //_this.getVoice();
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_eraser1');
        object1.name = "eraser1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "3";
		_this.balanceCkeckVar= 3;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
          /*     
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.6;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
         
         angleSlide = weightScale2.angle-3;
         tweenSlide = scale2Group.y+7.5;
         tweenSlide1 = scale2Group.y-7.5;
        
          weightScale2.angle-=3;
          scale1Group.y+=7.5;
          scale2Group.y-=7.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);  
      
     },
    
    gotoNinteenthQuestion:function(){
        //_this.getVoice();
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_rope');
        object1.name = "rope";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
            x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar= 2;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
        /*       
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
        
        angleSlide = weightScale2.angle-2;
         tweenSlide = scale2Group.y+5;
         tweenSlide1 = scale2Group.y-5;
        
          weightScale2.angle-=2;
          scale1Group.y+=5;
          scale2Group.y-=5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);  
      
     },
    
     gotoTwentythQuestion:function(){
          //_this.getVoice();
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();

        popup = this.add.sprite(480,71,'game32d_popup');
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
		else if(window.languageSelected=="Marathi")
            popup.frame=6;
		else if(window.languageSelected=="Telugu")
            popup.frame=7;
		else if(window.languageSelected=="Tamil")
            popup.frame=5;
		else if(window.languageSelected=="Urdu")
            popup.frame=8;
        else
            popup.frame=4;
        popup.name="game32d_popup";
        popup.anchor.setTo(0.5);
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
       var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_leef');
        object1.name = "leef";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+355,this.world.centerY+130-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w22');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w22";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "1";
		_this.balanceCkeckVar= 1;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-12;
         tweenSlide = scale2Group.y+2.5;
         tweenSlide1 = scale2Group.y-2.5;
        
          weightScale2.angle-=1;
          scale1Group.y+=2.5;
          scale2Group.y-=2.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0,'Linear', true, 0);  
      
     },


    objectClicked:function(target,tween1,tween2)
    {

        /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


           commonNavBar.playClickSound();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            //target.anchor.setTo(0.1);
            target.events.onDragStop.add(function(){

            /*    var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
              
                if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&scale2Group.y<=24)
                {
                    if(target.name=="bottle2"||target.name=="bottle"||target.name=="Pappaya"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef"||target.name=="Shoe")
                    {
                        scale2Empty = false;
                    
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
						_this.balancevar++;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									commonNavBar.playclungSound();
								}, this);
							}
							
                       var tempFrame = 0;
                       target.visible = false;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim').frame+1;
                            scale2Group.getByName('targetAnim').destroy();
                        }
                        tempName = "Level32C_"+target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+115, weightScale4.y+25,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
				/*			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                            //console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);
                    }
                    commonNavBar.playsnapSound();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
                    
            },this);
        
   },
    
    objectClicked1:function(target,tween1,tween2)
    {
       // console.log("obj1");

        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


            commonNavBar.playClickSound();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
       // target.anchor.setTo(0.5);
            target.events.onDragStop.add(function(){

            /*    var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                
                if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&scale2Group.y<=24)
                {
                    if(target.name=="bottle2"||target.name=="Pappaya"||target.name=="Shoe"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef")
                    {
                        scale2Empty = false;
                    
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
						_this.balancevar+=10;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									commonNavBar.playclungSound();
								}, this);
							}
							
                       var tempFrame = 0;
                       //target.visible = false;
                        target.tint = 0xA1A1A1;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim1'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim1').frame+1;
                            scale2Group.getByName('targetAnim1').destroy();
                        }
                        tempName = "Level32C_"+target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+44,tempName);
                        targetAnim.name = "targetAnim1";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        
                        if(scale2Group.getByName('targetAnim'))
                        {
                            scale2Group.bringToTop(scale2Group.getByName('targetAnim'));
                        }
                        
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp1 = target.parent;
                        tweenVal1 = tween1;
                        angleVal1 = tween2;
                        targetAnim.events.onInputDown.add(function(target){
				/*			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                            //console.log(tweenVal);
                            this.objectRemoved1(target,tweenVal1,angleVal1);
                        },this);
                    }
                     commonNavBar.playsnapSound();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    
    objectRemoved:function(target,tween1,tween2)
    {
        //console.log("hereeeeeeeeeeee");

       /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


        commonNavBar.playClickSound();
        //console.log(target.parent);
        var targetParent = target.parent;
        //tempName = target.name;
        
        //console.log(target.name);
        //console.log(tempName);
        if(targetParent==scale2Group)
        {
           // console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+115, weightScale4.y+24.5,"Level32C_w22Anim");
        }
        else
        {
             ////.log("here2");
            var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,"Level32C_w22Anim");
        }
        
        targetAnim.name = "targetAnim";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            this.objectRemoved(target,tweenVal,angleVal);
        },this);
               
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                //console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){

            /*    var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  
                     commonNavBar.playsnapSound();
				
						_this.balancevar--;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									commonNavBar.playclungSound();
								}, this);
							}
							
                    for(var j=0;j<tp.length;j++)
                    {
                        if(!tp.getChildAt(j).visible)
                        {
                            tp.getChildAt(j).visible = true;
                            tp.getChildAt(j).inputEnabled = true;
                            tp.getChildAt(j).input.useHandCursor = true;
                            tp.getChildAt(j).events.onInputDown.add(function(target){
				/*				var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                                this.objectClicked(target,tweenVal,angleVal);
                            },this);
                            
                            if(!targetAnim.visible)
                                targetAnim.destroy();
                            
                            break;
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                       // console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                        //console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                     if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    
                    target.destroy();
             
                }
            },this);
    
        

   },
    
    objectRemoved1:function(target,tween1,tween2)
    {

       /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


        commonNavBar.playClickSound();
        //console.log(target.parent);
        var targetParent = target.parent;
        tempName = target.name;
        if(targetParent==scale2Group)
        {
           // console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+44,"Level32C_w1Anim");
        }
        else
        {
            // console.log("here2");
            var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,"Level32C_w1Anim");
        }
        
        targetAnim.name = "targetAnim1";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
         if(scale2Group.getByName('targetAnim'))
                        {
                            scale2Group.bringToTop(scale2Group.getByName('targetAnim'));
                        }
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            this.objectRemoved1(target,tweenVal1,angleVal1);
        },this);
               
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                //console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){

           /*     var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32D_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  
			
                   commonNavBar.playsnapSound();
				
						_this.balancevar-=10;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									commonNavBar.playclungSound();
								}, this);
							}
							
                    for(var j=0;j<tp1.length;j++)
                    {
                        if(tp1.getChildAt(j).tint == 0xA1A1A1)
                        {
                            tp1.getChildAt(j).visible = true;
                            tp1.getChildAt(j).tint = 0xFFFFFF;
                            tp1.getChildAt(j).inputEnabled = true;
                            tp1.getChildAt(j).input.useHandCursor = true;
                            tp1.getChildAt(j).events.onInputDown.add(function(target){
				/*				var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                                this.objectClicked1(target,tweenVal1,angleVal1);
                            },this);
                            
                            if(!targetAnim.visible)
                                targetAnim.destroy();
                            
                            break;
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                       // console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                       // console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                     if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    
                    target.destroy();
                   
                }
            },this);
    
      
   },
                                                                  
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0,'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
             //object1.events.onInputDown.add(this.checkCorrectAns,this);   
             //object2.events.onInputDown.add(this.checkCorrectAns,this);
          /*  for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0,'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
            // object1.events.onInputDown.add(this.checkCorrectAns,this);   
            // object2.events.onInputDown.add(this.checkCorrectAns,this);  
           /* for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

       
                   if(window.languageSelected == "English")
                    {
                        
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/ElevelD.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.2A/ElevelD.mp3";
                        
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/HlevelD.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.2A/HlevelD.mp3";
                        
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/KlevelD.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.2A/KlevelD.mp3";
                        
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/3.2A/ElevelD.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2A/ElevelD.mp3";
                        
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Marathi/3.2D_Ed.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Marathi/3.2D_Ed.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Telugu/3.2D_Ed.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Telugu/3.2D_Ed.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Tamil/3.2D_Ed.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Tamil/3.2D_Ed.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Urdu/3.2D_Ed.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Urdu/3.2D_Ed.mp3";
                    }
					else
                    {
                        
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/3.2_D1.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.2A/3.2_D1.mp3";
                        
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    
             
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        commonNavBar.addNavBar(this,_this.soundurl,"measurement2");
       
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
        commonNavBar.stopVoice();

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
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete rightAns;
        delete mainSprite;
        delete object3;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group,obj3Group;
        delete tweenVal,angleval;
        delete tweenSlide,tweenSlide1,angleSlide;
        delete tp,tp1;
        delete wg;
        delete speaker;
        delete enterTxt;
        //delete tempName,tp;
        //delete tempFrame;
        //delete targetAnim;
        //delete tempX,tempY;
        //delete x,y;
        delete noofAttempts;
        delete timer;
        delete AnsTimerCount;
        delete gameid;*/

        window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
             telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"weight_MWG_2_2state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
             telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"weight_MWG_2_2state", "fullycomplete");
            localStorage.setItem(window.avatarName+"weight_MWG_3_2state", "canplay");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        
    }
    
};