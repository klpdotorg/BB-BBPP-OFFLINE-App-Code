Game.preloader_NSRP_02_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSRP_02_G6.prototype={
	preload:function(){
                console.log("nsrp 2");
        this.load.video('nsrp02_1',window.baseUrl+'assets/demoVideos/NSRP-02-G6.mp4');   //* include demo video of game.
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb',window.baseUrl+'assets/commonAssets/bulb.png',null,NSRP_02_G6_JSON.bulbBtnJson);
        
	this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSRP_02_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSRP_02_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSRP_02_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSRP_02_G6_JSON.replyJson);
        
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png'); 
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');
        
        this.load.atlas('chesscoin1',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Chess Coins_1.png', null, NSRP_02_G6_JSON.Chesscoin1Json);
        this.load.atlas('chesscoin2',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Chess Coins_2.png', null, NSRP_02_G6_JSON.Chesscoin2Json);
        this.load.atlas('textbox3',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/new box.png',null,NSRP_02_G6_JSON.SquareBoxJson);

        this.load.image('BG1', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/BG1.png');
        this.load.image('Textbox_1', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Text box_1.png');
        this.load.image('Table_1', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Table_1.png');
        this.load.image('textBox1', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Text box_1.png');
        this.load.image('textbox2', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Text box_2.png');
        this.load.image('textB', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/white text box 1.png');
        this.load.image('eraser1', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Ereser.png');
        this.load.image('eraserBg', window.baseUrl+'assets/gradeAssets/NSRP-02-G6/Text box_32.png');

        //Text box_32
        this.load.atlas('TickBtn',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/TickBtn.png',null,NSRP_02_G6_JSON.TickbtnJson);

        this.load.image('numpadbg',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/numbg.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NSRP-02-G6/number pad.png',null,NSRP_02_G6_JSON.numberpadJson);
        },

	create:function(){
		this.state.start('NSRP_02_G6level1');   
    },
}