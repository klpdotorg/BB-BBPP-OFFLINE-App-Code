Game.preloader_NSD_4D_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4D_G6.prototype={
	preload:function(){
                console.log("nsd 4d");
        this.load.video('nsd4d_1', window.baseUrl+ 'assets/demoVideos/NSD-4D-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_4D_G6_JSON.bulbBtnJson);

	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_4D_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_4D_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_4D_G6_JSON.starAnimJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Bg.png');
        this.load.atlas('Text box_1', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/TexT box 1.png',null,NSD_4D_G6_JSON.OptionBox);
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Text box 2.png');
        this.load.image('Text box_3', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Text box3.png');

        this.load.image('blueBox', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Blue bg.png');
        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/TickBtn.png',null,NSD_4D_G6_JSON.tickJson);
        this.load.image('red-box', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/red box.png');
        this.load.image('yellow-box', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/yellow box.png');
        this.load.image('scale', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Scale.png');
        this.load.image('grayBox', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Gray box.png');
        this.load.atlas('lesser-sign', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/sym_1.png',null,NSD_4D_G6_JSON.lesserSign);
        this.load.atlas('greater-sign', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/sym_2.png',null,NSD_4D_G6_JSON.greaterSign);
        this.load.atlas('equal-sign', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/equal.png',null,NSD_4D_G6_JSON.equalSign);
        this.load.image('Table', window.baseUrl+ 'assets/gradeAssets/NSD-4D-G6/Text table.png');
        },

	create:function(){
		
		this.state.start('NSD_4D_G6level1'); 
    },
}