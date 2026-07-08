Game.preloader_AL_MUL1_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_MUL1_G8.prototype = {
        preload: function () {
                //  this.load.video('nsrp02_1','demoVideos/AL-SUB-G7.mp4');   //* include demo video of game.
                this.load.video('ALMUL3G8', window.baseUrl + 'assets/demoVideos/AL-MUL3-G8.mp4');
                this.load.image('skipArrow',window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb',window.baseUrl + 'assets/commonAssets/bulb.png', null, AL_MUL1_G8_JSON.bulbBtnJson);

                this.load.atlas('backbtn',window.baseUrl + 'assets/commonAssets/backbtn.png', null, AL_MUL1_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn',window.baseUrl + 'assets/commonAssets/speaker.png', null, AL_MUL1_G8_JSON.speakerJson);
                this.load.atlas('starAnim',window.baseUrl + 'assets/commonAssets/starAnim.png', null, AL_MUL1_G8_JSON.starAnimJson);
                this.load.atlas('replay',window.baseUrl + 'assets/commonAssets/reply.png', null, AL_MUL1_G8_JSON.replyJson);
                this.load.image('navBar',window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg',window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('hand',window.baseUrl + 'assets/commonAssets/hand.png');



                this.load.atlas('CommonHomeBtn',window.baseUrl + 'assets/commonAssets/homeBtn.png', null, AL_MUL1_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn',window.baseUrl + 'assets/commonAssets/nextBtn.png', null, AL_MUL1_G8_JSON.nextbtnJson);

                this.load.image('BG1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/Bg.png');

                this.load.atlas('greenBig1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green bigg_1.png', null, AL_MUL1_G8_JSON.greenBig1Json);
                this.load.atlas('greenBig2',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green bigg_2.png', null, AL_MUL1_G8_JSON.greenBig2Json);
                this.load.atlas('greenBig3',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green bigg_3.png', null, AL_MUL1_G8_JSON.greenBig3Json);

                this.load.atlas('pinkBig1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink bigg_1.png', null, AL_MUL1_G8_JSON.pinkBig1Json);
                this.load.atlas('pinkBig2',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink bigg_2.png', null, AL_MUL1_G8_JSON.pinkBig2Json);
                this.load.atlas('pinkBig3',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink bigg_3.png', null, AL_MUL1_G8_JSON.pinkBig3Json);

                this.load.atlas('green1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_2.1.png', null, AL_MUL1_G8_JSON.green1Json);
                this.load.atlas('green2',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_2.2.png', null, AL_MUL1_G8_JSON.green2Json);
                this.load.atlas('pink1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_2.1.png', null, AL_MUL1_G8_JSON.pink1Json);
                this.load.atlas('pink2',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_2.2.png', null, AL_MUL1_G8_JSON.pink2Json);

                this.load.atlas('green3',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_2.3.png', null, AL_MUL1_G8_JSON.green3Json);
                this.load.atlas('green4',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_2.4.png', null, AL_MUL1_G8_JSON.green4Json);
                this.load.atlas('pink3',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_2.3.png', null, AL_MUL1_G8_JSON.pink3Json);
                this.load.atlas('pink4',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_2.4.png', null, AL_MUL1_G8_JSON.pink4Json);

                this.load.atlas('all_1',window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/all_1.png', null, AL_MUL1_G8_JSON.all_1Json);
                this.load.atlas('all_2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/all_2.png', null, AL_MUL1_G8_JSON.all_2Json);
                this.load.atlas('all_4', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/all_4.png', null, AL_MUL1_G8_JSON.all_4Json);
                this.load.atlas('all_3', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/all_3.png', null, AL_MUL1_G8_JSON.all_3Json);

                this.load.atlas('Text box_1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_1.png', null, AL_MUL1_G8_JSON.Textbox1Json);
                this.load.atlas('Text box_5', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_5.png', null, AL_MUL1_G8_JSON.answerBoxJson);

                this.load.image('greenS1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_1.png');
                this.load.image('pinkS1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_1.png');

                this.load.image('greenSmall1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green small_1.png');
                this.load.image('greenSmall2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green small_2.png');
                this.load.image('greenSmall3', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green small_3.png');
                this.load.image('panel1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/panle_1.png');
                this.load.image('panel2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/panle_2.png');
                this.load.image('pinkSmall1', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink small_1.png');
                this.load.image('pinkSmall2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink small_2.png');
                this.load.image('pinkSmall3', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink small_3.png');
                this.load.image('Symbol', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/Symbol 1.png');
                this.load.image('Text box_2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_2.png');
                this.load.image('Text box_3', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_3.png');
                this.load.image('Text box_4', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_4.png');

                this.load.image('panel3', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/panle_3.png');
                this.load.image('greenXY', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_3.png');
                this.load.image('pinkXY', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_3.png');
                this.load.image('greenY', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_4.png');
                this.load.image('pinkY', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_4.png');
                this.load.image('greenY2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/green_5.png');
                this.load.image('pinkY2', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/pink_5.png');

                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/TickBtn.png', null, AL_MUL1_G8_JSON.tickJson);

                this.load.image('numpadbg', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/numbg.png');
                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/number pad.png', null, AL_MUL1_G8_JSON.numberpadJson);
                this.load.atlas('eraser', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/Btn_2.png', null, AL_MUL1_G8_JSON.eraserJson);
                // this.load.atlas('Text box_5', window.baseUrl + 'assets/gradeAssets/AL-MUL1-G8/text box_5.png', null, AL_MUL1_G8_JSON.answerBoxJson);


        },

        create: function () {

                this.state.start('AL_MUL1_G8level1');
        },
}