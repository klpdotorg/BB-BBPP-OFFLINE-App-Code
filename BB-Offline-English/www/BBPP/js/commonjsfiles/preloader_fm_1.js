Game.preloader_fm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_1.prototype={
	preload:function(){
		console.log("ns-fm-1");
        this.load.video('fm_1_1',window.baseUrl+'assets/demoVideos/NS-FM-1-G6_1.mp4');  //* intro to game
        this.load.video('fm_1_2',window.baseUrl+'assets/demoVideos/NS-FM-1-G6_2.mp4');  //* fm1 game playing
        this.load.video('fm_1_3',window.baseUrl+'assets/demoVideos/NS-FM-1-G6_3.mp4');  //* fm2 game playing
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_FM_1_G6_JSON.backbtnJson);

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_FM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_FM_1_G6_JSON.starAnimJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_FM_1_G6_JSON.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/Bg.png');

//NS_FM_01_G6
       this.load.image('10x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_10X16.png');
       this.load.image('9x16',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_9X16.png');
       this.load.image('8x16',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_8X16.png');
       this.load.image('7x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_7X16.png');
       this.load.image('6x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_6X16.png');
       this.load.image('5x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_5X16.png');
       this.load.image('4x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_4X16.png');
       this.load.image('3x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_3X16.png');
       this.load.image('2x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_2X16.png');
       
       this.load.image('c_10x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/counter_10X16.png');

       this.load.image('counter_10x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/10X16-blocks.png');
       this.load.image('counter_9x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/9X16-blocks.png');
       this.load.image('counter_8x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/8X16-blocks.png');
       this.load.image('counter_7x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/7X16-blocks.png');
       this.load.image('counter_6x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/6X16-blocks.png');
       this.load.image('counter_5x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/5X16-blocks.png');
       this.load.image('counter_4x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/4X16-blocks.png');
       this.load.image('counter_3x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/3X16-blocks.png');
       this.load.image('counter_2x16', window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/2X16-blocks.png');      
       
       this.load.image('Small_num_Box',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/Red box.png');
       this.load.image('Big_num_Box',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/text box1.png');
       this.load.image('TextBox',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/text box2.png');

       this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
       this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/number pad.png',null,NS_FM_1_G6_JSON.numberpadJson);
       this.load.atlas('egg_basket',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg_basket.png',null,NS_FM_1_G6_JSON.egg_basketJson);
       this.load.atlas('egg',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/egg.png',null,NS_FM_1_G6_JSON.eggJson);
       this.load.atlas('orengeCounterBasket',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/orenge blocks count tray.png',null,NS_FM_1_G6_JSON.orangeCounterTrayJson);
       this.load.atlas('thumbs_Up',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/thums Up.png',null,NS_FM_1_G6_JSON.thumsUpJson);
       this.load.atlas('thumbs_Down',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/thums down.png',null,NS_FM_1_G6_JSON.thumbsDownJson);
       this.load.atlas('tick_btn',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/tick_btn.png',null,NS_FM_1_G6_JSON.tickbtnJson);
       this.load.atlas('counter',window.baseUrl+'assets/gradeAssets/NS-FM-1-G6/sweet.png',null,NS_FM_1_G6_JSON.counterJson);
	

        this.preloader_fm_2();
        
        },

	create:function(){
		
		this.state.start('NS_FM_1_G6level1', true, false); //* transition with clear world but not cache //NS_FM_1_G6level1
        
    },
    
    preloader_fm_2: function()
    {
		this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_FM_2_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_FM_2_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_FM_2_G6_JSON.starAnimJson);
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
        
    }
}