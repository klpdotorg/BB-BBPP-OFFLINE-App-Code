Game.userprogress2=function(game){
	
};

var pie;

Game.userprogress2.prototype={

    init:function(selectMC,responseData){
        this.selectedMc = selectMC;
        this.responseData = responseData;
    },

	preload:function(game){
        if(window.avatarName == "Fish")
            this.load.image("avatar","../fish.jpg");
        else if(window.avatarName == "ButterFly")
            this.load.image("avatar","../butterfly.jpg");
        else if(window.avatarName == "Flower")
            this.load.image("avatar","../flower.jpg");
        else if(window.avatarName == "Parrot")
            this.load.image("avatar","../parrot.jpg");
        else if(window.avatarName == "Sun")
            this.load.image("avatar","../sun.jpg");
        else if(window.avatarName == "Tree")
            this.load.image("avatar","../tree.jpg");

	},

	create:function(game){


		this.gameModeBg = game.add.image(0,0,'gameModeBg');

		this.gameModeNavBar = game.add.image(0,0,'gameModeNavBar');

		this.gameModeBackBtn = game.add.image(30,21,'gameModeBackBtn');
		this.gameModeBackBtn.anchor.setTo(0.5);
		this.gameModeBackBtn.inputEnabled = true;
		this.gameModeBackBtn.input.useHandCursor = true;
		this.gameModeBackBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
			this.state.start('userprogress',true,false);
			
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

        this.numbersTotal = 8;
        this.squenceTotal = 33;
        this.comparisonTotal = 14;
        this.placevalueTotal = 14;
        this.FractionTotal = 23;

        this.lengthTotal = 10;
        this.weightTotal = 10;
        this.timeTotal = 10;
        this.volumeTotal = 9;

        this.additionTotal = 7;
        this.subtractionTotal = 7;
        this.multiplicationTotal = 14;
        this.divisionTotal = 14;

        this.cnumbersTotal = 2;
        this.csequenceTotal = 6;
        this.ccomparisonTotal = 4;
        this.cplacevalueTotal = 6;
        this.cfractionTotal = 4;

        this.cadditionTotal = 4;
        this.csubtractionTotal = 4;
        this.cmultiplicationTotal = 5;
        this.cdivisionTotal = 4;

        this.clengthTotal = 3;
        this.cweightTotal = 3;
        this.ctimeTotal = 3;
        this.cvolumeTotal = 3;



        this.numbersScore = 0;
                this.sequenceScore = 0;
                this.comparisonScore = 0;
                this.fractionScore = 0;
                this.placevalueScore =0;


        this.lengthScore = 0;
                this.weightScore = 0;
                this.timeScore = 0;
                this.volumeScore = 0;


                this.additionScore = 0;
                this.subtractionScore = 0;
                this.multiplicationScore = 0;
                this.divisionScore = 0;



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



		this.avatar = this.add.sprite(100,21,'avatar');
		this.avatar.scale.setTo(0.21);
		this.avatar.anchor.setTo(0.5);


		this.graphics = game.add.graphics(10, 50);
		this.graphics.lineStyle(2, 0x000000, 1);
		this.graphics.beginFill(0xFFFF0B,0.5);
    	this.graphics.drawRect(50, 10, 400, 40);

    	this.graphics1 = game.add.graphics(450, 50);
		this.graphics1.lineStyle(2, 0x000000, 1);
		this.graphics1.beginFill(0xFFFF0B,0.5);
    	this.graphics1.drawRect(50, 10, 400, 40);

    	this.graphics2 = game.add.graphics(10, 90);
		this.graphics2.lineStyle(2, 0x000000, 1);
		this.graphics2.beginFill(0xFFFFFF,1);
    	this.graphics2.drawRect(50, 10, 400, 430);

    	this.graphics3 = game.add.graphics(450, 90);
		this.graphics3.lineStyle(2, 0x000000, 1);
		this.graphics3.beginFill(0xFFFFFF,1);
    	this.graphics3.drawRect(50, 10, 400, 430);

    	this.graphics4 = game.add.graphics(10, 120);
		this.graphics4.lineStyle(2, 0x000000, 1);
		//this.graphics2.beginFill(0xFFFF0B,0.5);
    	this.graphics4.drawRect(70, 10, 360, 390);

    	this.graphics5 = game.add.graphics(450, 120);
		this.graphics5.lineStyle(2, 0x000000, 1);
		//this.graphics2.beginFill(0xFFFF0B,0.5);
    	this.graphics5.drawRect(70, 10, 360, 390);





        this.practicemodeTxt = this.add.text(140, 80,practiceText);
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

        

        this.cpracticemodeTxt = this.add.text(580, 80,challengeText);
        this.cpracticemodeTxt.anchor.setTo(0.5);
        this.cpracticemodeTxt.align = 'center';
        this.cpracticemodeTxt.fontSize = 32;
        this.cpracticemodeTxt.fontWeight = 'normal';
        this.cpracticemodeTxt.fill = '#000000';
        this.cpracticemodeTxt.wordWrap = true;
        this.cpracticemodeTxt.wordWrapWidth = 500;

        this.challengemodeTotalLearningTimeTxt = this.add.text(620, 118,TotalLearningText);
        this.challengemodeTotalLearningTimeTxt.anchor.setTo(0.5);
        this.challengemodeTotalLearningTimeTxt.align = 'center';
        this.challengemodeTotalLearningTimeTxt.fontSize = 24;
        this.challengemodeTotalLearningTimeTxt.fontWeight = 'normal';
        this.challengemodeTotalLearningTimeTxt.fill = '#000000';
        this.challengemodeTotalLearningTimeTxt.wordWrap = true;
        this.challengemodeTotalLearningTimeTxt.wordWrapWidth = 500;

        this.ctimeIcon = game.add.sprite(760,116,'timeIcon');
        this.ctimeIcon.frame = 0;
        this.ctimeIcon.anchor.setTo(0.5);
        this.ctimeIcon.scale.setTo(1.2);



        this.completedTxt = this.add.text(320, 140,completedText);
        this.completedTxt.anchor.setTo(0.5);
        this.completedTxt.align = 'center';
        this.completedTxt.fontSize = 14;
        this.completedTxt.fontWeight = 'normal';
        this.completedTxt.fill = '#000000';
        this.completedTxt.wordWrap = true;
        this.completedTxt.wordWrapWidth = 500;

        this.ccompletedTxt = this.add.text(700, 140,completedText);
        this.ccompletedTxt.anchor.setTo(0.5);
        this.ccompletedTxt.align = 'center';
        this.ccompletedTxt.fontSize = 14;
        this.ccompletedTxt.fontWeight = 'normal';
        this.ccompletedTxt.fill = '#000000';
        this.ccompletedTxt.wordWrap = true;
        this.ccompletedTxt.wordWrapWidth = 500;

        this.cScoreTxt = this.add.text(830, 140,scoreText);
        this.cScoreTxt.anchor.setTo(0.5);
        this.cScoreTxt.align = 'center';
        this.cScoreTxt.fontSize = 14;
        this.cScoreTxt.fontWeight = 'normal';
        this.cScoreTxt.fill = '#000000';
        this.cScoreTxt.wordWrap = true;
        this.cScoreTxt.wordWrapWidth = 500;


        if(this.selectedMc=="NumberSense")
        {
            this.gotoAddNSMCTopics(game);
        }
        else if(this.selectedMc=="Measurement")
        {
            this.gotoAddMMCTopics(game);
        }
        else if(this.selectedMc=="NumberOperation")
        {
            this.gotoAddNOMCTopics(game);
        }

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

    gotoAddNSMCTopics:function(game){

        this.practiceModeTime = parseInt(this.responseData.PMNSST);
        this.challengeModeTime = parseInt(this.responseData.CMNSST);


        if(isNaN(this.practiceModeTime))
            this.practiceModeTime = 0;
        if(isNaN(this.challengeModeTime))
            this.challengeModeTime = 0;


        this.practiceModeTime = this.secondsToHms(this.practiceModeTime);
        this.challengeModeTime = this.secondsToHms(this.challengeModeTime);

        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.challengemodeTimeTxt = this.add.text(840, 118,this.challengeModeTime);
        this.challengemodeTimeTxt.anchor.setTo(0.5);
        this.challengemodeTimeTxt.align = 'center';
        this.challengemodeTimeTxt.fontSize = 18;
        this.challengemodeTimeTxt.fontWeight = 'normal';
        this.challengemodeTimeTxt.fill = '#000000';
        this.challengemodeTimeTxt.wordWrap = true;
        this.challengemodeTimeTxt.wordWrapWidth = 500;

        this.numbersPersent = Math.round((parseInt(this.responseData.PNSN)/this.numbersTotal)*100);
        this.sequencePersent = Math.round((parseInt(this.responseData.PNSS)/this.squenceTotal)*100);
        this.comparisonPersent = Math.round((parseInt(this.responseData.PNSC)/this.comparisonTotal)*100);
        this.placevaluePersent = Math.round((parseInt(this.responseData.PNSPV)/this.placevalueTotal)*100);
        this.fractionPersent = Math.round((parseInt(this.responseData.PNSF)/this.FractionTotal)*100);


        this.cnumbersPersent = Math.round((parseInt(this.responseData.CNSN)/this.cnumbersTotal)*100);
        this.csequencePersent = Math.round((parseInt(this.responseData.CNSS)/this.csequenceTotal)*100);
        this.ccomparisonPersent = Math.round((parseInt(this.responseData.CNSC)/this.ccomparisonTotal)*100);
        this.cplacevaluePersent = Math.round((parseInt(this.responseData.CNSPV)/this.cplacevalueTotal)*100);
        this.cfractionPersent = Math.round((parseInt(this.responseData.CNSF)/this.cfractionTotal)*100);



        this.passcount = parseInt(this.responseData.CNSNP);
        this.failcount = parseInt(this.responseData.CNSNF);
        this.hintcount = parseInt(this.responseData.CNSNH);
        this.totalgameplayed = parseInt(this.responseData.CNSNT);

        this.passcount1 = parseInt(this.responseData.CNSSP);
        this.failcount1 = parseInt(this.responseData.CNSSF);
        this.hintcount1 = parseInt(this.responseData.CNSSH);
        this.totalgameplayed1 = parseInt(this.responseData.CNSST);

        this.passcount2 = parseInt(this.responseData.CNSCP);
        this.failcount2 = parseInt(this.responseData.CNSCF);
        this.hintcount2 = parseInt(this.responseData.CNSCH);
        this.totalgameplayed2 = parseInt(this.responseData.CNSCT);

        this.passcount3 = parseInt(this.responseData.CNSFP);
        this.failcount3 = parseInt(this.responseData.CNSFF);
        this.hintcount3 = parseInt(this.responseData.CNSFH);
        this.totalgameplayed3 = parseInt(this.responseData.CNSFT);

        this.passcount4 = parseInt(this.responseData.CNSPVP);
        this.failcount4 = parseInt(this.responseData.CNSPVF);
        this.hintcount4 = parseInt(this.responseData.CNSPVH);
        this.totalgameplayed4 = parseInt(this.responseData.CNSPVT);


        if(isNaN(this.hintcount))
            this.hintcount = 0;
        if(isNaN(this.hintcount1))
            this.hintcount1 = 0;
        if(isNaN(this.hintcount2))
            this.hintcount2 = 0;
        if(isNaN(this.hintcount3))
            this.hintcount3 = 0;
        if(isNaN(this.hintcount4))
            this.hintcount4 = 0;

        

        if(this.hintcount > this.passcount)
            this.passcount = this.hintcount+2;
        if(this.hintcount1 > this.passcount1)
            this.passcount1 = this.hintcount1+2;
        if(this.hintcount2 > this.passcount2)
            this.passcount2 = this.hintcount2+2;
        if(this.hintcount3 > this.passcount3)
            this.passcount3 = this.hintcount3+2;
        if(this.hintcount4 > this.passcount4)
            this.passcount4 = this.hintcount4+2;


       if(this.totalgameplayed>0)
                this.numbersScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
            if(this.totalgameplayed1>0)
                this.sequenceScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
            if(this.totalgameplayed2>0)
                this.comparisonScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
            if(this.totalgameplayed3>0)
                this.fractionScore = Math.round((((this.passcount3*5)-(this.hintcount3*3))/((this.passcount3*5)+this.failcount3))*100);
            if(this.totalgameplayed4>0)
                this.placevalueScore = Math.round((((this.passcount4*5)-(this.hintcount4*3))/((this.passcount4*5)+this.failcount4))*100);

        this.graphics4.destroy();

        this.graphics4 = game.add.graphics(10, 120);
        this.graphics4.lineStyle(2, 0x000000, 1);
        //this.graphics2.beginFill(0xFFFF0B,0.5);
        this.graphics4.drawRect(70, 10, 360, 400);

        this.graphics5.destroy();

        this.graphics5 = game.add.graphics(450, 120);
        this.graphics5.lineStyle(2, 0x000000, 1);
        //this.graphics2.beginFill(0xFFFF0B,0.5);
        this.graphics5.drawRect(70, 10, 360, 400);

        this.numberSenseTree = game.add.sprite(140,160,'mcIconNumber');
        //this.numberSenseTree.frame = 0;
        this.numberSenseTree.anchor.setTo(0.5);
        this.numberSenseTree.scale.setTo(1.5);

        this.numberSenseTreeTxt = this.add.text(140, 200, window.selctedLang.numberTitle);
        this.numberSenseTreeTxt.anchor.setTo(0.5);
        this.numberSenseTreeTxt.align = 'center';
        this.numberSenseTreeTxt.fontSize = 16;
        this.numberSenseTreeTxt.fontWeight = 'normal';
        this.numberSenseTreeTxt.fill = '#000000';
        this.numberSenseTreeTxt.wordWrap = true;
        this.numberSenseTreeTxt.wordWrapWidth = 500;

        this.measurementTree = game.add.sprite(140,240,'mcIconSequence');
        //this.measurementTree.frame = 1;
        this.measurementTree.anchor.setTo(0.5);
        this.measurementTree.scale.setTo(1.5);

        this.measurementTreeTxt = this.add.text(140, 280, window.selctedLang.sequenceTitle);
        this.measurementTreeTxt.anchor.setTo(0.5);
        this.measurementTreeTxt.align = 'center';
        this.measurementTreeTxt.fontSize = 16;
        this.measurementTreeTxt.fontWeight = 'normal';
        this.measurementTreeTxt.fill = '#000000';
        this.measurementTreeTxt.wordWrap = true;
        this.measurementTreeTxt.wordWrapWidth = 500;

        this.numberoperationTree = game.add.sprite(140,320,'mcIconComparison');
        //this.numberoperationTree.frame = 2;
        this.numberoperationTree.anchor.setTo(0.5);
        this.numberoperationTree.scale.setTo(1.5);

        this.numberoperationTreeTxt = this.add.text(140, 360, window.selctedLang.ComparisionTitle);
        this.numberoperationTreeTxt.anchor.setTo(0.5);
        this.numberoperationTreeTxt.align = 'center';
        this.numberoperationTreeTxt.fontSize = 16;
        this.numberoperationTreeTxt.fontWeight = 'normal';
        this.numberoperationTreeTxt.fill = '#000000';
        this.numberoperationTreeTxt.wordWrap = true;
        this.numberoperationTreeTxt.wordWrapWidth = 500;

        this.shapesTree = game.add.sprite(140,400,'mcIconFraction');
        //this.shapesTree.frame = 3;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 440, window.selctedLang.fractionTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;

        this.shapesTree = game.add.sprite(140,480,'mcIconPlacevalue');
        //this.shapesTree.frame = 3;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 520, window.selctedLang.placeValueTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;


        this.numbersensePrgress = game.add.sprite(320,170,'progressCircle');
        this.numbersensePrgress.frame = this.numbersPersent-1;
        this.numbersensePrgress.anchor.setTo(0.5);
        this.numbersensePrgress.scale.setTo(1.2);

        this.numbersensePrgressTxt = this.add.text(320, 170, this.numbersPersent+'%');
        this.numbersensePrgressTxt.anchor.setTo(0.5);
        this.numbersensePrgressTxt.align = 'center';
        this.numbersensePrgressTxt.fontSize = 20;
        this.numbersensePrgressTxt.fontWeight = 'normal';
        this.numbersensePrgressTxt.fill = '#000000';
        this.numbersensePrgressTxt.wordWrap = true;
        this.numbersensePrgressTxt.wordWrapWidth = 500;

        this.numbersensePrgressTotalTxt = this.add.text(390, 170, this.responseData.PNSN+'/'+this.numbersTotal);
        this.numbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.numbersensePrgressTotalTxt.align = 'center';
        this.numbersensePrgressTotalTxt.fontSize = 20;
        this.numbersensePrgressTotalTxt.fontWeight = 'normal';
        this.numbersensePrgressTotalTxt.fill = '#000000';
        this.numbersensePrgressTotalTxt.wordWrap = true;
        this.numbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.measurementPrgress = game.add.sprite(320,250,'progressCircle');
        this.measurementPrgress.frame = this.sequencePersent-1;
        this.measurementPrgress.anchor.setTo(0.5);
        this.measurementPrgress.scale.setTo(1.2);

        this.measurementPrgressTxt = this.add.text(320, 250, this.sequencePersent+'%');
        this.measurementPrgressTxt.anchor.setTo(0.5);
        this.measurementPrgressTxt.align = 'center';
        this.measurementPrgressTxt.fontSize = 20;
        this.measurementPrgressTxt.fontWeight = 'normal';
        this.measurementPrgressTxt.fill = '#000000';
        this.measurementPrgressTxt.wordWrap = true;
        this.measurementPrgressTxt.wordWrapWidth = 500;

        this.measurementPrgressTotalTxt = this.add.text(390, 250, this.responseData.PNSS+'/'+this.squenceTotal);
        this.measurementPrgressTotalTxt.anchor.setTo(0.5);
        this.measurementPrgressTotalTxt.align = 'center';
        this.measurementPrgressTotalTxt.fontSize = 20;
        this.measurementPrgressTotalTxt.fontWeight = 'normal';
        this.measurementPrgressTotalTxt.fill = '#000000';
        this.measurementPrgressTotalTxt.wordWrap = true;
        this.measurementPrgressTotalTxt.wordWrapWidth = 500;

        this.numberoperationPrgress = game.add.sprite(320,330,'progressCircle');
        this.numberoperationPrgress.frame = this.comparisonPersent-1;
        this.numberoperationPrgress.anchor.setTo(0.5);
        this.numberoperationPrgress.scale.setTo(1.2);

        this.numberoperationPrgressTxt = this.add.text(320, 330, this.comparisonPersent+'%');
        this.numberoperationPrgressTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTxt.align = 'center';
        this.numberoperationPrgressTxt.fontSize = 20;
        this.numberoperationPrgressTxt.fontWeight = 'normal';
        this.numberoperationPrgressTxt.fill = '#000000';
        this.numberoperationPrgressTxt.wordWrap = true;
        this.numberoperationPrgressTxt.wordWrapWidth = 500;

        this.numberoperationPrgressTotalTxt = this.add.text(390, 330, this.responseData.PNSC+'/'+this.comparisonTotal);
        this.numberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTotalTxt.align = 'center';
        this.numberoperationPrgressTotalTxt.fontSize = 20;
        this.numberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.numberoperationPrgressTotalTxt.fill = '#000000';
        this.numberoperationPrgressTotalTxt.wordWrap = true;
        this.numberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.shapesPrgress = game.add.sprite(320,410,'progressCircle');
        this.shapesPrgress.frame = this.fractionPersent-1;
        this.shapesPrgress.anchor.setTo(0.5);
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 410, this.fractionPersent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 410, this.responseData.PNSF+'/'+this.FractionTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;

        this.shapesPrgress = game.add.sprite(320,490,'progressCircle');
        this.shapesPrgress.frame = this.placevaluePersent-1;
        this.shapesPrgress.anchor.setTo(0.5);
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 490, this.placevaluePersent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 490, this.responseData.PNSPV+'/'+this.placevalueTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;



        this.cnumberSenseTree = game.add.sprite(580,160,'mcIconNumber');
        //this.numberSenseTree.frame = 0;
        this.cnumberSenseTree.anchor.setTo(0.5);
        this.cnumberSenseTree.scale.setTo(1.5);

        this.cnumberSenseTreeTxt = this.add.text(580, 200, window.selctedLang.numberTitle);
        this.cnumberSenseTreeTxt.anchor.setTo(0.5);
        this.cnumberSenseTreeTxt.align = 'center';
        this.cnumberSenseTreeTxt.fontSize = 16;
        this.cnumberSenseTreeTxt.fontWeight = 'normal';
        this.cnumberSenseTreeTxt.fill = '#000000';
        this.cnumberSenseTreeTxt.wordWrap = true;
        this.cnumberSenseTreeTxt.wordWrapWidth = 500;

        this.cmeasurementTree = game.add.sprite(580,240,'mcIconSequence');
        //this.measurementTree.frame = 1;
        this.cmeasurementTree.anchor.setTo(0.5);
        this.cmeasurementTree.scale.setTo(1.5);

        this.cmeasurementTreeTxt = this.add.text(580, 280, window.selctedLang.sequenceTitle);
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 16;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;

        this.cnumberoperationTree = game.add.sprite(580,320,'mcIconComparison');
        //this.numberoperationTree.frame = 2;
        this.cnumberoperationTree.anchor.setTo(0.5);
        this.cnumberoperationTree.scale.setTo(1.5);

        this.cnumberoperationTreeTxt = this.add.text(580, 360, window.selctedLang.ComparisionTitle);
        this.cnumberoperationTreeTxt.anchor.setTo(0.5);
        this.cnumberoperationTreeTxt.align = 'center';
        this.cnumberoperationTreeTxt.fontSize = 16;
        this.cnumberoperationTreeTxt.fontWeight = 'normal';
        this.cnumberoperationTreeTxt.fill = '#000000';
        this.cnumberoperationTreeTxt.wordWrap = true;
        this.cnumberoperationTreeTxt.wordWrapWidth = 500;

        this.cshapesTree = game.add.sprite(580,400,'mcIconFraction');
        //this.shapesTree.frame = 3;
        this.cshapesTree.anchor.setTo(0.5);
        this.cshapesTree.scale.setTo(1.5);

        this.cshapesTreeTxt = this.add.text(580, 440, window.selctedLang.fractionTitle);
        this.cshapesTreeTxt.anchor.setTo(0.5);
        this.cshapesTreeTxt.align = 'center';
        this.cshapesTreeTxt.fontSize = 16;
        this.cshapesTreeTxt.fontWeight = 'normal';
        this.cshapesTreeTxt.fill = '#000000';
        this.cshapesTreeTxt.wordWrap = true;
        this.cshapesTreeTxt.wordWrapWidth = 500;

        this.cshapesTree = game.add.sprite(580,480,'mcIconPlacevalue');
        //this.shapesTree.frame = 3;
        this.cshapesTree.anchor.setTo(0.5);
        this.cshapesTree.scale.setTo(1.5);

        this.cshapesTreeTxt = this.add.text(580, 520, window.selctedLang.placeValueTitle);
        this.cshapesTreeTxt.anchor.setTo(0.5);
        this.cshapesTreeTxt.align = 'center';
        this.cshapesTreeTxt.fontSize = 16;
        this.cshapesTreeTxt.fontWeight = 'normal';
        this.cshapesTreeTxt.fill = '#000000';
        this.cshapesTreeTxt.wordWrap = true;
        this.cshapesTreeTxt.wordWrapWidth = 500;


        
        this.cnumbersensePrgress = game.add.sprite(700,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.cnumbersPersent-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(700, 170, this.cnumbersPersent+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cnumbersensePrgressTotalTxt = this.add.text(760, 170, this.responseData.CNSN+'/'+this.cnumbersTotal);
        this.cnumbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTotalTxt.align = 'center';
        this.cnumbersensePrgressTotalTxt.fontSize = 20;
        this.cnumbersensePrgressTotalTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTotalTxt.fill = '#000000';
        this.cnumbersensePrgressTotalTxt.wordWrap = true;
        this.cnumbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(700,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.csequencePersent-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementPrgressTxt = this.add.text(700, 250, this.csequencePersent+'%');
        this.cmeasurementPrgressTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTxt.align = 'center';
        this.cmeasurementPrgressTxt.fontSize = 20;
        this.cmeasurementPrgressTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTxt.fill = '#000000';
        this.cmeasurementPrgressTxt.wordWrap = true;
        this.cmeasurementPrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgressTotalTxt = this.add.text(760, 250, this.responseData.CNSS+'/'+this.csequenceTotal);
        this.cmeasurementPrgressTotalTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTotalTxt.align = 'center';
        this.cmeasurementPrgressTotalTxt.fontSize = 20;
        this.cmeasurementPrgressTotalTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTotalTxt.fill = '#000000';
        this.cmeasurementPrgressTotalTxt.wordWrap = true;
        this.cmeasurementPrgressTotalTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgress = game.add.sprite(700,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.ccomparisonPersent-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(700, 330, this.ccomparisonPersent+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgressTotalTxt = this.add.text(760, 330, this.responseData.CNSC+'/'+this.ccomparisonTotal);
        this.cnumberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTotalTxt.align = 'center';
        this.cnumberoperationPrgressTotalTxt.fontSize = 20;
        this.cnumberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTotalTxt.fill = '#000000';
        this.cnumberoperationPrgressTotalTxt.wordWrap = true;
        this.cnumberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(700,410,'progressCircle');
        this.cshapesPrgress.frame = this.cfractionPersent-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(700, 410, this.cfractionPersent+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgressTotalTxt = this.add.text(760, 410, this.responseData.CNSF+'/'+this.cfractionTotal);
        this.cshapesPrgressTotalTxt.anchor.setTo(0.5);
        this.cshapesPrgressTotalTxt.align = 'center';
        this.cshapesPrgressTotalTxt.fontSize = 20;
        this.cshapesPrgressTotalTxt.fontWeight = 'normal';
        this.cshapesPrgressTotalTxt.fill = '#000000';
        this.cshapesPrgressTotalTxt.wordWrap = true;
        this.cshapesPrgressTotalTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(700,490,'progressCircle');
        this.cshapesPrgress.frame = this.cplacevaluePersent-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(700, 490, this.cplacevaluePersent+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgressTotalTxt = this.add.text(760, 490, this.responseData.CNSPV+'/'+this.cplacevalueTotal);
        this.cshapesPrgressTotalTxt.anchor.setTo(0.5);
        this.cshapesPrgressTotalTxt.align = 'center';
        this.cshapesPrgressTotalTxt.fontSize = 20;
        this.cshapesPrgressTotalTxt.fontWeight = 'normal';
        this.cshapesPrgressTotalTxt.fill = '#000000';
        this.cshapesPrgressTotalTxt.wordWrap = true;
        this.cshapesPrgressTotalTxt.wordWrapWidth = 500;


        this.cnumbersensePrgress = game.add.sprite(830,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.numbersScore-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(830, 170, this.numbersScore+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(830,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.sequenceScore-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementTreeTxt = this.add.text(830, 250, this.sequenceScore+'%');
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 20;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;


        this.cnumberoperationPrgress = game.add.sprite(830,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.comparisonScore-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(830, 330, this.comparisonScore+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(830,410,'progressCircle');
        this.cshapesPrgress.frame = this.fractionScore-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(830, 410, this.fractionScore+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(830,490,'progressCircle');
        this.cshapesPrgress.frame = this.placevalueScore-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesTreeTxt = this.add.text(830, 490, this.placevalueScore+'%');
        this.cshapesTreeTxt.anchor.setTo(0.5);
        this.cshapesTreeTxt.align = 'center';
        this.cshapesTreeTxt.fontSize = 20;
        this.cshapesTreeTxt.fontWeight = 'normal';
        this.cshapesTreeTxt.fill = '#000000';
        this.cshapesTreeTxt.wordWrap = true;
        this.cshapesTreeTxt.wordWrapWidth = 500;
  
    },

    gotoAddMMCTopics:function(game){

        this.practiceModeTime = parseInt(this.responseData.PMMST);
        this.challengeModeTime = parseInt(this.responseData.CMMST);

        if(isNaN(this.practiceModeTime))
            this.practiceModeTime = 0;
        if(isNaN(this.challengeModeTime))
            this.challengeModeTime = 0;


        this.practiceModeTime = this.secondsToHms(this.practiceModeTime);
        this.challengeModeTime = this.secondsToHms(this.challengeModeTime);

        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.challengemodeTimeTxt = this.add.text(840, 118,this.challengeModeTime);
        this.challengemodeTimeTxt.anchor.setTo(0.5);
        this.challengemodeTimeTxt.align = 'center';
        this.challengemodeTimeTxt.fontSize = 18;
        this.challengemodeTimeTxt.fontWeight = 'normal';
        this.challengemodeTimeTxt.fill = '#000000';
        this.challengemodeTimeTxt.wordWrap = true;
        this.challengemodeTimeTxt.wordWrapWidth = 500;

        this.lengthPersent = Math.round((parseInt(this.responseData.PML)/this.lengthTotal)*100);
        this.weightPersent = Math.round((parseInt(this.responseData.PMW)/this.weightTotal)*100);
        this.timePersent = Math.round((parseInt(this.responseData.PMT)/this.timeTotal)*100);
        this.volumePersent = Math.round((parseInt(this.responseData.PMV)/this.volumeTotal)*100);


        this.clengthPersent = Math.round((parseInt(this.responseData.CML)/this.clengthTotal)*100);
        this.cweightPersent = Math.round((parseInt(this.responseData.CMW)/this.cweightTotal)*100);
        this.ctimePersent = Math.round((parseInt(this.responseData.CMTi)/this.ctimeTotal)*100);
        this.cvolumePersent = Math.round((parseInt(this.responseData.CMV)/this.cvolumeTotal)*100);


        this.passcount = parseInt(this.responseData.CMLP);
        this.failcount = parseInt(this.responseData.CMLF);
        this.hintcount = parseInt(this.responseData.CMLH);
        this.totalgameplayed = parseInt(this.responseData.CMLT);

        this.passcount1 = parseInt(this.responseData.CMWP);
        this.failcount1 = parseInt(this.responseData.CMWF);
        this.hintcount1 = parseInt(this.responseData.CMWH);
        this.totalgameplayed1 = parseInt(this.responseData.CMWT);

        this.passcount2 = parseInt(this.responseData.CMTP);
        this.failcount2 = parseInt(this.responseData.CMTF);
        this.hintcount2 = parseInt(this.responseData.CMTH);
        this.totalgameplayed2 = parseInt(this.responseData.CMTT);

        this.passcount3 = parseInt(this.responseData.CMVP);
        this.failcount3 = parseInt(this.responseData.CMVF);
        this.hintcount3 = parseInt(this.responseData.CMVH);
        this.totalgameplayed3 = parseInt(this.responseData.CMVT);

        console.log("1 "+this.passcount2);
        console.log("2 "+this.hintcount2);
        console.log("3 "+this.failcount2);
        console.log("4 "+this.totalgameplayed2);


        if(isNaN(this.hintcount))
            this.hintcount = 0;
        if(isNaN(this.hintcount1))
            this.hintcount1 = 0;
        if(isNaN(this.hintcount2))
            this.hintcount2 = 0;
        if(isNaN(this.hintcount3))
            this.hintcount3 = 0;

        

        if(this.hintcount > this.passcount)
            this.passcount = this.hintcount+2;
        if(this.hintcount1 > this.passcount1)
            this.passcount1 = this.hintcount1+2;
        if(this.hintcount2 > this.passcount2)
            this.passcount2 = this.hintcount2+2;
        if(this.hintcount3 > this.passcount3)
            this.passcount3 = this.hintcount3+2;


       if(this.totalgameplayed>0)
                this.lengthScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
            if(this.totalgameplayed1>0)
                this.weightScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
            if(this.totalgameplayed2>0)
                this.timeScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
            if(this.totalgameplayed3>0)
                this.volumeScore = Math.round((((this.passcount3*5)-(this.hintcount3*3))/((this.passcount3*5)+this.failcount3))*100);



        
        this.numberSenseTree = game.add.sprite(140,160,'mcIconLength');
        //this.numberSenseTree.frame = 0;
        this.numberSenseTree.anchor.setTo(0.5);
        this.numberSenseTree.scale.setTo(1.5);

        this.numberSenseTreeTxt = this.add.text(140, 200, window.selctedLang.lengthTitle);
        this.numberSenseTreeTxt.anchor.setTo(0.5);
        this.numberSenseTreeTxt.align = 'center';
        this.numberSenseTreeTxt.fontSize = 16;
        this.numberSenseTreeTxt.fontWeight = 'normal';
        this.numberSenseTreeTxt.fill = '#000000';
        this.numberSenseTreeTxt.wordWrap = true;
        this.numberSenseTreeTxt.wordWrapWidth = 500;

        this.measurementTree = game.add.sprite(140,240,'mcIconWeight');
        //this.measurementTree.frame = 1;
        this.measurementTree.anchor.setTo(0.5);
        this.measurementTree.scale.setTo(1.5);

        this.measurementTreeTxt = this.add.text(140, 280, window.selctedLang.weightTitle);
        this.measurementTreeTxt.anchor.setTo(0.5);
        this.measurementTreeTxt.align = 'center';
        this.measurementTreeTxt.fontSize = 16;
        this.measurementTreeTxt.fontWeight = 'normal';
        this.measurementTreeTxt.fill = '#000000';
        this.measurementTreeTxt.wordWrap = true;
        this.measurementTreeTxt.wordWrapWidth = 500;

        this.numberoperationTree = game.add.sprite(140,320,'mcIconTime');
        //this.numberoperationTree.frame = 2;
        this.numberoperationTree.anchor.setTo(0.5);
        this.numberoperationTree.scale.setTo(1.5);

        this.numberoperationTreeTxt = this.add.text(140, 360, window.selctedLang.timeTitle);
        this.numberoperationTreeTxt.anchor.setTo(0.5);
        this.numberoperationTreeTxt.align = 'center';
        this.numberoperationTreeTxt.fontSize = 16;
        this.numberoperationTreeTxt.fontWeight = 'normal';
        this.numberoperationTreeTxt.fill = '#000000';
        this.numberoperationTreeTxt.wordWrap = true;
        this.numberoperationTreeTxt.wordWrapWidth = 500;

        this.shapesTree = game.add.sprite(140,400,'mcIconVolume');
        //this.shapesTree.frame = 3;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 440, window.selctedLang.volumeTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;


        this.numbersensePrgress = game.add.sprite(320,170,'progressCircle');
        this.numbersensePrgress.frame = this.lengthPersent-1;
        this.numbersensePrgress.anchor.setTo(0.5);
        this.numbersensePrgress.scale.setTo(1.2);

        this.numbersensePrgressTxt = this.add.text(320, 170, this.lengthPersent+'%');
        this.numbersensePrgressTxt.anchor.setTo(0.5);
        this.numbersensePrgressTxt.align = 'center';
        this.numbersensePrgressTxt.fontSize = 20;
        this.numbersensePrgressTxt.fontWeight = 'normal';
        this.numbersensePrgressTxt.fill = '#000000';
        this.numbersensePrgressTxt.wordWrap = true;
        this.numbersensePrgressTxt.wordWrapWidth = 500;

        this.numbersensePrgressTotalTxt = this.add.text(390, 170, this.responseData.PML+'/'+this.lengthTotal);
        this.numbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.numbersensePrgressTotalTxt.align = 'center';
        this.numbersensePrgressTotalTxt.fontSize = 20;
        this.numbersensePrgressTotalTxt.fontWeight = 'normal';
        this.numbersensePrgressTotalTxt.fill = '#000000';
        this.numbersensePrgressTotalTxt.wordWrap = true;
        this.numbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.measurementPrgress = game.add.sprite(320,250,'progressCircle');
        this.measurementPrgress.frame = this.weightPersent-1;
        this.measurementPrgress.anchor.setTo(0.5);
        this.measurementPrgress.scale.setTo(1.2);

        this.measurementPrgressTxt = this.add.text(320, 250, this.weightPersent+'%');
        this.measurementPrgressTxt.anchor.setTo(0.5);
        this.measurementPrgressTxt.align = 'center';
        this.measurementPrgressTxt.fontSize = 20;
        this.measurementPrgressTxt.fontWeight = 'normal';
        this.measurementPrgressTxt.fill = '#000000';
        this.measurementPrgressTxt.wordWrap = true;
        this.measurementPrgressTxt.wordWrapWidth = 500;

        this.measurementPrgressTotalTxt = this.add.text(390, 250, this.responseData.PMW+'/'+this.weightTotal);
        this.measurementPrgressTotalTxt.anchor.setTo(0.5);
        this.measurementPrgressTotalTxt.align = 'center';
        this.measurementPrgressTotalTxt.fontSize = 20;
        this.measurementPrgressTotalTxt.fontWeight = 'normal';
        this.measurementPrgressTotalTxt.fill = '#000000';
        this.measurementPrgressTotalTxt.wordWrap = true;
        this.measurementPrgressTotalTxt.wordWrapWidth = 500;

        this.numberoperationPrgress = game.add.sprite(320,330,'progressCircle');
        this.numberoperationPrgress.frame = this.timePersent-1;
        this.numberoperationPrgress.anchor.setTo(0.5);
        this.numberoperationPrgress.scale.setTo(1.2);

        this.numberoperationPrgressTxt = this.add.text(320, 330, this.timePersent+'%');
        this.numberoperationPrgressTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTxt.align = 'center';
        this.numberoperationPrgressTxt.fontSize = 20;
        this.numberoperationPrgressTxt.fontWeight = 'normal';
        this.numberoperationPrgressTxt.fill = '#000000';
        this.numberoperationPrgressTxt.wordWrap = true;
        this.numberoperationPrgressTxt.wordWrapWidth = 500;

        this.numberoperationPrgressTotalTxt = this.add.text(390, 330, this.responseData.PMT+'/'+this.timeTotal);
        this.numberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTotalTxt.align = 'center';
        this.numberoperationPrgressTotalTxt.fontSize = 20;
        this.numberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.numberoperationPrgressTotalTxt.fill = '#000000';
        this.numberoperationPrgressTotalTxt.wordWrap = true;
        this.numberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.shapesPrgress = game.add.sprite(320,410,'progressCircle');
        this.shapesPrgress.frame = this.volumePersent-1;
        this.shapesPrgress.anchor.setTo(0.5);
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 410, this.volumePersent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 410, this.responseData.PMV+'/'+this.volumeTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;



        this.cnumberSenseTree = game.add.sprite(580,160,'mcIconLength');
        //this.numberSenseTree.frame = 0;
        this.cnumberSenseTree.anchor.setTo(0.5);
        this.cnumberSenseTree.scale.setTo(1.5);

        this.cnumberSenseTreeTxt = this.add.text(580, 200, window.selctedLang.lengthTitle);
        this.cnumberSenseTreeTxt.anchor.setTo(0.5);
        this.cnumberSenseTreeTxt.align = 'center';
        this.cnumberSenseTreeTxt.fontSize = 16;
        this.cnumberSenseTreeTxt.fontWeight = 'normal';
        this.cnumberSenseTreeTxt.fill = '#000000';
        this.cnumberSenseTreeTxt.wordWrap = true;
        this.cnumberSenseTreeTxt.wordWrapWidth = 500;

        this.cmeasurementTree = game.add.sprite(580,240,'mcIconWeight');
        //this.measurementTree.frame = 1;
        this.cmeasurementTree.anchor.setTo(0.5);
        this.cmeasurementTree.scale.setTo(1.5);

        this.cmeasurementTreeTxt = this.add.text(580, 280, window.selctedLang.weightTitle);
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 16;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;

        this.cnumberoperationTree = game.add.sprite(580,320,'mcIconTime');
        //this.numberoperationTree.frame = 2;
        this.cnumberoperationTree.anchor.setTo(0.5);
        this.cnumberoperationTree.scale.setTo(1.5);

        this.cnumberoperationTreeTxt = this.add.text(580, 360, window.selctedLang.timeTitle);
        this.cnumberoperationTreeTxt.anchor.setTo(0.5);
        this.cnumberoperationTreeTxt.align = 'center';
        this.cnumberoperationTreeTxt.fontSize = 16;
        this.cnumberoperationTreeTxt.fontWeight = 'normal';
        this.cnumberoperationTreeTxt.fill = '#000000';
        this.cnumberoperationTreeTxt.wordWrap = true;
        this.cnumberoperationTreeTxt.wordWrapWidth = 500;

        this.cshapesTree = game.add.sprite(580,400,'mcIconVolume');
        //this.shapesTree.frame = 3;
        this.cshapesTree.anchor.setTo(0.5);
        this.cshapesTree.scale.setTo(1.5);

        this.cshapesTreeTxt = this.add.text(580, 440, window.selctedLang.volumeTitle);
        this.cshapesTreeTxt.anchor.setTo(0.5);
        this.cshapesTreeTxt.align = 'center';
        this.cshapesTreeTxt.fontSize = 16;
        this.cshapesTreeTxt.fontWeight = 'normal';
        this.cshapesTreeTxt.fill = '#000000';
        this.cshapesTreeTxt.wordWrap = true;
        this.cshapesTreeTxt.wordWrapWidth = 500;


        this.cnumbersensePrgress = game.add.sprite(700,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.clengthPersent-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(700, 170, this.clengthPersent+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cnumbersensePrgressTotalTxt = this.add.text(760, 170, this.responseData.CML+'/'+this.clengthTotal);
        this.cnumbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTotalTxt.align = 'center';
        this.cnumbersensePrgressTotalTxt.fontSize = 20;
        this.cnumbersensePrgressTotalTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTotalTxt.fill = '#000000';
        this.cnumbersensePrgressTotalTxt.wordWrap = true;
        this.cnumbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(700,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.cweightPersent-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementPrgressTxt = this.add.text(700, 250, this.cweightPersent+'%');
        this.cmeasurementPrgressTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTxt.align = 'center';
        this.cmeasurementPrgressTxt.fontSize = 20;
        this.cmeasurementPrgressTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTxt.fill = '#000000';
        this.cmeasurementPrgressTxt.wordWrap = true;
        this.cmeasurementPrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgressTotalTxt = this.add.text(760, 250, this.responseData.CMW+'/'+this.cweightTotal);
        this.cmeasurementPrgressTotalTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTotalTxt.align = 'center';
        this.cmeasurementPrgressTotalTxt.fontSize = 20;
        this.cmeasurementPrgressTotalTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTotalTxt.fill = '#000000';
        this.cmeasurementPrgressTotalTxt.wordWrap = true;
        this.cmeasurementPrgressTotalTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgress = game.add.sprite(700,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.ctimePersent-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(700, 330, this.ctimePersent+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgressTotalTxt = this.add.text(760, 330, this.responseData.CMTi+'/'+this.ctimeTotal);
        this.cnumberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTotalTxt.align = 'center';
        this.cnumberoperationPrgressTotalTxt.fontSize = 20;
        this.cnumberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTotalTxt.fill = '#000000';
        this.cnumberoperationPrgressTotalTxt.wordWrap = true;
        this.cnumberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(700,410,'progressCircle');
        this.cshapesPrgress.frame = this.cvolumePersent-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(700, 410, this.cvolumePersent+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgressTotalTxt = this.add.text(760, 410, this.responseData.CMV+'/'+this.cvolumeTotal);
        this.cshapesPrgressTotalTxt.anchor.setTo(0.5);
        this.cshapesPrgressTotalTxt.align = 'center';
        this.cshapesPrgressTotalTxt.fontSize = 20;
        this.cshapesPrgressTotalTxt.fontWeight = 'normal';
        this.cshapesPrgressTotalTxt.fill = '#000000';
        this.cshapesPrgressTotalTxt.wordWrap = true;
        this.cshapesPrgressTotalTxt.wordWrapWidth = 500;


        this.cnumbersensePrgress = game.add.sprite(830,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.lengthScore-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(830, 170, this.lengthScore+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(830,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.weightScore-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementTreeTxt = this.add.text(830, 250, this.weightScore+'%');
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 20;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;


        this.cnumberoperationPrgress = game.add.sprite(830,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.timeScore-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(830, 330, this.timeScore+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(830,410,'progressCircle');
        this.cshapesPrgress.frame = this.volumeScore-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(830, 410, this.volumeScore+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        
      
    },

    gotoAddNOMCTopics:function(game){

        this.practiceModeTime = parseInt(this.responseData.PMNOST);
        this.challengeModeTime = parseInt(this.responseData.CMNOST);

        if(isNaN(this.practiceModeTime))
            this.practiceModeTime = 0;
        if(isNaN(this.challengeModeTime))
            this.challengeModeTime = 0;


        this.practiceModeTime = this.secondsToHms(this.practiceModeTime);
        this.challengeModeTime = this.secondsToHms(this.challengeModeTime);

        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.challengemodeTimeTxt = this.add.text(840, 118,this.challengeModeTime);
        this.challengemodeTimeTxt.anchor.setTo(0.5);
        this.challengemodeTimeTxt.align = 'center';
        this.challengemodeTimeTxt.fontSize = 18;
        this.challengemodeTimeTxt.fontWeight = 'normal';
        this.challengemodeTimeTxt.fill = '#000000';
        this.challengemodeTimeTxt.wordWrap = true;
        this.challengemodeTimeTxt.wordWrapWidth = 500;

        this.addditionPersent = Math.round((parseInt(this.responseData.PNOA)/this.additionTotal)*100);
        this.subtractionPersent = Math.round((parseInt(this.responseData.PNOS)/this.subtractionTotal)*100);
        this.multiplicationPersent = Math.round((parseInt(this.responseData.PNOM)/this.multiplicationTotal)*100);
        this.divisionPersent = Math.round((parseInt(this.responseData.PNOD)/this.divisionTotal)*100);


        this.caddditionPersent = Math.round((parseInt(this.responseData.CNOA)/this.cadditionTotal)*100);
        this.csubtractionPersent = Math.round((parseInt(this.responseData.CNOS)/this.csubtractionTotal)*100);
        this.cmultiplicationPersent = Math.round((parseInt(this.responseData.CNOM)/this.cmultiplicationTotal)*100);
        this.cdivisionPersent = Math.round((parseInt(this.responseData.CNOD)/this.cdivisionTotal)*100);


        this.passcount = parseInt(this.responseData.CNOAP);
        this.failcount = parseInt(this.responseData.CNOAF);
        this.hintcount = parseInt(this.responseData.CNOAH);
        this.totalgameplayed = parseInt(this.responseData.CNOAT);

        this.passcount1 = parseInt(this.responseData.CNOSP);
        this.failcount1 = parseInt(this.responseData.CNOSF);
        this.hintcount1 = parseInt(this.responseData.CNOSH);
        this.totalgameplayed1 = parseInt(this.responseData.CNOST);

        this.passcount2 = parseInt(this.responseData.CNOMP);
        this.failcount2 = parseInt(this.responseData.CNOMF);
        this.hintcount2 = parseInt(this.responseData.CNOMH);
        this.totalgameplayed2 = parseInt(this.responseData.CNOMT);

        this.passcount3 = parseInt(this.responseData.CNODP);
        this.failcount3 = parseInt(this.responseData.CNODF);
        this.hintcount3 = parseInt(this.responseData.CNODH);
        this.totalgameplayed3 = parseInt(this.responseData.CNODT);


        if(isNaN(this.hintcount))
            this.hintcount = 0;
        if(isNaN(this.hintcount1))
            this.hintcount1 = 0;
        if(isNaN(this.hintcount2))
            this.hintcount2 = 0;
        if(isNaN(this.hintcount3))
            this.hintcount3 = 0;

        

        if(this.hintcount > this.passcount)
            this.passcount = this.hintcount+2;
        if(this.hintcount1 > this.passcount1)
            this.passcount1 = this.hintcount1+2;
        if(this.hintcount2 > this.passcount2)
            this.passcount2 = this.hintcount2+2;
        if(this.hintcount3 > this.passcount3)
            this.passcount3 = this.hintcount3+2;


       if(this.totalgameplayed>0)
                this.additionScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
            if(this.totalgameplayed1>0)
                this.subtractionScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
            if(this.totalgameplayed2>0)
                this.multiplicationScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
            if(this.totalgameplayed3>0)
                this.divisionScore = Math.round((((this.passcount3*5)-(this.hintcount3*3))/((this.passcount3*5)+this.failcount3))*100);

        this.numberSenseTree = game.add.sprite(140,160,'mcIconAddition');
        //this.numberSenseTree.frame = 0;
        this.numberSenseTree.anchor.setTo(0.5);
        this.numberSenseTree.scale.setTo(1.5);

        this.numberSenseTreeTxt = this.add.text(140, 200, window.selctedLang.additionTitle);
        this.numberSenseTreeTxt.anchor.setTo(0.5);
        this.numberSenseTreeTxt.align = 'center';
        this.numberSenseTreeTxt.fontSize = 16;
        this.numberSenseTreeTxt.fontWeight = 'normal';
        this.numberSenseTreeTxt.fill = '#000000';
        this.numberSenseTreeTxt.wordWrap = true;
        this.numberSenseTreeTxt.wordWrapWidth = 500;

        this.measurementTree = game.add.sprite(140,240,'mcIconSubtraction');
        //this.measurementTree.frame = 1;
        this.measurementTree.anchor.setTo(0.5);
        this.measurementTree.scale.setTo(1.5);

        this.measurementTreeTxt = this.add.text(140, 280, window.selctedLang.subtractionTitle);
        this.measurementTreeTxt.anchor.setTo(0.5);
        this.measurementTreeTxt.align = 'center';
        this.measurementTreeTxt.fontSize = 16;
        this.measurementTreeTxt.fontWeight = 'normal';
        this.measurementTreeTxt.fill = '#000000';
        this.measurementTreeTxt.wordWrap = true;
        this.measurementTreeTxt.wordWrapWidth = 500;

        this.numberoperationTree = game.add.sprite(140,320,'mcIconMultiplication');
        //this.numberoperationTree.frame = 2;
        this.numberoperationTree.anchor.setTo(0.5);
        this.numberoperationTree.scale.setTo(1.5);

        this.numberoperationTreeTxt = this.add.text(140, 360, window.selctedLang.multiplicationTitle);
        this.numberoperationTreeTxt.anchor.setTo(0.5);
        this.numberoperationTreeTxt.align = 'center';
        this.numberoperationTreeTxt.fontSize = 16;
        this.numberoperationTreeTxt.fontWeight = 'normal';
        this.numberoperationTreeTxt.fill = '#000000';
        this.numberoperationTreeTxt.wordWrap = true;
        this.numberoperationTreeTxt.wordWrapWidth = 500;

        this.shapesTree = game.add.sprite(140,400,'mcIconDivision');
        //this.shapesTree.frame = 3;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 440, window.selctedLang.divisionTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;


        this.numbersensePrgress = game.add.sprite(320,170,'progressCircle');
        this.numbersensePrgress.frame = this.addditionPersent-1;
        this.numbersensePrgress.anchor.setTo(0.5);
        this.numbersensePrgress.scale.setTo(1.2);

        this.numbersensePrgressTxt = this.add.text(320, 170, this.addditionPersent+'%');
        this.numbersensePrgressTxt.anchor.setTo(0.5);
        this.numbersensePrgressTxt.align = 'center';
        this.numbersensePrgressTxt.fontSize = 20;
        this.numbersensePrgressTxt.fontWeight = 'normal';
        this.numbersensePrgressTxt.fill = '#000000';
        this.numbersensePrgressTxt.wordWrap = true;
        this.numbersensePrgressTxt.wordWrapWidth = 500;

        this.numbersensePrgressTotalTxt = this.add.text(390, 170, this.responseData.PNOA+'/'+this.additionTotal);
        this.numbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.numbersensePrgressTotalTxt.align = 'center';
        this.numbersensePrgressTotalTxt.fontSize = 20;
        this.numbersensePrgressTotalTxt.fontWeight = 'normal';
        this.numbersensePrgressTotalTxt.fill = '#000000';
        this.numbersensePrgressTotalTxt.wordWrap = true;
        this.numbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.measurementPrgress = game.add.sprite(320,250,'progressCircle');
        this.measurementPrgress.frame = this.subtractionPersent-1;
        this.measurementPrgress.anchor.setTo(0.5);
        this.measurementPrgress.scale.setTo(1.2);

        this.measurementPrgressTxt = this.add.text(320, 250, this.subtractionPersent+'%');
        this.measurementPrgressTxt.anchor.setTo(0.5);
        this.measurementPrgressTxt.align = 'center';
        this.measurementPrgressTxt.fontSize = 20;
        this.measurementPrgressTxt.fontWeight = 'normal';
        this.measurementPrgressTxt.fill = '#000000';
        this.measurementPrgressTxt.wordWrap = true;
        this.measurementPrgressTxt.wordWrapWidth = 500;

        this.measurementPrgressTotalTxt = this.add.text(390, 250, this.responseData.PNOS+'/'+this.subtractionTotal);
        this.measurementPrgressTotalTxt.anchor.setTo(0.5);
        this.measurementPrgressTotalTxt.align = 'center';
        this.measurementPrgressTotalTxt.fontSize = 20;
        this.measurementPrgressTotalTxt.fontWeight = 'normal';
        this.measurementPrgressTotalTxt.fill = '#000000';
        this.measurementPrgressTotalTxt.wordWrap = true;
        this.measurementPrgressTotalTxt.wordWrapWidth = 500;

        this.numberoperationPrgress = game.add.sprite(320,330,'progressCircle');
        this.numberoperationPrgress.frame = this.multiplicationPersent-1;
        this.numberoperationPrgress.anchor.setTo(0.5);
        this.numberoperationPrgress.scale.setTo(1.2);

        this.numberoperationPrgressTxt = this.add.text(320, 330, this.multiplicationPersent+'%');
        this.numberoperationPrgressTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTxt.align = 'center';
        this.numberoperationPrgressTxt.fontSize = 20;
        this.numberoperationPrgressTxt.fontWeight = 'normal';
        this.numberoperationPrgressTxt.fill = '#000000';
        this.numberoperationPrgressTxt.wordWrap = true;
        this.numberoperationPrgressTxt.wordWrapWidth = 500;

        this.numberoperationPrgressTotalTxt = this.add.text(390, 330, this.responseData.PNOM+'/'+this.multiplicationTotal);
        this.numberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.numberoperationPrgressTotalTxt.align = 'center';
        this.numberoperationPrgressTotalTxt.fontSize = 20;
        this.numberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.numberoperationPrgressTotalTxt.fill = '#000000';
        this.numberoperationPrgressTotalTxt.wordWrap = true;
        this.numberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.shapesPrgress = game.add.sprite(320,410,'progressCircle');
        this.shapesPrgress.frame = this.divisionPersent-1;
        this.shapesPrgress.anchor.setTo(0.5);
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 410, this.divisionPersent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 410, this.responseData.PNOD+'/'+this.divisionTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;

        



        this.cnumberSenseTree = game.add.sprite(580,160,'mcIconAddition');
        //this.numberSenseTree.frame = 0;
        this.cnumberSenseTree.anchor.setTo(0.5);
        this.cnumberSenseTree.scale.setTo(1.5);

        this.cnumberSenseTreeTxt = this.add.text(580, 200, window.selctedLang.additionTitle);
        this.cnumberSenseTreeTxt.anchor.setTo(0.5);
        this.cnumberSenseTreeTxt.align = 'center';
        this.cnumberSenseTreeTxt.fontSize = 16;
        this.cnumberSenseTreeTxt.fontWeight = 'normal';
        this.cnumberSenseTreeTxt.fill = '#000000';
        this.cnumberSenseTreeTxt.wordWrap = true;
        this.cnumberSenseTreeTxt.wordWrapWidth = 500;

        this.cmeasurementTree = game.add.sprite(580,240,'mcIconSubtraction');
        //this.measurementTree.frame = 1;
        this.cmeasurementTree.anchor.setTo(0.5);
        this.cmeasurementTree.scale.setTo(1.5);

        this.cmeasurementTreeTxt = this.add.text(580, 280, window.selctedLang.subtractionTitle);
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 16;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;

        this.cnumberoperationTree = game.add.sprite(580,320,'mcIconMultiplication');
        //this.numberoperationTree.frame = 2;
        this.cnumberoperationTree.anchor.setTo(0.5);
        this.cnumberoperationTree.scale.setTo(1.5);

        this.cnumberoperationTreeTxt = this.add.text(580, 360, window.selctedLang.multiplicationTitle);
        this.cnumberoperationTreeTxt.anchor.setTo(0.5);
        this.cnumberoperationTreeTxt.align = 'center';
        this.cnumberoperationTreeTxt.fontSize = 16;
        this.cnumberoperationTreeTxt.fontWeight = 'normal';
        this.cnumberoperationTreeTxt.fill = '#000000';
        this.cnumberoperationTreeTxt.wordWrap = true;
        this.cnumberoperationTreeTxt.wordWrapWidth = 500;

        this.cshapesTree = game.add.sprite(580,400,'mcIconDivision');
        //this.shapesTree.frame = 3;
        this.cshapesTree.anchor.setTo(0.5);
        this.cshapesTree.scale.setTo(1.5);

        this.cshapesTreeTxt = this.add.text(580, 440, window.selctedLang.divisionTitle);
        this.cshapesTreeTxt.anchor.setTo(0.5);
        this.cshapesTreeTxt.align = 'center';
        this.cshapesTreeTxt.fontSize = 16;
        this.cshapesTreeTxt.fontWeight = 'normal';
        this.cshapesTreeTxt.fill = '#000000';
        this.cshapesTreeTxt.wordWrap = true;
        this.cshapesTreeTxt.wordWrapWidth = 500;


        this.cnumbersensePrgress = game.add.sprite(700,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.caddditionPersent-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(700, 170, this.caddditionPersent+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cnumbersensePrgressTotalTxt = this.add.text(760, 170, this.responseData.CNOA+'/'+this.cadditionTotal);
        this.cnumbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTotalTxt.align = 'center';
        this.cnumbersensePrgressTotalTxt.fontSize = 20;
        this.cnumbersensePrgressTotalTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTotalTxt.fill = '#000000';
        this.cnumbersensePrgressTotalTxt.wordWrap = true;
        this.cnumbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(700,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.csubtractionPersent-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementPrgressTxt = this.add.text(700, 250, this.csubtractionPersent+'%');
        this.cmeasurementPrgressTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTxt.align = 'center';
        this.cmeasurementPrgressTxt.fontSize = 20;
        this.cmeasurementPrgressTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTxt.fill = '#000000';
        this.cmeasurementPrgressTxt.wordWrap = true;
        this.cmeasurementPrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgressTotalTxt = this.add.text(760, 250, this.responseData.CNOS+'/'+this.csubtractionTotal);
        this.cmeasurementPrgressTotalTxt.anchor.setTo(0.5);
        this.cmeasurementPrgressTotalTxt.align = 'center';
        this.cmeasurementPrgressTotalTxt.fontSize = 20;
        this.cmeasurementPrgressTotalTxt.fontWeight = 'normal';
        this.cmeasurementPrgressTotalTxt.fill = '#000000';
        this.cmeasurementPrgressTotalTxt.wordWrap = true;
        this.cmeasurementPrgressTotalTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgress = game.add.sprite(700,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.cmultiplicationPersent-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(700, 330, this.cmultiplicationPersent+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cnumberoperationPrgressTotalTxt = this.add.text(760, 330, this.responseData.CNOM+'/'+this.cmultiplicationTotal);
        this.cnumberoperationPrgressTotalTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTotalTxt.align = 'center';
        this.cnumberoperationPrgressTotalTxt.fontSize = 20;
        this.cnumberoperationPrgressTotalTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTotalTxt.fill = '#000000';
        this.cnumberoperationPrgressTotalTxt.wordWrap = true;
        this.cnumberoperationPrgressTotalTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(700,410,'progressCircle');
        this.cshapesPrgress.frame = this.cdivisionPersent-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(700, 410, this.cdivisionPersent+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgressTotalTxt = this.add.text(760, 410, this.responseData.CNOD+'/'+this.cdivisionTotal);
        this.cshapesPrgressTotalTxt.anchor.setTo(0.5);
        this.cshapesPrgressTotalTxt.align = 'center';
        this.cshapesPrgressTotalTxt.fontSize = 20;
        this.cshapesPrgressTotalTxt.fontWeight = 'normal';
        this.cshapesPrgressTotalTxt.fill = '#000000';
        this.cshapesPrgressTotalTxt.wordWrap = true;
        this.cshapesPrgressTotalTxt.wordWrapWidth = 500;


        this.cnumbersensePrgress = game.add.sprite(830,170,'progressCircle');
        this.cnumbersensePrgress.frame = this.additionScore-1;
        this.cnumbersensePrgress.anchor.setTo(0.5);
        this.cnumbersensePrgress.scale.setTo(1.2);

        this.cnumbersensePrgressTxt = this.add.text(830, 170, this.additionScore+'%');
        this.cnumbersensePrgressTxt.anchor.setTo(0.5);
        this.cnumbersensePrgressTxt.align = 'center';
        this.cnumbersensePrgressTxt.fontSize = 20;
        this.cnumbersensePrgressTxt.fontWeight = 'normal';
        this.cnumbersensePrgressTxt.fill = '#000000';
        this.cnumbersensePrgressTxt.wordWrap = true;
        this.cnumbersensePrgressTxt.wordWrapWidth = 500;

        this.cmeasurementPrgress = game.add.sprite(830,250,'progressCircle');
        this.cmeasurementPrgress.frame = this.subtractionScore-1;
        this.cmeasurementPrgress.anchor.setTo(0.5);
        this.cmeasurementPrgress.scale.setTo(1.2);

        this.cmeasurementTreeTxt = this.add.text(830, 250, this.subtractionScore+'%');
        this.cmeasurementTreeTxt.anchor.setTo(0.5);
        this.cmeasurementTreeTxt.align = 'center';
        this.cmeasurementTreeTxt.fontSize = 20;
        this.cmeasurementTreeTxt.fontWeight = 'normal';
        this.cmeasurementTreeTxt.fill = '#000000';
        this.cmeasurementTreeTxt.wordWrap = true;
        this.cmeasurementTreeTxt.wordWrapWidth = 500;


        this.cnumberoperationPrgress = game.add.sprite(830,330,'progressCircle');
        this.cnumberoperationPrgress.frame = this.multiplicationScore-1;
        this.cnumberoperationPrgress.anchor.setTo(0.5);
        this.cnumberoperationPrgress.scale.setTo(1.2);

        this.cnumberoperationPrgressTxt = this.add.text(830, 330, this.multiplicationScore+'%');
        this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
        this.cnumberoperationPrgressTxt.align = 'center';
        this.cnumberoperationPrgressTxt.fontSize = 20;
        this.cnumberoperationPrgressTxt.fontWeight = 'normal';
        this.cnumberoperationPrgressTxt.fill = '#000000';
        this.cnumberoperationPrgressTxt.wordWrap = true;
        this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

        this.cshapesPrgress = game.add.sprite(830,410,'progressCircle');
        this.cshapesPrgress.frame = this.divisionScore-1;
        this.cshapesPrgress.anchor.setTo(0.5);
        this.cshapesPrgress.scale.setTo(1.2);

        this.cshapesPrgressTxt = this.add.text(830, 410, this.divisionScore+'%');
        this.cshapesPrgressTxt.anchor.setTo(0.5);
        this.cshapesPrgressTxt.align = 'center';
        this.cshapesPrgressTxt.fontSize = 20;
        this.cshapesPrgressTxt.fontWeight = 'normal';
        this.cshapesPrgressTxt.fill = '#000000';
        this.cshapesPrgressTxt.wordWrap = true;
        this.cshapesPrgressTxt.wordWrapWidth = 500;

        
    },
	
}
