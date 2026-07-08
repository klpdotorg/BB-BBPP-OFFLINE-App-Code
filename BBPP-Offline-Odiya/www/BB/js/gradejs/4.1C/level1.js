Game.grade4_1Clevel1=function(){};
var bg1;
var starsGroup3;
var count3;
var gameBoxGroup3;
var crocsGroup3;
var tickMark3;
var objGroup3;
var rightOrderArray3 = [];
var glowOrderArray3 = [];
var no3,no4;
var count13;
var qArrays3 = [];
var graphics3;
var tweencount3;
var speakerbtn;
var timeforlan=0;
var qflag=0;
var qname;
var qno=0;

var noofAttempts;
var timer;
var AnsTimerCount;

var gameid,questionid;

Game.grade4_1Clevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.1C";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("volume4_1C",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade4MVG1){

            window.grade4MVG1 = true;

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

            //GAME ASSETS                

            _this.load.image('Level41A_bg1',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg1.png');
        //_this.load.atlas('Level41A_backbtn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.1A/backbtn.json');
        //_this.load.atlas('Level41A_speaker',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.1A/speaker.json');
        //_this.load.atlas('Level41A_starAnim',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.1A/starAnim.json');
        _this.load.image('Level41A_cloud',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/cloud.png');
      //  _this.load.atlas('Level41A_btn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.1A/btn.json');
        _this.load.image('Level41A_bg3',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg3.png');
      //  _this.load.image('Level41A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level41A_replay',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.1A/reply.json');
        
        //My files to load
        _this.load.atlas('Level41A_gameBox',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox.json');
        _this.load.atlas('Level41A_allimg',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.1A/allimg.json');
        _this.load.atlas('Level41A_tickMark',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.1A/tickMark.json');
        _this.load.image('Level41A_croc',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc.png');
        _this.load.image('Level41A_croc2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc2.png');
        
        _this.load.image('Level41A_glow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level41A_cup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/1.png');
        _this.load.image('Level41A_cup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/2.png');
        _this.load.image('Level41A_cup3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/3.png');
        _this.load.image('Level41A_cup4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/4.png');
        
        _this.load.image('Level41A_bucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/5.png');
        _this.load.image('Level41A_bucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/6.png');
        _this.load.image('Level41A_bucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/7.png');
        _this.load.image('Level41A_bucket4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/8.png');
        
        _this.load.image('Level41A_jug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/9.png');
        _this.load.image('Level41A_jug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/10.png');
        _this.load.image('Level41A_jug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/11.png');
        _this.load.image('Level41A_jug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/12.png');
        
        _this.load.image('Level41A_flask1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/13.png');
        _this.load.image('Level41A_flask2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/14.png');
        _this.load.image('Level41A_flask3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/15.png');
        _this.load.image('Level41A_flask4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/16.png');
        
        _this.load.image('Level41A_bottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/17.png');
        _this.load.image('Level41A_bottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/18.png');
        _this.load.image('Level41A_bottle3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/19.png');
        _this.load.image('Level41A_bottle4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/20.png');
        
        _this.load.image('Level41A_milk1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/21.png');
        _this.load.image('Level41A_milk2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/22.png');
        _this.load.image('Level41A_milk3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/23.png');
        _this.load.image('Level41A_milk4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/24.png');
        
        _this.load.image('Level41A_shadow1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow1.png');
        _this.load.image('Level41A_shadow2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow2.png');
        _this.load.image('Level41A_shadow3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow3.png');
        _this.load.image('Level41A_shadow4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow4.png');
        _this.load.image('Level41A_shadow5',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow5.png');
        _this.load.image('Level41A_shadow6',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        _this.load.atlas('Level41A_gameBox3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox3.json');
        _this.load.atlas('Level41A_allimages',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimages.png' ,window.baseUrl+'json/gradeJson/4.1A/allimages.json');
        _this.load.image('Level41A_bluebottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
        _this.load.image('Level41A_bluebottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
        
        _this.load.image('Level41A_glassfull1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
        _this.load.image('Level41A_glassfull2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
        _this.load.image('Level41A_glassfull3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
        _this.load.image('Level41A_glassfull4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
        
        _this.load.image('Level41A_greendrum1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
        _this.load.image('Level41A_greendrum2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
        _this.load.image('Level41A_greendrum3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
        
        _this.load.image('Level41A_greenmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
        _this.load.image('Level41A_greenmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
        
        _this.load.image('Level41A_greencup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup1.png');
        _this.load.image('Level41A_greencup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup2.png');
        
        _this.load.image('Level41A_greenpot1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
        _this.load.image('Level41A_greenpot2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
        _this.load.image('Level41A_greenpot3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
        _this.load.image('Level41A_greenpot4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
        
        _this.load.image('Level41A_orangebucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
        _this.load.image('Level41A_orangebucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
        
        _this.load.image('Level41A_orangecan1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
        _this.load.image('Level41A_orangecan2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
        _this.load.image('Level41A_orangecan3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
        
        _this.load.image('Level41A_orangejug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
        _this.load.image('Level41A_orangejug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
        
        _this.load.image('Level41A_pinkbucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
        _this.load.image('Level41A_pinkbucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
        _this.load.image('Level41A_pinkbucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
        
        _this.load.image('Level41A_pinkmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
        _this.load.image('Level41A_pinkmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
        
        _this.load.image('Level41A_redjug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1.png');
        _this.load.image('Level41A_redjug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug2.png');
        _this.load.image('Level41A_redjug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug3.png');
        _this.load.image('Level41A_redjug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug4.png');
        
        _this.load.image('Level41A_syntex1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1.png');
        _this.load.image('Level41A_syntex2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2.png');
        
        _this.load.image('Level41A_whitemug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
        _this.load.image('Level41A_whitesoda1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
        _this.load.image('Level41A_whitesoda2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
        
        _this.load.image('Level41A_yellowct1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
        _this.load.image('Level41A_bottleone',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottleone.png');
        
        _this.load.image('Level41A_bluebottle1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
        _this.load.image('Level41A_glassfull1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
        _this.load.image('Level41A_glassfull2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
        _this.load.image('Level41A_greendrum1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
        _this.load.image('Level41A_greendrum2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
        _this.load.image('Level41A_greenmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
        _this.load.image('Level41A_greenpot1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
        _this.load.image('Level41A_orangebucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
        _this.load.image('Level41A_orangebucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
        _this.load.image('Level41A_orangecan1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
        _this.load.image('Level41A_orangecan2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
        _this.load.image('Level41A_orangejug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
        _this.load.image('Level41A_orangejug2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
        _this.load.image('Level41A_pinkbucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
        _this.load.image('Level41A_pinkbucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
        _this.load.image('Level41A_pinkmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
        _this.load.image('Level41A_redjug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
        _this.load.image('Level41A_syntex1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
        _this.load.image('Level41A_syntex2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
        _this.load.image('Level41A_whitemug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
        _this.load.image('Level41A_whitesoda1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        _this.load.image('Level41A_bg4_1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
        _this.load.atlas('Level41A_bottlefull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlefull.json');
        _this.load.atlas('Level41A_bottlehalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlehalf.json');
        _this.load.atlas('Level41A_bottlequarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlequarter.json');
        _this.load.atlas('Level41A_bucketfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketfull.json');
        _this.load.atlas('Level41A_buckethalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,window.baseUrl+'json/gradeJson/4.1A/buckethalf.json');
        _this.load.atlas('Level41A_bucketquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketquarter.json');
        _this.load.atlas('Level41A_glassfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,window.baseUrl+'json/gradeJson/4.1A/glassfull.json');
        _this.load.atlas('Level41A_glasshalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,window.baseUrl+'json/gradeJson/4.1A/glasshalf.json');
        _this.load.atlas('Level41A_glassquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/glassquarter.json');
        _this.load.atlas('Level41A_jugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/jugfull.json');
        _this.load.atlas('Level41A_jughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/jughalf.json');
        _this.load.atlas('Level41A_jugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/jugquarter.json');
        _this.load.atlas('Level41A_mugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/mugfull.json');
        _this.load.atlas('Level41A_mughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/mughalf.json');
        _this.load.atlas('Level41A_mugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/mugquarter.json');
        _this.load.atlas('Level41A_sodafull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,window.baseUrl+'json/gradeJson/4.1A/sodafull.json');
        _this.load.atlas('Level41A_sodahalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,window.baseUrl+'json/gradeJson/4.1A/sodahalf.json');
        _this.load.atlas('Level41A_sodaquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/sodaquarter.json');
        _this.load.image('Level41A_bottle_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
        _this.load.image('Level41A_bucket_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
        _this.load.image('Level41A_glass_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
        _this.load.image('Level41A_jug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
        _this.load.image('Level41A_mug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
        _this.load.image('Level41A_soda_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');


    }

    },


	create:function(game){

	_this.amplify = null;
		noofAttempts=0;
        AnsTimerCount=0;
         _this.sceneCount=0;

		qno=0;
        no3=0;
        no4=0;
		qno=0;
            qflag=0;
            no3=0;
            no4=0;
            _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        qArrays3 = [1,3,5,7,9];
        qArrays4 = [2,4,6,8,10];
        qArrays3 = this.shuffle(qArrays3);
        qArrays4 = this.shuffle(qArrays4);
        count3=0;
        count13=0;
        tweenCount3 = 0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
       
       /* var backbtn = this.add.button(5,1,'Level41A_CommonBackBtn',function(){
		this.stopAllVoice();
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       _this.speakerbtn = this.add.button(908,1,'Level41A_CommonSpeakerBtn',function(){
			this.getVoice(qArrays3[no3]);
		},this,1,0,2);*/
		
		_this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
           
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

        _this.speakerbtn = this.add.button(600,6,'Level42A_CommonSpeakerBtn',function(){},this,1,0,2);
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           
            _this.getVoice(questno);
            
        },_this);

                _this.timebg=this.add.sprite(305,6,'Level42B_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,23,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


            /*_this.dottedBox=this.add.sprite(70,7,'dottedBox');
            _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Volume');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
	  /* _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
		_this.speakerbtn.events.onInputDown.add(function(){
			var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice(qArrays3[no3]);
			
		},this);*/
        
        graphics3 = this.add.graphics(0, 400);
		graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		graphics3.beginFill(0xFF700B, 1);
		graphics3.drawRect(0,0,960,120);		
		graphics3.boundsPadding = 0;
		graphics3.alpha=0;
		
		
        
        this.generateStarsForTheScene(6);
        
       // no1++;
        this.getQuestion();

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
    
  /*  stopAllVoice:function(){
        Eng_41C2.stop();
        Hin_41C2.stop();
        Kan_41C2.stop();
        Eng_41C1.stop();
        Hin_41C1.stop();
        Kan_41C1.stop();
        
    },*/

    getQuestion:function(target)
    {    
		noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

_this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
  _this.timer1.start();
  
        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
		
        qflag++;
    	//////console.log("get"+no1);
       
        if(qflag==1 || qflag==3 || qflag==5 || qflag==7 || qflag==9)
        {
            qname="array1";
            questno=qArrays3[no3];
        }
        else
        {
            qname="array2";
            questno=qArrays4[no4];
        }
		console.log("questno "+ questno);
    	switch(questno)
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
           
    	}
        
    },
    
    addQuestion:function(no2)
    {
          //////console.log("here");
           this.time.events.add(2000, function(){
  
           var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);
    },
    
 
    
    adddragBoxes:function(){
    	//no3++;
         crocsGroup3 = this.add.group();
        gameBoxGroup3 = this.add.group();
        
        var x = 100;
        var x1 = 180;
        var y = 150;
        var y1 = 130;
        
   
        for(var i=0;i<4;i++)
        {
           var box =  gameBoxGroup3.create(x,y,'Level41A_gameBox3');
            box.name = "box"+i;
            box.anchor.setTo(0.435,0.42);
            x+=220;
        }
        for(var i=0;i<3;i++)
        {
            if(qname=="array1")
                crocsGroup3.create(x1,y1,'Level41A_croc');
            else 
                crocsGroup3.create(x1,y1,'Level41A_croc2');
            x1+=220;
        }
        tickMark3 = this.add.sprite(860,115,'Level41A_tickMark');
    	//dragBox = this.add.sprite(0,0,'Level41A_gameBox');      	
         crocsGroup3.add(tickMark3);
         
         
        for(var k=0;k<gameBoxGroup3.children.length;k++)
        {
           var targetChild = this.add.sprite(0,0,'Level41A_allimages');
            //targetChild.frameName = gameBoxGroup3.getChildAt(i).frameName;
            targetChild.anchor.setTo(0.5);
            targetChild.alpha = 0;
            gameBoxGroup3.getChildAt(k).addChild(targetChild);  
            gameBoxGroup3.getChildAt(k).getChildAt(0).inputEnabled = true;
            gameBoxGroup3.getChildAt(k).getChildAt(0).input.useHandCursor = true;
            gameBoxGroup3.getChildAt(k).getChildAt(0).events.onInputDown.add(this.boxDragFunction,this);
        }
         
    },
    
     
    
    addDragListener:function(target){
      /* var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        var vx = target.x;   
        var vy = target.y; 
        target.input.enableDrag(true);
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        
        var tempName = target.name;
    //   tempName = tempName.substring(tempName.length-1);
        objGroup3.getByName("shadow_"+tempName).visible = false;
        
        target.events.onDragStop.add(
            function(target){
              //  ////console.log("if");
                objGroup3.getByName(tempName).visible = true;
                for(var i=0;i<gameBoxGroup3.children.length;i++)
                {
                        if(this.checkOverlap(target,gameBoxGroup3.getChildAt(i))&&gameBoxGroup3.getChildAt(i).frameName=="blank")
                        {
                            gameBoxGroup3.getChildAt(i).frameName = target.name;
                            objGroup3.getByName("shadow_"+tempName).visible = false;
                            target.visible = false;
                            _this.snap1 = _this.add.audio('snapSound');
                            _this.snap1.play();
                            count3++;
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
                target.x = vx;   
                target.y = vy;
                //console.log(count3);
                if(count3>=4)
                {
                   tickMark3.inputEnabled = true; 
                   tickMark3.input.useHandCursor = true; 
                   tickMark3.events.onInputDown.add(this.checkFortheRightOrder,this); 
                   tickMark3.events.onInputUp.add(function(target){
                        tickMark3.frame = 0;
                   },this);
                   tickMark3.events.onInputUp.removeAll();
                }
                   
            },this);
        
     },
    
    boxDragFunction:function(target){
        
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click",
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
    // //console.log(target.frameName);   
    // //console.log(target.parent.frameName);   
    target.frameName = target.parent.frameName;
     _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
   // //console.log(target.frameName);
    if(target.frameName!="blank")
    {
       target.parent.frameName = "blank";
       target.alpha = 1;
       var vx = target.x;   
       var vy = target.y; 
       target.input.enableDrag(true);
       gameBoxGroup3.bringToTop(target.parent);
       
        target.events.onDragStop.add(
            function(target){

                for(var i=0;i<gameBoxGroup3.children.length;i++)
                {
                     // //console.log("if");
                        if(this.checkOverlap(target,gameBoxGroup3.getChildAt(i))&&gameBoxGroup3.getChildAt(i).frameName=="blank")
                        {
                           // //console.log("hitttttt");
                            var frameName = target.frameName;
                            target.parent.frameName =  gameBoxGroup3.getChildAt(i).frameName;
                            gameBoxGroup3.getChildAt(i).frameName = frameName;
                            _this.snap1 = _this.add.audio('snapSound');
                            _this.snap1.play();
                            break;
                           
                        }
                       else if(this.checkOverlap(target,graphics3))
                        {
                            target.parent.frameName = "blank";
                             count3--;
                            tickMark3.events.onInputDown.removeAll();
                            //console.log(count3);
                            objGroup3.getByName(target.frameName).visible = true;
                            
                            var tempName = objGroup3.getByName(target.frameName).name;
                            //tempName = tempName.substring(tempName.length-1);
                            objGroup3.getByName("shadow_"+tempName).visible = true;
                            
                            break;
                      //  target.x = vx;   
                      //  target.y = vy; 
                        }else
                        {
                            target.parent.frameName = target.frameName;
                           // objGroup.getByName(target.frameName).visible = true;
                      //  target.x = vx;   
                      //  target.y = vy; 
                        }

                        
                    
                    
                }
                target.events.onDragStop.removeAll(); 
                target.alpha = 0;
                target.x = vx;
                target.y = vy;
                target.frameName = "blank";
                gameBoxGroup3.bringToTop(gameBoxGroup3.getByName("box0"));          
                gameBoxGroup3.bringToTop(gameBoxGroup3.getByName("box1"));          
                gameBoxGroup3.bringToTop(gameBoxGroup3.getByName("box2"));          
                gameBoxGroup3.bringToTop(gameBoxGroup3.getByName("box3"));          
                          
                
            },this);
       
        }
       
       
     },
    
    checkAns:function(target){
        
		          if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

                    if(_this.timer1)
                    {
                    _this.timer1.stop();
                    }

                     var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
		
       // //console.log("here");
        objGroup3.destroy();
       // target.events.onInputDown.removeAll();
        
        
        var tween = this.add.tween(gameBoxGroup3);
    	tween.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){

        }, this);
       
        var tween1 = this.add.tween(crocsGroup3);
    	tween1.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween1.onComplete.add(function(){
             //this.checkFortheRightOrder();
             _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
             var starAnim = starsGroup3.getChildAt(count13);
               // //console.log(starAnim);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
                anim4.onComplete.add(function(){this.addGlowtoTheSprite();},this);
            count13++;
            
        }, this);
        

        
    },
    
    
    
   /* checkFortheRightOrder:function(target){
        target.frame = 1;
        var wrongBox = this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        wrongBox.x = gameBoxGroup.x;
        wrongBox.y = gameBoxGroup.y;
        //console.log(gameBoxGroup.children.length);
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
            //console.log("for");
            //console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
               //console.log("right");
               rightCount++;
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
                shake.shake(10,gameBoxGroup.getChildAt(i));
               // //console.log(gameBoxGroup.getChildAt(i).frameName);
                //gameBoxGroup.getChildAt(i).visible = false;
                wrongBoxArray.push(gameBoxGroup.getChildAt(i));
                indexArray.push(i);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           wrongBox.add(wrongBoxArray[j]);     
        }
        shake.shake(10,wrongBox);
       
         this.time.events.add(1000, function(){
            gameBoxGroup.destroy();
             gameBoxGroup = this.add.group();
            var x = 100;
            var y = 150;
            for(var i=0;i<4;i++)
            {
               var box =  gameBoxGroup.create(x,y,'Level41A_gameBox');
                box.name = "gameBox";
                box.anchor.setTo(0.435,0.42);
                x+=220;
            }
            gameBoxGroup.x = wrongBox.x;
            gameBoxGroup.y = wrongBox.y;
            wrongBox.destroy();
             
            for(var j=0;j<gameBoxGroup.children.length;j++)
            {
                gameBoxGroup.getChildAt(j).frameName = rightOrderArray[j];
            }
            this.addGlowtoTheSprite();
            
         }, this);
        if(rightCount>=4)
        {
             _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
             var starAnim = starsGroup.getChildAt(count1);
                //console.log(starAnim);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
            count1++;
        }
        else
        {
             waudio.play();    
         }
        
    },*/
    
    checkFortheRightOrder:function(target){
		noofAttempts++;
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        target.events.onInputDown.removeAll();
        var wrongBox = this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        var selectedFrameArray = [];
        var objTovisible = [];
        var wrongXpos = [];
        var wrongYpos = [];
        wrongBox.x = gameBoxGroup3.x;
        wrongBox.y = gameBoxGroup3.y;
       // //console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup3.children.length;i++)
        {
           // //console.log("for");
           // //console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup3.getChildAt(i).frameName == rightOrderArray3[i])
            {
              // //console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup3.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // //console.log(gameBoxGroup.getChildAt(i).frameName);
                count3--;
                gameBoxGroup3.getChildAt(i).visible = false;
                selectedFrameArray.push("blank");
                objTovisible.push(gameBoxGroup3.getChildAt(i).frameName);
                wrongBoxArray.push(gameBoxGroup3.getChildAt(i).frameName);
                indexArray.push(i);
                wrongXpos.push(gameBoxGroup3.getChildAt(i).x);
                wrongYpos.push(gameBoxGroup3.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            var wBox = wrongBox.create(0,0,'Level41A_gameBox3');
            wBox.anchor.setTo(0.435,0.42);
            wBox.x = wrongXpos[j];
            wBox.y = wrongYpos[j];
            wBox.frameName = wrongBoxArray[j];
        }
        shake.shake(10,wrongBox);
       
         this.time.events.add(1000, function(){


            wrongBox.destroy();
             
            for(var j=0;j<gameBoxGroup3.children.length;j++)
            {
                gameBoxGroup3.getChildAt(j).visible = true;
                gameBoxGroup3.getChildAt(j).frameName = selectedFrameArray[j];
            }
            for(var k=0;k<objTovisible.length;k++)
            {
                 objGroup3.getByName(objTovisible[k]).visible = true;  
                 var tempName = objGroup3.getByName(objTovisible[k]).name;
                 //tempName = tempName.substring(tempName.length-1);
                 objGroup3.getByName("shadow_"+tempName).visible = true;
            }
            
            //this.addGlowtoTheSprite();
             if(rightCount>=4)
                 {
                     _this.speakerbtn.inputEnabled=false;
                 }
             else
                 {
                     target.frame = 0;
                 }
            
         }, this);
        if(rightCount>=4)
        {
            for(var k=0;k<gameBoxGroup3.children.length;k++)
            {
                gameBoxGroup3.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
            
            this.checkAns();
        }
        else
        {
              _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();  
            
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      //  //console.log("Glow");
        gameBoxGroup3.getChildAt(glowOrderArray3[0]).removeChildren();
        var glow = this.add.sprite(0,0,'Level41A_glow');
        glow.anchor.setTo(0.495);

        gameBoxGroup3.getChildAt(glowOrderArray3[0]).addChild(glow);  
        var anim = glow.animations.add('glow');
        anim.play(100,1);
        this.time.events.add(500, function(){
            
            anim.stop();
            gameBoxGroup3.getChildAt(glowOrderArray3[1]).removeChildren();
            gameBoxGroup3.getChildAt(glowOrderArray3[1]).addChild(glow);
            
            anim.play(100,1);
            
            this.time.events.add(500, function(){
            
            anim.stop();
            gameBoxGroup3.getChildAt(glowOrderArray3[2]).removeChildren();
            gameBoxGroup3.getChildAt(glowOrderArray3[2]).addChild(glow);
            
            anim.play();
            
            
            this.time.events.add(500, function(){
            
                    anim.stop();
                    gameBoxGroup3.getChildAt(glowOrderArray3[3]).removeChildren();
                    gameBoxGroup3.getChildAt(glowOrderArray3[3]).addChild(glow);

                    anim.play();

                this.time.events.add(500, function(){this.removeEverthing();},this);
                


                },this);
            
            
            },this);
            
            
            
        },this);
        
    },
    
  
    
    removeEverthing:function() 
    {
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        //no1++;
        //console.log("--------------------------"+no1);
        if(qno<5)
        {
            var MaintweenDestroy = this.add.tween(objGroup3);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup3.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(gameBoxGroup3);
            Maintween1Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                gameBoxGroup3.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(crocsGroup3);
            Maintween2Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                crocsGroup3.destroy();
                
                count3 =0;
            tweenCount3=0;
            this.getQuestion(); 
                
            },this);
 
               
        }
        else
        {
           // //console.log("gameover");
            //this.stopAllVoice();
            qno=0;
            qflag=0;
            no3=0;
            no4=0;
            this.state.start('grade4_1CScore');
        }
        qno++;
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    gotoFirstQuestion:function(){
		
		_this.questionid = 2;
		
        this.getVoice(1);
        
        no3++;
         this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(120,440,'Level41A_orangebucket1');
         b1.anchor.setTo(0.5,0.5);
         b1.name = "orangebucket1";

         var b2 = this.add.sprite(350,400,'Level41A_syntex1');
         b2.anchor.setTo(0.5,0.5);
         b2.name = "syntex1";
         
         var b3 = this.add.sprite(580,530,'Level41A_pinkbucket1');
         b3.anchor.setTo(0.5,1);
         b3.name = "pinkbucket1";
         
         var b4 = this.add.sprite(790,530,'Level41A_greendrum1');
         b4.anchor.setTo(0.5,1);
         b4.name = "greendrum1";

         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
         
        
         var shadow1 = this.add.sprite(108,490,'Level41A_orangebucket1_shadow');
         shadow1.name = "shadow_orangebucket1";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.scale.setTo(1.5,1.5);
        
         var shadow2 = this.add.sprite(338,495,'Level41A_syntex1_shadow');
         shadow2.name = "shadow_syntex1";
         shadow2.anchor.setTo(0.5,0.5);
         shadow2.scale.setTo(1.75,1.75);
        
         var shadow3 = this.add.sprite(b3.x-13,b3.y-37,'Level41A_pinkbucket1_shadow');
         shadow3.name = "shadow_pinkbucket1";
         shadow3.anchor.setTo(0.5,0.5);
         shadow3.scale.setTo(0.55,0.65);
        
         var shadow4 = this.add.sprite(b4.x-13,b4.y-34,'Level41A_greendrum1_shadow');
         shadow4.name = "shadow_greendrum1";
         shadow4.anchor.setTo(0.5,1);
         shadow4.scale.setTo(0.80,1.1);
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["pinkbucket1","orangebucket1","greendrum1","syntex1"];
         glowOrderArray3 = [0,1,2,3];
        
       objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
            
     },
    
    gotoSecondQuestion:function(){
		
		_this.questionid = 1;
        this.getVoice(2);
       
        no4++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(150,410,'Level41A_greenpot1');
         b1.scale.setTo(0.85,0.85);
         b1.anchor.setTo(0.5,0.5);
         b1.name = "greenpot1";
       
         var b2 = this.add.sprite(370,387,'Level41A_greendrum1');
         b2.anchor.setTo(0.5,0.5);
         b2.name = "greendrum2";

         var b3 = this.add.sprite(600,440,'Level41A_redjug1');
         b3.anchor.setTo(0.5,0.5);
         b3.name = "redjug1";
         
         var b4 = this.add.sprite(800,450,'Level41A_glassfull1');
         b4.anchor.setTo(0.5,0.5);
         b4.name = "glassfull1";
         
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
            
         var shadow1 = this.add.sprite(138,460,'Level41A_greenpot1_shadow');
         shadow1.name = "shadow_greenpot1";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.scale.setTo(0.75,0.75);
        
         var shadow2 = this.add.sprite(357,475,'Level41A_greendrum2_shadow');
         shadow2.name = "shadow_greendrum2";
         shadow2.anchor.setTo(0.5,1);
         shadow2.scale.setTo(1.4,0.75);
        
         var shadow3 = this.add.sprite(583,475,'Level41A_redjug1_shadow');
         shadow3.name = "shadow_redjug1";
         shadow3.anchor.setTo(0.5,1);
        
         var shadow4 = this.add.sprite(786,473,'Level41A_glassfull1_shadow');
         shadow4.name = "shadow_glassfull1";
         shadow4.anchor.setTo(0.5,1);
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["greendrum2","greenpot1","redjug1","glassfull1"];
         glowOrderArray3 = [0,1,2,3];
        
       objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
    
    gotoThirdQuestion:function(){
		
		_this.questionid = 2;
        this.getVoice(3);
        
        no3++;
      	this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,450,'Level41A_whitemug1');
        
         b1.anchor.setTo(0.5,0.5);
         b1.name = "whitemug1";
       
         var b2 = this.add.sprite(350,380,'Level41A_syntex2');
         b2.anchor.setTo(0.5,0.5);
         b2.name = "syntex2";
         
         var b3 = this.add.sprite(580,415,'Level41A_orangebucket2');
         b3.anchor.setTo(0.5,0.5);
         b3.name = "orangebucket2";
         
         var b4 = this.add.sprite(790,440,'Level41A_greenmug1');
         b4.anchor.setTo(0.5,0.5);
         b4.name = "greenmug1";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(126,477,'Level41A_whitemug1_shadow');
         shadow1.name = "shadow_whitemug1";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.width-=20;
        
         var shadow2 = this.add.sprite(566,495,'Level41A_syntex2_shadow');
         shadow2.name = "shadow_syntex2";
         shadow2.anchor.setTo(0.5,0.5);
         shadow2.anchor.setTo(1.75,1.75);
         shadow2.width+=100;
        
         var shadow3 = this.add.sprite(565,485,'Level41A_orangebucket2_shadow');
         shadow3.name = "shadow_orangebucket2";
         shadow3.anchor.setTo(0.5,1);
         shadow3.width-=45;
        
         var shadow4 = this.add.sprite(785,483,'Level41A_greenmug1_shadow');
         shadow4.name = "shadow_greenmug1";
         shadow4.anchor.setTo(0.5,1);
         shadow4.width-=20;
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["whitemug1","greenmug1","orangebucket2","syntex2"]; 
    	  glowOrderArray3 = [0,1,2,3];   
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
    
    gotoFourthQuestion:function(){
		
		_this.questionid = 1;
        this.getVoice(4);
        
        no4++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,420,'Level41A_orangejug1');
        
         b1.anchor.setTo(0.5,0.5);
         b1.name = "orangejug1";
       
         var b2 = this.add.sprite(300,450,'Level41A_whitesoda1');
         b2.anchor.setTo(0.5,0.5);
         b2.name = "whitesoda1";
        
         var b3 = this.add.sprite(500,420,'Level41A_orangecan2');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.65,0.65);
         b3.name = "orangecan2";
         
         var b4 = this.add.sprite(750,420,'Level41A_pinkbucket3');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.85,0.85);
         b4.name = "pinkbucket3";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(112,496,'Level41A_orangejug1_shadow');
         shadow1.name = "shadow_orangejug1";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.scale.setTo(0.3,0.6);
         //shadow1.width-=0;
        
         var shadow2 = this.add.sprite(280,500,'Level41A_whitesoda1_shadow');
         shadow2.name = "shadow_whitesoda1";
         shadow2.anchor.setTo(0.5,1);
         shadow2.width-=40;
         shadow2.scale.setTo(0.3,0.4);
        
         var shadow3 = this.add.sprite(490,500,'Level41A_orangecan2_shadow');
         shadow3.name = "shadow_orangecan2";
         shadow3.anchor.setTo(0.5,1);
         shadow3.width-=40;
        
         var shadow4 = this.add.sprite(739,490,'Level41A_pinkbucket2_shadow');
         shadow4.name = "shadow_pinkbucket3";
         shadow4.anchor.setTo(0.5,1);
         shadow4.width-=40;
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["pinkbucket3","orangecan2","orangejug1","whitesoda1"];
    	  glowOrderArray3 = [0,1,2,3];   
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },

    gotoFifthQuestion:function(){
		
		_this.questionid = 2;
        this.getVoice(5);
        
        no3++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,459,'Level41A_glassfull2');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(0.75,0.75);
         b1.name = "glassfull2";
       
         var b2 = this.add.sprite(350,428,'Level41A_pinkmug2');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(0.75,0.85);
         b2.name = "pinkmug2";        
         
         var b3 = this.add.sprite(580,450,'Level41A_bluebottle2');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.75,0.75);
         b3.name = "bluebottle2";
              
         var b4 = this.add.sprite(795,424,'Level41A_orangejug2');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.65,0.70);
         b4.name = "orangejug2";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(130,485,'Level41A_glassfull2_shadow');
         shadow1.name = "shadow_glassfull2";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.scale.setTo(0.5,0.5);
        
         var shadow2 = this.add.sprite(330,482,'Level41A_pinkmug1_shadow');
         shadow2.name = "shadow_pinkmug2";
         shadow2.anchor.setTo(0.5,0.5);
         shadow2.scale.setTo(0.75,0.75);
        
         var shadow3 = this.add.sprite(565,487,'Level41A_bluebottle1_shadow');
         shadow3.name = "shadow_bluebottle2";
         shadow3.anchor.setTo(0.5,0.5);
        
         var shadow4 = this.add.sprite(777,489,'Level41A_orangejug2_shadow');
         shadow4.name = "shadow_orangejug2";
         shadow4.anchor.setTo(0.5,0.5);
         shadow4.scale.setTo(0.4,0.5);
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["glassfull2","bluebottle2","orangejug2","pinkmug2"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
    
  
    gotoSixthQuestion:function(){
		
		_this.questionid = 1;
        this.getVoice(6);
       
        no4++;
       this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(150,405,'Level41A_orangecan3');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(1.55,1.7);
         b1.name = "orangecan3";
       
         var b2 = this.add.sprite(360,435,'Level41A_whitesoda2');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(0.75,0.85);
         b2.name = "whitesoda2";    
         
         var b3 = this.add.sprite(570,420,'Level41A_redjug3');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.75,0.85);
         b3.name = "redjug3";       
         
         var b4 = this.add.sprite(780,455,'Level41A_glassfull3');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.75,0.85);
         b4.name = "glassfull3";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(130,495,'Level41A_orangecan2_shadow');
         shadow1.name = "shadow_orangecan3";
         shadow1.anchor.setTo(0.5,0.9);
         shadow1.width-=20;
        
         var shadow2 = this.add.sprite(343,492,'Level41A_whitesoda1_shadow');
         shadow2.name = "shadow_whitesoda2";
         shadow2.anchor.setTo(0.5,1);
         shadow2.width-=55;
         shadow2.scale.setTo(0.3,0.4);
        
         var shadow3 = this.add.sprite(552,490,'Level41A_redjug1_shadow');
         shadow3.name = "shadow_redjug3";
         shadow3.anchor.setTo(0.5,1);
         shadow3.width+=30;
        
         var shadow4 = this.add.sprite(770,480,'Level41A_glassfull2_shadow');
         shadow4.name = "shadow_glassfull3";
         shadow4.anchor.setTo(0.5,0.5);
         shadow4.scale.setTo(0.5,0.5);
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["orangecan3","redjug3","whitesoda2","glassfull3"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
     
    gotoSeventhQuestion:function(){
		
		_this.questionid = 2;
        this.getVoice(7);
        
        no3++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,420,'Level41A_greencup1');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(0.65,0.75);
         b1.name = "greencup1";
       
         var b2 = this.add.sprite(340,405,'Level41A_redjug4');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(1.2,1.2);
         b2.name = "redjug4";
           
         var b3 = this.add.sprite(560,430,'Level41A_yellowct1');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.75,0.75);
         b3.name = "yellowct1";

         var b4 = this.add.sprite(760,405,'Level41A_glassfull4');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.65,0.65);
         b4.name = "glassfull4";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(140,450,'Level41A_greenmug1_shadow');
         shadow1.name = "shadow_greencup1";
         shadow1.anchor.setTo(0.5,1);
         shadow1.scale.setTo(0.5,0.5);
         
        
         var shadow2 = this.add.sprite(320,450,'Level41A_redjug1_shadow');
         shadow2.name = "shadow_redjug4";
         shadow2.anchor.setTo(0.5,1);
         shadow2.width+=30;
        
         var shadow3 = this.add.sprite(549,450,'Level41A_greenmug1_shadow');
         shadow3.name = "shadow_yellowct1";
         shadow3.anchor.setTo(0.5,1);
         shadow3.scale.setTo(0.4,0.5);
        
         var shadow4 = this.add.sprite(751,450,'Level41A_glassfull2_shadow');
         shadow4.name = "shadow_glassfull4";
         shadow4.anchor.setTo(0.5,1);
         shadow4.width-=40;
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["yellowct1","greencup1","glassfull4","redjug4"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },

    
    gotoEighthQuestion:function(){
		
		_this.questionid = 1;
        this.getVoice(8);
       
        no4++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,400,'Level41A_bottleone');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(0.65,0.75);
         b1.name = "bottleone";
       
         var b2 = this.add.sprite(350,415,'Level41A_bluebottle1');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(0.65,0.65);
         b2.name = "bluebottle1";
         
         var b3 = this.add.sprite(580,384,'Level41A_greenpot4');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(1,1);
         b3.name = "greenpot4";
          
         var b4 = this.add.sprite(820,400,'Level41A_pinkmug1');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.55,0.55);
         b4.name = "pinkmug1";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(150,458,'Level41A_bluebottle1_shadow');
         shadow1.name = "shadow_bottleone";
         shadow1.anchor.setTo(1,0.5);
        
         var shadow2 = this.add.sprite(336,455,'Level41A_bluebottle1_shadow');
         shadow2.name = "shadow_bluebottle1";
         shadow2.anchor.setTo(0.5,0.5);
        
         var shadow3 = this.add.sprite(566,447,'Level41A_greenpot1_shadow');
         shadow3.name = "shadow_greenpot4";
         shadow3.anchor.setTo(0.5,0.5);
         shadow3.scale.setTo(0.75,0.65);
        
         var shadow4 = this.add.sprite(803,444,'Level41A_pinkmug1_shadow');
         shadow4.name = "shadow_pinkmug1";
         shadow4.anchor.setTo(0.5,0.5);
         shadow4.scale.setTo(0.75,0.65);
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["greenpot4","pinkmug1","bottleone","bluebottle1"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
     
    
    gotoNinthQuestion:function(){
		
		_this.questionid = 2;
        this.getVoice(9);
        
        no3++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(140,400,'Level41A_redjug3');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(0.47,0.47);
         b1.name = "redjug3";
       
         var b2 = this.add.sprite(340,378,'Level41A_greenpot3');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(0.63,0.63);
         b2.name = "greenpot3";  
         
         var b3 = this.add.sprite(530,417,'Level41A_greencup1');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.55,0.60);
         b3.name = "greencup1";
         
         var b4 = this.add.sprite(751,400,'Level41A_greenmug2');
         b4.anchor.setTo(0.5,0.5);
         b4.scale.setTo(0.60,0.60);
         b4.name = "greenmug2";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(131,437,'Level41A_redjug1_shadow');
         shadow1.name = "shadow_redjug3";
         shadow1.anchor.setTo(0.5,0.5);
         shadow1.scale.setTo(1.15,0.85);
        
         var shadow2 = this.add.sprite(330,435,'Level41A_greenpot1_shadow');
         shadow2.name = "shadow_greenpot3";
         shadow2.anchor.setTo(0.5,0.5);
         shadow2.width-=50;
		 shadow2.height-=20;
        
         var shadow3 = this.add.sprite(530,440,'Level41A_greenmug1_shadow');
         shadow3.name = "shadow_greencup1";
         shadow3.anchor.setTo(0.5,1);
         shadow3.scale.setTo(0.4,0.5);
        
         var shadow4 = this.add.sprite(750,440,'Level41A_greenmug1_shadow');
         shadow4.name = "shadow_greenmug2";
         shadow4.anchor.setTo(0.5,1);
         shadow4.width-=25;
        
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
         
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["greencup1","redjug3","greenmug2","greenpot3"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
    
        
    gotoTenthQuestion:function(){
		
		_this.questionid = 1;
        this.getVoice(10);
        
        no4++;
        this.adddragBoxes();
         objGroup3 = this.add.group();
         var b1 = this.add.sprite(160,425,'Level41A_orangecan1');
         b1.anchor.setTo(0.5,0.5);
         b1.scale.setTo(0.5,0.5);
         b1.name = "orangecan1";
       
         var b2 = this.add.sprite(370,415,'Level41A_greenpot1');
         b2.anchor.setTo(0.5,0.5);
         b2.scale.setTo(0.75,0.75);
         b2.name = "greenpot1";
         
         var b3 = this.add.sprite(590,405,'Level41A_pinkbucket2');
         b3.anchor.setTo(0.5,0.5);
         b3.scale.setTo(0.65,0.65);
         b3.name = "pinkbucket2";
         
         var b4 = this.add.sprite(790,390,'Level41A_greendrum1');
         b4.anchor.setTo(0.5,0.5);
        // b4.scale.setTo(0.75,1);
         b4.name = "greendrum1";
        
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.addDragListener,this);
         b2.inputEnabled = true;
         b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.addDragListener,this);
         b3.inputEnabled = true;
         b3.input.useHandCursor = true;
         b3.events.onInputDown.add(this.addDragListener,this);
         b4.inputEnabled = true;
         b4.input.useHandCursor = true;
         b4.events.onInputDown.add(this.addDragListener,this);
        
         var shadow1 = this.add.sprite(152,472,'Level41A_orangecan1_shadow');
         shadow1.name = "shadow_orangecan1";
         shadow1.anchor.setTo(0.5,1);
         shadow1.width-=63;
        
         var shadow2 = this.add.sprite(360,475,'Level41A_greenpot1_shadow');
         shadow2.name = "shadow_greenpot1";
         shadow2.anchor.setTo(0.5,1);
         shadow2.width-=65;
        
         var shadow3 = this.add.sprite(580,473,'Level41A_pinkbucket2_shadow');
         shadow3.name = "shadow_pinkbucket2";
         shadow3.anchor.setTo(0.5,1);
         shadow3.width-=40;
        
         var shadow4 = this.add.sprite(780,470,'Level41A_syntex2_shadow');
         shadow4.name = "shadow_greendrum1";
         shadow4.anchor.setTo(0.5,0.5);
         shadow4.scale.setTo(1.55,1.35);
         
         
         objGroup3.add(shadow1);
         objGroup3.add(shadow2);
         objGroup3.add(shadow3);
         objGroup3.add(shadow4);
        
         objGroup3.add(b1);
         objGroup3.add(b2);
         objGroup3.add(b3);
         objGroup3.add(b4);
         
         rightOrderArray3 = ["greendrum1","pinkbucket2","greenpot1","orangecan1"];
         glowOrderArray3 = [0,1,2,3];
        
        objGroup3.x = 1000;
        gameBoxGroup3.x = 1000;
        crocsGroup3.x = 1000;
        var Maintween = this.add.tween(objGroup3);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
            
        var Maintween1 = this.add.tween(gameBoxGroup3);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
           
        var Maintween2 = this.add.tween(crocsGroup3);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
    },
    
   
    generateStarsForTheScene:function(count3)
	{
		starsGroup3 = this.add.group();
		
		for (var i = 0; i < count3; i++)
		{
	
			starsGroup3.create(this.world.centerX-15, 10,'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup3.getChildAt(j))
				{
					starsGroup3.getChildAt(j).x-=15;
					starsGroup3.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
		////console.log("correct");
        if(_this.timer1)
            {
            _this.timer1.stop();
            }
        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	cmusic = this.add.audio('celebr');
		cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup3.getChildAt(count13);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		wmusic = this.add.audio('waudio');
		wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count13++;
		//if(rightCount<=0)
		//{		
          //  //console.log("vamitha");
            
			if(no3<6)
			{
            //    //console.log("addq");
                 this.addQuestion(count13);
			}
			else
			{
			//	//console.log("gameEnd");
                this.stopAllVoice();
                this.state.start('score');
				//this.state.start('level2');
			}

	},
    
    
	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(no3<6)
		{
            count3++;
			this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level41A_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level41A_rgba(0, 0, 0, 0.5)', 0);
            

    
       this.stopAllVoice();
               this.state.start('level3');
              //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},


    

    
    update:function(){

    },
    
    /*getVoice:function(question){
        this.stopAllVoice();
        switch(question)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:if(window.languageSelected=="English")
                        Eng_41C2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41C2.play();
                    else
                        Kan_41C2.play();
                    break;
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:if(window.languageSelected=="English")
                        Eng_41C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41C1.play();
                    else
                        Kan_41C1.play();
                    break;
        }
    }*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');


        switch(questno)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/English/4.1C2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Hindi/4.1B1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Kannada/4.1C2.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1A/4.1C2.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.1C2.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.1C2.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.1C2.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.1C2.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Odiya/4.1C2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            
            case 2 :
            case 4 :
            case 6 :
            case 8 :
            case 10:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/English/4.1C1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Hindi/4.1B2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Kannada/4.1C1.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1A/4.1C1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.1C1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.1C1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.1C1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.1C1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Odiya/4.1C1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;     
            
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
       
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
                 console.log("stop"); 
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


    shutdown:function()
    {
        _this.stopVoice();
        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,_this.questionid;*/
    }
};