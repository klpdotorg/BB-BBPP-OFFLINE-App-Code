Game.preloader_ALAS_01_G6 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_ALAS_01_G6.prototype = {
        preload: function () {
               // SpinnerDialog.show(null, "Building Blocks is loading..", true);
                console.log("preloader_ALAS_01_G6");

                // window.baseUrl = cordova.file.externalRootDirectory + "Android/data/com.akshara.ENBBplusplus/Files/Download/.gameFilesBB++V10_2/www/";
                // console.log(window.baseUrl,"window....................");
                this.load.video('alas01_1', window.baseUrl + "assets/demoVideos/ALAS-01-G6_1.mp4");   //* include demo video of game.
                this.load.video('alas01_2', window.baseUrl + "assets/demoVideos/ALAS-01-G6_2.mp4");   //* include demo video of game.

                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, ALAS_01_G6_JSON.bulbBtnJson);
                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, ALAS_01_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, ALAS_01_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, ALAS_01_G6_JSON.starAnimJson);
                this.load.image('numpadbg', window.baseUrl + 'assets/commonAssets/numbg.png');
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/number pad.png', null, ALAS_01_G6_JSON.numberpadJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, ALAS_01_G6_JSON.replyJson);
                this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, ALAS_01_G6_JSON.btnJson);
                this.load.atlas('tickbtn', window.baseUrl + 'assets/commonAssets/tick.png', null, ALAS_01_G6_JSON.tickJson);

                //navbar
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');

                //time
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');

                //background
                this.load.image('Bg new', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Bg new.jpg');

                //text boxes
                this.load.image('textbox1', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Text box_1.png');
                this.load.image('textbox2', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Text box_2.png'); //
                this.load.image('textbox3', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Text box_3.png');

                //Adding weight 
                this.load.image('base', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/weight gauge part_4.png');
                this.load.image('beam', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/weight gauge part_3.png');
                this.load.image('weight gauge part_1', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/weight gauge part_1.png');
                this.load.image('weight gauge part_2', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/weight gauge part_2.png');
                this.load.image('bigg box', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/bigg box.png');
                this.load.image('box tray', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/box tray.png');
                this.load.image('cup', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Green cup.png');
                this.load.image('cake', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Green cake.png');
                this.load.image('car', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Green car.png');
                this.load.image('greenBottle', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/Green bottle.png');
                this.load.image('orangecar', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/orenge car.png');
                this.load.image('orangecake', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/orenge cake.png');
                this.load.image('orangejar', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/orenge cup.png');
                this.load.image('orangebottle', window.baseUrl + 'assets/gradeAssets/ALAS-01-G6/orange bottle.png');

               // SpinnerDialog.hide();
        },

        create: function () {

                this.state.start('ALAS_01_G6level1');

        },
}