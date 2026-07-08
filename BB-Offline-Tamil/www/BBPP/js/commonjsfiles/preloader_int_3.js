Game.preloader_int_3=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_3.prototype={
	preload:function(){
        console.log("int 3"); 
        console.log('going to start preload 3');
        
        this.load.video('int_2_1',window.baseUrl+'assets/demoVideos/NS-INT-2-G6_1.mp4');  //* intro to game
        this.load.video('int_2_2',window.baseUrl+'assets/demoVideos/NS-INT-2-G6_2.mp4');  //* int3 game playing
        this.load.video('int_2_3',window.baseUrl+'assets/demoVideos/NS-INT-2-G6_3.mp4');  //* int4 game playing
		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,game3Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,game3Json.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,game3Json.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,game3Json.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,game3Json.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        
        this.load.image('Transparent',window.baseUrl+'assets/commonAssets/transparent.png'); 
        this.load.atlas('level_scale', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/Scaleanim.png', null, game3Json.level_scale); 
      
        this.load.atlas('Tick', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/tick.png', null,game3Json.tickJson); 
        this.load.image('Q3_bg', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/Q3_bg.png'); 
        this.load.atlas('Fish_1', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/Fish 1.png', null, game3Json.Fish_1 );
        
        this.load.image('kingfisher_sitting', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/kingfishersitting.png');
        this.load.atlas('KingFisher_JumpingWater', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/JumpingWater.png', null, game3Json.jumpingWaterJson); 
        this.load.atlas('kingfisher_hovering', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/kingfisherhovering.png', null, game3Json.kingfisherhoveringJson);  
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/Numberpad.png',null,game3Json.numberpadJson);
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/ScreenTextBox.png',null,game3Json.ScreenTextBox);
        this.load.atlas('KingFisher_ComingUp', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/ComingUp.png', null, game3Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/EatingFish.png', null, game3Json.eatingfishJson); 
        this.load.atlas('Bubbles',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/Bubbles.png',null,game3Json.bubblesJson);
        this.load.atlas('KingFisher_InsideWater',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/InsideWater.png',null,game3Json.insideWaterJson);
        this.load.atlas('KingFisher_ComingUpWater',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/ComingupWater.png',null,game3Json.comingupWaterJson);
        this.load.atlas('SplashWater',window.baseUrl+'assets/gradeAssets/NS-INT-3-G6/SplashWater.png',null,game3Json.SplashWater);
    
        this.preloader_int_4();   
	},

	create:function(){
        console.log('going to start Q3');
		this.state.start('NS_INT_3_G6level1');   
    },
    
    preloader_int_4: function()
    {
        this.load.image('Fish_1_image', window.baseUrl+'assets/gradeAssets/NS-INT-4-G6/Fish_1_image.png');
        this.load.image('nest', window.baseUrl+'assets/gradeAssets/NS-INT-4-G6/number.png');
        this.load.image('pondplace', window.baseUrl+'assets/gradeAssets/NS-INT-4-G6/timebg.png');
        this.load.image('zone', window.baseUrl+'assets/gradeAssets/NS-INT-4-G6/Hiddenzone.png');
        this.load.atlas('Nest',window.baseUrl+'assets/gradeAssets/NS-INT-4-G6/Nest.png',null,game4Json.NestJson);  
    }
}