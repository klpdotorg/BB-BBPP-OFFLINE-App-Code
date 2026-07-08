Game.preloader_GMM_05_G8 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMM_05_G8.prototype = {
  preload: function () {
    // this.load.video('ML1_1', 'demoVideos/ML1-G7_1.mp4');   //* include demo video of ML-2 game.
    // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

    this.load.atlas(
      "bulb",
      window.baseUrl + "assets/commonAssets/bulb.png",
      null,
      GMM_05_G8_JSON.bulbBtnJson
    );
    this.load.image(
      "skipArrow",
      window.baseUrl + "assets/commonAssets/skipArrow.png"
    );

    this.load.atlas(
      "backbtn",
      window.baseUrl + "assets/commonAssets/backbtn.png",
      null,
      GMM_05_G8_JSON.backbtnJson
    );
    this.load.atlas(
      "CommonSpeakerBtn",
      window.baseUrl + "assets/commonAssets/speaker.png",
      null,
      GMM_05_G8_JSON.speakerJson
    );
    this.load.atlas(
      "starAnim",
      window.baseUrl + "assets/commonAssets/starAnim.png",
      null,
      GMM_05_G8_JSON.starAnimJson
    );
    this.load.atlas(
      "replay",
      window.baseUrl + "assets/commonAssets/reply.png",
      null,
      GMM_05_G8_JSON.replyJson
    );
    this.load.image(
      "navBar",
      window.baseUrl + "assets/commonAssets/navBar.png"
    );
    this.load.image(
      "timebg",
      window.baseUrl + "assets/commonAssets/timebg.png"
    );
    this.load.image("hand", window.baseUrl + "assets/commonAssets/hand.png");
    this.load.atlas(
      "CommonHomeBtn",
      window.baseUrl + "assets/commonAssets/homeBtn.png",
      null,
      GMM_05_G8_JSON.homebtnJson
    );
    this.load.atlas(
      "CommonNextBtn",
      window.baseUrl + "assets/commonAssets/nextBtn.png",
      null,
      GMM_05_G8_JSON.nextbtnJson
    );
    this.load.image(
      "bg",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/BG.png"
    );

    this.load.image(
      "dottedCircle",
      window.baseUrl +
        "assets/gradeAssets/GMM-05-G8/blue doted circle 10 by 1.png"
    );
    this.load.atlas(
      "box1",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/box1.png",
      null,
      GMM_05_G8_JSON.box1
    );
    this.load.image(
      "Box2",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/box2.png"
    );
    this.load.atlas(
      "btn1",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/btn_1.png",
      null,
      GMM_05_G8_JSON.btn1
    );
    this.load.atlas(
      "eraser",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/btn_2.png",
      null,
      GMM_05_G8_JSON.btn2
    );
    this.load.image(
      "cylinder",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/cylinder shape.png"
    );

    this.load.image(
      "orangeArrow",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/orange arrow.png"
    );
    this.load.image(
      "orangeTr",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/orange arrow_1.png"
    );
    this.load.image(
      "panle1",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/panle_1.png"
    );
    this.load.image(
      "panle3",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/panle_3.png"
    );
    this.load.image(
      "panle4",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/panle_4.png"
    );
    this.load.atlas(
      "panle7",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/panle_7.png",
      null,
      GMM_05_G8_JSON.panle7
    );
    this.load.image(
      "answerBox",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box.png"
    );
    this.load.atlas(
      "textBox2",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_2.png",
      null,
      GMM_05_G8_JSON.textBox2
    );
    this.load.image(
      "textBox1table",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_1.png"
    );
    this.load.image(
      "textBox2table",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_2 (2).png"
    );
    this.load.image(
      "textBox12",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_120001.png"
    );
    this.load.image(
      "textBox12Y",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_120002.png"
    );

    this.load.atlas(
      "textBox3",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_3.png",
      null,
      GMM_05_G8_JSON.textbox3
    );
    this.load.atlas(
      "textBox4",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_4.png",
      null,
      GMM_05_G8_JSON.textBox4
    );
    this.load.atlas(
      "TickBtn",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/TickBtn.png",
      null,
      GMM_05_G8_JSON.tickJson
    );

    this.load.image(
      "blueCircle",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/blue doted circle.png"
    );
    this.load.image(
      "text_box_15",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/text box_15.png"
    );
    this.load.image(
      "transCylinder",
      window.baseUrl + "assets/gradeAssets/GMM-05-G8/cylinder shape 2.png"
    );
    // this.load.image('transCylinder', window.baseUrl + 'assets/gradeAssets/GMM-05-G8/cylinder trans shape.png');
  },

  create: function () {
    this.state.start("GMM_05_G8level1");
  },
};
