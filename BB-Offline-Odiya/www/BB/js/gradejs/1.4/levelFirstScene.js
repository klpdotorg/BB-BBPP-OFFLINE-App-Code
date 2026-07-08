Game.grade1_4level1=function(){};


Game.grade1_4level1.prototype={

	init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.4";
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("pinwheel1_4",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade3NSF4){

            window.grade3NSF4 = true;

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

        _this.load.image('Level12A_background',window.baseUrl+'assets/gradeAssets/1.4/firstSceneBg.png');
		
		_this.load.image('Level12A_stick', window.baseUrl+'assets/gradeAssets/1.4/stick.png');
		//scene1 assets/gradeAssets/1.4
        //_this.load.image('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind1.png');
        _this.load.atlas('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind1.png',window.baseUrl+'json/gradeJson/1.4/scene1wind1.json');
        _this.load.atlas('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind2.png',window.baseUrl+'json/gradeJson/1.4/scene1wind2.json');
        _this.load.atlas('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind3.png',window.baseUrl+'json/gradeJson/1.4/scene1wind3.json');
        _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.4/scene1wind33.json');
        
        _this.load.atlas('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind1.png',window.baseUrl+'json/gradeJson/1.4/scene2wind1.json');
        _this.load.atlas('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind2.png',window.baseUrl+'json/gradeJson/1.4/scene2wind2.json');
        _this.load.atlas('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind3.png',window.baseUrl+'json/gradeJson/1.4/scene2wind3.json');
        
        _this.load.atlas('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind1.png',window.baseUrl+'json/gradeJson/1.4/scene3wind1.json');
        _this.load.atlas('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind2.png',window.baseUrl+'json/gradeJson/1.4/scene3wind2.json');
        _this.load.atlas('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind3.png',window.baseUrl+'json/gradeJson/1.4/scene3wind3.json'); 
        
       // _this.load.atlas('Level12A_scene1spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin1.png',window.baseUrl+'json/gradeJson/1.4/scene1spin1.json');
      //  _this.load.atlas('Level12A_scene1spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin2.png',window.baseUrl+'json/gradeJson/1.4/scene1spin2.json');
      //  _this.load.atlas('Level12A_scene1spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin3.png',window.baseUrl+'json/gradeJson/1.4/scene1spin3.json');
       // _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.4/scene1wind33.json');
        
      //  _this.load.atlas('Level12A_scene2spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin1.png',window.baseUrl+'json/gradeJson/1.4/scene2spin1.json');
      //  _this.load.atlas('Level12A_scene2spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin2.png',window.baseUrl+'json/gradeJson/1.4/scene2spin2.json');
      //  _this.load.atlas('Level12A_scene2spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin3.png',window.baseUrl+'json/gradeJson/1.4/scene2spin3.json');
        
      //  _this.load.atlas('Level12A_scene3spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin1.png',window.baseUrl+'json/gradeJson/1.4/scene3spin1.json');
      //  _this.load.atlas('Level12A_scene3spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin2.png',window.baseUrl+'json/gradeJson/1.4/scene3spin2.json');
      //  _this.load.atlas('Level12A_scene3spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin3.png',window.baseUrl+'json/gradeJson/1.4/scene3spin3.json');
        
		//		_this.load.image('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind2.png');
		//		_this.load.image('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind3.png');
		//		_this.load.image('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind1.png');
		//		_this.load.image('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind2.png');
		//		_this.load.image('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind3.png');
		//		_this.load.image('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind1.png');
		//		_this.load.image('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind2.png');
		//		_this.load.image('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind3.png');
		//	
		//scene2 assets/gradeAssets/1.4
		//_this.load.atlas('Level12A_scene2Btn',window.baseUrl+'assets/gradeAssets/1.4/levelFirstScene/scene2Btn.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn.json');
		_this.load.atlas('Level12A_scene2Btn1',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn1.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn1.json');
		_this.load.atlas('Level12A_scene2Btn2',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn2.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn2.json');
		_this.load.atlas('Level12A_scene2Btn3',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn3.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn3.json');
		
		//scene3 assets/gradeAssets/1.4
        _this.load.atlas('Level12A_pencil',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/pencil.png' ,window.baseUrl+'json/gradeJson/1.4/pencil.json');
  
        
		_this.load.image('Level12A_centerCircle', window.baseUrl+'assets/gradeAssets/1.4/centerCircle.png');
		_this.load.image('Level12A_wind2Center', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind2Center.png');
        _this.load.atlas('Level12A_replay', window.baseUrl+'assets/gradeAssets/1.4/reply.png', window.baseUrl+'json/gradeJson/1.4/reply.json');
		
		
		//_this.load.image('Level12A_crayon', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/crayon.png');
		_this.load.image('Level12A_eraser', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/eraser.png');
        

		//_this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind1.png' ,window.baseUrl+'json/gradeJson/1.4/wind1.json');
		//_this.load.atlas('Level12A_scene3wind2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind2new.png' ,window.baseUrl+'json/gradeJson/1.4/wind2new.json');
		//_this.load.atlas('Level12A_windmel',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind3new3.png' ,window.baseUrl+'json/gradeJson/1.4/wind3new3.json');
		//_this.load.atlas('Level12A_windmel2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind32New.png' ,window.baseUrl+'json/gradeJson/1.4/wind32New.json');
        _this.load.atlas('Level12A_checkbtn',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/checkbtn.png' ,window.baseUrl+'json/gradeJson/1.4/checkbtn.json');

        
        
        _this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w1.png' ,window.baseUrl+'json/gradeJson/1.4/w1.json');
        _this.load.atlas('Level12A_wind2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w2.png' ,window.baseUrl+'json/gradeJson/1.4/w2.json');
        _this.load.atlas('Level12A_wind3',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w3.png' ,window.baseUrl+'json/gradeJson/1.4/w3.json');
        
        
       /* this.load.image('wind11', window.baseUrl+'assets/reduced/wind11.png');
        this.load.image('wind12', window.baseUrl+'assets/reduced/wind12.png');
        this.load.image('wind13', window.baseUrl+'assets/reduced/wind13.png');
        this.load.image('wind21', window.baseUrl+'assets/reduced/wind21.png');
        this.load.image('wind22', window.baseUrl+'assets/reduced/wind22.png');
        this.load.image('wind23', window.baseUrl+'assets/reduced/wind23.png');
        this.load.image('wind31', window.baseUrl+'assets/reduced/wind31.png');
        this.load.image('wind32', window.baseUrl+'assets/reduced/wind32.png');
        this.load.image('wind33', window.baseUrl+'assets/reduced/wind33.png');*/
        _this.load.image('commonBg1',window.baseUrl+'assets/commonAssets/commonBg1.png');
		_this.load.image('commonBg2',window.baseUrl+'assets/commonAssets/commonBg2.png');
		_this.load.image('bottomBar',window.baseUrl+'assets/commonAssets/bottomBar.png');
       

    }

    },


	create:function(game){
	//	game.load.script('main.js');//,'js/gradejs/1.4/main.js');
       // console.log("header =="+header);
       //fn1();
       //generateStarsForTheScene();
        header();
		    minutes=0;
            seconds=0;
		 _this.amplify = null;
		_this.selectedColor = null;

		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
		_this.sceneCount = 0;
		
		//_this.minutes=0;
       // _this.seconds=0;
       counterForTimer=0;
		
		_this.questionArray = [1,2,3,4,5,6,7,8,9];
		_this.questionArray = _this.shuffle(_this.questionArray);
		_this.count = 0;
    // console.log(_this.game.storage.length);
		
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


	generateStarsForTheScene:function(count)
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
    },
	
	displayQuestion:function()
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

        _this.speakerbtn.inputEnabled=true;
		_this.speakerbtn.events.onInputDown.add(function()
        {
            console.log("speaker is on");
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
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
		
	//	_this.speakerbtn.inputEnabled=true;
     //   _this.speakerbtn.input.useHandCursor = true;
		//console.log("display "+_this.questionArray[_this.count]);
		//console.log("display1 "+_this.count);
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
			case 8: _this.addEightWindMill(); break;
			case 9: _this.addNinthWindMill(); break;
		}
		
	},
	
	
	
	correctAns:function(target)
	{
		//rightAnswer = true;
        _this.speakerbtn.inputEnabled=false;

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



		/*_this.timer.stop();
		_this.timer = null;
		
		_this.noofAttempts++;
		var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
			var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: window.gameid,
					id_question: window.gameid,  
					answer_given: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_event: currentTime, 
					access_token: window.acctkn 
				}
		_this.AnsTimerCount=0;	
		absdsjsapi.saveAssessment(saveAsment);
		*/
        console.log(target.name);
        /*if(target.name == "_this.wronggraphics3")
        {
            console.log("inside");
            _this.windAnim1.loadTexture('scene1wind33', 0); 
            _this.windAnim1.x+=9;
            _this.windAnim1.y+=9;
            //_this.windAnim1.scale.setTo(0.88);
		   // _this.windAnim1.anchor.setTo(0.5);
        }*/
        
        _this.anim1111 = _this.windAnim1.animations.add('_this.animation');
        _this.anim1111.play(30);
        
       // _this.anim1111.onComplete.add(function(){spin2.play();rightAnswer = true;},_this);
        _this.anim1111.onComplete.add(function(){_this.removeCelebration();},_this);
		_this.disableButtons();
        
       
		 _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();


		_this.cmusic1 = _this.add.audio('celebr');
		_this.cmusic1.play();
       // celebr.onStop.add(function(){},_this);
		
		var starAnim = _this.starsGroup.getChildAt(_this.count-1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	_this.anim = starAnim.animations.add('star');
		_this.anim.play();
        
		//_this.score+=10;
		//_this.score_this.text.setText(selctedLang.score+' : '+_this.score);
       // _this.windAnim1.animations.play('rotate',80,true);
		//_this.windAnim1.animations.currentAnim.speed = 20
        //_this.time.events.add(2000, _this.removeCelebration, _this);
        _this.time.events.add(500, function(){
        	_this.spin2 = _this.add.audio('spin2');
        	_this.spin2.play();
        }, _this);
	},
    
    disableButtons:function()
	{
		if(_this.wronggraphics1!=null||_this.wronggraphics1!=undefined)
			_this.wronggraphics1.events.onInputDown.removeAll();
		if(_this.wronggraphics2!=null||_this.wronggraphics2!=undefined)
			_this.wronggraphics2.events.onInputDown.removeAll();
		if(_this.wronggraphics3!=null||_this.wronggraphics3!=undefined)
			_this.wronggraphics3.events.onInputDown.removeAll();
		if(_this.wronggraphics4!=null||_this.wronggraphics4!=undefined)
			_this.wronggraphics4.events.onInputDown.removeAll();
		if(_this.wronggraphics5!=null||_this.wronggraphics5!=undefined)
			_this.wronggraphics5.events.onInputDown.removeAll();
		if(_this.wronggraphics6!=null||_this.wronggraphics6!=undefined)
			_this.wronggraphics6.events.onInputDown.removeAll();
		if(_this.wronggraphics7!=null||_this.wronggraphics7!=undefined)
			_this.wronggraphics7.events.onInputDown.removeAll();
		if(_this.wronggraphics8!=null||_this.wronggraphics8!=undefined)
			_this.wronggraphics8.events.onInputDown.removeAll();
		if(_this.wronggraphics9!=null||_this.wronggraphics9!=undefined)
			_this.wronggraphics9.events.onInputDown.removeAll();
		if(_this.wronggraphics10!=null||_this.wronggraphics10!=undefined)
			_this.wronggraphics10.events.onInputDown.removeAll();
		if(_this.wronggraphics11!=null||_this.wronggraphics11!=undefined)
			_this.wronggraphics11.events.onInputDown.removeAll();
		if(_this.wronggraphics12!=null||_this.wronggraphics12!=undefined)
			_this.wronggraphics12.events.onInputDown.removeAll();
		if(_this.wronggraphics13!=null||_this.wronggraphics13!=undefined)
			_this.wronggraphics13.events.onInputDown.removeAll();
		if(_this.wronggraphics14!=null||_this.wronggraphics14!=undefined)
			_this.wronggraphics14.events.onInputDown.removeAll();
		if(_this.wronggraphics15!=null||_this.wronggraphics15!=undefined)
			_this.wronggraphics15.events.onInputDown.removeAll();
		if(_this.wronggraphics16!=null||_this.wronggraphics16!=undefined)
			_this.wronggraphics16.events.onInputDown.removeAll();
	},
	
    wrongAns:function(target,pointer)
	{
		console.log(pointer);
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
			} 
		*/	
		//absdsjsapi.saveInteractEvent(_this.interactEvent);
		
		//rightAnswer = true;
		//_this.score-=5;
		//_this.score_this.text.setText(selctedLang.score+' : '+_this.score);
		_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();

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
        //rightAnswer = false;
		//_this.windAnim1.animations.stop('rotate');
        //_this.questionBackground.destroy();
    
         var tween = _this.add.tween(_this.windmillGroup);
		tween.to({ x: -500}, 700,'Linear', true, 0);
		tween.onComplete.add(function(){
			//_this.addQuestion(_this.count);
            _this.windmillGroup.destroy();
            

            if(_this.count<2)
            {
                _this.displayQuestion();
            }
            else
            {
                _this.timer1.stop();
				_this.timer1 = null;
				//_this.state.start('grade1_2AScore');
                _this.state.start('grade1_4level2');
            }
		}, _this); 
	},
	
	addFirstWindMill:function()
	{
		_this.questionid = 2;
		
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
    
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene1wind1');		
		//_this.windAnim1.scale.setTo(0.88);
		_this.windAnim1.anchor.setTo(0.5);		
		//_this.windAnim1.animations.add('rotate');
        
        
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(-70, 60);
		_this.wronggraphics1.lineTo(0, 120);
		_this.wronggraphics1.lineTo(120, 150);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 90;
        _this.wronggraphics1.alpha = 0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(-70, 60);
		_this.wronggraphics2.lineTo(0, 120);
		_this.wronggraphics2.lineTo(120, 150);
		_this.wronggraphics2.lineTo(0, 0);
        
        _this.wronggraphics2.angle = 180;
		_this.wronggraphics2.alpha = 0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(-70, 60);
		_this.wronggraphics3.lineTo(0, 120);
		_this.wronggraphics3.lineTo(120, 150);
		_this.wronggraphics3.lineTo(0, 0);
        
        _this.wronggraphics3.angle = 270;
		_this.wronggraphics3.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        
        
        
        
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		

		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(-70, 60);
		_this.wronggraphics4.lineTo(0, 120);
		_this.wronggraphics4.lineTo(120, 150);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 360;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        
        
        _this.wronggraphics1.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics4.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill1/4Part';

        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.wrongAns,_this);
        
        
               
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1);
        centerCircle.x = _this.world.centerX+5;
		centerCircle.y = _this.world.centerY-35;
		_this.windAnim1.addChild(centerCircle);*/
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
       // _this.windmillGroup.add(centerCircle);
    
        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                
                //_this.addQuestion(_this.count);
            }, _this);

                       

	},
	
	addSecondWindMill:function()
	{	
		_this.questionid = 3;
		
        _this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene1wind2');		
		//_this.windAnim1.scale.setTo(0.88);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(-70, 60);
		_this.wronggraphics1.lineTo(0, 120);
		_this.wronggraphics1.lineTo(120, 150);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 90;
        _this.wronggraphics1.alpha = 0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(-70, 60);
		_this.wronggraphics2.lineTo(0, 120);
		_this.wronggraphics2.lineTo(120, 150);
		_this.wronggraphics2.lineTo(0, 0);
        
        _this.wronggraphics2.angle = 180;
		_this.wronggraphics2.alpha = 0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(-70, 60);
		_this.wronggraphics3.lineTo(0, 120);
		_this.wronggraphics3.lineTo(120, 150);
		_this.wronggraphics3.lineTo(0, 0);
        
        _this.wronggraphics3.angle = 270;
		_this.wronggraphics3.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        
        
        
        
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		

		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(-70, 60);
		_this.wronggraphics4.lineTo(0, 120);
		_this.wronggraphics4.lineTo(120, 150);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 360;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;


        _this.wronggraphics1.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics4.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill3/4Part';
        
        
        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        
        
               
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
		centerCircle.y = _this.world.centerY;
		_this.windAnim1.addChild(centerCircle);*/
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
      //  _this.windmillGroup.add(centerCircle);
    
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
		_this.questionid = 1;
		
        _this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene1wind3');		
		//_this.windAnim1.scale.setTo(0.88);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(-70, 60);
		_this.wronggraphics1.lineTo(0, 120);
		_this.wronggraphics1.lineTo(120, 150);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 90;
        _this.wronggraphics1.alpha = 0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(-70, 60);
		_this.wronggraphics2.lineTo(0, 120);
		_this.wronggraphics2.lineTo(120, 150);
		_this.wronggraphics2.lineTo(0, 0);
        
        _this.wronggraphics2.angle = 180;
		_this.wronggraphics2.alpha = 0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(-70, 60);
		_this.wronggraphics3.lineTo(0, 120);
		_this.wronggraphics3.lineTo(120, 150);
		_this.wronggraphics3.lineTo(0, 0);
        
        _this.wronggraphics3.angle = 270;
        _this.wronggraphics3.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        
        
        
        
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		

		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(-70, 60);
		_this.wronggraphics4.lineTo(0, 120);
		_this.wronggraphics4.lineTo(120, 150);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 360;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        
        _this.wronggraphics1.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics4.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill1/4Part';

        _this.wronggraphics4.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics1.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
       // _this.wronggraphics3.name = "_this.wronggraphics3";
        _this.wronggraphics3.events.onInputDown.add(function(target){
            
            _this.windAnim1.loadTexture('Level12A_scene1wind33', 0, false);
            _this.time.events.add(500, function(){_this.correctAns(target);}, _this);
            
        },_this);
        
        
               
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
		centerCircle.y = _this.world.centerY-30;
		_this.windAnim1.addChild(centerCircle);*/
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
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
		
		_this.questionid = 2;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene2wind1');		
		//_this.windAnim1.scale.setTo(0.8);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(0, 115);
		_this.wronggraphics1.lineTo(100, 80);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        
        _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 115);
		_this.wronggraphics2.lineTo(100, 80);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 45;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 115);
		_this.wronggraphics3.lineTo(100, 80);
		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 90;
        _this.wronggraphics3.alpha =0;
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 115);
		_this.wronggraphics4.lineTo(100, 80);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 135;
        _this.wronggraphics4.alpha =0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 115);
		_this.wronggraphics5.lineTo(100, 80);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 180;
        _this.wronggraphics5.alpha =0;
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 115);
		_this.wronggraphics6.lineTo(100, 80);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 225;
		_this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 115);
		_this.wronggraphics7.lineTo(100, 80);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 270;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 115);
		_this.wronggraphics8.lineTo(100, 80);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 315;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


        _this.wronggraphics1.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics3.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics4.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics5.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics6.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics7.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics8.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics9.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics10.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics11.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics12.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics13.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics14.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics15.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics16.name = 'Level12A_windMill1/2Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.correctAns,_this);
        
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
         centerCircle.scale.setTo(1.1);
        centerCircle.x = _this.world.centerX-0;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
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
		_this.questionid = 3;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene2wind2');		
		//_this.windAnim1.scale.setTo(0.8);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(0, 115);
		_this.wronggraphics1.lineTo(100, 80);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        
       _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 115);
		_this.wronggraphics2.lineTo(100, 80);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 45;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 115);
		_this.wronggraphics3.lineTo(100, 80);
		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 90;
        _this.wronggraphics3.alpha =0;
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 115);
		_this.wronggraphics4.lineTo(100, 80);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 135;
        _this.wronggraphics4.alpha =0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 115);
		_this.wronggraphics5.lineTo(100, 80);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 180;
        _this.wronggraphics5.alpha =0;
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 115);
		_this.wronggraphics6.lineTo(100, 80);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 225;
		_this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 115);
		_this.wronggraphics7.lineTo(100, 80);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 270;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 115);
		_this.wronggraphics8.lineTo(100, 80);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 315;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


        _this.wronggraphics1.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics2.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics4.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics5.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics6.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics7.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics8.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics9.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics10.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics11.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics12.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics13.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics14.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics15.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics16.name = 'Level12A_windMill3/4Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.correctAns,_this);
        
        
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
         centerCircle.scale.setTo(1.1);
        centerCircle.x = _this.world.centerX+0;
		centerCircle.y = _this.world.centerY-55;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
     //  _this.windmillGroup.add(centerCircle);

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
		
		_this.questionid = 1;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene2wind3');		
		//_this.windAnim1.scale.setTo(0.8);
		_this.windAnim1.anchor.setTo(0.5);				
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(0, 115);
		_this.wronggraphics1.lineTo(100, 80);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        
       _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 115);
		_this.wronggraphics2.lineTo(100, 80);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 45;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 115);
		_this.wronggraphics3.lineTo(100, 80);
		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 90;
        _this.wronggraphics3.alpha =0;
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 115);
		_this.wronggraphics4.lineTo(100, 80);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 135;
        _this.wronggraphics4.alpha =0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 115);
		_this.wronggraphics5.lineTo(100, 80);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 180;
        _this.wronggraphics5.alpha =0;
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 115);
		_this.wronggraphics6.lineTo(100, 80);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 225;
		_this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 115);
		_this.wronggraphics7.lineTo(100, 80);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 270;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 115);
		_this.wronggraphics8.lineTo(100, 80);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 315;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY+10);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


        _this.wronggraphics1.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics4.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics5.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics6.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics7.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics8.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics9.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics10.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics11.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics12.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics13.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics14.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics15.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics16.name = 'Level12A_windMill1/4Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.correctAns,_this);
        
        
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.1);
        centerCircle.x = _this.world.centerX;
		centerCircle.y = _this.world.centerY-55;
		_this.windAnim1.addChild(centerCircle);*/
        
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
       //_this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
         var tween = _this.add.tween(_this.windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //_this.addQuestion(_this.count);
                
            }, _this);

	},
    
    addSeventhWindMill:function()
	{
		
		_this.questionid = 1;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3wind1');		
		//_this.windAnim1.scale.setTo(0.85);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
        
      

		
		_this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(40, 130);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(40, 130);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 22;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 44;
		_this.wronggraphics3.alpha = 0; 
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(40, 100);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 68;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 130);
		_this.wronggraphics5.lineTo(40, 130);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 90;
		_this.wronggraphics5.alpha = 0;
        
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 130);
		_this.wronggraphics6.lineTo(40, 130);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 112;
		_this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 130);
		_this.wronggraphics7.lineTo(40, 130);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 134;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 130);
		_this.wronggraphics8.lineTo(40, 130);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 156;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


        _this.wronggraphics1.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics2.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics4.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics5.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics6.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics7.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics8.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics9.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics10.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics11.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics12.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics13.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics14.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics15.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics16.name = 'Level12A_windMill3/4Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.wrongAns,_this);
        
        
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX+5;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
       //_this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
         var tween = _this.add.tween(_this.windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //_this.addQuestion(_this.count);
                
            }, _this);
	},
    
    addEightWindMill:function()
	{
		
		_this.questionid = 2; 
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3wind2');		
		//_this.windAnim1.scale.setTo(0.85);
		_this.windAnim1.anchor.setTo(0.5);			
		//_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(40, 130);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(40, 130);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 22;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 44;
		_this.wronggraphics3.alpha = 0; 
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(40, 100);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 68;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 130);
		_this.wronggraphics5.lineTo(40, 130);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 90;
		_this.wronggraphics5.alpha = 0;
        
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 130);
		_this.wronggraphics6.lineTo(40, 130);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 112;
		_this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 130);
		_this.wronggraphics7.lineTo(40, 130);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 134;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 130);
		_this.wronggraphics8.lineTo(40, 130);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 156;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


         _this.wronggraphics1.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics2.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics3.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics4.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics5.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics6.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics7.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics8.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics9.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics10.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics11.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics12.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics13.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics14.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics15.name = 'Level12A_windMill1/2Part';
        _this.wronggraphics16.name = 'Level12A_windMill1/2Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.correctAns,_this);
        
        
        /*var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
      // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //_this.addQuestion(_this.count);
                
            }, _this); 
	},
    
    addNinthWindMill:function()
	{
		
		_this.questionid = 3;
		_this.count++;		
		//adding windmill to the game.
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		_this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3wind3');		
		//_this.windAnim1.scale.setTo(0.85);
		_this.windAnim1.anchor.setTo(0.5);			
	//	_this.windAnim1.animations.add('rotate');
        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);

		_this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(40, 130);
		_this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 0;
        _this.wronggraphics1.alpha =0;
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);

		_this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(40, 130);
		_this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 22;
        
        _this.wronggraphics2.alpha =0;

        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);

		_this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(40, 130);

		_this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.angle = 44;
		_this.wronggraphics3.alpha = 0; 
       
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);

		_this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(40, 100);
		_this.wronggraphics4.lineTo(0, 0);
        _this.wronggraphics4.angle = 68;
		_this.wronggraphics4.alpha = 0;
        
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);

		_this.wronggraphics5.lineTo(0, 130);
		_this.wronggraphics5.lineTo(40, 130);
		_this.wronggraphics5.lineTo(0, 0);
        _this.wronggraphics5.angle = 90;
		_this.wronggraphics5.alpha = 0;
        
        
        _this.wronggraphics6 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);

		_this.wronggraphics6.lineTo(0, 130);
		_this.wronggraphics6.lineTo(40, 130);
		_this.wronggraphics6.lineTo(0, 0);
        _this.wronggraphics6.angle = 112;
        _this.wronggraphics6.alpha = 0;
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);

		_this.wronggraphics7.lineTo(0, 130);
		_this.wronggraphics7.lineTo(40, 130);
		_this.wronggraphics7.lineTo(0, 0);
        _this.wronggraphics7.angle = 134;
		_this.wronggraphics7.alpha = 0;
        
        _this.wronggraphics8 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);

		_this.wronggraphics8.lineTo(0, 130);
		_this.wronggraphics8.lineTo(40, 130);
		_this.wronggraphics8.lineTo(0, 0);
        _this.wronggraphics8.angle = 156;
		_this.wronggraphics8.alpha = 0;
        
        _this.wronggraphics9 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);

		_this.wronggraphics9.lineTo(0, 130);
		_this.wronggraphics9.lineTo(40, 130);
		_this.wronggraphics9.lineTo(0, 0);
        _this.wronggraphics9.angle = 178;
		_this.wronggraphics9.alpha = 0;
        
        _this.wronggraphics10 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics10.beginFill(0xFF700B, 1);

		_this.wronggraphics10.lineTo(0, 130);
		_this.wronggraphics10.lineTo(40, 130);
		_this.wronggraphics10.lineTo(0, 0);
        _this.wronggraphics10.angle = 200;
		_this.wronggraphics10.alpha = 0;
        
        
        _this.wronggraphics11 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics11.beginFill(0xFF700B, 1);

		_this.wronggraphics11.lineTo(0, 130);
		_this.wronggraphics11.lineTo(40, 130);
		_this.wronggraphics11.lineTo(0, 0);
        _this.wronggraphics11.angle = 224;
		_this.wronggraphics11.alpha = 0;
        
        _this.wronggraphics12 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics12.beginFill(0xFF700B, 1);

		_this.wronggraphics12.lineTo(0, 130);
		_this.wronggraphics12.lineTo(40, 130);
		_this.wronggraphics12.lineTo(0, 0);
        _this.wronggraphics12.angle = 247;
		_this.wronggraphics12.alpha = 0;
        
        _this.wronggraphics13 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics13.beginFill(0xFF700B, 1);

		_this.wronggraphics13.lineTo(0, 130);
		_this.wronggraphics13.lineTo(40, 130);
		_this.wronggraphics13.lineTo(0, 0);
        _this.wronggraphics13.angle = 270;
		_this.wronggraphics13.alpha = 0;
        
        
        _this.wronggraphics14 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics14.beginFill(0xFF700B, 1);

		_this.wronggraphics14.lineTo(0, 130);
		_this.wronggraphics14.lineTo(40, 130);
		_this.wronggraphics14.lineTo(0, 0);
        _this.wronggraphics14.angle = 292;
		_this.wronggraphics14.alpha = 0;
        
        
        _this.wronggraphics15 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics15.beginFill(0xFF700B, 1);

		_this.wronggraphics15.lineTo(0, 130);
		_this.wronggraphics15.lineTo(40, 130);
		_this.wronggraphics15.lineTo(0, 0);
        _this.wronggraphics15.angle = 312;
		_this.wronggraphics15.alpha = 0;
        
        
        _this.wronggraphics16 = _this.add.graphics(_this.world.centerX, _this.world.centerY);
		_this.wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics16.beginFill(0xFF700B, 1);

		_this.wronggraphics16.lineTo(0, 130);
		_this.wronggraphics16.lineTo(40, 130);
		_this.wronggraphics16.lineTo(0, 0);
        _this.wronggraphics16.angle = 334;
		_this.wronggraphics16.alpha = 0;
        
        _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics5.inputEnabled = true;
        _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics6.inputEnabled = true;
        _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics7.inputEnabled = true;
        _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics8.inputEnabled = true;
        _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics9.inputEnabled = true;
        _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics10.inputEnabled = true;
        _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics11.inputEnabled = true;
        _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics12.inputEnabled = true;
        _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics13.inputEnabled = true;
        _this.wronggraphics13.input.useHandCursor = true;
        _this.wronggraphics14.inputEnabled = true;
        _this.wronggraphics14.input.useHandCursor = true;
        _this.wronggraphics15.inputEnabled = true;
        _this.wronggraphics15.input.useHandCursor = true;
        _this.wronggraphics16.inputEnabled = true;
        _this.wronggraphics16.input.useHandCursor = true;


         _this.wronggraphics1.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics2.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics3.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics4.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics5.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics6.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics7.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics8.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics9.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics10.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics11.name = 'Level12A_windMill3/4Part';
        _this.wronggraphics12.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics13.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics14.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics15.name = 'Level12A_windMill1/4Part';
        _this.wronggraphics16.name = 'Level12A_windMill3/4Part';
        
        
        _this.wronggraphics1.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics2.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics3.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics4.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics5.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics6.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics7.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics8.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics9.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics10.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics11.events.onInputDown.add(_this.correctAns,_this);
        _this.wronggraphics12.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics13.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics14.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics15.events.onInputDown.add(_this.wrongAns,_this);
        _this.wronggraphics16.events.onInputDown.add(_this.correctAns,_this);
        
        
       /* var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX+5;
		centerCircle.y = _this.world.centerY-50;
		_this.windAnim1.addChild(centerCircle);*/
        
        _this.windmillGroup= _this.add.group();
        
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.wronggraphics1);
        _this.windmillGroup.add(_this.wronggraphics2);
        _this.windmillGroup.add(_this.wronggraphics3);
        _this.windmillGroup.add(_this.wronggraphics4);
        _this.windmillGroup.add(_this.wronggraphics5);
        _this.windmillGroup.add(_this.wronggraphics6);
        _this.windmillGroup.add(_this.wronggraphics7);
        _this.windmillGroup.add(_this.wronggraphics8);
        _this.windmillGroup.add(_this.wronggraphics9);
        _this.windmillGroup.add(_this.wronggraphics10);
        _this.windmillGroup.add(_this.wronggraphics11);
        _this.windmillGroup.add(_this.wronggraphics12);
        _this.windmillGroup.add(_this.wronggraphics13);
        _this.windmillGroup.add(_this.wronggraphics14);
        _this.windmillGroup.add(_this.wronggraphics15);
        _this.windmillGroup.add(_this.wronggraphics16);
      // _this.windmillGroup.add(centerCircle);

        _this.windmillGroup.x = 1000;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //_this.addQuestion(_this.count);
                
            }, _this);

    },
    
  /*  getVoice:function(){
        _this.stopVoice();
        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 4:
            case 8:if(window.languageSelected=="English")
                        Eng_12A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A2.play();
                    else
                        Kan_12A2.play();
                    break;
            case 3:
            case 6:
            case 7:if(window.languageSelected=="English")
                        Eng_12A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A1.play();
                    else
                        Kan_12A1.play();
                    break;
            case 2:
            case 5:
            case 9:if(window.languageSelected=="English")
                        Eng_12A3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A3.play();
                    else
                        Kan_12A3.play();
                    break;
            
        }
    },
    stopVoice:function(){
        Eng_12A2.stop();
        Hin_12A2.stop();
        Kan_12A2.stop();
        Eng_12A1.stop();
        Hin_12A1.stop();
        Kan_12A1.stop();
        Eng_12A3.stop();
        Hin_12A3.stop();
        Kan_12A3.stop();
    },

*/
    getVoice:function()
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        

        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 4:
            case 8:
            		if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2A2.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2A2.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2A2.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2A2.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2A2.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2A2.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2A2.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2A2.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2A2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
			        }
                    break;
            case 3:
            case 6:
            case 7:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2A1.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2A1.mp3");
			        }
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2A1.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2A1.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2A1.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2A1.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2A1.mp3");
					}
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2A1.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2A1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
			        }
                    break;
            case 2:
            case 5:
            case 9:if(window.languageSelected == "English")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2A3.mp3");
			        }
			        else if(window.languageSelected == "Hindi")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2A3.mp3");
			        }
					else if(window.languageSelected == "Marathi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Marathi/1.2A3.mp3");
					}
					else if(window.languageSelected == "Telugu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/telugu/1.2A3.mp3");
					}
					else if(window.languageSelected == "Tamil")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Tamil/1.2A3.mp3");
					}
					else if(window.languageSelected == "Urdu")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Urdu/1.2A3.mp3");
					}
			        else if(window.languageSelected == "Kannada")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2A3.mp3");
			        }
			        else if(window.languageSelected == "Gujarati")
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2A3.mp3");
			        }
					else
			        {
			            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2A3.mp3");
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
