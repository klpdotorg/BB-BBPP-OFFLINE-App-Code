Game.unity10_2_3level1=function(){};


Game.unity10_2_3level1.prototype={


    init:function(game)
	{
		_this = this;
		telInitializer.gameIdInit("unity10_2_1",gradeSelected);
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
        _this.BlueAnimIncEx = 0;
        _this.GreenAnimIncEx = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.someVar = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.toDisplayNoPad = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
      
        _this.checkNumber1 = 0
        _this.checkNumber2 = 0
        _this.blueLevelEnable = false;
        
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
        
        
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
            /* _this.topicOutline = _this.add.sprite(70,5,'Level321_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level321_practice');
             _this.topic = _this.add.sprite(165,10,'Level321_topic');*/
        
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
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
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level321_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        
        _this.coinPannel = _this.add.sprite(100,58,'Level321_coinMachinePannel');
        _this.Pannel = _this.add.sprite(658,145,'Level321_pannel');
        
        _this.coinBoxGreen = _this.add.sprite(150,95,'Level1011_coinDecrease');
        _this.coinBoxGreen.name = "coinBoxGreen";
        _this.coinBoxGreen.frame =3
        _this.coinBoxBlue = _this.add.sprite(315,95,'Level1011_coinDecrease');
        _this.coinBoxBlue.name ="coinBoxBlue";
        _this.coinBoxBlue.frame = 2;
        _this.coinBoxYellow = _this.add.sprite(480,95,'Level1011_coinDecrease');
        _this.coinBoxYellow.name = "coinBoxYellow";
        _this.coinBoxYellow.frame = 1;
        
         _this.exchangeGreen = _this.add.sprite(160,160,'Level1011_coinExchange');
         _this.exchangeGreen.name = "exchangeGreen";
         _this.exchangeBlue = _this.add.sprite(325,160,'Level1011_coinExchange');
         _this.exchangeBlue.name ="exchangeBlue";

        _this.Level321_OneToHundred1 = _this.add.sprite(195,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(360,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(525,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
		
		_this.Level321_OneToHundredE1 = _this.add.sprite(675,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(730,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(787,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
    
        _this.LeverGreenNumber = _this.add.sprite(155,98,'Level321_numberVSmall');
        _this.LeverGreenNumber.frame = 0;
        _this.LeverBlueNumber = _this.add.sprite(320,98,'Level321_numberVSmall');
        _this.LeverBlueNumber.frame = 0;
        _this.LeverYellowNumber = _this.add.sprite(484,98,'Level321_numberVSmall');
        _this.LeverYellowNumber.frame = 0;
        
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(723,305,'Level321_numberBox');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(775,305,'Level321_numberBox');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(671,305,'Level321_numberBox');
         _this.numBox3.name = "numBox3";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        
         _this.Levercoin1 = _this.add.sprite(508,168,'Level321_coin1Anim');
         _this.Levercoin1.visible = false;
        _this.Levercoin10 = _this.add.sprite(348,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false;
        
        // _this.animArrayCoin1.pop();
        
         _this.minus = _this.add.sprite(650,230,'Level1011_Minus');
        
        _this.askNumber1 = _this.add.sprite(725,165,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
        
        _this.askNumber2 = _this.add.sprite(780,165,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
        
        _this.askNumber3 = _this.add.sprite(725,235,'Level321_numberSmall');
         _this.askNumber3.frame = 1;
        
        _this.askNumber4 = _this.add.sprite(780,235,'Level321_numberSmall');
        _this.askNumber4.frame = 1;
        
        _this.askNumber5 = _this.add.sprite(670,165,'Level321_numberSmall');
        _this.askNumber5.frame = 1;
        
        _this.askNumber6 = _this.add.sprite(670,235,'Level321_numberSmall');
        _this.askNumber6.frame = 1;

           _this.numBoxNum1 = _this.add.sprite(730,308,'Level321_numberSmall');
       // _this.numBoxNum1 = _this.add.sprite(510,95,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(0.9,0.9);
       // _this.numBoxNum1.frame  = 1;
        //_this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(782,308,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        //_this.numBoxNum2.frame  = 3;
         _this.numBoxNum2.scale.setTo(0.9,0.9);
       // _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(677,308,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        //_this.numBoxNum3.frame  = 4;
         _this.numBoxNum3.scale.setTo(0.9,0.9);
        //_this.numBoxNum3.visible = false;
        
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
        //_this.getVoice(); 
        _this.getQuestion();
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
    {  //console.log("get Question "+_this.no1);

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;

        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
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
         //_this.no1 = 21;
     //console.log("Q "+_this.qArrays[_this.no1]);
    	switch(_this.qArrays[_this.no1])    
    	{
    		case 1://_this.questionid = "10.2_3#SCR-"+_this.sceneCount;   //555-258
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 323;
                    _this.yaxisGCopy = _this.yaxisG = 323;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 3
                    _this.askNumber5.frame =6;
                    _this.askNumber1.frame = 6;                                 
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =6;
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 297;
                    _this.toDisplayNoPad = 15;
    				break;
    		case 2: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;  //563-277
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 365;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisGCopy = _this.yaxisG = 323;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 1
                    _this.askNumber5.frame =6;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =4;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =8;                  
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 1;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 286;
                    _this.toDisplayNoPad = 16;
    				break;
    		case 3: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;  //578-289
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 282;
                    _this.yaxisGCopy = _this.yaxisG = 323;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 =_this.Coin1.frame = 6
                    _this.askNumber5.frame =6;
                    _this.askNumber1.frame = 8;
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =9;                  
                    _this.askNumber4.frame =10;
                    _this.checkNumber1 = 9;
                    _this.checkNumber2 = 8;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 6;
                    _this.toCheckEqualNoG = 4;
                    _this.rightAns = 289;
                    _this.toDisplayNoPad = 19;
    				break;
    		case 4: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; // 567-168
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisGCopy = _this.yaxisG = 323;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 5
                    _this.askNumber5.frame =6;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =2;
                    _this.askNumber3.frame =7;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 1;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 5;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 399;
                    _this.toDisplayNoPad = 15;
    				break;
    		case 5: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;  //655-367
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisGCopy = _this.yaxisG = 303;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 3
                    _this.askNumber5.frame =7;
                    _this.askNumber1.frame = 6;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =4;
                    _this.askNumber3.frame =7;                  
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 3;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 288;
                    _this.toDisplayNoPad = 16;
    				break;
            case 6: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //647-358
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisGCopy = _this.yaxisG = 303;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 =_this.Coin1.frame = 5
                    _this.askNumber5.frame =7;
                    _this.askNumber1.frame =5;
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =4;
                    _this.askNumber3.frame =6;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 3;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 5;
                    _this.toCheckEqualNoG = 1;
                    _this.rightAns = 289;
                    _this.toDisplayNoPad = 16;
    				break;
            case 7: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //635-256
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 360;
                    _this.yaxisGCopy = _this.yaxisG = 303;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin1 =_this.Coin1.frame = 3
                    _this.askNumber5.frame =7;
                    _this.askNumber1.frame =4;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =6;                  
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 0;
                    _this.rightAns = 379;
                    _this.toDisplayNoPad = 13;
    				break;
            case 8: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //665-178
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 303;
                    _this.yaxisGCopy = _this.yaxisG = 303;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 3
                    _this.askNumber5.frame =7;
                    _this.askNumber1.frame =7;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =2;
                    _this.askNumber3.frame =8;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 1;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 487;
                    _this.toDisplayNoPad = 16;
    				break;
          case 9:   //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //755-456
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 321;
                    _this.yaxisGCopy = _this.yaxisG = 283;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 3
                    _this.askNumber5.frame =8;
                    _this.askNumber1.frame =6;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =5;
                    _this.askNumber3.frame =6;                  
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 4;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 299;
                    _this.toDisplayNoPad = 15;
    				break;
        case 10: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //746-378
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 341;
                    _this.yaxisGCopy = _this.yaxisG = 283;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 =_this.Coin1.frame = 4;
                    _this.askNumber5.frame =8;
                    _this.askNumber1.frame =5;
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =4;
                    _this.askNumber3.frame =8;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 3;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 4;
                    _this.toCheckEqualNoG = 1;
                    _this.rightAns = 368;
                    _this.toDisplayNoPad = 18;
    				break;
        case 11: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //734-255
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 345;
                    _this.yaxisBCopy = _this.yaxisB = 361;
                    _this.yaxisGCopy = _this.yaxisG = 283;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin1 =_this.Coin1.frame = 2;
                    _this.askNumber5.frame =8;
                    _this.askNumber1.frame =4;
                    _this.askNumber2.frame =5;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =6;                  
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 2;
                    _this.toCheckEqualNoG = 0;
                    _this.rightAns = 479;
                    _this.toDisplayNoPad = 12;
    				break; 
        case 12: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //765-169
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 301;
                    _this.yaxisGCopy = _this.yaxisG = 283;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 3;
                    _this.askNumber5.frame =8;
                    _this.askNumber1.frame =7;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =2;
                    _this.askNumber3.frame =7;                  
                    _this.askNumber4.frame =10;
                    _this.checkNumber1 = 9;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 1;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 596;
                    _this.toDisplayNoPad = 16;
    				break; 
        case 13: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //864-566
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 345;
                    _this.yaxisBCopy = _this.yaxisB = 301;
                    _this.yaxisGCopy = _this.yaxisG = 263;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 2;
                    _this.askNumber5.frame =9;
                    _this.askNumber1.frame =7;
                    _this.askNumber2.frame =5;
                    _this.askNumber6.frame =6;
                    _this.askNumber3.frame =7;                  
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 5;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 2;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 298;
                    _this.toDisplayNoPad = 17;
    				break;
        case 14: //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//856-458
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 321;
                    _this.yaxisGCopy = _this.yaxisG = 263;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 4;
                    _this.askNumber5.frame =9;
                    _this.askNumber1.frame =6;
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =5;
                    _this.askNumber3.frame =6;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 5;
                    _this.checkNumber3 = 4;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 4;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 398;
                    _this.toDisplayNoPad = 17;
    				break;
        case 15:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//847-388
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 341;
                    _this.yaxisGCopy = _this.yaxisG = 263;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 =_this.Coin1.frame = 5;
                    _this.askNumber5.frame =9;
                    _this.askNumber1.frame =5;
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =4;
                    _this.askNumber3.frame =9;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 8;
                    _this.checkNumber3 = 3;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 5;
                    _this.toCheckEqualNoG = 1;
                    _this.rightAns = 459;
                    _this.toDisplayNoPad = 19;
    				break;
        case 16:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//835-267
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 361;
                    _this.yaxisGCopy = _this.yaxisG = 263;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin1 =_this.Coin1.frame = 3;
                    _this.askNumber5.frame =9;
                    _this.askNumber1.frame =4;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =3;
                    _this.askNumber3.frame =7;                  
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 2;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 0;
                    _this.rightAns = 568;
                    _this.toDisplayNoPad = 15;
    				break; 
        case 17:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//975-676
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 281;
                    _this.yaxisGCopy = _this.yaxisG = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 =_this.Coin1.frame = 3;
                    _this.askNumber5.frame =10;
                    _this.askNumber1.frame =8;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =7;
                    _this.askNumber3.frame =8;                  
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 6;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 4;
                    _this.rightAns = 299;
                    _this.toDisplayNoPad = 19;
    				break;
        case 18:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //965-578
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisGCopy = _this.yaxisG = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 3;
                    _this.askNumber5.frame =10;
                    _this.askNumber1.frame =7;
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =6;
                    _this.askNumber3.frame =8;                  
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 5;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 3;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 387;
                    _this.toDisplayNoPad = 20;
    				break;
        case 19:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //957-489
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisGCopy = _this.yaxisG = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 5;
                    _this.askNumber5.frame =10;
                    _this.askNumber1.frame =6;
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =5;
                    _this.askNumber3.frame =9;                  
                    _this.askNumber4.frame =10;
                    _this.checkNumber1 = 9;
                    _this.checkNumber2 = 8;
                    _this.checkNumber3 = 4;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 5;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 468;
                    _this.toDisplayNoPad = 21;
    				break; 
        case 20:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//943-387
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 365;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisGCopy = _this.yaxisG = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 =_this.Coin1.frame = 1;
                    _this.askNumber5.frame =10;
                    _this.askNumber1.frame =5;
                    _this.askNumber2.frame =4;
                    _this.askNumber6.frame =4;
                    _this.askNumber3.frame =9;                  
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 8;
                    _this.checkNumber3 = 3;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 1;
                    _this.toCheckEqualNoG = 1;
                    _this.rightAns = 556;
                    _this.toDisplayNoPad = 18;
    				break;
            
        case 21:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;//453-178
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 365;
                    _this.yaxisBCopy = _this.yaxisB = 323;
                    _this.yaxisGCopy = _this.yaxisG = 343;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 =_this.Coin1.frame = 1
                    _this.askNumber5.frame =5;
                    _this.askNumber1.frame = 6;                                 
                    _this.askNumber2.frame =4;
                    _this.askNumber6.frame =2;
                    _this.askNumber3.frame =8;
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.checkNumber2 = 7;
                    _this.checkNumber3 = 1;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 1;
                    _this.toCheckEqualNoG = 2;
                    _this.rightAns = 275;
                    _this.toDisplayNoPad = 16;
    				break; 
        case 22:    //_this.questionid = "10.2_3#SCR-"+_this.sceneCount; //462-166
                    _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 385;
                    _this.yaxisBCopy = _this.yaxisB = 303;
                    _this.yaxisGCopy = _this.yaxisG = 343;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 =_this.Coin1.frame = 0
                    _this.askNumber5.frame =5;
                    _this.askNumber1.frame = 7;                                 
                    _this.askNumber2.frame =3;
                    _this.askNumber6.frame =2;
                    _this.askNumber3.frame =7;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 6;
                    _this.checkNumber3 = 1;
                    _this.checkNumberEX = 1;
                    _this.checkNumberEXG = 1;
                    _this.toCheckEqualNo = 0;
                    _this.toCheckEqualNoG = 3;
                    _this.rightAns = 296;
                    _this.toDisplayNoPad = 13;
    				break;
           
    	}
     _this.questionid = 1;
    },
    

  inputDownFunctionForLeverAndBox :function(){
      
     
            _this.xaxisYCopy = _this.xaxisY = 507.5;//245 for 9 ,
            _this.xaxisBCopy = _this.xaxisB = 348;
            _this.xaxisGCopy = _this.xaxisG = 183;
            
            _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
            _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
            
      
            _this.Coin1 = _this.add.sprite(500,220,'Level321_Coin1');
            _this.Coin10 = _this.add.sprite(340,220,'Level321_Coin10');
            _this.Coin100 = _this.add.sprite(168,220,'Level321_Coin100');
        
        
         _this.yellowCoin = _this.add.sprite(507.5,_this.yaxisY,'Level1011_YellowCoin');
         //_this.yellowCoin.visible = false;
         _this.yellowCoin.name = "YellowCoin";
         _this.yellowCoin.inputEnabled = true;
         _this.yellowCoin.input.useHandCursor = true;
         _this.yellowCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
     
         _this.blueCoin = _this.add.sprite(348,_this.yaxisB,'Level1011_BlueCoin');
         _this.blueCoin.name = "BlueCoin";
         _this.blueCoin.inputEnabled = false;
         _this.blueCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
      
         _this.greenCoin = _this.add.sprite(183,_this.yaxisG,'Level1011_GreenCoin');
         _this.greenCoin.name = "GreenCoin";
         _this.greenCoin.inputEnabled = false;
         _this.greenCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
   
  },
 gotoFirstQuestion:function(){

            //_this.questionid = "10.2_3#SCR-"+_this.sceneCount;
            _this.yaxisYCopyCopy =_this.yaxisYCopy = _this.yaxisY = 325;
            _this.yaxisBCopy = _this.yaxisB = 323;
            _this.yaxisGCopy = _this.yaxisG = 323;
            _this.inputDownFunctionForLeverAndBox();
            _this.wCoin100 = _this.Coin100.frame = 3;
            _this.wCoin10 = _this.Coin10.frame = 3;
            _this.wCoin1 =_this.Coin1.frame = 3
            _this.askNumber5.frame =6;
            _this.askNumber1.frame = 6;
            _this.askNumber2.frame =6;
            _this.askNumber6.frame =3;
            _this.askNumber3.frame =6;
            _this.askNumber4.frame =9;
            _this.checkNumber1 = 8;
            _this.checkNumber2 = 5;
            _this.checkNumber3 = 2;
            _this.checkNumberEX = 1;
            _this.checkNumberEXG = 1;
            _this.toCheckEqualNo = 3;
            _this.toCheckEqualNoG = 2;
            _this.rightAns = 297;
            _this.toDisplayNoPad = 15;
     },    
 singleCoinClickd:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
                 if(_this.checkOverlap(target,_this.coinBoxYellow) && (target.name == "YellowCoin")){
                     //console.log("Hit");
                     if(_this.YellowAnimInc<_this.checkNumber1){
        
                            if(_this.toCheckEqualNo==_this.YellowAnimInc)
                                {
                                    //console.log("HitHitHitHit");
                                    _this.Coin1.visible = false;
                                   
                                }
                         else if(_this.toCheckEqualNo+1==_this.YellowAnimInc)
                             {
                                 _this.yellowCoin.visible = false;
                                 _this.coinBoxYellow.animations.stop(null,null);
                                 _this.coinBoxYellow.frame = 1;
                                 _this.exchangeBlue.animations.add('Level1011_coinExchange',[0,2]);
                                 _this.exchangeBlue.animations.play('Level1011_coinExchange',5,true);
                                 _this.blueCoin.inputEnabled = true;
                                 _this.blueCoin.input.useHandCursor = true;
                             }
                            
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisY +=19.5;
                         _this.yellowCoin.y =_this.yaxisY;
                         _this.yellowCoin.x =_this.xaxisY;
                         _this.Coin1.frame--;
                         //_this.wCoin1 = _this.Coin1.frame--;
                         //console.log("11111111 "+  _this.Coin1.frame);
                         /* if(_this.Coin1.frame ==0)
                             _this.Coin1.visible  = false;*/
                         _this.LeverYellowNumber.frame++;
                        _this.YellowAnimInc++;
                         //console.log(_this.YellowAnimInc, _this.checkNumber1);
                         if(_this.YellowAnimInc ==_this.checkNumber1){
                             /*if(_this.Coin1.frame ==0 && _this.qArrays[_this.no1]>8)
                                    _this.Coin1.visible  = false;*/
                             
                             _this.blueCoin.inputEnabled = true;
                             _this.blueCoin.input.useHandCursor = true;
                             _this.coinBoxYellow.animations.stop(null,null);
                             _this.coinBoxYellow.frame = 1;
                             _this.coinBoxBlue.animations.add('Level1011_coinDecrease',[0,2]);
                            _this.coinBoxBlue.animations.play('Level1011_coinDecrease',5,true);
                         }
                     }
                     else{
                         target.x = _this.vx;   
                         target.y = _this.vy;
                     }
                 }
                else if(_this.checkOverlap(target,_this.coinBoxBlue) && (target.name == "BlueCoin")&& (_this.blueLevelEnable == true)){
                     //console.log("Hit");
                    if(_this.BlueAnimInc<_this.checkNumber2){
                        
                        if(_this.toCheckEqualNoG==_this.BlueAnimInc)
                                {
                                    //console.log("HitHitHitHit");
                                    _this.Coin10.visible = false;
                                   
                                }
                         else if(_this.toCheckEqualNoG+1==_this.BlueAnimInc)
                             {
                                 //console.log("HitHi eLSE");
                                 _this.blueCoin.visible = false;
                                 _this.coinBoxBlue.animations.stop(null,null);
                                 _this.coinBoxBlue.frame = 2;
                                 _this.exchangeGreen.animations.add('Level1011_coinExchange',[0,3]);
                                 _this.exchangeGreen.animations.play('Level1011_coinExchange',5,true);
                                 _this.greenCoin.inputEnabled = true;
                                 _this.greenCoin.input.useHandCursor = true;
                             }
                        
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisB +=19;
                         _this.blueCoin.y =_this.yaxisB;
                         _this.blueCoin.x =_this.xaxisB;
                         _this.Coin10.frame--;
                         _this.LeverBlueNumber.frame++;
                         _this.BlueAnimInc++;
                         //_this.Coin10.visible = false;
                        if(_this.qArrays[_this.no1]>25){
                            if(_this.BlueAnimInc == _this.checkNumber2)
                                _this.Coin10.visible = false;
                        }
                         if(_this.BlueAnimInc ==_this.checkNumber2){
                             /*if(_this.Coin1.frame ==0 && _this.qArrays[_this.no1]>8)
                                    _this.Coin1.visible  = false;*/
                             
                             _this.greenCoin.inputEnabled = true;
                             _this.greenCoin.input.useHandCursor = true;
                             _this.coinBoxBlue.animations.stop(null,null);
                             _this.coinBoxBlue.frame = 2;
                             _this.coinBoxGreen.animations.add('Level1011_coinDecrease',[0,3]);
                            _this.coinBoxGreen.animations.play('Level1011_coinDecrease',5,true);
                         }
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                    }
                }
                    else if(_this.checkOverlap(target,_this.coinBoxGreen) && (target.name == "GreenCoin")&& (_this.GreenLevelEnable == true)){
                     //console.log("Hit");
                    if(_this.GreenAnimInc<_this.checkNumber3){
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisG +=19;
                         _this.greenCoin.y =_this.yaxisG;
                         _this.greenCoin.x =_this.xaxisG;
                         _this.Coin100.frame--;
                         _this.LeverGreenNumber.frame++;
                         _this.GreenAnimInc++;
                         //_this.Coin10.visible = false;
                        if(_this.qArrays[_this.no1]>25){
                            if(_this.GreenAnimInc == _this.checkNumber3)
                                _this.Coin100.visible = false;
                        }
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                    }
                }
                else if(_this.checkOverlap(target,_this.exchangeBlue) && (target.name == "BlueCoin")){
                     //console.log("Hit");
                    if(_this.BlueAnimIncEx<_this.checkNumberEX){
                        
                        _this.blueCoin.visible = true;
    
                         _this.blueCoin.inputEnabled = false;
                        _this.exchangeBlue.animations.stop(null,null);
                         _this.exchangeBlue.frame = 0;
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisB +=18.5;
                        _this.blueCoin.y =_this.yaxisB;
                        _this.blueCoin.x =_this.xaxisB;
                         _this.Coin10.frame--;
                        // _this.Coin10.visible = false;
                        _this.BlueAnimIncEx++;
                         _this.firstTimeIn = true;
                         _this.timerForAnim = _this.time.create(false);
                         _this.timerForAnim.loop(400, function(){
                        _this.Levercoin1.visible = true;
                        _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                        _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                         _this.Levercoin1.animations.play('Level321_coin1Anim',200);
                        
                       
                        _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
                              _this.Levercoin1.visible = false;
                                //console.log("ininin")
                               _this.animArrayCoin1.pop(); 
                               _this.animArrayCoin1.pop();
                               _this.animArrayCoin1.pop();
                             _this.Coin1.visible =true;
                            if( _this.firstTimeIn){
                               _this.Coin1.frame = 0;
                                 _this.firstTimeIn = false
                            }
                            else{
                                _this.Coin1.frame++;
                            }
                            if( _this.Coin1.frame == 9 ){
                                _this.blueLevelEnable = true;
                                _this.timerForAnim.stop();
                                _this.Coin1.frame--;
                                _this.yellowCoin.visible = true;
                                 
                                _this.yellowCoin.y =_this.yaxisY = 225;
                                 _this.yellowCoin.x =507.5;
                                _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
                                _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
                            }
                        }, _this);
                               }, this);
                         _this.timerForAnim.start();
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                }
             }
                else if(_this.checkOverlap(target,_this.exchangeGreen) && (target.name == "GreenCoin")){
                     //console.log("Hit");
                    if(_this.GreenAnimIncEx<_this.checkNumberEXG){
                        
                        _this.greenCoin.visible = true;
    
                         _this.greenCoin.inputEnabled = false;
                        _this.exchangeGreen.animations.stop(null,null);
                         _this.exchangeGreen.frame = 0;
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisG +=18.5;
                        _this.greenCoin.y =_this.yaxisG;
                        _this.greenCoin.x =_this.xaxisG;
                         _this.Coin100.frame--;
                        // _this.Coin10.visible = false;
                        _this.GreenAnimIncEx++;
                         _this.firstTimeInG = true;
                         _this.timerForAnimG = _this.time.create(false);
                         _this.timerForAnimG.loop(400, function(){
                        _this.Levercoin10.visible = true;
                        _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                        _this.Levercoin10.animations.add('Level321_coin10Anim',_this.animArrayCoin10);
                         _this.Levercoin10.animations.play('Level321_coin10Anim',200);
                        
                       
                        _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
                              _this.Levercoin10.visible = false;
                                //console.log("ininin")
                               _this.animArrayCoin10.pop(); 
                               _this.animArrayCoin10.pop();
                               _this.animArrayCoin10.pop();
                             _this.Coin10.visible =true;
                            if( _this.firstTimeInG){
                               _this.Coin10.frame = 0;
                                 _this.firstTimeInG = false
                            }
                            else{
                                _this.Coin10.frame++;
                            }
                            if( _this.Coin10.frame == 9 ){
                                _this.GreenLevelEnable = true;
                                _this.timerForAnimG.stop();
                                _this.Coin10.frame--;
                                _this.blueCoin.visible = true;
                                 
                                _this.blueCoin.y =_this.yaxisB = 225;
                                _this.blueCoin.x =348;
                                _this.coinBoxBlue.animations.add('Level1011_coinDecrease',[0,2]);
                                _this.coinBoxBlue.animations.play('Level1011_coinDecrease',5,true);
                                
                                _this.blueCoin.inputEnabled = true;
                                _this.blueCoin.input.useHandCursor = true;
                            }
                        }, _this);
                               }, this);
                         _this.timerForAnimG.start();
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                }
             }
          else{
                target.x = _this.vx;   
                target.y = _this.vy;
            }
            target.events.onDragStop.removeAll(); 
                
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc + _this.GreenAnimInc))
        {
            if( _this.toCheckNumberPad)
            {
                _this.coinBoxYellow.animations.stop(null,null);
                 _this.coinBoxYellow.frame = 1;
                //console.log("im here hre hre");
                _this.addNumberPad();
                _this.numBox2.frame = 1;
                _this.numBox2Pressed = true;
                _this.toCheckNumberPad = false;
                _this.displayNopad = true;
                
                 _this.coinBoxGreen.animations.stop(null,null);
                 _this.coinBoxGreen.frame = 3;
				 
				   _this.numBox1.inputEnabled = true;
                   _this.numBox1.input.useHandCursor = true;
                   _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox2.inputEnabled = true;
                   _this.numBox2.input.useHandCursor = true;
                   _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox3.inputEnabled = true;
                   _this.numBox3.input.useHandCursor = true;
                   _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
            }
        }
                
         },_this);
 },
 
 numberBoxClicked:function(target){
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        if(target.name == "numBox1")
        {
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.numBox2Pressed = false;
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
            _this.addNumberPad();
        }
    }, 
checkOverlap:function(spriteA, spriteB) 
{

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
       // _this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'Level321_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
                _this.eraser.frame = 1;
                if(_this.numBox1Pressed){
                    _this.numBox1Pressed =  true;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  false;
                    _this.numBoxNum1.visible = false;
                    _this.numBox1.frame = 1;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.selectedAns1="";
                }
                else if(_this.numBox2Pressed){
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  true;
                    _this.numBox3Pressed =  false;
                    _this.numBoxNum2.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.selectedAns2="";
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  true;
                    _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.selectedAns3="";
                }
             _this.selectedAns = "";
               /* _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;*/
                    _this.toCheckNumberPad = false;
             _this.time.events.add(500, function(){ _this.eraser.frame = 0;}, _this);
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){

             _this.noofAttempts++;


            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.rightbtn.frame = 1;
             _this.selectedAns = ""+_this.selectedAns3+_this.selectedAns1+_this.selectedAns2;
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns ||"0"+_this.selectedAns == _this.rightAns)  
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
                     _this.yellowCoin.visible = false;
                     _this.blueCoin.visible = false;
                     _this.greenCoin.visible = false;
                     _this.Coin1.visible = true;
                     if(_this.qArrays[_this.no1]>25){
                         _this.Coin10.visible = true;
                         _this.Coin10.frame =_this.Coin10.frame+10 ;
                         _this.Coin1.frame =_this.Coin1.frame+11;
                     }
                    else{
                        _this.Coin1.frame =_this.Coin1.frame+11;
                        _this.Coin10.frame =_this.Coin10.frame+11 ;
                        _this.Coin100.frame =_this.Coin100.frame+11 ;
                    }
           
                    _this.numBox1.inputEnabled = false;
                    _this.numBox2.inputEnabled = false;
                    _this.numBox3.inputEnabled = false;
					
                    _this.numBox1.frame = 1;
                    _this.numBox2.frame = 1;
                    _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                     
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
                    _this.rightbtn.frame = 1;
                    _this.blueLevelEnable = false;
                    _this.GreenLevelEnable = false;
                    //_this.blueCoin.inputEnabled = false;
                    _this.numBox3.frame = 0;
                    _this.numBox1.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.Coin1.visible = false;
                    
                        _this.Coin10.visible = true;
                        _this.Coin10.frame = 0;
                        _this.blueCoin.visible = true;
                     
                
                    _this.yellowCoin.visible = false;
                    /*_this.Coin10.frame = _this.wCoin10;
                    _this.Coin1.frame = _this.wCoin;*/
                    _this.BlueAnimInc = 0;
                    _this.BlueAnimIncEx = 0;
                    _this.GreenAnimIncEx = 0;
                    _this.GreenAnimInc = 0;
                    _this.YellowAnimInc = 0;
                    _this.numGroup.destroy();
                   
                        //console.log("_this.wCoin1 "+_this.wCoin1);
                         _this.Coin1.visible = true;
                         _this.Coin1.frame = _this.wCoin1;
                         _this.Coin10.frame = _this.wCoin10;
                         _this.Coin100.frame = _this.wCoin100;
                        _this.yellowCoin.visible = true;
                          _this.yaxisYCopy = _this.yaxisYCopyCopy;
                          _this.yaxisY = _this.yaxisYCopy;
                          _this.xaxisY = _this.xaxisYCopy;
                    
                          _this.yaxisB = _this.yaxisBCopy;
                          _this.xaxisB = _this.xaxisBCopy;
                          _this.yaxisG = _this.yaxisGCopy;
                          _this.xaxisG = _this.xaxisGCopy;
                          _this.Coin10.visible = true;
                          _this.Coin100.visible = true;
                         _this.blueCoin.inputEnabled = false;
                         _this.greenCoin.inputEnabled = false;
                    _this.LeverBlueNumber.frame= 0;
                    _this.LeverYellowNumber.frame= 0;       
                    _this.LeverGreenNumber.frame= 0;       

                    _this.yellowCoin.y = _this.yaxisY;
                    _this.yellowCoin.x = _this.xaxisY;
                    _this.blueCoin.y =  _this.yaxisB;
                    _this.blueCoin.x = _this.xaxisB;
                    _this.greenCoin.y =  _this.yaxisG;
                    _this.greenCoin.x = _this.xaxisG;
                    
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.toCheckNumberPad = true;
                    
                    _this.shake.shake(10, _this.shakeGroup);
                    _this.selectedAns =  "";
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.waudio = _this.add.audio('waudio');
                    _this.waudio.play();
                     _this.numBoxNum1.visible = false;
                     _this.numBoxNum2.visible = false;
                     _this.numBoxNum3.visible = false;
					 
					  _this.numBox1.inputEnabled = false;
                    _this.numBox2.inputEnabled = false;
                    _this.numBox3.inputEnabled = false;
                    
                         _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
                        _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
                    
                       _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
                       _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
                    /*if(_this.qArrays[_this.no1]>18)
                        _this.blueCoin.visible = true;*/
                     if(_this.qArrays[_this.no1]>25)
                            _this.Coin1.visible  = true;
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
             
             _this.numBox1.frame = 0;
             _this.numBox3.frame = 1;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = true;
             _this.numBox1Pressed = false;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
 
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
        else if(_this.numBox3Pressed)
             {
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
             }
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         //console.log("2 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("2 "+this.numBox3Pressed);
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
    
    removeEverthing:function() 
    {
         _this.no1++;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
            _this.toCheckEqualNo = 0;
            _this.blueLevelEnable = false;
                 _this.sceneCount++;
            _this.LeverYellowNumber.frame = 0;
            _this.LeverBlueNumber.frame = 0;
            _this.LeverGreenNumber.frame = 0;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.numBox1Pressed = false;
            _this.BlueAnimInc = 0;
            _this.BlueAnimIncEx = 0;
            _this.GreenAnimIncEx = 0;
            _this.GreenAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.checkNumberEX = 0;
            _this.checkNumberEXG = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.Coin100.destroy();
            _this.yellowCoin.destroy();
            _this.blueCoin.destroy();
            _this.greenCoin.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.selectedAns = " ";
            _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity10_2_3Score');
        }
    },
    
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
          
            
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
      // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
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
        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();_this.getQuestion();},_this);
	},
      
    update:function(){

    },
    
    getVoice:function(){
        ////console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
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
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 10.2.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.2.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.2.3.mp3");
                        }
						else if(window.languageSelected == "Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/10.1.3.mp3");
						}
						else if(window.languageSelected=="Marathi")
          {
           _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/10.2.3.mp3");
         }
		 else if(window.languageSelected=="Telugu")
          {
           _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/10.2.3.mp3");
         }
		 else if(window.languageSelected=="Tamil")
          {
           _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/10.2.3.mp3");
         }
		 else if(window.languageSelected=="Urdu")
          {
           _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/10.2.3.mp3");
         }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/10.2.3.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }
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
            
        },

      shutdown:function()
        {
            _this.stopVoice();
        }
};