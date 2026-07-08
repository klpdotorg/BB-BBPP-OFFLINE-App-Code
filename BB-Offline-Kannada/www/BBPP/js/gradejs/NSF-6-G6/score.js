Game.NSF_6_Scor=function(game){

};

Game.NSF_6_Score.prototype={
	create:function(game){
		_this = this;
		
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
			_this.state.start('nsf3_5level1',true,false); 
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
                    _this.state.start('nsf2_5level1',true,false);
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