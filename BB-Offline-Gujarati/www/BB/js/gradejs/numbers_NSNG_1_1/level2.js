Game.number_NSNG_1_1level2=function(){};


Game.number_NSNG_1_1level2.prototype={


     init:function(param,score,timerStopVar)
    {
        _this = this;
       
        this.Stararr = param;

        this.score = score;
        
        this.timerStopVar = timerStopVar;

        commonNavBar.level2Bool = true;
       
    },
    
	create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;
       
        _this.checkMangoes = 0;
        _this.tickMark = null;
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9];
         _this.qArrays1 = [7,8,9,10,11,12];
        
         _this.xArray = [210,160,350,180,300,300,370,250,210/*,300*/];
         _this.yArray = [140,200,200,280,270,140,280,230,340/*,340*/];
       
        _this.qArrays = _this.shuffle(_this.qArrays);
        
         _this.count=0;
         _this.count1=4;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        
           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity1_2bg1');
           
        
           _this.tree = _this.add.sprite(100,100,'unity1_2tree');
           _this.tree.scale.setTo(0.5,0.5);
        
            
       

         _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/English/Game1_2.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Hindi/Game1_2.mp3");
            }
            else if(window.languageSelected == "Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Kannada/Game1_2.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.2/Game1_2.mp3");
            } 
			else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/Game1_2.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/Game1_2.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/Game1_2.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/Game1_2.mp3");
            }
            else
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Odiya/1.2.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();


        commonNavBar.addNavBar(game,_this.src.src,"numbersense1");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSNG1.1','level2',false,false,true,1];
         commonNavBar.addHint(game,this.hintparams);
        //commonNavBar.disableHint(game);
        
        _this.shakeObjectGroup = _this.add.group();
        
        _this.basketback = _this.add.sprite(450,382,'unity1_2Basket_Back');
          _this.basketback.scale.setTo(0.5,0.5);
        _this.shakeObjectGroup.add(_this.basketback);
         
       /* basket = _this.add.sprite(450,380,'basket');
          basket.scale.setTo(0.5,0.5);*/
         _this.shadow = _this.add.sprite(450,380,'unity1_2shadow');
         _this.shadow.scale.setTo(0.5,0.5);

         commonNavBar.getVoice(_this.soundurl1);
        
        this.generateStarsForTheScene(game,8);
       //  _this.no1++;
        
        _this.speakerbtn = _this.add.sprite(610,7,'speakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {

            commonNavBar.playClickSound();

            _this.getVoice();

        },_this);
        
        
        _this.getQuestion();
        


        

    },

    generateStarsForTheScene:function(game,count)
    {
        
        //console.log("star");
        this.starsGroup = game.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(game.world.centerX, 10, 'cstarAnim');
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
       /* commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(_this.soundurl1);
        },this);*/
        commonNavBar.enableHintIcon();
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	switch(_this.qArrays[ _this.no1])      
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

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    
    mangoCelebClicked:function(target){
        
        //console.log("MangoCeleb "+target.name);
        _this.vx = target.x;   
        _this.vy = target.y;
          target.input.enableDrag();
        
         
        this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                 
                //_this.currentTime = window.timeSaveFunc();
         
          
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
        
        
        
       //target.frame = 1;
        this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
              
                 
                    if( _this.w>=0){
                    if(_this.checkOverlap(target, _this.basket))
                        {
                               this.clickSound = new Audio('sounds/Drag_Snap.mp3');
                                this.clickSound.play();
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
                
                if(_this.tickMark == null)
                {
                    _this.tickMark = _this.add.sprite(800,400,'unity1_2tickBtn');
                
                    //tickMark.scale.setTo(0.7,0.7);
                     _this.tickMark.inputEnabled = true;
                     _this.tickMark.input.useHandCursor = true;
                     _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
                 }
                
             },_this);
        
    },
toCheckAnswer:function(target){
     this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();
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
                
                    box =   _this.objectGroup.create(x,y,'unity1_2mangoCeleb');
                    box.name = "mango"+i;
                    box.anchor.setTo(0.5);
                    box.scale.setTo(0.7,0.7);
                    x+=30;
            }
            else if(i>1 && i<5){
                
                   box =   _this.objectGroup.create(x1,y1,'unity1_2mangoCeleb');
                   box.name = "mango"+i;
                   box.anchor.setTo(0.5);
                   box.scale.setTo(0.7,0.7);
                   x1+=30;
             }
            else if(i<2){
                   box =   _this.objectGroup.create(x2,y2,'unity1_2mangoCeleb');
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
         _this.basket = _this.add.sprite(450,380,'unity1_2basket');
         _this.basket.scale.setTo(0.5,0.5);
     },  

 gotoFirstQuestion:function(){
      //_this.stopVoice();
     _this.questionid = 1;
     if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
            //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
        }
        else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
             //   commonNavBar.getVoice(commonNavBar.soundUrl);
        }   
        questionNo = 1;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
     
     _this.generatemangoCeleb();
        for(var i=0;i<3;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
         if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
           this.getVoice();
            //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
            this.getVoice();
            //commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 2;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 3;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
           this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 4;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
             _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 5;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
               // commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 6;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<7;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
               // commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
               // commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 7;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<8;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
               // commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
               // commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 8;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(9450, function(){
            this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
        },_this);
          }
         else if ( _this.wrong == true){
            //console.log("elseeeeeeeeeeeeeeeeeeeee");
             this.getVoice();
                //commonNavBar.getVoice(commonNavBar.soundUrl);
         }
        
        questionNo = 9;
        //console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'unity1_2mango');  
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
        
        
        if(_this.no1<4)
        {
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2;  
        }
         _this.count1++;
        //console.log("--------------------------"+ _this.no1);
        if( _this.no1<4)
        {
            // _this.no1++;
              _this.wrong = true;
            //console.log("here its");
            _this.w = 8;
            
                _this.count =0;
            _this.checkMangoes = 0;
                 _this.mangoGroup.destroy();
                 _this.objectGroup.destroy();
                 _this.tickMark.destroy();
				 _this.tickMark = null;
                  _this.basket.destroy();
                 _this.countIncrement = 0;
                 _this.sceneCount++;
                  
                _this.basket.destroy();
                _this.getQuestion();
            
        }
        else
        {
            
            // _this.no1++;
              _this.wrong = true;
            //console.log("here its");
            _this.w = 8;
            
                _this.count =0;
            _this.checkMangoes = 0;
                 _this.mangoGroup.destroy();
                 _this.objectGroup.destroy();
                
                 _this.countIncrement = 0;
                 _this.sceneCount++;

                 commonNavBar.stopTimer();
          //  commonNavBar.disableNavBar();

            _this.tickMark.destroy();
            _this.tickMark = null;

             _this.tree.destroy();
        _this.shakeObjectGroup.destroy();
        _this.shadow.destroy();
        _this.basket.destroy();

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
        }
    },
    
  
    
	correctAns:function(target)
	{
		target.frame = 1;
        _this.noofAttempts++;
          commonNavBar.disableHintIcon();
         telInitializer2.gameCorrectAns();
        
            target.events.onInputDown.removeAll();
            
        
        	       
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
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



        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);

       
      
        
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){ _this.removeEverthing();},_this);
	},
      
    update:function(){

    },
    
    getVoice1:function()
    {

        if(window.languageSelected=="English")
                         commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.2/English/";
                    else if(window.languageSelected=="Hindi")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.2/Hindi/";
                    else if(window.languageSelected=="Kannada")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.2/Kannada/";
                    else if(window.languageSelected=="Odiya")
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/unity/1.2/Odiya/";
                    else
                        commonNavBar.soundUrl = window.baseUrl+"questionSounds/Gujarati/unity/numbers/No";
       
        switch(_this.qArrays[ _this.no1])
        {
            case 1: 
                    commonNavBar.soundUrl += "1.mp3";
                    break;
            case 2:
                    commonNavBar.soundUrl += "2.mp3";
                    break;
            case 3: 
                    commonNavBar.soundUrl += "3.mp3";
                    break;
            case 4:
                    commonNavBar.soundUrl += "4.mp3";
                    break;
            case 5:
                    commonNavBar.soundUrl += "5.mp3";
                    break;
            case 6:
                    commonNavBar.soundUrl += "6.mp3";
                    break;
            case 7:
                    commonNavBar.soundUrl += "7.mp3";
                    break;
            case 8:
                    commonNavBar.soundUrl += "8.mp3";
                    break;
            case 9:
                    commonNavBar.soundUrl += "9.mp3";
                    break;
        }
        

        commonNavBar.getVoice(commonNavBar.soundUrl);
       
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

    generateStarsForScoreScene:function(game,count)
    {
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

        this.backgroundtransp.visible=false; //Remove BackGround Opacity

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
            _this.state.start('number_NSNG_1_1level1',true,false);
        }, this);
    },

