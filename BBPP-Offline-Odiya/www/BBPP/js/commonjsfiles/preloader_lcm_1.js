Game.preloader_lcm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_lcm_1.prototype={
	preload:function(){
		console.log("lcm 1");
        this.load.video('lcm_1_1',window.baseUrl+'assets/demoVideos/NS-LCM-1-G6_1.mp4');  //* intro to LCM
        this.load.video('lcm_1_2',window.baseUrl+'assets/demoVideos/NS-LCM-1-G6_2.mp4');  //* PLAYING THE GAME

        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');        
 
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_LCM_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_LCM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_LCM_1_G6_JSON.starAnimJson);
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('TextBox',window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/text box2.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/number pad.png',null,NS_LCM_1_G6_JSON.numberpadJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NS_LCM_1_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_LCM_1_G6_JSON.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg7.2.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/BG.png');

        this.load.atlas('FourColorBox',window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/4 color box.png',null,NS_LCM_1_G6_JSON.fourColorBox);

        this.load.image('EmptyBox', window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/image_2.png');
        this.load.image('EmptyBox_Glow', window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/image_4.png');
        this.load.image('RedBox', window.baseUrl+'assets/gradeAssets/NS-LCM-1-G6/Red box.png');

        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');

	},

	create:function(){
		
		this.state.start('NS_LCM_1_G6demo');
    },
}