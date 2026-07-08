
Game.number_NSNG_2_1level2=function(){};


Game.number_NSNG_2_1level2.prototype={


     init:function(param,score,timerStopVar)
    {
        _this = this;
         this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
        _this.gameid = "Game 1.5";
        
        commonNavBar.level2Bool = true;
    },
    
	create:function(game){

    this.playedwithHint = false;
        this.completelyplayed = false;


   // this.Stararr = [];
    no11 = 0;
		_this.amplify = null;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        countcorrect=4;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.checkMangoes = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
         _this.no1=0;
       //  _this.qArrays = [1,3,5,7,9,11];
        // _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
         _this.qArrays = [1,2,3,4,5,6,7,8,9];
         _this.qArrays1 = [7,8,9,10,11,12];
        
         _this.xArray = [210,160,350,180,300,300,370,250,210/*,300*/];
         _this.yArray = [140,200,200,280,270,140,280,230,340/*,340*/];
       
         _this.qArrays = _this.shuffle( _this.qArrays);
        // _this.qArrays1 = _this.shuffle( _this.qArrays1);
        
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity15_bg1');
           commonNavBar.addNavBar(game);
       //  commonNavBar.navBar.isVisible = false;
             commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
            commonNavBar.startTimer(game);

   //  commonNavBar.updateTimer();
  //  commonNavBar.startTimer(commonNavBar.updateTimer());
    commonNavBar.addScore(game,commonNavBar.getScore());
    this.hintparams=['NSNG1.1','level2',false,false,true,1];
        commonNavBar.addHint(game,this.hintparams);



          /*  _this.navBar = _this.add.sprite(0,0,'navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(300,5,'timerBg');
          */  /* _this.topicOutline = _this.add.sprite(70,5,'unity15_topicOutline');
             _this.practice = _this.add.sprite(78,10,'unity15_practice');
             _this.topic = _this.add.sprite(165,10,'unity15_topic');*/
        
           _this.tree = _this.add.sprite(100,100,'unity15_tree');
           _this.tree.scale.setTo(0.5,0.5);
        
            /* _this.timeDisplay = _this.add.text(325,20, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
			_this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(5,5,'backBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
           // _this.stopVoice();
            */
           /* _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           *//* commonNavBar.playClickSound();

           _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'speakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           /*_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           */ /*commonNavBar.playClickSound();
            _this.getVoice();
            
        },_this);
        */
        _this.graphics = _this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);		
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;
        
        _this.shakeObjectGroup = _this.add.group();
        
        _this.basketback = _this.add.sprite(450,382,'unity15_Basket_Back');
          _this.basketback.scale.setTo(0.5,0.5);
        _this.shakeObjectGroup.add(_this.basketback);
         
       /* basket = _this.add.sprite(450,380,'basket');
          basket.scale.setTo(0.5,0.5);*/
         _this.shadow = _this.add.sprite(450,380,'unity15_shadow');
         _this.shadow.scale.setTo(0.5,0.5);
        
        _this.generateStarsForTheScene(game,8);
       //  _this.no1++;
        _this.getQuestion();

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
    updateTimer:function() {
    // _this.counterForTimer++;
    // //console.log("lololil"+_this.counterForTimer);
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

    getQuestion:function(target)
    {  
      commonNavBar.enableHintIcon();
       /* if(!_this.timer)
        {
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
          }*/
        
        _this.basketback.visible = true;
       /**************************************************************************/ 
      /*  _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
       */ /**************************************************************************/ 
        
      /*  _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
      */  //console.log(" _this.no1"+ _this.no1);
        if( _this.no1 ==0&&_this.wrong == true){
            _this.getVoice();
        }
        if( _this.no1 < 4){
    	switch( _this.qArrays[ _this.no1])      
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
   }
         _this.mangoGroup.callAll('animations.add', 'animations', 'spin', 0, 10, true);

    //  And play them
         _this.mangoGroup.callAll('animations.play', 'animations', 'spin');
        
        /* _this.time.events.add(3000, function(){
         _this.mangoGroup.callAll('animations.stop', 'animations', 'spin');
        },_this);*/

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    
    mangoCelebClicked:function(target){
        
        //console.log("MangoCeleb "+target.name);
        _this.vx = target.x;   
        _this.vy = target.y;
          target.input.enableDrag();
        
            //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "drag", 
                    res_id: "Level12_"+target.name,
                    access_token: window.acctkn
               } 
               
         // absdsjsapi.saveInteractEvent(_this.interactEvent);
       
       //target.frame = 1;
       /* _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
       */ commonNavBar.playClickSound();

       target.events.onDragStop.add(
            function(target){
                 
                //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "drop", 
                    res_id: "Level12_"+target.name, 
                    access_token: window.acctkn 
               } 
               
         // absdsjsapi.saveInteractEvent(_this.interactEvent);
          
                if(_this.checkOverlap(target, _this.tree))
                {
                 for(var i=0;i<= _this.objectGroup.length-1;i++)
                    {
                        if(  _this.mangoGroup.getChildAt(i).visible == false)
                            {

                                  /*  _this.dragMango = _this.add.audio('dragMango');
                                    _this.dragMango.play();

                                */         commonNavBar.playDragMangoSound();

                                for(var j = 0;j<= _this.objectGroup.length-1;j++){
                                      //console.log("i "+i);
                                    if(  _this.objectGroup.getChildAt(j).visible == true)
                                     {
                                          _this.objectGroup.getChildAt(j).visible = false;
                                         break;
                                     }
                                  }
                                    
                                
                                    //target.visible = false;
                                    //console.log("Im  MangoCeleb "+i);
                                    //console.log("Im  MangoCeleb "+ _this.objectGroup.getChildAt(i).name);
                                     _this.mangoGroup.getChildAt(i).visible = true;
                                     _this.w++;
                                    _this.checkMangoes--;
                                    break;
                            }

                    }
            }
                target.events.onDragStop.removeAll(); 
                target.x =  _this.vx;   
                target.y =  _this.vy;
                            
             },_this);
    },
    mangoClicked:function(target){
        //console.log(target.name);
         _this.vx = target.x;   
         _this.vy = target.y; 
      target.input.enableDrag(true);
        
        //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "Level12_"+target.name, 
                    access_token: window.acctkn 
               } 
               
         // absdsjsapi.saveInteractEvent(_this.interactEvent); 
        
       //target.frame = 1;
      /*  _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
       */ target.events.onDragStop.add(
            function(target){
                
                //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "drop", 
                    res_id: "Level12_"+target.name, 
                    access_token: window.acctkn 
               } 
               
         // absdsjsapi.saveInteractEvent(_this.interactEvent);
                 
                    if( _this.w>=0){
                    if(_this.checkOverlap(target, _this.basket))
                        {
                               /* _this.dragMango = _this.add.audio('dragMango');
                                _this.dragMango.play();
                                playDragMangoSound
                               */ //console.log("insider");
                                        commonNavBar.playDragMangoSound();

                                target.visible = false;
                                //console.log("Im hererrerere "+w);
                                ////console.log("Im hererrerere "+ _this.objectGroup.getChildAt(w).name);
                                // _this.objectGroup.getChildAt(w).visible = true;
                            
                             for(var i =  _this.objectGroup.length-1;i>=0;i--){
                              //console.log("i "+i);
                            if(  _this.objectGroup.getChildAt(i).visible == false)
                             {
                                  _this.objectGroup.getChildAt(i).visible = true;
                                 break;
                             }
                          }
                            
                            
                            
                             _this.w--;
                            _this.checkMangoes++;
                        }
                    }
                
                target.events.onDragStop.removeAll(); 
                target.x =  _this.vx;
                target.y =  _this.vy; 
                
                 _this.tickMark = _this.add.sprite(800,400,'unity15_tickBtn');
                //tickMark.scale.setTo(0.7,0.7);
         _this.tickMark.inputEnabled = true;
         _this.tickMark.input.useHandCursor = true;
         _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
                
             },_this);
        
    },
