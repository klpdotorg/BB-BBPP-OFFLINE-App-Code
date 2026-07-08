Game.preloader_GMPAR_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMPAR_01_G6.prototype={ 
	preload:function(){
                console.log("gmpr");
        this.load.video('gmpar01_1', window.baseUrl+ 'assets/demoVideos/GMPAR-01-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_2', window.baseUrl+ 'assets/demoVideos/GMPAR-01-G6_2.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_3', window.baseUrl+ 'assets/demoVideos/GMPAR-01-G6_3.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_4', window.baseUrl+ 'assets/demoVideos/GMPAR-01-G6_4.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,GMPAR_01_G6_JSON.bulbBtnJson);
		
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null, GMPAR_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null, GMPAR_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null, GMPAR_01_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null, GMPAR_01_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.atlas('textbox5', window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/Text box_5.png',null,GMPAR_01_G6_JSON.textBox5Json);
        this.load.atlas('table',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/all box.png',null,GMPAR_01_G6_JSON.AllBoxJson); 
        this.load.atlas('pinkline',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/line1.png',null,GMPAR_01_G6_JSON.line1Json); 
        this.load.atlas('greenline1',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/green line_1.png',null,GMPAR_01_G6_JSON.greenLines1Json); 
        this.load.atlas('greenline2',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/green line_2.png',null,GMPAR_01_G6_JSON.greenLines2Json); 

        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/BG.png');
        this.load.image('mainbord',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/main bord.png');
        // keep it for the table
        this.load.image('textBox1',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/Text box_1.png');
        this.load.image('textbox2',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/Text box_2.png');
        this.load.image('textbox4',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/Text box_4.png');
        
        this.load.image('eraser',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/eraser.png');
        this.load.image('pinkPencil',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/pink Pencil.png');
        this.load.image('Greenpencil',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/Green pencil.png'); 
        this.load.image('dote_1',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/dote_1.png');
        this.load.image('dote_2',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/dote_2.png');
        this.load.image('L_line',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/L_line.png');
        this.load.image('B_line',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/B_line.png');
        this.load.image('S_line_1',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/S_line_1.png');
        this.load.image('S_line_2',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/B_line.png');
        this.load.image('tri_line1',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/S_line_1.1.png');
        this.load.image('tri_line2',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/S_line_1.2.png');
        this.load.image('tri_line3',  window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/S_line_1.3.png');

        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/TickBtn.png',null,GMPAR_01_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg', window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/blue box.png');

        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/GMPAR-01-G6/number pad.png',null,GMPAR_01_G6_JSON.numberpadJson);
        },

	create:function(){
		
		this.state.start('GMPAR_01_G6level1');  
    },
}