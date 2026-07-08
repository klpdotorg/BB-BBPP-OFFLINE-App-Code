Game.grade6_2Score=function(game){

};
var background4;
var replay;
var click2;
Game.grade6_2Score.prototype={
	create:function(game){
		
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
		
		//if(grade2Selected == true)
		//{
			_this.nextBtn = _this.add.sprite(_this.world.centerX+170,_this.world.centerY,'CommonNextBtn');    
			_this.nextBtn.scale.setTo(1);
	        _this.nextBtn.anchor.setTo(0.5);	
			_this.nextBtn.visible = false;
			_this.nextBtn.inputEnabled = true;
			_this.nextBtn.events.onInputDown.add(function()
			{
				_this.nextBtn.events.onInputDown.removeAll();
				_this.clickSound = _this.add.audio('ClickSound');
	            _this.clickSound.play();
				//_this.cache.destroy();
				_this.state.start('unity2_1_2level1',true,false); 
			},_this);
		//}

        
        
                
                _this.replay = _this.add.button(_this.world.centerX+56,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		        _this.replay.scale.setTo(1);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
                    _this.state.start('grade6_2level1',true,false);
                 },_this);
                   
	},

	update:function(){

	},

};