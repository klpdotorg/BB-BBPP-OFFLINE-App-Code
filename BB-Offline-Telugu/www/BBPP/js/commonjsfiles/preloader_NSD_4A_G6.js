Game.preloader_NSD_4A_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4A_G6.prototype={
	preload:function(){
        console.log("nsd 4a"); 
        this.load.video('nsd4a_1',window.baseUrl+ 'assets/demoVideos/NSD-4A-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_4A_G6_JSON.bulbBtnJson);
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_4A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_4A_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_4A_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_4A_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/Bg.png');
        this.load.image('red-box', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/red box.png');
        this.load.image('yellow-box', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/yellow box.png');
        this.load.image('scale', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/Scale.png');
        this.load.image('Table', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/Text table.png');
        this.load.atlas('Text box_1', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/TexT box 1.png',null,NSD_4A_G6_JSON.OptionBox);
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/Text box 2.png');
        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NSD-4A-G6/TickBtn.png',null,NSD_4A_G6_JSON.tickJson);

}, 

	create:function(){
		 
		this.state.start('NSD_4A_G6level1');
        
    },
}