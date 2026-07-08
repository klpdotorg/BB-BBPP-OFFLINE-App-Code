Game.preloader_NSD_2B_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_2B_G6.prototype={
	preload:function(){
                console.log("nsd 2b");
        this.load.video('nsd2b_1', window.baseUrl+ 'assets/demoVideos/NSD-2B-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_2B_G6_JSON.bulbBtnJson);
		
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_2B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_2B_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_2B_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_2B_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/Bg.png');
        this.load.image('bigBox', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/tary_1.png');
        this.load.image('Green_cube', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/green briks single.png');
        this.load.image('bigBox_2', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/tary_3.png');
        this.load.image('bigBox_1', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/tary_2.png');
        this.load.image('smallBox', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/small_box.png');
        this.load.image('smallBox_1', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/small box.png');
        this.load.image('numberBox', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/number box.png');
        this.load.atlas('fraction_Bg', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/number box 5 new.png',null,NSD_2B_G6_JSON.background_fractionJson);
        this.load.atlas('4-colour-cube', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/4 color briks.png',null,NSD_2B_G6_JSON.cubes_4_verticalJson);
        this.load.atlas('4-colour-cube_Horizontal', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/4 color briks_Horizontal.png',null,NSD_2B_G6_JSON.cubes_4_HorizontalJson);
 
        this.load.atlas('text', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/NSF-2B-G6 new box.png',null,NSD_2B_G6_JSON.textJson);
        this.load.atlas('YG_Ver', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/yellow&green Blocks_1.png',null,NSD_2B_G6_JSON.cube_Ver_YGJson);
        this.load.atlas('YB_Ver', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/yellow&blue Blocks_1.png',null,NSD_2B_G6_JSON.cube_Ver_YBJson);
        this.load.atlas('tick', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/Right Btn.png',null,NSD_2B_G6_JSON.rightJson);
 
        this.load.atlas('YB_Hz', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/yellow&blue Blocks_2.png',null,NSD_2B_G6_JSON.cube_Hz_YBJson);
        this.load.atlas('Thumbs_UP', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/thums Up.png',null,NSD_2B_G6_JSON.thums_upJSon);
        this.load.atlas('Thumbs_Down', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/thums down.png',null,NSD_2B_G6_JSON.thums_downJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/number pad.png',null,NSD_2B_G6_JSON.numberpadJson);
        this.load.atlas('newBox', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/NSF-2B-G6 new box.png',null,NSD_2B_G6_JSON.newBoxJson);
        this.load.image('blueLine', window.baseUrl+ 'assets/gradeAssets/NSD-2B-G6/Line_1.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
},

	create:function(){	
		this.state.start('NSD_2B_G6level1');
    },
}