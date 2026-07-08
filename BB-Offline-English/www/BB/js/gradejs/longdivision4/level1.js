Game.longdivision4=function(){};

Game.longdivision4.prototype={
init:function(game)
    {
        _this = this;
        
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        telInitializer.gameIdInit("NSN1",gradeSelected);

    },

    preload:function(game){
        if(!window.longdivision4){

            window.longdivision4 = true;

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
            this.load.image('nsnpg1_3skipDemoVideos',window.baseUrl+'assets/NSN1/commonAssets/skipArrow.png');
        //common for all games.
        this.load.atlas('nsnpg1_3backbtn',window.baseUrl+'assets/NSN1/commonAssets/backbtn.png' ,window.baseUrl+'json/NSN1/gradeJson/backbtn.json');
        this.load.atlas('nsnpg1_3CommonSpeakerBtn',window.baseUrl+'assets/NSN1/commonAssets/speaker.png' ,window.baseUrl+'json/NSN1/gradeJson/speaker.json');
        this.load.atlas('nsnpg1_3starAnim',window.baseUrl+'assets/NSN1/commonAssets/starAnim.png',window.baseUrl+'json/NSN1/gradeJson/starAnim.json');
        this.load.atlas('nsnpg1_3replay',window.baseUrl+'assets/NSN1/commonAssets/reply.png' ,window.baseUrl+'json/NSN1/gradeJson/reply.json');
        this.load.atlas('nsnpg1_3btn',window.baseUrl+'assets/NSN1/commonAssets/btn.png',window.baseUrl+'json/NSN1/gradeJson/btn.json');
        
        this.load.image('nsnpg1_3background1',window.baseUrl+'assets/NSN1/commonAssets/bg1.png');
        this.load.image('nsnpg1_3tittleBar',window.baseUrl+'assets/NSN1/commonAssets/tittleBar.png');
        this.load.image('nsnpg1_3navBar',window.baseUrl+'assets/NSN1/commonAssets/navBar.png');
        this.load.image('nsnpg1_3timebg',window.baseUrl+'assets/NSN1/commonAssets/timebg.png');
        
        this.load.atlas('nsnpg1_3_erase',window.baseUrl+'assets/NSN1/commonAssets/erase.png' ,window.baseUrl+'json/NSN1/gradeJson/erase.json');
        this.load.atlas('nsnpg1_3_rightmark',window.baseUrl+'assets/NSN1/commonAssets/rightmark.png' ,window.baseUrl+'json/NSN1/gradeJson/rightmark.json');
        this.load.image('nsnpg1_3_numBG',window.baseUrl+'assets/NSN1/commonAssets/b2.png');
        this.load.atlas('nsnpg1_3_numberpad',window.baseUrl+'assets/NSN1/commonAssets/calNum.png',window.baseUrl+'json/NSN1/gradeJson/calNum.json');
        this.load.atlas('nsnpg1_3_numbers1',window.baseUrl+'assets/NSN1/commonAssets/numbers1.png',window.baseUrl+'json/NSN1/gradeJson/numbers1.json');
       
        //game assets.
        this.load.image('nsnpg1_3background',window.baseUrl+'assets/NSN1/gradeAssets/Bg.png');
                     
        this.load.atlas('nsnpg1_3imageBox',window.baseUrl+'assets/NSN1/gradeAssets/imageBox.png',window.baseUrl+'json/NSN1/gradeJson/imageBox.json');
        this.load.image('nsnpg1_3whiteBox',window.baseUrl+'assets/NSN1/gradeAssets/whiteBox.png');
        this.load.atlas('nsnpg1_3numberBox',window.baseUrl+'assets/NSN1/gradeAssets/numberBox.png',window.baseUrl+'json/NSN1/gradeJson/numberBox.json');
        
        this.load.image('nsnpg1_3fullimage1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/full image1.png');
        this.load.image('nsnpg1_3shape1_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_1',window.baseUrl+'assets/NSN1/gradeAssets/image1Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/full image2.png');
        this.load.image('nsnpg1_3shape1_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_2',window.baseUrl+'assets/NSN1/gradeAssets/image2Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/full image3.png');
        this.load.image('nsnpg1_3shape1_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_3',window.baseUrl+'assets/NSN1/gradeAssets/image3Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/full image4.png');
        this.load.image('nsnpg1_3shape1_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_4',window.baseUrl+'assets/NSN1/gradeAssets/image4Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/full image5.png');
        this.load.image('nsnpg1_3shape1_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_5',window.baseUrl+'assets/NSN1/gradeAssets/image5Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/full image6.png');
        this.load.image('nsnpg1_3shape1_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_6',window.baseUrl+'assets/NSN1/gradeAssets/image6Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/full image7.png');
        this.load.image('nsnpg1_3shape1_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_7',window.baseUrl+'assets/NSN1/gradeAssets/image7Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/full image8.png');
        this.load.image('nsnpg1_3shape1_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_8',window.baseUrl+'assets/NSN1/gradeAssets/image8Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/full image9.png');
        this.load.image('nsnpg1_3shape1_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_9',window.baseUrl+'assets/NSN1/gradeAssets/image9Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/full image10.png');
        this.load.image('nsnpg1_3shape1_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_10',window.baseUrl+'assets/NSN1/gradeAssets/image10Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/full image11.png');
        this.load.image('nsnpg1_3shape1_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_11',window.baseUrl+'assets/NSN1/gradeAssets/image11Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/full image12.png');
        this.load.image('nsnpg1_3shape1_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_12',window.baseUrl+'assets/NSN1/gradeAssets/image12Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/full image13.png');
        this.load.image('nsnpg1_3shape1_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_13',window.baseUrl+'assets/NSN1/gradeAssets/image13Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/full image14.png');
        this.load.image('nsnpg1_3shape1_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_14',window.baseUrl+'assets/NSN1/gradeAssets/image14Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/full image15.png');
        this.load.image('nsnpg1_3shape1_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_15',window.baseUrl+'assets/NSN1/gradeAssets/image15Shapes/shape9.png');
        
        this.load.image('nsnpg1_3fullimage16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/full image16.png');
        this.load.image('nsnpg1_3shape1_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape1.png');
        this.load.image('nsnpg1_3shape2_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape2.png');
        this.load.image('nsnpg1_3shape3_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape3.png');
        this.load.image('nsnpg1_3shape4_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape4.png');
        this.load.image('nsnpg1_3shape5_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape5.png');
        this.load.image('nsnpg1_3shape6_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape6.png');
        this.load.image('nsnpg1_3shape7_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape7.png');
        this.load.image('nsnpg1_3shape8_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape8.png');
        this.load.image('nsnpg1_3shape9_16',window.baseUrl+'assets/NSN1/gradeAssets/image16Shapes/shape9.png');

    }

    },
    
	create:function(game)
    {
    _this.amplify = null;
    
        _this.qArray;
        _this.qArray1;
        
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        
        _this.a=0;
        
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";
        
        _this.wrongAnswer = false;
        
        _this.numberPadShown  = false;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.wmusic;
        _this.wrong = true;
        
        _this.clickSound;
        _this.change = 0;
        
        _this.starsGroup;
   
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
    _this.shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no2=0;
        //_this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        
        _this.celebration= false;
        _this.check=0;
        
        _this.soundPlayed = false;
        
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        _this.qArray = _this.shuffle(_this.qArray);
        
    _this.physics.startSystem(Phaser.Physics.ARCADE);
    _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'nsnpg1_3background');
        //_this.bg1.scale.setTo(1.05,1.12);
    
        _this.TopBar=this.add.sprite(0,0,'nsnpg1_3navBar');
        _this.TopBar.name="nsnpg1_3navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'nsnpg1_3backbtn',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
 

        },_this);

         _this.speakerbtn1 = this.add.button(595,7,'nsnpg1_3CommonSpeakerBtn',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn1.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice1();
            
        },_this);
        
        _this.speakerbtn2 = this.add.button(595,7,'nsnpg1_3CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn2.visible=false;
        _this.speakerbtn2.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice2();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'nsnpg1_3timebg');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            _this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        //_this.getVoice();
        _this.getQuestion();     
          
    },

 updateTimer:function() {
        
     _this.counterForTimer++;
     if(_this.counterForTimer>59)
         {
          _this.counterForTimer = 0;
           if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
                        }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
          }
                else{
                        if (_this.counterForTimer < 10)        
                                _this.seconds = '0' + _this.counterForTimer;
                        else
                                _this.seconds = _this.counterForTimer;
                    }
     _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
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
    
    getQuestion:function(target)
    {
    
         //_this.stopvoice();
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         //_this.sceneCount++;
        _this.toCheckNumberPad = true;
    
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
      _this.AnsTimerCount++;
    }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
        
        _this.grpnum=new Array();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
      console.log("get"+_this.no11);
        _this.speakerbtn1.inputEnabled=true;
        _this.speakerbtn1.input.useHandCursor = true;
         
        
      switch(_this.qArray[_this.no11])
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
            case 7: _this.gotoSeventhQuestion();
            break;
            case 8: _this.gotoEighthQuestion();
            break;
            case 9: _this.gotoNinthQuestion();
            break;
            case 10: _this.gotoTenthQuestion();
            break;
            case 11: _this.gotoEleventhQuestion();
            break;
            case 12: _this.gotoTwelvethQuestion();
            break;
            case 13: _this.gotoThirteenthQuestion();
            break;
            case 14: _this.gotoFourteenthQuestion();
            break;
            case 15: _this.gotoFifteenthQuestion();
            break;
            case 16: _this.gotoSixteenthQuestion();
            break;
      }
        
    },
    
   
  generateStarsForTheScene:function(count)
  {
    _this.starsGroup = _this.add.group();
    
    for (var i = 0; i < count; i++)
    {
  
      _this.starsGroup.create(_this.world.centerX-17, 15, 'nsnpg1_3starAnim');
      for(var j =0;j<i;j++)
      {
        if(_this.starsGroup.getChildAt(j))
        {
          _this.starsGroup.getChildAt(j).x-=15;
          _this.starsGroup.getChildAt(i).x+=15;
        }
      }
    }           
  },
  
  /****************************firstquestion************************/
  gotoFirstQuestion:function(){
         _this.questionNo =1;
         _this.getVoice1();
         //_this.no11++;
         console.log("one");
         //even numbers
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(130,220,'nsnpg1_3shape3_1');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape1_1');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(310,220,'nsnpg1_3shape7_1');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape4_1');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(470,220,'nsnpg1_3shape9_1');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(560,220,'nsnpg1_3shape6_1');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape8_1');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape2_1');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(820,220,'nsnpg1_3shape5_1');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "2");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "4");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "6");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "8");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "10");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "12");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "14");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "16");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "18");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
             
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=12141618;
        _this.numberPadShown = false;
    },
    
  gotoSecondQuestion:function(){
         _this.questionNo =2;
         _this.getVoice1();
         //_this.no11++;
         console.log("two");
         //odd numbers
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(130,220,'nsnpg1_3shape5_2');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape8_2');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(302,220,'nsnpg1_3shape4_2');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape1_2');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(470,220,'nsnpg1_3shape9_2');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(565,220,'nsnpg1_3shape7_2');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(640,220,'nsnpg1_3shape3_2');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape6_2');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape2_2');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "1");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "3");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "5");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "7");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "9");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "11");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "13");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "15");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "17");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=11131517;
        _this.numberPadShown = false;
    }, 
    
  gotoThirdQuestion:function(){
         _this.questionNo =3;
         _this.getVoice1();
         //_this.no11++;
         console.log("three");
         //multiples of 3
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(130,220,'nsnpg1_3shape3_3');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape6_3');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(302,220,'nsnpg1_3shape2_3');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(382,220,'nsnpg1_3shape9_3');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(480,220,'nsnpg1_3shape7_3');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(565,220,'nsnpg1_3shape5_3');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(648,220,'nsnpg1_3shape8_3');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(735,220,'nsnpg1_3shape1_3');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape4_3');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "3");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "6");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.inputEnabled=true;
        _this.numberBox3.name="numbox1";
        _this.numberBox3.input.useHandCursor=true;
        _this.numberBox3.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox3.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text3 = this.add.text(-2, 0, "9");
        _this.text3.visible=false;
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "12");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "15");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.frame=1;
      
        _this.text6 = this.add.text(-2, 0, "18");
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "21");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "24");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "27");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=9212427;
        _this.numberPadShown = false;
    },
    
  gotoFourthQuestion:function(){
         _this.questionNo =4;
         _this.getVoice1();
         //_this.no11++;
         console.log("four");
         //Prime numbers
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(135,220,'nsnpg1_3shape6_4');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(212,220,'nsnpg1_3shape3_4');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(297,220,'nsnpg1_3shape9_4');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(392,220,'nsnpg1_3shape7_4');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(480,220,'nsnpg1_3shape1_4');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(563,220,'nsnpg1_3shape4_4');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(648,220,'nsnpg1_3shape8_4');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(732,220,'nsnpg1_3shape2_4');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape5_4');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "2");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "3");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "5");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "7");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.inputEnabled=true;
        _this.numberBox5.name="numbox1";
        _this.numberBox5.input.useHandCursor=true;
        _this.numberBox5.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox5.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text5 = this.add.text(-2, 0, "11");
        _this.text5.visible=false;
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.frame=1;
      
        _this.text6 = this.add.text(-2, 0, "13");
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "17");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "19");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "23");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=11171923;
        _this.numberPadShown = false;
    },
    
  gotoFifthQuestion:function(){
         _this.questionNo =5;
         _this.getVoice1();
         //_this.no11++;
         console.log("five");
         //square numbers
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(135,220,'nsnpg1_3shape4_5');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape8_5');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(305,220,'nsnpg1_3shape6_5');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(385,220,'nsnpg1_3shape3_5');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(475,220,'nsnpg1_3shape2_5');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(565,220,'nsnpg1_3shape7_5');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(640,220,'nsnpg1_3shape9_5');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape5_5');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(820,220,'nsnpg1_3shape1_5');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "4");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "9");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "16");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "25");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "36");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
              
        _this.text6 = this.add.text(-2, 0, "49");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "64");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "81");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "100");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=496481100;
        _this.numberPadShown = false;
    },
    
  gotoSixthQuestion:function(){
         _this.questionNo =6;
         _this.getVoice1();
         //_this.no11++;
         console.log("six");
         //multiples of 6
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(135,220,'nsnpg1_3shape5_6');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape8_6');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(302,220,'nsnpg1_3shape2_6');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(387,220,'nsnpg1_3shape4_6');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(470,220,'nsnpg1_3shape9_6');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(565,220,'nsnpg1_3shape1_6');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape6_6');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(725,220,'nsnpg1_3shape3_6');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(825,220,'nsnpg1_3shape7_6');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "6");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "12");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
              
        _this.text3 = this.add.text(-2, 0, "18");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.name="numbox1";
        _this.numberBox4.input.useHandCursor=true;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text4 = this.add.text(-2, 0, "24");
        _this.text4.visible=false;
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "30");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.frame=1;
      
        _this.text6 = this.add.text(-2, 0, "36");
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "42");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "48");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "54");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=24424854;
        _this.numberPadShown = false;
    },

  gotoSeventhQuestion:function(){
         _this.questionNo =7;
         _this.getVoice1();
         //_this.no11++;
         console.log("seven");
         //multiples of 10
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(135,220,'nsnpg1_3shape6_7');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(212,220,'nsnpg1_3shape9_7');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(308,220,'nsnpg1_3shape1_7');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape5_7');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(477,220,'nsnpg1_3shape8_7');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(560,220,'nsnpg1_3shape2_7');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape4_7');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(740,220,'nsnpg1_3shape7_7');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(810,220,'nsnpg1_3shape3_7');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "10");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "20");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
              
        _this.text3 = this.add.text(-2, 0, "30");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
              
        _this.text4 = this.add.text(-2, 0, "40");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.inputEnabled=true;
        _this.numberBox5.name="numbox1";
        _this.numberBox5.input.useHandCursor=true;
        _this.numberBox5.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox5.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text5 = this.add.text(-2, 0, "50");
        _this.text5.visible=false;
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox2";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "60");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox3";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "70");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox4";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "80");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.frame=1;
              
        _this.text9 = this.add.text(-2, 0, "90");
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=50607080;
        _this.numberPadShown = false;
    }, 
    
  gotoEighthQuestion:function(){
         _this.questionNo =8;
         _this.getVoice1();
         //_this.no11++;
         console.log("eight");
         //even numbers from 26
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
        _this.whiteBox.alpha=0.5;
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(145,220,'nsnpg1_3shape1_8');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape6_8');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(295,220,'nsnpg1_3shape3_8');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(393,220,'nsnpg1_3shape5_8');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(477,220,'nsnpg1_3shape2_8');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(570,220,'nsnpg1_3shape7_8');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(640,220,'nsnpg1_3shape9_8');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape4_8');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape8_8');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "26");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "28");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "30");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "32");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "34");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "36");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "38");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "40");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "42");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=36384042;
        _this.numberPadShown = false;
    },
    
  gotoNinthQuestion:function(){
         _this.questionNo =9;
         _this.getVoice1();
         //_this.no11++;
         console.log("nine");
         //multiples of 9
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
        
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(137,220,'nsnpg1_3shape4_9');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(225,220,'nsnpg1_3shape7_9');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(307,220,'nsnpg1_3shape1_9');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape2_9');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(477,220,'nsnpg1_3shape6_9');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(562,220,'nsnpg1_3shape8_9');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape5_9');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(725,220,'nsnpg1_3shape3_9');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(810,220,'nsnpg1_3shape9_9');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "9");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "18");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "27");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "36");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "45");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "54");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "63");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "72");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "81");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=54637281;
        _this.numberPadShown = false;
    }, 
    
  gotoTenthQuestion:function(){
         _this.questionNo =10;
         _this.getVoice1();
         //_this.no11++;
         console.log("Ten");
         //multiples of 5
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
        
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(137,220,'nsnpg1_3shape5_10');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(215,220,'nsnpg1_3shape9_10');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(309,220,'nsnpg1_3shape1_10');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape4_10');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(477,220,'nsnpg1_3shape8_10');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(560,220,'nsnpg1_3shape2_10');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape6_10');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(725,220,'nsnpg1_3shape3_10');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(825,220,'nsnpg1_3shape7_10');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "5");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "10");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "15");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.name="numbox1";
        _this.numberBox4.input.useHandCursor=true;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text4 = this.add.text(-2, 0, "20");
        _this.text4.visible=false;
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "25");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox2";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "30");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox3";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "35");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox4";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "40");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.frame=1;
      
        _this.text9 = this.add.text(-2, 0, "45");
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=20303540;
        _this.numberPadShown = false;
    },
    
  gotoEleventhQuestion:function(){
         _this.questionNo =11;
         _this.getVoice1();
         //_this.no11++;
         console.log("eleven");
         //odd numbers from 21
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(130,220,'nsnpg1_3shape9_11');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(220,220,'nsnpg1_3shape5_11');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(305,220,'nsnpg1_3shape8_11');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(385,220,'nsnpg1_3shape3_11');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(485,220,'nsnpg1_3shape1_11');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(561,220,'nsnpg1_3shape4_11');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(655,220,'nsnpg1_3shape7_11');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(733,220,'nsnpg1_3shape2_11');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape6_11');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "21");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "23");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "25");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "27");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "29");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "31");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "33");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "35");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "37");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=31333537;
        _this.numberPadShown = false;
    },
    
  gotoTwelvethQuestion:function(){
         _this.questionNo =12;
         _this.getVoice1();
         //_this.no11++;
         console.log("twelve"); 
         //multiples of 8
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(145,220,'nsnpg1_3shape7_12');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(210,220,'nsnpg1_3shape9_12');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(302,220,'nsnpg1_3shape5_12');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(393,220,'nsnpg1_3shape4_12');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(478,220,'nsnpg1_3shape8_12');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(561,220,'nsnpg1_3shape2_12');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape6_12');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(735,220,'nsnpg1_3shape1_12');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(810,220,'nsnpg1_3shape3_12');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "8");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "16");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "24");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "32");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "40");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "48");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "56");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "64");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "72");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=48566472;
        _this.numberPadShown = false;
    },
    
  gotoThirteenthQuestion:function(){
         _this.questionNo =13;
         _this.getVoice1();
         //_this.no11++;
         console.log("thirteen"); 
         //multiples of 7
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(135,220,'nsnpg1_3shape4_13');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(210,220,'nsnpg1_3shape9_13');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(308,220,'nsnpg1_3shape1_13');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(400,220,'nsnpg1_3shape7_13');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(478,220,'nsnpg1_3shape5_13');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(561,220,'nsnpg1_3shape2_13');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(645,220,'nsnpg1_3shape8_13');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(725,220,'nsnpg1_3shape3_13');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(810,220,'nsnpg1_3shape6_13');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "7");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "14");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "21");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "28");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "35");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox1";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "42");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "49");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "56");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "63");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=42495663;
        _this.numberPadShown = false;
    }, 
    
  gotoFourteenthQuestion:function(){
         _this.questionNo =14;
         _this.getVoice1();
         //_this.no11++;
         console.log("fourteen");
         //multiples of 11
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(145,220,'nsnpg1_3shape7_14');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(218,220,'nsnpg1_3shape4_14');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(310,220,'nsnpg1_3shape1_14');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(390,220,'nsnpg1_3shape8_14');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(476,220,'nsnpg1_3shape5_14');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(560,220,'nsnpg1_3shape2_14');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(640,220,'nsnpg1_3shape9_14');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape6_14');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(808,220,'nsnpg1_3shape3_14');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "11");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "22");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "33");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
      
        _this.text4 = this.add.text(-2, 0, "44");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.inputEnabled=true;
        _this.numberBox5.name="numbox1";
        _this.numberBox5.input.useHandCursor=true;
        _this.numberBox5.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox5.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text5 = this.add.text(-2, 0, "55");
        _this.text5.visible=false;
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.frame=1;
      
        _this.text6 = this.add.text(-2, 0, "66");
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox2";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "77");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox3";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "88");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.inputEnabled=true;
        _this.numberBox9.name="numbox4";
        _this.numberBox9.input.useHandCursor=true;
        _this.numberBox9.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox9.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text9 = this.add.text(-2, 0, "99");
        _this.text9.visible=false;
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=55778899;
        _this.numberPadShown = false;
    },
    
  gotoFifteenthQuestion:function(){
         _this.questionNo =15;
         _this.getVoice1();
         //_this.no11++;
         console.log("fifteen");
         //even numbers from 44
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
        
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(137,220,'nsnpg1_3shape8_15');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(217,220,'nsnpg1_3shape4_15');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(310,220,'nsnpg1_3shape7_15');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(385,220,'nsnpg1_3shape3_15');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(485,220,'nsnpg1_3shape1_15');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(555,220,'nsnpg1_3shape9_15');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(647,220,'nsnpg1_3shape5_15');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(732,220,'nsnpg1_3shape2_15');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(815,220,'nsnpg1_3shape6_15');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "44");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "46");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
      
        _this.text3 = this.add.text(-2, 0, "48");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(395,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.inputEnabled=true;
        _this.numberBox4.name="numbox1";
        _this.numberBox4.input.useHandCursor=true;
        _this.numberBox4.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox4.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text4 = this.add.text(-2, 0, "50");
        _this.text4.visible=false;
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.frame=1;
      
        _this.text5 = this.add.text(-2, 0, "52");
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox2";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "54");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox3";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "56");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox4";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "58");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.frame=1;
      
        _this.text9 = this.add.text(-2, 0, "60");
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=50545658;
        _this.numberPadShown = false;
    },
    
  gotoSixteenthQuestion:function(){
         _this.questionNo =16;
         _this.getVoice1();
         //_this.no11++;
         console.log("sixteen");
         //odd numbers from 45
      
        _this.whiteBox = _this.add.sprite(480,250,'nsnpg1_3whiteBox');
        _this.whiteBox.anchor.setTo(0.5);
        _this.whiteBox.scale.setTo(1.3,1.2);
      
        _this.imageBox = _this.add.sprite(482,390,'nsnpg1_3imageBox');
        _this.imageBox.anchor.setTo(0.5);
        _this.imageBox.scale.setTo(0.9);
        _this.imageBox.visible=false;
             
        _this.puzzlePiece1 = _this.add.sprite(137,220,'nsnpg1_3shape8_16');
        _this.puzzlePiece1.anchor.setTo(0.5);
        _this.puzzlePiece1.scale.setTo(0.5);
        _this.puzzlePiece1.name="puzzlePiece1";
        _this.puzzlePiece1.inputEnabled=false;
        _this.puzzlePiece1.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece2 = _this.add.sprite(217,220,'nsnpg1_3shape4_16');
        _this.puzzlePiece2.anchor.setTo(0.5);
        _this.puzzlePiece2.scale.setTo(0.5);
        _this.puzzlePiece2.name="puzzlePiece2";
        _this.puzzlePiece2.inputEnabled=false;
        _this.puzzlePiece2.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece3 = _this.add.sprite(308,220,'nsnpg1_3shape7_16');
        _this.puzzlePiece3.anchor.setTo(0.5);
        _this.puzzlePiece3.scale.setTo(0.5);
        _this.puzzlePiece3.name="puzzlePiece3";
        _this.puzzlePiece3.inputEnabled=false;
        _this.puzzlePiece3.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece4 = _this.add.sprite(380,220,'nsnpg1_3shape3_16');
        _this.puzzlePiece4.anchor.setTo(0.5);
        _this.puzzlePiece4.scale.setTo(0.5);
        _this.puzzlePiece4.name="puzzlePiece4";
        _this.puzzlePiece4.inputEnabled=false;
        _this.puzzlePiece4.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece5 = _this.add.sprite(470,220,'nsnpg1_3shape9_16');
        _this.puzzlePiece5.anchor.setTo(0.5);
        _this.puzzlePiece5.scale.setTo(0.5);
        _this.puzzlePiece5.name="puzzlePiece5";
        _this.puzzlePiece5.inputEnabled=false;
        _this.puzzlePiece5.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece6 = _this.add.sprite(570,220,'nsnpg1_3shape1_16');
        _this.puzzlePiece6.anchor.setTo(0.5);
        _this.puzzlePiece6.scale.setTo(0.5);
        _this.puzzlePiece6.name="puzzlePiece6";
        _this.puzzlePiece6.inputEnabled=false;
        _this.puzzlePiece6.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece7 = _this.add.sprite(647,220,'nsnpg1_3shape6_16');
        _this.puzzlePiece7.anchor.setTo(0.5);
        _this.puzzlePiece7.scale.setTo(0.5);
        _this.puzzlePiece7.name="puzzlePiece7";
        _this.puzzlePiece7.inputEnabled=false;
        _this.puzzlePiece7.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece8 = _this.add.sprite(730,220,'nsnpg1_3shape2_16');
        _this.puzzlePiece8.anchor.setTo(0.5);
        _this.puzzlePiece8.scale.setTo(0.5);
        _this.puzzlePiece8.name="puzzlePiece8";
        _this.puzzlePiece8.inputEnabled=false;
        _this.puzzlePiece8.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.puzzlePiece9 = _this.add.sprite(816,220,'nsnpg1_3shape5_16');
        _this.puzzlePiece9.anchor.setTo(0.5);
        _this.puzzlePiece9.scale.setTo(0.5);
        _this.puzzlePiece9.name="puzzlePiece9";
        _this.puzzlePiece9.inputEnabled=false;
        _this.puzzlePiece9.events.onInputDown.add(_this.dragPuzzle,this);
      
        _this.numberBox1 = _this.add.sprite(140,300,'nsnpg1_3numberBox');
        _this.numberBox1.anchor.setTo(0.5);
        _this.numberBox1.scale.setTo(1.3);
        _this.numberBox1.frame=1;
      
        _this.text1 = this.add.text(-2, 0, "45");
        _this.text1.font = "myfont";
        _this.text1.fill = "#2B3856";
        _this.text1.fontWeight = 'normal';
        _this.text1.anchor.set(0.5);
        _this.text1.fontSize = 26;
        _this.numberBox1.addChild(_this.text1);
      
        _this.numberBox2 = _this.add.sprite(220,300,'nsnpg1_3numberBox');
        _this.numberBox2.anchor.setTo(0.5);
        _this.numberBox2.scale.setTo(1.3);
        _this.numberBox2.frame=1;
      
        _this.text2 = this.add.text(-2, 0, "47");
        _this.text2.font = "myfont";
        _this.text2.fill = "#2B3856";
        _this.text2.fontWeight = 'normal';
        _this.text2.anchor.set(0.5);
        _this.text2.fontSize = 26;
        _this.numberBox2.addChild(_this.text2);
      
        _this.numberBox3 = _this.add.sprite(305,300,'nsnpg1_3numberBox');
        _this.numberBox3.anchor.setTo(0.5);
        _this.numberBox3.scale.setTo(1.3);
        _this.numberBox3.frame=1;
              
        _this.text3 = this.add.text(-2, 0, "49");
        _this.text3.font = "myfont";
        _this.text3.fill = "#2B3856";
        _this.text3.fontWeight = 'normal';
        _this.text3.anchor.set(0.5);
        _this.text3.fontSize = 26;
        _this.numberBox3.addChild(_this.text3);
      
        _this.numberBox4 = _this.add.sprite(392,300,'nsnpg1_3numberBox');
        _this.numberBox4.anchor.setTo(0.5);
        _this.numberBox4.scale.setTo(1.3);
        _this.numberBox4.frame=1;
              
        _this.text4 = this.add.text(-2, 0, "51");
        _this.text4.font = "myfont";
        _this.text4.fill = "#2B3856";
        _this.text4.fontWeight = 'normal';
        _this.text4.anchor.set(0.5);
        _this.text4.fontSize = 26;
        _this.numberBox4.addChild(_this.text4);
      
        _this.numberBox5 = _this.add.sprite(480,300,'nsnpg1_3numberBox');
        _this.numberBox5.anchor.setTo(0.5);
        _this.numberBox5.scale.setTo(1.3);
        _this.numberBox5.inputEnabled=true;
        _this.numberBox5.name="numbox1";
        _this.numberBox5.input.useHandCursor=true;
        _this.numberBox5.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox5.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text5 = this.add.text(-2, 0, "53");
        _this.text5.visible=false;
        _this.text5.font = "myfont";
        _this.text5.fill = "#2B3856";
        _this.text5.fontWeight = 'normal';
        _this.text5.anchor.set(0.5);
        _this.text5.fontSize = 26;
        _this.numberBox5.addChild(_this.text5);
      
        _this.numberBox6 = _this.add.sprite(565,300,'nsnpg1_3numberBox');
        _this.numberBox6.anchor.setTo(0.5);
        _this.numberBox6.scale.setTo(1.3);
        _this.numberBox6.inputEnabled=true;
        _this.numberBox6.name="numbox2";
        _this.numberBox6.input.useHandCursor=true;
        _this.numberBox6.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox6.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text6 = this.add.text(-2, 0, "55");
        _this.text6.visible=false;
        _this.text6.font = "myfont";
        _this.text6.fill = "#2B3856";
        _this.text6.fontWeight = 'normal';
        _this.text6.anchor.set(0.5);
        _this.text6.fontSize = 26;
        _this.numberBox6.addChild(_this.text6);
      
        _this.numberBox7 = _this.add.sprite(650,300,'nsnpg1_3numberBox');
        _this.numberBox7.anchor.setTo(0.5);
        _this.numberBox7.scale.setTo(1.3);
        _this.numberBox7.inputEnabled=true;
        _this.numberBox7.name="numbox3";
        _this.numberBox7.input.useHandCursor=true;
        _this.numberBox7.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox7.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text7 = this.add.text(-2, 0, "57");
        _this.text7.visible=false;
        _this.text7.font = "myfont";
        _this.text7.fill = "#2B3856";
        _this.text7.fontWeight = 'normal';
        _this.text7.anchor.set(0.5);
        _this.text7.fontSize = 26;
        _this.numberBox7.addChild(_this.text7);
              
        _this.numberBox8 = _this.add.sprite(735,300,'nsnpg1_3numberBox');
        _this.numberBox8.anchor.setTo(0.5);
        _this.numberBox8.scale.setTo(1.3);
        _this.numberBox8.inputEnabled=true;
        _this.numberBox8.name="numbox4";
        _this.numberBox8.input.useHandCursor=true;
        _this.numberBox8.events.onInputDown.add(function(target)
              {
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.numberBox8.name ;
                  if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
      
        _this.text8 = this.add.text(-2, 0, "59");
        _this.text8.visible=false;
        _this.text8.font = "myfont";
        _this.text8.fill = "#2B3856";
        _this.text8.fontWeight = 'normal';
        _this.text8.anchor.set(0.5);
        _this.text8.fontSize = 26;
        _this.numberBox8.addChild(_this.text8);
      
        _this.numberBox9 = _this.add.sprite(820,300,'nsnpg1_3numberBox');
        _this.numberBox9.anchor.setTo(0.5);
        _this.numberBox9.scale.setTo(1.3);
        _this.numberBox9.frame=1;
              
        _this.text9 = this.add.text(-2, 0, "61");
        _this.text9.font = "myfont";
        _this.text9.fill = "#2B3856";
        _this.text9.fontWeight = 'normal';
        _this.text9.anchor.set(0.5);
        _this.text9.fontSize = 26;
        _this.numberBox9.addChild(_this.text9);
      
        _this.boxGroup = _this.add.group();
        _this.boxGroup.add(_this.whiteBox);
        _this.boxGroup.add(_this.puzzlePiece1);
        _this.boxGroup.add(_this.puzzlePiece2);
        _this.boxGroup.add(_this.puzzlePiece3);
        _this.boxGroup.add(_this.puzzlePiece4);
        _this.boxGroup.add(_this.puzzlePiece5);
        _this.boxGroup.add(_this.puzzlePiece6);
        _this.boxGroup.add(_this.puzzlePiece7);
        _this.boxGroup.add(_this.puzzlePiece8);
        _this.boxGroup.add(_this.puzzlePiece9);
        _this.boxGroup.add(_this.numberBox1);
        _this.boxGroup.add(_this.numberBox2);
        _this.boxGroup.add(_this.numberBox3);
        _this.boxGroup.add(_this.numberBox4);
        _this.boxGroup.add(_this.numberBox5);
        _this.boxGroup.add(_this.numberBox6);
        _this.boxGroup.add(_this.numberBox7);
        _this.boxGroup.add(_this.numberBox8);
        _this.boxGroup.add(_this.numberBox9);
      
        _this.boxGroup.y = 100;
        _this.tween = _this.add.tween(_this.boxGroup);
        _this.tween.to({ y: 0 }, 0, 'Linear', true, 0);
           
        _this.rightAns=53555759;
        _this.numberPadShown = false;
    },
  /********************************************************/
  
     
 checkOverlap:function(spriteA, spriteB) 
  {
      _this.boundsA = spriteA.getBounds();
      _this.boundsB = spriteB.getBounds();
      return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
 
/************************************/
 addNumberPad:function(target){
       _this.numGroup = _this.add.group();
       _this.numGroup.y=50;
       _this.Maintween = _this.add.tween(_this.numGroup);
       _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
     
       _this.footer = _this.add.sprite(0,470,'nsnpg1_3_numBG');
        _this.numGroup.add(_this.footer);
        var x = 100;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,508,'nsnpg1_3_numberpad'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }
        if((_this.questionNo==1)||(_this.questionNo==2)||(_this.questionNo==5)||(_this.questionNo==8)||(_this.questionNo==9)||(_this.questionNo==11)||(_this.questionNo==12)||(_this.questionNo==13)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox6.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox9.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox6);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        _this.wrongGroup.add(_this.numberBox9);
        }
        else if((_this.questionNo==3)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox3.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox9.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox3);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        _this.wrongGroup.add(_this.numberBox9);
        }
        else if((_this.questionNo==4)||(_this.questionNo==14)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox5.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox9.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox5);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        _this.wrongGroup.add(_this.numberBox9);
        }
        else if((_this.questionNo==6)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox4.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox9.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox4);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        _this.wrongGroup.add(_this.numberBox9);
        }
        else if((_this.questionNo==7)||(_this.questionNo==16)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox5.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox6.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox5);
        _this.wrongGroup.add(_this.numberBox6);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        }
        else if((_this.questionNo==10)||(_this.questionNo==15)){
        _this.numText1 = _this.add.text(0,0, _this.selectedAns1="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 26;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox4.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 26;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox6.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 26;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox7.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns4="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 26;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.numberBox8.addChild(_this.numText4);
            
        _this.wrongGroup = _this.add.group();
        _this.wrongGroup.add(_this.numberBox4);
        _this.wrongGroup.add(_this.numberBox6);
        _this.wrongGroup.add(_this.numberBox7);
        _this.wrongGroup.add(_this.numberBox8);
        }
        
        _this.eraser = _this.numGroup.create(x+10,509,'nsnpg1_3_erase');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.inputEnabled = true;
        _this.eraser.name = "eraser";
        _this.eraser.events.onInputDown.add(function(){
            _this.clickSound.play();
           _this.eraser.frame=1;
            if(_this.selectedBox == "numbox1")
            {
            _this.numText1.setText("");
            _this.selectedAns1=""; 
            }
            if(_this.selectedBox == "numbox2")
            {
            _this.numText2.setText("");
            _this.selectedAns2=""; 
            }
            if(_this.selectedBox == "numbox3")
            {
            _this.numText3.setText("");
            _this.selectedAns3=""; 
            }
            if(_this.selectedBox == "numbox4")
            {
            _this.numText4.setText("");
            _this.selectedAns4=""; 
            }
              
      _this.time.events.add(100,function(){
           _this.eraser.frame=0;
      },this);
      },this);

        _this.rightbtn =_this.numGroup.create(x+70,509,'nsnpg1_3_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(function(){
              _this.clickSound.play();
              _this.rightbtn.frame=1;
            _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4;
            
            _this.time.events.add(100,function(){
                _this.rightbtn.frame = 0;
            },this);
            if(_this.selectedAns==_this.rightAns) 
                {
                    //console.log("correct");
                    _this.speakerbtn1.inputEnabled=false;
                    _this.speakerbtn2.visible=true;
                    _this.speakerbtn2.inputEnabled=true;
                    _this.speakerbtn2.input.useHandCursor = true;
                    _this.puzzleSquare();
                }
            else
                {
                    //console.log("wrong");
                    _this.selectedAns = "";
                    _this.time.events.add(500, function(){
                        _this.rightbtn.frame=0;
                    },_this);
                    _this.wmusic = _this.add.audio('waudio');
                    _this.wmusic.play(); 
                    _this.shake.shake(10, _this.wrongGroup);
                    _this.numText1.setText("");
                    _this.selectedAns1=""; 
                    _this.numText2.setText("");
                    _this.selectedAns2=""; 
                    _this.numText3.setText("");
                    _this.selectedAns3=""; 
                    _this.numText4.setText("");
                    _this.selectedAns4=""; 
                    
                    }
              
        },_this);
   },
 
 numClicked:function(target){
     _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } 

            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
         
          if(_this.selectedBox == "numbox1")
            {
              if(_this.selectedAns1.length<2)
                {

                    _this.selectedAns1+= target.name;
                    console.log("1a");
                    _this.numText1.setText(_this.selectedAns1);
                  }
            }
          if(_this.selectedBox == "numbox2")
              {
              if(_this.selectedAns2.length<2)
                {

                    _this.selectedAns2+= target.name;
                    console.log("2a");
                    _this.numText2.setText(_this.selectedAns2);
                  }
              }
          if(_this.selectedBox == "numbox3")
              {
              if(_this.selectedAns3.length<2)
                {

                    _this.selectedAns3+= target.name;
                    console.log("3a");
                    _this.numText3.setText(_this.selectedAns3);
                 }
              }
          if(_this.selectedBox == "numbox4")
              {
              if(_this.selectedAns4.length<3)
                {

                    _this.selectedAns4+= target.name;
                    console.log("4a");
                    _this.numText4.setText(_this.selectedAns4);
                   
                }
              }
          
    },
    
 puzzleSquare:function(target){
    _this.getVoice2();
    _this.numberBox3.frame=1;
    _this.numberBox4.frame=1;
    _this.numberBox5.frame=1;
    _this.numberBox6.frame=1;
    _this.numberBox7.frame=1;
    _this.numberBox8.frame=1;
    _this.numberBox9.frame=1;

    _this.text3.visible=true;
    _this.text4.visible=true;
    _this.text5.visible=true;
    _this.text6.visible=true;
    _this.text7.visible=true;
    _this.text8.visible=true;
    _this.text9.visible=true;

     _this.numText1.setText("");
    _this.selectedAns1=""; 
     _this.numText2.setText("");
    _this.selectedAns2=""; 
     _this.numText3.setText("");
    _this.selectedAns3=""; 
     _this.numText4.setText("");
    _this.selectedAns4="";

    _this.boxGroup.y = 0;
    _this.tween = _this.add.tween(_this.boxGroup);
    _this.tween.to({ y: -100 }, 0, 'Linear', true, 0);
     
    _this.wrongGroup.y = 0;
    _this.tween = _this.add.tween(_this.wrongGroup);
    _this.tween.to({ y: -100 }, 0, 'Linear', true, 0);

    _this.numGroup.y=50;
    _this.Maintween = _this.add.tween(_this.numGroup);
    _this.Maintween.to({ y:100}, 0, 'Linear', true, 0);

    _this.imageBox.visible=true;
    _this.imageBox.y = 700;
    _this.tween = _this.add.tween(_this.imageBox);
    _this.tween.to({ y: 391.5 }, 0, 'Linear', true, 0);

    if(_this.questionNo==1){     
    _this.num1 = this.add.text(-100, -100, "4");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "16");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "2");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "8");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "18");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "12");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "6");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "14");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "10");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(407,316,'nsnpg1_3shape1_1');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(479,316,'nsnpg1_3shape2_1');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_1');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_1');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_1');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_1');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407,471,'nsnpg1_3shape7_1');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_1');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_1');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==2){     
    _this.num1 = this.add.text(-100, -100, "7");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "17");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "13");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "5");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "1");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "15");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "11");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "3");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "9");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_2');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_2');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_2');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_2');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_2');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_2');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407,471,'nsnpg1_3shape7_2');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_2');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_2');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==3){     
    _this.num1 = this.add.text(-100, -100, "24");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "9");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "3");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "27");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "18");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "6");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "15");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "21");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "12");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_3');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_3');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_3');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_3');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_3');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(561,386.5,'nsnpg1_3shape6_3');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407,471,'nsnpg1_3shape7_3');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_3');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_3');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==4){     
    _this.num1 = this.add.text(-100, -100, "11");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "19");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "3");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "13");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "23");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "2");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "7");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "17");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "5");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_4');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_4');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_4');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_4');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_4');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_4');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407,471,'nsnpg1_3shape7_4');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_4');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_4');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==5){     
    _this.num1 = this.add.text(-100, -100, "100");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "36");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "25");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "4");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "81");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "16");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "49");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "9");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "64");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_5');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_5');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_5');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_5');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_5');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_5');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_5');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_5');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_5');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==6){     
    _this.num1 = this.add.text(-100, -100, "36");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "18");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "48");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "24");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "6");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "42");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "54");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "12");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "30");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_6');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_6');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_6');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_6');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_6');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_6');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_6');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_6');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_6');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==7){     
    _this.num1 = this.add.text(-100, -100, "30");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "60");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "90");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "70");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "40");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "10");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "80");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "50");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "20");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_7');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_7');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_7');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_7');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_7');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_7');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_7');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_7');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_7');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==8){     
    _this.num1 = this.add.text(-100, -100, "26");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "34");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "30");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "40");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "32");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "28");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "36");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "42");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "38");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_8');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_8');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_8');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_8');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_8');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386.5,'nsnpg1_3shape6_8');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_8');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_8');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(548.5,471,'nsnpg1_3shape9_8');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==9){     
    _this.num1 = this.add.text(-100, -100, "27");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "36");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "72");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "9");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "63");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "45");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "18");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "54");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "81");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_9');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_9');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_9');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,400,'nsnpg1_3shape4_9');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,387,'nsnpg1_3shape5_9');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,387,'nsnpg1_3shape6_9');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_9');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_9');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_9');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==10){     
    _this.num1 = this.add.text(-100, -100, "15");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "30");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "40");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "20");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "5");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "35");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "45");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "25");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "10");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,317,'nsnpg1_3shape1_10');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,317,'nsnpg1_3shape2_10');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,304,'nsnpg1_3shape3_10');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,400,'nsnpg1_3shape4_10');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,387,'nsnpg1_3shape5_10');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,387,'nsnpg1_3shape6_10');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_10');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_10');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_10');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==11){     
    _this.num1 = this.add.text(-100, -100, "29");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "35");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "27");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "31");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "23");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "37");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "33");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "25");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "21");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_11');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_11');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_11');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,400,'nsnpg1_3shape4_11');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,387,'nsnpg1_3shape5_11');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,387,'nsnpg1_3shape6_11');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_11');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_11');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_11');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==12){     
    _this.num1 = this.add.text(-100, -100, "64");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "48");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "72");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "32");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "24");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "56");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "8");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "40");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "16");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_12');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_12');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_12');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_12');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_12');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386,'nsnpg1_3shape6_12');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_12');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_12');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_12');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==13){     
    _this.num1 = this.add.text(-100, -100, "21");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "42");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "56");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "7");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "35");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "63");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "28");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "49");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "14");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_13');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_13');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_13');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_13');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_13');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386,'nsnpg1_3shape6_13');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_13');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_13');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_13');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==14){     
    _this.num1 = this.add.text(-100, -100, "33");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "66");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "99");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "22");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "55");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "88");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "11");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "44");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "77");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_14');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_14');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_14');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_14');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_14');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386,'nsnpg1_3shape6_14');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_14');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_14');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_14');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==15){     
    _this.num1 = this.add.text(-100, -100, "52");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "58");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "50");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "46");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "56");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "60");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "48");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "44");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "54");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_15');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_15');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_15');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_15');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_15');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386,'nsnpg1_3shape6_15');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_15');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_15');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_15');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }
    else if(_this.questionNo==16){     
    _this.num1 = this.add.text(-100, -100, "55");
    _this.num1.font = "myfont";
    _this.num1.fill = "#2B3856";
    _this.num1.fontWeight = 'normal';
    _this.num1.anchor.set(0.5);
    _this.num1.fontSize = 50;
    _this.imageBox.addChild(_this.num1);

    _this.num2 = this.add.text(0, -100, "59");
    _this.num2.font = "myfont";
    _this.num2.fill = "#2B3856";
    _this.num2.fontWeight = 'normal';
    _this.num2.anchor.set(0.5);
    _this.num2.fontSize = 50;
    _this.imageBox.addChild(_this.num2);

    _this.num3 = this.add.text(100, -100, "51");
    _this.num3.font = "myfont";
    _this.num3.fill = "#2B3856";
    _this.num3.fontWeight = 'normal';
    _this.num3.anchor.set(0.5);
    _this.num3.fontSize = 50;
    _this.imageBox.addChild(_this.num3);

    _this.num4 = this.add.text(-100, 0, "47");
    _this.num4.font = "myfont";
    _this.num4.fill = "#2B3856";
    _this.num4.fontWeight = 'normal';
    _this.num4.anchor.set(0.5);
    _this.num4.fontSize = 50;
    _this.imageBox.addChild(_this.num4);

    _this.num5 = this.add.text(0, 0, "61");
    _this.num5.font = "myfont";
    _this.num5.fill = "#2B3856";
    _this.num5.fontWeight = 'normal';
    _this.num5.anchor.set(0.5);
    _this.num5.fontSize = 50;
    _this.imageBox.addChild(_this.num5);

    _this.num6 = this.add.text(100, 0, "57");
    _this.num6.font = "myfont";
    _this.num6.fill = "#2B3856";
    _this.num6.fontWeight = 'normal';
    _this.num6.anchor.set(0.5);
    _this.num6.fontSize = 50;
    _this.imageBox.addChild(_this.num6);

    _this.num7 = this.add.text(-100, 100, "49");
    _this.num7.font = "myfont";
    _this.num7.fill = "#2B3856";
    _this.num7.fontWeight = 'normal';
    _this.num7.anchor.set(0.5);
    _this.num7.fontSize = 50;
    _this.imageBox.addChild(_this.num7);

    _this.num8 = this.add.text(0, 100, "45");
    _this.num8.font = "myfont";
    _this.num8.fill = "#2B3856";
    _this.num8.fontWeight = 'normal';
    _this.num8.anchor.set(0.5);
    _this.num8.fontSize = 50;
    _this.imageBox.addChild(_this.num8);

    _this.num9 = this.add.text(100, 100, "53");
    _this.num9.font = "myfont";
    _this.num9.fill = "#2B3856";
    _this.num9.fontWeight = 'normal';
    _this.num9.anchor.set(0.5);
    _this.num9.fontSize = 50;
    _this.imageBox.addChild(_this.num9);

    _this.puzzle1 = _this.add.sprite(408,316,'nsnpg1_3shape1_16');
    _this.puzzle1.anchor.setTo(0.5);
    _this.puzzle1.scale.setTo(0.9);
    _this.puzzle1.visible=false;

    _this.puzzle2 = _this.add.sprite(478,316,'nsnpg1_3shape2_16');
    _this.puzzle2.anchor.setTo(0.5);
    _this.puzzle2.scale.setTo(0.9);
    _this.puzzle2.visible=false;

    _this.puzzle3 = _this.add.sprite(549,303,'nsnpg1_3shape3_16');
    _this.puzzle3.anchor.setTo(0.5);
    _this.puzzle3.scale.setTo(0.9);
    _this.puzzle3.visible=false;

    _this.puzzle4 = _this.add.sprite(395,399,'nsnpg1_3shape4_16');
    _this.puzzle4.anchor.setTo(0.5);
    _this.puzzle4.scale.setTo(0.9);
    _this.puzzle4.visible=false;

    _this.puzzle5 = _this.add.sprite(478,386,'nsnpg1_3shape5_16');
    _this.puzzle5.anchor.setTo(0.5);
    _this.puzzle5.scale.setTo(0.9);
    _this.puzzle5.visible=false;

    _this.puzzle6 = _this.add.sprite(562,386,'nsnpg1_3shape6_16');
    _this.puzzle6.anchor.setTo(0.5);
    _this.puzzle6.scale.setTo(0.9);
    _this.puzzle6.visible=false;

    _this.puzzle7 = _this.add.sprite(407.5,471,'nsnpg1_3shape7_16');
    _this.puzzle7.anchor.setTo(0.5);
    _this.puzzle7.scale.setTo(0.9);
    _this.puzzle7.visible=false;

    _this.puzzle8 = _this.add.sprite(478,458,'nsnpg1_3shape8_16');
    _this.puzzle8.anchor.setTo(0.5);
    _this.puzzle8.scale.setTo(0.9);
    _this.puzzle8.visible=false;

    _this.puzzle9 = _this.add.sprite(549,471,'nsnpg1_3shape9_16');
    _this.puzzle9.anchor.setTo(0.5);
    _this.puzzle9.scale.setTo(0.9);
    _this.puzzle9.visible=false;
    }

    _this.graphicsGroup = _this.add.group();
    _this.graphics1 = _this.add.graphics(100, 100);
    _this.graphics2 = _this.add.graphics(100, 100);
    _this.graphics3 = _this.add.graphics(100, 100);
    _this.graphics4 = _this.add.graphics(100, 100);
    _this.graphics5 = _this.add.graphics(100, 100);
    _this.graphics6 = _this.add.graphics(100, 100);
    _this.graphics7 = _this.add.graphics(100, 100);
    _this.graphics8 = _this.add.graphics(100, 100);
    _this.graphics9 = _this.add.graphics(100, 100);

    _this.graphics1.lineStyle(2, 0x0000FF, 1);
    _this.graphics1.drawRect(251, 160, 85, 85);

    _this.graphics2.lineStyle(2, 0x0000FF, 1);
    _this.graphics2.drawRect(335.5, 160, 85, 85);

    _this.graphics3.lineStyle(2, 0x0000FF, 1);
    _this.graphics3.drawRect(420, 160, 85, 85);

    _this.graphics4.lineStyle(2, 0x0000FF, 1);
    _this.graphics4.drawRect(251, 245, 85, 85);

    _this.graphics5.lineStyle(2, 0x0000FF, 1);
    _this.graphics5.drawRect(335.5, 245, 85, 85);

    _this.graphics6.lineStyle(2, 0x0000FF, 1);
    _this.graphics6.drawRect(420, 245, 85, 85);

    _this.graphics7.lineStyle(2, 0x0000FF, 1);
    _this.graphics7.drawRect(251, 330, 85, 85);

    _this.graphics8.lineStyle(2, 0x0000FF, 1);
    _this.graphics8.drawRect(335.5, 330, 85, 85);

    _this.graphics9.lineStyle(2, 0x0000FF, 1);
    _this.graphics9.drawRect(420, 330, 85, 85);

    _this.graphicsGroup.add(_this.graphics1);
    _this.graphicsGroup.add(_this.graphics2);
    _this.graphicsGroup.add(_this.graphics3);
    _this.graphicsGroup.add(_this.graphics4);
    _this.graphicsGroup.add(_this.graphics5);
    _this.graphicsGroup.add(_this.graphics6);
    _this.graphicsGroup.add(_this.graphics7);
    _this.graphicsGroup.add(_this.graphics8);
    _this.graphicsGroup.add(_this.graphics9);
    _this.graphicsGroup.alpha=0;

    _this.puzzlePiece1.inputEnabled=true;
    _this.puzzlePiece2.inputEnabled=true;
    _this.puzzlePiece3.inputEnabled=true;
    _this.puzzlePiece4.inputEnabled=true;
    _this.puzzlePiece5.inputEnabled=true;
    _this.puzzlePiece6.inputEnabled=true;
    _this.puzzlePiece7.inputEnabled=true;
    _this.puzzlePiece8.inputEnabled=true;
    _this.puzzlePiece9.inputEnabled=true;
    
 },
    
 dragPuzzle:function(target){
    _this.snapSound = _this.add.audio('snapSound');
    _this.snapSound.play();
    _this.wx=target.x;
    _this.wy=target.y;
         
     target.input.enableDrag(true);
    
     target.events.onDragStop.add(function(target){
      _this.snapSound = _this.add.audio('snapSound');
      _this.snapSound.play();
      console.log("Target"+target.value);
      if(_this.questionNo==1){     
      if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics1)&&(target.name=="puzzlePiece2"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics2)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics3)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics4)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics5)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics6)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics7)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics8)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics9)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece5.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==2){     
      if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics1)&&(target.name=="puzzlePiece4"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics2)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics3)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics4)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics5)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics6)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics7)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics8)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics9)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece5.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==3){     
      if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics1)&&(target.name=="puzzlePiece8"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics2)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics3)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics4)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics5)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics6)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics7)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics8)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics9)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece4.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      } 
      else if(_this.questionNo==4){     
      if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics1)&&(target.name=="puzzlePiece5"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics2)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics3)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics4)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics5)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics6)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics7)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics8)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics9)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece3.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==5){     
      if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics1)&&(target.name=="puzzlePiece9"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics2)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics3)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics4)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics5)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics6)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics7)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics8)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics9)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece7.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==6){     
      if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics1)&&(target.name=="puzzlePiece6"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics2)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics3)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics4)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics5)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics6)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics7)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics8)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics9)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece5.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==7){     
      if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics1)&&(target.name=="puzzlePiece3"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics2)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics3)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics4)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics5)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics6)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics7)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics8)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics9)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece2.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==8){     
      if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics1)&&(target.name=="puzzlePiece1"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics2)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics3)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics4)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics5)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics6)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics7)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics8)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics9)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece7.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==9){     
      if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics1)&&(target.name=="puzzlePiece3"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics2)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics3)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics4)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics5)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics6)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics7)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics8)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics9)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece9.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==10){     
      if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics1)&&(target.name=="puzzlePiece3"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics2)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics3)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics4)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics5)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics6)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics7)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics8)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics9)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece2.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==11){     
      if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics1)&&(target.name=="puzzlePiece5"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics2)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics3)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics4)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics5)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics6)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics7)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics8)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics9)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece1.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==12){     
      if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics1)&&(target.name=="puzzlePiece8"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics2)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics3)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics4)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics5)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics6)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics7)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics8)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics9)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece2.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==13){     
      if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics1)&&(target.name=="puzzlePiece3"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics2)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics3)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics4)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics5)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics6)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics7)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics8)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics9)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece2.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==14){     
      if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics1)&&(target.name=="puzzlePiece3"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics2)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics3)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics4)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics5)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics6)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics7)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics8)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics9)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece7.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==15){     
      if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics1)&&(target.name=="puzzlePiece5"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece5.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics2)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics3)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics4)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics5)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics6)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics7)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics8)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics9)&&(target.name=="puzzlePiece6"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece6.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
      else if(_this.questionNo==16){     
      if(_this.checkOverlap(_this.puzzlePiece6,_this.graphics1)&&(target.name=="puzzlePiece6"))
      { 
            _this.puzzle1.visible=true;
            _this.puzzlePiece6.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece8,_this.graphics2)&&(target.name=="puzzlePiece8"))
      {     
            _this.puzzle2.visible=true;
            _this.puzzlePiece8.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece4,_this.graphics3)&&(target.name=="puzzlePiece4"))
      {     
            _this.puzzle3.visible=true;
            _this.puzzlePiece4.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece2,_this.graphics4)&&(target.name=="puzzlePiece2"))
      {     
            _this.puzzle4.visible=true;
            _this.puzzlePiece2.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece9,_this.graphics5)&&(target.name=="puzzlePiece9"))
      {     
            _this.puzzle5.visible=true;
            _this.puzzlePiece9.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece7,_this.graphics6)&&(target.name=="puzzlePiece7"))
      {     
            _this.puzzle6.visible=true;
            _this.puzzlePiece7.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece3,_this.graphics7)&&(target.name=="puzzlePiece3"))
      {     
            _this.puzzle7.visible=true;
            _this.puzzlePiece3.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece1,_this.graphics8)&&(target.name=="puzzlePiece1"))
      {     
            _this.puzzle8.visible=true;
            _this.puzzlePiece1.visible=false;
            
      }
      else if(_this.checkOverlap(_this.puzzlePiece5,_this.graphics9)&&(target.name=="puzzlePiece5"))
      {     
            _this.puzzle9.visible=true;
            _this.puzzlePiece5.visible=false;
      }
      else{     
             _this.wmusic = _this.add.audio('waudio');
             _this.wmusic.play();
             _this.shake.shake(10, target);
      }
      }
         
      if((_this.puzzle1.visible==true)&&(_this.puzzle2.visible==true)&&(_this.puzzle3.visible==true)&&(_this.puzzle4.visible==true)&&(_this.puzzle5.visible==true)&&(_this.puzzle6.visible==true)&&(_this.puzzle7.visible==true)&&(_this.puzzle8.visible==true)&&(_this.puzzle9.visible==true)){
          _this.correctAns();
          
      }       
         target.x =  _this.wx;
         target.y =  _this.wy;
         
         },_this);
    
},
    
 correctAns:function()
  {
        console.log("correct Answer");
        _this.anim1 = _this.imageBox.animations.add('play',[0,1,0,1,0,1]);
        _this.anim1.play(3,false);
        
        _this.noofAttempts++;
       
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        _this.anim.play();

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
     
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
       
        _this.wrongAnswer = false;

        _this.speakerbtn2.inputEnabled=false;
        _this.speakerbtn2.input.useHandCursor = false;
      
         console.log("correct11");

        _this.celebration = true;

        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();

        _this.time.events.add(3000, _this.removeEverthing, _this);

        if(_this.timer)
                    {
                        _this.timer.stop();
                       _this.timer = null; 
                    }

                    _this.sceneCount++;

       telInitializer.tele_saveAssessment(1,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

     },    
  
 removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.celebration = false;
        console.log("no"+_this.no11);
        _this.count1++;
        _this.no11++;
        
        if(_this.no11<6)
        {
            _this.boxGroup.destroy();
            _this.wrongGroup.destroy();
            _this.imageBox.destroy();
            _this.puzzle1.destroy();
            _this.puzzle2.destroy();
            _this.puzzle3.destroy();
            _this.puzzle4.destroy();
            _this.puzzle5.destroy();
            _this.puzzle6.destroy();
            _this.puzzle7.destroy();
            _this.puzzle8.destroy();
            _this.puzzle9.destroy();
            _this.getQuestion();
            
        }
        else
        {
            //_this.stopVoice();
            _this.counterForTimer = null;
            _this.timer1=null;
            _this.state.start('longdivision4Score');
        }
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
  
 getVoice1:function()
    {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArray[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/English/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Hindi/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Kannada/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Gujarati/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Marathi/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Odiya/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Tamil/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Telugu/Fill_the_boxes.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Urdu/Fill_the_boxes.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
    getVoice2:function()
    {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArray[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/English/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Hindi") 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Hindi/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Kannada") 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Kannada/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Gujarati/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Marathi/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Odiya/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Tamil/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Telugu/Drag_the_pictures.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN1/Urdu/Drag_the_pictures.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
    stopvoice:function(){
            
          if(_this.playQuestionSound)
          {
               if(_this.playQuestionSound.contains(_this.src))
               {
                    _this.playQuestionSound.removeChild(_this.src);
                    _this.src = null;
               }
               if(!_this.playQuestionSound.paused)
               {
                   console.log("here");
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
        },

};