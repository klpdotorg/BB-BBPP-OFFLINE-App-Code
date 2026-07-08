Game.preloader_NSD_5A_G6 = function (game) {
    this.preloadBar = null;
};

Game.preloader_NSD_5A_G6.prototype = {
    preload: function () {
        console.log("nsd 5a");
        //this.load.json('translations','js/lang.json');
        this.load.video('nsd5a_1',window.baseUrl+ 'assets/demoVideos/NSD-5A-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow',window.baseUrl+ 'assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb',window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_5A_G6_JSON.bulbBtnJson);

        this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png', null, NSD_5A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png', null, NSD_5A_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png', null, NSD_5A_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png', null, NSD_5A_G6_JSON.replyJson);
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.atlas('newCommonBackBtnForAll', window.baseUrl+ 'assets/commonAssets/newBackBtn.png', null, NSD_5A_G6_JSON.HomeBtnJson);

        // Loading all gradeAssets
        this.load.image('4_color_box1', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/4 colore Box_1.png');
        this.load.image('4_color_box2', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/4 colore Box_2.png');
        this.load.image('BG', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/BG.png');
        this.load.atlas('green_coin_anim', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Green coin going.png', null, NSD_5A_G6_JSON.GreenCoinAnimJSON);
        this.load.atlas('green_lever', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Green Liver.png', null, NSD_5A_G6_JSON.GreenLeverJson);
        this.load.image('green_money_box', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/green Mony Box.png');
        this.load.image('green_coin', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Coin_2.png');
        this.load.atlas('orange_coin_anim', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Orange coin going.png', null, NSD_5A_G6_JSON.OrangeCoinAnimJson);
        this.load.image('orange_coin', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Coin_3.png');
        this.load.image('orange_money_box', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Orange Mony Box.png');
        this.load.atlas('orange_lever', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Orenge Liver.png', null, NSD_5A_G6_JSON.OrangeLeverJson);
        this.load.atlas('yellow_coin_anim', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Yellow coin going.png', null, NSD_5A_G6_JSON.YellowCoinAnimJson);
        this.load.atlas('yellow_lever', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Yellow Liver.png', null, NSD_5A_G6_JSON.YellowLeverJson);
        this.load.image('yellow_money_box', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Yellow Mony Box.png');
        this.load.image('yellow_coin', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Coin_1.png');
        this.load.image('panel1', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/panle_1.png');
        this.load.image('panel2', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/panle_2.png');
        this.load.image('panel3', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/panle_3.png');
        this.load.image('panel4', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/panle_4.png');
        this.load.image('panel5', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/panle_5.png');
        this.load.image('side_panel', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/side pnale.png');
        this.load.image('coin_machine_panel', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/coinMachinePannel1.png');
        this.load.image('text_box1', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Text box_1.png');
        this.load.image('square_text_box', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Text box_2.png');
        this.load.atlas('counter_box', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Text box_5.png', null, NSD_5A_G6_JSON.CounterBoxJson );
        this.load.image('text_box4', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/Text box_4.png');
        this.load.image('glow', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/glow.png');
        this.load.image('plus_sign', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/plusSign.png');

        this.load.atlas('numberVSmall', window.baseUrl+ 'assets/gradeAssets/NSD-5A-G6/numberVSmall.png', null, NSD_5A_G6_JSON.NumberVSmallJson );
        this.load.atlas('tickbtn', window.baseUrl+ 'assets/commonAssets/tickBtn.png', null, NSD_5A_G6_JSON.TickbtnJson);
        this.load.image('numpadbg', window.baseUrl+ 'assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/commonAssets/number pad.png', null, NSD_5A_G6_JSON.numberpadJson);
    },

    create: function () {

        this.state.start('NSD_5A_G6level1');

    },
}