Game.length_MLG_1_1level2=function(){
	
};


Game.length_MLG_1_1level2.prototype={
	
	init:function(param,score,timerStopVar)
	{
		_this = this;
		this.Stararr = param;
          this.score = score;
          _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level22_gamebg');
          // _this.background.scale.setTo(1,1.17);
           commonNavBar.addNavBar(this,null,"measurement1");
           this.timerStopVar = timerStopVar;
           commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
           commonNavBar.startTimer(this);
           commonNavBar.addScore(this,commonNavBar.getScore());
        
		//*****************this is used to call saveGamePlay and get the return value for the perticular game*****************
		/*_this.gameid = "2.2";
		
		_this.currentTime = window.timeSaveFunc();
		_this.saveGameplay = 
		{ 
			id_game:_this.gameid, 
			access_token:window.acctkn, 
			start_time:_this.currentTime
		} 
		_this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

		//telInitializer.gameIdInit("length2_2",gradeSelected);
	},
	
	
	create:function(game){


		 this.hintparams=['MTG3.3','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

		this.playedwithHint = false;
		this.completelyplayed = false;

		 _this.amplify = null;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
		
        _this.qno=0;
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        _this.qArrays = _this.shuffle(_this.qArrays);
        _this.count=0;
        _this.starCount=4;
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
		 _this.sceneCount=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

     /*   _this.background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level22_gamebg');
       
       _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'grade11_backbtn',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(595,7,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(300,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1.2,1);


            this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


     */      /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
            _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Fractions');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            */
        
         _this.generateStarsForTheScene(game,9);


        _this.graphics = _this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);		
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;
		
		
        
      
        
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

    getQuestion:function(target)
    {    
		_this.noofAttempts = 0;
		_this.AnsTimerCount=0;
		 _this.sceneCount++;

		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();



		_this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
      _this.timer1.start();




		_this.obj1Array = [];
		_this.obj2Array = [];
		_this.obj3Array = [];
		_this.obj4Array = [];
		_this.rightOrderArray = [];
		_this.glowOrderArray = [];


    	switch(_this.qArrays[_this.qno])      
    	{
    		case 1: 
					_this.questionid = 2;
					_this.obj1Array = ['Level22_Building',200,500];
					_this.obj2Array = ['Level22_OrangeHouse',420,500];
					_this.obj3Array = ['Level22_PurpleHouse',610,465];
					_this.obj4Array = ['Level22_BlueHouse',800,500];
					_this.rightOrderArray = ["Level22_PurpleHouse","Level22_OrangeHouse","Level22_BlueHouse","Level22_Building"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 2: 
					_this.questionid = 1;
					_this.obj1Array = ['Level22_Building',200,500];
					_this.obj2Array = ['Level22_OrangeHouse',420,500];
					_this.obj3Array = ['Level22_PurpleHouse',610,465];
					_this.obj4Array = ['Level22_BlueHouse',800,500];
					_this.rightOrderArray = ["Level22_Building","Level22_BlueHouse","Level22_OrangeHouse","Level22_PurpleHouse"]; 
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 3:
					_this.questionid = 2;
					_this.obj1Array = ['Level22_LongStairs',250,570];
					_this.obj2Array = ['Level22_SecondLongestStairs',510,500];
					_this.obj3Array = ['Level22_ShortestStairs',680,530];
					_this.obj4Array = ['Level22_MediumStairs',840,500];
					_this.rightOrderArray = ["Level22_ShortestStairs","Level22_MediumStairs","Level22_SecondLongestStairs","Level22_LongStairs"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 4: 
					_this.questionid = 1;
					_this.obj1Array = ['Level22_LongStairs',250,570];
					_this.obj2Array = ['Level22_SecondLongestStairs',510,500];
					_this.obj3Array = ['Level22_ShortestStairs',680,530];
					_this.obj4Array = ['Level22_MediumStairs',840,500];
					_this.rightOrderArray = ["Level22_LongStairs","Level22_SecondLongestStairs","Level22_MediumStairs","Level22_ShortestStairs"]; 
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 5: 
					_this.questionid = 8;
					_this.obj1Array = ['Level22_GreyDog',200,520];
					_this.obj2Array = ['Level22_BrownDog',420,500];
					_this.obj3Array = ['Level22_WhiteDog',610,520];
					_this.obj4Array = ['Level22_BlackDog',850,520];
					_this.rightOrderArray = ["Level22_BrownDog","Level22_BlackDog","Level22_WhiteDog","Level22_GreyDog"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 6: 
					_this.questionid = 7;
					_this.obj1Array = ['Level22_GreyDog',200,520];
					_this.obj2Array = ['Level22_BrownDog',420,500];
					_this.obj3Array = ['Level22_WhiteDog',610,520];
					_this.obj4Array = ['Level22_BlackDog',850,520];
					_this.rightOrderArray = ["Level22_GreyDog","Level22_WhiteDog","Level22_BlackDog","Level22_BrownDog"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 7: 
					_this.questionid = 8;
					_this.obj1Array = ['Level22_GreenSnake',160,480];
					_this.obj2Array = ['Level22_RedSnake',390,490];
					_this.obj3Array = ['Level22_OrangeSnake',610,535];
					_this.obj4Array = ['Level22_GreenDottedSnake',850,480];
					_this.rightOrderArray = ["Level22_GreenSnake","Level22_RedSnake","Level22_GreenDottedSnake","Level22_OrangeSnake"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 8: 
					_this.questionid = 7;
					_this.obj1Array = ['Level22_GreenSnake',160,480];
					_this.obj2Array = ['Level22_RedSnake',390,490];
					_this.obj3Array = ['Level22_OrangeSnake',610,535];
					_this.obj4Array = ['Level22_GreenDottedSnake',850,480];
					_this.rightOrderArray = ["Level22_OrangeSnake","Level22_GreenDottedSnake","Level22_RedSnake","Level22_GreenSnake"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 9: 
					_this.questionid = 2;
					_this.obj1Array = ['Level22_OrangeBottle',220,500];
					_this.obj2Array = ['Level22_BrownBottle',440,540];
					_this.obj3Array = ['Level22_BlackBottle',650,490];
					_this.obj4Array = ['Level22_BlueBottle',830,485];
					_this.rightOrderArray = ["Level22_BlueBottle","Level22_BlackBottle","Level22_OrangeBottle","Level22_BrownBottle"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 10:
					_this.questionid = 1;
					_this.obj1Array = ['Level22_OrangeBottle',220,500];
					_this.obj2Array = ['Level22_BrownBottle',440,540];
					_this.obj3Array = ['Level22_BlackBottle',650,490];
					_this.obj4Array = ['Level22_BlueBottle',830,485];
					_this.rightOrderArray = ["Level22_BrownBottle","Level22_OrangeBottle","Level22_BlackBottle","Level22_BlueBottle"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 11:
					_this.questionid = 4; 
					_this.obj1Array = ['Level22_SecondLargestBox',160,520];
					_this.obj2Array = ['Level22_MediumBox',380,520];
					_this.obj3Array = ['Level22_LargeBox',650,520];
					_this.obj4Array = ['Level22_SmallBox',840,520];
					_this.rightOrderArray = ["Level22_SmallBox","Level22_MediumBox","Level22_SecondLargestBox","Level22_LargeBox"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 12:
					_this.questionid = 3;
					_this.obj1Array = ['Level22_SecondLargestBox',160,520];
					_this.obj2Array = ['Level22_MediumBox',380,520];
					_this.obj3Array = ['Level22_LargeBox',650,520];
					_this.obj4Array = ['Level22_SmallBox',840,520];
					_this.rightOrderArray = ["Level22_LargeBox","Level22_SecondLargestBox","Level22_MediumBox","Level22_SmallBox"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 13:
					_this.questionid = 8;
					_this.obj1Array = ['Level22_Giraffe',180,540];
					_this.obj2Array = ['Level22_Cat',320,500];
					_this.obj3Array = ['Level22_Dog',540,500];
					_this.obj4Array = ['Level22_Elephant',780,520];
					_this.rightOrderArray = ["Level22_Cat","Level22_Dog","Level22_Elephant","Level22_Giraffe"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 14:
					_this.questionid = 7;
					_this.obj1Array = ['Level22_Giraffe',180,540];
					_this.obj2Array = ['Level22_Cat',320,500];
					_this.obj3Array = ['Level22_Dog',540,500];
					_this.obj4Array = ['Level22_Elephant',780,520];
					_this.rightOrderArray = ["Level22_Giraffe","Level22_Elephant","Level22_Dog","Level22_Cat"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 15:
					_this.questionid = 10;
					_this.obj1Array = ['Level22_Crow',200,510];
					_this.obj2Array = ['Level22_Crane',450,520];
					_this.obj3Array = ['Level22_Pigeon',630,510];
					_this.obj4Array = ['Level22_Sparrow',800,510];
					_this.rightOrderArray = ["Level22_Sparrow","Level22_Pigeon","Level22_Crow","Level22_Crane"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            case 16:
					_this.questionid = 9;
					_this.obj1Array = ['Level22_Crow',200,510];
					_this.obj2Array = ['Level22_Crane',450,520];
					_this.obj3Array = ['Level22_Pigeon',630,510];
					_this.obj4Array = ['Level22_Sparrow',800,510];
					_this.rightOrderArray = ["Level22_Crane","Level22_Crow","Level22_Pigeon","Level22_Sparrow"];
					_this.glowOrderArray = [0,1,2,3];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    
    addDragBoxes:function(){

    	_this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        var x = 100;
        var x1 = 210;
        var y = 150;
        var y1 = 150;
        
   
        for(var i=0;i<4;i++)
        {
           var box =  _this.gameBoxGroup.create(x,y,'Level22_gameBox');
           box.name = "box"+i;
           box.anchor.setTo(0.435,0.42);
           x+=220;
        }
        for(var i=0;i<3;i++)
        {
           var crocs = _this.crocsGroup.create(x1,y1,'Level22_croc');
		   crocs.anchor.setTo(0.5);
		   if(_this.qArrays[_this.qno]==2||_this.qArrays[_this.qno]==4||_this.qArrays[_this.qno]==6||_this.qArrays[_this.qno]==8||_this.qArrays[_this.qno]==10||_this.qArrays[_this.qno]==12||_this.qArrays[_this.qno]==14||_this.qArrays[_this.qno]==16)
		   {
			   crocs.scale.x *= -1;
		   }
           x1+=220;
        }
		
        _this.tickMark = _this.add.sprite(860,115,'Level22_tickMark');
    	_this.crocsGroup.add(_this.tickMark);
         
         
        for(var k=0;k<_this.gameBoxGroup.children.length;k++)
        {
           var targetChild = _this.add.sprite(0,0,'Level22_allimg');
           targetChild.anchor.setTo(0.5);
           targetChild.alpha = 0;
           _this.gameBoxGroup.getChildAt(k).addChild(targetChild);  
           _this.gameBoxGroup.getChildAt(k).getChildAt(0).inputEnabled = true;
           _this.gameBoxGroup.getChildAt(k).getChildAt(0).input.useHandCursor = true;
           _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.add(_this.boxDragFunction,_this);
        }
         
    },
    
     
    
    addDragListener:function(target){
         
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
         commonNavBar.playClickSound();
		
       target.events.onDragStart.add(function(target){

       		//*****************this is called whenever a object is being dragged******************
			//_this.currentTime = window.timeSaveFunc();
			_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(_this.interactEvent);
			
		},this);
		
        target.events.onDragStop.add(
            function(target){
				for(var i=0;i<_this.gameBoxGroup.children.length;i++)
                {
                    if(_this.checkOverlap(target,_this.gameBoxGroup.getChildAt(i))&&_this.gameBoxGroup.getChildAt(i).frameName=="blank")
                        {
                            //console.log("hit");  
                            _this.gameBoxGroup.getChildAt(i).frameName = target.name.split('_')[1];
                            target.visible = false;
                           
                            commonNavBar.playSnapSound();
			
                            _this.count++;
                            break;
                           
                        }
                        else
                        {
                           // target.x = vx;   
                           // target.y = vy; 
                        }
                       // target.events.onDragStop.removeAll(); 
                    
                    
                }
                target.events.onDragStop.removeAll(); 
                target.x = vx;   
                target.y = vy;
                //console.log(_this.count);
                if(_this.count>=4)
                {
                   _this.tickMark.inputEnabled = true; 
                   _this.tickMark.input.useHandCursor = true; 
                   _this.tickMark.events.onInputDown.add(_this.checkFortheRightOrder,_this); 
                }
				
				//*****************this is called whenever a object is being dropped******************
				//_this.currentTime = window.timeSaveFunc();
			_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(_this.interactEvent);
                   
            },_this);
        
     },
    
    boxDragFunction:function(target){
		target.frameName = target.parent.frameName;
		commonNavBar.playClickSound();
   
		if(target.frameName!="blank")
		{
			target.parent.frameName = "blank";
			target.alpha = 1;
			var vx = target.x;   
			var vy = target.y; 
			target.input.enableDrag(true);
			_this.gameBoxGroup.bringToTop(target.parent);
			
			target.events.onDragStart.add(function(target){

				//*****************this is called whenever a object is being dragged******************
			//_this.currentTime = window.timeSaveFunc();
			_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drag", 
				res_id: "Level22_"+target.frameName, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(_this.interactEvent);
			
		},_this);
		   
			target.events.onDragStop.add(
				function(target){
					//*****************this is called whenever a object is being dropped******************
					_this.interactEvent = 
					{ 
						id_game_play: _this.savedVar, 
						id_question: _this.questionid,  
						date_time_event: _this.currentTime, 
						event_type: "drop", 
						res_id: "Level22_"+target.frameName, 
						access_token: window.acctkn 
					} 
					
					//absdsjsapi.saveInteractEvent(_this.interactEvent);

					for(var i=0;i<_this.gameBoxGroup.children.length;i++)
					{
						if(_this.checkOverlap(target,_this.gameBoxGroup.getChildAt(i))&&_this.gameBoxGroup.getChildAt(i).frameName=="blank")
						{ 
							var frameName = target.frameName;
							target.parent.frameName =  _this.gameBoxGroup.getChildAt(i).frameName;
							_this.gameBoxGroup.getChildAt(i).frameName = frameName;
							 commonNavBar.playSnapSound();
							break;   
						}
						else if(_this.checkOverlap(target,_this.graphics))
						{
							target.parent.frameName = "blank";
							_this.count--;
							_this.tickMark.events.onInputDown.removeAll();
							_this.objGroup.getByName("Level22_"+target.frameName).visible = true;
							break;
						}
						else
						{
							target.parent.frameName = target.frameName;

						}	
						
					}
					target.events.onDragStop.removeAll(); 
					target.alpha = 0;
					target.x = vx;
					target.y = vy;
					target.frameName = "blank";
					_this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("box0"));          
					_this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("box1"));          
					_this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("box2"));          
					_this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("box3"));  


					//_this.currentTime = window.timeSaveFunc();
					
					
				
							  
					
				},_this);
		   
		}
       
       
    },
    
    checkAns:function(target){
		//_this.timer.stop();
		//_this.timer = null;
		_this.objGroup.destroy();
		var tween = _this.add.tween(_this.gameBoxGroup);
    	tween.to({ y: 100 }, 0, 'Linear', true, 0);
		
       //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

        }, _this);
       
        var tween1 = _this.add.tween(_this.crocsGroup);
    	tween1.to({ y: 100 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(_this.addQuestion, _this);
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

		//*****************this is called whenever the user clicks on the right answer******************
		//_this.currentTime = window.timeSaveFunc();
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
				
			//absdsjsapi.saveAssessment(_this.saveAsment);

			//telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        	tween1.onComplete.add(function(){
             //_this.checkFortheRightOrder();
           
             commonNavBar.playCelebrationSound();
            var starAnim = _this.starsGroup.getChildAt(_this.starCount);
        

			
            starAnim.smoothed = false;
            var anim4 = starAnim.animations.add('star');
				anim4.play(25,false);
             this.Stararr.push(3); 
             anim4.onComplete.add(function(){_this.addGlowtoTheSprite();},_this);
            _this.starCount++;
                  //  _this.time.events.add(1000, _this.removeEverthing, _this);

            
        }, _this);
           

    },
    
  
    
    checkFortheRightOrder:function(target){
        target.frame = 1;
        commonNavBar.playClickSound();
        target.events.onInputDown.removeAll();
        var wrongBox = _this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        var selectedFrameArray = [];
        var objTovisible = [];
        var wrongXpos = [];
        var wrongYpos = [];
        wrongBox.x = _this.gameBoxGroup.x;
        wrongBox.y = _this.gameBoxGroup.y;
		
		_this.noofAttempts++;
		
		//*****************this is called whenever the Check nutton is clicked******************
		//_this.currentTime = window.timeSaveFunc();
			_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: "Level22_submitButton", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(_this.interactEvent);
			
	
       
        
        
        for(var i=0;i<_this.gameBoxGroup.children.length;i++)
        {
			if("Level22_"+_this.gameBoxGroup.getChildAt(i).frameName == _this.rightOrderArray[i])
            {
				rightCount++;
				selectedFrameArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //_this.gameBoxGroup.getChildAt(i).frameName = _this.rightOrderArray[i];
             
                _this.count--;
                _this.gameBoxGroup.getChildAt(i).visible = false;
                selectedFrameArray.push("blank");
                objTovisible.push(_this.gameBoxGroup.getChildAt(i).frameName);
                wrongBoxArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
                indexArray.push(i);
                wrongXpos.push(_this.gameBoxGroup.getChildAt(i).x);
                wrongYpos.push(_this.gameBoxGroup.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            var wBox = wrongBox.create(0,0,'Level22_gameBox');
            wBox.anchor.setTo(0.435,0.42);
            wBox.x = wrongXpos[j];
            wBox.y = wrongYpos[j];
            wBox.frameName = wrongBoxArray[j];
        }
        _this.shake.shake(10,wrongBox);
       
        _this.time.events.add(1000, function(){
			
			wrongBox.destroy();
             
            for(var j=0;j<_this.gameBoxGroup.children.length;j++)
            {
                _this.gameBoxGroup.getChildAt(j).visible = true;
                _this.gameBoxGroup.getChildAt(j).frameName = selectedFrameArray[j];
            }
			
            for(var k=0;k<objTovisible.length;k++)
            {
                 _this.objGroup.getByName("Level22_"+objTovisible[k]).visible = true;  
            }
            
            //_this.addGlowtoTheSprite();
            if(rightCount>=4)
            {
               // console.log("all right");
                //_this.speakerbtn.inputEnabled=false; 
            }
            else
            {
                target.frame = 0;
            }
            
         }, _this);
        if(rightCount>=4)
        {
            for(var k=0;k<_this.gameBoxGroup.children.length;k++)
            {
                _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
           // _this.stopQuestSound();
            _this.checkAns();
            telInitializer2.gameCorrectAns();
        }
        else
        {
        	telInitializer2.gameWrongAns();
                     commonNavBar.playWrongCelebrationSound();
                      _this.starsGroup.getChildAt(_this.starCount).frame = 1;
           this.Stararr.push(1);
                 _this.starCount++;
                         _this.time.events.add(1000, _this.removeEverthing, _this);

            
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      
        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).removeChildren();
        var glow = _this.add.sprite(0,0,'Level22_glow');
        glow.anchor.setTo(0.495);

        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).addChild(glow);  
        var anim = glow.animations.add('glow');
        anim.play(100,1);
		
        _this.time.events.add(600, function(){
            
            anim.stop();
        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).removeChildren();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).addChild(glow);
            
            anim.play(100,1);
        _this.time.events.add(600, function(){
            
            anim.stop();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).removeChildren();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).addChild(glow);
            
            anim.play();
            
            _this.time.events.add(600, function(){
            
                anim.stop();
                _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).removeChildren();
                _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).addChild(glow);

                anim.play();
                _this.time.events.add(600, function(){_this.removeEverthing();},_this);
                
                },_this);
          
            
            },_this);
           
            
            
        },_this);
        
    },
      
    removeEverthing:function() 
    {			_this.qno++;

        if(_this.qno<5)
        {
        	_this.time.events.add(2500, function(){
			        _this.starsGroup.getChildAt(_this.starCount).frame = 2; 

            }, _this);

            var MaintweenDestroy = _this.add.tween(_this.objGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                _this.objGroup.destroy();
            },_this);
			
            var Maintween1Destroy = _this.add.tween(_this.gameBoxGroup);
            Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
            },_this);
			
            var Maintween2Destroy = _this.add.tween(_this.crocsGroup);
            Maintween2Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                _this.crocsGroup.destroy();
                _this.count =0;
				_this.getQuestion();                
            },_this);
              
        }
        else
        {
			
            commonNavBar.stopTimer();
                 
            commonNavBar.stopVoice();
            
                commonNavBar.disableNavBar();

                commonNavBar.stopVoice();
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
		
		this.backgroundtransp.visible=false;  //Remove BackGround Opacity

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

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

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
            _this.state.start('length_MLG_1_1level1',true,false);
             },this);
        }, this);
    },
    checkOverlap:function(spriteA, spriteB) 
	{	
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array){

		_this.getVoice();

        /*_this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       */ _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.obj1Array[0];
        _this.b1.inputEnabled = true;
    	_this.b1.input.useHandCursor = true;
        _this.b1.events.onInputDown.add(_this.addDragListener,_this);
       
        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.obj2Array[0];
        _this.b2.inputEnabled = true;
    	_this.b2.input.useHandCursor = true;
        _this.b2.events.onInputDown.add(_this.addDragListener,_this);
         
         
        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.obj3Array[0];
        _this.b3.inputEnabled = true;
    	_this.b3.input.useHandCursor = true;
        _this.b3.events.onInputDown.add(_this.addDragListener,_this);
        
         
        _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.obj4Array[0];
        _this.b4.inputEnabled = true;
    	_this.b4.input.useHandCursor = true;
        _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         
        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
		
		
            
     },
    

     generateStarsForTheScene:function(game,count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i <  count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX, 7, 'cstarAnim');
            
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

    updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 this.minutes =  this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 this.minutes =  this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
             this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
     //this.timeDisplay.setText(_this.minutes+':' + this.seconds);
 
    //timer.setText(minutes + ':'+ seconds );
    },
	
	
	
	getVoice:function(){
       _this.stopVoice();	
		
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
        switch(_this.qArrays[_this.qno])
        {
            case 1:
			case 3:
			case 9:
			case 11:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_2.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_2.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_2.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_2.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_2.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_2.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_2.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_2.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_2.mp3");
					}
					break;
            case 2:
			case 4:
			case 10:
			case 12:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_1.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_1.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_1.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_1.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_1.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_1.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_1.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_1.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_1.mp3");
					}
					break;
            case 5:
			case 13:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_6.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_6.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_6.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_6.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_6.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_6.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_6.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_6.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_6.mp3");
					}
					break;
            case 6:
			case 14:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_5.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_5.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_5.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_5.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_5.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_5.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_5.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_5.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_5.mp3");
					}
					break;
			case 8:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_7.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_7.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_7.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_7.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_7.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_7.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_7.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_7.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_7.mp3");
					}
					break;
			case 7:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_8.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_8.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_8.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_8.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_8.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_8.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_8.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_8.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_8.mp3");
					}
					break;
		
			case 15:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_10.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_10.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_10.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_10.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_10.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_10.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_10.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_10.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_10.mp3");
					}
					break;
			case 16:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/English/2.2_9.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Hindi/2.2_9.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Kannada/2.2_9.mp3");
					}
					else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.2/2.2_9.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Marathi/2.2_9.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Telugu/2.2_9.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Tamil/2.2_9.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Urdu/2.2_9.mp3");
                              }
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.2/Odiya/2.2_9.mp3");
					}
					break;
            
        }

        _this.playQuestionSound.appendChild(_this.src);
		//_this.playQuestionSound.play();

