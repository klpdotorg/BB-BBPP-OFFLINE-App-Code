var minutes;
var seconds;
function header(){
    
    _this.background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level12A_background');
    _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
        _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level321_CommonSpeakerBtn');
       _this.speakerbtn.inputEnabled = true;
		
		_this.timebg=_this.add.sprite(305,6,'Level42C_timer');
		_this.timebg.scale.setTo(1,1);
        (minutes>0?minutes=minutes:minutes=0);
        (seconds>0?seconds=seconds:seconds=0);
  
		_this.timeDisplay = _this.add.text(330,22,minutes+':'+seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
    
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < 6; i++)
        {
            _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        } 
        
    
};