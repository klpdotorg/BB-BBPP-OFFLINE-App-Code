Game.grade7_1Score=function(game){

};
var background4;
var replay;
var click2;
Game.grade7_1Score.prototype={
	create:function(game){

		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);
                    
        		
		//var bottomLine = this.add.sprite(this.world.centerX,this.world.centerY,'bottomLine');
        //bottomLine.anchor.setTo(0.5,0.5);
        //bottomLine.y = this.world.centerY+280;

        _this.homeBtn = _this.add.sprite(_this.world.centerX-170,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(1);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
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
			_this.state.start('grade7_2level1',true,false); 
		},_this);
		
//		
//		scoretext = this.add.text(this.world.centerX-50, this.world.centerY, selctedLang.TotalScore+' : '+score);
//		scoretext.scale.setTo(1.5);
//		scoretext.anchor.setTo(0.5);
//		scoretext.align = 'center';
//
//		scoretext.font = 'Comic Sans MS';
//		scoretext.fontSize = 40;
//		//text.fontWeight = 'bold';
//		scoretext.fill = '#FFFFFF';
//
//		scoretext.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
//        
//                var scoretext6 = this.add.text(this.world.centerX, 200, selctedLang.End);
//
//				 scoretext6.anchor.set(0.5);
//				 scoretext6.align = 'center';
//
//				 scoretext6.font = 'Arial Black';
//				 scoretext6.fontSize = 70;
//				 scoretext6.fontWeight = 'bold';
//				 scoretext6.fill = '#FFFFFF';
//
//				 scoretext6.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
        
                
                _this.replay = _this.add.button(_this.world.centerX+56,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		        _this.replay.scale.setTo(1);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
                    _this.state.start('grade7_1level1',true,false);
                 },_this);
//        
//        scoretext7 = this.add.text(this.world.centerX-10, 300, selctedLang.Replay);
//
//				 scoretext7.anchor.set(0.5);
//				 scoretext7.align = 'center';
//
//				 scoretext7.font = 'Arial Black';
//				 scoretext7.fontSize = 25;
//				 //scoretext7.fontWeight = 'bold';
//				 scoretext7.fill = '#FFFFFF';
//
//				 scoretext7.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);

		
		//localStorage.setItem('Score', JSON.stringify(score));
                   
	},

	update:function(){

	},

};