Game.preloader_GMM_01_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMM_01_G8.prototype = {
        preload: function () {

                // this.load.video('ML1_1', 'demoVideos/ML1-G7_1.mp4');   //* include demo video of ML-2 game.
                // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, GMM_01_G8_JSON.bulbBtnJson);
                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, GMM_01_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, GMM_01_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, GMM_01_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, GMM_01_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');
                this.load.atlas('CommonHomeBtn', window.baseUrl + 'assets/commonAssets/homeBtn.png', null, GMM_01_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl + 'assets/commonAssets/nextBtn.png', null, GMM_01_G8_JSON.nextbtnJson);
                this.load.image('bg', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/BG.png');



                this.load.image('dotedRectangle', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/doted objct_1.png');
                this.load.image('dotedTriangle', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/doted objct_2.png');
                this.load.image('dotedSquare', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/doted box 1.png');
                this.load.image('dotedParallogram', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/doted box 2.png');

                this.load.image('lineTr', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_1M.png');
                this.load.image('linetrBig', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_3Big.png');

                this.load.image('line2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_2M.png');
                this.load.image('line3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_3M.png');
                this.load.image('line3hr', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_3MHr.png');
                this.load.image('line3Big', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/line_3M big.png');



                this.load.image('Box2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/box2.png');
                this.load.atlas('box1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/box1.png', null, GMM_01_G8_JSON.box1);


                this.load.image('answerBox', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/text box.png');
                this.load.image('textBox1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/text box_30001.png');
                this.load.image('textBox1Yellow', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/text box_30002.png');
                this.load.atlas('textBox2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/text box_2.png', null, GMM_01_G8_JSON.textBox2);

                this.load.atlas('rect1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_3.0.png', null, GMM_01_G8_JSON.rect1);
                this.load.atlas('rect2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_3.1.png', null, GMM_01_G8_JSON.rect2);
                this.load.atlas('rect3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_3.2.png', null, GMM_01_G8_JSON.rect3);

                this.load.atlas('tr1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/triangle1.png', null, GMM_01_G8_JSON.tr1);
                this.load.atlas('tr2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/triangle2.png', null, GMM_01_G8_JSON.tr2);
                this.load.atlas('tr3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/triangle3.png', null, GMM_01_G8_JSON.tr3);

                this.load.atlas('parl1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/parelel1.png', null, GMM_01_G8_JSON.parl1);
                this.load.atlas('parl2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/parelel2.png', null, GMM_01_G8_JSON.parl2);
                this.load.atlas('parl3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/parelel3.png', null, GMM_01_G8_JSON.parl3);

                this.load.atlas('eqTr', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_8.0.png', null, GMM_01_G8_JSON.eqtr);

                this.load.atlas('scalTr', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_8.1.png', null, GMM_01_G8_JSON.scltr);
                this.load.atlas('isoTr', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_8.2.png', null, GMM_01_G8_JSON.isotr);


                this.load.atlas('pinkParl', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_9.0.png', null, GMM_01_G8_JSON.pinkParalogram);

                this.load.atlas('sqG1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_2.0.png', null, GMM_01_G8_JSON.sqGr1);
                this.load.atlas('sqG2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_2.1.png', null, GMM_01_G8_JSON.sqGr2);
                this.load.atlas('sqG3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/Shape_2.2.png', null, GMM_01_G8_JSON.sqGr3);

                this.load.atlas('pinkBox1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/pink box1.png', null, GMM_01_G8_JSON.pinkB1);
                this.load.atlas('pinkBox', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/pink box.png', null, GMM_01_G8_JSON.pinbox);

                this.load.atlas('pinkBox2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/pink box2.png', null, GMM_01_G8_JSON.pinkB2);
                this.load.atlas('pinkBox3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/pink box3.png', null, GMM_01_G8_JSON.pinkB3);

                this.load.atlas('pinkrect1', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/rectshape1.png', null, GMM_01_G8_JSON.pinkRect1);
                this.load.atlas('pinkrect2', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/rectshape2.png', null, GMM_01_G8_JSON.pinkRect2);
                this.load.atlas('pinkrect3', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/rectshape3.png', null, GMM_01_G8_JSON.pinkRect3);


        
                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/TickBtn.png', null, GMM_01_G8_JSON.tickJson);
                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/number pad.png', null, GMM_01_G8_JSON.numberpadJson)
                this.load.image('numpadbg', window.baseUrl + 'assets/gradeAssets/GMM-01-G8/numbg.png');


        },

        create: function () {
                this.state.start('GMM_01_G8level1');
        },
}