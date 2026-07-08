Game.grade1_4level2=function(){};


Game.grade1_4level2.prototype={

	init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.2B";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       // telInitializer.gameIdInit("pinwheel1_2B",gradeSelected);
        

    },


	create:function(game){
        header();
		//fn1();
       // generateStarsForTheScene();
        
        _this.starsGroup.getChildAt(0).frameName="Symbol 10 copy 2 instance 10035";
        _this.starsGroup.getChildAt(1).frameName="Symbol 10 copy 2 instance 10035";
		 _this.amplify = null;
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
		_this.sceneCount = 2;
		
		//_this.minutes=0;
       // _this.seconds=0;
        //_this.counterForTimer=0;
		
		_this.questionArray = [1,2,3,4,5,6,7,8,9];
		_this.questionArray = _this.shuffle(_this.questionArray);
        
		_this.count = 0;
		_this.countstar = 1;
		
		/*loginTime = game.storage.getItem('loginTime');		
		var time = new Date();		
		game.storage.setItem('loginTime', time);*/
		
		
		
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
		
        
		_this.displayQuestion();

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
     counterForTimer++;
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     _this.timeDisplay.setText(minutes+':' + seconds);
},

	/*generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-15, 12, 'starAnim1');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },*/
	

	displayQuestion:function(target)
	{
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;

		_this.sceneCount++;

		_this.timer = null;
		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();
		
		_this.speakerbtn.inputEnabled=true;
		_this.speakerbtn.events.onInputDown.add(function()
        {
            console.log("speaker is on");
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
         _this.stopVoice();

		switch(_this.questionArray[_this.count])
		{
			case 1: _this.addFirstWindMill(); break;
			case 2: _this.addSecondWindMill(); break;
			case 3: _this.addThirdWindMill(); break;
			case 4: _this.addFourthWindMill(); break;
			case 5: _this.addFifthWindMill(); break;
            case 6: _this.addSixthWindMill(); break;
            case 7: _this.addSeventhWindMill(); break;
            case 8: _this.addEighthWindMill(); break;
            case 9: _this.addNinethWindMill(); break;
		
		}
		
	},
	

	
	
	
	correctAns:function(target)
	{
		 _this.speakerbtn.inputEnabled=false;

		 target.events.onInputDown.removeAll();
        _this.noofAttempts++;
		
		/*_this.currentTime = window.timeSaveFunc();
		_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} */
			
		//absdsjsapi.saveInteractEvent(_this.interactEvent);


        if(_this.timer)
			{
				_this.timer.stop();
				_this.timer = null;
			}
			
			/*_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "yes",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}*/
				
			//absdsjsapi.saveAssessment(_this.saveAsment);

			telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);


        _this.anim111 = _this.windAnim1.animations.add('animation');
        _this.anim111.play(30);
        //_this.anim111.onComplete.add(function(){spin2.play();rightAnswer = true;},_this);
        _this.anim111.onComplete.add(function(){_this.removeCelebration();},_this);
        
		if(_this.buttonBackground!=null||_this.buttonBackground!=undefined)
		{
			_this.buttonBackground.events.onInputDown.removeAll();
			_this.buttonBackground.events.onInputOver.removeAll();
			_this.buttonBackground.events.onInputOut.removeAll();			
		}
			
		if(_this.buttonBackground2!=null||_this.buttonBackground2!=undefined)
		   {
			   _this.buttonBackground2.events.onInputDown.removeAll();
			   _this.buttonBackground2.events.onInputOver.removeAll();
			   _this.buttonBackground2.events.onInputOut.removeAll();	
		   }
		if(_this.buttonBackground3!=null||_this.buttonBackground2!=undefined)
		{
			_this.buttonBackground3.events.onInputDown.removeAll();
			_this.buttonBackground3.events.onInputOver.removeAll();
			_this.buttonBackground3.events.onInputOut.removeAll();	
		}
		
		//score+=10;
		//score_this.text.setText(selctedLang.score+' : '+score);
		
        _this.countstar++;
		var starAnim = _this.starsGroup.getChildAt(_this.countstar);
		
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
		
		// _this.ClickSound = _this.add.audio('ClickSound');
        //_this.ClickSound.play();


		_this.cmusic1 = _this.add.audio('celebr');
		_this.cmusic1.play();
       // _this.windAnim1.animations.play('rotate',80,true);
       // _this.time.events.add(3000, _this.removeCelebration, _this);
        _this.time.events.add(500, function(){
        	_this.spin2 = _this.add.audio('spin2');
        	_this.spin2.play();
        }, _this);
	},
    
    wrongAns:function(target)
	{
		target.events.onInputDown.removeAll();
		_this.noofAttempts++;
		/*_this.currentTime = window.timeSaveFunc();
		_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} */
			
		//absdsjsapi.saveInteractEvent(_this.interactEvent);
		
		//rightAnswer = true;
		//_this.score-=5;
		//_this.score_this.text.setText(selctedLang.score+' : '+_this.score);
		

		_this.wmusic1 = _this.add.audio('waudio');
		_this.wmusic1.play();

        _this.shake.shake(10,_this.windAnim1);
	},
    
    removeCelebration:function()
	{
		_this.timer1.stop();
        if(_this.spin2)
		{
			if(_this.spin2.isPlaying)
			{
	        	_this.spin2.stop();
			}
		}
        rightAnswer = false;
		//_this.windAnim1.animations.stop('rotate');
        //_this.questionBackground.destroy();
         var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: -700}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            _this.windmillGroup.destroy();
            
            if(_this.count<2)
            {
                _this.displayQuestion();
            }
            else
            {
               // countstar=2;
                 _this.timer1.stop();
				_this.timer1 = null;
				//_this.state.start('grade1_2BScore');
                _this.state.start('grade1_4level3');
            }
		}, _this); 
	},
	
   
	
	addFirstWindMill:function()
	{
		 
		_this.questionid = 5;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        

//        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-30,'Level12A_scene1wind1');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);	
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene1wind1');
    	_this.windAnim1.anchor.setTo(0.5);
        //_this.windAnim1.scale.setTo(0.9);
       //_this.windAnim1.animations.add('rotate');
		//_this.windAnim1.addChild(centerCircle);
		
		_this.buttonBackground = _this.add.sprite(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.sprite(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.scale.setTo(1);
        _this.buttonBackground2.frame = 1;
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.sprite(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.scale.setTo(1);
        _this.buttonBackground3.frame = 1;
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/
		
		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		


		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){
			target.inputEnabled=false;
			target.frame = 0;
                   _this.ClickSound = _this.add.audio('ClickSound');
        		_this.ClickSound.play();                                   
                   _this.time.events.add(500, function(){_this.correctAns(target);}, _this);
               },_this);
        

		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
                                                     
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
      
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-35;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
       
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);
        

        _this.windmillGroup.x = 1000;
        
		_this.getVoice();
		
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
             //_this.getVoice();
		}, _this);               

	},
	
	addSecondWindMill:function()
	{				 
		
		_this.questionid = 3;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-30,'Level12A_scene1wind2');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene1wind2');
    	_this.windAnim1.anchor.setTo(0.5);
        
      //  _this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        //_this.windAnim1.addChild(centerCircle);
		
		
		_this.buttonBackground = _this.add.sprite(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/

		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.inputEnabled=false;target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-35;
		_this.windAnim1.addChild(centerCircle);
		*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
             
		}, _this);

	},
    
    addThirdWindMill:function()
	{
		
		_this.questionid = 3;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-30,'Level12A_scene1wind3');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);
