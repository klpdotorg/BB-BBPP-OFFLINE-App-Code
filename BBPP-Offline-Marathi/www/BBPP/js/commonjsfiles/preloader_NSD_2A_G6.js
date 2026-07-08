Game.preloader_NSD_2A_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_2A_G6.prototype={
	preload:function(){
		console.log("nsd 2a");
        this.load.video('nsd2a_1',window.baseUrl+ 'assets/demoVideos/NSD-2A-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_2A_G6_JSON.bulbBtnJson);
                        
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_2A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_2A_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_2A_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_2A_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');

        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/Bg.png');
        this.load.image('divisionline',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/divisionline.png');
        this.load.image('brownbox',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/singlebox.png');
        this.load.image('tensbox',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/TensBox.png');
        this.load.image('Scorebox1',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/Scorebox1.png');
        this.load.image('sidebox',  window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/whitebox.png');

        // Box with frame
        this.load.atlas('white-box', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/new box.png',null,NSD_2A_G6_JSON.SquareBoxJson);
        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/TickBtn.png',null,NSD_2A_G6_JSON.TickbtnJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/number pad.png',null,NSD_2A_G6_JSON.numberpadJson);

        // Game objects
        this.load.atlas('gray-box', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/GrayBox.png',null,NSD_2A_G6_JSON.grayboxJson);
        this.load.atlas('fraction-score-box1', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/fractionscorebox.png',null,NSD_2A_G6_JSON.fractionScoreBox);
        this.load.atlas('fraction-score-box2', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/fractionscorebox2.png',null,NSD_2A_G6_JSON.fractionScoreBox2);
        this.load.atlas('box1', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/b1.png',null,NSD_2A_G6_JSON.box1);
        this.load.atlas('brownbox1', window.baseUrl+ 'assets/gradeAssets/NSD-2A-G6/singlebox1.png',null,NSD_2A_G6_JSON.brownbox1Json);
        },

	create:function(){
		
		this.state.start('NSD_2A_G6level1');
        
    },
}