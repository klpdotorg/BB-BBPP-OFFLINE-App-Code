Game.preloader_NS_DIN_G8 = function (game) {
  this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_NS_DIN_G8.prototype = {
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
      NS_DIN_G8_JSON.bulbBtnJson
    );

    this.load.atlas(
      "backbtn",
      window.baseUrl + "assets/commonAssets/backbtn.png",
      null,
      NS_DIN_G8_JSON.backbtnJson
    );
    this.load.atlas(
      "CommonSpeakerBtn",
      window.baseUrl + "assets/commonAssets/speaker.png",
      null,
      NS_DIN_G8_JSON.speakerJson
    );
    this.load.atlas(
      "starAnim",
      window.baseUrl + "assets/commonAssets/starAnim.png",
      null,
      NS_DIN_G8_JSON.starAnimJson
    );
    this.load.atlas(
      "replay",
      window.baseUrl + "assets/commonAssets/reply.png",
      null,
      NS_DIN_G8_JSON.replyJson
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
      NS_DIN_G8_JSON.homebtnJson
    );
    this.load.atlas(
      "CommonNextBtn",
      window.baseUrl + "assets/commonAssets/nextBtn.png",
      null,
      NS_DIN_G8_JSON.nextbtnJson
    );

    this.load.atlas(
      "TickBtn",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/TickBtn.png",
      null,
      NS_DIN_G8_JSON.tickJson
    );
    this.load.atlas(
      "thumbsDown",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/thumsdown_1.png",
      null,
      NS_DIN_G8_JSON.thumsdown_1
    );
    this.load.atlas(
      "thumbsUp",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/thumsup_1.png",
      null,
      NS_DIN_G8_JSON.thumsup_1
    );

    this.load.image(
      "numpadbg",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/numbg.png"
    );
    this.load.atlas(
      "Numberpad",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/number pad.png",
      null,
      NS_DIN_G8_JSON.numberpadJson
    );

    this.load.image(
      "5Rupee",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/5 Rs.0.png"
    );
    this.load.image(
      "10Rupee",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/10 Rs.0.png"
    );
    this.load.image(
      "20Rupee",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/20 Rs.0.png"
    );
    this.load.image(
      "50Rupee",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/50 Rs.0.png"
    );

    this.load.image(
      "5Wallet",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/5 Rs.1.png"
    );
    this.load.image(
      "10Wallet",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/10 Rs.1.png"
    );
    this.load.image(
      "20Wallet",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/20 Rs.1.png"
    );
    this.load.image(
      "50Wallet",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/50 Rs.1.png"
    );

    this.load.image(
      "Apple",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/apple.png"
    );
    this.load.image(
      "Orange",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/orange.png"
    );
    this.load.image(
      "Pear",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/cashew apple.png"
    );
    this.load.image(
      "Onion",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/onian.png"
    );
    this.load.image(
      "Potato",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/potato.png"
    );
    this.load.image(
      "Tomato",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/tommoto.png"
    );

    this.load.image(
      "Bg",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/bg.png"
    );
    this.load.image(
      "Box1",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/box_1.png"
    );
    this.load.image(
      "Box2",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/box_2.png"
    );
    this.load.image(
      "Box3",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/box_3.png"
    );
    this.load.image(
      "Box4",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/box_4.png"
    );
    this.load.image(
      "vendorHand",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/hand.png"
    );

    this.load.image(
      "Table1",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/table_1.png"
    );
    this.load.image(
      "Table2",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/table_2.png"
    );
    this.load.image(
      "Table3",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/table_3.png"
    );
    this.load.image(
      "Table4",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/table_4.png"
    );
    this.load.image(
      "Table5",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/table_5.png"
    );

    this.load.image(
      "TextBox",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/text box.png"
    );

    this.load.image(
      "wallet",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/wallet.png"
    );
    this.load.image(
      "weightMachine",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/weight mission.png"
    );
    this.load.image(
      "valueMachine",
      window.baseUrl + "assets/gradeAssets/NS_DIN_G8/weight mission_2.png"
    );
  },

  create: function () {
    this.state.start("NS_DIN_G8level1");
  },
};
