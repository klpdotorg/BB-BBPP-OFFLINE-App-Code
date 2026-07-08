Game.preloader_GMM_03_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMM_03_G8.prototype = {
        preload: function () {
                // this.load.video('nsrp02_1', 'demoVideos/GMM-03-G8.mp4');   //* include demo video of game.
                this.load.image('skipArrow', window.baseUrl +'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl +'assets/commonAssets/bulb.png', null, GMM_03_G8_JSON.bulbBtnJson);

                this.load.atlas('backbtn', window.baseUrl +'assets/commonAssets/backbtn.png', null, GMM_03_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl +'assets/commonAssets/speaker.png', null, GMM_03_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl +'assets/commonAssets/starAnim.png', null, GMM_03_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl +'assets/commonAssets/reply.png', null, GMM_03_G8_JSON.replyJson);

                this.load.image('navBar', window.baseUrl +'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl +'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl +'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn', window.baseUrl +'assets/commonAssets/homeBtn.png', null, GMM_03_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl +'assets/commonAssets/nextBtn.png', null, GMM_03_G8_JSON.nextbtnJson);

                //game grade assets

                //this.load.atlas('eraser', window.baseUrl +'assets/gradeAssets/GMM-03-G8/Btn_2.png', null, GMM_03_G8_JSON.eraserJson);

                this.load.image('BG1', window.baseUrl +'assets/gradeAssets/GMM-03-G8/Bg.png');

                this.load.image('blue_box', window.baseUrl +'assets/gradeAssets/GMM-03-G8/blue box.png');
                this.load.image('orenge_line_1', window.baseUrl +'assets/gradeAssets/GMM-03-G8/orenge line_1.png');
                this.load.image('orenge_line_2', window.baseUrl +'assets/gradeAssets/GMM-03-G8/orenge line_2.png');
                this.load.image('orenge_line_3', window.baseUrl +'assets/gradeAssets/GMM-03-G8/orenge line_3.png');
                this.load.image('panle_1', window.baseUrl +'assets/gradeAssets/GMM-03-G8/panle_1.png');
                this.load.image('panle_2', window.baseUrl +'assets/gradeAssets/GMM-03-G8/panle_2.png');
                this.load.image('pink_box_big', window.baseUrl +'assets/gradeAssets/GMM-03-G8/pink box big.png');
                this.load.image('pink_box_small', window.baseUrl +'assets/gradeAssets/GMM-03-G8/pink box small.png');
                this.load.image('text_box_1', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_1.png');
                this.load.image('text_box_2', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_2.png');
                this.load.image('text_box_3', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_3.png');
                this.load.image('text_box_4', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_4.png');
                this.load.image('text_box_5', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_5.png');
                this.load.image('text_box_8', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_8.png');

                this.load.atlas('all_box', window.baseUrl +'assets/gradeAssets/GMM-03-G8/all box.png', null, GMM_03_G8_JSON.all_box);
                this.load.atlas('btn_1', window.baseUrl +'assets/gradeAssets/GMM-03-G8/btn_1.png', null, GMM_03_G8_JSON.btn_1);
                this.load.atlas('btn_2', window.baseUrl +'assets/gradeAssets/GMM-03-G8/btn_2.png', null, GMM_03_G8_JSON.btn_2);
                this.load.atlas('text_box_6', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_6.png', null, GMM_03_G8_JSON.text_box_6);
                this.load.atlas('text_box_7', window.baseUrl +'assets/gradeAssets/GMM-03-G8/text box_7.png', null, GMM_03_G8_JSON.text_box_7);

                this.load.atlas('TickBtn', window.baseUrl +'assets/gradeAssets/GMM-03-G8/TickBtn.png', null, GMM_03_G8_JSON.tickJson);

                this.load.image('numpadbg', window.baseUrl +'assets/gradeAssets/GMM-03-G8/numbg.png');
                this.load.atlas('Numberpad', window.baseUrl +'assets/gradeAssets/GMM-03-G8/number pad.png', null, GMM_03_G8_JSON.numberpadJson);
        },

        create: function () {

                this.state.start('GMM_03_G8level1');
        },
}