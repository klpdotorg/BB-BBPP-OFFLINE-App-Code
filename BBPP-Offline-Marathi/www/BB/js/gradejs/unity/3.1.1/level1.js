Game.unity3_1_1level1=function(){};
Game.unity3_1_1level1.prototype={
init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.2";
        
       /*// _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       telInitializer.gameIdInit("CoinMachine3_1_1",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade1NOA1){

            window.grade1NOA1 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

        this.load.image('Level721_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level321_bg1',window.baseUrl+'assets/gradeAssets/3.2.1/BG.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        
        this.load.image('Level721_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level721_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level721_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level721_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        this.load.image('Level723_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level723_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level723_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level723_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
       
        this.load.image('Level722_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level723_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
    
        _this.load.atlas('Level722_CommonBackBtn',window.baseUrl+'assets/commonAssets/newBackBtn.png',window.baseUrl+'assets/commonAssets/newBackBtn.json');
    
        this.load.image('Level722_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level722_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level722_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level722_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        


        this.load.atlas('Level721_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level721_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level721_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level721_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level721_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level721_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level721_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level721_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level721_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level721_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level721_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level721_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level721_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level721_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level721_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
      
        this.load.image('Level721_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level721_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level721_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level721_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level721_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level721_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level721_bluecoin',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level721_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level721_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');



        
        this.load.atlas('Level722_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level722_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level722_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level722_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level722_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level722_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level722_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level722_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level722_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level722_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level722_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level722_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level722_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level722_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level722_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level722_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level722_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level722_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level722_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level722_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level722_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level722_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level722_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level722_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level722_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level722_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level722_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level722_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');
        


        
        this.load.atlas('Level723_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level723_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level723_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level723_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level723_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level723_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level723_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level723_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level723_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level723_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level723_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level723_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level723_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level723_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level723_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level723_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level723_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level723_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level723_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level723_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level723_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level723_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level723_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level723_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level723_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level723_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');

        this.load.atlas('Level723_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');


        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
      //this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
      //this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

      this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
      this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
      this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');


    }

    },
    
	create:function(game){
       
	   _this.amplify = null;
	   
         _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        
        _this.BlueAnimInc = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;

        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
       
       // _this.checkMangoes = 0;
       // baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
         _this.no1=0;
       //  _this.qArrays = [1,3,5,7,9,11];
        // _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
         _this.qArrays = [1,2,3,4,5,6,7,8,9];
         _this.qArrays1 = [7,8,9,10,11,12];
        
         _this.xArray = [210,160,350,180,300,300,370,250,210/*,300*/];
         _this.yArray = [140,200,200,280,270,140,280,220,340/*,340*/];
       
        _this.qArrays = _this.shuffle( _this.qArrays);
         _this.qArrays1 = _this.shuffle( _this.qArrays1);
        
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
            _this.navBar = _this.add.sprite(0,0,'Level321_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'Level321_timebg');
             /*_this.topicOutline = _this.add.sprite(70,5,'Level321_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level321_practice');
             _this.topic = _this.add.sprite(165,10,'Level321_topic');*/
        
           _this.SlotMachinePanel1 = _this.add.sprite(110,60,'SlotMachinePanel1');
           _this.SlotMachinePanel1.scale.setTo(1,1);
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'Oh Whale';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
       
        _this.placeValuePanel = _this.add.sprite(668,105,'placeValuePanel');
           _this.placeValuePanel.scale.setTo(1,1);


       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level321_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
         _this.toDisplayNoPad = 0;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
          _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        _this.displayNumber1 = 0
        _this.displayNumber2 = 0
        
        _this.animArraylength = 9;
         _this.qArrays = _this.shuffle( _this.qArrays);
        
       /* _this.coinYellow = _this.add.sprite(353,250,'Level321_Coin1');
        _this.coinYellow.frame = 5;

         _this.coinGreen = _this.add.sprite(518,250,'Level321_Coin10');
        _this.coinGreen.frame = 5;

         _this.coinBlue = _this.add.sprite(193,250,'Coin100');
        _this.coinBlue.frame = 5;
*/ _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

		_this.LeverGreen = _this.add.sprite(180,68,'Level321_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(340,68,'Level321_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(505,68,'Level321_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
       /* _this.Levercoin1 = _this.add.sprite(515,168,'Level321_coin1Anim');
        _this.Levercoin1.visible = false;
        _this.Levercoin10 = _this.add.sprite(355,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false; */

        
		
		_this.Level321_OneToHundredE1 = _this.add.sprite(700,90,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(775,90,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(845,90,'Level321_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
    
        /*_this.LeverBlueNumber = _this.add.sprite(192,91,'Level321_numberSmall');
         _this.LeverBlueNumber.frame = 1;
        _this.LeverGreenNumber = _this.add.sprite(355,91,'Level321_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverYellowNumber = _this.add.sprite(518,91,'Level321_numberSmall');
        _this.LeverYellowNumber.frame = 1;
*/
      _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(690,115,'Level321_numberBox1');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(760,115,'Level321_numberBox1');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(832,115,'Level321_numberBox1');
         _this.numBox3.name = "numBox3";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        //_this.shakeGroup.add(_this.numBox3);
        


        _this.coinPannel = _this.add.sprite(110,58,'Level321_coinMachinePannel');
       // _this.Pannel = _this.add.sprite(668,105,'Level321_pannel');
        
        _this.LeverGreen = _this.add.sprite(180,68,'Level321_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(340,68,'Level321_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(505,68,'Level321_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
        _this.Levercoin1 = _this.add.sprite(515,168,'Level321_coin1Anim');
        _this.Levercoin1.visible = false;
        _this.Levercoin10 = _this.add.sprite(355,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false; 

        /*_this.Level321_OneToHundred1 = _this.add.sprite(192,63,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(355,63,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(518,63,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;*/
    
        /*_this.LeverBlueNumber = _this.add.sprite(192,91,'Level321_numberSmall');
         _this.LeverBlueNumber.frame = 1;
        _this.LeverGreenNumber = _this.add.sprite(355,91,'Level321_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverYellowNumber = _this.add.sprite(518,91,'Level321_numberSmall');
        _this.LeverYellowNumber.frame = 1;
        */
		_this.Level321_OneToHundred1 = _this.add.sprite(195,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(355,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(522,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
		
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(690,115,'Level321_numberBox1');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(760,115,'Level321_numberBox1');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(832,115,'Level321_numberBox1');
         _this.numBox3.name = "numBox3";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);


       /* _this.askNumber1 = _this.add.sprite(685,107,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(1.5,1.5);
        
        _this.askNumber2 = _this.add.sprite(755,107,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
         _this.askNumber2.scale.setTo(1.5,1.5);*/

        _this.numBoxNum1 = _this.add.sprite(670,118,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(770,118,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(843,118,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
       _this.getVoice();
        _this.getQuestion();
        
    

    },
    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
},
    updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
	            _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function(target)
    {  
        _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        ////console.log(" _this.no1"+ _this.no1);
//_this.addNumberPad();
                	switch( _this.qArrays[ _this.no1])      
    	{
    		case 1: 
    		_this.gotoFirstQuestion();
    				break;
    		case 2: _this.gotoSecondQuestion();
    				break;
    		case 3: _this.gotoThirdQuestion();
    				break;
    		case 4: _this.gotoFourthQuestion();
    				break;
    		case 5: _this.gotoFifthQuestion();
    				break;
    		case 6: _this.gotoSixthQuestion();
    				break;
            case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
            case 9: _this.gotoNinthQuestion();
    				break;
    		case 10: _this.gotoTenthQuestion();
    				break;
            case 11: _this.gotoEleventhQuestion();
    				break;
    		case 12: _this.gotoTwelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				break;
    		case 14: _this.gotoFourteenthQuestion();
    				break;
            case 15: _this.gotoFifteenthQuestion();
    				break;
           
    	}
    },
    

   
 gotoFirstQuestion:function(){
      //_this.stopVoice();
    
//_this.displayNumber1 = 5;
                   // _this.askNumber1.frame = 6;
                   // _this.displayNumber2 = 3;
                  
                 // _this.askNumber2.frame =4;
                    _this.toDisplayNoPad = 7; 
                    _this.rightAns = 97;
 
 _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 8;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 6;
       /*  _this.coinBlue = _this.add.sprite(193,250,'Coin100');
        _this.coinBlue.frame = 5;
*/
                         _this.numBox3.frame = 1;
                         _this.numBox3Pressed = true;
                         _this.addNumberPad();

     },    



    gotoSecondQuestion:function(){ 
          //_this.stopVoice();
          _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                   _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 2;
                   // _this.askNumber1.frame = 3;
                    //_this.displayNumber2 = 8;
                   // _this.askNumber2.frame =9;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 58;

       
        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
     /*  _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }
        */

         _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 4;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 7;

        /* _this.coinBlue = _this.add.sprite(193,250,'Coin100');
        _this.coinBlue.frame = 5;*/
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     },
    gotoThirdQuestion:function(){
       _this.questionid = "3.toDisplayNoPad2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 7;
                   // _this.askNumber1.frame = 8;
                    _this.displayNumber2 = 3;
                   // _this.askNumber2.frame =4;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 23;
        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 3;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
/*       _this.generatemangoCeleb();
*/       /* for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 3;
        }*/
         _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 1;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 2;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     },
    gotoFourthQuestion:function(){
        // _this.stopVoice();
        _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 2;
                    //_this.askNumber1.frame = 3;
                   // _this.displayNumber2 = 7;
                   // _this.askNumber2.frame =8;
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 94;

        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 4;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
             _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 4;
        }
        */
         _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 8;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 3;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     }, 
    gotoFifthQuestion:function(){
       //_this.stopVoice();
        _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   // _this.displayNumber1 = 4;
                 //   _this.askNumber1.frame = 5;
                    //_this.displayNumber2 = 5;
                  //  _this.askNumber2.frame =6;
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 42;
        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 5;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<6;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.
             setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 5;
        }
        
        */ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 3;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 1;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     }, 
    gotoSixthQuestion:function(){
        //_this.stopVoice();
     _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   // _this.displayNumber1 = 1;
                   // _this.askNumber1.frame = 2;
                   // _this.displayNumber2 = 8;
                   // _this.askNumber2.frame =8;
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 98;
        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 6;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 8;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 7;

        
                            _this.numBox3.frame = 1;
                            _this.numBox3Pressed = true;
_this.addNumberPad();
     },
    
    gotoSeventhQuestion:function(){
         //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   // _this.displayNumber1 = 6;
                    //_this.askNumber1.frame = 7;
                   // _this.displayNumber2 = 4;
                    //_this.askNumber2.frame =5;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 89;
       /* if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 7;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<8;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 7;
        }*/ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 7;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 8;

                            _this.numBox3.frame = 1;
                            _this.numBox3Pressed = true;
                            _this.addNumberPad();

     },
    gotoEighthQuestion:function(){
        //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                  //  _this.displayNumber1 = 7;
                  //  _this.askNumber1.frame = 8;
                   // _this.displayNumber2 = 4;
                   // _this.askNumber2.frame =5;
                    _this.toDisplayNoPad = 10;
                    _this.rightAns = 37; 
        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 8;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 8;
        }
        */ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 2;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 6;

                            _this.numBox3.frame = 1;
                            _this.numBox3Pressed = true;
                            _this.addNumberPad();

     },
    gotoNinthQuestion:function(){
         //_this.stopVoice();
        _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   // _this.displayNumber1 = 2;
                    //_this.askNumber1.frame = 3;
                   // _this.displayNumber2 = 4;
                   // _this.askNumber2.frame =5;
                    _this.toDisplayNoPad = 5;
                    _this.rightAns = 43;

        /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 9;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<9;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 9;
        }
        
      */ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 3;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 2;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

    },
gotoTenthQuestion:function(){ 
          //_this.stopVoice();
        _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 2;
                   // _this.askNumber1.frame = 3;
                    //_this.displayNumber2 = 1;
                    //_this.askNumber2.frame =2;
                    _this.toDisplayNoPad = 2;
                    _this.rightAns = 87;
         /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       /*_this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }*/
         _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 7;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 6;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     },


gotoEleventhQuestion:function(){ 
          //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 3;
                    //_this.askNumber1.frame = 4;
                    //_this.displayNumber2 = 4;
                    //_this.askNumber2.frame =4;
                    _this.toDisplayNoPad = 6;
                    _this.rightAns = 99;
         /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       /*_this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }
        */ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 8;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 8;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     },

    gotoTwelvethQuestion:function(){ 
          //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 6;
                   // _this.askNumber1.frame = 7;
                    //_this.displayNumber2 = 8;
                   // _this.askNumber2.frame =9;
                    _this.toDisplayNoPad = 13;
                    _this.rightAns = 69;
        /* if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }
        */ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 5;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 8;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

     },



     gotoThirteenthQuestion:function(){ 
          //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 7;
                    //_this.askNumber1.frame = 8;
                    //_this.displayNumber2 = 2;
                    //_this.askNumber2.frame =3;
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 32;
         /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
       /*_this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }*/ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 2;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 1;
                    _this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.addNumberPad();

        
     },

     gotoFourteenthQuestion:function(){ 
          //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 5;
                    //_this.askNumber1.frame = 6;
                    //_this.displayNumber2 = 7;
                   // _this.askNumber2.frame =8;
                    _this.toDisplayNoPad = 11;
                    _this.rightAns = 75;
         /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;
        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }*/ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 6;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 4;

                            _this.numBox3.frame = 1;
                            _this.numBox3Pressed = true;
                            _this.addNumberPad();

     },

     gotoFifteenthQuestion:function(){ 
          //_this.stopVoice();
       _this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                   _this.inputDownFunctionForLeverAndBox();
                    //_this.displayNumber1 = 6;
                   // _this.askNumber1.frame = 7;
                    //_this.displayNumber2 = 2;
                   // _this.askNumber2.frame =3;
                    _this.toDisplayNoPad = 7;
                    _this.rightAns = 56;
         /*if( _this.no1==0 &&  _this.wrong == true){               
         _this.time.events.add(8500, function(){_this.getVoice();},_this);
          }
         else if ( _this.wrong == true){
            ////console.log("elseeeeeeeeeeeeeeeeeeeee");
             _this.getVoice();
         }
        */
        questionNo = 2;

        ////console.log("Question number "+questionNo);
         _this.mangoGroup = _this.add.group();
      /* _this.generatemangoCeleb();
        
        for(var i=0;i<4;i++)
        {
              _this.mangoes =  _this.mangoGroup.create( _this.xArray[i], _this.yArray[i],'mango');  
             _this.mangoes.scale.setTo(0.7,0.7);
             _this.mangoes.anchor.setTo(0.5);
             _this.mangoes.name = "mango"+i;
        
     
             _this.mangoes.inputEnabled = true;
             _this.mangoes.input.useHandCursor = true;
             _this.mangoes.events.onInputDown.add(_this.mangoClicked,_this);
            
             _this.rightAns = 2;
        }*/ _this.coinYellow = _this.add.sprite(353,220,'Level321_Coin10');
        _this.coinYellow.frame = 4;

         _this.coinGreen = _this.add.sprite(518,220,'Level321_Coin1');
        _this.coinGreen.frame = 5;

                            _this.numBox3.frame = 1;
                            _this.numBox3Pressed = true;
                            _this.addNumberPad();

     },
     inputDownFunctionForLeverAndBox :function(){
      
      _this.Coin1 = _this.add.sprite(510,220,'Level321_Coin1');
      _this.Coin1.visible = false;
      _this.Coin10 = _this.add.sprite(350,220,'Level321_Coin10');
      _this.Coin10.visible = false;
      /*_this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
       _this.LeverBlue.inputEnabled = true;
       _this.LeverBlue.input.useHandCursor = true;
       _this.LeverBlue.events.onInputDown.add(_this.leve1Clicked,_this); 
     
       _this.LeverGreen.inputEnabled = true;
       _this.LeverGreen.input.useHandCursor = true;
       _this.LeverGreen.events.onInputDown.add(_this.leve1Clicked,_this);
     */
     /* _this.numBox1.inputEnabled = true;
       _this.numBox1.input.useHandCursor = true;
       _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);*/
     
       _this.numBox2.inputEnabled = true;
       _this.numBox2.input.useHandCursor = true;
       _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox3.inputEnabled = true;
       _this.numBox3.input.useHandCursor = true;
       _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  },
     numberBoxClicked:function(target){
       
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        if(target.name == "numBox1")
        {
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
            _this.numBox1.frame = 1;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
        } 
        if(target.name == "numBox2")
        {
 
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox3Pressed = false;
            _this.numBox2.frame = 1;
            _this.numBox1.frame = 0;
            _this.numBox3.frame = 0;
        }
        if(target.name == "numBox3")
        {

           _this.numBox3Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox3.frame = 1;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
        }
        
        if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            //_this.addNumberPad();
        }
    },

     leve1Clicked:function(target,frame){
        
         //console.log("Im Clicked "+target.name);
        if(target.name == "LeverYellow"){
             
            if(_this.YellowAnimInc<_this.displayNumber2){
                _this.LeverYellow.animations.add('Level321_LeverYellow',[0,1,2,3,4,5,0]);
             _this.LeverYellow.animations.play('Level321_LeverYellow');  
               _this.coinFall = _this.add.audio('coinFall');
               _this.coinFall.play();
                 _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                 _this.Levercoin1.animations.play('Level321_coin1Anim');
                 _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
                      _this.LeverYellowNumber.frame++;
                      _this.Coin1.visible = true;
                      _this.Levercoin1.visible = false;
                      _this.Coin1.frame =  _this.YellowAnimInc;
                      _this.YellowAnimInc++;
                       _this.animArrayCoin1.pop();
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                }, this);
            }
        }
        if(target.name == "LeverBlue"){
             
            if(_this.BlueAnimInc<_this.displayNumber1){
                
                _this.LeverBlue.animations.add('Level321_LeverBlue',[0,1,2,3,4,5,0]);
                _this.LeverBlue.animations.play('Level321_LeverBlue');
                _this.coinFall = _this.add.audio('coinFall');
                _this.coinFall.play();
                 _this.Levercoin10.visible = true;
                _this.Levercoin10.animations.add('Level321_coin10Anim',_this.animArrayCoin10);
                 _this.Levercoin10.animations.play('Level321_coin10Anim');
                 _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
                      _this.LeverGreenNumber.frame++;
                      _this.Coin10.visible = true;
                      _this.Coin10.frame =  _this.BlueAnimInc;
                     _this.Levercoin10.visible = false;
                      _this.BlueAnimInc++;
                       _this.animArrayCoin10.pop();
                     //console.log("_this.BlueAnimInc "+_this.BlueAnimInc);
                }, this);
            }
           
        }
        if(target.name == "LeverGreen"){
             _this.LeverGreen.animations.add('Level321_LeverGreen',[0,1,2,3,4,5,0]);
             _this.LeverGreen.animations.play('Level321_LeverGreen');
         }
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc))
            {
                 if( _this.toCheckNumberPad)
                {
           
                //console.log("im here hre hre");
                 
                  _this.addNumberPad();
                 _this.numBox2.frame = 1;
                 _this.numBox2Pressed = true;
                 _this.toCheckNumberPad = false;
                    _this.displayNopad = true;
               }
            }
    
    },

    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level321_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level321_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,505,'Level321_erase');
        _this.eraser.anchor.setTo(0.5);
        //_this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'Level321_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(target){
			 target.frame = 1;
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();



                if(_this.numBox1Pressed){
					_this.numBox1Pressed = true
                    _this.numBoxNum1.visible = false;
					_this.numBox1.frame = 0;
                    _this.numBox3.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.selectedAns1="";
                }
                else if(_this.numBox2Pressed){
					_this.numBox2Pressed = true;
                    _this.numBoxNum2.visible = false;
					_this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.selectedAns2="";
                }
                else if(_this.numBox3Pressed)
                {
					_this.numBox3Pressed = true;
                    _this.numBoxNum3.visible = false;
					_this.numBox1.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.numBox3.frame = 1;
                    _this.selectedAns3="";
                }
                _this.selectedAns="";
                //_this.numBoxNum1.visible = false;
                //_this.numBoxNum2.visible = false;
                //_this.numBoxNum3.visible = false;
                    /*_this.numBox1.frame = 0;
                    _this.numBox3.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.numBox3Pressed = true;
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.toCheckNumberPad = false;*/
             
             _this.time.events.add(300, function(){ target.frame = 0;}, _this);

         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            // target.events.onInputDown.removeAll();
            _this.noofAttempts ++;
			 target.frame = 1;
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns)  
                {
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;
                    _this.coinYellow.frame =_this.coinYellow.frame+10 ;
                    _this.coinGreen.frame =_this.coinGreen.frame+10 ;
                    _this.numBox1.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);

                     _this.questionid = 1;

                     if(_this.timer)
                       {
                            _this.timer.stop();
                            _this.timer = null;
                       }

                     telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                { 
                    //console.log("wrong");
                    
                    _this.numBox3.frame = 1;
                    _this.numBox1.frame = 0;
                    _this.numBox2.frame = 0;
                    
                    _this.Coin10.visible = false;
                    _this.Coin1.visible = false;
                    _this.BlueAnimInc = 0;
                    _this.YellowAnimInc = 0;
                    // _this.numGroup.destroy();
                    
                   // _this.LeverGreenNumber.frame= 1;
                   // _this.LeverYellowNumber.frame= 1;

                    
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = true;
                    _this.toCheckNumberPad = true;
                    
                    _this.shake.shake(10, _this.shakeGroup);
                    _this.selectedAns = " ";
                    _this.waudio = _this.add.audio('waudio');
                    _this.waudio.play();
                     _this.numBoxNum1.visible = false;
                     _this.numBoxNum2.visible = false;
                     _this.numBoxNum3.visible = false;
					 //_this.numBox2.inputEnabled = false;
					 //_this.numBox3.inputEnabled = false;
					_this.time.events.add(300, function(){ target.frame = 0;}, _this);

                }
  
        },this);
       
        if(_this.displayNopad){
            //console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
     numClicked:function(target){
         
           //console.log(target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             //console.log("numbo1pressed");
             _this.numBox1.frame = 0;
            _this.numBox1Pressed = false;
         }
        
        else if(_this.numBox3Pressed)
             {
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
               	             //console.log("numbo3pressed");

             }

              else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
             
                          //console.log("numbo2pressed");

            _this.numBox2.frame = 0;
             _this.numBox3.frame = 1;
             _this.numBox3Pressed = true;
             _this.numBox2Pressed = false;
         }
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         
         if(_this.numBoxNum3.visible && _this.numBox3Pressed== true){
             _this.numBox2.frame = 1;
           _this.numBox3.frame = 0;
                          	             //console.log("numbo3pressed------------");

            _this.numBox2Pressed = true;
             _this.numBox3Pressed = false;
                            	             //console.log("numbo3presseddddddddd-------------");

         }
         
         //console.log("2 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("2 "+this.numBox3Pressed);
    },
