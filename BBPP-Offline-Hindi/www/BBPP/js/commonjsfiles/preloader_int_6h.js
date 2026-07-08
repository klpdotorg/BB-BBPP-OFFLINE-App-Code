Game.preloader_int_6h=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_6h.prototype={
	preload:function(){
		console.log("int 6h");
		    this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_INT_6H_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_INT_6H_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_INT_6H_G6_JSON.starAnimJson);
        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NS_INT_6H_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_INT_6H_G6_JSON.btnJson);
        this.load.image('hand',window.baseUrl+'assets/commonAssets/hand.png');

        // Header and footer 
        this.load.image('header', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/header.png');
        this.load.image('footer', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/footer.png');
        this.load.image('close', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/close.png');


        //navbar
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/bg.png');

        // Dicebox
        this.load.image('dicebox', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/dice.png');

        // Skipbtn
        this.load.image('skip',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
        

        // Frogs
        this.load.image('frog', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/frog.png');
        this.load.image('leftfrog', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/flipleft.png');
        this.load.image('rightfrog', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/flipright.png');
        this.load.image('flipfrog', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/frogFlip.png');



        // Grid boxes
        this.load.image('outerbox', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/outerbox.png');
        this.load.image('box', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/box.png');
        this.load.image('greenbox', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/bgplain.png');

       
        // number and signs
        this.load.image('numberplate', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/numberwithsign.png');
        this.load.image('lesser', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/lesser.png');
        this.load.image('greater', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/greater.png');

        // Blue Box
        this.load.image('blueBox', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/Group 1846-2.png');



        this.load.image('lightFrog', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/frog - Copy.png');
        // Arrows
        this.load.image('arrow1', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/arrow-1.png');
        this.load.image('arrow2', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/arrow-2.png');
        this.load.image('arrow2Flipped', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/arrow-2Flip.png');

        this.load.image('arrow3', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/arrow-3.png');



        // Tick 
        this.load.image('tick', window.baseUrl+'assets/gradeAssets/NS-INT-6H-G6/tick.png');
       
	},

	create:function(){
		
		this.state.start('NS_INT_6H_G6level1');
        
    },
}