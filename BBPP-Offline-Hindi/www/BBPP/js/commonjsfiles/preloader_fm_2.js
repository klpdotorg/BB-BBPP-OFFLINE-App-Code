Game.preloader_fm_2=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_2.prototype={
	preload:function(){
		console.log("ns-fm-2");
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_FM_2_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_FM_2_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_FM_2_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NS_FM_2_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_FM_2_G6_JSON.btnJson);
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
		    
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/bg7.2.png');
        this.load.image('RedBox', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Red Box.png');
        this.load.image('EggTray', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/16X10 Egg Box.png');
        this.load.image('MainBox', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Main Box.png');
		this.load.image('2x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/16X2 Egg Box.png');
        this.load.image('3x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/egg_3X16.png');
        this.load.image('4x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Egg 16X4.png');
        this.load.image('5x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/16X5 Egg Box.png');
        this.load.image('6x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Egg 16X6.png');
        this.load.image('7x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/16X7 Egg Box.png');
        this.load.image('8x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/egg_8X16.png');
        this.load.image('9x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Egg 16X9.png');
        this.load.image('10x16EggTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Egg 16X10.png');
        
        this.load.image('CounterTray', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/10X16-blocks-crate.png');
        this.load.image('2x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/2X16-blocks-crate.png');
        this.load.image('3x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/3X16-blocks-crate.png');
        this.load.image('4x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/4X16-blocks-crate.png');
        this.load.image('5x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/5X16-blocks-crate.png');
        this.load.image('6x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/6X16-blocks-crate.png');
        this.load.image('7x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/7X16-blocks-crate.png');
        this.load.image('8x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/8X16-blocks-crate.png');
        this.load.image('9x16CounterTray',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/9X16-blocks-crate.png');
     
        this.load.atlas('Thumsup',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/thums Up.png',null,NS_FM_2_G6_JSON.thumsup);
        this.load.atlas('Thumsdown',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/thums down.png',null,NS_FM_2_G6_JSON.thumsdown);
        this.load.atlas('Rightbtn',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Right Btn.png',null,NS_FM_2_G6_JSON.rightbutton);
        this.load.atlas('FactorBox', window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Nuber box new.png', null, NS_FM_2_G6_JSON.factorBox);
        this.load.atlas('Egg',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/egg.png',null,NS_FM_2_G6_JSON.egg);
        this.load.atlas('Eraser',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/Eraser box.png',null,NS_FM_2_G6_JSON.eraser);
        this.load.atlas('Sweet',window.baseUrl+'assets/gradeAssets/NS-FM-2-G6/sweet.png',null,NS_FM_2_G6_JSON.sweet); 
	},

	create:function(){
		
		this.state.start('NS_FM_2_G6level1');
        
    },
}