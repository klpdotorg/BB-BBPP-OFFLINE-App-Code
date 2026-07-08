Game.nsf3_4Score=function(game){

};

Game.nsf3_4Score.prototype={
	create:function(game){
		_this = this;

		if(_this.video2==null)
			{	
				_this.video2 = _this.add.video('demo7_1_1');
				
			}
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);
		
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-170,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(1);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			if(grade2Selected == false)
				_this.state.start('grade1levelSelectionScreen',true,false); 
			else
				_this.state.start('grade2levelSelectionScreen',true,false); 
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
			document.getElementById('phaser_canvas').style.pointerEvents = "none";
			_this.video2.play(false);
					
					_this.video2.changeSource(window.baseUrl+"assets/demoVideos/pv1.4.mp4");

					
					_this.video2.addToWorld();
					//_this.video2.addToWorld(0,0,0,0,1.25,1.32);
					
					_this.video2.play(false);
					_this.video2.mute = true;
					
					//_this.playDemoVideos('nsf3_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,410,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						//_this.stopDemoVoice();
						_this.video2.stop(false);
						_this.game.input.enabled = true;
						_this.state.start('pv1_4level1',true,false);
						
					},_this);
					},_this);


					_this.video2.onComplete.add(function(){

						//_this.stopDemoVoice();
	                    //_this.video2 = null;
		                     _this.state.start('pv1_4level1',true,false);
	                    },_this);//

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
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
                    _this.state.start('nsf3_4level1',true,false);
                 },_this);

                   
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