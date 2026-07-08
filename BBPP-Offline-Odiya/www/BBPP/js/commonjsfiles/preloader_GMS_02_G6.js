Game.preloader_GMS_02_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_02_G6.prototype={
	preload:function(){
                console.log("gms 2");
        this.load.video('gms02_1', window.baseUrl+ 'assets/demoVideos/GMS-02-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,GMS_02_G6_JSON.bulbBtnJson);
		    this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,GMS_02_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,GMS_02_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,GMS_02_G6_JSON.starAnimJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/commonAssets/numbg.png');
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,GMS_02_G6_JSON.replyJson);
        this.load.atlas('btn', window.baseUrl+ 'assets/commonAssets/btn.png',null,GMS_02_G6_JSON.btnJson);
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
 
        //navbar
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg',  window.baseUrl+ 'assets/commonAssets/backg.png');

        // Skipbtn
        this.load.image('skip', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('SquareBox', window.baseUrl+ 'assets/gradeAssets/GMS-02-G6/new box.png',null,GMS_02_G6_JSON.SquareBoxJson);

        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/GMS-02-G6/number pad.png',null,GMS_02_G6_JSON.numberpadJson);
 
        this.load.image("butterfly1",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/butterfly full.png");//butterfly

        this.load.image("flower1",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/flower full.png");//flower

        this.load.image("Eraser",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/eraser.png");
        this.load.image("GMS_02_G6_Board",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/Board.png");
        this.load.image("yellowtextbox",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/yellow text box.png");

        this.load.atlas("GMS_02_G6_TickMark",  window.baseUrl+ "assets/gradeAssets/GMS-02-G6/tick.png", null, GMS_02_G6_JSON.tickJson);
	},

	create:function(){
		
		this.state.start('GMS_02_G6level1');
        
    },
}