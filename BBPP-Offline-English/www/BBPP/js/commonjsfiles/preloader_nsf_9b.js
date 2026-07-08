Game.preloader_nsf_9b=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_9b.prototype={ 
	preload:function(){
    console.log("nsf 9b");
		    this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NSF_9B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NSF_9B_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NSF_9B_G6_JSON.starAnimJson);
        
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');
        this.load.image('QuesBox',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/text box.png');
        this.load.image('arrow',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/arrow.png');
        this.load.image('scale',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/transparent scale.png');
        this.load.image('BlueLine',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/blue line.png');
        this.load.image('WhiteLine',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/white line.png');

        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NSF_9B_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NSF_9B_G6_JSON.btnJson);
        this.load.atlas('TextBox2',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/text box_2.png',null,NSF_9B_G6_JSON.TextBox2);

        this.load.atlas('Rightbtn',window.baseUrl+'assets/gradeAssets/NSF-9B-G6/Right btn0002.png',null,NSF_9B_G6_JSON.RightBtnJson);
        
        //navbar
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSF-9B-G6/Bg.png');
	},

	create:function(){
		
		this.state.start('NSF_9B_G6level1');
        
    },
       
}