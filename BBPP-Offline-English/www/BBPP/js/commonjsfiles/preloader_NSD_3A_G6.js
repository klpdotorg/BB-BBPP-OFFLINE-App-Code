Game.preloader_NSD_3A_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_3A_G6.prototype={
	preload:function(){
                console.log("nsd 3a");	
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_3A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_3A_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_3A_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_3A_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/Bg.png');

        // Box with frame
        this.load.atlas('white-box', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/new box.png',null,NSD_3A_G6_JSON.SquareBoxJson);
        this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/text box_1.png');
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/text box_2.png');
        this.load.image('white-box2', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/white text box 1.png');
        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/TickBtn.png',null,NSD_3A_G6_JSON.TickbtnJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/number pad.png',null,NSD_3A_G6_JSON.numberpadJson);

        // Game objects
        this.load.image('note10', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/10 note.png');
        this.load.image('note1', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/1 note.png');
        this.load.image('coin10th', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/coin 10.png');
        this.load.image('coin100th', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/coin 1.png');
        this.load.image('note100', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/100 note.png');
        this.load.image('Table1', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/Table 1.png');
        this.load.image('Table2', window.baseUrl+ 'assets/gradeAssets/NSD-3A-G6/Table 2.png');
        },

	create:function(){
		
		this.state.start('NSD_3A_G6level1');  
    },
}