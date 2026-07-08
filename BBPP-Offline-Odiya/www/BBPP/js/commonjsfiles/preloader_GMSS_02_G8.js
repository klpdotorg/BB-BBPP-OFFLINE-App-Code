Game.preloader_GMSS_02_G8 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMSS_02_G8.prototype = {
  preload: function () {
    //  this.load.video('nsrp02_1','demoVideos/AL-SUB-G7.mp4');   //* include demo video of game.
    this.load.image(
      "skipArrow",
      window.baseUrl + "assets/commonAssets/skipArrow.png"
    );

    this.load.atlas(
      "bulb",
      window.baseUrl + "assets/commonAssets/bulb.png",
      null,
      GMSS_02_G8_JSON.bulbBtnJson
    );

    this.load.atlas(
      "backbtn",
      window.baseUrl + "assets/commonAssets/backbtn.png",
      null,
      GMSS_02_G8_JSON.backbtnJson
    );
    this.load.atlas(
      "CommonSpeakerBtn",
      window.baseUrl + "assets/commonAssets/speaker.png",
      null,
      GMSS_02_G8_JSON.speakerJson
    );
    this.load.atlas(
      "starAnim",
      window.baseUrl + "assets/commonAssets/starAnim.png",
      null,
      GMSS_02_G8_JSON.starAnimJson
    );
    this.load.atlas(
      "replay",
      window.baseUrl + "assets/commonAssets/reply.png",
      null,
      GMSS_02_G8_JSON.replyJson
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
      GMSS_02_G8_JSON.homebtnJson
    );
    this.load.atlas(
      "CommonNextBtn",
      window.baseUrl + "assets/commonAssets/nextBtn.png",
      null,
      GMSS_02_G8_JSON.nextbtnJson
    );

    this.load.image(
      "BG1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/bg.png"
    );

    this.load.image(
      "numpadbg",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/numbg.png"
    );
    this.load.atlas(
      "Numberpad",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/number pad.png",
      null,
      GMSS_02_G8_JSON.numberpadJson
    );

    this.load.atlas(
      "TickBtn",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/TickBtn.png",
      null,
      GMSS_02_G8_JSON.TickbtnJson
    );

    this.load.atlas(
      "Up",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/arrow_1.png",
      null,
      GMSS_02_G8_JSON.UpJson
    );
    this.load.atlas(
      "Down",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/arrow_2.png",
      null,
      GMSS_02_G8_JSON.DownJson
    );
    this.load.atlas(
      "Right",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/arrow_3.png",
      null,
      GMSS_02_G8_JSON.RightJson
    );
    this.load.atlas(
      "Left",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/arrow_4.png",
      null,
      GMSS_02_G8_JSON.LeftJson
    );

    this.load.atlas(
      "TrackWater",
      window.baseUrl +
        "assets/gradeAssets/GMSS_02_G8/extra/track and water.png",
      null,
      GMSS_02_G8_JSON.TrackWaterJson
    );

    this.load.atlas(
      "track_1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/track_1.1.png",
      null,
      GMSS_02_G8_JSON.Trac1Json
    );
    this.load.atlas(
      "track_2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/track_1.2.png",
      null,
      GMSS_02_G8_JSON.Track2Json
    );
    this.load.atlas(
      "water_1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/water_2.1.png",
      null,
      GMSS_02_G8_JSON.Water1Json
    );
    this.load.atlas(
      "water_2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/water_2.2.png",
      null,
      GMSS_02_G8_JSON.Water2Json
    );

    this.load.image(
      "blackCircle",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/black circle.png"
    );
    this.load.image(
      "blueCircle",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/blue circle.png"
    );
    this.load.image(
      "pinkCircle",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/pink circle.png"
    );
    this.load.image(
      "redCircle",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/red circle.png"
    );
    this.load.image(
      "blueSquare",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/blue square.png"
    );
    this.load.image(
      "pinkSquare",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/pink square.png"
    );
    this.load.image(
      "redSquare",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/red square.png"
    );

    this.load.image(
      "whiteCircle",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/blue circle new.png"
    );

    this.load.image(
      "distanceBox",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/text box.png"
    );
    this.load.image(
      "distanceBox2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/text box 2.png"
    );

    this.load.atlas(
      "Text box_5",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/text box_5.png",
      null,
      GMSS_02_G8_JSON.textAnsJson
    );

    this.load.image(
      "directionSymbol",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/box 2.png"
    );

    this.load.image(
      "road",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/raod.png"
    );

    this.load.image(
      "bridge",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/extra/bridge.png"
    );

    this.load.image(
      "LeftDown",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line corner_1.png"
    );
    this.load.image(
      "RightDown",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line corner_2.png"
    );
    this.load.image(
      "RightUp",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line corner_3.png"
    );
    this.load.image(
      "LeftUp",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line corner_4.png"
    );

    this.load.atlas(
      "eraser",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Btn_2.png",
      null,
      GMSS_02_G8_JSON.eraserJson
    );

    this.load.image(
      "dottedLine3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line_1.png"
    );
    this.load.image(
      "dottedLine5",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line_2.png"
    );
    this.load.image(
      "dottedLine1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Doted line_3.png"
    );

    //Map 1
    this.load.atlas(
      "place1_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_1.png",
      null,
      GMSS_02_G8_JSON.Place1_M1
    );
    this.load.atlas(
      "place2_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_2.1.png",
      null,
      GMSS_02_G8_JSON.Place2_M1
    );
    this.load.atlas(
      "place3_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_3.1.png",
      null,
      GMSS_02_G8_JSON.Place3_M1
    );
    this.load.atlas(
      "place4_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_4.1.png",
      null,
      GMSS_02_G8_JSON.Place4_M1
    );
    this.load.atlas(
      "place5_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_5.1.png",
      null,
      GMSS_02_G8_JSON.Place5_M1
    );
    this.load.atlas(
      "place6_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_6.1.png",
      null,
      GMSS_02_G8_JSON.Place6_M1
    );
    this.load.atlas(
      "extra1_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_7.1.png",
      null,
      GMSS_02_G8_JSON.Extra1_M1
    );
    this.load.atlas(
      "extra2_M1",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_1/image_8.1.png",
      null,
      GMSS_02_G8_JSON.Extra2_M1
    );

    //Map 2
    this.load.atlas(
      "place1_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_1.1.png",
      null,
      GMSS_02_G8_JSON.Place1_M2
    );
    this.load.atlas(
      "place2_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_2.2.png",
      null,
      GMSS_02_G8_JSON.Place2_M2
    );
    this.load.atlas(
      "place3_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_3.2.png",
      null,
      GMSS_02_G8_JSON.Place3_M2
    );
    this.load.atlas(
      "place4_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_4.2.png",
      null,
      GMSS_02_G8_JSON.Place4_M2
    );
    this.load.atlas(
      "place5_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_5.2.png",
      null,
      GMSS_02_G8_JSON.Place5_M2
    );
    this.load.atlas(
      "place6_M2",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_2/image_6.2.png",
      null,
      GMSS_02_G8_JSON.Place6_M2
    );

    //Map 3
    this.load.atlas(
      "place1_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_1.2.png",
      null,
      GMSS_02_G8_JSON.Place1_M3
    );
    this.load.atlas(
      "place2_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_2.3.png",
      null,
      GMSS_02_G8_JSON.Place2_M3
    );
    this.load.atlas(
      "place3_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_3.3.png",
      null,
      GMSS_02_G8_JSON.Place3_M3
    );
    this.load.atlas(
      "place4_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_4.3.png",
      null,
      GMSS_02_G8_JSON.Place4_M3
    );
    this.load.atlas(
      "place5_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_5.3.png",
      null,
      GMSS_02_G8_JSON.Place5_M3
    );
    this.load.atlas(
      "place6_M3",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_3/image_6.3.png",
      null,
      GMSS_02_G8_JSON.Place6_M3
    );

    //Map 4
    this.load.atlas(
      "place1_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_1.3.png",
      null,
      GMSS_02_G8_JSON.Place1_M4
    );
    this.load.atlas(
      "place2_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_2.4.png",
      null,
      GMSS_02_G8_JSON.Place2_M4
    );
    this.load.atlas(
      "place3_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_3.4.png",
      null,
      GMSS_02_G8_JSON.Place3_M4
    );
    this.load.atlas(
      "place4_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_4.4.png",
      null,
      GMSS_02_G8_JSON.Place4_M4
    );
    this.load.atlas(
      "place5_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_5.4.png",
      null,
      GMSS_02_G8_JSON.Place5_M4
    );
    this.load.atlas(
      "place6_M4",
      window.baseUrl + "assets/gradeAssets/GMSS_02_G8/Page_4/image_6.4.png",
      null,
      GMSS_02_G8_JSON.Place6_M4
    );
  },

  create: function () {
    this.state.start("GMSS_02_G8level1");
  },
};
