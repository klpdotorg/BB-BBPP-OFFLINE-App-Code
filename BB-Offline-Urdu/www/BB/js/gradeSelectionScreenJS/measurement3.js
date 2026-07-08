Game.measurement3=function(){

};


Game.measurement3.prototype={
	
	init:function()
	{
		_this = this;
		window.mcIcon = "time";
		
	},
			

	create:function(){	

		measurement3 = true;	

		nativeApp.screenViewStringPass("Challenge_activity_list","measurement3");

		_this.game.stage.disableVisibilityChange = true;
		_this.input.enabled = true;
			
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameSceneBg');

		_this.navBar = _this.add.sprite(0,0,'landingnavBar');

		_this.backBtn = _this.add.sprite(30,21,'landingbackBtn');
		_this.backBtn.anchor.setTo(0.5);
		_this.backBtn.inputEnabled = true;
		_this.backBtn.events.onInputDown.add(function()
		{
			measurement3 = false;
			this.state.start('gradeSelectionScreen',true,false);
		},this);

		this.scoreBg = this.add.sprite(750,7,'scoreBg');

        this.scoreVar = parseInt(window.score);

        this.scoreTxt = this.add.text(815,24, this.scoreVar);
        this.scoreTxt.anchor.setTo(0.5);
        this.scoreTxt.align = 'center';
        this.scoreTxt.font = 'myfont';
        this.scoreTxt.fontWeight = 'normal';
        this.scoreTxt.fontSize = 20;
        this.scoreTxt.fill = '#ADFF2F';

		this.measurementText = this.add.sprite(140,20,'measurementText');
		this.measurementText.anchor.setTo(0.5);

		this.measurementTxt = this.add.text(140,23, "Measurements");
		this.measurementTxt.fontSize = 18;

		if(window.languageSelected == "Gujarati")
                        {
                            this.measurementTxt.setText("માપ");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            this.measurementTxt.setText("\n नाप तोल \n");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            this.measurementTxt.setText("ಅಳತೆಗಳು");
                            this.measurementTxt.fontSize = 16;
                        }
                        else if(window.languageSelected == "Odiya")
                        {
                           this.measurementTxt.setText("ମାପ");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                           this.measurementTxt.setText("मापने/एकके");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                           this.measurementTxt.setText("కొలతలు");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                           this.measurementTxt.setText("அளவீடுகள்");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                           this.measurementTxt.setText("پیمائش");
                        }
                        else
                        {
                        	this.measurementTxt.setText("Measurements");
                        }
       
        this.measurementTxt.anchor.setTo(0.5);
        this.measurementTxt.align = 'center';

        this.measurementTxt.font = 'gradefont';
        
        this.measurementTxt.fill = '#FFFF00';

		this.lengthMc = this.add.sprite(250,20,'lengthMc');
		this.lengthMc.anchor.setTo(0.5);

		this.lengthMc = this.add.sprite(250,20,'timeMc');
		this.lengthMc.anchor.setTo(0.5);


		this.measurement1_1State = localStorage.getItem(window.avatarName+"time_MTG_1_1state");
		this.measurement1_2State = localStorage.getItem(window.avatarName+"time_MTG_2_3state");
		this.measurement1_3State = localStorage.getItem(window.avatarName+"time_MTG_3_3state");
		
		this.addgameIcons();				
		
	},

	addgameIcons:function()
	{
		this.measurement1_1 = this.add.sprite(this.world.centerX-250,200,"measurement3_1");
		this.measurement1_1.anchor.setTo(0.5);

		this.ntext1_1 = this.add.sprite(this.world.centerX-190,245,"n1");
		this.ntext1_1.anchor.setTo(0.5);

		if(this.measurement1_1State=="playedwithhint"||this.measurement1_1State=="canplay")
		{
			this.measurement1_1.inputEnabled = true;
			this.measurement1_1.events.onInputDown.add(function()
			{
				if(this.measurement1_1State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'time_MTG_1_1level1');
				}
				else
					this.state.start('time_MTG_1_1level1',true,false);
			},this);
		}

		this.measurement1_2 = this.add.sprite(this.world.centerX,200,"measurement3_2");
		this.measurement1_2.anchor.setTo(0.5);

		this.ntext1_2 = this.add.sprite(this.world.centerX+60,245,"n2");
		this.ntext1_2.anchor.setTo(0.5);

		if(this.measurement1_2State=="playedwithhint"||this.measurement1_2State=="canplay")
		{
			this.measurement1_2.inputEnabled = true;
			this.measurement1_2.events.onInputDown.add(function()
			{
				if(this.measurement1_2State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'time_MTG_2_3level1');
				}
				else
					this.state.start('time_MTG_2_3level1',true,false);
			},this);
		}

		this.measurement1_3 = this.add.sprite(this.world.centerX+250,200,"measurement3_3");
		this.measurement1_3.anchor.setTo(0.5);

		this.ntext1_3 = this.add.sprite(this.world.centerX+310,245,"n3");
		this.ntext1_3.anchor.setTo(0.5);

		if(this.measurement1_3State=="playedwithhint"||this.measurement1_3State=="canplay")
		{
			this.measurement1_3.inputEnabled = true;
			this.measurement1_3.events.onInputDown.add(function()
			{
				if(this.measurement1_3State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'time_MTG_3_3level1');
				}
				else
					this.state.start('time_MTG_3_3level1',true,false);
			},this);
		}

		this.checkState(this.measurement1_1,this.ntext1_1,this.measurement1_1State);
		this.checkState(this.measurement1_2,this.ntext1_2,this.measurement1_2State);
		this.checkState(this.measurement1_3,this.ntext1_3,this.measurement1_3State);
	},

	checkState:function(target,target2,state)
	{
		if(state=="canplay")
		{
			target.frame = 0;
			target2.frame = 0;
		}
		else if(state=="playedwithhint")
		{
			target.frame = 1;
			target2.frame = 0;
		}
		else if(state=="fullycomplete")
		{
			target.frame = 2;
			target2.frame = 1;
		}
		else if(state=="cannotplay")
		{
			target.frame = 3;
			target2.frame = 1;
		}
	},

	deductScore:function(game,value,flag,colorflag,hintparams,gamest)
    {
    	this.gamestate = gamest;
    	this.scoreVar+=value;
        this.scoreDeductGroup = game.add.group();

        this.deductScoreVar = game.add.sprite(650,150,'endscreendeductBg');
        this.deductScoreVar.scale.setTo(1.3,1.3);
        var deductScoreVaranim = this.deductScoreVar.animations.add('load');
        deductScoreVaranim.play(10,false);

        this.deductScoreVar.anchor.setTo(0.5);

        this.deductText = game.add.text(648,150,value);
        this.deductText.anchor.setTo(0.5);
        this.deductText.align = 'center';
        this.deductText.font = 'myfont';
        this.deductText.fontWeight = 'normal';

        this.deductText.fontSize = 30;
        this.deductText.fill = '#FFFFFF';

        this.scoreDeductGroup.add(this.deductScoreVar);
        this.scoreDeductGroup.add(this.deductText);

        game.add.tween(this.deductScoreVar).to({ x: 820, y: 22}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductScoreVar.scale).to({x: 0.2,y:0.2}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductText.scale).to({x: 0.5,y:0.5}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductText).to({ x: 820, y: 22}, 1500, 'Linear', true, 0).onComplete.add(function(){
            this.deductScoreVar.destroy();
            this.deductText.destroy();
            this.scoreDeductGroup.destroy();
            game.state.start(this.gamestate,true,false);
    	},this);

    },
	
	shutdown:function()
	{
		
	}
	
};