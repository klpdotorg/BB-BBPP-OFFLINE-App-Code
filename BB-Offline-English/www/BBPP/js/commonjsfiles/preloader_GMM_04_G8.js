Game.preloader_GMM_04_G8 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMM_04_G8.prototype = {
  preload: function () {
    // this.load.video('ML1_1', 'demoVideos/ML1-G7_1.mp4');   //* include demo video of ML-2 game.
    // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

    this.load.atlas(
      "bulb",
      window.baseUrl + "assets/commonAssets/bulb.png",
      null,
      GMM_04_G8_JSON.bulbBtnJson
    );
    this.load.image(
      "skipArrow",
      window.baseUrl + "assets/commonAssets/skipArrow.png"
    );

    this.load.atlas(
      "backbtn",
      window.baseUrl + "assets/commonAssets/backbtn.png",
      null,
      GMM_04_G8_JSON.backbtnJson
    );
    this.load.atlas(
      "CommonSpeakerBtn",
      window.baseUrl + "assets/commonAssets/speaker.png",
      null,
      GMM_04_G8_JSON.speakerJson
    );
    this.load.atlas(
      "starAnim",
      window.baseUrl + "assets/commonAssets/starAnim.png",
      null,
      GMM_04_G8_JSON.starAnimJson
    );
    this.load.atlas(
      "replay",
      window.baseUrl + "assets/commonAssets/reply.png",
      null,
      GMM_04_G8_JSON.replyJson
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
      GMM_04_G8_JSON.homebtnJson
    );
    this.load.atlas(
      "CommonNextBtn",
      window.baseUrl + "assets/commonAssets/nextBtn.png",
      null,
      GMM_04_G8_JSON.nextbtnJson
    );
    this.load.image(
      "bg",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/BG.png"
    );

    this.load.image(
      "dotedRectangle",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/doted objct_1.png"
    );
    this.load.image(
      "dotedTriangle",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/doted objct_2.png"
    );
    this.load.image(
      "dotedSquare",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/doted box 1.png"
    );
    this.load.image(
      "dotedParallogram",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/doted box 2.png"
    );

    this.load.image(
      "lineTr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/line_1M.png"
    );
    this.load.image(
      "linear1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/orange arrow_2.png"
    );
    this.load.image(
      "linear2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/orange arrow_3.png"
    );
    this.load.image(
      "linear3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/orange arrow_4.png"
    );

    this.load.image(
      "linetrBig",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/line_3Big.png"
    );

    this.load.image(
      "line2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/line_2M.png"
    );
    this.load.image(
      "line3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/line_3M.png"
    );
    this.load.image(
      "line3hr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/line_3MHr.png"
    );

    this.load.image(
      "Box2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/box2.png"
    );
    this.load.atlas(
      "box1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/box1.png",
      null,
      GMM_04_G8_JSON.box1
    );

    this.load.image(
      "answerBox",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box.png"
    );
    this.load.atlas(
      "textBox2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_2.png",
      null,
      GMM_04_G8_JSON.textBox2
    );

    this.load.atlas(
      "rect2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_3.1.png",
      null,
      GMM_04_G8_JSON.rect2
    );

    this.load.atlas(
      "parl1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/parelel1.png",
      null,
      GMM_04_G8_JSON.parl1
    );
    this.load.atlas(
      "parl2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/parelel2.png",
      null,
      GMM_04_G8_JSON.parl2
    );
    this.load.atlas(
      "parl3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/parelel3.png",
      null,
      GMM_04_G8_JSON.parl3
    );

    this.load.atlas(
      "eqTr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_8.0.png",
      null,
      GMM_04_G8_JSON.eqtr
    );
    this.load.atlas(
      "scalTr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_8.1.png",
      null,
      GMM_04_G8_JSON.scltr
    );
    this.load.atlas(
      "isoTr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_8.2.png",
      null,
      GMM_04_G8_JSON.isotr
    );

    this.load.atlas(
      "pinkParl",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_9.0.png",
      null,
      GMM_04_G8_JSON.pinkParalogram
    );
    this.load.atlas(
      "pinkBox",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/pink box.png",
      null,
      GMM_04_G8_JSON.pinbox
    );

    this.load.atlas(
      "pinkrect1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/rectshape1.png",
      null,
      GMM_04_G8_JSON.pinkRect1
    );
    this.load.atlas(
      "pinkrect2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/rectshape2.png",
      null,
      GMM_04_G8_JSON.pinkRect2
    );
    this.load.atlas(
      "pinkrect3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/rectshape3.png",
      null,
      GMM_04_G8_JSON.pinkRect3
    );

    this.load.atlas(
      "TickBtn",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/TickBtn.png",
      null,
      GMM_04_G8_JSON.tickJson
    );
    this.load.atlas(
      "Numberpad",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/number pad.png",
      null,
      GMM_04_G8_JSON.numberpadJson
    );
    this.load.image(
      "numpadbg",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/numbg.png"
    );

    // gmm4 specificwindow.baseUrl +  assets
    this.load.image(
      "panle1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_1.png"
    );
    this.load.image(
      "panle2",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_2.png"
    );
    this.load.image(
      "panle3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_3.png"
    );
    this.load.image(
      "panle4",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_4.png"
    );
    this.load.image(
      "panle5",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_5.png"
    );
    this.load.atlas(
      "panle6",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_6.png",
      null,
      GMM_04_G8_JSON.panle6
    );
    this.load.atlas(
      "panle7",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/panle_7.png",
      null,
      GMM_04_G8_JSON.panle7
    );

    this.load.image(
      "wtArrow",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/wight arrow.png"
    );
    this.load.image(
      "blueCircle",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/blue doted circle.png"
    );
    this.load.image(
      "Circle",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/circle shape.png"
    );

    this.load.atlas(
      "btn1",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/btn_1.png",
      null,
      GMM_04_G8_JSON.btn1
    );
    this.load.atlas(
      "eraser",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/btn_2.png",
      null,
      GMM_04_G8_JSON.btn2
    );
    this.load.image(
      "cylinder",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/cylinder shape.png"
    );
    this.load.image(
      "textBox1table",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_1.png"
    );
    this.load.image(
      "textBox2table",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_2 (2).png"
    );
    this.load.image(
      "textBox7",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_7.png"
    );
    this.load.image(
      "textBox8",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_8.png"
    );
    this.load.image(
      "textBox9",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_9.png"
    );
    this.load.image(
      "textBox10",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_10.png"
    );
    this.load.image(
      "textBox11",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_11.png"
    );
    this.load.image(
      "textBox12",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_120001.png"
    );
    this.load.image(
      "textBox12Y",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_120002.png"
    );
    this.load.image(
      "orangeArrow",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/orange arrow.png"
    );
    this.load.image(
      "orangeTr",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/orange arrow_1.png"
    );
    this.load.image(
      "circleDoted",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/Shape_1.png"
    );
    this.load.image(
      "textBox12new",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_12.png"
    );

    this.load.atlas(
      "textBox3",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_3.png",
      null,
      GMM_04_G8_JSON.textbox3
    );
    this.load.atlas(
      "textBox4",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_4.png",
      null,
      GMM_04_G8_JSON.textBox4
    );
    this.load.atlas(
      "textBox5",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_5.png",
      null,
      GMM_04_G8_JSON.textBox5
    );
    this.load.atlas(
      "textBox6",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_6.png",
      null,
      GMM_04_G8_JSON.textBox6
    );
    this.load.atlas(
      "circlenew",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/circle shape new.png",
      null,
      GMM_04_G8_JSON.circle
    );

    this.load.image(
      "redBox",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_14.png"
    );
    this.load.atlas(
      "textbox13",
      window.baseUrl + "assets/gradeAssets/GMM-04-G8/text box_13.png",
      null,
      GMM_04_G8_JSON.textbox13
    );
  },

  create: function () {
    this.state.start("GMM_04_G8level1");
  },
};
