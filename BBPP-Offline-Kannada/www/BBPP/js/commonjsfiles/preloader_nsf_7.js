Game.preloader_nsf_7=function(game){
	this.preloadBar=null;
};
var chime,clockTick;
Game.preloader_nsf_7.prototype={
	preload:function(){
    console.log("nsf 7");
        console.log("inside preloader..preload fn...");
        this.load.video('nsf7_1',window.baseUrl+'assets/demoVideos/NSF-7-G6_1.mp4');  
         //* include demo video of nsf-7 game.
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
	     this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_7_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_7_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_7_G6_JSON.starAnimJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_7_G6_JSON.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSF-7-G6/Bg.png');
       
       //NSF-7-G6
       this.load.image('smallBox',window.baseUrl+'assets/gradeAssets/NSF-7-G6/small box.png');
       this.load.image('bigBox',window.baseUrl+'assets/gradeAssets/NSF-7-G6/big box.png');
      
       this.load.atlas('YG_Hz',window.baseUrl+'assets/gradeAssets/NSF-7-G6/yellow&green Blocks_2.png',null,NSF_7_G6_JSON.cube_Hz_YGJson);
       
       this.load.atlas('YG_Ver',window.baseUrl+'assets/gradeAssets/NSF-7-G6/yellow&green Blocks_1.png',null,NSF_7_G6_JSON.cube_Ver_YGJson);
       this.load.atlas('YB_Ver',window.baseUrl+'assets/gradeAssets/NSF-7-G6/yellow&blue Blocks_1.png',null,NSF_7_G6_JSON.cube_Ver_YBJson);

       this.load.atlas('YB_Hz',window.baseUrl+'assets/gradeAssets/NSF-7-G6/yellow&blue Blocks_2.png',null,NSF_7_G6_JSON.cube_Hz_YBJson);       
       this.load.atlas('newBox',window.baseUrl+'assets/gradeAssets/NSF-7-G6/NSF-2B-G6 new box.png',null,NSF_7_G6_JSON.newBoxJson);
       this.load.atlas('tickbtn',window.baseUrl+'assets/gradeAssets/NSF-7-G6/Right Btn.png',null,NSF_7_G6_JSON.tickBtnJson);
       this.load.atlas('lesser',window.baseUrl+'assets/gradeAssets/NSF-7-G6/symbol_1.png',null,NSF_7_G6_JSON.lesserJson);
       this.load.atlas('greater',window.baseUrl+'assets/gradeAssets/NSF-7-G6/symbol_2.png',null,NSF_7_G6_JSON.greaterJson);
       this.load.atlas('equal',window.baseUrl+'assets/gradeAssets/NSF-7-G6/symbol_3.png',null,NSF_7_G6_JSON.equalJson);
       this.load.atlas('fraction_Bg',window.baseUrl+'assets/gradeAssets/NSF-7-G6/number box 4.png',null,NSF_7_G6_JSON.fractionBgJson);
       this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');
    },

	create:function(){
		
		this.state.start('NSF_7_G6level1');
        
    },
}