Game.preloader_NSD_4E_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4E_G6.prototype={
	preload:function(){
                console.log("nsd 4e");
        this.load.video('nsd4e_1', window.baseUrl+ 'assets/demoVideos/NSD-4E-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_4E_G6_JSON.bulbBtnJson);

	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_4E_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_4E_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_4E_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_4E_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Bg.jpg');

        // Orange text boxes
        this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Text Box_1.png');
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Text Box_2.png');
        this.load.image('Text box_3', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Text Box_3.png');
        this.load.image('Text box_4', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Text Box_4.png');
        this.load.atlas('lesserSign', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/sym_1.png',null,NSD_4E_G6_JSON.lesserSign);

        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/number pad.png',null,NSD_4E_G6_JSON.numberpadJson)
        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/numbg.png');

        this.load.image('Symbol', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Symbol  New.png');
        this.load.image('box1', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Box_1.png');
        this.load.image('textMeter', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Text meeter.png');

        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/TickBtn.png',null,NSD_4E_G6_JSON.tickJson);
        this.load.atlas('Symbol-', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Symbol -.png',null,NSD_4E_G6_JSON.symbol1);
        this.load.atlas('Symbol+', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Symbol +.png',null,NSD_4E_G6_JSON.symbol2);
        this.load.atlas('bucket', window.baseUrl+ 'assets/gradeAssets/NSD-4E-G6/Bucket anim new.png',null,NSD_4E_G6_JSON.bucketAnim);
        },
 
	create:function(){	
		this.state.start('NSD_4E_G6level1');
    },
}