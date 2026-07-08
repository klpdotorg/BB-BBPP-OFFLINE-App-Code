Game.preloader_int_8=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_8.prototype={
	preload:function(){
        console.log("inside correct preload int 8");
        console.log("int 8");
        this.load.video('int_7_1',window.baseUrl+'assets/demoVideos/NS-INT-7-G6_1.mp4');  //* intro to operations
        this.load.video('int_7_2',window.baseUrl+'assets/demoVideos/NS-INT-7-G6_2.mp4');  //* count the counters and answer
        this.load.video('int_7_3',window.baseUrl+'assets/demoVideos/NS-INT-7-G6_3.mp4');  //* nullify +ve & -ve and answer
        this.load.video('int_7_4',window.baseUrl+'assets/demoVideos/NS-INT-7-G6_4.mp4');  //* subtraction: flip, nullify and answer

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        
	    this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_INT_07_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_INT_07_G6_JSON.speakerJson);
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null,NS_INT_07_G6_JSON.starAnimJson);
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null,NS_INT_07_G6_JSON.replyJson);
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null,NS_INT_07_G6_JSON.btnJson);
        
        this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('background',window.baseUrl+'assets/commonAssets/bg.png');
        this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.atlas('minus_anm',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/minus animation.png' ,null,NS_INT_07_G6_JSON.minus_animationJson);
        this.load.atlas('plus_anm', window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/plus animation.png' ,null, NS_INT_07_G6_JSON.plus_animationJson);
        
        this.load.atlas('flipbtn',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/plus and minus Box.png',null,NS_INT_07_G6_JSON.flipbtnJson);

        //gamewindow.baseUrl+ assets.

        this.load.image('practice',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/practice.png');
        this.load.image('topic',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/topic.png');
        

        this.load.atlas('Tick', window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/tick.png', null,NS_INT_07_G6_JSON.tickJson);
            
        
        this.load.image('bg', window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/ScreenTextBox.png',null,NS_INT_07_G6_JSON.ScreenTextBox);
        
        this.load.image('hand', window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/hand.png');

        this.load.image('numpadbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Numberpad.png',null,NS_INT_07_G6_JSON.numberpadJson);

        this.load.atlas('RectangleBox',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Rectangle box.png',null,NS_INT_07_G6_JSON.rectangleBoxJson);
        this.load.atlas('SquareBox',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Square Box.png',null,NS_INT_07_G6_JSON.squareBoxJson);
        
        this.load.image('highlightBox',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Highlight_Box.png');
        this.load.atlas('plus',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/plus symbol.png', null, NS_INT_07_G6_JSON.plusglowJson);
        this.load.atlas('minus',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/minus symbol.png', null, NS_INT_07_G6_JSON.minusglowJson);
        this.load.atlas('QnABox',window.baseUrl+'assets/gradeAssets/NS-INT-7-G6/Q n A Box.png',null,NS_INT_07_G6_JSON.questionAndAnswerBoxJson);
	},

	create:function(){
        
        //* this variable is used in NS_INT_7_G6demo to start appropriate games
        //* GameNumer & Games: 7 - INT-7   8 - INT-8   9 - INT-9   10 - INT-10  11 - INT-11
        //*                    12 - INT-12
               
                var GameNumber = 8;  
        
		this.state.start('NS_INT_7_G6demo', false, false,GameNumber);   //* pass game number.
        
    },
}