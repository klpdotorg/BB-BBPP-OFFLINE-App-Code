Game.preloader_fm_3=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick; 
Game.preloader_fm_3.prototype={
	preload:function(){
		console.log("ns-fm-3");	
    window.NS_FM_3_G6level1 = true;

        this.load.video('fm_3_1',window.baseUrl+'assets/demoVideos/NS-FM-3-G6_1.mp4');  //* how to play the game

		this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');

//common for all games.  
this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,null,NS_FM_3_G6_JSON.backbtnJson);
this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,null,NS_FM_3_G6_JSON.speakerJson);
        
this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',null, NS_FM_3_G6_JSON.starAnimJson);
                
this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,null, NS_FM_3_G6_JSON.replayJson);
        
this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',null, NS_FM_3_G6_JSON.btnJson);

this.load.image('background1',window.baseUrl+'assets/commonAssets/bg.png');
this.load.image('tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');

this.load.atlas('erase',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/erase.png' ,null, NS_FM_3_G6_JSON.eraserJson);

this.load.atlas('rightmark',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/rightmark.png' ,null, NS_FM_3_G6_JSON.rightmarkJson);
this.load.image('numBG',window.baseUrl+'assets/commonAssets/numbg.png');
this.load.atlas('numberpad',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/calNum.png', null, NS_FM_3_G6_JSON.calNumJson);
this.load.atlas('numbers1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/numbers1.png',null, NS_FM_3_G6_JSON.numbers1Json);

//gamewindow.baseUrl+ assets.
this.load.image('bg',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/Bg.png');
             
this.load.atlas('imageBox',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/imageBox.png',null, NS_FM_3_G6_JSON.imageBoxJson);
this.load.image('whiteBox',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/whiteBox.png');
this.load.atlas('numberBox',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/numberBox.png',null,NS_FM_3_G6_JSON.numberBoxJson);
this.load.atlas('squareBox',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/numberBoxHL.png',null,NS_FM_3_G6_JSON.SquareBoxJson);

this.load.image('fullimage1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/full image1.png');
this.load.image('shape1_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape1.png');
this.load.image('shape2_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape2.png');
this.load.image('shape3_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape3.png');
this.load.image('shape4_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape4.png');
this.load.image('shape5_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape5.png');
this.load.image('shape6_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape6.png');
this.load.image('shape7_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape7.png');
this.load.image('shape8_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape8.png');
this.load.image('shape9_1',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape9.png');

this.load.image('fullimage2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/full image2.png');
this.load.image('shape1_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape1.png');
this.load.image('shape2_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape2.png');
this.load.image('shape3_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape3.png');
this.load.image('shape4_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape4.png');
this.load.image('shape5_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape5.png');
this.load.image('shape6_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape6.png');
this.load.image('shape7_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape7.png');
this.load.image('shape8_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape8.png');
this.load.image('shape9_2',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape9.png');

this.load.image('fullimage3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/full image3.png');
this.load.image('shape1_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape1.png');
this.load.image('shape2_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape2.png');
this.load.image('shape3_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape3.png');
this.load.image('shape4_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape4.png');
this.load.image('shape5_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape5.png');
this.load.image('shape6_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape6.png');
this.load.image('shape7_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape7.png');
this.load.image('shape8_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape8.png');
this.load.image('shape9_3',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape9.png');

this.load.image('fullimage4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/full image4.png');
this.load.image('shape1_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape1.png');
this.load.image('shape2_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape2.png');
this.load.image('shape3_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape3.png');
this.load.image('shape4_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape4.png');
this.load.image('shape5_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape5.png');
this.load.image('shape6_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape6.png');
this.load.image('shape7_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape7.png');
this.load.image('shape8_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape8.png');
this.load.image('shape9_4',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape9.png');

this.load.image('fullimage5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/full image5.png');
this.load.image('shape1_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape1.png');
this.load.image('shape2_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape2.png');
this.load.image('shape3_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape3.png');
this.load.image('shape4_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape4.png');
this.load.image('shape5_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape5.png');
this.load.image('shape6_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape6.png');
this.load.image('shape7_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape7.png');
this.load.image('shape8_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape8.png');
this.load.image('shape9_5',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape9.png');

this.load.image('fullimage6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/full image6.png');
this.load.image('shape1_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape1.png');
this.load.image('shape2_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape2.png');
this.load.image('shape3_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape3.png');
this.load.image('shape4_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape4.png');
this.load.image('shape5_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape5.png');
this.load.image('shape6_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape6.png');
this.load.image('shape7_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape7.png');
this.load.image('shape8_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape8.png');
this.load.image('shape9_6',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape9.png');

this.load.image('fullimage7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/full image7.png');
this.load.image('shape1_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape1.png');
this.load.image('shape2_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape2.png');
this.load.image('shape3_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape3.png');
this.load.image('shape4_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape4.png');
this.load.image('shape5_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape5.png');
this.load.image('shape6_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape6.png');
this.load.image('shape7_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape7.png');
this.load.image('shape8_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape8.png');
this.load.image('shape9_7',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape9.png');

this.load.image('fullimage8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/full image8.png');
this.load.image('shape1_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape1.png');
this.load.image('shape2_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape2.png');
this.load.image('shape3_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape3.png');
this.load.image('shape4_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape4.png');
this.load.image('shape5_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape5.png');
this.load.image('shape6_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape6.png');
this.load.image('shape7_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape7.png');
this.load.image('shape8_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape8.png');
this.load.image('shape9_8',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape9.png');

this.load.image('fullimage9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/full image9.png');
this.load.image('shape1_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape1.png');
this.load.image('shape2_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape2.png');
this.load.image('shape3_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape3.png');
this.load.image('shape4_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape4.png');
this.load.image('shape5_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape5.png');
this.load.image('shape6_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape6.png');
this.load.image('shape7_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape7.png');
this.load.image('shape8_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape8.png');
this.load.image('shape9_9',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape9.png');

this.load.image('fullimage10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/full image10.png');
this.load.image('shape1_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape1.png');
this.load.image('shape2_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape2.png');
this.load.image('shape3_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape3.png');
this.load.image('shape4_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape4.png');
this.load.image('shape5_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape5.png');
this.load.image('shape6_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape6.png');
this.load.image('shape7_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape7.png');
this.load.image('shape8_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape8.png');
this.load.image('shape9_10',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape9.png');

this.load.image('fullimage11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/full image11.png');
this.load.image('shape1_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape1.png');
this.load.image('shape2_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape2.png');
this.load.image('shape3_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape3.png');
this.load.image('shape4_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape4.png');
this.load.image('shape5_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape5.png');
this.load.image('shape6_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape6.png');
this.load.image('shape7_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape7.png');
this.load.image('shape8_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape8.png');
this.load.image('shape9_11',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape9.png');

this.load.image('fullimage12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/full image12.png');
this.load.image('shape1_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape1.png');
this.load.image('shape2_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape2.png');
this.load.image('shape3_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape3.png');
this.load.image('shape4_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape4.png');
this.load.image('shape5_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape5.png');
this.load.image('shape6_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape6.png');
this.load.image('shape7_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape7.png');
this.load.image('shape8_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape8.png');
this.load.image('shape9_12',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape9.png');

this.load.image('fullimage13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/full image13.png');
this.load.image('shape1_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape1.png');
this.load.image('shape2_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape2.png');
this.load.image('shape3_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape3.png');
this.load.image('shape4_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape4.png');
this.load.image('shape5_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape5.png');
this.load.image('shape6_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape6.png');
this.load.image('shape7_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape7.png');
this.load.image('shape8_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape8.png');
this.load.image('shape9_13',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape9.png');

this.load.image('fullimage14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/full image14.png');
this.load.image('shape1_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape1.png');
this.load.image('shape2_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape2.png');
this.load.image('shape3_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape3.png');
this.load.image('shape4_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape4.png');
this.load.image('shape5_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape5.png');
this.load.image('shape6_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape6.png');
this.load.image('shape7_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape7.png');
this.load.image('shape8_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape8.png');
this.load.image('shape9_14',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape9.png');

this.load.image('fullimage15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/full image15.png');
this.load.image('shape1_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape1.png');
this.load.image('shape2_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape2.png');
this.load.image('shape3_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape3.png');
this.load.image('shape4_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape4.png');
this.load.image('shape5_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape5.png');
this.load.image('shape6_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape6.png');
this.load.image('shape7_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape7.png');
this.load.image('shape8_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape8.png');
this.load.image('shape9_15',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape9.png');

this.load.image('fullimage16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/full image16.png');
this.load.image('shape1_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape1.png');
this.load.image('shape2_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape2.png');
this.load.image('shape3_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape3.png');
this.load.image('shape4_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape4.png');
this.load.image('shape5_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape5.png');
this.load.image('shape6_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape6.png');
this.load.image('shape7_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape7.png');
this.load.image('shape8_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape8.png');
this.load.image('shape9_16',window.baseUrl+'assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape9.png');


	},

	create:function(){
		
		 this.state.start('NS_FM_3_G6level1');
		//this.state.start('NS_FM_3_G6level1');
        
    },
}