getVoice:function(){
        //console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/1.mp3");
                        } 
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No1.mp3");
					else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No1.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No1.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No1.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No1.mp3");
            }
						else 
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/1.mp3");
                        }
                        break;
                case 2:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/2.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No2.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No2.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No2.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No2.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No2.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/2.mp3");
                        }
                        break;
                case 3:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/3.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No3.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No3.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No3.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No3.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No3.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/3.mp3");
                        }
                        break;
                case 4:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/4.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/4.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/4.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No4.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No4.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No4.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No4.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No4.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/4.mp3");
                        }
                        break;
                case 5:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/5.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No5.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No5.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No5.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No5.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No5.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/5.mp3");
                        }
                        break;
                case 6:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/6.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/6.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/6.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No6.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No6.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No6.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No6.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No6.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/6.mp3");
                        }
                        break; 
                case 7:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/7.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/7.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/7.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No7.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No7.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No7.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No7.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No7.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/7.mp3");
                        }
                            break;
                case 8:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/8.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/8.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/8.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No8.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No8.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No8.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No8.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No8.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/8.mp3");
                        }
                            break;
                case 9:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/9.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/9.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/9.mp3");
                        }
						else if(window.languageSelected=="Marathi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Marathi/No9.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Telugu/No9.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Tamil/No9.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.2/Urdu/No9.mp3");
            }
                        else if(window.languageSelected=="Gujarati")
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No9.mp3");
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/9.mp3");
                        }
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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
            this.stopVoice();
            window.score = this.score;

            //alert(window.score);
            //alert(commonNavBar.deductForHint);

            window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;

            //alert(window.score);

            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"number_NSNG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"number_NSNG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }

            
        }

    
};