//        
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene1wind3');
    	_this.windAnim1.anchor.setTo(0.5);
       // _this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        //_this.windAnim1.addChild(centerCircle);
		
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/


		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-25;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
             
		}, _this);

	},
	
    addFourthWindMill:function()
	{
		
		_this.questionid = 3;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene2wind1');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene2wind1');
    	_this.windAnim1.anchor.setTo(0.5);
       // _this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        //_this.windAnim1.addChild(centerCircle);
		
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/

		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = _this.world.centerX-200;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
        //_this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
             
		}, _this);

	},
    
    
    addFifthWindMill:function()
	{
		
		_this.questionid = 1;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene2wind2');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene2wind2');
    	_this.windAnim1.anchor.setTo(0.5);
        
        //_this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        //_this.windAnim1.addChild(centerCircle);
		
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/

		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                     _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                     _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = _this.world.centerX-200;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
         _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            
		}, _this);

	},
    
    
    addSixthWindMill:function()
	{
		 
		_this.questionid = 5;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene2wind3');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
		
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene2wind3');
    	_this.windAnim1.anchor.setTo(0.5);
        
        //_this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/

		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = _this.world.centerX-200;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1400;
         _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            
		}, _this);               

	},
    
    addSeventhWindMill:function()
	{
		
		_this.questionid = 3;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene3wind1');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene3wind1');
    	_this.windAnim1.anchor.setTo(0.5);
        //_this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        
		
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/
		
		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";


		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                     _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		_this.buttonBackground3.events.onInputOver.add(function(target){
			//target.scale.setTo(0.9);
			
		},_this);
		_this.buttonBackground3.events.onInputOut.add(function(target){
			//target.scale.setTo(0.8);
			
		},_this);
		
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
        //_this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
         _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            
		}, _this);               

	},
    
    addEighthWindMill:function()
	{
		
		_this.questionid = 2;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene3wind2');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene3wind2');
    	_this.windAnim1.anchor.setTo(0.5);
        //_this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
       
		
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/
		
		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";

		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
             
		}, _this);               

	},
    
    addNinethWindMill:function()
	{
		
		_this.questionid = 1;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-205,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
//		_this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-50,'Level12A_scene3wind3');		
//		_this.windAnim1.scale.setTo(0.8);
//		_this.windAnim1.anchor.setTo(0.5);			
//		_this.windAnim1.animations.add('rotate');
        
        _this.windAnim1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY,'Level12A_scene3wind3');
    	_this.windAnim1.anchor.setTo(0.5);
        //_this.windAnim1.scale.setTo(0.9);
		//_this.windAnim1.animations.add('rotate');
        
		
		
		_this.buttonBackground = _this.add.button(_this.world.centerX+210,_this.world.centerY-100,'Level12A_scene2Btn1');
		_this.buttonBackground.frame = 1;
		_this.buttonBackground.scale.setTo(1);
		_this.buttonBackground.anchor.setTo(0.5);
		
		/*_this.buttonText = _this.add.text(0, 0,'Level12A_  1/2  ');
		_this.buttonText.anchor.set(0.5);
		_this.buttonText.align = 'center';

		_this.buttonText.font = 'Comic Sans MS';
		_this.buttonText.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText.fill = '#FFFFFF';

		_this.buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground.addChild(_this.buttonText);*/
        
		
		_this.buttonBackground2 = _this.add.button(_this.world.centerX+210,_this.world.centerY+10,'Level12A_scene2Btn2');
		_this.buttonBackground2.frame = 1;
		_this.buttonBackground2.scale.setTo(1);
		_this.buttonBackground2.anchor.setTo(0.5);
		
		/*_this.buttonText2 = _this.add.text(0, 0,'Level12A_  3/4  ');
		_this.buttonText2.anchor.set(0.5);
		_this.buttonText2.align = 'center';

		_this.buttonText2.font = 'Comic Sans MS';
		_this.buttonText2.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText2.fill = '#FFFFFF';

		_this.buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground2.addChild(_this.buttonText2);*/
      
		
		_this.buttonBackground3 = _this.add.button(_this.world.centerX+210,_this.world.centerY+120,'Level12A_scene2Btn3');
		_this.buttonBackground3.frame = 1;
		_this.buttonBackground3.scale.setTo(1);
		_this.buttonBackground3.anchor.setTo(0.5);
		
		/*_this.buttonText3 = _this.add.text(0, 0,'Level12A_  1/4  ');
		_this.buttonText3.anchor.set(0.5);
		_this.buttonText3.align = 'center';

		_this.buttonText3.font = 'Comic Sans MS';
		_this.buttonText3.fontSize = 40;
		//_this.text.fontWeight = 'bold';
		_this.buttonText3.fill = '#FFFFFF';

		_this.buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		_this.buttonBackground3.addChild(_this.buttonText3);*/

		_this.buttonBackground.name = "Level12B_1/2Button";
		_this.buttonBackground2.name = "Level12B_3/4Button";
		_this.buttonBackground3.name = "Level12B_1/4Button";
		
		_this.buttonBackground.inputEnabled = true;
        _this.buttonBackground.input.useHandCursor = true;
		_this.buttonBackground2.inputEnabled = true;
        _this.buttonBackground2.input.useHandCursor = true;
		_this.buttonBackground3.inputEnabled = true;
        _this.buttonBackground3.input.useHandCursor = true;
		
		_this.buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
		_this.buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;target.inputEnabled=false;
                                                      _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.correctAns(target);}, _this);},_this);
		
		
		_this.buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                     _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
					
                                                      _this.time.events.add(500, function(){_this.wrongAns(target);}, _this);},_this);
		
		
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-196;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
 
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.buttonBackground);
        _this.windmillGroup.add(_this.buttonBackground2);
        _this.windmillGroup.add(_this.buttonBackground3);
       // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
         _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            
		}, _this);               

	},
    
    /*getVoice:function(){
		_this.stopVoice();
        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 6:if(window.languageSelected=="English")
                        Eng_12B5.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B5.play();
                    else
                        Kan_12B5.play();
                    break;
            case 5:
            case 9:if(window.languageSelected=="English")
                        Eng_12B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B1.play();
                    else
                        Kan_12B1.play();
                    break;
            case 2:
            case 3:
            case 4:
            case 7:if(window.languageSelected=="English")
                        Eng_12B3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B3.play();
                    else
                        Kan_12B3.play();
                    break;
            case 8:if(window.languageSelected=="English")
                        Eng_12B2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B2.play();
                    else
                        Kan_12B2.play();
                    break;
            
        }
    },
	
	stopVoice:function(){
        Eng_12B5.stop();
        Hin_12B5.stop();
        Kan_12B5.stop();
        Eng_12B1.stop();
        Hin_12B1.stop();
        Kan_12B1.stop();
        Eng_12B3.stop();
        Hin_12B3.stop();
        Kan_12B3.stop();
        Eng_12B2.stop();
        Hin_12B2.stop();
        Kan_12B2.stop();

    },*/

    getVoice:function()
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        

        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 6:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2B5.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2B5.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2B5.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2B5.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2B5.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2B5.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2B5.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2B5.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2B5.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
			        }
                    break;
            case 5:
            case 9:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2B1.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2B1.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2B1.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2B1.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2B1.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2B1.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2B1.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2B1.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2B1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
			        }
                    break;
            case 2:
            case 3:
            case 4:
            case 7:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2B3.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2B3.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2B3.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2B3.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2B3.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2B3.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2B3.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2B3.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2B3.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
			        }
                    break;
            case 8:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2B2.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2B2.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2B2.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2B2.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2B2.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2B2.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2B2.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2B2.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2B2.mp3");
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
