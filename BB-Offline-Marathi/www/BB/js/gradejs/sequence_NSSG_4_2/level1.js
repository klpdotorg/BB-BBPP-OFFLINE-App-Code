Game.sequence_NSSG_4_2level1=function(){};

Game.sequence_NSSG_4_2level1.prototype ={
    
    init:function(param,score)
    {
        _this= this;
        _this.gameid = "4.2";

		this.Stararr = param;
        this.score = score;
	if(window.quizQuest == false)
        this.score =parseInt(window.score);
        
        
       telInitializer2.gameIdInit2("NSSG4.2");
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

    if(!window.grade1NSS2){

            window.grade1NSS2 = true;

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

            this.load.image('unity2_6_1_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_1_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_1_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_1_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_1_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_1_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_1_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_2_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_2_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_2_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_2_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_2_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_2_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_3_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_3_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_3_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_3_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_3_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_3_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        



        this.load.image('unity2_6_1_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_1_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_1_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_1_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_1_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_1_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');
    
        this.load.image('unity2_6_3_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_3_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_3_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_3_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_3_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_3_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');

        this.load.image('unity2_6_2_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_2_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_2_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_2_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_2_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_2_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');


    }

    },
    
	create:function(game)
    {

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity2_4_2BG_01');
        if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.4.1/English/2.4.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.4.1/Hindi/2.4.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.4.1/Kannada/2.4.mp3";
                     else if(window.languageSelected=="Gujarati")
                         _this.qsoundurl= window.baseUrl+"questionSounds/Gujarati/unity/2.4.1/2.4.mp3";
					 else if(window.languageSelected=="Marathi")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.4.1/Marathi/2.4.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.4.1/Telugu/2.4.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.4.1/Tamil/2.4.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.4.1/Urdu/2.4.mp3";
                    }
                    else
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.4.1/Odiya/2.4.1.mp3";
                     
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
        commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
       // commonNavBar.addHint(this);
        this.hintparams=['NSSG4.2','level1',false,false,true,1];
        commonNavBar.addHint(this,this.hintparams);


		this.Stararr = [];
         countcorrect=1;
        _this.amplify = null;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        
        //_this.correct;

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
       
        _this.wmusic;
        _this.wrong = true;
        _this.count;
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
	
			_this.starsGroup.create(_this.world.centerX, 9, 'cstarAnim');
            
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
        _this.starsGroup.getChildAt(2).frame = 0;
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
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
       // _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.4.2_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
           // _this.timer.stop();
           // commonNavBar.stopTimer();
            _this.timer = null;
        }
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
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
       /* _this.click1 = this.add.audio('ClickSound');
        _this.click1.play();*/
        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
           /* _this.click1 = this.add.audio('snapSound');
            _this.click1.play();*/
            commonNavBar.playsnapSound();
        
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_4_2Caterpillar_body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 75;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=2)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    
    onDragStart1:function(target)
    {
       //console.log("onDragStart");
        
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.4.2a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            //_this.timer.stop();
           // commonNavBar.stopTimer();
            _this.timer = null;
        }
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
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
       /* _this.click1 = this.add.audio('ClickSound');
        _this.click1.play();*/
        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
           
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap1(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_4_2a_Caterpillar_body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 55;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=2)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder :function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    
      checkFortheRightOrder1 :function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop1,_this);
        
    },
    
    dragStop:function(target)
    {
        //console.log("dragStop function");
        /*_this.click1 = this.add.audio('snapSound');
        _this.click1.play();*/
        commonNavBar.playsnapSound();
        
        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_4_2Caterpillar_body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 75;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_4_2Caterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded here");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                    {
                        _this.CaterpillarGrp.getChildAt(m).visible = true;
                        _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart,_this);
                        break;
                    }

                }
                
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_4_2Caterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;
        
        if( _this.change<2)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
     dragStop1:function(target)
    {
        //console.log("dragStop function");
       /* _this.click1 = this.add.audio('snapSound');
        _this.click1.play();*/
        commonNavBar.playsnapSound();
        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap1(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_4_2a_Caterpillar_body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 55;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_4_2a_Caterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded here");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);

                break;
            }
            else if(_this.checkOverlap1(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                    {
                        _this.CaterpillarGrp.getChildAt(m).visible = true;
                        _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart1,_this);
                        break;
                    }

                }
                
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_4_2a_Caterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;
        
        if( _this.change<2)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
         if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "90");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "37");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "27");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
       // _this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
         if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "26");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "28");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "55");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'Unity2_4_2Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "18");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+150,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "65");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
       // _this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'Unity2_4_2Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "66");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "69");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "64");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "66");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
       // _this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "67");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "89");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "65");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
          //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
       // _this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "93");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "98");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
                
        }
    },
    
    gotoSeventhQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "32");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
         if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "33");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "47");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "31");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoEighthQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "88");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "84");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoNinethQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 9;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "49");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "50");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "48");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "44");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoTenthQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-32,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "28");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+70,_this.world.centerY-20,'Unity2_4_2Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-80,'Unity2_4_2start');  
        _this.Caterpillar_head.name = "Unity2_4_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2start');
        //_this.Caterpillar_head.animations.play('Unity2_4_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "27");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "26");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "29");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 75;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(288, 148, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(429, 140, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(288, 148, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(429, 140, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
	/*changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},*/
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    }, 
      
    checkOverlap1:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        commonNavBar.disableHintIcon();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
         target.frame = 1;
        //_this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.4.2_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

       /* if(_this.timer)
        {
          commonNavBar.stopTimer();
            //  _this.timer.stop();
           _this.timer = null;
        }
        */
         
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
        
        var correct = true;
        for(var i=0;i<2;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
            if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
            }
        }
        
        if(correct)
        {
           telInitializer2.gameCorrectAns();
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            
            if (_this.Caterpillar_head.key == 'Unity2_4_2start')
            {
                _this.Caterpillar_head.loadTexture('Unity2_4_2Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Unity2_4_2Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Unity2_4_2Caterpillar_Happy',20,true);
            }
            
             //_this.wrong = true;
            //_this.speakerbtn.inputEnabled=false;
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
            
        }
        else
        {     
            telInitializer2.gameWrongAns();
             target.frame = 1;
             this.starsGroup.getChildAt(_this.count1).frame = 1;
             this.Stararr.push(1);
            _this.opt1.events.onInputUp.removeAll();
    
           // _this.wrong = false;
            _this.noofAttempts++;

           //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.4.2_",  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            if (_this.Caterpillar_head.key == 'Unity2_4_2start')
            {
                console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                _this.Caterpillar_head.loadTexture('Unity2_4_2wrong', 0);
                _this.Caterpillar_head.animations.add('Unity2_4_2wrong');
                _this.Caterpillar_head.animations.play('Unity2_4_2wrong',20,true);
            }

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            /* _this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
               // _this.getQuestion();
            }, this);*/

            /*_this.click4 = _this.add.audio('ClickSound');
            _this.click4.play();

            _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();*/
             commonNavBar.playClickSound();
             commonNavBar.playWrongCelebrationSound();
        
            target.events.onInputDown.removeAll();
            _this.time.events.add(2000, _this.removeEverthing, _this);
        if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}
        }
	},

  
    removeEverthing:function() 
    {
        //console.log("removeEverthing");

         _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        //_this.wrong = true;
        _this.opt1.frame=0;
        _this.no11++;
       //_this.count1++;
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<2)
        {
           // wrong = true;
           // commonNavBar.stopTimer();
           // _this.timer1.stop();
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                //_this.no11++;
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
					_this.getQuestion1();
				}
            },_this);  
        }
        else
        {
            /*_this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity2_4_2Score');*/
			 _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
             flagGroup1.destroy();
             _this.CaterpillarGrp.destroy();
             _this.CaterpillarWhite.destroy();
             _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
            //_this.count =0; 
            //_this.getQuestion1();
			},_this);  
        }
    },
    
      
    gotoFirstQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame=1;
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "90");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "37");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

             _this.graphics1.lineStyle(2, 0x0000FF, 1);
             _this.graphics1.drawRect(225, 120, 50, 50);
    
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
             _this.graphics2.drawRect(355, 120, 50, 50);
            
            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion1:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "27");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "26");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "55");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "28");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

             _this.graphics1.lineStyle(2, 0x0000FF, 1);
             _this.graphics1.drawRect(225, 120, 50, 50);
    
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
             _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion1:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "18");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
 
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);
    
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion1:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "65");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
       
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "66");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "69");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "64");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
               _this.graphics1.lineStyle(2, 0x0000FF, 1);
               _this.graphics1.drawRect(225, 120, 50, 50);
    
               _this.graphics2.lineStyle(2, 0x0000FF, 1);
               _this.graphics2.drawRect(355, 120, 50, 50);
                
               _this.graphics5.lineStyle(2, 0x0000FF, 1);
               _this.graphics5.drawRect(130, 230, 450, 150);
            
               _this.CaterpillarWhite.add(_this.graphics1);
               _this.CaterpillarWhite.add(_this.graphics2);

               _this.CaterpillarWhite.add(_this.graphics5);
               _this.CaterpillarWhite.alpha = 0;
               _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

             _this.graphics1.lineStyle(2, 0x0000FF, 1);
             _this.graphics1.drawRect(225, 120, 50, 50);
    
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
    },

    gotoFifthQuestion1:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "66");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "67");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "89");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "65");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);
    
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion1:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
          //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "93");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "98");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
                
        }
    },
    
    gotoSeventhQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "32");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
    
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "33");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "47");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "31");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoEighthQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
        //_this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "88");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "84");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoNinethQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 9;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "49");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
    
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
       // _this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "50");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "48");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "44");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                 _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoTenthQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "28");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        //White color body
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Unity2_4_2a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+80,_this.world.centerY-75,'Unity2_4_2a_start');  
        _this.Caterpillar_head.name = "Unity2_4_2a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_4_2a_start');
       // _this.Caterpillar_head.animations.play('Unity2_4_1start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-25, 'Unity2_4_2a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'Unity2_4_2a_Tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        
        /************************end**********************/
        //drag body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-160,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-70,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "27");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+20,_this.world.centerY+160,'Unity2_4_2a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "26");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+100,'Unity2_4_2a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "29");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 55;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
       
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(225, 120, 50, 50);
    
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(355, 120, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(130, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_4_2a_start', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(225, 120, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(355, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(130, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            
            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },  
    
    correctAns1:function(target)
	{
        commonNavBar.disableHintIcon();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        target.frame = 1;
        //_this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.4.2a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

       /* if(_this.timer)
        {
           commonNavBar.stopTimer();
            // _this.timer.stop();
            _this.timer = null;
        }
        */
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
        
        var correct = true;
        for(var i=0;i<2;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
            if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) - 2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
            }
        }
        
        if(correct)
        {
            telInitializer2.gameCorrectAns();
            _this.opt1.events.onInputUp.removeAll();
            
            target.frame=1;
            
            if (_this.Caterpillar_head.key == 'Unity2_4_2a_start')
            {
                _this.Caterpillar_head.loadTexture('Unity2_4_2a_Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Unity2_4_2a_Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Unity2_4_2a_Caterpillar_Happy',null,true);
            }
            
             //_this.wrong = true;
            //_this.speakerbtn.inputEnabled=false;
            _this.celebration = true;

            /*_this.click3 = _this.add.audio('ClickSound');
            _this.click3.play();

            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();*/

              commonNavBar.playClickSound();
            commonNavBar.playCelebrationSound();

            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
           // this.starsGroup.getChildAt(countcorrect).frame = 2; 
           // countcorrect++;
            target.events.onInputDown.removeAll();
            _this.time.events.add(2000, _this.removeEverthing1, _this);
            if(window.quizQuest == true)
			{
				commonNavBar.updateScore(+5);
			}
        }
        else
        {   
            telInitializer2.gameWrongAns();
            target.frame = 1;
             this.starsGroup.getChildAt(_this.count1).frame = 1;
             this.Stararr.push(1);
            _this.opt1.events.onInputUp.removeAll();
            
            //_this.wrong = false;
            _this.noofAttempts++;

           //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.4.2a_",  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            if (_this.Caterpillar_head.key == 'Unity2_4_2a_start')
            {
                 //console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                _this.Caterpillar_head.loadTexture('Unity2_4_2a_wrong', 0);
                _this.Caterpillar_head.animations.add('Unity2_4_2a_wrong');
                _this.Caterpillar_head.animations.play('Unity2_4_2a_wrong',null,true);
            }

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
             /*_this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                //_this.getQuestion1();
            }, this);*/

           commonNavBar.playsnapSound();
            commonNavBar.playWrongCelebrationSound();
            target.events.onInputDown.removeAll();
            //commonNavBar.stopTimer();
            _this.time.events.add(500,_this.removeEverthing1,_this);
            if(window.quizQuest == true)
			{
				commonNavBar.updateScore(-5);
			}             
        }
	},

     removeEverthing1:function() 
    {
        //console.log("removeEverthing");
        
        _this.wrong = true;
        _this.opt1.frame = 0;
        _this.no11++;
       ///_this.count1++;
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<3)
        {
           this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
               // _this.no11++;
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
					_this.getQuestion1();
				}
            },_this);  
        }
        else
        {
            /*_this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity2_4_2aScore');*/
            countIncrement = 0;
            var timerStopVar = commonNavBar.stopTimer();
            _this.stopVoice();
            //commonNavBar.stopTimer();
            commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.speakerbtn=null,
           
		   _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
            console.log("this.Stararr"+this.Stararr);
            _this.state.start('sequence_NSSG_4_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
			},_this);  
        }
    },
	
};