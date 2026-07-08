Game.addition_NOAG_2_1level1=function(){};




Game.addition_NOAG_2_1level1.prototype={


 init:function(param,score)
 {
  _this = this;

  _this.gameid = "7.1.1";
  this.Stararr = param;
  this.score = score;
	if(window.quizQuest == false)
		this.score =parseInt(window.score);


        

        telInitializer2.gameIdInit2("NOAG2.1");
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

       _this.shake = new Phaser.Plugin.Shake(game);
       game.plugins.add( _this.shake);

       //telInitializer.gameIdInit("CoinMachine7_1_1",gradeSelected);
        this.video = this.add.video('demo');
        this.video.play(false);
        this.video.changeSource(window.baseUrl+"assets/demoVideos/7_1_1.mp4");
        _this.something =  this.video.addToWorld();
        
        this.video.playbackRate = 0.7;
        _this.time.events.add(500, function(){
          _this.playDemoVideos('7_1_1a');
          _this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
          _this.skipDemos.inputEnabled = true;
          _this.skipDemos.events.onInputDown.add(function(){
            _this.skipDemos.destroy();
            this.stopVoice();
            this.video.stop(false);
            _this.time.events.removeAll();
            _this.something.destroy();
                    //this.video.destroy();
                    this.video.onComplete.removeAll();
                    _this.create1();

                  },_this);
            /*_this.time.events.add(6000, function(){
                _this.playDemoVideos('7_1_1b');
            },_this);
            _this.time.events.add(12500, function(){
                _this.playDemoVideos('7_1_1c');
              },_this);*/
            },_this);
        
        this.video.onComplete.add(function(){
          _this.skipDemos.destroy();
          _this.something.destroy();
               //this.video.destroy();

               _this.create1();
               this.video.onComplete.removeAll();
             },this);
     },

     create1:function(game){

      _this.amplify = null;
      _this.Stararr = [];
      _this.YellowAnimInc = 0;
      _this.GreenAnimInc = 0;
      _this.counts=0;
      _this.BlueAnimInc = 0;
      _this.noofAttempts=0;
      _this.AnsTimerCount=0;   
      _this.sceneCount=1;
      _this.seconds = 0;
      _this.minutes = 0;
      _this.total=0;
      _this.counterForTimer = 0;
      _this.selectedAns = "";
      _this.selectedAns1 = "";
      _this.selectedAns2 = "";
      _this.selectedAns3 = "";
      _this.rightAns = "";
      randarr = new Array();
      yellowCoinArray = new Array();
      _this.toDisplayNoPad = 0;
      _this.displayNopad = false;
      _this.toCheckNumberPad = false;
      _this.no1=0;
      _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      _this.qArrays = _this.shuffle( _this.qArrays);
      _this.displayNumber1 = 0
      _this.displayNumber2 = 0
      _this.animArraylength = 9;
      _this.count=0;
      _this.count1=0;
		 //_this.shake = new Phaser.Plugin.Shake(game);
		// game.plugins.add( _this.shake);

    _this.physics.startSystem(Phaser.Physics.ARCADE);
    _this.physics.setBoundsToWorld();

    _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level721_bg1');

    if(window.languageSelected == "English")
    {
     _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/English/Game 7.1.1.mp3";
   }
   else if(window.languageSelected == "Hindi")
   {
    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Hindi/Game 7.1.1.mp3";
  }
  else if(window.languageSelected=="Kannada")
  {
    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Kannada/Game 7.1.1.mp3";
  }
  else if(window.languageSelected=="Gujarati")
  {
   _this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2.1/7.1.1.mp3";
 }
 else if(window.languageSelected=="Marathi")
            {
                _this.soundurl = window.baseUrl+"questionSounds/3.2.1/Marathi/7.1.1.mp3";
            }
			else if(window.languageSelected=="Telugu")
            {
                _this.soundurl = window.baseUrl+"questionSounds/3.2.1/Telugu/7.1.1.mp3";
            }
			else if(window.languageSelected=="Tamil")
            {
                _this.soundurl = window.baseUrl+"questionSounds/3.2.1/Tamil/7.1.1.mp3";
            }
			else if(window.languageSelected=="Urdu")
            {
                _this.soundurl = window.baseUrl+"questionSounds/3.2.1/Urdu/7.1.1.mp3";
            }
 else
 {
  _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Odiya/7.1.1.mp3";
                   // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                 }
                 commonNavBar.addNavBar(this,_this.soundurl,"numberoperation1");
                 commonNavBar.addTimerToTheGame(this,0,0,0);
                 commonNavBar.startTimer(this);
                 commonNavBar.addScore(this,this.score);
                 this.hintparams=['NOAG21','level1',false,false,true,1];
                 commonNavBar.addHint(this,this.hintparams);


                 _this.coinPannel = _this.add.sprite(73,50,'Level721_coinMachinePannel1');
        //_this.Pannel = _this.add.sprite(628,105,'Level721_pannel1');
        _this.Pannel = _this.add.sprite(628,105,'Level721_pannel1');
        
        _this.LeverGreen = _this.add.sprite(140,60,'Level721_LeverGreen');
        _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(300,60,'Level721_LeverBlue');
        _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(465,60,'Level721_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
        _this.Levercoin1 = _this.add.sprite(485,160,'Level721_coin1Anim');
        _this.Levercoin1.visible = false;


        _this.Level721_OneToHundred1 = _this.add.sprite(152,63,'Level721_OneToHundred');
        _this.Level721_OneToHundred10 = _this.add.sprite(315,63,'Level721_OneToHundred');
        _this.Level721_OneToHundred10.frame = 1;
        _this.Level721_OneToHundred100 = _this.add.sprite(478,63,'Level721_OneToHundred');
        _this.Level721_OneToHundred100.frame = 2;

        _this.Level721_OneToHundredE1 = _this.add.sprite(665,95,'Level721_OneToHundred');
        _this.Level721_OneToHundredE10 = _this.add.sprite(735,95,'Level721_OneToHundred');
        _this.Level721_OneToHundredE10.frame = 1;
        _this.Level721_OneToHundredE100 = _this.add.sprite(810,95,'Level721_OneToHundred');
        _this.Level721_OneToHundredE100.frame = 2;
        
        
        _this.LeverBlueNumber = _this.add.sprite(152,83,'Level721_numberSmall');
        _this.LeverBlueNumber.frame = 1;
        _this.LeverGreenNumber = _this.add.sprite(315,83,'Level721_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverYellowNumber = _this.add.sprite(478,83,'Level721_numberSmall');
        _this.LeverYellowNumber.frame = 1;
        
        _this.shakeGroup = _this.add.group();
        _this.numBox1 = _this.add.sprite(652,278,'Level721_numberBox');
        _this.numBox1.name = "numBox1";
        _this.numBox2 = _this.add.sprite(723,278,'Level721_numberBox');
        _this.numBox2.name = "numBox2";
        _this.numBox3 = _this.add.sprite(792,278,'Level721_numberBox');
        _this.numBox3.name = "numBox3";
        //_this.shakeGroup.add(_this.numBox1);
        //_this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        
        
        _this.askNumber1 = _this.add.sprite(795,120,'Level721_numberSmall');
         //_this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(1.3,1.3);


         _this.askNumber2 = _this.add.sprite(795,190,'Level721_numberSmall');
        //_this.askNumber2.frame = 1;
        _this.askNumber2.scale.setTo(1.3,1.3);

        _this.numBoxNum1 = _this.add.sprite(665,280,'Level721_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(1,1);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(728,280,'Level721_numberSmall');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.scale.setTo(1,1);
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(803,280,'Level721_numberSmall');
        _this.numBox3Pressed = false;
        _this.numBoxNum3.scale.setTo(1,1);
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
        _this.coinDisplay();
        
        //_this.plusSign = _this.add.sprite(610,200,'Level721_plusSign');
        _this.plusSign = _this.add.sprite(610,200,'Level721_plusSign');
        
        _this.generateStarsForTheScene(9);
        //  _this.no1++;
       // _this.getVoice();
       _this.getQuestion();
     },

     coinDisplay:function(){
       _this.yellowcoin=this.add.sprite(475,210,'Level721_Coin1');
       _this.Coin1 = _this.add.sprite(0,0,'Level721_Coin1');
       _this.yellowcoin.visible=true;
       _this.Coin1.visible = false;
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
      //_this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function(target)
    {  //console.log("get Question "+_this.no1);

      commonNavBar.enableHintIcon();

    _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


       // _this.timer = _this.time.create(false);
       _this.displayNopad = true;
       _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
       /*   _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
          /**************************************************************************/ 
        /*_this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                _this.AnsTimerCount++;
                  _this.updateTimer();
		      }, _this);
          _this.timer1.start();*/
          /**************************************************************************/ 

        /*_this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
     
                  _this.yellowcoin.destroy();
                  _this.Coin1.destroy();*/
                   // _this.numGroup.destroy();
        ////console.log(" _this.no1"+ _this.no1);
         //_this.no1 = 1;
         switch( _this.qArrays[_this.no1])      
         {

          case 1: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 5;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 6;
          },this);
          _this.displayNumber2 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =4;
          },this);
          _this.toDisplayNoPad = 7; 
          _this.rightAns = 8;
          break;
          case 2: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 4;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 5;
          },this);
          _this.displayNumber2 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =4;
          },this);
          _this.toDisplayNoPad = 9;
          _this.rightAns = 7;
          break;
          case 3: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 4;
          },this);
          _this.displayNumber2 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =3;
          },this);
          _this.toDisplayNoPad = 9;
          _this.rightAns = 5;
          break;
          case 4: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 2;
          },this);
          _this.displayNumber2 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =4;
          },this);
          _this.toDisplayNoPad = 8;
          _this.rightAns = 4;
          break;
          case 5: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 2;
          },this);
          _this.displayNumber2 = 5;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =6;
          },this);
          _this.toDisplayNoPad = 8;
          _this.rightAns = 6;
          break;
          case 6: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 2;
          },this);
          _this.displayNumber2 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =2;
          },this);
          _this.toDisplayNoPad = 8;
          _this.rightAns = 2;
          break;
          case 7: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 5;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 6;
          },this);
          _this.displayNumber2 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =3;
          },this);
          _this.toDisplayNoPad = 9;
          _this.rightAns = 7;
          break;
          case 8: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 6;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 7;
          },this);
          _this.displayNumber2 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =2;
          },this);
          _this.toDisplayNoPad = 10;
          _this.rightAns = 7;
          break;
          case 9: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 5;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 6;
          },this);
          _this.displayNumber2 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =2;
          },this);
          _this.toDisplayNoPad = 5;
          _this.rightAns = 6;
          break;
          case 10: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 4;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 5;
          },this);
          _this.displayNumber2 = 1;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =2;
          },this);
          _this.toDisplayNoPad = 2;
          _this.rightAns = 5;
          break;
          case 11: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 3;
          },this);
          _this.displayNumber2 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =3;
          },this);
          _this.toDisplayNoPad = 6;
          _this.rightAns = 4;
          break;
          case 12: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 3;
          },this);
          _this.displayNumber2 = 6;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =7;
          },this);
          _this.toDisplayNoPad = 13;
          _this.rightAns = 8;
          break; 
          case 13: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 4;
          },this);
          _this.displayNumber2 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =4;
          },this);
          _this.toDisplayNoPad = 8;
          _this.rightAns = 6;
          break; 
          case 14: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 3;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 4;
          },this);
          _this.displayNumber2 = 4;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =5;
          },this);
          _this.toDisplayNoPad = 11;
          _this.rightAns = 7;
          break;
          case 15: _this.questionid = 1;
          _this.inputDownFunctionForLeverAndBox();
          _this.displayNumber1 = 4;
          _this.time.events.add(500, function(){
            _this.askNumber1.frame = 5;
          },this);
          _this.displayNumber2 = 2;
          _this.time.events.add(500, function(){
            _this.askNumber2.frame =3;
          },this);
          _this.toDisplayNoPad = 7;
          _this.rightAns = 6;
          break;

        }
     //console.log("no1"+_this.no1);
     _this.assign1=_this.displayNumber1-1;
     _this.assign=_this.displayNumber2-1;
     //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
     _this.addYellowCoins();
     telInitializer2.gameQuestionStart(this,_this.questionid);
   },
   inputDownFunctionForLeverAndBox :function(){

    _this.Coin1 = _this.add.sprite(475,210,'Level721_Coin1');
    _this.Coin1.visible = false;
      //_this.Coin1.frame=7;
      
      _this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
      _this.LeverYellow.animations.add('Level721_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
      _this.LeverYellow.animations.play('Level721_LeverYellow',2,true);
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);

       /*_this.LeverBlue.inputEnabled = true;
       _this.LeverBlue.input.useHandCursor = true;
       _this.LeverBlue.events.onInputDown.add(_this.leve1Clicked,_this); 
     
       _this.LeverGreen.inputEnabled = true;
       _this.LeverGreen.input.useHandCursor = true;
       _this.LeverGreen.events.onInputDown.add(_this.leve1Clicked,_this);
       */
/*       _this.numBox1.inputEnabled = true;
       _this.numBox1.input.useHandCursor = true;
       _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox2.inputEnabled = true;
       _this.numBox2.input.useHandCursor = true;
       _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox3.inputEnabled = true;
       _this.numBox3.input.useHandCursor = true;
       _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);*/
     },

     gotoFirstQuestion:function(){


       _this.questionid = "7.1_1#SCR-"+_this.sceneCount;
       _this.inputDownFunctionForLeverAndBox();
       _this.displayNumber1 = 6;
       _this.askNumber1.frame = 7;
       _this.displayNumber2 = 3;
       _this.askNumber2.frame =4;
       _this.rightAns = 603;
     },    

     numberBoxClicked:function(target){

        //_this.clickSound = _this.add.audio('ClickSound');
        //_this.clickSound.play();
        
        commonNavBar.playClickSound();

        _this.numBox3Pressed = true;

        _this.numBox3.frame = 1;
        

        
        if( _this.toCheckNumberPad)
        {
         _this.toCheckNumberPad = false;
            //_this.addNumberPad();
          }
        },


        leve1Clicked:function(target,frame){

         ////console.log("Im Clicked "+target.name);
         if(target.name == "LeverYellow"){

          if(_this.YellowAnimInc<_this.displayNumber2){
            _this.LeverYellow.animations.add('Level721_LeverYellow',[0,1,2,3,4,5,0]);
            _this.LeverYellow.animations.play('Level721_LeverYellow');  
            commonNavBar.playCoinFallSound();
            _this.Levercoin1.visible = true;

            _this.Levercoin1.animations.add('Level721_coin1Anim',_this.animArrayCoin1);
            _this.Levercoin1.animations.play('Level721_coin1Anim');
            _this.Levercoin1.animations.currentAnim.onComplete.add(function () {

              _this.LeverYellow.animations.add('Level721_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
              _this.LeverYellow.animations.play('Level721_LeverYellow',2,true);

              _this.LeverYellowNumber.frame++;
              _this.Coin1.visible = true;


              if(_this.YellowAnimInc==(_this.assign))
              {
               _this.LeverYellow.animations.stop(null,true);
               _this.LeverYellow.frame = 0;
             }
             _this.Levercoin1.visible = false;
             _this.Coin1.frame =  _this.YellowAnimInc;
             _this.YellowAnimInc++;
             _this.Allnumbers();

             _this.animArrayCoin1.pop();

                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                   }, this);

          }
        }
        
        
        if(_this.YellowAnimInc==(_this.assign))
        {
         console.log("QQQQQQQQQQQQQQ");

         _this.addNumberPad();
         _this.numBox3.frame = 1;
         _this.numberBoxClicked();



       }



       if(  _this.toDisplayNoPad == ( _this.YellowAnimInc))
       {

         if( _this.toCheckNumberPad)
         {

          console.log("im here hre hre");
          _this.addNumberPad();
          _this.numBox2.frame = 1;
          _this.numBox2Pressed = true;
          _this.toCheckNumberPad = false;
        }
      }

    },
    Allnumbers:function(){
        //console.log("vami")
        if((Number(_this.assign1+1))==1)
        {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=190;
                          }
                          if((Number(_this.assign1+1))==2)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=171;
                          }
                          if((Number(_this.assign1+1))==3)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=152;
                          }
                          if((Number(_this.assign1+1))==4)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=133;
                          }
                          if((Number(_this.assign1+1))==5)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=114;
                          }
                          if((Number(_this.assign1+1))==6)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=95;
                          }
                          if((Number(_this.assign1+1))==7)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=82;
                          }
                          if((Number(_this.assign1+1))==8)
                          {

                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin1.x=475;
                            _this.Coin1.y=55;
                          }

                        },
                        addYellowCoins:function(){
     /*   yellowCoinArray=[1,2,3,4,5,6,7,8,9,10];
        
        for(f=0;f<Number(_this.assign1+1);f++)
        {
                    randarr.push(this.add.sprite(0,0,'Level721_Coin1'));
                   randarr.name="Level721_Coin1";
                   randarr[f].x=510;
                   randarr[f].y=210-(f*17);
        }
        */

        _this.yellowcoin.x=475;
        _this.yellowcoin.y=210;
        
        _this.numDisplay();

        ////console.log(randarr[randarr.length-1].x);
        ////console.log(randarr[randarr.length-1].y-17);
        //console.log("lengthx="+_this.yellowcoin.x);
        //console.log("lengthy="+_this.yellowcoin.y);
      },
      numDisplay:function(){
        //console.log("display coins");
        //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
     _this.coinDisplay();


     if((Number(_this.assign1+1))==1)
     {
      _this.yellowcoin.frame=0;
    }
    else if((Number(_this.assign1+1))==2)
    {
      _this.yellowcoin.frame=1;
    }
    else if((Number(_this.assign1+1))==3)
    {
      _this.yellowcoin.frame=2;
    }
    else if((Number(_this.assign1+1))==4)
    {
      _this.yellowcoin.frame=3;
    }
    else if((Number(_this.assign1+1))==5)
    {
      _this.yellowcoin.frame=4;
    }
    else if((Number(_this.assign1+1))==6)
    {
      _this.yellowcoin.frame=5;
    }
    else if((Number(_this.assign1+1))==7)
    {
      _this.yellowcoin.frame=6;
    }
    else if((Number(_this.assign1+1))==8)
    {
      _this.yellowcoin.frame=7;
    }
        /*this.yellowcoin=this.add.sprite(0,0,'Level721_Coin1');
                            _this.Coin1 = _this.add.sprite(0,0,'Level721_Coin1');
                            _this.yellowcoin.visible=false;
                            _this.Coin1.visible = false;*/




                          },
                          addNumberPad:function(){

                            _this.numBackground = this.add.sprite(480,505,'Level721_numBG');
                            _this.numBackground.anchor.setTo(0.5);
                            _this.numGroup = _this.add.group();
                            _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
          _this.numbg = _this.numGroup.create(_this.x,505,'Level721_NumberKey');  
          _this.numbg.scale.setTo(0.6,0.6);
          _this.numbg.anchor.setTo(0.5);
          if(i<9)
            _this.numbg.name = i+1;
          else
           _this.numbg.name = 0;
         _this.numbg.frame = i;

         _this.numTxt = this.add.text(-2,1,'');
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
          _this.eraser = _this.numGroup.create(_this.x+10,507,'Level721_erase');
          _this.eraser.anchor.setTo(0.5);
          _this.eraser.scale.setTo(1.2,1.2);
          _this.eraser.name = "eraser";
          _this.eraser.inputEnabled = false;
        //_this.eraser.input.useHandCursor = true;

        
        _this.rightbtn = _this.numGroup.create(_this.x+90,507,'Level721_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.2,1.2);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = false;
        //_this.rightbtn.input.useHandCursor = true;
        
        _this.eraser.events.onInputDown.add(function(){


          commonNavBar.playClickSound();

          _this.eraser.frame=1;

          _this.time.events.add(1000, function(){
            _this.eraser.frame=0;
          },_this);

          if(_this.numBox1Pressed){
            _this.numBoxNum1.visible = false;
          }
          else if(_this.numBox2Pressed){
            _this.numBoxNum2.visible = false;
          }
          else if(_this.numBox3Pressed)
          {
            _this.numBoxNum3.visible = false;
          }

          _this.selectedAns="";
          _this.selectedAns1="";
          _this.selectedAns2="";
          _this.selectedAns3="";

                  // _this.numBoxNum1.visible = false;
                  // _this.numBoxNum2.visible = false;
                  // _this.numBoxNum3.visible = false;

                  _this.numBox3.frame = 0;
                  _this.numBox3.frame = 1;
                  _this.numBox3Pressed = true;

                  _this.toCheckNumberPad = false;


                },this);
        
        _this.rightbtn.events.onInputDown.add(function(target){

          target.events.onInputDown.removeAll();
          
         _this.rightbtn.frame=1;
         _this.noofAttempts++;

            //_this.clickSound = _this.add.audio('ClickSound');
             //_this.clickSound.play();
             
             commonNavBar.playClickSound();
             commonNavBar.disableHintIcon();
             
             _this.time.events.add(1000, function(){
               _this.rightbtn.frame=0;
             },_this);
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
             if( _this.selectedAns== _this.rightAns)  
             {
              telInitializer2.gameCorrectAns();
              this.Stararr.push(3);
                    //console.log("correct");
                    
                      /*_this.currentTime = window.timeSaveFunc();
                        _this.interactEvent = 
                            { 
                                id_game_play: _this.savedVar, 
                                id_question: _this.questionid,  
                                date_time_event: _this.currentTime, 
                                event_type: "click", 
                                res_id: target.name, 
                                access_token: window.acctkn 
                              } */
                    //counts=1;
                    target.events.onInputDown.removeAll();
                    
                    commonNavBar.playCelebrationSound();
                    commonNavBar.stopVoice();
                    _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);

                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                     //_this.count1++;

                   // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                   _this.glowAnim();
                   _this.numBox3.frame = 1;
                   _this.numGroup.y = 00;
                   _this.tween1 = _this.add.tween(_this.numGroup);
                   _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                   _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                      if(window.quizQuest == true)
					{
						commonNavBar.updateScore(+5);
					}             
                 }
                 else
                 { 
                  telInitializer2.gameWrongAns();
                    //console.log("wrong");
                    _this.rightbtn.frame = 1;
                    commonNavBar.stopVoice();
                    commonNavBar.playWrongCelebrationSound();
                    _this.starsGroup.getChildAt(_this.count1).frame = 1;
                    _this.Stararr.push(1);
                    // _this.count1++
                    _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                    if(window.quizQuest == true)
						{
							commonNavBar.updateScore(-5);
						}
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

        glowAnim:function(){
        //_this.Coin1.visible = false;
       //_this.yellowcoin.destroy();
        //_this.Coin1.destroy();

        //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
     if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==1))
     {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=11;
                             }
                             if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==3))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                //console.log("glow");
                                _this.yellowcoin.frame=17;
                              }
                              if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==3))
                              {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=16;
                             }
                             if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==2))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=14;
                             }
                             if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==3))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=13;
                             }
                             if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==5))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=15;
                             }
                             if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==2))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=16;
                             }
                             if(((Number(_this.assign1+1))==6)&&((Number(_this.assign+1))==1))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=16;
                             }
                             if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==1))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=15;
                             }
                             if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==1))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=14;
                             }
                             if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==2))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=13;
                             }
                             if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==6))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=17;
                             }
                             if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==3))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=15;
                             }
                             if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==4))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=16;
                             }
                             if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==2))
                             {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                               _this.yellowcoin.frame=15;
                             }
                           },

                           numClicked:function(target){

           //console.log(target.name);
         //_this.clickSound = _this.add.audio('ClickSound');
         //_this.clickSound.play();
         
         commonNavBar.playClickSound();
         
         if(_this.numBox1Pressed){
           _this.numBoxNum1.visible = true;
           _this.selectedAns1 = target.name;
           _this.numBoxNum1.frame = target.name+1;

           _this.numBox1.frame = 0;
           _this.numBox3.frame = 1;
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

               _this.eraser.inputEnabled = true;
               _this.rightbtn.inputEnabled = true;

         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         

         
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
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      _this.no1++;
      _this.noofAttempts=0;
      _this.AnsTimerCount=0; 
        //console.log("index="+_this.qArrays);
        //qArrays[0]=randomno;
        _this.qArrays.splice(0,1);
        //console.log("index="+_this.qArrays);
        
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<4)
        {
            // _this.no1++;
            _this.wrong = true;
            ////console.log("here its");
            // _this.timer1.stop();
            _this.count =0;
            _this.sceneCount++;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
            _this.numBox3Pressed = false;
            _this.Levercoin1.visible = false;
            
            _this.LeverGreenNumber.frame = 1;
            _this.LeverYellowNumber.frame = 1;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.Coin1.destroy();
            
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
            _this.numBoxNum3.visible = false;

            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            
            _this.yellowcoin.destroy();
            
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
             if(window.quizQuest == true)
				{
					var timerStopVar = commonNavBar.stopTimer();
					commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
					commonNavBar.questionArray=null,
					commonNavBar.questionCount=null,
					commonNavBar.soundUrl=null,
					commonNavBar.speakerbtn=null,
					
					quizCommonFile.changeQuestions(this.Stararr,commonNavBar.getScore());
				}
				else
				{
					_this.getQuestion();
				}
            
          }
          else
          {
            _this.Coin1.destroy();
            _this.yellowcoin.destroy();
            
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.navBar = null;
            commonNavBar.backbtn = null;
            commonNavBar.mcIcon = null;
            commonNavBar.speakerbtn = null;
            //_this.state.start('unity7_1_1Score');
            
            this.videoLevel2 = this.add.video('demo');
            this.videoLevel2.play(false);
            this.videoLevel2.changeSource(window.baseUrl+"assets/demoVideos/7_2_1.mp4");
            _this.something1 =  this.videoLevel2.addToWorld();

            if(window.languageSelected == "Gujarati")
            {
              _this.time.events.add(500, function(){
                _this.playDemoVideos('7_2_1a');
                _this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
                _this.skipDemos.inputEnabled = true;
                _this.skipDemos.events.onInputDown.add(function(){
                 _this.skipDemos.destroy();
                 this.stopVoice();
                 this.videoLevel2.stop(false);
                 _this.time.events.removeAll();
                 _this.something1.destroy();
							   // this.videoLevel2.destroy();
                this.videoLevel2.onComplete.removeAll();


                _this.state.start('addition_NOAG_2_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
              },_this);
			  _this.time.events.add(17500, function(){
					_this.playDemoVideos('7_2_1b');
				},_this);
              },_this);
            }
            else
            {
              _this.time.events.add(500, function(){
				  if(window.languageSelected=="Marathi")
                            {
                                _this.playDemoVideos('7_2_1New');
                            }
				  else if(window.languageSelected=="Telugu")
                            {
                                _this.playDemoVideos('7_2_1New');
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.playDemoVideos('7_2_1New');
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.playDemoVideos('7_2_1New');
                            }
							else
                _this.playDemoVideos('7_2_1a');
                _this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
                _this.skipDemos.inputEnabled = true;
                _this.skipDemos.events.onInputDown.add(function(){
                 _this.skipDemos.destroy();
                 this.stopVoice();
                 this.videoLevel2.stop(false);
                 _this.time.events.removeAll();
                 _this.something1.destroy();
							   // this.videoLevel2.destroy();
                this.videoLevel2.onComplete.removeAll();


                _this.state.start('addition_NOAG_2_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
              },_this);
                if(window.languageSelected == "Marathi" || window.languageSelected == "Telugu" || window.languageSelected == "Tamil" || window.languageSelected == "Urdu")
				{
									//do nothing
									this.videoLevel2.playbackRate = 1.2;
								}
								else{
									_this.time.events.add(13000, function(){
										_this.playDemoVideos('7_2_1b');
									},_this);
								}
								},_this);

            }


            this.videoLevel2.onComplete.add(function(){
              _this.skipDemos.destroy();
              _this.something1.destroy();
               //this.videoLevel2.destroy();
               this.videoLevel2.onComplete.removeAll();
               _this.state.start('addition_NOAG_2_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
             },this);
            
          }
        },

        generateStarsForTheScene:function(count)
        {
         _this.starsGroup = _this.add.group();

         for (var i = 0; i < count; i++)
         {

          _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

          for(var j =0;j<i;j++)
          {
            if( _this.starsGroup.getChildAt(j))
            {
              _this.starsGroup.getChildAt(j).x-=10;
              _this.starsGroup.getChildAt(i).x+=10;
            }
          }
        }
        _this.starsGroup.getChildAt(0).frame = 2;
           if(window.quizQuest == true)
      {
          this.starsGroup.visible = false;
          
          this.quiztext = this.add.text(120,24, "\n"+window.quizText+"\n");
          this.quiztext.anchor.setTo(0.5);
          this.quiztext.align = 'center';
          this.quiztext.font = 'gradefont';
          this.quiztext.fontWeight = 'normal';
          this.quiztext.fontSize = 18;
          this.quiztext.fill = '#ADFF2F';
      }             
      },


      update:function(){

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
          case 15:if(window.languageSelected == "English")
          {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 7.1.1.mp3");
          }
          else if(window.languageSelected == "Hindi")
          {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 7.1.1.mp3");
          }
          else if(window.languageSelected=="Kannada")
          {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 7.1.1.mp3");
          }
		  else if(window.languageSelected=="Marathi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/7.1.1.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/7.1.1.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/7.1.1.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/7.1.1.mp3");
            }
          else
          {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/7.1.1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
          }
          break;
        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
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

 playDemoVideos:function(target){
  _this.playQuestionSound = document.createElement('audio');
  _this.src = document.createElement('source');
  switch(target)
  {
   case '7_1_1a': if(window.languageSelected == "English")
				   {
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.1.mp3");
				  }
				  else if(window.languageSelected == "Hindi")
				  {
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.1.mp3");
				  }
				  else if(window.languageSelected=="Kannada")
				  {
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.1.mp3");
				  }
				  else if(window.languageSelected == "Gujarati")
				  {
					_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/7.1.1.mp3");
				  }
				  else if(window.languageSelected=="Marathi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/7.1.1.mp3");
            }
			else if(window.languageSelected=="Telugu")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/7.1.1.mp3");
            }
			else if(window.languageSelected=="Tamil")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/7.1.1.mp3");
            }
			else if(window.languageSelected=="Urdu")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/7.1.1.mp3");
            }
				  else
				  {
					_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.1.mp3");
					_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
				  }
				  break;

  case '7_2_1a':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.1a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.1a.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.1a.mp3");
							}
							else if(window.languageSelected=="Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.2.1a.mp3");
							}
							else if(window.languageSelected=="Marathi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/7_2_1a.mp3");
							}
							else if(window.languageSelected=="Telugu")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/7_2_1a.mp3");
							}
							else if(window.languageSelected=="Tamil")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/7_2_1a.mp3");
							}
							else if(window.languageSelected=="Urdu")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/7_2_1a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.1a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
		    case '7_2_1b':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.1b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.1b.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.1b.mp3");
							}
							else if(window.languageSelected=="Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.2.1b.mp3");
							}
							else if(window.languageSelected=="Marathi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Marathi/7_2_1b.mp3");
							}
							else if(window.languageSelected=="Telugu")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Telugu/7_2_1b.mp3");
							}
							else if(window.languageSelected=="Tamil")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Tamil/7_2_1b.mp3");
							}
							else if(window.languageSelected=="Urdu")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Urdu/7_2_1b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.1b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_1New':  if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/7.2.1.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/7.2.1.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/7.2.1.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/7.2.1.mp3");
                            }
							break;

}
_this.playQuestionSound.appendChild(_this.src);
_this.playQuestionSound.play();
},

