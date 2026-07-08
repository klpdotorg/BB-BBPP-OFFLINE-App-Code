Game.preloader_NSRP_03_G6 = function (game) {
        this.preloadBar = null;



};

var chime, clockTick;
Game.preloader_NSRP_03_G6.prototype = {
        preload: function () {
                console.log("nsrp 3");
                this.load.video('nsrp03_1',window.baseUrl+'assets/demoVideos/NSRP-03-G6.mp4');   //* include demo video of game.
                this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
                
                this.load.atlas('bulb',window.baseUrl+'assets/commonAssets/bulb.png',null,NSRP_03_G6_JSON.bulbBtnJson);

                this.load.atlas('backbtn', window.baseUrl+'assets/commonAssets/backbtn.png', null, NSRP_03_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl+'assets/commonAssets/speaker.png', null, NSRP_03_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl+'assets/commonAssets/starAnim.png', null, NSRP_03_G6_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl+'assets/commonAssets/reply.png', null, NSRP_03_G6_JSON.replyJson);

                this.load.image('navBar', window.baseUrl+'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl+'assets/commonAssets/timebg.png');
                this.load.image('hand', window.baseUrl+'assets/commonAssets/hand.png');
                this.load.image('bg', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/Bg.png');
                this.load.atlas('TickBtn', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/TickBtn.png', null, NSRP_03_G6_JSON.tickJson);

                this.load.image('Text box_2', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/text box_2.png');

                this.load.atlas('Numberpad', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/number pad.png', null, NSRP_03_G6_JSON.numberpadJson)
                this.load.image('numpadbg', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/numbg.png');

                this.load.atlas('white-box', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/new box.png', null, NSRP_03_G6_JSON.SquareBoxJson);


                // Trays
                this.load.image('GreenPlate', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/plate_Green.png');
                this.load.image('OrangePlate', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/plate_Orange.png');
                this.load.image('WhitePlate', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/plate_white.png');
                this.load.image('GreenTray', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/tray_green.png');
                this.load.image('OrangeTray', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/tray_Orange.png');
                this.load.image('WhiteTray', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/tray_white.png');


                // cake piecses
                this.load.image('RectCake', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/cake pice.png');
                this.load.image('1pieceCake', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/1 piece cake/1 piece cake.png');

                this.load.image('3pieceCake1', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_1.png');
                this.load.image('3pieceCake2', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_3.png');
                this.load.image('3pieceCake3', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_2.png');

                this.load.image('5pieceCake1', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_1.png');
                this.load.image('5pieceCake2', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_5.png');
                this.load.image('5pieceCake3', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_2.png');
                this.load.image('5pieceCake4', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_4.png');
                this.load.image('5pieceCake5', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_3.png');

                this.load.image('7pieceCake1', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_1.png');
                this.load.image('7pieceCake2', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_7.png');
                this.load.image('7pieceCake3', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_6.png');
                this.load.image('7pieceCake4', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_2.png');
                this.load.image('7pieceCake5', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_3.png');
                this.load.image('7pieceCake6', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_5.png');
                this.load.image('7pieceCake7', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_4.png');

                this.load.image('8pieceCake1', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_1.png');
                this.load.image('8pieceCake2', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_8.png');
                this.load.image('8pieceCake3', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_7.png');
                this.load.image('8pieceCake4', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_2.png');
                this.load.image('8pieceCake5', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_3.png');
                this.load.image('8pieceCake6', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_6.png');
                this.load.image('8pieceCake7', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_4.png');
                this.load.image('8pieceCake8', window.baseUrl+'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_5.png');


        },

        create: function () {

                this.state.start('NSRP_03_G6level1');

        },
}