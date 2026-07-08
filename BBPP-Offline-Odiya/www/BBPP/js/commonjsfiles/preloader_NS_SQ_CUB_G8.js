Game.preloader_NS_SQ_CUB_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_NS_SQ_CUB_G8.prototype = {
        preload: function () {
                //  this.load.video('nsrp02_1','demoVideos/AL-SUB-G7.mp4');   //* include demo video of game.
                this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png', null, NS_SQ_CUB_G8_JSON.bulbBtnJson);

                this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png', null, NS_SQ_CUB_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png', null, NS_SQ_CUB_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png', null, NS_SQ_CUB_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png', null, NS_SQ_CUB_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn', window.baseUrl+ 'assets/commonAssets/homeBtn.png', null, NS_SQ_CUB_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl+ 'assets/commonAssets/nextBtn.png', null, NS_SQ_CUB_G8_JSON.nextbtnJson);

                this.load.image('BG1', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/bg.png');
                this.load.image('Box2', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/Box_2.png');
                this.load.image('panel1', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/panle_1.png');
                this.load.image('panel2', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/panle_2.png');
                this.load.image('panel3', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/panle_3.png');

                this.load.image('textBox1', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/Text box_1.png');
                this.load.image('textBox2', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/Text box_2.png');
                this.load.image('textBox3', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/Text box_3.png');

                this.load.image('pinkBox', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/pink 3D box.png');

                this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/TickBtn.png', null, NS_SQ_CUB_G8_JSON.tickJson);

                this.load.atlas('blueBox', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/blue box.png', null, NS_SQ_CUB_G8_JSON.blueBoxJson);
                this.load.atlas('squareBox', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/Box_1.png', null, NS_SQ_CUB_G8_JSON.squareBoxJson);
                this.load.atlas('thumbsDown', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/thumsdown_1.png', null, NS_SQ_CUB_G8_JSON.thumsdown_1);
                this.load.atlas('thumbsUp', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/thumsup_1.png', null, NS_SQ_CUB_G8_JSON.thumsup_1);

                this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/numbg.png');
                this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NS_SQ_CUB_G8/number pad.png', null, NS_SQ_CUB_G8_JSON.numberpadJson);
        },      

        create: function () {

                this.state.start('NS_SQ_CUB_G8level1');
        },
}