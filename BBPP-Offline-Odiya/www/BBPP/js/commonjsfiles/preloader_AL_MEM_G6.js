Game.preloader_AL_MEM_G6 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_MEM_G6.prototype = {
  preload: function () {
    console.log("preloader_AL_MEM_G6");
    this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');

    this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, AL_MEM_G6_JSON.backbtnJson);
    this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, AL_MEM_G6_JSON.speakerJson);
    this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, AL_MEM_G6_JSON.starAnimJson);
    this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, AL_MEM_G6_JSON.replyJson);
    this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, AL_MEM_G6_JSON.btnJson);
    this.load.image('hand', window.baseUrl + 'assets/commonAssets/hand.png');

    this.load.image('tittleBar', window.baseUrl + 'assets/commonAssets/tittleBar.png');
    this.load.image('background', window.baseUrl + 'assets/commonAssets/bg.png');
    this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
    this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
    this.load.image('topicOutline', window.baseUrl + 'assets/commonAssets/topicOutline.png');
    this.load.image('BG', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/AL-memory game BG.gif');
    this.load.image('outside', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/Image 1.1.png');
    this.load.image('inside', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/Image 1.0.png');
    this.load.image('in', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/Image 1.2.png');
    this.load.image('inHighlight', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/Image 2.2.png');

    this.load.atlas('Thumbs_UP', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/thums Up.png', null, AL_MEM_G6_JSON.thums_upJSon);
    this.load.atlas('Thumbs_Down', window.baseUrl + 'assets/gradeAssets/AL-MEM-G6/thums down.png', null, AL_MEM_G6_JSON.thums_downJson);

  },

  create: function () {

    this.state.start('AL_MEM_G6level1');

  },
}