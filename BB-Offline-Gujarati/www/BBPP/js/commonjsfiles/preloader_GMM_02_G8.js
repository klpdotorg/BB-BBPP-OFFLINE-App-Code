Game.preloader_GMM_02_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMM_02_G8.prototype = {
        preload: function () {

                // this.load.video('ML1_1', 'demoVideos/ML1-G7_1.mp4');   //* include demo video of ML-2 game.
                // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, GMM_02_G8_JSON.bulbBtnJson);
                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, GMM_02_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, GMM_02_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, GMM_02_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, GMM_02_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');
                this.load.atlas('CommonHomeBtn', window.baseUrl + 'assets/commonAssets/homeBtn.png', null, GMM_02_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl + 'assets/commonAssets/nextBtn.png', null, GMM_02_G8_JSON.nextbtnJson);
                this.load.image('bg', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/BG.png');

                this.load.image('yellowBox1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_1.png');
                this.load.image('yellowBox2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_2.png');
                this.load.image('yellowBox2hr', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_2hr.png');
                this.load.image('yellowBox1hr', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_1hr.png');
                this.load.image('yellowBox3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_3.png');
                this.load.image('yellowBox3A', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_3A.png');
                this.load.image('yellowBox3B', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/yellow box_3B.png');

                this.load.image('shape1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/shape_1.png');
                this.load.image('shape2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/shape_2.png');
                this.load.image('box1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Box_1.png');
                this.load.image('box2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Box_2.png');
                this.load.image('box3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Box_3.png');
                this.load.image('box4', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Box_4.png');
                this.load.image('trunk', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Trunk.png');

                this.load.image('panle1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/panle_1.png');
                this.load.image('panle2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/panle_2.png');
                this.load.atlas('panle3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/panle_3.png', null, GMM_02_G8_JSON.panle3);

                this.load.image('answerBox', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/text box_1.png');

                this.load.image('cuboidRight1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_1.png');
                this.load.image('cuboidRight2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_2.png');
                this.load.image('cuboidRight3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_3.png');
                this.load.image('cuboidRight4', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_4.png');
                this.load.image('cuboidRight5', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_5.png');
                this.load.image('cuboidRight6', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_6.png');
                this.load.image('cuboidRight7', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_7.png');
                this.load.image('cuboidRight8', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_8.png');
                this.load.image('cuboidRight9', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_9.png');
                this.load.image('cuboidRight10', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_10.png');
                this.load.image('cuboidRight11', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_11.png');
                this.load.image('cuboidRight12', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_12.png');
                this.load.image('cuboidRight13', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_13.png');
                this.load.image('cuboidRight14', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_14.png');
                this.load.image('cuboidRight15', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_15.png');
                this.load.image('cuboidRight16', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_16.png');
                this.load.image('cuboidRight17', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_17.png');
                this.load.image('cuboidRight18', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_1/R_18.png');

                this.load.image('cuboidWrng1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_1.png');
                this.load.image('cuboidWrng2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_2.png');
                this.load.image('cuboidWrng3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_3.png');
                this.load.image('cuboidWrng4', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_4.png');
                this.load.image('cuboidWrng5', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_5.png');
                this.load.image('cuboidWrng6', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_1/W_6.png');

                this.load.image('cubeWrng1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_1.png');
                this.load.image('cubeWrng2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_2.png');
                this.load.image('cubeWrng3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_3.png');
                this.load.image('cubeWrng4', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_4.png');
                this.load.image('cubeWrng5', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_5.png');
                this.load.image('cubeWrng6', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Wrong ans_2/W_6.png');

                this.load.image('cubeRight1', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_1.png');
                this.load.image('cubeRight2', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_2.png');
                this.load.image('cubeRight3', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_3.png');
                this.load.image('cubeRight4', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_4.png');
                this.load.image('cubeRight5', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_5.png');
                this.load.image('cubeRight6', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_6.png');
                this.load.image('cubeRight7', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_7.png');
                this.load.image('cubeRight8', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_8.png');
                this.load.image('cubeRight9', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_9.png');
                this.load.image('cubeRight10', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_10.png');
                this.load.image('cubeRight11', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_11.png');
                this.load.image('cubeRight12', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_12.png');
                this.load.image('cubeRight13', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_13.png');
                this.load.image('cubeRight14', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_14.png');
                this.load.image('cubeRight15', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_15.png');
                this.load.image('cubeRight16', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_16.png');
                this.load.image('cubeRight17', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_17.png');
                this.load.image('cubeRight18', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/Right ans_2/R_18.png');




                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/TickBtn.png', null, GMM_02_G8_JSON.tickJson);
                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/number pad.png', null, GMM_02_G8_JSON.numberpadJson)
                this.load.image('numpadbg', window.baseUrl + 'assets/gradeAssets/GMM-02-G8/numbg.png');


        },

        create: function () {
                this.state.start('GMM_02_G8level1');
        },
}