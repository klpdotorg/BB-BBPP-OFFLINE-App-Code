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


        //BB++
        this.cnumbersTotal = 10;
		this.cintegersTotal = 22;
		this.cfractionsTotal = 25;
        this.cdecimalsTotal = 20;//19
        this.cratioandproportionTotal = 3;
        this.calgebraTotal = 25;//15
        this.cshapesTotal = 21;
		this.cmensurationTotal = 6;

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

    	// this.graphics1 = game.add.graphics(450, 50);
		// this.graphics1.lineStyle(2, 0x000000, 1);
		// this.graphics1.beginFill(0xFFFF0B,0.5);
    	// this.graphics1.drawRect(50, 10, 400, 40);

    	this.graphics2 = game.add.graphics(10, 90);
		this.graphics2.lineStyle(2, 0x000000, 1);
		this.graphics2.beginFill(0xFFFFFF,1);
    	this.graphics2.drawRect(50, 10, 400, 430);

    	// this.graphics3 = game.add.graphics(450, 90);
		// this.graphics3.lineStyle(2, 0x000000, 1);
		// this.graphics3.beginFill(0xFFFFFF,1);
    	// this.graphics3.drawRect(50, 10, 400, 430);

    	// this.graphics4 = game.add.graphics(10, 120);
		// this.graphics4.lineStyle(2, 0x000000, 1);
		// //this.graphics2.beginFill(0xFFFF0B,0.5);
    	// this.graphics4.drawRect(70, 10, 360, 390);

    	// this.graphics5 = game.add.graphics(450, 120);
		// this.graphics5.lineStyle(2, 0x000000, 1);
		// //this.graphics2.beginFill(0xFFFF0B,0.5);
    	// this.graphics5.drawRect(70, 10, 360, 390);

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

        
        // this.cpracticemodeTxt = this.add.text(580, 80,challengeText);
        // this.cpracticemodeTxt.anchor.setTo(0.5);
        // this.cpracticemodeTxt.align = 'center';
        // this.cpracticemodeTxt.fontSize = 32;
        // this.cpracticemodeTxt.fontWeight = 'normal';
        // this.cpracticemodeTxt.fill = '#000000';
        // this.cpracticemodeTxt.wordWrap = true;
        // this.cpracticemodeTxt.wordWrapWidth = 500;

        // this.challengemodeTotalLearningTimeTxt = this.add.text(620, 118,TotalLearningText);
        // this.challengemodeTotalLearningTimeTxt.anchor.setTo(0.5);
        // this.challengemodeTotalLearningTimeTxt.align = 'center';
        // this.challengemodeTotalLearningTimeTxt.fontSize = 24;
        // this.challengemodeTotalLearningTimeTxt.fontWeight = 'normal';
        // this.challengemodeTotalLearningTimeTxt.fill = '#000000';
        // this.challengemodeTotalLearningTimeTxt.wordWrap = true;
        // this.challengemodeTotalLearningTimeTxt.wordWrapWidth = 500;

        // this.ctimeIcon = game.add.sprite(760,116,'timeIcon');
        // this.ctimeIcon.frame = 0;
        // this.ctimeIcon.anchor.setTo(0.5);
        // this.ctimeIcon.scale.setTo(1.2);



        this.completedTxt = this.add.text(320, 140,completedText);
        this.completedTxt.anchor.setTo(0.5);
        this.completedTxt.align = 'center';
        this.completedTxt.fontSize = 14;
        this.completedTxt.fontWeight = 'normal';
        this.completedTxt.fill = '#000000';
        this.completedTxt.wordWrap = true;
        this.completedTxt.wordWrapWidth = 500;

        // this.ccompletedTxt = this.add.text(700, 140,completedText);
        // this.ccompletedTxt.anchor.setTo(0.5);
        // this.ccompletedTxt.align = 'center';
        // this.ccompletedTxt.fontSize = 14;
        // this.ccompletedTxt.fontWeight = 'normal';
        // this.ccompletedTxt.fill = '#000000';
        // this.ccompletedTxt.wordWrap = true;
        // this.ccompletedTxt.wordWrapWidth = 500;

        // this.cScoreTxt = this.add.text(830, 140,scoreText);
        // this.cScoreTxt.anchor.setTo(0.5);
        // this.cScoreTxt.align = 'center';
        // this.cScoreTxt.fontSize = 14;
        // this.cScoreTxt.fontWeight = 'normal';
        // this.cScoreTxt.fill = '#000000';
        // this.cScoreTxt.wordWrap = true;
        // this.cScoreTxt.wordWrapWidth = 500;


        if(this.selectedMc=="Number Systems")
        {
            this.gotoAddNSMCTopics(game);
        }
        else if(this.selectedMc=="Algebra")
        {
            this.gotoAddALMCTopics(game); 
            //this.gotoAddMMCTopics(game);
        }
        else if(this.selectedMc=="Geometry")
        {
            this.gotoAddGEMCTopics(game); 
            // this.gotoAddNOMCTopics(game);
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

        this.practiceModeTime = parseInt(this.responseData.PMNST);
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

        // this.challengemodeTimeTxt = this.add.text(840, 118,this.challengeModeTime);
        // this.challengemodeTimeTxt.anchor.setTo(0.5);
        // this.challengemodeTimeTxt.align = 'center';
        // this.challengemodeTimeTxt.fontSize = 18;
        // this.challengemodeTimeTxt.fontWeight = 'normal';
        // this.challengemodeTimeTxt.fill = '#000000';
        // this.challengemodeTimeTxt.wordWrap = true;
        // this.challengemodeTimeTxt.wordWrapWidth = 500;

        this.numbersPersent = Math.round((parseInt(this.responseData.PNSN)/this.cnumbersTotal)*100);
        this.integersPercent = Math.round((parseInt(this.responseData.PNSI)/this.cintegersTotal)*100);
        this.fractionsPercent = Math.round((parseInt(this.responseData.PNSF)/this.cfractionsTotal)*100);
        this.decimalsPercent = Math.round((parseInt(this.responseData.PNSD)/this.cdecimalsTotal)*100);
        this.ratioandproportionPercent = Math.round((parseInt(this.responseData.PNSR)/this.cratioandproportionTotal)*100);


        // this.cnumbersPersent = Math.round((parseInt(this.responseData.CNSN)/this.cnumbersTotal)*100);
        // this.csequencePersent = Math.round((parseInt(this.responseData.CNSS)/this.csequenceTotal)*100);
        // this.ccomparisonPersent = Math.round((parseInt(this.responseData.CNSC)/this.ccomparisonTotal)*100);
        // this.cplacevaluePersent = Math.round((parseInt(this.responseData.CNSPV)/this.cplacevalueTotal)*100);
        // this.cfractionPersent = Math.round((parseInt(this.responseData.CNSF)/this.cfractionTotal)*100);



        // this.passcount = parseInt(this.responseData.CNSNP);
        // this.failcount = parseInt(this.responseData.CNSNF);
        // this.hintcount = parseInt(this.responseData.CNSNH);
        // this.totalgameplayed = parseInt(this.responseData.CNSNT);

        // this.passcount1 = parseInt(this.responseData.CNSSP);
        // this.failcount1 = parseInt(this.responseData.CNSSF);
        // this.hintcount1 = parseInt(this.responseData.CNSSH);
        // this.totalgameplayed1 = parseInt(this.responseData.CNSST);

        // this.passcount2 = parseInt(this.responseData.CNSCP);
        // this.failcount2 = parseInt(this.responseData.CNSCF);
        // this.hintcount2 = parseInt(this.responseData.CNSCH);
        // this.totalgameplayed2 = parseInt(this.responseData.CNSCT);

        // this.passcount3 = parseInt(this.responseData.CNSFP);
        // this.failcount3 = parseInt(this.responseData.CNSFF);
        // this.hintcount3 = parseInt(this.responseData.CNSFH);
        // this.totalgameplayed3 = parseInt(this.responseData.CNSFT);

        // this.passcount4 = parseInt(this.responseData.CNSPVP);
        // this.failcount4 = parseInt(this.responseData.CNSPVF);
        // this.hintcount4 = parseInt(this.responseData.CNSPVH);
        // this.totalgameplayed4 = parseInt(this.responseData.CNSPVT);


        // if(isNaN(this.hintcount))
        //     this.hintcount = 0;
        // if(isNaN(this.hintcount1))
        //     this.hintcount1 = 0;
        // if(isNaN(this.hintcount2))
        //     this.hintcount2 = 0;
        // if(isNaN(this.hintcount3))
        //     this.hintcount3 = 0;
        // if(isNaN(this.hintcount4))
        //     this.hintcount4 = 0;

        

        // if(this.hintcount > this.passcount)
        //     this.passcount = this.hintcount+2;
        // if(this.hintcount1 > this.passcount1)
        //     this.passcount1 = this.hintcount1+2;
        // if(this.hintcount2 > this.passcount2)
        //     this.passcount2 = this.hintcount2+2;
        // if(this.hintcount3 > this.passcount3)
        //     this.passcount3 = this.hintcount3+2;
        // if(this.hintcount4 > this.passcount4)
        //     this.passcount4 = this.hintcount4+2;


    //    if(this.totalgameplayed>0)
    //             this.numbersScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
    //         if(this.totalgameplayed1>0)
    //             this.sequenceScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
    //         if(this.totalgameplayed2>0)
    //             this.comparisonScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
    //         if(this.totalgameplayed3>0)
    //             this.fractionScore = Math.round((((this.passcount3*5)-(this.hintcount3*3))/((this.passcount3*5)+this.failcount3))*100);
    //         if(this.totalgameplayed4>0)
    //             this.placevalueScore = Math.round((((this.passcount4*5)-(this.hintcount4*3))/((this.passcount4*5)+this.failcount4))*100);

      //  this.graphics4.destroy();

        // this.graphics4 = game.add.graphics(10, 120);
        // this.graphics4.lineStyle(2, 0x000000, 1);
        // //this.graphics2.beginFill(0xFFFF0B,0.5);
        // this.graphics4.drawRect(70, 10, 360, 400);

        // this.graphics5.destroy();

        // this.graphics5 = game.add.graphics(450, 120);
        // this.graphics5.lineStyle(2, 0x000000, 1);
        // //this.graphics2.beginFill(0xFFFF0B,0.5);
        // this.graphics5.drawRect(70, 10, 360, 400);

        this.numbersTree = game.add.sprite(140,160,'mcIconNumber');
        //this.numberSenseTree.frame = 0;
        this.numbersTree.anchor.setTo(0.5);
        this.numbersTree.scale.setTo(1.5);

        this.numbersTreeTxt = this.add.text(140, 200, window.selctedLang.numbersTitle);
        this.numbersTreeTxt.anchor.setTo(0.5);
        this.numbersTreeTxt.align = 'center';
        this.numbersTreeTxt.fontSize = 16;
        this.numbersTreeTxt.fontWeight = 'normal';
        this.numbersTreeTxt.fill = '#000000';
        this.numbersTreeTxt.wordWrap = true;
        this.numbersTreeTxt.wordWrapWidth = 500;

        this.integersTree = game.add.sprite(140,240,'mcIconInteger');
        //this.measurementTree.frame = 1;
        this.integersTree.anchor.setTo(0.5);
        this.integersTree.scale.setTo(1.5);

        this.integersTreeTxt = this.add.text(140, 280, window.selctedLang.integersTitle);
        this.integersTreeTxt.anchor.setTo(0.5);
        this.integersTreeTxt.align = 'center';
        this.integersTreeTxt.fontSize = 16;
        this.integersTreeTxt.fontWeight = 'normal';
        this.integersTreeTxt.fill = '#000000';
        this.integersTreeTxt.wordWrap = true;
        this.integersTreeTxt.wordWrapWidth = 500;

        this.fractionsTree = game.add.sprite(140,320,'mcIconFraction');
        //this.numberoperationTree.frame = 2;
        this.fractionsTree.anchor.setTo(0.5);
        this.fractionsTree.scale.setTo(1.5);

        this.fractionsTreeTxt = this.add.text(140, 360, window.selctedLang.fractionTitle);
        this.fractionsTreeTxt.anchor.setTo(0.5);
        this.fractionsTreeTxt.align = 'center';
        this.fractionsTreeTxt.fontSize = 16;
        this.fractionsTreeTxt.fontWeight = 'normal';
        this.fractionsTreeTxt.fill = '#000000';
        this.fractionsTreeTxt.wordWrap = true;
        this.fractionsTreeTxt.wordWrapWidth = 500;

        this.decimalsTreeTree = game.add.sprite(140,400,'mcIconDecimal');
        //this.shapesTree.frame = 3;
        this.decimalsTreeTree.anchor.setTo(0.5);
        this.decimalsTreeTree.scale.setTo(1.5);

        this.decimalsTreeTreeTxt = this.add.text(140, 440, window.selctedLang.decimalTitle);
        this.decimalsTreeTreeTxt.anchor.setTo(0.5);
        this.decimalsTreeTreeTxt.align = 'center';
        this.decimalsTreeTreeTxt.fontSize = 16;
        this.decimalsTreeTreeTxt.fontWeight = 'normal';
        this.decimalsTreeTreeTxt.fill = '#000000';
        this.decimalsTreeTreeTxt.wordWrap = true;
        this.decimalsTreeTreeTxt.wordWrapWidth = 500;

        this.ratioandproportionTree = game.add.sprite(140,480,'mcIconRatioProportion');
        //this.shapesTree.frame = 3;
        this.ratioandproportionTree.anchor.setTo(0.5);
        this.ratioandproportionTree.scale.setTo(1.5);

        this.ratioandproportionTreeTxt = this.add.text(160, 520,  window.selctedLang.ratioandproportionTitle);//ratioandproportionTitle
        this.ratioandproportionTreeTxt.anchor.setTo(0.5);
        this.ratioandproportionTreeTxt.align = 'center';
        this.ratioandproportionTreeTxt.fontSize = 16;
        this.ratioandproportionTreeTxt.fontWeight = 'normal';
        this.ratioandproportionTreeTxt.fill = '#000000';
        this.ratioandproportionTreeTxt.wordWrap = true;
        this.ratioandproportionTreeTxt.wordWrapWidth = 500;


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

        this.numbersensePrgressTotalTxt = this.add.text(390, 170, this.responseData.PNSN+'/'+this.cnumbersTotal);
        this.numbersensePrgressTotalTxt.anchor.setTo(0.5);
        this.numbersensePrgressTotalTxt.align = 'center';
        this.numbersensePrgressTotalTxt.fontSize = 20;
        this.numbersensePrgressTotalTxt.fontWeight = 'normal';
        this.numbersensePrgressTotalTxt.fill = '#000000';
        this.numbersensePrgressTotalTxt.wordWrap = true;
        this.numbersensePrgressTotalTxt.wordWrapWidth = 500;

        this.integersPrgress = game.add.sprite(320,250,'progressCircle');
        this.integersPrgress.frame = this.integersPercent-1;
        this.integersPrgress.anchor.setTo(0.5);
        this.integersPrgress.scale.setTo(1.2);

        this.integersPrgressTxt = this.add.text(320, 250, this.integersPercent+'%');
        this.integersPrgressTxt.anchor.setTo(0.5);
        this.integersPrgressTxt.align = 'center';
        this.integersPrgressTxt.fontSize = 20;
        this.integersPrgressTxt.fontWeight = 'normal';
        this.integersPrgressTxt.fill = '#000000';
        this.integersPrgressTxt.wordWrap = true;
        this.integersPrgressTxt.wordWrapWidth = 500;

        this.integersPrgressTotalTxt = this.add.text(390, 250, this.responseData.PNSI+'/'+this.cintegersTotal);
        this.integersPrgressTotalTxt.anchor.setTo(0.5);
        this.integersPrgressTotalTxt.align = 'center';
        this.integersPrgressTotalTxt.fontSize = 20;
        this.integersPrgressTotalTxt.fontWeight = 'normal';
        this.integersPrgressTotalTxt.fill = '#000000';
        this.integersPrgressTotalTxt.wordWrap = true;
        this.integersPrgressTotalTxt.wordWrapWidth = 500;

        this.fractionsPrgress = game.add.sprite(320,330,'progressCircle');
        this.fractionsPrgress.frame = this.fractionsPercent-1;
        this.fractionsPrgress.anchor.setTo(0.5);
        this.fractionsPrgress.scale.setTo(1.2);

        this.fractionsPrgressTxt = this.add.text(320, 330, this.fractionsPercent+'%');
        this.fractionsPrgressTxt.anchor.setTo(0.5);
        this.fractionsPrgressTxt.align = 'center';
        this.fractionsPrgressTxt.fontSize = 20;
        this.fractionsPrgressTxt.fontWeight = 'normal';
        this.fractionsPrgressTxt.fill = '#000000';
        this.fractionsPrgressTxt.wordWrap = true;
        this.fractionsPrgressTxt.wordWrapWidth = 500;

        this.fractionsPrgressTotalTxt = this.add.text(390, 330, this.responseData.PNSF+'/'+this.cfractionsTotal);
        this.fractionsPrgressTotalTxt.anchor.setTo(0.5);
        this.fractionsPrgressTotalTxt.align = 'center';
        this.fractionsPrgressTotalTxt.fontSize = 20;
        this.fractionsPrgressTotalTxt.fontWeight = 'normal';
        this.fractionsPrgressTotalTxt.fill = '#000000';
        this.fractionsPrgressTotalTxt.wordWrap = true;
        this.fractionsPrgressTotalTxt.wordWrapWidth = 500;

        this.decimalPrgress = game.add.sprite(320,410,'progressCircle');
        this.decimalPrgress.frame = this.decimalsPercent-1;
        this.decimalPrgress.anchor.setTo(0.5);
        this.decimalPrgress.scale.setTo(1.2);

        this.decimalPrgressTxt = this.add.text(320, 410, this.decimalsPercent+'%');
        this.decimalPrgressTxt.anchor.setTo(0.5);
        this.decimalPrgressTxt.align = 'center';
        this.decimalPrgressTxt.fontSize = 20;
        this.decimalPrgressTxt.fontWeight = 'normal';
        this.decimalPrgressTxt.fill = '#000000';
        this.decimalPrgressTxt.wordWrap = true;
        this.decimalPrgressTxt.wordWrapWidth = 500;

        this.decimalPrgressTotalTxt = this.add.text(390, 410, this.responseData.PNSD+'/'+this.cdecimalsTotal);
        this.decimalPrgressTotalTxt.anchor.setTo(0.5);
        this.decimalPrgressTotalTxt.align = 'center';
        this.decimalPrgressTotalTxt.fontSize = 20;
        this.decimalPrgressTotalTxt.fontWeight = 'normal';
        this.decimalPrgressTotalTxt.fill = '#000000';
        this.decimalPrgressTotalTxt.wordWrap = true;
        this.decimalPrgressTotalTxt.wordWrapWidth = 500;

        this.ratioPrgress = game.add.sprite(320,490,'progressCircle');
        this.ratioPrgress.frame = this.ratioandproportionPercent-1;
        this.ratioPrgress.anchor.setTo(0.5);
        this.ratioPrgress.scale.setTo(1.2);

        this.ratioPrgressTxt = this.add.text(320, 490, this.ratioandproportionPercent+'%');
        this.ratioPrgressTxt.anchor.setTo(0.5);
        this.ratioPrgressTxt.align = 'center';
        this.ratioPrgressTxt.fontSize = 20;
        this.ratioPrgressTxt.fontWeight = 'normal';
        this.ratioPrgressTxt.fill = '#000000';
        this.ratioPrgressTxt.wordWrap = true;
        this.ratioPrgressTxt.wordWrapWidth = 500;

        this.ratioPrgressTotalTxt = this.add.text(390, 490, this.responseData.PNSR+'/'+this.cratioandproportionTotal);
        this.ratioPrgressTotalTxt.anchor.setTo(0.5);
        this.ratioPrgressTotalTxt.align = 'center';
        this.ratioPrgressTotalTxt.fontSize = 20;
        this.ratioPrgressTotalTxt.fontWeight = 'normal';
        this.ratioPrgressTotalTxt.fill = '#000000';
        this.ratioPrgressTotalTxt.wordWrap = true;
        this.ratioPrgressTotalTxt.wordWrapWidth = 500;
  
    },

    gotoAddALMCTopics:function(game){

        this.practiceModeTime = parseInt(this.responseData.PALGT);
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

        // this.challengemodeTimeTxt = this.add.text(840, 118,this.challengeModeTime);
        // this.challengemodeTimeTxt.anchor.setTo(0.5);
        // this.challengemodeTimeTxt.align = 'center';
        // this.challengemodeTimeTxt.fontSize = 18;
        // this.challengemodeTimeTxt.fontWeight = 'normal';
        // this.challengemodeTimeTxt.fill = '#000000';
        // this.challengemodeTimeTxt.wordWrap = true;
        // this.challengemodeTimeTxt.wordWrapWidth = 500;

        this.algebraPercent = Math.round((parseInt(this.responseData.PALG)/this.calgebraTotal)*100);
   


        this.algebraTree = game.add.sprite(140,180,'mcIconAlgebra');
        //this.numberSenseTree.frame = 0;
        this.algebraTree.anchor.setTo(0.5);
        this.algebraTree.scale.setTo(1.5);

        this.algebraTreeTreeTxt = this.add.text(160, 220,window.selctedLang.algebraTitle);//algebraTitle
        this.algebraTreeTreeTxt.anchor.setTo(0.5);
        this.algebraTreeTreeTxt.align = 'center';
        this.algebraTreeTreeTxt.fontSize = 16;
        this.algebraTreeTreeTxt.fontWeight = 'normal';
        this.algebraTreeTreeTxt.fill = '#000000';
        this.algebraTreeTreeTxt.wordWrap = true;
        this.algebraTreeTreeTxt.wordWrapWidth = 500;

        // this.measurementTree = game.add.sprite(140,240,'mcIconWeight');
        // //this.measurementTree.frame = 1;
        // this.measurementTree.anchor.setTo(0.5);
        // this.measurementTree.scale.setTo(1.5);

        // this.measurementTreeTxt = this.add.text(140, 280, window.selctedLang.weightTitle);
        // this.measurementTreeTxt.anchor.setTo(0.5);
        // this.measurementTreeTxt.align = 'center';
        // this.measurementTreeTxt.fontSize = 16;
        // this.measurementTreeTxt.fontWeight = 'normal';
        // this.measurementTreeTxt.fill = '#000000';
        // this.measurementTreeTxt.wordWrap = true;
        // this.measurementTreeTxt.wordWrapWidth = 500;

        // this.numberoperationTree = game.add.sprite(140,320,'mcIconTime');
        // //this.numberoperationTree.frame = 2;
        // this.numberoperationTree.anchor.setTo(0.5);
        // this.numberoperationTree.scale.setTo(1.5);

        // this.numberoperationTreeTxt = this.add.text(140, 360, window.selctedLang.timeTitle);
        // this.numberoperationTreeTxt.anchor.setTo(0.5);
        // this.numberoperationTreeTxt.align = 'center';
        // this.numberoperationTreeTxt.fontSize = 16;
        // this.numberoperationTreeTxt.fontWeight = 'normal';
        // this.numberoperationTreeTxt.fill = '#000000';
        // this.numberoperationTreeTxt.wordWrap = true;
        // this.numberoperationTreeTxt.wordWrapWidth = 500;

        // this.shapesTree = game.add.sprite(140,400,'mcIconVolume');
        // //this.shapesTree.frame = 3;
        // this.shapesTree.anchor.setTo(0.5);
        // this.shapesTree.scale.setTo(1.5);

        // this.shapesTreeTxt = this.add.text(140, 440, window.selctedLang.volumeTitle);
        // this.shapesTreeTxt.anchor.setTo(0.5);
        // this.shapesTreeTxt.align = 'center';
        // this.shapesTreeTxt.fontSize = 16;
        // this.shapesTreeTxt.fontWeight = 'normal';
        // this.shapesTreeTxt.fill = '#000000';
        // this.shapesTreeTxt.wordWrap = true;
        // this.shapesTreeTxt.wordWrapWidth = 500;


        this.algebraPrgress = game.add.sprite(320,190,'progressCircle');
        this.algebraPrgress.frame = this.algebraPercent-1;
        this.algebraPrgress.anchor.setTo(0.5);
        this.algebraPrgress.scale.setTo(1.2);

        this.algebraPercentTxt = this.add.text(320, 190, this.algebraPercent+'%');
        this.algebraPercentTxt.anchor.setTo(0.5);
        this.algebraPercentTxt.align = 'center';
        this.algebraPercentTxt.fontSize = 20;
        this.algebraPercentTxt.fontWeight = 'normal';
        this.algebraPercentTxt.fill = '#000000';
        this.algebraPercentTxt.wordWrap = true;
        this.algebraPercentTxt.wordWrapWidth = 500;

        this.algebraPrgressTotalTxt = this.add.text(390, 190, this.responseData.PALG +'/'+this.calgebraTotal);// this.responseData.PALGV
        this.algebraPrgressTotalTxt.anchor.setTo(0.5);
        this.algebraPrgressTotalTxt.align = 'center';
        this.algebraPrgressTotalTxt.fontSize = 20;
        this.algebraPrgressTotalTxt.fontWeight = 'normal';
        this.algebraPrgressTotalTxt.fill = '#000000';
        this.algebraPrgressTotalTxt.wordWrap = true;
        this.algebraPrgressTotalTxt.wordWrapWidth = 500;


    },

    gotoAddGEMCTopics:function(game){

        this.practiceModeTime = parseInt(this.responseData.PMGMT);
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

     
        this.shapesPercent = Math.round((parseInt(this.responseData.PGMS)/this.cshapesTotal)*100);
        this.mensurationPercent = Math.round((parseInt(this.responseData.PGMM)/this.cmensurationTotal)*100);


        // this.passcount = parseInt(this.responseData.CNOAP);
        // this.failcount = parseInt(this.responseData.CNOAF);
        // this.hintcount = parseInt(this.responseData.CNOAH);
        // this.totalgameplayed = parseInt(this.responseData.CNOAT);

        // this.passcount1 = parseInt(this.responseData.CNOSP);
        // this.failcount1 = parseInt(this.responseData.CNOSF);
        // this.hintcount1 = parseInt(this.responseData.CNOSH);
        // this.totalgameplayed1 = parseInt(this.responseData.CNOST);

        // this.passcount2 = parseInt(this.responseData.CNOMP);
        // this.failcount2 = parseInt(this.responseData.CNOMF);
        // this.hintcount2 = parseInt(this.responseData.CNOMH);
        // this.totalgameplayed2 = parseInt(this.responseData.CNOMT);

        // this.passcount3 = parseInt(this.responseData.CNODP);
        // this.failcount3 = parseInt(this.responseData.CNODF);
        // this.hintcount3 = parseInt(this.responseData.CNODH);
        // this.totalgameplayed3 = parseInt(this.responseData.CNODT);


        // if(isNaN(this.hintcount))
        //     this.hintcount = 0;
        // if(isNaN(this.hintcount1))
        //     this.hintcount1 = 0;
        // if(isNaN(this.hintcount2))
        //     this.hintcount2 = 0;
        // if(isNaN(this.hintcount3))
        //     this.hintcount3 = 0;

        

        // if(this.hintcount > this.passcount)
        //     this.passcount = this.hintcount+2;
        // if(this.hintcount1 > this.passcount1)
        //     this.passcount1 = this.hintcount1+2;
        // if(this.hintcount2 > this.passcount2)
        //     this.passcount2 = this.hintcount2+2;
        // if(this.hintcount3 > this.passcount3)
        //     this.passcount3 = this.hintcount3+2;


    //    if(this.totalgameplayed>0)
    //             this.additionScore = Math.round((((this.passcount*5)-(this.hintcount*3))/((this.passcount*5)+this.failcount))*100);
    //         if(this.totalgameplayed1>0)
    //             this.subtractionScore = Math.round((((this.passcount1*5)-(this.hintcount1*3))/((this.passcount1*5)+this.failcount1))*100);
    //         if(this.totalgameplayed2>0)
    //             this.multiplicationScore = Math.round((((this.passcount2*5)-(this.hintcount2*3))/((this.passcount2*5)+this.failcount2))*100);
    //         if(this.totalgameplayed3>0)
    //             this.divisionScore = Math.round((((this.passcount3*5)-(this.hintcount3*3))/((this.passcount3*5)+this.failcount3))*100);

        this.shapesTree = game.add.sprite(140,190,'mcIconShapes');
        //this.numberSenseTree.frame = 0;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 230, window.selctedLang.shapesTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;

        this.mensurationTree = game.add.sprite(140,270,'mcIconMensuration');
        //this.mensurationTree.frame = 1;
        this.mensurationTree.anchor.setTo(0.5);
        this.mensurationTree.scale.setTo(1.5);

        this.mensurationTreeTxt = this.add.text(140, 310, window.selctedLang.mensurationTitle);
        this.mensurationTreeTxt.anchor.setTo(0.5);
        this.mensurationTreeTxt.align = 'center';
        this.mensurationTreeTxt.fontSize = 16;
        this.mensurationTreeTxt.fontWeight = 'normal';
        this.mensurationTreeTxt.fill = '#000000';
        this.mensurationTreeTxt.wordWrap = true;
        this.mensurationTreeTxt.wordWrapWidth = 500;

        // this.numberoperationTree = game.add.sprite(140,320,'mcIconMultiplication');
        // //this.numberoperationTree.frame = 2;
        // this.numberoperationTree.anchor.setTo(0.5);
        // this.numberoperationTree.scale.setTo(1.5);

        // this.numberoperationTreeTxt = this.add.text(140, 360, window.selctedLang.multiplicationTitle);
        // this.numberoperationTreeTxt.anchor.setTo(0.5);
        // this.numberoperationTreeTxt.align = 'center';
        // this.numberoperationTreeTxt.fontSize = 16;
        // this.numberoperationTreeTxt.fontWeight = 'normal';
        // this.numberoperationTreeTxt.fill = '#000000';
        // this.numberoperationTreeTxt.wordWrap = true;
        // this.numberoperationTreeTxt.wordWrapWidth = 500;

        // this.shapesTree = game.add.sprite(140,400,'mcIconDivision');
        // //this.shapesTree.frame = 3;
        // this.shapesTree.anchor.setTo(0.5);
        // this.shapesTree.scale.setTo(1.5);

        // this.shapesTreeTxt = this.add.text(140, 440, window.selctedLang.divisionTitle);
        // this.shapesTreeTxt.anchor.setTo(0.5);
        // this.shapesTreeTxt.align = 'center';
        // this.shapesTreeTxt.fontSize = 16;
        // this.shapesTreeTxt.fontWeight = 'normal';
        // this.shapesTreeTxt.fill = '#000000';
        // this.shapesTreeTxt.wordWrap = true;
        // this.shapesTreeTxt.wordWrapWidth = 500;


        this.shapesPrgress = game.add.sprite(320,200,'progressCircle');
        this.shapesPrgress.frame = this.shapesPercent-1;
        this.shapesPrgress.anchor.setTo(0.5); 
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 200, this.shapesPercent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 200, this.responseData.PGMS+'/'+this.cshapesTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;

        this.mensurationPrgress = game.add.sprite(320,280,'progressCircle');
        this.mensurationPrgress.frame = this.mensurationPercent-1;
        this.mensurationPrgress.anchor.setTo(0.5);
        this.mensurationPrgress.scale.setTo(1.2);

        this.mensurationPrgressTxt = this.add.text(320, 280, this.mensurationPercent+'%');
        this.mensurationPrgressTxt.anchor.setTo(0.5);
        this.mensurationPrgressTxt.align = 'center';
        this.mensurationPrgressTxt.fontSize = 20;
        this.mensurationPrgressTxt.fontWeight = 'normal';
        this.mensurationPrgressTxt.fill = '#000000';
        this.mensurationPrgressTxt.wordWrap = true;
        this.mensurationPrgressTxt.wordWrapWidth = 500;

        this.mensurationPrgressTotalTxt = this.add.text(390, 280, this.responseData.PGMM+'/'+this.cmensurationTotal);
        this.mensurationPrgressTotalTxt.anchor.setTo(0.5);
        this.mensurationPrgressTotalTxt.align = 'center';
        this.mensurationPrgressTotalTxt.fontSize = 20;
        this.mensurationPrgressTotalTxt.fontWeight = 'normal';
        this.mensurationPrgressTotalTxt.fill = '#000000';
        this.mensurationPrgressTotalTxt.wordWrap = true;
        this.mensurationPrgressTotalTxt.wordWrapWidth = 500;
 
    },
	
}
