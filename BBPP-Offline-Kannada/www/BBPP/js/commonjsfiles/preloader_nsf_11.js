Game.preloader_nsf_11=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick; 
Game.preloader_nsf_11.prototype={
	preload:function(){
                console.log("nsf 11");
        this.load.video('nsf11',window.baseUrl+'assets/demoVideos/NSF-11-G6.mp4');   //* include demo video of nsf-11 game.
	this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');	
	this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_11_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_11_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_11_G6_JSON.starAnimJson);
        this.load.image('numberBox',window.baseUrl+'assets/gradeAssets/NSF-11-G6/number box_1.png');
        this.load.image('yellowtextbox',window.baseUrl+'assets/gradeAssets/NSF-11-G6/yellow text box.png');
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NSF-11-G6/number pad.png',null,NSF_11_G6_JSON.numberpadJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSF_11_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_11_G6_JSON.btnJson);
        this.load.atlas('SquareBox',window.baseUrl+'assets/gradeAssets/NSF-11-G6/NSF-11-G6 new box.png',null,NSF_11_G6_JSON.SquareBoxJson);
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');

        this.load.atlas('HorizontalCube',window.baseUrl+'assets/gradeAssets/NSF-11-G6/all color briks_1.png',null,NSF_11_G6_JSON.HorizontalCubeJson);
       this.load.atlas('VerticalCube',window.baseUrl+'assets/gradeAssets/NSF-11-G6/all color briks_2.1.png',null,NSF_11_G6_JSON.verticalCubeJson);
        
        
        //navbar
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSF-11-G6/BG.png');

        //tray
        this.load.image('Tray', window.baseUrl+'assets/gradeAssets/NSF-11-G6/Tray.png');
	},

	create:function(){
		
		this.state.start('NSF_11_G6level1');
        
    },
}