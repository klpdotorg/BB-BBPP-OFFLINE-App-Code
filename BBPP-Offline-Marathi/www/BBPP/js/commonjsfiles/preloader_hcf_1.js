Game.preloader_hcf_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_hcf_1.prototype={
	preload:function(){
        console.log("hcf 1");
        this.load.video('hcf_1_1',window.baseUrl+'assets/demoVideos/NS-HCF-1-G6_1.mp4');  //* intro to game
        this.load.video('hcf_1_2',window.baseUrl+'assets/demoVideos/NS-HCF-1-G6_2.mp4');  //* hcf game playing

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_HCF_1_G6_JSON.backbtnJson);

        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_HCF_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_HCF_1_G6_JSON.starAnimJson);
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('TextBox',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/text box2.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/number pad.png',null,NS_HCF_1_G6_JSON.numberpadJson);
        this.load.atlas('FactorBox',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/3 Box.png',null,NS_HCF_1_G6_JSON.factorBoxJson);
        this.load.atlas('Eraser',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Eraser box.png',null,NS_HCF_1_G6_JSON.eraserJson);
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/BG.png');

        this.load.atlas('FourColorBox',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/4 color box.png',null,NS_HCF_1_G6_JSON.fourColorBox);

        this.load.image('EmptyBox',window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/18 gray.png');
        this.load.image('EmptyBox_Glow', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/18 yellow.png');
        this.load.image('RedBox', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Red box.png');
        this.load.image('MainBox', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Main Box.png'); 
        this.load.image('EmptyBox_l_2', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_2.png');
        this.load.image('EmptyBox_l_3', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_3.png');
        this.load.image('EmptyBox_l_4', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_4.png');
        this.load.image('EmptyBox_l_5', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_5.png');
        this.load.image('EmptyBox_l_6', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_6.png');
        this.load.image('EmptyBox_l_7', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_7.png');
        this.load.image('EmptyBox_l_8', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_8.png');
        this.load.image('EmptyBox_l_9', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_9.png');
        this.load.image('EmptyBox_l_10', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_10.png');
        this.load.image('EmptyBox_l_11', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_11.png');
        this.load.image('EmptyBox_l_12', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_12.png');
        this.load.image('EmptyBox_l_13', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_13.png');
        this.load.image('EmptyBox_l_14', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_14.png');
        this.load.image('EmptyBox_l_15', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_15.png');
        this.load.image('EmptyBox_l_16', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_16.png');
        this.load.image('EmptyBox_l_17', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_17.png');
        this.load.image('EmptyBox_l_18', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_18.png');
        this.load.image('EmptyBox_l_19', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_19.png');
        this.load.image('EmptyBox_l_20', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_20.png');
        this.load.image('EmptyBox_l_21', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_21.png');
        this.load.image('EmptyBox_l_22', window.baseUrl+'assets/gradeAssets/NS-HCF-1-G6/Box_22.png'); 
	},

	create:function(){
		
		this.state.start('NS_HCF_1_G6demo'); //NS_HCF_1_G6level1
        
    },
}