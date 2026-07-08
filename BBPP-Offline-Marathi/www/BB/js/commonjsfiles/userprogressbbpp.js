//userprogressbbpp


Game.userprogressbbpp=function(game){
	
};

var pie;
var _this;

Game.userprogressbbpp.prototype={

	init:function(user)
	{
		//window.avatarName = user;
	},

	preload:function(game){

		if(!window.avatarName) window.avatarName = "Fish";

		if(window.avatarName.toLowerCase() == "fish")
			game.load.atlas('avatar','BBPP/assets/fish.png','BBPP/assets/fish.json');
		else if(window.avatarName.toLowerCase() == "butterfly")
			game.load.atlas('avatar','BBPP/assets/butterfly.png','BBPP/assets/butterfly.json');
		else if(window.avatarName.toLowerCase() == "flower")
			game.load.atlas('avatar','BBPP/assets/flower.png','BBPP/assets/flower.json');
		else if(window.avatarName.toLowerCase() == "parrot")
			game.load.atlas('avatar','BBPP/assets/parrot.png','BBPP/assets/parrot.json');
		else if(window.avatarName.toLowerCase() == "sun")
			game.load.atlas('avatar','BBPP/assets/sun.png','BBPP/assets/sun.json');
		else if(window.avatarName.toLowerCase() == "tree")
			game.load.atlas('avatar','BBPP/assets/tree.png','BBPP/assets/tree.json');

		game.load.image('scrollWhite','BBPP/assets/scrollWhite.png');
		game.load.image('scrollBlack','BBPP/assets/scrollBlack.png');

		game.time.advancedTiming = true;
	},

	create:function(game){

		this.numberSystemsTotal = 79;//79
		this.geometryTotal = 27;//7
		this.algebraTotal = 25;//15

		//*brfore adding grade 8 games
		// this.numberSystemsTotal = 76;
		// this.geometryTotal = 19;//7
		// this.algebraTotal = 18;//15
	
		this.cnumberSystemsPlayedFromServer = 0;
		this.cgeometryPlayedFromServer = 0;
		this.calgebraPlayedFromServer = 0;

		
		this.numbersenseScore =0;
		this.measurementScore =0;
		this.numberoperationScore =0;

		
		this.gameModeBg = game.add.image(0,0,'gameModeBg');

		console.log(window.deviceId,"user progress window.deviceId");
		console.log(window.user ,"user progress window.user");
		console.log(window.user.grade ,"user progress window.user.grade");

		// var jsondata = {name:window.avatarName,deviceid:window.deviceId};
		var jsondata = {
			name: window.avatarName,
			deviceid: window.deviceId,
			grade: window.user.grade
		};

		_this = this;

		this.responseData = null;

		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			// var apiurl = "https://abbmath.klp.org.in/abbppchmprm/assets/userprogress/userprogress";
			//var apiurl = "https://10.0.2.2/abbppchmprm/assets/userprogress/userprogress";
			var apiurl = window.ApiConfig.url('userprogress');

		        console.log("RESTAPImgr_1.invokeRESTAPI_1: apiname:" + apiurl + "jsondata" + JSON.stringify(jsondata));
		        nativeApp.CallUserProgressBeforeFEtchingData();

		        $.ajax({
		            url: apiurl,
		            type: "POST",
		            dataType: "json",
		            // async:false, // set to false to perform a synchronous request
		            data: JSON.stringify(jsondata),
		            contentType: 'application/json; charset=UTF-8',
		            accepts: 'application/json',
		            success: function (jsonresp) {
		            	
		            	if(jsonresp.status == "success")
		            	{
		            		_this.responseData = jsonresp;
		            		console.log(_this.responseData);
		            		_this.afterDataFetched(game);

		            	}
		            	else
		            	{
		            		nativeApp.CallUserProgressFetchError();
		            	}
		                 
		            },
					error: function (xhr, status, error) {
						console.log("userprogress error status", status);
						console.log("userprogress error message", error);
						console.log("userprogress raw response", xhr && xhr.responseText);
						nativeApp.CallUserProgressFetchError();
					}
		            // error: function (error) {
		            // 	console.log(error);
		            //     nativeApp.CallUserProgressFetchError();
		            // }
		            
		        });
		}
		else{
			nativeApp.CallUserProgress();
		}


		this.gameModeNavBar = game.add.image(0,0,'gameModeNavBar');

		this.gameModeBackBtn = game.add.image(30,21,'gameModeBackBtn');
		this.gameModeBackBtn.anchor.setTo(0.5);
		this.gameModeBackBtn.inputEnabled = true;
		this.gameModeBackBtn.input.useHandCursor = true;
		this.gameModeBackBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();

			this.state.start('practiceModegradeSelectionScreenbbpp',true,false);	
			
		},this);

		this.gameModeShareBtn = game.add.image(920,21,'shareIcon');
        		this.gameModeShareBtn.anchor.setTo(0.5);
        		this.gameModeShareBtn.scale.setTo(0.8);
        		this.gameModeShareBtn.inputEnabled = true;
        		this.gameModeShareBtn.input.useHandCursor = true;
        		this.gameModeShareBtn.events.onInputDown.add(function()
        		{
        			this.clickSound = this.add.audio('ClickSound');
                	this.clickSound.play();
        			//if(appConfig.cordova && !appConfig.browser)
        			//{
        				nativeApp.ShareApp();
        			//}

        		},this);

		this.avatar = this.add.sprite(100,21,'avatar');
		this.avatar.scale.setTo(0.21);
		this.avatar.anchor.setTo(0.5);
		this.avatar.visible = false;
	},

	secondsToHms:function(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60); 
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "0 hr, ";
    var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "0 min ";
    //var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
    //return hDisplay + mDisplay + sDisplay; 
    return hDisplay + mDisplay; 
},

	afterDataFetched:function(game){

		//alert(this.responseData.status)

		this.practiceModeTime = parseInt(this.responseData.PMST);
		//this.challengeModeTime = parseInt(this.responseData.CMST);

		if(isNaN(this.practiceModeTime))
			this.practiceModeTime = 0;
		if(isNaN(this.challengeModeTime))
			this.challengeModeTime = 0;
 

		this.practiceModeTime = this.secondsToHms(this.practiceModeTime);
		//this.challengeModeTime = this.secondsToHms(this.challengeModeTime);

		this.cnumbersensePlayedFromServer = parseInt(this.responseData.CNS);
		this.cmeasurementPlayedFromServer = parseInt(this.responseData.CM);
		this.cnumberoperationPlayedFromServer = parseInt(this.responseData.CNO);

		this.cnumbersPlayedFromServer = parseInt(this.responseData.CNSN);
		this.csequencePlayedFromServer = parseInt(this.responseData.CNSS);
		this.ccomparisonPlayedFromServer = parseInt(this.responseData.CNSC);
		this.cplacevaluePlayedFromServer = parseInt(this.responseData.CNSPV);
		this.cfractionPlayedFromServer = parseInt(this.responseData.CNSF);

		this.cadditionPlayedFromServer = parseInt(this.responseData.CNOA);
		this.csubtractionPlayedFromServer = parseInt(this.responseData.CNOS);
		this.cmultiplicationPlayedFromServer = parseInt(this.responseData.CNOM);
		this.cdivisionPlayedFromServer = parseInt(this.responseData.CNOD);

		this.clengthPlayedFromServer = parseInt(this.responseData.CML);
		this.cweightPlayedFromServer = parseInt(this.responseData.CMW);
		this.ctimePlayedFromServer = parseInt(this.responseData.CMTi);
		this.cvolumePlayedFromServer = parseInt(this.responseData.CMV);


		this.numbersensePersent = Math.round((parseInt(this.responseData.PNS)/this.numberSystemsTotal)*100);
		this.algebraPersent = Math.round((parseInt(this.responseData.PALG)/this.algebraTotal)*100);//PALG
		this.geometryPersent = Math.round((parseInt(this.responseData.PGM)/this.geometryTotal)*100);

		this.passcount = parseInt(this.responseData.CNSP);
		this.failcount = parseInt(this.responseData.CNSFF);
		this.hintcount = parseInt(this.responseData.CNSH);
		this.totalgameplayed = parseInt(this.responseData.CNST);

		this.passcount1 = parseInt(this.responseData.CMP);
		this.failcount1 = parseInt(this.responseData.CMF);
		this.hintcount1 = parseInt(this.responseData.CMH);
		this.totalgameplayed1 = parseInt(this.responseData.CMT);

		this.passcount2 = parseInt(this.responseData.CNOP);
		this.failcount2 = parseInt(this.responseData.CNOF);
		this.hintcount2 = parseInt(this.responseData.CNOH);
		this.totalgameplayed2 = parseInt(this.responseData.CNOT);


		if(isNaN(this.hintcount))
			this.hintcount = 0;
		if(isNaN(this.hintcount1))
			this.hintcount1 = 0;
		if(isNaN(this.hintcount2))
			this.hintcount2 = 0;

		

		if(this.hintcount > this.passcount)
            this.passcount = this.hintcount+2;
        if(this.hintcount1 > this.passcount1)
            this.passcount1 = this.hintcount1+2;
        if(this.hintcount2 > this.passcount2)
            this.passcount2 = this.hintcount2+2;



		console.log("1 "+this.passcount);
		console.log("2 "+this.hintcount);
		console.log("3 "+this.numbersensescoreTotal);
		console.log("4 "+this.totalgameplayed);

			
			if(this.totalgameplayed>0)
				this.numbersenseScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
			if(this.totalgameplayed1>0)
				this.measurementScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
			if(this.totalgameplayed2>0)
				this.numberoperationScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
			
			
		console.log(this.numbersenseScore, this.measurementScore, this.numberoperationScore);

		var practiceText = "Practice";
		var challengeText = "Challenge";
		var TotalLearningText = "Total learning time";
		var completedText = "Completed";
		var scoreText = "Score";

		if(window.languageSelected == "Kannada")
		{
			practiceText = "ಪ್ರಾಕ್ಟೀಸ್";
			challengeText = "ಚಾಲೆಂಜ್";
			TotalLearningText = "ಒಟ್ಟು ಕಲಿಕೆಯ ಸಮಯ :";
			completedText = "ಪೂರ್ಣ";
			scoreText = "ಅಂಕ";
		}
		else if(window.languageSelected == "Hindi")
		{
			practiceText = "प्रैक्टिस";
			challengeText = "चैलेंज";
			TotalLearningText = "कुल सीखने का समय :";
			completedText = "पूर्ण";
			scoreText = "स्कोर";
		}
		else if(window.languageSelected == "Odiya")
		{
			practiceText = "ପ୍ରାକ୍ଟିସ";
			challengeText = "ଚ୍ୟାଲେଞ୍ଜ";
			TotalLearningText = "ଟୋଟାଲ  ଲେଆର୍ନିଙ୍ଗ  ର୍ଟମେ :";
			completedText = "ସମ୍ପୂର୍ଣ୍ଣ";
			scoreText = "ପ୍ରାପ୍ତାଙ୍କ";
		}
		else if(window.languageSelected == "Gujarati")
		{
			practiceText = "અભ્યાસ";
			challengeText = "પડકાર";
			TotalLearningText = "કુલ ભણવાનો સમય :";
			completedText = "પૂર્ણ";
			scoreText = "આંક";
		}
		else
		{
			practiceText = "Practice";
			challengeText = "Challenge";
			TotalLearningText = "Total learning time :";
			completedText = "Completed";
			scoreText = "Score";
		}

		this.graphics = game.add.graphics(10, 50);
		this.graphics.lineStyle(2, 0x000000, 1);
		this.graphics.beginFill(0xFFFF0B,0.5);
    	this.graphics.drawRect(50, 10, 400, 40);

    	this.graphics2 = game.add.graphics(10, 90);
		this.graphics2.lineStyle(2, 0x000000, 1);
		this.graphics2.beginFill(0xFFFFFF,1);
    	this.graphics2.drawRect(50, 10, 400, 430);

		this.practicemodeTxt = this.add.text(250, 80,practiceText);
		this.practicemodeTxt.anchor.setTo(0.5);
		this.practicemodeTxt.align = 'center';
		this.practicemodeTxt.fontSize = 32;
		this.practicemodeTxt.fontWeight = 'normal';
		this.practicemodeTxt.fill = '#000000';
		this.practicemodeTxt.wordWrap = true;
		this.practicemodeTxt.wordWrapWidth = 500;

		this.practicemodeTotalLearningTimeTxt = this.add.text(180, 118,TotalLearningText);
		this.practicemodeTotalLearningTimeTxt.anchor.setTo(0.5);
		this.practicemodeTotalLearningTimeTxt.align = 'center';
		this.practicemodeTotalLearningTimeTxt.fontSize = 24;
		this.practicemodeTotalLearningTimeTxt.fontWeight = 'normal';
		this.practicemodeTotalLearningTimeTxt.fill = '#000000';
		this.practicemodeTotalLearningTimeTxt.wordWrap = true;
		this.practicemodeTotalLearningTimeTxt.wordWrapWidth = 500;

		this.timeIcon = game.add.sprite(320,116,'timeIcon');
    	this.timeIcon.frame = 0;
    	this.timeIcon.anchor.setTo(0.5);
    	this.timeIcon.scale.setTo(1.2);

    	//alert(this.practiceModeTime);

    	this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
		this.practicemodeTimeTxt.anchor.setTo(0.5);
		this.practicemodeTimeTxt.align = 'center';
		this.practicemodeTimeTxt.fontSize = 18;
		this.practicemodeTimeTxt.fontWeight = 'normal';
		this.practicemodeTimeTxt.fill = '#000000';
		this.practicemodeTimeTxt.wordWrap = true;
		this.practicemodeTimeTxt.wordWrapWidth = 500;

		this.addScrollingtouserprogress(game, completedText);

	},

	addScrollingtouserprogress:function(game, completedText)
	{


		//_this.groupScroll = _this.add.group();

		this.numberSenseTree = game.add.sprite(160,210,'MicroConceptTree');
    	this.numberSenseTree.frame = 0;
    	this.numberSenseTree.anchor.setTo(0.5);
    	this.numberSenseTree.scale.setTo(0.85,0.42);
    	this.numberSenseTree.inputEnabled = true;
    	this.numberSenseTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Number Systems",this.responseData,this.responseData);
    	},this);

    	this.numberSenseTreeTxt = this.add.text(160, 200, window.selctedLang.McTopicText1);
		this.numberSenseTreeTxt.anchor.setTo(0.5);
		this.numberSenseTreeTxt.align = 'center';
		this.numberSenseTreeTxt.fontSize = 12;
		this.numberSenseTreeTxt.fontWeight = 'normal';
		this.numberSenseTreeTxt.fill = '#FFFFFF';
		this.numberSenseTreeTxt.wordWrap = true;
		this.numberSenseTreeTxt.wordWrapWidth = 500;

    	this.algebraTree = game.add.sprite(160,315,'MicroConceptTree');
    	this.algebraTree.frame = 1;
    	this.algebraTree.anchor.setTo(0.5);
    	this.algebraTree.scale.setTo(0.85,0.42);//0.7,0.38
    	this.algebraTree.inputEnabled = true;
    	this.algebraTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Algebra",this.responseData,this.responseData);
    	},this);

    	this.algebraTreeTxt = this.add.text(160, 305, window.selctedLang.McTopicText2);
		this.algebraTreeTxt.anchor.setTo(0.5);
		this.algebraTreeTxt.align = 'center';
		this.algebraTreeTxt.fontSize = 12;
		this.algebraTreeTxt.fontWeight = 'normal';
		this.algebraTreeTxt.fill = '#FFFFFF';
		this.algebraTreeTxt.wordWrap = true;
		this.algebraTreeTxt.wordWrapWidth = 500;

    	this.geometryTree = game.add.sprite(160,420,'MicroConceptTree');
    	this.geometryTree.frame = 2;
    	this.geometryTree.anchor.setTo(0.5);
    	this.geometryTree.scale.setTo(0.85,0.42);
    	this.geometryTree.inputEnabled = true;
    	this.geometryTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Geometry",this.responseData,this.responseData);
    	},this);

    	this.geometryTreeTxt = this.add.text(160, 410, window.selctedLang.McTopicText4);
		this.geometryTreeTxt.anchor.setTo(0.5);
		this.geometryTreeTxt.align = 'center';
		this.geometryTreeTxt.fontSize = 12;
		this.geometryTreeTxt.fontWeight = 'normal';
		this.geometryTreeTxt.fill = '#FFFFFF';
		this.geometryTreeTxt.wordWrap = true;
		this.geometryTreeTxt.wordWrapWidth = 500;
		this.geometryTreeTxt.lineSpacing = -10;

		this.completedTxt = this.add.text(320, 140,completedText);
		this.completedTxt.anchor.setTo(0.5);
		this.completedTxt.align = 'center';
		this.completedTxt.fontSize = 14;
		this.completedTxt.fontWeight = 'normal';
		this.completedTxt.fill = '#000000';
		this.completedTxt.wordWrap = true;
		this.completedTxt.wordWrapWidth = 500;

		this.numbersystemsPrgress = game.add.sprite(320,200,'progressCircle');
    	this.numbersystemsPrgress.frame = this.numbersensePersent-1;
    	this.numbersystemsPrgress.anchor.setTo(0.5);
    	this.numbersystemsPrgress.scale.setTo(1.5);


    	this.numbersystemsPrgress.inputEnabled = true;
    	this.numbersystemsPrgress.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Number Systems",this.responseData,this.responseData);
    	},this);

    	this.numbersystemsPrgressTxt = this.add.text(320, 200, this.numbersensePersent+'%');
		this.numbersystemsPrgressTxt.anchor.setTo(0.5);
		this.numbersystemsPrgressTxt.align = 'center';
		this.numbersystemsPrgressTxt.fontSize = 20;
		this.numbersystemsPrgressTxt.fontWeight = 'normal';
		this.numbersystemsPrgressTxt.fill = '#000000';
		this.numbersystemsPrgressTxt.wordWrap = true;
		this.numbersystemsPrgressTxt.wordWrapWidth = 500;

		this.numbersystemsPrgressTotalTxt = this.add.text(390, 200, this.responseData.PNS+'/'+this.numberSystemsTotal);
		this.numbersystemsPrgressTotalTxt.anchor.setTo(0.5);
		this.numbersystemsPrgressTotalTxt.align = 'center';
		this.numbersystemsPrgressTotalTxt.fontSize = 20;
		this.numbersystemsPrgressTotalTxt.fontWeight = 'normal';
		this.numbersystemsPrgressTotalTxt.fill = '#000000';
		this.numbersystemsPrgressTotalTxt.wordWrap = true;
		this.numbersystemsPrgressTotalTxt.wordWrapWidth = 500;

    	this.algebraPrgress = game.add.sprite(320,310,'progressCircle');
    	this.algebraPrgress.frame = this.algebraPersent-1;
    	this.algebraPrgress.anchor.setTo(0.5);
    	this.algebraPrgress.scale.setTo(1.5);
    	this.algebraPrgress.inputEnabled = true;
    	this.algebraPrgress.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Algebra",this.responseData,this.responseData);
    	},this);

    	this.algebraPrgressTxt = this.add.text(320, 310, this.algebraPersent+'%');
		this.algebraPrgressTxt.anchor.setTo(0.5);
		this.algebraPrgressTxt.align = 'center';
		this.algebraPrgressTxt.fontSize = 20;
		this.algebraPrgressTxt.fontWeight = 'normal';
		this.algebraPrgressTxt.fill = '#000000';
		this.algebraPrgressTxt.wordWrap = true;
		this.algebraPrgressTxt.wordWrapWidth = 500;

		this.algebraPrgressTotalTxt = this.add.text(390, 310, this.responseData.PALG+'/'+this.algebraTotal);
		this.algebraPrgressTotalTxt.anchor.setTo(0.5);
		this.algebraPrgressTotalTxt.align = 'center';
		this.algebraPrgressTotalTxt.fontSize = 20;
		this.algebraPrgressTotalTxt.fontWeight = 'normal';
		this.algebraPrgressTotalTxt.fill = '#000000';
		this.algebraPrgressTotalTxt.wordWrap = true;
		this.algebraPrgressTotalTxt.wordWrapWidth = 500;

    	this.geometryPrgress = game.add.sprite(320,420,'progressCircle');
    	this.geometryPrgress.frame = this.geometryPersent-1;
    	this.geometryPrgress.anchor.setTo(0.5);
    	this.geometryPrgress.scale.setTo(1.5);

    	this.geometryPrgress.inputEnabled = true;
    	this.geometryPrgress.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2bbpp',true,false,"Geometry",this.responseData,this.responseData);
    	},this);

    	this.geometryPrgressTxt = this.add.text(320, 420, this.geometryPersent+'%');
		this.geometryPrgressTxt.anchor.setTo(0.5);
		this.geometryPrgressTxt.align = 'center';
		this.geometryPrgressTxt.fontSize = 20;
		this.geometryPrgressTxt.fontWeight = 'normal';
		this.geometryPrgressTxt.fill = '#000000';
		this.geometryPrgressTxt.wordWrap = true;
		this.geometryPrgressTxt.wordWrapWidth = 500;

		this.geometryPrgressTotalTxt = this.add.text(390, 420, this.responseData.PGM+'/'+this.geometryTotal);
		this.geometryPrgressTotalTxt.anchor.setTo(0.5);
		this.geometryPrgressTotalTxt.align = 'center';
		this.geometryPrgressTotalTxt.fontSize = 20;
		this.geometryPrgressTotalTxt.fontWeight = 'normal';
		this.geometryPrgressTotalTxt.fill = '#000000';
		this.geometryPrgressTotalTxt.wordWrap = true;
		this.geometryPrgressTotalTxt.wordWrapWidth = 500;
	},
	
}
