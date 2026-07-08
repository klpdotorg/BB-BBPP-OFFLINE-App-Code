Game.unity13_1Score=function(game){

};

Game.unity13_1Score.prototype={
	create:function(game){
		
		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);
		
		if(this.video7==null)
			{	
				this.video7 = this.add.video('demo7_1_1');
				
			}
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-170,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(1);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			if(grade2Selected == false)
				_this.state.start('grade3levelSelectionScreen',true,false); 
			else
				_this.state.start('grade3levelSelectionScreen',true,false); 
			},_this);


		_this.shareBtn = _this.add.sprite(_this.world.centerX-56,_this.world.centerY,'shareIconScore');
		_this.shareBtn.scale.setTo(1);
		_this.shareBtn.anchor.setTo(0.5);
		_this.shareBtn.inputEnabled = true;
		_this.shareBtn.events.onInputDown.add(function(){
			//_this.shareBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            nativeApp.ShareApp();
			
			},_this);
		
		
		_this.nextBtn = _this.add.sprite(_this.world.centerX+170,_this.world.centerY,'CommonNextBtn');    
		_this.nextBtn.scale.setTo(1);
        _this.nextBtn.anchor.setTo(0.5);	
		_this.nextBtn.inputEnabled = true;
		_this.nextBtn.events.onInputDown.add(function()
		{
			_this.nextBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			//_this.cache.destroy();
			this.video7.play(false);
			this.video7.changeSource(window.baseUrl+"assets/demoVideos/14_1.mp4");
			this.video7.addToWorld();
			this.video7.play(false);

			//this.game.input.enabled = false;
			/**************************Play Demo VO And Skip Demo *****************************/
			if(window.languageSelected == "Gujarati")
					{
						this.video7.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_1a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video7.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_1level1',true,false);		
								},_this);
							_this.time.events.add(12000, function(){
								_this.playDemoVideos('14_1b');//second sound
							},_this);
							
						},_this);
					}
					else
					{
						this.video7.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_1a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video7.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_1level1',true,false);		
								},_this);
							_this.time.events.add(12000, function(){
								_this.playDemoVideos('14_1b');//second sound
							},_this);
							
						},_this);
					}
					
			/***********************************************************/
			
			

			//this.video3.play(false);
			this.video7.onComplete.add(function(){
				
			this.game.input.enabled = true;
			
				_this.state.start('unity14_1level1',true,false);
			},_this);

		},_this);

        //_this.nextBtn.visible = false;
        
                
                _this.replay = _this.add.button(_this.world.centerX+56,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		        _this.replay.scale.setTo(1);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
                    _this.state.start('unity13_1level1',true,false);
                 },_this);

                   
	},

	playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
			case '14_1a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.1a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.1a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_1b': 
						if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.1b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.1b.mp3");
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

	stopDemoVoice:function(){
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
	},

	shutdown:function()
	{
		_this.background = null;
		_this.homeBtn.events.onInputDown.removeAll();
		_this.homeBtn=null;
		_this.nextBtn.events.onInputDown.removeAll();
		_this.nextBtn=null;
		_this.replay.events.onInputDown.removeAll();
		_this.replay=null;
		
		_this = null;
	}

                   
	

};