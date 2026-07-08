Game.preloader_gmcr_01 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_gmcr_01.prototype = {
        preload: function () {
                console.log("gmcr");
                this.load.image('table', window.baseUrl + 'assets/gradeAssets/GMCR-01-G6/bg 2.png');
                this.load.atlas('circle1', window.baseUrl + 'assets/gradeAssets/GMCR-01-G6/01.png', window.baseUrl + 'assets/commonAssets/01.json');
                this.load.atlas('circle', window.baseUrl + 'assets/gradeAssets/GMCR-01-G6/1.png', window.baseUrl + 'assets/commonAssets/1.json');
                this.load.atlas('circle2', window.baseUrl + 'assets/gradeAssets/GMCR-01-G6/2.png', window.baseUrl + 'assets/commonAssets/2.json');
                this.load.image('commonBg2', window.baseUrl + 'assets/commonAssets/commonBg2.png');
                this.load.image('Level42C_Topbar', window.baseUrl + 'assets/commonAssets/topbar.png');
                this.load.atlas('newCommonBackBtnForAll', window.baseUrl + 'assets/commonAssets/newBackBtn.png', window.baseUrl + 'assets/commonAssets/newBackBtn.json');
                this.load.image('Level42C_timer', window.baseUrl + 'assets/commonAssets/timerBg.png');
                this.load.atlas('grade11_speaker', window.baseUrl + 'assets/commonAssets/grade11_speaker.png', window.baseUrl + 'assets/commonAssets/grade11_speaker.json');
                this.load.atlas('starAnim1', window.baseUrl + 'assets/commonAssets/starAnim1.png', window.baseUrl + 'assets/commonAssets/starAnim.json');


                this.load.atlas('rightBtn', window.baseUrl + 'assets/gradeAssets/GMCR-01-G6/tickBtn.png', window.baseUrl + 'assets/commonAssets/tickBtn.json');
                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');
                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, GMCR_01_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, GMCR_01_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, GMCR_01_G6_JSON.starAnimJson);
                this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/replayBtn.png', null, GMCR_01_G6_JSON.replayJson);
                this.load.atlas('tickbtn', window.baseUrl + 'assets/commonAssets/tick.png', null, GMCR_01_G6_JSON.tickJson);


                //navbar
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');

                //time
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');

                this.load.audio('wrongSound', window.baseUrl + 'sounds/WrongCelebrationSound.mp3');
                this.load.audio('ClickSound', window.baseUrl + 'sounds/ClickSound.mp3');
                this.load.audio('celebrationSound', window.baseUrl + 'sounds/celebration.mp3');


        },

        create: function () {

                this.state.start('GMCR_01_G6level1');

        },
}