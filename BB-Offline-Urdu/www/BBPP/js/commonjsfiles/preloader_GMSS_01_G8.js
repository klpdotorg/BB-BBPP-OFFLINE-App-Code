Game.preloader_GMSS_01_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMSS_01_G8.prototype = {
        preload: function () {
                // this.load.audio('music', 'questionSounds/GMSS-01-G8/ENG/V4.mp3');//adding audio

                //  this.load.video('nsrp02_1','demoVideos/AL-SUB-G7.mp4');   //* include demo video of game.
                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, GMSS_01_G8_JSON.bulbBtnJson);

                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, GMSS_01_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, GMSS_01_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, GMSS_01_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, GMSS_01_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn', window.baseUrl + 'assets/commonAssets/homeBtn.png', null, GMSS_01_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl + 'assets/commonAssets/nextBtn.png', null, GMSS_01_G8_JSON.nextbtnJson);

                //game assets

                this.load.image('BG1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/Bg.png');

                // this.load.atlas('Box2', window.baseUrl +'assets/gradeAssets/GMSS-01-G8/box 2.png', null, GMSS_01_G8_JSON.Box2);
                this.load.atlas('all_shape', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/all shape.png', null, GMSS_01_G8_JSON.allShape);
                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/TickBtn.png', null, GMSS_01_G8_JSON.tickJson);
                this.load.atlas('box_1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/box_1.png', null, GMSS_01_G8_JSON.Box1);
                this.load.atlas('box_2', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/box_2.png', null, GMSS_01_G8_JSON.Box2);
                this.load.atlas('greyshape', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/gray shaps.png', null, GMSS_01_G8_JSON.grayShaps);
                this.load.atlas('BoxFrame', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/box 2.png', null, GMSS_01_G8_JSON.box_2);

                this.load.image('arrow_1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/arrow_1.png');
                this.load.image('arrow_2', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/arrow_2.png');
                this.load.image('arrow_3', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/arrow_3.png');

                this.load.image('panle_1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/panle_1.png');

                this.load.image('canned', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_1.png');
                this.load.image('suitcase', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_2.png');
                this.load.image('bus', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_3.png');
                this.load.image('samoosa', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_4.png');
                this.load.image('coriour_box', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_5.png');
                this.load.image('bread', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_6.png');
                this.load.image('cone_ice', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_7.png');
                this.load.image('cone_sign', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_8.png');
                this.load.image('candle', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_9.png');
                this.load.image('cube', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_10.png');
                this.load.image('dice', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_11.png');
                this.load.image('gift_box', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_12.png');
                this.load.image('pastry', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_13.png');
                this.load.image('cake', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_14.png');
                this.load.image('sandwich', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_15.png');
                this.load.image('wood_pice', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_16.png');
                this.load.image('drum', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/objct_17.png');

                this.load.image('shap_1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_1.png');
                this.load.image('shap_2', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_2.png');
                this.load.image('shap_3', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_3.png');
                this.load.image('shap_4', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_4.png');

                this.load.image('square_box_1', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/square box_1.png');
                this.load.image('square_box_2', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/square box_2.png');
                this.load.image('square_box_3', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/square box_3.png');

                this.load.image('colorCube', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_1.0.png');
                this.load.image('greyShade', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/shap_1.1.png');

                this.load.image('box_panel', window.baseUrl + 'assets/gradeAssets/GMSS-01-G8/box.png');


        },

        create: function () {

                this.state.start('GMSS_01_G8level1');
        },
}