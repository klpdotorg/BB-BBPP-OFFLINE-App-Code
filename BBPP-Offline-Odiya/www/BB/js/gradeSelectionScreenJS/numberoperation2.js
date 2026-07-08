Game.numberoperation2=function(){

};


Game.numberoperation2.prototype={
	
	init:function()
	{
		_this = this;

		window.mcIcon = "subtraction";
		
	},
			

	create:function(){	

		numberOpertaion2 = true;	

		nativeApp.screenViewStringPass("Challenge_activity_list","numberOperation2");

		_this.game.stage.disableVisibilityChange = true;
		_this.input.enabled = true;
			
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameSceneBg');

		_this.navBar = _this.add.sprite(0,0,'landingnavBar');

		_this.backBtn = _this.add.sprite(30,21,'landingbackBtn');
		_this.backBtn.anchor.setTo(0.5);
		_this.backBtn.inputEnabled = true;
		_this.backBtn.events.onInputDown.add(function()
		{
			numberOpertaion2 = false;
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

		this.numberoperationText = this.add.sprite(150,20,'numberoperationText');
		this.numberoperationText.anchor.setTo(0.5);

		this.numberoperationTxt = this.add.text(150,23, "Number Operations");
		this.numberoperationTxt.fontSize = 18;
		
		if(window.languageSelected == "Tamil")
		{
			this.numberoperationText.scale.set(1.2,1);
			this.numberoperationText.x = 180;
		}

		if(window.languageSelected == "Gujarati")
                        {
                            this.numberoperationTxt.setText("નંબર સંચાલન");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            this.numberoperationTxt.setText("नंबर संचालन");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            this.numberoperationTxt.setText("ಮೂಲಕ್ರಿಯೆಗಳು");
                            this.numberoperationTxt.fontSize = 16;
                        }
                        else if(window.languageSelected == "Odiya")
                        {
                           this.numberoperationTxt.setText("ସଂଖ୍ୟା ସଂଚାଳନ");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                           this.numberoperationTxt.setText("गणिती क्रिया");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                           this.numberoperationTxt.setText("అంకెల పరికర్మములు");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                           this.numberoperationTxt.setText("எண் செயல்பாடுகள்");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                           this.numberoperationTxt.setText("اعدادی اعمال");
                        }
                        else
                        {
                        	this.numberoperationTxt.setText("Number Operations");
                        }
       
        this.numberoperationTxt.anchor.setTo(0.5);
        this.numberoperationTxt.align = 'center';

        this.numberoperationTxt.font = 'gradefont';
        
        this.numberoperationTxt.fill = '#FFFF00';

		this.additionMc = this.add.sprite(270,20,'subtractionMc');
		this.additionMc.anchor.setTo(0.5);
		
		if(window.languageSelected == "Tamil")
		{
			this.additionMc.x = 320;
			this.numberoperationTxt.x = 180;

		}


		this.numberoperation1_1State = localStorage.getItem(window.avatarName+"subtraction_NOSG_1_1state");
		this.numberoperation1_2State = localStorage.getItem(window.avatarName+"subtraction_NOSG_2_1state");
		this.numberoperation1_3State = localStorage.getItem(window.avatarName+"subtraction_NOSG_3_2state");
		this.numberoperation1_4State = localStorage.getItem(window.avatarName+"subtraction_NOSG_4_3state");
		
		this.addgameIcons();				
		
	},

	addgameIcons:function()
	{
		this.numberoperation1_1 = this.add.sprite(this.world.centerX-250,200,"numberoperation1_1");
		this.numberoperation1_1.anchor.setTo(0.5);

		this.ntext1_1 = this.add.sprite(this.world.centerX-190,245,"n1");
		this.ntext1_1.anchor.setTo(0.5);

		if(this.numberoperation1_1State=="playedwithhint"||this.numberoperation1_1State=="canplay")
		{
			this.numberoperation1_1.inputEnabled = true;
			this.numberoperation1_1.events.onInputDown.add(function()
			{
				if(this.numberoperation1_1State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'subtraction_NOAG_1_1level1');
				}
				else
					this.state.start('subtraction_NOAG_1_1level1',true,false);
			},this);
		}

		this.numberoperation1_2 = this.add.sprite(this.world.centerX,200,"numberoperation1_2");
		this.numberoperation1_2.anchor.setTo(0.5);

		this.ntext1_2 = this.add.sprite(this.world.centerX+60,245,"n2");
		this.ntext1_2.anchor.setTo(0.5);

		if(this.numberoperation1_2State=="playedwithhint"||this.numberoperation1_2State=="canplay")
		{
			this.numberoperation1_2.inputEnabled = true;
			this.numberoperation1_2.events.onInputDown.add(function()
			{
				if(this.numberoperation1_2State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'subtraction_NOAG_2_1level1');
				}
				else
					this.state.start('subtraction_NOAG_2_1level1',true,false);
			},this);
		}

		this.numberoperation1_3 = this.add.sprite(this.world.centerX+250,200,"numberoperation1_2");
		this.numberoperation1_3.anchor.setTo(0.5);

		this.ntext1_3 = this.add.sprite(this.world.centerX+310,245,"n3");
		this.ntext1_3.anchor.setTo(0.5);

		if(this.numberoperation1_3State=="playedwithhint"||this.numberoperation1_3State=="canplay")
		{
			this.numberoperation1_3.inputEnabled = true;
			this.numberoperation1_3.events.onInputDown.add(function()
			{
				if(this.numberoperation1_3State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'subtraction_NOAG_3_2level1');
				}
				else
					this.state.start('subtraction_NOAG_3_2level1',true,false);
			},this);
		}

		this.numberoperation1_4 = this.add.sprite(this.world.centerX-250,400,"numberoperation1_2");
		this.numberoperation1_4.anchor.setTo(0.5);

		this.ntext1_4 = this.add.sprite(this.world.centerX-190,445,"n4");
		this.ntext1_4.anchor.setTo(0.5);

		if(this.numberoperation1_4State=="playedwithhint"||this.numberoperation1_4State=="canplay")
		{
			this.numberoperation1_4.inputEnabled = true;
			this.numberoperation1_4.events.onInputDown.add(function()
			{
				if(this.numberoperation1_4State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'subtraction_NOAG_4_3level1');
				}
				else
					this.state.start('subtraction_NOAG_4_3level1',true,false);
			},this);
		}


		this.checkState(this.numberoperation1_1,this.ntext1_1,this.numberoperation1_1State);
		this.checkState(this.numberoperation1_2,this.ntext1_2,this.numberoperation1_2State);
		this.checkState(this.numberoperation1_3,this.ntext1_3,this.numberoperation1_3State);
		this.checkState(this.numberoperation1_4,this.ntext1_4,this.numberoperation1_4State);

		//this.ntext1_1.visible = false;
		
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