commonNavBar.addNavBar(this,_this.src.src,'measurement1');
		commonNavBar.getVoice(_this.src.src);

		if(window.languageSelected == "Odiya")
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
         
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
            _this.amplify.context.close();
            _this.amplify = null;
          }
	},

	shutdown:function()
	{
		/*_this.qno=null;
        _this.qArrays =null;
        _this.qArrays =null;
        _this.count=null;
        _this.starCount=null;
		_this.noofAttempts=null;
		_this.AnsTimerCount=null;
		_this.shake =null;
		

        _this.background  =null;
       
      
		_this.backbtn =null;
		

       _this.speakerbtn =null;
	  // _this.speakerbtn.inputEnabled = true;
		 _this.clickSound =null;
          


        _this.graphics =null;

        _this.timer =null;

		_this.obj1Array =null;
		_this.obj2Array =null;
		_this.obj3Array =null;
		_this.obj4Array =null;
		_this.rightOrderArray =null;
		_this.glowOrderArray =null;


		_this.objGroup.destroy();
			_this.gameBoxGroup.destroy();
			_this.crocsGroup.destroy();
        _this.objGroup=null;
			_this.gameBoxGroup=null;
			_this.crocsGroup=null;
        

        _this.tickMark  =null;
    	
		console.log(_this.world);
		
		_this.world.removeAll();
		_this = null;*/

		//_this.world.removeAll();

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		_this = null;*/

		_this.stopVoice();

		window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
        	telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"length_MLG_1_1state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
        	telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"length_MLG_1_1state", "fullycomplete");
            localStorage.setItem(window.avatarName+"length_MLG_2_1state", "canplay");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
	}
	
}
    