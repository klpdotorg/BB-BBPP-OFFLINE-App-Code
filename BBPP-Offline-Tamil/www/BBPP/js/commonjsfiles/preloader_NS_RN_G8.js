Game.preloader_NS_RN_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_NS_RN_G8.prototype = {
        preload: function () {
                // this.load.video('NS-RN-G8_1', 'demoVideos/NS-RN-G8.mp4');   //* include demo video of game.
                this.load.image('skipArrow',window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb',window.baseUrl + 'assets/commonAssets/bulb.png', null, NS_RN_G8_JSON.bulbBtnJson);

                this.load.atlas('backbtn',window.baseUrl + 'assets/commonAssets/backbtn.png', null, NS_RN_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn',window.baseUrl + 'assets/commonAssets/speaker.png', null, NS_RN_G8_JSON.speakerJson);
                this.load.atlas('starAnim',window.baseUrl + 'assets/commonAssets/starAnim.png', null, NS_RN_G8_JSON.starAnimJson);
                this.load.atlas('replay',window.baseUrl + 'assets/commonAssets/reply.png', null, NS_RN_G8_JSON.replyJson);

                this.load.image('navBar',window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg',window.baseUrl + 'assets/commonAssets/timebg.png');
                 this.load.image('hand',window.baseUrl + 'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn',window.baseUrl + 'assets/commonAssets/homeBtn.png', null, NS_RN_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn',window.baseUrl + 'assets/commonAssets/nextBtn.png', null, NS_RN_G8_JSON.nextbtnJson);

                //game grade assets


                this.load.image('BG',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/bg.png');
                this.load.image('panel',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/box.png');
                this.load.image('hand',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/hand.png');
                

                // this.load.image('greenBall',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/green ball.png');
                // this.load.image('pinkBall',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/pink ball.png');
                // this.load.image('orangeBall','assets/gradeAssets/NS-RN-G8/Orange ball.png');

                this.load.image('scale',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/scale.png');

                // this.load.image('wheelO',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/weel 2.png');
                // this.load.image('bombG',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/weel 4.png');
                // this.load.image('bombO',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/weel 3.png');
                // this.load.image('wick1',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/object_1.png');
                // this.load.image('wick2',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/object_2.png');
                this.load.atlas('text',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/text.png', null, NS_RN_G8_JSON.textJson);

                this.load.atlas('blueCircle',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/blue circle.png',null, NS_RN_G8_JSON.blueCircleJson);   
                this.load.atlas('greenCircle',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/green circle.png', null, NS_RN_G8_JSON.greenCircleJson);
                this.load.atlas('orangeCircle',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/orange circle.png',null, NS_RN_G8_JSON.orangeCircleJson);   
                this.load.atlas('yellowCircle',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/yellow circle.png', null, NS_RN_G8_JSON.yellowCircleJson);

                this.load.atlas('greenBall',window.baseUrl+ 'assets/gradeAssets/NS-RN-G8/green ball.png',null, NS_RN_G8_JSON.greenBallJson);   
                this.load.atlas('pinkBall',window.baseUrl+ 'assets/gradeAssets/NS-RN-G8/pink ball.png', null, NS_RN_G8_JSON.pinkBallJson);

                this.load.atlas('RedBall',window.baseUrl+ 'assets/gradeAssets/NS-RN-G8/red ball.png',null, NS_RN_G8_JSON.redBallJson);   
                // this.load.atlas('yellowBlast',window.baseUrl + 'assets/gradeAssets/NS-RN-G8/yellow blast.png', null, NS_RN_G8_JSON.yellowBlastJson);
  
        },

        create: function () {

                this.state.start('NS_RN_G8level1');
        },
}