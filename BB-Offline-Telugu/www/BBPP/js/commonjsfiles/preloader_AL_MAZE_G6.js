Game.preloader_AL_MAZE_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_AL_MAZE_G6.prototype={
	preload:function(){
        console.log("preloader_AL_MAZE_G6", window.baseUrl);
        this.load.image('skipArrow', window.baseUrl+'assets/commonAssets/skipArrow.png');
    
	      this.load.atlas('backbtn', window.baseUrl+'assets/commonAssets/backbtn.png' ,null,AL_MAZE_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+'assets/commonAssets/speaker.png' ,null,AL_MAZE_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+'assets/commonAssets/starAnim.png',null,AL_MAZE_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+'assets/commonAssets/reply.png' ,null,AL_MAZE_G6_JSON.replyJson);
        this.load.atlas('btn', window.baseUrl+'assets/commonAssets/btn.png',null,AL_MAZE_G6_JSON.btnJson);
        this.load.image('hand', window.baseUrl+'assets/commonAssets/hand.png');
        
        this.load.image('tittleBar', window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background', window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar', window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('topicOutline', window.baseUrl+'assets/commonAssets/topicOutline.png');    
        this.load.image('bg',  window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Bg.png');
       
       this.load.image('BlueBox', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Blue box.png');

       this.load.atlas('down', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Down arrow.png', null, AL_MAZE_G6_JSON.downJson);
       this.load.atlas('left', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Left arrow.png', null, AL_MAZE_G6_JSON.leftJson);
       this.load.atlas('right', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Right arrow.png', null, AL_MAZE_G6_JSON.rightsideJson);
       this.load.atlas('up', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Up arrow.png', null, AL_MAZE_G6_JSON.upJson);

       this.load.atlas('level1', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 1.png', null, AL_MAZE_G6_JSON.level1Json);
       this.load.atlas('level2', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 2.png', null, AL_MAZE_G6_JSON.level2Json);
       this.load.atlas('level3', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 3.png', null, AL_MAZE_G6_JSON.level3Json);
       this.load.atlas('level4', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 4.png', null, AL_MAZE_G6_JSON.level4Json);
       this.load.atlas('level5', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 5.png', null, AL_MAZE_G6_JSON.level5Json);
       this.load.atlas('level6', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 6.png', null, AL_MAZE_G6_JSON.level6Json);
       this.load.atlas('level7', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 7.png', null, AL_MAZE_G6_JSON.level7Json);
       this.load.atlas('level8', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 8.png', null, AL_MAZE_G6_JSON.level8Json);

       this.load.image('Red', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Red dote.png');
       this.load.image('bigBox_1', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Text box 1.png');
       this.load.image('bigBox_2', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Text box 2.png');
       this.load.image('arrow', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Start arrow.png');
      
       this.load.atlas('tick', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/Right Btn.png',null,AL_MAZE_G6_JSON.rightJson);

       this.load.atlas('WinAnim', window.baseUrl+'assets/gradeAssets/AL-MAZE-G6/winning_animation.png', null,AL_MAZE_G6_JSON.winning_animation);
},

	create:function(){
		
		this.state.start('AL_MAZE_G6level1');
        
    },
}