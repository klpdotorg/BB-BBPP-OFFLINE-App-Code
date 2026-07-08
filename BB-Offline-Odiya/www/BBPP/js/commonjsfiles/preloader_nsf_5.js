Game.preloader_nsf_5=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_5.prototype={
	preload:function(){
		console.log("nsf 5");
        this.load.video('nsf5_1',window.baseUrl+'assets/demoVideos/NSF-5-G6_1.mp4'); 
          //* include demo video of nsf-5 game.
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
	      this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_5_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_5_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_5_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSF_5_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_5_G6_JSON.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSF-5-G6/Bg.png');
        
       //NSF-2B-G6
       this.load.image('smallBox',window.baseUrl+'assets/gradeAssets/NSF-5-G6/small box.png');
       this.load.image('bigBox',window.baseUrl+'assets/gradeAssets/NSF-5-G6/big box.png');
       this.load.image('numberBox',window.baseUrl+'assets/gradeAssets/NSF-5-G6/number box.png');
       this.load.atlas('fraction_Bg',window.baseUrl+'assets/gradeAssets/NSF-5-G6/number box 5 new.png',null,NSF_5_G6_JSON.background_fractionJson);
       this.load.atlas('YG_Hz',window.baseUrl+'assets/gradeAssets/NSF-5-G6/yellow&green Blocks_2.png',null,NSF_5_G6_JSON.cube_Hz_YGJson);
       
       this.load.atlas('YG_Ver',window.baseUrl+'assets/gradeAssets/NSF-5-G6/yellow&green Blocks_1.png',null,NSF_5_G6_JSON.cube_Ver_YGJson);
       this.load.atlas('YB_Ver',window.baseUrl+'assets/gradeAssets/NSF-5-G6/yellow&blue Blocks_1.png',null,NSF_5_G6_JSON.cube_Ver_YBJson);

       this.load.atlas('YB_Hz',window.baseUrl+'assets/gradeAssets/NSF-5-G6/yellow&blue Blocks_2.png',null,NSF_5_G6_JSON.cube_Hz_YBJson);
       this.load.atlas('Thumbs_UP',window.baseUrl+'assets/gradeAssets/NSF-5-G6/thums Up.png',null,NSF_5_G6_JSON.thums_upJSon);
       this.load.atlas('Thumbs_Down',window.baseUrl+'assets/gradeAssets/NSF-5-G6/thums down.png', null, NSF_5_G6_JSON.thums_downJson);
       this.load.image('numpadbg',window.baseUrl+'assets/gradeAssets/NSF-5-G6/numbg.png');
       this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NSF-5-G6/number pad.png', null, NSF_5_G6_JSON.numberpadJson);
       this.load.atlas('newBox',window.baseUrl+'assets/gradeAssets/NSF-5-G6/NSF-2B-G6 new box.png', null, NSF_5_G6_JSON.newBoxJson);
       this.load.image('blueLine',window.baseUrl+'assets/gradeAssets/NSF-5-G6/Line_1.png');
       this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');
},

	create:function(){
		
		this.state.start('NSF_5_G6level1');
        
    },
}