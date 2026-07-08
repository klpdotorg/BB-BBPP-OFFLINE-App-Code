Game.sequence_NSSG_5_3level1=function(){};


Game.sequence_NSSG_5_3level1.prototype ={
    
    init:function(param,score)
    {
       _this= this;
       
       // telInitializer.gameIdInit("sequence2_1_1",gradeSelected);

		this.Stararr = param;
        this.score = score;
	if(window.quizQuest == false)
       this.score =parseInt(window.score);
       
         
       telInitializer2.gameIdInit2("NSSG5.3");
    },

    preload:function(game){
        if(!window.grade1NSS1){

            window.grade1NSS1 = true;

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

            _this.load.atlas('unity2_1_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        _this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_1_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_1_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_1_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_1_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        //game assets.
        this.load.image('unity2_1_1_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_1_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_1_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_1_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_1_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_1_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_1_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('Cunity2_1_1_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_1_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_2_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_3_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
    

        _this.load.atlas('unity2_2_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_1_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_1_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_1_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        //game assets.
        this.load.image('unity2_2_1_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_1_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_1_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_1_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_1_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_1_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.image('Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Caterpillar_Body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.image('Caterpillar_Body11', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Caterpillar_Body21', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Caterpillar_Body31', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_1_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        this.load.atlas('start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        this.load.atlas('start1', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_1_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
    


        _this.load.atlas('Unity2_3_1astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_1anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_1atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_1aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_1aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_1apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_1atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_1astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_1aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_1aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_1astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_1anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_1atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_1aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_1aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_1apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_1atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_1astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_1aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_1aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');



        //multu

        _this.load.atlas('unity2_1_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
                _this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_2_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_2_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_2_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_2_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_2_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_2_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_2_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Cunity2_1_2_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        

        _this.load.atlas('unity2_2_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_2_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_2_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_2_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_2_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_2_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('unity2_2_2_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_2_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_2_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_2Caterpillar_Body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        


        _this.load.atlas('Unity2_3_2astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_2anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_2atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_2aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_2aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_2apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_2atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_2astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_2aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_2aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_2astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_2anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_2atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_2aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_2aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_2apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_2atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_2astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_2aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_2aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');



        //multu2
        _this.load.atlas('unity2_1_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
                _this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_3_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_3_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_3_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_3_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_3_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_3_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_3_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Cunity2_1_3_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        

        _this.load.atlas('unity2_2_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_3_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_3_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_3_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_3_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_3_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('unity2_2_3_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_3_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_3_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        


        _this.load.atlas('Unity2_3_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_3astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_3anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_3atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_3aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_3aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_3apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_3atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_3aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_3aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_3aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_3astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_3aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_3aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_3aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


    }

    },
    
	create:function(game){

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity2_1_3_BG_01');
        if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/English/question2.1_Eng.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Hindi/question2.1_Hin.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Kannada/question2.1_Kan.mp3";
                     else if(window.languageSelected=="Gujarati")
                         _this.qsoundurl= window.baseUrl+"questionSounds/Gujarati/unity/2.1.1/question2.1_guj.mp3";
					 else if(window.languageSelected=="Marathi")
                    {
                        _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Marathi/question2.1.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Telugu/question2.1.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Tamil/question2.1.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Urdu/question2.1.mp3";
                    }
                    else
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Odiya/2.1.1.mp3";
                     
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
         commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
       // commonNavBar.addHint(this);
        this.hintparams=['NSSG5.3','level1',false,false,true,1];
      
        commonNavBar.addHint(this,this.hintparams);
        
         this.Stararr = [];
         countcorrect=1;
		_this.amplify = null;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.opt2;
        _this.opt3;
        
        _this.wmusic;
        _this.wrong=true;
        
        _this.count;
        _this.clickSound;
        
        _this.starsGroup;
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;
        
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
        commonNavBar.getVoice(_this.qsoundurl);

    },
    
   
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
        commonNavBar.enableHintIcon();
    	 console.log("get question");
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
    	switch(_this.qArrays[_this.no11])
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
            case 9: _this.gotoNinethQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
           
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    getQuestion1:function(target)
    {  
        commonNavBar.enableHintIcon();
        // commonNavBar.startTimer(this);
       console.log("getquestion1");
          switch(_this.qArrays[_this.no11])

        {
             case 1: _this.gotoFirstQuestion1();
                    break;
            case 2: _this.gotoSecondQuestion1();
                    break;
            case 3: _this.gotoThirdQuestion1();
                    break;
            case 4: _this.gotoFourthQuestion1();
                    break;
            case 5: _this.gotoFifthQuestion1();
                    break;
            case 6: _this.gotoSixthQuestion1();
                    break;
            case 7: _this.gotoSeventhQuestion1();
                    break;
            case 8: _this.gotoEighthQuestion1();
                    break;
            case 9: _this.gotoNinethQuestion1();
                    break;
            case 10: _this.gotoTenthQuestion1();
                    break;  
        }
       telInitializer2.gameQuestionStart(this,_this.questionid);
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
                //console.log("here");
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
    
    generateStarsForTheScene:function(game,count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i <  count; i++)
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
        _this.starsGroup.getChildAt(1).frame = 0;
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

    removeButtonListener:function(){
        if(_this.opt1)
            _this.opt1.inputEnabled = false;
        if(_this.opt2)
            _this.opt2.inputEnabled = false;
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "111");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1.addChild(_this.text);

        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "112");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "113");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "114");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "113");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "111");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_6.addChild(_this.text)
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "114");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "112");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
      
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
   
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "255");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "257");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "256");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "258");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "255");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "256");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "257");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "258");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);

        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "374");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "376");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "375");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "373");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
    	_this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
    
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "373");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "374");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "375");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "376");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "481");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "482");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "483");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "484");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "483");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "481");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "484");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "482");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
    
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
    
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "525");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "526");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "527");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "528");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this); 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "527");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "525");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "528");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "526");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =  _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "697");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "694");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "696");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "695");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=  _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "694");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "695");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "696");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "697");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
    
    gotoSeventhQuestion:function()
    {
        //console.log("gotoSeventhQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "709");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "707");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "710");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "708");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
        //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "707");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "708");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "709");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "710");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },

    gotoEighthQuestion:function()
    {
        //console.log("gotoEighthQuestion");
    
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "862");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "863");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "864");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "865");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "863");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "865");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "862");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "864");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 
    },

    gotoNinethQuestion:function()
    {
        //console.log("gotoNinethQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "943");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "944");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "945");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "946");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "944");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "942");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "946");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "943");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
    
    gotoTenthQuestion:function()
    {                                  
        //console.log("gotoTenthQuestion");
        
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "538");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "536");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "539");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "537");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_3_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "536");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "537");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_3_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "538");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_3_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "539");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =60; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_3_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_3_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 

    },
    
	correctAns:function(target)
	{
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        commonNavBar.disableHintIcon();
        telInitializer2.gameCorrectAns();
        target.frame = 1;
       _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();

        _this.removeButtonListener();
        
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.3_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

       
        // _this.currentTime = window.timeSaveFunc();
        
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
      
        
        if(_this.Caterpillar_head.key === 'unity2_1_3_Caterpillar_Neutral')
        {
            _this.Caterpillar_head.loadTexture('unity2_1_3_Caterpillar_Happy', 0, false);
        }
        
        
        _this.celebration = true;
        
        commonNavBar.playClickSound();
        commonNavBar.playCelebrationSound();
        target.events.onInputDown.removeAll();
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(25,false); 
         this.Stararr.push(3);
         _this.time.events.add(2000,_this.removeEverthing,_this);
        _this.sceneCount++;
        if(window.quizQuest == true)
			{
				commonNavBar.updateScore(+5);
			}
        
	},

    wrongAns:function(target)
	{
        commonNavBar.disableHintIcon();
        telInitializer2.gameWrongAns();
         target.frame = 1;
        this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();

        _this.removeButtonListener();
        
        //_this.wrong = false;
        
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.3_"+target.name,  
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if (_this.Caterpillar_head1.key === 'unity2_1_3_Caterpillar_Neutral')
        {
            _this.Caterpillar_head1.loadTexture('unity2_1_3_Caterpillar_Sad', 0, false);
        }
        
        _this.timer3 = _this.time.create(false);
        //  Set a TimerEvent to occur after 2 seconds
        /*_this.time.events.add(1500, function()
        {
            flagGroup1.destroy();
            //_this.getQuestion();
        }, _this);*/
        
         commonNavBar.playClickSound();
         commonNavBar.playWrongCelebrationSound();
         target.events.onInputDown.removeAll();
       //  commonNavBar.stopTimer();
        _this.time.events.add(2000, _this.removeEverthing, _this);
     
         if(window.quizQuest == true)
		{
			commonNavBar.updateScore(-5);
		}                      
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        _this.no11++;
        _this.count1++;
        _this.opt1.frame=0;
        _this.opt2.frame=0;
        //console.log("Question Number :"+_this.no11);

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.no11<1)
        {
           // wrong = true;
             _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                 flagGroup1.destroy();
                // commonNavBar.stopTimer();
            },_this);  
        }
        else
        {
            _this.count =0;
			this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
            flagGroup1.destroy();
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
					this.getQuestion1();
				}
			   },_this);  
           
        }
	
    },
    
     gotoFirstQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "558");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_1.addChild(_this.text);

        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "557");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "556");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "555");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "557");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "556");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_6.addChild(_this.text)
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "558");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "555");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
      
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
   
    gotoSecondQuestion1:function()
    {                                  
        //console.log("gotoSecondQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "300");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "297");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "299");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "298");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "300");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "299");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "298");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "297");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 50;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);

        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    gotoThirdQuestion1:function()
    {
        //console.log("gotoThirdQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "843");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "845");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "844");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "842");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
    	_this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
    
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "845");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "844");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "843");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "842");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    
    gotoFourthQuestion1:function()
    {
        //console.log("gotoFourthQuestion");
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "666");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "665");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "664");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "663");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "665");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "663");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "664");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "666");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
    
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoFifthQuestion1:function()
    {
        //console.log("gotoFifthQuestion");
    
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "920");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "919");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "918");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "917");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this); 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "918");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "917");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "920");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "919");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =  _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoSixthQuestion1:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "473");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "474");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "472");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "475");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=  _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
         
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "475");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "474");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "473");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "472");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
    
    gotoSeventhQuestion1:function()
    {
        //console.log("gotoSeventhQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "101");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "104");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "103");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "102");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
        //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "104");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "103");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "102");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "101");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },

    gotoEighthQuestion1:function()
    {
        //console.log("gotoEighthQuestion");
    
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "670");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "669");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "668");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "667");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "669");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "670");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "667");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "668");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 
    },

    gotoNinethQuestion1:function()
    {
        //console.log("gotoNinethQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "388");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "387");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "386");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "385");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "385");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "388");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "387");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "386");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
    
    gotoTenthQuestion1:function()
    {                                  
        //console.log("gotoTenthQuestion");
        
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "725");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "726");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "724");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "727");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "727");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "726");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "725");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "724");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =50; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_3a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_3a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_3a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_3a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 

    },
    
    correctAns1:function(target)
	{
        commonNavBar.disableHintIcon();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        telInitializer2.gameCorrectAns();
        target.frame = 1;
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();

        _this.removeButtonListener();
       
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.7_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

       
        // _this.currentTime = window.timeSaveFunc();
        
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

    
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.Caterpillar_head.key === 'unity2_1_3a_Caterpillar_Neutral')
        {
             _this.Caterpillar_head.loadTexture('unity2_1_3a_Caterpillar_Happy', 0, false);
            
        }
        
        
       
        _this.celebration = true;
        
         commonNavBar.playClickSound();
         commonNavBar.playCelebrationSound();
        _this.starAnim = _this.starsGroup.getChildAt(countcorrect);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(25,false);
         this.Stararr.push(3);
         this.starsGroup.getChildAt(countcorrect).frame = 2; 
         countcorrect++;
         target.events.onInputDown.removeAll();
        _this.time.events.add(2000, _this.removeEverthing1, _this);
        
        if(window.quizQuest == true)
			{
				commonNavBar.updateScore(+5);
			}                         
	},

    wrongAns1:function(target)
	{
        commonNavBar.disableHintIcon();
        telInitializer2.gameWrongAns();
        //console.log("wrong");
        //console.log("wrong target :"+target.name);
       // target.tint = 0xA9A9A9;
        
         target.frame = 1;
        _this.starsGroup.getChildAt(countcorrect).frame = 1;
        this.Stararr.push(1);
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();

        _this.removeButtonListener();

        //_this.wrong = false;
        
       // _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.7_"+target.name,  
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        
        if (_this.Caterpillar_head1.key === 'unity2_1_3a_Caterpillar_Neutral')
        {
            _this.Caterpillar_head1.loadTexture('unity2_1_3a_Caterpillar_Sad', 0, false);
        }
        
        _this.timer3 = _this.time.create(false);
        //  Set a TimerEvent to occur after 2 seconds
        _this.time.events.add(1500, function()
        {
            flagGroup1.destroy();
            //_this.getQuestion();
        }, _this);
        
           commonNavBar.playWrongCelebrationSound();
           target.events.onInputDown.removeAll();
         // commonNavBar.stopTimer();
         _this.time.events.add(2000, _this.removeEverthing1, _this);
     
         if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}                  
	},
    
    removeEverthing1:function() 
    {
        //console.log("removeEverthing");
        //_this.wrong=true;
        _this.no11++;
        //_this.count1++;
        _this.opt1.frame=0;
        _this.opt2.frame=0;
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<1)
        {
           _this.wrong = true;
            //commonNavBar.stopTimer(); 
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
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
                _this.no11++;
            },_this);  
        }
        else
        {
             var timerStopVar = commonNavBar.stopTimer();
            countIncrement = 0;
            _this.stopVoice();

            commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.speakerbtn=null,
            
            // commonNavBar.stopTimer();
           // _this.timer1=null;
            console.log("this.Stararr"+this.Stararr);
			_this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
           // _this.timerpause = commonNavBar.minutes + ':'+  commonNavBar.seconds;
            _this.state.start('sequence_NSSG_5_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
			},_this); 
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
	
  

};