/*checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

	},
*/
     shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
},
    removeEverthing:function() 
    {
         _this.no1++;
        ////console.log("--------------------------"+ _this.no1);

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        if( _this.no1<6)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            //_this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
           // _this.askNumber2.frame =0;
           // _this.rightAns = 503;
             //_this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
            //_this.LeverGreenNumber.frame = 1;
           // _this.LeverYellowNumber.frame = 1;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
			if(_this.Coin1)
				_this.Coin1.destroy();
            _this.coinYellow.destroy();
            _this.coinGreen.destroy();
			if(_this.Coin10)
				_this.Coin10.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.animArrayCoin10 =null;
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
                        

            _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity3_1_1Score');
        }
    },
    
/*
    displayNumberRow:function() {
   

*/


    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'Level321_starAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
        _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "click", 
                    res_id: "level12_TickMark", 
                    access_token: window.acctkn 
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);       
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
       // _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn
               } 
               //absdsjsapi.saveAssessment(_this.saveAsment);  
        
            target.events.onInputDown.removeAll();
             _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // ////console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();

                     _this.count1++;
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
},
wrongAns:function(target)
	{
    _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        _this.timer1.stop();	
         _this.wrong = false;
        _this.basketback.visible = false;
        
		 _this.shake.shake(10,  _this.basket);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }

        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();
        	_this.getQuestion();},_this);
	},
      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
          /*  switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:*/if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 3.2.1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 3.2.1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 3.2.1.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/3.1.1.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/3.1.1.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/3.1.1.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/3.1.1.mp3");
                        }
                        else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/3.1.1.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/3.2.1.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                      /*  break;
            }*/

       _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
      },

	  amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
	
        stopVoice:function(){
             if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
			
		if(_this.celebrationSound)
		{
			if(_this.celebrationSound.isPlaying)
			{
				_this.celebrationSound.stop();
				_this.celebrationSound = null;
			}
		}
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
            
        }

    
};