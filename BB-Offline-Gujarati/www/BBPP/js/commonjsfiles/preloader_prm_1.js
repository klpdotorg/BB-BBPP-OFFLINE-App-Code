Game.preloader_prm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_prm_1.prototype={
	preload:function(){
		console.log("prm 1");
        this.load.video('prm_1_1',window.baseUrl+'assets/demoVideos/NS-PRM-1-G6_1.mp4');  //* intro to finding if num is prime
        this.load.video('prm_1_2',window.baseUrl+'assets/demoVideos/NS-PRM-1-G6_2.mp4');  //* playing the game.is it composit?

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_PRM_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_PRM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_PRM_1_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NS_PRM_1_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_PRM_1_G6_JSON.btnJson);
        
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png'); 
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
		    
        
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/bg7.2.png');
        this.load.image('RedBox', window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/Red Box.png');
        this.load.image('EggTray', window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/16X10 Egg Box.png');
        this.load.image('MainBox', window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/Main Box.png');
		this.load.image('2x16EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/16X2 Egg Box.png');
        this.load.image('3x16EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/egg_3X16.png');
        this.load.image('5x16EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/16X5 Egg Box.png');
        this.load.image('7x16EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/16X7 Egg Box.png');
        this.load.image('10x11EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/egg_11X10.png');
        this.load.image('10x13EggTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/egg_10X13.png');

        this.load.image('2x16AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_2X16.png');
        this.load.image('3x16AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_3X16.png');
        this.load.image('5x16AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_5X16.png');
        this.load.image('7x16AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_7X16.png');
        this.load.image('10x11AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_11X10.png');
        this.load.image('10x13AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_10X13.png');
        this.load.image('AppleTray',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple_10X16.png');

        this.load.atlas('Thumsup',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/thums Up.png',null,NS_PRM_1_G6_JSON.thumsup);
        this.load.atlas('Thumsdown',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/thums down.png',null,NS_PRM_1_G6_JSON.thumsdown);
        this.load.atlas('Rightbtn',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/Right Btn.png',null,NS_PRM_1_G6_JSON.rightbutton);
        this.load.atlas('FactorBox',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/3 Box.png',null,NS_PRM_1_G6_JSON.factorBox);
        this.load.atlas('Egg',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/egg.png',null,NS_PRM_1_G6_JSON.egg);
        this.load.atlas('Eraser',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/Eraser box.png',null,NS_PRM_1_G6_JSON.eraser);
        this.load.atlas('Apple',window.baseUrl+'assets/gradeAssets/NS-PRM-1-G6/apple new.png',null,NS_PRM_1_G6_JSON.apple);
        
	},

	create:function(){
		
		this.state.start('NS_PRM_1_G6demo');
        
    },
}