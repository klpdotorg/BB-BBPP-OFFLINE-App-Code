Game.preloader_nsf_8=function(game){
	this.preloadBar=null;
};
         
var chime,clockTick;
Game.preloader_nsf_8.prototype={
	preload:function(){
                console.log("nsf 8");
        this.load.video('nsf8_1',window.baseUrl+'assets/demoVideos/NSF-8-G6_1.mp4');   //* include demo video of nsf-8 game.
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
        this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_8_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_8_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_8_G6_JSON.starAnimJson);
        this.load.image('NumberBox1',window.baseUrl+'assets/gradeAssets/NSF-8-G6/number box_1.png');
        this.load.image('NumberBox2',window.baseUrl+'assets/gradeAssets/NSF-8-G6/number box_2.png');  
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NSF-8-G6/number pad.png',null,NSF_8_G6_JSON.numberpadJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSF_8_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_8_G6_JSON.btnJson);
        this.load.atlas('SquareBox',window.baseUrl+'assets/gradeAssets/NSF-8-G6/NSF-8-G6 new box.png',null,NSF_8_G6_JSON.SquareBoxJson);
        this.load.image('number2bg',window.baseUrl+'assets/gradeAssets/NSF-8-G6/new text box_2_main box.png');
        this.load.atlas('fractionbox',window.baseUrl+'assets/gradeAssets/NSF-8-G6/number box 5 new.png',null,NSF_8_G6_JSON.fractionboxJson);
        //navbar
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        //background
        this.load.image('Bg', window.baseUrl+'assets/gradeAssets/NSF-8-G6/Bg.png');

        //tray
        this.load.image('tray', window.baseUrl+'assets/gradeAssets/NSF-8-G6/tray.png');

        //hand
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');

        //rectangle
        this.load.image('1x3traypiecesblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 tray pieces blue.png');
        this.load.image('1x4traypiecesblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 tray pieces blue.png');
        this.load.image('1x5traypieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X5 tray pieces blue.png');
        this.load.image('1x6traypieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X6tray pieces pink.png');
        this.load.image('1x9traypieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X9 tray pieces.png');
        this.load.image('1x8traypieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X8 tray pieces.png');
        this.load.image('1x7traypieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X7 tray pieces.png');

        this.load.image('1x9base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X9 base.png');
        this.load.image('1x6base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X6 base.png');
        this.load.image('1x5base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X5 base.png');
        this.load.image('1x4baseblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4  blue base.png');
        this.load.image('1x3baseblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 blue base.png');
        this.load.image('1x8base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X8  orange base.png');
        this.load.image('1x7base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X7  orange base.png');

        this.load.image('1x3piecesblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 pieces blue.png');
        this.load.image('1x4piecesblue', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces blue.png');
        this.load.image('1x5pieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X5 pieces.png');
        this.load.image('1x6pieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X6 pieces.png');
        this.load.image('1x9pieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X9 pieces.png');
        this.load.image('1x8pieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X8 pieces.png');
        this.load.image('1x7pieces', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X7 pieces.png');

        //square
        this.load.image('1x2traypiecespink', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 tray pieces pink_1.png');
        this.load.image('1x4traypiecespink', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 tray pieces pink.png');

        this.load.image('1x2basepink1', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2  pink square  base_1.png');
        this.load.image('1x2basepink2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2  pink square  base_2.png');
        this.load.image('1x4base', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 base.png');

        this.load.image('1X2piecespink_1', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 pieces pink_1.png.png');
        this.load.image('1X2piecespink_2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 pieces pink_2.png.png');
        this.load.image('1X4piecespink', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces pink.png');

        //circle
        this.load.image('1x2traypiecesgreen', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 tray pieces green.png');
        this.load.image('1x3traypiecesgreen', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 tray pieces green.png');
        this.load.image('1x4traypiecesgreen', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 tray pieces.png');

        this.load.image('Ovalbase', window.baseUrl+'assets/gradeAssets/NSF-8-G6/Oval base.png');
        this.load.image('1x3basegreen', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3  green circle  base.png');
        this.load.image('1x2basegreen2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2  green circle  base_2.png');
        this.load.image('1x2basegreen3', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2  green circle  base_3.png');

        this.load.image('1X2greenpieces_1', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 green pieces_1.png');
        this.load.image('1X2greenpieces_2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 green pieces_2.png');
        this.load.image('1X2greenpieces_3', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 green pieces_3.png');
        this.load.image('1X2greenpieces_4', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X2 green pieces_4.png');
        this.load.image('1X3greenpieces_1', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 green pieces_1.png');
        this.load.image('1X3greenpieces_2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 green pieces_2.png');
        this.load.image('1X3greenpieces_3', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X3 green pieces_3.png');
        this.load.image('1X4pieces_1', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces_1.png');
        this.load.image('1X4pieces_2', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces_2.png');
        this.load.image('1X4pieces_3', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces_3.png');
        this.load.image('1X4pieces_4', window.baseUrl+'assets/gradeAssets/NSF-8-G6/1X4 pieces_4.png');
       
	},

	create:function(){
		
		this.state.start('NSF_8_G6level1');
        
    },
}