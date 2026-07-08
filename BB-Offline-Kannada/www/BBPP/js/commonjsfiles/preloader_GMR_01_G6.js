Game.preloader_GMR_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMR_01_G6.prototype={
	preload:function(){
		console.log("gmr 1");
	this.load.atlas('backbtn', window.baseUrl+'assets/commonAssets/backbtn.png' ,null,GMR_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+'assets/commonAssets/speaker.png' ,null,GMR_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+'assets/commonAssets/starAnim.png',null,GMR_01_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+'assets/commonAssets/reply.png' ,null,GMR_01_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+'assets/commonAssets/hand.png');
 
        this.load.image('bg',  window.baseUrl+'assets/gradeAssets/GMR-01-G6/Bg.png');

        this.load.atlas('TickBtn', window.baseUrl+'assets/gradeAssets/GMR-01-G6/TickBtn.png',null,GMR_01_G6_JSON.tickJson);
        

        this.load.atlas('banana', window.baseUrl+'assets/gradeAssets/GMR-01-G6/banana.png',null,GMR_01_G6_JSON.bananaJson);
        this.load.atlas('boot', window.baseUrl+'assets/gradeAssets/GMR-01-G6/boot.png',null,GMR_01_G6_JSON.bootJson);
        this.load.atlas('can', window.baseUrl+'assets/gradeAssets/GMR-01-G6/can.png',null,GMR_01_G6_JSON.canJson);
        this.load.atlas('comb', window.baseUrl+'assets/gradeAssets/GMR-01-G6/comb.png',null,GMR_01_G6_JSON.combJson);
        this.load.atlas('cup', window.baseUrl+'assets/gradeAssets/GMR-01-G6/cup.png',null,GMR_01_G6_JSON.cupJson);
        this.load.atlas('hammer', window.baseUrl+'assets/gradeAssets/GMR-01-G6/hammer.png',null,GMR_01_G6_JSON.hammerJson);
        this.load.atlas('hand', window.baseUrl+'assets/gradeAssets/GMR-01-G6/hand.png',null,GMR_01_G6_JSON.handJson);
        this.load.atlas('horizontal', window.baseUrl+'assets/gradeAssets/GMR-01-G6/horizontal.png',null,GMR_01_G6_JSON.horizontalJson);
        this.load.atlas('key', window.baseUrl+'assets/gradeAssets/GMR-01-G6/key.png',null,GMR_01_G6_JSON.keyJson);
        this.load.atlas('leg', window.baseUrl+'assets/gradeAssets/GMR-01-G6/leg.png',null,GMR_01_G6_JSON.legJson);
        this.load.image('mirror', window.baseUrl+'assets/gradeAssets/GMR-01-G6/mirror.png');
        this.load.atlas('triangle', window.baseUrl+'assets/gradeAssets/GMR-01-G6/triangle.png',null,GMR_01_G6_JSON.triangleJson);
        this.load.atlas('umbrella', window.baseUrl+'assets/gradeAssets/GMR-01-G6/umbrella.png',null,GMR_01_G6_JSON.umbrellaJson);
        this.load.atlas('vertical', window.baseUrl+'assets/gradeAssets/GMR-01-G6/vertical.png',null,GMR_01_G6_JSON.verticalJson);
        this.load.image('water', window.baseUrl+'assets/gradeAssets/GMR-01-G6/water.png');
        this.load.atlas('watercan', window.baseUrl+'assets/gradeAssets/GMR-01-G6/watercan.png',null,GMR_01_G6_JSON.watercanJson);
        this.load.atlas('bubbleanimation', window.baseUrl+'assets/gradeAssets/GMR-01-G6/BubbleAni.png',null,GMR_01_G6_JSON.bubbleAniJson);
        this.load.image('bubble', window.baseUrl+'assets/gradeAssets/GMR-01-G6/Bubble.png');

},

	create:function(){	
		this.state.start('GMR_01_G6level1');
    },
}