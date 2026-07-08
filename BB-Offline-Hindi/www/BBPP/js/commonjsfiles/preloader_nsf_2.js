Game.preloader_nsf_2 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_nsf_2.prototype = {
  preload: function () {
    console.log("nsf 2");
    console.log("inside preloader of nsf");

    this.load.video('nsf2_1', window.baseUrl + 'assets/demoVideos/NSF-2-G6_1.mp4');   //* include demo video of nsf-2 game.
    this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

    this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, NSF_2_G6_JSON.backbtnJson);
    this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, NSF_2_G6_JSON.speakerJson);
    this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, NSF_2_G6_JSON.starAnimJson);
    this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, NSF_2_G6_JSON.btnJson);

    this.load.image('tittleBar', window.baseUrl + 'assets/commonAssets/tittleBar.png');
    this.load.image('background', window.baseUrl + 'assets/commonAssets/bg.png');
    this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
    this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
    this.load.image('topicOutline', window.baseUrl + 'assets/commonAssets/topicOutline.png');


    this.load.image('bg', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/Bg.png');
    this.load.image('numpadbg', window.baseUrl + 'assets/commonAssets/numbg.png');
    this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/number pad.png', null, NSF_2_G6_JSON.numberpadJson);
    this.load.atlas('HorizontalCube', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/green & yellow blocks_horizontal.png', null, NSF_2_G6_JSON.HorizontalCubeJson);
    this.load.atlas('VerticalCube', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/blue & yellow blocks_vertica.png', null, NSF_2_G6_JSON.verticalCubeJson);
    this.load.atlas('SquareBox', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/NSF-2-G6 new box.png', null, NSF_2_G6_JSON.SquareBoxJson);

    this.load.image('numberBox', window.baseUrl + 'assets/gradeAssets/NSF-2-G6/number box.png');

  },

  create: function () {

    this.state.start('NSF_2_G6level1');

  },
}