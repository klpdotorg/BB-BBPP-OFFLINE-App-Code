Game.preloader_ALS_01_MCQ_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALS_01_MCQ_G6.prototype={
	preload:function(){
                console.log("als 01");
        this.load.video('als01_1', window.baseUrl+ 'assets/demoVideos/ALS-01-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.video('als01_2', window.baseUrl+ 'assets/demoVideos/ALS-01-G6_2.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,ALS_01_MCQ_G6_JSON.bulbBtnJson);	

	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,ALS_01_MCQ_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,ALS_01_MCQ_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,ALS_01_MCQ_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,ALS_01_MCQ_G6_JSON.replyJson);
        
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Bg.jpeg');

        this.load.image('aquiriumBox', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/aquarium box.png')
        this.load.image('sand', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/sand.png')
        this.load.atlas('BlueFish', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Blue fish.png',null,ALS_01_MCQ_G6_JSON.BlueFishJson);
        this.load.atlas('RedFish', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Red fish.png',null,ALS_01_MCQ_G6_JSON.RedFishJson);
        this.load.atlas('textbox', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Text box_4.png',null,ALS_01_MCQ_G6_JSON.TextBox);
        this.load.atlas('bubbles', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/bubbels.png',null,ALS_01_MCQ_G6_JSON.bubbles);

        this.load.atlas('bluefishanim', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Blue fish anim.png',null,ALS_01_MCQ_G6_JSON.bluefishanim);
        this.load.atlas('orangefishanim', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Orenge  fish anim.png',null,ALS_01_MCQ_G6_JSON.orangefishanim);




        this.load.atlas('Grass_1', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/grass_1.png',null,ALS_01_MCQ_G6_JSON.GrassOneJson);
        this.load.image('Plant', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/plant.png')
        this.load.atlas('Grass_2', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/grass_2.png',null,ALS_01_MCQ_G6_JSON.GrassTwoJson);
        this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Text box_1.png');
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Text box_2.png');
        this.load.image('Text box_3', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/Text box_3.png');
        this.load.image('white-box', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/white text box.png');

        this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/TickBtn.png',null,ALS_01_MCQ_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/blue box.png');

        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/ALS-01-MCQ-G6/number pad.png',null,ALS_01_MCQ_G6_JSON.numberpadJson);
        },

	create:function(){
		
		this.state.start('ALS_01_MCQ_G6level1');
        
    },
}