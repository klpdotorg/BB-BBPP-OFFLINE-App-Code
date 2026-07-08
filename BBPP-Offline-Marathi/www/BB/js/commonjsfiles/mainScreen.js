Game.mainScreen = function () {

};

Game.mainScreen.prototype = {

    init: function (app_Mode) {
        _this = this;
        _this.app_Mode = app_Mode;
    },

    preload: function () {

        _this.game.load.atlas('regandstsrtBtn', 'BBPP/assets/regandstsrtBtn.png', 'BBPP/assets/regandstsrtBtn.json');
        _this.game.load.atlas('regloding', 'BBPP/assets/loding.png', 'BBPP/assets/loding.json');
    },

    create: function (game) {
        console.log("i'm inside mainScreen");
        var backBg = this.add.sprite(this.world.centerX, this.world.centerY, 'registrationbg');
        backBg.scale.setTo(1);
        backBg.anchor.setTo(0.5);


        var titleBar_start = this.add.graphics(0, 0);
        titleBar_start.anchor.setTo(0.5);
        titleBar_start.lineStyle(2, 0x000000, 0.8);
        titleBar_start.beginFill(0x4E342E, 1);
        titleBar_start.drawRect(0, 0, 540, 80);


        var titleTxt_start = this.add.text(this.world.centerX - 140, 45, "Building Blocks");
        titleTxt_start.x = Math.round(titleTxt_start.x);
        titleTxt_start.anchor.setTo(0.5);
        titleTxt_start.align = 'center';
        titleTxt_start.font = 'regfont4';
        titleTxt_start.fontSize = '22pt';
        titleTxt_start.fontWeight = 500;
        titleTxt_start.fill = '#FFFFFF';
        titleTxt_start.wordWrap = true;
        titleTxt_start.wordWrapWidth = 500;

        var cloud1_5 = this.add.sprite(150, 310, 'mainCloud');//190-40,210+100
        cloud1_5.scale.setTo(1.3, 1.3);
        // cloud1_5.anchor.setTo(0.5);
        cloud1_5.inputEnabled = true;
        cloud1_5.input.useHandCursor = true;
        cloud1_5.events.onInputDown.add(() => {
            window.app_Grade = "BB";
            bbreglogin.initializeDB();
            _this.game.state.start('appLoginScreen', true, false);
        }, _this);
        var cloud1_5Txt = this.add.text(210, 315, ' \n' + 'Grade 1-5' + '\n ');//210-40,198+100, 170, 298, 
        // cloud1_5Txt.anchor.setTo(0.5);
        cloud1_5Txt.align = 'center';
        cloud1_5Txt.font = 'gradefont';
        cloud1_5Txt.fontSize = 32;//34
        cloud1_5Txt.fontWeight = 'normal';
        cloud1_5Txt.fill = '#563814';
        cloud1_5Txt.wordWrap = true;
        cloud1_5Txt.wordWrapWidth = 500;

        var cloud6_8 = this.add.sprite(150, 510, 'mainCloud');//190-40,410+100
        cloud6_8.scale.setTo(1.3, 1.3);
        // cloud6_8.anchor.setTo(0.5);
        cloud6_8.inputEnabled = true;
        cloud6_8.input.useHandCursor = true;
        cloud6_8.events.onInputDown.add(() => {
            window.app_Grade = "BBPP";
            bbregloginbbpp.initializeDB();
            _this.game.state.start('appLoginScreenbbpp', true, false, _this.app_Mode);
        }, _this);
        var cloud6_8Txt = this.add.text(210, 515, ' \n' + 'Grade 6-8' + '\n ');//210,398+100
        // cloud6_8Txt.anchor.setTo(0.5);
        cloud6_8Txt.align = 'center';
        cloud6_8Txt.font = 'gradefont';
        cloud6_8Txt.fontSize = 32;//34
        cloud6_8Txt.fontWeight = 'normal';
        cloud6_8Txt.fill = '#563814';
        cloud6_8Txt.wordWrap = true;
        cloud6_8Txt.wordWrapWidth = 500;

        // hide the cloude
        cloud1_5.visible = false;
        cloud1_5Txt.visible = false;
    }

}
