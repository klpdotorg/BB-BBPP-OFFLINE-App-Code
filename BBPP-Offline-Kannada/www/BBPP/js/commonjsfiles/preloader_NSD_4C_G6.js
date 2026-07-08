Game.preloader_NSD_4C_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4C_G6.prototype={
	preload:function(){
		console.log("nsd 4c");
        this.load.video('nsd4c_1',window.baseUrl+ 'assets/demoVideos/NSD-4C-G6.mp4');
        this.load.image('skipArrow',window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb',window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_4C_G6_JSON.bulbBtnJson);

	    this.load.atlas('backbtn',window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_4C_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_4C_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_4C_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_4C_G6_JSON.replyJson);
        
        this.load.image('navBar',window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand',window.baseUrl+ 'assets/commonAssets/hand.png');

        this.load.image('bg', window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/Bg.png');

        // Box with frame
        this.load.atlas('white-box',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/new box.png',null,NSD_4C_G6_JSON.SquareBoxJson);
        this.load.image('Text box_1',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/text box_1.png');
        this.load.image('Text box_2',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/text box_2.png');
        this.load.atlas('TickBtn',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/TickBtn.png',null,NSD_4C_G6_JSON.tickJson);
        
        this.load.image('numpadbg',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/numbg.png');
        this.load.atlas('Numberpad',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/number pad.png',null,NSD_4C_G6_JSON.numberpadJson);

        // Game objects
        this.load.image('gray-box',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/10X10 box.png');
        this.load.image('small-gray-box',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/Gray box.png');

        this.load.image('green-box',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/green box.png');
        this.load.image('orange-box',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/orenge box.png');
        this.load.atlas('lesser-sign',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/sym_1.png',null,NSD_4C_G6_JSON.lesserSign);
        this.load.atlas('greater-sign',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/sym_2.png',null,NSD_4C_G6_JSON.greaterSign);
        this.load.atlas('equal-sign',window.baseUrl+ 'assets/gradeAssets/NSD-4C-G6/equal.png',null,NSD_4C_G6_JSON.equalSign);

        },

	create:function(){
		
	this.state.start('NSD_4C_G6level1');
        
    },
}