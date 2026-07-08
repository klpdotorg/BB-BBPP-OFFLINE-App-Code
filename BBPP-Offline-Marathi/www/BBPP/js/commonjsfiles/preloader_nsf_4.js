Game.preloader_nsf_4=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_4.prototype={
	preload:function()
    {
        console.log("inside preloader of nsf4");
        console.log("nsf 4");
        
        this.load.image('prgressbarOutLine', window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
        this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png'); 
        this.load.image('Level42C_Topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Level42C_timer',window.baseUrl+'assets/commonAssets/timerBg.png');
    },

	create:function()
    {
        console.log("starting nsf4 level1");
		this.state.start('NSF_4_G6level1');
    },
}