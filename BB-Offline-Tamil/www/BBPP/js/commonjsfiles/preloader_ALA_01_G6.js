Game.preloader_ALA_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALA_01_G6.prototype={
	preload:function(){
        console.log("preloader_ALA_01_G6");
        
        this.load.video('ala01_1', window.baseUrl+ 'assets/demoVideos/ALA-01-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,ALA_01_G6_JSON.bulbBtnJson);

        this.load.atlas('homebtn', window.baseUrl+ 'assets/commonAssets/homeBtn.png' ,null,ALA_01_G6_JSON.HomeBtnJson);
        this.load.atlas('nextbtn', window.baseUrl+ 'assets/commonAssets/nextBtn.png' ,null,ALA_01_G6_JSON.nextbtnJson);
		
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,ALA_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,ALA_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,ALA_01_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,ALA_01_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');

        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Bg.jpeg');

//GAME OBJECTS...
        this.load.image('aquiriumBox', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/aquarium box.png')
        this.load.image('sand', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/sand.png')
        this.load.atlas('BlueFish', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Blue fish.png',null,ALA_01_G6_JSON.BlueFishJson);
        this.load.atlas('BlueFishAnim', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Blue fishAnim.png',null,ALA_01_G6_JSON.BlueFishAnimJson);
        this.load.atlas('RedFishAnim', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Orenge  fish anim.png',null,ALA_01_G6_JSON.orangefishanimJson);
        this.load.atlas('RedFish', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Red fish.png',null,ALA_01_G6_JSON.RedFishJson);
        this.load.atlas('Grass_1', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/grass_1.png',null,ALA_01_G6_JSON.GrassOneJson);
        this.load.image('Plant', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/plant.png')
        this.load.atlas('Grass_2', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/grass_2.png',null,ALA_01_G6_JSON.GrassTwoJson);
        this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Text box_1.png');
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Text box_2.png');
        this.load.image('Text box_3', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Text box_3.png');
        this.load.atlas('Text box_4', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/Text box_4.png',null,ALA_01_G6_JSON.TextBox4Json);
        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/TickBtn.png',null,ALA_01_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/blue box.png');
        this.load.image('small_text_box', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/small_text box.png');

        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/number pad.png',null,ALA_01_G6_JSON.numberpadJson);
        this.load.atlas('bubbles', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/bubbels.png',null,ALA_01_G6_JSON.bubblesJson);
        this.load.atlas('glowingTxtBox', window.baseUrl+ 'assets/gradeAssets/ALA-01-G6/glowingTextBox.png',null,ALA_01_G6_JSON.GlowingBoxJson);
},

        create:function()
        {
		
		this.state.start('ALA_01_G6level1');
        },
}