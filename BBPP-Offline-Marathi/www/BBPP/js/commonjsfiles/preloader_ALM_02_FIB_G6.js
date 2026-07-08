Game.preloader_ALM_02_FIB_G6 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_ALM_02_FIB_G6.prototype = {
        preload: function () {
                console.log("alm 02");
                this.load.video('alm02_1', window.baseUrl+ 'assets/demoVideos/ALM-02-G6_1.mp4');   //* include demo video of nsf-5 game.
                this.load.video('alm02_2', window.baseUrl+ 'assets/demoVideos/ALM-02-G6_2.mp4'); 
                this.load.video('alm02_3', window.baseUrl+ 'assets/demoVideos/ALM-02-G6_3.mp4');  //* include demo video of nsf-5 game.

                this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png', null, ALM_02_FIB_G6_JSON.bulbBtnJson);

                this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png', null, ALM_02_FIB_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png', null, ALM_02_FIB_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png', null, ALM_02_FIB_G6_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png', null, ALM_02_FIB_G6_JSON.replyJson);
                this.load.atlas('nextBtn', window.baseUrl+ 'assets/commonAssets/nextBtn.png', null, ALM_02_FIB_G6_JSON.nextbtnJson);
                this.load.atlas('homeBtn', window.baseUrl+ 'assets/commonAssets/homeBtn.png', null, ALM_02_FIB_G6_JSON.homeBtnJson);

                this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
                this.load.image('bg', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Bg.jpeg');

                //GAME OBJECTS...
                this.load.image('aquiriumBox', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/aquarium box.png')
                this.load.image('sand', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/sand.png')
                this.load.atlas('BlueFish', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Blue fish.png', null, ALM_02_FIB_G6_JSON.BlueFishJson);
                this.load.atlas('BlueFishAnim', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/BlueFishAnim.png', null, ALM_02_FIB_G6_JSON.BlueFishAninJson);

                this.load.atlas('FishBowl', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Fish bowl.png', null, ALM_02_FIB_G6_JSON.fishBowlJson);
                this.load.atlas('Grass_1', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/grass_1.png', null, ALM_02_FIB_G6_JSON.GrassOneJson);
                this.load.image('Plant', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/plant.png')
                this.load.atlas('Grass_2', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/grass_2.png', null, ALM_02_FIB_G6_JSON.GrassTwoJson);
                this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Text box_1.png');
                this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Text box_2.png');
                this.load.atlas('Text box_4', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Text box_4.png', null, ALM_02_FIB_G6_JSON.TextBox4Json);
                this.load.atlas('TickBtn', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/TickBtn.png', null, ALM_02_FIB_G6_JSON.TickbtnJson);

                this.load.image('BlueBg', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/blue box.png');
                this.load.image('small_text_box', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/small_text box.png');

                this.load.image('butonBg', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Main box.png');
                this.load.image('Ereser', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Ereser.png');
                this.load.image('pot_EraserBg', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/pot and ereser Box.png');
                this.load.image('Potbtn', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/Fish pot.png');

                this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');

                this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/numbg.png');
                this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/number pad.png', null, ALM_02_FIB_G6_JSON.numberpadJson);
                this.load.atlas('bubbles', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/bubbels.png', null, ALM_02_FIB_G6_JSON.bubblesJson);
                this.load.atlas('glowingTxtBox', window.baseUrl+ 'assets/gradeAssets/ALM-02-FIB-G6/glowingTextBox.png', null, ALM_02_FIB_G6_JSON.GlowingBoxJson);
        },

        create: function () {

                this.state.start('ALM_02_FIB_G6level1');
        },
}