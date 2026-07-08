Game.numbersense2=function(){

};


Game.numbersense2.prototype={
	
	init:function()
	{
		_this = this;

		window.mcIcon = "sequence";
		
	},
			

	create:function(){		
		numberSense2 = true;
		 nativeApp.screenViewStringPass("Challenge_activity_list","numbersene2");

		_this.game.stage.disableVisibilityChange = true;
		_this.input.enabled = true;
			
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameSceneBg');

		_this.navBar = _this.add.sprite(0,0,'landingnavBar');

		_this.backBtn = _this.add.sprite(30,21,'landingbackBtn');
		_this.backBtn.anchor.setTo(0.5);
		_this.backBtn.inputEnabled = true;
		_this.backBtn.events.onInputDown.add(function()
		{
			numberSense2 = false;
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

		this.numbersenseText = this.add.sprite(140,20,'numbersenseText');
		this.numbersenseText.anchor.setTo(0.5);

		this.numbersenseTxt = this.add.text(140,23, "Number Sense");
		this.numbersenseTxt.fontSize = 18;

		if(window.languageSelected == "Gujarati")
                        {
                            this.numbersenseTxt.setText("નંબર જ્ઞાન");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            this.numbersenseTxt.setText("नंबर ज्ञान");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            this.numbersenseTxt.setText("ಸಂಖ್ಯೆ ಪರಿಚಯ");
                            this.numbersenseTxt.fontSize = 14;
                        }
                        else if(window.languageSelected == "Odiya")
                        {
                           this.numbersenseTxt.setText("ସଂଖ୍ୟା ପରିଚୟ");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                           this.numbersenseTxt.setText("संख्या ज्ञान");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                           this.numbersenseTxt.setText("అంకెల జ్ఞానం");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                           this.numbersenseTxt.setText("எண் அறிவு");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                           this.numbersenseTxt.setText("اعداد کی پہچان");
                        }
                        else
                        {
                        	this.numbersenseTxt.setText("Number Sense");
                        }
       
        this.numbersenseTxt.anchor.setTo(0.5);
        this.numbersenseTxt.align = 'center';

        this.numbersenseTxt.font = 'gradefont';
        
        this.numbersenseTxt.fill = '#FFFF00';

		this.numberMc = this.add.sprite(250,20,'sequenseMc');
		this.numberMc.anchor.setTo(0.5);


		this.numbersense1_1State = localStorage.getItem(window.avatarName+"sequence_NSSG_1_1state");
		this.numbersense1_2State = localStorage.getItem(window.avatarName+"sequence_NSSG_2_1state");
		this.numbersense1_3State = localStorage.getItem(window.avatarName+"sequence_NSSG_3_2state");
		this.numbersense1_4State = localStorage.getItem(window.avatarName+"sequence_NSSG_4_2state");
		this.numbersense1_5State = localStorage.getItem(window.avatarName+"sequence_NSSG_5_3state");
		this.numbersense1_6State = localStorage.getItem(window.avatarName+"sequence_NSSG_6_3state");
		
		this.addgameIcons();				
		
	},

	addgameIcons:function()
	{
		this.numbersense1_1 = this.add.sprite(this.world.centerX-250,200,"numbersense2_1");
		this.numbersense1_1.anchor.setTo(0.5);

		this.ntext1_1 = this.add.sprite(this.world.centerX-190,245,"n1");
		this.ntext1_1.anchor.setTo(0.5);

		if(this.numbersense1_1State=="playedwithhint"||this.numbersense1_1State=="canplay")
		{
			this.numbersense1_1.inputEnabled = true;
			this.numbersense1_1.events.onInputDown.add(function()
			{
				if(this.numbersense1_1State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_1_1level1');
				}
				else
					this.state.start('sequence_NSSG_1_1level1',true,false);
			},this);
		}

		this.numbersense1_2 = this.add.sprite(this.world.centerX,200,"numbersense2_1");
		this.numbersense1_2.anchor.setTo(0.5);

		this.ntext1_2 = this.add.sprite(this.world.centerX+60,245,"n2");
		this.ntext1_2.anchor.setTo(0.5);

		if(this.numbersense1_2State=="playedwithhint"||this.numbersense1_2State=="canplay")
		{
			this.numbersense1_2.inputEnabled = true;
			this.numbersense1_2.events.onInputDown.add(function()
			{
				if(this.numbersense1_2State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_2_1level1');
				}
				else
					this.state.start('sequence_NSSG_2_1level1',true,false);
			},this);
		}

		this.numbersense1_3 = this.add.sprite(this.world.centerX+250,200,"numbersense2_1");
		this.numbersense1_3.anchor.setTo(0.5);

		this.ntext1_3 = this.add.sprite(this.world.centerX+310,245,"n3");
		this.ntext1_3.anchor.setTo(0.5);

		if(this.numbersense1_3State=="playedwithhint"||this.numbersense1_3State=="canplay")
		{
			this.numbersense1_3.inputEnabled = true;
			this.numbersense1_3.events.onInputDown.add(function()
			{
				if(this.numbersense1_3State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_3_2level1');
				}
				else
					this.state.start('sequence_NSSG_3_2level1',true,false);
			},this);
		}

		this.numbersense1_4 = this.add.sprite(this.world.centerX-250,400,"numbersense2_2");
		this.numbersense1_4.anchor.setTo(0.5);

		this.ntext1_4 = this.add.sprite(this.world.centerX-190,445,"n4");
		this.ntext1_4.anchor.setTo(0.5);

		if(this.numbersense1_4State=="playedwithhint"||this.numbersense1_4State=="canplay")
		{
			this.numbersense1_4.inputEnabled = true;
			this.numbersense1_4.events.onInputDown.add(function()
			{
				if(this.numbersense1_4State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_4_2level1');
				}
				else
					this.state.start('sequence_NSSG_4_2level1',true,false);
			},this);
		}

		this.numbersense1_5 = this.add.sprite(this.world.centerX,400,"numbersense2_2");
		this.numbersense1_5.anchor.setTo(0.5);

		this.ntext1_5 = this.add.sprite(this.world.centerX+60,445,"n5");
		this.ntext1_5.anchor.setTo(0.5);

		if(this.numbersense1_5State=="playedwithhint"||this.numbersense1_5State=="canplay")
		{
			this.numbersense1_5.inputEnabled = true;
			this.numbersense1_5.events.onInputDown.add(function()
			{
				if(this.numbersense1_5State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_5_3level1');
				}
				else
					this.state.start('sequence_NSSG_5_3level1',true,false);
			},this);
		}

		this.numbersense1_6 = this.add.sprite(this.world.centerX+250,400,"numbersense2_2");
		this.numbersense1_6.anchor.setTo(0.5);

		this.ntext1_6 = this.add.sprite(this.world.centerX+310,445,"n6");
		this.ntext1_6.anchor.setTo(0.5);

		if(this.numbersense1_6State=="playedwithhint"||this.numbersense1_6State=="canplay")
		{
			this.numbersense1_6.inputEnabled = true;
			this.numbersense1_6.events.onInputDown.add(function()
			{
				if(this.numbersense1_6State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'sequence_NSSG_6_3level1');
				}
				else
					this.state.start('sequence_NSSG_6_3level1',true,false);
			},this);
		}

		


		this.checkState(this.numbersense1_1,this.ntext1_1,this.numbersense1_1State);
		this.checkState(this.numbersense1_2,this.ntext1_2,this.numbersense1_2State);
		this.checkState(this.numbersense1_3,this.ntext1_3,this.numbersense1_3State);
		this.checkState(this.numbersense1_4,this.ntext1_4,this.numbersense1_4State);
		this.checkState(this.numbersense1_5,this.ntext1_5,this.numbersense1_5State);
		this.checkState(this.numbersense1_6,this.ntext1_6,this.numbersense1_6State);
		
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