shutdown:function(){
  if(this.video)
  {
   this.video.destroy();
   this.video.removeVideoElement();
   this.video = null;
 }

 if(this.videoLevel2)
 {
   console.log("VVVVV Completed 3");
                //this.videoLevel2.destroy();
                //this.videoLevel2.removeVideoElement();
                this.videoLevel2 = null;
              }
              commonNavBar.stopVoice();
        /*
         delete _this.YellowAnimInc;
        delete _this.GreenAnimInc;
        delete _this.counts;
        delete _this.BlueAnimInc;
        delete _this.noofAttempts;
		delete _this.AnsTimerCount;   
        delete _this.sceneCount;
        delete _this.seconds;
        delete _this.minutes;
        delete _this.total;
        delete _this.counterForTimer;
        delete _this.selectedAns;
        delete _this.selectedAns1;
        delete _this.selectedAns2;
        delete _this.selectedAns3;
        delete _this.rightAns;
        delete randar;
        delete yellowCoinArray;
        delete _this.toDisplayNoPad;
        delete _this.displayNopad;
        delete _this.toCheckNumberPad;
         delete _this.no1;
         delete _this.qArrays;
        delete _this.displayNumber1;
        delete _this.displayNumber2;
        delete _this.animArraylength;
        delete _this.count;
        delete _this.count1;
        delete _this.shake;
        delete _this.bg1;
        delete _this.navBar;
        delete _this.timebg;
        delete _this.topicOutline;
        delete _this.practice;
        delete _this.timeDisplay;
        delete _this.backbtn;
        delete _this.speakerbtn;
        delete _this.clickSound;
        delete _this.coinPannel;
        delete _this.Pannel;
        delete _this.LeverGreen;
        delete _this.LeverBlue;
        delete _this.LeverYellow;
        delete _this.Levercoin1;
        delete _this.Level721_OneToHundred1;
        delete _this.Level721_OneToHundred10;
        delete _this.Level721_OneToHundred100;
        delete _this.LeverBlueNumber;
        delete _this.LeverGreenNumber;
        delete _this.LeverYellowNumber;
        delete _this.numBox1;
        delete _this.numBox2;
        delete _this.numBox3;
        delete _this.askNumber1;
        delete _this.askNumber2;
        delete _this.numBoxNum1;
        delete _this.numBoxNum2;
        delete _this.numBoxNum3;
        delete _this.plusSign;
        delete _this.animArrayCoin1;
        */


        
      }


    };