Game.preloader_ALP_02_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALP_02_G6.prototype={
	preload:function(){
                console.log("alp 02");	
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,ALP_02_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,ALP_02_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,ALP_02_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,ALP_02_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.atlas('chesscoin1', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Chess Coins_1.png', null, ALP_02_G6_JSON.Chesscoin1Json);
        this.load.atlas('chesscoin2', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Chess Coins_2.png', null, ALP_02_G6_JSON.Chesscoin2Json);
        this.load.atlas('Trophy1', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Trophy_1.png', null, ALP_02_G6_JSON.Trophy1Json);
        this.load.atlas('Trophy2', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Trophy_2.png', null, ALP_02_G6_JSON.Trophy2Json);
        this.load.atlas('textbox3', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/new box.png',null,ALP_02_G6_JSON.SquareBoxJson);

        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Bg.png');
        this.load.image('column1',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Column.png');
        this.load.image('column2',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/column_2.png');
        this.load.image('textBox1',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Text box_1.png');
        this.load.image('textbox2',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Text box_2.png');
        this.load.image('eraser',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Text box4.png');
        this.load.image('eraser1',  window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/Ereser.png');

        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/TickBtn.png',null,ALP_02_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/blue box.png');

        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/ALP-02-G6/number pad.png',null,ALP_02_G6_JSON.numberpadJson);
        },

	create:function(){
		
		this.state.start('ALP_02_G6level1');
        
    },
}