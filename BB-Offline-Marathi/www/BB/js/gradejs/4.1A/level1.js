Game.grade4_1Alevel1=function(){};

var background;
var navBg;
var headingAnim;
var windAnim1;
var windSprite1,windSprite2,windSprite3,windSprite4,windSprite5,windSprite6,windSprite7,windSprite8,windSprite9;
var redpaint;
var yellowpaint;
var greenpaint;
var selectedColor = null;
var windmillGroup;
//var rightAnswer = false;
var questionArray = new Array();
var text;
var questionBackground;
var scoreBg = 0;
var score = 0;
var scoretext;
var count;
var count1;
var qno;
var questarray=new Array();
var starsGroup1;
var q1_graphics1,q1_graphics2,q1_graphics3,q2_graphics1,q2_graphics2,q2_graphics3,q3_graphics1,q3_graphics2,q3_graphics3,q4_graphics2,
    q5_graphics3,q6_graphics1,q7_graphics3,q8_graphics2,q9_graphics3,q10_graphics1,q11_graphics3,q12_graphics3,q13_graphics1,
    q14_graphics2;
var questgroup;
var correctboth=0;
var speakerBtn;
var countboth=0;
var glfullanim1,glquartanim2,glfullanim3,glfullagainanim3,bucketfullanim1,bucketquarteranim1,jugfullanim1,jugquarteranim1,
    mugquarteranim1,mugfullanim1,bottlefullanim1,bottlequarteranim1,sodafullanim1,sodaquarteranim1,glhalfanim14;
//var generateStarArray = new Array();
//generateStarArray = [480,510,450,540,420,570,390,600,360];
var fullglclick=0,halfglclick=0,fullglclickagain=0;
var glfull3,glhalf3,glfullagain;
var glfull1,glhalf1,glquart1,glfull2,glhalf2,glquart2;
var buckethalf4,bucketfull4,bucketquart4,buckethalf5,bucketfull5,bucketquart5;
var jugfull6,jughalf6,jugquart6,jugfull7,jughalf7,jugquart7;
var mugfull8,mughalf8,mugquart8,mugfull9,mughalf9,mugquart9;
var bottlefull10,bottlehalf10,bottlequart10,bottlefull11,bottlehalf11,bottlequart11;
var sodafull12,sodahalf12,sodaquart12,sodafull13,sodahalf13,sodaquart13;
var glquart14,glquart15,glhalf14;

var noofAttempts;
var timer;
var AnsTimerCount;
var gameid,questionid;

