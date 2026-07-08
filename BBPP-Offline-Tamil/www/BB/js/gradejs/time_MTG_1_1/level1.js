Game.time_MTG_1_1level1=function(){};

Game.time_MTG_1_1level1.prototype={

    init:function(param,score)
    {
        _this = this;
        ///window.languageSelected="English";
        this.Stararr = param;
        this.score = score;
	  if(window.quizQuest == false)
        this.score =parseInt(window.score);

    
        //        telInitializer.gameIdInit("time5_1",gradeSelected);
        telInitializer2.gameIdInit2("MTG1.1");
    },

    preload:function(game){
        if(!window.grade1MT1){

            window.grade1MT1 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

        this.load.image('Level5.1_bg1',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/bg1.png');
        //this.load.atlas('CommonBackBtn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/5.1/backbtn.json');
        //this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/5.1/speaker.json');
       // this.load.atlas('starAnim',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/5.1/starAnim.json');
        this.load.image('cloud',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/cloud.png');
        //this.load.atlas('btn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.1/btn.json');
        //this.load.image('bg3',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/bg3.png');
       // this.load.image('tittleBaar',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/tittleBaar.png');
       // this.load.atlas('replay',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.1/reply.json');
        
        //My files to load
        //this.load.atlas('gameBox',window.baseUrl+'assets/gradeAssets/5.1/gameBox.png' ,window.baseUrl+'json/gradeJson/5.1/gameBox.json');
        this.load.atlas('Level5.1_allimg',window.baseUrl+'assets/gradeAssets/5.1/allimg.png' ,window.baseUrl+'json/gradeJson/5.1/allimg.json');
        this.load.image('Level5.1_glow',window.baseUrl+'assets/gradeAssets/5.1/glow.png');
        
        //game items
         this.load.image('Level5.1_night1',window.baseUrl+'assets/gradeAssets/5.1/C1.png');
         this.load.image('Level5.1_night2',window.baseUrl+'assets/gradeAssets/5.1/C2.png');
         this.load.image('Level5.1_night3',window.baseUrl+'assets/gradeAssets/5.1/C3.png');
         this.load.image('Level5.1_night4',window.baseUrl+'assets/gradeAssets/5.1/C4.png');
        
         this.load.image('Level5.1_evng1',window.baseUrl+'assets/gradeAssets/5.1/C5.png');
         this.load.image('Level5.1_evng2',window.baseUrl+'assets/gradeAssets/5.1/C6.png');
         this.load.image('Level5.1_evng3',window.baseUrl+'assets/gradeAssets/5.1/C7.png');
         this.load.image('Level5.1_evng4',window.baseUrl+'assets/gradeAssets/5.1/C8.png');
        
         this.load.image('Level5.1_day1',window.baseUrl+'assets/gradeAssets/5.1/C9.png');
         this.load.image('Level5.1_day2',window.baseUrl+'assets/gradeAssets/5.1/C10.png');
         this.load.image('Level5.1_day3',window.baseUrl+'assets/gradeAssets/5.1/C11.png');
         this.load.image('Level5.1_day4',window.baseUrl+'assets/gradeAssets/5.1/C12.png');
         this.load.image('Level5.1_day5',window.baseUrl+'assets/gradeAssets/5.1/C13.png');
        
         this.load.image('Level5.1_mrng1',window.baseUrl+'assets/gradeAssets/5.1/C14.png');
         this.load.image('Level5.1_mrng2',window.baseUrl+'assets/gradeAssets/5.1/C15.png');
         this.load.image('Level5.1_mrng3',window.baseUrl+'assets/gradeAssets/5.1/C16.png');
         this.load.image('Level5.1_mrng4',window.baseUrl+'assets/gradeAssets/5.1/C17.png');
         this.load.image('Level5.1_mrng5',window.baseUrl+'assets/gradeAssets/5.1/C18.png');

        
         this.load.image('Level5.1_dBox1',window.baseUrl+'assets/gradeAssets/5.1/A1.png');
         this.load.image('Level5.1_dBox2',window.baseUrl+'assets/gradeAssets/5.1/A2.png');
         this.load.image('Level5.1_dBox3',window.baseUrl+'assets/gradeAssets/5.1/A3.png');
         this.load.image('Level5.1_dBox4',window.baseUrl+'assets/gradeAssets/5.1/A4.png');
        
        this.load.atlas('Level5.1_gameBox1',window.baseUrl+'assets/gradeAssets/5.1/B2.png' ,window.baseUrl+'json/gradeJson/5.1/B2.json');
        this.load.atlas('Level5.1_gameBox2',window.baseUrl+'assets/gradeAssets/5.1/B3.png' ,window.baseUrl+'json/gradeJson/5.1/B3.json');
        this.load.atlas('Level5.1_gameBox3',window.baseUrl+'assets/gradeAssets/5.1/B4.png' ,window.baseUrl+'json/gradeJson/5.1/B4.json');
        this.load.atlas('Level5.1_gameBox4',window.baseUrl+'assets/gradeAssets/5.1/B5.png' ,window.baseUrl+'json/gradeJson/5.1/B5.json');
        

    }

    if(!window.grade1MT2){

            window.grade1MT2 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

        this.load.image('Level52_bg1',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg1.png');
         this.load.atlas('Level52_btn',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/btn.png',window.baseUrl+'json/gradeJson/5.2/btn.json');
         this.load.image('Level52_bg3',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg3.png');
         this.load.image('Level52_tittleBaar',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/tittleBaar.png');
         this.load.atlas('Level52_replay',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/reply.png' ,window.baseUrl+'json/gradeJson/5.2/reply.json');
      
         this.load.image('Level52_glow',window.baseUrl+'assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Level52_Bg',window.baseUrl+'assets/gradeAssets/5.2/Bg.png');
         this.load.image('Level52_main_image1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('Level52_main_image2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('Level52_main_image3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('Level52_main_image4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('Level52_main_image5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('Level52_main_image6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('Level52_blankimg',window.baseUrl+'assets/gradeAssets/5.2/animslide.png',window.baseUrl+'json/gradeJson/5.2/animslide.json');
        
        
         /*this.load.atlas('Level52_sunday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/sunday.png',window.baseUrl+'json/gradeJson/5.2/sunday.json');
         this.load.atlas('Level52_monday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/monday.png',window.baseUrl+'json/gradeJson/5.2/monday.json');
         this.load.atlas('Level52_tuesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/tuesday.png',window.baseUrl+'json/gradeJson/5.2/tuesday.json');
         this.load.atlas('Level52_wednesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/wednesday.png',window.baseUrl+'json/gradeJson/5.2/wednesday.json');
         this.load.atlas('Level52_thursday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/thursday.png',window.baseUrl+'json/gradeJson/5.2/thursday.json');
         this.load.atlas('Level52_friday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/friday.png',window.baseUrl+'json/gradeJson/5.2/friday.json');
         this.load.atlas('Level52_saturday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/saturday.png',window.baseUrl+'json/gradeJson/5.2/saturday.json');
         */
         this.load.atlas('Level52_sunday',window.baseUrl+'assets/newAssets/07.png',window.baseUrl+'assets/newAssets/07.json');
         this.load.atlas('Level52_monday',window.baseUrl+'assets/newAssets/01.png',window.baseUrl+'assets/newAssets/01.json');
         this.load.atlas('Level52_tuesday',window.baseUrl+'assets/newAssets/02.png',window.baseUrl+'assets/newAssets/02.json');
         this.load.atlas('Level52_wednesday',window.baseUrl+'assets/newAssets/03.png',window.baseUrl+'assets/newAssets/03.json');
         this.load.atlas('Level52_thursday',window.baseUrl+'assets/newAssets/04.png',window.baseUrl+'assets/newAssets/04.json');
         this.load.atlas('Level52_friday',window.baseUrl+'assets/newAssets/05.png',window.baseUrl+'assets/newAssets/05.json');
         this.load.atlas('Level52_saturday',window.baseUrl+'assets/newAssets/06.png',window.baseUrl+'assets/newAssets/06.json');
         
        
         this.load.image('Level52_wed1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/wed1.png');
         this.load.image('Level52_tue1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/tue1.png');
         this.load.image('Level52_sun1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sun1.png');
         this.load.image('Level52_sat1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sat1.png');
         this.load.image('Level52_fri1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/fri1.png');
         this.load.image('Level52_thu1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/thu1.png');
         this.load.image('Level52_mon1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/mon1.png');
        
         this.load.image('Level52_mon2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/mon2.png');
         this.load.image('Level52_sat2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sat2.png');
         this.load.image('Level52_sun2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sun2.png');
         this.load.image('Level52_fri2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/fri2.png');
         this.load.image('Level52_tue2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/tue2.png');
         this.load.image('Level52_thu2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/thu2.png');
         this.load.image('Level52_wed2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/wed2.png');
        
         this.load.image('Level52_sun3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sun3.png');
         this.load.image('Level52_fri3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/fri3.png');
         this.load.image('Level52_mon3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/mon3.png');
         this.load.image('Level52_wed3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/wed3.png');
         this.load.image('Level52_thu3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/thu3.png');
         this.load.image('Level52_sat3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sat3.png');
         this.load.image('Level52_tue3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/tue3.png');
      
         this.load.image('Level52_tue4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/tue4.png');
         this.load.image('Level52_wed4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/wed4.png');
         this.load.image('Level52_mon4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/mon4.png');
         this.load.image('Level52_fri4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/fri4.png');
         this.load.image('Level52_sun4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sun4.png');
         this.load.image('Level52_thu4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/thu4.png');
         this.load.image('Level52_sat4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sat4.png');
    
         this.load.image('Level52_sat5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sat5.png');
         this.load.image('Level52_fri5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/fri5.png');
         this.load.image('Level52_tue5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/tue5.png');
         this.load.image('Level52_thu5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/thu5.png');
         this.load.image('Level52_sun5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sun5.png');
         this.load.image('Level52_wed5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/wed5.png');
         this.load.image('Level52_mon5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/mon5.png');
        
         this.load.image('Level52_sun6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sun6.png');
         this.load.image('Level52_tue6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/tue6.png');
         this.load.image('Level52_thu6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/thu6.png');
         this.load.image('Level52_sat6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sat6.png');
         this.load.image('Level52_fri6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/fri6.png');
         this.load.image('Level52_wed6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/wed6.png');
         this.load.image('Level52_mon6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/mon6.png');
        
         this.load.image('Level52_sun19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_mon19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_tue19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_wed19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_thu19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_fri19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_sat19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
        
         this.load.image('Level52_sun20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_mon20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_tue20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_wed20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_thu20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_fri20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_sat20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
        
         this.load.image('Level52_sun21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_mon21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_tue21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_wed21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_thu21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_fri21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_sat21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
        
         this.load.image('Level52_sun22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_mon22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_tue22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_wed22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_thu22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_fri22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_sat22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
        
         this.load.image('Level52_sun23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_mon23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_tue23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_wed23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_thu23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_fri23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_sat23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
        
         this.load.image('Level52_sun24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_mon24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_tue24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_wed24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_thu24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_fri24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_sat24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
        

    }

    if(!window.grade1MT3){

            window.grade1MT3 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

        this.load.image('Level54_bg1',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.atlas('Level54_btn',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.4/btn.json');
        this.load.image('Level54_bg3',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/bg3.png');
        this.load.image('Level54_tittleBaar',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/tittleBaar.png');
        this.load.atlas('Level54_replay',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.4/reply.json');
        //this.load.atlas('Level54_monthname',window.baseUrl+'assets/gradeAssets/5.4/monthname.png' ,window.baseUrl+'json/gradeJson/5.4/monthname.json');
        if(window.languageSelected == "Gujarati")
			this.load.atlas('Level54_monthname',window.baseUrl+'assets/newAssets/monthname1.png' ,window.baseUrl+'assets/newAssets/monthname1.json');
		else
			this.load.atlas('Level54_monthname',window.baseUrl+'assets/newAssets/monthname.png' ,window.baseUrl+'assets/newAssets/monthname.json');
        //game assets
        this.load.atlas('Level54_main_imageanim',window.baseUrl+'assets/gradeAssets/5.4/main_imageanim.png' ,window.baseUrl+'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image',window.baseUrl+'assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow',window.baseUrl+'assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN',window.baseUrl+'assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB',window.baseUrl+'assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR',window.baseUrl+'assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR',window.baseUrl+'assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY',window.baseUrl+'assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE',window.baseUrl+'assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY',window.baseUrl+'assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG',window.baseUrl+'assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP',window.baseUrl+'assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT',window.baseUrl+'assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV',window.baseUrl+'assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC',window.baseUrl+'assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2',window.baseUrl+'assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2',window.baseUrl+'assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2',window.baseUrl+'assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2',window.baseUrl+'assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2',window.baseUrl+'assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2',window.baseUrl+'assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2',window.baseUrl+'assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2',window.baseUrl+'assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2',window.baseUrl+'assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2',window.baseUrl+'assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2',window.baseUrl+'assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2',window.baseUrl+'assets/gradeAssets/5.4/DEC2.png');
        

    }

    },

    create:function(game){

        _this.amplify = null;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;

        _this.questionid = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;

        _this.Stararr = [];

        _this.timeadd=0;

        _this.mrngArrays =new Array();
        _this.dayArrays =new Array();
        _this.evngArrays =new Array();
        _this.nightArrays =new Array();
        _this.rightOrderArray =new Array();
        _this.glowOrderArray =new Array();
        _this.objGroup = null;
        _this.no1=0;
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);
        //console.log("qarray "+qArrays);
        _this.mrngArrays = ["Level5.1_mrng1","Level5.1_mrng2","Level5.1_mrng3","Level5.1_mrng4","Level5.1_mrng5","Level5.1_mrng3"];
        _this.dayArrays = ["Level5.1_day1","Level5.1_day2","Level5.1_day3","Level5.1_day4","Level5.1_day5","Level5.1_day3"];
        _this.evngArrays = ["Level5.1_evng1","Level5.1_evng2","Level5.1_evng3","Level5.1_evng4","Level5.1_evng2","Level5.1_evng1"];
        _this.nightArrays = ["Level5.1_night1","Level5.1_night2","Level5.1_night3","Level5.1_night4","Level5.1_night1","Level5.1_night3"];

        _this.mrngArrays = this.shuffle(_this.mrngArrays);
        _this.dayArrays = this.shuffle(_this.dayArrays);
        _this.evngArrays = this.shuffle(_this.evngArrays);
        _this.nightArrays = this.shuffle(_this.nightArrays);

        _this.count=0;
        _this.count1=0;
        _this.tweenCount = 0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level5.1_bg1');
        
        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/5.1/English/5.1_1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
             _this.soundurl =  window.baseUrl+"questionSounds/5.1/Hindi/5.1_1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/5.1/Kannada/5.1_1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/5.1/5.1_1.mp3";
        }
		else if(window.languageSelected == "Marathi")
                      {
                           _this.soundurl =  window.baseUrl+"questionSounds/5.1/Marathi/5.1_1.mp3";
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.soundurl =  window.baseUrl+"questionSounds/5.1/Telugu/5.1_1.mp3";
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.soundurl =  window.baseUrl+"questionSounds/5.1/Tamil/5.1_1.mp3";
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.soundurl =  window.baseUrl+"questionSounds/5.1/Urdu/5.1_1.mp3";
                      } 
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/5.1/Odiya/5.1_1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar.addNavBar(game,_this.soundurl,"measurement3");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MTG1.1','level1',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

        _this.graphics = this.add.graphics(0, 400);
        _this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
        _this.graphics.beginFill(0xFF700B, 1);
        _this.graphics.drawRect(0,0,960,120);		
        _this.graphics.boundsPadding = 0;
        _this.graphics.alpha=0;

//        if(window.languageSelected=="English")
//            _this.timeadd=7000;
//        else if(window.languageSelected=="Hindi")
//            _this.timeadd=5000;
//        else if(window.languageSelected=="Kannada")
//            _this.timeadd=6000;
//        else
//            _this.timeadd=6000;
        // no1++;
        _this.getQuestion();

    },

    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
        } 
        _this.starsGroup.getChildAt(0).frame = 2;
      if(window.quizQuest == true)
      {
          this.starsGroup.visible = false;
          
          this.quiztext = this.add.text(120,24, "\n"+window.quizText+"\n");
          this.quiztext.anchor.setTo(0.5);
          this.quiztext.align = 'center';
          this.quiztext.font = 'gradefont';
          this.quiztext.fontWeight = 'normal';
          this.quiztext.fontSize = 18;
          this.quiztext.fill = '#ADFF2F';
      }
    },
    
    getQuestion:function(target)
    {     
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

//        _this.stopVoice();
        _this.noofAttempts = 0;
        _this.AnsTimerCount=0;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
//            _this.updateTimer();
        }, _this);
        _this.timer1.start();

        //console.log("get "+_this.qArrays[_this.no1]);
//        _this.speakerbtn.inputEnabled=true;       
//        _this.speakerbtn.input.useHandCursor = true;
        
        switch(_this.qArrays[_this.no1])      
        {
            case 1: _this.gotoFirstQuestion();
                break;
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break;
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
        }

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    addDragBoxes:function(){

        //no1++;
        _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();

        _this.x = 100;
        _this.x1 = 180;
        _this. y = 150;
        _this.y1 = 130;

        _this.box1 = _this.gameBoxGroup.create(160,200,'Level5.1_gameBox1');
        _this.box1.anchor.setTo(0.435,0.42); 
        _this.box1.name = "Level5.1_gameBox1";

        _this.box2 = _this.gameBoxGroup.create(360,200,'Level5.1_gameBox2');
        _this.box2.anchor.setTo(0.435,0.42); 
        _this.box2.name = "Level5.1_gameBox2";

        _this.box3 = _this.gameBoxGroup.create(560,200,'Level5.1_gameBox3');
        _this.box3.anchor.setTo(0.435,0.42);
        _this.box3.name = "Level5.1_gameBox3";

        _this.box4 = _this.gameBoxGroup.create(760,200,'Level5.1_gameBox4');
        _this.box4.anchor.setTo(0.435,0.42);
        _this.box4.name = "Level5.1_gameBox4";

        _this.gameBoxGroup.add(_this.box1);
        _this.gameBoxGroup.add(_this.box2);
        _this.gameBoxGroup.add(_this.box3);
        _this.gameBoxGroup.add(_this.box4);

		tickMark = this.add.sprite(860,250,'Level51A_tickMark');
        //dragBox = this.add.sprite(0,0,'Level41A_gameBox');      	
        _this.crocsGroup.add(tickMark);
		
        for(var k=0;k<_this.gameBoxGroup.children.length;k++)
        {
            _this.targetChild = _this.add.sprite(0,0,'Level5.1_allimg');
            //targetChild.frameName = gameBoxGroup.getChildAt(i).frameName;
            _this.targetChild.anchor.setTo(0.5);
            _this.targetChild.alpha = 0;
            _this.gameBoxGroup.getChildAt(k).addChild(_this.targetChild); 
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).inputEnabled = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).input.useHandCursor = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.add(_this.boxDragFunction,_this);
        }

    },

    addDragListener:function(target){

        //console.log("1111111111111111111111");
        _this.objGroup.bringToTop(target);
        _this.vx = target.x;   
        _this.vy = target.y; 

        target.input.enableDrag(true);
        
        commonNavBar.playClickSound();
        
        target.events.onDragStop.add(
            function(target){

                for(var i=0;i<_this.gameBoxGroup.children.length;i++)
                {

                    //console.log("if in");
                    // console.log(target.name);
                    if(_this.checkOverlap(target,_this.gameBoxGroup.getChildAt(i))&&_this.gameBoxGroup.getChildAt(i).frameName=="blank")
                    {
                        //console.log("hit");  
                        _this.gameBoxGroup.getChildAt(i).frameName = target.name;
                        target.visible = false;
                        commonNavBar.playSnapSound();
                        _this.count++;
                        break;

                    }
                    else  
                    {
                        // target.x = vx;   
                        // target.y = vy; 
                    }
                    // target.events.onDragStop.removeAll(); 

                }
                target.events.onDragStop.removeAll(); 
                target.x = _this.vx;   
                target.y = _this.vy;
                ////console.log(count);
                if(_this.count>=4)
                {
                    tickMark.inputEnabled = true; 
                    tickMark.input.useHandCursor = true; 
                    tickMark.events.onInputDown.add(this.checkFortheRightOrder,this); 
                    tickMark.events.onInputUp.add(function(target){
                        tickMark.frame = 0;
                    },this);
                    tickMark.events.onInputUp.removeAll();
                }
            },_this);
    },

    boxDragFunction:function(target){
        // console.log("1 "+target.frameName);   
        // console.log("2 "+target.parent.frameName);   
        target.frameName = target.parent.frameName;
        
        commonNavBar.playClickSound();
        
        if(target.frameName!="blank")
        {
            //console.log("in");
            target.parent.frameName = "blank";
            target.alpha = 1;
            _this.vx = target.x;   
            _this.vy = target.y;

            target.input.enableDrag(true);
            _this.gameBoxGroup.bringToTop(target.parent);

            target.events.onDragStop.add(
                function(target){

                    for(var i=0;i< _this.gameBoxGroup.children.length;i++)
                    {
                        //console.log("if"+target.frameName);
                        //console.log("iff"+target.parent.frameName);
                        if( _this.checkOverlap(target, _this.gameBoxGroup.getChildAt(i))&& _this.gameBoxGroup.getChildAt(i).frameName=="blank")
                        {
                            //console.log("hitttttt");
                            var frameName = target.frameName;
                            target.parent.frameName =  _this.gameBoxGroup.getChildAt(i).frameName;
                            _this.gameBoxGroup.getChildAt(i).frameName = frameName;
                            commonNavBar.playSnapSound();
                            break;

                        }
                        else if(this.checkOverlap(target, _this.graphics))
                        {
                            //console.log("3");
                            target.parent.frameName = "blank";
                            _this.count--;
                            //tickMark.events.onInputDown.removeAll();
                            ////console.log(count);
                            _this.objGroup.getByName(target.frameName).visible = true;
                            break;
                            //  target.x = vx;   
                            //  target.y = vy; 
                        }else
                        {
                            //console.log("4")
                            target.parent.frameName = target.frameName;

                            // objGroup.getByName(target.frameName).visible = true;
                            //  target.x = vx;   
                            //  target.y = vy; 
                        }
                    }
                    target.events.onDragStop.removeAll(); 
                    target.alpha = 0;
                    target.x = _this.vx;
                    target.y = _this.vy;
                    target.frameName = "blank";
                    _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox1"));          
                    _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox2"));          
                    _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox3"));          
                    _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox4"));          
                },_this);
        }

    },

    checkAns:function(target){

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        if(_this.timer1)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        /*_this.currentTime = window.timeSaveFunc();
        var saveAsment = 
            { 
                id_game_play: _this.savedVar,
                id_question: _this.questionid,   
                pass: "Yes",
                time2answer: _this.AnsTimerCount,
                attempts: _this.noofAttempts,
                date_time_submission: _this.currentTime, 
                access_token: window.acctkn 
            }*/

       
//        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        _this.objGroup.destroy();
        // target.events.onInputDown.removeAll();

//        _this.speakerbtn.inputEnabled=false;

        _this.tween = this.add.tween(_this.gameBoxGroup);
        _this.tween.to({ y: 75 }, 0, 'Linear', true, 0);
        // tween.onComplete.add(this.addQuestion, this);

        _this.tween.onComplete.add(function(){

        }, _this);

        _this.tween1 = this.add.tween(_this.crocsGroup);
        _this.tween1.to({ y: 75 }, 0, 'Linear', true, 0);
        // tween.onComplete.add(this.addQuestion, this);

        _this.tween1.onComplete.add(function(){
            //this.checkFortheRightOrder();
            commonNavBar.playCelebrationSound();
            _this.Stararr.push(3);
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            // ////console.log(starAnim);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play();
            _this.anim4.onComplete.add(function(){
                _this.addGlowtoTheSprite();
            },_this);
//            _this.count1++;

        }, _this);
      if(window.quizQuest == true)
				{
					commonNavBar.updateScore(+5);
				}
    },

    checkFortheRightOrder:function(target){
        target.frame = 1;
        commonNavBar.playClickSound();
        target.events.onInputDown.removeAll();
        _this.noofAttempts++;
        _this.wrongBox = _this.add.group();
        _this.wrongBoxArray = [];
        _this.wrongBoxParentArray = [];
        _this.indexArray = [];
        _this.rightCount = 0;
        _this.selectedFrameArray = [];
        _this.objTovisible = [];
        _this.wrongXpos = [];
        _this.wrongYpos = [];
        _this.wrongBox.x = _this.gameBoxGroup.x;
        _this.wrongBox.y = _this.gameBoxGroup.y;
        // ////console.log(gameBoxGroup.children.length);

        for(var i=0;i<_this.gameBoxGroup.children.length;i++)
        {
            // ////console.log("for");
            // ////console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(_this.gameBoxGroup.getChildAt(i).frameName == _this.rightOrderArray[i])
            {
                // ////console.log("right");
                _this.rightCount++;
                _this.selectedFrameArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
                // ////console.log(gameBoxGroup.getChildAt(i).frameName);
                _this.count--;
                _this.gameBoxGroup.getChildAt(i).visible = false;
                _this.selectedFrameArray.push("blank");
                _this.objTovisible.push(_this.gameBoxGroup.getChildAt(i).frameName);
                _this.wrongBoxArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
                _this.wrongBoxParentArray.push(_this.gameBoxGroup.getChildAt(i).name);
                _this.indexArray.push(i);
                _this.wrongXpos.push(_this.gameBoxGroup.getChildAt(i).x);
                _this.wrongYpos.push(_this.gameBoxGroup.getChildAt(i).y);
            }
        }

        for(var j=0;j<_this.wrongBoxArray.length;j++)
        {
            //wrongBox.add(wrongBoxArray[j]); 
            _this.wBox = _this.wrongBox.create(0,0,_this.wrongBoxParentArray[j]);
            _this.wBox.anchor.setTo(0.435,0.42);
            _this.wBox.x = _this.wrongXpos[j];
            _this.wBox.y = _this.wrongYpos[j];
            _this.wBox.frameName = _this.wrongBoxArray[j];
        }
        /* var box1 = gameBoxGroup.create(170,200,'gameBox1');
        box1.anchor.setTo(0.435,0.42); 
        box1.name = "gameBox1";

        var box2 = gameBoxGroup.create(360,200,'gameBox2');
        box2.anchor.setTo(0.435,0.42); 
        box2.name = "gameBox2";

        var box3 = gameBoxGroup.create(560,200,'gameBox3');
        box3.anchor.setTo(0.435,0.42);
        box3.name = "gameBox3";

        var box4 = gameBoxGroup.create(760,200,'gameBox4');
        box4.anchor.setTo(0.435,0.42);
        box4.name = "gameBox4";

        wrongBox.add(box1);
        wrongBox.add(box2);
        wrongBox.add(box3);
        wrongBox.add(box4);*/
        // _this.noofAttempts++;
        
        _this.shake.shake(10,_this.wrongBox);

        _this.time.events.add(1000, function(){

            _this.wrongBox.destroy();

            for(var j=0;j<_this.gameBoxGroup.children.length;j++)
            {
                _this.gameBoxGroup.getChildAt(j).visible = true;
//                _this.gameBoxGroup.getChildAt(j).frameName = _this.selectedFrameArray[j];  //To reset the sprites on frames if wrong
            }
            //console.log("object to visible "+objTovisible);
            //To bring the sprites on down if wrong
//            for(var k=0;k<_this.objTovisible.length;k++)
//            {
//                _this.objGroup.getByName(_this.objTovisible[k]).visible = true;  
//            }

            //this.addGlowtoTheSprite();
            if(_this.rightCount>=4)
            {

            }
            else
            {
                //target.frame = 0;
            }

        }, _this);
        
        //To disable the 4 sprite inside boxes after answering the questions
        for(var k=0;k<_this.gameBoxGroup.children.length;k++)
        {
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll(); 
        }
        if(_this.rightCount>=4)
        {
            telInitializer2.gameCorrectAns();
            _this.checkAns();
        }
        else
        {
            telInitializer2.gameWrongAns();
            _this.wrongAns();
        }
//        target.events.onInputDown.removeAll(); 
    },
    
    wrongAns:function(target)
    {
        // //console.log("wrong");

        _this.shake.shake(10, target);
        commonNavBar.playWrongCelebrationSound();
       
        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        _this.time.events.add(1500, this.removeEverthing, _this);
         if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}                           
    },

    addGlowtoTheSprite:function(target){
        //  ////console.log("Glow");
        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).removeChildren();
        _this.glow = _this.add.sprite(11,18,'Level5.1_glow');
        _this.glow.anchor.setTo(0.495);

        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).addChild(_this.glow);  
        _this.anim = _this.glow.animations.add('Level5.1_glow');
        _this.anim.play(100,1);
        _this.time.events.add(1000, function(){

            _this.anim.stop();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).removeChildren();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).addChild(_this.glow);

            _this.anim.play(100,1);

            _this.time.events.add(1000, function(){

                _this.anim.stop();
                _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).removeChildren();
                _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).addChild(_this.glow);

                _this.anim.play();

                _this.time.events.add(1000, function(){

                    _this.anim.stop();
                    _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).removeChildren();
                    _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).addChild(_this.glow);

                    _this.anim.play();

                    _this.time.events.add(1000, function(){_this.removeEverthing();},_this);

                },_this);

            },_this);

        },_this);
    },

    removeEverthing:function() 
    {
        //  gameBoxGroup.destroy();
        //  crocsGroup.destroy();
        //  objGroup.destroy();
        _this.no1++;
        ////console.log("--------------------------"+no1);
        if(_this.no1 < 3)
        {
            tickMark.destroy();
            _this.MaintweenDestroy = this.add.tween(_this.objGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.objGroup.destroy();
            },_this);
            _this.Maintween1Destroy = _this.add.tween(_this.gameBoxGroup);
            _this.Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.Maintween1Destroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
            },_this);
            _this.Maintween2Destroy = _this.add.tween(_this.crocsGroup);
            _this.Maintween2Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.Maintween2Destroy.onComplete.add(function(){
                _this.crocsGroup.destroy();

                _this.count =0;
                _this.tweenCount=0;
                 if(window.quizQuest == true)
				{
					var timerStopVar = commonNavBar.stopTimer();
					commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
					commonNavBar.questionArray=null,
					commonNavBar.questionCount=null,
					commonNavBar.soundUrl=null,
					commonNavBar.speakerbtn=null,
					
					quizCommonFile.changeQuestions(this.Stararr,commonNavBar.getScore());
				}
				else
				{
					_this.getQuestion();
				}
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2;
                _this.count1++;

            },_this);

        }
        else
        {
            _this.stopVoice();
            
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.navBar = null;
            commonNavBar.backbtn = null;
            commonNavBar.mcIcon = null;
            commonNavBar.speakerbtn = null;

            _this.state.start('time_MTG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
            //_this.state.start('time_MTG_1_1level5',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    gotoFirstQuestion:function(){

        _this.questionid = 1;
        //console.log("WOWOWOW "+no1);
        _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.nightArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.evngArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.evngArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.dayArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.dayArrays[_this.no1];

        _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.mrngArrays[_this.no1];

        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);

    },

    gotoSecondQuestion:function(){
        _this.questionid = 1;
        //console.log("WOWOWOW "+no1);
        _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.dayArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.dayArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.nightArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.nightArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.mrngArrays[_this.no1];

        _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.evngArrays[_this.no1];

        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },

    gotoThirdQuestion:function(){
        _this.questionid = 1;
        _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.nightArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.dayArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.dayArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.mrngArrays[_this.no1];

        _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.evngArrays[_this.no1];


        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];   

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },

    gotoFourthQuestion:function(){
        _this.questionid = 1;
        //console.log("WOWOWOW "+no1,nightArrays[no1],evngArrays[no1],dayArrays[no1],mrngArrays[no1]);
        _this.addDragBoxes();


        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.nightArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.evngArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.evngArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.dayArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.dayArrays[_this.no1];


        _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.mrngArrays[_this.no1];

        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];   

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },

    gotoFifthQuestion:function(){
        _this.questionid = 1;
        _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.nightArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.dayArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.dayArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.evngArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.evngArrays[_this.no1];


        _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name =_this.mrngArrays[_this.no1];

        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];   

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },

    gotoSixthQuestion:function(){
        _this.questionid = 1;
        _this.addDragBoxes();
        _this.objGroup = _this.add.group();
        _this.b1 = _this.add.sprite(170,505,_this.dayArrays[_this.no1]);
        _this.b1.anchor.setTo(0.5,1);
        _this.b1.name = _this.dayArrays[_this.no1];

        _this.b2 = _this.add.sprite(375,505,_this.nightArrays[_this.no1]);
        _this.b2.anchor.setTo(0.5,1);
        _this.b2.name = _this.nightArrays[_this.no1];

        _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
        _this.b3.anchor.setTo(0.5,1);
        _this.b3.name = _this.mrngArrays[_this.no1];

        _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
        _this.b4.anchor.setTo(0.5,1);
        _this.b4.name = _this.evngArrays[_this.no1];

        if(_this.no1==0)
        {
            _this.getVoice();
            _this.time.events.add(_this.timeadd,function(){
                _this.b1.inputEnabled = true;
                _this.b1.input.useHandCursor = true;
                _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.b4.events.onInputDown.add(_this.addDragListener,_this);
            },_this);
        }
        else
        {
            _this.b1.inputEnabled = true;
            _this.b1.input.useHandCursor = true;
            _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b2.events.onInputDown.add(_this.addDragListener,_this);
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b3.events.onInputDown.add(_this.addDragListener,_this);
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.b4.events.onInputDown.add(_this.addDragListener,_this);
        }

        _this.objGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.objGroup.add(_this.b3);
        _this.objGroup.add(_this.b4);

        _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
        _this.glowOrderArray = [0,1,2,3];   

        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);

        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },


    updateTimer:function() {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            if(_this.minutes<10){
                this.minutes =  this.minutes+1;
                _this.seconds = 00;
            }
            else{
                this.minutes =  this.minutes+1;

            }
        }
        else{
            if (_this.counterForTimer < 10)        
                this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
        this.timeDisplay.setText(_this.minutes+':' + this.seconds);

        //timer.setText(minutes + ':'+ seconds );
    },


    update:function(){

    },

    getVoice:function(){
        _this.stopVoice();  

        /*_this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        console.log("voice "+window.languageSelected);
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.1/English/5.1_1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.1/Hindi/5.1_1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.1/Kannada/5.1_1.mp3");
        } 
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/5.1/Odiya/5.1_1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();*/

        commonNavBar.getVoice(_this.soundurl);

       

    },

    amplifyMedia:function(mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function(multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function() { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },

    stopVoice:function()
    {         
        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }

        if(_this.amplify!=null)
        {
            _this.amplify.context.close();
            _this.amplify = null;
        }
    },

};