toCheckAnswer:function(target){
     /* _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
    */commonNavBar.playClickSound();//console.log("check answer"+_this.checkMangoes);
    if(_this.checkMangoes ==  _this.rightAns)
        {
             _this.mangoGroup.inputEnabled = false;
            _this.correctAns(target);
        }
    else
        {
            _this.wrongAns(target);
        }
		target.events.onInputDown.removeAll();
},
     generatemangoCeleb:function(){
         _this.shakeObjectGroup.add(_this.basketback);
          _this.objectGroup = _this.add.group();
        var x = 500;
        var x1 = 515;
        var x2 = 530;
        var y = 370;
        var y1 = 342;
        var y2 = 312;
         
    for(var i=0;i<9;i++)
        {
            if(i>4 && i<9){
                
                    box =   _this.objectGroup.create(x,y,'unity15_mangoCeleb');
                    box.name = "mango"+i;
                    box.anchor.setTo(0.5);
                    box.scale.setTo(0.7,0.7);
                    x+=30;
            }
            else if(i>1 && i<5){
                
                   box =   _this.objectGroup.create(x1,y1,'unity15_mangoCeleb');
                   box.name = "mango"+i;
                   box.anchor.setTo(0.5);
                   box.scale.setTo(0.7,0.7);
                   x1+=30;
             }
            else if(i<2){
                   box =   _this.objectGroup.create(x2,y2,'unity15_mangoCeleb');
                   box.name = "mango"+i;
                   box.anchor.setTo(0.5);
                   box.scale.setTo(0.7,0.7);
                   x2+=30;
            }
             _this.objectGroup.getChildAt(i).visible = false;
            
            box.inputEnabled = true;
            box.input.useHandCursor = true;
            box.events.onInputDown.add(_this.mangoCelebClicked,_this);
        }
         _this.basket = _this.add.sprite(450,380,'unity15_basket');
         _this.basket.scale.setTo(0.5,0.5);
     },  
 gotoFirstQuestion:function(){
      //_this.stopVoice();
     _this.questionid = 1;

     _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
         _this.mangoGroup = _this.add.group();
     
     _this.generatemangoCeleb();
        for(var i=0;i<3;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;    
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 1;
        }
     },    
    gotoSecondQuestion:function(){ 
          //_this.stopVoice();
        _this.questionid = 1;
         _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 1;
        
        questionNo = 2;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }
        
     },
    gotoThirdQuestion:function(){
        // _this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 2;
        
        questionNo = 3;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 3;
        }
        
     },
    gotoFourthQuestion:function(){
        // _this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 3;
        
        questionNo = 4;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
             _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 4;
        }
        
        
     }, 
    gotoFifthQuestion:function(){
       //_this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 4;
        
        questionNo = 5;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 5;
        }
        
        
     }, 
    gotoSixthQuestion:function(){
        //_this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 5;
        
        questionNo = 6;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<7;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 6;
        }
        
        
     },
    
    gotoSeventhQuestion:function(){
         //_this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 6;
        
        questionNo = 7;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<8;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 7;
        }
        
     },
    gotoEighthQuestion:function(){
        //_this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 7;
        
        questionNo = 8;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 8;
        }
        
        
     },
    gotoNinthQuestion:function(){
         //_this.stopVoice();
        _this.questionid = 1;
        _this.numberKey = _this.add.sprite(480,150,'unity15_NumberKey');
        _this.numberKey.frame = 8;
        
        questionNo = 9;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity15_mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 9;
        }
        
      
    },
    
checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

	},

    
    removeEverthing:function() 
    {
         _this.no1++;
         _this.noofAttempts=0;
        _this.AnsTimerCount=0; 
        _this.mangoGroup.destroy();
                 _this.tickMark.destroy();

        //console.log("--------------------------"+ _this.no1);
        if( _this.no1<4)
        {
            // _this.no1++;
              _this.wrong = true;
            //console.log("here its");
            _this.w = 8;
            // _this.timer1.stop();
                _this.count =0;
            _this.checkMangoes = 0;
                // _this.mangoGroup.destroy();
                 _this.objectGroup.destroy();
				 _this.tickMark.destroy();
                 _this.countIncrement = 0;
                 _this.sceneCount++;
                _this.getQuestion();
            
        }
        else
        {
            console.log("scoresss");
              /*  scoreflag=1;
                no11=0;
                _this.no1=4;
              */  _this.countIncrement = 0;
                countcorrect=0;
              /*  _this.count =0;
            _this.checkMangoes = 0;
                 _this.mangoGroup.destroy();
                 _this.objectGroup.destroy();
                 _this.tickMark.destroy();
                */ _this.sceneCount++;
                 commonNavBar.stopTimer();
                 
            commonNavBar.stopVoice();
            
                commonNavBar.disableNavBar();
				
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


            // _this.timer1.stop();
           // _this.timer1 = null;
           // ////console.log("gameover");
       // \\ _this.countIncrement = 0;
        /*    _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity1_4Score',true,false,this.Stararr,commonNavBar.getScore());
        */}
    },
    /*generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;

       // this.Stararr = [1,3,1,3,1,3,1,3];
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

        //this.addScoreSceneScore(this,this.scoreSceneScore);   
        this.rightSound = new Audio('sounds/celebration.mp3');
        this.rightSound.play();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false);        
    },*/

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
    /*createScoreScene:function()
    {
        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        //this.terrificText = this.add.sprite(this.world.centerX,this.world.centerY,'terrificText');
        //this.terrificText.anchor.setTo(0.5);

        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        //this.terrificText.font = 'myfont';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,8);
    },*/

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

        this.generateStarsForScoreScene(this,8);   //Stars based on the Game
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

        _this.state.start('numbersense1',true,false);
        
    },


    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,false,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

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
            _this.state.start('number_NSNG_2_1level1',true,false);
            },this);
        }, this);
    },
    generateStarsForTheScene:function(game,count)
	{
		 this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
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
        this.starsGroup.getChildAt(4).frame = 2;
        this.starsGroup.getChildAt(5).frame = 0;
       
       // this.starsGroup.getChildAt(8).frame = 0;
        
      }, 

      correctAns:function(target)
  {
    commonNavBar.disableHintIcon();
    target.frame = 1;
        _this.noofAttempts++;
          
         telInitializer2.gameCorrectAns();
        
            target.events.onInputDown.removeAll();
            
        
                 
                    _this.starAnim =  _this.starsGroup.getChildAt(countcorrect);
                   // //console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                     
                     _this.anim4.play();

                     this.rightSound = new Audio('sounds/celebration.mp3');
                        this.rightSound.play();

                        
                    this.Stararr.push(3);

                    
        
                for (var i = 0; i <  _this.objectGroup.length; i++)
                 {
                     _this.objectGroup.callAll('animations.add', 'animations', 'spin', 0, 10, true);
                     _this.objectGroup.callAll('animations.play', 'animations', 'spin');
                 }
                    
        
                    _this.time.events.add(2000, function(){
                     _this.objectGroup.callAll('animations.stop', 'animations', 'spin');
                    
                     
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);
  
                    },_this);   
                  countcorrect++;                 
},
wrongAns:function(target)
  {
    commonNavBar.disableHintIcon();
    target.frame = 1;
        _this.noofAttempts++;
          
         telInitializer2.gameWrongAns();
          target.events.onInputDown.removeAll();
       
        
         _this.wrong = false;
        _this.basketback.visible = false;
        
     _this.shake.shake(10,  _this.basket);
     this.wrongSound = new Audio('sounds/WrongCelebrationSound.mp3');
        this.wrongSound.play();



        _this.starsGroup.getChildAt(countcorrect).frame = 1;
        this.Stararr.push(1);

       countcorrect++;
      
        
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){ _this.removeEverthing();},_this);
  },
       
	correctAnsold:function(target)
	{

    telInitializer2.gameCorrectAns();
		target.frame = 1;
                _this.sceneCount++;
 this.questionid = 1;
              //  commonNavBar.stopTimer();
        _this.noofAttempts++;
                  this.Stararr.push(3);

          //_this.currentTime = window.timeSaveFunc();
        /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "click", 
                    res_id: "level12_TickMark", 
                    access_token: window.acctkn 
               } */
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);       
          /* if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
      */ // _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn
               } 
             //  absdsjsapi.saveAssessment(_this.saveAsment);  

           //  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
            target.events.onInputDown.removeAll();
            // _this.stopVoice();
        
        	      // _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( countcorrect);
                   // //console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    /*_this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                    */ commonNavBar.playCelebrationSound();_this.anim4.play();
                    _this.mangoGroup.destroy();

               // this.Stararr.push(3);

                for (var i = 0; i <  _this.objectGroup.length; i++)
                 {
                     _this.objectGroup.callAll('animations.add', 'animations', 'spin', 0, 10, true);
                     _this.objectGroup.callAll('animations.play', 'animations', 'spin');
                 }
                    
        
                    _this.time.events.add(2000, function(){
                     _this.objectGroup.callAll('animations.stop', 'animations', 'spin');
                    
                      countcorrect++;
                    
	 if(no11<4)
            {
                this.starsGroup.getChildAt(countcorrect).frame = 2; 
                _this.mangoGroup.destroy();
              /*  yArray = [90,120,150,180,210,240,270,300,330,360,390];
                xArray = [50,110,170,230,290,350,410,470,530];
              */  //this.getQuestion();
            }
            else
            {
                console.log("score");
                scoreflag=1;
                no11=0;
                 _this.basketback.visible = false;
                 _this.MangoCeleb.destroy();
                _this.mangoGroup.destroy();
                countcorrect=0;
              //  commonNavBar.stopTimer();
                commonNavBar.disableNavBar();
                this.createScoreScene();
            }
           
                    },_this);     
        _this.time.events.add(500, function(){_this.removeEverthing();},_this);
               
},
wrongAnsold:function(target)
	{
        telInitializer2.gameWrongAns();
          target.frame = 1;
          _this.starsGroup.getChildAt(countcorrect).frame = 1;
           this.Stararr.push(1);
         _this.noofAttempts++;
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
          _this.wrong = false;
        _this.basketback.visible = false;
         _this.mangoGroup.destroy();
		 _this.shake.shake(10,  _this.basket);
	   commonNavBar.playClickSound();
    commonNavBar.playWrongCelebrationSound();
    
       
        _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        if(no11<4){
                                       //  _this.mangoGroup.destroy();
          this.starsGroup.getChildAt(countcorrect).frame = 1; 
              _this.mangoGroup.destroy();
              countcorrect++;
              this.getQuestion();
          }else{
                console.log("score");
                scoreflag=1;
                no11=0;
                countcorrect=0;
                              // _this.mangoGroup.destroy();


                //commonNavBar.stopTimer();
                commonNavBar.disableNavBar();
                this.createScoreScene();
          }
           target.events.onInputDown.removeAll();
    
        //_this.time.events.add(500, function(){target.frame = 0;;},_this);
               // _this.time.events.add(500, function(){_this.removeEverthing();},_this);

	},
      
    update:function(){

    },
    
    getVoice:function(){
        //console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1://commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                    break;
                case 2://commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                                           //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                    break;
                case 3:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");


                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 4:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 5:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 6:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 7:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 8:                      // commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;
                case 9:                       //commonNavBar.getVoice("questionSounds/unity/1.5/English/Game1_5.mp3");

                //commonNavBar.soundUrl = "questionSounds/unity/1.5/English/Game1_5.mp3";
                    break;


                /*if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/unity/1.5/English/Game1_5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/unity/1.5/Hindi/Game1_5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/unity/1.5/Kannada/Game1_5.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", "questionSounds/unity/1.5/Odiya/1.5.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }*/}
       /* _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();*/

        if(window.languageSelected == "English")
                        {
                            commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/English/Game1_5.mp3");
                            this.srcs = window.baseUrl+"questionSounds/unity/1.5/English/Game1_5.mp3";
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Hindi/Game1_5.mp3");
                            this.srcs = window.baseUrl+"questionSounds/unity/1.5/Hindi/Game1_5.mp3";
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                           commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Kannada/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/unity/1.5/Kannada/Game1_5.mp3";
                        }
                        else if(window.languageSelected=="Gujarati")
                        {
                            commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/unity/1.5/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/Gujarati/unity/1.5/Game1_5.mp3";
                        }
                        else if(window.languageSelected=="Marathi")
						{
							commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Marathi/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/unity/1.5/Marathi/Game1_5.mp3";
						}
						else if(window.languageSelected=="Telugu")
						{
							commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Telugu/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/unity/1.5/Telugu/Game1_5.mp3";
						}
						else if(window.languageSelected=="Tamil")
						{
							commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Tamil/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/unity/1.5/Tamil/Game1_5.mp3";
						}
						else if(window.languageSelected=="Urdu")
						{
							commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Urdu/Game1_5.mp3");
                           this.srcs = window.baseUrl+"questionSounds/unity/1.5/Urdu/Game1_5.mp3";
						}
                        else
                        {
                            commonNavBar.getVoice(window.baseUrl+"questionSounds/unity/1.5/Odiya/1.5.mp3");
                            this.srcs = window.baseUrl+"questionSounds/unity/1.5/Odiya/1.5.mp3";
              
                        }

                    commonNavBar.addNavBar(this,this.srcs,"numbersense1");  


        },

		/*amplifyMedia:function(mediaElem, multiplier) {
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
	},*/
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
                //console.log("here");
                _this.playQuestionSound.pause();
                //_this.playQuestionSound.currentTime = 0.0;
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
    
        /*stopVoice:function(){
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
			_this.amplify.context.close();
			_this.amplify = null;
		}
            
        },

*/
        shutdown:function()
        {
_this.stopVoice();
        this.playQuestionSound=null;
        this.src = null;
        this.time.events.removeAll();
        this.noofAttempts = null;
        this.AnsTimerCount = null;
        this.gameid=null;
        this.questionid=null;
        _this.sceneCount=null;
        
        this.currentTime =null;
        no11=null;
        randomno=null;
        count=null;
        
        countcorrect=null;
       minutes=null;
        seconds=null;
        counterForTimer=null;
        timeDisplay=null;
        tick=null;
        correctflg=null;
         background=null;
        starsGroup=null;
        timer1=null;     

        window.score = this.score;

        window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;
            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "fullycomplete");
                //localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }   

            
},
    
};