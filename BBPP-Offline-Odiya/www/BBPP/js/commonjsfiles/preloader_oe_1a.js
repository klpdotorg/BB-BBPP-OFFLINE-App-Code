Game.preloader_oe_1a = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_oe_1a.prototype = {
        preload: function () {

                console.log("this is for test preloader oe 1a");
                console.log("oe 1");
                this.load.video('oe_1_1', window.baseUrl + 'assets/demoVideos/NS-OE-1-G6_1.mp4');  //* playing oe1
                this.load.video('oe_1_2', window.baseUrl + 'assets/demoVideos/NS-OE-1-G6_2.mp4');  //* playing oe2

                this.load.image('skipArrow', window.baseUrl + 'assets/commonAssets/skipArrow.png');


                this.load.atlas('backbtn', window.baseUrl + 'assets/commonAssets/backbtn.png', null, NS_OE_1_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', null, NS_OE_1_G6_JSON.speakerJson);
                this.load.atlas('starAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', null, NS_OE_1_G6_JSON.starAnimJson);
                this.load.atlas('replay', window.baseUrl + 'assets/commonAssets/reply.png', null, NS_OE_1_G6_JSON.replyJson);
                this.load.atlas('btn', window.baseUrl + 'assets/commonAssets/btn.png', null, NS_OE_1_G6_JSON.btnJson);

                this.load.image('tittleBar', window.baseUrl + 'assets/commonAssets/tittleBar.png');
                this.load.image('background', window.baseUrl + 'assets/commonAssets/bg.png');
                this.load.image('navBar', window.baseUrl + 'assets/commonAssets/navBar.png');
                this.load.image('timebg', window.baseUrl + 'assets/commonAssets/timebg.png');
                this.load.image('topicOutline', window.baseUrl + 'assets/commonAssets/topicOutline.png');

                this.load.atlas('Tick', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/tick.png', null, NS_OE_1_G6_JSON.tickJson);


                this.load.image('bg', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Bg.png');

                this.load.atlas('ScreenTextBox', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/ScreenTextBox.png', null, NS_OE_1_G6_JSON.ScreenTextBox);


                this.load.image('Appletray', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Apple Blocks.png');
                this.load.image('Eggtray', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Egg Blocks.png');

                this.load.atlas('Egg', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/egg.png', null, NS_OE_1_G6_JSON.eggJson);
                this.load.atlas('Apple', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/apple.png', null, NS_OE_1_G6_JSON.appleJson);
                this.load.image('Basket', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/basket.png');
                this.load.image('BasketF', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Front part.png');
                this.load.image('BasketB', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Back part.png');
                this.load.image('NumberBox', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Number Box.png');
                this.load.atlas('eggBasket', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/eggBasket.png', null, NS_OE_1_G6_JSON.eggBasketJson);
                this.load.atlas('appleBasket', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/appleBasket.png', null, NS_OE_1_G6_JSON.appleBasketJson);
                this.load.atlas('Tick', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/tick.png', null, NS_OE_1_G6_JSON.tickJson);

                this.load.atlas('ThumbsUp', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/thumbs_up.png', null, NS_OE_1_G6_JSON.thumbsUp);
                this.load.atlas('ThumbsDown', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/thumbs_down.png', null, NS_OE_1_G6_JSON.thumbsDown);

                this.preloader_oe_1b();
        },

        preloader_oe_1b: function () {
                this.load.atlas('newNumBox', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Number Box new.png', null, NS_OE_1_G6_JSON.NumberBoxnewJson);

                this.load.image('AppletrayVert', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/apple blocks2.png');
                this.load.image('EggtrayVert', window.baseUrl + 'assets/gradeAssets/NS-OE-1-G6/Egg blocks 2.png');
        },

        create: function () {

                this.state.start('NS_OE_1_G6demo', true, false); //* transition with clear world but not cache

        },
}