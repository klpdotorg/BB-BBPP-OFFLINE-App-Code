Game.preloader_AL_ES1_G8 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_ES1_G8.prototype = {
        preload: function () {

                // this.load.video('alas01_1','demoVideos/ALAS-01-G6_1.mp4');   //* include demo video of game.
                // this.load.video('alas01_2','demoVideos/ALAS-01-G6_2.mp4');   //* include demo video of game.
                this.load.video('ALESG8', window.baseUrl + 'assets/demoVideos/AL-ES-G8 new (1).mp4');   //* include demo video of GMLA-01-G7 game.

                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', window.baseUrl + 'assets/commonAssets/bulb.png', null, AL_ES_G7_JSON.bulbBtnJson);
                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, AL_ES_G7_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, AL_ES_G7_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, AL_ES_G7_JSON.starAnimJson);

                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, AL_ES_G7_JSON.replyJson);
                this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, AL_ES_G7_JSON.btnJson);
                this.load.atlas('tickbtn', window.baseUrl + 'assets/commonAssets/tick.png', null, AL_ES_G7_JSON.tickJson);
                this.load.atlas('devideSign', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/symbol_1.png', null, AL_ES_G7_JSON.devideSign);
                this.load.atlas('flipBtn', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/symbol_3.png', null, AL_ES_G7_JSON.flipbtnJson);
                this.load.atlas('newBox', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/new box.png', null, AL_ES_G7_JSON.SquareBoxJson);

                //navbar
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');

                //time
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');

                //background
                this.load.image('Bg new', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/Bg.png');


                //text boxes
                this.load.image('textbox1', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/Text box_1.png');
                this.load.image('textbox2', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/Text box_2.png'); //
                //this.load.image('textbox3',window.baseUrl +'assets/gradeAssets/AL-ES-G8/Text box_3.png');

                //Adding weight 
                this.load.image('base', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/weight gauge part_4.png');
                this.load.image('beam', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/weight gauge part_3.png');
                this.load.image('weight gauge part_1', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/weight gauge part_1.png');
                this.load.image('weight gauge part_2', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/weight gauge part_2.png');
                this.load.image('panel', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/panle_1.png');
                this.load.image('pink2', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/pink_2.png');
                this.load.image('pink3', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/pink_3.png');
                this.load.image('green2', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/green_2.png');
                this.load.image('green3', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/green_3.png');
                this.load.image('arrow1', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/arrow _1.png');
                this.load.image('arrow2', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/arrow _2.png');

                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/Numberpad.png', null, AL_ES_G7_JSON.numberPad)
                this.load.image('numpadbg', window.baseUrl + 'assets/gradeAssets/AL-ES-G8/numbg.png');
        },

        create: function () {

                this.state.start('AL_ES1_G8level1');

        },
}