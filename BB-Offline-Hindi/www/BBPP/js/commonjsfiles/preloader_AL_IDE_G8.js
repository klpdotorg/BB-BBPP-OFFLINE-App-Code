Game.preloader_AL_IDE_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_IDE_G8.prototype = {
        preload: function () {
                //this.load.video('ALIDEG7','demoVideos/AL-IDE-G8.mp4');   //* include demo video of game.
                this.load.video('ALMUL3G8', window.baseUrl + 'assets/demoVideos/AL-MUL3-G8.mp4');

                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');
                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, AL_IDE_G8_JSON.bulbBtnJson);
                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, AL_IDE_G8_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, AL_IDE_G8_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, AL_IDE_G8_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, AL_IDE_G8_JSON.replyJson);
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.atlas('CommonHomeBtn', window.baseUrl + 'assets/commonAssets/homeBtn.png', null, AL_IDE_G8_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', window.baseUrl + 'assets/commonAssets/nextBtn.png', null, AL_IDE_G8_JSON.nextbtnJson);



                this.load.image('BG', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/Bg.png');
                this.load.image('green1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_1.png');
                this.load.image('green2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_2.png');
                this.load.image('green3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_3.png');
                this.load.image('green4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_4.png');
                this.load.image('green5', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_5.png');
                this.load.image('green6', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_6.png');

                this.load.image('pink1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_1.png');
                this.load.image('pink2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_2.png');
                this.load.image('pink3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_3.png');
                this.load.image('pink4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_4.png');
                this.load.image('pink5', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_5.png');
                this.load.image('pink6', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_6.png');

                this.load.atlas('pink2.1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_2.1.png', null, AL_IDE_G8_JSON.pink21Json);
                this.load.atlas('pink2.2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_2.2.png', null, AL_IDE_G8_JSON.pink22Json);
                this.load.atlas('pink2.3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_2.3.png', null, AL_IDE_G8_JSON.pink23Json);
                this.load.atlas('pink2.4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/pink_2.4.png', null, AL_IDE_G8_JSON.pink24Json);

                this.load.atlas('green2.1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_2.1.png', null, AL_IDE_G8_JSON.green21Json);
                this.load.atlas('green2.2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_2.2.png', null, AL_IDE_G8_JSON.green22Json);
                this.load.atlas('green2.3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_2.3.png', null, AL_IDE_G8_JSON.green23Json);
                this.load.atlas('green2.4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/green_2.4.png', null, AL_IDE_G8_JSON.green24Json);

                this.load.atlas('textbox1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_1.png', null, AL_IDE_G8_JSON.textbox1Json);
                this.load.atlas('textbox2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_2.png', null, AL_IDE_G8_JSON.textbox2Json);
                this.load.atlas('textbox3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_3.png', null, AL_IDE_G8_JSON.textbox3Json);
                this.load.atlas('textbox4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_4.png', null, AL_IDE_G8_JSON.textbox4Json);
                this.load.image('textbox5', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_5.png');
                this.load.image('textbox6', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_6.png');
                this.load.atlas('textbox7', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_7.png', null, AL_IDE_G8_JSON.textbox7Json);
                this.load.atlas('textbox8', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_8.png', null, AL_IDE_G8_JSON.textbox8Json);
                this.load.atlas('textbox9', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/text box_9.png', null, AL_IDE_G8_JSON.textBox9Json);

                this.load.image('panel1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/panle_1.png');
                this.load.image('panel2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/panle_2.png');
                this.load.image('panel3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/panle_3.png');
                this.load.image('panel4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/panle_4.png');
                this.load.image('panel5', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/panale_4.png');
                this.load.image('yellowHigh', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/yellow text box.png');

                this.load.image('Numpadbg', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/numbg.png');
                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/number pad1.png', null, AL_IDE_G8_JSON.numberpadJson);


                this.load.image('blueline', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/cross blue big.png');

                this.load.atlas('eraser', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/Btn_2.png', null, AL_IDE_G8_JSON.eraserJson);
                this.load.atlas('TickBtn', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/TickBtn.png', null, AL_IDE_G8_JSON.tickJson);

                this.load.atlas('all1', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/all_1.png', null, AL_IDE_G8_JSON.all1Json);
                this.load.atlas('all2', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/all_2.png', null, AL_IDE_G8_JSON.all2Json);
                this.load.atlas('all3', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/all_3.png', null, AL_IDE_G8_JSON.all3Json);
                this.load.atlas('all4', window.baseUrl + 'assets/gradeAssets/AL-IDE-G8/all_4.png', null, AL_IDE_G8_JSON.all4Json);



        },

        create: function () {

                this.state.start('AL_IDE_G8level1');
        },
}