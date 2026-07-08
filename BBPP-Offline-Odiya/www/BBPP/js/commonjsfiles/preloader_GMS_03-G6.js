Game.preloader_GMS_03_G6 = function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_03_G6.prototype=
{
	preload:function()
    {
      console.log("gms 3");
    console.log("inside preloader of nsf");
        
            this.load.image('commonBg2',window.baseUrl+ 'assets/commonAssets/commonBg2.png');
            this.load.audio('WrongCelebrationSound',window.baseUrl+  'sounds/WrongCelebrationSound.mp3');
            this.load.audio('ClickSound', window.baseUrl+ 'sounds/ClickSound.mp3');
            this.load.audio('celebration', window.baseUrl+ 'sounds/celebration.mp3');
    },

	create:function()
    {
		
		this.state.start('GMS_03_G6level1');
        
    },
}