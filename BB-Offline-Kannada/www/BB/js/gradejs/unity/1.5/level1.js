Game.unity1_5level1=function(){};


Game.unity1_5level1.prototype={


     init:function(game)
    {
        _this = this;
        
        _this.gameid = "Game 1.5";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/


        telInitializer.gameIdInit("unity1_5",gradeSelected);


    },

    preload:function(game){
        if(!window.grade1NSN5){

            window.grade1NSN5 = true;

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

            this.load.atlas('unity1_4Tick', window.baseUrl+'assets/gradeAssets/unity/1.4/Tick.png', window.baseUrl+'json/gradeJson/unity/1.4/Tick.json');
        
        this.load.image('unity15_shadow',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket_shadow.png');
        this.load.image('unity15_basket',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket.png');
        this.load.image('unity15_Basket_Back',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket_Back.png');
        this.load.image('unity15_tree',window.baseUrl+'assets/gradeAssets/unity/1.5/Tree.png');
        this.load.image('unity15_topic',window.baseUrl+'assets/gradeAssets/unity/1.5/topic.png');
         this.load.image('unity15_practice',window.baseUrl+'assets/gradeAssets/unity/1.5/practice.png');
        this.load.atlas('unity15_mango',window.baseUrl+'assets/gradeAssets/unity/1.5/mango.png' ,window.baseUrl+'json/gradeJson/unity/1.5/mango.json');
        this.load.atlas('unity15_mangoCeleb',window.baseUrl+'assets/gradeAssets/unity/1.5/mangoCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.5/mangoCeleb.json');
        this.load.atlas('unity15_NumberKey',window.baseUrl+'assets/gradeAssets/unity/1.5/NumberKey.png' ,window.baseUrl+'json/gradeJson/unity/1.5/NumberKey.json');
    }

    },
    
	create:function(game){
    
		_this.amplify = null;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
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
            _this.navBar = _this.add.sprite(0,0,'unity15_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'unity15_timebg');
            /* _this.topicOutline = _this.add.sprite(70,5,'unity15_topicOutline');
             _this.practice = _this.add.sprite(78,10,'unity15_practice');
             _this.topic = _this.add.sprite(165,10,'unity15_topic');*/
        
           _this.tree = _this.add.sprite(100,100,'unity15_tree');
           _this.tree.scale.setTo(0.5,0.5);
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
			_this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
           // _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'unity15_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
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
        
        _this.generateStarsForTheScene(6);
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
     _this.counterForTimer++;
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
        if(!_this.timer)
        {
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
          }
        
        _this.basketback.visible = true;
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //console.log(" _this.no1"+ _this.no1);
        if( _this.no1 ==0&&_this.wrong == true){
            _this.getVoice();
        }
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
   
         _this.mangoGroup.callAll('animations.add', 'animations', 'spin', 0, 10, true);

    //  And play them
         _this.mangoGroup.callAll('animations.play', 'animations', 'spin');
        
        /* _this.time.events.add(3000, function(){
         _this.mangoGroup.callAll('animations.stop', 'animations', 'spin');
        },_this);*/
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
        _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
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

                                    _this.dragMango = _this.add.audio('dragMango');
                                    _this.dragMango.play();
                                
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
        _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
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
                 
                    if( _this.w>=0){
                    if(_this.checkOverlap(target, _this.basket))
                        {
                                _this.dragMango = _this.add.audio('dragMango');
                                _this.dragMango.play();
                                //console.log("insider");
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
      _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
    //console.log("check answer"+_this.checkMangoes);
    if(_this.checkMangoes ==  _this.rightAns)
        {
             _this.mangoGroup.inputEnabled = false;
            _this.correctAns(target);
        }
    else
        {
            _this.wrongAns(target);
        }
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
        //console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
              _this.wrong = true;
            //console.log("here its");
            _this.w = 8;
             _this.timer1.stop();
                _this.count =0;
            _this.checkMangoes = 0;
                 _this.mangoGroup.destroy();
                 _this.objectGroup.destroy();
				 _this.tickMark.destroy();
                 _this.countIncrement = 0;
                 _this.sceneCount++;
                _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
           // ////console.log("gameover");
             _this.countIncrement = 0;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity1_5Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'unity15_starAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
		target.frame = 1;
        _this.noofAttempts++;
          
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
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
       // _this.currentTime = window.timeSaveFunc();
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

             telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
            target.events.onInputDown.removeAll();
             _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // //console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();
        
                for (var i = 0; i <  _this.objectGroup.length; i++)
                 {
                     _this.objectGroup.callAll('animations.add', 'animations', 'spin', 0, 10, true);
                     _this.objectGroup.callAll('animations.play', 'animations', 'spin');
                 }
                    
        
                    _this.time.events.add(2000, function(){
                     _this.objectGroup.callAll('animations.stop', 'animations', 'spin');
                    
                     _this.count1++;
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);
	
                    },_this);                    
},
wrongAns:function(target)
	{
        _this.noofAttempts++;
          target.frame = 1;
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
          
       target.events.onInputDown.removeAll();
        _this.timer1.stop();	
         _this.wrong = false;
        _this.basketback.visible = false;
        
		 _this.shake.shake(10,  _this.basket);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){target.frame = 0; _this.mangoGroup.destroy();_this.getQuestion();},_this);
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
                    
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/English/Game1_5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Hindi/Game1_5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Kannada/Game1_5.mp3");
                        }
						else if(window.languageSelected=="Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Marathi/Game1_5.mp3");
						}
						else if(window.languageSelected=="Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Telugu/Game1_5.mp3");
						}
						else if(window.languageSelected=="Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Tamil/Game1_5.mp3");
						}
						else if(window.languageSelected=="Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Urdu/Game1_5.mp3");
						}
                        else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.5/Game1_5.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.5/Odiya/1.5.mp3");
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
	
        stopVoice:function(){
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


        shutdown:function()
        {
             _this.stopVoice();
        }

    
};