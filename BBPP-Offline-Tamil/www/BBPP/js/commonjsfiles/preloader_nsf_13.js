Game.preloader_nsf_13=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_13.prototype={
	preload:function(){ 
                console.log("nsf 13");
        this.load.video('nsf13_1',window.baseUrl+'assets/demoVideos/NSF-13-G6_1.mp4');   //* include demo video of nsf-13 game.
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
	this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_13_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_13_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_13_G6_JSON.starAnimJson);
        this.load.image('yellowtextbox',window.baseUrl+'assets/gradeAssets/NSF-13-G6/yellow text box.png');
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');
        
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NSF-13-G6/number pad.png',null,NSF_13_G6_JSON.numberpadJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSF_13_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_13_G6_JSON.btnJson);
        this.load.atlas('tickbtn',window.baseUrl+'assets/commonAssets/tick.png',null,NSF_13_G6_JSON.tickJson);

        this.load.atlas('SquareBox',window.baseUrl+'assets/gradeAssets/NSF-13-G6/NSF-13-G6 new box.png',null,NSF_13_G6_JSON.SquareBoxJson);
        
        //navbar
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSF-13-G6/Bg.png');

        //tray
        this.load.image('Tray', window.baseUrl+'assets/gradeAssets/NSF-13-G6/Tray.png');

        //rectangle
        this.load.atlas('1x9rectangle', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X9 rectangle.png', null, NSF_13_G6_JSON.Rectangle9Json);
        this.load.image('1x9pieces1', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X9 pieces1.png');
        this.load.image('1x9rectanglebase', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X9 rectangle base.png');
        this.load.image('1x6rectanglebase', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X6 rectangle base.png');
        this.load.image('1x6piecesblue', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X6 piecesblue.png');
        this.load.atlas('1x6traypiecesblue', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X6 traypiecesblue.png', null, NSF_13_G6_JSON.Rectangle6Json);

        
        //square
        this.load.atlas('1x4traypiecespink', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4traypiecespink.png', null, NSF_13_G6_JSON.Square4Json);

        this.load.image('1x4squarebase', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4 square base.png');

        this.load.image('1X4piecespink', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4piecespink.png');

        //1X3
        this.load.atlas('1x3pieces', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X3 sprit.png', null, NSF_13_G6_JSON.oneThreeJson);
        this.load.image('1x3rectangle', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X3 pieces blue.png');
        this.load.image('1x3Base', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X3 blue base.png');
        
        //1X5
        this.load.atlas('1x5pieces', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X5 sprit.png', null, NSF_13_G6_JSON.oneFiveJson);
        this.load.image('1x5rectangle', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X5 pieces.png');
        this.load.image('1x5Base', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X5 base.png');
        
        //1X7
         this.load.atlas('1x7pieces', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X7sprit.png', null, NSF_13_G6_JSON.oneSevenJson);
         this.load.image('1x7rectangle', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X7 pieces.png');
         this.load.image('1x7Base', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X7  orange base.png');
         
        //1X8
         this.load.atlas('1x8pieces', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X8 sprit.png', null, NSF_13_G6_JSON.oneEightJson);
         this.load.image('1x8rectangle', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X8 pieces.png');
         this.load.image('1x8Base', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X8  orange base.png');
         
        //circle
        this.load.image('1x4circlebase', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4circlebase.png');
        this.load.atlas('1X4traypieces1', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4traypieces1.png', null, NSF_13_G6_JSON.Circle11Json);
        this.load.atlas('1X4traypieces2', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4traypieces2.png', null, NSF_13_G6_JSON.Circle12Json);
        this.load.atlas('1X4traypieces3', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4traypieces3.png', null, NSF_13_G6_JSON.Circle13Json);
        this.load.atlas('1X4traypieces4', window.baseUrl+'assets/gradeAssets/NSF-13-G6/1X4traypieces4.png', null, NSF_13_G6_JSON.Circle14Json);

	},

	create:function(){
		
		this.state.start('NSF_13_G6level1');
        
    },
}