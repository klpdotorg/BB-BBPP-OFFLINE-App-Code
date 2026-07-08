Game.selectgrade8MicroConceptScreen=function(){

};

Game.selectgrade8MicroConceptScreen.prototype={

	game:null,
	selected:false,
	downloading:false,
	numberSense1Downloaded:false,
	measurement1Downloaded:false,
	numperoperation1Downloaded:false,
	_this : this,

	init:function()
	{

		if(app.cordova)
		{
			if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
			{
				//absdsjsapi.syncTelemetryData();
			}
			document.addEventListener("online", this.syncTelFunc, false);
		}
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			//absdsjsapi.syncTelemetryData();
		}
	},

	create:function(game){		


		nativeApp.screenViewStringPass("Practice_topic_selection_screen","grade8MicroConceptScreen");

		this.game = game;

		_this = this;
		selectgrade8MicroConcept = true;
		
			app.gradeScreen = true;
			game.input.enabled = true;
			this.gradeTree = [];
			this.gradeTreeTxt = [];
			this.gameArray = [];
			gradeScreen = true;
			this.background = game.add.tileSprite(0,0,game.world.width,game.world.height,'McBg');
			this.gradeBackBtn = game.add.sprite(-5,3,'gradeSceneBackBtn');
			this.gradeBackBtn.inputEnabled = true;
			this.gradeBackBtn.input.useHandCursor = true;
			this.gradeBackBtn.events.onInputDown.add(function(){
				this.clickSound = _this.add.audio('ClickSound');
	        	this.clickSound.play();
				selectgrade6MicroConcept = false;
				game.state.start('practiceModegradeSelectionScreenbbpp',true,false);
			},this);

			this.gameModeShareBtn = game.add.image(920,20,'shareIcon');
			this.gameModeShareBtn.anchor.setTo(0.5);
			this.gameModeShareBtn.scale.setTo(0.8);
			this.gameModeShareBtn.inputEnabled = true;
			this.gameModeShareBtn.input.useHandCursor = true;
			this.gameModeShareBtn.events.onInputDown.add(function()
			{
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
        		nativeApp.ShareApp();
        	},this);

			this.microConceptTopics(game,300,220,window.selctedLang.McTopicText1,"NUMBER SYSTEMS","tree1",0);
			this.microConceptTopics(game,480,350,window.selctedLang.McTopicText2,"ALGEBRA","tree2",1);
			this.microConceptTopics(game,670,220,window.selctedLang.McTopicText4,"GEOMETRY","tree3",2);
	},

	microConceptTopics:function(game,x,y,lang,name,key,arrIndex)
	{
		//this.gradeTree[arrIndex] = game.add.sprite(x,y,key);
		this.gradeTree[arrIndex] = game.add.sprite(x,y,'MicroConceptTree');

		this.gradeTree[arrIndex].anchor.setTo(0.5);
		this.gradeTree[arrIndex].scale.setTo(1.3);
		this.gradeTree[arrIndex].name = name;
		this.gradeTree[arrIndex].frame = arrIndex;
		this.gradeTree[arrIndex].inputEnabled = true;
		this.gradeTree[arrIndex].input.useHandCursor = true;
		this.gradeTree[arrIndex].events.onInputDown.add(this.topicSelected,this);
		this.gradeTreeTxt[arrIndex] = this.add.text(x, y-40, lang+'\n');
		this.gradeTreeTxt[arrIndex].anchor.setTo(0.5);
		this.gradeTreeTxt[arrIndex].align = 'center';
		this.gradeTreeTxt[arrIndex].fontSize = 20;//16;
		this.gradeTreeTxt[arrIndex].fontWeight = 'normal';
		this.gradeTreeTxt[arrIndex].fill = '#FFFFFF';
		this.gradeTreeTxt[arrIndex].wordWrap = true;
		this.gradeTreeTxt[arrIndex].wordWrapWidth = 500;		
	},
	
	onMouseOver:function(target)
	{	
	},
	
	topicSelected:function(target)
	{			
        this.clickSound = _this.add.audio('ClickSound');
        this.clickSound.play();

        if(target.name=="NUMBER SYSTEMS")
		{
			this.state.start('grade8NumberSystems',true,false);
		}
		else if(target.name=="ALGEBRA")
		{
			this.state.start('grade8Algebra',true,false);
		}
		else if(target.name=="GEOMETRY")
		{
			this.state.start('grade8Geometry',true,false);
		}
		else
		{
			this.state.start('grade8NumberSystems',true,false);
		}			
	},

	shutdown:function()
	{
		document.removeEventListener("online", _this.syncTelFunc, false);
	}
	
};