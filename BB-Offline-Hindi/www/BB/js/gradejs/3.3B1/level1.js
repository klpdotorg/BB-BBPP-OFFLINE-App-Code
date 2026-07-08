Game.grade3_3B1level1=function(){

  /*  bg1;
 starsGroup;
 dragBox;
 count;
 gameBoxGroup;
 crocsGroup;
 tickMark;
 objGroup;
 rightOrderArray;
 glowOrderArray;
 no1;
 count;
 count1;
 qArrays;
 graphics;
 numGroup;
 selectedAns;
 rightAns;
 mainSprite;
 scale1Empty;
 scale2Empty;
 weightScale1,weightScale2,weightScale3,weightScale4;
 obj1Group,obj2Group;
 tweenVal,angleval;
 tempName,tp;
 tempAngle;
 tempweight1;
 tempweight2;
 speaker;
 oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

 noofAttempts;
 timer;
 AnsTimerCount;
 enterTxt;*/
};


Game.grade3_3B1level1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "3.3B1";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/


        telInitializer.gameIdInit("weight3_3B1",gradeSelected);
        
    },


    preload:function(game){
        if(!window.grade3MW4){

            window.grade3MW4 = true;

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

         //level22
        _this.load.image('Level33B1_Newlevel2weight1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B1_Newlevel2weight2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B1_Newlevel2weight3',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B1_Newlevel2weight4',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B1_Newbottle',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bottle.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bottle.json');
        _this.load.atlas('Level33B1_Newjug',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/jug.png',window.baseUrl+'json/gradeJson/3.3B1/level22/jug.json');
        _this.load.atlas('Level33B1_Newpot',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/pot.png',window.baseUrl+'json/gradeJson/3.3B1/level22/pot.json');
        _this.load.atlas('Level33B1_Newcan',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/can.png',window.baseUrl+'json/gradeJson/3.3B1/level22/can.json');
        _this.load.atlas('Level33B1_NewfruitBox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/fruitBox.png',window.baseUrl+'json/gradeJson/3.3B1/level22/fruitBox.json');
        _this.load.atlas('Level33B1_Newbox1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/box1.json');
        _this.load.atlas('Level33B1_Newbag1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag1.json');
        _this.load.atlas('Level33B1_Newbag2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag2.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag2.json');
        _this.load.atlas('Level33B1_Newcylinder',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/cylinder.png',window.baseUrl+'json/gradeJson/3.3B1/level22/cylinder.json');
        
        _this.load.atlas('Level33B1_New1kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kg.json');
        _this.load.atlas('Level33B1_New2kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kg.json');
        _this.load.atlas('Level33B1_New5kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kg.json');
        _this.load.atlas('Level33B1_New10kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kg.json');
        
        _this.load.atlas('Level33B1_New1kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kgAnim.json');
        _this.load.atlas('Level33B1_New2kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kgAnim.json');
        _this.load.atlas('Level33B1_New5kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kgAnim.json');
        _this.load.atlas('Level33B1_New10kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B1_Newlevel2Bg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B1_Newtxtbox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box.png');
        _this.load.atlas('Level33B1_Newnumbg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/numbg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/numbg.json');
        _this.load.atlas('Level33B1_NewrightBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/rightBtn.json');
        _this.load.atlas('Level33B1_NewwrongBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/wrongBtn.json');
    }

    },


	create:function(game){

		_this.amplify = null;
		noofAttempts=0;
        AnsTimerCount=0;
        selectedAns = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCheck = 0;

        no1=0;
       // qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 0;
        objAdded = 0;
        tempAngle = 0;
        tempweight = 0;
        oneKgAngle=oneKgWeight=twoKgAngle=twoKgWeight=fiveKgAngle=fiveKgWeight=tenKgAngle=tenKgWeight=0;
     /*   objArray = [
        ['Can','Level33B1_Ball',40,10,10,3],['Can','Level33B1_Book',40,20,10,5],['Can','Level33B1_Comb',40,5,10,2],['Can','Level33B1_Eraser',40,5,10,2],['Can','Level33B1_Glass',40,10,10,3],['Can','Level33B1_Mug',40,20,10,5],['Can','Level33B1_Key',40,5,10,2],['Can','Level33B1_Pappaya',40,30,10,7],['Can','Level33B1_Carrot',40,5,10,1],['Can','Level33B1_Coin',40,5,10,1]
        ['Can','Level33B1_Pencil',40,5,10,2],['Can','Level33B1_ScrewDriver',40,10,10,3],['Can','Level33B1_Shoe',40,15,10,4],
        ['Ball','Level33B1_Book',10,25,3,6],['Ball','Level33B1_Comb',20,5,5,2],['Ball','Level33B1_Eraser',20,5,5,2],['Ball','Level33B1_Glass',20,10,5,3],['Ball','Level33B1_Mug',10,25,3,6],['Ball','Level33B1_Key',20,5,5,2],['Ball','Level33B1_Pappaya',10,30,3,7],['Ball','Level33B1_Pencil',20,5,5,2],['Ball','Level33B1_ScrewDriver',20,8,5,2],['Ball','Level33B1_Shoe',20,10,5,3],['Ball','Level33B1_Carrot',20,5,5,1],['Ball','Level33B1_Shoe',20,5,5,1],
        ['Book','Level33B1_Comb',25,5,6,2],['Book','Level33B1_Eraser',25,5,6,2],['Book','Level33B1_Glass',25,10,6,3],['Book','Level33B1_Mug',25,10,6,3],['Book','Level33B1_Key',25,5,6,2],['Book','Level33B1_Pappaya',20,40,5,10],['Book','Level33B1_Pencil',25,5,6,2],['Book','Level33B1_ScrewDriver',25,8,6,2],['Book','Level33B1_Shoe',25,10,6,3],['Book','Level33B1_Carrot',25,5,6,1],['Book','Level33B1_Coin',25,5,6,1],
        ['Eraser','Level33B1_Glass',5,20,2,5],['Eraser','Level33B1_Mug',5,20,2,5],['Eraser','Level33B1_Key',15,5,4,2],['Eraser','Level33B1_Pappaya',5,30,2,8],['Eraser','Level33B1_Pencil',15,5,4,2],['Eraser','Level33B1_ScrewDriver',10,20,3,5],['Eraser','Level33B1_Shoe',10,25,3,6],['Eraser','Level33B1_Carrot',5,20,1,5],['Eraser','Level33B1_Coin',15,5,3,1],
        ['Glass','Level33B1_Mug',10,25,3,6],['Glass','Level33B1_Key',15,5,3,2],['Glass','Level33B1_Pappaya',10,30,3,7],['Glass','Level33B1_Pencil',15,5,4,2],['Glass','Level33B1_ScrewDriver',20,10,5,3],['Glass','Level33B1_Shoe',10,20,3,5],['Glass','Level33B1_Carrot',20,10,5,2],['Glass','Level33B1_Coin',20,5,5,1],
        ['Mug','Level33B1_Key',20,5,5,2],['Mug','Level33B1_Pappaya',10,30,3,8],['Mug','Level33B1_Pencil',20,5,5,2],['Mug','Level33B1_ScrewDriver',20,10,5,3],['Mug','Level33B1_Shoe',10,20,3,5],
        ['Key','Level33B1_Pappaya',5,30,2,8],['Key','Level33B1_Pencil',15,5,4,2],['Key','Level33B1_ScrewDriver',5,20,1,5],['Key','Level33B1_Shoe',5,20,1,5],['Key','Level33B1_Carrot',5,20,1,5],['Key','Level33B1_Coin',20,5,5,1],
        ['Pappaya','Level33B1_Glass',25,10,6,3],['Pappaya','Level33B1_Pencil',25,5,6,1],['Pappaya','Level33B1_ScrewDriver',30,10,7,3],['Pappaya','Level33B1_Shoe',30,10,7,3],['Pappaya','Level33B1_Carrot',30,10,7,3],['Pappaya','Level33B1_Coin',30,5,7,1],
        ['Pencil','Level33B1_Glass',5,20,1,5],['Pencil','Level33B1_ScrewDriver',5,20,1,5],['Pencil','Level33B1_Shoe',5,20,1,5],
        ['ScrewDriver','Level33B1_Glass',10,25,2,6],['ScrewDriver','Level33B1_Shoe',10,25,2,6],
        ['Shoe','Level33B1_Glass',25,10,6,2],['Carrot','Level33B1_Coin',20,5,5,1]
        ];*/
        qArrays = [1,2,3,4,5,6,7,8,9];
        qArrays = this.shuffle(qArrays);
        
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

       
        bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level33B1_Newlevel2Bg');
       
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
           
            _this.getVoice();
            
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
        
        //no1++;
        this.getQuestion();
        
        //this.gotoFirstQuestion();
        

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

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;

        
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
          
    	}
        
    },
    
    
  /*  stopAllVoice:function(){
        Eng_33B1.stop();
        Hin_33B1.stop();
        Kan_33B1.stop();
 
    },*/
     
	telemetry:function(target){
		
		/* var currentTime = window.timeSaveFunc();
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
	},
	
   
    removeEverthing:function() 
    {
		_this.timer1.stop();
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        if(no1<5)
        {
            count =0;
            no1++;
            _this.balanceCheck = 0;
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
                this.getQuestion();
            },this);
            
        
        }
        else
        {
			_this.timer1.stop();
			_this.timer1 = null;
           // console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
            //this.stopAllVoice();
            this.state.start('grade3_3B1Score');
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
            
           /* var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level33B1_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=65;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
        
        if(window.languageSelected=="English")
            kgTxt1 = this.add.text(x+90,505, "Kg");
        else if(window.languageSelected=="Hindi")
            kgTxt = this.add.text(x+90,505, "कि.ग्रा ");
         else if(window.languageSelected=="Kannada")
            kgTxt = this.add.text(x+90,505, "ಕೆಜಿ");
		else if(window.languageSelected=="Odiya")
            kgTxt = this.add.text(x+90,505, "କି.ଗ୍ରା."); //now it is gm it should be 'kg'
        else if(window.languageSelected=="Marathi")
				var kgTxt = this.add.text(x+90,505, "किलोग्रॅम");
			else if(window.languageSelected=="Telugu")
				var kgTxt = this.add.text(x+90,505, "కిలో");
			else if(window.languageSelected=="Tamil")
				var kgTxt = this.add.text(x+90,505, "கி.கி");
			else if(window.languageSelected=="Urdu")
				var kgTxt = this.add.text(x+90,505, "کلو گرام");
			else
            kgTxt = this.add.text(x+90,505, "કિગ્રા");
        
		if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
                    //kgTxt.setTextBounds(20, 20, 768, 568);
                    //kgTxt.padding.set(20, 20);
                    kgTxt.anchor.setTo(0.5);
                    kgTxt.align = 'center';
                    kgTxt.font = 'Comic Sans MS';
                    kgTxt.fontSize = 24;
                    kgTxt.fontWeight = 'normal';
                    kgTxt.fill = '#65B4C3';
                    kgTxt.setShadow(0, 0,'Level33B1_rgba(0, 0, 0, 0)', 0);
					 numGroup.add(kgTxt);
		}
		else{
					kgTxt1.anchor.setTo(0.5);
                    kgTxt1.align = 'center';
                    kgTxt1.font = 'myfont';
                    kgTxt1.fontSize = 28;
					kgTxt1.fontWeight = 'normal';
                    kgTxt1.fill = '#65B4C3';
                    kgTxt1.setShadow(0, 0,'Level33B1_rgba(0, 0, 0, 0)', 0);
					 numGroup.add(kgTxt1);
		}
                    
                      
            //titletext.scale.setTo(1.5);
        
        
        var wrongbtn = numGroup.create(x+160,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
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

        enterTxt.setShadow(0, 0,'Level33B1_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
       
        wrongbtn.events.onInputDown.add(function(target){ this.telemetry(target);
			
            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B1_CrossButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
				

            //target.frame = 1; 
             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            this.time.events.add(500, function(){
                target.frame = 0;
                enterTxt.setText("");
                selectedAns="";
            
            },this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){ this.telemetry(target);
			
            noofAttempts++;
            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B1_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            target.frame = 1;
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
                    //console.log("correct");
                    _this.speakerbtn.inputEnabled=false;
                    target.events.onInputDown.removeAll();
                    
                    //mainSprite.frame = 1;
                  /*  var anim = scale2Group.getByName("5kgAnim").animations.add('glow');
                    anim.play(10);
                    var anim2 = scale2Group.getByName("10kgAnim").animations.add('glow');
                    anim2.play(10);
                    var anim3 = scale2Group.getByName("2kgAnim").animations.add('glow');
                    anim3.play(10);
                    var anim4 = scale2Group.getByName("1kgAnim").animations.add('glow');
                    anim4.play(10);*/
                    
                    scale2Group.getByName("5kgAnim").frame = 1;
                    scale2Group.getByName("10kgAnim").frame = 1;
                    scale2Group.getByName("2kgAnim").frame = 1;
                    scale2Group.getByName("1kgAnim").frame = 1;
                    
                    /*var shakeGroup = this.add.group();
                    shakeGroup.add(scale2Group.getByName("5kgAnim"));
                    shakeGroup.add(scale2Group.getByName("10kgAnim"));
                    shakeGroup.add(scale2Group.getByName("2kgAnim"));
                    shakeGroup.add(scale2Group.getByName("1kgAnim"));
                    */
                    
                    var tween = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween1 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween2 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                    tween2.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween3 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                    tween3.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    tween.onComplete.add(function(){
                            var tween4 = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                            tween4.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    
                            var tween5 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                            tween5.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween6 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                            tween6.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween7 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                            tween7.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            tween4.onComplete.add(function(){

                                        var tween8 = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                                        tween8.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween9 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                                        tween9.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween10 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                                        tween10.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween11 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                                        tween11.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        tween8.onComplete.add(function(){

                                            var tween12 = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                                            tween12.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween13 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                                            tween13.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween14 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                                            tween14.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween15 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                                            tween15.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            tween15.onComplete.add(function(){

                                                    var tween16 = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                                                    tween16.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween17 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                                                    tween17.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween18 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                                                    tween18.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween19 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                                                    tween19.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    tween19.onComplete.add(function(){

                                                            var tween20 = this.add.tween(scale2Group.getByName("5kgAnim").scale);
                                                            tween20.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween21 = this.add.tween(scale2Group.getByName("10kgAnim").scale);
                                                            tween21.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween22 = this.add.tween(scale2Group.getByName("2kgAnim").scale);
                                                            tween22.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween23 = this.add.tween(scale2Group.getByName("1kgAnim").scale);
                                                            tween23.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            tween23.onComplete.add(function(){


                                                                    this.removeEverthing();

                                                            },this);


                                                    },this);


                                            },this);


                                    },this);


                            },this);
                        
                        
                        
                    },this);
                    
                    if(timer!=null)
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
					
                    
                      _this.cmusic1 = _this.add.audio('celebr');
		              _this.cmusic1.play();
                     var starAnim = starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim5 = starAnim.animations.add('star');
                        anim5.play();
                        //anim4.onComplete.add(function(){//this.removeEverthing();},this);
                        //this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					//noofAttempts++;
                    //console.log("wrong");
                     _this.speakerbtn.inputEnabled=true;
                    _this.speakerbtn.input.useHandCursor=true;
                    selectedAns = "";
                    enterTxt.setText("");
                    
                    var shakeGroup = this.add.group();
                    shakeGroup.x = scale2Group.x;
                    shakeGroup.y = scale2Group.y;
                    shakeGroup.add(scale2Group.getByName("5kgAnim"));
                    shakeGroup.add(scale2Group.getByName("10kgAnim"));
                    shakeGroup.add(scale2Group.getByName("2kgAnim"));
                    shakeGroup.add(scale2Group.getByName("1kgAnim"));
                    
                    shake.shake(10, shakeGroup);
                    
                    
                    _this.wmusic1 = _this.add.audio('waudio');
		              _this.wmusic1.play();
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                        
                        scale2Group.add(shakeGroup.getByName("5kgAnim"));
                        scale2Group.add(shakeGroup.getByName("10kgAnim"));
                        scale2Group.add(shakeGroup.getByName("2kgAnim"));
                        scale2Group.add(shakeGroup.getByName("1kgAnim"));
                        shakeGroup.destroy();
                        
                        scale2Group.getByName("5kgAnim").visible = false;
                        scale2Group.getByName("10kgAnim").visible = false;
                        scale2Group.getByName("2kgAnim").visible = false;
                        scale2Group.getByName("1kgAnim").visible = false;
                        
                        obj2Group.getByName("5kg").frame = 0;
                        obj2Group.getByName("10kg").frame = 0;
                        obj2Group.getByName("2kg").frame = 0;
                        obj2Group.getByName("1kg").frame = 0;
                        
                        
                        obj2Group.getByName('5kg').inputEnabled = true;
                        obj2Group.getByName('5kg').input.useHandCursor = true;
                        obj2Group.getByName('5kg').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                        },this);
                        
                        obj2Group.getByName('10kg').inputEnabled = true;
                        obj2Group.getByName('10kg').input.useHandCursor = true;
                        obj2Group.getByName('10kg').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                        
                        obj2Group.getByName('2kg').inputEnabled = true;
                        obj2Group.getByName('2kg').input.useHandCursor = true;
                        obj2Group.getByName('2kg').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                        },this);
                        
                        obj2Group.getByName('1kg').inputEnabled = true;
                        obj2Group.getByName('1kg').input.useHandCursor = true;
                        obj2Group.getByName('1kg').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                        },this);
                        
                        
                        
                        _this.balanceCheck = 0;
                        
                        
                        weightScale2.angle=tempAngle;
                        scale1Group.y=tempweight1;
                        scale2Group.y=tempweight2;
                        
                        target.frame = 0;
                    },this);
                }
        },this);
        
       
    },
    
    
    numClicked:function(target){
        //console.log(target.name);

        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B1_NumberBtn"+target.name, 
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
        
       // console.log(selectedAns);
        
    },
    
    gotoFirstQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newbottle');
        object1.name = "bottle";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
        
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;  
                object2.events.onInputDown.add(function(target){ this.telemetry(target); 
                    oneKgAngle=2;
                    oneKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;   
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=3;
                    twoKgWeight=8;
                    this.objectClicked(target,8,3);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);     
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);   
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;  
                object2.events.onInputDown.add(function(target){ this.telemetry(target); 
                    oneKgAngle=2;
                    oneKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;   
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=3;
                    twoKgWeight=8;
                    this.objectClicked(target,8,3);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);     
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);   
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
        }
        
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "1";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 2;
        scale1Group.y += 5;
        scale2Group.y -= 5;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoSecondQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newjug');
        object1.name = "jug";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);     
                    oneKgAngle=2;
                    oneKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);  
                    twoKgAngle=3;
                    twoKgWeight=8;
                    this.objectClicked(target,8,3);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);     
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);  
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);     
                    oneKgAngle=2;
                    oneKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);  
                    twoKgAngle=3;
                    twoKgWeight=8;
                    this.objectClicked(target,8,3);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);     
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);  
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 3;
        scale1Group.y += 8;
        scale2Group.y -= 8;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoThirdQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newpot');
        object1.name = "pot";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);  
                    oneKgAngle=1;
                    oneKgWeight=3;
                    this.objectClicked(target,3,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);    
                    twoKgAngle=2;
                    twoKgWeight=6;
                    this.objectClicked(target,6,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);  
                    fiveKgAngle=4;
                    fiveKgWeight=12;
                    this.objectClicked(target,12,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target); 
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);  
                    oneKgAngle=1;
                    oneKgWeight=3;
                    this.objectClicked(target,3,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);    
                    twoKgAngle=2;
                    twoKgWeight=6;
                    this.objectClicked(target,6,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);  
                    fiveKgAngle=4;
                    fiveKgWeight=12;
                    this.objectClicked(target,12,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target); 
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "3";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 3;
        scale1Group.y += 9;
        scale2Group.y -= 9;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoFourthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newcan');
        object1.name = "can";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "5";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 4;
        scale1Group.y += 10;
        scale2Group.y -= 10;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoFifthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_NewfruitBox');
        object1.name = "fruitBox";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=5;
                    tenKgWeight=15;
                    this.objectClicked(target,15,5);
                },this);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "6";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+75;
        
        weightScale2.angle -= 5;
        scale1Group.y += 12;
        scale2Group.y -= 12;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoSixthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newbox1');
        object1.name = "box1";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
        }
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "7";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 6;
        scale1Group.y += 15;
        scale2Group.y -= 15;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoSeventhQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newbag1');
        object1.name = "bag1";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this); 
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);       
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);           
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;    
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                this.objectClicked(target,22,8);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this); 
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);       
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);           
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;    
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                this.objectClicked(target,22,8);
                },this);
        }
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "11";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 8.5;
        scale1Group.y += 24;
        scale2Group.y -= 24;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoEightQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newbag2');
        object1.name = "bag2";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
  
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
                
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=2;
                    twoKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=4;
                    fiveKgWeight=10;
                    this.objectClicked(target,10,4);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
        }
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "12";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 9.5;
        scale1Group.y += 27;
        scale2Group.y -= 27;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    gotoNinthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33B1_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,364,'Level33B1_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,375,'Level33B1_Newlevel2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,275,'Level33B1_Newlevel2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,275,'Level33B1_Newlevel2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level33B1_Newcylinder');
        object1.name = "cylinder";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
       
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        
        object2 = this.add.sprite(this.world.centerX+300,175,'Level33B1_New1kg');
        object2.name = "1kg";
        object2.value = 1;
        object2.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
            
        obj2Group.add(object2);
            //y-=5;
        
        object3 = this.add.sprite(this.world.centerX+340,250,'Level33B1_New2kg');
        object3.name = "2kg";
        object3.value = 2;
        object3.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object3);
        
        object4 = this.add.sprite(this.world.centerX+300,330,'Level33B1_New5kg');
        object4.name = "5kg";
        object4.value = 5;
        object4.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object4);
        
        object5 = this.add.sprite(this.world.centerX+350,413,'Level33B1_New10kg');
        object5.name = "10kg";
        object5.value = 10;
        object5.anchor.setTo(0.5,1);
        // obj2.addChild(object2);
        
            
        obj2Group.add(object5);
        
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=0.5;
                    this.objectClicked(target,1,0.5);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=1;
                    twoKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=2;
                    fiveKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);         
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);   
                    oneKgAngle=1;
                    oneKgWeight=0.5;
                    this.objectClicked(target,1,0.5);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target); 
                    twoKgAngle=1;
                    twoKgWeight=2;
                    this.objectClicked(target,2,1);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);   
                    fiveKgAngle=2;
                    fiveKgWeight=5;
                    this.objectClicked(target,5,2);
                },this);         
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);    
                    tenKgAngle=8;
                    tenKgWeight=22;
                    this.objectClicked(target,22,8);
                },this);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(660, 50);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,300,410);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "15";
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        
        
        scale1Empty = false;
        scale1Group.add(object1);
       // scale1Group.bringToTop(weightScale3);
        object1.x = weightScale3.x+110;
        object1.y = weightScale3.y+57;
        
        weightScale2.angle -= 9.5;
        scale1Group.y += 27;
        scale2Group.y -= 27;
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o1kgAnim = this.add.sprite( weightScale4.x+105, weightScale4.y+61,'Level33B1_New1kgAnim');
        o1kgAnim.name = "1kgAnim";
        o1kgAnim.value = 1;
        o1kgAnim.anchor.setTo(0.5,1);
        o1kgAnim.visible = false;
        
        
        var o2kgAnim = this.add.sprite( weightScale4.x+165, weightScale4.y+71,'Level33B1_New2kgAnim');
        o2kgAnim.name = "2kgAnim";
        o2kgAnim.value = 2;
        o2kgAnim.anchor.setTo(0.5,1);
        o2kgAnim.visible = false;
       
        
        var o5kgAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+50,'Level33B1_New5kgAnim');
        o5kgAnim.name = "5kgAnim";
        o5kgAnim.value = 5;
        o5kgAnim.anchor.setTo(0.5,1);
        o5kgAnim.visible = false;
        
        
        var o10kgAnim = this.add.sprite( weightScale4.x+215, weightScale4.y+62,'Level33B1_New10kgAnim');
        o10kgAnim.name = "10kgAnim";
        o10kgAnim.value = 10;
        o10kgAnim.anchor.setTo(0.5,1);
        o10kgAnim.visible = false;
       
     
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        

        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
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
      
     },
    
    
    objectClicked:function(target,tween1,tween2)
    {

        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level3B1_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){

                var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level3B1_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale4.getChildAt(0)))
                {
                      _this.balanceCheck +=target.value;
                       var tempFrame = 0;
                       target.frame = 1;
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name+"Anim";
                        scale2Group.getByName(tempName).visible = true;
                        
                        scale2Group.getByName(tempName).inputEnabled = true;
                        scale2Group.getByName(tempName).input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        scale2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                           // console.log(target.name);
                            if(target.name == "1kgAnim")
                                this.objectRemoved(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "2kgAnim")
                               this.objectRemoved(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "5kgAnim")
                                this.objectRemoved(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "10kgAnim")
                                this.objectRemoved(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                   _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
				
				if(_this.balanceCheck == Number(rightAns))
				{
					
					_this.time.events.add(200, function()
					{
						_this.clungSound = _this.add.audio('ClungSound');
						_this.clungSound.play();
					}, this);
				}
				
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
            
            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level3B1_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);

             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){

                var currentTime = window.timeSaveFunc();
                var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: currentTime, 
                    event_type: "drag", 
                    res_id: "Level3B1_"+target.name, 
                    access_token: window.acctkn 
                } 
                
                //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {
                      _this.balanceCheck -=target.value;
                       var tempFrame = 0;
                       target.visible = false
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name;
                        tempName = tempName.substring(0, tempName.length-4);
                    
                    
                        obj2Group.getByName(tempName).frame = 0;
                        
                        obj2Group.getByName(tempName).inputEnabled = true;
                        obj2Group.getByName(tempName).input.useHandCursor = true;
                        //tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        obj2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                            //console.log(tweenVal);
                            if(target.name == "1kg")
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "2kg")
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "5kg")
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "10kg")
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                   _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
				
				if(_this.balanceCheck == Number(rightAns))
				{
					
					_this.time.events.add(200, function()
					{
						_this.clungSound = _this.add.audio('ClungSound');
						_this.clungSound.play();
					}, this);
				}
				
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
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
    
 
    update:function(){

    },
    
    /*getVoice:function(){
       this.stopAllVoice();
        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(window.languageSelected=="English")
                        Eng_33B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_33B1.play();
                    else
                        Kan_33B1.play();
                    break;
        }
    }*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

       
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/English/3.3B_1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Hindi/3.3B_1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Kannada/3.3B_1.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.3A/3.3B_1.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Marathi/3.3B_1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Telugu/3.3B_1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Tamil/3.3B_1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Urdu/3.3B_1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Odiya/3.3B_1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

        /*delete bg1;
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
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete speaker;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete noofAttempts;
        delete timer;
        delete AnsTimerCount;
        delete enterTxt;*/
        
    }
    
};