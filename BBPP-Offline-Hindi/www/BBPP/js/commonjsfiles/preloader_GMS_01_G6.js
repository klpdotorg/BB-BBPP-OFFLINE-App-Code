Game.preloader_GMS_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_01_G6.prototype={ 
	preload:function(){
                console.log("gms 1");
        this.load.video('gms01_1', window.baseUrl+ 'assets/demoVideos/GMS-01-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,GMS_01_G6_JSON.bulbBtnJson); 
        this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,GMS_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,GMS_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,GMS_01_G6_JSON.starAnimJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/commonAssets/numbg.png');

        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,GMS_01_G6_JSON.replyJson);
        this.load.atlas('btn', window.baseUrl+ 'assets/commonAssets/btn.png',null,GMS_01_G6_JSON.btnJson);
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');

        
        //navbar
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg',  window.baseUrl+ 'assets/commonAssets/backg.png');

      
        // Skipbtn
        this.load.image('skip', window.baseUrl+ 'assets/commonAssets/skipArrow.png');

        
        this.load.atlas("GMS_01_G6_image_anim1",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/1.png", null, GMS_01_G6_JSON.Json1);

        this.load.atlas("GMS_01_G6_image_anim2",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/2.png", null, GMS_01_G6_JSON.Json2);

        this.load.atlas("GMS_01_G6_image_anim3",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/3.png", null, GMS_01_G6_JSON.Json3);

        this.load.atlas("GMS_01_G6_image_anim4",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/4.png", null, GMS_01_G6_JSON.Json4);

        this.load.atlas("GMS_01_G6_image_anim5",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/5.png", null, GMS_01_G6_JSON.Json5);

        this.load.atlas("GMS_01_G6_image_anim6",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/6.png", null, GMS_01_G6_JSON.Json6);

        this.load.atlas("GMS_01_G6_image_anim7",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/7.png", null, GMS_01_G6_JSON.Json7);

        this.load.atlas("GMS_01_G6_image_anim8",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/8.png", null, GMS_01_G6_JSON.Json8);

        this.load.atlas("GMS_01_G6_image_anim9",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/9.png", null, GMS_01_G6_JSON.Json9);

        this.load.atlas("GMS_01_G6_image_anim10",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/10.png", null, GMS_01_G6_JSON.Json10);

        this.load.atlas("GMS_01_G6_image_anim11",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/11.png", null, GMS_01_G6_JSON.Json11);

        this.load.atlas("GMS_01_G6_image_anim12",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/12.png", null, GMS_01_G6_JSON.Json12);
        this.load.atlas("GMS_01_G6_image_animHr1",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/5.png", null, GMS_01_G6_JSON.JsonHr1);
        this.load.atlas("GMS_01_G6_image_animHr5",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/9.png", null, GMS_01_G6_JSON.JsonHr5);

        this.load.atlas("GMS_01_G6_image_animHr3",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/8.png", null, GMS_01_G6_JSON.JsonHr3);

        this.load.atlas("GMS_01_G6_image_animHr4",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/11.png", null, GMS_01_G6_JSON.JsonHr4);

        this.load.image("GMS_01_G6_Eraser",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/eraser.png");
        this.load.image("GMS_01_G6_Board",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/Board.png");
        this.load.atlas("GMS_01_G6_TickMark",  window.baseUrl+ "assets/gradeAssets/GMS-01-G6/tick.png", null, GMS_01_G6_JSON.tickJson);
        
	},

	create:function(){
		
		this.state.start('GMS_01_G6level1');
        
    },
}