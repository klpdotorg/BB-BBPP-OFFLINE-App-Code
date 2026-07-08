Game.preloader_AL_FACT_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_FACT_G8.prototype = {
        preload: function () {

                this.load.video('AL_FACT', window.baseUrl + 'assets/demoVideos/AL FACT-G8.mp4');   //* include demo video of ML-2 game.
                // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, AL_FACT_G8_JSON.bulbBtnJson);
                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, AL_FACT_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, AL_FACT_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, AL_FACT_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, AL_FACT_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');
                this.load.atlas('CommonHomeBtn', window.baseUrl + 'assets/commonAssets/homeBtn.png', null, AL_FACT_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl + 'assets/commonAssets/nextBtn.png', null, AL_FACT_G8_JSON.nextbtnJson);
                this.load.image('bg', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/Bg.png');


                this.load.atlas('eraser', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/Btn_2.png', null, AL_FACT_G8_JSON.eraser);

                this.load.image('sidepanel', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/sidepanel.png');
                this.load.atlas('pinksmall', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink_1.4.png', null, AL_FACT_G8_JSON.pinksmall);
                this.load.atlas('grnsmall', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green_1.3.png', null, AL_FACT_G8_JSON.grnsmall);
                this.load.atlas('pinkbig', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink_1.1.png', null, AL_FACT_G8_JSON.pinkbig);
                this.load.atlas('grnbig', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green_1.4.png', null, AL_FACT_G8_JSON.grnbig);
                this.load.atlas('pinkhr', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink_1.3.png', null, AL_FACT_G8_JSON.pinkhr);
                this.load.atlas('pinkvr', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink_1.2.png', null, AL_FACT_G8_JSON.pinkvr);
                this.load.atlas('grnhr', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green_1.2.png', null, AL_FACT_G8_JSON.grnhr);
                this.load.atlas('grnvr', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green_1.1.png', null, AL_FACT_G8_JSON.grnvr);

                this.load.atlas('yellowbox', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/yellow box.png', null, AL_FACT_G8_JSON.yellowbox);

                this.load.image('greenSmall1', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green small_1.png');
                this.load.image('greenSmall2', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green small_2.png');
                this.load.image('greenSmall3', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/green small_3.png');
                this.load.image('pinkSmall1', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink small_1.png');
                this.load.image('pinkSmall2', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink small_2.png');
                this.load.image('pinkSmall3', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/pink small_3.png');


                this.load.image('panel_1', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/panle_1.png');
                this.load.image('panel_2', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/panle_2.png');
                this.load.image('panel_3', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/panle_3.png');
                this.load.image('panel_4', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/panle_4.png');
                this.load.image('panel_5', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/panle_5.png');

                this.load.image('yellowTextBox', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/yellow text box.png');

                this.load.image('Text box_5', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/text box_5.png');
                this.load.image('Text box_6', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/text box_6.png');
                this.load.atlas('Text box_2', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/text box_2.png', null, AL_FACT_G8_JSON.box2);
                this.load.atlas('Text box_7', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/text box_7.png', null, AL_FACT_G8_JSON.box7);

                this.load.atlas('Optionbox', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/text box_8.png', null, AL_FACT_G8_JSON.optionBox);

                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/TickBtn.png', null, AL_FACT_G8_JSON.tickJson);
                // this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/number pad.png', null, AL_FACT_G8_JSON.numberpadJson)
                // this.load.image('numpadbg', window.baseUrl + 'assets/gradeAssets/AL-FACT-G8/numbg.png');


        },

        create: function () {
                this.state.start('AL_FACT_G8level1');
        },
}