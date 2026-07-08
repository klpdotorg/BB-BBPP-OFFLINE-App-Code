Game.preloader_fm_4a = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_fm_4a.prototype = {
        preload: function () {
                console.log("ns-fm-4a");
                this.load.video('fm_4_1', window.baseUrl + 'assets/demoVideos/NS-FM-4-G6_1.mp4');  //* intro to game
                this.load.video('fm_4_2', window.baseUrl + 'assets/demoVideos/NS-FM-4-G6_2.mp4');  //* fm4a game playing
                this.load.video('fm_4_3', window.baseUrl + 'assets/demoVideos/NS-FM-4-G6_3.mp4');  //* fm4b game playing

                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');
                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, NS_FM_4A_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, NS_FM_4A_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, NS_FM_4A_G6_JSON.starAnimJson);
                this.load.image('numpadbg', window.baseUrl + 'assets/commonAssets/numbg.png');
                this.load.image('TextBox', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/text box2.png');
                this.load.atlas('Numberpad', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/number pad.png', null, NS_FM_4A_G6_JSON.numberpadJson);
                this.load.atlas('thumbsdown', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/thums down.png', null, NS_FM_4A_G6_JSON.thumbsdownJson);
                this.load.atlas('Numberbox', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/Nuber box.png', null, NS_FM_4A_G6_JSON.NumberJson);
                this.load.atlas('thumbsup', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/thums Up.png', null, NS_FM_4A_G6_JSON.thumbsupJson);
                this.load.atlas('rightbtn', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/Right Btn.png', null, NS_FM_4A_G6_JSON.RightbtnJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, NS_FM_4A_G6_JSON.replyJson);
                this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, NS_FM_4A_G6_JSON.btnJson);

                this.load.image('tittleBar', window.baseUrl + 'assets/commonAssets/tittleBar.png');
                this.load.image('background', window.baseUrl + 'assets/commonAssets/bg7.2.png');
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('bg', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/BG.png');

                this.load.atlas('FourColorBox', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/4 color box.png', null, NS_FM_4A_G6_JSON.fourColorBox);

                this.load.image('EmptyBox', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/image_2.png');
                this.load.image('EmptyBox_Glow', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/image_4.png');
                this.load.image('RedBox', window.baseUrl + 'assets/gradeAssets/NS-FM-4A-G6/Red box.png');
                this.preloader_fm_4b();

        },

        create: function () {

                this.state.start('NS_FM_4A_G6level1');
        },

        preloader_fm_4b: function () {
             
                this.load.atlas('Tick', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/tick.png', null, NS_FM_4B_G6_JSON.tickJson);
                this.load.atlas('FactorBox', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/3 Box.png', null, NS_FM_4B_G6_JSON.factorBoxJson);
        
                this.load.image('EmptyBox_l_2', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_2.png');
                this.load.image('EmptyBox_l_3', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_3.png');
                this.load.image('EmptyBox_l_4', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_4.png');
                this.load.image('EmptyBox_l_5', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_5.png');
                this.load.image('EmptyBox_l_6', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_6.png');
                this.load.image('EmptyBox_l_7', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_7.png');
                this.load.image('EmptyBox_l_8', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_8.png');
                this.load.image('EmptyBox_l_9', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_9.png');
                this.load.image('EmptyBox_l_10', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_10.png');
                this.load.image('EmptyBox_l_11', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_11.png');
                this.load.image('EmptyBox_l_12', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_12.png');
                this.load.image('EmptyBox_l_13', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_13.png');
                this.load.image('EmptyBox_l_14', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_14.png');
                this.load.image('EmptyBox_l_15', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_15.png');
                this.load.image('EmptyBox_l_16', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_16.png');
                this.load.image('EmptyBox_l_17', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_17.png');
                this.load.image('EmptyBox_l_18', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_18.png');
                this.load.image('EmptyBox_l_19', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_19.png');
                this.load.image('EmptyBox_l_20', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_20.png');
                this.load.image('EmptyBox_l_21', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_21.png');
                this.load.image('EmptyBox_l_22', window.baseUrl + 'assets/gradeAssets/NS-FM-4B-G6/Box_22.png');
        }

}