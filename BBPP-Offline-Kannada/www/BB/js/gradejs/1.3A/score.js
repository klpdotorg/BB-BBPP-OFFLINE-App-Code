Game.grade1_3AScore=function(game){

};
var background;
var score;
Game.grade1_3AScore.prototype={
	create:function(game){

		_this = this;
		
		this.bg = this.add.tileSprite(0,-80,this.world.width,this.world.height,'CommonBackground');
		this.bg.scale.setTo(1,1.5);
		
		
		var homeBtn = this.add.sprite(this.world.centerX-170,this.world.centerY,'CommonHomeBtn');
		homeBtn.scale.setTo(1);
		homeBtn.anchor.setTo(0.5);
		homeBtn.inputEnabled = true;
		homeBtn.events.onInputDown.add(function(){
			//this.cache.destroy();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen'); 
			},this);


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
		
		
		var nextBtn = this.add.sprite(this.world.centerX+170,this.world.centerY,'CommonNextBtn');    
		nextBtn.scale.setTo(1);
        nextBtn.anchor.setTo(0.5);	
		nextBtn.inputEnabled = true;
		nextBtn.events.onInputDown.add(function()
		{
			var click = this.add.audio('ClickSound');
            click.play();
			//this.cache.destroy();
			this.state.start('grade1_3Blevel1'); 
		},this);
		
		
//		scoretext = this.add.text(this.world.centerX, this.world.centerY-90, selctedLang.levelComplete);
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
        
        
                replay = this.add.button(this.world.centerX+56,this.world.centerY,'CommonReplayBtn',null,this,0,1,2);
		        replay.scale.setTo(1);
		        replay.anchor.setTo(0.5);
                replay.inputEnabled = true;
		        replay.input.useHandCursor = true; 
                replay.events.onInputDown.add(function(){ 
                    var click = this.add.audio('ClickSound');
            click.play();
                    this.state.start('grade1_3Alevel1');
                 },this);
        
//        scoretext9= this.add.text(this.world.centerX-10, 270, selctedLang.Replay);
//
//				 scoretext9.anchor.set(0.5);
//				 scoretext9.align = 'center';
//
//				 scoretext9.font = 'Arial Black';
//				 scoretext9.fontSize = 25;
//				 //scoretext7.fontWeight = 'bold';
//				 scoretext9.fill = '#FFFFFF';
//
//				 scoretext9.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
		
	
        
	},

	update:function(game){

	},

};