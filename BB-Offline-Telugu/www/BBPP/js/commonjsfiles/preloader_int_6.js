Game.preloader_int_6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick; 
Game.preloader_int_6.prototype={
	preload:function(){
		console.log("int 6");
        this.load.video('int_4_1',window.baseUrl+'assets/demoVideos/NS-INT-4-G6_1.mp4');  //* +ve num of fruits
        this.load.video('int_4_2',window.baseUrl+'assets/demoVideos/NS-INT-4-G6_2.mp4');  //* -ve num of fruits
        this.load.video('int_4_3',window.baseUrl+'assets/demoVideos/NS-INT-4-G6_3.mp4');  //* zero fruits

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,game6Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,game6Json.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,game6Json.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,game6Json.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,game6Json.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //gamewindow.baseUrl+ assets.
        this.load.image('practice',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/practice.png');
        this.load.image('topic',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/topic.png');
        

        this.load.atlas('Tick', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/tick.png', null,game6Json.tickJson);
            
        
        this.load.image('Q4_bg', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/ScreenTextBox.png',null,game6Json.ScreenTextBox);
        
 
        this.load.image('DragBox', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/dragingBox.png');
        this.load.image('overLap', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/timebg.png');
        this.load.image('gaadi', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/street  food gaadi.png');
        this.load.image('base', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/main panale.png');
        this.load.image('box', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/Box panle.png');
        this.load.image('apple', window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/apple.png');
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('thoughtBubble',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/cloude.png');
        this.load.image('tray',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/tray.png');
        this.load.image('mapple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/new _apple1.png');
        this.load.image('papple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/new _apple2.png');
 
        this.load.atlas('Store_man',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/store man anim.png',null,game6Json.storeManJson);
        this.load.atlas('BoyGirl',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/boy and girl.png',null,game6Json.boyGirlJson);
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/Numberpad.png',null,game6Json.numberpadJson);
        this.load.atlas('lightApple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/Light_apple_anm_1.png',null,game6Json.lightAppleJson);
        this.load.atlas('spriteApple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/apple_anm_1.png',null,game6Json.appleJson);
        this.load.atlas('plusApple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/apple_anm_+.png',null,game6Json.plusAppleJson);
        this.load.atlas('minusApple',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/apple_anm_-.png',null,game6Json.minusAppleJson);
        this.load.atlas('Bellanim',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/Bell anim.png',null,game6Json.BellanimJson);
        this.load.atlas('minusGlow',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/- symbol_glow.png',null,game6Json.minusglowJson);
        this.load.atlas('plusGlow',window.baseUrl+'assets/gradeAssets/NS-INT-6-G6/+ symbol_glow.png',null,game6Json.plusglowJson);
       
	},

	create:function(){
		
		this.state.start('NS_INT_4_G6demo');
        
    },
}