Game.grade4_1Alevel1.prototype={

     init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.1A";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("volume4_1A",gradeSelected);
        
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
		
		noofAttempts=0;
        AnsTimerCount=0;
        
        _this.sceneCount = 0;
		_this.amplify = null;
        fullglclick=0;
        halfglclick=0;
        fullglclickagain=0;

        correctboth=0;
        countboth=0;
		 _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        qno=-1;
        count1=0;
        questarray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
       
        questarray = this.shuffle(questarray);
		//questionArray = this.shuffle(questionArray);
		count = 0;
    // console.log(this.game.storage.length);
		
		/*loginTime = game.storage.getItem('loginTime');		
		var time = new Date();		
		game.storage.setItem('loginTime', time);*/
		
		/*Phaser.Input.TOUCH_OVERRIDES_MOUSE = 1;
		this.game.input.touch.preventDefault = false;
		
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);*/
		
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		
		
        background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');
      
       _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
       
        
       //glfull.scale.setTo(0.65,0.85);
        
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
           
            _this.getVoice();
            
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
        
         _this.generateStarsForTheScene(6);

        this.getQuestion();
        
        /*glfull.events.onInputDown.add(function(){
            
        })*/
        
    },
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroup1 = this.add.group();
		
		for (var i = 0; i < count; i++)
		{

	
			starsGroup1.create(this.world.centerX-15, 10,'starAnim1');
			for(var j =0;j<i;j++)
			{
				if(starsGroup1.getChildAt(j))
				{
					starsGroup1.getChildAt(j).x-=15;
					starsGroup1.getChildAt(i).x+=15;
				}
			}
		}						
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


   /* speakeron:function(){
        this.stopAllVoice();
        switch(questarray[qno-1])
        {
            case 1:
            case 4:
            case 6:
            case 9:
            case 10:
            case 12:
            case 14:if(window.languageSelected=="English")
                        Eng_41A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A1.play();
                    else
                        Kan_41A1.play();
                    break;
            
            case 2 :
            case 5 :
            case 7 :
            case 8 :
            case 11:
            case 13:if(window.languageSelected=="English")
                        Eng_41A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A2.play();
                    else
                        Kan_41A2.play();
                    break;
            
            case 3 :if(window.languageSelected=="English")
                        Eng_41A3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A3.play();
                    else
                        Kan_41A3.play();
                    break; 
        }
    },
    
    stopAllVoice:function(){
        Eng_41A1.stop();
        Hin_41A1.stop();
        Kan_41A1.stop();
        Eng_41A2.stop();
        Hin_41A2.stop();
        Kan_41A2.stop();
        Eng_41A3.stop();
        Hin_41A3.stop();
        Kan_41A3.stop();
    },
    */
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
    
    getQuestion:function()
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

        qno++;

		switch(questarray[qno])
		{
			case 1: this.question1(); break;
            case 2: this.question2(); break;
            case 3: this.question3(); break;
            case 4: this.question4(); break;
            case 5: this.question5(); break;
            case 6: this.question6(); break;
            case 7: this.question7(); break;
            case 8: this.question8(); break;
            case 9: this.question9(); break;
            case 10: this.question10(); break;
            case 11: this.question11(); break;
            case 12: this.question12(); break;
            case 13: this.question13(); break;
            case 14: this.question14(); break;
        }
    },
    
    question1:function()
    {
		
		_this.questionid = 1;
		
        this.getVoice(qno); 
       // qno++;
        var glshadow1 = this.add.sprite(198,423,'Level41A_glass_shadow');
        var glshadow2 = this.add.sprite(448,423,'Level41A_glass_shadow');
        var glshadow3 = this.add.sprite(698,423,'Level41A_glass_shadow');
        glfull1 = this.add.sprite(179,310,'Level41A_glassfull','Symbol 2 copy 13 instance 10000');
        glfullanim1=glfull1.animations.add('glfull');
        glhalf1 = this.add.sprite(429,310,'Level41A_glasshalf','Symbol 2 copy instance 10000');
        glquart1 = this.add.sprite(679,310,'Level41A_glassquarter','Symbol 2 copy 2 instance 10000');
        
        q1_graphics1 = this.add.graphics(205, 97);
		q1_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q1_graphics1.beginFill(0xFF0000, 1);
		q1_graphics1.drawRect(0,230,50,100);		
		q1_graphics1.boundsPadding = 0;
		q1_graphics1.alpha=0;
        
        glhalf1.inputEnabled = true;
        glhalf1.input.useHandCursor = true;
        glhalf1.events.onInputDown.add(this.wrongans,this);
        glquart1.inputEnabled = true;
        glquart1.input.useHandCursor = true;
        glquart1.events.onInputDown.add(this.wrongans,this);
        q1_graphics1.inputEnabled = true;
        q1_graphics1.input.useHandCursor = true;
        q1_graphics1.events.onInputDown.add(this.correctans,this);
        
        q1_graphics2 = this.add.graphics(455, 97);
		q1_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q1_graphics2.beginFill(0xFF0000, 1);
		q1_graphics2.drawRect(0,230,50,100);		
		q1_graphics2.boundsPadding = 0;
		q1_graphics2.alpha=0;
        glhalf1.addChild(q1_graphics2);

        q1_graphics3 = this.add.graphics(705, 97);
		q1_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q1_graphics3.beginFill(0xFF0000, 1);
		q1_graphics3.drawRect(0,230,50,100);		
		q1_graphics3.boundsPadding = 0;
		q1_graphics3.alpha=0;
        glquart1.addChild(q1_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(glshadow1);
        questgroup.add(glshadow2);
        questgroup.add(glshadow3);
        questgroup.add(glfull1);
        questgroup.add(glhalf1);
        questgroup.add(glquart1);
        questgroup.add(q1_graphics1);
        questgroup.add(q1_graphics2);
        questgroup.add(q1_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question2:function()
    {
		
		_this.questionid = 2;
		
        this.getVoice(qno); 
       // qno++;
        var glshadow1 = this.add.sprite(198,423,'Level41A_glass_shadow');
        var glshadow2 = this.add.sprite(448,423,'Level41A_glass_shadow');
        var glshadow3 = this.add.sprite(698,423,'Level41A_glass_shadow');
        glfull2 = this.add.sprite(179,310,'Level41A_glassfull','Symbol 2 copy 13 instance 10000');
        glhalf2 = this.add.sprite(429,310,'Level41A_glasshalf','Symbol 2 copy instance 10000');
        glquart2 = this.add.sprite(679,310,'Level41A_glassquarter','Symbol 2 copy 2 instance 10000');
        glquartanim2=glquart2.animations.add('glquart');
        
        q2_graphics1 = this.add.graphics(205, 97);
		q2_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q2_graphics1.beginFill(0xFF0000, 1);
		q2_graphics1.drawRect(0,230,50,100);		
		q2_graphics1.boundsPadding = 0;
		q2_graphics1.alpha=0;
        glfull2.addChild(q2_graphics1);
        
        q2_graphics2 = this.add.graphics(455, 97);
		q2_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q2_graphics2.beginFill(0xFF0000, 1);
		q2_graphics2.drawRect(0,230,50,100);		
		q2_graphics2.boundsPadding = 0;
		q2_graphics2.alpha=0;
        glhalf2.addChild(q2_graphics2);
        
        q2_graphics3 = this.add.graphics(705, 97);
		q2_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q2_graphics3.beginFill(0xFF0000, 1);
		q2_graphics3.drawRect(0,230,50,100);		
		q2_graphics3.boundsPadding = 0;
		q2_graphics3.alpha=0;
        
        glfull2.inputEnabled = true;
        glfull2.input.useHandCursor = true;
        glfull2.events.onInputDown.add(this.wrongans,this);
        glhalf2.inputEnabled = true;
        glhalf2.input.useHandCursor = true;
        glhalf2.events.onInputDown.add(this.wrongans,this);
        q2_graphics3.inputEnabled = true;
        q2_graphics3.input.useHandCursor = true;
        q2_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(glshadow1);
        questgroup.add(glshadow2);
        questgroup.add(glshadow3);
        questgroup.add(glfull2);
        questgroup.add(glhalf2);
        questgroup.add(glquart2);
        questgroup.add(q2_graphics1);
        questgroup.add(q2_graphics2);
        questgroup.add(q2_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    
    question3:function()
    {
		
		_this.questionid = 3;
        this.getVoice(qno); 
       // qno++;
        var glshadow1 = this.add.sprite(198,423,'Level41A_glass_shadow');
        var glshadow2 = this.add.sprite(448,423,'Level41A_glass_shadow');
        var glshadow3 = this.add.sprite(698,423,'Level41A_glass_shadow');
        glfull3 = this.add.sprite(179,310,'Level41A_glassfull','Symbol 2 copy 13 instance 10000');
        glfullanim3=glfull3.animations.add('glfull');
        glhalf3 = this.add.sprite(429,310,'Level41A_glasshalf','Symbol 2 copy instance 10000');
        
        glfullagain = this.add.sprite(679,310,'Level41A_glassfull','Symbol 2 copy 13 instance 10000');
        glfullagainanim3=glfullagain.animations.add('glquart');
        
        glfull3.inputEnabled = true;
        glfull3.input.useHandCursor = true;
        glfull3.name="glfull3";
        glfullagain.inputEnabled = true;
        glfullagain.input.useHandCursor = true;
        glfullagain.name="glfullagain";
        glhalf3.inputEnabled = true;
        glhalf3.input.useHandCursor = true;
        
        q3_graphics1 = this.add.graphics(205, 97);
		q3_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q3_graphics1.beginFill(0xFF0000, 1);
		q3_graphics1.drawRect(0,230,50,100);		
		q3_graphics1.boundsPadding = 0;
		q3_graphics1.alpha=0;
        glfull3.addChild(q3_graphics1);
        
        glfull3.events.onInputDown.add(function(target){
            glfull3.inputEnabled=false;
            fullglclick++;
            countboth++;
            correctboth++;       
            if(countboth==2)
            {
                if(correctboth==2)
                    {
                        countboth=0;
                        this.correctans(glfull3); 
                    }       
                else
                    {   
                        this.wrongans(target);
                        this.enableobject();  
                    }   
            }
       
        },this);
        
        q3_graphics2 = this.add.graphics(455, 97);
		q3_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q3_graphics2.beginFill(0xFF0000, 1);
		q3_graphics2.drawRect(0,230,50,100);		
		q3_graphics2.boundsPadding = 0;
		q3_graphics2.alpha=0;
        glhalf3.addChild(q3_graphics2);
        glhalf3.events.onInputDown.add(function(target){
            glhalf3.inputEnabled=false;
            halfglclick++;
            countboth++;
            correctboth--;
            if(countboth==2)
            {
               if(correctboth==2)
                   {
                       countboth=0;
                        this.correctans(glhalf3);
                   }   
                else
                    {
                        this.wrongans(target);
                        this.enableobject(); 
                    }
            }
        
        },this);
        
        
        q3_graphics3 = this.add.graphics(705, 97);
		q3_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q3_graphics3.beginFill(0xFF0000, 1);
		q3_graphics3.drawRect(0,230,50,100);		
		q3_graphics3.boundsPadding = 0;
		q3_graphics3.alpha=0;
        glfullagain.addChild(q3_graphics3);
        glfullagain.events.onInputDown.add(function(target){
            glfullagain.inputEnabled=false;
            fullglclickagain++;
            countboth++;
            correctboth++;
            if(countboth==2)
                { 
                   if(correctboth==2)
                       {
                            countboth=0;
                            this.correctans(glfullagain);
                       }

                    else
                        {
                            this.wrongans(target);
                            this.enableobject(); 
                        }  
                }
                
        },this);
        
        
        
        questgroup=this.add.group();
        questgroup.add(glshadow1);
        questgroup.add(glshadow2);
        questgroup.add(glshadow3);
        questgroup.add(glfull3);
        questgroup.add(glhalf3);
        questgroup.add(glfullagain);
        questgroup.add(q3_graphics1);
        questgroup.add(q3_graphics2);
        questgroup.add(q3_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/
        
    },
    
    
    question4:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
       // qno++;
        var bucketshadow1 = this.add.sprite(160,439,'Level41A_bucket_shadow');
        bucketshadow1.scale.setTo(0.75,1);
        var bucketshadow2 = this.add.sprite(411,439,'Level41A_bucket_shadow');
        bucketshadow2.scale.setTo(0.75,1);
        var bucketshadow3 = this.add.sprite(661,439,'Level41A_bucket_shadow');
        bucketshadow3.scale.setTo(0.75,1);
        buckethalf4 = this.add.sprite(121,220,'Level41A_buckethalf','Symbol 2 copy 3 instance 10000');
        buckethalf4.scale.setTo(0.75,1);
        
        bucketfull4 = this.add.sprite(371,220,'Level41A_bucketfull','Symbol 2 copy 4 instance 10000');
        bucketfull4.scale.setTo(0.75,1);
        bucketfullanim1=bucketfull4.animations.add('bucketfull');
        
        bucketquart4 = this.add.sprite(621,220,'Level41A_bucketquarter','Symbol 2 copy 5 instance 10000');
        bucketquart4.scale.setTo(0.75,1);

        q4_graphics1 = this.add.graphics(162, 15);
		q4_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q4_graphics1.beginFill(0xFF0000, 1);
		q4_graphics1.drawRect(0,230,130,190);		
		q4_graphics1.boundsPadding = 0;
		q4_graphics1.alpha=0;
        //q4_graphics1.inputEnabled = true;
       // q4_graphics1.input.useHandCursor = true;
       // q4_graphics1.events.onInputDown.add(this.correctans,this);
        buckethalf4.addChild(q4_graphics1);
        
        
        q4_graphics2 = this.add.graphics(412, 15);
		q4_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q4_graphics2.beginFill(0xFF0000, 1);
		q4_graphics2.drawRect(0,230,130,190);		
		q4_graphics2.boundsPadding = 0;
		q4_graphics2.alpha=0;
        
        buckethalf4.inputEnabled = true;
        buckethalf4.input.useHandCursor = true;
        buckethalf4.events.onInputDown.add(this.wrongans,this);
        bucketquart4.inputEnabled = true;
        bucketquart4.input.useHandCursor = true;
        bucketquart4.events.onInputDown.add(this.wrongans,this);
        q4_graphics2.inputEnabled = true;
        q4_graphics2.input.useHandCursor = true;
        q4_graphics2.events.onInputDown.add(this.correctans,this);

        q4_graphics3 = this.add.graphics(662, 15);
		q4_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q4_graphics3.beginFill(0xFF0000, 1);
		q4_graphics3.drawRect(0,230,130,190);		
		q4_graphics3.boundsPadding = 0;
		q4_graphics3.alpha=0;
        bucketquart4.addChild(q4_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(bucketshadow1);
        questgroup.add(bucketshadow2);
        questgroup.add(bucketshadow3);
        questgroup.add(bucketfull4);
        questgroup.add(buckethalf4);
        questgroup.add(bucketquart4);
        questgroup.add(q4_graphics1);
        questgroup.add(q4_graphics2);
        questgroup.add(q4_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question5:function()
    {
		
		_this.questionid = 2;
        this.getVoice(qno); 
       // qno++;
        var bucketshadow1 = this.add.sprite(160,439,'Level41A_bucket_shadow');
        bucketshadow1.scale.setTo(0.75,1);
        var bucketshadow2 = this.add.sprite(411,439,'Level41A_bucket_shadow');
        bucketshadow2.scale.setTo(0.75,1);
        var bucketshadow3 = this.add.sprite(661,439,'Level41A_bucket_shadow');
        bucketshadow3.scale.setTo(0.75,1);
        buckethalf5 = this.add.sprite(121,220,'Level41A_buckethalf','Symbol 2 copy 3 instance 10000');
        buckethalf5.scale.setTo(0.75,1);
        
        bucketfull5 = this.add.sprite(371,220,'Level41A_bucketfull','Symbol 2 copy 4 instance 10000');
        bucketfull5.scale.setTo(0.75,1);
        
        bucketquart5 = this.add.sprite(621,220,'Level41A_bucketquarter','Symbol 2 copy 5 instance 10000');
        bucketquart5.scale.setTo(0.75,1);
        bucketquarteranim1=bucketquart5.animations.add('bucketquarter');

        q5_graphics1 = this.add.graphics(162, 15);
		q5_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q5_graphics1.beginFill(0xFF0000, 1);
		q5_graphics1.drawRect(0,230,130,190);		
		q5_graphics1.boundsPadding = 0;
		q5_graphics1.alpha=0;
        buckethalf5.addChild(q5_graphics1);
        
        q5_graphics2 = this.add.graphics(412, 15);
		q5_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q5_graphics2.beginFill(0xFF0000, 1);
		q5_graphics2.drawRect(0,230,130,190);		
		q5_graphics2.boundsPadding = 0;
		q5_graphics2.alpha=0;
        bucketfull5.addChild(q5_graphics2);

        q5_graphics3 = this.add.graphics(662, 15);
		q5_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q5_graphics3.beginFill(0xFF0000, 1);
		q5_graphics3.drawRect(0,230,130,190);		
		q5_graphics3.boundsPadding = 0;
		q5_graphics3.alpha=0;
        
        buckethalf5.inputEnabled = true;
        buckethalf5.input.useHandCursor = true;
        buckethalf5.events.onInputDown.add(this.wrongans,this);
        bucketfull5.inputEnabled = true;
        bucketfull5.input.useHandCursor = true;
        bucketfull5.events.onInputDown.add(this.wrongans,this);
        q5_graphics3.inputEnabled = true;
        q5_graphics3.input.useHandCursor = true;
        q5_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(bucketshadow1);
        questgroup.add(bucketshadow2);
        questgroup.add(bucketshadow3);
        questgroup.add(bucketfull5);
        questgroup.add(buckethalf5);
        questgroup.add(bucketquart5);
        questgroup.add(q5_graphics1);
        questgroup.add(q5_graphics2);
        questgroup.add(q5_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question6:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
       // qno++;
        var jug_shadow1 = this.add.sprite(180,434,'Level41A_jug_shadow');
        var jug_shadow2 = this.add.sprite(430,434,'Level41A_jug_shadow');
        var jug_shadow3 = this.add.sprite(680,434,'Level41A_jug_shadow');
        jugfull6 = this.add.sprite(158,250,'Level41A_jugfull','Symbol 2 copy 6 instance 10000');
        jugfullanim1=jugfull6.animations.add('jugfull');
        jughalf6 = this.add.sprite(408,250,'Level41A_jughalf','Symbol 2 copy 7 instance 10000');
        jugquart6 = this.add.sprite(658,250,'Level41A_jugquarter','Symbol 2 copy 8 instance 10000');

        q6_graphics1 = this.add.graphics(190, 57);
		q6_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q6_graphics1.beginFill(0xFF0000, 1);
		q6_graphics1.drawRect(0,230,76,150);		
		q6_graphics1.boundsPadding = 0;
		q6_graphics1.alpha=0;
        
        jugquart6.inputEnabled = true;
        jugquart6.input.useHandCursor = true;
        jugquart6.events.onInputDown.add(this.wrongans,this);
        jughalf6.inputEnabled = true;
        jughalf6.input.useHandCursor = true;
        jughalf6.events.onInputDown.add(this.wrongans,this);
        q6_graphics1.inputEnabled = true;
        q6_graphics1.input.useHandCursor = true;
        q6_graphics1.events.onInputDown.add(this.correctans,this);
        
        q6_graphics2 = this.add.graphics(440, 57);
		q6_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q6_graphics2.beginFill(0xFF0000, 1);
		q6_graphics2.drawRect(0,230,76,150);		
		q6_graphics2.boundsPadding = 0;
		q6_graphics2.alpha=0;
        jughalf6.addChild(q6_graphics2);
        

        q6_graphics3 = this.add.graphics(690, 57);
		q6_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q6_graphics3.beginFill(0xFF0000, 1);
		q6_graphics3.drawRect(0,230,76,150);		
		q6_graphics3.boundsPadding = 0;
		q6_graphics3.alpha=0;
        jugquart6.addChild(q6_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(jug_shadow1);
        questgroup.add(jug_shadow2);
        questgroup.add(jug_shadow3);
        questgroup.add(jugfull6);
        questgroup.add(jughalf6);
        questgroup.add(jugquart6);
        questgroup.add(q6_graphics1);
        questgroup.add(q6_graphics2);
        questgroup.add(q6_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question7:function()
    {
		
		_this.questionid = 2;
        this.getVoice(qno); 
        //qno++;
        var jug_shadow1 = this.add.sprite(180,434,'Level41A_jug_shadow');
        var jug_shadow2 = this.add.sprite(430,434,'Level41A_jug_shadow');
        var jug_shadow3 = this.add.sprite(680,434,'Level41A_jug_shadow');
        jugfull7 = this.add.sprite(158,250,'Level41A_jugfull','Symbol 2 copy 6 instance 10000');
        jughalf7 = this.add.sprite(408,250,'Level41A_jughalf','Symbol 2 copy 7 instance 10000');
        jugquart7 = this.add.sprite(658,250,'Level41A_jugquarter','Symbol 2 copy 8 instance 10000');
        jugquarteranim1=jugquart7.animations.add('jugquarter');

        q7_graphics1 = this.add.graphics(190, 57);
		q7_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q7_graphics1.beginFill(0xFF0000, 1);
		q7_graphics1.drawRect(0,230,76,150);		
		q7_graphics1.boundsPadding = 0;
		q7_graphics1.alpha=0;
        jugfull7.addChild(q7_graphics1);
        
        
        q7_graphics2 = this.add.graphics(440, 57);
		q7_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q7_graphics2.beginFill(0xFF0000, 1);
		q7_graphics2.drawRect(0,230,76,150);		
		q7_graphics2.boundsPadding = 0;
		q7_graphics2.alpha=0;
        jughalf7.addChild(q7_graphics2);
        

        q7_graphics3 = this.add.graphics(690, 57);
		q7_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q7_graphics3.beginFill(0xFF0000, 1);
		q7_graphics3.drawRect(0,230,76,150);		
		q7_graphics3.boundsPadding = 0;
		q7_graphics3.alpha=0;
     
        jugfull7.inputEnabled = true;
        jugfull7.input.useHandCursor = true;
        jugfull7.events.onInputDown.add(this.wrongans,this);
        jughalf7.inputEnabled = true;
        jughalf7.input.useHandCursor = true;
        jughalf7.events.onInputDown.add(this.wrongans,this);
        q7_graphics3.inputEnabled = true;
        q7_graphics3.input.useHandCursor = true;
        q7_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(jug_shadow1);
        questgroup.add(jug_shadow2);
        questgroup.add(jug_shadow3);
        questgroup.add(jugfull7);
        questgroup.add(jughalf7);
        questgroup.add(jugquart7);
        questgroup.add(q7_graphics1);
        questgroup.add(q7_graphics2);
        questgroup.add(q7_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question8:function()
    {
		
		_this.questionid = 2;
        this.getVoice(qno); 
      //  qno++;
        var mug_shadow1 = this.add.sprite(177,426,'Level41A_mug_shadow');
        var mug_shadow2 = this.add.sprite(427,426,'Level41A_mug_shadow');
        var mug_shadow3 = this.add.sprite(677,426,'Level41A_mug_shadow');
        mughalf8 = this.add.sprite(160,210,'Level41A_mughalf','Symbol 2 copy 9 instance 10000');
        mugquart8 = this.add.sprite(410,210,'Level41A_mugquarter','Symbol 2 copy 10 instance 10000');
        mugquarteranim1=mugquart8.animations.add('mugquarter');
        mugfull8 = this.add.sprite(660,210,'Level41A_mugfull','Symbol 2 copy 11 instance 10000');

        q8_graphics1 = this.add.graphics(180, 57);
		q8_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q8_graphics1.beginFill(0xFF0000, 1);
		q8_graphics1.drawRect(0,230,76,150);		
		q8_graphics1.boundsPadding = 0;
		q8_graphics1.alpha=0;
        mughalf8.addChild(q8_graphics1);
    
        
        q8_graphics2 = this.add.graphics(430, 57);
		q8_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q8_graphics2.beginFill(0xFF0000, 1);
		q8_graphics2.drawRect(0,230,76,150);		
		q8_graphics2.boundsPadding = 0;
		q8_graphics2.alpha=0;
        
        mugfull8.inputEnabled = true;
        mugfull8.input.useHandCursor = true;
        mugfull8.events.onInputDown.add(this.wrongans,this);
        mughalf8.inputEnabled = true;
        mughalf8.input.useHandCursor = true;
        mughalf8.events.onInputDown.add(this.wrongans,this);
        q8_graphics2.inputEnabled = true;
        q8_graphics2.input.useHandCursor = true;
        q8_graphics2.events.onInputDown.add(this.correctans,this);
        
        q8_graphics3 = this.add.graphics(680, 57);
		q8_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q8_graphics3.beginFill(0xFF0000, 1);
		q8_graphics3.drawRect(0,230,76,150);		
		q8_graphics3.boundsPadding = 0;
		q8_graphics3.alpha=0;
        mugfull8.addChild(q8_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(mug_shadow1);
        questgroup.add(mug_shadow2);
        questgroup.add(mug_shadow3);
        questgroup.add(mugfull8);
        questgroup.add(mughalf8);
        questgroup.add(mugquart8);
        questgroup.add(q8_graphics1);
        questgroup.add(q8_graphics2);
        questgroup.add(q8_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question9:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
      //  qno++;
        var mug_shadow1 = this.add.sprite(177,426,'Level41A_mug_shadow');
        var mug_shadow2 = this.add.sprite(427,426,'Level41A_mug_shadow');
        var mug_shadow3 = this.add.sprite(677,426,'Level41A_mug_shadow');
        mughalf9 = this.add.sprite(160,210,'Level41A_mughalf','Symbol 2 copy 9 instance 10000');
        mugquart9 = this.add.sprite(410,210,'Level41A_mugquarter','Symbol 2 copy 10 instance 10000');
        mugfull9 = this.add.sprite(660,210,'Level41A_mugfull','Symbol 2 copy 11 instance 10000');
        mugfullanim1=mugfull9.animations.add('mugfull');

        q9_graphics1 = this.add.graphics(180, 57);
		q9_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q9_graphics1.beginFill(0xFF0000, 1);
		q9_graphics1.drawRect(0,230,76,150);		
		q9_graphics1.boundsPadding = 0;
		q9_graphics1.alpha=0;
        mughalf9.addChild(q9_graphics1);
    
        
        q9_graphics2 = this.add.graphics(430, 57);
		q9_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q9_graphics2.beginFill(0xFF0000, 1);
		q9_graphics2.drawRect(0,230,76,150);		
		q9_graphics2.boundsPadding = 0;
		q9_graphics2.alpha=0;
        mugquart9.addChild(q9_graphics2);
    
        
        q9_graphics3 = this.add.graphics(680, 57);
		q9_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q9_graphics3.beginFill(0xFF0000, 1);
		q9_graphics3.drawRect(0,230,76,150);		
		q9_graphics3.boundsPadding = 0;
		q9_graphics3.alpha=0;
        
        mugquart9.inputEnabled = true;
        mugquart9.input.useHandCursor = true;
        mugquart9.events.onInputDown.add(this.wrongans,this);
        mughalf9.inputEnabled = true;
        mughalf9.input.useHandCursor = true;
        mughalf9.events.onInputDown.add(this.wrongans,this);
        q9_graphics3.inputEnabled = true;
        q9_graphics3.input.useHandCursor = true;
        q9_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(mug_shadow1);
        questgroup.add(mug_shadow2);
        questgroup.add(mug_shadow3);
        questgroup.add(mugfull9);
        questgroup.add(mughalf9);
        questgroup.add(mugquart9);
        questgroup.add(q9_graphics1);
        questgroup.add(q9_graphics2);
        questgroup.add(q9_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question10:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
        //qno++;
        var bottle_shadow1 = this.add.sprite(180,445,'Level41A_bottle_shadow');
        var bottle_shadow2 = this.add.sprite(429,445,'Level41A_bottle_shadow');
        var bottle_shadow3 = this.add.sprite(680,445,'Level41A_bottle_shadow');
        bottlefull10 = this.add.sprite(165,160,'Level41A_bottlefull','Symbol 2 copy 12 instance 10000');
        bottlefullanim1=bottlefull10.animations.add('bottlefull');
        bottlehalf10 = this.add.sprite(415,160,'Level41A_bottlehalf','Symbol 2 copy 14 instance 10000');
        bottlequart10 = this.add.sprite(665,160,'Level41A_bottlequarter','Symbol 2 copy 15 instance 10000');

        q10_graphics1 = this.add.graphics(182, 17);
		q10_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q10_graphics1.beginFill(0xFF0000, 1);
		q10_graphics1.drawRect(0,230,96,200);		
		q10_graphics1.boundsPadding = 0;
		q10_graphics1.alpha=0;
        
        bottlequart10.inputEnabled = true;
        bottlequart10.input.useHandCursor = true;
        bottlequart10.events.onInputDown.add(this.wrongans,this);
        bottlehalf10.inputEnabled = true;
        bottlehalf10.input.useHandCursor = true;
        bottlehalf10.events.onInputDown.add(this.wrongans,this);
        q10_graphics1.inputEnabled = true;
        q10_graphics1.input.useHandCursor = true;
        q10_graphics1.events.onInputDown.add(this.correctans,this);
        
        q10_graphics2 = this.add.graphics(431, 17);
		q10_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q10_graphics2.beginFill(0xFF0000, 1);
		q10_graphics2.drawRect(0,230,96,200);		
		q10_graphics2.boundsPadding = 0;
		q10_graphics2.alpha=0;
        bottlehalf10.addChild(q10_graphics2);
        

        q10_graphics3 = this.add.graphics(682, 17);
		q10_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q10_graphics3.beginFill(0xFF0000, 1);
		q10_graphics3.drawRect(0,230,96,200);		
		q10_graphics3.boundsPadding = 0;
		q10_graphics3.alpha=0;
        bottlequart10.addChild(q10_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(bottle_shadow1);
        questgroup.add(bottle_shadow2);
        questgroup.add(bottle_shadow3);
        questgroup.add(bottlefull10);
        questgroup.add(bottlehalf10);
        questgroup.add(bottlequart10);
        questgroup.add(q10_graphics1);
        questgroup.add(q10_graphics2);
        questgroup.add(q10_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question11:function()
    {
		
		_this.questionid = 2;
        this.getVoice(qno); 
        //qno++;
        var bottle_shadow1 = this.add.sprite(180,445,'Level41A_bottle_shadow');
        var bottle_shadow2 = this.add.sprite(429,445,'Level41A_bottle_shadow');
        var bottle_shadow3 = this.add.sprite(680,445,'Level41A_bottle_shadow');
        bottlefull11 = this.add.sprite(165,160,'Level41A_bottlefull','Symbol 2 copy 12 instance 10000');
        bottlehalf11 = this.add.sprite(415,160,'Level41A_bottlehalf','Symbol 2 copy 14 instance 10000');
        bottlequart11 = this.add.sprite(665,160,'Level41A_bottlequarter','Symbol 2 copy 15 instance 10000');
        bottlequarteranim1=bottlequart11.animations.add('bottlequarter');

        q11_graphics1 = this.add.graphics(182, 17);
		q11_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q11_graphics1.beginFill(0xFF0000, 1);
		q11_graphics1.drawRect(0,230,96,200);		
		q11_graphics1.boundsPadding = 0;
		q11_graphics1.alpha=0;
        bottlefull11.addChild(q11_graphics1);
        
        
        q11_graphics2 = this.add.graphics(431, 17);
		q11_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q11_graphics2.beginFill(0xFF0000, 1);
		q11_graphics2.drawRect(0,230,96,200);		
		q11_graphics2.boundsPadding = 0;
		q11_graphics2.alpha=0;
        bottlehalf11.addChild(q11_graphics2);
        

        q11_graphics3 = this.add.graphics(682, 17);
		q11_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q11_graphics3.beginFill(0xFF0000, 1);
		q11_graphics3.drawRect(0,230,96,200);		
		q11_graphics3.boundsPadding = 0;
		q11_graphics3.alpha=0;
     
        bottlefull11.inputEnabled = true;
        bottlefull11.input.useHandCursor = true;
        bottlefull11.events.onInputDown.add(this.wrongans,this);
        bottlehalf11.inputEnabled = true;
        bottlehalf11.input.useHandCursor = true;
        bottlehalf11.events.onInputDown.add(this.wrongans,this);
        q11_graphics3.inputEnabled = true;
        q11_graphics3.input.useHandCursor = true;
        q11_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(bottle_shadow1);
        questgroup.add(bottle_shadow2);
        questgroup.add(bottle_shadow3);
        questgroup.add(bottlefull11);
        questgroup.add(bottlehalf11);
        questgroup.add(bottlequart11);
        questgroup.add(q11_graphics1);
        questgroup.add(q11_graphics2);
        questgroup.add(q11_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question12:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
       // qno++;
        var soda_shadow1 = this.add.sprite(185,431,'Level41A_soda_shadow');
        var soda_shadow2 = this.add.sprite(435,431,'Level41A_soda_shadow');
        var soda_shadow3 = this.add.sprite(685,431,'Level41A_soda_shadow');
        sodaquart12 = this.add.sprite(175,219,'Level41A_sodaquarter','Symbol 2 copy 16 instance 10000');
        sodahalf12 = this.add.sprite(425,220,'Level41A_sodahalf','Symbol 2 copy 17 instance 10000');
        sodafull12 = this.add.sprite(675,220,'Level41A_sodafull','Symbol 2 copy 18 instance 10000');
        sodafullanim1=sodafull12.animations.add('sodafull');

        q12_graphics1 = this.add.graphics(192, 85);
		q12_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q12_graphics1.beginFill(0xFF0000, 1);
		q12_graphics1.drawRect(0,230,70,120);		
		q12_graphics1.boundsPadding = 0;
		q12_graphics1.alpha=0;
        sodaquart12.addChild(q12_graphics1);
        
        
        q12_graphics2 = this.add.graphics(442, 85);
		q12_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q12_graphics2.beginFill(0xFF0000, 1);
		q12_graphics2.drawRect(0,230,70,120);		
		q12_graphics2.boundsPadding = 0;
		q12_graphics2.alpha=0;
        sodahalf12.addChild(q12_graphics2);
        

        q12_graphics3 = this.add.graphics(692, 85);
		q12_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q12_graphics3.beginFill(0xFF0000, 1);
		q12_graphics3.drawRect(0,230,70,120);		
		q12_graphics3.boundsPadding = 0;
		q12_graphics3.alpha=0;
     
        sodaquart12.inputEnabled = true;
        sodaquart12.input.useHandCursor = true;
        sodaquart12.events.onInputDown.add(this.wrongans,this);
        sodahalf12.inputEnabled = true;
        sodahalf12.input.useHandCursor = true;
        sodahalf12.events.onInputDown.add(this.wrongans,this);
        q12_graphics3.inputEnabled = true;
        q12_graphics3.input.useHandCursor = true;
        q12_graphics3.events.onInputDown.add(this.correctans,this);
        
        questgroup=this.add.group();
        questgroup.add(soda_shadow1);
        questgroup.add(soda_shadow2);
        questgroup.add(soda_shadow3);
        questgroup.add(sodafull12);
        questgroup.add(sodahalf12);
        questgroup.add(sodaquart12);
        questgroup.add(q12_graphics1);
        questgroup.add(q12_graphics2);
        questgroup.add(q12_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question13:function()
    {
		
		_this.questionid = 2;
        this.getVoice(qno); 
        //qno++;
        var soda_shadow1 = this.add.sprite(185,431,'Level41A_soda_shadow');
        var soda_shadow2 = this.add.sprite(435,431,'Level41A_soda_shadow');
        var soda_shadow3 = this.add.sprite(685,431,'Level41A_soda_shadow');
        sodaquart13 = this.add.sprite(175,220,'Level41A_sodaquarter','Symbol 2 copy 16 instance 10000');
        sodaquarteranim1=sodaquart13.animations.add('sodaquarter');
        
        sodahalf13 = this.add.sprite(425,220,'Level41A_sodahalf','Symbol 2 copy 17 instance 10000');
        sodafull13 = this.add.sprite(675,220,'Level41A_sodafull','Symbol 2 copy 18 instance 10000');

        q13_graphics1 = this.add.graphics(192, 85);
		q13_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q13_graphics1.beginFill(0xFF0000, 1);
		q13_graphics1.drawRect(0,230,70,120);		
		q13_graphics1.boundsPadding = 0;
		q13_graphics1.alpha=0;
        
        sodafull13.inputEnabled = true;
        sodafull13.input.useHandCursor = true;
        sodafull13.events.onInputDown.add(this.wrongans,this);
        sodahalf13.inputEnabled = true;
        sodahalf13.input.useHandCursor = true;
        sodahalf13.events.onInputDown.add(this.wrongans,this);
        q13_graphics1.inputEnabled = true;
        q13_graphics1.input.useHandCursor = true;
        q13_graphics1.events.onInputDown.add(this.correctans,this);
        
        q13_graphics2 = this.add.graphics(442, 85);
		q13_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q13_graphics2.beginFill(0xFF0000, 1);
		q13_graphics2.drawRect(0,230,70,120);		
		q13_graphics2.boundsPadding = 0;
		q13_graphics2.alpha=0;
        sodahalf13.addChild(q13_graphics2);
        

        q13_graphics3 = this.add.graphics(692, 85);
		q13_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q13_graphics3.beginFill(0xFF0000, 1);
		q13_graphics3.drawRect(0,230,70,120);		
		q13_graphics3.boundsPadding = 0;
		q13_graphics3.alpha=0;
        sodafull13.addChild(q13_graphics3);
     
        
        questgroup=this.add.group();
        questgroup.add(soda_shadow1);
        questgroup.add(soda_shadow2);
        questgroup.add(soda_shadow3);
        questgroup.add(sodafull13);
        questgroup.add(sodahalf13);
        questgroup.add(sodaquart13);
        questgroup.add(q13_graphics1);
        questgroup.add(q13_graphics2);
        questgroup.add(q13_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/     
        
    },
    
    question14:function()
    {
		
		_this.questionid = 1;
        this.getVoice(qno); 
      //  qno++;
        var glshadow1 = this.add.sprite(198,423,'Level41A_glass_shadow');
        var glshadow2 = this.add.sprite(448,423,'Level41A_glass_shadow');
        var glshadow3 = this.add.sprite(698,423,'Level41A_glass_shadow');
        glquart14 = this.add.sprite(179,310,'Level41A_glassquarter','Symbol 2 copy 2 instance 10000');
        
        glhalf14 = this.add.sprite(429,310,'Level41A_glasshalf','Symbol 2 copy instance 10000');
        glhalfanim14=glhalf14.animations.add('glhalf');
        
        glquart15 = this.add.sprite(679,310,'Level41A_glassquarter','Symbol 2 copy 2 instance 10000');

        q14_graphics1 = this.add.graphics(205, 97);
		q14_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		q14_graphics1.beginFill(0xFF0000, 1);
		q14_graphics1.drawRect(0,230,50,100);		
		q14_graphics1.boundsPadding = 0;
		q14_graphics1.alpha=0;
        glquart14.addChild(q14_graphics1);
        
        
        q14_graphics2 = this.add.graphics(455, 97);
		q14_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		q14_graphics2.beginFill(0xFF0000, 1);
		q14_graphics2.drawRect(0,230,50,100);		
		q14_graphics2.boundsPadding = 0;
		q14_graphics2.alpha=0;
        
        glquart15.inputEnabled = true;
        glquart15.input.useHandCursor = true;
        glquart15.events.onInputDown.add(this.wrongans,this);
        glquart14.inputEnabled = true;
        glquart14.input.useHandCursor = true;
        glquart14.events.onInputDown.add(this.wrongans,this);
        q14_graphics2.inputEnabled = true;
        q14_graphics2.input.useHandCursor = true;
        q14_graphics2.events.onInputDown.add(this.correctans,this);

        q14_graphics3 = this.add.graphics(705, 97);
		q14_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		q14_graphics3.beginFill(0xFF0000, 1);
		q14_graphics3.drawRect(0,230,50,100);		
		q14_graphics3.boundsPadding = 0;
		q14_graphics3.alpha=0;
        glquart15.addChild(q14_graphics3);
        
        questgroup=this.add.group();
        questgroup.add(glshadow1);
        questgroup.add(glshadow2);
        questgroup.add(glshadow3);
        questgroup.add(glquart15);
        questgroup.add(glhalf14);
        questgroup.add(glquart14);
        questgroup.add(q14_graphics1);
        questgroup.add(q14_graphics2);
        questgroup.add(q14_graphics3);
        questgroup.x = 960;
        var tween = this.add.tween(questgroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		/*tween.onComplete.add(function(){
			this.getQuestion(qno);
		}, this);*/   
        
    },
    
    correctans:function(target)
    {
        noofAttempts++;

        if(_this.timer1)
            {
            _this.timer1.stop();
            }
		if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
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
	
			/*var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: window.gameid,
					id_question: window.gameid,  
					answer_given: "Yes",
					time2answer: AnsTimerCount,
					attempts: noofAttempts,
					date_time_event: currentTime, 
					access_token: window.acctkn 
				}
				 AnsTimerCount=0;
				
			
		absdsjsapi.saveAssessment(saveAsment);*/
		
        _this.speakerbtn.inputEnabled=false;
        target.inputEnabled=false;

        if(correctboth==2)
        {
            correctboth=0;
            glfullanim3.play(15,false);
            glfullagainanim3.play(15,false);
            glhalf3.inputEnabled=="false";
        }
        else if(target==q1_graphics1)
        {
           glquart1.inputEnabled=false;
           glhalf1.inputEnabled=false;
           glfullanim1.play(15,false); 
        }
            
        else if(target==q2_graphics3)
        {
            glfull2.inputEnabled=false;
            glhalf2.inputEnabled=false;
            glquartanim2.play(15,false);
        }
       
        else if(target==q4_graphics2)
        {
            bucketquart4.inputEnabled=false;
            buckethalf4.inputEnabled=false;
            bucketfullanim1.play(15,false);
        }
        else if(target==q5_graphics3)
        {
            buckethalf5.inputEnabled=false;
            bucketfull5.inputEnabled=false;
            bucketquarteranim1.play(15,false);
        }
        else if(target==q6_graphics1)
        {
            jugquart6.inputEnabled=false;
            jughalf6.inputEnabled=false;
            jugfullanim1.play(15,false);  
        }
        else if(target==q7_graphics3)
        {
            jugfull7.inputEnabled=false;
            jughalf7.inputEnabled=false;
            jugquarteranim1.play(15,false);
        } 
        else if(target==q8_graphics2)
        {
            mugfull8.inputEnabled=false;
            mughalf8.inputEnabled=false;
            mugquarteranim1.play(15,false);
        }
        else if(target==q9_graphics3)
        {
            mugquart9.inputEnabled=false;
            mughalf9.inputEnabled=false;
            mugfullanim1.play(15,false);
        }   
        else if(target==q10_graphics1)
        {
            bottlequart10.inputEnabled=false;
            bottlehalf10.inputEnabled=false;
            bottlefullanim1.play(15,false);
        }
        else if(target==q11_graphics3)
        {
            bottlefull11.inputEnabled=false;
            bottlehalf11.inputEnabled=false;
            bottlequarteranim1.play(15,false);
        }   
        else if(target==q12_graphics3)
        {
            sodaquart12.inputEnabled=false;
            sodahalf12.inputEnabled=false;
            sodafullanim1.play(15,false);
        } 
        else if(target==q13_graphics1)
        {
            sodafull13.inputEnabled=false;
            sodahalf13.inputEnabled=false;
            sodaquarteranim1.play(15,false);
        }  
        else if(target==q14_graphics2)
        {
            glquart14.inputEnabled=false;
            glquart15.inputEnabled=false;
            glhalfanim14.play(15,false);
        }
            
        
        
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
         _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
        
        var starAnim = starsGroup1.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count1++;
        this.time.events.add(2000,function(){
            var tween = this.add.tween(questgroup);
            tween.to({ x: -1000}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                
            this.nextquestion();
        },this);
        },this);
		
    },
    
    wrongans:function(target){

         noofAttempts++;
		/*noofAttempts++;
		var currentTime = window.timeSaveFunc();
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
			
        if(fullglclickagain>0 && halfglclick>0)
            {
                fullglclickagain=0;halfglclick=0;countboth=0;correctboth=0;
                _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
		        
                shake.shake(10,glfullagain);
                this.time.events.add(100,function(){
                    shake.shake(10,glhalf3);
                },this);
            }
        else if(fullglclick>0 && halfglclick>0)
            {
                fullglclick=0;halfglclick=0;countboth=0;correctboth=0;
                _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
		        
                shake.shake(10,glfull3);
                this.time.events.add(100,function(){
                    shake.shake(10,glhalf3);
                },this);
                
            }
        else
            {
                _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
                
                shake.shake(10,target);
            }

            _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();
        
    },
    
    nextquestion:function(){
        if(qno<5)
            {
                this.getQuestion();
            }
            else
            {
               // this.stopAllVoice();
				this.state.start('grade4_1AScore');
            }
    },
    
    update:function(){
       
    },
    
    enableobject:function(){
        glfull3.inputEnabled=true;
        glfull3.input.useHandCursor = true;
        glhalf3.inputEnabled=true;
        glhalf3.input.useHandCursor = true;
        glfullagain.inputEnabled=true;
        glfullagain.input.useHandCursor = true;
        
    },
    
    /*getVoice:function(question){
        switch(questarray[question])
        {
            case 1:
            case 4:
            case 6:
            case 9:
            case 10:
            case 12:
            case 14:if(window.languageSelected=="English")
                        Eng_41A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A1.play();
                    else
                        Kan_41A1.play();
                    break;
            
            case 2 :
            case 5 :
            case 7 :
            case 8 :
            case 11:
            case 13:if(window.languageSelected=="English")
                        Eng_41A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A2.play();
                    else
                        Kan_41A2.play();
                    break;
            
            case 3 :if(window.languageSelected=="English")
                        Eng_41A3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_41A3.play();
                    else
                        Kan_41A3.play();
                    break; 
        }
         
    },*/


    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');


        switch(questarray[qno])
        {
            case 1:
            case 4:
            case 6:
            case 9:
            case 10:
            case 12:
            case 14:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/English/4.1A1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Hindi/4.1A1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Kannada/4.1A1.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.1A1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.1A1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.1A1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.1A1.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1A/4.1A1.mp3");
                        }
					else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Odiya/4.1A1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            
            case 2 :
            case 5 :
            case 7 :
            case 8 :
            case 11:
            case 13:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/English/4.1A2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Hindi/4.1A2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Kannada/4.1A2.mp3");
                    }
                     else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1A/4.1A2.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.1A2.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.1A2.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.1A2.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.1A2.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Odiya/4.1A2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            
            case 3 :if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/English/4.1A3.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Hindi/4.1A3.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Kannada/4.1A3.mp3");
                    }
                     else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1A/4.1A3.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Marathi/4.1A3.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/telugu/4.1A3.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Tamil/4.1A3.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Urdu/4.1A3.mp3");
                    }
					else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1A/Odiya/4.1A3.mp3");
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